/* Trilha Livre · Inglês do zero · Nível 2: Pessoas, coisas e lugares
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md.
   ((frase)) tem botão de ouvir; [[americano|britânico]] muda com o sotaque escolhido. */

nivel({
  curso: 'ingles',
  n: 2,
  titulo: 'Pessoas, coisas e lugares',
  desc: 'Artigos, plurais e o som do -s, possessivos, adjetivos e there is.',
  videos: [
    {
      titulo: 'English in Brazil',
      canal: 'Carina Fragozo',
      obs: 'dúvidas de gramática explicadas em português, como a e an, plurais e possessivos',
      url: 'https://www.youtube.com/user/carinafragozo'
    },
    {
      titulo: 'Speak English With Vanessa',
      canal: 'Vanessa',
      obs: 'vocabulário do dia a dia e frases completas, em inglês americano',
      url: 'https://www.youtube.com/@SpeakEnglishWithVanessa'
    },
    {
      tipo: 'texto',
      titulo: 'Dicionário Cambridge',
      canal: 'Cambridge',
      obs: 'ouça cada palavra nova nos dois sotaques antes de usar',
      url: 'https://dictionary.cambridge.org/pt/'
    }
  ],
  unidades: [
    {
      id: 'enu3',
      titulo: 'Artigos e plurais',
      conceito: 'a · an · the · -s',
      desc: 'Quando usar a, an e the, e como o plural muda o som da palavra.',
      licoes: [
        {
          id: 'en2l1',
          titulo: 'A, an e the',
          pre: ['en1l4'],
          exs: [
            {
              t: 'texto',
              titulo: 'Um, uma, o, a',
              blocos: [
                {
                  p: '**A** e **an** querem dizer um ou uma. **The** quer dizer o, a, os e as. Em inglês, os artigos não mudam com o gênero nem com o número: the serve para tudo.'
                },
                {
                  p: '**A ou an?** Depende do **som** que vem depois, e não da letra. Antes de som de vogal, use an; antes de som de consoante, use a.'
                },
                {
                  vocab: [
                    ['an apple', 'uma maçã', 'som de vogal'],
                    [
                      'an hour',
                      'uma hora',
                      'o h de hour é mudo, então começa com som de vogal'
                    ],
                    ['a house', 'uma casa', 'o h de house é pronunciado'],
                    [
                      'a university',
                      'uma universidade',
                      'começa com som de "iu", que conta como consoante'
                    ],
                    ['an engineer', 'um engenheiro']
                  ]
                },
                {
                  p: '**Por que existe o an?** Ele é a forma antiga de one (um). Antes de uma vogal, o n ficou porque facilita a fala: "a apple" junta duas vogais e trava a boca, "an apple" desliza.'
                },
                {
                  p: '**The** é para quando quem fala e quem ouve sabem de qual coisa se trata: ((I have a dog. The dog is black.)) Na primeira vez, é a dog (um cachorro qualquer); depois, the dog (aquele de que eu falei).'
                },
                {
                  p: '**Onde o brasileiro mais erra: sem artigo nenhum.** Quando você fala de algo em geral, o inglês não usa the. Em português dizemos "a vida é curta" e "eu amo a música"; em inglês é ((Life is short.)) e ((I love music.)) Com plurais em geral também: "eu gosto de cachorros" é ((I like dogs.)) Dizer "I like the dogs" quer dizer que você gosta de uns cachorros específicos.'
                },
                {
                  tabela: {
                    cab: ['Em geral (sem artigo)', 'Algo específico (com the)'],
                    codigo: [],
                    linhas: [
                      ['((Coffee is expensive.))', '((The coffee here is great.))'],
                      ['((I love music.))', '((I love the music in this movie.))'],
                      ['((Cats are independent.))', '((The cats are in the garden.))']
                    ]
                  }
                },
                {
                  dica: 'A profissão sempre leva a ou an: She\'s an engineer. He\'s a nurse. É um dos erros mais comuns de quem fala português.',
                  rotulo: 'Lembrete'
                }
              ]
            },
            {
              t: 'complete',
              p: 'Complete com a ou an:',
              code: 'I need ___ umbrella and ___ new phone.',
              bank: ['an', 'a', 'the'],
              c: ['an', 'a'],
              exp: 'Umbrella começa com som de vogal: an umbrella. New começa com som de consoante: a new phone.'
            },
            {
              t: 'escolha',
              p: 'Qual está certo?',
              ops: ['an hour', 'a hour', 'an house'],
              c: 0,
              exp: 'O h de hour é mudo, então o som começa com vogal. O de house é pronunciado.'
            },
            {
              t: 'escolha',
              p: 'Qual está certo?',
              ops: ['a university', 'an university', 'a umbrella'],
              c: 0,
              exp: 'University começa com o som "iu", que funciona como consoante. Vale o som, não a letra.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "A vida é curta."',
              r: ['Life is short.'],
              exp: 'Falando de algo em geral, o inglês não usa artigo: Life is short.'
            },
            {
              t: 'escolha',
              p: '"Eu gosto de cachorros" (de cachorros em geral). Como se diz?',
              ops: ['I like dogs.', 'I like the dogs.', 'I like dog.'],
              c: 0,
              exp: 'Plural sem artigo é o jeito do inglês falar de algo em geral. The dogs seriam uns cachorros específicos.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'It\'s an hour from here.',
              ops: [
                'It\'s an hour from here.',
                'It\'s an hour from there.',
                'It\'s half an hour from here.'
              ],
              c: 0
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Ela é engenheira."',
              r: 'She\'s an engineer.',
              extra: ['a', 'is']
            },
            { t: 'escreva', p: 'Escreva o que você ouviu', ouvir: 'I have a dog and a cat.' }
          ]
        },
        {
          id: 'en2l2',
          titulo: 'Plurais e o som do -s',
          exs: [
            {
              t: 'texto',
              titulo: 'Mais de um',
              blocos: [
                {
                  p: 'Quase todo plural é só acrescentar **-s**: car, cars; book, books. Algumas palavras pedem um ajuste na escrita:'
                },
                {
                  tabela: {
                    cab: ['Regra', 'Exemplos'],
                    codigo: [],
                    linhas: [
                      [
                        'Termina em s, x, sh ou ch: acrescente -es',
                        '((bus)) → ((buses)), ((box)) → ((boxes)), ((watch)) → ((watches))'
                      ],
                      [
                        'Consoante + y: troque por -ies',
                        '((city)) → ((cities)), ((party)) → ((parties))'
                      ],
                      ['Vogal + y: só -s', '((day)) → ((days)), ((boy)) → ((boys))'],
                      [
                        'Muitas terminadas em f ou fe: -ves',
                        '((knife)) → ((knives)), ((life)) → ((lives))'
                      ]
                    ]
                  }
                },
                {
                  p: '**Os irregulares.** Algumas palavras muito antigas fazem o plural mudando a vogal, como no alemão, que é parente do inglês. Elas sobreviveram justamente por serem muito usadas:'
                },
                {
                  vocab: [
                    ['man, men', 'homem, homens'],
                    ['woman, women', 'mulher, mulheres', 'repare: women soa como "uímin"'],
                    ['child, children', 'criança, crianças'],
                    ['person, people', 'pessoa, pessoas'],
                    ['foot, feet', 'pé, pés'],
                    ['tooth, teeth', 'dente, dentes']
                  ]
                },
                {
                  p: '**O som do -s.** Aqui está o que mais denuncia o sotaque brasileiro. O -s do plural tem três sons, e só um deles cria uma sílaba a mais:'
                },
                {
                  tabela: {
                    cab: ['Som', 'Quando', 'Exemplos'],
                    codigo: [],
                    linhas: [
                      [
                        's',
                        'depois de sons "sem voz", como p, t, k e f',
                        '((cats)), ((books)), ((cups))'
                      ],
                      [
                        'z',
                        'depois de vogais e dos outros sons com voz',
                        '((dogs)), ((cars)), ((days))'
                      ],
                      [
                        'iz (sílaba a mais)',
                        'só depois de sons de s, z, sh, ch e j',
                        '((buses)), ((watches)), ((oranges))'
                      ]
                    ]
                  }
                },
                {
                  p: 'Ou seja: ((books)) tem uma sílaba só. Dizer "bukis" acrescenta uma sílaba que não existe. A sílaba extra só aparece quando a palavra já termina num som de s ou parecido, porque aí seria impossível juntar dois sons de s.'
                },
                {
                  p: '**Palavras sem plural.** Algumas palavras são vistas pelo inglês como uma massa, e não como coisas que se contam. Elas não têm plural nem levam a ou an: ((information)), ((advice)) (conselho), ((news)), ((homework)), ((money)), ((furniture)) (móveis). "Informations" e "advices" estão sempre errados.'
                },
                {
                  fala: 'Can you give me some advice?',
                  trad: 'Você pode me dar um conselho?',
                  nota: 'Para contar, use a piece of: a piece of advice, two pieces of information.'
                }
              ]
            },
            {
              t: 'complete',
              p: 'Complete com o plural:',
              code: 'Two ___ and three ___.',
              bank: ['children', 'women', 'childs', 'womans'],
              c: ['children', 'women'],
              exp: 'Child e woman têm plurais irregulares: children e women.'
            },
            {
              t: 'escolha',
              p: 'Em qual destas palavras o -s forma uma sílaba a mais?',
              ops: ['buses', 'cats', 'dogs'],
              c: 0,
              exp: 'A sílaba extra só aparece depois de sons de s, z, sh, ch e j. Cats e dogs têm uma sílaba só.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'I need some information.',
              ops: [
                'I need some information.',
                'I need some informations.',
                'I need an information.'
              ],
              c: 0,
              exp: 'Information não tem plural nem leva an: some information.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Eu tenho duas caixas."',
              r: ['I have two boxes.', 'I\'ve got two boxes.'],
              exp: 'Box termina em x, então o plural é boxes.'
            },
            {
              t: 'escolha',
              p: 'Qual frase está certa?',
              ops: [
                'Can you give me some advice?',
                'Can you give me an advice?',
                'Can you give me some advices?'
              ],
              c: 0,
              exp: 'Advice é incontável. Para um só conselho: a piece of advice.'
            },
            {
              t: 'escreva',
              p: 'Escreva o plural de city.',
              r: ['cities'],
              exp: 'Consoante + y vira -ies: city, cities.'
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Essas pessoas são minhas amigas."',
              r: 'These people are my friends.',
              extra: ['peoples', 'is', 'This'],
              exp: 'People já é o plural de person.'
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'The women are in the kitchen.',
              exp: 'Women soa como "uímin". É uma das palavras que mais confundem.'
            }
          ]
        }
      ]
    },
    {
      id: 'enu4',
      titulo: 'De quem é, como é, onde está',
      conceito: 'his · her · there is',
      desc: 'Possessivos, adjetivos, there is e there are e as preposições de lugar.',
      licoes: [
        {
          id: 'en2l3',
          titulo: 'Possessivos e o \'s',
          exs: [
            {
              t: 'texto',
              titulo: 'Dele, dela, meu, seu',
              blocos: [
                {
                  tabela: {
                    cab: ['Pessoa', 'Antes da coisa', 'Sozinho'],
                    codigo: [],
                    linhas: [
                      ['I', '((my)) (meu, minha)', '((mine))'],
                      ['you', '((your)) (seu, sua, de vocês)', '((yours))'],
                      ['he', '((his)) (dele)', '((his))'],
                      ['she', '((her)) (dela)', '((hers))'],
                      ['it', '((its)) (dele, dela: coisas e animais)', ''],
                      ['we', '((our)) (nosso)', '((ours))'],
                      ['they', '((their)) (deles, delas)', '((theirs))']
                    ]
                  }
                },
                {
                  p: '**A grande diferença.** Em português, "seu" e "sua" concordam com a coisa: seu carro, sua casa. Em inglês, his e her dependem do **dono**, nunca da coisa. O carro dele é ((his car)); o carro dela é ((her car)). A irmã do Pedro é ((his sister)), mesmo sendo uma irmã, porque o dono é o Pedro.'
                },
                {
                  p: 'Por isso, "A Maria ama o cachorro dela" é ((Maria loves her dog.)) Se você disser "Maria loves his dog", está dizendo que ela ama o cachorro de outro homem. Esse é um dos erros que mais causam confusão de verdade numa conversa.'
                },
                {
                  p: '**O \'s das pessoas.** Para dizer de quem é algo, o inglês põe o dono primeiro e acrescenta \'s: ((Ana\'s car)) (o carro da Ana), ((my mother\'s house)) (a casa da minha mãe). Se o dono é um plural terminado em s, fica só o apóstrofo: ((my parents\' house)) (a casa dos meus pais).'
                },
                {
                  p: '**Its ou it\'s?** ((its)) é o possessivo das coisas e animais: ((The dog wagged its tail.)) (o cachorro abanou o rabo). ((it\'s)) é it is. Truque: se der para trocar por it is, leva apóstrofo.'
                },
                {
                  p: 'As formas que ficam sozinhas substituem a coisa: ((This book is mine.)) (Este livro é meu.) ((Is this yours?)) (Isto é seu?) Para perguntar de quem é: ((Whose bag is this?))'
                }
              ]
            },
            {
              t: 'escolha',
              p: '"A Maria ama o cachorro dela." Como fica?',
              ops: ['Maria loves her dog.', 'Maria loves his dog.', 'Maria loves its dog.'],
              c: 0,
              exp: 'O dono é a Maria, uma mulher: her dog.'
            },
            {
              t: 'escolha',
              p: '"O Pedro e a irmã dele." Como fica?',
              ops: ['Pedro and his sister', 'Pedro and her sister', 'Pedro and he sister'],
              c: 0,
              exp: 'O possessivo depende do dono (Pedro), e não da irmã. Por isso his.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "o carro da Ana"',
              r: ['Ana\'s car'],
              exp: 'O dono vem primeiro, com \'s: Ana\'s car.'
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: 'The cat is eating ___ food. ___ very hungry.',
              bank: ['its', 'It\'s', 'it\'s', 'Its'],
              c: ['its', 'It\'s'],
              exp: 'Its food: o possessivo, sem apóstrofo. It\'s very hungry: it is.'
            },
            {
              t: 'monte',
              p: 'Monte a pergunta: "De quem é esta bolsa?"',
              r: 'Whose bag is this?',
              extra: ['Who', 'Who\'s', 'these']
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'That book is mine.',
              ops: ['That book is mine.', 'That book is my.', 'That book is me.'],
              c: 0,
              exp: 'Sozinho, no fim da frase, my vira mine.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "a casa dos meus pais"',
              r: ['my parents\' house'],
              exp: 'Parents já termina em s, então fica só o apóstrofo: parents\'.'
            },
            { t: 'escreva', p: 'Escreva o que você ouviu', ouvir: 'Is this your phone?' }
          ]
        },
        {
          id: 'en2l4',
          titulo: 'Adjetivos antes do nome',
          exs: [
            {
              t: 'texto',
              titulo: 'Um carro vermelho é a red car',
              blocos: [
                {
                  p: 'Em inglês, o adjetivo vem **antes** do substantivo: ((a red car)), ((a big house)), ((good food)). É a ordem das línguas germânicas, a família do inglês e do alemão.'
                },
                {
                  p: 'E o adjetivo nunca muda: não tem plural nem feminino. ((a red car)), ((two red cars)), ((a tall woman)), ((two tall men)). "Reds cars" está sempre errado.'
                },
                {
                  p: '**Vários adjetivos juntos** seguem uma ordem que os nativos sentem sem pensar: primeiro a opinião, depois tamanho, idade, cor, origem e material. Fora dessa ordem, a frase soa esquisita para eles.'
                },
                { fala: 'a nice big old house', trad: 'uma casa velha, grande e bonita' },
                { fala: 'a small black leather bag', trad: 'uma bolsa pequena de couro preto' },
                { p: '**Para intensificar:**' },
                {
                  vocab: [
                    ['very good', 'muito bom'],
                    ['really good', 'muito bom', 'o mais comum na conversa'],
                    ['so good', 'tão bom / muito bom'],
                    ['pretty good', 'bem bom', 'pretty aqui é "bem", não "bonito"'],
                    [
                      'too expensive',
                      'caro demais',
                      'too é excesso, quase sempre com um problema: caro demais para comprar'
                    ]
                  ]
                },
                {
                  p: '**Substantivo descrevendo substantivo.** Muitas vezes, a primeira palavra funciona como adjetivo da segunda: ((a coffee cup)) é uma xícara de café (o tipo de xícara), ((a phone call)) é uma ligação, ((a bus stop)) é um ponto de ônibus. A palavra principal é sempre a última.'
                },
                {
                  dica: 'Too e very não são a mesma coisa. This bag is very expensive é só "muito cara". This bag is too expensive quer dizer que ela passou do limite: você não vai comprar.',
                  rotulo: 'Too × very'
                }
              ]
            },
            { t: 'escreva', p: 'Traduza: "um carro vermelho"', r: ['a red car'] },
            {
              t: 'escolha',
              p: 'Qual está certo?',
              ops: ['two big houses', 'two bigs houses', 'two houses bigs'],
              c: 0,
              exp: 'O adjetivo vem antes e nunca vai para o plural.'
            },
            {
              t: 'monte',
              p: 'Monte: "uma bolsa pequena de couro preto"',
              r: 'a small black leather bag',
              extra: ['blacks', 'of']
            },
            {
              t: 'escolha',
              p: '"This jacket is ___ expensive. I can\'t buy it." Qual palavra combina?',
              ops: ['too', 'very', 'pretty'],
              c: 0,
              exp: 'Too é excesso: cara demais, e por isso você não compra.'
            },
            {
              t: 'escolha',
              p: 'O que quer dizer "a coffee cup"?',
              ops: [
                'Uma xícara de café, o tipo de xícara',
                'Um café servido na xícara',
                'Uma xícara feita de café'
              ],
              c: 0,
              exp: 'A palavra principal é a última (cup). Coffee diz que tipo de xícara é.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'It\'s a really nice place.',
              ops: [
                'It\'s a really nice place.',
                'It\'s a really nice plate.',
                'It\'s a really nice price.'
              ],
              c: 0
            },
            {
              t: 'escreva',
              p: 'Traduza: "Ela tem olhos azuis."',
              r: ['She has blue eyes.', 'She\'s got blue eyes.']
            },
            { t: 'escreva', p: 'Escreva o que você ouviu', ouvir: 'I love old movies.' }
          ]
        },
        {
          id: 'en2l5',
          titulo: 'There is e there are',
          pre: ['en1l5'],
          exs: [
            {
              t: 'texto',
              titulo: 'O "tem" que não é ter',
              blocos: [
                {
                  p: 'Em português, "tem" serve para duas coisas: possuir ("eu tenho um carro") e existir ("tem um carro na rua"). Em inglês são duas estruturas diferentes. Possuir é ((have)). Existir é **there is** (para um) e **there are** (para vários).'
                },
                {
                  tabela: {
                    cab: ['Português', 'Inglês'],
                    codigo: [],
                    linhas: [
                      ['Tem um problema.', '((There\'s a problem.))'],
                      ['Tem muitas pessoas aqui.', '((There are a lot of people here.))'],
                      ['Tem um banco perto daqui?', '((Is there a bank near here?))'],
                      ['Não tem leite.', '((There\'s no milk.))'],
                      ['Não tem ônibus hoje.', '((There aren\'t any buses today.))']
                    ]
                  }
                },
                {
                  p: 'Dizer "Have a problem" para dizer que existe um problema é um dos erros mais comuns de brasileiros. Sem sujeito, a frase nem existe em inglês.'
                },
                { p: '**In, on e at** dizem onde as coisas estão:' },
                {
                  tabela: {
                    cab: ['Preposição', 'Ideia', 'Exemplos'],
                    codigo: [],
                    linhas: [
                      [
                        'in',
                        'dentro de um espaço',
                        '((in the box)), ((in the kitchen)), ((in Brazil))'
                      ],
                      [
                        'on',
                        'em cima, em contato com uma superfície',
                        '((on the table)), ((on the wall)), ((on the second floor))'
                      ],
                      [
                        'at',
                        'num ponto, num lugar visto como um endereço',
                        '((at home)), ((at school)), ((at the bus stop))'
                      ]
                    ]
                  }
                },
                {
                  vocab: [
                    ['next to', 'ao lado de'],
                    ['between', 'entre'],
                    ['under', 'embaixo de'],
                    ['behind', 'atrás de'],
                    ['in front of', 'na frente de'],
                    ['near', 'perto de']
                  ]
                },
                {
                  dica: 'At home, at work e at school são expressões fixas, sem the. "Estou em casa" é I\'m at home.',
                  rotulo: 'Decore em bloco'
                }
              ]
            },
            {
              t: 'escolha',
              p: '"Tem um problema no meu computador." Como fica?',
              ops: [
                'There\'s a problem with my computer.',
                'Have a problem in my computer.',
                'It has a problem in my computer.'
              ],
              c: 0,
              exp: 'Existir é there is. E problema "com" alguma coisa usa with.'
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: '___ a bank near here? Yes, and ___ two pharmacies too.',
              bank: ['Is there', 'there are', 'Are there', 'there is'],
              c: ['Is there', 'there are'],
              exp: 'Um banco: Is there. Duas farmácias: there are.'
            },
            {
              t: 'complete',
              p: 'Complete com in, on ou at:',
              code: 'The keys are ___ the table and my phone is ___ my bag.',
              bank: ['on', 'in', 'at'],
              c: ['on', 'in'],
              exp: 'Na superfície da mesa: on. Dentro da bolsa: in.'
            },
            {
              t: 'escolha',
              p: '"Estou em casa." Como fica?',
              ops: ['I\'m at home.', 'I\'m in home.', 'I\'m on home.'],
              c: 0,
              exp: 'At home é uma expressão fixa.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Não tem leite na geladeira."',
              r: [
                'There\'s no milk in the (fridge|refrigerator).',
                'There isn\'t any milk in the (fridge|refrigerator).'
              ]
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Tem muita gente aqui."',
              r: ['There are a lot of people here.', 'There are lots of people here.'],
              extra: ['is', 'Have', 'peoples']
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'Is there a pharmacy near here?',
              ops: [
                'Is there a pharmacy near here?',
                'Is there a farm near here?',
                'Is it a pharmacy near here?'
              ],
              c: 0
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'There\'s a bus stop next to the bank.'
            }
          ]
        }
      ]
    }
  ]
});
