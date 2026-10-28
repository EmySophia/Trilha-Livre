/* Trilha Livre · exercícios de página (HTML e CSS)
   Monta a página do aluno, confere o resultado com regras simples e destaca a sintaxe de HTML e CSS.
   Funciona no navegador e também no validador (Node + jsdom), por isso não mexe na página ao carregar.
   SPDX-License-Identifier: AGPL-3.0-or-later · Copyright (C) 2026 Contribuidores do Trilha Livre */

/* ---------- montar a página ---------- */
// junta o HTML e o CSS do aluno num documento só; o CSS vai no começo do <head>
function montarPagina(html, css) {
  html = String(html || '');
  const estilo = css ? `<style>\n${css}\n</style>` : '';
  if (!estilo) return html;
  if (/<head[\s>]/i.test(html)) return html.replace(/<head([^>]*)>/i, `<head$1>${estilo}`);
  if (/<html[\s>]/i.test(html)) return html.replace(/<html([^>]*)>/i, `<html$1><head>${estilo}</head>`);
  return estilo + html;
}

/* ---------- conferir a página ----------
   Cada regra descreve algo que a página precisa ter e traz a mensagem mostrada quando falta:
   { sel: 'h1', msg }                         existe pelo menos um elemento com esse seletor
   { sel: 'h1', texto: 'Olá', msg }           algum deles contém esse texto (sem diferenciar maiúsculas)
   { sel: 'li', conta: 3, msg }               existem exatamente 3   ·   { sel: 'li', min: 3, msg }  pelo menos 3
   { sel: 'img', attr: 'alt', msg }           algum tem o atributo preenchido
   { sel: 'a', attr: 'href', valor: '…' }     com esse valor exato   ·   contem: '…'  que contém esse trecho
   { sel: 'h1', css: 'color', valor: 'red' }  algum tem esse estilo calculado (qualquer forma de escrever a cor vale)
   { sel: '.capa', css: 'background-image', contem: 'horta.jpg' }   o estilo calculado contém esse trecho
   { sel: '.cartao', css: 'box-shadow', diferente: 'none' }         o estilo calculado não é esse valor
   { regra: 'a:hover', prop: 'color', msg }   o CSS tem uma regra com esse seletor (ou um seletor que termina nele) e essa propriedade
   { regra: 'h1', prop: 'font-size', contem: 'rem', msg }           e o valor escrito contém esse trecho
   { regra: '.grade', prop: 'grid-template-columns', media: '700px' } a regra está dentro de um @media com esse trecho
   { sel: 'input', dentro: 'form', msg }      algum está dentro de um elemento com esse seletor
   { sel: 'font', nao: true, msg }            nenhum elemento com esse seletor
   { rotulado: 'input', msg }                 algum campo tem <label> ligado (for = id, ou o label em volta)
   { rotulado: 'input', todos: true, msg }    todos os campos com esse seletor têm label
   { sel: '.grade', colunas: 3, msg }         a grade (display: grid) tem exatamente 3 colunas · colunasMin: pelo menos
   { titulo: 'Meu site', msg }                o título da página (<title>) contém esse texto */
const normTexto = s => String(s == null ? '' : s).replace(/\s+/g, ' ').trim().toLowerCase();

function cssNormalizado(doc, prop, valor) {
  // o elemento de teste fica em position absolute, e nele o navegador transforma inline-block em block
  // e float em none; essas palavras já vêm escritas do jeito que o navegador devolve
  if (prop === 'display' || prop === 'float') return String(valor).trim().toLowerCase();
  const p = doc.createElement('div');
  p.style.cssText = 'position:absolute;visibility:hidden;left:-9999px;top:0';
  // a espessura da borda só vale com um estilo de borda; sem isso o navegador calcula 0px
  const borda = /^(border(-(top|right|bottom|left))?|outline)-width$/.exec(prop);
  if (borda) p.style.setProperty(prop.replace('width', 'style'), 'solid');
  p.style.setProperty(prop, valor);
  (doc.body || doc.documentElement).appendChild(p);
  const v = doc.defaultView.getComputedStyle(p).getPropertyValue(prop);
  p.remove();
  return v.trim();
}

const temLabel = (doc, el) => !!el.closest('label') || (!!el.id && !!doc.querySelector(`label[for="${el.id.replace(/"/g, '')}"]`));
function contarColunas(doc, el) {
  const v = doc.defaultView.getComputedStyle(el).getPropertyValue('grid-template-columns').trim();
  if (/repeat\(/.test(v)) return Infinity; // o navegador sempre resolve; só ambientes de teste devolvem repeat()
  if (!v || v === 'none') return 0;
  return v.replace(/\[[^\]]*\]/g, ' ').split(/\s+/).filter(Boolean).length;
}

