/* Trilha Livre · Python
   Roda o Python de verdade (CPython compilado para WebAssembly, o Pyodide) num Web Worker.
   O Pyodide só é baixado quando alguém roda código Python pela primeira vez; depois fica guardado no aparelho.
   Este arquivo também é carregado dentro do worker (js/py-worker.js) e pelo validador (Node), por isso
   não usa nada da página no nível de cima.
   SPDX-License-Identifier: AGPL-3.0-or-later · Copyright (C) 2026 Contribuidores do Trilha Livre */

const PY_VERSAO = '0.29.5';
const PY_URL = `https://cdn.jsdelivr.net/npm/pyodide@${PY_VERSAO}/`;
const PY_PRAZO = 5000; // ms de execução antes de parar o programa (laço infinito)

// Código Python que prepara a execução: captura o print, simula o input e acha a linha do erro.
const PY_PRELUDIO = String.raw`
import sys, io, ast, traceback

def _tl_novo_ns():
    return {'__name__': '__main__'}

def _tl_rodar(src, ns, repl=False, entrada=None):
    out = io.StringIO()
    fila = [str(x) for x in (entrada or [])]
    def _input(prompt=''):
        out.write(str(prompt))
        if repl:
            raise EOFError('no terminal do app, o input() não funciona: guarde o valor numa variável, como nome = "Ana"')
        if not fila:
            raise EOFError('o programa pediu mais uma entrada com input(), mas não há mais nenhuma')
        valor = fila.pop(0)
        out.write(valor + '\n')
        return valor
    ns['input'] = _input
    nome = '<terminal>' if repl else '<seu código>'
    velho_out, velho_err = sys.stdout, sys.stderr
    sys.stdout = sys.stderr = out
    erro = None
    mostrado = None
    try:
        arvore = ast.parse(src, nome, 'exec')
        ultimo = None
        if repl and arvore.body and isinstance(arvore.body[-1], ast.Expr):
            ultimo = ast.Expression(arvore.body.pop().value)
        exec(compile(arvore, nome, 'exec'), ns)
        if ultimo is not None:
            valor = eval(compile(ultimo, nome, 'eval'), ns)
            if valor is not None:
                mostrado = repr(valor)
    except SyntaxError as e:
        erro = f'{type(e).__name__}: {e.msg} (linha {e.lineno})'
    except SystemExit:
        pass
    except BaseException as e:
        linha = None
        for quadro in traceback.extract_tb(e.__traceback__):
            if quadro.filename == nome:
                linha = quadro.lineno
        erro = f'{type(e).__name__}: {e}' + (f' (linha {linha})' if linha else '')
    finally:
        sys.stdout, sys.stderr = velho_out, velho_err
    return out.getvalue(), erro, mostrado
`;

// Corpo do worker. Precisa ser independente: no modo de arquivo único (file://), vira um Blob.
function pyWorkerMain(cfg) {
  let py = null, ns = null;
  self.onmessage = async e => {
    const { id, code, repl, entrada, limpar } = e.data;
    try {
      if (!py) {
        importScripts(cfg.url + 'pyodide.js');
        py = await loadPyodide({ indexURL: cfg.url });
        py.runPython(cfg.preludio);
      }
    } catch (err) {
      self.postMessage({ id, falha: String((err && err.message) || err) });
      return;
    }
    self.postMessage({ id, pronto: true });
    if (limpar) ns = null;
    if (code == null) { self.postMessage({ id, out: '', err: null }); return; }
    try {
      if (repl && !ns) ns = py.globals.get('_tl_novo_ns')();
      const alvo = repl ? ns : py.globals.get('_tl_novo_ns')();
      const ent = py.toPy(entrada || []);
      const r = py.globals.get('_tl_rodar')(code, alvo, !!repl, ent);
      const [out, err, valor] = r.toJs();
      r.destroy(); ent.destroy();
      if (!repl) alvo.destroy();
      self.postMessage({ id, out, err: err || null, valor: valor == null ? null : valor });
    } catch (err) {
      self.postMessage({ id, out: '', err: 'Error: ' + String((err && err.message) || err) });
    }
  };
}

