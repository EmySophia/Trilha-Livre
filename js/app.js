/* Trilha Livre · app
   Telas (cursos, trilha, prática, biblioteca, perfil), sessões de estudo (lição, revisão, desafio, nivelamento) e progresso.
   Depende de conteudo/*.js (TRILHA) e de js/nucleo.js, efeitos.js, teclado.js, terminal.js e pwa.js.
   SPDX-License-Identifier: AGPL-3.0-or-later · Copyright (C) 2026 Contribuidores do Trilha Livre */

// Link do repositório no GitHub. Preencha quando publicar: a AGPL pede que quem usa o app
// encontre o código-fonte, e o rodapé mostra este link.
const REPOSITORIO = 'https://github.com/EmySophia/Trilha-Livre';

const AREAS = TRILHA.areas;
const CURSOS = TRILHA.cursos.map(c => ({ ...c, disponivel: TRILHA.niveis.some(n => n.curso === c.id) }));
const TODAS = TRILHA.unidades.flatMap(u => u.licoes.map(l => ({ ...l, unit: u }))); // lições de todos os cursos
const LICAO = Object.fromEntries(TODAS.map(l => [l.id, l]));
const TODOS_DESAFIOS = TRILHA.desafios;
const areaDe = id => AREAS.find(a => a.id === id) || { nome: '' };

// Curso escolhido. Estas variáveis mudam quando a pessoa troca de curso.
let CURSO, NIVEIS = [], UNITS = [], ALL = [], POS = {}, DESAFIOS = [], NIVEIS_TESTAVEIS = [];
function usarCurso(id) {
  CURSO = CURSOS.find(c => c.id === id && c.disponivel) || CURSOS.find(c => c.disponivel);
  NIVEIS = TRILHA.niveis.filter(n => n.curso === CURSO.id);
  UNITS = TRILHA.unidades.filter(u => u.curso === CURSO.id);
  ALL = TODAS.filter(l => l.unit.curso === CURSO.id);
  POS = Object.fromEntries(ALL.map((l, i) => [l.id, i]));
  DESAFIOS = TODOS_DESAFIOS.filter(d => d.curso === CURSO.id);
  // cursos sem programação não usam o terminal JavaScript
  const tb = document.getElementById('termBtnL'); if (tb) tb.hidden = CURSO.linguagem === 'texto';
  // o último nível (normalmente o de projetos) não entra no teste de nivelamento
  NIVEIS_TESTAVEIS = NIVEIS.length > 1 ? NIVEIS.slice(0, -1).map(n => n.n) : [];
}
const INTERVALOS = [1, 3, 7, 14, 30, 60]; // dias até a próxima revisão, por "caixa"
const DIF = { facil: { nome: 'Fácil', xp: 10 }, medio: { nome: 'Médio', xp: 15 }, dificil: { nome: 'Difícil', xp: 20 } };
const METAS = [{ xp: 10, nome: 'Leve' }, { xp: 30, nome: 'Normal' }, { xp: 50, nome: 'Puxada' }, { xp: 100, nome: 'Intensa' }];

/* =========================================================
   Datas, XP e sequência de dias
   ========================================================= */
const hoje = () => dayKey(new Date());
const dataDe = k => { const [y, m, d] = k.split('-').map(Number); return new Date(y, m - 1, d); };
const somarDias = (k, n) => { const d = dataDe(k); d.setDate(d.getDate() + n); return dayKey(d); };
const diasEntre = (a, b) => Math.round((dataDe(b) - dataDe(a)) / 86400000);
const fmtData = k => k.split('-').reverse().join('/');

function sequenciaAtual() { return (S.last === hoje() || S.last === somarDias(hoje(), -1)) ? S.streak : 0; }
function xpHoje() { return S.hoje.dia === hoje() ? S.hoje.xp : 0; }
function ganharXP(n) { // devolve true se a meta do dia foi batida agora
  S.xp += n;
  if (S.hoje.dia !== hoje()) S.hoje = { dia: hoje(), xp: 0 };
  const antes = S.hoje.xp;
  S.hoje.xp += n;
  if (antes < S.meta && S.hoje.xp >= S.meta) { S.metaDias++; return true; }
  return false;
}
function marcarDia() {
  const h = hoje();
  if (S.last !== h) { S.streak = S.last === somarDias(h, -1) ? S.streak + 1 : 1; S.last = h; }
  S.maxStreak = Math.max(S.maxStreak, S.streak);
}

/* =========================================================
   Progresso na trilha
   ========================================================= */
const feita = id => !!S.done[id];
const nFeitas = () => ALL.filter(l => feita(l.id)).length;
const licoesDoNivel = n => ALL.filter(l => l.unit.nivel === n);
const nivelCompleto = n => licoesDoNivel(n).every(l => feita(l.id));
const nPratica = () => DESAFIOS.filter(d => S.pratica[d.id]).length;
const nFeitasTotal = () => TODAS.filter(l => feita(l.id)).length;
const nPraticaTotal = () => TODOS_DESAFIOS.filter(d => S.pratica[d.id]).length;
const licoesDoCurso = id => TODAS.filter(l => l.unit.curso === id);
const nivelCompletoDe = (curso, n) => licoesDoCurso(curso).filter(l => l.unit.nivel === n).every(l => feita(l.id));
const cursoCompleto = id => { const ls = licoesDoCurso(id); return ls.length > 0 && ls.every(l => feita(l.id)); };
const nivelamentoDoCurso = () => (S.nivelamentos || {})[CURSO.id];
const indiceAtual = () => ALL.findIndex(l => !feita(l.id));
// a primeira lição não feita de cada nível fica liberada, então dá para começar por qualquer nível
function primeiraPendentePorNivel() {
  const r = {};
  ALL.forEach((l, i) => { if (!feita(l.id) && r[l.unit.nivel] == null) r[l.unit.nivel] = i; });
  return r;
}
const liberada = i => feita(ALL[i].id) || primeiraPendentePorNivel()[ALL[i].unit.nivel] === i;

/* =========================================================
   Conquistas
   ========================================================= */
const NOMES_NIVEL = ['Pensador computacional', 'Fundamentos firmes', 'Domador de dados', 'Mestre das funções', 'Algoritmista', 'Caçador de bugs', 'Construtor'];
const CONQUISTAS = [
  { id: 'licao-1', titulo: 'Primeiro passo', desc: 'Conclua sua primeira lição', ic: 'check', ok: () => nFeitasTotal() >= 1 },
  { id: 'licao-10', titulo: 'Pegando o ritmo', desc: 'Conclua 10 lições', ic: 'check', ok: () => nFeitasTotal() >= 10 },
  { id: 'licao-25', titulo: 'Meio caminho', desc: 'Conclua 25 lições', ic: 'check', ok: () => nFeitasTotal() >= 25 },
  { id: 'trilha', titulo: 'Curso completo', desc: 'Conclua todas as lições de um curso', ic: 'trophy', ok: () => CURSOS.some(c => cursoCompleto(c.id)) },
  ...TRILHA.niveis.filter(nv => nv.curso === 'logica-js').map((nv, i) => ({ id: 'nivel-' + nv.n, titulo: NOMES_NIVEL[i] || 'Nível ' + nv.n, desc: `Complete o Nível ${nv.n} de lógica: ${nv.titulo}`, ic: 'nivel', n: nv.n, ok: () => nivelCompletoDe('logica-js', nv.n) })),
  { id: 'perfeita-1', titulo: 'Sem errar nada', desc: 'Termine uma lição sem nenhum erro', ic: 'alvo', ok: () => S.perfeitas >= 1 },
  { id: 'perfeita-10', titulo: 'Precisão', desc: 'Termine 10 lições sem erros', ic: 'alvo', ok: () => S.perfeitas >= 10 },
  { id: 'codigo-1', titulo: 'De primeira', desc: 'Acerte um exercício de código na primeira tentativa', ic: 'code', ok: () => S.codigoPrimeira >= 1 },
  { id: 'seq-3', titulo: 'Três dias seguidos', desc: 'Estude 3 dias seguidos', ic: 'flame', ok: () => S.maxStreak >= 3 },
  { id: 'seq-7', titulo: 'Uma semana inteira', desc: 'Estude 7 dias seguidos', ic: 'flame', ok: () => S.maxStreak >= 7 },
  { id: 'seq-30', titulo: 'Um mês sem parar', desc: 'Estude 30 dias seguidos', ic: 'flame', ok: () => S.maxStreak >= 30 },
  { id: 'xp-100', titulo: 'Cem pontos', desc: 'Junte 100 XP', ic: 'star', ok: () => S.xp >= 100 },
  { id: 'xp-500', titulo: 'Quinhentos pontos', desc: 'Junte 500 XP', ic: 'star', ok: () => S.xp >= 500 },
  { id: 'xp-1000', titulo: 'Mil pontos', desc: 'Junte 1.000 XP', ic: 'star', ok: () => S.xp >= 1000 },
  { id: 'meta-1', titulo: 'Meta batida', desc: 'Alcance a meta do dia', ic: 'trophy', ok: () => S.metaDias >= 1 },
  { id: 'meta-7', titulo: 'Constância', desc: 'Bata a meta em 7 dias diferentes', ic: 'trophy', ok: () => S.metaDias >= 7 },
  { id: 'revisao-1', titulo: 'Memória fresca', desc: 'Faça sua primeira revisão', ic: 'refresh', ok: () => S.revisoes >= 1 },
  { id: 'revisao-10', titulo: 'Nada se perde', desc: 'Faça 10 revisões', ic: 'refresh', ok: () => S.revisoes >= 10 },
  { id: 'pratica-1', titulo: 'Treino livre', desc: 'Resolva um desafio da prática', ic: 'code', ok: () => nPraticaTotal() >= 1 },
  { id: 'pratica-10', titulo: 'Dez desafios', desc: 'Resolva 10 desafios da prática', ic: 'code', ok: () => nPraticaTotal() >= 10 },
  { id: 'pratica-todos', titulo: 'Banco zerado', desc: 'Resolva todos os desafios da prática', ic: 'trophy', ok: () => TODOS_DESAFIOS.length > 0 && nPraticaTotal() === TODOS_DESAFIOS.length },
  { id: 'terminal-10', titulo: 'Mão no terminal', desc: 'Rode 10 comandos no terminal', ic: 'term', ok: () => S.termCmds >= 10 },
  { id: 'terminal-100', titulo: 'Terminal raiz', desc: 'Rode 100 comandos no terminal', ic: 'term', ok: () => S.termCmds >= 100 }
];
function verificarConquistas() {
  const novas = [];
  for (const c of CONQUISTAS) if (!S.conquistas[c.id] && c.ok()) { S.conquistas[c.id] = hoje(); novas.push(c); }
  return novas;
}
function medalha(c, ganha) {
  const dentro = c.ic === 'nivel' ? `<b>${c.n}</b>` : (IC[c.ic] || IC.star);
  return `<span class="medalha m-${c.ic}${ganha ? ' ganha' : ''}" aria-hidden="true">${dentro}</span>`;
}

let toastT = null;
function toast(html, texto) {
  const t = $('toast');
  t.innerHTML = html; t.hidden = false;
  if (texto) anunciar(texto);
  clearTimeout(toastT);
  toastT = setTimeout(() => { t.hidden = true; }, 3800);
}
// chamado pelo terminal a cada comando executado
function aoUsarTerminal() {
  S.termCmds++;
  const novas = verificarConquistas();
  save();
  novas.forEach(c => { som('conquista'); toast(`${medalha(c, true)}<span><b>Nova conquista</b>${esc(c.titulo)}</span>`, 'Nova conquista: ' + c.titulo); });
}

/* =========================================================
   Revisão espaçada
   Cada lição concluída entra numa "caixa". Acertou tudo na revisão: sobe de caixa e o
   intervalo cresce (1, 3, 7, 14, 30, 60 dias). Errou: volta para a primeira caixa.
   Exercícios errados em qualquer lugar também voltam nas revisões até você acertar de primeira.
   ========================================================= */
function chavesErro() {
  return Object.keys(S.erros).filter(k => {
    const [id, i] = k.split(':');
    const l = LICAO[id];
    return l && l.exs[+i] && l.exs[+i].t !== 'texto';
  });
}
function estadoRevisao() {
  const h = hoje();
  const due = Object.keys(S.rev).filter(id => LICAO[id] && S.rev[id].due <= h);
  const futuras = Object.values(S.rev).filter(r => r.due > h).map(r => diasEntre(h, r.due));
  const erros = chavesErro().length;
  return { due, licoes: due.length, erros, pendentes: due.length + erros > 0, proxima: futuras.length ? Math.min(...futuras) : null };
}
function iniciarRevisao(livre) {
  const rv = estadoRevisao();
  const itens = [], usados = new Set();
  const add = (id, i) => {
    const key = `${id}:${i}`;
    if (usados.has(key)) return;
    usados.add(key);
    itens.push({ ex: LICAO[id].exs[i], key, lid: id });
  };
  if (!livre) shuffle(chavesErro()).slice(0, 4).forEach(k => { const [id, i] = k.split(':'); add(id, +i); });
  const fontes = livre ? TODAS.filter(l => feita(l.id)).map(l => l.id) : rv.due;
  for (const id of shuffle(fontes)) {
    const exs = LICAO[id].exs;
    shuffle(exs.map((_, i) => i).filter(i => exs[i].t !== 'texto')).slice(0, 2).forEach(i => add(id, i));
  }
  let codigos = 0;
  const final = shuffle(itens).filter(it => (it.ex.t !== 'codigo' && it.ex.t !== 'web') || ++codigos <= 2).slice(0, 10);
  if (!final.length) return;
  const presentes = new Set(final.map(it => it.lid));
  iniciar({ tipo: 'revisao', livre, dueLids: livre ? [] : rv.due.filter(id => presentes.has(id)), itens: final });
}

