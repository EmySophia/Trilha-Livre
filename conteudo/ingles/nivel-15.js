/* Trilha Livre · Inglês do zero · Nível 15: O que os outros disseram (B1)
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md.
   ((frase)) tem botão de ouvir; [[americano|britânico]] muda com o sotaque escolhido. */

nivel({
  curso: 'ingles',
  n: 15,
  titulo: 'O que os outros disseram',
  faixa: 'B1',
  desc: 'Discurso indireto, perguntas indiretas e educadas, question tags e as palavrinhas que deixam a conversa natural.',
  videos: [
    {
      titulo: 'Speak English With Vanessa',
      canal: 'Vanessa',
      obs: 'conversas de verdade, cheias de you know, I mean e question tags',
      url: 'https://www.youtube.com/@SpeakEnglishWithVanessa'
    },
    {
      titulo: 'BBC Learning English',
      canal: 'BBC',
      obs: 'reported speech e perguntas indiretas em vídeos curtos',
      url: 'https://www.youtube.com/@bbclearningenglish'
    },
    {
      titulo: 'Learn English With TV Series',
      canal: 'Learn English With TV Series',
      obs: 'cenas de séries explicadas: ótimo para ouvir como as pessoas falam de verdade',
      url: 'https://www.youtube.com/@LearnEnglishWithTVSeries'
    }
  ],
  unidades: [
    {
      id: 'enu25',
      titulo: 'Contar o que foi dito',
      conceito: 'she said that · he asked if',
      desc: 'O discurso indireto e as perguntas dentro de outras frases.',
      licoes: [
        {
          id: 'en15l1',
          titulo: 'Ela disse que: o discurso indireto',
          pre: ['en14l3', 'en11l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Contando o que alguém disse',
              blocos: [
                {
                  p: 'Para contar o que alguém disse, você pode repetir as palavras exatas, o **discurso direto**: ((She said, "I\'m tired.")) Ou contar com as suas palavras, o **discurso indireto**: ((She said that she was tired.)) (Ela disse que estava cansada.)'
                },
                {
                  p: '**O tempo verbal volta um passo.** Como a pessoa falou no passado, o verbo costuma ir um tempo para trás. O português faz o mesmo: "estou cansada" vira "ela disse que **estava** cansada".'
                },
                {
                  tabela: {
                    cab: ['A pessoa disse', 'Você conta'],
                    codigo: [],
                    linhas: [
                      ['((I\'m tired.))', '((She said she was tired.))'],
                      ['((I like it.))', '((He said he liked it.))'],
                      ['((I\'m working.))', '((She said she was working.))'],
                      ['((I saw him.))', '((He said he had seen him.))'],
                      ['((I will call.))', '((She said she would call.))'],
                      ['((I can help.))', '((He said he could help.))']
                    ]
                  }
                },
                {
                  p: 'O that depois de said é opcional, e na fala quase sempre cai: ((She said she was tired.))'
                },
                {
                  p: '**Say ou tell?** Os dois são "dizer", mas tell pede **a pessoa** logo depois, e say não: ((She told me she was tired.)) ((She said she was tired.)) "She said me" está sempre errado.'
                },
                {
                  p: '**Quando o tempo não precisa voltar.** Se o que a pessoa disse continua verdade, dá para manter o presente: ((He said he lives in Recife.)), porque ele ainda mora lá. E se o verbo de dizer está no presente, nada muda: ((She says she\'s tired.))'
                },
                {
                  p: '**Outras palavras também mudam**, porque o momento e o lugar mudaram: today vira that day, tomorrow vira the next day, here vira there, e os pronomes se ajustam: o I de quem falou vira he ou she.'
                },
                {
                  p: '**Pedidos e ordens** usam tell ou ask + pessoa + to: ((She told me to wait.)) (Ela me mandou esperar.) ((He asked me to help him.)) (Ele me pediu para ajudar.) Na negativa, o not vem antes do to: ((She told me not to worry.))'
                },
                {
                  dialogo: [
                    ['Gabi', 'Did you talk to Rafa?', 'Você falou com o Rafa?'],
                    [
                      'Igor',
                      'Yeah. He said he was [[sick|ill]] and couldn\'t come today.',
                      'Falei. Ele disse que estava doente e que não podia vir hoje.'
                    ],
                    [
                      'Gabi',
                      'Oh no. Did he say when he would be back?',
                      'Ah, não. Ele disse quando volta?'
                    ],
                    [
                      'Igor',
                      'He told me he would call you tomorrow. And he asked me to tell you not to worry.',
                      'Ele me disse que ia te ligar amanhã. E me pediu para te dizer para não se preocupar.'
                    ]
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Ela disse: "I\'m tired." Como você conta?',
              ops: [
                'She said she was tired.',
                'She said me she was tired.',
                'She told she is tired.'
              ],
              c: 0,
              exp: 'Said sem a pessoa depois, e o tempo volta um passo: was.'
            },
            {
              t: 'complete',
              p: 'Complete com said ou told:',
              code: 'He ___ me he was busy, and he ___ he would call later.',
              bank: ['told', 'said', 'say', 'tell'],
              c: ['told', 'said'],
              exp: 'Tell vem com a pessoa (told me). Say vem sem (he said).'
            },
            {
              t: 'escreva',
              p: 'Conte o que ele disse, começando com "He": "I will help you."',
              r: [
                '(He said|He told me) (that |)he would help (me|you).',
                '(He said|He told me) (that |)he\'d help (me|you).'
              ],
              exp: 'Will vira would.'
            },
            {
              t: 'escolha',
              p: '"She told me not to worry." O que ela fez?',
              ops: [
                'Ela me disse para não me preocupar',
                'Ela me disse que não estava preocupada',
                'Ela não me contou nada'
              ],
              c: 0,
              exp: 'Tell + pessoa + not to: dizer para não fazer.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Ele me pediu para esperar."',
              r: ['He asked me to wait( for him|).'],
              exp: 'Pedir para alguém fazer algo: ask + pessoa + to.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'He said he couldn\'t come today.',
              ops: [
                'He said he couldn\'t come today.',
                'He said he could come today.',
                'He said he couldn\'t come to stay.'
              ],
              c: 0
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Ela me disse que estava doente."',
              r: ['She told me she was [[sick|ill]].', 'She told me (that |)she was (sick|ill).'],
              extra: ['said', 'is', 'to'],
              exp: 'Doente é sick nos EUA e ill no Reino Unido. No Reino Unido, sick é mais "enjoado, com vontade de vomitar".'
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'She said she would call you tomorrow.'
            }
          ]
        },
        {
          id: 'en15l2',
          titulo: 'Perguntas indiretas: Can you tell me where...?',
          pre: ['en15l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Perguntar sem perguntar direto',
              blocos: [
                {
                  p: 'Quando uma pergunta entra dentro de outra frase, ela **perde a ordem de pergunta**. Isso acontece em duas situações muito comuns.'
                },
                {
                  p: '**1. Perguntas educadas.** Com desconhecidos, no trabalho ou num atendimento, é comum começar com ((Can you tell me...)), ((Do you know...)) ou ((I was wondering...)). Depois disso, a ordem volta a ser a de uma afirmação:'
                },
                {
                  tabela: {
                    cab: ['Pergunta direta', 'Pergunta indireta'],
                    codigo: [],
                    linhas: [
                      [
                        '((Where is the station?))',
                        '((Can you tell me where the station is?))'
                      ],
                      ['((What time does it open?))', '((Do you know what time it opens?))'],
                      ['((Is she coming?))', '((Do you know if she\'s coming?))'],
                      [
                        '((How much does it cost?))',
                        '((Could you tell me how much it costs?))'
                      ]
                    ]
                  }
                },
                {
                  p: 'Repare: o do e o does somem (é what time it opens, sem does), e, quando não há palavra de pergunta, entra **if** ou **whether** (se).'
                },
                {
                  p: '**2. Contar o que alguém perguntou.** Também sem ordem de pergunta, e com o tempo voltando um passo, como no discurso indireto: ((She asked me where I lived.)) (Ela me perguntou onde eu morava.) ((He asked if I was okay.)) (Ele perguntou se eu estava bem.)'
                },
                {
                  p: 'Esse é um erro que até alunos avançados cometem: "Can you tell me where is the station?" Os nativos entendem, mas a frase soa estrangeira na hora.'
                },
                {
                  dialogo: [
                    [
                      'Tourist',
                      'Excuse me, do you know where the nearest pharmacy is?',
                      'Com licença, você sabe onde fica a farmácia mais próxima?'
                    ],
                    [
                      'Local',
                      'Yes, there\'s one on the corner, next to the bank.',
                      'Sei, tem uma na esquina, do lado do banco.'
                    ],
                    [
                      'Tourist',
                      'Great. Do you know if it\'s open on Sundays?',
                      'Ótimo. Você sabe se ela abre aos domingos?'
                    ],
                    [
                      'Local',
                      'I\'m not sure, sorry. You could ask at the newsstand.',
                      'Não tenho certeza, desculpa. Você pode perguntar na banca de jornal.'
                    ]
                  ]
                },
                {
                  dica: 'I was wondering if you could help me é um jeito muito educado de pedir algo, como o nosso "será que você poderia me ajudar?". O passado aqui não fala do passado: ele só deixa o pedido mais suave.',
                  rotulo: 'O mais educado de todos'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual está certa?',
              ops: [
                'Can you tell me where the station is?',
                'Can you tell me where is the station?',
                'Can you tell me where does the station is?'
              ],
              c: 0,
              exp: 'Dentro de outra frase, a pergunta volta à ordem de afirmação: the station is.'
            },
            {
              t: 'escolha',
              p: '"Do you know what time ___?"',
              ops: ['it opens', 'does it open', 'opens it'],
              c: 0,
              exp: 'O does some, e o verbo ganha o -s: it opens.'
            },
            {
              t: 'escreva',
              p: 'Faça a pergunta educada, começando com "Do you know": "Is the museum open today?"',
              r: ['Do you know (if|whether) the museum is open today?'],
              exp: 'Sem palavra de pergunta, entra if ou whether.'
            },
            {
              t: 'escolha',
              p: 'Ela perguntou: "Where do you live?" Como você conta?',
              ops: [
                'She asked me where I lived.',
                'She asked me where did I live.',
                'She asked me where do you live.'
              ],
              c: 0,
              exp: 'Sem ordem de pergunta, sem did, e com o tempo voltando um passo.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Ele perguntou se eu estava bem."',
              r: ['He asked (me |)(if|whether) I was (okay|ok|all right|alright|fine|well).']
            },
            {
              t: 'monte',
              p: 'Monte a pergunta: "Você sabe quanto custa?"',
              r: 'Do you know how much it costs?',
              extra: ['does', 'cost', 'is'],
              exp: 'Dentro da pergunta educada, o does some e o verbo ganha o -s: it costs.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'Do you know if it\'s open on Sundays?',
              ops: [
                'Do you know if it\'s open on Sundays?',
                'Do you know if it\'s open on Mondays?',
                'Do you know it\'s open on Sundays?'
              ],
              c: 0
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'Could you tell me how much it costs?'
            }
          ]
        }
      ]
    },
    {
      id: 'enu26',
      titulo: 'Conversa natural',
      conceito: 'isn\'t it? · you know',
      desc: 'Question tags, respostas curtas e as palavrinhas que os nativos usam o tempo todo.',
      licoes: [
        {
          id: 'en15l3',
          titulo: 'Question tags: o "né?" do inglês',
          pre: ['en4l2', 'en10l2'],
          exs: [
            {
              t: 'texto',
              titulo: 'Isn\'t it? Don\'t you?',
              blocos: [
                {
                  p: 'No fim de uma frase, o português põe um "né?" ou um "não é?". O inglês tem as **question tags**, que também pedem confirmação. Só que, em vez de uma palavra fixa, elas repetem o auxiliar da frase:'
                },
                {
                  tabela: {
                    cab: ['Frase', 'Tag'],
                    codigo: [],
                    linhas: [
                      ['((It\'s hot today,))', '((isn\'t it?))'],
                      ['((You like coffee,))', '((don\'t you?))'],
                      ['((She can swim,))', '((can\'t she?))'],
                      ['((They went home,))', '((didn\'t they?))'],
                      ['((You haven\'t seen it,))', '((have you?))'],
                      ['((He isn\'t here,))', '((is he?))']
                    ]
                  }
                },
                {
                  p: '**A regra:** frase afirmativa, tag negativa; frase negativa, tag afirmativa. O verbo da tag é o mesmo auxiliar da frase (be, can, have, will...). Se a frase não tem auxiliar, entra do, does ou did, como numa pergunta.'
                },
                {
                  p: '**Uma exceção famosa:** ((I\'m right, aren\'t I?)) Não existe "amn\'t I", então se usa aren\'t.'
                },
                {
                  p: '**A entonação muda o sentido.** Se a voz **desce** no fim, você só quer que a pessoa concorde: ((Nice day, isn\'t it?)) Se a voz **sobe**, é uma pergunta de verdade, porque você não tem certeza.'
                },
                {
                  p: '**So do I e neither do I.** Para dizer "eu também" com o auxiliar, o inglês inverte a ordem: ((I love pizza. So do I.)) ((I can\'t swim. Neither can I.)) ((I\'m tired. So am I.)) Na conversa, ((Me too.)) e ((Me neither.)) fazem o mesmo, de um jeito mais informal.'
                },
                {
                  p: '**Respostas curtas para reagir.** Você vai ouvir muito ((Oh, are you?)), ((Did you?)) e ((Do you?)) depois de uma novidade. São o nosso "é mesmo?", e mostram que você está prestando atenção.'
                },
                {
                  dialogo: [
                    [
                      'Ana',
                      'This is your first time in Brazil, isn\'t it?',
                      'É a sua primeira vez no Brasil, né?'
                    ],
                    [
                      'Mark',
                      'Yes, it is. I arrived last week.',
                      'É, sim. Cheguei semana passada.'
                    ],
                    [
                      'Ana',
                      'You haven\'t tried our street food yet, have you?',
                      'Você ainda não provou a nossa comida de rua, né?'
                    ],
                    ['Mark', 'No, I haven\'t! Is it good?', 'Não, ainda não! É boa?'],
                    [
                      'Ana',
                      'It\'s amazing. I eat it every week.',
                      'É incrível. Eu como toda semana.'
                    ],
                    [
                      'Mark',
                      'Do you? Then I have to try it.',
                      'É mesmo? Então eu preciso provar.'
                    ]
                  ]
                }
              ]
            },
            {
              t: 'complete',
              p: 'Complete com a tag:',
              code: 'It\'s cold today, ___? You don\'t like the cold, ___?',
              bank: ['isn\'t it', 'do you', 'don\'t you', 'is it'],
              c: ['isn\'t it', 'do you'],
              exp: 'Afirmativa, tag negativa. Negativa, tag afirmativa.'
            },
            {
              t: 'escolha',
              p: '"She can drive, ___?"',
              ops: ['can\'t she', 'doesn\'t she', 'isn\'t she'],
              c: 0,
              exp: 'O auxiliar da frase é can, então a tag usa can.'
            },
            {
              t: 'escolha',
              p: '"They went to the party, ___?"',
              ops: ['didn\'t they', 'weren\'t they', 'don\'t they'],
              c: 0,
              exp: 'Went não tem auxiliar, então entra did, como numa pergunta no passado.'
            },
            {
              t: 'escolha',
              p: 'Seu amigo diz: "I don\'t like horror movies." Você também não gosta. O que responde?',
              ops: ['Neither do I.', 'So do I.', 'Neither I do.'],
              c: 0,
              exp: 'Neither + auxiliar + sujeito, para concordar com uma negativa.'
            },
            {
              t: 'escolha',
              p: 'Seu amigo diz: "I\'m so hungry." Você também está. O que responde?',
              ops: ['So am I.', 'So do I.', 'Neither am I.'],
              c: 0,
              exp: 'A frase usa am, então a resposta também: So am I.'
            },
            {
              t: 'escreva',
              p: 'Complete com a tag: "You\'re Brazilian, ...?"',
              r: ['aren\'t you'],
              exp: 'Afirmativa com are: tag aren\'t you.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'You haven\'t tried it yet, have you?',
              ops: [
                'You haven\'t tried it yet, have you?',
                'You have tried it yet, haven\'t you?',
                'You haven\'t tried it yet, are you?'
              ],
              c: 0
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'This is your first time here, isn\'t it?'
            }
          ]
        },
        {
          id: 'en15l4',
          titulo: 'You know, I mean: falar como se fala',
          pre: ['en8l2'],
          exs: [
            {
              t: 'texto',
              titulo: 'As palavrinhas da conversa',
              blocos: [
                {
                  p: 'Ninguém fala como um livro. Os nativos usam o tempo todo pequenas palavras e expressões que não mudam o sentido da frase, mas dão tempo para pensar, suavizam o que se diz ou organizam a conversa. Entender essas palavras ajuda muito a acompanhar séries e vídeos, e usar algumas faz você soar natural.'
                },
                {
                  vocab: [
                    ['you know', 'sabe?', 'para checar se a pessoa está acompanhando'],
                    [
                      'I mean',
                      'quer dizer',
                      'para explicar melhor ou ajustar o que acabou de dizer'
                    ],
                    ['like', 'tipo', 'muito comum entre jovens, principalmente nos EUA'],
                    ['kind of', 'meio, mais ou menos', 'I\'m kind of tired: tô meio cansado'],
                    ['actually', 'na verdade', 'para corrigir ou trazer uma novidade'],
                    ['anyway', 'enfim', 'para voltar ao assunto ou encerrar'],
                    ['by the way', 'aliás, a propósito', 'para mudar de assunto'],
                    ['well', 'bom, bem', 'para começar uma resposta e ganhar tempo'],
                    ['to be honest', 'pra ser sincero'],
                    ['I guess', 'acho que', 'I guess you\'re right']
                  ]
                },
                {
                  p: '**Para ganhar tempo** sem travar, em vez de ficar em silêncio, use ((Let me think.)), ((That\'s a good question.)) ou ((How can I put it?)) (Como posso dizer?). O "hum" do inglês é **um** ou **uh**. O nosso "éééé" soa estranho para um nativo, porque parece um som de outra língua.'
                },
                {
                  p: '**Para suavizar.** O inglês suaviza muito, principalmente no Reino Unido. Em vez de ((It\'s bad.)), é comum ((It\'s not great.)) ou ((It\'s a bit disappointing.)) Em vez de um "não" seco, ((I\'m not sure about that.))'
                },
                {
                  dialogo: [
                    ['Lia', 'So, how was the trip?', 'E aí, como foi a viagem?'],
                    [
                      'Tom',
                      'Well, it was kind of weird, actually. I mean, the city was beautiful, you know, but it rained every single day.',
                      'Bom, foi meio estranho, na verdade. Quer dizer, a cidade era linda, sabe, mas choveu todo santo dia.'
                    ],
                    ['Lia', 'Oh no! So what did you do?', 'Ah, não! E o que você fez?'],
                    [
                      'Tom',
                      'Museums, mostly. Anyway, by the way, did you get my message?',
                      'Museus, principalmente. Enfim, aliás, você recebeu minha mensagem?'
                    ]
                  ]
                },
                {
                  dica: 'Não exagere: um like a cada três palavras soa como gíria adolescente, e um you know em toda frase cansa. Use para ganhar tempo, e não como enfeite.',
                  rotulo: 'Na medida'
                }
              ]
            },
            {
              t: 'escolha',
              p: '"I\'m kind of tired." O que quer dizer?',
              ops: ['Estou meio cansado', 'Estou cansado de um tipo especial', 'Estou exausto'],
              c: 0,
              exp: 'Kind of suaviza: meio, mais ou menos.'
            },
            {
              t: 'escolha',
              p: 'Em "It was great. I mean, the food was a bit expensive, but...", para que serve o I mean?',
              ops: [
                'Para explicar melhor ou ajustar o que disse',
                'Para mudar para um assunto sem relação',
                'Para encerrar a conversa'
              ],
              c: 0,
              exp: 'I mean é o nosso "quer dizer".'
            },
            {
              t: 'escolha',
              p: 'Você quer mudar de assunto para algo novo. Qual expressão combina?',
              ops: ['By the way', 'To be honest', 'I guess'],
              c: 0,
              exp: 'By the way: aliás, a propósito.'
            },
            {
              t: 'escolha',
              p: 'Você precisa de um segundo para pensar antes de responder. O que soa natural?',
              ops: ['Let me think.', 'Wait me.', 'Eeeeh...'],
              c: 0,
              exp: 'Let me think é "deixa eu pensar". "Wait me" não existe: seria wait for me.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Pra ser sincero, não gostei."',
              r: ['(To be honest|Honestly), I didn\'t like it.']
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'Well, it was kind of weird, actually.',
              ops: [
                'Well, it was kind of weird, actually.',
                'Well, it was kind of wired, actually.',
                'Well, it was a kind of word, actually.'
              ],
              c: 0
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Acho que você tem razão."',
              r: ['I guess you\'re right.', 'I think you\'re right.'],
              extra: ['have', 'reason', 'is'],
              exp: 'Ter razão é be right. "You have reason" não existe em inglês.'
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'Anyway, did you get my message?'
            }
          ]
        }
      ]
    }
  ]
});
