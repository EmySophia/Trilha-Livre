/* Trilha Livre · service worker
   Guarda o app no aparelho para funcionar sem internet.
   Estratégia: tenta a rede primeiro (assim o conteúdo novo chega sozinho) e,
   se a rede falhar ou demorar mais de 3 segundos, usa a cópia guardada.
   SPDX-License-Identifier: AGPL-3.0-or-later · Copyright (C) 2026 Contribuidores do Trilha Livre */

const CACHE = 'trilha-livre-v9';
const FONTES = 'trilha-livre-fontes';
const PYTHON = 'trilha-livre-python'; // o Pyodide, baixado na primeira vez que alguém roda Python
const ARQUIVOS = [
  './', 'index.html', 'manifest.webmanifest', 'css/estilo.css',
  'conteudo/_registro.js', 'conteudo/catalogo.js', 'conteudo/biblioteca.js',
  'conteudo/logica-js/nivel-1.js', 'conteudo/logica-js/nivel-2.js', 'conteudo/logica-js/nivel-3.js', 'conteudo/logica-js/nivel-4.js',
  'conteudo/logica-js/nivel-5.js', 'conteudo/logica-js/nivel-6.js', 'conteudo/logica-js/nivel-7.js', 'conteudo/logica-js/pratica.js',
  'conteudo/html-css/nivel-1.js', 'conteudo/html-css/nivel-2.js', 'conteudo/html-css/nivel-3.js', 'conteudo/html-css/nivel-4.js', 'conteudo/html-css/nivel-5.js', 'conteudo/html-css/nivel-6.js', 'conteudo/html-css/nivel-7.js', 'conteudo/html-css/nivel-8.js', 'conteudo/html-css/pratica.js',
  'conteudo/python/nivel-1.js', 'conteudo/python/nivel-2.js', 'conteudo/python/nivel-3.js', 'conteudo/python/nivel-4.js', 'conteudo/python/nivel-5.js', 'conteudo/python/nivel-6.js', 'conteudo/python/nivel-7.js', 'conteudo/python/nivel-8.js', 'conteudo/python/nivel-9.js', 'conteudo/python/nivel-10.js', 'conteudo/python/nivel-11.js', 'conteudo/python/pratica.js',
  'conteudo/git/nivel-1.js', 'conteudo/git/nivel-2.js', 'conteudo/git/nivel-3.js', 'conteudo/git/nivel-4.js', 'conteudo/git/nivel-5.js', 'conteudo/git/nivel-6.js',
  'conteudo/mat-basica/nivel-1.js', 'conteudo/mat-basica/nivel-2.js', 'conteudo/mat-basica/nivel-3.js', 'conteudo/mat-basica/nivel-4.js', 'conteudo/mat-basica/nivel-5.js', 'conteudo/mat-basica/nivel-6.js', 'conteudo/mat-basica/nivel-7.js', 'conteudo/mat-basica/nivel-8.js', 'conteudo/mat-basica/nivel-9.js', 'conteudo/mat-basica/pratica.js',
  'conteudo/marxismo/nivel-1.js', 'conteudo/marxismo/nivel-2.js', 'conteudo/marxismo/nivel-3.js', 'conteudo/marxismo/nivel-4.js', 'conteudo/marxismo/nivel-5.js', 'conteudo/marxismo/nivel-6.js', 'conteudo/marxismo/nivel-7.js', 'conteudo/o-capital/nivel-1.js', 'conteudo/o-capital/nivel-2.js', 'conteudo/o-capital/nivel-3.js', 'conteudo/o-capital/nivel-4.js', 'conteudo/o-capital/nivel-5.js', 'conteudo/o-capital/nivel-6.js', 'conteudo/o-capital/nivel-7.js',
  'conteudo/capital-guiado/nivel-1.js', 'conteudo/capital-guiado/nivel-2.js', 'conteudo/capital-guiado/nivel-3.js', 'conteudo/capital-guiado/nivel-4.js', 'conteudo/capital-guiado/nivel-5.js', 'conteudo/capital-guiado/nivel-6.js', 'conteudo/capital-guiado/nivel-7.js',
  // imagens usadas nos exercícios de HTML e CSS
  'imagens/biblioteca.jpg', 'imagens/computadores.jpg', 'imagens/feira.jpg', 'imagens/gato.jpg', 'imagens/horta.jpg', 'imagens/icone.png', 'imagens/livros.jpg', 'imagens/logo.png', 'imagens/mapa.png', 'imagens/pessoa.jpg', 'imagens/praia.jpg', 'imagens/quadra.jpg',
  'js/nucleo.js', 'js/efeitos.js', 'js/teclado.js', 'js/variaveis.js', 'js/numeros.js', 'js/web.js', 'js/python.js', 'js/py-worker.js', 'js/terminal.js', 'js/pwa.js', 'js/app.js',
  'icones/icone-192.png', 'icones/icone-512.png', 'icones/icone-maskable-512.png', 'icones/apple-touch-icon.png', 'icones/favicon-32.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(nomes => Promise.all(nomes.filter(n => n !== CACHE && n !== FONTES && !n.startsWith(PYTHON)).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

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
