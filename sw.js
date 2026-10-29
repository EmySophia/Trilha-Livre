/* Trilha Livre · service worker
   Guarda o app no aparelho para funcionar sem internet.
   Estratégia: tenta a rede primeiro (assim o conteúdo novo chega sozinho) e,
   se a rede falhar ou demorar mais de 3 segundos, usa a cópia guardada.
   SPDX-License-Identifier: AGPL-3.0-or-later · Copyright (C) 2026 Contribuidores do Trilha Livre */

const CACHE = 'trilha-livre-v11';
const FONTES = 'trilha-livre-fontes';
const PYTHON = 'trilha-livre-python'; // o Pyodide, baixado na primeira vez que alguém roda Python
const AUDIO = 'trilha-livre-audio'; // as falas dos cursos de idiomas: o nome muda quando a frase muda, então a cópia vale para sempre
const ARQUIVOS = [
  './', 'index.html', 'manifest.webmanifest', 'css/estilo.css',
  'conteudo/_registro.js', 'conteudo/catalogo.js', 'conteudo/biblioteca.js',
  'conteudo/logica-js/nivel-1.js', 'conteudo/logica-js/nivel-2.js', 'conteudo/logica-js/nivel-3.js', 'conteudo/logica-js/nivel-4.js',
  'conteudo/logica-js/nivel-5.js', 'conteudo/logica-js/nivel-6.js', 'conteudo/logica-js/nivel-7.js', 'conteudo/logica-js/pratica.js',
  'conteudo/html-css/nivel-1.js', 'conteudo/html-css/nivel-2.js', 'conteudo/html-css/nivel-3.js', 'conteudo/html-css/nivel-4.js', 'conteudo/html-css/nivel-5.js', 'conteudo/html-css/nivel-6.js', 'conteudo/html-css/nivel-7.js', 'conteudo/html-css/nivel-8.js', 'conteudo/html-css/pratica.js',
  'conteudo/python/nivel-1.js', 'conteudo/python/nivel-2.js', 'conteudo/python/nivel-3.js', 'conteudo/python/nivel-4.js', 'conteudo/python/nivel-5.js', 'conteudo/python/nivel-6.js', 'conteudo/python/nivel-7.js', 'conteudo/python/nivel-8.js', 'conteudo/python/nivel-9.js', 'conteudo/python/nivel-10.js', 'conteudo/python/nivel-11.js', 'conteudo/python/pratica.js',
  'conteudo/git/nivel-1.js', 'conteudo/git/nivel-2.js', 'conteudo/git/nivel-3.js', 'conteudo/git/nivel-4.js', 'conteudo/git/nivel-5.js', 'conteudo/git/nivel-6.js',
  'conteudo/mat-basica/nivel-1.js', 'conteudo/mat-basica/nivel-2.js', 'conteudo/mat-basica/nivel-3.js', 'conteudo/mat-basica/nivel-4.js', 'conteudo/mat-basica/nivel-5.js', 'conteudo/mat-basica/nivel-6.js', 'conteudo/mat-basica/nivel-7.js', 'conteudo/mat-basica/nivel-8.js', 'conteudo/mat-basica/nivel-9.js', 'conteudo/mat-basica/pratica.js',
  'conteudo/mat-medio/nivel-1.js', 'conteudo/mat-medio/nivel-2.js', 'conteudo/mat-medio/nivel-3.js', 'conteudo/mat-medio/nivel-4.js', 'conteudo/mat-medio/nivel-5.js', 'conteudo/mat-medio/nivel-6.js', 'conteudo/mat-medio/nivel-7.js', 'conteudo/mat-medio/nivel-8.js', 'conteudo/mat-medio/nivel-9.js', 'conteudo/mat-medio/nivel-10.js', 'conteudo/mat-medio/pratica.js',
  'conteudo/ingles/nivel-1.js', 'conteudo/ingles/nivel-2.js', 'conteudo/ingles/nivel-3.js', 'conteudo/ingles/nivel-4.js', 'conteudo/ingles/nivel-5.js', 'conteudo/ingles/nivel-6.js', 'conteudo/ingles/nivel-7.js', 'conteudo/ingles/nivel-8.js', 'conteudo/ingles/nivel-9.js', 'conteudo/ingles/nivel-10.js', 'conteudo/ingles/pratica.js',
  'conteudo/marxismo/nivel-1.js', 'conteudo/marxismo/nivel-2.js', 'conteudo/marxismo/nivel-3.js', 'conteudo/marxismo/nivel-4.js', 'conteudo/marxismo/nivel-5.js', 'conteudo/marxismo/nivel-6.js', 'conteudo/marxismo/nivel-7.js', 'conteudo/o-capital/nivel-1.js', 'conteudo/o-capital/nivel-2.js', 'conteudo/o-capital/nivel-3.js', 'conteudo/o-capital/nivel-4.js', 'conteudo/o-capital/nivel-5.js', 'conteudo/o-capital/nivel-6.js', 'conteudo/o-capital/nivel-7.js',
  'conteudo/capital-guiado/nivel-1.js', 'conteudo/capital-guiado/nivel-2.js', 'conteudo/capital-guiado/nivel-3.js', 'conteudo/capital-guiado/nivel-4.js', 'conteudo/capital-guiado/nivel-5.js', 'conteudo/capital-guiado/nivel-6.js', 'conteudo/capital-guiado/nivel-7.js',
  // imagens usadas nos exercícios de HTML e CSS
  'imagens/biblioteca.jpg', 'imagens/computadores.jpg', 'imagens/feira.jpg', 'imagens/gato.jpg', 'imagens/horta.jpg', 'imagens/icone.png', 'imagens/livros.jpg', 'imagens/logo.png', 'imagens/mapa.png', 'imagens/pessoa.jpg', 'imagens/praia.jpg', 'imagens/quadra.jpg',
  'js/nucleo.js', 'js/efeitos.js', 'js/teclado.js', 'js/variaveis.js', 'js/numeros.js', 'js/fala.js', 'js/web.js', 'js/python.js', 'js/py-worker.js', 'js/terminal.js', 'js/pwa.js', 'js/app.js',
  'icones/icone-192.png', 'icones/icone-512.png', 'icones/icone-maskable-512.png', 'icones/apple-touch-icon.png', 'icones/favicon-32.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(nomes => Promise.all(nomes.filter(n => n !== CACHE && n !== FONTES && n !== AUDIO && !n.startsWith(PYTHON)).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

// responde só o pedaço pedido em "Range: bytes=início-fim", como um servidor faria
async function comFaixa(req, r) {
  const faixa = req.headers.get('range');
  if (!faixa) return r;
  const dados = await r.arrayBuffer(), total = dados.byteLength;
  const m = /bytes=(\d*)-(\d*)/.exec(faixa) || [];
  let ini = m[1] ? +m[1] : 0, fim = m[2] ? +m[2] : total - 1;
  if (!m[1] && m[2]) { ini = Math.max(0, total - +m[2]); fim = total - 1; }
  fim = Math.min(fim, total - 1);
  if (ini > fim) return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${total}` } });
  return new Response(dados.slice(ini, fim + 1), { status: 206, headers: {
    'Content-Type': r.headers.get('Content-Type') || 'audio/mpeg', 'Content-Range': `bytes ${ini}-${fim}/${total}`,
    'Content-Length': String(fim - ini + 1), 'Accept-Ranges': 'bytes' } });
}

function comPrazo(promessa, ms) {
  return new Promise((ok, falha) => {
    const t = setTimeout(() => falha(new Error('demorou')), ms);
    promessa.then(r => { clearTimeout(t); ok(r); }, err => { clearTimeout(t); falha(err); });
  });
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // fontes do Google: guarda na primeira vez e depois usa a cópia
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open(FONTES).then(async c => {
      const salvo = await c.match(req);
      if (salvo) return salvo;
      const r = await fetch(req);
      if (r.ok || r.type === 'opaque') c.put(req, r.clone());
      return r;
    }));
    return;
  }
  // Python (Pyodide): os arquivos têm a versão no endereço e não mudam, então a cópia guardada vale para sempre
  if (url.hostname === 'cdn.jsdelivr.net' && (url.pathname.startsWith('/npm/pyodide@') || url.pathname.startsWith('/pyodide/v'))) {
    e.respondWith(caches.open(PYTHON).then(async c => {
      const salvo = await c.match(req);
      if (salvo) return salvo;
      const r = await fetch(req);
      if (r.ok) c.put(req, r.clone());
      return r;
    }));
    return;
  }
  if (url.origin !== self.location.origin) return;

  // falas dos cursos de idiomas: cópia guardada primeiro. O Safari pede o áudio em pedaços (Range), então
  // o arquivo é baixado inteiro uma vez e o pedaço pedido é cortado da cópia.
  if (/\/audio\/.+\.mp3$/.test(url.pathname)) {
    e.respondWith((async () => {
      const c = await caches.open(AUDIO);
      const chave = url.origin + url.pathname;
      let r = await c.match(chave);
      if (!r) {
        r = await fetch(chave);
        if (!r.ok) return r;
        await c.put(chave, r.clone());
      }
      return comFaixa(req, r);
    })());
    return;
  }

  // arquivos do app: rede primeiro, cópia guardada se não der
  e.respondWith((async () => {
    const c = await caches.open(CACHE);
    const rede = fetch(req).then(r => { if (r.ok) c.put(req, r.clone()); return r; });
    try {
      return await comPrazo(rede, 3000);
    } catch (err) {
      const salvo = await c.match(req, { ignoreSearch: true }) || (req.mode === 'navigate' ? await c.match('index.html') : null);
      if (salvo) return salvo;
      return rede; // sem cópia: espera a rede mesmo
    }
  })());
});
