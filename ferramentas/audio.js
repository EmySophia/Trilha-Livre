#!/usr/bin/env node
/* Trilha Livre · lista das falas dos cursos de idiomas
   Lê todo o conteúdo e lista as frases que têm áudio (blocos fala, dialogo, vocab e pares, o campo ouvir,
   as respostas em inglês e os ((trechos)) das explicações), com o arquivo, a voz e o sotaque de cada uma.
   Uso:
     node ferramentas/audio.js            resumo: quantas falas há e quantas ainda não foram gravadas
     node ferramentas/audio.js --json     as que faltam, em JSON (o gravar_audio.py usa isto)
     node ferramentas/audio.js --todas    todas, gravadas ou não, em JSON
     node ferramentas/audio.js --orfaos   arquivos de áudio que nenhuma lição usa mais
     node ferramentas/audio.js --limpar   apaga esses arquivos
   SPDX-License-Identifier: AGPL-3.0-or-later · Copyright (C) 2026 Contribuidores do Trilha Livre */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const raiz = path.join(__dirname, '..');
const fala = require(path.join(raiz, 'js', 'fala.js'));

const index = fs.readFileSync(path.join(raiz, 'index.html'), 'utf8');
const ctx = vm.createContext({});
for (const [, arq] of index.matchAll(/<script src="(conteudo\/[^"]+)"/g)) vm.runInContext(fs.readFileSync(path.join(raiz, arq), 'utf8'), ctx, { filename: arq });
const TRILHA = vm.runInContext('TRILHA', ctx);

const todas = new Map(); // arquivo → { arquivo, texto, voz, lang }
for (const curso of TRILHA.cursos.filter(c => c.fala)) {
  const exercicios = [
    ...TRILHA.unidades.filter(u => u.curso === curso.id).flatMap(u => u.licoes.flatMap(l => l.exs)),
    ...TRILHA.desafios.filter(d => d.curso === curso.id)
  ];
  for (const ex of exercicios) for (const f of fala.falasDoExercicio(ex)) {
    for (const sot of f.sotaque ? [f.sotaque] : Object.keys(curso.fala.vozes)) {
      const texto = fala.textoFalado(fala.variante(f.texto, sot));
      const voz = fala.vozDaFala(texto, curso.fala, sot, f.papel);
      const arquivo = fala.arquivoFala(curso.id, texto, voz);
      todas.set(arquivo, { arquivo, texto, voz, lang: curso.fala.kokoro[sot] });
    }
  }
}
const faltando = [...todas.values()].filter(a => !fs.existsSync(path.join(raiz, a.arquivo)));
const orfaos = [];
for (const curso of TRILHA.cursos.filter(c => c.fala)) {
  const pasta = path.join(raiz, 'audio', curso.id);
  if (!fs.existsSync(pasta)) continue;
  for (const nome of fs.readdirSync(pasta)) if (!todas.has(`audio/${curso.id}/${nome}`)) orfaos.push(`audio/${curso.id}/${nome}`);
}

const arg = process.argv[2];
if (arg === '--json') process.stdout.write(JSON.stringify(faltando));
else if (arg === '--todas') process.stdout.write(JSON.stringify([...todas.values()]));
else if (arg === '--orfaos') orfaos.forEach(a => console.log(a));
else if (arg === '--limpar') { orfaos.forEach(a => fs.unlinkSync(path.join(raiz, a))); console.log(`${orfaos.length} arquivo(s) apagado(s).`); }
else {
  const tamanho = [...todas.values()].reduce((s, a) => s + (fs.existsSync(path.join(raiz, a.arquivo)) ? fs.statSync(path.join(raiz, a.arquivo)).size : 0), 0);
  console.log(`${todas.size} falas · ${todas.size - faltando.length} gravadas (${(tamanho / 1048576).toFixed(1)} MB) · ${faltando.length} faltando · ${orfaos.length} arquivo(s) sem uso`);
  if (faltando.length) console.log('Para gravar as que faltam: npm run audio (veja "Áudio" no CONTRIBUINDO.md).');
}
