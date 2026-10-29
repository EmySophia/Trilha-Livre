/* Trilha Livre · Inglês do zero · Nível 20: Ouvir de verdade (B2)
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md.
   ((frase)) tem botão de ouvir; [[americano|britânico]] muda com o sotaque escolhido. */

nivel({
  curso: 'ingles',
  n: 20,
  titulo: 'Ouvir de verdade',
  faixa: 'B2',
  desc: 'Textos maiores e mais rápidos, como na vida real: uma entrevista de emprego, um podcast sobre o sono e uma conversa sobre trabalhar de casa.',
  videos: [
    {
      titulo: 'BBC Learning English',
      canal: 'BBC',
      obs: 'o podcast 6 Minute English, com um tema novo por semana',
      url: 'https://www.youtube.com/@bbclearningenglish'
    },
    {
      titulo: 'Easy English',
      canal: 'Easy Languages',
      obs: 'entrevistas na rua, com pessoas falando na velocidade normal',
      url: 'https://www.youtube.com/@EasyEnglishVideos'
    },
    {
      titulo: 'Learn English With TV Series',
      canal: 'Learn English With TV Series',
      obs: 'cenas de séries explicadas, para treinar o ouvido com conversas reais',
      url: 'https://www.youtube.com/@LearnEnglishWithTVSeries'
    }
  ],
  unidades: [
    {
      id: 'enu33',
      titulo: 'Textos longos',
      conceito: 'listen · understand',
      desc: 'Três textos com áudio para ouvir antes de ler.',
      licoes: [
        {
          id: 'en20l1',
          titulo: 'Uma entrevista de emprego',
          pre: ['en19l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Ouça a entrevista',
              blocos: [
                {
                  p: 'Daqui em diante, os textos são maiores e mais rápidos, como na vida real. **Ouça cada fala primeiro sem ler**, depois lendo, e só então olhe a tradução. Entender a ideia geral sem pegar todas as palavras é uma habilidade, e ela se treina.'
                },
                {
                  dialogo: [
                    [
                      'Interviewer',
                      'Thanks for coming in today. Could you start by telling me a little about yourself?',
                      'Obrigada por ter vindo. Você pode começar falando um pouco sobre você?'
                    ],
                    [
                      'Caio',
                      'Sure. I\'m a computer science student, and for the past year I\'ve been working part-time at a small company that builds apps for local businesses.',
                      'Claro. Sou estudante de ciência da computação e, no último ano, tenho trabalhado meio período numa empresa pequena que faz aplicativos para comércios do bairro.'
                    ],
                    [
                      'Interviewer',
                      'Interesting. What made you apply for this position?',
                      'Interessante. O que te fez se candidatar a esta vaga?'
                    ],
                    [
                      'Caio',
                      'I\'ve always been interested in education, and your platform helps millions of students. I\'d love to learn from people with more experience.',
                      'Sempre me interessei por educação, e a plataforma de vocês ajuda milhões de estudantes. Eu adoraria aprender com pessoas mais experientes.'
                    ],
                    [
                      'Interviewer',
                      'Can you tell me about a time you had to solve a difficult problem?',
                      'Você pode contar sobre uma vez em que precisou resolver um problema difícil?'
                    ],
                    [
                      'Caio',
                      'Last semester, our app kept crashing for some users, and nobody could figure out why. I suggested testing it on older phones, and we found out that an old version of the system was the problem. The fix was simple, but it taught me to test one thing at a time.',
                      'No semestre passado, o nosso aplicativo vivia travando para alguns usuários, e ninguém conseguia descobrir por quê. Sugeri testar em celulares mais antigos, e descobrimos que o problema era uma versão antiga do sistema. A correção foi simples, mas me ensinou a testar uma coisa de cada vez.'
                    ],
                    [
                      'Interviewer',
                      'That\'s a great example. Do you have any questions for us?',
                      'É um ótimo exemplo. Você tem alguma pergunta para nós?'
                    ],
                    [
                      'Caio',
                      'Yes. What does a typical day look like for an intern here?',
                      'Tenho. Como é um dia típico de um estagiário aqui?'
                    ]
                  ],
                  titulo: 'Uma entrevista para um estágio'
                },
                {
                  p: '**Repare na resposta sobre o problema:** ela segue a ordem situação, ação e resultado. Recrutadores do mundo todo esperam respostas nesse formato, e ele funciona em português também.'
                },
                {
                  vocab: [
                    ['part-time', 'meio período', 'o contrário é full-time'],
                    ['position', 'vaga, cargo'],
                    ['to crash', 'travar, parar de funcionar', 'e também bater, num acidente'],
                    ['a fix', 'uma correção, uma solução'],
                    ['intern', 'estagiário', 'o estágio é internship']
                  ]
                },
                {
                  dica: 'Terminar a entrevista com uma pergunta, como a do Caio, mostra interesse. Ficar sem nenhuma pergunta pode passar a impressão contrária.',
                  rotulo: 'Uma dica de entrevista'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que o Caio faz hoje?',
              ops: [
                'Estuda e trabalha meio período numa empresa de aplicativos',
                'Só estuda',
                'Trabalha em tempo integral numa escola'
              ],
              c: 0,
              exp: 'I\'ve been working part-time at a small company that builds apps.'
            },
            {
              t: 'escolha',
              p: 'Por que ele se candidatou à vaga?',
              ops: [
                'Porque se interessa por educação e quer aprender com gente mais experiente',
                'Porque o salário é alto',
                'Porque a empresa fica perto de casa'
              ],
              c: 0,
              exp: 'I\'ve always been interested in education... I\'d love to learn from people with more experience.'
            },
            {
              t: 'escolha',
              p: 'Qual era o problema do aplicativo?',
              ops: [
                'Travava para alguns usuários por causa de uma versão antiga do sistema',
                'Era lento demais para todo mundo',
                'Não tinha usuários'
              ],
              c: 0,
              exp: 'An old version of the system was the problem.'
            },
            {
              t: 'escolha',
              p: 'O que a experiência ensinou a ele?',
              ops: [
                'A testar uma coisa de cada vez',
                'A desistir de problemas difíceis',
                'A trabalhar sozinho'
              ],
              c: 0,
              exp: 'It taught me to test one thing at a time.'
            },
            {
              t: 'escolha',
              p: 'Em "the app kept crashing", o que quer dizer kept crashing?',
              ops: ['Vivia travando, travava sem parar', 'Guardava os erros', 'Parou de travar'],
              c: 0,
              exp: 'Keep + -ing: continuar fazendo, fazer sem parar.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Eu adoraria aprender com vocês."',
              r: [
                'I\'d love to learn from you.',
                'I would love to learn from you( all|).',
                'I\'d love to learn with you.'
              ]
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'What does a typical day look like for an intern here?'
            }
          ]
        },
        {
          id: 'en20l2',
          titulo: 'Um podcast sobre o sono',
          pre: ['en20l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Ouça o episódio',
              blocos: [
                {
                  p: 'Um trecho no estilo de um podcast de ciência. Ouça tudo uma vez sem ler, tentando pegar a ideia principal. Depois, ouça de novo lendo.'
                },
                {
                  fala: 'Welcome back to the show. Today we\'re talking about something we all do every night, but rarely think about: sleep.',
                  trad: 'Bem-vindos de volta ao programa. Hoje vamos falar de uma coisa que todos nós fazemos toda noite, mas sobre a qual raramente pensamos: o sono.'
                },
                {
                  fala: 'Most adults need between seven and nine hours of sleep a night. And yet, surveys suggest that a third of us regularly get less than that.',
                  trad: 'A maioria dos adultos precisa de sete a nove horas de sono por noite. Mesmo assim, pesquisas sugerem que um terço de nós costuma dormir menos que isso.'
                },
                {
                  fala: 'So what happens when we don\'t get enough? In the short term, we find it harder to concentrate, we make more mistakes, and we tend to be more irritable.',
                  trad: 'Então, o que acontece quando não dormimos o suficiente? A curto prazo, temos mais dificuldade de concentração, cometemos mais erros e tendemos a ficar mais irritados.'
                },
                {
                  fala: 'Sleep also plays a key role in learning. While we sleep, the brain seems to sort through what we learned during the day and store the important parts. In other words, a good night\'s sleep after studying might be just as important as the studying itself.',
                  trad: 'O sono também tem um papel fundamental no aprendizado. Enquanto dormimos, o cérebro parece organizar o que aprendemos durante o dia e guardar as partes importantes. Em outras palavras, uma boa noite de sono depois de estudar pode ser tão importante quanto o próprio estudo.'
                },
                {
                  fala: 'So, if you have an exam tomorrow, staying up all night might not be the smartest strategy.',
                  trad: 'Então, se você tem uma prova amanhã, virar a noite talvez não seja a estratégia mais inteligente.'
                },
                {
                  vocab: [
                    ['survey', 'pesquisa (com perguntas para muitas pessoas)'],
                    ['a third', 'um terço'],
                    ['in the short term', 'a curto prazo', 'o contrário é in the long term'],
                    ['to play a key role', 'ter um papel fundamental'],
                    ['to stay up all night', 'virar a noite acordado']
                  ]
                },
                {
                  dica: 'Repare em quantas vezes o texto suaviza: surveys suggest, the brain seems to, might be. É o hedging que você viu no nível 19, típico de quem fala de ciência com cuidado.',
                  rotulo: 'Hedging de novo'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual é a ideia principal do episódio?',
              ops: [
                'O sono afeta a concentração, o humor e o aprendizado',
                'Como dormir menos e produzir mais',
                'A história dos podcasts'
              ],
              c: 0,
              exp: 'O texto fala dos efeitos de dormir pouco e do papel do sono no aprendizado.'
            },
            {
              t: 'escolha',
              p: 'Segundo o texto, quantas horas de sono a maioria dos adultos precisa?',
              ops: ['De sete a nove', 'De cinco a seis', 'Mais de dez'],
              c: 0,
              exp: 'Between seven and nine hours.'
            },
            {
              t: 'escolha',
              p: 'Que fração das pessoas costuma dormir menos que o necessário, segundo as pesquisas?',
              ops: ['Um terço', 'Metade', 'Quase todo mundo'],
              c: 0,
              exp: 'A third of us.'
            },
            {
              t: 'escolha',
              p: 'O que o cérebro parece fazer durante o sono?',
              ops: [
                'Organizar o que aprendemos e guardar as partes importantes',
                'Apagar tudo o que aprendemos',
                'Descansar sem fazer nada'
              ],
              c: 0,
              exp: 'The brain seems to sort through what we learned and store the important parts.'
            },
            {
              t: 'escolha',
              p: 'Qual é o conselho do final?',
              ops: [
                'Não virar a noite antes de uma prova',
                'Estudar a noite toda antes de uma prova',
                'Dormir durante a prova'
              ],
              c: 0,
              exp: 'Staying up all night might not be the smartest strategy.'
            },
            {
              t: 'escreva',
              p: 'Traduza para o português: "Sleep plays a key role in learning."',
              r: [
                'O sono (tem|desempenha|cumpre) um papel (fundamental|essencial|importante|chave|crucial) (no aprendizado|na aprendizagem).'
              ],
              lingua: 'pt'
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'Most adults need between seven and nine hours of sleep a night.'
            }
          ]
        },
        {
          id: 'en20l3',
          titulo: 'Uma conversa sobre trabalhar de casa',
          pre: ['en20l2', 'en19l3'],
          exs: [
            {
              t: 'texto',
              titulo: 'Duas opiniões',
              blocos: [
                {
                  p: 'Uma conversa entre dois colegas, cada um com uma opinião. Repare em como eles concordam em parte, discordam com educação e dão argumentos.'
                },
                {
                  dialogo: [
                    [
                      'Nora',
                      'Honestly, I don\'t think I could ever go back to the office five days a week. Working from home has changed my life.',
                      'Sinceramente, acho que nunca mais conseguiria voltar ao escritório cinco dias por semana. Trabalhar de casa mudou a minha vida.'
                    ],
                    [
                      'Sam',
                      'Really? I see your point, but I actually miss the office. I find it hard to switch off when my desk is in my bedroom.',
                      'Sério? Entendo o seu ponto, mas, na verdade, eu sinto falta do escritório. Acho difícil me desligar quando a minha mesa fica no meu quarto.'
                    ],
                    [
                      'Nora',
                      'That\'s fair. But think about the commute. I used to spend two hours a day on buses. Now I spend that time sleeping, or cooking proper meals.',
                      'Faz sentido. Mas pense no trajeto. Eu passava duas horas por dia em ônibus. Agora, uso esse tempo para dormir ou para cozinhar comida de verdade.'
                    ],
                    [
                      'Sam',
                      'I\'ll give you that. The commute is awful. But I learn so much more when I can just turn around and ask someone a question. On video calls, it\'s not the same.',
                      'Isso eu admito. O trajeto é horrível. Mas eu aprendo muito mais quando posso simplesmente me virar e perguntar algo a alguém. Por chamada de vídeo, não é a mesma coisa.'
                    ],
                    [
                      'Nora',
                      'Maybe the answer is somewhere in the middle. Two or three days at the office, the rest at home?',
                      'Talvez a resposta esteja no meio-termo. Dois ou três dias no escritório, e o resto em casa?'
                    ],
                    [
                      'Sam',
                      'Now that\'s something we can agree on.',
                      'Aí está uma coisa em que a gente concorda.'
                    ]
                  ],
                  titulo: 'No intervalo do café'
                },
                {
                  p: '**Expressões para discordar com educação**, que apareceram na conversa:'
                },
                {
                  vocab: [
                    ['I see your point, but...', 'Entendo o seu ponto, mas...'],
                    ['That\'s fair.', 'Faz sentido. / É justo.'],
                    ['I\'ll give you that.', 'Isso eu admito.'],
                    [
                      'Now that\'s something we can agree on.',
                      'Aí está algo em que concordamos.'
                    ]
                  ]
                },
                {
                  vocab: [
                    ['commute', 'o trajeto diário de casa para o trabalho'],
                    ['to switch off', 'desligar-se, relaxar', 'também é desligar um aparelho'],
                    ['proper', 'de verdade, adequado', 'proper meals: refeições de verdade']
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual é a opinião da Nora no começo?',
              ops: [
                'Ela prefere trabalhar de casa',
                'Ela prefere o escritório',
                'Ela não tem opinião'
              ],
              c: 0,
              exp: 'Working from home has changed my life.'
            },
            {
              t: 'escolha',
              p: 'Por que o Sam sente falta do escritório?',
              ops: [
                'É difícil se desligar em casa, e ele aprende mais perguntando aos colegas',
                'Porque a casa dele é longe',
                'Porque ele não tem computador'
              ],
              c: 0,
              exp: 'I find it hard to switch off... I learn so much more when I can just turn around and ask someone.'
            },
            {
              t: 'escolha',
              p: 'Em que ponto o Sam concorda com a Nora?',
              ops: [
                'O trajeto até o trabalho é horrível',
                'Chamadas de vídeo são ótimas',
                'Trabalhar de casa é sempre melhor'
              ],
              c: 0,
              exp: 'I\'ll give you that. The commute is awful.'
            },
            {
              t: 'escolha',
              p: 'Como a conversa termina?',
              ops: [
                'Os dois concordam com um meio-termo: alguns dias em cada lugar',
                'Os dois brigam',
                'A Nora muda totalmente de opinião'
              ],
              c: 0,
              exp: 'Two or three days at the office, the rest at home.'
            },
            {
              t: 'escolha',
              p: '"I see your point, but..." serve para...',
              ops: [
                'Discordar com educação, reconhecendo o argumento do outro',
                'Concordar totalmente',
                'Mudar de assunto'
              ],
              c: 0,
              exp: 'É um jeito educado de abrir uma discordância.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'I\'ll give you that. The commute is awful.',
              ops: [
                'I\'ll give you that. The commute is awful.',
                'I\'ll give you that. The computer is awful.',
                'I gave you that. The commute is awful.'
              ],
              c: 0
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'I see your point, but I actually miss the office.'
            }
          ]
        }
      ]
    }
  ]
});