/* =========================================================
   Teste de nivelamento
   Duas perguntas por nível, do 1 ao 6, em ordem. Errou uma, o teste termina ali.
   Os níveis em que a pessoa acertou tudo ficam marcados como concluídos.
   ========================================================= */
function iniciarNivelamento() {
  const itens = [];
  for (const n of NIVEIS_TESTAVEIS) {
    const candidatos = [];
    for (const l of licoesDoNivel(n)) {
      l.exs.forEach((ex, i) => { if (['escolha', 'complete', 'ordene'].includes(ex.t) && !ex.plain) candidatos.push({ ex, key: `niv:${l.id}:${i}`, lid: l.id, nivel: n }); });
    }
    // de lições diferentes, para cobrir mais do nível
    const porLicao = {};
    for (const c of shuffle(candidatos)) if (!porLicao[c.lid]) porLicao[c.lid] = c;
    itens.push(...shuffle(Object.values(porLicao)).slice(0, 2));
  }
  iniciar({ tipo: 'nivelamento', itens, certos: {} });
}
function niveisDispensados(certos) {
  let n = 0;
  for (const nv of NIVEIS_TESTAVEIS) {
    const doNivel = L.itens.filter(it => it.nivel === nv);
    if (doNivel.length && doNivel.every(it => certos[it.key])) n = nv; else break;
  }
  return n;
}

/* =========================================================
   Navegação entre telas
   ========================================================= */
const VIEWS = ['cursos', 'trilha', 'pratica', 'livros', 'perfil'];
let viewAtual = 'trilha';
const telaDaHash = () => {
  const h = location.hash.replace('#', '');
  if (h === 'conquistas') return 'perfil'; // link antigo
  if (VIEWS.includes(h)) return h;
  return S.curso ? 'trilha' : 'cursos'; // na primeira visita, a pessoa escolhe o curso
};

function mostrar(id) {
  // as telas têm id "tela-..." para o navegador não rolar a página até elas quando o endereço muda (#perfil, #pratica)
  [...VIEWS, 'lesson', 'fim'].forEach(v => { $(VIEWS.includes(v) ? 'tela-' + v : v).hidden = v !== id; });
  $('barra').hidden = !VIEWS.includes(id);
  $('actions').hidden = id !== 'lesson';
  window.scrollTo(0, 0);
}
function irPara(v, rolarPara) {
  viewAtual = v;
  renderStats();
  document.querySelectorAll('[data-tab]').forEach(a => {
    const ativo = a.dataset.tab === v;
    a.classList.toggle('ativo', ativo);
    if (ativo) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  });
  ({ cursos: renderCursos, trilha: renderTrilha, pratica: renderPratica, livros: renderLivros, perfil: renderPerfil })[v]();
  mostrar(v);
  if (rolarPara && $(rolarPara)) $(rolarPara).scrollIntoView();
}
function voltar(v, rolarPara) {
  L = null;
  v = v || viewAtual;
  if (telaDaHash() !== v) { rolarDepois = rolarPara; location.hash = v; } // o hashchange chama irPara
  else irPara(v, rolarPara);
}
let rolarDepois = null;
window.addEventListener('hashchange', () => { if (!L) { const r = rolarDepois; rolarDepois = null; irPara(telaDaHash(), r); } });

function renderStats() {
  $('stats').innerHTML = `
    <button class="term-open" data-term aria-label="Abrir terminal">${IC.term}<span>Terminal</span></button>
    <span class="stat fire" title="Dias seguidos estudando"><span class="sr">Dias seguidos:</span>${IC.flame}${sequenciaAtual()}</span>
    <span class="stat xp" title="Pontos de experiência"><span class="sr">XP:</span>${IC.star}${S.xp}</span>`;
}
$('barra').addEventListener('click', e => { if (e.target.closest('[data-term]')) openTerm(); });

/* =========================================================
   Tela: Cursos (catálogo por área)
   ========================================================= */
let filtroArea = 'todas';
function cartaoCurso(c) {
  const ls = licoesDoCurso(c.id), feitas = ls.filter(l => feita(l.id)).length;
  const atual = S.curso === c.id;
  const niveis = TRILHA.niveis.filter(n => n.curso === c.id).length;
  const desafiosN = TODOS_DESAFIOS.filter(d => d.curso === c.id).length;
  let meta, acao;
  if (c.disponivel) {
    meta = `<p class="cc-meta">${niveis} ${niveis === 1 ? 'nível' : 'níveis'} · ${ls.length} lições${desafiosN ? ` · ${desafiosN} desafios` : ''}</p>`
      + (feitas ? `<div class="cc-prog"><div class="bar" aria-hidden="true"><i style="width:${feitas / ls.length * 100}%"></i></div><span>${feitas} de ${ls.length}</span></div>` : '');
    acao = `<button class="btn-card${atual ? '' : ' sec'}" data-curso="${esc(c.id)}" aria-label="${feitas ? 'Continuar' : 'Começar'} ${esc(c.titulo)}">${feitas ? 'Continuar' : 'Começar'}</button>`;
  } else {
    meta = '<p class="cc-meta"><span class="breve-tag">Em construção</span></p>';
    acao = '';
  }
  return `<article class="curso-card${c.disponivel ? '' : ' breve'}${atual ? ' atual' : ''}">
    <span class="selo selo-${esc(c.area)}" aria-hidden="true">${esc(c.sigla)}</span>
    <div class="cc-txt">${atual ? '<p class="kind cc-atual">Seu curso atual</p>' : ''}<h3>${esc(c.titulo)}</h3><p>${esc(c.desc)}</p>${meta}</div>
    ${acao}
  </article>`;
}
function renderCursos() {
  const areasVisiveis = AREAS.filter(a => filtroArea === 'todas' || a.id === filtroArea);
  const filtros = [['todas', 'Todas', CURSOS.length], ...AREAS.map(a => [a.id, a.nome, CURSOS.filter(c => c.area === a.id).length])];
  const temBreve = CURSOS.some(c => !c.disponivel);
  $('tela-cursos').innerHTML = `
    <div class="intro">
      <p class="kind">Catálogo</p>
      <h1>Escolha o que aprender</h1>
      <p>Todos os cursos são gratuitos e abertos. O progresso de cada curso fica guardado separado, então você pode trocar quando quiser.</p>
    </div>
    <div class="filtros" role="group" aria-label="Filtrar por área">
      ${filtros.map(([k, n, q]) => `<button class="filtro${filtroArea === k ? ' ativo' : ''}" data-area="${esc(k)}" aria-pressed="${filtroArea === k}">${esc(n)}<span>${q}</span></button>`).join('')}
    </div>
    ${areasVisiveis.map(a => `<section class="area" aria-labelledby="area-${esc(a.id)}">
      <div class="area-head"><h2 id="area-${esc(a.id)}">${esc(a.nome)}</h2><p>${esc(a.desc)}</p></div>
      <div class="cursos-grid">${CURSOS.filter(c => c.area === a.id).map(cartaoCurso).join('')}</div>
    </section>`).join('')}
    ${temBreve ? `<footer class="foot"><p>Os cursos em construção ainda não têm lições. Quer ajudar a escrever um deles? O guia de contribuição (CONTRIBUINDO.md) explica como criar lições sem precisar mexer no app.${REPOSITORIO ? ` <a href="${esc(REPOSITORIO)}" target="_blank" rel="noopener">Ver o repositório</a>.` : ''}</p></footer>` : ''}`;
}
$('tela-cursos').addEventListener('click', e => {
  const f = e.target.closest('[data-area]');
  if (f) { filtroArea = f.dataset.area; renderCursos(); return; }
  const b = e.target.closest('[data-curso]');
  if (b) { S.curso = b.dataset.curso; save(); usarCurso(S.curso); som('toque'); voltar('trilha'); }
});

/* =========================================================
   Tela: Trilha
   ========================================================= */
function painelHTML() {
  const xh = xpHoje(), pct = Math.min(1, xh / S.meta), r = 24, c = +(2 * Math.PI * r).toFixed(2);
  let h = `<div class="painel">
    <div class="card">
      <svg class="anel" viewBox="0 0 60 60" aria-hidden="true"><circle cx="30" cy="30" r="${r}" class="anel-fundo"/><circle cx="30" cy="30" r="${r}" class="anel-valor" stroke-dasharray="${c}" stroke-dashoffset="${(c * (1 - pct)).toFixed(2)}"/></svg>
      <div class="card-txt"><p class="kind">Meta do dia</p><p class="card-num">${xh} <small>de ${S.meta} XP</small></p><p class="card-sub">${xh >= S.meta ? 'Meta batida. Bom trabalho!' : `Faltam ${S.meta - xh} XP`}</p></div>
    </div>`;
  if (nFeitas()) {
    const rv = estadoRevisao();
    if (rv.pendentes) {
      const partes = [];
      if (rv.licoes) partes.push(rv.licoes + (rv.licoes === 1 ? ' lição' : ' lições'));
      if (rv.erros) partes.push(rv.erros + (rv.erros === 1 ? ' erro' : ' erros'));
      h += `<div class="card rev">
        <span class="card-ic" aria-hidden="true">${IC.refresh}</span>
        <div class="card-txt"><p class="kind">Revisão do dia</p><p class="card-num">${partes.join(' + ')}</p><p class="card-sub">Revisar agora fixa o que você aprendeu.</p></div>
        <button class="btn-card" data-revisar="">Revisar</button></div>`;
    } else {
      h += `<div class="card rev">
        <span class="card-ic calmo" aria-hidden="true">${IC.refresh}</span>
        <div class="card-txt"><p class="kind">Revisão</p><p class="card-num">Em dia</p><p class="card-sub">${rv.proxima != null ? (rv.proxima <= 1 ? 'Próxima revisão amanhã.' : `Próxima revisão em ${rv.proxima} dias.`) : 'Nada para revisar.'}</p></div>
        <button class="btn-card sec" data-revisar="livre">Praticar</button></div>`;
    }
  }
  if (NIVEIS_TESTAVEIS.length && !nivelamentoDoCurso() && nFeitas() < 5) {
    h += `<div class="card niv">
      <span class="card-ic" aria-hidden="true">${IC.alvo}</span>
      <div class="card-txt"><p class="kind">${CURSO.area === 'programacao' ? 'Já sabe programar?' : 'Já conhece o assunto?'}</p><p class="card-num">Teste de nivelamento</p><p class="card-sub">Até ${NIVEIS_TESTAVEIS.length * 2} perguntas para pular o que você já domina.</p></div>
      <button class="btn-card sec" data-nivelar>Fazer o teste</button></div>`;
  }
  return h + '</div>';
}

function renderTrilha() {
  const cur = indiceAtual();
  const doneCount = nFeitas();
  const pend = primeiraPendentePorNivel();
  const offsets = [0, 56, 0, -56];
  let k = 0, unitNo = 0;
  let html = `
    <div class="intro">
      <div class="curso-atual"><span class="selo selo-${esc(CURSO.area)}" aria-hidden="true">${esc(CURSO.sigla)}</span><p class="kind">${esc(areaDe(CURSO.area).nome)}</p><a class="trocar" href="#cursos">Trocar de curso</a></div>
      <h1>${esc(CURSO.titulo)}</h1>
      <p>${esc(CURSO.desc)} São ${NIVEIS.length} ${NIVEIS.length === 1 ? 'nível' : 'níveis'} de lições curtas, para fazer no celular ou no computador.</p>
      <div class="overall"><div class="bar" aria-hidden="true"><i style="width:${(doneCount / ALL.length) * 100}%"></i></div><span>${doneCount} de ${ALL.length} lições</span></div>
    </div>
    ${painelHTML()}
    <nav class="niv-nav" aria-label="Ir para um nível">
      ${NIVEIS.map(nv => `<button class="niv-chip${nivelCompleto(nv.n) ? ' full' : ''}" data-goto="niv-${nv.n}"><b aria-hidden="true">${nv.n}</b><span class="sr">Nível ${nv.n}:</span>${esc(nv.titulo)}</button>`).join('')}
    </nav>`;
  NIVEIS.forEach(nv => {
    const ls = licoesDoNivel(nv.n);
    const d = ls.filter(l => feita(l.id)).length;
    html += `<section class="nivel" id="niv-${nv.n}" aria-labelledby="niv-t-${nv.n}">
      <div class="nivel-head">
        <span class="niv-num" aria-hidden="true">${nv.n}</span>
        <div><p class="kind">Nível ${nv.n} · ${d} de ${ls.length} lições</p><h2 id="niv-t-${nv.n}">${esc(nv.titulo)}</h2><p>${esc(nv.desc)}</p></div>
      </div>${materiaisHTML(nv)}`;
    UNITS.filter(u => u.nivel === nv.n).forEach(u => {
      unitNo++;
      const st = u.licoes.map(l => { const idx = POS[l.id], done = feita(l.id); return { l, idx, done, open: done || pend[nv.n] === idx }; });
      html += `<section class="unit">
        <div class="unit-head${st.every(s => !s.open) ? ' locked' : ''}">
          <span class="eyebrow">Unidade ${unitNo}</span>
          <h3>${esc(u.titulo)}</h3>
          <code>${esc(u.conceito)}</code>
          <p>${esc(u.desc)}</p>
        </div>
        <div class="path">`;
      st.forEach(({ l, idx, done, open }) => {
        const x = offsets[k++ % offsets.length];
        html += `<div class="stop${open ? '' : ' locked'}" style="--x:${x}px">
          ${idx === cur ? `<span class="bubble" aria-hidden="true">${doneCount ? 'Continuar' : 'Começar'}</span>` : ''}
          <button class="node${done ? ' done' : ''}" data-idx="${idx}" ${open ? '' : 'disabled'} aria-label="${esc(l.titulo)}${done ? ', concluída. Toque para refazer' : open ? ', disponível' : ', bloqueada'}">
            ${done ? IC.check : open ? (CURSO.linguagem === 'texto' ? IC.livro : IC.code) : IC.lock}
          </button>
          <span class="label" aria-hidden="true">${esc(l.titulo)}</span>
        </div>`;
      });
      html += `</div></section>`;
    });
    html += `</section>`;
  });
  html += `<footer class="foot">
      <p><b>Trilha Livre</b> é uma plataforma de ensino gratuita, livre e de código aberto. O código é licenciado sob a AGPL-3.0 e as lições sob a CC BY-NC-SA 4.0. Qualquer pessoa pode usar, estudar e melhorar. Toda versão modificada precisa continuar aberta, e as lições não podem ser vendidas.${REPOSITORIO ? ` <a href="${esc(REPOSITORIO)}" target="_blank" rel="noopener">Ver o código-fonte</a>.` : ''}</p>
      <p>A primeira lição de cada nível fica sempre liberada, então você pode começar por onde quiser. Seu progresso fica salvo só neste navegador; faça um backup na aba Perfil.</p>
    </footer>`;
  $('tela-trilha').innerHTML = html;
}

