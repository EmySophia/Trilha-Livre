/* Trilha Livre · Inglês do zero · Nível 9: Americano × britânico (A2)
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md.
   ((frase)) tem botão de ouvir; [[americano|britânico]] muda com o sotaque escolhido. */

nivel({
  curso: 'ingles',
  n: 9,
  titulo: 'Americano × britânico',
  faixa: 'A2',
  desc: 'As palavras, a escrita, a gramática e os sons que mudam entre os Estados Unidos e o Reino Unido.',
  videos: [
    {
      titulo: 'English with Lucy',
      canal: 'Lucy Earl',
      obs: 'vídeos comparando o inglês britânico e o americano',
      url: 'https://www.youtube.com/@EnglishwithLucy'
    },
    {
      titulo: 'Rachel\'s English',
      canal: 'Rachel Smith',
      obs: 'o sotaque americano em detalhe',
      url: 'https://www.youtube.com/@rachelsenglish'
    },
    {
      tipo: 'texto',
      titulo: 'Dicionário Cambridge',
      canal: 'Cambridge',
      obs: 'cada verbete mostra a pronúncia britânica (UK) e a americana (US), com áudio',
      url: 'https://dictionary.cambridge.org/pt/'
    },
    {
      tipo: 'texto',
      titulo: 'YouGlish',
      canal: 'YouGlish',
      obs: 'ouça a mesma palavra em vídeos de pessoas dos dois países',
      url: 'https://youglish.com/english'
    }
  ],
  unidades: [
    {
      id: 'enu17',
      titulo: 'Dois países, uma língua',
      conceito: 'flat · apartment',
      desc: 'Vocabulário, grafia, gramática e pronúncia dos dois lados do Atlântico.',
      licoes: [
        {
          id: 'en9l1',
          titulo: 'Palavras diferentes',
          pre: ['en2l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'A mesma coisa, outro nome',
              blocos: [
                {
                  p: 'Americanos e britânicos se entendem sem problema, mas usam palavras diferentes para várias coisas do dia a dia. Nesta lição, cada par toca primeiro no sotaque americano e depois no britânico, não importa qual você escolheu.'
                },
                {
                  pares: [
                    ['apartment', 'flat', 'apartamento'],
                    ['elevator', 'lift', 'elevador'],
                    ['cell phone', 'mobile phone', 'celular'],
                    ['vacation', 'holiday', 'férias'],
                    ['line', 'queue', 'fila'],
                    ['subway', 'underground', 'metrô (em Londres, também the Tube)'],
                    ['truck', 'lorry', 'caminhão'],
                    ['gas', 'petrol', 'gasolina'],
                    ['cookie', 'biscuit', 'biscoito'],
                    ['French fries', 'chips', 'batata frita'],
                    ['chips', 'crisps', 'batata de saquinho'],
                    ['soccer', 'football', 'futebol'],
                    ['sneakers', 'trainers', 'tênis'],
                    ['trash', 'rubbish', 'lixo'],
                    ['movie', 'film', 'filme'],
                    ['restroom', 'toilet', 'banheiro (fora de casa)']
                  ],
                  sotaques: ['us', 'uk']
                },
                { p: '**Três armadilhas de verdade:**' },
                {
                  p: '**Chips:** nos EUA, é batata de saquinho; no Reino Unido, é batata frita (como em fish and chips).'
                },
                {
                  p: '**Pants:** nos EUA, é calça. No Reino Unido, pants é **roupa de baixo**. Calça, lá, é ((trousers)). Elogiar as "pants" de um britânico pode criar uma situação engraçada.'
                },
                {
                  p: '**Os andares:** no Reino Unido, o térreo é ((ground floor)), e o first floor é o andar de cima, como no Brasil. Nos EUA, o térreo já é o first floor. Então o "primeiro andar" de um americano é o térreo para um britânico.'
                },
                {
                  dica: 'Nos dois países, todo mundo entende as duas formas, graças a filmes e séries. Use a do sotaque que você escolheu e não se preocupe em misturar de vez em quando.',
                  rotulo: 'Relaxa'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'No Reino Unido, "chips" são...',
              ops: [
                'Batatas fritas, como as de fish and chips',
                'Batatas de saquinho',
                'Fichas de jogo'
              ],
              c: 0,
              exp: 'Batata de saquinho, no Reino Unido, é crisps.'
            },
            {
              t: 'escolha',
              p: 'Em Londres, alguém diz "I love your pants!". Do que está falando?',
              ops: ['Da sua roupa de baixo', 'Da sua calça', 'Do seu tênis'],
              c: 0,
              exp: 'No Reino Unido, calça é trousers. Pants é a roupa de baixo.'
            },
            {
              t: 'escolha',
              p: 'Você está em Nova York e procura o elevador. Que palavra usa?',
              ops: ['elevator', 'lift', 'escalator'],
              c: 0,
              exp: 'Nos EUA é elevator; no Reino Unido, lift. Escalator é a escada rolante.'
            },
            {
              t: 'escolha',
              p: 'Num prédio em Londres, você mora no "first floor". Onde fica isso para um americano?',
              ops: [
                'No second floor, porque o térreo dele já é o first floor',
                'No first floor também',
                'No subsolo'
              ],
              c: 0,
              exp: 'No Reino Unido, o térreo é ground floor, como no Brasil. Nos EUA, o térreo é o first floor.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'Let\'s take the underground.',
              ops: [
                'Let\'s take the underground.',
                'Let\'s take the elevator.',
                'Let\'s take the lift.'
              ],
              c: 0
            },
            { t: 'escreva', p: 'Como um americano diz "fila"?', r: ['line'] },
            {
              t: 'escreva',
              p: 'E um britânico?',
              r: ['queue'],
              exp: 'Queue soa "kiú": as letras ueue não se pronunciam como se escreve.'
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'We were on [[vacation|holiday]] in July.',
              exp: 'Férias é vacation nos EUA e holiday no Reino Unido.'
            }
          ]
        },
        {
          id: 'en9l2',
          titulo: 'Escrita e gramática',
          pre: ['en9l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Colour ou color?',
              blocos: [
                {
                  p: 'A grafia americana ficou mais simples por causa de Noah Webster, que publicou um dicionário em 1828 querendo uma escrita mais próxima da fala e própria do novo país. Os britânicos mantiveram a grafia antiga, com mais marcas do francês.'
                },
                {
                  tabela: {
                    cab: ['Padrão', 'EUA', 'Reino Unido'],
                    codigo: [],
                    linhas: [
                      [
                        '-or / -our',
                        'color, favorite, neighbor',
                        'colour, favourite, neighbour'
                      ],
                      ['-er / -re', 'center, theater', 'centre, theatre'],
                      [
                        '-ize / -ise',
                        'realize, organize',
                        'realise, organise (as duas formas existem)'
                      ],
                      ['l / ll', 'traveled, canceled', 'travelled, cancelled'],
                      ['-se / -ce', 'defense, license', 'defence, licence']
                    ]
                  }
                },
                { p: '**Na gramática**, as diferenças são poucas:' },
                {
                  tabela: {
                    cab: ['', 'EUA', 'Reino Unido'],
                    codigo: [],
                    linhas: [
                      ['Ter', '((Do you have a pen?))', '((Have you got a pen?))'],
                      [
                        'Particípio de get',
                        '((It has gotten worse.))',
                        '((It has got worse.))'
                      ],
                      ['Grupos', '((The team is winning.))', '((The team are winning.))'],
                      ['Fim de semana', '((on the weekend))', '((at the weekend))'],
                      ['Algo recente', '((Did you eat yet?))', '((Have you eaten yet?))']
                    ]
                  }
                },
                {
                  p: '**As datas:** nos EUA, o mês vem primeiro. 03/04 é 4 de março (March 4th). No Reino Unido, como no Brasil, 03/04 é 3 de abril. Em documentos e formulários, confira de que país eles são.'
                },
                {
                  dica: 'Para provas como o Enem, as duas grafias valem. O importante é escolher uma e manter a mesma do começo ao fim do texto.',
                  rotulo: 'Na escrita, seja coerente'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual é a grafia britânica?',
              ops: ['colour', 'color', 'coulor'],
              c: 0,
              exp: 'O Reino Unido manteve o -our, que veio do francês.'
            },
            {
              t: 'escolha',
              p: 'Num formulário americano, a data 03/04 quer dizer...',
              ops: ['4 de março', '3 de abril', '3 de março'],
              c: 0,
              exp: 'Nos EUA, o mês vem antes do dia.'
            },
            { t: 'escreva', p: 'Escreva "centro" na grafia americana.', r: ['center'] },
            {
              t: 'escolha',
              p: 'Qual destas perguntas soa mais britânica?',
              ops: ['Have you got a pen?', 'Do you have a pen?', 'You have a pen?'],
              c: 0,
              exp: 'Have got para posse é muito mais comum no Reino Unido.'
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'What is your [[favorite|favourite]] [[color|colour]]?',
              exp: 'Nos dois sotaques a pronúncia é parecida; muda a escrita. As duas grafias são aceitas aqui.'
            },
            {
              t: 'escolha',
              p: '"The team are playing well." Essa frase é...',
              ops: [
                'Correta no inglês britânico, que vê o time como um grupo de pessoas',
                'Errada em qualquer lugar',
                'Correta só nos EUA'
              ],
              c: 0,
              exp: 'Nos EUA, o mais comum é the team is.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Você já comeu?" (no estilo britânico)',
              r: ['Have you eaten yet?', 'Have you eaten?', 'Have you eaten already?']
            }
          ]
        },
        {
          id: 'en9l3',
          titulo: 'Os sotaques',
          pre: ['en9l1', 'en6l3'],
          exs: [
            {
              t: 'texto',
              titulo: 'Mesmas palavras, outros sons',
              blocos: [
                {
                  p: 'Nesta lição, cada par toca primeiro no sotaque americano e depois no britânico.'
                },
                {
                  pares: [
                    [
                      'car',
                      'car',
                      'o r depois da vogal: nos EUA, pronunciado; no Reino Unido, some'
                    ],
                    [
                      'water',
                      'water',
                      'o t: nos EUA, vira um toque rápido ("uóder"); no Reino Unido, fica claro'
                    ],
                    [
                      'can\'t',
                      'can\'t',
                      'a vogal: nos EUA, um a aberto; no Reino Unido, um "á" longo'
                    ],
                    [
                      'hot',
                      'hot',
                      'o o: nos EUA, quase um "á"; no Reino Unido, um "ó" arredondado'
                    ],
                    ['schedule', 'schedule', 'nos EUA, "skédjul"; no Reino Unido, "shédjul"'],
                    ['tomato', 'tomato', 'nos EUA, "toméirou"; no Reino Unido, "tomátou"']
                  ],
                  sotaques: ['us', 'uk']
                },
                {
                  p: '**Qual escolher?** O que você mais gosta de ouvir, ou o que você mais vai usar. A maior parte do que se ouve em filmes, séries e na internet é americano. O britânico aparece muito em séries, no futebol e na BBC.'
                },
                {
                  p: '**O que importa de verdade** é ser entendido e ser coerente. Misturar um pouco não é problema, mas um sotaque mais consistente soa mais natural.'
                },
                {
                  p: 'E não existem só esses dois. O inglês é falado como primeira língua na Irlanda, na Escócia, na Austrália, na Nova Zelândia, no Canadá, na África do Sul, e como língua oficial na Índia, na Nigéria e em dezenas de outros países. Nenhum sotaque é mais certo que outro.'
                },
                {
                  dica: 'A maioria das pessoas que fala inglês no mundo não é nativa. Em viagens e no trabalho, você vai conversar mais com outros "estrangeiros" do que com americanos ou britânicos. Clareza vale mais que sotaque perfeito.',
                  rotulo: 'Uma coisa que pouca gente sabe'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Em que sotaque o r de car desaparece?',
              ops: ['No britânico', 'No americano', 'Nos dois'],
              c: 0,
              exp: 'No Reino Unido, o r depois da vogal só aparece se vier outra vogal em seguida.'
            },
            {
              t: 'escolha',
              p: 'Ouça o water. Que sotaque é esse?',
              ouvir: 'water',
              sotaque: 'us',
              ops: [
                'Americano: o t virou um toque rápido, quase um r',
                'Britânico: o t ficou bem claro'
              ],
              c: 0,
              exp: 'Nos EUA, o t entre vogais vira um toque rápido da língua.'
            },
            {
              t: 'escolha',
              p: 'Ouça o car. Que sotaque é esse?',
              ouvir: 'car',
              sotaque: 'uk',
              ops: ['Britânico: o r do fim sumiu', 'Americano: o r do fim aparece'],
              c: 0,
              exp: 'No Reino Unido, o r no fim da palavra some.'
            },
            {
              t: 'escolha',
              p: 'Qual sotaque é o "certo"?',
              ops: [
                'Nenhum: todos são inglês de verdade',
                'O britânico, porque o inglês nasceu lá',
                'O americano, porque é o mais falado'
              ],
              c: 0,
              exp: 'Todo sotaque é uma variedade legítima. O importante é ser entendido.'
            },
            {
              t: 'escolha',
              p: 'Para quem está aprendendo, o mais importante sobre sotaque é...',
              ops: [
                'Ser entendido e ser coerente',
                'Imitar perfeitamente um nativo',
                'Evitar falar até perder o sotaque brasileiro'
              ],
              c: 0,
              exp: 'Sotaque não é erro. Clareza é o que conta.'
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'I usually take the [[subway|underground]] to work.'
            }
          ]
        }
      ]
    }
  ]
});
