/* Trilha Livre · Matemática básica · Nível 1: Números e operações
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'mat-basica',
  n: 1,
  titulo: 'Números e operações',
  desc: 'As quatro operações, a ordem das contas e os números negativos.',
  videos: [
    {
      titulo: 'Matemática Zero 2.0',
      canal: 'Nerckie',
      obs: 'as primeiras aulas: as quatro operações e expressões numéricas',
      url: 'https://www.youtube.com/playlist?list=PL6846F4C75FFBA3EC'
    },
    {
      titulo: 'Gis com Giz Matemática',
      canal: 'Gis com Giz',
      obs: 'playlists por assunto, do básico ao ensino médio',
      url: 'https://www.youtube.com/c/GiscomGiz'
    },
    {
      tipo: 'texto',
      titulo: 'Khan Academy em português',
      canal: 'Khan Academy',
      obs: 'exercícios de aritmética, com correção na hora',
      url: 'https://pt.khanacademy.org/'
    }
  ],
  unidades: [
    {
      id: 'mbu1',
      titulo: 'As quatro operações',
      conceito: '+ − × ÷',
      desc: 'Somar, tirar, multiplicar, dividir e a ordem das contas.',
      licoes: [
        {
          id: 'mb1l1',
          titulo: 'Somar e tirar',
          exs: [
            {
              t: 'texto',
              titulo: 'Somar e tirar',
              blocos: [
                {
                  p: 'Somar é juntar quantidades. Subtrair é tirar uma quantidade de outra, ou comparar as duas: quanto uma tem a mais que a outra.'
                },
                {
                  p: 'Na conta armada, cada algarismo fica na sua casa: unidade embaixo de unidade, dezena embaixo de dezena, e assim por diante. No número 4.725:'
                },
                {
                  tabela: {
                    cab: ['Casa', 'Algarismo', 'Vale'],
                    codigo: [],
                    linhas: [
                      ['Unidade de milhar', '4', '4.000'],
                      ['Centena', '7', '700'],
                      ['Dezena', '2', '20'],
                      ['Unidade', '5', '5']
                    ]
                  }
                },
                {
                  p: 'Quando a soma de uma casa passa de 9, o excesso “vai um” para a casa da esquerda. Na subtração, quando falta, a casa da esquerda “empresta” 10.'
                },
                {
                  dica: 'Para conferir uma subtração, some o resultado com o número que foi tirado: tem que dar o número do começo. 52 − 17 = 35, e 35 + 17 = 52.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Em 3.482, quanto vale o algarismo 4?',
              ops: ['400', '4', '40'],
              c: 0,
              exp: 'Ele está na casa das centenas: são 4 centenas, ou 400.'
            },
            {
              t: 'numero',
              p: 'Quanto é {A} + {B}?',
              r: '{= A + B }',
              exp: 'Some unidade com unidade, dezena com dezena e centena com centena, levando o “vai um”.',
              vars: { A: { de: 128, ate: 975 }, B: { de: 128, ate: 975 } }
            },
            {
              t: 'numero',
              p: 'Quanto é {A} − {B}?',
              r: '{= A - B }',
              exp: 'Confira somando: o resultado mais {B} tem que dar {A}.',
              vars: { A: { de: 502, ate: 998 }, B: { de: 105, ate: 497 } }
            },
            {
              t: 'numero',
              p: 'Você pagou uma compra de R$ {P} com uma nota de R$ {NOTA}. Quanto recebe de troco?',
              r: '{= NOTA - P }',
              exp: 'Troco é o que sobra: o valor pago menos o preço.',
              prefixo: 'R$',
              vars: { NOTA: [50, 100, 200], P: { de: 12, ate: 49 } }
            },
            {
              t: 'numero',
              p: 'Uma cidade tinha {= br(A) } habitantes e passou a ter {= br(B) }. Quantas pessoas a mais ela tem?',
              r: '{= B - A }',
              exp: 'Comparar também é subtrair: o maior menos o menor.',
              vars: {
                A: { de: 12000, ate: 30000, passo: 100 },
                B: { de: 31000, ate: 60000, passo: 100 }
              }
            },
            {
              t: 'numero',
              p: 'Qual número completa a conta {A} + ? = {B}?',
              r: '{= B - A }',
              exp: 'O número que falta é a diferença {B} − {A}.',
              vars: { A: { de: 35, ate: 480 }, B: { de: 500, ate: 990 } }
            }
          ]
        },
        {
          id: 'mb1l2',
          titulo: 'Multiplicar e dividir',
          exs: [
            {
              t: 'texto',
              titulo: 'Vezes e dividido',
              blocos: [
                {
                  p: 'Multiplicar é somar parcelas iguais: 4 × 6 é 6 + 6 + 6 + 6. Dividir é repartir em partes iguais, ou ver quantas vezes um número cabe no outro.'
                },
                {
                  p: 'Nem toda divisão é exata. Em 47 ÷ 5, o 5 cabe 9 vezes e sobram 2: o quociente é 9 e o resto é 2. Dá para conferir: 5 × 9 + 2 = 47.'
                },
                {
                  tabela: {
                    cab: ['Nome', 'Em 47 ÷ 5'],
                    codigo: [],
                    linhas: [['Dividendo', '47'], ['Divisor', '5'], ['Quociente', '9'], ['Resto', '2']]
                  }
                },
                {
                  p: 'O resto é sempre menor que o divisor. Se sobrasse 5 ou mais, o 5 ainda caberia mais uma vez.'
                },
                {
                  dica: 'Num problema, pense no que fazer com o resto: às vezes ele fica de fora (caixas cheias), às vezes ele exige mais um (mais um ônibus para quem sobrou).'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Quanto é {A} × {B}?',
              r: '{= A * B }',
              exp: 'Uma forma de pensar: {A} × {B} = {= Math.floor(A / 10) * 10 } × {B} + {= A % 10 } × {B}.',
              vars: { A: { de: 12, ate: 99 }, B: { de: 3, ate: 9 } }
            },
            {
              t: 'numero',
              p: 'Quanto é {= A * B } ÷ {B}?',
              r: '{A}',
              exp: 'A divisão desfaz a multiplicação: {A} × {B} = {= A * B }.',
              vars: { A: { de: 12, ate: 99 }, B: { de: 3, ate: 9 } }
            },
            {
              t: 'escolha',
              p: 'Numa divisão por 7, qual destes NÃO pode ser o resto?',
              ops: ['7', '0', '6'],
              c: 0,
              exp: 'O resto é sempre menor que o divisor. Se sobrassem 7, ainda caberia mais uma vez.'
            },
            {
              t: 'numero',
              p: 'Uma caixa leva {B} ovos. Quantas caixas ficam cheias com {T} ovos?',
              r: '{= Math.floor(T / B) }',
              exp: 'Só contam as caixas cheias: é o quociente. Os {= T % B } ovos do resto ficam de fora.',
              vars: { B: [6, 12, 30], T: { de: 40, ate: 400 } },
              se: 'T % B !== 0'
            },
            {
              t: 'numero',
              p: 'Com {T} ovos e caixas de {B}, quantos ovos sobram fora das caixas cheias?',
              r: '{= T % B }',
              exp: 'É o resto da divisão {T} ÷ {B}.',
              vars: { B: [6, 12, 30], T: { de: 40, ate: 400 } },
              se: 'T % B !== 0'
            },
            {
              t: 'numero',
              p: 'Um ônibus leva {L} passageiros. Quantos ônibus são precisos para levar {P} pessoas?',
              r: '{= Math.ceil(P / L) }',
              exp: 'Aqui ninguém pode ficar para trás: se sobra gente, precisa de mais um ônibus. É a divisão arredondada para cima.',
              vars: { L: [40, 44, 46], P: { de: 100, ate: 600 } },
              se: 'P % L !== 0'
            },
            {
              t: 'numero',
              p: 'Uma pessoa ganha R$ {= br(S) } por mês. Quanto recebe em um ano, sem contar o 13º salário?',
              r: '{= S * 12 }',
              exp: 'São 12 meses: {= br(S) } × 12.',
              prefixo: 'R$',
              vars: { S: { de: 1600, ate: 4500, passo: 100 } }
            }
          ]
        },
        {
          id: 'mb1l3',
          titulo: 'A ordem das contas',
          exs: [
            {
              t: 'texto',
              titulo: 'Expressões numéricas',
              blocos: [
                {
                  p: 'Numa conta com várias operações, existe uma ordem combinada, para todo mundo chegar ao mesmo resultado:'
                },
                {
                  passos: [
                    'Parênteses ( ), depois colchetes [ ], depois chaves { }, de dentro para fora.',
                    'Potências e raízes.',
                    'Multiplicações e divisões, na ordem em que aparecem, da esquerda para a direita.',
                    'Somas e subtrações, na ordem em que aparecem, da esquerda para a direita.'
                  ]
                },
                {
                  p: 'Por isso 2 + 3 × 4 é 14, e não 20: a multiplicação vem antes. Para somar primeiro, use parênteses: (2 + 3) × 4 = 20.'
                },
                {
                  dica: 'Soma e subtração têm a mesma prioridade: faça na ordem em que aparecem. 10 − 3 + 2 é 9, e não 5.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Quanto é 2 + 3 × 4?',
              ops: ['14', '20', '24'],
              c: 0,
              exp: 'A multiplicação vem antes: 3 × 4 = 12, e 2 + 12 = 14.'
            },
            {
              t: 'numero',
              p: 'Calcule {A} + {B} × {C}',
              r: '{= A + B * C }',
              exp: 'Primeiro {B} × {C} = {= B * C }, depois some {A}.',
              vars: { A: { de: 2, ate: 20 }, B: { de: 2, ate: 9 }, C: { de: 2, ate: 9 } }
            },
            {
              t: 'numero',
              p: 'Calcule ({A} + {B}) × {C}',
              r: '{= (A + B) * C }',
              exp: 'Os parênteses vêm primeiro: {A} + {B} = {= A + B }, e depois × {C}.',
              vars: { A: { de: 2, ate: 20 }, B: { de: 2, ate: 9 }, C: { de: 2, ate: 9 } }
            },
            {
              t: 'numero',
              p: 'Calcule {A} − {B} + {C}',
              r: '{= A - B + C }',
              exp: 'Soma e subtração, da esquerda para a direita: {A} − {B} = {= A - B }, depois + {C}.',
              vars: { A: { de: 20, ate: 50 }, B: { de: 5, ate: 19 }, C: { de: 2, ate: 15 } }
            },
            {
              t: 'numero',
              p: 'Calcule {= A * B } ÷ {B} − {C} × 2',
              r: '{= A - C * 2 }',
              exp: 'Divisão e multiplicação primeiro: {= A * B } ÷ {B} = {A} e {C} × 2 = {= C * 2 }. Depois a subtração.',
              vars: { A: { de: 10, ate: 30 }, B: { de: 2, ate: 9 }, C: { de: 1, ate: 9 } }
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem o que se resolve primeiro numa expressão',
              lines: [
                'Parênteses, colchetes e chaves',
                'Potências e raízes',
                'Multiplicações e divisões',
                'Somas e subtrações'
              ],
              exp: 'É a ordem combinada no mundo inteiro, e as calculadoras científicas e as linguagens de programação seguem a mesma.'
            },
            {
              t: 'numero',
              p: 'Calcule 50 − [{A} + ({B} − {C}) × 2]',
              r: '{= 50 - (A + (B - C) * 2) }',
              exp: 'De dentro para fora: ({B} − {C}) = {= B - C }; vezes 2 dá {= (B - C) * 2 }; mais {A} dá {= A + (B - C) * 2 }; e 50 menos isso.',
              vars: { A: { de: 1, ate: 10 }, B: { de: 6, ate: 12 }, C: { de: 1, ate: 5 } }
            }
          ]
        }
      ]
    },
    {
      id: 'mbu2',
      titulo: 'Números negativos',
      conceito: '−3',
      desc: 'Abaixo de zero: temperaturas, saldos e as regras de sinais.',
      licoes: [
        {
          id: 'mb1l4',
          titulo: 'Abaixo de zero',
          exs: [
            {
              t: 'texto',
              titulo: 'Os números inteiros',
              blocos: [
                {
                  p: 'Os números inteiros são ..., −3, −2, −1, 0, 1, 2, 3, ... Os negativos aparecem no dia a dia: temperatura abaixo de zero, saldo no vermelho, andar do subsolo, altitude abaixo do nível do mar.'
                },
                {
                  p: 'Na reta numérica, quanto mais à esquerda, menor o número. Por isso −5 é menor que −2: faz mais frio a −5 °C do que a −2 °C.'
                },
                {
                  p: 'O módulo (ou valor absoluto) é a distância até o zero, sem o sinal: o módulo de −7 é 7. Dois números com o mesmo módulo e sinais diferentes, como 4 e −4, são opostos.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual é maior: −8 ou −3?',
              ops: ['−3', '−8', 'São iguais'],
              c: 0,
              exp: 'Na reta, −3 está mais à direita, mais perto do zero. Pense em temperatura: −3 °C é menos frio que −8 °C.'
            },
            {
              t: 'escolha',
              p: 'Qual é o módulo de −{A}?',
              ops: ['{A}', '−{A}', '0'],
              c: 0,
              exp: 'Módulo é distância até o zero, e distância nunca é negativa.',
              vars: { A: { de: 2, ate: 30 } }
            },
            {
              t: 'numero',
              p: 'A temperatura era {A} °C e caiu {B} graus. Qual é a temperatura agora?',
              r: '{= A - B }',
              exp: 'De {A} até 0 são {A} graus; faltam {= B - A } para completar a queda, abaixo de zero.',
              unidade: '°C',
              vars: { A: { de: 1, ate: 8 }, B: { de: 9, ate: 15 } }
            },
            {
              t: 'numero',
              p: 'Um saldo bancário está em −R$ {A} e a pessoa deposita R$ {B}. Qual é o novo saldo?',
              r: '{= B - A }',
              exp: 'O depósito primeiro cobre a dívida de {A}; o que passar disso fica positivo.',
              prefixo: 'R$',
              vars: { A: { de: 50, ate: 300, passo: 10 }, B: { de: 20, ate: 500, passo: 10 } },
              se: 'A !== B'
            },
            {
              t: 'numero',
              p: 'Um mergulhador está a {A} m abaixo do nível do mar e sobe {B} m. Em que altitude ele fica? (abaixo do nível do mar é negativo)',
              r: '{= -A + B }',
              exp: 'Ele estava em −{A} m: −{A} + {B} = {= -A + B }.',
              unidade: 'm',
              vars: { A: { de: 20, ate: 60 }, B: { de: 5, ate: 19 } }
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem, do menor para o maior',
              lines: ['−7', '−2', '0', '3', '5'],
              exp: 'Os negativos ficam à esquerda do zero, e o −7 está mais longe dele.'
            },
            {
              t: 'numero',
              p: 'Durante o dia fez {A} °C, e de madrugada, −{B} °C. Qual foi a diferença entre as duas temperaturas?',
              r: '{= A + B }',
              exp: 'De −{B} até 0 são {B} graus; de 0 até {A}, mais {A}.',
              unidade: '°C',
              vars: { A: { de: 5, ate: 20 }, B: { de: 2, ate: 9 } }
            }
          ]
        },
        {
          id: 'mb1l5',
          titulo: 'Contas com sinais',
          exs: [
            {
              t: 'texto',
              titulo: 'As regras de sinais',
              blocos: [
                {
                  p: 'Para somar inteiros: com sinais iguais, some os módulos e mantenha o sinal (−3 + (−4) = −7). Com sinais diferentes, subtraia os módulos e fique com o sinal do que tem o maior módulo (−9 + 4 = −5).'
                },
                {
                  p: 'Subtrair é somar o oposto: 5 − (−3) = 5 + 3 = 8. Tirar uma dívida é o mesmo que ganhar.'
                },
                { p: 'Na multiplicação e na divisão, olhe só os sinais:' },
                {
                  tabela: {
                    cab: ['Sinais', 'Resultado', 'Exemplo'],
                    codigo: [],
                    linhas: [
                      ['iguais: + com + ou − com −', 'positivo', '(−2) × (−5) = 10'],
                      ['diferentes: + com − ou − com +', 'negativo', '(−12) ÷ 4 = −3']
                    ]
                  }
                }
              ]
            },
            {
              t: 'numero',
              p: 'Calcule (−{A}) + (−{B})',
              r: '{= -A - B }',
              exp: 'Sinais iguais: some {A} e {B} e mantenha o sinal negativo.',
              vars: { A: { de: 2, ate: 30 }, B: { de: 2, ate: 30 } }
            },
            {
              t: 'numero',
              p: 'Calcule (−{A}) + {B}',
              r: '{= -A + B }',
              exp: 'Sinais diferentes: subtraia os módulos e fique com o sinal do maior.',
              vars: { A: { de: 2, ate: 30 }, B: { de: 2, ate: 30 } },
              se: 'A !== B'
            },
            {
              t: 'numero',
              p: 'Calcule {A} − (−{B})',
              r: '{= A + B }',
              exp: 'Menos com menos vira mais: {A} + {B}.',
              vars: { A: { de: 2, ate: 30 }, B: { de: 2, ate: 30 } }
            },
            {
              t: 'numero',
              p: 'Calcule (−{A}) × (−{B})',
              r: '{= A * B }',
              exp: 'Sinais iguais: o resultado é positivo.',
              vars: { A: { de: 2, ate: 12 }, B: { de: 2, ate: 12 } }
            },
            {
              t: 'numero',
              p: 'Calcule (−{= A * B }) ÷ {B}',
              r: '{= -A }',
              exp: 'Sinais diferentes: o resultado é negativo.',
              vars: { A: { de: 2, ate: 12 }, B: { de: 2, ate: 9 } }
            },
            {
              t: 'escolha',
              p: 'Qual é o sinal de (−2) × (−3) × (−1)?',
              ops: ['Negativo', 'Positivo', 'Depende dos números'],
              c: 0,
              exp: 'Cada par de negativos dá positivo. Com três sinais negativos, sobra um: o resultado é −6.'
            },
            {
              t: 'numero',
              p: 'Calcule (−{A}) × {B} − (−{C})',
              r: '{= -A * B + C }',
              exp: 'Primeiro a multiplicação: (−{A}) × {B} = {= -A * B }. Depois, menos (−{C}) é mais {C}.',
              vars: { A: { de: 2, ate: 9 }, B: { de: 2, ate: 9 }, C: { de: 1, ate: 20 } }
            }
          ]
        }
      ]
    }
  ]
});