// aulas em vídeo (e leituras) de outros sites sobre o assunto do nível, para quem aprende melhor assim
function materiaisHTML(nv) {
  const vs = nv.videos || [];
  if (!vs.length) return '';
  const nVideo = vs.filter(v => v.tipo !== 'texto').length;
  const titulo = nVideo === vs.length ? 'Aulas em vídeo sobre este nível' : nVideo ? 'Vídeos e leituras sobre este nível' : 'Leituras sobre este nível';
  return `<details class="videos"><summary>${nVideo ? IC.play : ''}${titulo}</summary>
    <ul>${vs.map(v => `<li><a href="${esc(v.url)}" target="_blank" rel="noopener">${esc(v.titulo)}</a>
      <span>${v.tipo === 'texto' ? 'Texto' : 'Vídeo'} · ${esc(v.canal)}${v.obs ? ` · ${esc(v.obs)}` : ''}</span></li>`).join('')}</ul>
    <p class="muted">São sites de fora, gratuitos. Precisam de internet.</p>
  </details>`;
}

$('tela-trilha').addEventListener('click', e => {
  const g = e.target.closest('[data-goto]');
  if (g) { const el = $(g.dataset.goto); if (el) el.scrollIntoView({ behavior: semMovimento() ? 'auto' : 'smooth' }); return; }
  const n = e.target.closest('.node');
  if (n && !n.disabled) { startLesson(+n.dataset.idx); return; }
  const r = e.target.closest('[data-revisar]');
  if (r) { iniciarRevisao(r.dataset.revisar === 'livre'); return; }
  if (e.target.closest('[data-nivelar]')) iniciarNivelamento();
});

/* =========================================================
   Tela: Prática livre
   ========================================================= */
let filtroDif = 'todos';
function renderPratica() {
  const total = DESAFIOS.length, feitos = nPratica();
  const lista = DESAFIOS.filter(d => filtroDif === 'todos' || d.dif === filtroDif);
  const filtros = [['todos', 'Todos'], ['facil', 'Fácil'], ['medio', 'Médio'], ['dificil', 'Difícil']];
  if (!total) {
    $('tela-pratica').innerHTML = `<div class="intro"><p class="kind">Prática livre · ${esc(CURSO.titulo)}</p><h1>Desafios avulsos</h1>
      <p>Este curso ainda não tem desafios de prática. Enquanto isso, a revisão na aba Trilha ajuda a fixar o que você aprendeu.</p></div>`;
    return;
  }
  $('tela-pratica').innerHTML = `
    <div class="intro">
      <p class="kind">Prática livre · ${esc(CURSO.titulo)}</p>
      <h1>Desafios avulsos</h1>
      <p>Treine o que quiser, na ordem que quiser, fora da trilha. Cada desafio vale XP cheio na primeira vez que você resolve.</p>
      <div class="overall"><div class="bar" aria-hidden="true"><i style="width:${(feitos / total) * 100}%"></i></div><span>${feitos} de ${total} resolvidos</span></div>
    </div>
    <div class="filtros" role="group" aria-label="Filtrar por dificuldade">
      ${filtros.map(([k, n]) => `<button class="filtro${filtroDif === k ? ' ativo' : ''}" data-filtro="${k}" aria-pressed="${filtroDif === k}">${n}<span>${k === 'todos' ? total : DESAFIOS.filter(d => d.dif === k).length}</span></button>`).join('')}
    </div>
    <div class="desafios">
      ${lista.map(d => {
        const ok = !!S.pratica[d.id];
        return `<button class="desafio${ok ? ' ok' : ''}" data-desafio="${d.id}">
          <span class="d-ic" aria-hidden="true">${ok ? IC.check : IC.code}</span>
          <span class="d-txt"><b>${esc(d.titulo)}</b><span class="d-p">${inlineMd(d.p)}</span><span class="temas">${d.temas.map(t => `<i>${esc(t)}</i>`).join('')}</span></span>
          <span class="dif dif-${d.dif}">${DIF[d.dif].nome}<small>${ok ? 'resolvido' : '+' + DIF[d.dif].xp + ' XP'}</small></span>
        </button>`;
      }).join('')}
    </div>`;
}
$('tela-pratica').addEventListener('click', e => {
  const f = e.target.closest('[data-filtro]');
  if (f) { filtroDif = f.dataset.filtro; renderPratica(); return; }
  const d = e.target.closest('[data-desafio]');
  if (d) startDesafio(d.dataset.desafio);
});

/* =========================================================
   Tela: Biblioteca (livros de acesso livre e estante pessoal)
   Os livros ficam em conteudo/biblioteca.js; a estante de cada pessoa fica em S.biblioteca.
   ========================================================= */
const ESTADOS_LEITURA = [['quero', 'Quero ler'], ['lendo', 'Lendo'], ['lido', 'Lido']];
let filtroEstante = 'todas', buscaLivro = '';
const semAcento = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const meuLivro = id => (S.biblioteca || (S.biblioteca = {}))[id] || null;
const naEstante = id => { const m = meuLivro(id); return !!(m && (m.st || (m.nota || '').trim())); };
const nomeEstante = id => (TRILHA.estantes.find(e => e.id === id) || { nome: '' }).nome;
function iniciais(nome) { // da lombada, quando o livro não tem ano: só o primeiro autor
  const p = String(nome).split(/,| e /)[0].split(/\s+/).filter(w => /^[A-ZÀ-Ý]/.test(w) && !/^(Júnior|Filho|Neto|Sobrinho)$/.test(w));
  if (p.length === 1 && /^[A-Z]{2,4}$/.test(p[0])) return p[0]; // siglas, como MDN
  return ((p[0] || '?')[0] + (p.length > 1 ? p[p.length - 1][0] : '')).toUpperCase();
}
const PREVIA_ESTANTE = 4; // em "Todos", cada estante mostra só os primeiros livros
function livrosFiltrados() {
  const termos = semAcento(buscaLivro).split(/\s+/).filter(Boolean);
  const lista = TRILHA.livros.filter(l => {
    if (filtroEstante === 'minha' ? !naEstante(l.id) : filtroEstante !== 'todas' && l.estante !== filtroEstante) return false;
    const alvo = semAcento([l.titulo, l.autor, l.desc, l.ano || '', l.obs || '', nomeEstante(l.estante)].join(' '));
    return termos.every(t => alvo.includes(t));
  });
  if (filtroEstante !== 'minha') return lista;
  const ordem = { lendo: 0, quero: 1, lido: 2 };
  return lista.sort((a, b) => (ordem[meuLivro(a.id).st] ?? 3) - (ordem[meuLivro(b.id).st] ?? 3));
}
function cartaoLivro(l) {
  const meu = meuLivro(l.id) || {};
  const cursos = (l.cursos || []).map(id => CURSOS.find(c => c.id === id && c.disponivel)).filter(Boolean);
  const tags = [l.comece ? 'Bom para começar' : '', l.colecao ? 'Coleção de textos' : ''].filter(Boolean);
  return `<article class="livro${meu.st ? ' st-' + meu.st : ''}" id="lv-${esc(l.id)}" aria-labelledby="lvt-${esc(l.id)}">
    <div class="lv-topo">
      <span class="lombada lombada-${esc(l.estante)}" aria-hidden="true">${l.ano ? esc(String(l.ano).slice(0, 4)) : esc(iniciais(l.autor))}</span>
      <div class="lv-txt">
        ${tags.length ? `<p class="lv-tags">${tags.map(t => `<i>${t}</i>`).join('')}</p>` : ''}
        <h3 id="lvt-${esc(l.id)}">${esc(l.titulo)}</h3>
        <p class="lv-autor">${esc(l.autor)}${l.ano ? ` · ${esc(l.ano)}` : ''}${l.obs ? ` · ${esc(l.obs)}` : ''}</p>
      </div>
    </div>
    <p class="lv-desc">${esc(l.desc)}</p>
    <div class="lv-links">${l.links.map(k => `<a class="lv-ler" href="${esc(k.url)}" target="_blank" rel="noopener">${esc(k.rotulo)}${IC.externo}<span class="sr">: ${esc(l.titulo)}, abre em outra aba</span></a>`).join('')}</div>
    ${cursos.length ? `<p class="lv-cursos">Estudado no curso ${cursos.map(c => `<button class="lv-curso" data-ir-curso="${esc(c.id)}">${esc(c.titulo)}</button>`).join(' e ')}</p>` : ''}
    <div class="lv-estado" role="group" aria-label="Situação da leitura">
      ${ESTADOS_LEITURA.map(([v, rot]) => `<button class="seg${meu.st === v ? ' ativo' : ''}" aria-pressed="${meu.st === v}" data-lv="${esc(l.id)}" data-st="${v}">${rot}</button>`).join('')}
    </div>
    <details class="lv-nota"${(meu.nota || '').trim() ? ' open' : ''}><summary>Anotações</summary>
      <textarea data-nota="${esc(l.id)}" rows="3" aria-label="Anotações sobre ${esc(l.titulo)}" placeholder="Ideias, dúvidas, páginas para reler...">${esc(meu.nota || '')}</textarea>
    </details>
  </article>`;
}
function filtrosLivrosHTML() {
  const filtros = [['todas', 'Todos', TRILHA.livros.length], ['minha', 'Minha estante', TRILHA.livros.filter(l => naEstante(l.id)).length],
    ...TRILHA.estantes.map(e => [e.id, e.curto || e.nome, TRILHA.livros.filter(l => l.estante === e.id).length])];
  return filtros.map(([k, n, q]) => `<button class="filtro${filtroEstante === k ? ' ativo' : ''}" data-estante="${esc(k)}" aria-pressed="${filtroEstante === k}">${esc(n)}<span>${q}</span></button>`).join('');
}
function resumoEstanteHTML() {
  const conta = st => TRILHA.livros.filter(l => (meuLivro(l.id) || {}).st === st).length;
  const partes = [['lendo', 'lendo', 'lendo'], ['quero', 'para ler', 'para ler'], ['lido', 'lido', 'lidos']]
    .map(([st, um, varios]) => { const n = conta(st); return n ? `${n} ${n === 1 ? um : varios}` : ''; }).filter(Boolean);
  return partes.length ? `Na sua estante: ${partes.join(' · ')}` : 'Marque os livros como Quero ler, Lendo ou Lido para montar a sua estante.';
}
function renderLivros() {
  $('tela-livros').innerHTML = `
    <div class="intro">
      <p class="kind">Biblioteca</p>
      <h1>Livros livres</h1>
      <p>Clássicos, teoria, literatura e manuais que dá para ler de graça e de forma legal. O texto abre no site de origem.</p>
      <p class="lv-resumo" id="lvResumo">${resumoEstanteHTML()}</p>
    </div>
    <div class="busca">
      <label class="sr" for="buscaLivro">Buscar na biblioteca</label>
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5L21 21"/></svg>
      <input id="buscaLivro" type="search" enterkeyhint="search" autocomplete="off" placeholder="Buscar por título, autor ou assunto" value="${esc(buscaLivro)}">
    </div>
    <div class="filtros" id="lvFiltros" role="group" aria-label="Filtrar por estante">${filtrosLivrosHTML()}</div>
    <div id="lvLista"></div>
    <section class="bloco acervos" aria-labelledby="t-acervos">
      <h2 id="t-acervos">Acervos para explorar</h2>
      <p class="muted">Sites e aplicativos com milhares de livros gratuitos e legais, além dos que estão aqui.</p>
      <ul class="acervos-lista">${TRILHA.acervos.map(a => `<li>${a.url ? `<a href="${esc(a.url)}" target="_blank" rel="noopener">${esc(a.nome)}${IC.externo}</a>` : `<b>${esc(a.nome)}</b>`}<span>${esc(a.desc)}</span></li>`).join('')}</ul>
    </section>
    <footer class="foot">
      <p>Só entram aqui obras em domínio público ou que o próprio site publica para leitura gratuita. Os livros abrem em sites de fora e precisam de internet. Sua estante e suas anotações ficam salvas neste aparelho e entram no backup do Perfil.</p>
      <p>Conhece um livro livre que deveria estar aqui? O guia de contribuição (CONTRIBUINDO.md) explica como sugerir.${REPOSITORIO ? ` <a href="${esc(REPOSITORIO)}" target="_blank" rel="noopener">Ver o repositório</a>.` : ''}</p>
    </footer>`;
  renderListaLivros();
}
function renderListaLivros() {
  const lista = livrosFiltrados();
  const buscando = buscaLivro.trim() !== '';
  let h;
  if (!lista.length) {
    h = `<p class="vazio">${filtroEstante === 'minha' && !buscando ? 'Sua estante ainda está vazia. Marque um livro como Quero ler, Lendo ou Lido para ele aparecer aqui.' : 'Nenhum livro encontrado. Tente outra palavra ou outra estante.'}</p>`;
  } else if (filtroEstante === 'todas' && !buscando) {
    h = TRILHA.estantes.map(e => {
      const ls = lista.filter(l => l.estante === e.id);
      if (!ls.length) return '';
      const resto = ls.length - PREVIA_ESTANTE;
      return `<section class="estante" aria-labelledby="est-${esc(e.id)}"><div class="area-head"><h2 id="est-${esc(e.id)}">${esc(e.nome)}</h2><p>${esc(e.desc)}</p></div>
        <div class="livros">${ls.slice(0, PREVIA_ESTANTE).map(cartaoLivro).join('')}</div>
        ${resto > 0 ? `<button class="btn-sec ver-estante" data-estante="${esc(e.id)}">Ver mais ${resto} ${resto === 1 ? 'livro' : 'livros'} de ${esc(e.curto || e.nome)}</button>` : ''}</section>`;
    }).join('');
  } else {
    const est = TRILHA.estantes.find(e => e.id === filtroEstante);
    h = `${est && !buscando ? `<p class="lv-cont">${esc(est.desc)}</p>` : ''}<p class="lv-cont">${lista.length} ${lista.length === 1 ? 'livro' : 'livros'}</p><div class="livros">${lista.map(cartaoLivro).join('')}</div>`;
  }
  $('lvLista').innerHTML = h;
}
function atualizarEstante() {
  $('lvFiltros').innerHTML = filtrosLivrosHTML();
  $('lvResumo').innerHTML = resumoEstanteHTML();
}
function marcarLeitura(id, st) {
  const m = meuLivro(id) || {};
  if (m.st === st) { delete m.st; delete m.dia; } else { m.st = st; m.dia = hoje(); }
  if (!m.st && !(m.nota || '').trim()) delete S.biblioteca[id]; else S.biblioteca[id] = m;
  save(); som('toque');
  const livro = TRILHA.livros.find(l => l.id === id);
  if (filtroEstante === 'minha') renderListaLivros();
  else { const card = $('lv-' + id); if (card) card.outerHTML = cartaoLivro(livro); }
  atualizarEstante();
  const b = document.querySelector(`[data-lv="${CSS.escape(id)}"][data-st="${st}"]`);
  if (b) b.focus({ preventScroll: true });
  anunciar(m.st ? `${livro.titulo}: ${ESTADOS_LEITURA.find(x => x[0] === st)[1]}` : `${livro.titulo} saiu da estante`);
}
$('tela-livros').addEventListener('click', e => {
  const f = e.target.closest('[data-estante]');
  if (f) {
    filtroEstante = f.dataset.estante;
    atualizarEstante(); renderListaLivros();
    const b = $('lvFiltros').querySelector(`[data-estante="${CSS.escape(filtroEstante)}"]`);
    if (b) { b.focus({ preventScroll: true }); b.scrollIntoView({ block: 'nearest', inline: 'center' }); }
    if (f.classList.contains('ver-estante')) { // volta para o começo da lista, logo abaixo da barra fixa do topo
      const y = $('lvFiltros').getBoundingClientRect().top + window.scrollY - $('barra').offsetHeight - 12;
      window.scrollTo(0, Math.max(0, y));
    }
    return;
  }
  const st = e.target.closest('[data-st]');
  if (st) { marcarLeitura(st.dataset.lv, st.dataset.st); return; }
  const c = e.target.closest('[data-ir-curso]');
  if (c) { S.curso = c.dataset.irCurso; save(); usarCurso(S.curso); som('toque'); voltar('trilha'); }
});
let anuncioBusca = null;
$('tela-livros').addEventListener('input', e => {
  if (e.target.id === 'buscaLivro') {
    buscaLivro = e.target.value;
    renderListaLivros();
    clearTimeout(anuncioBusca);
    anuncioBusca = setTimeout(() => { const n = livrosFiltrados().length; anunciar(n ? `${n} ${n === 1 ? 'livro encontrado' : 'livros encontrados'}` : 'Nenhum livro encontrado'); }, 700);
    return;
  }
  const n = e.target.closest('[data-nota]');
  if (n) {
    const id = n.dataset.nota, m = meuLivro(id) || {};
    m.nota = n.value;
    if (!m.st && !m.nota.trim()) delete S.biblioteca[id]; else S.biblioteca[id] = m;
    save();
  }
});
// a contagem de "Minha estante" muda quando a anotação é a única coisa que mantém o livro lá
$('tela-livros').addEventListener('focusout', e => { if (e.target.closest('[data-nota]')) atualizarEstante(); });