// todas as regras de estilo da página, inclusive as que estão dentro de @media
function regrasDoCss(doc) {
  const out = [];
  const juntar = (lista, media) => {
    for (const r of lista || []) {
      if (r.selectorText != null) { out.push({ cr: r, media }); continue; }
      const m = r.media ? (r.media.mediaText || '') : (r.conditionText || '');
      if (r.cssRules) juntar(r.cssRules, r.media || r.conditionText != null ? m : media);
    }
  };
  for (const s of doc.styleSheets || []) { try { juntar(s.cssRules, null); } catch (e) { /* folha de outro site */ } }
  return out;
}
const normSel = s => String(s).toLowerCase().replace(/\s*([>+~,])\s*/g, '$1').replace(/\s+/g, ' ').trim();
const semAspas = s => String(s).toLowerCase().replace(/["']/g, '').replace(/\s+/g, ' ').trim();
function regraCssOk(doc, r) {
  const alvo = normSel(r.regra);
  return regrasDoCss(doc).some(({ cr, media }) => {
    if (r.media != null && (media == null || !normSel(media).includes(normSel(r.media)))) return false;
    const casa = normSel(cr.selectorText).split(',').some(s => s === alvo || s.endsWith(' ' + alvo) || s.endsWith('>' + alvo));
    if (!casa) return false;
    if (r.prop == null) return true;
    const v = cr.style.getPropertyValue(r.prop);
    if (!v) return false;
    return r.contem == null || semAspas(v).includes(semAspas(r.contem));
  });
}

function regraOk(doc, r) {
  if (r.titulo != null) return normTexto(doc.title).includes(normTexto(r.titulo));
  if (r.regra != null) return regraCssOk(doc, r);
  if (r.rotulado != null) {
    let campos;
    try { campos = [...doc.querySelectorAll(r.rotulado)]; } catch (e) { return false; }
    if (!campos.length) return false;
    return r.todos ? campos.every(el => temLabel(doc, el)) : campos.some(el => temLabel(doc, el));
  }
  let els;
  try { els = [...doc.querySelectorAll(r.sel)]; } catch (e) { return false; }
  if (r.nao) return els.length === 0;
  if (r.conta != null) return els.length === r.conta;
  if (r.min != null) return els.length >= r.min;
  if (!els.length) return false;
  if (r.texto != null) els = els.filter(el => normTexto(el.textContent).includes(normTexto(r.texto)));
  if (r.attr != null) {
    els = els.filter(el => {
      if (!el.hasAttribute(r.attr)) return false;
      const v = el.getAttribute(r.attr).trim();
      if (r.valor != null) return v === r.valor;
      if (r.contem != null) return v.toLowerCase().includes(String(r.contem).toLowerCase());
      return v !== '' || r.vazioVale;
    });
  }
  if (r.dentro != null) els = els.filter(el => el.parentElement && el.parentElement.closest(r.dentro));
  if (r.colunas != null) els = els.filter(el => contarColunas(doc, el) === r.colunas);
  if (r.colunasMin != null) els = els.filter(el => contarColunas(doc, el) >= r.colunasMin);
  if (r.css != null) {
    const calc = el => doc.defaultView.getComputedStyle(el).getPropertyValue(r.css).trim();
    if (r.contem != null) els = els.filter(el => semAspas(calc(el)).includes(semAspas(r.contem)));
    else if (r.diferente != null) { const nao = cssNormalizado(doc, r.css, r.diferente); els = els.filter(el => calc(el) !== nao); }
    else { const alvo = cssNormalizado(doc, r.css, r.valor); els = els.filter(el => calc(el) === alvo); }
  }
  return els.length > 0;
}

function checarPagina(doc, regras) {
  return regras.map(r => ({ ok: regraOk(doc, r), msg: r.msg }));
}

/* ---------- destaque de sintaxe ---------- */
function hlHtml(src) {
  const re = /(<!--[\s\S]*?-->)|(<\/?)([a-zA-Z][\w-]*)|([\w-:]+)(?==)|("[^"]*"|'[^']*')|(\/?>)|(&[a-z]+;|&#\d+;)/g;
  let out = '', i = 0, m, dentroTag = false;
  while ((m = re.exec(src))) {
    const antes = src.slice(i, m.index);
    out += esc(antes);
    if (m[1]) out += `<span class="t-c">${esc(m[1])}</span>`;
    else if (m[2]) { out += `<span class="t-p">${esc(m[2])}</span><span class="t-k">${esc(m[3])}</span>`; dentroTag = true; }
    else if (m[4] && dentroTag) out += `<span class="t-f">${esc(m[4])}</span>`;
    else if (m[5] && dentroTag) out += `<span class="t-s">${esc(m[5])}</span>`;
    else if (m[6]) { out += `<span class="t-p">${esc(m[6])}</span>`; dentroTag = false; }
    else if (m[7]) out += `<span class="t-n">${esc(m[7])}</span>`;
    else out += esc(m[0]);
    i = re.lastIndex;
  }
  return out + esc(src.slice(i));
}

function hlCss(src) {
  const re = /(\/\*[\s\S]*?\*\/)|("[^"]*"|'[^']*')|([^{};\n][^{};\n]*?)(\s*\{)|([\w-]+)(\s*:)(?![^{]*\{)|(#[0-9a-fA-F]{3,8}\b|-?\b\d+(?:\.\d+)?(?:px|rem|em|%|vh|vw|fr|s|deg)?\b)/g;
  let out = '', i = 0, m;
  while ((m = re.exec(src))) {
    out += esc(src.slice(i, m.index));
    if (m[1]) out += `<span class="t-c">${esc(m[1])}</span>`;
    else if (m[2]) out += `<span class="t-s">${esc(m[2])}</span>`;
    else if (m[3]) out += `<span class="t-k">${esc(m[3])}</span>${esc(m[4])}`;
    else if (m[5]) out += `<span class="t-f">${esc(m[5])}</span>${esc(m[6])}`;
    else if (m[7]) out += `<span class="t-n">${esc(m[7])}</span>`;
    i = re.lastIndex;
  }
  return out + esc(src.slice(i));
}

if (typeof module !== 'undefined') module.exports = { montarPagina, checarPagina, normTexto };
