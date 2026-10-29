/* Trilha Livre · Inglês do zero · Nível 16: Hipóteses e arrependimentos (B2)
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md.
   ((frase)) tem botão de ouvir; [[americano|britânico]] muda com o sotaque escolhido. */

nivel({
  curso: 'ingles',
  n: 16,
  titulo: 'Hipóteses e arrependimentos',
  faixa: 'B2',
  desc: 'O "se eu tivesse feito", o "devia ter feito" e o "quem dera": a terceira condicional, as condicionais misturadas, should have, could have e wish.',
  videos: [
    {
      titulo: 'English with Lucy',
      canal: 'Lucy Earl',
      obs: 'a terceira condicional e as condicionais misturadas, com a pronúncia rápida de would have',
      url: 'https://www.youtube.com/@EnglishwithLucy'
    },
    {
      titulo: 'BBC Learning English',
      canal: 'BBC',
      obs: 'wish e if only na série de gramática, com exemplos do dia a dia',
      url: 'https://www.youtube.com/@bbclearningenglish'
    },
    {
      titulo: 'Speak English With Vanessa',
      canal: 'Vanessa',
      obs: 'should have, could have e would have na conversa de verdade',
      url: 'https://www.youtube.com/@SpeakEnglishWithVanessa'
    }
  ],
  unidades: [
    {
      id: 'enu27',
      titulo: 'O que poderia ter sido',
      conceito: 'would have · should have · I wish',
      desc: 'Falar do passado que não aconteceu, do que devia ter sido e do que a gente queria que fosse diferente.',
      licoes: [
        {
          id: 'en16l1',
          titulo: 'Se eu tivesse feito: a terceira condicional',
          pre: ['en11l3', 'en14l3'],
          exs: [
            {
              t: 'texto',
              titulo: 'O passado que não aconteceu',
              blocos: [
                {
                  p: 'No nível 11, você viu as frases com if para o que é real e para o que é imaginário agora. Falta uma: a do **passado que não aconteceu**, o nosso "se eu tivesse feito, eu teria...":'
                },
                {
                  fala: 'If I had known, I would have helped you.',
                  trad: 'Se eu soubesse, teria te ajudado.'
                },
                {
                  tabela: {
                    cab: ['Parte', 'Forma', 'Exemplo'],
                    codigo: [],
                    linhas: [
                      ['a condição, com if', 'had + particípio', '((if I had studied))'],
                      ['o resultado', 'would have + particípio', '((I would have passed))']
                    ]
                  }
                },
                {
                  p: '**Por que essa forma?** É a mesma lógica da condicional imaginária, um passo mais para trás. Lá, o passado mostrava distância da realidade: if I had money. Aqui, a situação já ficou no passado, então o verbo vai para o "passado do passado", o past perfect, e o would ganha um have: would have done. O português faz quase igual: "se eu **tivesse** estudado, **teria** passado".'
                },
                {
                  p: '**Na fala, tudo encolhe.** Had vira \'d, como em ((If I\'d known...)), e would have vira would\'ve, que soa "uúdâv". Por isso, muita gente, até nativa, escreve errado "would of". Na escrita, é sempre have.'
                },
                {
                  p: '**Could have e might have** também cabem no resultado: ((If you had called, I could have picked you up.)) (eu poderia ter te buscado) ((If we had left earlier, we might have caught the train.)) (talvez tivéssemos pegado o trem).'
                },
                {
                  p: '**As condicionais misturadas.** Às vezes, algo do passado tem consequência agora. Então as duas formas se misturam: ((If I had taken that job, I would be rich now.)) (Se eu tivesse aceitado aquele emprego, estaria rico agora.) A condição está no passado (had taken), e o resultado, no presente (would be). O contrário também existe: ((If I were more patient, I wouldn\'t have shouted at him.)) (Se eu fosse mais paciente, não teria gritado com ele.)'
                },
                {
                  dialogo: [
                    ['Lia', 'How was the concert?', 'Como foi o show?'],
                    [
                      'Max',
                      'I missed it! If I hadn\'t lost my ticket, I would have gone.',
                      'Perdi! Se eu não tivesse perdido o ingresso, teria ido.'
                    ],
                    [
                      'Lia',
                      'Oh no! If you\'d told me, I could have given you mine. I couldn\'t go either.',
                      'Ah, não! Se você tivesse me contado, eu poderia ter te dado o meu. Eu também não pude ir.'
                    ],
                    [
                      'Max',
                      'Seriously? If I\'d known that, I wouldn\'t be so upset now!',
                      'Sério? Se eu soubesse disso, não estaria tão chateado agora!'
                    ]
                  ]
                }
              ]
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: 'If I ___ studied, I ___ have passed.',
              bank: ['had', 'would', 'have', 'will'],
              c: ['had', 'would'],
              exp: 'Condição: had + particípio. Resultado: would have + particípio.'
            },
            {
              t: 'escolha',
              p: '"Se eu soubesse, teria te ajudado." Como fica?',
              ops: [
                'If I had known, I would have helped you.',
                'If I knew, I would help you.',
                'If I would have known, I had helped you.'
              ],
              c: 0,
              exp: 'O passado que não aconteceu: had known e would have helped.'
            },
            {
              t: 'escolha',
              p: 'Qual destas está escrita certo?',
              ops: ['I would have gone.', 'I would of gone.', 'I would had gone.'],
              c: 0,
              exp: 'Would\'ve soa como "would of", mas na escrita é sempre would have.'
            },
            {
              t: 'escolha',
              p: '"If I had taken that job, I would be rich now." O que a frase diz?',
              ops: [
                'A pessoa não aceitou o emprego no passado, e por isso não está rica hoje',
                'A pessoa vai aceitar o emprego e ficar rica',
                'A pessoa aceitou o emprego e está rica'
              ],
              c: 0,
              exp: 'Condicional misturada: condição no passado, resultado no presente.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Se você tivesse me ligado, eu teria ido."',
              r: ['If you had (called|phoned|rung) me, I would have (gone|come).']
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'If I\'d known, I would\'ve helped.',
              ops: [
                'If I\'d known, I would\'ve helped.',
                'If I know, I would help.',
                'If I\'d known, I wouldn\'t have helped.'
              ],
              c: 0
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Se tivéssemos saído mais cedo, teríamos pegado o trem."',
              r: 'If we had left earlier, we would have caught the train.',
              extra: ['will', 'leave', 'catch'],
              exp: 'Had left na condição; would have caught no resultado.'
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'If I hadn\'t lost my ticket, I would have gone.'
            }
          ]
        },
        {
          id: 'en16l2',
          titulo: 'Should have, could have, would have',
          pre: ['en16l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'O que devia ter sido',
              blocos: [
                {
                  p: 'Modal + **have** + particípio leva o modal para o passado. É assim que o inglês fala de arrependimentos, críticas e possibilidades que ficaram para trás:'
                },
                {
                  tabela: {
                    cab: ['Forma', 'Sentido', 'Exemplo'],
                    codigo: [],
                    linhas: [
                      ['should have', 'devia ter (e não fez)', '((I should have called you.))'],
                      [
                        'shouldn\'t have',
                        'não devia ter (e fez)',
                        '((You shouldn\'t have said that.))'
                      ],
                      [
                        'could have',
                        'podia ter (era possível, mas não aconteceu)',
                        '((You could have asked me!))'
                      ],
                      [
                        'would have',
                        'teria (se algo fosse diferente)',
                        '((I would have come, but I was [[sick|ill]].))'
                      ]
                    ]
                  }
                },
                {
                  p: '**O "devia ter" do português.** Dizemos "eu devia ter ligado". Em inglês, should não tem uma forma de passado própria, então ele se apoia no have: should have called. "I should called" e "I should to have called" não existem.'
                },
                {
                  p: '**Could have também reclama.** ((You could have told me!)) é "você podia ter me contado!", com o mesmo tom de bronca do português.'
                },
                {
                  p: '**Na fala**, o have fica fraquinho: should\'ve soa "xúdâv", could\'ve soa "cúdâv". Na escrita, nunca "should of".'
                },
                {
                  p: '**Um uso educado:** ao ganhar um presente inesperado, diga ((Oh, you shouldn\'t have!)), o nosso "ah, não precisava!".'
                },
                {
                  dialogo: [
                    [
                      'Ana',
                      'I can\'t believe I failed my driving test.',
                      'Não acredito que reprovei no exame de direção.'
                    ],
                    ['Rui', 'What happened?', 'O que aconteceu?'],
                    [
                      'Ana',
                      'I was too nervous. I should have [[practiced|practised]] more. I could have taken a few more lessons.',
                      'Fiquei nervosa demais. Devia ter treinado mais. Podia ter feito mais algumas aulas.'
                    ],
                    [
                      'Rui',
                      'Don\'t be so hard on yourself. I failed twice! You\'ll pass next time.',
                      'Não seja tão dura com você mesma. Eu reprovei duas vezes! Você passa na próxima.'
                    ]
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: '"Eu devia ter estudado mais." Como fica?',
              ops: [
                'I should have studied more.',
                'I should studied more.',
                'I should to have studied more.'
              ],
              c: 0,
              exp: 'Should + have + particípio.'
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: 'It\'s so late! I ___ have left earlier. Now I\'m going to miss the bus.',
              bank: ['should', 'would', 'must'],
              c: ['should'],
              exp: 'Arrependimento: should have.'
            },
            {
              t: 'escolha',
              p: 'Você ganha um presente surpresa. O que diz, para agradecer?',
              ops: ['Oh, you shouldn\'t have!', 'Oh, you should have!', 'Oh, you couldn\'t have!'],
              c: 0,
              exp: 'É o nosso "ah, não precisava!".'
            },
            {
              t: 'escolha',
              p: '"You could have asked me!" Qual é o tom?',
              ops: [
                'Uma reclamação: você podia ter me pedido',
                'Um elogio',
                'Uma pergunta sobre o futuro'
              ],
              c: 0,
              exp: 'Could have aponta uma possibilidade que a pessoa não aproveitou.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Eu não devia ter dito isso."',
              r: ['I shouldn\'t have said (that|this|it).']
            },
            {
              t: 'escolha',
              p: 'Qual destas está escrita certo?',
              ops: ['She should\'ve come.', 'She should of come.', 'She should have came.'],
              c: 0,
              exp: 'Should of é erro de escrita. E o particípio de come é come.'
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Eu teria ido, mas estava doente."',
              r: [
                'I would have gone, but I was [[sick|ill]].',
                'I\'d have gone, but I was [[sick|ill]].'
              ],
              extra: ['will', 'went', 'had']
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'Don\'t be so hard on yourself.'
            }
          ]
        },
        {
          id: 'en16l3',
          titulo: 'I wish e if only: quem dera',
          pre: ['en16l2'],
          exs: [
            {
              t: 'texto',
              titulo: 'Quem dera',
              blocos: [
                {
                  p: '**Wish** é o "quem dera", o "queria que" do português, para coisas que não são como a gente gostaria. O verbo depois dele dá um passo para trás, pela mesma lógica da distância das condicionais:'
                },
                {
                  tabela: {
                    cab: ['Você queria mudar...', 'Forma', 'Exemplo'],
                    codigo: [],
                    linhas: [
                      ['o presente', 'wish + passado', '((I wish I had more time.))'],
                      ['o passado', 'wish + past perfect', '((I wish I had studied harder.))'],
                      [
                        'o que outra pessoa faz',
                        'wish + would',
                        '((I wish you would stop talking.))'
                      ]
                    ]
                  }
                },
                {
                  p: 'Com to be, como no if, o padrão é were: ((I wish I were taller.)) Na conversa, "I wish I was" também é muito comum.'
                },
                {
                  p: '**If only** é a versão mais intensa, quase um suspiro: ((If only I had listened to you!)) (Ah, se eu tivesse te ouvido!)'
                },
                {
                  p: '**Wish não é hope.** Hope é para o que pode acontecer de verdade: ((I hope you pass the exam.)) (Espero que você passe.) Wish é para o que não é real. "I wish you pass" está errado. A exceção são os votos prontos com um substantivo: ((I wish you a happy birthday.))'
                },
                {
                  p: '**Wish + could** é muito usado: ((I wish I could fly.)) (Quem dera eu pudesse voar.) Could é o passado de can, pela mesma regra do passo para trás.'
                },
                {
                  fala: 'I wish I could speak English as well as my teacher.',
                  trad: 'Queria conseguir falar inglês tão bem quanto a minha professora.'
                },
                {
                  fala: 'If only I\'d started learning when I was a kid!',
                  trad: 'Ah, se eu tivesse começado a aprender quando era criança!'
                },
                {
                  dica: 'Nunca é tarde: adultos aprendem vocabulário e gramática mais rápido que crianças, porque já sabem como uma língua funciona. A vantagem das crianças é o sotaque, e isso não impede ninguém de chegar ao C2.',
                  rotulo: 'E a boa notícia'
                }
              ]
            },
            {
              t: 'escolha',
              p: '"Queria ter mais tempo." Como fica?',
              ops: [
                'I wish I had more time.',
                'I wish I have more time.',
                'I hope I had more time.'
              ],
              c: 0,
              exp: 'Para mudar o presente: wish + passado.'
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: 'I wish I ___ studied harder at school. I wish I ___ go back in time.',
              bank: ['had', 'could', 'have', 'can'],
              c: ['had', 'could'],
              exp: 'Arrependimento do passado: had studied. Desejo impossível agora: could.'
            },
            {
              t: 'escolha',
              p: 'Qual está certa?',
              ops: [
                'I hope you get the job.',
                'I wish you get the job.',
                'I wish you will get the job.'
              ],
              c: 0,
              exp: 'Algo possível no futuro pede hope.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Queria que você estivesse aqui."',
              r: ['I wish you were here.']
            },
            {
              t: 'escolha',
              p: '"I wish you would stop complaining." O que a pessoa sente?',
              ops: [
                'Irritação: queria que o outro parasse de reclamar',
                'Saudade',
                'Esperança de algo bom'
              ],
              c: 0,
              exp: 'Wish + would critica o comportamento de alguém.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'If only I\'d listened to you!',
              ops: [
                'If only I\'d listened to you!',
                'If only I listen to you!',
                'If only you\'d listened to me!'
              ],
              c: 0
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Quem dera eu pudesse voar."',
              r: 'I wish I could fly.',
              extra: ['can', 'hope', 'would']
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'I wish I could speak English as well as my teacher.'
            }
          ]
        }
      ]
    }
  ]
});
