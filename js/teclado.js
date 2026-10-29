/* Trilha Livre · teclado de código
   Barra com os símbolos mais usados em JavaScript, Python, HTML e CSS, para digitar código no celular.
   Aparece só em telas de toque. Os pares, como ( ), já entram com o cursor no meio.
   SPDX-License-Identifier: AGPL-3.0-or-later · Copyright (C) 2026 Contribuidores do Trilha Livre */

const TECLAS = [
  { l: '⇥', ins: '  ', nome: 'Tab' },
  { l: '( )', ins: '()', volta: 1, nome: 'parênteses' },
  { l: '" "', ins: '""', volta: 1, nome: 'aspas' },
  { l: ';', nome: 'ponto e vírgula' },
  { l: '{ }', ins: '{}', volta: 1, nome: 'chaves' },
  { l: '=', nome: 'igual' },
  { l: '.', nome: 'ponto' },
  { l: '[ ]', ins: '[]', volta: 1, nome: 'colchetes' },
  { l: ',', nome: 'vírgula' },
  { l: '+', nome: 'mais' }, { l: '-', nome: 'menos' }, { l: '*', nome: 'vezes' }, { l: '/', nome: 'dividir' }, { l: '%', nome: 'resto' },
  { l: '<', nome: 'menor' }, { l: '>', nome: 'maior' },
  { l: '===', nome: 'igual estrito' }, { l: '!', nome: 'não' }, { l: '&&', nome: 'e' }, { l: '||', nome: 'ou' },
  { l: '=>', nome: 'seta' }, { l: ':', nome: 'dois-pontos' },
  { l: '` `', ins: '``', volta: 1, nome: 'crases' }, { l: '${ }', ins: '${}', volta: 1, nome: 'interpolação' },
  { l: '←', mover: -1, nome: 'cursor para a esquerda' }, { l: '→', mover: 1, nome: 'cursor para a direita' }
];

// símbolos para HTML e CSS
const TECLAS_WEB = [
  { l: '⇥', ins: '  ', nome: 'Tab' },
  { l: '< >', ins: '<>', volta: 1, nome: 'sinais de tag' },
  { l: '</', nome: 'fechar tag' },
  { l: '/>', nome: 'fim de tag' },
  { l: '=', nome: 'igual' },
  { l: '" "', ins: '""', volta: 1, nome: 'aspas' },
  { l: '{ }', ins: '{}', volta: 1, nome: 'chaves' },
  { l: ':', nome: 'dois-pontos' }, { l: ';', nome: 'ponto e vírgula' },
  { l: '.', nome: 'ponto' }, { l: '#', nome: 'cerquilha' }, { l: '-', nome: 'hífen' },
  { l: 'px', nome: 'px' }, { l: '%', nome: 'por cento' }, { l: '!', nome: 'exclamação' },
  { l: '( )', ins: '()', volta: 1, nome: 'parênteses' }, { l: ',', nome: 'vírgula' },
  { l: '←', mover: -1, nome: 'cursor para a esquerda' }, { l: '→', mover: 1, nome: 'cursor para a direita' }
];
// símbolos para Python: o ⇥ põe 4 espaços, o recuo padrão da linguagem
const TECLAS_PY = [
  { l: '⇥', ins: '    ', nome: 'Tab' },
  { l: ':', nome: 'dois-pontos' },
  { l: '( )', ins: '()', volta: 1, nome: 'parênteses' },
  { l: '" "', ins: '""', volta: 1, nome: 'aspas' },
  { l: '=', nome: 'igual' },
  { l: '[ ]', ins: '[]', volta: 1, nome: 'colchetes' },
  { l: '.', nome: 'ponto' }, { l: ',', nome: 'vírgula' },
  { l: 'f" "', ins: 'f""', volta: 1, nome: 'f-string' }, { l: '{ }', ins: '{}', volta: 1, nome: 'chaves' },
  { l: '_', nome: 'sublinhado' }, { l: '#', nome: 'comentário' },
  { l: '+', nome: 'mais' }, { l: '-', nome: 'menos' }, { l: '*', nome: 'vezes' }, { l: '/', nome: 'dividir' },
  { l: '//', nome: 'divisão inteira' }, { l: '%', nome: 'resto' }, { l: '**', nome: 'potência' },
  { l: '==', nome: 'igual a' }, { l: '!=', nome: 'diferente de' }, { l: '<', nome: 'menor' }, { l: '>', nome: 'maior' },
  { l: "' '", ins: "''", volta: 1, nome: 'aspas simples' },
  { l: '←', mover: -1, nome: 'cursor para a esquerda' }, { l: '→', mover: 1, nome: 'cursor para a direita' }
];

