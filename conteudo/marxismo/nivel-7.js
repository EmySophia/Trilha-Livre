/* Trilha Livre · Introdução ao marxismo · Nível 7: Guia de estudo
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'marxismo',
  n: 7,
  titulo: 'Guia de estudo',
  desc: 'O que ler, em que ordem, como estudar e onde achar textos de graça.',
  videos: [
    {
      titulo: 'Como cheguei ao marxismo, com dicas de leitura',
      canal: 'Jones Manoel',
      obs: 'a parte final traz dicas para quem está começando',
      url: 'https://www.youtube.com/watch?v=NS7az_aZPec'
    },
    {
      tipo: 'texto',
      titulo: 'O 18 de brumário de Luís Bonaparte',
      canal: 'Arquivo Marxista na Internet',
      url: 'https://www.marxists.org/portugues/marx/1852/brumario/index.htm'
    },
    {
      tipo: 'texto',
      titulo: 'O imperialismo, fase superior do capitalismo',
      canal: 'Arquivo Marxista na Internet',
      url: 'https://www.marxists.org/portugues/lenin/1916/imperialismo/index.htm',
      obs: 'Lenin'
    },
    {
      tipo: 'texto',
      titulo: 'Que fazer?',
      canal: 'Arquivo Marxista na Internet',
      url: 'https://www.marxists.org/portugues/lenin/1902/quefazer/index.htm',
      obs: 'Lenin'
    },
    {
      tipo: 'texto',
      titulo: 'Biblioteca do Arquivo Marxista na Internet',
      canal: 'Arquivo Marxista na Internet',
      url: 'https://www.marxists.org/portugues/biblioteca.htm',
      obs: 'centenas de autores em português, de graça'
    },
    {
      titulo: 'IV Curso Livre Marx-Engels',
      canal: 'TV Boitempo',
      obs: 'oito aulas, coordenadas por José Paulo Netto',
      url: 'https://blogdaboitempo.com.br/2014/11/07/nova-edicao-de-marx-chegando-e-curso-livre-completo-disponivel-online/'
    }
  ],
  unidades: [
    {
      id: 'mxu8',
      titulo: 'Biblioteca',
      conceito: 'leia',
      desc: 'Um roteiro de leituras e um jeito de estudar.',
      licoes: [
        {
          id: 'mx7l1',
          titulo: 'Por onde começar',
          exs: [
            {
              t: 'texto',
              titulo: 'Um roteiro: de Marx a Lenin',
              blocos: [
                {
                  p: 'Ler os clássicos direto da fonte é possível, desde que você comece pelos textos certos. Este é um roteiro sugerido pelo historiador Jones Manoel no canal dele. Os textos de Marx estão de graça no Arquivo Marxista na Internet, em português.'
                },
                { p: 'Primeiro, a base em Marx:' },
                {
                  passos: [
                    'Manifesto do Partido Comunista (1848), de Marx e Engels: a visão geral',
                    'Trabalho assalariado e capital (1849) e Salário, preço e lucro (1865), de Marx: salário, lucro e exploração em linguagem simples',
                    'O 18 de brumário de Luís Bonaparte (1852), de Marx: a análise do golpe de Luís Bonaparte na França, apontada como o melhor exemplo do materialismo histórico aplicado a um acontecimento real'
                  ]
                },
                { p: 'Depois, Lenin, para entender o Estado e a estratégia revolucionária:' },
                {
                  passos: [
                    'O Estado e a revolução (1917)',
                    'Democracia e luta de classes, uma seleção de textos (Boitempo)',
                    'O imperialismo, fase superior do capitalismo (1916)',
                    'Que fazer? (1902), deixado por último por ser o mais denso'
                  ]
                },
                {
                  p: 'Quem quiser seguir para a economia pode partir daí para O Capital, que tem um curso só para ele aqui no app.'
                },
                {
                  dica: 'Não tem problema não entender tudo na primeira leitura. O próprio Marx avisou, no prefácio de O Capital, que todo começo é difícil.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual texto de Marx o roteiro aponta como o melhor exemplo do materialismo histórico aplicado a um fato real?',
              ops: [
                'O 18 de brumário de Luís Bonaparte',
                'O Manifesto Comunista',
                'Trabalho assalariado e capital'
              ],
              c: 0,
              exp: 'Nele, Marx analisa o golpe de 1851 na França olhando para as classes e os interesses em jogo.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Monte o roteiro de Lenin, na ordem sugerida',
              lines: [
                'O Estado e a revolução',
                'Democracia e luta de classes',
                'O imperialismo, fase superior do capitalismo',
                'Que fazer?'
              ],
              exp: 'Que fazer? fica por último por ser o mais denso.'
            },
            {
              t: 'escolha',
              p: 'Qual texto de Marx foi uma palestra para operários e serve de ponte para O Capital?',
              ops: ['Salário, preço e lucro', 'A ideologia alemã', 'O 18 de brumário'],
              c: 0,
              exp: 'Ele explica valor, salário e lucro com exemplos simples.'
            }
          ]
        },
        {
          id: 'mx7l2',
          titulo: 'Como estudar',
          exs: [
            {
              t: 'texto',
              titulo: 'Devagar, com caderno e em grupo',
              blocos: [
                {
                  p: 'Estudar um clássico é diferente de ver um vídeo curto. Algumas dicas que aparecem nos guias de estudo de Jones Manoel e de muitos outros professores:'
                },
                {
                  p: 'Paciência e repetição. É normal não entender um livro de primeira. Leia com um lápis na mão, anote nas margens ou num caderno, e volte ao mesmo livro meses depois: ele vai parecer outro.'
                },
                {
                  p: 'Fonte em vez de resumo. Resumos muito facilitados dão a sensação de ter aprendido sem ter aprendido. Vale mais passar meses num clássico do que ler vários resumos rápidos. Guias e introduções sérias ajudam, mas como companhia da leitura, não no lugar dela.'
                },
                {
                  p: 'Saturação do tema. Enquanto lê sobre um assunto, procure podcasts, vídeos e artigos sobre o mesmo assunto. Ver a mesma ideia explicada de vários jeitos ajuda a fixar. As caixas de aulas em vídeo de cada nível deste curso servem para isso.'
                },
                {
                  p: 'Ler o original, inclusive dos outros lados. Para entender o marxismo, leia Marx, e não só quem fala dele, a favor ou contra. O mesmo vale para entender o capitalismo: leia os seus clássicos, como Adam Smith e Keynes, e não só livros de polêmica. Obras de interpretação sérias têm valor; panfletos que só repetem slogans, de qualquer lado, não substituem o estudo.'
                },
                {
                  dica: 'Os grupos de estudo, os chamados círculos de leitura, são uma tradição do movimento operário justamente porque discutir em grupo ajuda a entender.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual é o papel dos guias e introduções, segundo a lição?',
              ops: [
                'Acompanhar a leitura do clássico, sem substituí-la',
                'Substituir a leitura do clássico',
                'Nenhum: devem ser evitados sempre'
              ],
              c: 0,
              exp: 'Um bom guia ajuda a atravessar as partes difíceis do original.'
            },
            {
              t: 'escolha',
              p: 'O que é a saturação do tema?',
              ops: [
                'Estudar o mesmo assunto em livros, vídeos, podcasts e artigos ao mesmo tempo',
                'Ler o mesmo livro várias vezes no mesmo dia',
                'Estudar todos os assuntos de uma vez'
              ],
              c: 0,
              exp: 'Ver a mesma ideia explicada de vários jeitos ajuda a fixar.'
            },
            {
              t: 'escolha',
              p: 'Para entender bem o capitalismo, o que a lição sugere?',
              ops: [
                'Ler também os clássicos que o defendem, como Adam Smith e Keynes',
                'Ler só os críticos do capitalismo',
                'Ler só livros de polêmica'
              ],
              c: 0,
              exp: 'O próprio Marx leu com cuidado Adam Smith e David Ricardo para escrever O Capital.'
            }
          ]
        },
        {
          id: 'mx7l3',
          titulo: 'Livros de apoio e de outros lados',
          exs: [
            {
              t: 'texto',
              titulo: 'Para ir mais fundo',
              blocos: [
                { p: 'Introduções sérias em português, para ler junto com os clássicos:' },
                {
                  passos: [
                    'Economia política: uma introdução crítica, de José Paulo Netto e Marcelo Braz (Cortez)',
                    'História da riqueza do homem, de Leo Huberman: a história econômica contada como um romance',
                    'Como mudar o mundo: Marx e o marxismo, 1840-2011, de Eric Hobsbawm (Companhia das Letras)',
                    'Para entender O capital, de David Harvey (Boitempo): um guia capítulo por capítulo',
                    'Introdução a O capital de Karl Marx, de Michael Heinrich (Boitempo, 2024)'
                  ]
                },
                {
                  p: 'Os clássicos do capitalismo e da teoria política, que Marx leu e criticou, e que ajudam a entender o mundo de hoje:'
                },
                {
                  passos: [
                    'A riqueza das nações (1776), de Adam Smith',
                    'Princípios de economia política e tributação (1817), de David Ricardo',
                    'Teoria geral do emprego, do juro e da moeda (1936), de John Maynard Keynes',
                    'Leviatã, de Thomas Hobbes; Segundo tratado sobre o governo, de John Locke; O contrato social, de Jean-Jacques Rousseau'
                  ]
                },
                { p: 'Os críticos do marxismo, lidos na fonte:' },
                {
                  passos: [
                    'A sociedade aberta e seus inimigos, de Karl Popper',
                    'A teoria da exploração do socialismo-comunismo, de Eugen von Böhm-Bawerk',
                    'O caminho da servidão, de Friedrich Hayek'
                  ]
                },
                {
                  p: 'E literatura, que ensina sobre desigualdade e luta de um jeito que a teoria não alcança. Três indicações do professor Gabriel Manfredi:'
                },
                {
                  passos: [
                    'Os miseráveis (1862), de Victor Hugo: um homem preso por roubar pão para alimentar a família, uma mulher empurrada para a miséria e estudantes que lutam por uma revolução',
                    'O povo brasileiro (1995), de Darcy Ribeiro: como a escravidão e a exploração econômica formaram a identidade do Brasil',
                    'A parábola do semeador (1993), de Octavia Butler: uma ficção científica num mundo devastado pelas mudanças do clima e pela desigualdade'
                  ]
                },
                {
                  p: 'E, para o Brasil, os autores do nível 5: Caio Prado Júnior, Florestan Fernandes, Jacob Gorender, Clóvis Moura, Ruy Mauro Marini, Vânia Bambirra, Lélia Gonzalez e Heleieth Saffioti.'
                },
                {
                  dica: 'Bibliotecas públicas e universitárias costumam ter esses livros, e os sebos têm edições antigas por preços baixos.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual destes livros é um guia de O Capital capítulo por capítulo?',
              ops: [
                'Para entender O capital, de David Harvey',
                'A sociedade aberta e seus inimigos, de Popper',
                'O povo brasileiro, de Darcy Ribeiro'
              ],
              c: 0,
              exp: 'Harvey deu um curso sobre O Capital por décadas, e o livro nasceu dessas aulas.'
            },
            {
              t: 'escolha',
              p: 'Quais economistas Marx leu e criticou para escrever O Capital?',
              ops: ['Adam Smith e David Ricardo', 'Keynes e Hayek', 'Popper e Böhm-Bawerk'],
              c: 0,
              exp: 'Keynes, Hayek, Popper e Böhm-Bawerk vieram depois de Marx.'
            },
            {
              t: 'escolha',
              p: 'Qual livro conta, em forma de ficção científica, um mundo devastado pelo clima e pela desigualdade?',
              ops: [
                'A parábola do semeador, de Octavia Butler',
                'Os miseráveis, de Victor Hugo',
                'Leviatã, de Hobbes'
              ],
              c: 0,
              exp: 'Octavia Butler escreveu o livro em 1993, e ele ficou cada vez mais atual.'
            }
          ]
        }
      ]
    }
  ]
});
