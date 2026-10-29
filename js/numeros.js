/* Trilha Livre · respostas numéricas e fórmulas
   lerNumero: entende o que a pessoa digitou ("3,5", "1.250,75", "-2", "3/4", "R$ 12") e devolve o número.
   respostaNumericaOk: confere a resposta de um exercício "numero", com margem de erro.
   formula: desenha uma fórmula escrita entre $$ e $$ nos textos, com frações empilhadas, potências e raízes.
   Este arquivo também é usado pelo validador (Node), por isso não usa nada da página.
   SPDX-License-Identifier: AGPL-3.0-or-later · Copyright (C) 2026 Contribuidores do Trilha Livre */

// "1.250,75" e "1250.75" valem o mesmo; "3/4" é uma fração; o resto (R$, %, unidades, espaços) é ignorado
function lerFracao(txt) {
  const s = String(txt == null ? '' : txt).trim().replace(/[−–—]/g, '-');
  const m = /^(-?)\s*(\d+)\s*\/\s*(\d+)$/.exec(s.replace(/[^\d/-]/g, ''));
  if (!m || !s.includes('/')) return null;
  return { neg: m[1] === '-', num: +m[2], den: +m[3] };
}
function lerNumero(txt) {
  let s = String(txt == null ? '' : txt).trim().replace(/[−–—]/g, '-');
  const f = lerFracao(s);
  if (f) return f.den === 0 ? null : (f.neg ? -1 : 1) * f.num / f.den;
  if (/^-?\d+(\.\d+)?e[-+]?\d+$/i.test(s)) return parseFloat(s); // 1e-7, como o JavaScript escreve números muito pequenos
  s = s.replace(/[^\d,.\-]/g, '');
  if (!/\d/.test(s)) return null;
  const neg = s.startsWith('-');
  s = s.replace(/-/g, '');
  if (s.includes(',')) s = s.replace(/\./g, '').replace(',', '.'); // vírgula é a casa decimal; pontos separam milhares
  else if ((s.match(/\./g) || []).length > 1) s = s.replace(/\./g, ''); // 1.250.000
  if (!/^\d*\.?\d+$|^\d+\.$/.test(s)) return null;
  const n = parseFloat(s);
  return isNaN(n) ? null : (neg ? -n : n);
}
const mdc = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };

// ex.r: a resposta (número, ou texto como "3/4" ou "12,5"); ex.casas: arredondada com tantas casas;
// ex.tol: margem de erro; ex.fracao: a resposta tem de ser uma fração irredutível (ou um inteiro)
function respostaNumericaOk(digitado, ex) {
  const certa = lerNumero(ex.r);
  if (certa == null) return false;
  if (ex.fracao) {
    const f = lerFracao(digitado);
    if (!f) { const n = lerNumero(digitado); return n != null && Number.isInteger(certa) && n === certa && !/[.,]/.test(digitado); }
    if (f.den === 0 || mdc(f.num, f.den) !== 1 || f.den === 1) return false;
    return Math.abs((f.neg ? -1 : 1) * f.num / f.den - certa) < 1e-9;
  }
  const n = lerNumero(digitado);
  if (n == null) return false;
  const tol = ex.tol != null ? +ex.tol : ex.casas != null ? 0.5 * Math.pow(10, -ex.casas) + 1e-9 : 1e-9 * Math.max(1, Math.abs(certa));
  // "1.250" pode ser 1,25 ou mil duzentos e cinquenta: vale a leitura que bater
  const limpo = String(digitado).replace(/[^\d.,\-\u2212]/g, '');
  const milhar = /^[-\u2212]?\d{1,3}\.\d{3}$/.test(limpo) ? lerNumero(limpo.replace('.', '')) : null;
  return Math.abs(n - certa) <= tol || (milhar != null && Math.abs(milhar - certa) <= tol);
}
// a resposta certa, escrita do jeito brasileiro: 1.250,5
function respostaNumericaTexto(ex) {
  if (ex.fracao || lerFracao(ex.r)) return String(ex.r).trim();
  const n = lerNumero(ex.r);
  if (n == null) return String(ex.r);
  const casas = ex.casas != null ? { minimumFractionDigits: ex.casas, maximumFractionDigits: ex.casas } : { maximumFractionDigits: 6 };
  return n.toLocaleString('pt-BR', casas);
}

