/* Trilha Livre · Inglês do zero · Nível 7: Quantidades e comparações (A2)
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md.
   ((frase)) tem botão de ouvir; [[americano|britânico]] muda com o sotaque escolhido. */

nivel({
  curso: 'ingles',
  n: 7,
  titulo: 'Quantidades e comparações',
  faixa: 'A2',
  desc: 'Contáveis e incontáveis, some e any, much e many, comparativos, superlativos, too, enough e a diferença entre good e well.',
  videos: [
    {
      titulo: 'English in Brazil',
      canal: 'Carina Fragozo',
      obs: 'procure no canal os vídeos sobre much e many, comparativos e good ou well',
      url: 'https://www.youtube.com/user/carinafragozo'
    },
    {
      titulo: 'English with Lucy',
      canal: 'Lucy Earl',
      obs: 'aulas de gramática com comparativos, superlativos e advérbios, em inglês britânico',
      url: 'https://www.youtube.com/@EnglishwithLucy'
    },
    {
      titulo: 'BBC Learning English',
      canal: 'BBC',
      obs: 'vídeos curtos sobre contáveis, incontáveis e quantidades',
      url: 'https://www.youtube.com/@bbclearningenglish'
    }
  ],
  unidades: [
    {
      id: 'enu13',
      titulo: 'Quanto?',
      conceito: 'some · any · much · many',
      desc: 'O que se conta, o que não se conta e como dizer muito e pouco.',
      licoes: [
        {
          id: 'en7l1',
          titulo: 'Contáveis e incontáveis: some e any',
          pre: ['en2l2', 'en2l5'],
          exs: [
            {
              t: 'texto',
              titulo: 'O que se conta e o que não se conta',
              blocos: [
                {
                  p: 'O inglês divide os substantivos em dois grupos. Os **contáveis** são coisas que se contam uma a uma: ((an apple)), ((two apples)). Os **incontáveis** são vistos como uma massa: ((water)), ((rice)), ((money)). Eles não têm plural e não levam a nem an.'
                },
                {
                  p: 'Você já viu alguns no nível 2: information, advice e news. A ideia é a mesma do português com "arroz" e "dinheiro": ninguém diz "três arrozes". O problema é que nem sempre os dois idiomas concordam sobre o que se conta:'
                },
                {
                  vocab: [
                    [
                      'hair',
                      'cabelo',
                      'incontável: my hair is long, e não "my hairs are long"'
                    ],
                    ['bread', 'pão', 'um pão inteiro é a loaf of bread; um pãozinho é a roll'],
                    ['fruit', 'fruta', 'em geral incontável: I eat a lot of fruit'],
                    ['furniture', 'móveis', 'um móvel é a piece of furniture'],
                    ['luggage', 'bagagem', 'uma mala, que se conta, é a suitcase'],
                    ['beans', 'feijão', 'contável, e sempre no plural: beans'],
                    [
                      'news',
                      'notícia, notícias',
                      'termina em s, mas é singular: the news is good'
                    ],
                    ['people', 'pessoas', 'é plural, mesmo sem s: people are']
                  ]
                },
                {
                  p: '**Para contar o incontável**, use uma medida: ((a glass of water)), ((a cup of coffee)), ((a piece of cake)), ((a bottle of milk)), ((a slice of bread)).'
                },
                {
                  p: '**Some e any** querem dizer "algum, alguns, um pouco de" e servem para os dois grupos. A regra básica:'
                },
                {
                  tabela: {
                    cab: ['Palavra', 'Onde', 'Exemplo'],
                    codigo: [],
                    linhas: [
                      [
                        'some',
                        'frases afirmativas',
                        '((I need some water.)) ((There are some apples.))'
                      ],
                      [
                        'any',
                        'negativas e perguntas',
                        '((I don\'t have any money.)) ((Are there any eggs?))'
                      ],
                      [
                        'no',
                        'o mesmo que not any, com o verbo na afirmativa',
                        '((There\'s no milk.)) ((I have no idea.))'
                      ]
                    ]
                  }
                },
                {
                  p: '**A exceção que tem lógica.** Em ofertas e pedidos, a pergunta usa some: ((Would you like some coffee?)) ((Can I have some water?)) Quem oferece ou pede espera um sim. Já any, numa pergunta, é neutro, porque quem pergunta não sabe a resposta: ((Do you have any questions?))'
                },
                {
                  dica: 'Em português, muitas vezes não usamos nada: "tem ovos?", "quero água". Em inglês, a frase fica mais natural com some ou any: Are there any eggs? I want some water.',
                  rotulo: 'Por que traduzir o que não existe?'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual frase está certa?',
              ops: ['My hair is very long.', 'My hairs are very long.', 'My hair are very long.'],
              c: 0,
              exp: 'Hair, o cabelo da cabeça, é incontável.'
            },
            {
              t: 'complete',
              p: 'Complete com some ou any:',
              code: 'We have ___ bread, but we don\'t have ___ butter.',
              bank: ['some', 'any', 'a', 'an'],
              c: ['some', 'any'],
              exp: 'Afirmativa: some. Negativa: any.'
            },
            {
              t: 'escolha',
              p: 'Num café, o garçom oferece: "Would you like ___ coffee?"',
              ops: ['some', 'any', 'a'],
              c: 0,
              exp: 'Numa oferta, a pergunta usa some, porque quem oferece espera um sim.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Não tenho dinheiro."',
              r: [
                'I don\'t have any money.',
                'I have no money.',
                'I haven\'t got any money.',
                'I\'ve got no money.'
              ],
              exp: 'Money é incontável: any money, sem plural.'
            },
            {
              t: 'escolha',
              p: 'Como pedir "uma fatia de bolo"?',
              ops: ['a piece of cake', 'a cake', 'a cakes piece'],
              c: 0,
              exp: 'A cake é um bolo inteiro! Para uma fatia, use a piece of cake ou a slice of cake.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'Are there any eggs?',
              ops: ['Are there any eggs?', 'Are there any eyes?', 'Is there any egg?'],
              c: 0
            },
            {
              t: 'monte',
              p: 'Monte a frase: "A notícia é boa."',
              r: 'The news is good.',
              extra: ['are', 'new', 'a'],
              exp: 'News termina em s, mas é singular: the news is.'
            },
            {
              t: 'escreva',
              p: 'Traduza para o português: "I have no idea."',
              r: ['(Eu |)não (faço|tenho) (ideia|a menor ideia).', 'Não sei.', 'Sei lá.'],
              lingua: 'pt',
              exp: 'I have no idea é o nosso "não faço ideia".'
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'Can I have some water, please?'
            }
          ]
        },
        {
          id: 'en7l2',
          titulo: 'Much, many e a lot of',
          pre: ['en7l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Muito, pouco e quanto',
              blocos: [
                {
                  tabela: {
                    cab: ['', 'Contáveis (apples, people)', 'Incontáveis (water, time)'],
                    codigo: [],
                    linhas: [
                      ['muitos, muito', '((many apples))', '((much time))'],
                      ['muito, na afirmativa', '((a lot of apples))', '((a lot of time))'],
                      ['alguns, um pouco', '((a few apples))', '((a little time))'],
                      ['quantos? quanto?', '((How many apples?))', '((How much time?))']
                    ]
                  }
                },
                {
                  p: '**Much e many** aparecem mais em perguntas e negativas: ((I don\'t have much time.)) ((Were there many people?)) Numa frase afirmativa, "I have much time" soa estranho e formal. O natural é ((a lot of)) ou ((lots of)), que servem para os dois grupos: ((I have a lot of time.))'
                },
                {
                  p: '**A few e a little** são positivos: "alguns", "um pouco", o bastante para alguma coisa. Sem o a, **few** e **little** ficam negativos, quase "nenhum":'
                },
                {
                  tabela: {
                    cab: ['Frase', 'Sentido'],
                    codigo: [],
                    linhas: [
                      [
                        '((I have a few friends here.))',
                        'Tenho alguns amigos aqui: está tudo bem.'
                      ],
                      [
                        '((I have few friends here.))',
                        'Tenho poucos amigos aqui: quase nenhum.'
                      ]
                    ]
                  }
                },
                {
                  p: '**Preços.** How much também é a pergunta do preço: ((How much is it?)) ((How much are these shoes?)) Repare que, com coisas no plural, o verbo é are.'
                },
                {
                  p: '**Too much e too many** são "demais": ((too much sugar)), ((too many people)).'
                },
                {
                  dialogo: [
                    ['Seller', 'Good morning! What can I get you?', 'Bom dia! O que vai ser?'],
                    ['Rita', 'How much are the mangoes?', 'Quanto estão as mangas?'],
                    [
                      'Seller',
                      'Two for three [[dollars|pounds]].',
                      'Duas por três [[dólares|libras]].'
                    ],
                    [
                      'Rita',
                      'Great. I\'ll take four. And a few bananas, please.',
                      'Ótimo. Vou levar quatro. E algumas bananas, por favor.'
                    ],
                    ['Seller', 'How many?', 'Quantas?'],
                    [
                      'Rita',
                      'Just five. I don\'t eat many, and I don\'t have much space in my bag!',
                      'Só cinco. Não como muitas, e não tenho muito espaço na bolsa!'
                    ]
                  ],
                  titulo: 'Na feira'
                }
              ]
            },
            {
              t: 'complete',
              p: 'Complete com much ou many:',
              code: 'How ___ people were there? I don\'t know, but there wasn\'t ___ food.',
              bank: ['many', 'much', 'a lot'],
              c: ['many', 'much'],
              exp: 'People é contável: many. Food é incontável: much.'
            },
            {
              t: 'escolha',
              p: 'Qual frase soa mais natural?',
              ops: ['I have a lot of friends.', 'I have much friends.', 'I have many of friends.'],
              c: 0,
              exp: 'Na afirmativa, a lot of é o mais natural. E friends se conta, então much nunca serviria.'
            },
            {
              t: 'escolha',
              p: 'Qual é a diferença entre "I have a little money" e "I have little money"?',
              ops: [
                'A primeira: tenho um pouco, dá para algo. A segunda: quase nenhum.',
                'Nenhuma: as duas dizem a mesma coisa',
                'A primeira é quase nenhum; a segunda é um pouco.'
              ],
              c: 0,
              exp: 'Com o a, é positivo. Sem o a, quase nada.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Quanto custam estes sapatos?"',
              r: ['How much are these shoes?', 'How much do these shoes cost?']
            },
            {
              t: 'escreva',
              p: 'Traduza: "Quantos irmãos você tem?"',
              r: [
                'How many (brothers and sisters|siblings|brothers) do you have?',
                'How many (brothers and sisters|siblings|brothers) have you got?'
              ],
              exp: 'Irmãos, em geral, é brothers and sisters, ou siblings. Brothers sozinho são só irmãos homens.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'There\'s too much sugar in this.',
              ops: [
                'There\'s too much sugar in this.',
                'There\'s too many sugar in this.',
                'There\'s too much salt in this.'
              ],
              c: 0
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Não tenho muito tempo."',
              r: ['I don\'t have much time.', 'I haven\'t got much time.'],
              extra: ['many', 'lot', 'times'],
              exp: 'Time, no sentido de tempo, é incontável: much time.'
            },
            { t: 'escreva', p: 'Escreva o que você ouviu', ouvir: 'How much are the mangoes?' }
          ]
        }
      ]
    },
    {
      id: 'enu14',
      titulo: 'Comparar e descrever',
      conceito: 'bigger · the best · well',
      desc: 'Comparativos, superlativos, too, enough e como se faz alguma coisa.',
      licoes: [
        {
          id: 'en7l3',
          titulo: 'Comparativos: bigger, more expensive',
          pre: ['en2l4'],
          exs: [
            {
              t: 'texto',
              titulo: 'Mais que, menos que, tão quanto',
              blocos: [
                {
                  p: 'Para comparar duas coisas, o inglês tem dois jeitos, e o que decide é o **tamanho do adjetivo**:'
                },
                {
                  tabela: {
                    cab: ['Adjetivo', 'Como fica', 'Exemplos'],
                    codigo: [],
                    linhas: [
                      [
                        'curto (1 sílaba)',
                        '+ -er',
                        '((tall, taller)), ((cheap, cheaper)), ((fast, faster))'
                      ],
                      [
                        '2 sílabas, terminado em y',
                        'o y vira -ier',
                        '((easy, easier)), ((happy, happier)), ((busy, busier))'
                      ],
                      [
                        'longo (2 sílabas ou mais)',
                        'more + adjetivo',
                        '((expensive, more expensive)), ((interesting, more interesting))'
                      ]
                    ]
                  }
                },
                {
                  p: '**Por que dois jeitos?** As palavras curtas são, em geral, as mais antigas do inglês, de origem germânica, e mantiveram o sufixo -er, como o alemão faz até hoje. Muitas das longas vieram do francês e do latim e usam more, como o português usa "mais". Além disso, "expensiver" ficaria comprido e difícil de dizer.'
                },
                {
                  p: '**Na escrita:** o adjetivo curto que termina em consoante + vogal + consoante dobra a última letra, como em ((big, bigger)) e ((hot, hotter)). O que termina em e só ganha r: ((nice, nicer)).'
                },
                {
                  p: '**Os irregulares** são poucos e muito usados: ((good, better)) (bom, melhor), ((bad, worse)) (ruim, pior) e ((far, further)) (longe, mais longe; nos EUA, também farther).'
                },
                {
                  p: '**O "do que" da comparação é than**, que na fala soa fraco e rápido: ((São Paulo is bigger than Rio.)) Não confunda com then (depois, então).'
                },
                {
                  p: '**Tão quanto** é ((as ... as)): ((My brother is as tall as me.)) (Meu irmão é tão alto quanto eu.) Na negativa, "não tão quanto": ((This phone is not as good as that one.))'
                },
                {
                  p: '**Muito melhor** é ((much better)), e não "very better". Para reforçar um comparativo, use much, a lot ou a bit (um pouco): ((a lot cheaper)), ((a bit older)).'
                },
                {
                  dialogo: [
                    [
                      'Lia',
                      'Which is better, the bus or the [[subway|underground]]?',
                      'O que é melhor, o ônibus ou o metrô?'
                    ],
                    [
                      'Joe',
                      'The [[subway|underground]] is faster, but the bus is cheaper.',
                      'O metrô é mais rápido, mas o ônibus é mais barato.'
                    ],
                    ['Lia', 'Is the bus much slower?', 'O ônibus é muito mais lento?'],
                    [
                      'Joe',
                      'A bit. But it\'s more comfortable than the [[subway|underground]] at rush hour!',
                      'Um pouco. Mas é mais confortável que o metrô na hora do rush!'
                    ]
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual é o comparativo de big?',
              ops: ['bigger', 'biger', 'more big'],
              c: 0,
              exp: 'Consoante + vogal + consoante: a última letra dobra.'
            },
            {
              t: 'escolha',
              p: 'Qual está certa?',
              ops: [
                'This book is more interesting than the movie.',
                'This book is interestinger than the movie.',
                'This book is more interesting that the movie.'
              ],
              c: 0,
              exp: 'Adjetivo longo: more. E o "do que" é than.'
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: 'My new job is ___ than my old one. It\'s much ___ interesting.',
              bank: ['better', 'more', 'gooder', 'most'],
              c: ['better', 'more'],
              exp: 'Good vira better. Interesting é longo: more interesting.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Meu irmão é mais alto que eu."',
              r: ['My brother is taller than (me|I am|I).']
            },
            {
              t: 'escolha',
              p: '"Muito melhor" em inglês é...',
              ops: ['much better', 'very better', 'more better'],
              c: 0,
              exp: 'Para reforçar um comparativo, use much, a lot ou a bit. Very não funciona.'
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Ela é tão inteligente quanto a irmã."',
              r: [
                'She is as smart as her sister.',
                'She\'s as smart as her sister.',
                'She is as intelligent as her sister.'
              ],
              extra: ['than', 'more', 'like'],
              exp: 'Tão quanto: as ... as.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'The bus is cheaper than the [[subway|underground]].',
              ops: [
                'The bus is cheaper than the [[subway|underground]].',
                'The bus is cheaper than the train.',
                'The bus is sharper than the [[subway|underground]].'
              ],
              c: 0
            },
            {
              t: 'escreva',
              p: 'Traduza para o português: "It\'s not as expensive as I thought."',
              r: [
                'Não (é|está|era) tão caro (quanto|como) (eu |)(pensei|achei|imaginei|pensava|achava|imaginava).'
              ],
              lingua: 'pt',
              exp: 'Not as ... as: não tão ... quanto.'
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'It\'s more comfortable than the [[subway|underground]].'
            }
          ]
        },
        {
          id: 'en7l4',
          titulo: 'Superlativos: the best, the biggest',
          pre: ['en7l3'],
          exs: [
            {
              t: 'texto',
              titulo: 'O mais de todos',
              blocos: [
                {
                  p: 'Para dizer que algo é "o mais" de um grupo, o inglês segue a mesma divisão dos comparativos:'
                },
                {
                  tabela: {
                    cab: ['Adjetivo', 'Comparativo', 'Superlativo'],
                    codigo: [],
                    linhas: [
                      ['tall', 'taller', '((the tallest))'],
                      ['big', 'bigger', '((the biggest))'],
                      ['happy', 'happier', '((the happiest))'],
                      ['expensive', 'more expensive', '((the most expensive))'],
                      ['good', 'better', '((the best))'],
                      ['bad', 'worse', '((the worst))'],
                      ['far', 'further', '((the furthest))']
                    ]
                  }
                },
                {
                  p: 'O superlativo quase sempre leva **the**, porque fala de um só, o primeiro de todos: ((the best)), e não "best" sozinho.'
                },
                {
                  p: '**In ou of?** Para lugares e grupos, use in: ((the tallest building in the world)), ((the best student in the class)). Para um período ou um número de coisas, of: ((the best day of my life)), ((the oldest of the three)).'
                },
                {
                  p: '**One of the** pede o substantivo no plural: ((one of the best singers in Brazil)), e não "one of the best singer".'
                },
                {
                  p: '**Com o present perfect**, que você vai ver no nível 10, o superlativo forma uma frase muito comum: ((It\'s the best movie I\'ve ever seen.)) (É o melhor filme que eu já vi.)'
                },
                { p: 'Ouça alguns fatos sobre o Brasil:' },
                {
                  fala: 'Brazil is the largest country in South America.',
                  trad: 'O Brasil é o maior país da América do Sul.'
                },
                {
                  fala: 'The Amazon is the largest rainforest in the world.',
                  trad: 'A Amazônia é a maior floresta tropical do mundo.'
                },
                {
                  fala: 'São Paulo is one of the biggest cities on the planet.',
                  trad: 'São Paulo é uma das maiores cidades do planeta.'
                },
                {
                  fala: 'For many people, the most beautiful beaches in the country are in the Northeast.',
                  trad: 'Para muita gente, as praias mais bonitas do país ficam no Nordeste.'
                },
                {
                  dica: 'Largest e biggest são quase sinônimos. Para países e áreas, largest é o mais comum: the largest country.',
                  rotulo: 'Large ou big?'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual é o superlativo de good?',
              ops: ['the best', 'the goodest', 'the most good'],
              c: 0,
              exp: 'Good, better, the best.'
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: 'This is the ___ day ___ my life!',
              bank: ['best', 'of', 'in', 'better'],
              c: ['best', 'of'],
              exp: 'Para um período, como a vida, o superlativo usa of.'
            },
            {
              t: 'escolha',
              p: '"O prédio mais alto do mundo" é...',
              ops: [
                'the tallest building in the world',
                'the most tall building of the world',
                'the taller building in the world'
              ],
              c: 0,
              exp: 'Tall é curto: tallest. E para lugares, in.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Ela é a melhor aluna da turma."',
              r: ['She\'s the best student in (the|our|her|my) class.']
            },
            {
              t: 'escolha',
              p: 'Qual está certa?',
              ops: [
                'She is one of the best singers in Brazil.',
                'She is one of the best singer in Brazil.',
                'She is one of best singers in Brazil.'
              ],
              c: 0,
              exp: 'One of the + plural.'
            },
            {
              t: 'escreva',
              p: 'Escreva o superlativo de expensive.',
              r: ['the most expensive', 'most expensive']
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'It\'s the worst movie I\'ve ever seen.',
              ops: [
                'It\'s the worst movie I\'ve ever seen.',
                'It\'s the best movie I\'ve ever seen.',
                'It\'s the first movie I\'ve ever seen.'
              ],
              c: 0
            },
            {
              t: 'monte',
              p: 'Monte a frase: "O Brasil é o maior país da América do Sul."',
              r: 'Brazil is the largest country in South America.',
              extra: ['of', 'larger', 'most']
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'The Amazon is the largest rainforest in the world.'
            }
          ]
        },
        {
          id: 'en7l5',
          titulo: 'Good ou well? Too e enough',
          pre: ['en7l3'],
          exs: [
            {
              t: 'texto',
              titulo: 'Bom ou bem?',
              blocos: [
                {
                  p: '**Good e well** são como bom e bem. Good é adjetivo, descreve uma coisa ou pessoa: ((a good singer)) (um bom cantor). Well é advérbio, descreve **como** se faz algo: ((She sings well.)) (Ela canta bem.) Dizer "she sings good" é como dizer "ela canta bom".'
                },
                {
                  p: '**Os advérbios de modo** quase sempre são o adjetivo + **-ly**, como o nosso "-mente": ((quick, quickly)), ((careful, carefully)), ((easy, easily)), ((real, really)).'
                },
                {
                  p: 'Alguns não mudam: ((fast)) (rápido) e ((hard)) (com esforço): ((He works hard.)) é "ele trabalha muito, pesado". Cuidado: ((hardly)) existe e quer dizer outra coisa, "quase não": ((I hardly sleep.)) (Eu quase não durmo.)'
                },
                {
                  p: '**A posição.** O advérbio não fica entre o verbo e o objeto: é ((She speaks English well.)), e não "She speaks well English". Primeiro vem o verbo com o que ele pega; depois, o como.'
                },
                { p: '**Too e enough** dizem se algo passou do limite ou não chegou a ele:' },
                {
                  tabela: {
                    cab: ['Forma', 'Sentido', 'Exemplo'],
                    codigo: [],
                    linhas: [
                      [
                        'too + adjetivo',
                        'demais, passou do limite',
                        '((This coffee is too hot.))'
                      ],
                      ['adjetivo + enough', 'o suficiente', '((Is it big enough?))'],
                      [
                        'not + adjetivo + enough',
                        'não é o suficiente',
                        '((I\'m not tall enough.))'
                      ],
                      [
                        'enough + substantivo',
                        'o suficiente de alguma coisa',
                        '((We don\'t have enough time.))'
                      ]
                    ]
                  }
                },
                {
                  p: 'Repare na ordem: enough vem **depois** do adjetivo, como em ((old enough)), e **antes** do substantivo, como em ((enough money)). E os dois aceitam um "para": ((too hot to drink)) (quente demais para beber), ((old enough to drive)) (com idade para dirigir).'
                },
                {
                  dialogo: [
                    ['Kim', 'How was the interview?', 'Como foi a entrevista?'],
                    [
                      'Raul',
                      'I think it went well! I answered all the questions calmly.',
                      'Acho que foi bem! Respondi todas as perguntas com calma.'
                    ],
                    ['Kim', 'And the salary?', 'E o salário?'],
                    [
                      'Raul',
                      'Not high enough, honestly. But the office is near enough to walk.',
                      'Não é alto o suficiente, sinceramente. Mas o escritório é perto o bastante para ir a pé.'
                    ]
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual está certa?',
              ops: ['She sings really well.', 'She sings really good.', 'She sings well really.'],
              c: 0,
              exp: 'Como ela canta: well, o advérbio.'
            },
            {
              t: 'escolha',
              p: '"Ela fala inglês muito bem." Como fica?',
              ops: [
                'She speaks English very well.',
                'She speaks very well English.',
                'She speaks English very good.'
              ],
              c: 0,
              exp: 'O advérbio vai depois do objeto (English), e bem é well.'
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: 'I can\'t drink this coffee. It\'s ___ hot. Wait until it\'s cool ___.',
              bank: ['too', 'enough', 'very', 'so'],
              c: ['too', 'enough'],
              exp: 'Passou do limite: too. Chegou ao ponto: adjetivo + enough.'
            },
            {
              t: 'escreva',
              p: 'Transforme em advérbio: careful',
              r: ['carefully'],
              exp: 'Careful + ly: carefully, com dois l.',
              exato: true
            },
            {
              t: 'escolha',
              p: '"I hardly sleep." O que quer dizer?',
              ops: ['Eu quase não durmo', 'Eu durmo muito pesado', 'Eu durmo muito'],
              c: 0,
              exp: 'Hardly é "quase não". Não confunda com hard.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Não temos tempo suficiente."',
              r: ['We don\'t have enough time.', 'We haven\'t got enough time.'],
              exp: 'Enough vem antes do substantivo.'
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Ele tem idade para dirigir."',
              r: ['He\'s old enough to drive.', 'He is old enough to drive.'],
              extra: ['too', 'for', 'very'],
              exp: 'Old enough: enough depois do adjetivo.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'I think it went well!',
              ops: ['I think it went well!', 'I think it went wrong!', 'I think it was well!'],
              c: 0
            },
            { t: 'escreva', p: 'Escreva o que você ouviu', ouvir: 'This coffee is too hot.' }
          ]
        }
      ]
    }
  ]
});
