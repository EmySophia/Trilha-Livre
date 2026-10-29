/* Trilha Livre · fala: o áudio dos cursos de idiomas
   As frases são gravadas antes, com uma voz aberta (Kokoro), e ficam em audio/<curso>/.
   O nome de cada arquivo sai do próprio texto (um "hash"): a mesma frase em lições diferentes usa o mesmo
   arquivo, e frase nova só precisa ser gravada uma vez (npm run audio). Sem o arquivo, ou sem internet antes
   de ele ter sido guardado, o app usa a voz do navegador.
   Nos textos:
     [[apartment|flat]]   variante de sotaque: a primeira é a americana, a segunda a britânica
     ((How are you?))     trecho em inglês com botão de ouvir, no meio de uma explicação
   Também confere respostas digitadas em inglês ou português: ignora maiúsculas e pontuação, aceita
   contrações (I'm = I am) e avisa, sem tirar o ponto, de um pequeno erro de digitação.
   Este arquivo também é usado pelas ferramentas (Node), por isso a parte do navegador fica protegida.
   SPDX-License-Identifier: AGPL-3.0-or-later · Copyright (C) 2026 Contribuidores do Trilha Livre */

// hash de 53 bits (cyrb53): o mesmo texto dá sempre o mesmo nome de arquivo
function cyrb53(str, seed = 0) {
  let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761); h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}

const tirarAcentos = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const RE_VARIANTE = /\[\[([^|\]]*)\|([^\]]*)\]\]/g;
// [[americano|britânico]]: escolhe a variante do sotaque (sem sotaque, fica a primeira)
const variante = (t, sotaque) => String(t).replace(RE_VARIANTE, (_, a, b) => (sotaque === 'uk' ? b : a));
// todas as combinações das variantes de um texto, para aceitar qualquer uma nas respostas (até 16)
function variantes(t) {
  let formas = [String(t)];
  for (let i = 0; i < 4; i++) {
    const novas = formas.flatMap(f => { const m = /\[\[([^|\]]*)\|([^\]]*)\]\]/.exec(f); return m ? [m[1], m[2]].map(x => f.slice(0, m.index) + x + f.slice(m.index + m[0].length)) : [f]; });
    if (novas.length === formas.length) break;
    formas = novas;
  }
  return [...new Set(formas.map(f => variante(f, 'us')))];
}
// nas respostas: (a|b|c) aceita qualquer uma das opções, e (a|) deixa o trecho opcional. A primeira é a que aparece.
const RE_ALT = /\(([^()]*\|[^()]*)\)/;
function alternativas(t) {
  let formas = [String(t)];
  for (let i = 0; i < 10; i++) {
    let mudou = false;
    formas = formas.flatMap(f => { const m = RE_ALT.exec(f); if (!m) return [f]; mudou = true; return m[1].split('|').map(x => f.slice(0, m.index) + x + f.slice(m.index + m[0].length)); }).slice(0, 512);
    if (!mudou) break;
  }
  return formas.map(f => f.replace(/\s+/g, ' ').replace(/\s+([,.!?])/g, '$1').trim());
}
const primeiraForma = t => alternativas(t)[0];
// aplica o sotaque em todos os textos de um exercício (menos nas respostas, que aceitam os dois)
function comSotaque(v, sotaque, chave) {
  if (typeof v === 'string') return variante(v, sotaque);
  if (Array.isArray(v)) return v.map(x => comSotaque(x, sotaque, chave));
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, k === 'r' ? x : comSotaque(x, sotaque, k)]));
  return v;
}

