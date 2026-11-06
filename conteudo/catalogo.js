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
  { id: 'seguranca', nome: 'Segurança digital', desc: 'Proteger a si mesmo e aos sistemas, e testar invasões com autorização, dentro da lei.' },
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
  { id: 'seg-pessoal', area: 'seguranca', sigla: 'Seg', linguagem: 'texto', titulo: 'Segurança para todo mundo',
    desc: 'Senhas, verificação em duas etapas, golpes do Pix e do WhatsApp, phishing e privacidade. Para qualquer pessoa, sem programar.' },
  { id: 'linux', area: 'seguranca', sigla: '$_', linguagem: 'shell', titulo: 'Linux e terminal',
    desc: 'Arquivos, permissões, usuários, processos e scripts no terminal do Linux, o sistema da maioria dos servidores.' },
  { id: 'redes', area: 'seguranca', sigla: 'IP', linguagem: 'texto', titulo: 'Redes de computadores',
    desc: 'IP, máscaras, portas, DNS, HTTP e HTTPS: como os dados viajam pela rede e onde podem ser interceptados.' },
  { id: 'seg-web', area: 'seguranca', sigla: 'Web', linguagem: 'py', titulo: 'Segurança web',
    desc: 'As falhas mais comuns dos sites, como XSS e injeção de SQL. Você explora cada uma num laboratório e depois corrige.' },
  { id: 'cripto', area: 'seguranca', sigla: 'Cr', linguagem: 'py', titulo: 'Criptografia',
    desc: 'Cifras antigas quebradas em Python, hashes, senhas com salt, chaves públicas e como o HTTPS protege a conexão.' },
  { id: 'hacking-etico', area: 'seguranca', sigla: 'CTF', linguagem: 'py', titulo: 'Hacking ético na prática',
    desc: 'O método de um teste de invasão autorizado, do escopo ao relatório, com desafios de capturar a flag e o lado da defesa.' },
  { id: 'mat-basica', area: 'matematica', sigla: '+−', linguagem: 'mat', titulo: 'Matemática básica',
    desc: 'Das quatro operações à geometria: frações, porcentagem, regra de três, potências, equações e gráficos, com contas que mudam a cada vez. A base para o Enem.' },
  { id: 'mat-medio', area: 'matematica', sigla: 'x²', linguagem: 'mat', titulo: 'Matemática do ensino médio',
    desc: 'Funções, exponencial e logaritmo, PA e PG, trigonometria, geometria, combinatória, probabilidade, estatística e matrizes, do jeito que cai no Enem, com gráficos desenhados na tela.' },
  { id: 'mat-financeira', area: 'matematica', sigla: 'R$', titulo: 'Matemática financeira',
    desc: 'Juros, parcelas, inflação e investimentos sem mistério.' },
  { id: 'ingles', area: 'idiomas', sigla: 'EN', linguagem: 'en', titulo: 'Inglês do zero',
    desc: 'Do zero ao avançado (C1), com o porquê de cada regra, pronúncia com áudio em inglês americano ou britânico, as expressões que as pessoas usam de verdade e um guia para seguir até o C2.',
    // áudio (js/fala.js): vozes do Kokoro para cada sotaque, a primeira feminina e a segunda masculina
    fala: { sotaques: { us: 'Americano', uk: 'Britânico' }, vozes: { us: ['af_heart', 'am_michael'], uk: ['bf_emma', 'bm_george'] },
      lang: { us: 'en-US', uk: 'en-GB' }, kokoro: { us: 'en-us', uk: 'en-gb' }, exemplo: "Hi! How's it going?" } },
  { id: 'espanhol', area: 'idiomas', sigla: 'ES', titulo: 'Espanhol para iniciantes',
    desc: 'Conversação básica para estudar, trabalhar e viajar pela América Latina.' },
  { id: 'marxismo', area: 'politica', sigla: 'Mx', linguagem: 'texto', titulo: 'Introdução ao marxismo',
    desc: 'Marx, Engels e quem veio depois: a história, os conceitos, os debates e o que ler.' },
  { id: 'o-capital', area: 'politica', sigla: 'K', linguagem: 'texto', titulo: 'O Capital, de Marx',
    desc: 'A crítica da economia política, da mercadoria às crises, com guia de leitura.' },
  { id: 'capital-guiado', area: 'politica', sigla: 'K1', linguagem: 'texto', titulo: 'Leitura guiada de O Capital',
    desc: 'Para ler o Livro I junto com o app: o que observar em cada capítulo, os trechos difíceis explicados e perguntas para o grupo.' }
]);

