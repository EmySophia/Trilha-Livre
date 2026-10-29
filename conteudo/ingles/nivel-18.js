/* Trilha Livre · Inglês do zero · Nível 18: Palavras que andam juntas (B2)
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md.
   ((frase)) tem botão de ouvir; [[americano|britânico]] muda com o sotaque escolhido. */

nivel({
  curso: 'ingles',
  n: 18,
  titulo: 'Palavras que andam juntas',
  faixa: 'B2',
  desc: 'Make ou do, as combinações que soam naturais, os três used to, mais phrasal verbs e as expressões idiomáticas que aparecem em toda série.',
  videos: [
    {
      titulo: 'Speak English With Vanessa',
      canal: 'Vanessa',
      obs: 'phrasal verbs e expressões do dia a dia, em inglês americano',
      url: 'https://www.youtube.com/@SpeakEnglishWithVanessa'
    },
    {
      titulo: 'Learn English With TV Series',
      canal: 'Learn English With TV Series',
      obs: 'as expressões idiomáticas aparecendo em cenas de séries',
      url: 'https://www.youtube.com/@LearnEnglishWithTVSeries'
    },
    {
      tipo: 'texto',
      titulo: 'Dicionário Cambridge',
      canal: 'Cambridge',
      obs: 'cada verbete mostra as combinações mais comuns de uma palavra, com exemplos',
      url: 'https://dictionary.cambridge.org/pt/'
    },
    {
      tipo: 'texto',
      titulo: 'YouGlish',
      canal: 'YouGlish',
      obs: 'ouça uma expressão em centenas de vídeos de pessoas reais',
      url: 'https://youglish.com/english'
    }
  ],
  unidades: [
    {
      id: 'enu30',
      titulo: 'Combinações',
      conceito: 'make a mistake · get used to',
      desc: 'As palavras que costumam aparecer juntas, e o used to que muda de sentido.',
      licoes: [
        {
          id: 'en18l1',
          titulo: 'Make ou do? As combinações naturais',
          pre: ['en8l6'],
          exs: [
            {
              t: 'texto',
              titulo: 'As palavras têm parceiras',
              blocos: [
                {
                  p: 'Em toda língua, algumas palavras andam juntas por costume, e não por lógica. Em português, a gente **toma** banho e **faz** a barba; ninguém "pega" banho. Em inglês, essas combinações se chamam **collocations**, e elas separam o inglês intermediário do avançado: uma frase pode estar certa na gramática e mesmo assim soar estranha.'
                },
                {
                  p: '**Make ou do?** Os dois são "fazer". Em geral, **make** é criar, produzir algo que não existia; **do** é realizar uma tarefa, uma atividade:'
                },
                {
                  tabela: {
                    cab: ['make', 'do'],
                    codigo: [],
                    linhas: [
                      ['((make a mistake)) (errar)', '((do homework)) (fazer a lição)'],
                      ['((make a decision)) (decidir)', '((do the dishes)) (lavar a louça)'],
                      ['((make money)) (ganhar dinheiro)', '((do exercise)) (fazer exercício)'],
                      [
                        '((make a phone call)) (fazer uma ligação)',
                        '((do your best)) (fazer o melhor possível)'
                      ],
                      ['((make friends)) (fazer amigos)', '((do business)) (fazer negócios)'],
                      [
                        '((make noise)) (fazer barulho)',
                        '((do me a [[favor|favour]])) (me fazer um favor)'
                      ]
                    ]
                  }
                },
                { p: '**Outras combinações que confundem brasileiros:**' },
                {
                  vocab: [
                    ['take a shower', 'tomar banho', 'no Reino Unido, também have a shower'],
                    ['take a photo', 'tirar uma foto'],
                    ['have breakfast', 'tomar café da manhã'],
                    ['pay attention', 'prestar atenção'],
                    ['heavy rain', 'chuva forte', 'e não strong rain'],
                    ['strong coffee', 'café forte', 'e não heavy coffee'],
                    ['catch a cold', 'pegar um resfriado'],
                    ['keep a secret', 'guardar um segredo'],
                    ['break a promise', 'quebrar uma promessa'],
                    ['fast food', 'comida rápida', 'e não quick food']
                  ]
                },
                {
                  dica: 'Ao aprender uma palavra nova, aprenda junto com as parceiras dela. O dicionário Cambridge e o YouGlish mostram como cada palavra costuma aparecer em frases reais.',
                  rotulo: 'Aprenda em blocos'
                }
              ]
            },
            {
              t: 'complete',
              p: 'Complete com make ou do:',
              code: 'Don\'t worry, everyone can ___ a mistake. Just ___ your best.',
              bank: ['make', 'do', 'take', 'have'],
              c: ['make', 'do'],
              exp: 'Errar é make a mistake. Fazer o melhor possível é do your best.'
            },
            {
              t: 'escolha',
              p: 'Como se diz "tomar uma decisão"?',
              ops: ['make a decision', 'do a decision', 'have a decision'],
              c: 0,
              exp: 'Make a decision é o mais comum. No Reino Unido, take a decision também aparece.'
            },
            {
              t: 'escolha',
              p: '"Chuva forte" em inglês é...',
              ops: ['heavy rain', 'strong rain', 'big rain'],
              c: 0,
              exp: 'Chuva é heavy, e não strong. Café é que é strong.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Preciso lavar a louça."',
              r: ['I (need|have) to (do|wash) the dishes.', 'I (need|have) to do the washing-up.']
            },
            {
              t: 'escreva',
              p: 'Traduza: "Você pode me fazer um favor?"',
              r: ['(Can|Could) you do me a [[favor|favour]]?']
            },
            {
              t: 'escolha',
              p: 'Como se diz "prestar atenção"?',
              ops: ['pay attention', 'give attention', 'lend attention'],
              c: 0,
              exp: 'Em inglês, atenção se "paga".'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'Let\'s take a photo!',
              ops: ['Let\'s take a photo!', 'Let\'s make a photo!', 'Let\'s take a phone!'],
              c: 0
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'She made a lot of friends at school.'
            }
          ]
        },
        {
          id: 'en18l2',
          titulo: 'Used to, be used to, get used to',
          pre: ['en5l5', 'en13l3'],
          exs: [
            {
              t: 'texto',
              titulo: 'Três used to diferentes',
              blocos: [
                {
                  tabela: {
                    cab: ['Forma', 'Sentido', 'Exemplo'],
                    codigo: [],
                    linhas: [
                      [
                        'used to + verbo',
                        'costumava (hábito que acabou)',
                        '((I used to live in Recife.))'
                      ],
                      [
                        'be used to + -ing',
                        'estar acostumado a',
                        '((I\'m used to waking up early.))'
                      ],
                      ['get used to + -ing', 'se acostumar a', '((You\'ll get used to it.))']
                    ]
                  }
                },
                {
                  p: 'O primeiro você viu no nível 5: used to é o nosso "eu morava", "eu jogava", um hábito do passado que não existe mais.'
                },
                {
                  p: '**Be used to** é outra coisa: é estar **acostumado**, agora. E ele vem com -ing ou com um substantivo, porque o to, aqui, é uma preposição, e não parte do verbo: ((I\'m used to the cold.)) ((She\'s used to working at night.))'
                },
                {
                  p: '**Get used to** é o processo de se acostumar: ((I\'m getting used to my new job.)) (Estou me acostumando com o emprego novo.) ((Don\'t worry, you\'ll get used to it.)) (Calma, você se acostuma.)'
                },
                {
                  p: 'Compare: ((I used to drive on the left.)) (Eu dirigia pela esquerda, antigamente.) e ((I\'m used to driving on the left.)) (Estou acostumado a dirigir pela esquerda.) A primeira fala do passado; a segunda, de hoje.'
                },
                {
                  dialogo: [
                    ['Rosa', 'How\'s life in London?', 'Como está a vida em Londres?'],
                    [
                      'Davi',
                      'Good! It was hard at first. I wasn\'t used to the weather at all.',
                      'Boa! No começo foi difícil. Eu não estava nada acostumado com o clima.'
                    ],
                    ['Rosa', 'And now?', 'E agora?'],
                    [
                      'Davi',
                      'I\'m getting used to it. I used to complain every day. Now it\'s only once a week!',
                      'Estou me acostumando. Eu reclamava todo dia. Agora, é só uma vez por semana!'
                    ]
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: '"I\'m used to waking up early." O que quer dizer?',
              ops: [
                'Estou acostumado a acordar cedo',
                'Eu acordava cedo antigamente',
                'Eu uso o despertador para acordar cedo'
              ],
              c: 0,
              exp: 'Be used to + -ing: estar acostumado.'
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: 'When I was a kid, I used to ___ a lot. Now I\'m used to ___ very little.',
              bank: ['sleep', 'sleeping', 'slept'],
              c: ['sleep', 'sleeping'],
              exp: 'Used to + verbo; be used to + -ing.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Você se acostuma."',
              r: ['You\'ll get used to it.', 'You get used to it.']
            },
            {
              t: 'escolha',
              p: 'Qual está certa?',
              ops: [
                'I\'m used to working at night.',
                'I\'m used to work at night.',
                'I used to working at night.'
              ],
              c: 0,
              exp: 'Depois de be used to, o verbo vai para o -ing.'
            },
            {
              t: 'escolha',
              p: 'Qual é a diferença entre "I used to drive on the left" e "I\'m used to driving on the left"?',
              ops: [
                'A primeira é um hábito que acabou; a segunda é estar acostumado hoje',
                'Nenhuma',
                'A primeira está no presente, e a segunda no passado'
              ],
              c: 0,
              exp: 'Os dois têm used to, mas só o primeiro fala do passado.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'I\'m getting used to it.',
              ops: ['I\'m getting used to it.', 'I used to get it.', 'I\'m getting used to them.'],
              c: 0
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Ela está acostumada com o frio."',
              r: 'She\'s used to the cold.',
              extra: ['using', 'get', 'is']
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'I wasn\'t used to the weather at all.'
            }
          ]
        }
      ]
    },
    {
      id: 'enu31',
      titulo: 'Expressões',
      conceito: 'come up with · break the ice',
      desc: 'Phrasal verbs do intermediário e as expressões idiomáticas mais comuns.',
      licoes: [
        {
          id: 'en18l3',
          titulo: 'Mais phrasal verbs',
          pre: ['en8l6'],
          exs: [
            {
              t: 'texto',
              titulo: 'Phrasal verbs do intermediário',
              blocos: [
                {
                  p: 'No nível 8, você viu os phrasal verbs do dia a dia, como get up e turn on. Daqui em diante, eles aparecem em todo lugar, e muitos não dá para adivinhar pelas partes. O jeito é aprender cada um com uma frase:'
                },
                {
                  tabela: {
                    cab: ['Phrasal verb', 'Sentido', 'Exemplo'],
                    codigo: [],
                    linhas: [
                      [
                        'come up with',
                        'ter (uma ideia), inventar',
                        '((She came up with a great idea.))'
                      ],
                      [
                        'put up with',
                        'aguentar, tolerar',
                        '((I can\'t put up with this noise.))'
                      ],
                      ['run out of', 'ficar sem', '((We\'ve run out of milk.))'],
                      ['get along with', 'se dar bem com', '((I get along with my sister.))'],
                      [
                        'figure out',
                        'descobrir, entender',
                        '((I can\'t figure out this problem.))'
                      ],
                      ['give up', 'desistir', '((Don\'t give up!))'],
                      ['turn down', 'recusar', '((She turned down the offer.))'],
                      [
                        'bring up',
                        'tocar num assunto',
                        '((Don\'t bring up politics at dinner.))'
                      ],
                      ['find out', 'descobrir uma informação', '((I found out the truth.))'],
                      [
                        'look forward to',
                        'estar ansioso por algo bom',
                        '((I look forward to seeing you.))'
                      ]
                    ]
                  }
                },
                {
                  p: '**Look forward to** é uma armadilha: o to é preposição, então vem -ing, como em ((I look forward to seeing you.)) (Mal posso esperar para te ver.) É também o fecho mais comum de e-mails formais: ((I look forward to hearing from you.)) (Aguardo seu retorno.)'
                },
                {
                  p: '**Separa ou não separa?** Em muitos phrasal verbs, o objeto pode ficar no meio: ((turn the offer down)) ou ((turn down the offer)). Mas, se o objeto for um pronome, ele **tem** que ficar no meio: ((turn it down)), nunca "turn down it". Os de três palavras, como put up with, não se separam.'
                },
                {
                  dica: 'Muitos phrasal verbs têm um sinônimo mais formal, de origem latina, que lembra o português: find out e discover, give up e abandon, put up with e tolerate. Na conversa, o phrasal verb soa mais natural; num texto formal, o sinônimo.',
                  rotulo: 'Phrasal verb ou palavra latina?'
                }
              ]
            },
            {
              t: 'escolha',
              p: '"We\'ve run out of coffee." O que aconteceu?',
              ops: [
                'O café acabou',
                'Eles saíram correndo para tomar café',
                'Eles tomaram café demais'
              ],
              c: 0,
              exp: 'Run out of: ficar sem.'
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: 'I can\'t ___ up with his jokes anymore. But I get ___ with his sister.',
              bank: ['put', 'along', 'come', 'give'],
              c: ['put', 'along'],
              exp: 'Put up with: aguentar. Get along with: se dar bem.'
            },
            { t: 'escreva', p: 'Traduza: "Não desista!"', r: ['Don\'t give up!'] },
            {
              t: 'escolha',
              p: 'Qual está certa?',
              ops: [
                'They offered me the job, but I turned it down.',
                'They offered me the job, but I turned down it.',
                'They offered me the job, but I turned it off.'
              ],
              c: 0,
              exp: 'Com pronome, o objeto fica no meio. E turn off é desligar.'
            },
            {
              t: 'escolha',
              p: 'Qual é o fecho mais comum de um e-mail formal?',
              ops: [
                'I look forward to hearing from you.',
                'I look forward to hear from you.',
                'I look forward hearing from you.'
              ],
              c: 0,
              exp: 'O to de look forward to é preposição: vem -ing.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'She came up with a great idea.',
              ops: [
                'She came up with a great idea.',
                'She came up to a great idea.',
                'She comes up with a great idea.'
              ],
              c: 0
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Eu me dou bem com os meus colegas de trabalho."',
              r: 'I get along with my [[coworkers|colleagues]].',
              extra: ['go', 'well', 'together']
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'I can\'t figure out this problem.'
            }
          ]
        },
        {
          id: 'en18l4',
          titulo: 'Expressões idiomáticas',
          pre: ['en18l3'],
          exs: [
            {
              t: 'texto',
              titulo: 'Quando as palavras não querem dizer o que dizem',
              blocos: [
                {
                  p: 'As **expressões idiomáticas** (idioms) têm um sentido que não sai das palavras, como o nosso "pagar o pato" ou "chutar o balde". Os nativos usam muitas, e elas aparecem demais em séries. Algumas têm uma prima quase igual em português; outras, nem de longe:'
                },
                {
                  tabela: {
                    cab: ['Expressão', 'Sentido', 'Em português'],
                    codigo: [],
                    linhas: [
                      ['((a piece of cake))', 'muito fácil', 'moleza'],
                      ['((break the ice))', 'quebrar o gelo', 'igualzinho'],
                      [
                        '((cost an arm and a leg))',
                        'custar muito caro',
                        'custar os olhos da cara'
                      ],
                      ['((under the weather))', 'meio doente', 'meio caído'],
                      ['((hit the books))', 'estudar muito', 'cair nos livros'],
                      ['((once in a blue moon))', 'muito raramente', 'de vez em nunca'],
                      [
                        '((let the cat out of the bag))',
                        'contar um segredo sem querer',
                        'dar com a língua nos dentes'
                      ],
                      [
                        '((the ball is in your court))',
                        'agora é com você',
                        'a bola está com você'
                      ],
                      ['((call it a day))', 'encerrar por hoje', 'dar o dia por encerrado'],
                      [
                        '((on the same page))',
                        'de acordo, entendendo do mesmo jeito',
                        'na mesma página'
                      ]
                    ]
                  }
                },
                {
                  p: '**Use com moderação.** Uma expressão bem colocada soa natural; várias na mesma frase soam como um livro de idioms. E algumas, como ((it\'s raining cats and dogs)), são mais famosas entre estudantes do que usadas pelos nativos hoje.'
                },
                {
                  dialogo: [
                    ['Mia', 'How was the exam?', 'Como foi a prova?'],
                    [
                      'Ravi',
                      'A piece of cake! I hit the books all week.',
                      'Moleza! Estudei a semana inteira.'
                    ],
                    [
                      'Mia',
                      'Nice! Let\'s celebrate. Dinner at that new place?',
                      'Boa! Vamos comemorar. Jantar naquele lugar novo?'
                    ],
                    [
                      'Ravi',
                      'I\'d love to, but it costs an arm and a leg. Pizza at my place?',
                      'Adoraria, mas lá custa os olhos da cara. Pizza lá em casa?'
                    ]
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: '"The test was a piece of cake." Como foi a prova?',
              ops: ['Muito fácil', 'Muito difícil', 'Tinha bolo'],
              c: 0,
              exp: 'A piece of cake: moleza.'
            },
            {
              t: 'escolha',
              p: '"I\'m feeling a bit under the weather." Como a pessoa está?',
              ops: ['Meio doente', 'Com calor', 'Muito feliz'],
              c: 0,
              exp: 'Under the weather: indisposto.'
            },
            {
              t: 'escolha',
              p: 'Qual é o equivalente de "custar os olhos da cara"?',
              ops: ['cost an arm and a leg', 'cost the eyes of the face', 'cost a piece of cake'],
              c: 0,
              exp: 'Em inglês, o preço é um braço e uma perna.'
            },
            {
              t: 'escolha',
              p: '"Let\'s call it a day." O que a pessoa propõe?',
              ops: ['Encerrar por hoje', 'Ligar para alguém', 'Dar um nome ao dia'],
              c: 0,
              exp: 'Call it a day: parar por hoje.'
            },
            {
              t: 'escreva',
              p: 'Traduza o sentido para o português: "I go to the gym once in a blue moon."',
              r: [
                '(Eu |)vou à academia (muito raramente|raramente|de vez em nunca|quase nunca|muito de vez em quando).',
                '(Eu |)(quase nunca|raramente) vou à academia.'
              ],
              lingua: 'pt'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'Let\'s break the ice.',
              ops: ['Let\'s break the ice.', 'Let\'s break the rice.', 'Let\'s take the ice.'],
              c: 0
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'I\'d love to, but it costs an arm and a leg.'
            }
          ]
        }
      ]
    }
  ]
});