// símbolos para comandos de terminal (curso de Git)
const TECLAS_SHELL = [
  { l: '-', nome: 'hífen' }, { l: '--', nome: 'dois hífens' }, { l: '" "', ins: '""', volta: 1, nome: 'aspas' },
  { l: '.', nome: 'ponto' }, { l: '/', nome: 'barra' }, { l: '~', nome: 'til' }, { l: '*', nome: 'asterisco' },
  { l: ':', nome: 'dois-pontos' }, { l: '@', nome: 'arroba' }, { l: '_', nome: 'sublinhado' }, { l: '^', nome: 'circunflexo' },
  { l: '←', mover: -1, nome: 'cursor para a esquerda' }, { l: '→', mover: 1, nome: 'cursor para a direita' }
];
// respostas numéricas: o teclado numérico do celular não tem sinal de menos nem barra
const TECLAS_NUM = [
  { l: '\u2212', ins: '-', nome: 'sinal de menos' }, { l: '/', nome: 'barra de fração' }, { l: ',', nome: 'vírgula' },
  { l: '←', mover: -1, nome: 'cursor para a esquerda' }, { l: '→', mover: 1, nome: 'cursor para a direita' }
];
const CONJUNTOS = { js: TECLAS, web: TECLAS_WEB, py: TECLAS_PY, shell: TECLAS_SHELL, num: TECLAS_NUM };

function tecladoHTML(alvo, conjunto) {
  const nome = CONJUNTOS[conjunto] ? conjunto : 'js';
  return `<div class="teclas" role="toolbar" aria-label="${nome === 'num' ? 'Símbolos para a resposta' : 'Símbolos de código'}" data-alvo="${alvo}" data-conjunto="${nome}">${
    CONJUNTOS[nome].map((t, i) => `<button type="button" class="tecla" data-t="${i}" aria-label="${esc(t.nome)}">${esc(t.l)}</button>`).join('')}</div>`;
}
const teclaDe = b => CONJUNTOS[b.closest('.teclas').dataset.conjunto || 'js'][+b.dataset.t];

function inserirTecla(ta, t) {
  const ini = ta.selectionStart, fim = ta.selectionEnd;
  if (t.mover) {
    const p = Math.max(0, Math.min(ta.value.length, ini + t.mover));
    ta.selectionStart = ta.selectionEnd = p;
    return;
  }
  const txt = t.ins != null ? t.ins : t.l;
  // com texto selecionado, os pares envolvem a seleção
  if (t.volta && fim > ini) {
    const sel = ta.value.slice(ini, fim);
    const abre = txt.slice(0, txt.length - t.volta), fecha = txt.slice(txt.length - t.volta);
    ta.value = ta.value.slice(0, ini) + abre + sel + fecha + ta.value.slice(fim);
    ta.selectionStart = ini + abre.length; ta.selectionEnd = ini + abre.length + sel.length;
  } else {
    ta.value = ta.value.slice(0, ini) + txt + ta.value.slice(fim);
    ta.selectionStart = ta.selectionEnd = ini + txt.length - (t.volta || 0);
  }
  ta.dispatchEvent(new Event('input', { bubbles: true }));
}

// pointerdown com preventDefault mantém o foco (e o teclado do celular) no editor
document.addEventListener('pointerdown', e => {
  const b = e.target.closest('.tecla');
  if (!b) return;
  e.preventDefault();
  const ta = $(b.closest('.teclas').dataset.alvo);
  if (!ta) return;
  if (document.activeElement !== ta) ta.focus();
  inserirTecla(ta, teclaDe(b));
});
// teclado físico ou leitor de tela: o clique comum também funciona
document.addEventListener('click', e => {
  const b = e.target.closest('.tecla');
  if (!b || e.detail !== 0) return; // e.detail 0 = ativado por teclado
  const ta = $(b.closest('.teclas').dataset.alvo);
  if (ta) { inserirTecla(ta, teclaDe(b)); }
});
