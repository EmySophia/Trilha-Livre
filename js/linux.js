/* Trilha Livre · Linux simulado
   Um sistema de arquivos de mentira, com donos e permissões, e um shell com os comandos mais usados.
   Roda no navegador (exercícios do tipo terminal) e no Node (o validador confere cada missão rodando a solução).
   Nada aqui toca em arquivos de verdade: tudo vive num objeto na memória.
   SPDX-License-Identifier: AGPL-3.0-or-later · Copyright (C) 2026 Contribuidores do Trilha Livre */

/* ---------- sistema de arquivos ----------
   Cada nó: { tipo: 'd' | 'f', modo: 0o755, dono, grupo, filhos: {} } (pasta) ou { ..., c: 'conteúdo' } (arquivo) */
const LX_HOST = 'trilha';
const lxPasta = (dono, modo = 0o755) => ({ tipo: 'd', modo, dono, grupo: dono, filhos: {} });
const lxArq = (c, dono, modo = 0o644) => ({ tipo: 'f', modo, dono, grupo: dono, c: String(c == null ? '' : c) });

// cria o estado de uma missão a partir do exercício: { fs, pasta, usuario, sudo, processos, usuarios, antes }
function lxCriar(ex = {}) {
  const usuario = ex.usuario || 'ana';
  const home = '/home/' + usuario;
  const raiz = lxPasta('root');
  const st = {
    raiz, usuario, home, sudo: !!ex.sudo, hist: [...(ex.historico || [])], anterior: home, histInicial: (ex.historico || []).length,
    usuarios: ['root', usuario, ...(ex.usuarios || [])],
    vars: { HOME: home, USER: usuario, SHELL: '/bin/bash', PATH: '/usr/local/bin:/usr/bin:/bin' },
    procs: (ex.processos || []).map(p => ({ ...p })),
    pilha: [] // usuários anteriores, quando se entra como root com su
  };
  const mk = (caminho, no) => {
    const partes = caminho.split('/').filter(Boolean);
    let d = raiz;
    for (let i = 0; i < partes.length - 1; i++) {
      if (!d.filhos[partes[i]]) d.filhos[partes[i]] = lxPasta(caminho.startsWith(home) && i >= 2 ? usuario : 'root');
      d = d.filhos[partes[i]];
    }
    d.filhos[partes[partes.length - 1]] = no;
  };
  // o básico de todo Linux
  mk('/home', lxPasta('root'));
  mk(home, lxPasta(usuario, 0o750));
  mk('/tmp', lxPasta('root', 0o777));
  mk('/etc', lxPasta('root'));
  mk('/var', lxPasta('root'));
  mk('/var/log', lxPasta('root'));
  mk('/etc/hostname', lxArq(LX_HOST + '\n', 'root'));
  mk('/etc/passwd', lxArq(st.usuarios.map((u, i) => u === 'root' ? 'root:x:0:0:root:/root:/bin/bash' : `${u}:x:${999 + i}:${999 + i}:${u}:/home/${u}:/bin/bash`).join('\n') + '\n', 'root'));
  const shadow = lxArq(st.usuarios.map(u => `${u}:$6$...:20000:0:99999:7:::`).join('\n') + '\n', 'root', 0o640);
  shadow.grupo = 'shadow';
  mk('/etc/shadow', shadow);
  mk('/root', lxPasta('root', 0o700));
  // os arquivos da missão: caminhos relativos partem da pasta pessoal; "pasta/" é uma pasta
  for (const [k, v] of Object.entries(ex.fs || {})) {
    const abs = k.startsWith('/') ? k : home + '/' + k;
    const dono = abs.startsWith(home + '/') ? usuario : 'root';
    const o = v && typeof v === 'object' ? v : { c: v };
    const no = k.endsWith('/') ? lxPasta(o.dono || dono, o.modo != null ? lxModo(o.modo) : 0o755) : lxArq(o.c, o.dono || dono, o.modo != null ? lxModo(o.modo) : 0o644);
    if (o.grupo) no.grupo = o.grupo;
    mk(abs.replace(/\/$/, ''), no);
  }
  st.cwd = lxCaminho(st, ex.pasta || '~');
  st.vars.PWD = st.cwd;
  return st;
}
const lxModo = m => typeof m === 'number' ? m : parseInt(m, 8);

const lxGrupos = st => st.usuario === 'root' ? ['root'] : [st.usuario, ...(st.sudo ? ['sudo'] : [])];
// a pessoa pode ler (r), escrever (w) ou executar (x) este nó?
function lxPode(st, no, bit) {
  const b = { r: 4, w: 2, x: 1 }[bit];
  if (st.usuario === 'root') return bit !== 'x' || no.tipo === 'd' || (no.modo & 0o111) !== 0;
  const quem = no.dono === st.usuario ? 6 : lxGrupos(st).includes(no.grupo) ? 3 : 0;
  return ((no.modo >> quem) & b) !== 0;
}

// caminho absoluto e normalizado, a partir da pasta atual (ou de outra base)
function lxCaminho(st, p, base) {
  p = String(p);
  if (p === '~' || p.startsWith('~/')) p = st.home + p.slice(1);
  const partes = (p.startsWith('/') ? p : (base || st.cwd) + '/' + p).split('/');
  const out = [];
  for (const x of partes) { if (!x || x === '.') continue; if (x === '..') out.pop(); else out.push(x); }
  return '/' + out.join('/');
}
// acha o nó de um caminho absoluto, conferindo a permissão de passar pelas pastas do caminho
function lxAchar(st, abs) {
  let d = st.raiz;
  const partes = abs.split('/').filter(Boolean);
  for (let i = 0; i < partes.length; i++) {
    if (d.tipo !== 'd') return { erro: 'Não é um diretório' };
    if (!lxPode(st, d, 'x')) return { erro: 'Permissão negada' };
    d = d.filhos[partes[i]];
    if (!d) return { erro: 'Arquivo ou diretório inexistente' };
  }
  return { no: d };
}
const lxPai = abs => abs.replace(/\/[^/]*$/, '') || '/';
const lxNome = abs => abs.split('/').pop();
const lxTam = no => no.tipo === 'd' ? 4096 : new TextEncoder().encode(no.c).length;
const lxLinhas = t => { const ls = String(t).split('\n'); if (ls.length && ls[ls.length - 1] === '') ls.pop(); return ls; };
function lxRwx(no) {
  let s = no.tipo === 'd' ? 'd' : '-';
  for (const q of [6, 3, 0]) s += ((no.modo >> q) & 4 ? 'r' : '-') + ((no.modo >> q) & 2 ? 'w' : '-') + ((no.modo >> q) & 1 ? 'x' : '-');
  return s;
}
const lxCopiar = no => no.tipo === 'd' ? { ...no, filhos: Object.fromEntries(Object.entries(no.filhos).map(([k, v]) => [k, lxCopiar(v)])) } : { ...no };

