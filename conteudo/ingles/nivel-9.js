/* Trilha Livre · Inglês do zero · Nível 9: Poder, dever e as condições
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md.
   ((frase)) tem botão de ouvir; [[americano|britânico]] muda com o sotaque escolhido. */

nivel({
  curso: 'ingles',
  n: 9,
  titulo: 'Poder, dever e as condições',
  desc: 'Can, could, should, must e have to, a armadilha do mustn\'t, e as frases com if.',
  videos: [
    {
      titulo: 'English in Brazil',
      canal: 'Carina Fragozo',
      obs: 'modal verbs explicados em português',
      url: 'https://www.youtube.com/user/carinafragozo'
    },
    {
      titulo: 'BBC Learning English',
      canal: 'BBC',
      obs: 'condicionais na série de gramática, com exemplos do dia a dia',
      url: 'https://www.youtube.com/@bbclearningenglish'
    },
    {
      titulo: 'Speak English With Vanessa',
      canal: 'Vanessa',
      obs: 'could, would e should em conversas reais',
      url: 'https://www.youtube.com/@SpeakEnglishWithVanessa'
    }
  ],
  unidades: [
    {
      id: 'enu15',
      titulo: 'Os modais e o if',
      conceito: 'can · should · if',
      desc: 'Habilidade, permissão, conselho, obrigação e as três condicionais mais usadas.',
      licoes: [
        {
          id: 'en9l1',
          titulo: 'Can e could',
          pre: ['en3l2'],
          exs: [
            {
              t: 'texto',
              titulo: 'Poder: saber, conseguir, ter permissão',
              blocos: [
                {
                  p: '**Can** cobre três sentidos que o português separa: saber fazer, como em ((I can swim.)) (sei nadar); conseguir, como em ((I can\'t hear you.)) (não consigo te ouvir); e ter permissão, como em ((Can I sit here?)) (posso sentar aqui?).'
                },
                {
                  p: 'Can é um **modal**, e os modais têm regras próprias: não ganham -s (é ((she can)), nunca "she cans"), não usam do nas perguntas (é ((Can you help me?)), sem do) e o verbo depois deles fica na forma básica, sem to (é ((I can go)), nunca "I can to go").'
                },
                {
                  p: '**Por que os modais são assim?** Eles vêm de verbos antigos que já se comportavam de um jeito especial, e o uso constante congelou a forma. Pense neles como peças fixas que se encaixam antes do verbo.'
                },
                { p: '**Could** é o passado de can e também a forma educada:' },
                {
                  tabela: {
                    cab: ['Sentido', 'Exemplo'],
                    codigo: [],
                    linhas: [
                      ['Sabia, conseguia (passado)', '((I could read when I was four.))'],
                      ['Pedido educado', '((Could you help me, please?))'],
                      ['Possibilidade', '((It could rain later.))']
                    ]
                  }
                },
                {
                  p: 'Para tempos que o can não tem (futuro, present perfect), usa-se **be able to**: ((I\'ll be able to help you tomorrow.)) (Vou poder te ajudar amanhã.)'
                },
                { pares: [['I can do it.', 'I can\'t do it.', 'can fraco × can\'t forte']] }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual está certa?',
              ops: [
                'She can speak three languages.',
                'She cans speak three languages.',
                'She can to speak three languages.'
              ],
              c: 0,
              exp: 'Modais não ganham -s, e o verbo depois deles vem sem to.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Posso sentar aqui?"',
              r: ['Can I sit here?', 'Could I sit here?', 'May I sit here?']
            },
            {
              t: 'escreva',
              p: 'Traduza: "Eu não consigo te ouvir."',
              r: ['I can\'t hear you.']
            },
            {
              t: 'escolha',
              p: 'Qual pedido é o mais educado?',
              ops: [
                'Could you open the window, please?',
                'Can you open the window?',
                'Open the window.'
              ],
              c: 0,
              exp: 'Could suaviza o pedido.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'I can\'t do it.',
              ops: ['I can\'t do it.', 'I can do it.'],
              c: 0,
              exp: 'Can\'t é forte e longo; can, na afirmativa, é fraco.'
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Eu sabia ler quando tinha quatro anos."',
              r: 'I could read when I was four.',
              extra: ['can', 'had', 'years']
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'Could you help me, please?'
            }
          ]
        },
        {
          id: 'en9l2',
          titulo: 'Should, must e have to',
          pre: ['en9l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Conselho e obrigação',
              blocos: [
                {
                  p: '**Should** é conselho, o nosso "deveria": ((You should drink more water.)) ((You shouldn\'t work so late.))'
                },
                {
                  p: '**Must** e **have to** são obrigação, o nosso "tem que": ((I have to work tomorrow.)) ((You must wear a seatbelt.)) Na conversa, have to é bem mais comum. Must aparece em regras escritas e em obrigações que a própria pessoa sente: ((I must call my [[mom|mum]].))'
                },
                { p: '**A armadilha:** na negativa, os dois se separam completamente.' },
                {
                  tabela: {
                    cab: ['Forma', 'Sentido', 'Exemplo'],
                    codigo: [],
                    linhas: [
                      [
                        'mustn\'t',
                        'proibido: não pode',
                        '((You mustn\'t smoke here.)) (É proibido fumar aqui.)'
                      ],
                      [
                        'don\'t have to',
                        'não é obrigatório: não precisa',
                        '((You don\'t have to come.)) (Você não precisa vir.)'
                      ]
                    ]
                  }
                },
                {
                  p: 'Confundir os dois muda tudo: dizer a um convidado "You mustn\'t come" é proibir a pessoa de vir, quando você só queria dizer que não era obrigado.'
                },
                {
                  p: '**Para não esquecer:** have to se conjuga como verbo comum, como em ((she has to)) e ((did you have to?)), e na fala vira "háfta": ((I have to go.))'
                },
                {
                  dica: 'Must também serve para deduções: She must be tired = ela deve estar cansada (tenho quase certeza). É o mesmo "dever" do português, com outro sentido.',
                  rotulo: 'Um must diferente'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Seu amigo está gripado. O que você aconselha?',
              ops: ['You should rest.', 'You must to rest.', 'You don\'t have to rest.'],
              c: 0,
              exp: 'Conselho: should. Lembre: modais não levam to depois.'
            },
            {
              t: 'escolha',
              p: '"You mustn\'t park here." O que quer dizer?',
              ops: [
                'É proibido estacionar aqui',
                'Você não precisa estacionar aqui',
                'Você deveria estacionar aqui'
              ],
              c: 0,
              exp: 'Mustn\'t é proibição.'
            },
            {
              t: 'escolha',
              p: '"You don\'t have to bring anything." O que quer dizer?',
              ops: [
                'Você não precisa trazer nada',
                'Você não pode trazer nada',
                'Você deveria trazer algo'
              ],
              c: 0,
              exp: 'Don\'t have to: não é obrigatório.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Eu tenho que trabalhar amanhã."',
              r: [
                'I have to work tomorrow.',
                'I must work tomorrow.',
                'I\'ve got to work tomorrow.',
                'I gotta work tomorrow.'
              ]
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: 'She ___ to wake up early. You ___ worry, it\'s fine.',
              bank: ['has', 'don\'t have to', 'have', 'mustn\'t'],
              c: ['has', 'don\'t have to'],
              exp: 'She has to: com she, have vira has. Não precisa se preocupar: don\'t have to.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'You should drink more water.',
              ops: [
                'You should drink more water.',
                'You shouldn\'t drink more water.',
                'You could drink more water.'
              ],
              c: 0
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Você não precisa vir."',
              r: ['You don\'t have to come.', 'You don\'t need to come.'],
              extra: ['mustn\'t', 'need', 'to']
            },
            { t: 'escreva', p: 'Escreva o que você ouviu', ouvir: 'I have to go now.' }
          ]
        },
        {
          id: 'en9l3',
          titulo: 'Se: as condicionais',
          pre: ['en9l1', 'en4l2'],
          exs: [
            {
              t: 'texto',
              titulo: 'If',
              blocos: [
                {
                  p: 'Frases com **if** (se) têm três formas muito usadas. O que muda é **o quanto aquilo é real**.'
                },
                {
                  tabela: {
                    cab: ['Tipo', 'Estrutura', 'Exemplo'],
                    codigo: [],
                    linhas: [
                      [
                        'Sempre verdade',
                        'if + presente, presente',
                        '((If you heat ice, it melts.))'
                      ],
                      [
                        'Possível, real',
                        'if + presente, will',
                        '((If it rains, I\'ll stay home.))'
                      ],
                      [
                        'Imaginário',
                        'if + passado, would',
                        '((If I had money, I would travel.))'
                      ]
                    ]
                  }
                },
                {
                  p: '**Atenção à segunda:** depois do if, o inglês usa o **presente**, mesmo falando do futuro. "If it will rain" está errado. Em português, também dizemos "se chover", e não "se vai chover".'
                },
                {
                  p: '**Por que o passado na terceira?** Em ((If I had money...)), não se fala do passado: fala-se de algo que não é real agora. O inglês usa o passado como uma forma de **distância**: assim como o passado está longe no tempo, a situação imaginária está longe da realidade. O português faz algo parecido com "se eu tivesse".'
                },
                {
                  p: 'Com to be, na condição imaginária, o padrão é were para todas as pessoas: ((If I were you, I would go.)) (Se eu fosse você, eu iria.) Na conversa também se ouve "if I was", mas a frase "If I were you" é fixa.'
                },
                { p: 'Na fala, would vira **\'d**: ((I\'d travel)), ((she\'d say yes)).' },
                {
                  dialogo: [
                    [
                      'Mia',
                      'If you could live anywhere, where would you go?',
                      'Se você pudesse morar em qualquer lugar, para onde iria?'
                    ],
                    [
                      'Dan',
                      'Probably Portugal. If I spoke better English, I\'d try Canada.',
                      'Provavelmente Portugal. Se eu falasse inglês melhor, tentaria o Canadá.'
                    ],
                    [
                      'Mia',
                      'Your English is good! If you [[practice|practise]] every day, you\'ll get there.',
                      'Seu inglês é bom! Se você praticar todo dia, você chega lá.'
                    ]
                  ]
                }
              ]
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: 'If it ___ tomorrow, I ___ stay home.',
              bank: ['rains', 'will', 'will rain', 'would'],
              c: ['rains', 'will'],
              exp: 'Depois do if, presente: rains. Na outra parte, will.'
            },
            {
              t: 'escolha',
              p: 'Qual está certa?',
              ops: [
                'If I had more time, I\'d learn to play the guitar.',
                'If I would have more time, I learn the guitar.',
                'If I have more time, I would learned the guitar.'
              ],
              c: 0,
              exp: 'Situação imaginária: if + passado, would + verbo.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Se eu fosse você, eu iria."',
              r: [
                'If I were you, I would go.',
                'If I were you, I\'d go.',
                'If I was you, I would go.',
                'If I was you, I\'d go.'
              ]
            },
            {
              t: 'escolha',
              p: 'Por que "If I had money" usa o passado?',
              ops: [
                'O passado aqui mostra distância da realidade: não é real agora',
                'Porque a frase fala do passado',
                'Porque have é irregular'
              ],
              c: 0,
              exp: 'É um "passado de imaginação", como o nosso "se eu tivesse".'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'If it rains, I\'ll stay home.',
              ops: [
                'If it rains, I\'ll stay home.',
                'If it rained, I\'d stay home.',
                'If it rains, I stay home.'
              ],
              c: 0
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Se você praticar, vai melhorar."',
              r: 'If you [[practice|practise]], you\'ll get better.',
              extra: ['will', 'practices', 'would'],
              exp: 'O verbo praticar se escreve practice nos EUA e practise no Reino Unido.'
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'If I had more time, I would travel.'
            }
          ]
        }
      ]
    }
  ]
});
