/* Trilha Livre · exercícios que mudam
   Um exercício com "vars" ganha valores sorteados cada vez que aparece, para dar para praticar de novo sem decorar.
     vars: { a: { de: 2, ate: 9 } }            inteiro de 2 a 9
           { r: { de: 0.5, ate: 3, passo: 0.5 } } de 0.5 a 3, de meio em meio
           { nome: ['Ana', 'Bia', 'Caio'] }   um item da lista
     se: 'a % b !== 0'                         condição para aceitar o sorteio (em JavaScript)
   Nos textos do exercício, {a} vira o valor de a, e {= expressão} é calculada em JavaScript com as variáveis.
   Funções que dá para usar nas expressões: pyf(x) mostra um número como o Python mostra um float (3 vira 3.0),
   fix(x, casas) fixa as casas decimais, br(x) escreve o número do jeito brasileiro (2,5 e 1.250) e tudo do Math.
   Nos exercícios de código sem "saida", a saída esperada é a da solução, rodada na hora.
   Este arquivo também é usado pelo validador (Node), por isso não usa nada da página.
   SPDX-License-Identifier: AGPL-3.0-or-later · Copyright (C) 2026 Contribuidores do Trilha Livre */

const AJUDA_VARS = {
  pyf: x => Number.isInteger(x) ? x.toFixed(1) : String(x),
  fix: (x, casas) => Number(x).toFixed(casas),
  // número escrito do jeito brasileiro: br(1250.5) dá 1.250,5; br(2, 2) dá 2,00
  br: (x, casas) => Number(x).toLocaleString('pt-BR', casas == null ? { maximumFractionDigits: 6 } : { minimumFractionDigits: casas, maximumFractionDigits: casas }),
  // sinal para montar fórmulas: sn(5) dá "+ 5" e sn(-5) dá "- 5" (dentro de $$ $$ vira −)
  sn: n => (n < 0 ? '- ' + -n : '+ ' + n),
  // termos de fórmulas sem o coeficiente 1: cf(1, 'x') dá "x", cf(-1, 'x') dá "-x" e cf(3, 'x') dá "3x";
  // tm(-1, 'x') dá "- x", tm(4, 'x') dá "+ 4x" e tm(0, 'x') some; pr(-5) dá "(-5)", para o número negativo vir entre parênteses
  cf: (a, v) => (a === 1 ? v : a === -1 ? '-' + v : a + v),
  tm: (a, v) => (a === 0 ? '' : (a < 0 ? '- ' : '+ ') + (Math.abs(a) === 1 ? v : Math.abs(a) + v)),
  pr: n => (n < 0 ? '(' + n + ')' : String(n)),
  // para a matemática: mdc(12, 18) dá 6; mmc(4, 6) dá 12; fr(6, 8) dá a fração irredutível "3/4" (ou "2", se for inteira)
  mdc: (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; },
  mmc: (a, b) => Math.abs(a * b) / AJUDA_VARS.mdc(a, b),
  fr: (n, d) => { const m = AJUDA_VARS.mdc(n, d) * (d < 0 ? -1 : 1); return d / m === 1 ? String(n / m) : `${n / m}/${d / m}`; }
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
const CAMPOS_VARS = ['p', 'code', 'start', 'sol', 'saida', 'dica', 'exp', 'ops', 'bank', 'c', 'lines', 'entrada', 'antes', 'aceita', 'r', 'prefixo', 'unidade', 'plano'];
// troca as variáveis em textos, listas e objetos (como o plano de um gráfico)
const trocarFundo = (v, vals) => typeof v === 'string' ? trocarVars(v, vals)
  : Array.isArray(v) ? v.map(x => trocarFundo(x, vals))
  : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, trocarFundo(x, vals)])) : v;
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
      inst[campo] = trocarFundo(ex[campo], vals);
    }
    // um sorteio que deixa duas opções ou duas linhas iguais confunde: tenta de novo
    if (repetidos(inst.ops) || repetidos(inst.lines)) continue;
    if (inst.t === 'complete' && inst.bank.filter(b => inst.c.includes(b)).length > inst.c.length) continue;
    return inst;
  }
  return null; // o validador acusa: as condições quase nunca dão certo
}

if (typeof module !== 'undefined' && module.exports) module.exports = { instanciar, trocarVars, sortearVar };
