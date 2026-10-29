/* Trilha Livre · Inglês do zero · Nível 3: O presente e o futuro
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md.
   ((frase)) tem botão de ouvir; [[americano|britânico]] muda com o sotaque escolhido. */

nivel({
  curso: 'ingles',
  n: 3,
  titulo: 'O presente e o futuro',
  desc: 'Rotina com o presente simples, do e does, o que está acontecendo agora e planos com going to, gonna e will.',
  videos: [
    {
      titulo: 'English in Brazil',
      canal: 'Carina Fragozo',
      obs: 'presente simples, do e does e os erros mais comuns de brasileiros',
      url: 'https://www.youtube.com/user/carinafragozo'
    },
    {
      titulo: 'BBC Learning English',
      canal: 'BBC',
      obs: 'a série de gramática para iniciantes, com present simple e present continuous',
      url: 'https://www.youtube.com/@bbclearningenglish'
    },
    {
      titulo: 'Speak English With Vanessa',
      canal: 'Vanessa',
      obs: 'como os americanos falam do dia a dia e dos planos, com gonna e will',
      url: 'https://www.youtube.com/@SpeakEnglishWithVanessa'
    }
  ],
  unidades: [
    {
      id: 'enu5',
      titulo: 'O presente simples',
      conceito: 'she works · does she?',
      desc: 'Rotina, fatos, o -s da terceira pessoa e o ajudante do e does.',
      licoes: [
        {
          id: 'en3l1',
          titulo: 'O que você faz sempre',
          pre: ['en1l4'],
          exs: [
            {
              t: 'texto',
              titulo: 'Rotina e fatos',
              blocos: [
                {
                  p: 'O **presente simples** fala do que é sempre assim: hábitos, rotina e fatos. ((I work from home.)) (Eu trabalho de casa.) ((Water boils at 100 degrees.)) (A água ferve a 100 graus.)'
                },
                {
                  p: 'A boa notícia: o verbo quase não muda. É igual para I, you, we e they. A única mudança é com **he, she e it**, que ganham um **-s**:'
                },
                {
                  tabela: {
                    cab: ['', 'work (trabalhar)', 'live (morar)'],
                    codigo: [],
                    linhas: [
                      ['I, you, we, they', '((I work))', '((they live))'],
                      ['he, she, it', '((she works))', '((he lives))']
                    ]
                  }
                },
                {
                  p: '**Por que só a terceira pessoa?** O inglês antigo tinha uma terminação diferente para cada pessoa, como o português ainda tem (falo, falas, fala...). Com os séculos, quase todas sumiram. Esse -s é a única que sobreviveu. Por isso ele parece uma regra solta, mas é obrigatório: "she work" soa errado para qualquer nativo.'
                },
                {
                  tabela: {
                    cab: ['Regra da escrita', 'Exemplos'],
                    codigo: [],
                    linhas: [
                      [
                        'Termina em s, sh, ch, x ou o: -es',
                        '((go)) → ((goes)), ((watch)) → ((watches)), ((do)) → ((does))'
                      ],
                      ['Consoante + y: -ies', '((study)) → ((studies)), ((fly)) → ((flies))'],
                      ['Irregular', '((have)) → ((has))']
                    ]
                  }
                },
                {
                  p: 'O som desse -s segue a mesma regra do plural: s em ((works)), z em ((plays)) e uma sílaba a mais em ((watches)). E duas palavras muito comuns têm a vogal diferente do que parece: ((does)) soa como "dâz" e ((says)) soa como "séz".'
                },
                { p: '**A rotina em inglês:**' },
                {
                  vocab: [
                    ['wake up', 'acordar'],
                    ['get up', 'levantar da cama'],
                    ['have breakfast', 'tomar café da manhã'],
                    ['go to work', 'ir para o trabalho'],
                    ['get home', 'chegar em casa'],
                    ['have dinner', 'jantar'],
                    ['go to bed', 'ir dormir']
                  ]
                },
                {
                  dialogo: [
                    ['Kim', 'So what time do you get up?', 'Então, que horas você levanta?'],
                    [
                      'Leo',
                      'Around six. I start work at seven.',
                      'Lá pelas seis. Começo a trabalhar às sete.'
                    ],
                    [
                      'Kim',
                      'Wow, early! My brother works at night, so he sleeps all morning.',
                      'Nossa, cedo! Meu irmão trabalha à noite, então ele dorme a manhã toda.'
                    ]
                  ]
                }
              ]
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: 'My sister ___ in a bank and ___ to work by bus.',
              bank: ['works', 'goes', 'work', 'go'],
              c: ['works', 'goes'],
              exp: 'My sister é she: o verbo ganha -s. Go vira goes.'
            },
            {
              t: 'escolha',
              p: 'Em qual verbo o -s forma uma sílaba a mais?',
              ops: ['watches', 'plays', 'works'],
              c: 0,
              exp: 'Igual ao plural: a sílaba extra só vem depois de sons de s, sh e ch.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Ele estuda à noite."',
              r: ['He studies at night.'],
              exp: 'Study, com consoante + y, vira studies.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'My brother lives in London.',
              ops: [
                'My brother lives in London.',
                'My brother lived in London.',
                'My brothers live in London.'
              ],
              c: 0
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Ela vai para o trabalho de ônibus."',
              r: 'She goes to work by bus.',
              extra: ['go', 'with', 'the'],
              exp: 'De ônibus é by bus, sem artigo.'
            },
            {
              t: 'escolha',
              p: 'Por que "He work here" está errado?',
              ops: [
                'Com he, she e it, o verbo no presente ganha -s: he works',
                'Porque falta o verbo to be',
                'Porque work precisa de -ing'
              ],
              c: 0,
              exp: 'Esse -s é a única terminação que sobrou do inglês antigo, e é obrigatória.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Minha mãe tem dois irmãos."',
              r: [
                'My [[mom|mum]] has two brothers.',
                'My mother has two brothers.',
                'My mother has got two brothers.',
                'My [[mom|mum]] has got two brothers.'
              ],
              exp: 'Have vira has com he, she e it. Mãe na conversa é mom nos EUA e mum no Reino Unido.'
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'I usually wake up at seven.'
            }
          ]
        },
        {
          id: 'en3l2',
          titulo: 'Do e does: o ajudante das perguntas',
          pre: ['en3l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Um verbo que só ajuda',
              blocos: [
                {
                  p: 'Com to be, a pergunta inverte a ordem: Are you...? Com os outros verbos, o inglês precisa de um ajudante: **do** (ou **does** com he, she e it). Ele vai para a frente do sujeito e o verbo principal fica na forma básica.'
                },
                {
                  tabela: {
                    cab: ['Afirmação', 'Pergunta', 'Negativa'],
                    codigo: [],
                    linhas: [
                      [
                        '((You live here.))',
                        '((Do you live here?))',
                        '((You don\'t live here.))'
                      ],
                      [
                        '((She works on Sundays.))',
                        '((Does she work on Sundays?))',
                        '((She doesn\'t work on Sundays.))'
                      ]
                    ]
                  }
                },
                {
                  p: '**Repare no -s.** Na pergunta e na negativa, o -s de works sai do verbo e vai para o ajudante: does. Quem carrega a pessoa e o tempo é o ajudante, então o verbo principal volta para a forma básica. "Does she works?" e "She doesn\'t works" estão errados, porque o -s apareceria duas vezes.'
                },
                {
                  p: '**Por que esse ajudante existe?** Até uns 400 anos atrás, o inglês invertia o verbo direto, como em Shakespeare: "Know you the man?". Depois, o do passou a fazer esse papel em todas as perguntas, e a ordem sujeito + verbo ficou sempre intacta. Hoje ele parece um enfeite para quem fala português, mas é ele que mostra que é uma pergunta.'
                },
                {
                  p: '**Respostas curtas** usam o ajudante: ((Do you like coffee?)) → ((Yes, I do.)) / ((No, I don\'t.)) ((Does he speak English?)) → ((Yes, he does.))'
                },
                {
                  p: 'Com palavra de pergunta, a ordem é: palavra + do/does + sujeito + verbo. ((Where do you live?)) ((What does she want?))'
                },
                {
                  fala: 'What do you do?',
                  trad: 'Com o que você trabalha?',
                  nota: 'Cuidado: não é "o que você faz agora". É a pergunta mais comum sobre profissão. Responda com o trabalho: I\'m a nurse. I work in a [[store|shop]].'
                },
                {
                  dica: 'Do aparece duas vezes em What do you do? A primeira é o ajudante; a segunda é o verbo fazer.',
                  rotulo: 'Dois do'
                }
              ]
            },
            {
              t: 'escreva',
              p: 'Transforme em pergunta: "She works on Saturdays."',
              r: ['Does she work on Saturdays?'],
              exp: 'O -s vai para o ajudante: does. O verbo fica work.'
            },
            {
              t: 'escolha',
              p: 'Qual está certa?',
              ops: ['She doesn\'t like fish.', 'She doesn\'t likes fish.', 'She don\'t like fish.'],
              c: 0,
              exp: 'Com she, o ajudante é doesn\'t, e o verbo volta para a forma básica: like.'
            },
            {
              t: 'escolha',
              p: 'O que quer dizer "What do you do?"',
              ops: ['Com o que você trabalha?', 'O que você está fazendo agora?', 'O que você fez?'],
              c: 0,
              exp: 'É a pergunta sobre profissão. "O que você está fazendo?" seria What are you doing?'
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: 'Where ___ you live? And where ___ your brother live?',
              bank: ['do', 'does', 'are', 'is'],
              c: ['do', 'does']
            },
            {
              t: 'monte',
              p: 'Monte a pergunta: "Você fala inglês?"',
              r: 'Do you speak English?',
              extra: ['Are', 'speaks', 'Does']
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'I don\'t know.',
              ops: ['I don\'t know.', 'I don\'t go.', 'I don\'t no.'],
              c: 0,
              exp: 'Na fala rápida, I don\'t know às vezes vira "I dunno". É informal, mas você vai ouvir muito.'
            },
            { t: 'escreva', p: 'Traduza: "Eu não moro aqui."', r: ['I don\'t live here.'] },
            { t: 'escreva', p: 'Escreva o que você ouviu', ouvir: 'What does your sister do?' }
          ]
        },
        {
          id: 'en3l3',
          titulo: 'Com que frequência?',
          pre: ['en3l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Sempre, às vezes, nunca',
              blocos: [
                {
                  vocab: [
                    ['always', 'sempre', '100%'],
                    ['usually', 'geralmente'],
                    ['often', 'com frequência', 'o t costuma ser mudo: "ófen"'],
                    ['sometimes', 'às vezes'],
                    ['rarely', 'raramente'],
                    ['never', 'nunca', '0%']
                  ]
                },
                {
                  p: '**Onde eles ficam na frase:** antes do verbo principal, mas **depois** do to be.'
                },
                {
                  tabela: {
                    cab: ['Com verbos comuns', 'Com to be'],
                    codigo: [],
                    linhas: [
                      ['((I always drink coffee.))', '((I\'m always late.))'],
                      ['((She never eats meat.))', '((He\'s never at home.))']
                    ]
                  }
                },
                {
                  p: '**Never já é negativo.** Em português, falamos "eu não como nunca". Em inglês, juntar duas negativas soa errado no inglês padrão: é ((I never eat meat.)) e não "I don\'t never eat". O never sozinho já nega.'
                },
                {
                  p: 'Para perguntar: ((How often do you go to the gym?)) (Com que frequência você vai à academia?) Respostas com expressões de tempo, que ficam no fim da frase:'
                },
                {
                  vocab: [
                    ['every day', 'todo dia'],
                    ['once a week', 'uma vez por semana'],
                    ['twice a month', 'duas vezes por mês'],
                    ['three times a year', 'três vezes por ano'],
                    [
                      '[[on weekends|at the weekend]]',
                      'nos fins de semana',
                      'on weekends nos EUA, at the weekend no Reino Unido'
                    ]
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual frase está com o always no lugar certo?',
              ops: [
                'I always walk to school.',
                'I walk always to school.',
                'Always I walk to school.'
              ],
              c: 0,
              exp: 'Always vem antes do verbo principal.'
            },
            {
              t: 'escolha',
              p: 'Qual frase está com o always no lugar certo?',
              ops: ['She\'s always tired.', 'She always is tired.', 'Always she is tired.'],
              c: 0,
              exp: 'Com to be, a palavra de frequência vem depois do verbo.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Eu nunca como carne."',
              r: ['I never eat meat.'],
              exp: 'Never já é negativo: não precisa de don\'t.'
            },
            {
              t: 'escolha',
              p: 'Qual está certa no inglês padrão?',
              ops: ['I never go there.', 'I don\'t never go there.', 'I never don\'t go there.'],
              c: 0,
              exp: 'Duas negativas juntas soam erradas no inglês padrão.'
            },
            {
              t: 'monte',
              p: 'Monte a pergunta: "Com que frequência você vai à academia?"',
              r: 'How often do you go to the gym?',
              extra: ['much', 'does', 'are']
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'I go there twice a week.',
              ops: [
                'I go there twice a week.',
                'I go there once a week.',
                'I go there three times a week.'
              ],
              c: 0
            },
            {
              t: 'escreva',
              p: 'Traduza: "Eu jogo futebol nos fins de semana."',
              r: [
                'I play [[soccer|football]] [[on weekends|at the weekend]].',
                'I play [[soccer|football]] on the weekend.',
                'I play [[soccer|football]] on the weekends.'
              ],
              exp: 'Futebol é soccer nos EUA, onde football é o futebol americano. No Reino Unido, é football.'
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'We usually have dinner at eight.'
            }
          ]
        }
      ]
    },
    {
      id: 'enu6',
      titulo: 'Agora e depois',
      conceito: 'I\'m doing · I\'m gonna',
      desc: 'O presente contínuo, o que muda em relação ao simples e como falar do futuro.',
      licoes: [
        {
          id: 'en3l4',
          titulo: 'O que está acontecendo agora',
          pre: ['en3l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Presente contínuo',
              blocos: [
                {
                  p: 'Para o que está acontecendo **agora**, ou durante um período temporário, o inglês usa to be + verbo com **-ing**: ((I\'m reading.)) (Estou lendo.) ((She\'s working from home this week.)) (Ela está trabalhando de casa esta semana.)'
                },
                {
                  tabela: {
                    cab: [
                      'Presente simples: sempre, hábito',
                      'Presente contínuo: agora, temporário'
                    ],
                    codigo: [],
                    linhas: [
                      ['((I work in a bank.))', '((I\'m working right now.))'],
                      ['((She plays the guitar.))', '((She\'s playing the guitar.))'],
                      ['((What do you do?)) (profissão)', '((What are you doing?)) (agora)']
                    ]
                  }
                },
                {
                  tabela: {
                    cab: ['Regra do -ing', 'Exemplos'],
                    codigo: [],
                    linhas: [
                      [
                        'Termina em e: tira o e',
                        '((make)) → ((making)), ((write)) → ((writing))'
                      ],
                      [
                        'Uma vogal + uma consoante, sílaba forte: dobra a consoante',
                        '((run)) → ((running)), ((sit)) → ((sitting))'
                      ],
                      ['Termina em ie: vira y', '((lie)) → ((lying)), ((die)) → ((dying))']
                    ]
                  }
                },
                {
                  p: '**Verbos que não vão para o -ing.** Alguns verbos falam de estados, e não de ações: saber, gostar, querer, precisar, entender, acreditar, ter (no sentido de possuir). Eles ficam no presente simples mesmo quando você fala de agora: ((I know.)) (não "I\'m knowing"), ((I need help.)), ((I understand.)), ((She wants a coffee.))'
                },
                {
                  p: '**Por quê?** O -ing mostra algo em andamento, com começo e fim. Saber ou querer não "andam": são estados. Quando uma marca famosa diz "I\'m loving it", está quebrando a regra de propósito, para soar diferente e chamar atenção.'
                },
                {
                  dialogo: [
                    ['Ana', 'Hey, what are you doing?', 'Oi, o que você está fazendo?'],
                    ['Ben', 'I\'m cooking dinner. Why?', 'Fazendo o jantar. Por quê?'],
                    [
                      'Ana',
                      'We\'re watching a movie at my place. Do you want to come?',
                      'A gente está vendo um filme lá em casa. Quer vir?'
                    ],
                    ['Ben', 'Sure, I\'ll be there in an hour!', 'Claro, chego aí em uma hora!']
                  ]
                }
              ]
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: 'Look! It ___ raining. I ___ an umbrella.',
              bank: ['is', 'need', 'am needing', 'are'],
              c: ['is', 'need'],
              exp: 'Está chovendo agora: is raining. Need é um estado: fica no presente simples.'
            },
            {
              t: 'escolha',
              p: 'Qual está certa?',
              ops: ['I know the answer.', 'I\'m knowing the answer.', 'I\'m know the answer.'],
              c: 0,
              exp: 'Know é um estado, não uma ação em andamento: fica no presente simples.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "O que você está fazendo?"',
              r: ['What are you doing?']
            },
            {
              t: 'escolha',
              p: 'Sua amiga pergunta "What do you do?". O que ela quer saber?',
              ops: [
                'Sua profissão',
                'O que você está fazendo neste momento',
                'O que você fez ontem'
              ],
              c: 0,
              exp: 'What do you do? é sobre o trabalho. Para "agora", seria What are you doing?'
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Ela está estudando agora."',
              r: 'She\'s studying now.',
              extra: ['studing', 'study', 'does'],
              exp: 'Study + ing é studying: o y fica.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'We\'re watching a movie.',
              ops: ['We\'re watching a movie.', 'We watch a movie.', 'We\'re washing the car.'],
              c: 0
            },
            {
              t: 'escreva',
              p: 'Traduza: "Eu preciso de ajuda."',
              r: ['I need (some |)help.'],
              exp: 'Need é um estado: I need, e não I\'m needing.'
            },
            { t: 'escreva', p: 'Escreva o que você ouviu', ouvir: 'I\'m waiting for the bus.' }
          ]
        },
        {
          id: 'en3l5',
          titulo: 'Planos: going to, gonna e will',
          pre: ['en3l4'],
          exs: [
            {
              t: 'texto',
              titulo: 'Três jeitos de falar do futuro',
              blocos: [
                {
                  p: '**Going to** é para planos que você já decidiu e para o que dá para prever pelo que se vê: ((I\'m going to visit my grandma on Sunday.)) ((Look at those clouds. It\'s going to rain.))'
                },
                {
                  p: 'Na fala, going to quase sempre vira ((gonna)): ((I\'m gonna call her tomorrow.)) É o mesmo significado, só que falado rápido. Use gonna na conversa e em mensagens informais, mas escreva going to em textos formais, como e-mails de trabalho e provas.'
                },
                {
                  p: '**Will** é para decisões tomadas na hora, promessas, ofertas e opiniões sobre o futuro. Na fala, quase sempre vira ((I\'ll)), e a negativa é ((won\'t)) (will not).'
                },
                {
                  tabela: {
                    cab: ['Situação', 'Exemplo'],
                    codigo: [],
                    linhas: [
                      ['Decisão na hora', '((I\'ll have the chicken, please.))'],
                      ['Promessa', '((I won\'t tell anyone. I promise.))'],
                      ['Oferta', '((I\'ll help you with that.))'],
                      ['Opinião sobre o futuro', '((I think it\'ll be fine.))']
                    ]
                  }
                },
                {
                  p: '**Compromisso marcado:** para algo já combinado, com data e hora, o inglês usa até o presente contínuo: ((I\'m meeting Ana tomorrow at five.)) (Vou encontrar a Ana amanhã às cinco.)'
                },
                {
                  dialogo: [
                    [
                      'Mia',
                      'What are you gonna do this weekend?',
                      'O que você vai fazer neste fim de semana?'
                    ],
                    [
                      'Dan',
                      'I\'m gonna visit my parents. You?',
                      'Vou visitar meus pais. E você?'
                    ],
                    [
                      'Mia',
                      'No plans yet. Maybe I\'ll just stay home.',
                      'Ainda sem planos. Talvez eu só fique em casa.'
                    ],
                    [
                      'Dan',
                      'If you\'re bored, call me. We\'ll think of something.',
                      'Se ficar entediada, me liga. A gente pensa em alguma coisa.'
                    ]
                  ]
                },
                {
                  dica: 'A diferença mais útil: going to = já estava decidido antes de você falar. Will = decidiu agora, enquanto fala. No restaurante, olhando o cardápio, é I\'ll have the soup.',
                  rotulo: 'Resumo'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'No restaurante, olhando o cardápio, você decide o prato. O que diz?',
              ops: [
                'I\'ll have the soup, please.',
                'I\'m going to have the soup, please.',
                'I have the soup, please.'
              ],
              c: 0,
              exp: 'Decisão tomada na hora: will.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Eu vou te ajudar." (uma oferta, na hora)',
              r: ['I\'ll help you.', 'I will help you.']
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'I\'m gonna call her tomorrow.',
              ops: [
                'I\'m gonna call her tomorrow.',
                'I\'m gonna call her today.',
                'I\'m gonna tell her tomorrow.'
              ],
              c: 0
            },
            {
              t: 'escolha',
              p: 'Onde não se deve escrever gonna?',
              ops: [
                'Num e-mail para o seu chefe ou numa redação',
                'Numa mensagem para um amigo',
                'Numa legenda de rede social'
              ],
              c: 0,
              exp: 'Gonna é o going to falado. Em textos formais, escreva going to.'
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Vai chover."',
              r: 'It\'s going to rain.',
              extra: ['will', 'go', 'raining'],
              exp: 'Previsão pelo que se vê (as nuvens): going to.'
            },
            {
              t: 'complete',
              p: 'Complete a promessa:',
              code: 'I ___ tell anyone. I promise!',
              bank: ['won\'t', 'don\'t', 'am not'],
              c: ['won\'t'],
              exp: 'Promessa é com will. Na negativa, will not vira won\'t.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Vou encontrar a Ana amanhã." (já combinado)',
              r: [
                'I\'m meeting Ana tomorrow.',
                'I\'m going to meet Ana tomorrow.',
                'I\'m gonna meet Ana tomorrow.',
                'I will meet Ana tomorrow.'
              ],
              exp: 'Para algo marcado, o mais natural é o presente contínuo: I\'m meeting Ana tomorrow.'
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'What are you going to do this weekend?'
            }
          ]
        }
      ]
    }
  ]
});
