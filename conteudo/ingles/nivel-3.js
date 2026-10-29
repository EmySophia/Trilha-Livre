/* Trilha Livre · Inglês do zero · Nível 3: Números, horas e datas (A1)
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md.
   ((frase)) tem botão de ouvir; [[americano|britânico]] muda com o sotaque escolhido. */

nivel({
  curso: 'ingles',
  n: 3,
  titulo: 'Números, horas e datas',
  faixa: 'A1',
  desc: 'Contar, pagar, dizer o ano, perguntar as horas, os dias, os meses, as datas e as preposições do tempo: at, on e in.',
  videos: [
    {
      titulo: 'English in Brazil',
      canal: 'Carina Fragozo',
      obs: 'procure no canal os vídeos sobre números, horas e datas, com as armadilhas de quem fala português',
      url: 'https://www.youtube.com/user/carinafragozo'
    },
    {
      titulo: 'BBC Learning English',
      canal: 'BBC',
      obs: 'vídeos curtos sobre como dizer horas, datas e preços, em inglês britânico',
      url: 'https://www.youtube.com/@bbclearningenglish'
    },
    {
      titulo: 'Speak English With Vanessa',
      canal: 'Vanessa',
      obs: 'números e datas na conversa do dia a dia, em inglês americano',
      url: 'https://www.youtube.com/@SpeakEnglishWithVanessa'
    }
  ],
  unidades: [
    {
      id: 'enu5',
      titulo: 'Contar e pagar',
      conceito: 'thirteen · thirty · $9.99',
      desc: 'Os números, os preços, os anos e a armadilha do 13 × 30.',
      licoes: [
        {
          id: 'en3l1',
          titulo: 'Números de 0 a 100',
          pre: ['en1l3'],
          exs: [
            {
              t: 'texto',
              titulo: 'Contar até cem',
              blocos: [
                {
                  p: 'Os números de 0 a 12 são palavras únicas, e o jeito é aprender cada uma pelo som:'
                },
                {
                  vocab: [
                    ['zero', '0'],
                    ['one', '1'],
                    ['two', '2'],
                    ['three', '3', 'com th: a língua entre os dentes'],
                    ['four', '4'],
                    ['five', '5'],
                    ['six', '6'],
                    ['seven', '7'],
                    ['eight', '8', 'soa como ate, o passado de eat'],
                    ['nine', '9'],
                    ['ten', '10'],
                    ['eleven', '11'],
                    ['twelve', '12']
                  ]
                },
                {
                  p: '**De 13 a 19**, o número ganha **-teen**: ((thirteen)), ((fourteen)), ((fifteen)), ((sixteen)), ((seventeen)), ((eighteen)), ((nineteen)). Repare que thirteen e fifteen mudam um pouco o começo (thir-, fif-), como o nosso treze e quinze também fogem do padrão. É daí que vem a palavra teenager: quem tem de thirteen a nineteen anos.'
                },
                {
                  p: '**As dezenas** terminam em **-ty**: ((twenty)), ((thirty)), ((forty)), ((fifty)), ((sixty)), ((seventy)), ((eighty)), ((ninety)). Cuidado com forty: four tem u, forty não tem. Entre a dezena e a unidade vai um hífen, e não um "e": vinte e um é ((twenty-one)), noventa e nove é ((ninety-nine)). Cem é ((a hundred)).'
                },
                {
                  p: '**A armadilha do 13 × 30.** Thirteen e thirty soam parecidos para quem está aprendendo, e a confusão acontece até com nativos, ao telefone. Ouça cada par:'
                },
                {
                  pares: [
                    ['thirteen', 'thirty', '13 × 30'],
                    ['fourteen', 'forty', '14 × 40'],
                    ['fifteen', 'fifty', '15 × 50'],
                    ['sixteen', 'sixty', '16 × 60'],
                    ['eighteen', 'eighty', '18 × 80']
                  ]
                },
                {
                  p: '**Como diferenciar:** no -teen, a sílaba forte é a última, com um "ii" longo e o n bem claro no fim: thir-TEEN. No -ty, a forte é a primeira, e o fim é curto: THIR-ty. No inglês americano, o t do -ty ainda vira um toque rápido, quase um d: "thírdi". Se ainda ficar na dúvida, peça: ((Sorry, one three or three zero?))'
                },
                {
                  p: '**Telefones** se dizem número por número, e o zero quase sempre vira **oh**, como a letra O. No Reino Unido, números repetidos viram ((double)): 55 é ((double five)).'
                },
                { fala: 'What\'s your phone number?', trad: 'Qual é o seu telefone?' },
                {
                  fala: 'It\'s nine eight seven, oh one two, three four five six.',
                  trad: 'É 987 012 3456.'
                },
                {
                  dica: 'Os números aparecem rápido na fala, então treine em voz alta: placas de carro, preços do mercado, a hora do celular. Em poucos dias, eles começam a sair sem você pensar.',
                  rotulo: 'Treine no dia a dia'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'The answer is thirteen.',
              ops: ['The answer is thirteen.', 'The answer is thirty.'],
              c: 0,
              exp: 'No thirteen, a força está no fim e o n aparece: thir-TEEN.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'She\'s fifty.',
              ops: ['She\'s fifty.', 'She\'s fifteen.'],
              c: 0,
              exp: 'Fifty tem a força no começo e termina curto: FIF-ty.'
            },
            {
              t: 'escreva',
              p: 'Escreva por extenso: 40',
              r: ['forty'],
              exp: 'Four tem u, mas forty não tem. É um erro de escrita comum até entre nativos.',
              exato: true
            },
            {
              t: 'escreva',
              p: 'Escreva por extenso: 21',
              r: ['twenty-one'],
              exp: 'A dezena e a unidade se juntam com hífen, sem "and".'
            },
            {
              t: 'escolha',
              p: 'Como se diz 99?',
              ops: ['ninety-nine', 'nineteen-nine', 'nine-nine'],
              c: 0,
              exp: 'Noventa é ninety (com -ty); dezenove é nineteen (com -teen).'
            },
            {
              t: 'escolha',
              p: 'Como os números de telefone costumam ser ditos?',
              ops: [
                'Número por número, e o zero vira "oh"',
                'Em centenas, como "novecentos e oitenta e sete"',
                'Sempre de dois em dois, como "noventa e oito"'
              ],
              c: 0,
              exp: 'Seven oh one, e não seven zero one: é assim que quase todo mundo fala.'
            },
            {
              t: 'complete',
              p: 'Complete a sequência:',
              code: 'eleven, twelve, ___, fourteen, ___, sixteen',
              bank: ['thirteen', 'fifteen', 'thirty', 'fifty'],
              c: ['thirteen', 'fifteen']
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Tenho vinte e cinco anos."',
              r: ['I\'m twenty-five.', 'I\'m twenty-five years old.'],
              extra: ['have', 'and', 'yours'],
              exp: 'Idade usa to be: I\'m twenty-five.'
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'What\'s your phone number?'
            }
          ]
        },
        {
          id: 'en3l2',
          titulo: 'Números grandes, preços e anos',
          pre: ['en3l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Cem, mil, um milhão',
              blocos: [
                {
                  tabela: {
                    cab: ['Número', 'Em inglês'],
                    codigo: [],
                    linhas: [
                      ['100', '((a hundred)) ou ((one hundred))'],
                      ['105', '((a [[hundred five|hundred and five]]))'],
                      ['250', '((two [[hundred fifty|hundred and fifty]]))'],
                      ['1,000', '((a thousand))'],
                      ['2,500', '((two thousand five hundred))'],
                      ['1,000,000', '((a million))'],
                      ['3,000,000,000', '((three billion))']
                    ]
                  }
                },
                {
                  p: '**O and depois do hundred.** No Reino Unido, sempre se diz and depois de hundred: two hundred and fifty. Nos EUA, o and costuma cair: two hundred fifty. As duas formas são entendidas em qualquer lugar, e este curso aceita as duas.'
                },
                {
                  p: '**Sem plural.** Depois de um número, hundred, thousand e million nunca vão para o plural: ((two hundred)), ((five thousand)), ((ten million)). O plural só aparece sem número na frente, com o sentido de "centenas de", "milhares de": ((hundreds of people)), ((thousands of years)).'
                },
                {
                  p: '**Ponto e vírgula trocados.** Em inglês, a vírgula separa os milhares e o ponto separa os decimais, o contrário do Brasil. Então 1,500 é mil e quinhentos, e 1.5 é um e meio, que se lê ((one point five)). Num site americano, $1,299.90 é mil duzentos e noventa e nove dólares e noventa centavos. Esse detalhe já causou muita compra errada pela internet.'
                },
                {
                  p: '**Preços.** Na conversa, um preço se fala como dois números: $4.99 é ((four ninety-nine)). Por extenso, é ((four dollars and ninety-nine cents)). Nos EUA, a gíria para dólar é ((bucks)): ((ten bucks)). No Reino Unido, a moeda é a libra (pound), os centavos são ((pence)), e a gíria é ((quid)): ((ten quid)), dez libras, sem s no plural.'
                },
                {
                  dialogo: [
                    [
                      'Ana',
                      'Excuse me, how much is this T-shirt?',
                      'Com licença, quanto custa esta camiseta?'
                    ],
                    ['Clerk', 'It\'s nineteen ninety-nine.', 'É dezenove e noventa e nove.'],
                    ['Ana', 'And the jacket?', 'E a jaqueta?'],
                    [
                      'Clerk',
                      'That one\'s on sale. It\'s forty [[dollars|pounds]].',
                      'Essa está em promoção. É quarenta [[dólares|libras]].'
                    ],
                    ['Ana', 'Great, I\'ll take both.', 'Ótimo, vou levar as duas.']
                  ],
                  titulo: 'Numa loja'
                },
                {
                  p: '**Anos** se leem em dois pedaços de dois números: 1998 é ((nineteen ninety-eight)) e 1500 é ((fifteen hundred)). De 2000 a 2009, diz-se ((two thousand)) e ((two thousand [[five|and five]])). A partir de 2010, os dois jeitos existem, mas o mais comum hoje é o de dois pedaços: 2026 é ((twenty twenty-six)).'
                },
                {
                  dica: 'Por que o inglês divide o ano em dois? É mais curto: nineteen ninety-eight tem cinco sílabas; "one thousand nine hundred ninety-eight" teria nove.',
                  rotulo: 'Uma curiosidade'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Como se diz 300?',
              ops: ['three hundred', 'three hundreds', 'three hundred of'],
              c: 0,
              exp: 'Depois de um número, hundred não vai para o plural.'
            },
            {
              t: 'escolha',
              p: 'Num site americano, um notebook custa $1,250.00. Quanto é isso?',
              ops: [
                'Mil duzentos e cinquenta dólares',
                'Um dólar e vinte e cinco centavos',
                'Doze mil e quinhentos dólares'
              ],
              c: 0,
              exp: 'Em inglês, a vírgula separa os milhares, e o ponto, os centavos. É o contrário do Brasil.'
            },
            {
              t: 'escolha',
              p: 'Como se lê 2.5 em inglês?',
              ops: ['two point five', 'two comma five', 'two and five'],
              c: 0,
              exp: 'O decimal é point, o ponto.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'It\'s four ninety-nine.',
              ops: ['It\'s four ninety-nine.', 'It\'s forty-nine.', 'It\'s four nineteen.'],
              c: 0,
              exp: '$4.99 se diz four ninety-nine.'
            },
            {
              t: 'escreva',
              p: 'Escreva por extenso, do jeito mais comum: o ano 1990',
              r: ['nineteen ninety'],
              exp: 'Os anos se leem em dois pedaços: nineteen e ninety.'
            },
            {
              t: 'escreva',
              p: 'Traduza para o português: "There were hundreds of people."',
              r: [
                '(Tinha|Havia|Tinham|Eram) centenas de pessoas.',
                'Tinha centenas de pessoas lá.',
                'Havia centenas de pessoas lá.'
              ],
              lingua: 'pt',
              exp: 'Sem número na frente, hundreds vai para o plural: centenas de.'
            },
            {
              t: 'monte',
              p: 'Monte a pergunta: "Quanto custa?"',
              r: ['How much is it?', 'How much does it cost?'],
              extra: ['many', 'are', 'price'],
              exp: 'How much é "quanto" para preços e coisas que não se contam.'
            },
            { t: 'escreva', p: 'Escreva o que você ouviu', ouvir: 'Great, I\'ll take both.' }
          ]
        }
      ]
    },
    {
      id: 'enu6',
      titulo: 'Hora e data',
      conceito: 'at 7 · on Monday · in May',
      desc: 'As horas, o calendário e as preposições do tempo.',
      licoes: [
        {
          id: 'en3l3',
          titulo: 'Que horas são?',
          pre: ['en3l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'As horas',
              blocos: [
                {
                  p: 'Para perguntar as horas: ((What time is it?)) Com um desconhecido na rua, o mais educado é ((Excuse me, do you have the time?)) Cuidado: sem o the, ((Do you have time?)) quer dizer "você tem tempo?".'
                },
                {
                  p: '**O jeito mais fácil** é dizer os números como no relógio digital: 7:15 é ((seven fifteen)), 7:30 é ((seven thirty)), 7:45 é ((seven forty-five)). Funciona em qualquer país e é cada vez mais comum.'
                },
                {
                  p: '**O jeito tradicional** usa past (passado de) e to (para), como o nosso "quinze para as oito":'
                },
                {
                  tabela: {
                    cab: ['Hora', 'Tradicional', 'Digital'],
                    codigo: [],
                    linhas: [
                      ['7:00', '((seven o\'clock))', '((seven))'],
                      ['7:05', '((five past seven))', '((seven oh five))'],
                      ['7:15', '((a quarter past seven))', '((seven fifteen))'],
                      ['7:30', '((half past seven))', '((seven thirty))'],
                      ['7:40', '((twenty to eight))', '((seven forty))'],
                      ['7:45', '((a quarter to eight))', '((seven forty-five))']
                    ]
                  }
                },
                {
                  p: '**Nos EUA**, em vez de past, também se diz after: ((a quarter after seven)). **No Reino Unido**, a fala do dia a dia corta o past: ((half seven)) é sete e meia.'
                },
                {
                  p: '**O\'clock** quer dizer "do relógio" (of the clock) e só aparece na hora cheia: ((seven o\'clock)). Não se diz "seven thirty o\'clock".'
                },
                {
                  p: '**Manhã ou noite?** Na fala, o inglês quase não usa o relógio de 24 horas. Para 19h, diz-se ((seven p.m.)) ou ((seven in the evening)). A.m. vai da meia-noite ao meio-dia; p.m., do meio-dia à meia-noite. Meio-dia é ((noon)) e meia-noite é ((midnight)).'
                },
                {
                  p: '**A hora de um evento** leva at: ((The class starts at nine.)) ((See you at six!))'
                },
                {
                  dialogo: [
                    ['Leo', 'Hey, what time is it?', 'Ei, que horas são?'],
                    ['Ana', 'It\'s a quarter to ten.', 'São quinze para as dez.'],
                    ['Leo', 'Oh no, my bus leaves at ten!', 'Ah, não, meu ônibus sai às dez!'],
                    [
                      'Ana',
                      'Relax, you have fifteen minutes.',
                      'Calma, você tem quinze minutos.'
                    ]
                  ]
                },
                {
                  dica: 'Hour é a hora como duração: one hour, uma hora de aula. A hora do relógio é time: What time is it? Por isso, "What hour is it?" não funciona.',
                  rotulo: 'Time × hour'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Como perguntar as horas a um desconhecido?',
              ops: [
                'Excuse me, do you have the time?',
                'Excuse me, do you have time?',
                'Excuse me, what hour is it?'
              ],
              c: 0,
              exp: 'Sem o the, do you have time? é "você tem tempo?". E hour é a hora como duração.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'It\'s a quarter past six.',
              ops: ['It\'s a quarter past six.', 'It\'s a quarter to six.', 'It\'s half past six.'],
              c: 0,
              exp: 'A quarter past six: seis e quinze.'
            },
            {
              t: 'escolha',
              p: '"Half past seven" é que horas?',
              ops: ['7h30', '6h30', '7h15'],
              c: 0,
              exp: 'Half past seven: meia hora depois das sete.'
            },
            {
              t: 'escolha',
              p: 'Que horas são "twenty to nine"?',
              ops: ['8h40', '9h20', '8h20'],
              c: 0,
              exp: 'To é "para": faltam vinte para as nove.'
            },
            {
              t: 'escreva',
              p: 'Escreva 10:30 do jeito digital, por extenso.',
              r: ['ten thirty']
            },
            {
              t: 'monte',
              p: 'Monte a frase: "A aula começa às nove."',
              r: 'The class starts at nine.',
              extra: ['in', 'on', 'hours'],
              exp: 'A hora de um evento leva at.'
            },
            {
              t: 'escreva',
              p: 'Traduza para o português: "My bus leaves at ten."',
              r: [
                '(O meu|Meu) ônibus sai às (dez|10h|dez horas).',
                '(O meu|Meu) ônibus parte às (dez|10h|dez horas).'
              ],
              lingua: 'pt'
            },
            { t: 'escreva', p: 'Escreva o que você ouviu', ouvir: 'It\'s a quarter to ten.' }
          ]
        },
        {
          id: 'en3l4',
          titulo: 'Dias, meses e datas',
          pre: ['en3l3'],
          exs: [
            {
              t: 'texto',
              titulo: 'O calendário',
              blocos: [
                {
                  p: 'Em inglês, os dias da semana e os meses começam **sempre com letra maiúscula**: Monday, January. Em português, não, e por isso esse é um erro comum de brasileiros na escrita.'
                },
                {
                  vocab: [
                    ['Monday', 'segunda-feira', 'o dia da lua (moon)'],
                    ['Tuesday', 'terça-feira', 'de Tiw, um deus da guerra'],
                    [
                      'Wednesday',
                      'quarta-feira',
                      'de Woden (Odin); o primeiro d é mudo: "uénzdei"'
                    ],
                    ['Thursday', 'quinta-feira', 'o dia de Thor'],
                    ['Friday', 'sexta-feira', 'de Frigg, uma deusa'],
                    ['Saturday', 'sábado', 'o dia de Saturno'],
                    ['Sunday', 'domingo', 'o dia do sol (sun)']
                  ]
                },
                {
                  p: '**Por que esses nomes?** Os romanos davam aos dias os nomes dos astros e dos seus deuses, e os povos germânicos, ao adotar a semana, trocaram vários deles pelos próprios deuses, como Thor e Odin. O português seguiu outro caminho: a Igreja numerou os dias, e daí vieram segunda, terça, quarta...'
                },
                {
                  vocab: [
                    ['January', 'janeiro'],
                    ['February', 'fevereiro', 'muita gente pula o primeiro r: "fébiuéri"'],
                    ['March', 'março'],
                    ['April', 'abril'],
                    ['May', 'maio'],
                    ['June', 'junho'],
                    ['July', 'julho', 'a força é no fim: "djulái"'],
                    ['August', 'agosto'],
                    ['September', 'setembro'],
                    ['October', 'outubro'],
                    ['November', 'novembro'],
                    ['December', 'dezembro']
                  ]
                },
                {
                  p: '**Os ordinais** (primeiro, segundo...) são usados nas datas. Os três primeiros são irregulares; depois, quase sempre basta pôr -th:'
                },
                {
                  tabela: {
                    cab: ['Número', 'Ordinal', 'Abreviado'],
                    codigo: [],
                    linhas: [
                      ['1', '((first))', '1st'],
                      ['2', '((second))', '2nd'],
                      ['3', '((third))', '3rd'],
                      ['4', '((fourth))', '4th'],
                      ['5', '((fifth))', '5th'],
                      ['12', '((twelfth))', '12th'],
                      ['20', '((twentieth))', '20th'],
                      ['21', '((twenty-first))', '21st'],
                      ['22', '((twenty-second))', '22nd'],
                      ['31', '((thirty-first))', '31st']
                    ]
                  }
                },
                {
                  p: '**Como dizer uma data.** Nos EUA, o mês vem primeiro: ((May fifth)), escrito May 5 ou May 5th. No Reino Unido, o dia vem primeiro: ((the fifth of May)), escrito 5 May. Na fala, sempre se usa o ordinal: ninguém diz "May five".'
                },
                {
                  p: 'Na escrita só com números, isso também muda: nos EUA, 05/04 é 4 de maio; no Reino Unido, como no Brasil, é 5 de abril.'
                },
                {
                  dialogo: [
                    ['Mia', 'When\'s your birthday?', 'Quando é o seu aniversário?'],
                    [
                      'Caio',
                      'It\'s on [[March third|the third of March]]. And yours?',
                      'É dia 3 de março. E o seu?'
                    ],
                    [
                      'Mia',
                      '[[December twenty-first|The twenty-first of December]], right before Christmas.',
                      'Dia 21 de dezembro, logo antes do Natal.'
                    ],
                    [
                      'Caio',
                      'Oh, so you get all your gifts at once!',
                      'Ah, então você ganha todos os presentes de uma vez!'
                    ]
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual destas frases está escrita certo?',
              ops: ['My birthday is in June.', 'My birthday is in june.', 'My Birthday Is In june.'],
              c: 0,
              exp: 'Meses e dias da semana sempre começam com maiúscula.'
            },
            {
              t: 'escreva',
              p: 'Escreva o dia da semana que vem depois de Tuesday.',
              r: ['Wednesday'],
              exp: 'Wednesday se escreve com d, mas ele não se pronuncia: "uénzdei".',
              exato: true
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'It\'s on the third of March.',
              ops: [
                'It\'s on the third of March.',
                'It\'s on the thirtieth of March.',
                'It\'s on the first of March.'
              ],
              c: 0,
              exp: 'Third, o ordinal de three.'
            },
            {
              t: 'escolha',
              p: 'Como um americano costuma dizer "5 de maio"?',
              ops: ['May fifth', 'May five', 'Five May'],
              c: 0,
              exp: 'Na fala, a data usa o ordinal: fifth.'
            },
            { t: 'escreva', p: 'Escreva por extenso o ordinal de 2.', r: ['second'] },
            {
              t: 'escolha',
              p: 'De onde vem o nome Thursday?',
              ops: ['De Thor, o deus nórdico do trovão', 'Do número três em latim', 'Do sol'],
              c: 0,
              exp: 'Vários dias da semana em inglês homenageiam deuses germânicos: Tiw, Woden, Thor e Frigg.'
            },
            {
              t: 'monte',
              p: 'Monte a pergunta: "Quando é o seu aniversário?"',
              r: 'When\'s your birthday?',
              extra: ['Where', 'are', 'you']
            },
            { t: 'escreva', p: 'Escreva o que você ouviu', ouvir: 'When\'s your birthday?' }
          ]
        },
        {
          id: 'en3l5',
          titulo: 'In, on e at para o tempo',
          pre: ['en3l4', 'en2l5'],
          exs: [
            {
              t: 'texto',
              titulo: 'Três preposições, uma lógica',
              blocos: [
                {
                  p: 'No nível 2, você viu in, on e at para lugares. Para o tempo, a lógica é a mesma, do menor para o maior:'
                },
                {
                  tabela: {
                    cab: ['Preposição', 'Para', 'Exemplos'],
                    codigo: [],
                    linhas: [
                      [
                        'at',
                        'um ponto exato: horas e momentos',
                        '((at seven)), ((at noon)), ((at night)), ((at the moment))'
                      ],
                      [
                        'on',
                        'um dia: dia da semana, data, dia especial',
                        '((on Monday)), ((on May fifth)), ((on my birthday))'
                      ],
                      [
                        'in',
                        'um período maior: partes do dia, meses, estações, anos',
                        '((in the morning)), ((in July)), ((in the summer)), ((in twenty twenty-six))'
                      ]
                    ]
                  }
                },
                {
                  p: '**Pense numa imagem.** At é um ponto no relógio. On é um quadradinho do calendário, uma superfície em que você "pisa". In é um período grande, um espaço onde as coisas cabem dentro.'
                },
                {
                  p: '**As exceções que mais aparecem:** ((at night)) (à noite), mas ((in the morning)), ((in the afternoon)) e ((in the evening)). E o fim de semana: ((on the weekend)) nos EUA e ((at the weekend)) no Reino Unido.'
                },
                {
                  p: '**Sem preposição.** Antes de this, next, last e every, não vai nada: ((next Monday)), ((last year)), ((this morning)), ((every day)). O mesmo vale para ((today)), ((tomorrow)) e ((yesterday)). "In next week" e "on last Monday" estão errados.'
                },
                {
                  p: '**Daqui a e há.** Para o futuro, in também quer dizer "daqui a": ((I\'ll be back in ten minutes.)) (Volto daqui a dez minutos.) Para o passado, use ago, depois do tempo: ((ten minutes ago)) (há dez minutos).'
                },
                {
                  dialogo: [
                    ['Bia', 'Are you free on Friday?', 'Você está livre na sexta?'],
                    [
                      'Tom',
                      'In the morning, no. I work until noon. But I\'m free in the afternoon.',
                      'De manhã, não. Trabalho até o meio-dia. Mas à tarde estou livre.'
                    ],
                    [
                      'Bia',
                      'Great! Let\'s meet at three, then.',
                      'Ótimo! Vamos nos encontrar às três, então.'
                    ],
                    ['Tom', 'Perfect. See you on Friday!', 'Perfeito. Até sexta!']
                  ]
                },
                {
                  dica: 'Em português, dizemos "na segunda", "em maio", "às sete", com preposições diferentes também. A diferença é que o inglês escolhe pelo tamanho do tempo, então dá para deduzir em vez de decorar.',
                  rotulo: 'Deduza, não decore'
                }
              ]
            },
            {
              t: 'complete',
              p: 'Complete com at, on ou in:',
              code: 'My class is ___ Monday ___ eight ___ the morning.',
              bank: ['on', 'at', 'in'],
              c: ['on', 'at', 'in'],
              exp: 'Dia: on. Hora: at. Parte do dia: in.'
            },
            {
              t: 'escolha',
              p: 'Qual está certa?',
              ops: [
                'I\'ll see you next Friday.',
                'I\'ll see you on next Friday.',
                'I\'ll see you in next Friday.'
              ],
              c: 0,
              exp: 'Antes de next, last, this e every, não vai preposição.'
            },
            {
              t: 'escolha',
              p: '"I was born ___ 2004."',
              ops: ['in', 'on', 'at'],
              c: 0,
              exp: 'Ano é um período grande: in.'
            },
            {
              t: 'escolha',
              p: '"We usually go out ___ night."',
              ops: ['at', 'in', 'on'],
              c: 0,
              exp: 'At night é a exceção: à noite.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Volto daqui a dez minutos."',
              r: [
                'I\'ll be back in (ten|10) minutes.',
                'I\'ll come back in (ten|10) minutes.',
                'I will return in (ten|10) minutes.'
              ],
              exp: 'In, com o futuro, quer dizer "daqui a".'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'I work until noon.',
              ops: ['I work until noon.', 'I work until nine.', 'I walk until noon.'],
              c: 0,
              exp: 'Noon é meio-dia.'
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Ela chegou há duas horas."',
              r: 'She arrived two hours ago.',
              extra: ['in', 'has', 'before'],
              exp: 'Ago vem depois do tempo.'
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'Let\'s meet at three, then.'
            }
          ]
        }
      ]
    }
  ]
});
