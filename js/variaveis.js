/* Trilha Livre · exercícios que mudam
   Um exercício com "vars" ganha valores sorteados cada vez que aparece, para dar para praticar de novo sem decorar.
     vars: { a: { de: 2, ate: 9 } }            inteiro de 2 a 9
           { r: { de: 0.5, ate: 3, passo: 0.5 } } de 0.5 a 3, de meio em meio
           { nome: ['Ana', 'Bia', 'Caio'] }   um item da lista
     se: 'a % b !== 0'                         condição para aceitar o sorteio (em JavaScript)
   Nos textos do exercício, {a} vira o valor de a, e {= expressão} é calculada em JavaScript com as variáveis.
   Funções que dá para usar nas expressões: pyf(x) mostra um número como o Python mostra um float (3 vira 3.0),
   fix(x, casas) fixa as casas decimais, e tudo do Math (Math.floor, Math.round...).
   Nos exercícios de código sem "saida", a saída esperada é a da solução, rodada na hora.
   Este arquivo também é usado pelo validador (Node), por isso não usa nada da página.
   SPDX-License-Identifier: AGPL-3.0-or-later · Copyright (C) 2026 Contribuidores do Trilha Livre */

const AJUDA_VARS = {
  pyf: x => Number.isInteger(x) ? x.toFixed(1) : String(x),
  fix: (x, casas) => Number(x).toFixed(casas)
};
function sortearVar(def, rnd) {
  if (Array.isArray(def)) return def[Math.floor(rnd() * def.length)];
  const passo = def.passo || 1;
  const n = Math.round((def.ate - def.de) / passo);
  const v = def.de + Math.floor(rnd() * (n + 1)) * passo;
  return Number(v.toFixed(10)); // evita 0.30000000000000004 nos passos decimais
}
function avaliarVars(expr, vals) {
  const nomes = [...Object.keys(AJUDA_VARS), ...Object.keys(vals)];
  return new Function(...nomes, 'return (' + expr + ');')(...Object.values(AJUDA_VARS), ...Object.values(vals));
}
function trocarVars(txt, vals) {
  if (typeof txt !== 'string') return txt;
  return txt.replace(/\{=([^{}]+)\}/g, (_, e) => String(avaliarVars(e, vals)))
    .replace(/\{([A-Za-z_]\w*)\}/g, (m, k) => (k in vals ? String(vals[k]) : m));
}
const CAMPOS_VARS = ['p', 'code', 'start', 'sol', 'saida', 'dica', 'exp', 'ops', 'bank', 'c', 'lines', 'entrada', 'antes', 'aceita'];
const repetidos = lista => Array.isArray(lista) && new Set(lista).size !== lista.length;
function instanciar(ex, rnd = Math.random) {
  if (!ex.vars) return ex;
  for (let tentativa = 0; tentativa < 60; tentativa++) {
    const vals = {};
    for (const [k, def] of Object.entries(ex.vars)) vals[k] = sortearVar(def, rnd);
    if (ex.se && !avaliarVars(ex.se, vals)) continue;
    const inst = { ...ex, valores: vals };
    for (const campo of CAMPOS_VARS) {
      if (ex[campo] == null) continue;
      inst[campo] = Array.isArray(ex[campo]) ? ex[campo].map(x => trocarVars(x, vals)) : trocarVars(ex[campo], vals);
    }
    // um sorteio que deixa duas opções ou duas linhas iguais confunde: tenta de novo
    if (repetidos(inst.ops) || repetidos(inst.lines)) continue;
    if (inst.t === 'complete' && inst.bank.filter(b => inst.c.includes(b)).length > inst.c.length) continue;
    return inst;
  }
  return null; // o validador acusa: as condições quase nunca dão certo
}

if (typeof module !== 'undefined' && module.exports) module.exports = { instanciar, trocarVars, sortearVar };
