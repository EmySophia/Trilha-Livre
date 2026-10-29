/* Trilha Livre · Inglês do zero · Nível 10: Ler em inglês e o Enem
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md.
   ((frase)) tem botão de ouvir; [[americano|britânico]] muda com o sotaque escolhido. */

nivel({
  curso: 'ingles',
  n: 10,
  titulo: 'Ler em inglês e o Enem',
  desc: 'Cognatos e falsos cognatos, estratégias para ler sem traduzir tudo e textos no estilo do Enem, com áudio.',
  videos: [
    {
      titulo: 'English in Brazil',
      canal: 'Carina Fragozo',
      obs: 'falsos cognatos e dicas de leitura em inglês',
      url: 'https://www.youtube.com/user/carinafragozo'
    },
    {
      titulo: 'BBC Learning English',
      canal: 'BBC',
      obs: 'notícias curtas com áudio e transcrição, para treinar leitura e escuta juntas',
      url: 'https://www.youtube.com/@bbclearningenglish'
    },
    {
      tipo: 'texto',
      titulo: 'Dicionário Cambridge',
      canal: 'Cambridge',
      obs: 'quando travar numa palavra, procure aqui e ouça a pronúncia',
      url: 'https://dictionary.cambridge.org/pt/'
    }
  ],
  unidades: [
    {
      id: 'enu16',
      titulo: 'Lendo de verdade',
      conceito: 'skim · scan · context',
      desc: 'Palavras parecidas com o português, estratégias de leitura e textos maiores.',
      licoes: [
        {
          id: 'en10l1',
          titulo: 'Cognatos e falsos cognatos',
          exs: [
            {
              t: 'texto',
              titulo: 'Palavras que você já sabe, e as que enganam',
              blocos: [
                {
                  p: 'Quase metade do vocabulário do inglês veio do latim e do francês, os mesmos parentes do português. Por isso, muitas palavras você já entende sem estudar: ((information)), ((important)), ((university)), ((possible)), ((economy)). Elas se chamam **cognatos**, e são a sua maior vantagem na leitura.'
                },
                {
                  p: 'Mas algumas parecem iguais e querem dizer outra coisa. São os **falsos cognatos**, e eles adoram aparecer em provas:'
                },
                {
                  vocab: [
                    [
                      'actually',
                      'na verdade',
                      'não é "atualmente" (que é currently ou nowadays)'
                    ],
                    ['pretend', 'fingir', 'não é "pretender" (que é intend)'],
                    ['push', 'empurrar', 'não é "puxar" (que é pull)'],
                    ['parents', 'pais (pai e mãe)', 'não é "parentes" (que é relatives)'],
                    ['college', 'faculdade', 'não é "colégio" (que é high school)'],
                    ['library', 'biblioteca', 'não é "livraria" (que é bookstore)'],
                    ['eventually', 'no fim das contas, finalmente', 'não é "eventualmente"'],
                    ['sensible', 'sensato', 'não é "sensível" (que é sensitive)'],
                    ['fabric', 'tecido', 'não é "fábrica" (que é factory)'],
                    ['lunch', 'almoço', 'não é "lanche" (que é snack)'],
                    ['exquisite', 'requintado, delicioso', 'não é "esquisito" (que é weird)'],
                    [
                      '[[realize|realise]]',
                      'perceber',
                      'não é "realizar" (que é carry out ou achieve)'
                    ]
                  ]
                },
                {
                  fala: 'Actually, I live with my parents.',
                  trad: 'Na verdade, eu moro com os meus pais.'
                },
                {
                  fala: 'She pretended to be asleep.',
                  trad: 'Ela fingiu que estava dormindo.'
                },
                {
                  dica: 'Se uma palavra parecida com o português deixa a frase sem sentido, desconfie. Releia pensando que ela pode ser um falso cognato.',
                  rotulo: 'Na prova'
                }
              ]
            },
            {
              t: 'escolha',
              p: '"Actually, the meeting is tomorrow." O que actually quer dizer?',
              ops: ['Na verdade', 'Atualmente', 'Exatamente'],
              c: 0,
              exp: 'Actually corrige ou acrescenta uma informação: "na verdade".'
            },
            {
              t: 'escolha',
              p: '"My parents live in Bahia." Quem mora na Bahia?',
              ops: ['O pai e a mãe', 'Os parentes', 'Os amigos'],
              c: 0,
              exp: 'Parents são pai e mãe. Parentes são relatives.'
            },
            {
              t: 'escolha',
              p: '"I need to go to the library." Para onde a pessoa vai?',
              ops: ['Para a biblioteca', 'Para a livraria', 'Para a loja'],
              c: 0,
              exp: 'Library é biblioteca; livraria é bookstore.'
            },
            {
              t: 'escolha',
              p: '"He pretended he didn\'t see me." O que ele fez?',
              ops: ['Fingiu que não me viu', 'Pretendia não me ver', 'Não me viu de verdade'],
              c: 0,
              exp: 'Pretend é fingir.'
            },
            {
              t: 'escreva',
              p: 'Traduza para o português: "Eventually, she found a job."',
              r: [
                'No fim, ela encontrou um emprego.',
                'Finalmente, ela encontrou um emprego.',
                'No fim das contas, ela encontrou um emprego.',
                'Por fim, ela encontrou um emprego.',
                'No final, ela encontrou um emprego.',
                'Finalmente ela encontrou um emprego.',
                'No fim, ela conseguiu um emprego.',
                'Finalmente, ela conseguiu um emprego.',
                'No final, ela conseguiu um emprego.',
                'Por fim, ela conseguiu um emprego.',
                'No fim das contas, ela conseguiu um emprego.',
                'Finalmente ela conseguiu um emprego.',
                'No fim, ela arrumou um emprego.',
                'Finalmente, ela arrumou um emprego.'
              ],
              lingua: 'pt',
              exp: 'Eventually é "no fim das contas", e não "eventualmente".'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'Push the door.',
              ops: ['Push the door.', 'Pull the door.', 'Close the door.'],
              c: 0,
              exp: 'Push é empurrar; pull é puxar. Cuidado nas portas de lojas!'
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'Actually, I live with my parents.'
            }
          ]
        },
        {
          id: 'en10l2',
          titulo: 'Ler sem traduzir palavra por palavra',
          pre: ['en10l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Estratégias de leitura',
              blocos: [
                {
                  p: 'Traduzir um texto palavra por palavra é lento e cansa, e você trava na primeira palavra desconhecida. Leitores experientes usam outras estratégias:'
                },
                {
                  tabela: {
                    cab: ['Estratégia', 'Como fazer'],
                    codigo: [],
                    linhas: [
                      [
                        'Skimming: a ideia geral',
                        'Leia título, primeira frase de cada parágrafo e a conclusão. Em 30 segundos, você sabe do que o texto trata.'
                      ],
                      [
                        'Scanning: uma informação',
                        'Procure com os olhos só o que a pergunta pede: um número, um nome, uma data.'
                      ],
                      [
                        'Contexto',
                        'Diante de uma palavra nova, olhe as vizinhas. Muitas vezes, dá para adivinhar o sentido sem dicionário.'
                      ],
                      [
                        'Cognatos',
                        'Use as palavras parecidas com o português como pontos de apoio.'
                      ],
                      [
                        'Palavras de ligação',
                        'but, however, so, because e although mostram como as ideias se ligam.'
                      ]
                    ]
                  }
                },
                {
                  vocab: [
                    ['but / however', 'mas / no entanto', 'contraste'],
                    ['although', 'embora'],
                    ['because', 'porque'],
                    ['so', 'então, por isso'],
                    ['for example', 'por exemplo'],
                    ['in addition', 'além disso']
                  ]
                },
                {
                  p: '**Agora, um texto.** Primeiro, faça o skimming: só a primeira frase de cada parágrafo. Depois ouça e leia tudo. Só então olhe a tradução.'
                },
                {
                  fala: 'Every year, millions of tons of plastic end up in the ocean. Most of it comes from land, carried by rivers and wind.',
                  trad: 'Todo ano, milhões de toneladas de plástico acabam no oceano. A maior parte vem da terra, levada por rios e pelo vento.'
                },
                {
                  fala: 'Plastic does not disappear. Instead, it breaks into tiny pieces called microplastics, which fish and other animals eat.',
                  trad: 'O plástico não desaparece. Em vez disso, ele se quebra em pedacinhos chamados microplásticos, que peixes e outros animais comem.'
                },
                {
                  fala: 'Some cities have banned plastic bags, and many people now carry their own bottles. However, scientists say that real change needs new laws and less plastic production.',
                  trad: 'Algumas cidades proibiram sacolas plásticas, e muita gente hoje leva a própria garrafa. No entanto, cientistas dizem que a mudança de verdade precisa de novas leis e de menos produção de plástico.'
                },
                {
                  dica: 'Você talvez não conhecesse banned, tiny ou instead. Mas o contexto ajuda: cidades e sacolas plásticas, com um sentido de proibição; pedacinhos chamados "micro"plásticos; "não desaparece, em vez disso...". É assim que se lê sem dicionário.',
                  rotulo: 'Repare'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual é a ideia principal do texto?',
              ops: [
                'O plástico se acumula no oceano, e a solução exige mais do que ações individuais',
                'Os peixes gostam de comer plástico',
                'As cidades acabaram com o plástico'
              ],
              c: 0,
              exp: 'O skimming das primeiras frases já mostra o tema: plástico no oceano.'
            },
            {
              t: 'escolha',
              p: 'No texto, "tiny pieces" quer dizer...',
              ops: ['Pedacinhos', 'Pedaços grandes', 'Peças de máquina'],
              c: 0,
              exp: 'O contexto (microplásticos) mostra que são pedaços muito pequenos.'
            },
            {
              t: 'escolha',
              p: 'O que a palavra "However" anuncia no último parágrafo?',
              ops: [
                'Um contraste: as ações individuais não bastam',
                'Um exemplo',
                'Uma conclusão igual ao que veio antes'
              ],
              c: 0,
              exp: 'However marca uma ideia que se opõe à anterior.'
            },
            {
              t: 'escolha',
              p: 'Segundo o texto, de onde vem a maior parte do plástico do oceano?',
              ops: ['Da terra, levado por rios e vento', 'Dos navios', 'Dos peixes'],
              c: 0,
              exp: 'Most of it comes from land, carried by rivers and wind.'
            },
            {
              t: 'escreva',
              p: 'Traduza para o português: "Plastic does not disappear."',
              r: [
                'O plástico não desaparece.',
                'Plástico não desaparece.',
                'O plástico não some.',
                'Plástico não some.'
              ],
              lingua: 'pt'
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Embora seja difícil, é possível."',
              r: 'Although it\'s difficult, it\'s possible.',
              extra: ['But', 'however', 'is'],
              exp: 'Although é "embora".'
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'Most of it comes from land.'
            }
          ]
        },
        {
          id: 'en10l3',
          titulo: 'Um texto no estilo do Enem',
          pre: ['en10l2'],
          exs: [
            {
              t: 'texto',
              titulo: 'Leitura completa',
              blocos: [
                {
                  p: 'A prova de inglês do Enem tem cinco questões, todas de leitura. Os textos são variados: notícias, anúncios, tirinhas, letras de música, poemas e trechos de livros. As perguntas são em português e pedem a ideia principal, a intenção do autor ou um detalhe.'
                },
                {
                  p: '**Um método para cada questão:** leia primeiro a pergunta, para saber o que procurar. Depois faça o skimming do texto. Por último, volte à parte que responde a pergunta e confira as alternativas, eliminando as que dizem algo que o texto não diz.'
                },
                { p: 'O texto abaixo é uma postagem de um blog. Ouça e leia.' },
                {
                  fala: 'When I moved to a new city last year, I didn\'t know anyone. I spent most weekends alone, watching series and scrolling on my phone.',
                  trad: 'Quando me mudei para uma cidade nova no ano passado, eu não conhecia ninguém. Passava a maioria dos fins de semana sozinha, vendo séries e rolando a tela do celular.'
                },
                {
                  fala: 'Then a coworker invited me to a community garden. I almost said no. I have never been good with plants, and I was shy.',
                  trad: 'Então uma colega de trabalho me convidou para uma horta comunitária. Quase disse não. Nunca fui boa com plantas, e eu era tímida.'
                },
                {
                  fala: 'But I went, and it changed everything. Every Saturday, we plant, water and harvest vegetables, and then we share them with families in the [[neighborhood|neighbourhood]].',
                  trad: 'Mas eu fui, e isso mudou tudo. Todo sábado, a gente planta, rega e colhe verduras, e depois divide com famílias do bairro.'
                },
                {
                  fala: 'Today, some of my closest friends are people I met with dirt on my hands. If you feel lonely, my advice is simple: find something to do with other people, and say yes.',
                  trad: 'Hoje, alguns dos meus amigos mais próximos são pessoas que conheci com as mãos sujas de terra. Se você se sente sozinho, meu conselho é simples: encontre algo para fazer com outras pessoas, e diga sim.'
                },
                {
                  dica: 'Repare em como a autora usa o passado simples para contar a história (moved, spent, invited, went), o present perfect para a experiência (I have never been) e o presente para a rotina de hoje (we plant, we share).',
                  rotulo: 'Os tempos verbais trabalhando juntos'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual é a principal intenção da autora?',
              ops: [
                'Contar como encontrou amigos e aconselhar quem se sente sozinho',
                'Ensinar a cultivar verduras',
                'Reclamar da cidade nova'
              ],
              c: 0,
              exp: 'O último parágrafo traz o conselho, que é a intenção do texto.'
            },
            {
              t: 'escolha',
              p: 'Antes da horta, como eram os fins de semana dela?',
              ops: [
                'Ela passava a maioria sozinha, vendo séries e usando o celular',
                'Ela trabalhava nos sábados',
                'Ela visitava a família'
              ],
              c: 0,
              exp: 'I spent most weekends alone, watching series and scrolling on my phone.'
            },
            {
              t: 'escolha',
              p: 'Por que ela quase recusou o convite?',
              ops: [
                'Ela não era boa com plantas e era tímida',
                'Ela não gostava da colega',
                'Ela trabalhava aos sábados'
              ],
              c: 0,
              exp: 'I have never been good with plants, and I was shy.'
            },
            {
              t: 'escolha',
              p: 'O que o grupo faz com as verduras?',
              ops: ['Divide com famílias do bairro', 'Vende numa feira', 'Leva para o trabalho'],
              c: 0,
              exp: 'We share them with families in the [[neighborhood|neighbourhood]].'
            },
            {
              t: 'escolha',
              p: 'Em "people I met with dirt on my hands", a autora quer dizer que...',
              ops: [
                'Conheceu os amigos trabalhando juntos na horta',
                'Os amigos são sujos',
                'Ela não lava as mãos'
              ],
              c: 0,
              exp: 'É uma imagem: os amigos vieram do trabalho com a terra.'
            },
            {
              t: 'escreva',
              p: 'Traduza para o português: "I almost said no."',
              r: [
                'Eu quase disse não.',
                'Quase disse não.',
                'Eu quase falei não.',
                'Quase falei não.',
                'Eu quase recusei.',
                'Quase recusei.'
              ],
              lingua: 'pt'
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'Find something to do with other people.'
            }
          ]
        }
      ]
    }
  ]
});
