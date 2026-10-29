/* Trilha Livre · Inglês do zero · Prática livre: desafios avulsos, fora da trilha.
   dif: 'facil', 'medio' ou 'dificil'. Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). */

desafios('ingles', [
  {
    id: 'en-p-apresentacao',
    t: 'escreva',
    dif: 'facil',
    titulo: 'Apresente-se',
    temas: ['to be', 'apresentação'],
    p: 'Escreva em inglês: "Oi! Meu nome é Lucas, tenho 19 anos e sou de Belém."',
    r: '(Hi|Hello|Hey)! (My name is|My name\'s|I\'m) Lucas, I\'m 19( years old|) and I\'m from Belém.',
    dica: 'Idade usa to be: I\'m 19.',
    exp: 'Três pontos de atenção: o sujeito sempre presente, a idade com to be e o I\'m from para a cidade.'
  },
  {
    id: 'en-p-th',
    t: 'escolha',
    dif: 'facil',
    titulo: 'Três ou árvore?',
    temas: ['pronúncia', 'th'],
    p: 'O que você ouviu?',
    ouvir: 'I think it\'s three o\'clock.',
    ops: [
      'I think it\'s three o\'clock.',
      'I sink it\'s tree o\'clock.',
      'I think it\'s free o\'clock.'
    ],
    c: 0,
    exp: 'Think e three começam com th: a ponta da língua entre os dentes.'
  },
  {
    id: 'en-p-falsos',
    t: 'escolha',
    dif: 'facil',
    titulo: 'Falsos amigos',
    temas: ['falsos cognatos'],
    p: 'O que quer dizer: "Actually, my parents pretended they didn\'t know."?',
    ops: [
      'Na verdade, meus pais fingiram que não sabiam.',
      'Atualmente, meus parentes pretendem não saber.',
      'Na verdade, meus parentes pretendiam não saber.'
    ],
    c: 0,
    exp: 'Actually é "na verdade", parents são pai e mãe e pretend é fingir.'
  },
  {
    id: 'en-p-restaurante',
    t: 'escreva',
    dif: 'facil',
    titulo: 'A conta, por favor',
    temas: ['restaurante', 'pedidos'],
    p: 'No restaurante, peça a conta com educação e pergunte se pode pagar com cartão.',
    r: '(Can|Could|May) I (have|get) the [[check|bill]](, please|)? (Can|Could|May) I pay (by|with) (card|credit card|a card|a credit card)?',
    dica: 'A conta é check nos EUA e bill no Reino Unido. Pedidos educados começam com Can I ou Could I.',
    exp: 'Pagar com cartão: pay by card (mais britânico) ou pay with a card.'
  },
  {
    id: 'en-p-perfect',
    t: 'escreva',
    dif: 'medio',
    titulo: 'Há dois anos',
    temas: ['present perfect'],
    p: 'Escreva em inglês: "Estudo inglês há dois anos, mas nunca fui a um país que fala inglês."',
    r: '(I\'ve|I have) (studied|been studying) English for two years, but (I\'ve|I have) never been to an English-speaking country.',
    dica: 'Do passado até agora: present perfect com for. Experiência: never been.',
    exp: 'Estudar há dois anos é I\'ve studied (ou I\'ve been studying) for two years. "Nunca fui" é never been, porque é uma experiência de vida.'
  },
  {
    id: 'en-p-pergunta-indireta',
    t: 'escreva',
    dif: 'medio',
    titulo: 'Onde fica a estação?',
    temas: ['perguntas', 'ditado'],
    p: 'Escreva o que você ouviu',
    ouvir: 'Excuse me, could you tell me where the nearest [[subway|underground]] station is?',
    exp: 'Repare na ordem: where the station is, e não where is the station. Dentro de uma pergunta educada (could you tell me), a segunda parte volta à ordem de afirmação.'
  },
  {
    id: 'en-p-if',
    t: 'monte',
    dif: 'medio',
    titulo: 'Se eu fosse você',
    temas: ['condicionais'],
    p: 'Monte a frase: "Se eu fosse você, eu não faria isso."',
    r: 'If I were you, I wouldn\'t do that.',
    extra: ['was', 'will', 'don\'t', 'make'],
    exp: 'Situação imaginária: if + were, e would na outra parte.'
  },
  {
    id: 'en-p-anuncio',
    t: 'escolha',
    dif: 'dificil',
    titulo: 'Um anúncio',
    temas: ['leitura', 'Enem'],
    p: 'Leia o anúncio: "Wanted: volunteers to teach basic computer skills to seniors. No experience needed, just patience and a smile. Saturdays, 10 a.m. to noon, at the public library." O anúncio procura pessoas que...',
    ops: [
      'ajudem idosos a usar o computador, aos sábados, na biblioteca',
      'tenham experiência como professores de informática',
      'queiram aprender informática na biblioteca'
    ],
    c: 0,
    exp: 'Wanted é "procura-se", seniors são idosos e no experience needed quer dizer que não é preciso experiência. Library é biblioteca, e não livraria.'
  },
  {
    id: 'en-p-gonna',
    t: 'escreva',
    dif: 'dificil',
    titulo: 'Fala rápida',
    temas: ['fala conectada', 'ditado'],
    p: 'Escreva o que você ouviu',
    ouvir: 'I\'m gonna grab a coffee. Do you wanna come?',
    r: 'I\'m (gonna|going to) grab a coffee. Do you (wanna|want to) come?',
    exp: 'Gonna e wanna são going to e want to falados rápido. Na escrita informal, aparecem assim mesmo.'
  },
  {
    id: 'en-p-horas',
    t: 'escolha',
    dif: 'facil',
    titulo: 'A que horas sai o trem?',
    temas: ['horas', 'números'],
    p: 'Ouça. A que horas sai o trem?',
    ouvir: 'The train leaves at a quarter to nine.',
    ops: ['8h45', '9h15', '8h15'],
    c: 0,
    exp: 'A quarter to nine: faltam quinze para as nove.'
  },
  {
    id: 'en-p-preco',
    t: 'escreva',
    dif: 'facil',
    titulo: 'Doze e cinquenta',
    temas: ['preços', 'números'],
    p: 'Escreva por extenso, do jeito que se fala na conversa, o preço $12.50.',
    r: [
      'twelve fifty',
      'twelve dollars and fifty cents',
      'twelve dollars fifty',
      'twelve fifty dollars'
    ],
    dica: 'Na conversa, um preço vira dois números: os dólares e os centavos.',
    exp: 'Twelve fifty é o jeito mais comum. Por extenso: twelve dollars and fifty cents.'
  },
  {
    id: 'en-p-comparar',
    t: 'monte',
    dif: 'medio',
    titulo: 'Mais barato, mais rápido',
    temas: ['comparativos'],
    p: 'Monte a frase: "O ônibus é mais barato, mas o metrô é muito mais rápido."',
    r: 'The bus is cheaper, but the [[subway|underground]] is much faster.',
    extra: ['more', 'very', 'than'],
    exp: 'Adjetivos curtos ganham -er, e "muito mais" é much, e não very.'
  },
  {
    id: 'en-p-telefone',
    t: 'escreva',
    dif: 'medio',
    titulo: 'O telefone tocou',
    temas: ['past continuous'],
    p: 'Escreva em inglês: "Eu estava dormindo quando o telefone tocou."',
    r: [
      'I was sleeping when the phone rang.',
      'I was asleep when the phone rang.',
      'When the phone rang, I was sleeping.',
      'When the phone rang, I was asleep.'
    ],
    dica: 'A ação longa vai no past continuous; a curta, no passado simples. O passado de ring é rang.',
    exp: 'Was sleeping é a ação em andamento; rang interrompe.'
  },
  {
    id: 'en-p-relativa',
    t: 'escolha',
    dif: 'medio',
    titulo: 'A amiga com quem eu moro',
    temas: ['orações relativas'],
    p: 'Qual frase quer dizer "A amiga com quem eu moro é de Manaus"?',
    ops: [
      'The friend I live with is from Manaus.',
      'The friend who I live is from Manaus.',
      'The friend with I live is from Manaus.'
    ],
    c: 0,
    exp: 'Na fala, o who cai e a preposição vai para o fim: the friend I live with.'
  },
  {
    id: 'en-p-passiva',
    t: 'escreva',
    dif: 'dificil',
    titulo: 'O estádio',
    temas: ['voz passiva'],
    p: 'Passe para a voz passiva: "They built this stadium in 2014."',
    r: 'This stadium was built in (twenty fourteen|2014|two thousand fourteen|two thousand and fourteen).',
    dica: 'To be no passado + particípio de build.',
    exp: 'Built é o passado e o particípio de build. Quem construiu não importa, então they some.'
  },
  {
    id: 'en-p-indireto',
    t: 'escreva',
    dif: 'dificil',
    titulo: 'Ela disse que não podia',
    temas: ['discurso indireto'],
    p: 'Conte o que ela disse, começando com "She said": "I can\'t come because I\'m working."',
    r: 'She said (that |)she couldn\'t come because she was working.',
    dica: 'O tempo volta um passo: can vira could, e am working vira was working.',
    exp: 'She said she couldn\'t come because she was working. O I de quem falou vira she.'
  },
  {
    id: 'en-p-colocacao',
    t: 'escolha',
    dif: 'medio',
    titulo: 'Fazer um erro?',
    temas: ['collocations'],
    p: 'Qual frase soa natural em inglês?',
    ops: ['I made a mistake.', 'I did a mistake.', 'I took a mistake.'],
    c: 0,
    exp: 'Errar é make a mistake. Make é criar algo; do é realizar uma tarefa.'
  },
  {
    id: 'en-p-deducao',
    t: 'escolha',
    dif: 'medio',
    titulo: 'Ele sempre responde',
    temas: ['deduções', 'modais'],
    p: 'Seu amigo, que sempre responde rápido, não respondeu às mensagens o dia todo. O que você diz?',
    ops: ['He must have lost his phone.', 'He must lose his phone.', 'He can\'t have a phone.'],
    c: 0,
    exp: 'Dedução sobre o passado: must have + particípio.'
  },
  {
    id: 'en-p-supposed',
    t: 'escreva',
    dif: 'medio',
    titulo: 'Era para ela chegar',
    temas: ['be supposed to'],
    p: 'Escreva em inglês: "Era para ela chegar às oito."',
    r: 'She was supposed to (arrive|get here|be here|come) at eight.',
    dica: 'O que era esperado, mas talvez não aconteceu: be supposed to.',
    exp: 'Be supposed to fala do combinado. O português não tem uma expressão igual.'
  },
  {
    id: 'en-p-terceira',
    t: 'escreva',
    dif: 'dificil',
    titulo: 'Se eu tivesse estudado',
    temas: ['condicionais'],
    p: 'Escreva em inglês: "Se eu tivesse estudado, teria passado."',
    r: 'If I had studied, I would have passed( the (exam|test)|).',
    dica: 'O passado que não aconteceu: had + particípio na condição, would have + particípio no resultado.',
    exp: 'Na fala, vira If I\'d studied, I\'d have passed.'
  },
  {
    id: 'en-p-email',
    t: 'monte',
    dif: 'dificil',
    titulo: 'Aguardo seu retorno',
    temas: ['escrita formal'],
    p: 'Monte o fecho de um e-mail formal: "Aguardo seu retorno."',
    r: 'I look forward to hearing from you.',
    extra: ['hear', 'waiting', 'return'],
    exp: 'O to de look forward to é preposição, então vem -ing: hearing.'
  },
  {
    id: 'en-p-inversao',
    t: 'escreva',
    dif: 'dificil',
    titulo: 'Nunca vi nada igual',
    temas: ['inversão'],
    p: 'Reescreva com inversão, começando com "Never": "I have never seen such a beautiful place."',
    r: 'Never have I seen such a beautiful place.',
    dica: 'Depois de never no começo, a frase fica na ordem de pergunta.',
    exp: 'Never have I seen: o auxiliar vem antes do sujeito, para dar ênfase.'
  },
  {
    id: 'en-p-sarcasmo',
    t: 'escolha',
    dif: 'dificil',
    titulo: 'Que maravilha',
    temas: ['ironia', 'conversa'],
    p: 'Você e um amigo esperam o ônibus há uma hora, e começa a chover. Ele diz: "Oh, perfect. This day just keeps getting better." Como ele está?',
    ops: [
      'Irritado, sendo sarcástico',
      'Feliz de verdade com a chuva',
      'Esperançoso com o resto do dia'
    ],
    c: 0,
    exp: 'Uma frase positiva demais para uma situação ruim é o sinal clássico do sarcasmo.'
  }
]);
