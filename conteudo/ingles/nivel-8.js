/* Trilha Livre · Inglês do zero · Nível 8: O present perfect
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md.
   ((frase)) tem botão de ouvir; [[americano|britânico]] muda com o sotaque escolhido. */

nivel({
  curso: 'ingles',
  n: 8,
  titulo: 'O present perfect',
  desc: 'O tempo verbal que não existe em português: have + particípio, for e since, ever, already, yet, just, e quando usar o passado simples.',
  videos: [
    {
      titulo: 'English in Brazil',
      canal: 'Carina Fragozo',
      obs: 'present perfect explicado para brasileiros, com os erros mais comuns',
      url: 'https://www.youtube.com/user/carinafragozo'
    },
    {
      titulo: 'BBC Learning English',
      canal: 'BBC',
      obs: 'present perfect na série de gramática, com exercícios',
      url: 'https://www.youtube.com/@bbclearningenglish'
    },
    {
      titulo: 'English with Lucy',
      canal: 'Lucy Earl',
      obs: 'present perfect × past simple, em inglês britânico',
      url: 'https://www.youtube.com/@EnglishwithLucy'
    }
  ],
  unidades: [
    {
      id: 'enu14',
      titulo: 'O tempo que liga passado e presente',
      conceito: 'I have lived',
      desc: 'Have + particípio para o que começou no passado e continua, para experiências e para o que acabou de acontecer.',
      licoes: [
        {
          id: 'en8l1',
          titulo: 'Have + particípio: o que continua até hoje',
          pre: ['en4l2'],
          exs: [
            {
              t: 'texto',
              titulo: 'Um tempo que o português não tem',
              blocos: [
                {
                  p: 'Em português, dizemos "**moro** aqui há cinco anos", no presente. Em inglês, o presente simples não funciona aqui: "I live here for five years" está errado. O inglês usa o **present perfect**: ((I have lived here for five years.))'
                },
                {
                  p: '**Por quê?** O inglês enxerga esse período como um bloco que começou no passado e vem **até agora**. O presente simples fala só do agora; o passado simples, só do que acabou. Para "do passado até hoje", existe um tempo próprio: have (ou has) + particípio.'
                },
                {
                  tabela: {
                    cab: ['Pessoa', 'Present perfect'],
                    codigo: [],
                    linhas: [
                      ['I, you, we, they', '((I\'ve lived)), ((they\'ve worked))'],
                      ['he, she, it', '((she\'s lived)), ((he\'s worked))']
                    ]
                  }
                },
                {
                  p: 'O **particípio** dos regulares é igual ao passado, com -ed: lived, worked, studied. Os irregulares têm uma terceira forma, que vale aprender junto com o passado:'
                },
                {
                  vocab: [
                    ['go, went, gone', 'ir'],
                    ['be, was, been', 'ser, estar'],
                    ['do, did, done', 'fazer'],
                    ['see, saw, seen', 'ver'],
                    ['eat, ate, eaten', 'comer'],
                    ['know, knew, known', 'saber, conhecer'],
                    ['have, had, had', 'ter'],
                    ['write, wrote, written', 'escrever']
                  ]
                },
                {
                  p: '**For ou since?** Os dois traduzem o "há" ou o "desde", mas de jeitos diferentes. **For** é a duração: ((for five years)), ((for a long time)). **Since** é o ponto de partida: ((since 2020)), ((since Monday)), ((since I was a kid)).'
                },
                {
                  tabela: {
                    cab: ['Português', 'Inglês'],
                    codigo: [],
                    linhas: [
                      ['Moro aqui há cinco anos.', '((I\'ve lived here for five years.))'],
                      ['Trabalho aqui desde 2021.', '((I\'ve worked here since 2021.))'],
                      ['Eu a conheço desde criança.', '((I\'ve known her since I was a kid.))'],
                      [
                        'Há quanto tempo você estuda inglês?',
                        '((How long have you studied English?))'
                      ]
                    ]
                  }
                },
                {
                  dica: 'Para ações que continuam acontecendo, o inglês também usa have been + -ing: I\'ve been studying English for two years. O sentido é quase o mesmo; essa forma destaca a ação em andamento.',
                  rotulo: 'Uma variação muito comum'
                }
              ]
            },
            {
              t: 'escolha',
              p: '"Moro aqui há cinco anos." Como fica?',
              ops: [
                'I\'ve lived here for five years.',
                'I live here for five years.',
                'I live here since five years.'
              ],
              c: 0,
              exp: 'Do passado até agora: present perfect, com for para a duração.'
            },
            {
              t: 'complete',
              p: 'Complete com for ou since:',
              code: 'I\'ve worked here ___ 2021, and she\'s worked here ___ ten years.',
              bank: ['since', 'for', 'ago'],
              c: ['since', 'for'],
              exp: 'Since + ponto de partida (2021). For + duração (ten years).'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Eu a conheço desde criança."',
              r: [
                'I\'ve known her since I was a kid.',
                'I\'ve known her since I was a child.',
                'I have known her since childhood.'
              ],
              exp: 'Know está no present perfect: have known.'
            },
            {
              t: 'monte',
              p: 'Monte a pergunta: "Há quanto tempo você mora aqui?"',
              r: ['How long have you lived here?', 'How long have you been living here?'],
              extra: ['do', 'live', 'time']
            },
            {
              t: 'escolha',
              p: 'Qual é o particípio de go?',
              ops: ['gone', 'went', 'goed'],
              c: 0,
              exp: 'Go, went, gone.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'She\'s been here since Monday.',
              ops: [
                'She\'s been here since Monday.',
                'She was here on Monday.',
                'She\'s here since Monday.'
              ],
              c: 0
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'I\'ve lived here for five years.'
            }
          ]
        },
        {
          id: 'en8l2',
          titulo: 'Ever, never, already, yet e just',
          pre: ['en8l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Experiências e o que acabou de acontecer',
              blocos: [
                {
                  p: 'O present perfect também fala de **experiências de vida**, sem dizer quando. ((Have you ever been to London?)) (Você já foi a Londres alguma vez?) ((I\'ve never eaten sushi.)) (Nunca comi sushi.)'
                },
                {
                  p: 'Repare em **been** e **gone**. ((She\'s been to London)) quer dizer que ela já foi e voltou: é uma experiência. ((She\'s gone to London)) quer dizer que ela foi e está lá agora.'
                },
                {
                  tabela: {
                    cab: ['Palavra', 'Sentido', 'Exemplo'],
                    codigo: [],
                    linhas: [
                      ['ever', 'alguma vez (em perguntas)', '((Have you ever tried it?))'],
                      ['never', 'nunca', '((I\'ve never seen snow.))'],
                      [
                        'already',
                        'já (mais cedo do que se esperava)',
                        '((I\'ve already finished.))'
                      ],
                      [
                        'yet',
                        'já (em perguntas) / ainda (em negativas)',
                        '((Have you finished yet?)) ((I haven\'t finished yet.))'
                      ],
                      ['just', 'acabou de', '((I\'ve just arrived.))']
                    ]
                  }
                },
                {
                  p: '**Acabar de fazer** é um caso que todo brasileiro precisa: em inglês, é have + just + particípio. ((I\'ve just had lunch.)) (Acabei de almoçar.) Nos EUA, também se ouve no passado simples: ((I just had lunch.))'
                },
                {
                  dialogo: [
                    [
                      'Ana',
                      'Have you ever been to a concert abroad?',
                      'Você já foi a um show fora do país?'
                    ],
                    ['Ben', 'No, never. Have you?', 'Não, nunca. E você?'],
                    [
                      'Ana',
                      'Yes, I\'ve been to two in Buenos Aires.',
                      'Já, fui a dois em Buenos Aires.'
                    ],
                    [
                      'Ben',
                      'Lucky you! Have you bought tickets for the next one yet?',
                      'Que sorte! Já comprou ingresso para o próximo?'
                    ],
                    [
                      'Ana',
                      'Not yet. They\'ve just announced the dates.',
                      'Ainda não. Acabaram de anunciar as datas.'
                    ]
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: '"Você já foi a Londres?" Como se pergunta?',
              ops: [
                'Have you ever been to London?',
                'Did you ever go in London?',
                'Are you ever been to London?'
              ],
              c: 0,
              exp: 'Experiência de vida, sem dizer quando: present perfect com ever.'
            },
            {
              t: 'escolha',
              p: '"She\'s gone to Paris." Onde ela está agora?',
              ops: ['Em Paris', 'De volta em casa', 'A caminho de casa'],
              c: 0,
              exp: 'Gone: foi e está lá. Been: foi e voltou.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Acabei de chegar."',
              r: [
                'I\'ve just arrived.',
                'I just arrived.',
                'I\'ve just got here.',
                'I just got here.',
                'I\'ve just gotten here.'
              ]
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: 'I haven\'t finished ___. Have you ___ seen this movie?',
              bank: ['yet', 'ever', 'already', 'just'],
              c: ['yet', 'ever'],
              exp: 'Yet no fim da negativa; ever nas perguntas sobre experiência.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Eu nunca vi neve."',
              r: ['I\'ve never seen snow.', 'I have never seen snow.']
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'I\'ve already finished.',
              ops: ['I\'ve already finished.', 'I haven\'t finished yet.', 'I\'ve just finished.'],
              c: 0
            },
            { t: 'escreva', p: 'Escreva o que você ouviu', ouvir: 'Have you ever tried it?' }
          ]
        },
        {
          id: 'en8l3',
          titulo: 'Present perfect ou passado simples?',
          pre: ['en8l2'],
          exs: [
            {
              t: 'texto',
              titulo: 'A pergunta que decide',
              blocos: [
                {
                  p: 'A dúvida mais comum: ((I saw that movie)) ou ((I\'ve seen that movie))? As duas querem dizer "eu vi esse filme". O que decide é uma pergunta: **o momento está terminado e foi dito (ou é óbvio)?**'
                },
                {
                  tabela: {
                    cab: ['Passado simples', 'Present perfect'],
                    codigo: [],
                    linhas: [
                      ['tempo terminado e conhecido', 'sem tempo definido, ou até agora'],
                      [
                        '((I saw it last week.))',
                        '((I\'ve seen it.)) (já vi, não importa quando)'
                      ],
                      ['((I lived in Recife in 2019.))', '((I\'ve lived here since 2019.))'],
                      [
                        '((She called me yesterday.))',
                        '((She\'s called me three times today.)) (o dia ainda não acabou)'
                      ]
                    ]
                  }
                },
                {
                  p: 'Palavras de tempo terminado pedem o passado simples: ((yesterday)), ((last week)), ((in 2019)), ((two years ago)), ((when I was a kid)). Por isso "I have seen it yesterday" está errado: yesterday já acabou.'
                },
                {
                  p: '**Numa conversa**, é comum começar com o present perfect (a experiência) e passar para o passado simples quando entram os detalhes:'
                },
                {
                  dialogo: [
                    ['Kim', 'Have you ever been to Chile?', 'Você já foi ao Chile?'],
                    ['Leo', 'Yes, I have. I went there in 2022.', 'Já. Fui em 2022.'],
                    ['Kim', 'Did you like it?', 'Gostou?'],
                    [
                      'Leo',
                      'I loved it. We visited the desert and ate amazing food.',
                      'Amei. Visitamos o deserto e comemos uma comida incrível.'
                    ]
                  ]
                },
                {
                  dica: 'No inglês americano informal, o passado simples aparece com already, just e yet: Did you eat yet? I already did it. No britânico e na escrita formal, o present perfect continua sendo o padrão nesses casos.',
                  rotulo: 'Diferença de sotaque'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual está certa?',
              ops: [
                'I saw that movie yesterday.',
                'I have seen that movie yesterday.',
                'I have saw that movie yesterday.'
              ],
              c: 0,
              exp: 'Yesterday é um tempo terminado: passado simples.'
            },
            {
              t: 'escolha',
              p: 'Qual está certa?',
              ops: [
                'I\'ve seen that movie three times.',
                'I saw that movie since 2020.',
                'I\'ve seen that movie last year.'
              ],
              c: 0,
              exp: 'Sem tempo terminado, contando até agora: present perfect.'
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: 'I ___ to Chile in 2022. I ___ been there twice.',
              bank: ['went', 'have', 'had', 'go'],
              c: ['went', 'have'],
              exp: 'In 2022: passado simples. Twice, até hoje: present perfect.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Eu morei em Recife em 2019."',
              r: ['I lived in Recife in 2019.'],
              exp: 'Um tempo terminado (2019): passado simples.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'Did you like it?',
              ops: ['Did you like it?', 'Have you liked it?', 'Do you like it?'],
              c: 0
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Eu fui lá há dois anos."',
              r: 'I went there two years ago.',
              extra: ['have', 'gone', 'since']
            },
            { t: 'escreva', p: 'Escreva o que você ouviu', ouvir: 'She called me yesterday.' }
          ]
        }
      ]
    }
  ]
});
