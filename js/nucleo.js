/* Trilha Livre · núcleo
   Utilidades compartilhadas: ícones, texto, destaque de código, progresso salvo e execução segura do código do aluno.
   SPDX-License-Identifier: AGPL-3.0-or-later · Copyright (C) 2026 Contribuidores do Trilha Livre */

/* ---------- ícones ---------- */
const IC = {
  star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l2.9 6 6.6.8-4.9 4.6 1.3 6.5L12 17.2l-5.9 3.2 1.3-6.5-4.9-4.6 6.6-.8z"/></svg>',
  flame: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c1 3.6 5.5 6 5.5 11a5.5 5.5 0 0 1-11 0c0-2.6 1.4-4.3 2.6-5.6.3 1.6 1 2.7 2.1 3.2C10.6 7.6 11.4 4.6 12 2z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 10V8a5 5 0 0 1 10 0v2h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zm2 0h6V8a3 3 0 0 0-6 0z"/></svg>',
  conta: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M7.5 4v7M4 7.5h7M13.5 7.5h6.5M4.8 14.8l5.4 5.4M10.2 14.8l-5.4 5.4M13.5 15.5h6.5M13.5 19.5h6.5"/></svg>',
  livro: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6.5C10 5 6.5 4.6 3.5 5v13c3-.4 6.5 0 8.5 1.5 2-1.5 5.5-1.9 8.5-1.5V5c-3-.4-6.5 0-8.5 1.5zM12 6.5v13"/></svg>',
  externo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 7L3.5 12l5 5M15.5 7l5 5-5 5"/></svg>',
  term: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4" width="19" height="16" rx="3"/><path d="M7 9.5l3 2.5-3 2.5M12.5 15h4.5"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l12.5-7.5z"/></svg>',
  trophy: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 3h10v2h3v3a5 5 0 0 1-4.3 4.9A5 5 0 0 1 13 15.8V18h3v3H8v-3h3v-2.2a5 5 0 0 1-2.7-2.9A5 5 0 0 1 4 8V5h3zm10 4v3.8A3 3 0 0 0 18 8V7zM6 7v1a3 3 0 0 0 1 2.8V7z"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/></svg>',
  som: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 9.5v5h3.8L12 19V5L6.8 9.5zm12.2 2.5a3.6 3.6 0 0 0-2-3.2v6.4a3.6 3.6 0 0 0 2-3.2zm-2-7.6v2a6.5 6.5 0 0 1 0 11.2v2a8.4 8.4 0 0 0 0-15.2z"/></svg>',
  lento: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 15.5a7 6 0 0 1 14 0zM18.6 15.5c.2-1.6 1.4-2.8 2.9-2.8a1.5 1.5 0 0 1 0 3zM5 16.5h2.4l-.8 2.5H4.4zM13 16.5h2.4l-.8 2.5h-2.2z"/></svg>',
  fala: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5h16v10H10l-4.5 4v-4H4z"/><path d="M8 9.5h8M8 12.5h5"/></svg>',
  alvo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/></svg>'
};

