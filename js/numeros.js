/* Trilha Livre · respostas numéricas e fórmulas
   lerNumero: entende o que a pessoa digitou ("3,5", "1.250,75", "-2", "3/4", "R$ 12") e devolve o número.
   respostaNumericaOk: confere a resposta de um exercício "numero", com margem de erro.
   formula: desenha uma fórmula escrita entre $$ e $$ nos textos, com frações empilhadas, potências e raízes.
   planoSVG: desenha gráficos de funções e figuras geométricas (o bloco plano das leituras e dos exercícios).
   Este arquivo também é usado pelo validador (Node), por isso não usa nada da página.
   SPDX-License-Identifier: AGPL-3.0-or-later · Copyright (C) 2026 Contribuidores do Trilha Livre */

// "1.250,75" e "1250.75" valem o mesmo; "3/4" é uma fração; o resto (R$, %, unidades, espaços) é ignorado
function lerFracao(txt) {
  const s = String(txt == null ? '' : txt).trim().replace(/[−–—]/g, '-');
  const m = /^(-?)\s*(\d+)\s*\/\s*(\d+)$/.exec(s.replace(/[^\d/-]/g, ''));
  if (!m || !s.includes('/')) return null;
  return { neg: m[1] === '-', num: +m[2], den: +m[3] };
}
function lerNumero(txt) {
  let s = String(txt == null ? '' : txt).trim().replace(/[−–—]/g, '-');
  const f = lerFracao(s);
  if (f) return f.den === 0 ? null : (f.neg ? -1 : 1) * f.num / f.den;
  if (/^-?\d+(\.\d+)?e[-+]?\d+$/i.test(s)) return parseFloat(s); // 1e-7, como o JavaScript escreve números muito pequenos
  s = s.replace(/[^\d,.\-]/g, '');
  if (!/\d/.test(s)) return null;
  const neg = s.startsWith('-');
  s = s.replace(/-/g, '');
  if (s.includes(',')) s = s.replace(/\./g, '').replace(',', '.'); // vírgula é a casa decimal; pontos separam milhares
  else if ((s.match(/\./g) || []).length > 1) s = s.replace(/\./g, ''); // 1.250.000
  if (!/^\d*\.?\d+$|^\d+\.$/.test(s)) return null;
  const n = parseFloat(s);
  return isNaN(n) ? null : (neg ? -n : n);
}
const mdc = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };

// ex.r: a resposta (número, ou texto como "3/4" ou "12,5"); ex.casas: arredondada com tantas casas;
// ex.tol: margem de erro; ex.fracao: a resposta tem de ser uma fração irredutível (ou um inteiro)
function respostaNumericaOk(digitado, ex) {
  const certa = lerNumero(ex.r);
  if (certa == null) return false;
  if (ex.fracao) {
    const f = lerFracao(digitado);
    if (!f) { const n = lerNumero(digitado); return n != null && Number.isInteger(certa) && n === certa && !/[.,]/.test(digitado); }
    if (f.den === 0 || mdc(f.num, f.den) !== 1 || f.den === 1) return false;
    return Math.abs((f.neg ? -1 : 1) * f.num / f.den - certa) < 1e-9;
  }
  const n = lerNumero(digitado);
  if (n == null) return false;
  const tol = ex.tol != null ? +ex.tol : ex.casas != null ? 0.5 * Math.pow(10, -ex.casas) + 1e-9 : 1e-9 * Math.max(1, Math.abs(certa));
  // "1.250" pode ser 1,25 ou mil duzentos e cinquenta: vale a leitura que bater
  const limpo = String(digitado).replace(/[^\d.,\-\u2212]/g, '');
  const milhar = /^[-\u2212]?\d{1,3}\.\d{3}$/.test(limpo) ? lerNumero(limpo.replace('.', '')) : null;
  return Math.abs(n - certa) <= tol || (milhar != null && Math.abs(milhar - certa) <= tol);
}
// a resposta certa, escrita do jeito brasileiro: 1.250,5
function respostaNumericaTexto(ex) {
  if (ex.fracao || lerFracao(ex.r)) return String(ex.r).trim();
  const n = lerNumero(ex.r);
  if (n == null) return String(ex.r);
  const casas = ex.casas != null ? { minimumFractionDigits: ex.casas, maximumFractionDigits: ex.casas } : { maximumFractionDigits: 6 };
  return n.toLocaleString('pt-BR', casas);
}

