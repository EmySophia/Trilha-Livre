/* Trilha Livre · terminal
   REPL que guarda as variáveis entre um comando e outro: JavaScript ou, no curso de Python, Python.
   O JavaScript roda num Web Worker próprio; se um comando demorar mais de 3 segundos, o worker é reiniciado.
   O Python roda no worker de js/python.js.
   SPDX-License-Identifier: AGPL-3.0-or-later · Copyright (C) 2026 Contribuidores do Trilha Livre */
function termWorkerMain() {
  const fmt = (v, d, q) => {
    if (typeof v === 'string') return q ? JSON.stringify(v) : v;
    if (v === undefined) return 'undefined';
    if (v === null) return 'null';
    if (typeof v === 'function') return '[Função ' + (v.name || 'anônima') + ']';
    if (typeof v !== 'object') return String(v);
    if (v instanceof Error) return v.name + ': ' + v.message;
    if (d > 2) return Array.isArray(v) ? '[...]' : '{...}';
    if (Array.isArray(v)) return '[' + v.map(x => fmt(x, d + 1, true)).join(', ') + ']';
    const ks = Object.keys(v);
    return ks.length ? '{ ' + ks.map(k => k + ': ' + fmt(v[k], d + 1, true)).join(', ') + ' }' : '{}';
  };
  const out = [];
  const say = t => (...a) => out.push({ t, s: a.map(x => fmt(x, 0, false)).join(' ') });
  const fake = { log: say('log'), info: say('log'), warn: say('log'), error: say('err'), clear: () => out.push({ t: 'clear' }) };
  try { Object.defineProperty(self, 'console', { value: fake, writable: true, configurable: true }); } catch (e) { self.console = fake; }
  self.onmessage = e => {
    out.length = 0;
    const { id, code } = e.data;
    try {
      const src = code.replace(/^(let|const)(\s)/gm, 'var$2');
      let v;
      const tr = src.trim();
      if (tr.startsWith('{') && tr.endsWith('}')) { try { v = (0, eval)('(' + tr + ')'); } catch (x) { v = (0, eval)(src); } }
      else v = (0, eval)(src);
      self.postMessage({ id, out: out.slice(), value: fmt(v, 0, true), undef: v === undefined });
    } catch (err) {
      self.postMessage({ id, out: out.slice(), err: err && err.name ? err.name + ': ' + err.message : String(err) });
    }
  };
}
let TURL = null;
try { TURL = URL.createObjectURL(new Blob(['(' + termWorkerMain.toString() + ')()'], { type: 'text/javascript' })); } catch (e) {}
let TW = null, TID = 0, pending = null, tBusy = false;
const tHist = []; let tHi = 0;

function termWorker() {
  if (!TW) {
    TW = new Worker(TURL);
    TW.onmessage = e => {
      if (pending && e.data.id === pending.id) { clearTimeout(pending.t); const p = pending; pending = null; p.res(e.data); }
    };
  }
  return TW;
}
function termKill() { if (TW) TW.terminate(); TW = null; if (pending) { clearTimeout(pending.t); pending = null; } }
function termRun(code) {
  return new Promise(res => {
    let w;
    try { w = termWorker(); } catch (e) { res({ out: [], err: 'Error: não foi possível iniciar o terminal neste navegador.' }); return; }
    const id = ++TID;
    const t = setTimeout(() => { termKill(); res({ out: [], timeout: true }); }, 3000);
    pending = { id, t, res };
    w.postMessage({ id, code });
  });
}

