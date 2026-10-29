/* Trilha Livre · Matemática básica · Nível 2: Múltiplos e divisores
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'mat-basica',
  n: 2,
  titulo: 'Múltiplos e divisores',
  desc: 'Divisibilidade, números primos, MDC e MMC.',
  videos: [
    {
      titulo: 'Matemática Zero 2.0',
      canal: 'Nerckie',
      obs: 'aulas de múltiplos, divisores, MMC e MDC',
      url: 'https://www.youtube.com/playlist?list=PL6846F4C75FFBA3EC'
    },
    {
      titulo: 'Portal da Matemática',
      canal: 'OBMEP e IMPA',
      obs: '6º ano: divisibilidade e números primos, com vídeos e exercícios',
      url: 'https://portaldaobmep.impa.br/index.php/site/index?a=1'
    },
    {
      titulo: 'Gis com Giz Matemática',
      canal: 'Gis com Giz',
      obs: 'procure as playlists de MMC e MDC',
      url: 'https://www.youtube.com/c/GiscomGiz'
    }
  ],
  unidades: [
    {
      id: 'mbu3',
      titulo: 'Divisibilidade',
      conceito: 'divisor',
      desc: 'Múltiplos, divisores, critérios e números primos.',
      licoes: [
        {
          id: 'mb2l1',
          titulo: 'Múltiplos e divisores',
          exs: [
            {
              t: 'texto',
              titulo: 'Quem divide quem',
              blocos: [
                {
                  p: 'Os múltiplos de 3 são os resultados da tabuada do 3, que não acaba nunca: 0, 3, 6, 9, 12, ... Os divisores de 12 são os números que dividem 12 sem deixar resto: 1, 2, 3, 4, 6 e 12.'
                },
                {
                  p: 'As duas frases dizem a mesma coisa: “12 é múltiplo de 3” e “3 é divisor de 12”. O jeito de testar é dividir e ver se o resto dá zero.'
                },
                {
                  dica: 'Os divisores aparecem em pares que multiplicados dão o número: 1 × 12, 2 × 6, 3 × 4. Basta procurar até a metade dos pares.'
                }
              ]
            },
            {
              t: 'escolha',
              p: '{A} é múltiplo de {B}?',
              ops: ['{= A % B === 0 ? "Sim" : "Não" }', '{= A % B === 0 ? "Não" : "Sim" }'],
              c: 0,
              exp: '{A} ÷ {B} dá resto {= A % B }. {= A % B === 0 ? "Sem resto, é múltiplo." : "Com resto, não é múltiplo." }',
              vars: { A: { de: 40, ate: 150 }, B: [3, 4, 6, 7, 8, 9] }
            },
            {
              t: 'escolha',
              p: 'Todo número é divisor de si mesmo?',
              ops: ['Sim', 'Não', 'Só os pares'],
              c: 0,
              exp: 'Qualquer número dividido por ele mesmo dá 1, sem resto.'
            },
            {
              t: 'numero',
              p: 'Quantos divisores tem o número {N}?',
              r: '{= [...Array(N + 1).keys()].filter(i => i > 0 && N % i === 0).length }',
              exp: 'Procure em pares: os que multiplicados dão {N}.',
              vars: { N: [12, 18, 20, 24, 28, 30, 36, 40] }
            },
            {
              t: 'numero',
              p: 'Qual é o maior múltiplo de {B} que é menor que 100?',
              r: '{= Math.floor(99 / B) * B }',
              exp: '100 ÷ {B} dá {= Math.floor(99 / B) } e sobra algo: {= Math.floor(99 / B) } × {B} = {= Math.floor(99 / B) * B }.',
              vars: { B: { de: 6, ate: 15 } },
              se: '100 % B !== 0'
            },
            {
              t: 'numero',
              p: 'Quantos múltiplos de {B} existem de 1 a 100?',
              r: '{= Math.floor(100 / B) }',
              exp: 'É o quociente de 100 ÷ {B}: {B}, {= 2 * B }, {= 3 * B }... até o último que não passa de 100.',
              vars: { B: { de: 3, ate: 13 } }
            },
            {
              t: 'numero',
              p: 'Qual é o menor divisor de {N} maior que 1?',
              r: '{= [2, 3, 5, 7, 11, 13].find(p => N % p === 0) }',
              exp: 'Teste os números primos em ordem: 2, 3, 5, 7...',
              vars: { N: [91, 77, 51, 65, 85, 119, 143, 133] }
            }
          ]
        },
        {
          id: 'mb2l2',
          titulo: 'Critérios de divisibilidade',
          exs: [
            {
              t: 'texto',
              titulo: 'Dá para saber sem dividir',
              blocos: [
                {
                  p: 'Alguns atalhos dizem se um número é divisível por outro só olhando os algarismos:'
                },
                {
                  tabela: {
                    cab: ['Divisível por', 'Quando'],
                    codigo: [],
                    linhas: [
                      ['2', 'termina em 0, 2, 4, 6 ou 8 (é par)'],
                      ['3', 'a soma dos algarismos é múltiplo de 3'],
                      ['4', 'os dois últimos algarismos formam um múltiplo de 4'],
                      ['5', 'termina em 0 ou 5'],
                      ['6', 'é divisível por 2 e por 3'],
                      ['9', 'a soma dos algarismos é múltiplo de 9'],
                      ['10', 'termina em 0']
                    ]
                  }
                },
                {
                  p: 'Exemplo: 4.572. A soma dos algarismos é 4 + 5 + 7 + 2 = 18, que é múltiplo de 3 e de 9. E ele é par. Então 4.572 é divisível por 2, 3, 6 e 9.'
                }
              ]
            },
            {
              t: 'escolha',
              p: '{N} é divisível por 3?',
              ops: ['{= N % 3 === 0 ? "Sim" : "Não" }', '{= N % 3 === 0 ? "Não" : "Sim" }'],
              c: 0,
              exp: 'A soma dos algarismos é {= String(N).split("").reduce((s, d) => s + +d, 0) }, que {= N % 3 === 0 ? "é" : "não é" } múltiplo de 3.',
              vars: { N: { de: 100, ate: 999 } }
            },
            {
              t: 'escolha',
              p: 'Qual destes números é divisível por 9?',
              ops: ['{= A * 9 }', '{= A * 9 + 1 }', '{= A * 9 + 3 }'],
              c: 0,
              exp: 'Some os algarismos de cada um: só um dá um múltiplo de 9.',
              vars: { A: { de: 12, ate: 110 } }
            },
            {
              t: 'escolha',
              p: 'Qual destes números é divisível por 4?',
              ops: ['{= A * 4 }', '{= A * 4 + 2 }', '{= A * 4 + 1 }'],
              c: 0,
              exp: 'Olhe só os dois últimos algarismos: eles formam um múltiplo de 4?',
              vars: { A: { de: 30, ate: 240 } }
            },
            {
              t: 'escolha',
              p: 'Um número que termina em 0 é divisível por...',
              ops: ['2, 5 e 10', 'Só por 10', 'Só por 5'],
              c: 0,
              exp: 'Ele é par (2), termina em 0 ou 5 (5) e termina em 0 (10).'
            },
            {
              t: 'numero',
              p: 'Qual algarismo pode ficar no lugar do □ para que {A}□{B} seja divisível por 9?',
              r: '{= (9 - (A + B) % 9) % 9 }',
              exp: 'A soma {A} + □ + {B} precisa ser múltiplo de 9.',
              vars: { A: { de: 1, ate: 9 }, B: { de: 0, ate: 9 } },
              se: '(A + B) % 9 !== 0'
            },
            {
              t: 'escolha',
              p: '{N} é divisível por 6?',
              ops: ['{= N % 6 === 0 ? "Sim" : "Não" }', '{= N % 6 === 0 ? "Não" : "Sim" }'],
              c: 0,
              exp: 'Para ser divisível por 6, tem que ser par e ter a soma dos algarismos múltipla de 3. {N} {= N % 2 === 0 ? "é par" : "é ímpar" } e a soma dá {= String(N).split("").reduce((s, d) => s + +d, 0) }.',
              vars: { N: { de: 100, ate: 999 } }
            }
          ]
        },
        {
          id: 'mb2l3',
          titulo: 'Números primos',
          exs: [
            {
              t: 'texto',
              titulo: 'Os números que não se quebram',
              blocos: [
                {
                  p: 'Um número primo tem exatamente dois divisores: o 1 e ele mesmo. Os primos até 30 são 2, 3, 5, 7, 11, 13, 17, 19, 23 e 29. O 1 não é primo, porque tem um divisor só.'
                },
                {
                  p: 'Os outros números (os compostos) podem ser escritos como uma multiplicação de primos. Isso é a fatoração. Pelas divisões sucessivas, divida pelo menor primo possível até chegar a 1:'
                },
                {
                  tabela: {
                    cab: ['Número', 'Dividido por'],
                    codigo: [],
                    linhas: [['60', '2'], ['30', '2'], ['15', '3'], ['5', '5'], ['1', '']]
                  }
                },
                {
                  p: 'Então $$60 = 2^2 × 3 × 5$$. Cada número tem uma única fatoração, como uma impressão digital.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual destes é primo?',
              ops: ['{P}', '{= P + 1 }', '{= P * 3 }'],
              c: 0,
              exp: '{= P + 1 } é par, e {= P * 3 } é múltiplo de 3. Já {P} só é divisível por 1 e por ele mesmo.',
              vars: { P: [23, 29, 31, 37, 41, 43, 47, 53, 59, 61] }
            },
            {
              t: 'escolha',
              p: 'O número 1 é primo?',
              ops: ['Não: ele tem um divisor só', 'Sim', 'Depende'],
              c: 0,
              exp: 'Primo tem exatamente dois divisores. O 1 tem só um: ele mesmo.'
            },
            {
              t: 'escolha',
              p: 'Qual é o único número primo par?',
              ops: ['2', '4', '0'],
              c: 0,
              exp: 'Todo outro par é divisível por 2, então tem pelo menos três divisores.'
            },
            {
              t: 'numero',
              p: 'Quantos números primos existem de 1 até {N}?',
              r: '{= [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47].filter(p => p <= N).length }',
              exp: 'Liste os primos até {N}: 2, 3, 5, 7, 11, 13...',
              vars: { N: [20, 30, 40, 50] }
            },
            {
              t: 'numero',
              p: 'Na fatoração de {N}, quantas vezes aparece o fator 2?',
              r: '{= Math.log2(N & -N) }',
              exp: 'Divida por 2 enquanto der.',
              vars: { N: [24, 40, 48, 56, 72, 80, 96, 112] }
            },
            {
              t: 'numero',
              p: 'Qual é o maior fator primo de {N}?',
              r: '{= [2, 3, 5, 7, 11, 13, 17].filter(p => N % p === 0).pop() }',
              exp: 'Fatore pelas divisões sucessivas: o último primo usado é o maior.',
              vars: { N: [60, 84, 90, 66, 78, 102, 70, 110] }
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem as divisões sucessivas que fatoram 84',
              lines: ['84 ÷ 2 = 42', '42 ÷ 2 = 21', '21 ÷ 3 = 7', '7 ÷ 7 = 1'],
              exp: 'Sempre pelo menor primo possível. Então $$84 = 2^2 × 3 × 7$$.'
            }
          ]
        }
      ]
    },
    {
      id: 'mbu4',
      titulo: 'MDC e MMC',
      conceito: 'mmc',
      desc: 'Dividir em partes iguais e achar quando as coisas coincidem.',
      licoes: [
        {
          id: 'mb2l4',
          titulo: 'MDC: o maior divisor comum',
          exs: [
            {
              t: 'texto',
              titulo: 'Repartir sem sobrar',
              blocos: [
                {
                  p: 'O MDC de dois números é o maior número que divide os dois. Ele resolve problemas de repartir coisas diferentes em grupos iguais, do maior tamanho possível, sem sobrar nada.'
                },
                {
                  p: 'Exemplo: 24 e 36. Os divisores comuns são 1, 2, 3, 4, 6 e 12, então o MDC é 12. Pela fatoração, pegue só os fatores que aparecem nos dois, com o menor expoente: $$24 = 2^3 × 3$$ e $$36 = 2^2 × 3^2$$, então o MDC é $$2^2 × 3 = 12$$.'
                },
                {
                  dica: 'Quando o MDC de dois números é 1, eles são chamados de primos entre si, como 8 e 15.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Qual é o MDC de {= K * X } e {= K * Y }?',
              r: '{= mdc(K * X, K * Y) }',
              exp: 'Liste os divisores dos dois, ou fatore e pegue os fatores comuns.',
              vars: { K: { de: 2, ate: 12 }, X: { de: 2, ate: 7 }, Y: { de: 2, ate: 7 } },
              se: 'X !== Y'
            },
            {
              t: 'numero',
              p: 'Duas cordas, de {= K * X } m e de {= K * Y } m, vão ser cortadas em pedaços iguais, do maior tamanho possível, sem sobrar nada. Qual é o tamanho de cada pedaço?',
              r: '{= mdc(K * X, K * Y) }',
              exp: 'O pedaço precisa dividir as duas cordas, e ser o maior possível: é o MDC.',
              unidade: 'm',
              vars: { K: { de: 2, ate: 9 }, X: { de: 2, ate: 7 }, Y: { de: 2, ate: 7 } },
              se: 'X !== Y'
            },
            {
              t: 'numero',
              p: 'Uma professora tem {= K * X } lápis e {= K * Y } borrachas e quer montar kits iguais, usando todos, com o maior número de kits possível. Quantos kits ela monta?',
              r: '{= mdc(K * X, K * Y) }',
              exp: 'O número de kits precisa dividir as duas quantidades: o maior possível é o MDC.',
              vars: { K: { de: 2, ate: 12 }, X: { de: 2, ate: 7 }, Y: { de: 2, ate: 7 } },
              se: 'X !== Y'
            },
            {
              t: 'numero',
              p: 'Uma fita de {= K * X } cm e outra de {= K * Y } cm são cortadas em pedaços iguais, os maiores possíveis, sem sobra. Quantos pedaços saem ao todo?',
              r: '{= (K * X + K * Y) / mdc(K * X, K * Y) }',
              exp: 'Cada pedaço tem o MDC, {= mdc(K * X, K * Y) } cm. Divida cada fita por ele e some.',
              vars: { K: { de: 2, ate: 9 }, X: { de: 2, ate: 7 }, Y: { de: 2, ate: 7 } },
              se: 'X !== Y'
            },
            {
              t: 'escolha',
              p: 'Para achar o MDC pela fatoração, pegamos...',
              ops: [
                'Os fatores comuns, com o menor expoente',
                'Todos os fatores, com o maior expoente',
                'Só o maior fator primo'
              ],
              c: 0,
              exp: 'Todos os fatores com o maior expoente é a regra do MMC.'
            },
            {
              t: 'escolha',
              p: 'Qual é o MDC de dois números primos diferentes, como 7 e 11?',
              ops: ['1', 'O produto deles', 'O menor deles'],
              c: 0,
              exp: 'O único divisor comum é 1: eles são primos entre si.'
            }
          ]
        },
        {
          id: 'mb2l5',
          titulo: 'MMC: o menor múltiplo comum',
          exs: [
            {
              t: 'texto',
              titulo: 'Quando as coisas coincidem',
              blocos: [
                {
                  p: 'O MMC de dois números é o menor múltiplo (sem contar o zero) que aparece na tabuada dos dois. Ele responde quando coisas que se repetem em ciclos diferentes voltam a acontecer juntas.'
                },
                {
                  p: 'Exemplo: um ônibus passa a cada 12 minutos e outro a cada 18. Os múltiplos de 12 são 12, 24, 36...; os de 18 são 18, 36... Os dois passam juntos de novo depois de 36 minutos.'
                },
                {
                  p: 'Pela fatoração, pegue todos os fatores, com o maior expoente: $$12 = 2^2 × 3$$ e $$18 = 2 × 3^2$$, então o MMC é $$2^2 × 3^2 = 36$$.'
                },
                {
                  dica: 'Para dois números, MMC × MDC = o produto deles. Com 12 e 18: 36 × 6 = 216 = 12 × 18.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Qual é o MMC de {A} e {B}?',
              r: '{= mmc(A, B) }',
              exp: 'Vá pela tabuada do maior até achar um múltiplo do menor.',
              vars: { A: { de: 4, ate: 15 }, B: { de: 4, ate: 15 } },
              se: 'A !== B'
            },
            {
              t: 'numero',
              p: 'Um remédio é tomado a cada {A} horas e outro a cada {B}. A pessoa tomou os dois juntos agora. Daqui a quantas horas toma os dois juntos de novo?',
              r: '{= mmc(A, B) }',
              exp: 'É o primeiro múltiplo comum de {A} e {B}.',
              unidade: 'h',
              vars: { A: [4, 6, 8], B: [6, 8, 12] },
              se: 'A !== B'
            },
            {
              t: 'numero',
              p: 'Dois ônibus saem juntos do terminal: um a cada {A} minutos e outro a cada {B}. Depois de quantos minutos eles saem juntos de novo?',
              r: '{= mmc(A, B) }',
              exp: 'MMC de {A} e {B}.',
              unidade: 'min',
              vars: { A: [10, 12, 15, 20], B: [18, 25, 30, 45] }
            },
            {
              t: 'escolha',
              p: 'Qual é a relação entre o MMC e o MDC de dois números?',
              ops: [
                'MMC × MDC = o produto dos dois números',
                'MMC + MDC = a soma dos dois números',
                'MMC = 2 × MDC'
              ],
              c: 0,
              exp: 'Por exemplo, 12 e 18: MMC 36, MDC 6, e 36 × 6 = 216 = 12 × 18.'
            },
            {
              t: 'numero',
              p: 'O MDC de {= K * X } e {= K * Y } é {K}. Quanto é o MMC deles?',
              r: '{= K * X * Y }',
              exp: 'MMC = produto ÷ MDC = {= K * X } × {= K * Y } ÷ {K}.',
              vars: { K: { de: 2, ate: 9 }, X: [2, 3, 5, 7], Y: [3, 4, 5, 7] },
              se: 'X !== Y'
            },
            {
              t: 'escolha',
              p: 'Para somar $$1/6 + 1/4$$, qual é o menor denominador comum?',
              ops: ['12', '24', '10'],
              c: 0,
              exp: 'É o MMC de 6 e 4. Isso volta no nível de frações.'
            }
          ]
        }
      ]
    }
  ]
});