/* =========================================================
   Tela: Perfil (resumo, meta, ajustes, backup, conquistas)
   ========================================================= */
function opcoes(nome, atual, lista) {
  return `<div class="segmento" role="radiogroup" aria-label="${esc(nome)}">${lista.map(([v, rot]) =>
    `<button role="radio" aria-checked="${atual === v}" class="seg${atual === v ? ' ativo' : ''}" data-ajuste="${esc(nome)}" data-valor="${v}">${rot}</button>`).join('')}</div>`;
}
function instalarHTML() {
  if (PWA.instalado) return '<p class="muted">O Trilha Livre já está instalado neste aparelho.</p>';
  if (PWA.convite) return '<p class="muted">Instale como app para abrir direto da tela inicial e estudar sem internet.</p><button class="btn-card" id="instalarBtn">Instalar o app</button>';
  if (PWA.ios) return '<p class="muted">No iPhone ou iPad, abra o site no Safari, toque no botão Compartilhar e escolha <b>Adicionar à Tela de Início</b>. Depois disso, ele funciona até sem internet.</p>';
  return '<p class="muted">Quando o site estiver publicado, o navegador oferece a opção de instalar (no Chrome, pelo menu ⋮ e depois "Instalar app"). Instalado, ele funciona até sem internet.</p>';
}
function aoMudarInstalacao() { const b = $('instalarBox'); if (b) b.innerHTML = instalarHTML(); }

function renderPerfil() {
  const a = ajustes();
  const ganhas = CONQUISTAS.filter(c => S.conquistas[c.id]).length;
  const aprendidas = TRILHA.unidades.filter(u => u.licoes.every(l => feita(l.id)));
  const niv = nivelamentoDoCurso();
  let topo = true; try { topo = window.top === window.self; } catch (e) { topo = false; }
  $('tela-perfil').innerHTML = `
    <div class="intro"><p class="kind">Seu progresso</p><h1>Perfil</h1></div>
    <div class="resumo">
      <div><b>${nFeitasTotal()}</b><span>lições concluídas</span></div>
      <div><b>${S.xp}</b><span>XP no total</span></div>
      <div><b>${S.maxStreak}</b><span>maior sequência</span></div>
      <div><b>${nPraticaTotal()}</b><span>desafios resolvidos</span></div>
    </div>

    <section class="bloco" aria-labelledby="t-meta">
      <h2 id="t-meta">Meta diária</h2>
      <p class="muted">Quanto XP você quer ganhar por dia. Hoje você tem ${xpHoje()} de ${S.meta} XP.</p>
      <div class="metas" role="radiogroup" aria-label="Meta diária">
        ${METAS.map(m => `<button class="meta-op${S.meta === m.xp ? ' ativo' : ''}" role="radio" aria-checked="${S.meta === m.xp}" data-meta="${m.xp}"><b>${m.nome}</b><span>${m.xp} XP por dia</span></button>`).join('')}
      </div>
    </section>

    <section class="bloco" aria-labelledby="t-ajustes">
      <h2 id="t-ajustes">Ajustes</h2>
      <div class="ajustes">
        <div class="ajuste"><span>Tamanho do texto</span>${opcoes('zoom', String(a.zoom), [['1', 'Normal'], ['1.15', 'Grande'], ['1.3', 'Maior']])}</div>
        <div class="ajuste"><span>Sons</span>${opcoes('som', String(a.som), [['true', 'Ligados'], ['false', 'Desligados']])}</div>
        <div class="ajuste"><span>Animações</span>${opcoes('anim', String(a.anim), [['true', 'Ligadas'], ['false', 'Desligadas']])}</div>
      </div>
      ${matchMedia('(prefers-reduced-motion: reduce)').matches ? '<p class="muted">Seu aparelho pede menos movimento, então as animações ficam desligadas.</p>' : ''}
    </section>

    <section class="bloco" aria-labelledby="t-instalar">
      <h2 id="t-instalar">Usar como app</h2>
      <div id="instalarBox">${instalarHTML()}</div>
    </section>

    ${Object.keys(S.projetos || {}).length ? `<section class="bloco" aria-labelledby="t-projetos">
      <h2 id="t-projetos">Meus projetos</h2>
      <p class="muted">Páginas que você fez nos projetos. Baixe o index.html para publicar no GitHub Pages, como ensina a última lição de HTML e CSS.</p>
      ${projetosHTML()}
    </section>` : ''}

    <section class="bloco" aria-labelledby="t-backup">
      <h2 id="t-backup">Backup do progresso</h2>
      <p class="muted">Seu progresso fica salvo só neste navegador. Para trocar de aparelho ou não perder nada ao limpar o navegador, guarde um código de backup (em um bloco de notas, por exemplo) ou um arquivo.</p>
      <div class="acoes-linha">
        <button class="btn-card" id="copiarBackup">Copiar código de backup</button>
        ${topo ? '<button class="btn-card sec" id="baixarBackup">Baixar arquivo</button>' : ''}
      </div>
      <label class="lab" for="codigoBackup">Restaurar um backup</label>
      <textarea id="codigoBackup" class="caixa-backup" rows="3" spellcheck="false" autocapitalize="off" placeholder="Cole aqui o código de backup"></textarea>
      <div class="acoes-linha">
        <button class="btn-card sec" id="restaurarBackup">Restaurar</button>
        <label class="btn-card sec arquivo">Abrir arquivo<input type="file" id="arquivoBackup" accept=".json,application/json,text/plain"></label>
      </div>
      <p class="aviso" id="avisoBackup" role="status"></p>
    </section>

    ${NIVEIS_TESTAVEIS.length ? `<section class="bloco" aria-labelledby="t-nivel">
      <h2 id="t-nivel">Teste de nivelamento</h2>
      <p class="muted">${niv ? `No curso ${esc(CURSO.titulo)}, você fez o teste em ${fmtData(niv.dia)} ${niv.nivel ? `e dispensou até o Nível ${niv.nivel}` : 'e começou do Nível 1'}.` : `Se você já conhece o assunto de ${esc(CURSO.titulo)}, o teste libera os níveis que você já domina.`}</p>
      <button class="btn-card sec" data-nivelar>${niv ? 'Fazer de novo' : 'Fazer o teste'}</button>
    </section>` : ''}

    <section class="bloco" aria-labelledby="t-medalhas">
      <h2 id="t-medalhas">Conquistas <small>${ganhas} de ${CONQUISTAS.length}</small></h2>
      <ul class="medalhas">
        ${CONQUISTAS.map(c => { const d = S.conquistas[c.id]; return `<li class="med${d ? ' ganha' : ''}">${medalha(c, !!d)}<b>${esc(c.titulo)}</b><span>${esc(c.desc)}</span>${d ? `<small>Ganha em ${fmtData(d)}</small>` : '<small class="sr">Ainda não ganha</small>'}</li>`; }).join('')}
      </ul>
    </section>

    <section class="bloco" aria-labelledby="t-aprendido">
      <h2 id="t-aprendido">O que você já aprendeu</h2>
      ${aprendidas.length
        ? `<ul class="aprendido">${aprendidas.map(u => `<li><code>${esc(u.conceito)}</code><span>${esc(u.titulo)}</span></li>`).join('')}</ul>`
        : '<p class="muted">Complete todas as lições de uma unidade para ela aparecer aqui.</p>'}
    </section>

    <section class="bloco">
      <button class="link-btn" id="resetBtn">Apagar meu progresso</button>
    </section>`;
}

/* ---------- backup ---------- */
function codigoBackup() {
  const bytes = new TextEncoder().encode(JSON.stringify(S));
  let bin = '';
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return 'TL1.' + btoa(bin);
}
function lerBackup(texto) {
  texto = String(texto || '').trim();
  let obj;
  if (texto.startsWith('TL1.')) {
    const bin = atob(texto.slice(4).replace(/\s+/g, ''));
    const bytes = Uint8Array.from(bin, c => c.charCodeAt(0));
    obj = JSON.parse(new TextDecoder().decode(bytes));
  } else {
    obj = JSON.parse(texto);
    if (obj && obj.app === 'trilha-livre') obj = obj.estado;
  }
  if (!obj || typeof obj !== 'object' || typeof obj.done !== 'object' || typeof obj.xp !== 'number') throw new Error('formato');
  return obj;
}
let restaurarPendente = null;
function avisoBackup(txt, ok) { const a = $('avisoBackup'); if (a) { a.textContent = txt; a.className = 'aviso' + (ok ? ' ok' : ' erro'); } }
function prepararRestauracao(texto) {
  try {
    const obj = lerBackup(texto);
    restaurarPendente = obj;
    const n = Object.keys(obj.done).length;
    avisoBackup(`Backup com ${n} ${n === 1 ? 'lição' : 'lições'} e ${obj.xp} XP. Toque em Restaurar de novo para substituir o progresso atual.`, true);
    $('restaurarBackup').textContent = 'Confirmar restauração';
  } catch (e) {
    restaurarPendente = null;
    avisoBackup('Esse código não parece um backup do Trilha Livre. Confira se copiou tudo, do TL1. até o fim.', false);
  }
}

