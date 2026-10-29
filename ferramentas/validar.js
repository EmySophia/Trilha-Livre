#!/usr/bin/env node
/* Trilha Livre · validador de conteúdo
   Confere todas as lições e desafios: formato dos exercícios, ids repetidos,
   e se cada solução de código produz exatamente a saída esperada.
   Uso: npm run validar   (ou: node ferramentas/validar.js)
   SPDX-License-Identifier: AGPL-3.0-or-later · Copyright (C) 2026 Contribuidores do Trilha Livre */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const raiz = path.join(__dirname, '..');
const index = fs.readFileSync(path.join(raiz, 'index.html'), 'utf8');
const arquivos = [...index.matchAll(/<script src="(conteudo\/[^"]+)"/g)].map(m => m[1]);

const ctx = vm.createContext({});
for (const arq of arquivos) {
  vm.runInContext(fs.readFileSync(path.join(raiz, arq), 'utf8'), ctx, { filename: arq });
}
const TRILHA = vm.runInContext('TRILHA', ctx);

const problemas = [];
const erro = (onde, msg) => problemas.push(`${onde}: ${msg}`);
const norm = s => String(s).replace(/\r/g, '').split('\n').map(l => l.trimEnd()).join('\n').trim();
const fmt = v => typeof v === 'string' ? v : (v !== null && typeof v === 'object' ? JSON.stringify(v) : String(v));

function rodar(codigo) {
  const out = [];
  const consoleFalso = { log: (...a) => out.push(a.map(fmt).join(' ')), error: (...a) => out.push(a.map(fmt).join(' ')) };
  try {
    vm.runInNewContext(`(function (console) {\n${codigo}\n})(consoleFalso)`, { consoleFalso }, { timeout: 2000 });
    return { saida: out.join('\n') };
  } catch (e) {
    return { saida: out.join('\n'), erro: e.message };
  }
}