// Formações completas: percursos que juntam cursos de áreas diferentes, na ordem em que vale a pena fazer.
// Cada etapa é um curso inteiro ou só alguns níveis dele (niveis: [primeiro, último]), com o porquê de estar ali.
formacoes([
  { id: 'programacao', titulo: 'Programação do zero', sigla: '</>',
    desc: 'Da lógica ao primeiro site no ar e aos programas em Python, com o Git para guardar e publicar tudo.',
    etapas: [
      { curso: 'logica-js', porque: 'A base de tudo: pensar como programador e escrever os primeiros programas.' },
      { curso: 'html-css', porque: 'Montar páginas de verdade e colocar um site no ar.' },
      { curso: 'git', porque: 'Guardar as versões do código e publicar os projetos no GitHub.' },
      { curso: 'python', porque: 'A segunda linguagem, para dados, automação e ciência.' }
    ] },
  { id: 'seguranca', titulo: 'Segurança e hacking ético', sigla: 'CTF',
    desc: 'Do básico de proteção ao teste de invasão autorizado: programação, Linux, redes, web, criptografia e pentest, sempre com ética e dentro da lei.',
    etapas: [
      { curso: 'seg-pessoal', porque: 'Começa protegendo você: senhas, golpes e privacidade.' },
      { curso: 'logica-js', porque: 'Para entender código, é preciso saber programar.' },
      { curso: 'linux', porque: 'O terminal do Linux é a ferramenta de trabalho de quem faz segurança.' },
      { curso: 'python', niveis: [1, 8], porque: 'A linguagem dos scripts de segurança. Até a automação já basta.' },
      { curso: 'redes', porque: 'Todo ataque e toda defesa passam pela rede.' },
      { curso: 'html-css', porque: 'Para atacar e defender um site, é preciso saber como ele é feito.' },
      { curso: 'seg-web', porque: 'As falhas mais exploradas da web, na prática.' },
      { curso: 'cripto', porque: 'Como os dados ficam protegidos, e quando essa proteção falha.' },
      { curso: 'git', porque: 'Para usar e contribuir com ferramentas abertas de segurança.' },
      { curso: 'hacking-etico', porque: 'Juntar tudo num teste de invasão completo, do escopo ao relatório.' }
    ] },
  { id: 'enem-matematica', titulo: 'Matemática para o Enem', sigla: 'x²',
    desc: 'Das quatro operações aos gráficos, probabilidade e geometria, do jeito que cai na prova.',
    etapas: [
      { curso: 'mat-basica', porque: 'A base: frações, porcentagem, regra de três e equações.' },
      { curso: 'mat-medio', porque: 'Funções, trigonometria, geometria e estatística do ensino médio.' },
      { curso: 'mat-financeira', porque: 'Juros, parcelas e inflação, que caem no Enem e servem para a vida.' }
    ] },
  { id: 'marxismo', titulo: 'Marxismo e O Capital', sigla: 'K',
    desc: 'Dos conceitos e da história do marxismo à leitura do Livro I de O Capital.',
    etapas: [
      { curso: 'marxismo', porque: 'O panorama: a história, os conceitos e os debates.' },
      { curso: 'o-capital', porque: 'A crítica da economia política, explicada parte por parte.' },
      { curso: 'capital-guiado', porque: 'Para ler o Livro I de verdade, capítulo por capítulo.' }
    ] }
]);
