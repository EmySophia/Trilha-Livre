/* Trilha Livre · catálogo de áreas e cursos
   Um curso aparece como disponível quando tem pelo menos um nível (conteudo/<id-do-curso>/nivel-1.js).
   Sem níveis, ele aparece como "em construção", convidando quem quiser ajudar a escrever.
   sigla: até 3 caracteres, mostrados no selo do curso.
   linguagem: 'js' (padrão), 'py', 'html' ou 'css', usada para colorir e rodar o código nas lições;
   'shell' para cursos de comandos de terminal, como o de Git;
   'texto' para cursos sem programação (sem terminal e sem cores de código).
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). */

areas([
  { id: 'programacao', nome: 'Programação', desc: 'Lógica, linguagens e ferramentas para criar software.' },
  { id: 'matematica', nome: 'Matemática', desc: 'Contas do dia a dia, dinheiro e a base para as ciências.' },
  { id: 'idiomas', nome: 'Idiomas', desc: 'Línguas para estudar, trabalhar e viajar.' },
  { id: 'politica', nome: 'Política e sociedade', desc: 'Teoria, história e debates para entender a sociedade e transformá-la.' }
]);

cursos([
  { id: 'logica-js', area: 'programacao', sigla: 'JS', titulo: 'Lógica de programação com JavaScript',
    desc: 'Do primeiro algoritmo a projetos completos. Ideal para quem nunca programou.' },
  { id: 'html-css', area: 'programacao', sigla: '</>', linguagem: 'html', titulo: 'Sites com HTML e CSS',
    desc: 'Monte páginas de verdade e coloque na internet de graça.' },
  { id: 'python', area: 'programacao', sigla: 'Py', linguagem: 'py', titulo: 'Python do zero',
    desc: 'A linguagem mais usada em ciência, dados e engenharia, rodando de verdade no navegador, com gráficos, automação e projetos de engenharia.' },
  { id: 'git', area: 'programacao', sigla: 'Git', linguagem: 'shell', titulo: 'Git e GitHub',
    desc: 'Guarde as versões do seu código, publique no GitHub e contribua com projetos abertos, praticando os comandos num terminal simulado.' },
  { id: 'mat-basica', area: 'matematica', sigla: '+−', linguagem: 'mat', titulo: 'Matemática básica',
    desc: 'Das quatro operações à geometria: frações, porcentagem, regra de três, potências, equações e gráficos, com contas que mudam a cada vez. A base para o Enem.' },
  { id: 'mat-medio', area: 'matematica', sigla: 'x²', linguagem: 'mat', titulo: 'Matemática do ensino médio',
    desc: 'Funções, exponencial e logaritmo, PA e PG, trigonometria, geometria, combinatória, probabilidade, estatística e matrizes, do jeito que cai no Enem, com gráficos desenhados na tela.' },
  { id: 'mat-financeira', area: 'matematica', sigla: 'R$', titulo: 'Matemática financeira',
    desc: 'Juros, parcelas, inflação e investimentos sem mistério.' },
  { id: 'ingles', area: 'idiomas', sigla: 'EN', titulo: 'Inglês para iniciantes',
    desc: 'Vocabulário e frases do dia a dia, com atenção ao inglês da tecnologia.' },
  { id: 'espanhol', area: 'idiomas', sigla: 'ES', titulo: 'Espanhol para iniciantes',
    desc: 'Conversação básica para estudar, trabalhar e viajar pela América Latina.' },
  { id: 'marxismo', area: 'politica', sigla: 'Mx', linguagem: 'texto', titulo: 'Introdução ao marxismo',
    desc: 'Marx, Engels e quem veio depois: a história, os conceitos, os debates e o que ler.' },
  { id: 'o-capital', area: 'politica', sigla: 'K', linguagem: 'texto', titulo: 'O Capital, de Marx',
    desc: 'A crítica da economia política, da mercadoria às crises, com guia de leitura.' },
  { id: 'capital-guiado', area: 'politica', sigla: 'K1', linguagem: 'texto', titulo: 'Leitura guiada de O Capital',
    desc: 'Para ler o Livro I junto com o app: o que observar em cada capítulo, os trechos difíceis explicados e perguntas para o grupo.' }
]);
