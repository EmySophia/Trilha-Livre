/* Trilha Livre · O Capital, de Marx · Nível 1: Antes de abrir o livro
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'o-capital',
  n: 1,
  titulo: 'Antes de abrir o livro',
  desc: 'O que é O Capital, como foi escrito e como enfrentar a leitura.',
  videos: [
    {
      titulo: 'Curso O Capital, de Marx',
      canal: 'TV Boitempo',
      obs: 'aula 1, com Eleutério Prado: a estrutura da obra e o método',
      url: 'https://blogdaboitempo.com.br/2017/08/23/boitempo-libera-curso-completo-sobre-o-capital-de-marx-no-youtube/'
    },
    {
      titulo: 'Reading Marx\'s Capital, volume 1 (em inglês)',
      canal: 'David Harvey',
      obs: '13 aulas sobre o Livro I, na ordem do livro; o YouTube oferece legendas automáticas em português. A edição inglesa numera os capítulos de outro jeito: o das máquinas, por exemplo, é o 13 na Boitempo e o 15 na inglesa',
      url: 'https://davidharvey.org/2008/06/getting-started/'
    },
    {
      tipo: 'texto',
      titulo: 'O Capital em português',
      canal: 'Arquivo Marxista na Internet',
      url: 'https://www.marxists.org/portugues/marx/1867/capital/index.htm',
      obs: 'o texto de graça, na internet'
    }
  ],
  unidades: [
    {
      id: 'kpu1',
      titulo: 'A obra',
      conceito: '1867',
      desc: 'Três livros, muitos manuscritos e um método.',
      licoes: [
        {
          id: 'kp1l1',
          titulo: 'Um livro em três volumes',
          exs: [
            {
              t: 'texto',
              titulo: 'Uma obra que Marx não terminou',
              blocos: [
                {
                  p: 'O Capital tem o subtítulo Crítica da economia política. Economia política era o nome da ciência econômica do tempo de Marx, com autores como Adam Smith e David Ricardo. Marx leu esses autores com atenção, aproveitou muito do que eles descobriram e mostrou onde, para ele, eles erravam.'
                },
                {
                  p: 'Marx publicou só o Livro I, em 1867, em Hamburgo, e depois o revisou para novas edições. Os Livros II e III foram montados por Engels a partir dos manuscritos que Marx deixou, e saíram em 1885 e 1894. Outros cadernos, sobre a história das teorias econômicas, foram publicados por Karl Kautsky entre 1905 e 1910, como Teorias da mais-valia.'
                },
                {
                  tabela: {
                    cab: ['Livro', 'Assunto'],
                    linhas: [
                      [
                        'I (1867)',
                        'O processo de produção do capital: valor, mais-valia, salário e acumulação'
                      ],
                      [
                        'II (1885)',
                        'O processo de circulação do capital: como o capital gira e se reproduz'
                      ],
                      [
                        'III (1894)',
                        'O processo global: lucro, juros, renda da terra e crises'
                      ]
                    ]
                  }
                },
                {
                  p: 'O Livro I tem sete seções e 25 capítulos. Ele começa pelo mais simples e abstrato, a mercadoria, e vai chegando ao mais concreto: a jornada de trabalho, as máquinas, o salário, o desemprego e a origem violenta do capitalismo.'
                },
                {
                  dica: 'Quando alguém diz que leu O Capital, quase sempre está falando do Livro I. É por ele que este curso começa e onde fica a maior parte das lições.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual livro de O Capital o próprio Marx publicou?',
              ops: ['Só o Livro I', 'Os três', 'Só o Livro III'],
              c: 0,
              exp: 'Os Livros II e III foram editados por Engels depois da morte de Marx.'
            },
            {
              t: 'escolha',
              p: 'O que quer dizer o subtítulo Crítica da economia política?',
              ops: [
                'Uma crítica à ciência econômica da época, de autores como Smith e Ricardo',
                'Uma crítica aos políticos que cuidavam da economia',
                'Um manual de economia doméstica'
              ],
              c: 0,
              exp: 'Economia política era o nome da ciência econômica naquele tempo.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem de publicação',
              lines: [
                'Livro I (1867)',
                'Livro II (1885)',
                'Livro III (1894)',
                'Teorias da mais-valia (1905 a 1910)'
              ],
              exp: 'Só o primeiro saiu com Marx vivo.'
            }
          ]
        },
        {
          id: 'kp1l2',
          titulo: 'Como ler O Capital',
          exs: [
            {
              t: 'texto',
              titulo: 'Todo começo é difícil',
              blocos: [
                {
                  p: 'No prefácio do Livro I, Marx avisa que todo começo é difícil, em qualquer ciência, e que os primeiros capítulos seriam os mais duros. Ele estava certo: o capítulo 1, sobre a mercadoria, é o mais abstrato do livro inteiro.'
                },
                {
                  p: 'Por isso, há conselhos diferentes. O filósofo Louis Althusser sugeria pular a primeira seção na primeira leitura e começar pela segunda, voltando depois. David Harvey, que deu um curso sobre O Capital por décadas, defende o contrário: atravessar os primeiros capítulos com paciência, porque o resto do livro depende deles.'
                },
                {
                  p: 'Em português, a edição da Boitempo, traduzida por Rubens Enderle e lançada em 2013 com base na edição crítica alemã, é a mais usada hoje. A edição da Nova Cultural, da coleção Os Economistas, é comum em sebos. E o texto completo está de graça no Arquivo Marxista na Internet.'
                },
                {
                  p: 'Leia devagar, um capítulo de cada vez, com um caderno. Anote as definições, faça os exemplos numéricos à mão e, se puder, leia em grupo. Um bom ritmo é um capítulo por semana.'
                },
                {
                  dica: 'Este curso segue a ordem do Livro I. Faça cada nível do app junto com as seções correspondentes do livro: o app explica, e o livro aprofunda.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Por que muita gente acha difícil o começo de O Capital?',
              ops: [
                'Porque o capítulo 1, sobre a mercadoria, é o mais abstrato do livro',
                'Porque está escrito em alemão antigo',
                'Porque não tem exemplos de nada'
              ],
              c: 0,
              exp: 'O próprio Marx avisou disso no prefácio.'
            },
            {
              t: 'escolha',
              p: 'Qual era o conselho de Althusser para a primeira leitura?',
              ops: [
                'Pular a primeira seção, começar pela segunda e voltar depois',
                'Ler só o Livro III',
                'Ler de trás para a frente'
              ],
              c: 0,
              exp: 'Harvey defende o contrário: atravessar os primeiros capítulos com paciência.'
            },
            {
              t: 'escolha',
              p: 'Qual é um bom ritmo de leitura, segundo a lição?',
              ops: [
                'Um capítulo por semana, com caderno e, se possível, em grupo',
                'O livro inteiro num fim de semana',
                'Só os resumos de cada capítulo'
              ],
              c: 0,
              exp: 'Devagar e com constância rende mais do que pressa.'
            }
          ]
        }
      ]
    }
  ]
});
