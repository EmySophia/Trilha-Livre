/* Trilha Livre · registro de conteúdo
   catalogo.js chama areas() e cursos(). Cada arquivo de nível chama nivel({ curso, ... })
   e o arquivo de prática de um curso chama desafios(idDoCurso, [...]).
   A ordem das tags <script> no index.html define a ordem dos níveis dentro de cada curso.
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). */

const TRILHA = { areas: [], cursos: [], niveis: [], unidades: [], desafios: [] };

function areas(lista) {
  TRILHA.areas.push(...lista);
}

function cursos(lista) {
  TRILHA.cursos.push(...lista);
}

function nivel(def) {
  TRILHA.niveis.push({ curso: def.curso, n: def.n, titulo: def.titulo, desc: def.desc, videos: def.videos || [] });
  for (const u of def.unidades) TRILHA.unidades.push({ ...u, curso: def.curso, nivel: def.n });
}

function desafios(curso, lista) {
  TRILHA.desafios.push(...lista.map(d => ({ ...d, curso })));
}
