/* Trilha Livre · Inglês do zero · Nível 21: Estruturas avançadas (C1)
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md.
   ((frase)) tem botão de ouvir; [[americano|britânico]] muda com o sotaque escolhido. */

nivel({
  curso: 'ingles',
  n: 21,
  titulo: 'Estruturas avançadas',
  faixa: 'C1',
  desc: 'Inversão para dar ênfase, frases clivadas, a passiva das notícias (it is said that) e as orações reduzidas: o inglês de textos, discursos e reportagens.',
  videos: [
    {
      titulo: 'English with Lucy',
      canal: 'Lucy Earl',
      obs: 'inversão, frases clivadas e outras estruturas do inglês avançado',
      url: 'https://www.youtube.com/@EnglishwithLucy'
    },
    {
      titulo: 'BBC Learning English',
      canal: 'BBC',
      obs: 'a passiva com said, believed e thought, comum em notícias',
      url: 'https://www.youtube.com/@bbclearningenglish'
    },
    {
      tipo: 'texto',
      titulo: 'Dicionário Cambridge',
      canal: 'Cambridge',
      obs: 'a seção de gramática do site explica cada estrutura com exemplos',
      url: 'https://dictionary.cambridge.org/pt/'
    }
  ],
  unidades: [
    {
      id: 'enu34',
      titulo: 'Ênfase e estilo',
      conceito: 'Never have I · What I need is',
      desc: 'Mudar a ordem da frase para destacar uma ideia.',
      licoes: [
        {
          id: 'en21l1',
          titulo: 'Inversão: never have I seen',
          pre: ['en10l2', 'en16l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'A ordem de pergunta numa afirmação',
              blocos: [
                {
                  p: 'No inglês formal e em discursos, algumas palavras negativas ou restritivas vão para o começo da frase, para dar **ênfase**. Quando isso acontece, o resto da frase fica na **ordem de pergunta**, com o auxiliar antes do sujeito:'
                },
                {
                  tabela: {
                    cab: ['Normal', 'Com inversão'],
                    codigo: [],
                    linhas: [
                      [
                        '((I have never seen anything like it.))',
                        '((Never have I seen anything like it.))'
                      ],
                      ['((I rarely eat meat.))', '((Rarely do I eat meat.))'],
                      [
                        '((She not only sings, but she also writes songs.))',
                        '((Not only does she sing, but she also writes songs.))'
                      ],
                      [
                        '((I had just arrived when it started to rain.))',
                        '((No sooner had I arrived than it started to rain.))'
                      ],
                      ['((We understood only then.))', '((Only then did we understand.))']
                    ]
                  }
                },
                {
                  p: '**Por que isso existe?** É um resto do inglês antigo, que invertia muito mais, como o alemão faz até hoje. Hoje, a inversão ficou como um recurso de estilo: soa formal, dramática ou literária. Na conversa do dia a dia, quase ninguém fala assim.'
                },
                {
                  p: '**Também nas condicionais**, de um jeito formal, o if pode sumir com a inversão: ((Had I known, I would have called.)) (= If I had known.) ((Should you need help, call us.)) (= If you should need help: caso precise de ajuda.) ((Were I in your position, I would accept.)) (= If I were...)'
                },
                {
                  p: 'Você vai encontrar isso em contratos, e-mails formais, discursos e livros: ((Should you have any questions, please do not hesitate to contact me.)) é um fecho clássico de e-mail formal.'
                },
                {
                  fala: 'Not only did she finish the marathon, but she also broke her own record.',
                  trad: 'Ela não só terminou a maratona, como também bateu o próprio recorde.'
                },
                {
                  fala: 'Little did they know that the old map was a fake.',
                  trad: 'Mal sabiam eles que o mapa antigo era falso.'
                },
                {
                  dica: 'Little did I know é um jeito muito comum de começar uma reviravolta numa história: "mal sabia eu que...". Aparece em livros, filmes e até em posts de redes sociais.',
                  rotulo: 'Little did I know'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual é a versão com inversão de "I have never been so happy"?',
              ops: [
                'Never have I been so happy.',
                'Never I have been so happy.',
                'Never been I have so happy.'
              ],
              c: 0,
              exp: 'Depois de never no começo, vem a ordem de pergunta: have I.'
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: 'Not only ___ she speak French, but she also speaks Japanese. Rarely ___ I see such talent.',
              bank: ['does', 'do', 'is', 'am'],
              c: ['does', 'do'],
              exp: 'Sem outro auxiliar, a inversão usa do e does, como numa pergunta.'
            },
            {
              t: 'escolha',
              p: '"Had I known, I would have called." O que quer dizer?',
              ops: [
                'Se eu soubesse, teria ligado',
                'Eu sabia, então liguei',
                'Eu tinha que saber antes de ligar'
              ],
              c: 0,
              exp: 'Had I known é o mesmo que If I had known.'
            },
            {
              t: 'escolha',
              p: '"Should you need anything, please let me know." Qual é o sentido?',
              ops: [
                'Caso precise de algo, me avise',
                'Você deveria precisar de algo',
                'Você precisa me avisar'
              ],
              c: 0,
              exp: 'Should you need: um "caso você precise" formal.'
            },
            {
              t: 'escolha',
              p: 'Onde a inversão aparece mais?',
              ops: [
                'Em textos formais, discursos e livros',
                'Em mensagens entre amigos',
                'Só em perguntas'
              ],
              c: 0,
              exp: 'É um recurso de estilo; na conversa, é raro.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'Little did they know that the old map was a fake.',
              ops: [
                'Little did they know that the old map was a fake.',
                'Little they knew that the old map was a fake.',
                'Little did they know that the whole map was a fake.'
              ],
              c: 0
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Mal sabia eu que ela era a chefe."',
              r: 'Little did I know that she was the boss.',
              extra: ['knew', 'was', 'I']
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'Not only did she finish the marathon, but she also broke her own record.'
            }
          ]
        },
        {
          id: 'en21l2',
          titulo: 'Frases clivadas: what I need is...',
          pre: ['en21l1', 'en13l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Foi a Ana que...',
              blocos: [
                {
                  p: 'O português adora destacar uma parte da frase com "foi... que" e "o que... é": "**Foi a Ana que** ligou", "**O que** eu preciso **é** de férias". O inglês faz o mesmo, com as **frases clivadas** (cleft sentences):'
                },
                {
                  tabela: {
                    cab: ['Estrutura', 'Exemplo', 'O que destaca'],
                    codigo: [],
                    linhas: [
                      ['It was... who/that', '((It was Ana who called, not Bia.))', 'quem fez'],
                      ['What... is/was', '((What I need is a vacation.))', 'a coisa'],
                      ['All... is', '((All I want is some peace and quiet.))', 'que é só isso'],
                      [
                        'The reason why... is',
                        '((The reason why I left is simple.))',
                        'o motivo'
                      ],
                      [
                        'The thing is...',
                        '((The thing is, I don\'t have time.))',
                        'o problema'
                      ]
                    ]
                  }
                },
                {
                  p: '**Por que usar?** Elas servem para corrigir alguém, contrastar ou deixar claro o que é importante: ((It wasn\'t me who broke it. It was the cat!)) Na fala, a palavra destacada recebe a força da voz.'
                },
                {
                  p: '**What para ações** usa do: ((What I did was call the police.)) (O que eu fiz foi chamar a polícia.) ((What you should do is talk to her.))'
                },
                {
                  p: '**The thing is** é uma das expressões mais comuns da conversa para introduzir um problema ou uma explicação: ((I\'d love to come. The thing is, I have an exam tomorrow.))'
                },
                {
                  dialogo: [
                    [
                      'Leo',
                      'So you decided to quit your job?',
                      'Então você decidiu largar o emprego?'
                    ],
                    [
                      'Ivy',
                      'It wasn\'t the job I hated. It was the commute.',
                      'Não era o emprego que eu odiava. Era o trajeto.'
                    ],
                    [
                      'Leo',
                      'And what are you going to do now?',
                      'E o que você vai fazer agora?'
                    ],
                    [
                      'Ivy',
                      'What I really want is to work closer to home. All I need is a decent salary and a short bus ride.',
                      'O que eu quero mesmo é trabalhar mais perto de casa. Tudo de que eu preciso é um salário decente e um trajeto curto de ônibus.'
                    ]
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: '"Foi o Pedro que quebrou, e não eu." Como fica?',
              ops: [
                'It was Pedro who broke it, not me.',
                'Was Pedro that broke it, not me.',
                'It was Pedro what broke it, not me.'
              ],
              c: 0,
              exp: 'It was + quem + who/that.'
            },
            {
              t: 'escolha',
              p: '"What I need is a coffee." O que a frase destaca?',
              ops: [
                'A coisa de que a pessoa precisa: um café',
                'Uma pergunta sobre café',
                'Que a pessoa não quer café'
              ],
              c: 0,
              exp: 'What... is destaca a coisa.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Tudo o que eu quero é dormir."',
              r: ['All I want is to sleep.', 'All I want to do is sleep.', 'All I want is sleep.']
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: '___ I did was call the police. The ___ is, nobody believed me.',
              bank: ['What', 'thing', 'That', 'reason'],
              c: ['What', 'thing'],
              exp: 'What I did was...; The thing is...'
            },
            {
              t: 'escolha',
              p: '"I\'d love to go. The thing is, I\'m broke." Para que serve o "the thing is"?',
              ops: [
                'Para introduzir o problema, o motivo de não ir',
                'Para dizer o nome de uma coisa',
                'Para encerrar a conversa'
              ],
              c: 0,
              exp: 'The thing is: o problema é que...'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'It wasn\'t the job I hated. It was the commute.',
              ops: [
                'It wasn\'t the job I hated. It was the commute.',
                'It wasn\'t the job I hated. It was the computer.',
                'It was the job I hated. It wasn\'t the commute.'
              ],
              c: 0
            },
            {
              t: 'monte',
              p: 'Monte a frase: "O que você devia fazer é falar com ela."',
              r: 'What you should do is talk to her.',
              extra: ['That', 'are', 'speak']
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'All I need is a decent salary.'
            }
          ]
        }
      ]
    },
    {
      id: 'enu35',
      titulo: 'O inglês das notícias e dos livros',
      conceito: 'is said to · having finished',
      desc: 'A passiva das reportagens e as orações reduzidas.',
      licoes: [
        {
          id: 'en21l3',
          titulo: 'A passiva das notícias: it is said that',
          pre: ['en14l1', 'en15l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Dizem que, acredita-se que',
              blocos: [
                {
                  p: 'Notícias e textos acadêmicos muitas vezes contam o que "dizem", "acreditam" ou "esperam", sem dizer quem. Para isso, o inglês usa a passiva com verbos como **say, believe, think, know, expect, report**. Há dois jeitos:'
                },
                {
                  tabela: {
                    cab: ['Estrutura', 'Exemplo', 'Português'],
                    codigo: [],
                    linhas: [
                      [
                        'It is + particípio + that...',
                        '((It is said that the house is haunted.))',
                        'Dizem que a casa é assombrada.'
                      ],
                      [
                        'Sujeito + is + particípio + to...',
                        '((The house is said to be haunted.))',
                        'A casa é tida como assombrada.'
                      ]
                    ]
                  }
                },
                {
                  p: 'O segundo jeito é mais elegante e muito comum na imprensa: ((The president is expected to speak tomorrow.)) (O presidente deve falar amanhã.) ((The painting is believed to be worth millions.)) (Acredita-se que o quadro valha milhões.)'
                },
                {
                  p: '**Para o passado**, use to have + particípio: ((He is thought to have left the country.)) (Acredita-se que ele tenha deixado o país.) ((The temple is believed to have been built in the 12th century.)) (Acredita-se que o templo tenha sido construído no século 12.)'
                },
                {
                  p: '**Por que a imprensa ama essa forma?** Ela permite contar uma informação sem afirmar que ela é verdade nem dizer quem é a fonte. Ao ler, repare nisso: is said to não é o mesmo que is.'
                },
                {
                  fala: 'The fire is believed to have started in the kitchen. No one is reported to have been injured.',
                  trad: 'Acredita-se que o incêndio tenha começado na cozinha. Não há relatos de feridos.'
                },
                {
                  fala: 'The restaurant is expected to reopen next month.',
                  trad: 'A previsão é de que o restaurante reabra no mês que vem.'
                }
              ]
            },
            {
              t: 'escolha',
              p: '"The house is said to be haunted." O que quer dizer?',
              ops: [
                'Dizem que a casa é assombrada',
                'A casa disse que é assombrada',
                'A casa com certeza é assombrada'
              ],
              c: 0,
              exp: 'Is said to: dizem que, sem afirmar que é verdade.'
            },
            {
              t: 'escolha',
              p: '"He is thought to have left the country." Quando ele saiu?',
              ops: [
                'No passado: acredita-se que ele já tenha saído',
                'Ele vai sair no futuro',
                'Ele está saindo agora'
              ],
              c: 0,
              exp: 'To have + particípio leva a ideia para o passado.'
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: 'The minister is ___ to arrive at noon. It is ___ that he will announce new measures.',
              bank: ['expected', 'believed', 'expecting', 'believing'],
              c: ['expected', 'believed'],
              exp: 'Passiva: is expected, is believed.'
            },
            {
              t: 'escreva',
              p: 'Reescreva começando com "The painting": "People believe that the painting is worth millions."',
              r: ['The painting is believed to be worth millions.']
            },
            {
              t: 'escolha',
              p: 'Por que a imprensa usa tanto "is said to" e "is believed to"?',
              ops: [
                'Para contar uma informação sem afirmar que é verdade nem citar a fonte',
                'Porque é mais curto',
                'Porque é informal'
              ],
              c: 0,
              exp: 'É uma forma de cautela: o jornal relata, mas não garante.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'The fire is believed to have started in the kitchen.',
              ops: [
                'The fire is believed to have started in the kitchen.',
                'The fire is believed to start in the kitchen.',
                'The fire believed to have started in the kitchen.'
              ],
              c: 0
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'The restaurant is expected to reopen next month.'
            }
          ]
        },
        {
          id: 'en21l4',
          titulo: 'Orações reduzidas: having finished',
          pre: ['en21l3', 'en13l2'],
          exs: [
            {
              t: 'texto',
              titulo: 'Menos palavras, mesmo sentido',
              blocos: [
                {
                  p: 'Na escrita, o inglês muitas vezes **reduz** uma oração usando só o particípio ou o -ing, sem sujeito nem conjunção. O português faz o mesmo: "**Terminado** o relatório, ela foi embora", "**Sentindo-se** cansado, fui dormir".'
                },
                {
                  tabela: {
                    cab: ['Oração completa', 'Reduzida'],
                    codigo: [],
                    linhas: [
                      [
                        '((Because I felt tired, I went to bed.))',
                        '((Feeling tired, I went to bed.))'
                      ],
                      [
                        '((After she had finished the report, she left.))',
                        '((Having finished the report, she left.))'
                      ],
                      [
                        '((The book, which was written in eighteen ninety, is still popular.))',
                        '((Written in eighteen ninety, the book is still popular.))'
                      ],
                      [
                        '((The man who is sitting by the window is my uncle.))',
                        '((The man sitting by the window is my uncle.))'
                      ]
                    ]
                  }
                },
                {
                  p: '**-ing** é para a ação de quem é o sujeito: ((Walking home, I saw an accident.)) (Voltando a pé para casa, vi um acidente.) **Particípio** (written, made, built) é para o sentido passivo: ((Made in Brazil, the shoes are sold all over the world.))'
                },
                {
                  p: '**Having + particípio** mostra que algo aconteceu antes: ((Having lived in London, she knows the city well.)) (Tendo morado em Londres, ela conhece bem a cidade.)'
                },
                {
                  p: '**O cuidado de sempre:** o sujeito escondido na oração reduzida tem que ser o mesmo da frase principal. Em "Walking home, the rain started", parece que foi a chuva que estava andando para casa! O certo é ((Walking home, I got caught in the rain.))'
                },
                {
                  fala: 'Founded in the nineteenth century, the university has trained generations of scientists.',
                  trad: 'Fundada no século 19, a universidade formou gerações de cientistas.'
                },
                {
                  fala: 'Having grown up by the sea, she has always loved swimming.',
                  trad: 'Por ter crescido perto do mar, ela sempre adorou nadar.'
                }
              ]
            },
            {
              t: 'escolha',
              p: '"Feeling tired, I went to bed." O que quer dizer?',
              ops: [
                'Como eu estava cansado, fui dormir',
                'Fui dormir e acordei cansado',
                'Senti que a cama estava cansada'
              ],
              c: 0,
              exp: 'Feeling tired = because I felt tired.'
            },
            {
              t: 'escolha',
              p: 'Qual frase está certa?',
              ops: [
                'Walking home, I got caught in the rain.',
                'Walking home, the rain started.',
                'Walked home, I got caught in the rain.'
              ],
              c: 0,
              exp: 'Quem estava andando para casa era eu, e não a chuva.'
            },
            {
              t: 'escreva',
              p: 'Reduza a oração: "After he had finished the exam, he went home." (comece com Having)',
              r: ['Having finished the exam, he went home.']
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: '___ in 1890, the book is still popular. ___ by the window, the old man watched the rain.',
              bank: ['Written', 'Sitting', 'Writing', 'Sat'],
              c: ['Written', 'Sitting'],
              exp: 'O livro foi escrito (sentido passivo). O homem estava sentado, fazendo a ação.'
            },
            {
              t: 'escolha',
              p: '"Having lived in London, she knows the city well." Por que having lived?',
              ops: [
                'Mostra que morar lá aconteceu antes de conhecer bem a cidade',
                'Mostra que ela mora lá agora',
                'Mostra um plano para o futuro'
              ],
              c: 0,
              exp: 'Having + particípio: uma ação anterior.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'Founded in the nineteenth century, the university has trained generations of scientists.',
              ops: [
                'Founded in the nineteenth century, the university has trained generations of scientists.',
                'Found in the nineteenth century, the university has trained generations of scientists.',
                'Founded in the ninetieth century, the university has trained generations of scientists.'
              ],
              c: 0
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'Having grown up by the sea, she has always loved swimming.'
            }
          ]
        }
      ]
    }
  ]
});