/* ---------- utilidades ---------- */
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = a => a[Math.floor(Math.random() * a.length)];
const norm = s => String(s).replace(/\r/g, '').split('\n').map(l => l.trimEnd()).join('\n').trim();
// `crases` no meio de um texto viram <code>
// `código` vira código; $$3/4$$ vira uma fórmula (js/numeros.js)
const inlineMd = s => esc(s).split(/(`[^`]+`)/g).map(p => /^`[^`]+`$/.test(p) ? `<code>${p.slice(1, -1)}</code>`
  : typeof formula === 'function' ? p.replace(/\$\$(.+?)\$\$/g, (_, f) => formula(f)) : p).join('');

// destaque de sintaxe: JavaScript aqui; HTML e CSS em js/web.js; Python em js/python.js
function hl(src, lang) {
  if (lang === 'texto' || lang === 'mat' || lang === 'en') return esc(src);
  if (lang === 'py' && typeof hlPy === 'function') return hlPy(src);
  if (lang === 'shell') return hlShell(src);
  if (lang === 'html' && typeof hlHtml === 'function') return hlHtml(src);
  if (lang === 'css' && typeof hlCss === 'function') return hlCss(src);
  return hlJs(src);
}
// terminal: o "$ " do começo da linha é o prompt; o resto é comando; linhas sem $ são a resposta do programa
function hlShell(src) {
  return src.split('\n').map(l => {
    if (/^\$ /.test(l)) return `<span class="t-s">$</span> ` + esc(l.slice(2)).replace(/(#.*)$/, '<span class="t-c">$1</span>');
    if (/^#/.test(l)) return `<span class="t-c">${esc(l)}</span>`;
    return esc(l);
  }).join('\n');
}
function hlJs(src) {
  const re = /(\/\/[^\n]*)|("(?:[^"\\\n]|\\.)*"|`[^`]*`|'(?:[^'\\\n]|\\.)*')|\b(let|const|var|if|else|for|while|function|return|true|false|switch|case|break|continue|default|try|catch|throw|new|of|in)\b|\b(\d+(?:\.\d+)?)\b|\b(console|log)\b/g;
  let out = '', i = 0, m;
  while ((m = re.exec(src))) {
    out += esc(src.slice(i, m.index));
    const cls = m[1] ? 'c' : m[2] ? 's' : m[3] ? 'k' : m[4] ? 'n' : 'f';
    out += `<span class="t-${cls}">${esc(m[0])}</span>`;
    i = re.lastIndex;
  }
  return out + esc(src.slice(i));
}

/* ---------- progresso (salvo só neste navegador) ---------- */
const KEY = 'trilhaLivre.v1';
function novoEstado() {
  return {
    done: {}, xp: 0, streak: 0, last: null, maxStreak: 0,
    rev: {},        // revisão espaçada: { idDaLicao: { box, due } }
    erros: {},      // exercícios errados: { 'idDaLicao:indice': true }
    pratica: {},    // desafios resolvidos: { id: 'AAAA-MM-DD' }
    conquistas: {}, // { id: 'AAAA-MM-DD' }
    meta: 30, hoje: { dia: null, xp: 0 }, metaDias: 0,
    perfeitas: 0, revisoes: 0, termCmds: 0, codigoPrimeira: 0,
    ajustes: { som: true, anim: true, zoom: 1 }, // tamanho do texto, sons e animações
    curso: null, // id do curso escolhido no catálogo
    projetos: {}, // páginas feitas nos projetos do curso de HTML e CSS: { id: { titulo, html, css, dia } }
    nivelamentos: {}, // resultado do teste de nivelamento por curso: { idDoCurso: { nivel, dia } }
    biblioteca: {}, // estante pessoal: { idDoLivro: { st: 'quero' | 'lendo' | 'lido', dia, nota } }
    provas: {}, // melhor nota no teste de cada unidade: { idDaUnidade: { nota, dia } }
    sotaques: {} // sotaque do áudio nos cursos de idiomas: { idDoCurso: 'us' | 'uk' }
  };
}
function load() {
  const base = novoEstado();
  try {
    const salvo = JSON.parse(localStorage.getItem(KEY)) || {};
    const s = Object.assign(base, salvo);
    s.maxStreak = Math.max(s.maxStreak || 0, s.streak || 0);
    return s;
  } catch (e) { return base; }
}
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
let S = load();
const dayKey = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

/* ---------- execução do código do aluno ----------
   Roda num Web Worker para que um loop infinito possa ser interrompido. */
function workerMain() {
  self.onmessage = function (e) {
    const out = [];
    const f = v => typeof v === 'string' ? v : (v !== null && typeof v === 'object' ? JSON.stringify(v) : String(v));
    const fake = { log: (...a) => out.push(a.map(f).join(' ')), error: (...a) => out.push(a.map(f).join(' ')), warn: (...a) => out.push(a.map(f).join(' ')) };
    try { (new Function('console', e.data))(fake); self.postMessage({ out }); }
    catch (err) { self.postMessage({ out, err: err.name + ': ' + err.message }); }
  };
}
let WURL = null;
try { WURL = URL.createObjectURL(new Blob(['(' + workerMain.toString() + ')()'], { type: 'text/javascript' })); } catch (e) {}

function runCode(code) {
  return new Promise(res => {
    let w = null;
    try { if (WURL) w = new Worker(WURL); } catch (e) { w = null; }
    if (!w) { // plano B sem Worker
      const out = [];
      const f = v => typeof v === 'string' ? v : (v !== null && typeof v === 'object' ? JSON.stringify(v) : String(v)); // igual ao worker
      const fake = { log: (...a) => out.push(a.map(f).join(' ')), error: (...a) => out.push(a.map(f).join(' ')), warn: (...a) => out.push(a.map(f).join(' ')) };
      try { (new Function('console', code))(fake); res({ out }); } catch (err) { res({ out, err: err.name + ': ' + err.message }); }
      return;
    }
    const t = setTimeout(() => { w.terminate(); res({ out: [], timeout: true }); }, 2000);
    w.onmessage = e => { clearTimeout(t); w.terminate(); res(e.data); };
    w.onerror = e => { clearTimeout(t); w.terminate(); if (e.preventDefault) e.preventDefault(); res({ out: [], err: 'SyntaxError: ' + (e.message || 'erro') }); };
    w.postMessage(code);
  });
}

// mensagens de erro explicadas em português (as do Python ficam em js/python.js)
function traduzErro(err, lang) {
  if (lang === 'py' && typeof traduzPy === 'function') return traduzPy(err);
  return traduz(err);
}
function traduz(err) {
  let m;
  if ((m = /ReferenceError: (\S+) is not defined/.exec(err))) return `Erro: "${m[1]}" não existe. Você criou essa variável ou função? Confira maiúsculas e minúsculas.`;
  if (/Maximum call stack/.test(err)) return 'Erro: a função chamou a si mesma vezes demais. Será que falta o caso base?';
  if (/Assignment to constant/.test(err)) return 'Erro: você tentou mudar o valor de uma const.';
  if (/SyntaxError/.test(err)) return 'Erro de escrita (sintaxe): confira parênteses, chaves e aspas.\n' + err;
  if (/TypeError/.test(err)) return 'Erro de tipo: talvez você esteja usando um valor do jeito errado, como chamar algo que não é uma função.\n' + err;
  return 'Erro: ' + err;
}