$('tela-perfil').addEventListener('click', async e => {
  const m = e.target.closest('[data-meta]');
  if (m) { S.meta = +m.dataset.meta; save(); som('toque'); renderPerfil(); return; }
  const aj = e.target.closest('[data-ajuste]');
  if (aj) {
    const nome = aj.dataset.ajuste, v = aj.dataset.valor;
    S.ajustes = Object.assign(ajustes(), { [nome]: nome === 'zoom' ? +v : v === 'true' });
    save(); aplicarAjustes(); som('toque'); renderPerfil();
    const foco = document.querySelector(`[data-ajuste="${nome}"][data-valor="${v}"]`); if (foco) foco.focus();
    return;
  }
  if (e.target.closest('[data-nivelar]')) { iniciarNivelamento(); return; }
  if (e.target.id === 'instalarBtn') { await instalarApp(); aoMudarInstalacao(); return; }
  if (e.target.id === 'copiarBackup') {
    const cod = codigoBackup();
    const ta = $('codigoBackup');
    try { await navigator.clipboard.writeText(cod); avisoBackup('Código copiado. Cole num lugar seguro, como um bloco de notas ou uma mensagem para você mesmo.', true); }
    catch (err) { ta.value = cod; ta.focus(); ta.select(); avisoBackup('Não deu para copiar automaticamente. O código está selecionado na caixa: copie com o menu do seu aparelho.', true); }
    return;
  }
  if (e.target.id === 'baixarBackup') {
    const blob = new Blob([JSON.stringify({ app: 'trilha-livre', versao: 1, data: hoje(), estado: S }, null, 1)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = `trilha-livre-progresso-${hoje()}.json`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    avisoBackup('Arquivo de backup salvo nos seus downloads.', true);
    return;
  }
  if (e.target.id === 'restaurarBackup') {
    if (restaurarPendente) {
      S = Object.assign(novoEstado(), restaurarPendente);
      restaurarPendente = null;
      save(); aplicarAjustes(); renderStats(); renderPerfil();
      avisoBackup('Progresso restaurado.', true);
    } else prepararRestauracao($('codigoBackup').value);
    return;
  }
  const r = e.target.closest('#resetBtn');
  if (r) {
    if (r.dataset.armed) { S = novoEstado(); save(); aplicarAjustes(); irPara('perfil'); }
    else {
      r.dataset.armed = '1'; r.textContent = 'Toque de novo para apagar tudo';
      setTimeout(() => { if (r.isConnected) { delete r.dataset.armed; r.textContent = 'Apagar meu progresso'; } }, 3500);
    }
  }
});
$('tela-perfil').addEventListener('input', e => {
  if (e.target.id === 'codigoBackup' && restaurarPendente) { restaurarPendente = null; $('restaurarBackup').textContent = 'Restaurar'; avisoBackup('', true); }
});
$('tela-perfil').addEventListener('change', e => {
  if (e.target.id !== 'arquivoBackup' || !e.target.files[0]) return;
  const fr = new FileReader();
  fr.onload = () => { $('codigoBackup').value = ''; prepararRestauracao(fr.result); };
  fr.readAsText(e.target.files[0]);
});

/* =========================================================
   Sessões de estudo: lição, revisão, desafio e nivelamento
   Uma sessão é uma fila de itens { ex, key, lid }. Item errado volta para o fim da fila
   (menos no nivelamento, que termina no primeiro erro).
   ========================================================= */
let L = null;
function iniciar(s) {
  L = { ...s, queue: s.itens.map((_, i) => i), done: 0, total: s.itens.length, q: s.itens.filter(it => it.ex.t !== 'texto').length, errors: 0, errKeys: new Set(), voltar: viewAtual };
  mostrar('lesson');
  renderEx();
}
/* ---------- lições de base (pré-requisitos) ----------
   Cada lição pode listar em "pre" as lições que ela usa como base. Ninguém é bloqueado:
   o app só avisa quando a base ainda não foi feita, ou quando a pessoa erra muito. */
const baseDe = les => (les.pre || []).filter(id => POS[id] != null);
const baseFaltando = les => baseDe(les).filter(id => !feita(id));
const nomeBase = id => { const l = ALL[POS[id]]; return `${l.titulo} (Nível ${l.unit.nivel})`; };
const limiteErros = s => Math.max(2, Math.ceil(s.q / 2)); // a partir daqui, a lição está difícil
// lições para sugerir: primeiro as que faltam; se nenhuma falta, as já feitas, para revisar
function basesParaSugerir(les) {
  const falta = baseFaltando(les);
  return falta.length ? { ids: falta, faltando: true } : { ids: baseDe(les), faltando: false };
}
function botoesBase(ids, retorno, classe) {
  return ids.slice(0, 2).map(id => `<button class="${classe}" data-base="${esc(id)}" data-retorno="${retorno}">${feita(id) ? 'Rever' : 'Fazer'}: ${esc(ALL[POS[id]].titulo)}</button>`).join('');
}

function startLesson(idx, retorno) {
  const les = ALL[idx];
  if (S.curso !== CURSO.id) { S.curso = CURSO.id; save(); }
  iniciar({ tipo: 'licao', idx, les, retorno: retorno != null && retorno !== idx ? retorno : null, itens: les.exs.map((ex, i) => ({ ex, key: `${les.id}:${i}`, lid: les.id })) });
}
// sai da lição atual e abre a lição de base; ao terminar, um botão traz de volta
function irParaBase(id, retorno) { if (POS[id] != null) startLesson(POS[id], retorno); }
document.addEventListener('click', e => {
  const b = e.target.closest('[data-base]');
  if (b) irParaBase(b.dataset.base, +b.dataset.retorno);
});
function startDesafio(id) {
  const d = DESAFIOS.find(x => x.id === id);
  if (!d) return;
  const ex = d.t === 'web'
    ? { t: 'web', p: d.p, html: d.html, css: d.css, regras: d.regras, solHtml: d.solHtml, solCss: d.solCss, dica: d.dica, exp: d.exp }
    : { t: 'codigo', p: d.p, start: d.start, saida: d.saida, dica: d.dica, sol: d.sol, exp: d.exp };
  iniciar({ tipo: 'pratica', desafio: d, itens: [{ ex, key: 'p:' + d.id }] });
}
const item = () => L.itens[L.queue[0]];
const cur = () => item().ex;

function setMain(mode, enabled, label) {
  L.mode = mode;
  const b = $('mainBtn');
  b.textContent = label || { check: 'Verificar', next: 'Continuar', retry: 'Tentar de novo' }[mode];
  b.disabled = !enabled;
}
function updateProg() {
  const pct = Math.round(L.done / L.total * 100);
  $('progFill').style.width = pct + '%';
  const p = $('progBar');
  p.setAttribute('aria-valuenow', L.done); p.setAttribute('aria-valuemax', L.total);
  p.setAttribute('aria-valuetext', `${L.done} de ${L.total}`);
}

function rotulo(ex) {
  const texto = lingDe(ex) === 'texto';
  const tipo = { escolha: 'Escolha a resposta', complete: texto ? 'Complete a frase' : 'Complete o código', ordene: ex.plain || texto ? 'Coloque em ordem' : lingDe(ex) === 'js' ? 'Monte o programa' : 'Monte o código', codigo: 'Escreva o código', web: ex.conserte ? 'Conserte a página' : 'Monte a página' }[ex.t];
  if (L.tipo === 'revisao') return `${tipo} · revisão de ${esc(LICAO[item().lid].titulo)}`;
  if (L.tipo === 'pratica') return `Desafio · ${DIF[L.desafio.dif].nome} · ${esc(L.desafio.titulo)}`;
  if (L.tipo === 'nivelamento') return `Teste de nivelamento · Nível ${item().nivel}`;
  return tipo;
}
// linguagem usada no destaque de código: a do exercício, a do curso ou JavaScript
const lingDe = ex => (ex && ex.lang) || (CURSO && CURSO.linguagem) || 'js';
// leva o foco para a pergunta, para leitores de tela lerem o item novo
function focarPergunta() { const h = $('exArea').querySelector('.prompt'); if (h) h.focus({ preventScroll: true }); }

function renderEx() {
  const ex = cur();
  L.checked = false; L.attempts = 0; L.ans = null;
  $('actions').classList.remove('ok', 'bad'); $('fb').hidden = true;
  updateProg();
  if (ex.t === 'texto') { renderTexto(ex); focarPergunta(); return; }
  const area = $('exArea');
  area.classList.remove('locked');
  area.innerHTML = `<p class="kind">${rotulo(ex)}</p><h2 class="prompt" tabindex="-1">${inlineMd(ex.p)}</h2>` +
    (ex.code && ex.t !== 'complete' ? `<pre class="code${lingDe(ex) === 'texto' ? ' quebra' : ''}">${hl(ex.code, lingDe(ex))}</pre>` : '') + `<div id="exBody"></div>`;
  const body = $('exBody');
  setMain('check', false);

  if (ex.t === 'escolha') {
    L.order = shuffle(ex.ops.map((_, i) => i));
    body.innerHTML = `<div class="opts" role="group" aria-label="Opções">${L.order.map((i, k) =>
      `<button class="opt${ex.mono ? ' mono' : ''}" data-i="${i}" aria-pressed="false"><span class="key" aria-hidden="true">${k + 1}</span><span class="txt">${ex.mono ? esc(ex.ops[i]) : inlineMd(ex.ops[i])}</span></button>`).join('')}</div>
      <p class="atalho">No teclado: números escolhem, Enter verifica.</p>`;
  }
  if (ex.t === 'complete') {
    L.ans = Array(ex.c.length).fill(null);
    L.bankOrder = shuffle(ex.bank.map((_, i) => i));
    renderComplete();
  }
  if (ex.t === 'ordene') {
    const idx = ex.lines.map((_, i) => i);
    let o; do { o = shuffle(idx); } while (o.length > 1 && o.every((v, i) => v === i));
    L.order = o; L.ans = [];
    renderOrdene();
  }
  if (ex.t === 'codigo') {
    body.innerHTML = `
      <label class="lab" for="editor">Seu código</label>
      <textarea id="editor" class="editor" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off">${esc(ex.start || '')}</textarea>
      ${tecladoHTML('editor')}
      <div class="run-row">
        <button class="btn-ghost" id="runBtn">${IC.play}Executar</button>
        <button class="btn-ghost" id="termBtn">${IC.term}Testar no terminal</button>
        <span class="hint">${esc(ex.dica || '')}</span>
      </div>
      <div class="console"><span class="lab" id="consoleLab">Console</span><pre class="out muted" id="out" aria-live="polite" aria-labelledby="consoleLab">A saída do seu programa aparece aqui.</pre></div>
      <p class="atalho">No teclado: Ctrl+Enter verifica.</p>`;
    setMain('check', true);
  }
  if (ex.t === 'web') {
    const temCss = ex.css != null;
    const attrs = 'spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off"';
    // nas etapas de um projeto de várias páginas, o CSS que a pessoa já escreveu continua valendo
    const salvo = ex.projeto && ex.projeto.herdaCss && L.tipo === 'licao' && (S.projetos || {})[ex.projeto.id];
    const cssInicial = salvo && salvo.css && salvo.css.trim() ? salvo.css : (ex.css || '');
    body.innerHTML = `
      ${temCss ? `<div class="abas" role="tablist" aria-label="Arquivos">
        <button role="tab" id="abaHtml" class="aba ativa" aria-selected="true" aria-controls="editorHtml">HTML</button>
        <button role="tab" id="abaCss" class="aba" aria-selected="false" aria-controls="editorCss">CSS</button>
      </div>` : '<span class="lab">Seu HTML</span>'}
      <textarea id="editorHtml" class="editor ed-web" ${attrs} aria-label="Código HTML">${esc(ex.html || '')}</textarea>
      ${temCss ? `<textarea id="editorCss" class="editor ed-web" hidden ${attrs} aria-label="Código CSS">${esc(cssInicial)}</textarea>` : ''}
      ${tecladoHTML('editorHtml', 'web')}
      ${salvo && salvo.css && salvo.css.trim() ? `<p class="hint">A aba CSS já traz o estilo que você escreveu na etapa anterior. É o mesmo arquivo <code>estilo.css</code> para o site todo.</p>` : ''}
      ${ex.dica ? `<p class="hint">${inlineMd(ex.dica)}</p>` : ''}
      <div class="previa"><span class="lab">Resultado</span><iframe id="previa" sandbox="allow-same-origin" title="Resultado da sua página"></iframe><p class="previa-nota" role="status" hidden></p></div>
      <p class="atalho">No teclado: Ctrl+Enter verifica.</p>`;
    atualizarPrevia();
    setMain('check', true);
  }
  focarPergunta();
}

/* ---------- pré-visualização de páginas (curso de HTML e CSS) ----------
   O iframe fica isolado (sandbox sem scripts), mas o app consegue ler o documento para conferir. */
let previaT = null;
function textoWeb() { return { html: $('editorHtml') ? $('editorHtml').value : '', css: $('editorCss') ? $('editorCss').value : '' }; }
function ajustarAltura(f) {
  try { const d = f.contentDocument; if (d && d.documentElement) f.style.height = Math.min(480, Math.max(110, d.documentElement.scrollHeight + 4)) + 'px'; } catch (e) {}
}
function atualizarPrevia() {
  const f = $('previa');
  if (!f) return Promise.resolve(null);
  const { html, css } = textoWeb();
  return new Promise(res => {
    let feito = false;
    const terminar = () => { if (feito) return; feito = true; f.removeEventListener('load', aoCarregar); ajustarAltura(f); protegerLinks(f); let d = null; try { d = f.contentDocument; } catch (e) {} res(d); };
    // ignora o carregamento da página em branco inicial do iframe; espera o do conteúdo (about:srcdoc)
    const aoCarregar = () => { let url = ''; try { url = f.contentWindow.location.href; } catch (e) {} if (url === 'about:blank') return; terminar(); };
    f.addEventListener('load', aoCarregar);
    setTimeout(terminar, 1500);
    f.srcdoc = montarPagina(html, css);
  });
}
function exemploWeb(html, css) {
  return `<figure class="exemplo web-ex">
    <pre class="code" aria-label="HTML">${hl(html, 'html')}</pre>
    ${css ? `<pre class="code" aria-label="CSS">${hl(css, 'css')}</pre>` : ''}
    <div class="previa"><span class="lab">Resultado</span><iframe class="previa-ex" sandbox="allow-same-origin" title="Resultado do exemplo" srcdoc="${esc(montarPagina(html, css))}"></iframe><p class="previa-nota" role="status" hidden></p></div>
  </figure>`;
}
// Na prévia não existem as outras páginas do site: em vez de abrir um erro dentro do quadro,
// o clique num link mostra para onde ele levaria. Links para #âncoras continuam funcionando.
function protegerLinks(f) {
  let d; try { d = f.contentDocument; } catch (e) { return; }
  if (!d || d.__linksProtegidos) return;
  d.__linksProtegidos = true;
  d.addEventListener('click', e => {
    const a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    const href = a.getAttribute('href').trim();
    e.preventDefault();
    const nota = f.parentElement.querySelector('.previa-nota');
    // a prévia não tem endereço próprio: um #âncora carregaria o app dentro do quadro, então a rolagem é feita aqui
    if (href.startsWith('#')) {
      const alvo = href.length > 1 && d.getElementById(decodeURIComponent(href.slice(1)));
      if (alvo) alvo.scrollIntoView({ block: 'start' });
      if (nota) {
        nota.hidden = false;
        nota.innerHTML = href === '#' ? 'Este link ainda não leva a lugar nenhum: o <code>href</code> é só <code>#</code>.'
          : alvo ? `Este link leva até o elemento com <code>id="${esc(href.slice(1))}"</code>, nesta mesma página.`
          : `Nenhum elemento tem <code>id="${esc(href.slice(1))}"</code> nesta página, então o link não leva a lugar nenhum.`;
      }
      return;
    }
    if (!nota) return;
    nota.hidden = false;
    nota.innerHTML = /^(https?:|mailto:|tel:)/i.test(href)
      ? `Na prévia, links para fora não abrem. No site publicado, este link vai para <code>${esc(href)}</code>.`
      : `Na prévia, as outras páginas do site não existem. No site publicado, este link abre <code>${esc(href)}</code>.`;
  });
}
/* ---------- projetos do aluno ----------
   Os exercícios marcados com "projeto" guardam o código quando a pessoa acerta,
   para ela baixar um index.html pronto e publicar (lição de publicar e aba Perfil). */
function guardarProjeto(pj) {
  const { html, css } = textoWeb();
  let novo;
  if (pj.arquivo) {
    // site de várias páginas: cada etapa guarda uma página, e o CSS é um arquivo só (estilo.css)
    const antes = (S.projetos || {})[pj.id];
    const arquivos = Object.assign({}, antes && antes.arquivos, { [pj.arquivo]: html });
    novo = { titulo: pj.titulo, site: true, arquivos, css, dia: hoje() };
  } else novo = { titulo: pj.titulo, html, css, dia: hoje() };
  S.projetos = Object.assign({}, S.projetos, { [pj.id]: novo });
}
const ORDEM_PAGINAS = n => (n === 'index.html' ? '0' : '1') + n;
// arquivos de um site: as páginas como a pessoa escreveu, o estilo.css e as imagens do app que elas usam
function arquivosDoSite(pj) {
  const nomes = Object.keys(pj.arquivos || {}).sort((a, b) => ORDEM_PAGINAS(a).localeCompare(ORDEM_PAGINAS(b)));
  const lista = nomes.map(n => ({ nome: n, texto: String(pj.arquivos[n]).trim() + '\n' }));
  lista.push({ nome: 'estilo.css', texto: String(pj.css || '').trim() + '\n' });
  const tudo = lista.map(a => a.texto).join('\n');
  const imagens = [...new Set((tudo.match(/imagens\/[\w.-]+\.(?:jpg|jpeg|png|svg|gif|webp)/gi) || []))];
  return { lista, imagens };
}
async function baixarSite(id, pj) {
  const { lista, imagens } = arquivosDoSite(pj);
  const enc = new TextEncoder();
  const itens = lista.map(a => ({ nome: a.nome, dados: enc.encode(a.texto) }));
  for (const img of imagens) {
    try { const r = await fetch(img); if (r.ok) itens.push({ nome: img, dados: new Uint8Array(await r.arrayBuffer()) }); } catch (e) { /* sem internet: segue sem a imagem */ }
  }
  baixarArquivo(new Blob([criarZip(itens)], { type: 'application/zip' }), `${id}.zip`);
  return { arquivos: lista.length, imagens: itens.length - lista.length, faltando: imagens.length - (itens.length - lista.length) };
}
function baixarArquivo(blob, nome) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = nome;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}
/* Arquivo .zip simples (sem compressão), para baixar um site com várias páginas e imagens de uma vez.
   O formato é o padrão do PKZIP: um cabeçalho por arquivo, os dados e, no fim, o diretório central. */
const CRC_TAB = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
function crc32(d) { let c = 0xFFFFFFFF; for (let i = 0; i < d.length; i++) c = CRC_TAB[(c ^ d[i]) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }
function criarZip(itens) {
  const enc = new TextEncoder(), partes = [], central = [];
  const agora = new Date();
  const hora = (agora.getHours() << 11) | (agora.getMinutes() << 5) | (agora.getSeconds() >> 1);
  const dia = ((agora.getFullYear() - 1980) << 9) | ((agora.getMonth() + 1) << 5) | agora.getDate();
  let pos = 0;
  for (const it of itens) {
    const nome = enc.encode(it.nome), crc = crc32(it.dados), tam = it.dados.length;
    const loc = new DataView(new ArrayBuffer(30));
    loc.setUint32(0, 0x04034b50, true); loc.setUint16(4, 20, true); loc.setUint16(6, 0x0800, true); // UTF-8 nos nomes
    loc.setUint16(10, hora, true); loc.setUint16(12, dia, true);
    loc.setUint32(14, crc, true); loc.setUint32(18, tam, true); loc.setUint32(22, tam, true); loc.setUint16(26, nome.length, true);
    partes.push(new Uint8Array(loc.buffer), nome, it.dados);
    const cen = new DataView(new ArrayBuffer(46));
    cen.setUint32(0, 0x02014b50, true); cen.setUint16(4, 20, true); cen.setUint16(6, 20, true); cen.setUint16(8, 0x0800, true);
    cen.setUint16(12, hora, true); cen.setUint16(14, dia, true);
    cen.setUint32(16, crc, true); cen.setUint32(20, tam, true); cen.setUint32(24, tam, true); cen.setUint16(28, nome.length, true);
    cen.setUint32(42, pos, true);
    central.push(new Uint8Array(cen.buffer), nome);
    pos += 30 + nome.length + tam;
  }
  const tamCentral = central.reduce((s, p) => s + p.length, 0);
  const fim = new DataView(new ArrayBuffer(22));
  fim.setUint32(0, 0x06054b50, true); fim.setUint16(8, itens.length, true); fim.setUint16(10, itens.length, true);
  fim.setUint32(12, tamCentral, true); fim.setUint32(16, pos, true);
  return new Blob([...partes, ...central, new Uint8Array(fim.buffer)]);
}
// um arquivo só: o CSS vai dentro de <style>, e o esqueleto é completado se faltar
function arquivoDoProjeto(pj) {
  let html = String(pj.html || '').trim();
  if (!/<html[\s>]/i.test(html)) {
    html = `<!DOCTYPE html>\n<html lang="pt-BR">\n<head>\n  <meta charset="utf-8">\n  <title>${esc(pj.titulo)}</title>\n</head>\n<body>\n${html}\n</body>\n</html>`;
  }
  if (!/<!DOCTYPE/i.test(html)) html = '<!DOCTYPE html>\n' + html;
  if (!/name=["']viewport["']/i.test(html)) html = html.replace(/<head([^>]*)>/i, '<head$1>\n  <meta name="viewport" content="width=device-width, initial-scale=1">');
  return montarPagina(html, pj.css || '') + '\n';
}
function projetosHTML() {
  const lista = Object.entries(S.projetos || {});
  if (!lista.length) return `<div class="projetos vazio"><p>Você ainda não tem projetos guardados. Faça as lições de projeto do curso de HTML e CSS, e eles aparecem aqui.</p></div>`;
  let topo = true; try { topo = window.top === window.self; } catch (e) { topo = false; }
  return `<div class="projetos">${lista.map(([id, pj]) => {
    const site = pj.site ? arquivosDoSite(pj) : null;
    const resumo = site ? `${site.lista.length - 1} ${site.lista.length === 2 ? 'página' : 'páginas'}, estilo.css${site.imagens.length ? ` e ${site.imagens.length} ${site.imagens.length === 1 ? 'imagem' : 'imagens'}` : ''}` : '';
    return `<div class="projeto">
      <div class="pj-txt"><b>${esc(pj.titulo)}</b><span>${site ? esc(resumo) + ' · ' : ''}Guardado em ${fmtData(pj.dia)}</span></div>
      <div class="acoes-linha">
        ${topo ? `<button class="btn-card" data-proj-baixar="${esc(id)}">${site ? 'Baixar o site (.zip)' : 'Baixar index.html'}</button>` : ''}
        <button class="btn-card${topo ? ' sec' : ''}" data-proj-copiar="${esc(id)}">${site ? 'Ver os arquivos' : 'Copiar o código'}</button>
      </div>
      <div class="pj-codigo" hidden></div>
    </div>`;
  }).join('')}
    ${topo ? '' : '<p class="muted pj-nota">Aqui dentro do preview, o download não funciona. Copie o código para arquivos com os mesmos nomes, ou abra o Trilha Livre pelo site publicado para baixar.</p>'}</div>`;
}
async function copiarTexto(caixa, texto, nome) {
  try {
    await navigator.clipboard.writeText(texto);
    caixa.hidden = false; caixa.innerHTML = `<p class="aviso ok" role="status">Código copiado. Cole num arquivo chamado ${esc(nome)}.</p>`;
  } catch (err) {
    caixa.hidden = false;
    caixa.innerHTML = '<p class="aviso" role="status">Não deu para copiar sozinho. Selecione o código abaixo e copie:</p><textarea class="caixa-backup" rows="6" readonly></textarea>';
    const ta = caixa.querySelector('textarea'); ta.value = texto; ta.focus(); ta.select();
  }
}
document.addEventListener('click', async e => {
  const b = e.target.closest('[data-proj-baixar], [data-proj-copiar], [data-proj-arquivo]');
  if (!b) return;
  const id = b.dataset.projBaixar || b.dataset.projCopiar || b.dataset.projSite;
  const pj = (S.projetos || {})[id];
  if (!pj) return;
  const caixa = b.closest('.projeto').querySelector('.pj-codigo');
  if (b.dataset.projArquivo) { // um arquivo de um site de várias páginas
    const a = arquivosDoSite(pj).lista.find(x => x.nome === b.dataset.projArquivo);
    if (a) await copiarTexto(b.closest('.pj-arq').querySelector('.pj-arq-aviso'), a.texto, a.nome);
    return;
  }
  if (b.dataset.projBaixar) {
    if (pj.site) {
      b.disabled = true;
      const r = await baixarSite(id, pj);
      b.disabled = false;
      caixa.hidden = false;
      caixa.innerHTML = `<p class="aviso ok" role="status">Arquivo ${esc(id)}.zip salvo nos seus downloads, com ${r.arquivos} arquivos${r.imagens ? ` e ${r.imagens} ${r.imagens === 1 ? 'imagem' : 'imagens'}` : ''}. Descompacte antes de publicar.${r.faltando ? ` ${r.faltando} ${r.faltando === 1 ? 'imagem não pôde' : 'imagens não puderam'} ser incluídas sem internet.` : ''}</p>`;
      return;
    }
    baixarArquivo(new Blob([arquivoDoProjeto(pj)], { type: 'text/html' }), 'index.html');
    caixa.hidden = false; caixa.innerHTML = '<p class="aviso ok" role="status">Arquivo index.html salvo nos seus downloads.</p>';
    return;
  }
  if (pj.site) {
    const { lista, imagens } = arquivosDoSite(pj);
    caixa.hidden = false;
    caixa.innerHTML = `<p class="pj-nota">Crie um arquivo para cada nome abaixo, na mesma pasta, e cole o código de cada um.${imagens.length ? ` As imagens ficam numa pasta chamada <code>imagens</code>: ${imagens.map(i => `<code>${esc(i.replace('imagens/', ''))}</code>`).join(', ')}.` : ''}</p>
      ${lista.map(a => `<div class="pj-arq"><button class="btn-card sec" data-proj-site="${esc(id)}" data-proj-arquivo="${esc(a.nome)}">Copiar ${esc(a.nome)}</button><div class="pj-arq-aviso" hidden></div></div>`).join('')}`;
    return;
  }
  await copiarTexto(caixa, arquivoDoProjeto(pj), 'index.html');
});

function ligarPrevias(raiz) { raiz.querySelectorAll('iframe.previa-ex').forEach(f => f.addEventListener('load', () => { ajustarAltura(f); protegerLinks(f); })); }
$('exArea').addEventListener('input', e => {
  if (e.target.classList && e.target.classList.contains('ed-web')) { clearTimeout(previaT); previaT = setTimeout(atualizarPrevia, 300); }
});

function renderTexto(ex) {
  const area = $('exArea');
  area.classList.remove('locked');
  L.codes = [];
  const corpo = ex.blocos.map(b => {
    if (b.p) return `<p>${inlineMd(b.p)}</p>`;
    if (b.code) {
      const lang = b.lang || lingDe(null);
      if (b.semTeste || lang !== 'js') return `<pre class="code${lang === 'texto' ? ' quebra' : ''}">${hl(b.code, lang)}</pre>`;
      const i = L.codes.push(b.code) - 1;
      return `<figure class="exemplo"><pre class="code">${hl(b.code)}</pre><button class="try-btn" data-code="${i}">${IC.term}Testar no terminal</button></figure>`;
    }
    if (b.web != null) return exemploWeb(b.web, b.css);
    if (b.projetos) return projetosHTML();
    if (b.passos) return `<ol class="passos">${b.passos.map(x => `<li>${inlineMd(x)}</li>`).join('')}</ol>`;
    if (b.tabela) { // "codigo" diz quais colunas são código (fonte mono, sem quebrar); por padrão, só a primeira
      const cod = b.tabela.codigo || [0];
      return `<div class="tab-wrap"><table class="tab"><thead><tr>${b.tabela.cab.map(c => `<th scope="col">${esc(c)}</th>`).join('')}</tr></thead><tbody>${
        b.tabela.linhas.map(r => `<tr>${r.map((c, i) => `<td${cod.includes(i) ? ' class="cod"' : ''}>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    }
    if (b.fluxo) {
      const descricao = b.fluxo.map(n => n.k === 'dec' ? `pergunta "${n.s}": se sim, ${n.sim}; se não, ${n.nao}` : n.s).join(', depois ');
      return `<div class="fluxo" role="img" aria-label="Fluxograma: ${esc(descricao)}">${b.fluxo.map((n, i) => {
        const seta = i ? '<span class="f-seta" aria-hidden="true"></span>' : '';
        if (n.k === 'dec') return `${seta}<div class="f-dec"><span>${esc(n.s)}</span></div>
          <div class="f-ramos"><div class="f-ramo"><span class="f-tag sim">Sim</span><div class="f-acao">${esc(n.sim)}</div></div><div class="f-ramo"><span class="f-tag nao">Não</span><div class="f-acao">${esc(n.nao)}</div></div></div>`;
        return `${seta}<div class="f-${n.k === 'acao' ? 'acao' : 'oval'}">${esc(n.s)}</div>`;
      }).join('')}</div>`;
    }
    if (b.dica) return `<aside class="dica"><span class="lab">Dica</span><p>${inlineMd(b.dica)}</p></aside>`;
    if (b.leia) return `<a class="leia" href="${esc(b.leia.url)}" target="_blank" rel="noopener">
      <span class="leia-ic" aria-hidden="true">${IC.livro}</span>
      <span class="leia-txt"><span class="lab">${esc(b.leia.rotulo || 'Para ler agora')}</span><b>${esc(b.leia.titulo)}</b>${b.leia.obs ? `<small>${inlineMd(b.leia.obs)}</small>` : ''}</span>
      <span class="leia-seta" aria-hidden="true">${IC.externo}</span><span class="sr">, abre em outra aba</span></a>`;
    if (b.trecho) return `<div class="trecho"><span class="lab">${esc(b.trecho.onde)}</span>${b.trecho.diz ? `<p class="trecho-diz">${inlineMd(b.trecho.diz)}</p>` : ''}<p>${inlineMd(b.trecho.explica)}</p></div>`;
    if (b.perguntas) return `<aside class="perguntas"><span class="lab">${esc(b.titulo || 'Para pensar e conversar')}</span><ul>${b.perguntas.map(q => `<li>${inlineMd(q)}</li>`).join('')}</ul></aside>`;
    return '';
  }).join('');
  let aviso = '';
  if (L.tipo === 'licao' && L.done === 0) {
    const falta = baseFaltando(L.les);
    if (falta.length) aviso = `<aside class="aviso-base" role="note"><span class="lab">Antes de começar</span>
      <p>Esta lição usa o que aparece em ${falta.map(id => `<b>${esc(nomeBase(id))}</b>`).join(' e ')}, que você ainda não fez. Dá para seguir assim mesmo, mas, se travar, comece por lá.</p>
      <div class="acoes-linha">${botoesBase(falta, L.idx, 'btn-card sec')}</div></aside>`;
  }
  area.innerHTML = `<p class="kind">Leitura · ${esc(L.les ? L.les.unit.titulo : '')}</p><h2 class="prompt" tabindex="-1">${esc(ex.titulo)}</h2>${aviso}<article class="reading">${corpo}</article>`;
  ligarPrevias(area);
  setMain('read', true, 'Entendi, continuar');
}

function renderComplete() {
  const ex = cur();
  const parts = ex.code.split('___');
  const code = parts.map((p, k) => hl(p, lingDe(ex)) + (k < parts.length - 1
    ? (L.ans[k] == null
      ? `<button class="slot" data-k="${k}" aria-label="Lacuna ${k + 1}, vazia">&nbsp;</button>`
      : `<button class="slot filled" data-k="${k}" aria-label="Lacuna ${k + 1}: ${esc(ex.bank[L.ans[k]])}. Toque para tirar">${esc(ex.bank[L.ans[k]])}</button>`)
    : '')).join('');
  $('exBody').innerHTML = `<pre class="code${lingDe(ex) === 'texto' ? ' quebra' : ''}">${code}</pre>
    <div class="bank" role="group" aria-label="Opções para as lacunas">${L.bankOrder.map(b => `<button class="chip" data-b="${b}" ${L.ans.includes(b) ? 'disabled' : ''}>${esc(ex.bank[b])}</button>`).join('')}</div>`;
  setMain('check', L.ans.every(x => x != null));
}

function renderOrdene() {
  const ex = cur();
  const fmtL = s => ex.plain ? esc(s) : hl(s, lingDe(ex));
  const pc = ex.plain ? ' plain' : '';
  const placed = L.ans.map((li, pos) => `<button class="line in${pc}" data-pos="${pos}" aria-label="Linha ${pos + 1}: ${esc(ex.lines[li])}. Toque para tirar">${fmtL(ex.lines[li])}</button>`).join('');
  const pool = L.order.filter(li => !L.ans.includes(li)).map(li => `<button class="line${pc}" data-li="${li}" aria-label="Colocar: ${esc(ex.lines[li])}">${fmtL(ex.lines[li])}</button>`).join('');
  $('exBody').innerHTML = `<div class="answer-box" role="group" aria-label="Sua resposta">${placed || '<span class="empty-msg">Toque nas linhas abaixo, na ordem certa.</span>'}</div><div class="pool" role="group" aria-label="Linhas para colocar">${pool}</div>`;
  setMain('check', L.ans.length === ex.lines.length);
}

function escolherOpcao(i) {
  L.ans = i;
  $('exArea').querySelectorAll('.opt').forEach(b => { const s = +b.dataset.i === i; b.classList.toggle('sel', s); b.setAttribute('aria-pressed', s); });
  setMain('check', true);
}

$('exArea').addEventListener('click', async e => {
  const aba = e.target.closest('.aba');
  if (aba) {
    const css = aba.id === 'abaCss';
    $('editorHtml').hidden = css; $('editorCss').hidden = !css;
    $('abaHtml').classList.toggle('ativa', !css); $('abaCss').classList.toggle('ativa', css);
    $('abaHtml').setAttribute('aria-selected', !css); $('abaCss').setAttribute('aria-selected', css);
    const t = $('exArea').querySelector('.teclas'); if (t) t.dataset.alvo = css ? 'editorCss' : 'editorHtml';
    (css ? $('editorCss') : $('editorHtml')).focus();
    return;
  }
  if (e.target.closest('#termBtn')) { openTerm($('editor').value); return; }
  const tb = e.target.closest('.try-btn');
  if (tb && L && L.codes) { openTerm(L.codes[+tb.dataset.code]); return; }
  if (!L || L.checked) return;
  const ex = cur();
  const t = e.target;
  if (ex.t === 'escolha') {
    const o = t.closest('.opt'); if (o) escolherOpcao(+o.dataset.i);
  }
  if (ex.t === 'complete') {
    const ch = t.closest('.chip'), sl = t.closest('.slot');
    if (ch && !ch.disabled) {
      const k = L.ans.indexOf(null);
      if (k !== -1) { L.ans[k] = +ch.dataset.b; renderComplete(); const prox = $('exBody').querySelector('.chip:not([disabled])') || $('mainBtn'); prox.focus(); }
    } else if (sl && L.ans[+sl.dataset.k] != null) { L.ans[+sl.dataset.k] = null; renderComplete(); }
  }
  if (ex.t === 'ordene') {
    const ln = t.closest('.line'); if (!ln) return;
    if (ln.dataset.li != null) L.ans.push(+ln.dataset.li); else L.ans.splice(+ln.dataset.pos, 1);
    renderOrdene();
    const prox = $('exBody').querySelector('.pool .line') || $('mainBtn'); prox.focus();
  }
  if (ex.t === 'codigo' && t.closest('#runBtn')) showOut(await runCode($('editor').value));
});

$('exArea').addEventListener('keydown', e => {
  if (e.target.classList.contains('editor') && e.key === 'Tab' && !e.shiftKey) {
    e.preventDefault();
    const ta = e.target, s = ta.selectionStart, en = ta.selectionEnd;
    ta.value = ta.value.slice(0, s) + '  ' + ta.value.slice(en);
    ta.selectionStart = ta.selectionEnd = s + 2;
  }
});

function showOut(r) {
  const o = $('out');
  let txt = r.timeout ? 'O programa demorou demais e foi parado. Confira se algum laço nunca termina.' : (r.out || []).join('\n');
  if (r.err) txt += (txt ? '\n' : '') + traduz(r.err);
  if (!txt) txt = '(nada foi mostrado: use console.log para ver algo aqui)';
  o.textContent = txt;
  o.className = 'out' + (r.err || r.timeout ? ' err' : '');
}

/* ---------- comparação linha a linha da saída ---------- */
function compararSaida(r, esperada) {
  if (r.timeout) return { html: '', dicas: ['O programa foi parado porque demorou demais. Confira se algum laço nunca termina.'] };
  const obtidas = norm((r.out || []).join('\n')) ? norm((r.out || []).join('\n')).split('\n') : [];
  const esperadas = norm(esperada).split('\n');
  const dicas = [];
  if (r.err) dicas.push(traduz(r.err));
  if (!obtidas.length && !r.err) dicas.push('Seu código não mostrou nada. Faltou um console.log?');
  const juntas = s => s.join('\n');
  if (obtidas.length) {
    if (juntas(obtidas).toLowerCase() === juntas(esperadas).toLowerCase()) dicas.push('A diferença está só nas letras maiúsculas e minúsculas.');
    else if (juntas(obtidas).replace(/\s+/g, '') === juntas(esperadas).replace(/\s+/g, '')) dicas.push('A diferença está só nos espaços.');
    else if (obtidas.length < esperadas.length) { const f = esperadas.length - obtidas.length; dicas.push(f === 1 ? 'Faltou mostrar 1 linha.' : `Faltou mostrar ${f} linhas.`); }
    else if (obtidas.length > esperadas.length) { const a = obtidas.length - esperadas.length; dicas.push(a === 1 ? 'Apareceu 1 linha a mais.' : `Apareceram ${a} linhas a mais.`); }
    if (obtidas.some(l => /^".*"$/.test(l)) && !esperadas.some(l => /^".*"$/.test(l))) dicas.push('Repare nas aspas: o texto esperado aparece sem aspas.');
    if (!dicas.length) {
      const i = esperadas.findIndex((l, k) => l !== obtidas[k]);
      if (i !== -1) dicas.push(`A linha ${i + 1} está diferente do esperado. Compare as duas na tabela.`);
    }
  }
  const n = Math.max(obtidas.length, esperadas.length);
  const max = 12;
  let linhas = '';
  for (let i = 0; i < Math.min(n, max); i++) {
    const a = esperadas[i], b = obtidas[i];
    const ok = a === b;
    linhas += `<tr class="${ok ? 'ok' : 'bad'}"><td class="dn">${i + 1}</td><td>${a == null ? '<i>(nada)</i>' : esc(a) || ' '}</td><td>${b == null ? '<i>(nada)</i>' : esc(b) || ' '}</td><td class="dm"><span class="sr">${ok ? 'igual' : 'diferente'}</span><span aria-hidden="true">${ok ? '✓' : '✗'}</span></td></tr>`;
  }
  if (n > max) linhas += `<tr><td></td><td colspan="3"><i>e mais ${n - max} linhas</i></td></tr>`;
  const html = `<div class="diff-wrap"><table class="diff"><thead><tr><th scope="col"><span class="sr">Linha</span></th><th scope="col">Esperado</th><th scope="col">Seu código</th><th scope="col"><span class="sr">Resultado</span></th></tr></thead><tbody>${linhas}</tbody></table></div>`;
  return { html, dicas };
}

async function check() {
  const ex = cur();
  let ok = false, correct = '', r = null;
  if (ex.t === 'escolha') {
    ok = L.ans === ex.c; correct = ex.ops[ex.c];
    $('exArea').querySelectorAll('.opt').forEach(b => {
      const i = +b.dataset.i;
      if (i === ex.c) b.classList.add('right');
      else if (i === L.ans) b.classList.add('wrong');
    });
  }
  if (ex.t === 'complete') { ok = L.ans.every((b, i) => ex.bank[b] === ex.c[i]); correct = ex.code.split('___').reduce((acc, p, i) => acc + ex.c[i - 1] + p); }
  if (ex.t === 'ordene') { ok = L.ans.every((li, i) => ex.lines[li] === ex.lines[i]); correct = ex.lines.join('\n'); }
  if (ex.t === 'web') {
    $('mainBtn').disabled = true;
    clearTimeout(previaT);
    const doc = await atualizarPrevia();
    let res = null;
    try { res = doc ? checarPagina(doc, ex.regras) : null; } catch (err) { res = null; }
    r = { falhas: res ? res.filter(x => !x.ok).map(x => x.msg) : ['A pré-visualização não abriu neste navegador. Tente de novo ou use outro navegador.'] };
    ok = !!res && r.falhas.length === 0;
  }
  if (ex.t === 'codigo') {
    $('mainBtn').disabled = true;
    r = await runCode($('editor').value);
    showOut(r);
    ok = !r.timeout && !r.err && norm((r.out || []).join('\n')) === norm(ex.saida);
    correct = ex.saida;
  }
  feedback(ok, ex, correct, r);
}

function feedback(ok, ex, correct, r) {
  const it = item(), bar = $('actions'), fb = $('fb');
  const isCode = ex.t === 'codigo' || ex.t === 'web';
  const nivelamento = L.tipo === 'nivelamento';
  bar.classList.add(ok ? 'ok' : 'bad');
  som(ok ? 'acerto' : 'erro');

  // registro para a revisão espaçada
  if (ok) {
    const primeira = !L.errKeys.has(it.key);
    if (primeira) { delete S.erros[it.key]; if (isCode) S.codigoPrimeira++; }
  } else {
    L.errKeys.add(it.key);
    if (!it.key.startsWith('p:') && !it.key.startsWith('niv:')) S.erros[it.key] = true;
  }
  if (nivelamento) L.certos[it.key] = ok;
  if (ok && ex.t === 'web' && ex.projeto && L.tipo === 'licao') guardarProjeto(ex.projeto);
  save();

  const titulo = ok ? pick(['Mandou bem!', 'Isso aí!', 'Certinho!', 'Perfeito!']) : 'Ainda não.';
  let h = `<p class="fb-title">${titulo}</p>`;
  let falado = titulo;
  if (!ok && !isCode) { h += `<p class="fb-label">Resposta certa</p><pre class="fb-ans">${esc(correct)}</pre>`; falado += ' Resposta certa: ' + correct + '.'; }
  if (!ok && ex.t === 'web') {
    const falhas = r.falhas.slice(0, 4);
    h += `<p class="fb-label">${ex.conserte ? 'O que ainda precisa de conserto' : 'O que falta na página'}</p><ul class="fb-dicas">${falhas.map(d => `<li>${inlineMd(d)}</li>`).join('')}</ul>`;
    if (r.falhas.length > 4) h += `<p class="fb-exp">E mais ${r.falhas.length - 4}. Resolva estes primeiro.</p>`;
    falado += ' Falta: ' + falhas.join(' ').replace(/`/g, '');
    L.attempts++;
    if (L.attempts >= 2 && ex.solHtml != null) h += `<button class="sol-btn" id="solBtn">Ver uma solução</button>`;
  }
  if (!ok && ex.t === 'codigo') {
    const cmp = compararSaida(r, ex.saida);
    if (cmp.dicas.length) h += `<ul class="fb-dicas">${cmp.dicas.map(d => `<li>${esc(d)}</li>`).join('')}</ul>`;
    h += cmp.html;
    falado += ' ' + cmp.dicas.join(' ');
    L.attempts++;
    if (L.attempts >= 2 && ex.sol) h += `<button class="sol-btn" id="solBtn">Ver uma solução</button>`;
  }
  if ((ok || !isCode) && ex.exp) { h += `<p class="fb-exp">${inlineMd(ex.exp)}</p>`; falado += ' ' + ex.exp.replace(/`/g, ''); }
  if (!ok && nivelamento) h += `<p class="fb-exp">O teste termina aqui. Veja o resultado em seguida.</p>`;
  if (!ok && L.tipo === 'licao' && !L.sugeriuBase && L.errors + 1 >= limiteErros(L)) {
    const sug = basesParaSugerir(L.les);
    if (sug.ids.length && (sug.faltando || L.errors + 1 >= L.q)) {
      L.sugeriuBase = true;
      h += `<div class="fb-base"><p><b>Está difícil?</b> Esta lição usa o que aparece em ${sug.ids.slice(0, 2).map(id => esc(nomeBase(id))).join(' e ')}${sug.faltando ? ', que você ainda não fez' : ''}. Você pode ir até lá e voltar depois.</p>
        <div class="acoes-linha">${botoesBase(sug.ids, L.idx, 'btn-card sec')}</div></div>`;
      falado += ' Está difícil? Esta lição usa o que aparece em ' + sug.ids.slice(0, 2).map(nomeBase).join(' e ') + '.';
    }
  }
  fb.innerHTML = h; fb.hidden = false;
  anunciar(falado);

  if (ok) {
    L.checked = true; $('exArea').classList.add('locked');
    L.done++; L.queue.shift(); updateProg(); setMain('next', true);
  } else if (nivelamento) {
    L.checked = true; $('exArea').classList.add('locked');
    L.errors++; L.queue = []; L.done = L.total; updateProg(); setMain('next', true, 'Ver resultado');
  } else if (isCode) {
    L.errors++; setMain('retry', true);
  } else {
    L.checked = true; $('exArea').classList.add('locked');
    L.errors++; L.queue.push(L.queue.shift()); setMain('next', true);
  }
  $('mainBtn').focus({ preventScroll: true });
}

$('fb').addEventListener('click', e => {
  if (e.target.id === 'solBtn') {
    const ex = cur();
    if (ex.t === 'web') {
      $('editorHtml').value = ex.solHtml || '';
      if ($('editorCss')) $('editorCss').value = ex.solCss || '';
      atualizarPrevia();
    } else $('editor').value = ex.sol;
    $('actions').classList.remove('bad'); $('fb').hidden = true; setMain('check', true);
    ($('editor') || $('editorHtml')).focus();
  }
});

async function principal() {
  if (!L) return;
  if (L.mode === 'read') { L.done++; L.queue.shift(); updateProg(); if (!L.queue.length) finish(); else renderEx(); return; }
  if (L.mode === 'check') await check();
  else if (L.mode === 'next') { if (!L.queue.length) finish(); else renderEx(); }
  else if (L.mode === 'retry') { $('actions').classList.remove('bad'); $('fb').hidden = true; setMain('check', true); ($('editor') || $('editorHtml')).focus(); }
}
$('mainBtn').addEventListener('click', principal);
$('closeBtn').addEventListener('click', () => voltar(L ? L.voltar : viewAtual));

// atalhos de teclado durante a lição
document.addEventListener('keydown', e => {
  if (!L || $('lesson').hidden || !$('term').hidden) return;
  if (e.key === 'Escape') { voltar(L.voltar); return; }
  if (e.target.tagName === 'TEXTAREA') {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter' && !$('mainBtn').disabled) { e.preventDefault(); principal(); }
    return;
  }
  if (e.key === 'Enter' && !$('mainBtn').disabled && !(e.target.closest && e.target.closest('button'))) { e.preventDefault(); principal(); return; }
  if (!L.checked && cur().t === 'escolha' && /^[1-9]$/.test(e.key)) {
    const i = L.order[+e.key - 1];
    if (i != null) { escolherOpcao(i); const b = $('exArea').querySelector(`.opt[data-i="${i}"]`); if (b) b.focus(); }
  }
});

/* =========================================================
   Fim da sessão
   ========================================================= */
function finish() {
  const s = L, perfeita = s.errors === 0;
  let xp, eyebrow, titulo, sub, botoes, festa = true, reforco = '';
  if (s.tipo === 'licao') {
    S.done[s.les.id] = true;
    if (!S.rev[s.les.id]) S.rev[s.les.id] = { box: 0, due: somarDias(hoje(), INTERVALOS[0]) };
    if (perfeita) S.perfeitas++;
    xp = perfeita ? 15 : 10;
    eyebrow = s.les.unit.titulo; titulo = 'Lição concluída'; sub = s.les.titulo;
    const prox = s.idx + 1 < ALL.length && liberada(s.idx + 1) ? s.idx + 1 : -1;
    if (s.retorno != null) {
      botoes = `<button class="btn-main" data-acao="licao" data-idx="${s.retorno}">Voltar para ${esc(ALL[s.retorno].titulo)}</button>`
        + `<button class="btn-sec" data-acao="voltar">Voltar à trilha</button>`;
    } else {
      botoes = (prox !== -1 ? `<button class="btn-main" data-acao="licao" data-idx="${prox}">Próxima lição</button>` : `<p class="done-msg">${nFeitas() === ALL.length ? 'Você terminou o curso inteiro. Que tal a prática livre ou outro curso?' : 'Escolha a próxima lição na trilha.'}</p>`)
        + `<button class="btn-sec" data-acao="voltar">Voltar à trilha</button>`;
    }
    if (s.errors >= limiteErros(s)) {
      const sug = basesParaSugerir(s.les);
      if (sug.ids.length) reforco = `<div class="reforco"><p class="kind">Para reforçar</p>
        <p>Esta lição teve bastante erro. ${sug.faltando ? 'Ela usa lições que você ainda não fez:' : 'Rever a base costuma ajudar:'}</p>
        <div class="acoes-linha">${botoesBase(sug.ids, s.idx, 'btn-card sec')}</div></div>`;
    }
  } else if (s.tipo === 'revisao') {
    for (const id of s.dueLids) {
      const r = S.rev[id]; if (!r) continue;
      const errou = s.itens.some(it => it.lid === id && s.errKeys.has(it.key));
      r.box = errou ? 0 : Math.min(r.box + 1, INTERVALOS.length - 1);
      r.due = somarDias(hoje(), INTERVALOS[r.box]);
    }
    S.revisoes++;
    xp = perfeita ? 15 : 10;
    eyebrow = s.livre ? 'Prática de revisão' : 'Revisão do dia';
    titulo = 'Revisão concluída';
    sub = perfeita ? 'Tudo certo de primeira. Essas lições só voltam daqui a mais tempo.' : 'O que você errou volta numa próxima revisão.';
    botoes = `<button class="btn-main" data-acao="voltar">Voltar à trilha</button>`;
  } else if (s.tipo === 'nivelamento') {
    const n = niveisDispensados(s.certos);
    for (const l of ALL) if (l.unit.nivel <= n && !S.done[l.id]) S.done[l.id] = 'nivelamento';
    S.nivelamentos = Object.assign({}, S.nivelamentos, { [CURSO.id]: { nivel: n, dia: hoje() } });
    xp = 10;
    eyebrow = 'Teste de nivelamento';
    festa = n > 0;
    const inicio = n + 1;
    if (n === 0) { titulo = 'Comece pelo Nível 1'; sub = 'Ele é rápido e deixa a base firme para o resto da trilha.'; }
    else { titulo = `Você pode começar no Nível ${inicio}`; sub = `Os níveis 1${n > 1 ? ` a ${n}` : ''} foram marcados como concluídos. Você pode refazer qualquer lição deles quando quiser.`; }
    botoes = `<button class="btn-main" data-acao="nivel" data-n="${Math.min(inicio, NIVEIS.length)}">Ir para o Nível ${Math.min(inicio, NIVEIS.length)}</button>`;
  } else {
    const d = s.desafio, primeira = !S.pratica[d.id];
    S.pratica[d.id] = hoje();
    xp = primeira ? DIF[d.dif].xp : 5;
    eyebrow = 'Desafio · ' + DIF[d.dif].nome; titulo = 'Desafio resolvido'; sub = d.titulo;
    const prox = DESAFIOS.find(x => !S.pratica[x.id]);
    botoes = (prox ? `<button class="btn-main" data-acao="desafio" data-id="${prox.id}">Próximo desafio</button>` : '')
      + `<button class="btn-sec" data-acao="voltar">Voltar à prática</button>`;
  }
  const metaAgora = ganharXP(xp);
  marcarDia();
  const novas = verificarConquistas();
  save();

  const acc = s.q ? Math.round(100 * (s.tipo === 'nivelamento' ? Object.values(s.certos).filter(Boolean).length / Math.max(1, Object.keys(s.certos).length) : s.q / (s.q + s.errors))) : 100;
  const xh = xpHoje();
  $('fim').innerHTML = `<div class="fim">
      <div class="trophy" aria-hidden="true">${IC.trophy}</div>
      <div><p class="kind">${esc(eyebrow)}</p><h1 tabindex="-1" id="fimTitulo">${titulo}</h1><p class="sub">${esc(sub)}</p></div>
      <div class="stats3">
        <div><b>+${xp}</b><span>XP</span></div>
        <div><b>${acc}%</b><span>de acertos</span></div>
        <div><b>${S.streak}</b><span>${S.streak === 1 ? 'dia seguido' : 'dias seguidos'}</span></div>
      </div>
      <div class="meta-fim${xh >= S.meta ? ' batida' : ''}">
        <div class="meta-txt"><span>${metaAgora ? 'Meta do dia batida!' : 'Meta do dia'}</span><b>${xh} / ${S.meta} XP</b></div>
        <div class="bar" aria-hidden="true"><i style="width:${Math.min(100, xh / S.meta * 100)}%"></i></div>
      </div>
      ${reforco}
      ${novas.length ? `<div class="novas"><p class="kind">${novas.length === 1 ? 'Nova conquista' : 'Novas conquistas'}</p>${novas.map(c => `<div class="nova">${medalha(c, true)}<span><b>${esc(c.titulo)}</b>${esc(c.desc)}</span></div>`).join('')}</div>` : ''}
      <div class="fim-actions">${botoes}</div>
    </div>`;
  $('fim').dataset.voltar = s.voltar;
  L = null;
  mostrar('fim');
  $('fimTitulo').focus({ preventScroll: true });
  if (festa) { som(novas.length || metaAgora ? 'conquista' : 'fim'); confete(); }
}

$('fim').addEventListener('click', e => {
  const b = e.target.closest('[data-acao]');
  if (!b) return;
  const a = b.dataset.acao;
  if (a === 'licao') startLesson(+b.dataset.idx);
  else if (a === 'desafio') startDesafio(b.dataset.id);
  else if (a === 'nivel') voltar('trilha', 'niv-' + b.dataset.n);
  else voltar($('fim').dataset.voltar);
});

/* ---------- início ---------- */
if (S.nivelamento && !Object.keys(S.nivelamentos || {}).length) S.nivelamentos = { 'logica-js': S.nivelamento }; // versão antiga
delete S.nivelamento;
if (!S.curso && nFeitasTotal() > 0) S.curso = 'logica-js'; // quem já estudava antes do catálogo
usarCurso(S.curso || 'logica-js');
aplicarAjustes();
verificarConquistas(); // libera conquistas de quem já tinha progresso, sem alarde
save();
irPara(telaDaHash());