/* ---------- fórmulas ----------
   Entre $$ e $$: 3/4 vira uma fração empilhada, x^2 e x^(n+1) são potências, v_0 e H_2O usam índice,
   sqrt(2) ou √(2) é a raiz, * vira ·, <= vira ≤, >= vira ≥, != vira ≠ e ~= vira ≈.
   Os parênteses em volta do numerador, do denominador e do expoente somem: (a+b)/2. Para dividir sem empilhar, use ÷. */
const FX_OPS = { '+': '+', '-': '−', '*': '·', '=': '=', '<': '&lt;', '>': '&gt;', '<=': '≤', '>=': '≥', '!=': '≠', '~=': '≈', '·': '·', '×': '×', '÷': '÷', '≤': '≤', '≥': '≥', '≠': '≠', '≈': '≈', '±': '±', '→': '→' };
function formula(src) {
  const des = String(src).replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
  const toks = des.match(/\s+|\d+(?:[.,]\d+)?|sqrt|√|<=|>=|!=|~=|[A-Za-zÀ-ÖØ-öø-ÿΑ-ω]+|./gu) || [];
  let i = 0;
  const pula = () => { while (i < toks.length && /^\s+$/.test(toks[i])) i++; };
  const ve = () => { pula(); return toks[i]; };
  const escH = t => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  let anterior = null; // para saber se o menos é de sinal (−3) ou de conta (5 − 3)
  function atomo() {
    const t = ve();
    if (t == null) return { h: '', s: '' };
    i++;
    if (t === '(') {
      anterior = 'op';
      const dentro = sequencia(')');
      if (ve() === ')') i++;
      anterior = 'atomo';
      return { h: `(${dentro})`, s: dentro };
    }
    if (t === 'sqrt' || t === '√') {
      const a = atomo();
      anterior = 'atomo';
      return { h: `<span class="fx-raiz">√<span class="fx-rad">${a.s}</span></span>`, s: null };
    }
    if (FX_OPS[t] != null && !(t === '-' && anterior !== 'atomo')) { anterior = 'op'; return { h: `<span class="fx-op">${FX_OPS[t]}</span>`, s: null, op: true }; }
    anterior = 'atomo';
    if (t === '-') { const a = atomo(); return { h: '−' + a.h, s: '−' + a.h }; }
    if (/^\d/.test(t)) return { h: t, s: t };
    if (/^[A-Za-zÀ-ÖØ-öø-ÿΑ-ω]$/u.test(t)) return { h: `<i>${t}</i>`, s: `<i>${t}</i>` };
    return { h: escH(t), s: escH(t) };
  }
  function potencia() {
    let a = atomo();
    if (a.op) return a;
    while (ve() === '^' || ve() === '_') {
      const marca = toks[i] === '^' ? 'sup' : 'sub'; i++;
      const e = atomo();
      const h = `${a.h}<${marca}>${e.s != null ? e.s : e.h}</${marca}>`;
      a = { h, s: h };
      anterior = 'atomo';
    }
    return a;
  }
  function fracao() {
    let a = potencia();
    if (a.op) return a.h;
    while (ve() === '/') {
      i++;
      anterior = 'op';
      const b = potencia();
      const h = `<span class="fx-fr"><span class="fx-num">${a.s != null ? a.s : a.h}</span><span class="sr"> sobre </span><span class="fx-den">${b.s != null ? b.s : b.h}</span></span>`;
      a = { h, s: h };
    }
    return a.h;
  }
  function sequencia(fim) {
    let h = '';
    while (ve() != null && ve() !== fim) h += fracao();
    return h;
  }
  return `<span class="fx">${sequencia(null)}</span>`;
}
// texto com fórmulas, sem marcação: para leitores de tela e avisos
const semFormula = s => String(s).replace(/\$\$/g, '').replace(/`/g, '');

if (typeof module !== 'undefined' && module.exports) module.exports = { lerNumero, lerFracao, respostaNumericaOk, respostaNumericaTexto, formula, semFormula };