// o texto que aparece antes do comando: ana@trilha:~/docs$
function lxPrompt(st) {
  const p = st.cwd === st.home ? '~' : st.cwd.startsWith(st.home + '/') ? '~' + st.cwd.slice(st.home.length) : st.cwd;
  return `${st.usuario}@${LX_HOST}:${p}${st.usuario === 'root' ? '#' : '$'}`;
}

/* ---------- leitura da linha de comando ---------- */
// separa em ; e &&, respeitando as aspas
function lxSequencia(linha) {
  const out = []; let atual = '', q = null, op = ';';
  for (let i = 0; i < linha.length; i++) {
    const c = linha[i];
    if (q) { if (c === q) q = null; atual += c; continue; }
    if (c === '"' || c === "'") { q = c; atual += c; continue; }
    if (c === ';') { out.push({ op, cmd: atual }); atual = ''; op = ';'; continue; }
    if (c === '&' && linha[i + 1] === '&') { out.push({ op, cmd: atual }); atual = ''; op = '&&'; i++; continue; }
    atual += c;
  }
  out.push({ op, cmd: atual });
  return out.filter(x => x.cmd.trim());
}
// transforma o comando em palavras, operadores (| > >> 2>) e variáveis já trocadas pelo valor
function lxPalavras(st, cmd, args = []) {
  const toks = []; let w = null, glob = false, q = null;
  const fecha = () => { if (w !== null) toks.push({ w, glob }); w = null; glob = false; };
  const variavel = (i) => {
    let m = /^\$\{(\w+)\}/.exec(cmd.slice(i)) || /^\$(\w+|[@#?])/.exec(cmd.slice(i));
    if (!m) return null;
    const n = m[1];
    let v = /^\d$/.test(n) ? (args[+n] || '') : n === '@' ? args.slice(1).join(' ') : n === '#' ? String(Math.max(0, args.length - 1)) : n === '?' ? String(st.ultimo || 0) : (st.vars[n] ?? '');
    return { v, len: m[0].length };
  };
  for (let i = 0; i < cmd.length; i++) {
    const c = cmd[i];
    if (q === "'") { if (c === "'") q = null; else w += c; continue; }
    if (q === '"') {
      if (c === '"') { q = null; continue; }
      if (c === '\\' && /["\\$]/.test(cmd[i + 1] || '')) { w += cmd[++i]; continue; }
      if (c === '$') { const r = variavel(i); if (r) { w += r.v; i += r.len - 1; continue; } }
      w += c; continue;
    }
    if (/\s/.test(c)) { fecha(); continue; }
    if (c === "'" || c === '"') { q = c; if (w === null) w = ''; continue; }
    if (c === '\\' && i + 1 < cmd.length) { if (w === null) w = ''; w += cmd[++i]; continue; }
    if (c === '|') { fecha(); toks.push({ op: '|' }); continue; }
    if (c === '2' && cmd[i + 1] === '>' && w === null) { toks.push({ op: '2>' }); i++; continue; }
    if (c === '>') { fecha(); if (cmd[i + 1] === '>') { toks.push({ op: '>>' }); i++; } else toks.push({ op: '>' }); continue; }
    if (c === '$') { const r = variavel(i); if (r) { if (w === null) w = ''; w += r.v; i += r.len - 1; continue; } }
    if (w === null) w = '';
    if (c === '*' || c === '?') glob = true;
    w += c;
  }
  if (q) return { erro: 'bash: erro de sintaxe: aspas sem fechamento' };
  fecha();
  return { toks };
}
// troca * e ? pelos nomes que combinam, na pasta do padrão
function lxGlob(st, palavra) {
  const i = palavra.lastIndexOf('/');
  const dirTxt = i >= 0 ? palavra.slice(0, i) || '/' : '.';
  const pad = palavra.slice(i + 1);
  const re = new RegExp('^' + pad.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*').replace(/\?/g, '.') + '$');
  const { no } = lxAchar(st, lxCaminho(st, dirTxt));
  if (!no || no.tipo !== 'd' || !lxPode(st, no, 'r')) return [palavra];
  const nomes = Object.keys(no.filhos).filter(n => re.test(n) && (pad.startsWith('.') || !n.startsWith('.'))).sort();
  return nomes.length ? nomes.map(n => (i >= 0 ? palavra.slice(0, i + 1) : '') + n) : [palavra];
}

/* ---------- execução ---------- */
// roda uma linha digitada; devolve o texto que o terminal mostra (e limpar: true para o clear)
function lxRodar(st, linha, opcoes = {}) {
  linha = String(linha).replace(/[\u201c\u201d]/g, '"').replace(/[\u2018\u2019]/g, "'").replace(/[\u2014\u2013]/g, '--');
  if (!opcoes.script && linha.trim()) st.hist.push(linha.trim());
  const saida = []; let limpar = false;
  for (const { op, cmd } of lxSequencia(linha)) {
    if (op === '&&' && st.ultimo !== 0) break;
    const r = lxPipeline(st, cmd, opcoes.args || []);
    if (r.limpar) { limpar = true; saida.length = 0; }
    if (r.texto) saida.push(r.texto);
  }
  return { texto: saida.join('\n'), limpar };
}
function lxPipeline(st, cmd, args) {
  const lex = lxPalavras(st, cmd, args);
  if (lex.erro) { st.ultimo = 2; return { texto: lex.erro }; }
  // separa os estágios do pipe e os redirecionamentos de cada um
  const estagios = [[]];
  for (const t of lex.toks) { if (t.op === '|') estagios.push([]); else estagios[estagios.length - 1].push(t); }
  let entrada = null; const erros = []; let limpar = false; let texto = '';
  for (let k = 0; k < estagios.length; k++) {
    const toks = estagios[k];
    let red = null, semErros = false; const palavras = [];
    for (let i = 0; i < toks.length; i++) {
      const t = toks[i];
      if (t.op === '>' || t.op === '>>') { red = { modo: t.op, alvo: (toks[++i] || {}).w }; continue; }
      if (t.op === '2>') { const alvo = (toks[++i] || {}).w; semErros = alvo === '/dev/null'; continue; }
      if (t.glob) palavras.push(...lxGlob(st, t.w)); else palavras.push(t.w);
    }
    if (red && !red.alvo) { erros.push('bash: erro de sintaxe próximo ao token inesperado `newline\''); st.ultimo = 2; break; }
    // NOME=valor sozinho guarda uma variável
    if (palavras.length && palavras.every(p => /^[A-Za-z_]\w*=/.test(p))) {
      for (const p of palavras) { const j = p.indexOf('='); st.vars[p.slice(0, j)] = p.slice(j + 1); }
      st.ultimo = 0; entrada = ''; continue;
    }
    if (!palavras.length) continue;
    // como no Linux de verdade, o ls põe um nome por linha quando a saída vai para um pipe ou arquivo
    st.paraPipe = k < estagios.length - 1 || !!red;
    const r = lxComando(st, palavras, entrada);
    st.paraPipe = false;
    if (r.limpar) limpar = true;
    st.ultimo = r.cod || 0;
    if (r.e && !semErros) erros.push(r.e);
    let out = r.o == null ? '' : String(r.o);
    if (red) {
      if (red.alvo !== '/dev/null') {
        const e = lxEscrever(st, red.alvo, out ? out + '\n' : '', red.modo === '>>');
        if (e) { erros.push('bash: ' + red.alvo + ': ' + e); st.ultimo = 1; }
      }
      out = '';
    }
    entrada = out;
    if (k === estagios.length - 1) texto = out;
  }
  return { texto: [...erros, texto].filter(Boolean).join('\n'), limpar };
}
// grava texto num arquivo (cria se não existir)
function lxEscrever(st, caminho, texto, acrescentar) {
  const abs = lxCaminho(st, caminho);
  const pai = lxAchar(st, lxPai(abs));
  if (pai.erro) return pai.erro;
  if (pai.no.tipo !== 'd') return 'Não é um diretório';
  const atual = pai.no.filhos[lxNome(abs)];
  if (atual) {
    if (atual.tipo === 'd') return 'É um diretório';
    if (!lxPode(st, atual, 'w')) return 'Permissão negada';
    atual.c = acrescentar ? atual.c + (atual.c && !atual.c.endsWith('\n') ? '\n' : '') + texto : texto;
    return null;
  }
  if (!lxPode(st, pai.no, 'w')) return 'Permissão negada';
  pai.no.filhos[lxNome(abs)] = lxArq(texto, st.usuario);
  return null;
}
// separa opções (-la, -n 5) dos argumentos
function lxOpcoes(args, comValor = []) {
  const flags = new Set(), val = {}, resto = [];
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--') { resto.push(...args.slice(i + 1)); break; }
    if (/^-\d+$/.test(a)) { val.n = a.slice(1); continue; }
    if (a.startsWith('-') && a.length > 1) {
      const letras = a.slice(1);
      for (let j = 0; j < letras.length; j++) {
        const l = letras[j];
        if (comValor.includes(l)) { val[l] = letras.slice(j + 1) || args[++i]; break; }
        flags.add(l);
      }
      continue;
    }
    resto.push(a);
  }
  return { f: flags, v: val, a: resto };
}
const lxErroArq = (cmd, alvo, erro) => `${cmd}: ${alvo}: ${erro}`;
// lê um arquivo para cat, head, grep...
function lxLer(st, cmd, alvo) {
  const r = lxAchar(st, lxCaminho(st, alvo));
  if (r.erro) return { e: lxErroArq(cmd, alvo, r.erro) };
  if (r.no.tipo === 'd') return { e: lxErroArq(cmd, alvo, 'É um diretório') };
  if (!lxPode(st, r.no, 'r')) return { e: lxErroArq(cmd, alvo, 'Permissão negada') };
  return { c: r.no.c };
}
// junta a entrada dos arquivos (ou do pipe) para os filtros
function lxEntrada(st, cmd, arquivos, entrada) {
  if (!arquivos.length) return { textos: [{ nome: null, c: entrada || '' }], erros: [] };
  const textos = [], erros = [];
  for (const a of arquivos) {
    if (a === '-') { textos.push({ nome: '-', c: entrada || '' }); continue; } // - é a entrada padrão, como no Linux de verdade
    const r = lxLer(st, cmd, a); if (r.e) erros.push(r.e); else textos.push({ nome: a, c: r.c });
  }
  return { textos, erros };
}

const LX_AJUDA = {
  pwd: 'pwd: mostra em que pasta você está',
  ls: 'ls [-a] [-l] [pasta]: lista arquivos; -a mostra os ocultos, -l mostra detalhes e permissões',
  cd: 'cd [pasta]: entra numa pasta; cd .. sobe uma; cd sozinho volta para a pasta pessoal',
  cat: 'cat arquivo: mostra o conteúdo de um arquivo',
  echo: 'echo texto: escreve o texto; com > arquivo, grava no arquivo',
  touch: 'touch arquivo: cria um arquivo vazio',
  mkdir: 'mkdir [-p] pasta: cria uma pasta',
  rm: 'rm [-r] [-f] alvo: apaga arquivos; -r apaga pastas inteiras. Não tem lixeira!',
  rmdir: 'rmdir pasta: apaga uma pasta vazia',
  cp: 'cp [-r] origem destino: copia',
  mv: 'mv origem destino: move ou renomeia',
  head: 'head [-n N] arquivo: mostra as primeiras linhas',
  tail: 'tail [-n N] arquivo: mostra as últimas linhas',
  wc: 'wc [-l] [-w] [-c] arquivo: conta linhas, palavras e caracteres',
  grep: 'grep [-i] [-n] [-v] [-c] [-r] padrão [arquivos]: procura linhas com o padrão',
  find: 'find [pasta] [-name padrão] [-type f|d] [-user nome] [-perm modo]: procura arquivos',
  sort: 'sort [-r] [-n] [-u]: ordena linhas',
  uniq: 'uniq [-c] [-u]: junta linhas repetidas seguidas; -c conta, -u mostra só as que não se repetem',
  cut: 'cut -d separador -f campo: recorta colunas',
  chmod: 'chmod modo arquivo: muda as permissões (755, u+x...)',
  chown: 'chown dono[:grupo] arquivo: muda o dono (só o root)',
  whoami: 'whoami: mostra com qual usuário você está',
  id: 'id: mostra o seu usuário e os seus grupos',
  sudo: 'sudo comando: roda o comando como root, se você tiver permissão',
  su: 'su: troca de usuário (exit volta)',
  ps: 'ps [aux]: lista os processos',
  kill: 'kill PID: encerra um processo',
  export: 'export NOME=valor: cria uma variável de ambiente',
  env: 'env: lista as variáveis de ambiente',
  history: 'history: lista os comandos que você já digitou',
  base64: 'base64 [-d]: codifica em base64, ou decodifica com -d',
  bash: 'bash script.sh: roda um script',
  clear: 'clear: limpa a tela',
  man: 'man comando: mostra a ajuda de um comando'
};

function lxComando(st, palavras, entrada) {
  const [cmd, ...args] = palavras;
  const f = LX_CMDS[cmd];
  if (cmd.includes('/')) return lxScript(st, cmd, args, true);
  if (!f) {
    if (['nano', 'vim', 'vi', 'emacs'].includes(cmd)) return { e: `${cmd}: este terminal não tem editor de texto. Para escrever num arquivo, use echo "texto" > arquivo`, cod: 127 };
    return { e: `bash: ${cmd}: comando não encontrado`, cod: 127 };
  }
  return f(st, args, entrada) || {};
}

function lxListar(st, abs, alvo, op) {
  const r = lxAchar(st, abs);
  if (r.erro) return { e: `ls: não foi possível acessar '${alvo}': ${r.erro}` };
  const linha = (nome, no) => op.f.has('l') ? `${lxRwx(no)} 1 ${no.dono} ${no.grupo} ${String(lxTam(no)).padStart(5)} nov  5 10:00 ${nome}` : nome;
  if (r.no.tipo === 'f') return { o: linha(alvo, r.no) };
  if (!lxPode(st, r.no, 'r')) return { e: `ls: não foi possível abrir o diretório '${alvo}': Permissão negada` };
  let nomes = Object.keys(r.no.filhos).sort((a, b) => a.replace(/^\./, '').localeCompare(b.replace(/^\./, '')));
  if (!op.f.has('a')) nomes = nomes.filter(n => !n.startsWith('.'));
  const itens = nomes.map(n => [n, r.no.filhos[n]]);
  if (op.f.has('a')) { const pai = lxAchar(st, lxPai(abs)).no || r.no; itens.unshift(['.', r.no], ['..', pai]); }
  if (!itens.length) return { o: '' };
  return { o: op.f.has('l') ? itens.map(([n, no]) => linha(n, no)).join('\n') : itens.map(([n]) => n).join(st.paraPipe ? '\n' : '  ') };
}

function lxAndar(st, abs, fn, rel) {
  const r = lxAchar(st, abs);
  if (r.erro) return;
  fn(rel, r.no, abs);
  if (r.no.tipo === 'd') {
    if (!lxPode(st, r.no, 'r') || !lxPode(st, r.no, 'x')) { fn(rel, r.no, abs, 'Permissão negada'); return; }
    for (const n of Object.keys(r.no.filhos).sort()) lxAndar(st, abs === '/' ? '/' + n : abs + '/' + n, fn, rel === '/' ? '/' + n : rel + '/' + n);
  }
}

function lxChmod(no, modo) {
  if (/^[0-7]{3,4}$/.test(modo)) { no.modo = parseInt(modo, 8) & 0o777; return true; }
  for (const parte of modo.split(',')) {
    const m = /^([ugoa]*)([+\-=])([rwx]*)$/.exec(parte);
    if (!m) return false;
    const quem = (m[1] || 'a').replace('a', 'ugo');
    let bits = 0;
    for (const l of m[3]) bits |= { r: 4, w: 2, x: 1 }[l];
    for (const q of quem) {
      const s = { u: 6, g: 3, o: 0 }[q];
      if (m[2] === '+') no.modo |= bits << s;
      else if (m[2] === '-') no.modo &= ~(bits << s);
      else no.modo = (no.modo & ~(7 << s)) | (bits << s);
    }
  }
  return true;
}

// roda um arquivo de script, linha por linha (./script.sh ou bash script.sh)
function lxScript(st, caminho, args, direto) {
  const abs = lxCaminho(st, caminho);
  const r = lxAchar(st, abs);
  if (r.erro) return { e: `bash: ${caminho}: ${r.erro}`, cod: 127 };
  if (r.no.tipo === 'd') return { e: `bash: ${caminho}: É um diretório`, cod: 126 };
  if (!lxPode(st, r.no, 'r') || (direto && !lxPode(st, r.no, 'x'))) return { e: `bash: ${caminho}: Permissão negada`, cod: 126 };
  const saida = [];
  for (const l of lxLinhas(r.no.c)) {
    if (!l.trim() || l.trim().startsWith('#')) continue;
    if (/^\s*(if|for|while|then|fi|do|done|else|case|esac|function)\b/.test(l)) { saida.push('Este terminal simulado roda scripts simples, sem if, for ou while.'); break; }
    const x = lxRodar(st, l, { script: true, args: [caminho, ...args] });
    if (x.texto) saida.push(x.texto);
  }
  return { o: saida.join('\n') };
}

const LX_CMDS = {
  pwd: st => ({ o: st.cwd }),
  whoami: st => ({ o: st.usuario }),
  hostname: () => ({ o: LX_HOST }),
  id: st => st.usuario === 'root' ? { o: 'uid=0(root) gid=0(root) grupos=0(root)' } : { o: `uid=1000(${st.usuario}) gid=1000(${st.usuario}) grupos=1000(${st.usuario})${st.sudo ? ',27(sudo)' : ''}` },
  groups: st => ({ o: lxGrupos(st).join(' ') }),
  clear: () => ({ limpar: true }),
  history: st => ({ o: st.hist.map((h, i) => `${String(i + 1).padStart(5)}  ${h}`).join('\n') }),
  echo: (st, args) => { const n = args[0] === '-n'; return { o: (n ? args.slice(1) : args).join(' ') }; },
  man: (st, args) => args[0] && LX_AJUDA[args[0]] ? { o: LX_AJUDA[args[0]] } : { e: `Não há ajuda para ${args[0] || 'nada'}. Comandos com ajuda: ${Object.keys(LX_AJUDA).join(', ')}`, cod: 16 },
  help: () => ({ o: 'Comandos deste terminal:\n' + Object.values(LX_AJUDA).join('\n') }),
  which: (st, args) => ({ o: args.filter(a => LX_CMDS[a]).map(a => '/usr/bin/' + a).join('\n'), cod: args.every(a => LX_CMDS[a]) ? 0 : 1 }),
  cd: (st, args) => {
    let alvo = args[0] == null ? st.home : args[0] === '-' ? st.anterior : args[0];
    const abs = lxCaminho(st, alvo);
    const r = lxAchar(st, abs);
    if (r.erro) return { e: `bash: cd: ${args[0]}: ${r.erro}`, cod: 1 };
    if (r.no.tipo !== 'd') return { e: `bash: cd: ${args[0]}: Não é um diretório`, cod: 1 };
    if (!lxPode(st, r.no, 'x')) return { e: `bash: cd: ${args[0]}: Permissão negada`, cod: 1 };
    st.anterior = st.cwd; st.cwd = abs; st.vars.PWD = abs;
    return args[0] === '-' ? { o: abs } : {};
  },
  ls: (st, args) => {
    const op = lxOpcoes(args);
    const alvos = op.a.length ? op.a : ['.'];
    const partes = [], erros = [];
    for (const a of alvos) {
      const r = lxListar(st, lxCaminho(st, a), a, op);
      if (r.e) erros.push(r.e); else partes.push(alvos.length > 1 && lxAchar(st, lxCaminho(st, a)).no.tipo === 'd' ? `${a}:\n${r.o}` : r.o);
    }
    return { o: partes.join('\n\n'), e: erros.join('\n'), cod: erros.length ? 2 : 0 };
  },
  cat: (st, args, entrada) => {
    if (!args.length) return { o: entrada || '' };
    const { textos, erros } = lxEntrada(st, 'cat', args, entrada);
    return { o: textos.map(t => t.c.replace(/\n$/, '')).join('\n'), e: erros.join('\n'), cod: erros.length ? 1 : 0 };
  },
  touch: (st, args) => {
    const erros = [];
    for (const a of args) {
      const abs = lxCaminho(st, a);
      if (lxAchar(st, abs).no) continue;
      const e = lxEscrever(st, a, '', false);
      if (e) erros.push(`touch: não foi possível tocar '${a}': ${e}`);
    }
    return { e: erros.join('\n'), cod: erros.length ? 1 : 0 };
  },
  mkdir: (st, args) => {
    const op = lxOpcoes(args); const erros = [];
    for (const a of op.a) {
      const abs = lxCaminho(st, a);
      const partes = abs.split('/').filter(Boolean);
      let caminho = '';
      for (let i = 0; i < partes.length; i++) {
        caminho += '/' + partes[i];
        const ultimo = i === partes.length - 1;
        const r = lxAchar(st, caminho);
        if (r.no) { if (ultimo && !op.f.has('p')) erros.push(`mkdir: não foi possível criar o diretório '${a}': Arquivo existe`); continue; }
        if (!ultimo && !op.f.has('p')) { erros.push(`mkdir: não foi possível criar o diretório '${a}': Arquivo ou diretório inexistente`); break; }
        const pai = lxAchar(st, lxPai(caminho));
        if (pai.erro || !lxPode(st, pai.no, 'w')) { erros.push(`mkdir: não foi possível criar o diretório '${a}': Permissão negada`); break; }
        pai.no.filhos[partes[i]] = lxPasta(st.usuario);
      }
    }
    return { e: erros.join('\n'), cod: erros.length ? 1 : 0 };
  },
  rmdir: (st, args) => {
    const erros = [];
    for (const a of args) {
      const abs = lxCaminho(st, a); const r = lxAchar(st, abs);
      if (r.erro) { erros.push(`rmdir: falhou em remover '${a}': ${r.erro}`); continue; }
      if (r.no.tipo !== 'd') { erros.push(`rmdir: falhou em remover '${a}': Não é um diretório`); continue; }
      if (Object.keys(r.no.filhos).length) { erros.push(`rmdir: falhou em remover '${a}': Diretório não vazio`); continue; }
      const pai = lxAchar(st, lxPai(abs)).no;
      if (!lxPode(st, pai, 'w')) { erros.push(`rmdir: falhou em remover '${a}': Permissão negada`); continue; }
      delete pai.filhos[lxNome(abs)];
    }
    return { e: erros.join('\n'), cod: erros.length ? 1 : 0 };
  },
  rm: (st, args) => {
    const op = lxOpcoes(args); const rec = op.f.has('r') || op.f.has('R'); const erros = [];
    if (!op.a.length) return { e: 'rm: falta operando', cod: 1 };
    for (const a of op.a) {
      const abs = lxCaminho(st, a);
      if (abs === '/' && rec) { erros.push("rm: é perigoso operar recursivamente em '/'"); continue; }
      const r = lxAchar(st, abs);
      if (r.erro) { if (!op.f.has('f')) erros.push(`rm: não foi possível remover '${a}': ${r.erro}`); continue; }
      if (r.no.tipo === 'd' && !rec) { erros.push(`rm: não foi possível remover '${a}': É um diretório`); continue; }
      const pai = lxAchar(st, lxPai(abs)).no;
      if (!lxPode(st, pai, 'w')) { erros.push(`rm: não foi possível remover '${a}': Permissão negada`); continue; }
      delete pai.filhos[lxNome(abs)];
      if (st.cwd === abs || st.cwd.startsWith(abs + '/')) st.cwd = lxPai(abs);
    }
    return { e: erros.join('\n'), cod: erros.length ? 1 : 0 };
  },
  cp: (st, args) => lxMover(st, args, 'cp'),
  mv: (st, args) => lxMover(st, args, 'mv'),
  head: (st, args, entrada) => lxPonta(st, args, entrada, 'head'),
  tail: (st, args, entrada) => lxPonta(st, args, entrada, 'tail'),
  wc: (st, args, entrada) => {
    const op = lxOpcoes(args);
    const { textos, erros } = lxEntrada(st, 'wc', op.a, entrada);
    const todos = !op.f.has('l') && !op.f.has('w') && !op.f.has('c');
    const linhas = textos.map(t => {
      const n = [];
      if (todos || op.f.has('l')) n.push(lxLinhas(t.c).length);
      if (todos || op.f.has('w')) n.push((t.c.match(/\S+/g) || []).length);
      if (todos || op.f.has('c')) n.push(new TextEncoder().encode(t.c).length);
      return n.join(' ') + (t.nome ? ' ' + t.nome : '');
    });
    return { o: linhas.join('\n'), e: erros.join('\n'), cod: erros.length ? 1 : 0 };
  },
  grep: (st, args, entrada) => {
    const op = lxOpcoes(args, ['e']);
    let padrao = op.v.e != null ? op.v.e : op.a.shift();
    if (padrao == null) return { e: 'Uso: grep [OPÇÃO]... PADRÕES [ARQUIVO]...', cod: 2 };
    let re;
    try { re = new RegExp(padrao, op.f.has('i') ? 'i' : ''); } catch (err) { re = new RegExp(padrao.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), op.f.has('i') ? 'i' : ''); }
    let arquivos = op.a, erros = [];
    if (op.f.has('r') || op.f.has('R')) {
      const lista = [];
      for (const raiz of (arquivos.length ? arquivos : ['.'])) {
        lxAndar(st, lxCaminho(st, raiz), (rel, no, abs, erro) => {
          if (erro) erros.push(`grep: ${rel}: ${erro}`);
          else if (no.tipo === 'f') lista.push(rel);
        }, raiz.replace(/\/$/, ''));
      }
      arquivos = lista;
    }
    const ent = lxEntrada(st, 'grep', arquivos, entrada);
    erros = erros.concat(ent.erros);
    const varios = ent.textos.length > 1 || op.f.has('r') || op.f.has('R');
    const out = []; let achou = false;
    for (const t of ent.textos) {
      const ls = lxLinhas(t.c); let cont = 0;
      ls.forEach((l, i) => {
        if (re.test(l) === op.f.has('v')) return;
        cont++; achou = true;
        if (!op.f.has('c') && !op.f.has('l')) out.push((varios && t.nome ? t.nome + ':' : '') + (op.f.has('n') ? (i + 1) + ':' : '') + l);
      });
      if (op.f.has('c')) out.push((varios && t.nome ? t.nome + ':' : '') + cont);
      if (op.f.has('l') && cont) out.push(t.nome);
    }
    return { o: out.join('\n'), e: erros.join('\n'), cod: erros.length ? 2 : achou ? 0 : 1 };
  },
  find: (st, args) => {
    let inicio = '.', i = 0;
    if (args[0] && !args[0].startsWith('-')) { inicio = args[0]; i = 1; }
    const testes = [];
    for (; i < args.length; i++) {
      const a = args[i], v = args[i + 1];
      if (a === '-name' || a === '-iname') { const re = new RegExp('^' + String(v).replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*').replace(/\?/g, '.') + '$', a === '-iname' ? 'i' : ''); testes.push((rel, no, abs) => re.test(lxNome(abs) || '/')); i++; }
      else if (a === '-type') { testes.push((rel, no) => no.tipo === v); i++; }
      else if (a === '-user') { testes.push((rel, no) => no.dono === v); i++; }
      else if (a === '-perm') { const m = parseInt(String(v).replace(/^[-/]/, ''), 8); const pelo = /^[-/]/.test(v); testes.push((rel, no) => pelo ? (no.modo & m) === m : no.modo === m); i++; }
      else return { e: `find: predicado desconhecido '${a}'`, cod: 1 };
    }
    const abs = lxCaminho(st, inicio);
    const r = lxAchar(st, abs);
    if (r.erro) return { e: `find: '${inicio}': ${r.erro}`, cod: 1 };
    const out = [], erros = [];
    lxAndar(st, abs, (rel, no, a, erro) => {
      if (erro) { erros.push(`find: '${rel}': ${erro}`); return; }
      if (testes.every(t => t(rel, no, a))) out.push(rel);
    }, inicio.replace(/\/$/, '') || '/');
    return { o: out.join('\n'), e: erros.join('\n'), cod: erros.length ? 1 : 0 };
  },
  sort: (st, args, entrada) => {
    const op = lxOpcoes(args);
    const { textos, erros } = lxEntrada(st, 'sort', op.a, entrada);
    let ls = textos.flatMap(t => lxLinhas(t.c));
    ls.sort(op.f.has('n') ? (a, b) => parseFloat(a) - parseFloat(b) : (a, b) => a.localeCompare(b));
    if (op.f.has('r')) ls.reverse();
    if (op.f.has('u')) ls = ls.filter((l, i) => i === 0 || l !== ls[i - 1]);
    return { o: ls.join('\n'), e: erros.join('\n') };
  },
  uniq: (st, args, entrada) => {
    const op = lxOpcoes(args);
    const { textos, erros } = lxEntrada(st, 'uniq', op.a, entrada);
    const ls = textos.flatMap(t => lxLinhas(t.c)), out = [];
    for (const l of ls) { const u = out[out.length - 1]; if (u && u.l === l) u.n++; else out.push({ l, n: 1 }); }
    const sel = op.f.has('u') ? out.filter(x => x.n === 1) : op.f.has('d') ? out.filter(x => x.n > 1) : out;
    return { o: sel.map(x => op.f.has('c') ? `${String(x.n).padStart(7)} ${x.l}` : x.l).join('\n'), e: erros.join('\n') };
  },
  cut: (st, args, entrada) => {
    const op = lxOpcoes(args, ['d', 'f']);
    if (!op.v.f) return { e: 'cut: você deve especificar uma lista de campos com -f', cod: 1 };
    const sep = op.v.d != null ? op.v.d : '\t';
    const campos = op.v.f.split(',').map(Number);
    const { textos, erros } = lxEntrada(st, 'cut', op.a, entrada);
    return { o: textos.flatMap(t => lxLinhas(t.c)).map(l => { const p = l.split(sep); return p.length === 1 ? l : campos.map(c => p[c - 1]).filter(x => x != null).join(sep); }).join('\n'), e: erros.join('\n') };
  },
  chmod: (st, args) => {
    const [modo, ...alvos] = args; const erros = [];
    if (!modo || !alvos.length) return { e: 'chmod: falta operando', cod: 1 };
    for (const a of alvos) {
      const r = lxAchar(st, lxCaminho(st, a));
      if (r.erro) { erros.push(`chmod: não foi possível acessar '${a}': ${r.erro}`); continue; }
      if (st.usuario !== 'root' && r.no.dono !== st.usuario) { erros.push(`chmod: alterando as permissões de '${a}': Operação não permitida`); continue; }
      if (!lxChmod(r.no, modo)) { erros.push(`chmod: modo inválido: '${modo}'`); break; }
    }
    return { e: erros.join('\n'), cod: erros.length ? 1 : 0 };
  },
  chown: (st, args) => {
    const [quem, ...alvos] = args; const erros = [];
    if (!quem || !alvos.length) return { e: 'chown: falta operando', cod: 1 };
    const [dono, grupo] = quem.split(':');
    if (!st.usuarios.includes(dono)) return { e: `chown: usuário inválido: '${quem}'`, cod: 1 };
    for (const a of alvos) {
      const r = lxAchar(st, lxCaminho(st, a));
      if (r.erro) { erros.push(`chown: não foi possível acessar '${a}': ${r.erro}`); continue; }
      if (st.usuario !== 'root') { erros.push(`chown: alterando o dono de '${a}': Operação não permitida`); continue; }
      r.no.dono = dono; if (grupo) r.no.grupo = grupo;
    }
    return { e: erros.join('\n'), cod: erros.length ? 1 : 0 };
  },
  sudo: (st, args, entrada) => {
    if (!args.length) return { e: 'uso: sudo comando', cod: 1 };
    if (st.usuario === 'root') return lxComando(st, args, entrada);
    if (!st.sudo) return { e: `[sudo] senha para ${st.usuario}:\n${st.usuario} não está no arquivo sudoers.`, cod: 1 };
    if (args[0] === 'su' || (args[0] === '-i')) { st.pilha.push(st.usuario); st.usuario = 'root'; return {}; }
    const antes = st.usuario; st.usuario = 'root';
    try { return lxComando(st, args, entrada); } finally { st.usuario = antes; }
  },
  su: (st) => {
    if (st.usuario === 'root') return {};
    return { e: 'su: Falha de autenticação. Para virar root com a sua própria senha, use sudo su (se você tiver permissão).', cod: 1 };
  },
  exit: st => { if (st.pilha.length) { st.usuario = st.pilha.pop(); return {}; } return { o: 'Este terminal fica aberto até o fim da missão.' }; },
  export: (st, args) => { for (const a of args) { const j = a.indexOf('='); if (j > 0) st.vars[a.slice(0, j)] = a.slice(j + 1); } return {}; },
  unset: (st, args) => { for (const a of args) delete st.vars[a]; return {}; },
  env: st => ({ o: Object.entries(st.vars).map(([k, v]) => `${k}=${v}`).join('\n') }),
  printenv: (st, args) => args.length ? { o: args.map(a => st.vars[a]).filter(v => v != null).join('\n') } : { o: Object.entries(st.vars).map(([k, v]) => `${k}=${v}`).join('\n') },
  ps: (st, args) => {
    const todos = args.some(a => /a|x|e/.test(a.replace(/^-/, '')));
    const lista = st.procs.filter(p => todos || p.usuario === st.usuario);
    return { o: ['USUARIO     PID  COMANDO', ...lista.map(p => `${p.usuario.padEnd(9)} ${String(p.pid).padStart(5)}  ${p.cmd}`)].join('\n') };
  },
  kill: (st, args) => {
    const pids = args.filter(a => /^\d+$/.test(a)).map(Number); const erros = [];
    if (!pids.length) return { e: 'kill: uso: kill PID', cod: 1 };
    for (const pid of pids) {
      const i = st.procs.findIndex(p => p.pid === pid);
      if (i < 0) { erros.push(`bash: kill: (${pid}) - Processo inexistente`); continue; }
      if (st.usuario !== 'root' && st.procs[i].usuario !== st.usuario) { erros.push(`bash: kill: (${pid}) - Operação não permitida`); continue; }
      st.procs.splice(i, 1);
    }
    return { e: erros.join('\n'), cod: erros.length ? 1 : 0 };
  },
  base64: (st, args, entrada) => {
    const op = lxOpcoes(args);
    const { textos, erros } = lxEntrada(st, 'base64', op.a, entrada);
    const txt = textos.map(t => t.c).join('');
    try {
      if (op.f.has('d')) {
        const bin = atob(txt.replace(/\s+/g, ''));
        return { o: new TextDecoder().decode(Uint8Array.from(bin, ch => ch.charCodeAt(0))).replace(/\n$/, ''), e: erros.join('\n') };
      }
      const bytes = new TextEncoder().encode(txt.endsWith('\n') || !op.a.length ? txt + (op.a.length ? '' : '\n') : txt);
      return { o: btoa(String.fromCharCode(...bytes)), e: erros.join('\n') };
    } catch (err) { return { e: 'base64: entrada inválida', cod: 1 }; }
  },
  bash: (st, args) => args.length ? lxScript(st, args[0], args.slice(1), false) : { o: 'Este terminal já é o bash.' },
  sh: (st, args) => args.length ? lxScript(st, args[0], args.slice(1), false) : { o: 'Este terminal já é o bash.' }
};

// cp e mv: origem(ns) e destino
function lxMover(st, args, cmd) {
  const op = lxOpcoes(args);
  if (op.a.length < 2) return { e: `${cmd}: falta o operando de destino`, cod: 1 };
  const destino = op.a.pop();
  const dAbs = lxCaminho(st, destino);
  const d = lxAchar(st, dAbs).no;
  const erros = [];
  if (op.a.length > 1 && (!d || d.tipo !== 'd')) return { e: `${cmd}: o destino '${destino}' não é um diretório`, cod: 1 };
  for (const o of op.a) {
    const oAbs = lxCaminho(st, o); const r = lxAchar(st, oAbs);
    if (r.erro) { erros.push(`${cmd}: não foi possível obter estado de '${o}': ${r.erro}`); continue; }
    if (cmd === 'cp' && r.no.tipo === 'd' && !op.f.has('r') && !op.f.has('R')) { erros.push(`cp: -r não especificado; omitindo o diretório '${o}'`); continue; }
    if (cmd === 'cp' && !lxPode(st, r.no, 'r')) { erros.push(`cp: não foi possível abrir '${o}' para leitura: Permissão negada`); continue; }
    const final = d && d.tipo === 'd' ? (dAbs === '/' ? '' : dAbs) + '/' + lxNome(oAbs) : dAbs;
    if (final === oAbs || final.startsWith(oAbs + '/')) { erros.push(`${cmd}: não é possível mover ou copiar '${o}' para dentro dele mesmo`); continue; }
    const pai = lxAchar(st, lxPai(final));
    if (pai.erro || pai.no.tipo !== 'd') { erros.push(`${cmd}: não foi possível criar '${destino}': Arquivo ou diretório inexistente`); continue; }
    if (!lxPode(st, pai.no, 'w')) { erros.push(`${cmd}: não foi possível criar '${destino}': Permissão negada`); continue; }
    if (cmd === 'mv') {
      const paiOrig = lxAchar(st, lxPai(oAbs)).no;
      if (!lxPode(st, paiOrig, 'w')) { erros.push(`mv: não foi possível mover '${o}': Permissão negada`); continue; }
      delete paiOrig.filhos[lxNome(oAbs)];
      pai.no.filhos[lxNome(final)] = r.no;
    } else {
      const copia = lxCopiar(r.no);
      copia.dono = st.usuario; copia.grupo = st.usuario;
      pai.no.filhos[lxNome(final)] = copia;
    }
  }
  return { e: erros.join('\n'), cod: erros.length ? 1 : 0 };
}
// head e tail
function lxPonta(st, args, entrada, cmd) {
  const op = lxOpcoes(args, ['n']);
  const n = parseInt(op.v.n || '10', 10);
  const { textos, erros } = lxEntrada(st, cmd, op.a, entrada);
  const blocos = textos.map(t => {
    const ls = lxLinhas(t.c);
    const parte = cmd === 'head' ? ls.slice(0, n) : ls.slice(Math.max(0, ls.length - n));
    return (textos.length > 1 ? `==> ${t.nome} <==\n` : '') + parte.join('\n');
  });
  return { o: blocos.join('\n\n'), e: erros.join('\n'), cod: erros.length ? 1 : 0 };
}

/* ---------- conferir a missão ----------
   objetivo: um objeto (ou uma lista deles) com qualquer combinação de:
   pasta, existe, naoExiste, conteudo: { arquivo, igual | contem }, modo: { arquivo, modo }, dono: { arquivo, dono },
   executou (expressão regular de um comando digitado), resposta (o que a pessoa escreve na caixa), semProcesso (PID), usuario,
   variavel: { nome, valor } */
function lxConferir(st, objetivo, resposta) {
  const lista = [].concat(objetivo || []);
  const abs = p => lxCaminho(st, p, st.home);
  const no = p => { const raiz = st.usuario; st.usuario = 'root'; const r = lxAchar(st, abs(p)).no; st.usuario = raiz; return r; };
  for (const o of lista) {
    if (o.pasta != null && st.cwd !== abs(o.pasta)) return { ok: false, motivo: `Termine dentro da pasta ${o.pasta}.` };
    for (const p of [].concat(o.existe || [])) { const n = no(p); if (!n || (p.endsWith('/') && n.tipo !== 'd')) return { ok: false, motivo: `Falta ${p}.` }; }
    for (const p of [].concat(o.naoExiste || [])) if (no(p)) return { ok: false, motivo: `${p} ainda existe.` };
    for (const c of [].concat(o.conteudo || [])) {
      const n = no(c.arquivo);
      if (!n || n.tipo !== 'f') return { ok: false, motivo: `Falta o arquivo ${c.arquivo}.` };
      const t = n.c.replace(/\n+$/, '');
      if (c.igual != null && t !== String(c.igual).replace(/\n+$/, '')) return { ok: false, motivo: `O conteúdo de ${c.arquivo} não é o pedido.` };
      if (c.contem != null && !t.includes(c.contem)) return { ok: false, motivo: `${c.arquivo} não tem "${c.contem}".` };
    }
    for (const m of [].concat(o.modo || [])) { const n = no(m.arquivo); if (!n || (n.modo & 0o777) !== lxModo(m.modo)) return { ok: false, motivo: `As permissões de ${m.arquivo} não são ${m.modo}.` }; }
    for (const d of [].concat(o.dono || [])) { const n = no(d.arquivo); if (!n || n.dono !== d.dono) return { ok: false, motivo: `O dono de ${d.arquivo} não é ${d.dono}.` }; }
    if (o.executou != null && !st.hist.slice(st.histInicial).some(h => new RegExp(o.executou).test(h))) return { ok: false, motivo: 'Falta rodar o comando pedido.' };
    for (const v of [].concat(o.variavel || [])) if (st.vars[v.nome] !== v.valor) return { ok: false, motivo: `A variável ${v.nome} não está com o valor ${v.valor}.` };
    if (o.semProcesso != null && st.procs.some(p => p.pid === o.semProcesso)) return { ok: false, motivo: `O processo ${o.semProcesso} ainda está rodando.` };
    if (o.usuario != null && st.usuario !== o.usuario) return { ok: false, motivo: `Termine como o usuário ${o.usuario}.` };
    if (o.resposta != null && ![].concat(o.resposta).some(r => String(r).trim() === String(resposta || '').trim())) return { ok: false, motivo: 'A resposta não é essa.' };
  }
  return { ok: true };
}
// a missão pede uma resposta escrita?
const lxPedeResposta = objetivo => [].concat(objetivo || []).some(o => o.resposta != null);

if (typeof module !== 'undefined' && module.exports) module.exports = { lxCriar, lxRodar, lxConferir, lxPrompt, lxPedeResposta };
