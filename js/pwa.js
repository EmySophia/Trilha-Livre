/* Trilha Livre · app instalável e offline
   Registra o service worker (sw.js) quando o site está publicado (HTTPS, fora de iframes)
   e guarda o convite de instalação que o navegador oferece.
   SPDX-License-Identifier: AGPL-3.0-or-later · Copyright (C) 2026 Contribuidores do Trilha Livre */

const PWA = {
  convite: null,
  instalado: matchMedia('(display-mode: standalone)').matches || navigator.standalone === true,
  ios: /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1),
  offline: false
};

(function registrar() {
  let topo = true;
  try { topo = window.top === window.self; } catch (e) { topo = false; }
  const seguro = location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  if (!topo || !seguro || !('serviceWorker' in navigator)) return;
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').then(() => { PWA.offline = true; }).catch(() => {});
  });
})();

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  PWA.convite = e;
  if (typeof aoMudarInstalacao === 'function') aoMudarInstalacao();
});
window.addEventListener('appinstalled', () => {
  PWA.instalado = true; PWA.convite = null;
  if (typeof aoMudarInstalacao === 'function') aoMudarInstalacao();
});

async function instalarApp() {
  if (!PWA.convite) return false;
  PWA.convite.prompt();
  const r = await PWA.convite.userChoice.catch(() => null);
  PWA.convite = null;
  return !!(r && r.outcome === 'accepted');
}
