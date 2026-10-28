/* Trilha Livre · efeitos
   Sons sintetizados (sem arquivos de áudio), confete, ajustes de exibição e avisos para leitores de tela.
   SPDX-License-Identifier: AGPL-3.0-or-later · Copyright (C) 2026 Contribuidores do Trilha Livre */

const AJUSTES_PADRAO = { som: true, anim: true, zoom: 1 };
function ajustes() { return Object.assign({}, AJUSTES_PADRAO, S.ajustes || {}); }

const semMovimento = () => !ajustes().anim || matchMedia('(prefers-reduced-motion: reduce)').matches;

// aplica tamanho do texto e animações na página
function aplicarAjustes() {
  const a = ajustes();
  document.documentElement.style.setProperty('--zoom', a.zoom);
  document.documentElement.classList.toggle('sem-anim', semMovimento());
}

/* ---------- sons ---------- */
let audio = null;
function tocar(notas) {
  if (!ajustes().som) return;
  try {
    audio = audio || new (window.AudioContext || window.webkitAudioContext)();
    if (audio.state === 'suspended') audio.resume();
    const t0 = audio.currentTime + 0.01;
    for (const n of notas) {
      const osc = audio.createOscillator(), gan = audio.createGain();
      osc.type = n.tipo || 'sine';
      osc.frequency.setValueAtTime(n.f, t0 + n.t);
      if (n.ate) osc.frequency.exponentialRampToValueAtTime(n.ate, t0 + n.t + n.d);
      gan.gain.setValueAtTime(0.0001, t0 + n.t);
      gan.gain.exponentialRampToValueAtTime(n.v || 0.09, t0 + n.t + 0.015);
      gan.gain.exponentialRampToValueAtTime(0.0001, t0 + n.t + n.d);
      osc.connect(gan).connect(audio.destination);
      osc.start(t0 + n.t);
      osc.stop(t0 + n.t + n.d + 0.02);
    }
  } catch (e) { /* sem áudio neste navegador: segue em silêncio */ }
}
const SONS = {
  acerto: [{ f: 659, t: 0, d: 0.11 }, { f: 988, t: 0.09, d: 0.16 }],
  erro: [{ f: 260, ate: 170, t: 0, d: 0.22, tipo: 'triangle', v: 0.1 }],
  fim: [{ f: 523, t: 0, d: 0.12 }, { f: 659, t: 0.1, d: 0.12 }, { f: 784, t: 0.2, d: 0.12 }, { f: 1047, t: 0.3, d: 0.3 }],
  conquista: [{ f: 1175, t: 0, d: 0.08, v: 0.06 }, { f: 1568, t: 0.07, d: 0.08, v: 0.06 }, { f: 2093, t: 0.14, d: 0.2, v: 0.05 }],
  toque: [{ f: 880, t: 0, d: 0.04, v: 0.04 }]
};
const som = nome => tocar(SONS[nome] || []);

/* ---------- confete ---------- */
function confete() {
  if (semMovimento()) return;
  const cv = document.createElement('canvas');
  cv.className = 'confete';
  cv.setAttribute('aria-hidden', 'true');
  document.body.appendChild(cv);
  const ctx = cv.getContext('2d');
  if (!ctx) { cv.remove(); return; }
  const dpr = window.devicePixelRatio || 1;
  const W = cv.width = innerWidth * dpr, H = cv.height = innerHeight * dpr;
  const css = getComputedStyle(document.documentElement);
  const cores = ['--sun', '--accent', '--bad', '--t-f', '--ok'].map(v => css.getPropertyValue(v).trim() || '#F4B400');
  const pedacos = Array.from({ length: 90 }, () => ({
    x: W / 2 + (Math.random() - 0.5) * W * 0.3, y: H * 0.35,
    vx: (Math.random() - 0.5) * 14 * dpr, vy: (-6 - Math.random() * 10) * dpr,
    r: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.3,
    w: (6 + Math.random() * 6) * dpr, h: (8 + Math.random() * 8) * dpr, c: pick(cores)
  }));
  const ini = performance.now();
  (function quadro(agora) {
    const t = agora - ini;
    ctx.clearRect(0, 0, W, H);
    for (const p of pedacos) {
      p.vy += 0.35 * dpr; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.r += p.vr;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r);
      ctx.globalAlpha = Math.max(0, 1 - t / 1800);
      ctx.fillStyle = p.c; ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }
    if (t < 1800) requestAnimationFrame(quadro); else cv.remove();
  })(ini);
}

/* ---------- leitores de tela ---------- */
function anunciar(texto) {
  const a = $('anuncio');
  if (!a) return;
  a.textContent = '';
  setTimeout(() => { a.textContent = texto; }, 60);
}