// o texto que vai para a voz: sem marcações (**negrito**, `código`, ((fala)))
const textoFalado = t => String(t).replace(/\(\((.+?)\)\)/g, '$1').replace(/\*\*(.+?)\*\*/g, '$1').replace(/`([^`]+)`/g, '$1')
  .replace(/\s+/g, ' ').trim();

// voz de cada frase: "f" e "m" escolhem a primeira ou a segunda voz do sotaque; sem isso, o texto decide (e varia entre as frases)
function vozDaFala(texto, cfg, sotaque, papel) {
  const vs = cfg.vozes[sotaque] || Object.values(cfg.vozes)[0];
  if (papel === 'f' || papel === 0) return vs[0];
  if (papel === 'm' || papel === 1) return vs[1 % vs.length];
  return vs[cyrb53(texto) % vs.length];
}
const arquivoFala = (curso, texto, voz) => `audio/${curso}/${voz}-${cyrb53(voz + '|' + texto).toString(36)}.mp3`;

/* ---------- todas as falas de um exercício (para o gerador e o validador) ----------
   Devolve { texto, papel, sotaque } com o texto ainda com as variantes [[a|b]]; sotaque só quando a fala tem um fixo. */
function falasDoExercicio(ex) {
  const fs = [];
  const add = (t, papel, sotaque) => { if (t != null && String(t).trim()) fs.push({ texto: String(t), papel, ...(sotaque ? { sotaque } : {}) }); };
  const inline = t => { for (const m of String(t || '').matchAll(/\(\((.+?)\)\)/g)) add(m[1]); };
  if (ex.t === 'texto') {
    for (const b of ex.blocos || []) {
      if (b.fala != null) add(b.fala, b.voz, b.sotaque);
      if (b.dialogo) { const quem = []; for (const [q, f] of b.dialogo) { if (!quem.includes(q)) quem.push(q); add(f, (b.vozes || [])[quem.indexOf(q)] || (quem.indexOf(q) % 2 ? 'm' : 'f')); } }
      if (b.vocab) for (const [en] of b.vocab) add(en);
      if (b.pares) for (const par of b.pares) { add(par[0], undefined, (b.sotaques || [])[0]); add(par[1], undefined, (b.sotaques || [])[1]); }
      for (const t of [b.p, b.dica, ...(b.passos || []), ...((b.tabela && b.tabela.linhas) || []).flat()]) inline(t);
    }
    return fs;
  }
  if (ex.ouvir) add(ex.ouvir, ex.voz, ex.sotaque);
  // a resposta em inglês também ganha botão de ouvir no retorno
  if (['escreva', 'monte'].includes(ex.t) && ex.lingua !== 'pt') add(primeiraForma([].concat(ex.r != null ? ex.r : ex.ouvir)[0]), ex.voz);
  for (const t of [ex.p, ex.exp, ex.dica, ...(ex.ops || [])]) inline(t);
  return fs;
}

/* ---------- respostas digitadas ---------- */
const CONTRACOES = [
  [/\bcan't\b/g, ['can not']], [/\bcannot\b/g, ['can not']], [/\bwon't\b/g, ['will not']], [/\bshan't\b/g, ['shall not']], [/\bain't\b/g, ["ain't"]],
  [/\b(\w+)n't\b/g, ['$1 not']], [/\b(\w+)'re\b/g, ['$1 are']], [/\b(\w+)'ve\b/g, ['$1 have']], [/\b(\w+)'ll\b/g, ['$1 will']],
  [/\bi'm\b/g, ['i am']], [/\blet's\b/g, ['let us']]
];
const PRONOMES = new Set(['i', 'you', 'he', 'she', 'it', 'we', 'they', 'that', 'this', 'what', 'where', 'who', 'there', 'here', 'how', 'when', 'why', 'everyone', 'everybody', 'nobody', 'somebody', 'someone', 'nothing', 'something', 'everything']);
// a forma "canônica" de uma resposta: minúsculas, sem pontuação e com as contrações abertas.
// 's pode ser is, has ou posse (Ana's), e 'd pode ser would ou had: por isso pode haver mais de uma forma.
function formasResposta(s, lingua) {
  let t = String(s).toLowerCase().replace(/[‘’´`]/g, "'").replace(/[“”]/g, '"');
  t = t.replace(/[.,!?;:"()¿¡…]/g, ' ').replace(/[–—]/g, ' ').replace(/(^|\s)'|'(\s|$)/g, ' ').replace(/\s+/g, ' ').trim();
  if (lingua === 'pt') return [t];
  t = tirarAcentos(t); // nomes como São Paulo: em inglês, o acento não conta
  for (const [re, [sub]] of CONTRACOES) t = t.replace(re, sub);
  let formas = [t];
  for (let volta = 0; volta < 5; volta++) {
    const novas = [];
    let mudou = false;
    for (const f of formas) {
      const m = /\b(\w+)'(s|d)\b/.exec(f);
      if (!m) { novas.push(f); continue; }
      mudou = true;
      // só pronomes e palavras de pergunta viram is/has e would/had; "Ana's book" é posse
      const subs = !PRONOMES.has(m[1]) ? [m[1] + '\u0001' + m[2]] : m[2] === 's' ? [m[1] + ' is', m[1] + ' has'] : [m[1] + ' would', m[1] + ' had'];
      for (const sub of subs) novas.push(f.slice(0, m.index) + sub + f.slice(m.index + m[0].length));
    }
    formas = [...new Set(novas)].slice(0, 48);
    if (!mudou) break;
  }
  return formas.map(f => f.replace(/\u0001/g, "'").replace(/-/g, ' ').replace(/\s+/g, ' ').trim());
}
function distancia(a, b) { // Levenshtein com troca de vizinhas
  const m = a.length, n = b.length, d = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
  for (let j = 1; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) {
    d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
  }
  return d[m][n];
}
// palavras parecidas que são erros de verdade, não de digitação
const CONFUNDIVEIS = [['were', 'where', 'wear', "we're"], ['than', 'then'], ['their', 'there', "they're"], ['its', "it's"], ['your', "you're"],
  ['to', 'too', 'two'], ['lose', 'loose'], ['quite', 'quiet'], ['accept', 'except'], ['of', 'off'], ['live', 'leave'], ['want', 'went'],
  ['this', 'these'], ['that', 'what'], ['he', 'she'], ['his', 'her', 'him'], ['in', 'on', 'at'], ['a', 'an', 'the'], ['do', 'does', 'did'],
  ['is', 'are', 'am', 'was', 'were', 'be'], ['have', 'has', 'had'], ['says', 'said'], ['woman', 'women'], ['man', 'men'], ['know', 'now', 'no'],
  ['write', 'right'], ['hear', 'here'], ['buy', 'by', 'bye'], ['for', 'four'], ['whose', "who's"], ['affect', 'effect'], ['bored', 'boring'],
  ['tired', 'tiring'], ['interested', 'interesting'], ['excited', 'exciting'], ['ship', 'sheep'], ['fill', 'feel'], ['sit', 'seat']];
const confundivel = (a, b) => CONFUNDIVEIS.some(g => g.includes(a) && g.includes(b));
// erro de digitação: só em palavras de 5 letras ou mais, e nunca no fim da palavra (-s, -ed, -ing são gramática)
function quaseIgual(dig, cert) {
  const a = dig.split(' '), b = cert.split(' ');
  if (a.length !== b.length) return false;
  let erros = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) continue;
    if (confundivel(a[i], b[i])) return false;
    if (b[i].length < 5 || distancia(a[i], b[i]) > 1) return false;
    const fimA = a[i].slice(-2), fimB = b[i].slice(-2);
    if (fimA !== fimB && a[i].length !== b[i].length) return false;
    if (++erros > Math.max(1, Math.floor(b.length / 6))) return false;
  }
  return erros > 0;
}
// contrações digitadas sem o apóstrofo (im, dont, cant): contam como erro de digitação
const SEM_APOSTROFO = { im: "i'm", dont: "don't", doesnt: "doesn't", didnt: "didn't", isnt: "isn't", arent: "aren't", wasnt: "wasn't",
  werent: "weren't", cant: "can't", couldnt: "couldn't", wouldnt: "wouldn't", shouldnt: "shouldn't", havent: "haven't", hasnt: "hasn't",
  youre: "you're", theyre: "they're", thats: "that's", whats: "what's", ive: "i've", youve: "you've", theyve: "they've", weve: "we've",
  youll: "you'll", theyll: "they'll", itll: "it'll", hows: "how's", wheres: "where's", theres: "there's", heres: "here's" };