/* ---------- na página ---------- */
const PY = { w: null, pronto: false, id: 0, pend: null, fila: Promise.resolve(), arquivo: true };
function pyMatar() {
  if (PY.w) PY.w.terminate();
  PY.w = null; PY.pronto = false;
  if (PY.pend) { clearTimeout(PY.pend.t); PY.pend = null; }
}
function pyWorker() {
  if (PY.w) return PY.w;
  const cfg = { url: PY_URL, preludio: PY_PRELUDIO };
  let w = null;
  // um worker com arquivo próprio passa pelo service worker e funciona sem internet depois da primeira vez
  if (PY.arquivo && /^https?:$/.test(location.protocol)) { try { w = new Worker('js/py-worker.js'); } catch (e) { w = null; } }
  if (!w) w = new Worker(URL.createObjectURL(new Blob(['(' + pyWorkerMain.toString() + ')(' + JSON.stringify(cfg) + ')'], { type: 'text/javascript' })));
  w.onmessage = e => {
    const p = PY.pend, d = e.data;
    if (!p || d.id !== p.id) return;
    if (d.pronto) {
      PY.pronto = true;
      clearTimeout(p.t);
      p.t = setTimeout(() => { pyMatar(); p.res({ out: [], timeout: true }); }, PY_PRAZO);
      return;
    }
    clearTimeout(p.t); PY.pend = null;
    if (d.falha) { pyMatar(); p.res({ out: [], falha: d.falha }); return; }
    p.res({ out: d.out ? d.out.replace(/\n$/, '').split('\n') : [], err: d.err, valor: d.valor });
  };
  w.onerror = e => {
    if (e.preventDefault) e.preventDefault();
    const p = PY.pend;
    pyMatar();
    // o arquivo do worker não abriu (por exemplo, numa prévia): tenta de novo com o worker embutido
    if (PY.arquivo && p && !p.tentou) { PY.arquivo = false; p.tentou = true; enviarPy(p); return; }
    if (p) p.res({ out: [], falha: e.message || 'o worker não abriu' });
  };
  PY.w = w;
  return w;
}
function enviarPy(p) {
  let w;
  try { w = pyWorker(); } catch (e) { p.res({ out: [], falha: 'este navegador não abriu o Python' }); return; }
  PY.pend = p;
  // a primeira vez baixa o Python: dá até 90 segundos para isso
  p.t = setTimeout(() => { pyMatar(); p.res({ out: [], falha: 'o Python demorou demais para baixar' }); }, PY.pronto ? PY_PRAZO + 2000 : 90000);
  w.postMessage({ id: p.id, code: p.code, repl: p.repl, entrada: p.entrada, limpar: p.limpar });
}
// opts: { repl, entrada, limpar, aoCarregar } → { out: [linhas], err, valor (no terminal), timeout, falha }
function rodarPython(code, opts = {}) {
  const tarefa = () => new Promise(res => {
    if (!PY.pronto && opts.aoCarregar) opts.aoCarregar();
    enviarPy({ id: ++PY.id, code, repl: !!opts.repl, entrada: opts.entrada || [], limpar: !!opts.limpar, res });
  });
  const r = PY.fila.then(tarefa, tarefa);
  PY.fila = r.catch(() => {});
  return r;
}