/* ---------- fórmulas ----------
   Entre $$ e $$: 3/4 vira uma fração empilhada, x^2 e x^(n+1) são potências, v_0 e H_2O usam índice,
   sqrt(2) ou √(2) é a raiz, * vira ·, <= vira ≤, >= vira ≥, != vira ≠ e ~= vira ≈.
   Os parênteses em volta do numerador, do denominador e do expoente somem: (a+b)/2. Para dividir sem empilhar, use ÷. */
const FX_OPS = { '+': '+', '-': '−', '*': '·', '=': '=', '<': '&lt;', '>': '&gt;', '<=': '≤', '>=': '≥', '!=': '≠', '~=': '≈', '·': '·', '×': '×', '÷': '÷', '≤': '≤', '≥': '≥', '≠': '≠', '≈': '≈', '±': '±', '→': '→' };
function formula(src) {
  const des = String(src).replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
  const toks = des.match(/\s+|\d+(?:[.,]\d+)?|sqrt|√|<=|>=|!=|~=|[A-Za-zÀ-ÖØ-öø-ÿΑ-ω]+|./gu) || [];
  let i = 0;
  const pula = () => { while (i < toks.length && /^\s+$/.test(toks[i])) i++; };
  const ve = () => { pula(); return toks[i]; };
  const escH = t => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  let anterior = null; // para saber se o menos é de sinal (−3) ou de conta (5 − 3)
  function atomo() {
    const t = ve();
    if (t == null) return { h: '', s: '' };
    i++;
    if (t === '(') {
      anterior = 'op';
      const dentro = sequencia(')');
      if (ve() === ')') i++;
      anterior = 'atomo';
      return { h: `(${dentro})`, s: dentro };
    }
    if (t === 'sqrt' || t === '√') {
      const a = atomo();
      anterior = 'atomo';
      return { h: `<span class="fx-raiz">√<span class="fx-rad">${a.s}</span></span>`, s: null };
    }
    if (FX_OPS[t] != null && !(t === '-' && anterior !== 'atomo')) { anterior = 'op'; return { h: `<span class="fx-op">${FX_OPS[t]}</span>`, s: null, op: true }; }
    anterior = 'atomo';
    if (t === '-') { const a = atomo(); return { h: '−' + a.h, s: '−' + a.h }; }
    if (/^\d/.test(t)) return { h: t, s: t };
    if (/^[A-Za-zÀ-ÖØ-öø-ÿΑ-ω]$/u.test(t)) return { h: `<i>${t}</i>`, s: `<i>${t}</i>` };
    return { h: escH(t), s: escH(t) };
  }
  function potencia() {
    let a = atomo();
    if (a.op) return a;
    while (ve() === '^' || ve() === '_') {
      const marca = toks[i] === '^' ? 'sup' : 'sub'; i++;
      const e = atomo();
      const h = `${a.h}<${marca}>${e.s != null ? e.s : e.h}</${marca}>`;
      a = { h, s: h };
      anterior = 'atomo';
    }
    return a;
  }
  function fracao() {
    let a = potencia();
    if (a.op) return a.h;
    while (ve() === '/') {
      i++;
      anterior = 'op';
      const b = potencia();
      const h = `<span class="fx-fr"><span class="fx-num">${a.s != null ? a.s : a.h}</span><span class="sr"> sobre </span><span class="fx-den">${b.s != null ? b.s : b.h}</span></span>`;
      a = { h, s: h };
    }
    return a.h;
  }
  function sequencia(fim) {
    let h = '';
    while (ve() != null && ve() !== fim) h += fracao();
    return h;
  }
  return `<span class="fx">${sequencia(null)}</span>`;
}
// texto com fórmulas, sem marcação: para leitores de tela e avisos
const semFormula = s => String(s).replace(/\$\$/g, '').replace(/`/g, '');

/* ---------- gráficos e figuras ----------
   plano: { x: [-5, 5], y: [-5, 5],             intervalo de cada eixo
            eixos: false,                        sem eixos nem grade, com a mesma escala nos dois sentidos (figuras geométricas)
            f: ['2*x + 1', { e: 'x^2', nome: 'g' }],   funções em JavaScript (^ ou ** é potência; sqrt, sin, log... já valem)
            pontos: [[1, 3, 'A']],
            segmentos: [{ de: [0, 0], ate: [4, 3], rotulo: '5', tracejado: true }],
            poligonos: [{ pts: [[0, 0], [4, 0], [4, 3]], lados: ['4', '3', 'x'], vertices: ['A', 'B', 'C'], reto: 1 }],
            alt: 'descrição para quem usa leitor de tela' } */
let PLANO_ID = 0;
function compilarFuncao(e) {
  // ^ também vale como potência, e −x**2 vira −(x**2), como na matemática (o JavaScript recusa −x**2)
  const js = String(e).replace(/\^/g, '**').replace(/(^|[^\w)\].])-\s*([\w.]+|\((?:[^()]|\([^()]*\))*\))\s*\*\*\s*([\w.]+|\((?:[^()]|\([^()]*\))*\))/g, '$1-($2**$3)');
  return new Function('x', 'const { sqrt, cbrt, sin, cos, tan, abs, log, log10, log2, exp, PI, E, pow, floor, ceil, round, min, max } = Math; return (' + js + ');');
}
function passoBonito(faixa) {
  for (const p of [0.1, 0.2, 0.25, 0.5, 1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 5000, 10000]) if (faixa / p <= 10) return p;
  return Math.pow(10, Math.ceil(Math.log10(faixa / 10)));
}
function planoSVG(pl) {
  const id = ++PLANO_ID, W = 320, H = 240, M = 24;
  const num = v => Number(v);
  const [x0, x1] = (pl.x || [-5, 5]).map(num), [y0, y1] = (pl.y || [-5, 5]).map(num);
  const eixos = pl.eixos !== false;
  let sx = (W - 2 * M) / (x1 - x0), sy = (H - 2 * M) / (y1 - y0), ox = M, oy = M;
  if (!eixos) { // figura: mesma escala nos dois sentidos, centralizada, com espaço dos lados para os rótulos que saem para fora
    let me = M, md = M;
    for (const pg of pl.poligonos || []) {
      const P = (pg.pts || []).map(p => [num(p[0]), num(p[1])]);
      if (P.length < 2) continue;
      const cx = P.reduce((a, p) => a + p[0], 0) / P.length, cy = P.reduce((a, p) => a + p[1], 0) / P.length;
      const reserva = (t, x, nx) => {
        if (!t || Math.abs(nx) < 0.4) return;
        const w = Math.min(110, String(t).length * 7.6 + 14);
        if (nx > 0 && x > x1 - (x1 - x0) / 4) md = Math.max(md, w);
        if (nx < 0 && x < x0 + (x1 - x0) / 4) me = Math.max(me, w);
      };
      (pg.lados || []).forEach((t, i) => {
        const a = P[i], b = P[(i + 1) % P.length], mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
        let nx = b[1] - a[1], ny = a[0] - b[0]; const n = Math.hypot(nx, ny) || 1; nx /= n; ny /= n;
        if (nx * (mx - cx) + ny * (my - cy) < 0) nx = -nx;
        reserva(t, mx, nx);
      });
      (pg.vertices || []).forEach((t, i) => { const p = P[i]; if (p) reserva(t, p[0], (p[0] - cx) / (Math.hypot(p[0] - cx, p[1] - cy) || 1)); });
    }
    const larg = W - me - md, s = Math.min(larg / (x1 - x0), sy);
    ox = me + (larg - s * (x1 - x0)) / 2; oy = (H - s * (y1 - y0)) / 2; sx = sy = s;
  }
  const X = x => ox + (x - x0) * sx, Y = y => H - oy - (y - y0) * sy;
  const f2 = v => Math.round(v * 10) / 10;
  const escT = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const fmt = v => String(Math.round(v * 1000) / 1000).replace('.', ',').replace('-', '−');
  let s = `<svg class="plano" viewBox="0 0 ${W} ${H}" role="img" aria-label="${escT(pl.alt || (eixos ? 'Gráfico no plano cartesiano' : 'Figura'))}">`;
  s += `<defs><clipPath id="pl${id}"><rect x="${f2(X(x0))}" y="${f2(Y(y1))}" width="${f2(X(x1) - X(x0))}" height="${f2(Y(y0) - Y(y1))}"/></clipPath></defs>`;
  if (eixos) {
    const px = passoBonito(x1 - x0), py = passoBonito(y1 - y0);
    const ax = Math.min(Math.max(0, y0), y1), ay = Math.min(Math.max(0, x0), x1); // onde ficam os eixos
    // linhas finas entre as marcas (de 1 em 1, quando o passo é 2 ou 5), para dar para ler valores ímpares
    const fino = (p, esc) => { const m = { 2: 1, 5: 1, 20: 10, 50: 10 }[p]; return m && m * esc >= 9 ? m : null; };
    const fx = fino(px, sx), fy = fino(py, sy);
    let finas = '';
    if (fx) for (let v = Math.ceil(x0 / fx) * fx; v <= x1 + 1e-9; v += fx) if (Math.abs(v / px - Math.round(v / px)) > 1e-9) finas += `M${f2(X(v))} ${f2(Y(y0))}V${f2(Y(y1))}`;
    if (fy) for (let v = Math.ceil(y0 / fy) * fy; v <= y1 + 1e-9; v += fy) if (Math.abs(v / py - Math.round(v / py)) > 1e-9) finas += `M${f2(X(x0))} ${f2(Y(v))}H${f2(X(x1))}`;
    if (finas) s += `<path class="pl-grade pl-fina" d="${finas}"/>`;
    let grade = '', marcas = '';
    for (let v = Math.ceil(x0 / px) * px; v <= x1 + 1e-9; v += px) {
      grade += `M${f2(X(v))} ${f2(Y(y0))}V${f2(Y(y1))}`;
      if (Math.abs(v) > 1e-9) marcas += `<text class="pl-num" x="${f2(X(v))}" y="${f2(Math.min(H - 4, Y(ax) + 13))}" text-anchor="middle">${fmt(v)}</text>`;
    }
    for (let v = Math.ceil(y0 / py) * py; v <= y1 + 1e-9; v += py) {
      grade += `M${f2(X(x0))} ${f2(Y(v))}H${f2(X(x1))}`;
      if (Math.abs(v) > 1e-9) marcas += `<text class="pl-num" x="${f2(Math.max(10, X(ay) - 5))}" y="${f2(Y(v) + 4)}" text-anchor="end">${fmt(v)}</text>`;
    }
    s += `<path class="pl-grade" d="${grade}"/>`;
    s += `<path class="pl-eixo" d="M${f2(X(x0))} ${f2(Y(ax))}H${f2(X(x1))}M${f2(X(ay))} ${f2(Y(y0))}V${f2(Y(y1))}"/>`;
    s += marcas + `<text class="pl-num pl-nome" x="${f2(X(x1) - 2)}" y="${f2(Y(ax) - 6)}" text-anchor="end">x</text><text class="pl-num pl-nome" x="${f2(X(ay) + 7)}" y="${f2(Y(y1) + 10)}">y</text>`;
  }
  // rótulo encostado num ponto, para o lado (nx, ny), sem sair do desenho
  const rotulo = (t, x, y, nx, ny, cls) => {
    const w = String(t).length * 7.6;
    let anc = Math.abs(nx) < 0.4 ? 'middle' : nx > 0 ? 'start' : 'end';
    let esq = anc === 'start' ? x : anc === 'end' ? x - w : x - w / 2;
    esq = Math.min(Math.max(esq, 4), W - 4 - w);
    const yb = y + (ny > 0.4 ? 11 : ny < -0.4 ? -2 : 4.5);
    return `<text class="${cls}" x="${f2(esq)}" y="${f2(Math.min(Math.max(yb, 13), H - 4))}">${escT(t)}</text>`;
  };
  // funções
  (pl.f || []).forEach((fn, k) => {
    const e = typeof fn === 'string' ? fn : fn.e, nome = typeof fn === 'object' && fn.nome, em = typeof fn === 'object' && fn.em != null ? num(fn.em) : null;
    let g; try { g = compilarFuncao(e); } catch (err) { return; }
    const val = x => { let y; try { y = num(g(x)); } catch (err) { y = NaN; } return y; };
    const ok = y => isFinite(y) && Math.abs(y - (y0 + y1) / 2) <= 20 * (y1 - y0);
    let d = '', solto = true, ult = null, xa = null, oka = false;
    for (let i = 0; i <= 240; i++) {
      const x = x0 + (x1 - x0) * i / 240, y = val(x), okx = ok(y);
      if (xa != null && okx !== oka) { // a curva começa ou termina aqui no meio (como √ na borda): acha a ponta exata
        let a = xa, b = x;
        for (let j = 0; j < 30; j++) { const m = (a + b) / 2; if (ok(val(m)) === oka) a = m; else b = m; }
        const xb = oka ? a : b, yb = val(xb);
        if (ok(yb)) { d += `${oka ? 'L' : 'M'}${f2(X(xb))} ${f2(Y(yb))}`; solto = false; }
      }
      xa = x; oka = okx;
      if (!okx) { solto = true; continue; }
      d += `${solto ? 'M' : 'L'}${f2(X(x))} ${f2(Y(y))}`; solto = false;
      if (y >= y0 && y <= y1) ult = [x, y];
    }
    const cor = typeof fn === 'object' && fn.cor != null ? +fn.cor % 3 : k % 3;
    s += `<path class="pl-f pl-f${cor}" clip-path="url(#pl${id})" d="${d}"/>`;
    // o nome vai no fim da curva (ou no x de "em"), sem sair do desenho
    if (em != null) { let y; try { y = num(g(em)); } catch (err) { y = NaN; } if (isFinite(y) && y >= y0 && y <= y1) ult = [em, y]; }
    if (nome && ult) {
      let tx = X(ult[0]) + 5, anc = '';
      if (tx + String(nome).length * 7.6 > W - 4) { tx = Math.min(X(ult[0]) - 5, W - 4); anc = ' text-anchor="end"'; }
      const ty = Math.min(Math.max(Y(ult[1]) - 7, 13), H - 5);
      s += `<text class="pl-txt pl-f${cor}t" x="${f2(tx)}" y="${f2(ty)}"${anc}>${escT(nome)}</text>`;
    }
  });
  // circunferências: { centro: [x, y], raio }
  (pl.circulos || []).forEach((c, k) => {
    const r = num(c.raio), cor = ((pl.f || []).length + k) % 3;
    s += `<ellipse class="pl-f pl-f${cor}" clip-path="url(#pl${id})" cx="${f2(X(num(c.centro[0])))}" cy="${f2(Y(num(c.centro[1])))}" rx="${f2(r * sx)}" ry="${f2(r * sy)}"/>`;
  });
  // segmentos
  for (const sg of pl.segmentos || []) {
    const [a, b] = [sg.de.map(num), sg.ate.map(num)];
    s += `<path class="pl-seg${sg.tracejado ? ' pl-trac' : ''}" d="M${f2(X(a[0]))} ${f2(Y(a[1]))}L${f2(X(b[0]))} ${f2(Y(b[1]))}"/>`;
    if (sg.rotulo) {
      const ax = X(a[0]), ay = Y(a[1]), bx = X(b[0]), by = Y(b[1]);
      let nx = ay - by, ny = bx - ax; const n = Math.hypot(nx, ny) || 1; nx /= n; ny /= n;
      if (ny > 0 || (ny === 0 && nx < 0)) { nx = -nx; ny = -ny; } // para cima (ou para a direita, se o segmento for em pé)
      s += rotulo(sg.rotulo, (ax + bx) / 2 + nx * 7, (ay + by) / 2 + ny * 7, nx, ny, 'pl-txt');
    }
  }
  // polígonos: lados rotulados do lado de fora, vértices e ângulo reto
  for (const pg of pl.poligonos || []) {
    const pts = pg.pts.map(p => [X(num(p[0])), Y(num(p[1]))]);
    const cx = pts.reduce((a, p) => a + p[0], 0) / pts.length, cy = pts.reduce((a, p) => a + p[1], 0) / pts.length;
    s += `<path class="pl-pol" d="M${pts.map(p => f2(p[0]) + ' ' + f2(p[1])).join('L')}${pts.length > 2 ? 'Z' : ''}"/>`;
    if (pg.reto != null) {
      const i = +pg.reto, v = pts[i], a = pts[(i + pts.length - 1) % pts.length], b = pts[(i + 1) % pts.length];
      const u = p => { const dx = p[0] - v[0], dy = p[1] - v[1], n = Math.hypot(dx, dy) || 1; return [dx / n * 11, dy / n * 11]; };
      const ua = u(a), ub = u(b);
      s += `<path class="pl-reto" d="M${f2(v[0] + ua[0])} ${f2(v[1] + ua[1])}L${f2(v[0] + ua[0] + ub[0])} ${f2(v[1] + ua[1] + ub[1])}L${f2(v[0] + ub[0])} ${f2(v[1] + ub[1])}"/>`;
    }
    (pg.lados || []).forEach((t, i) => {
      if (!t) return;
      const a = pts[i], b = pts[(i + 1) % pts.length], mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
      // perpendicular ao lado, apontando para fora da figura; o texto encosta no lado por esse lado
      let nx = a[1] - b[1], ny = b[0] - a[0]; const n = Math.hypot(nx, ny) || 1; nx /= n; ny /= n;
      if (nx * (mx - cx) + ny * (my - cy) < 0) { nx = -nx; ny = -ny; }
      s += rotulo(t, mx + nx * 8, my + ny * 8, nx, ny, 'pl-txt pl-lado');
    });
    (pg.vertices || []).forEach((t, i) => {
      if (!t) return;
      const p = pts[i], dx = p[0] - cx, dy = p[1] - cy, n = Math.hypot(dx, dy) || 1;
      s += rotulo(t, p[0] + dx / n * 7, p[1] + dy / n * 7, dx / n, dy / n, 'pl-txt pl-vert');
    });
  }
  // pontos
  for (const p of pl.pontos || []) {
    const px = X(num(p[0])), py = Y(num(p[1]));
    s += `<circle class="pl-pt" cx="${f2(px)}" cy="${f2(py)}" r="3.6"/>`;
    if (p[2]) {
      const fora = px + 6 + String(p[2]).length * 7.6 > W - 4;
      s += `<text class="pl-txt" x="${f2(fora ? px - 6 : px + 6)}" y="${f2(Math.max(py - 7, 13))}"${fora ? ' text-anchor="end"' : ''}>${escT(p[2])}</text>`;
    }
  }
  return s + '</svg>';
}
// confere um plano (para o validador): devolve a lista de problemas
function problemasPlano(pl) {
  const erros = [], num = v => Number(v);
  const faixa = (k, padrao) => { const v = (pl[k] || padrao).map(num); if (v.length !== 2 || !v.every(isFinite) || !(v[0] < v[1])) erros.push(`${k} precisa ser [menor, maior]`); return v; };
  const [x0, x1] = faixa('x', [-5, 5]), [y0, y1] = faixa('y', [-5, 5]);
  for (const fn of pl.f || []) {
    const e = typeof fn === 'string' ? fn : fn && fn.e;
    if (typeof e !== 'string') { erros.push('cada função precisa ser um texto (ou { e, nome })'); continue; }
    let g; try { g = compilarFuncao(e); } catch (err) { erros.push(`função com erro de escrita: ${e}`); continue; }
    let dentro = 0;
    for (let i = 0; i <= 60; i++) { let y; try { y = num(g(x0 + (x1 - x0) * i / 60)); } catch (err) { erros.push(`a função ${e} deu erro: ${err.message}`); break; } if (isFinite(y) && y >= y0 && y <= y1) dentro++; }
    if (!dentro) erros.push(`a função ${e} não aparece dentro do gráfico`);
  }
  const ponto = p => Array.isArray(p) && p.length >= 2 && isFinite(num(p[0])) && isFinite(num(p[1]));
  for (const p of pl.pontos || []) if (!ponto(p)) erros.push(`ponto inválido: ${JSON.stringify(p)}`);
  for (const sg of pl.segmentos || []) if (!ponto(sg.de) || !ponto(sg.ate)) erros.push('segmento precisa de de: [x, y] e ate: [x, y]');
  for (const c of pl.circulos || []) if (!c || !ponto(c.centro) || !(num(c.raio) > 0)) erros.push('circunferência precisa de centro: [x, y] e raio maior que zero');
  for (const pg of pl.poligonos || []) if (!Array.isArray(pg.pts) || pg.pts.length < 2 || !pg.pts.every(ponto)) erros.push('polígono precisa de pts com pelo menos 2 pontos [x, y]');
  return erros;
}

if (typeof module !== 'undefined' && module.exports) module.exports = { lerNumero, lerFracao, respostaNumericaOk, respostaNumericaTexto, formula, semFormula, planoSVG, problemasPlano };