// exercícios em Python: rodam no fim, todos de uma vez, no mesmo Python do app (Pyodide)
const tarefasPy = [];
const { PY_PRELUDIO, PY_VERSAO } = require(path.join(raiz, 'js', 'python.js'));
const { instanciar } = require(path.join(raiz, 'js', 'variaveis.js'));
const { lerNumero, respostaNumericaOk, respostaNumericaTexto } = require(path.join(raiz, 'js', 'numeros.js'));
// sorteio com semente fixa, para o validador conferir sempre os mesmos valores
function semente(n) { return () => { n |= 0; n = n + 0x6D2B79F5 | 0; let t = Math.imul(n ^ n >>> 15, 1 | n); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const SORTEIOS = 12; // quantas versões de cada exercício que muda o validador confere

function validarCodigo(onde, ex, lang = ling) {
  if (ex.vars) { // exercício que muda: confere várias versões sorteadas
    for (let i = 0; i < SORTEIOS; i++) {
      const inst = instanciar(ex, semente(i + 1));
      if (!inst) { erro(onde, 'o sorteio das vars quase nunca satisfaz a condição "se"'); return; }
      validarCodigo(`${onde} (sorteio ${i + 1}: ${JSON.stringify(inst.valores)})`, { ...inst, vars: undefined }, lang);
    }
    return;
  }
  for (const campo of ['p', 'sol']) if (typeof ex[campo] !== 'string') erro(onde, `falta o campo "${campo}"`);
  if (ex.saida != null && typeof ex.saida !== 'string') erro(onde, 'saida precisa ser um texto');
  if (typeof ex.sol !== 'string') return;
  if (ex.entrada != null && !(Array.isArray(ex.entrada) && ex.entrada.every(v => typeof v === 'string'))) erro(onde, 'entrada precisa ser uma lista de textos, um para cada input()');
  if (lang === 'py') { tarefasPy.push({ onde, ex }); return; }
  if (ex.saida == null) {
    const r = rodar(ex.sol);
    if (r.erro) { erro(onde, `a solução deu erro: ${r.erro}`); return; }
    if (!norm(r.saida)) erro(onde, 'a solução não mostra nada');
    const ini = rodar(ex.start || '');
    if (!ini.erro && norm(ini.saida) === norm(r.saida)) erro(onde, 'o código inicial já passa no teste sem o aluno fazer nada');
    return;
  }
  const r = rodar(ex.sol);
  if (r.erro) erro(onde, `a solução deu erro: ${r.erro}`);
  else if (norm(r.saida) !== norm(ex.saida)) erro(onde, `a solução mostra ${JSON.stringify(r.saida)}, mas a saída esperada é ${JSON.stringify(ex.saida)}`);
  const inicial = rodar(ex.start || '');
  if (!inicial.erro && norm(inicial.saida) === norm(ex.saida)) erro(onde, 'o código inicial já passa no teste sem o aluno fazer nada');
}

// exercícios de página: usa o jsdom (npm install) para montar a página e conferir as regras
let JSDOM = null;
try { ({ JSDOM } = require('jsdom')); } catch (e) { /* sem jsdom: só confere o formato */ }
const web = require(path.join(raiz, 'js', 'web.js'));
let avisouJsdom = false;
function conferirPagina(html, css, regras) {
  const dom = new JSDOM(web.montarPagina(html, css));
  try { return web.checarPagina(dom.window.document, regras); } finally { dom.window.close(); }
}
function validarWeb(onde, ex) {
  if (!Array.isArray(ex.regras) || !ex.regras.length) { erro(onde, 'exercício de página precisa de uma lista de regras'); return; }
  ex.regras.forEach((r, i) => {
    if (!r.msg) erro(onde, `a regra ${i + 1} precisa de uma mensagem (msg)`);
    if (r.sel == null && r.titulo == null && r.rotulado == null && r.regra == null) erro(onde, `a regra ${i + 1} precisa de sel, rotulado, regra ou titulo`);
    if (r.css != null && r.valor == null && r.contem == null && r.diferente == null) erro(onde, `a regra ${i + 1} confere CSS e precisa de valor, contem ou diferente`);
  });
  if (ex.projeto != null) {
    if (!ex.projeto.id || !ex.projeto.titulo) erro(onde, 'projeto precisa de id e titulo');
    if (ex.projeto.arquivo != null && !/^[a-z0-9-]+\.html$/.test(ex.projeto.arquivo)) erro(onde, 'projeto.arquivo precisa ser um nome como "contato.html" (minúsculas, sem espaço nem acento)');
    if (ex.projeto.herdaCss && !ex.projeto.arquivo) erro(onde, 'herdaCss só vale para projetos de várias páginas (com arquivo)');
  }
  if (ex.conserte != null && typeof ex.conserte !== 'boolean') erro(onde, 'conserte precisa ser true ou false');
  // num exercício de consertar, o código inicial pode ter um caminho errado de propósito
  for (const txt of ex.conserte ? [ex.solHtml, ex.solCss] : [ex.html, ex.css, ex.solHtml, ex.solCss]) conferirImagens(onde, txt);
  if (typeof ex.solHtml !== 'string') { erro(onde, 'falta a solução (solHtml)'); return; }
  if (ex.css != null && typeof ex.solCss !== 'string') erro(onde, 'o exercício tem CSS, então precisa de solCss');
  if (!JSDOM) {
    if (!avisouJsdom) { console.log('Aviso: rode "npm install" para o validador conferir também as soluções dos exercícios de página.'); avisouJsdom = true; }
    return;
  }
  const sol = conferirPagina(ex.solHtml, ex.solCss, ex.regras);
  sol.forEach((r, i) => { if (!r.ok) erro(onde, `a solução não passa na regra ${i + 1}: "${r.msg}"`); });
  const ini = conferirPagina(ex.html || '', ex.css || '', ex.regras);
  if (ini.every(r => r.ok)) erro(onde, 'o código inicial já passa em todas as regras sem o aluno fazer nada');
}

// toda imagem usada como imagens/arquivo precisa existir na pasta imagens do app
function conferirImagens(onde, txt) {
  for (const m of String(txt || '').matchAll(/imagens\/([\w.-]+\.(?:jpg|jpeg|png|svg|gif|webp))/gi)) {
    if (!fs.existsSync(path.join(raiz, 'imagens', m[1]))) erro(onde, `a imagem imagens/${m[1]} não existe na pasta imagens`);
  }
}

let ling = 'js'; // linguagem do curso que está sendo conferido
function validarExercicio(onde, ex) {
  if (ex.vars && ex.t !== 'codigo') { // exercício que muda: confere várias versões sorteadas
    if (typeof ex.vars !== 'object') { erro(onde, 'vars precisa ser um objeto'); return; }
    for (let i = 0; i < SORTEIOS; i++) {
      const inst = instanciar(ex, semente(i + 1));
      if (!inst) { erro(onde, 'o sorteio das vars quase nunca dá opções diferentes ou satisfaz o "se"'); return; }
      validarExercicio(`${onde} (sorteio ${i + 1}: ${JSON.stringify(inst.valores)})`, { ...inst, vars: undefined });
    }
    return;
  }
  if (!ex.vars) for (const campo of ['p', 'code', 'start', 'sol', 'saida', 'exp', 'dica', 'r', 'ops', 'lines', 'bank', 'c', 'prefixo', 'unidade']) {
    for (const v of [].concat(ex[campo] == null ? [] : ex[campo])) if (typeof v === 'string' && /\{=[^}]*\}/.test(v)) erro(onde, `sobrou uma expressão {= ...} em ${campo}: faltou declarar vars?`);
  }
  switch (ex.t) {
    case 'texto':
      if (!ex.titulo || !Array.isArray(ex.blocos) || !ex.blocos.length) erro(onde, 'texto precisa de titulo e blocos');
      for (const b of ex.blocos || []) {
        const tipos = ['p', 'code', 'dica', 'passos', 'fluxo', 'tabela', 'web', 'projetos', 'leia', 'trecho', 'perguntas'].filter(k => k in b);
        if (tipos.length !== 1) erro(onde, `bloco com formato desconhecido: ${JSON.stringify(Object.keys(b))}`);
        if (b.leia && (!b.leia.titulo || !/^https:\/\//.test(b.leia.url || ''))) erro(onde, 'o bloco leia precisa de titulo e de url com https://');
        if (b.trecho && (!b.trecho.onde || !b.trecho.explica)) erro(onde, 'o bloco trecho precisa de onde e explica');
        if (b.perguntas && !(Array.isArray(b.perguntas) && b.perguntas.length && b.perguntas.every(q => typeof q === 'string' && q.trim()))) erro(onde, 'o bloco perguntas precisa de uma lista de perguntas');
        const lang = b.lang || ling;
        if (b.lang != null && !['js', 'html', 'css', 'texto', 'py', 'shell'].includes(b.lang)) erro(onde, `lang desconhecida: ${b.lang} (use js, py, html, css, shell ou texto)`);
        if (b.web != null) { conferirImagens(onde, b.web); conferirImagens(onde, b.css); }
        if (b.tabela && b.tabela.codigo != null && !(Array.isArray(b.tabela.codigo) && b.tabela.codigo.every(i => Number.isInteger(i) && i >= 0 && i < b.tabela.cab.length))) erro(onde, 'tabela.codigo precisa ser uma lista de posições de colunas, começando do 0');
        if (b.code && !b.semTeste && lang === 'js') { const r = rodar(b.code); if (r.erro) erro(onde, `exemplo de código com erro: ${r.erro}`); }
        if (b.code && !b.semTeste && lang === 'py') tarefasPy.push({ onde, exemplo: b.code });
      }
      break;
    case 'escolha':
      if (!Array.isArray(ex.ops) || ex.ops.length < 2) erro(onde, 'escolha precisa de pelo menos 2 opções');
      else if (!(ex.c >= 0 && ex.c < ex.ops.length)) erro(onde, `c (${ex.c}) não aponta para uma opção`);
      else if (new Set(ex.ops).size !== ex.ops.length) erro(onde, 'opções repetidas');
      break;
    case 'complete': {
      const lacunas = (ex.code || '').split('___').length - 1;
      if (!lacunas) erro(onde, 'o código não tem nenhuma lacuna ___');
      if (!Array.isArray(ex.c) || ex.c.length !== lacunas) erro(onde, `são ${lacunas} lacunas, mas c tem ${ex.c && ex.c.length} respostas`);
      for (const r of ex.c || []) if (!(ex.bank || []).includes(r)) erro(onde, `a resposta "${r}" não está no banco de opções`);
      break;
    }
    case 'ordene':
      if (!Array.isArray(ex.lines) || ex.lines.length < 2) erro(onde, 'ordene precisa de pelo menos 2 linhas');
      else if (new Set(ex.lines).size !== ex.lines.length) erro(onde, 'linhas repetidas deixam a ordem ambígua');
      break;
    case 'codigo':
      validarCodigo(onde, ex);
      break;
    case 'web':
      validarWeb(onde, ex);
      break;
    case 'comando':
      if (typeof ex.sol !== 'string' || !ex.sol.trim()) erro(onde, 'comando precisa de sol (o comando certo)');
      if (ex.antes != null && !(Array.isArray(ex.antes) && ex.antes.every(l => typeof l === 'string'))) erro(onde, 'antes precisa ser uma lista de linhas');
      if (ex.saida != null && typeof ex.saida !== 'string') erro(onde, 'saida precisa ser um texto');
      for (const a of ex.aceita || []) {
        if (typeof a !== 'string') erro(onde, 'cada item de aceita precisa ser um texto');
        else if (/^\/.+\/$/.test(a)) { try { new RegExp(a.slice(1, -1)); } catch (e) { erro(onde, `expressão regular inválida em aceita: ${a}`); } }
      }
      break;
    case 'numero': {
      // a resposta certa precisa ser um número (ou uma fração) e precisa ser aceita quando digitada
      if (ex.r == null || lerNumero(ex.r) == null) { erro(onde, `a resposta r (${JSON.stringify(ex.r)}) não é um número nem uma fração`); break; }
      if (ex.casas != null && !(Number.isInteger(ex.casas) && ex.casas >= 0 && ex.casas <= 6)) erro(onde, 'casas precisa ser um inteiro de 0 a 6');
      if (ex.tol != null && !(+ex.tol >= 0)) erro(onde, 'tol precisa ser um número maior ou igual a 0');
      if (!respostaNumericaOk(respostaNumericaTexto(ex), ex)) erro(onde, `a resposta mostrada como certa (${respostaNumericaTexto(ex)}) não seria aceita${ex.fracao ? ': com fracao, r precisa ser uma fração irredutível, como 3/4, ou um inteiro' : ''}`);
      break;
    }
    default:
      erro(onde, `tipo de exercício desconhecido: ${ex.t}`);
  }
  if (ex.t !== 'texto' && !ex.p) erro(onde, 'falta a pergunta (p)');
  // fórmulas: os $$ andam em pares, fora dos trechos de código
  for (const txt of [ex.p, ex.exp, ex.dica, ...(ex.ops || []), ...((ex.blocos || []).flatMap(b => [b.p, b.dica, ...(b.passos || [])]))]) {
    if (typeof txt === 'string' && (txt.replace(/`[^`]+`/g, '').match(/\$\$/g) || []).length % 2) erro(onde, `fórmula sem fechar: os $$ andam em pares, em "${txt.slice(0, 60)}"`);
  }
}

const ids = new Set();
const usarId = (id, onde) => { if (!id) erro(onde, 'falta id'); else if (ids.has(id)) erro(onde, `id repetido: ${id}`); else ids.add(id); };

// catálogo: áreas e cursos
const idsArea = new Set();
for (const a of TRILHA.areas) { if (!a.id || !a.nome) erro('catálogo', 'área sem id ou nome'); if (idsArea.has(a.id)) erro('catálogo', `área repetida: ${a.id}`); idsArea.add(a.id); }
const idsCurso = new Set();
for (const c of TRILHA.cursos) {
  const onde = `curso ${c.id}`;
  if (!c.id || !c.titulo || !c.desc) erro(onde, 'curso precisa de id, titulo e desc');
  if (idsCurso.has(c.id)) erro(onde, 'id de curso repetido');
  idsCurso.add(c.id);
  if (!idsArea.has(c.area)) erro(onde, `área desconhecida: ${c.area}`);
  if (!c.sigla || c.sigla.length > 3) erro(onde, 'a sigla precisa ter de 1 a 3 caracteres');
}
for (const nv of TRILHA.niveis) {
  if (!idsCurso.has(nv.curso)) erro(`nível ${nv.n}`, `curso desconhecido: ${nv.curso}`);
  for (const v of nv.videos || []) {
    if (!v.titulo || !v.canal || !/^https:\/\//.test(v.url || '')) erro(`${nv.curso} nível ${nv.n}`, 'cada vídeo precisa de titulo, canal e url com https://');
    if (v.tipo != null && !['video', 'texto'].includes(v.tipo)) erro(`${nv.curso} nível ${nv.n}`, `tipo de material desconhecido: ${v.tipo}`);
  }
}
for (const c of idsCurso) {
  const ns = TRILHA.niveis.filter(nv => nv.curso === c).map(nv => nv.n);
  ns.forEach((n, i) => { if (n !== i + 1) erro(`curso ${c}`, `os níveis precisam ser 1, 2, 3... na ordem do index.html (achei ${ns.join(', ')})`); });
}

let nLicoes = 0, nItens = 0;
for (const u of TRILHA.unidades) {
  usarId(u.id, `unidade ${u.titulo}`);
  for (const l of u.licoes) {
    nLicoes++;
    usarId(l.id, `lição ${l.titulo}`);
    if (!l.exs.length || l.exs[0].t !== 'texto') erro(l.id, 'toda lição deve começar com uma leitura (t: "texto")');
    ling = (TRILHA.cursos.find(c => c.id === u.curso) || {}).linguagem || 'js';
    l.exs.forEach((ex, i) => { nItens++; validarExercicio(`${l.id} item ${i + 1}`, ex); });
  }
}
// lições de base (pre): precisam existir, ser do mesmo curso e vir antes na ordem do curso
for (const c of idsCurso) {
  const ordem = TRILHA.unidades.filter(u => u.curso === c).flatMap(u => u.licoes.map(l => l.id));
  for (const u of TRILHA.unidades.filter(u => u.curso === c)) for (const l of u.licoes) {
    if (l.pre == null) continue;
    if (!Array.isArray(l.pre)) { erro(l.id, 'pre precisa ser uma lista de ids de lições'); continue; }
    if (l.pre.length > 3) erro(l.id, 'use no máximo 3 lições de base (pre), as mais importantes');
    for (const p of l.pre) {
      const i = ordem.indexOf(p);
      if (i === -1) erro(l.id, `a lição de base "${p}" não existe neste curso`);
      else if (i >= ordem.indexOf(l.id)) erro(l.id, `a lição de base "${p}" precisa vir antes dela no curso`);
    }
  }
}

for (const d of TRILHA.desafios) {
  usarId(d.id, `desafio ${d.titulo}`);
  if (!idsCurso.has(d.curso)) erro(d.id, `curso desconhecido: ${d.curso}`);
  if (!['facil', 'medio', 'dificil'].includes(d.dif)) erro(d.id, `dif inválida: ${d.dif}`);
  if (!Array.isArray(d.temas)) erro(d.id, 'falta a lista de temas');
  if (d.t && d.t !== 'codigo') validarExercicio(d.id, d); else validarCodigo(d.id, d, (TRILHA.cursos.find(c => c.id === d.curso) || {}).linguagem || 'js');
}

// biblioteca
const idsEstante = new Set(), idsLivro = new Set();
for (const e of TRILHA.estantes) {
  if (!e.id || !e.nome || !e.desc) erro('biblioteca', `estante sem id, nome ou desc: ${JSON.stringify(e)}`);
  if (idsEstante.has(e.id)) erro('biblioteca', `estante repetida: ${e.id}`);
  idsEstante.add(e.id);
}
for (const l of TRILHA.livros) {
  const onde = `livro ${l.id || l.titulo}`;
  if (!l.id || !l.titulo || !l.autor || !l.desc) erro(onde, 'livro precisa de id, titulo, autor e desc');
  if (idsLivro.has(l.id)) erro(onde, 'id de livro repetido');
  idsLivro.add(l.id);
  if (!idsEstante.has(l.estante)) erro(onde, `estante desconhecida: ${l.estante}`);
  if (l.ano != null && !/^\d{3,4}(–\d{4})?$/.test(String(l.ano))) erro(onde, `ano em formato estranho: ${l.ano} (use 1867 ou '1845–1846')`);
  if (!Array.isArray(l.links) || !l.links.length) erro(onde, 'livro precisa de pelo menos um link');
  for (const k of l.links || []) if (!k.rotulo || !/^https:\/\//.test(k.url || '')) erro(onde, 'cada link precisa de rotulo e de url com https://');
  for (const c of l.cursos || []) if (!idsCurso.has(c)) erro(onde, `curso desconhecido: ${c}`);
}
for (const a of TRILHA.acervos) {
  if (!a.id || !a.nome || !a.desc) erro('biblioteca', `acervo sem id, nome ou desc: ${JSON.stringify(a)}`);
  if (a.url != null && !/^https:\/\//.test(a.url)) erro('biblioteca', `o acervo ${a.id} precisa de url com https://`);
}

async function conferirPython() {
  if (!tarefasPy.length) return;
  let loadPyodide;
  try { ({ loadPyodide } = require('pyodide')); } catch (e) {
    console.log(`Aviso: rode "npm install" para o validador conferir também os ${tarefasPy.length} exercícios e exemplos em Python.`);
    return;
  }
  // NumPy e Matplotlib são baixados uma vez e guardados em node_modules/.cache/pyodide
  const py = await loadPyodide({ packageCacheDir: process.env.PYODIDE_PACOTES || path.join(raiz, 'node_modules', '.cache', 'pyodide') });
  if (py.version !== PY_VERSAO) console.log(`Aviso: o validador está com o Pyodide ${py.version}, e o app usa o ${PY_VERSAO}.`);
  py.runPython(PY_PRELUDIO);
  const rodarPy = async (src, entrada) => {
    await py.loadPackagesFromImports(src, { messageCallback: () => {} });
    const ns = py.globals.get('_tl_novo_ns')(), ent = py.toPy(entrada || []);
    const r = py.globals.get('_tl_rodar')(src, ns, false, ent);
    const [saida, err, , imagens] = r.toJs();
    r.destroy(); ent.destroy(); ns.destroy();
    return { saida, erro: err, imagens: imagens || [] };
  };
  for (const t of tarefasPy) {
    if (t.exemplo != null) { const r = await rodarPy(t.exemplo); if (r.erro) erro(t.onde, `exemplo de Python com erro: ${r.erro}`); continue; }
    const ex = t.ex;
    const r = await rodarPy(ex.sol, ex.entrada);
    if (ex.grafico && !r.erro && !r.imagens.length) erro(t.onde, 'o exercício pede um gráfico (grafico: true), mas a solução não desenha nenhum');
    const esperada = ex.saida != null ? ex.saida : r.saida; // sem saida: vale a da solução
    if (r.erro) erro(t.onde, `a solução deu erro: ${r.erro}`);
    else if (ex.saida == null && !norm(r.saida)) erro(t.onde, 'a solução não mostra nada');
    else if (norm(r.saida) !== norm(esperada)) erro(t.onde, `a solução mostra ${JSON.stringify(r.saida)}, mas a saída esperada é ${JSON.stringify(ex.saida)}`);
    const ini = await rodarPy(ex.start || '', ex.entrada);
    if (!ini.erro && norm(ini.saida) === norm(esperada)) erro(t.onde, 'o código inicial já passa no teste sem o aluno fazer nada');
  }
}

(async () => {
await conferirPython();
const comConteudo = TRILHA.cursos.filter(c => TRILHA.niveis.some(nv => nv.curso === c.id));
console.log(`${TRILHA.areas.length} áreas · ${TRILHA.cursos.length} cursos (${comConteudo.length} com conteúdo: ${comConteudo.map(c => c.id).join(', ')})`);
console.log(`${TRILHA.niveis.length} níveis · ${TRILHA.unidades.length} unidades · ${nLicoes} lições · ${nItens} itens · ${TRILHA.desafios.length} desafios`);
console.log(`Biblioteca: ${TRILHA.estantes.length} estantes · ${TRILHA.livros.length} livros · ${TRILHA.acervos.length} acervos`);
if (problemas.length) {
  console.log(`\n${problemas.length} problema(s):`);
  problemas.forEach(p => console.log('  - ' + p));
  process.exit(1);
}
console.log('Tudo certo: todas as soluções produzem a saída esperada.');
})();