/* ---------- destaque de sintaxe ---------- */
function hlPy(src) {
  const re = /(#[^\n]*)|([rRbBfF]{0,2}(?:"""[\s\S]*?"""|'''[\s\S]*?'''|"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'))|\b(def|return|if|elif|else|for|while|in|not|and|or|is|True|False|None|import|from|as|class|try|except|finally|raise|with|lambda|pass|break|continue|global|del|yield|assert)\b|\b(\d+(?:\.\d+)?(?:e-?\d+)?)\b|\b(print|input|len|range|int|float|str|list|dict|set|tuple|bool|sum|min|max|round|abs|sorted|enumerate|zip|open|type|map|filter|isinstance)\b(?=\s*\()/g;
  let out = '', i = 0, m;
  while ((m = re.exec(src))) {
    out += esc(src.slice(i, m.index));
    const cls = m[1] ? 'c' : m[2] ? 's' : m[3] ? 'k' : m[4] ? 'n' : 'f';
    out += `<span class="t-${cls}">${esc(m[0])}</span>`;
    i = re.lastIndex;
  }
  return out + esc(src.slice(i));
}

/* ---------- erros do Python explicados em português ---------- */
function traduzPy(err) {
  const s = String(err || '');
  const linha = (/\(linha (\d+)\)$/.exec(s) || [])[1];
  const naLinha = linha ? ` (linha ${linha})` : '';
  let m;
  if (/^IndentationError/.test(s) || /^TabError/.test(s)) return `Erro de recuo${naLinha}: em Python, os espaços no começo da linha fazem parte do código. Depois de uma linha que termina com dois-pontos, as linhas do bloco levam 4 espaços a mais, todas iguais.\n${s}`;
  if (/^SyntaxError/.test(s)) {
    let dica = 'confira os dois-pontos no fim do if, for, while e def, os parênteses e as aspas.';
    if (/expected ':'/.test(s)) dica = 'faltaram os dois-pontos no fim da linha do if, elif, else, for, while ou def.';
    else if (/never closed|unterminated string|EOL while scanning/.test(s)) dica = 'tem parêntese, colchete ou aspas que abriu e não fechou.';
    else if (/Maybe you meant '==' /.test(s) || /cannot assign to/.test(s)) dica = 'para comparar, use == (dois iguais). Um = só guarda um valor numa variável.';
    else if (/forgot a comma/.test(s)) dica = 'parece que faltou uma vírgula entre dois valores.';
    return `Erro de escrita (sintaxe)${naLinha}: ${dica}\n${s}`;
  }
  if ((m = /^NameError: name '([^']+)' is not defined/.exec(s))) return `Erro${naLinha}: "${m[1]}" não existe. Você criou essa variável ou função antes de usar? Confira maiúsculas e minúsculas, e se era um texto, faltaram as aspas.`;
  if (/^TypeError: can only concatenate str/.test(s) || /^TypeError: unsupported operand type\(s\) for \+: 'int' and 'str'/.test(s)) return `Erro de tipo${naLinha}: você tentou juntar texto com número usando +. Converta o número com str() ou use uma f-string, como f"Idade: {idade}".`;
  if (/^TypeError: '(<|>|<=|>=)' not supported between instances of 'str' and '(int|float)'/.test(s) || /^TypeError: '(<|>|<=|>=)' not supported between instances of '(int|float)' and 'str'/.test(s)) return `Erro de tipo${naLinha}: você comparou um texto com um número. O input() sempre devolve texto: use int() ou float() para converter.`;
  if (/^TypeError: .* missing \d+ required positional argument/.test(s)) return `Erro${naLinha}: a função foi chamada com menos valores do que ela pede.\n${s}`;
  if (/^TypeError: .* takes \d+ positional arguments? but \d+ (were|was) given/.test(s)) return `Erro${naLinha}: a função foi chamada com mais valores do que ela aceita.\n${s}`;
  if (/^TypeError: '(\w+)' object is not callable/.test(s)) return `Erro${naLinha}: você usou parênteses depois de algo que não é uma função. Será que deu a uma variável o mesmo nome de uma função, como print ou input?\n${s}`;
  if (/^TypeError/.test(s)) return `Erro de tipo${naLinha}: um valor foi usado do jeito errado, como fazer conta com texto.\n${s}`;
  if (/^ValueError: invalid literal for int\(\)/.test(s) || /^ValueError: could not convert string to float/.test(s)) return `Erro de valor${naLinha}: o texto não pôde virar número. Confira se tem letras, espaços ou vírgula no lugar do ponto.\n${s}`;
  if (/^ZeroDivisionError/.test(s)) return `Erro${naLinha}: divisão por zero. Confira se o divisor pode ser zero antes de dividir.`;
  if (/^IndexError/.test(s)) return `Erro${naLinha}: você pediu uma posição que não existe. Lembre que a primeira posição é 0 e a última é len(lista) - 1.`;
  if ((m = /^KeyError: (.+?)(?: \(linha \d+\))?$/.exec(s))) return `Erro${naLinha}: a chave ${m[1]} não existe no dicionário. Use .get() se ela puder faltar.`;
  if ((m = /^AttributeError: '(\w+)' object has no attribute '(\w+)'/.exec(s))) return `Erro${naLinha}: valores do tipo ${m[1]} não têm "${m[2]}". Confira o nome, maiúsculas e minúsculas e o tipo do valor.`;
  if (/^RecursionError/.test(s)) return `Erro${naLinha}: a função chamou a si mesma vezes demais. Será que falta o caso base?`;
  if (/^FileNotFoundError/.test(s)) return `Erro${naLinha}: o arquivo não existe. Confira o nome e se ele foi criado antes de ser lido.`;
  if (/^EOFError/.test(s)) return `Erro${naLinha}: ${s.replace(/^EOFError: /, '').replace(/ \(linha \d+\)$/, '')}.`;
  return 'Erro: ' + s;
}

if (typeof module !== 'undefined' && module.exports) module.exports = { PY_VERSAO, PY_PRELUDIO, traduzPy };