const tLog = $('tLog'), tInput = $('tInput');
// a linguagem do terminal segue o curso escolhido
const termLang = () => (typeof CURSO !== 'undefined' && CURSO && CURSO.linguagem === 'py') ? 'py' : 'js';
function tLine(text, cls, html) {
  const p = document.createElement('pre');
  p.className = 'tl ' + cls;
  if (html) p.innerHTML = text; else p.textContent = text;
  tLog.appendChild(p);
  return p;
}
function tScroll() { tLog.scrollTop = tLog.scrollHeight; }
function tWelcome() {
  const py = termLang() === 'py';
  tLine(py
    ? '<b>Terminal Python.</b> Digite um comando e aperte Enter. Suas variáveis ficam guardadas enquanto o terminal estiver aberto. Para um bloco (if, for, def), escreva as linhas e termine com uma linha vazia. Digite <b>.ajuda</b> para ver os comandos. Experimente:'
    : '<b>Terminal JavaScript.</b> Digite um comando e aperte Enter. Suas variáveis ficam guardadas enquanto o terminal estiver aberto, então dá para testar aos poucos. Digite <b>.ajuda</b> para ver os comandos. Experimente:', 'info', true);
  const ex = py ? ['2 + 2 * 10', 'nome = "Brasil"', 'len(nome)', 'nome.upper()', 'sorted([5, 3, 8])', 'round(3.14159, 2)']
    : ['2 + 2 * 10', 'let nome = "Brasil"', 'nome.length', 'nome.toUpperCase()', '[5, 3, 8].sort()', 'Math.round(Math.random() * 100)'];
  const box = document.createElement('div');
  box.className = 'tchips';
  box.innerHTML = ex.map(c => `<button class="tchip">${esc(c)}</button>`).join('');
  tLog.appendChild(box);
}
function tHelp() {
  if (termLang() === 'py') {
    tLine(
`.ajuda       mostra esta ajuda
.limpar      limpa a tela
.reiniciar   apaga todas as variáveis criadas

Enter executa. Shift+Enter quebra a linha.
Linha que termina com dois-pontos abre um bloco: escreva as linhas
de dentro e aperte Enter numa linha vazia para executar.
Setas ↑ e ↓ trazem os comandos anteriores.`, 'val');
    return;
  }
  tLine(
`.ajuda       mostra esta ajuda
.limpar      limpa a tela (ou console.clear())
.reiniciar   apaga todas as variáveis criadas

Enter executa. Shift+Enter quebra a linha.
Se um parêntese ou chave ficar aberto, o Enter só quebra a linha.
Setas ↑ e ↓ trazem os comandos anteriores.`, 'val');
}
function tClear() { tLog.innerHTML = ''; }
function autosize() { tInput.style.height = 'auto'; tInput.style.height = tInput.scrollHeight + 'px'; }

let tOrigem = null; // botão que abriu o terminal, para devolver o foco ao fechar
function openTerm(prefill) {
  tOrigem = document.activeElement;
  $('term').hidden = false;
  document.documentElement.style.overflow = 'hidden';
  const lang = termLang();
  if (tLog.dataset.lang !== lang) { tClear(); tLog.dataset.lang = lang; tHi = tHist.length = 0; }
  $('termLang').textContent = lang === 'py' ? 'Python' : 'JavaScript';
  const t = $('term').querySelector('.teclas'); if (t && t.dataset.conjunto !== lang) t.outerHTML = tecladoHTML('tInput', lang);
  if (!tLog.children.length) tWelcome();
  if (typeof prefill === 'string' && prefill.trim()) {
    tInput.value = prefill.replace(/\s+$/, '');
    if (lang === 'py' && tInput.value.includes('\n')) tInput.value += '\n'; // bloco completo: um Enter já executa
    tLine('Seu código da lição foi copiado para cá. Aperte Enter para rodar ou edite antes.', 'info');
  }
  autosize(); tScroll(); tInput.focus();
}
function closeTerm() {
  $('term').hidden = true;
  document.documentElement.style.overflow = '';
  if (tOrigem && tOrigem.isConnected && tOrigem.focus) tOrigem.focus();
}
// barra de símbolos para digitar no celular
$('term').querySelector('.term-in').insertAdjacentHTML('beforebegin', tecladoHTML('tInput'));
$('term').setAttribute('aria-modal', 'true');

async function tSubmit() {
  if (tBusy) return;
  const code = tInput.value.replace(/\s+$/, '');
  if (!code.trim()) return;
  if (tHist[tHist.length - 1] !== code) tHist.push(code);
  tHi = tHist.length;
  tInput.value = ''; autosize();
  const lang = termLang();
  tLine('<span class="pr">› </span>' + hl(code, lang), 'in', true);
  const cmd = code.trim();
  if (cmd === '.ajuda' || cmd === 'ajuda') { tHelp(); tScroll(); return; }
  if (cmd === '.limpar' || cmd === 'clear()' || cmd === 'limpar') { tClear(); return; }
  if (cmd === '.reiniciar') { tReiniciar(); return; }
  if (lang === 'py') { await tSubmitPy(code); return; }
  tBusy = true;
  const r = await termRun(code);
  tBusy = false;
  if (typeof aoUsarTerminal === 'function') aoUsarTerminal();
  (r.out || []).forEach(o => { if (o.t === 'clear') tClear(); else tLine(o.s, o.t === 'err' ? 'err' : 'log'); });
  if (r.timeout) tLine('Parei a execução: demorou mais de 3 segundos. Algum laço nunca termina?\nO terminal foi reiniciado e as variáveis foram apagadas.', 'err');
  else if (r.err) tLine(traduz(r.err), 'err');
  else tLine('← ' + r.value, 'val' + (r.undef ? ' undef' : ''));
  tScroll();
}