const comApostrofos = t => String(t).replace(/[a-z]+/gi, w => SEM_APOSTROFO[w.toLowerCase()] || w);
// confere uma resposta: { ok, quase, certa } — "quase" é certa com um errinho de digitação (ou de acento, em português)
function conferirResposta(digitada, aceitas, opts = {}) {
  const lingua = opts.lingua || 'en';
  const lista = [].concat(aceitas).flatMap(alternativas).flatMap(variantes);
  const dig = formasResposta(digitada, lingua);
  for (const a of lista) if (formasResposta(a, lingua).some(f => dig.includes(f))) return { ok: true, quase: false, certa: a };
  if (lingua === 'pt') for (const a of lista) if (formasResposta(a, 'pt').some(f => dig.some(d => tirarAcentos(d) === tirarAcentos(f)))) return { ok: true, quase: true, certa: a, acento: true };
  if (lingua !== 'pt' && !opts.exato) {
    const dig2 = formasResposta(comApostrofos(digitada), lingua);
    for (const a of lista) if (formasResposta(a, lingua).some(f => dig2.includes(f))) return { ok: true, quase: true, certa: a };
  }
  if (!opts.exato) for (const a of lista) for (const f of formasResposta(a, lingua)) if (dig.some(d => quaseIgual(d, f))) return { ok: true, quase: true, certa: a };
  return { ok: false, quase: false, certa: primeiraForma([].concat(aceitas)[0]) };
}
// as palavras de uma frase, para o exercício de montar (a pontuação do fim sai)
const palavrasDaFrase = s => String(s).trim().replace(/[.!?]+$/, '').split(/\s+/).map(w => w.replace(/^[,;:"(]+|[,;:"()]+$/g, '')).filter(Boolean);

