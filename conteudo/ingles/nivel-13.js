/* Trilha Livre · Inglês do zero · Nível 13: Frases mais longas (B1)
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md.
   ((frase)) tem botão de ouvir; [[americano|britânico]] muda com o sotaque escolhido. */

nivel({
  curso: 'ingles',
  n: 13,
  titulo: 'Frases mais longas',
  faixa: 'B1',
  desc: 'Orações com who, which, that, where e whose, gerúndio ou infinitivo depois de um verbo, e os conectores que ligam as ideias.',
  videos: [
    {
      titulo: 'English with Lucy',
      canal: 'Lucy Earl',
      obs: 'relative clauses e a lista de verbos que pedem -ing ou to',
      url: 'https://www.youtube.com/@EnglishwithLucy'
    },
    {
      titulo: 'BBC Learning English',
      canal: 'BBC',
      obs: 'linking words em vídeos curtos, com exemplos de textos reais',
      url: 'https://www.youtube.com/@bbclearningenglish'
    },
    {
      titulo: 'Small Advantages',
      canal: 'Gavin Roy',
      obs: 'dúvidas de gramática explicadas em português',
      url: 'https://www.youtube.com/@SmallAdvantages'
    }
  ],
  unidades: [
    {
      id: 'enu21',
      titulo: 'A pessoa que, o lugar onde',
      conceito: 'who · which · that · whose',
      desc: 'As orações relativas: como dizer qual pessoa, qual coisa, qual lugar.',
      licoes: [
        {
          id: 'en13l1',
          titulo: 'Who, which e that',
          pre: ['en5l4', 'en2l6'],
          exs: [
            {
              t: 'texto',
              titulo: 'A pessoa que, a coisa que',
              blocos: [
                {
                  p: 'Em português, "que" serve para tudo: o homem **que** mora ali, o livro **que** eu li. Em inglês, a palavra depende do que se fala:'
                },
                {
                  tabela: {
                    cab: ['Palavra', 'Para', 'Exemplo'],
                    codigo: [],
                    linhas: [
                      ['who', 'pessoas', '((The woman who lives next door is a doctor.))'],
                      ['which', 'coisas e animais', '((The book which I bought is great.))'],
                      [
                        'that',
                        'pessoas ou coisas, e é o mais comum na fala',
                        '((The movie that we watched was long.))'
                      ]
                    ]
                  }
                },
                {
                  p: 'Essas frases se chamam **orações relativas**: elas dizem **qual** pessoa ou coisa. Sem elas, "the woman is a doctor" deixa a dúvida: que mulher?'
                },
                {
                  p: '**O que pode sumir.** Quando o who, which ou that é o **objeto** do verbo seguinte, ou seja, quando outra pessoa faz a ação, ele pode cair, e na fala quase sempre cai: ((The book I bought is great.)) ((The guy you met yesterday is my cousin.)) Quando ele é o **sujeito**, não pode cair: em ((The woman who lives next door...)), quem mora é ela, então o who precisa ficar.'
                },
                {
                  p: '**Um truque:** se depois do who, which ou that vem outro sujeito (I, you, we, my friend...), dá para tirar. Se vem direto um verbo, não dá.'
                },
                {
                  p: '**Não repita o pronome.** No português falado, às vezes dizemos "o livro que eu li **ele**". Em inglês, o which ou that já ocupa o lugar do objeto: ((the book that I read)), nunca "the book that I read it".'
                },
                {
                  dialogo: [
                    [
                      'Nina',
                      'Who\'s the guy who was talking to you at the party?',
                      'Quem é o cara que estava falando com você na festa?'
                    ],
                    [
                      'Lucas',
                      'Oh, that\'s Ben. He\'s the friend I told you about, the one who plays in a band.',
                      'Ah, é o Ben. É o amigo de quem eu te falei, o que toca numa banda.'
                    ],
                    [
                      'Nina',
                      'The band that played at the festival last year?',
                      'A banda que tocou no festival do ano passado?'
                    ],
                    [
                      'Lucas',
                      'Exactly. The song you love is theirs!',
                      'Isso. A música que você ama é deles!'
                    ]
                  ]
                },
                {
                  dica: 'Repare em "the friend I told you about": a preposição foi para o fim da frase. Em inglês, isso é o normal na fala: the person I work with, the city I come from. O português põe a preposição antes: a pessoa com quem trabalho.',
                  rotulo: 'A preposição no fim'
                }
              ]
            },
            {
              t: 'complete',
              p: 'Complete com who ou which:',
              code: 'The teacher ___ helped me is from Recife. The bus ___ goes to the airport is late.',
              bank: ['who', 'which', 'what', 'where'],
              c: ['who', 'which'],
              exp: 'Pessoa: who. Coisa: which.'
            },
            {
              t: 'escolha',
              p: 'Em qual destas frases o "that" pode sumir?',
              ops: [
                'The movie that we watched was long.',
                'The man that lives here is nice.',
                'The dog that bit me was big.'
              ],
              c: 0,
              exp: 'Em the movie that we watched, depois do that vem outro sujeito (we). Nas outras, o that é o sujeito do verbo.'
            },
            {
              t: 'escolha',
              p: 'Qual está certa?',
              ops: [
                'This is the book I read last week.',
                'This is the book I read it last week.',
                'This is the book what I read last week.'
              ],
              c: 0,
              exp: 'O pronome não se repete, e what não serve como "que" aqui.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "A mulher que mora ao lado é médica."',
              r: ['The woman (who|that) lives next door is a doctor.'],
              exp: 'Quem mora é ela, então o who (ou that) não pode cair.'
            },
            {
              t: 'monte',
              p: 'Monte a frase: "O cara que você conheceu ontem é meu primo."',
              r: [
                'The guy you met yesterday is my cousin.',
                'The guy (that|who) you met yesterday is my cousin.'
              ],
              extra: ['him', 'which', 'what'],
              exp: 'Depois de "the guy" vem outro sujeito (you), então o that pode cair.'
            },
            {
              t: 'escolha',
              p: 'Qual é o problema em "the woman which works with me"?',
              ops: [
                'Which é para coisas; para pessoas, use who ou that',
                'Nenhum problema',
                'Falta um it no fim'
              ],
              c: 0,
              exp: 'Para pessoas: who ou that.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'He\'s the friend I told you about.',
              ops: [
                'He\'s the friend I told you about.',
                'He\'s the friend I told you a lot.',
                'He\'s the friend who told me about.'
              ],
              c: 0
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'The song you love is theirs!'
            }
          ]
        },
        {
          id: 'en13l2',
          titulo: 'Where, whose e as vírgulas',
          pre: ['en13l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Onde, cujo e a informação extra',
              blocos: [
                {
                  p: '**Where** é "onde", para lugares: ((This is the restaurant where we met.)) (Este é o restaurante onde a gente se conheceu.)'
                },
                {
                  p: '**Whose** é "cujo", ou, como falamos de verdade, "que tem o... dele": ((I have a friend whose father is a pilot.)) (Tenho um amigo cujo pai é piloto.) No português falado, "cujo" quase sumiu; em inglês, whose é comum na conversa. Não confunda com who\'s, que é who is.'
                },
                { p: '**Com vírgulas, a informação é extra.** Compare:' },
                {
                  tabela: {
                    cab: ['Frase', 'Sentido'],
                    codigo: [],
                    linhas: [
                      [
                        '((My sister who lives in Lisbon is a nurse.))',
                        'Tenho mais de uma irmã; falo da que mora em Lisboa.'
                      ],
                      [
                        '((My sister, who lives in Lisbon, is a nurse.))',
                        'Tenho uma irmã só; morar em Lisboa é um detalhe a mais.'
                      ]
                    ]
                  }
                },
                {
                  p: 'Entre vírgulas, that não pode ser usado, e o who ou which nunca cai: ((My phone, which I bought last year, is already slow.))'
                },
                {
                  p: '**Which para a frase toda.** Depois de vírgula, which pode se referir a tudo o que veio antes, como o nosso "o que": ((He passed the exam, which surprised everyone.)) (Ele passou na prova, o que surpreendeu todo mundo.) Aqui, "what" seria errado.'
                },
                {
                  fala: 'Salvador is the city where I was born. It\'s a place whose history you can feel on every street.',
                  trad: 'Salvador é a cidade onde eu nasci. É um lugar cuja história dá para sentir em cada rua.'
                },
                {
                  fala: 'My grandmother, who still lives there, makes the best food in town, which is why I visit her so often.',
                  trad: 'Minha avó, que ainda mora lá, faz a melhor comida da cidade, e é por isso que eu visito ela com tanta frequência.'
                },
                {
                  dica: 'Na escrita, as vírgulas mudam o sentido, como você viu. Na fala, elas viram pequenas pausas: ouça de novo a frase da avó e repare na pausa antes e depois de who still lives there.',
                  rotulo: 'Ouça as vírgulas'
                }
              ]
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: 'This is the café ___ we met. Ana is the girl ___ brother plays the drums.',
              bank: ['where', 'whose', 'who', 'which'],
              c: ['where', 'whose'],
              exp: 'Lugar: where. O irmão dela: whose.'
            },
            {
              t: 'escolha',
              p: '"Tenho um amigo cujo pai é piloto." Como fica?',
              ops: [
                'I have a friend whose father is a pilot.',
                'I have a friend who\'s father is a pilot.',
                'I have a friend which father is a pilot.'
              ],
              c: 0,
              exp: 'Who\'s é who is. O "cujo" é whose.'
            },
            {
              t: 'escolha',
              p: '"My brother, who lives in Canada, is an engineer." O que as vírgulas mostram?',
              ops: [
                'Que tenho um irmão só, e morar no Canadá é um detalhe a mais',
                'Que tenho vários irmãos',
                'Nada: as vírgulas não mudam o sentido'
              ],
              c: 0,
              exp: 'Com vírgulas, a informação é extra: não serve para escolher entre vários irmãos.'
            },
            {
              t: 'escolha',
              p: '"Ela chegou atrasada, o que irritou o chefe." Como fica?',
              ops: [
                'She arrived late, which annoyed the boss.',
                'She arrived late, what annoyed the boss.',
                'She arrived late, that annoyed the boss.'
              ],
              c: 0,
              exp: 'Para retomar a frase toda, o inglês usa which, depois de vírgula.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Este é o restaurante onde a gente se conheceu."',
              r: ['This is the restaurant where we (met|first met).']
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'That\'s the town where I grew up.',
              ops: [
                'That\'s the town where I grew up.',
                'That\'s the town were I grew up.',
                'That\'s the town where I go up.'
              ],
              c: 0
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Ele passou, o que surpreendeu todo mundo."',
              r: 'He passed, which surprised everyone.',
              extra: ['what', 'that', 'who']
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'Salvador is the city where I was born.'
            }
          ]
        }
      ]
    },
    {
      id: 'enu22',
      titulo: 'Verbos e conectores',
      conceito: 'enjoy doing · although',
      desc: 'Gerúndio ou infinitivo depois de um verbo, e as palavras que ligam as ideias.',
      licoes: [
        {
          id: 'en13l3',
          titulo: 'Gerúndio ou infinitivo: enjoy doing, want to do',
          pre: ['en4l4'],
          exs: [
            {
              t: 'texto',
              titulo: 'Quando dois verbos se encontram',
              blocos: [
                {
                  p: 'Em português, o segundo verbo fica quase sempre no infinitivo: gosto de **ler**, quero **viajar**, parei de **fumar**. Em inglês, o segundo verbo pode ser **to + verbo** ou **verbo + -ing**, e quem decide é o primeiro verbo.'
                },
                {
                  tabela: {
                    cab: ['Depois destes: -ing', 'Depois destes: to + verbo'],
                    codigo: [],
                    linhas: [
                      ['((I enjoy reading.))', '((I want to travel.))'],
                      ['((Did you finish eating?))', '((I need to go.))'],
                      ['((Do you mind waiting?))', '((She decided to stay.))'],
                      ['((Avoid using your phone.))', '((We hope to see you soon.))'],
                      ['((Keep trying!))', '((I plan to move.))'],
                      ['((He suggested going out.))', '((I\'m learning to drive.))']
                    ]
                  }
                },
                {
                  p: '**Existe uma lógica?** Em boa parte dos casos, sim. O **to** aponta para a frente, para algo que ainda vai acontecer: querer, precisar, decidir, esperar, planejar, aprender. O **-ing** fala da ação como uma atividade que já existe: gostar dela, terminá-la, evitá-la, continuar nela. A lógica não funciona para todos os verbos, mas ajuda a lembrar da maioria.'
                },
                {
                  p: '**Depois de preposição, sempre -ing**: ((I\'m interested in learning Spanish.)) ((Thanks for helping me.)) ((She left without saying goodbye.)) Um erro muito comum é dizer "thanks for help me".'
                },
                {
                  p: '**Como sujeito, também -ing**: ((Swimming is good for you.)) (Nadar faz bem.) O português usa o infinitivo; o inglês, o -ing.'
                },
                {
                  p: '**Like, love, hate e start** aceitam os dois, quase sem mudar o sentido: ((I like cooking.)) ou ((I like to cook.))'
                },
                { p: '**Stop muda tudo:**' },
                {
                  tabela: {
                    cab: ['Frase', 'Sentido'],
                    codigo: [],
                    linhas: [
                      ['((I stopped smoking.))', 'Parei de fumar.'],
                      ['((I stopped to smoke.))', 'Parei o que estava fazendo para fumar.']
                    ]
                  }
                },
                {
                  p: '**Remember e forget** também mudam: ((Remember to call her.)) é lembrar de fazer algo que ainda vai acontecer; ((I remember calling her.)) é lembrar de algo que já aconteceu.'
                },
                {
                  dica: 'Would like, o "gostaria" educado, pede to: I would like to order. É diferente de like, que aceita os dois.',
                  rotulo: 'Would like'
                }
              ]
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: 'I enjoy ___, but I want ___ more.',
              bank: ['reading', 'to travel', 'to read', 'travel'],
              c: ['reading', 'to travel'],
              exp: 'Enjoy pede -ing. Want pede to.'
            },
            {
              t: 'escolha',
              p: 'Qual está certa?',
              ops: ['Thanks for helping me.', 'Thanks for help me.', 'Thanks for to help me.'],
              c: 0,
              exp: 'Depois de preposição (for), sempre -ing.'
            },
            {
              t: 'escolha',
              p: '"I stopped to buy coffee." O que aconteceu?',
              ops: [
                'Parei o que estava fazendo para comprar café',
                'Parei de comprar café',
                'Nunca comprei café'
              ],
              c: 0,
              exp: 'Stop + to: parar para fazer outra coisa. Stop + -ing: parar de fazer.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Eu preciso ir."',
              r: ['I need to go.', 'I have to go.', 'I\'ve got to go.', 'I gotta go.']
            },
            {
              t: 'escreva',
              p: 'Traduza: "Nadar faz bem para você."',
              r: ['Swimming is good for you.', 'Swimming is good for your health.'],
              exp: 'Como sujeito, o verbo vai para o -ing.'
            },
            {
              t: 'escolha',
              p: '"Do you mind ___ the window?"',
              ops: ['opening', 'to open', 'open'],
              c: 0,
              exp: 'Mind pede -ing: Do you mind opening...? é um pedido muito educado.'
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Ela foi embora sem dizer tchau."',
              r: 'She left without saying goodbye.',
              extra: ['to', 'say', 'went'],
              exp: 'Without é preposição, então vem -ing.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'Remember to call your [[mom|mum]].',
              ops: [
                'Remember to call your [[mom|mum]].',
                'Remember calling your [[mom|mum]].',
                'Remember to tell your [[mom|mum]].'
              ],
              c: 0
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'I\'m interested in learning Spanish.'
            }
          ]
        },
        {
          id: 'en13l4',
          titulo: 'Conectores: although, however, unless',
          pre: ['en13l3', 'en11l3'],
          exs: [
            {
              t: 'texto',
              titulo: 'As palavras que ligam as ideias',
              blocos: [
                {
                  p: 'Um dos maiores saltos do básico para o intermediário é ligar as ideias. Em vez de frases soltas, como ((It was raining. We went out.)), você passa a dizer ((Although it was raining, we went out.))'
                },
                {
                  tabela: {
                    cab: ['Ideia', 'Conectores', 'Exemplo'],
                    codigo: [],
                    linhas: [
                      [
                        'contraste',
                        'but, although, even though, however',
                        '((Although it was late, we kept talking.))'
                      ],
                      [
                        'contraste com um substantivo',
                        'despite, in spite of',
                        '((Despite the rain, we went out.))'
                      ],
                      ['condição', 'unless, as long as', '((I won\'t go unless you come.))'],
                      [
                        'causa',
                        'because, since, because of',
                        '((We stayed home because of the rain.))'
                      ],
                      ['consequência', 'so, therefore', '((I was tired, so I went to bed.))'],
                      [
                        'finalidade',
                        'to, so that',
                        '((I\'m saving money so that I can travel.))'
                      ],
                      [
                        'acréscimo',
                        'also, in addition, besides',
                        '((Besides, it\'s cheaper.))'
                      ],
                      [
                        'comparação',
                        'while, whereas',
                        '((I love coffee, while my sister hates it.))'
                      ]
                    ]
                  }
                },
                {
                  p: '**A diferença está no que vem depois.** Although e because pedem uma frase completa, com sujeito e verbo: ((although it was raining)), ((because it was raining)). Despite e because of pedem um substantivo ou um -ing: ((despite the rain)), ((because of the rain)), ((despite being tired)).'
                },
                {
                  p: '**However** abre uma frase nova, seguido de vírgula, e se liga à anterior: ((The plan is good. However, it\'s expensive.)) Na conversa, but é muito mais comum; however é mais de texto escrito.'
                },
                {
                  p: '**Unless** é "a não ser que" e já traz o "não" dentro: ((Unless you hurry, you\'ll miss the bus.)) é o mesmo que ((If you don\'t hurry, you\'ll miss the bus.)) Por isso, não se diz "unless you don\'t hurry".'
                },
                {
                  p: '**Since** tem dois sentidos: "desde", que você viu no present perfect, e "já que": ((Since you\'re here, can you help me?)) (Já que você está aqui, pode me ajudar?)'
                },
                {
                  dica: 'Na prova do Enem, os conectores são pistas valiosas: however e although anunciam uma ideia contrária; so e therefore, uma conclusão. Muitas questões perguntam justamente o que uma palavra dessas está fazendo no texto.',
                  rotulo: 'No Enem'
                }
              ]
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: '___ the traffic, we arrived on time. ___ we were tired, we went to the party.',
              bank: ['Despite', 'Although', 'However', 'Because'],
              c: ['Despite', 'Although'],
              exp: 'Despite + substantivo (the traffic). Although + frase completa (we were tired).'
            },
            {
              t: 'escolha',
              p: 'Qual está certa?',
              ops: [
                'We stayed home because of the rain.',
                'We stayed home because the rain.',
                'We stayed home despite of the rain.'
              ],
              c: 0,
              exp: 'Because of + substantivo. E despite não leva of; in spite of é que leva.'
            },
            {
              t: 'escolha',
              p: '"You can\'t come in unless you have a ticket." O que quer dizer?',
              ops: ['Só entra quem tem ingresso', 'Quem tem ingresso não entra', 'Todo mundo entra'],
              c: 0,
              exp: 'Unless: a não ser que você tenha ingresso.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Embora estivesse cansado, ele foi trabalhar."',
              r: [
                '(Although|Even though|Though) he was tired, he went to work.',
                'He went to work (although|even though|though) he was tired.'
              ]
            },
            {
              t: 'escolha',
              p: 'Num texto, uma frase começa com "However,". O que vem a seguir?',
              ops: [
                'Uma ideia que contrasta com a anterior',
                'Um exemplo da ideia anterior',
                'A mesma ideia, repetida'
              ],
              c: 0,
              exp: 'However marca contraste.'
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Estou economizando para poder viajar."',
              r: [
                'I\'m saving money so that I can travel.',
                'I\'m saving money so I can travel.',
                'I\'m saving so that I can travel.'
              ],
              extra: ['because', 'for', 'could'],
              exp: 'Finalidade: so that + frase.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'Despite the rain, we went out.',
              ops: [
                'Despite the rain, we went out.',
                'Because of the rain, we went out.',
                'Despite the rain, we went home.'
              ],
              c: 0
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'The plan is good. However, it\'s expensive.'
            }
          ]
        }
      ]
    }
  ]
});