async function tSubmitPy(code) {
  tBusy = true;
  let aviso = null;
  const r = await rodarPython(code, { repl: true,
    aoCarregar: () => { aviso = tLine('Preparando o Python. Na primeira vez ele é baixado da internet, o que pode levar alguns segundos.', 'info'); tScroll(); },
    aoPacotes: ps => { if (aviso) aviso.remove(); aviso = tLine(`Baixando ${ps.join(' e ')}. Só na primeira vez: são alguns megabytes.`, 'info'); tScroll(); } });
  tBusy = false;
  if (aviso) aviso.remove();
  if (typeof aoUsarTerminal === 'function') aoUsarTerminal();
  (r.out || []).forEach(s => tLine(s, 'log'));
  (r.imagens || []).forEach((b, i) => { const im = document.createElement('img'); im.className = 'figura'; im.alt = `Gráfico ${i + 1}`; im.src = 'data:image/png;base64,' + b; tLog.appendChild(im); });
  if (r.timeout) tLine('Parei a execução: demorou mais de 5 segundos. Algum laço nunca termina?\nO Python foi reiniciado e as variáveis foram apagadas.', 'err');
  else if (r.falha) tLine('Não consegui abrir o Python (' + r.falha + '). Na primeira vez, ele precisa de internet.', 'err');
  else if (r.err) tLine(traduzPy(r.err), 'err');
  else if (r.valor != null) tLine('← ' + r.valor, 'val');
  tScroll();
}
function tReiniciar() {
  if (termLang() === 'py') { if (PY.pronto) rodarPython(null, { repl: true, limpar: true }); }
  else termKill();
  tLine('Terminal reiniciado. Todas as variáveis foram apagadas.', 'info'); tScroll();
}

function openCount(s, lang) {
  let n = 0;
  const clean = lang === 'py'
    ? s.replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|#[^\n]*/g, '')
    : s.replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|`[^`]*`|\/\/[^\n]*/g, '');
  for (const c of clean) { if ('([{'.includes(c)) n++; else if (')]}'.includes(c)) n--; }
  return n;
}
tInput.addEventListener('input', autosize);
// Python: dentro de um bloco, o Enter quebra a linha e mantém o recuo; numa linha vazia, executa
function pyContinua(v) {
  if (openCount(v, 'py') > 0) return true;
  const linhas = v.split('\n'), ult = linhas[linhas.length - 1];
  if (/:\s*(#.*)?$/.test(ult)) return true;
  return linhas.length > 1 && ult.trim() !== '';
}
tInput.addEventListener('keydown', e => {
  const py = termLang() === 'py';
  if (e.key === 'Enter' && !e.shiftKey) {
    if (py) {
      if (tInput.selectionEnd === tInput.value.length && pyContinua(tInput.value)) {
        e.preventDefault();
        const ult = tInput.value.split('\n').pop();
        const recuo = (/^\s*/.exec(ult) || [''])[0] + (/:\s*(#.*)?$/.test(ult) ? '    ' : '');
        tInput.value += '\n' + recuo; autosize();
        return;
      }
      e.preventDefault(); tSubmit(); return;
    }
    if (openCount(tInput.value) > 0) return; // bloco aberto: deixa quebrar a linha
    e.preventDefault(); tSubmit(); return;
  }
  if (e.key === 'Tab' && !e.shiftKey) {
    e.preventDefault();
    const s = tInput.selectionStart, en = tInput.selectionEnd, tab = py ? '    ' : '  ';
    tInput.value = tInput.value.slice(0, s) + tab + tInput.value.slice(en);
    tInput.selectionStart = tInput.selectionEnd = s + tab.length; return;
  }
  if (e.key === 'Escape') { closeTerm(); return; }
  if (!tInput.value.includes('\n') && (e.key === 'ArrowUp' || e.key === 'ArrowDown') && tHist.length) {
    e.preventDefault();
    tHi = Math.max(0, Math.min(tHist.length, tHi + (e.key === 'ArrowUp' ? -1 : 1)));
    tInput.value = tHist[tHi] || '';
    autosize();
  }
});
$('tRun').addEventListener('click', () => { tSubmit(); tInput.focus(); });
$('tClear').addEventListener('click', () => { tClear(); tInput.focus(); });
$('tReset').addEventListener('click', () => { tReiniciar(); tInput.focus(); });
$('tClose').addEventListener('click', closeTerm);
tLog.addEventListener('click', e => {
  const c = e.target.closest('.tchip');
  if (c) { tInput.value = c.textContent; tSubmit(); tInput.focus(); }
});
$('termBtnL').addEventListener('click', () => openTerm());