/* ---------- no navegador: tocar ---------- */
let audioAtual = null, filaFala = [];
function pararFala() {
  filaFala = [];
  if (audioAtual) { audioAtual.onended = audioAtual.onerror = null; audioAtual.pause(); audioAtual = null; }
  if (typeof speechSynthesis !== 'undefined') speechSynthesis.cancel();
  if (typeof document !== 'undefined') document.querySelectorAll('.falando').forEach(b => b.classList.remove('falando'));
}
// voz do navegador, quando o arquivo não existe ou não carregou
function falarNoNavegador(texto, lang, devagar, fim) {
  if (typeof speechSynthesis === 'undefined') { fim(); return; }
  const u = new SpeechSynthesisUtterance(texto);
  u.lang = lang; u.rate = devagar ? 0.7 : 0.95;
  const v = speechSynthesis.getVoices().find(x => x.lang.replace('_', '-').toLowerCase() === lang.toLowerCase());
  if (v) u.voice = v;
  u.onend = u.onerror = fim;
  speechSynthesis.speak(u);
}
// toca uma lista de falas, uma depois da outra: [{ texto, papel }]; chame dentro do clique (o iPhone exige)
function tocarFalas(curso, cfg, sotaque, falas, { devagar = false, botao = null } = {}) {
  pararFala();
  filaFala = falas.slice();
  if (botao) botao.classList.add('falando');
  const proxima = () => {
    const f = filaFala.shift();
    if (!f) { if (botao) botao.classList.remove('falando'); audioAtual = null; return; }
    const sot = f.sotaque || sotaque; // uma fala pode ter o sotaque fixo, para comparar os dois
    const texto = textoFalado(variante(f.texto, sot));
    const voz = vozDaFala(texto, cfg, sot, f.papel);
    const a = new Audio(arquivoFala(curso, texto, voz));
    a.preservesPitch = true; a.webkitPreservesPitch = true;
    a.playbackRate = devagar ? 0.7 : 1;
    audioAtual = a;
    let falhou = false;
    const plano = () => { if (falhou || audioAtual !== a) return; falhou = true; falarNoNavegador(texto, (cfg.lang || {})[sot] || 'en-US', devagar, () => setTimeout(proxima, 250)); };
    a.onended = () => setTimeout(proxima, 250);
    a.onerror = plano;
    const p = a.play();
    if (p && p.catch) p.catch(err => { if (err && err.name === 'NotAllowedError') { if (botao) botao.classList.remove('falando'); } else plano(); });
  };
  proxima();
}

if (typeof module !== 'undefined' && module.exports) module.exports = { cyrb53, variante, variantes, alternativas, primeiraForma, comSotaque, textoFalado, vozDaFala, arquivoFala, falasDoExercicio, formasResposta, conferirResposta, palavrasDaFrase, quaseIgual };
