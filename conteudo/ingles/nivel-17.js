/* Trilha Livre · Inglês do zero · Nível 17: Certeza, dedução e o futuro (B2)
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md.
   ((frase)) tem botão de ouvir; [[americano|britânico]] muda com o sotaque escolhido. */

nivel({
  curso: 'ingles',
  n: 17,
  titulo: 'Certeza, dedução e o futuro',
  faixa: 'B2',
  desc: 'Must be, might be, can\'t be, must have been, o futuro em andamento e o já concluído, e expressões como be supposed to e be about to.',
  videos: [
    {
      titulo: 'English with Lucy',
      canal: 'Lucy Earl',
      obs: 'modals of deduction no presente e no passado',
      url: 'https://www.youtube.com/@EnglishwithLucy'
    },
    {
      titulo: 'BBC Learning English',
      canal: 'BBC',
      obs: 'future continuous e future perfect, com exemplos curtos',
      url: 'https://www.youtube.com/@bbclearningenglish'
    },
    {
      titulo: 'English in Brazil',
      canal: 'Carina Fragozo',
      obs: 'procure no canal os vídeos sobre must, might e "be supposed to"',
      url: 'https://www.youtube.com/user/carinafragozo'
    }
  ],
  unidades: [
    {
      id: 'enu28',
      titulo: 'Deduzir',
      conceito: 'must be · can\'t have',
      desc: 'Dizer o quanto você tem certeza, sobre agora e sobre o passado.',
      licoes: [
        {
          id: 'en17l1',
          titulo: 'Must, might e can\'t: deduzir o presente',
          pre: ['en11l2'],
          exs: [
            {
              t: 'texto',
              titulo: 'Quase certeza, talvez e impossível',
              blocos: [
                {
                  p: 'Os modais também servem para **deduzir**: dizer o quanto você tem certeza de algo, como o nosso "deve estar", "pode ser que" e "não pode ser":'
                },
                {
                  tabela: {
                    cab: ['Certeza', 'Modal', 'Exemplo'],
                    codigo: [],
                    linhas: [
                      [
                        'quase certeza de que sim',
                        'must',
                        '((She must be tired. She worked all night.))'
                      ],
                      [
                        'é possível',
                        'might, may, could',
                        '((He might be at home. I\'m not sure.))'
                      ],
                      ['quase certeza de que não', 'can\'t', '((That can\'t be true!))']
                    ]
                  }
                },
                {
                  p: '**O contrário de must, aqui, é can\'t**, e não mustn\'t. Mustn\'t é proibição, como você viu no nível 11. Para dizer "não pode ser verdade", é ((That can\'t be true.))'
                },
                {
                  p: '**May, might e could** são quase sinônimos nesse sentido. Might é o mais comum na conversa.'
                },
                {
                  p: 'Para uma ação em andamento, use be + -ing: ((They must be sleeping.)) (Eles devem estar dormindo.) ((She might be working.)) (Ela pode estar trabalhando.)'
                },
                {
                  dialogo: [
                    [
                      'Kai',
                      'Whose phone is this? It\'s been ringing for ages.',
                      'De quem é este celular? Está tocando faz tempo.'
                    ],
                    [
                      'Bea',
                      'It must be Tom\'s. He\'s always forgetting it.',
                      'Deve ser do Tom. Ele vive esquecendo.'
                    ],
                    [
                      'Kai',
                      'It can\'t be Tom\'s. His phone is black, and this one is red.',
                      'Não pode ser do Tom. O dele é preto, e este é vermelho.'
                    ],
                    [
                      'Bea',
                      'Then it might be Julia\'s. Let\'s ask her.',
                      'Então pode ser da Julia. Vamos perguntar a ela.'
                    ]
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Seu amigo trabalhou a noite toda. Qual frase combina?',
              ops: ['He must be tired.', 'He can\'t be tired.', 'He mustn\'t be tired.'],
              c: 0,
              exp: 'Quase certeza de que sim: must.'
            },
            {
              t: 'escolha',
              p: '"That can\'t be true!" O que quer dizer?',
              ops: ['Não pode ser verdade!', 'Isso não deve ser dito!', 'Talvez seja verdade.'],
              c: 0,
              exp: 'Can\'t é a quase certeza de que não.'
            },
            {
              t: 'escolha',
              p: 'Qual é o contrário de "She must be at work" (quase certeza de que sim)?',
              ops: [
                'She can\'t be at work.',
                'She mustn\'t be at work.',
                'She doesn\'t must be at work.'
              ],
              c: 0,
              exp: 'Para deduções, o contrário de must é can\'t.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Ele pode estar em casa." (talvez esteja)',
              r: ['He (might|may|could) be (at home|home).']
            },
            {
              t: 'escolha',
              p: '"The lights are off and nobody answers the door." O que você deduz?',
              ops: ['They must be out.', 'They can\'t be out.', 'They mustn\'t be out.'],
              c: 0,
              exp: 'Luz apagada e ninguém atende: devem ter saído.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'It must be Tom\'s.',
              ops: ['It must be Tom\'s.', 'It might be Tom\'s.', 'It mustn\'t be Tom\'s.'],
              c: 0
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Eles devem estar dormindo."',
              r: 'They must be sleeping.',
              extra: ['are', 'sleep', 'should']
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'Then it might be Julia\'s. Let\'s ask her.'
            }
          ]
        },
        {
          id: 'en17l2',
          titulo: 'Must have been: deduzir o passado',
          pre: ['en17l1', 'en16l2'],
          exs: [
            {
              t: 'texto',
              titulo: 'O que deve ter acontecido',
              blocos: [
                {
                  p: 'Para deduzir algo do passado, use o modal + **have** + particípio, a mesma estrutura do should have:'
                },
                {
                  tabela: {
                    cab: ['Certeza', 'Forma', 'Exemplo'],
                    codigo: [],
                    linhas: [
                      [
                        'quase certeza de que sim',
                        'must have',
                        '((The streets are wet. It must have rained.))'
                      ],
                      [
                        'é possível',
                        'might have, may have, could have',
                        '((She might have missed the bus.))'
                      ],
                      [
                        'quase certeza de que não',
                        'can\'t have, couldn\'t have',
                        '((He can\'t have finished already!))'
                      ]
                    ]
                  }
                },
                {
                  p: 'Compare com o português: "**deve ter** chovido", "**pode ter** perdido o ônibus", "**não pode ter** terminado". A estrutura é quase a mesma, com o have no lugar do "ter".'
                },
                {
                  p: '**Could have tem dois sentidos.** Pode ser uma dedução, como em ((She could have taken the wrong bus.)), pode ser que ela tenha pegado o ônibus errado. Ou pode ser algo que era possível, mas não aconteceu, como em ((You could have died!)), você podia ter morrido! O contexto mostra qual é.'
                },
                {
                  fala: 'Leo didn\'t come to class today. He must have overslept again.',
                  trad: 'O Leo não veio à aula hoje. Ele deve ter perdido a hora de novo.'
                },
                {
                  fala: 'Or he might have [[gotten|got]] [[sick|ill]]. He wasn\'t feeling well yesterday.',
                  trad: 'Ou ele pode ter ficado doente. Ele não estava se sentindo bem ontem.'
                },
                {
                  fala: 'He can\'t have forgotten about the test. He talked about it all week.',
                  trad: 'Ele não pode ter esquecido da prova. Falou dela a semana toda.'
                },
                {
                  dica: 'Gotten é o particípio de get nos EUA; no Reino Unido, é got. Você viu isso no nível 9.',
                  rotulo: 'Gotten ou got?'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'A rua amanheceu molhada. O que você deduz?',
              ops: [
                'It must have rained last night.',
                'It must rain last night.',
                'It can\'t have rained last night.'
              ],
              c: 0,
              exp: 'Dedução sobre o passado: must have + particípio.'
            },
            {
              t: 'escolha',
              p: '"She might have missed the bus." O que quer dizer?',
              ops: [
                'Pode ser que ela tenha perdido o ônibus',
                'Ela devia ter perdido o ônibus',
                'Ela com certeza perdeu o ônibus'
              ],
              c: 0,
              exp: 'Might have: uma possibilidade.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Ele deve ter esquecido."',
              r: ['He must have forgotten( it|).']
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: 'He ___ have finished already! He only started ten minutes ago.',
              bank: ['can\'t', 'must', 'should'],
              c: ['can\'t'],
              exp: 'Quase certeza de que não: can\'t have.'
            },
            {
              t: 'escolha',
              p: '"You could have died!" Qual é o sentido?',
              ops: [
                'Algo perigoso era possível, mas não aconteceu',
                'Uma dedução de que a pessoa morreu',
                'Um conselho'
              ],
              c: 0,
              exp: 'Aqui, could have é uma possibilidade que ficou só na possibilidade.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'He must have overslept again.',
              ops: [
                'He must have overslept again.',
                'He must have slept again.',
                'He mustn\'t have overslept again.'
              ],
              c: 0
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Ela pode ter pegado o ônibus errado."',
              r: 'She might have taken the wrong bus.',
              extra: ['take', 'can', 'took']
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'He can\'t have forgotten about the test.'
            }
          ]
        }
      ]
    },
    {
      id: 'enu29',
      titulo: 'O futuro em detalhe',
      conceito: 'I\'ll be working · I\'ll have finished',
      desc: 'O que vai estar acontecendo, o que já vai estar pronto e o que era para acontecer.',
      licoes: [
        {
          id: 'en17l3',
          titulo: 'Will be doing, will have done',
          pre: ['en4l5', 'en10l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Estarei fazendo, terei feito',
              blocos: [
                {
                  p: 'O **future continuous** (will be + -ing) é uma ação em andamento num momento do futuro, o "estarei fazendo": ((This time tomorrow, I\'ll be flying to Lisbon.)) (Amanhã a esta hora, estarei voando para Lisboa.)'
                },
                {
                  p: 'Ele também é um jeito educado de perguntar sobre planos, sem soar como um pedido: ((Will you be using the car tonight?)) soa mais leve que ((Will you use the car tonight?))'
                },
                {
                  p: 'O **future perfect** (will have + particípio) é algo que já vai estar concluído antes de um momento do futuro, o "terei feito": ((By Friday, I\'ll have finished the project.)) (Até sexta, terei terminado o projeto.)'
                },
                {
                  p: '**By** é o parceiro do future perfect: ((by Friday)), ((by the end of the year)), ((by the time you arrive)) (até a hora em que você chegar). Repare que, depois de by the time e de when, o verbo fica no presente, como depois do if.'
                },
                {
                  tabela: {
                    cab: ['Forma', 'Português', 'Exemplo'],
                    codigo: [],
                    linhas: [
                      ['will + verbo', 'farei', '((I\'ll call you.))'],
                      ['will be + -ing', 'estarei fazendo', '((I\'ll be working at nine.))'],
                      ['will have + particípio', 'terei feito', '((I\'ll have left by then.))']
                    ]
                  }
                },
                {
                  dialogo: [
                    [
                      'Dani',
                      'Can I call you tomorrow at ten?',
                      'Posso te ligar amanhã às dez?'
                    ],
                    [
                      'Hugo',
                      'Better not. I\'ll be taking an exam at ten.',
                      'Melhor não. Às dez, vou estar fazendo uma prova.'
                    ],
                    ['Dani', 'What about at one?', 'E à uma?'],
                    [
                      'Hugo',
                      'Perfect. I\'ll have finished by then, and I\'ll need someone to talk to!',
                      'Perfeito. Já vou ter terminado, e vou precisar de alguém para conversar!'
                    ]
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: '"Amanhã a esta hora, estarei tomando sol na praia." Qual forma combina com "estarei tomando"?',
              ops: ['I\'ll be sunbathing', 'I\'ll have sunbathed', 'I sunbathe'],
              c: 0,
              exp: 'Ação em andamento num momento do futuro: will be + -ing.'
            },
            {
              t: 'escolha',
              p: '"By December, I\'ll have saved enough money." O que quer dizer?',
              ops: [
                'Até dezembro, já terei economizado o suficiente',
                'Em dezembro, vou começar a economizar',
                'Eu economizava em dezembro'
              ],
              c: 0,
              exp: 'Future perfect: algo concluído antes de um momento do futuro.'
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: 'Don\'t call at nine. I\'ll be ___. Call at six: I\'ll have ___ by then.',
              bank: ['working', 'finished', 'work', 'finish'],
              c: ['working', 'finished'],
              exp: 'Will be + -ing; will have + particípio.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Até sexta, terei terminado."',
              r: [
                'By Friday, I will have finished( it|).',
                'I will have finished( it|) by Friday.'
              ]
            },
            {
              t: 'escolha',
              p: 'Qual pergunta soa mais educada, só para saber dos planos da pessoa?',
              ops: [
                'Will you be using the car tonight?',
                'Will you use the car tonight?',
                'Do you use the car tonight?'
              ],
              c: 0,
              exp: 'O future continuous pergunta pelos planos sem soar como um pedido.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'I\'ll be taking an exam at ten.',
              ops: [
                'I\'ll be taking an exam at ten.',
                'I\'ll take an exam at ten.',
                'I\'ll be taking an exam at two.'
              ],
              c: 0
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Quando você chegar, eu já terei saído."',
              r: 'When you arrive, I\'ll have left.',
              extra: ['will', 'arrived', 'leave'],
              exp: 'Depois de when, o verbo fica no presente: when you arrive.'
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'I\'ll have finished by then.'
            }
          ]
        },
        {
          id: 'en17l4',
          titulo: 'Be about to, be supposed to, be likely to',
          pre: ['en17l3'],
          exs: [
            {
              t: 'texto',
              titulo: 'O que vai acontecer e o que era para acontecer',
              blocos: [
                {
                  p: 'Algumas expressões com be são usadíssimas para falar do futuro e do que se espera. A que mais faz falta para brasileiros é **be supposed to**, porque o português não tem uma igual.'
                },
                {
                  p: '**Be supposed to** fala do que **era esperado**, por uma regra, um combinado ou um costume, muitas vezes quando a realidade é outra: ((The bus was supposed to come at eight.)) (Era para o ônibus vir às oito.) ((You\'re not supposed to park here.)) (Não é para estacionar aqui.) ((What am I supposed to do?)) (O que eu deveria fazer?)'
                },
                {
                  p: '**Be about to** é algo que vai acontecer agora mesmo: ((Hurry up! The movie is about to start.)) Com was, mostra o que quase aconteceu, mas foi interrompido: ((I was about to call you!)) (Eu ia te ligar agora mesmo!)'
                },
                {
                  p: '**Be likely to** é "ser provável", e o contrário é unlikely: ((Prices are likely to go up.)) ((She\'s unlikely to come.))'
                },
                {
                  p: 'Mais duas, comuns em notícias e avisos: ((be due to)), estar previsto para, como em ((The train is due to arrive at five.)), e ((be bound to)), com certeza vai, como em ((He\'s bound to find out.)) (Uma hora ele vai descobrir.)'
                },
                {
                  fala: 'I was about to leave when my boss called me into a meeting.',
                  trad: 'Eu estava saindo quando o meu chefe me chamou para uma reunião.'
                },
                {
                  fala: 'The meeting was supposed to take ten minutes. It took two hours.',
                  trad: 'Era para a reunião levar dez minutos. Levou duas horas.'
                },
                {
                  fala: 'And it\'s likely to happen again next week.',
                  trad: 'E é provável que aconteça de novo semana que vem.'
                }
              ]
            },
            {
              t: 'escolha',
              p: '"The bus was supposed to come at eight." O que quer dizer?',
              ops: [
                'Era para o ônibus vir às oito, e provavelmente não veio',
                'O ônibus vem às oito, com certeza',
                'O ônibus supôs que viria às oito'
              ],
              c: 0,
              exp: 'Be supposed to: o que era esperado.'
            },
            {
              t: 'escolha',
              p: '"I was about to call you!" O que quer dizer?',
              ops: ['Eu ia te ligar agora mesmo!', 'Eu te liguei sobre isso', 'Eu te liguei ontem'],
              c: 0,
              exp: 'Was about to: estava prestes a.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Não é para estacionar aqui."',
              r: [
                '(You\'re|You are) not supposed to park here.',
                'You aren\'t supposed to park here.'
              ]
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: 'Hurry up! The movie is ___ to start. Prices are ___ to go up next year.',
              bank: ['about', 'likely', 'supposed'],
              c: ['about', 'likely']
            },
            {
              t: 'escolha',
              p: '"She\'s unlikely to come." O que quer dizer?',
              ops: ['É pouco provável que ela venha', 'Ela não gosta de vir', 'Ela com certeza vem'],
              c: 0,
              exp: 'Unlikely: improvável.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'The train is due to arrive at five.',
              ops: [
                'The train is due to arrive at five.',
                'The train is due to arrive at nine.',
                'The train is about to arrive.'
              ],
              c: 0
            },
            {
              t: 'monte',
              p: 'Monte a pergunta: "O que eu deveria fazer?"',
              r: 'What am I supposed to do?',
              extra: ['should', 'suppose', 'make']
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'The meeting was supposed to take ten minutes.'
            }
          ]
        }
      ]
    }
  ]
});
