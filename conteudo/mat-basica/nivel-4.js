/* Trilha Livre · Matemática básica · Nível 4: Decimais e porcentagem
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'mat-basica',
  n: 4,
  titulo: 'Decimais e porcentagem',
  desc: 'Números com vírgula, dinheiro, porcentagem, aumentos, descontos e variação.',
  videos: [
    {
      titulo: 'Matemática Zero 2.0',
      canal: 'Nerckie',
      obs: 'aulas de números decimais e porcentagem',
      url: 'https://www.youtube.com/playlist?list=PL6846F4C75FFBA3EC'
    },
    {
      titulo: 'Gis com Giz Matemática',
      canal: 'Gis com Giz',
      obs: 'playlist de porcentagem, com muitos problemas do dia a dia',
      url: 'https://www.youtube.com/c/GiscomGiz'
    },
    {
      tipo: 'texto',
      titulo: 'Khan Academy em português',
      canal: 'Khan Academy',
      obs: 'exercícios de decimais e porcentagem',
      url: 'https://pt.khanacademy.org/'
    }
  ],
  unidades: [
    {
      id: 'mbu7',
      titulo: 'Números decimais',
      conceito: '0,5',
      desc: 'A vírgula, o arredondamento e as contas com dinheiro.',
      licoes: [
        {
          id: 'mb4l1',
          titulo: 'A vírgula',
          exs: [
            {
              t: 'texto',
              titulo: 'Décimos, centésimos e milésimos',
              blocos: [
                {
                  p: 'Os números decimais continuam o sistema de casas para a direita da vírgula: a primeira casa depois dela são os décimos, a segunda os centésimos, a terceira os milésimos.'
                },
                {
                  tabela: {
                    cab: ['Número', 'Lê-se', 'Fração'],
                    codigo: [],
                    linhas: [
                      ['0,5', 'cinco décimos', '$$5/10 = 1/2$$'],
                      ['0,25', 'vinte e cinco centésimos', '$$25/100 = 1/4$$'],
                      ['0,125', 'cento e vinte e cinco milésimos', '$$125/1000 = 1/8$$']
                    ]
                  }
                },
                {
                  p: 'Para comparar decimais, iguale o número de casas com zeros à direita: 0,5 = 0,50, que é maior que 0,45.'
                },
                {
                  p: 'Para arredondar com uma casa, olhe a casa seguinte: de 0 a 4, mantém; de 5 a 9, sobe um. 3,46 vira 3,5, e 3,44 vira 3,4.'
                },
                {
                  dica: 'No Brasil, a vírgula separa os decimais e o ponto separa os milhares: R$ 1.250,50. Em programação e nas calculadoras, é o contrário: 1250.50.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual é maior: 0,5 ou 0,45?',
              ops: ['0,5', '0,45', 'São iguais'],
              c: 0,
              exp: '0,5 = 0,50, e 50 centésimos é mais que 45 centésimos.'
            },
            {
              t: 'numero',
              p: 'Escreva $$3/4$$ como número decimal',
              r: '0.75',
              exp: 'Divida 3 por 4: 0,75.'
            },
            {
              t: 'numero',
              p: 'Escreva $${A}/{B}$$ como número decimal',
              r: '{= A / B }',
              exp: 'Divida {A} por {B}.',
              vars: { A: { de: 1, ate: 9 }, B: [2, 4, 5, 8, 10, 20, 25] },
              se: 'A < B'
            },
            {
              t: 'numero',
              p: 'Arredonde {= br(X) } para uma casa decimal',
              r: '{= Math.round(X * 10) / 10 }',
              exp: 'Olhe a segunda casa: de 0 a 4 mantém, de 5 a 9 sobe um.',
              casas: 1,
              tol: 0.000001,
              vars: { X: { de: 1.01, ate: 9.99, passo: 0.01 } },
              se: 'Math.round(X * 100) % 10 !== 5 && Math.round(X * 100) % 10 !== 0'
            },
            {
              t: 'escolha',
              p: 'Qual destes números é igual a 2,4?',
              ops: ['2,40', '2,04', '24'],
              c: 0,
              exp: 'Zeros à direita depois da vírgula não mudam o valor.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem, do menor para o maior',
              lines: ['0,09', '0,1', '0,15', '0,5', '0,51'],
              exp: 'Iguale as casas: 0,09; 0,10; 0,15; 0,50 e 0,51.'
            }
          ]
        },
        {
          id: 'mb4l2',
          titulo: 'Contas com decimais',
          exs: [
            {
              t: 'texto',
              titulo: 'Vírgula embaixo de vírgula',
              blocos: [
                {
                  p: 'Para somar e subtrair, alinhe as vírgulas e complete com zeros: 12,5 + 3,75 é 12,50 + 3,75 = 16,25.'
                },
                {
                  p: 'Para multiplicar, faça a conta sem as vírgulas e, no fim, o resultado tem tantas casas decimais quanto os dois fatores juntos: 1,2 × 0,3 → 12 × 3 = 36 → duas casas → 0,36.'
                },
                {
                  p: 'Multiplicar por 10, 100 ou 1000 anda a vírgula 1, 2 ou 3 casas para a direita. Dividir anda para a esquerda: 45,6 ÷ 100 = 0,456.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Calcule {= br(A) } + {= br(B) }',
              r: '{= A + B }',
              exp: 'Vírgula embaixo de vírgula.',
              casas: 2,
              vars: {
                A: { de: 1.25, ate: 49.75, passo: 0.25 },
                B: { de: 0.05, ate: 9.95, passo: 0.05 }
              }
            },
            {
              t: 'numero',
              p: 'Você comprou um café de R$ {= br(A, 2) } e um pão de R$ {= br(B, 2) } e pagou com R$ 20,00. Quanto recebe de troco?',
              r: '{= 20 - A - B }',
              exp: 'Some a compra e tire de 20.',
              prefixo: 'R$',
              casas: 2,
              vars: { A: { de: 3.5, ate: 9.9, passo: 0.1 }, B: { de: 0.5, ate: 6.5, passo: 0.25 } }
            },
            {
              t: 'numero',
              p: 'Calcule {= br(A) } × {B}',
              r: '{= A * B }',
              exp: 'Faça a conta sem a vírgula e devolva as casas no fim.',
              casas: 2,
              vars: { A: { de: 0.5, ate: 9.5, passo: 0.5 }, B: { de: 2, ate: 12 } }
            },
            {
              t: 'numero',
              p: 'Quanto custam {Q} kg de tomate a R$ {= br(P, 2) } o quilo?',
              r: '{= Q * P }',
              exp: '{Q} × {= br(P, 2) }.',
              prefixo: 'R$',
              casas: 2,
              vars: { Q: { de: 2, ate: 6 }, P: { de: 3.5, ate: 9.9, passo: 0.1 } }
            },
            {
              t: 'numero',
              p: 'Calcule {= br(A) } × 100',
              r: '{= A * 100 }',
              exp: 'Vezes 100: a vírgula anda duas casas para a direita.',
              vars: { A: { de: 0.123, ate: 9.876, passo: 0.001 } }
            },
            {
              t: 'numero',
              p: 'Um carro faz {= br(K) } km com 1 litro. Quantos quilômetros faz com {L} litros?',
              r: '{= K * L }',
              exp: '{= br(K) } × {L}.',
              unidade: 'km',
              casas: 1,
              vars: { K: { de: 8.5, ate: 14.5, passo: 0.5 }, L: { de: 5, ate: 45, passo: 5 } }
            }
          ]
        }
      ]
    },
    {
      id: 'mbu8',
      titulo: 'Porcentagem',
      conceito: '%',
      desc: 'Partes de cem, aumentos, descontos e variação percentual.',
      licoes: [
        {
          id: 'mb4l3',
          titulo: 'O que é porcentagem',
          exs: [
            {
              t: 'texto',
              titulo: 'Por cento: a cada cem',
              blocos: [
                {
                  p: 'Porcentagem é uma fração com denominador 100: $$35% = 35/100 = 0,35$$. Ela serve para comparar partes de totais diferentes.'
                },
                {
                  p: 'Para calcular x% de um valor, multiplique o valor pela taxa em decimal: 35% de 80 é 0,35 × 80 = 28. Atalhos: 10% é dividir por 10, 50% é a metade, 25% é a quarta parte, 1% é dividir por 100.'
                },
                {
                  tabela: {
                    cab: ['Porcentagem', 'Fração', 'Decimal'],
                    codigo: [],
                    linhas: [
                      ['50%', '$$1/2$$', '0,5'],
                      ['25%', '$$1/4$$', '0,25'],
                      ['20%', '$$1/5$$', '0,2'],
                      ['10%', '$$1/10$$', '0,1'],
                      ['1%', '$$1/100$$', '0,01']
                    ]
                  }
                },
                {
                  p: 'Para saber quantos por cento uma parte é do total, divida a parte pelo total e multiplique por 100: 12 de 48 é 12 ÷ 48 = 0,25 = 25%.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Quanto é {P}% de {V}?',
              r: '{= P * V / 100 }',
              exp: 'Multiplique {V} por {= br(P / 100) }.',
              vars: { P: [5, 10, 15, 20, 25, 30, 40, 75], V: { de: 40, ate: 900, passo: 20 } }
            },
            {
              t: 'numero',
              p: 'Numa turma de {T} alunos, {A} foram aprovados. Que porcentagem foi aprovada?',
              r: '{= A / T * 100 }',
              exp: '{A} ÷ {T} × 100.',
              unidade: '%',
              casas: 1,
              vars: { T: [20, 25, 40, 50], A: { de: 5, ate: 40 } },
              se: 'A < T'
            },
            {
              t: 'escolha',
              p: 'Calcular 10% de um valor é o mesmo que...',
              ops: ['Dividir por 10', 'Multiplicar por 10', 'Tirar 10'],
              c: 0,
              exp: '10% = $$10/100 = 1/10$$.'
            },
            {
              t: 'escolha',
              p: 'Qual destas é igual a 0,6?',
              ops: ['60%', '6%', '0,6%'],
              c: 0,
              exp: '0,6 = $$60/100$$.'
            },
            {
              t: 'numero',
              p: 'Um celular custa R$ {= br(V) } e a loja pede {P}% de entrada. Qual é o valor da entrada?',
              r: '{= V * P / 100 }',
              exp: '{P}% de {= br(V) }.',
              prefixo: 'R$',
              casas: 2,
              vars: { V: { de: 800, ate: 3000, passo: 100 }, P: [10, 15, 20, 30] }
            },
            {
              t: 'numero',
              p: 'De {T} pessoas entrevistadas, {= T * P / 100 } disseram que usam ônibus. Que porcentagem é essa?',
              r: '{P}',
              exp: 'Divida a parte pelo total e multiplique por 100.',
              unidade: '%',
              vars: { T: [200, 400, 500, 800], P: [12, 15, 35, 45, 62] }
            }
          ]
        },
        {
          id: 'mb4l4',
          titulo: 'Aumentos e descontos',
          exs: [
            {
              t: 'texto',
              titulo: 'O fator multiplicativo',
              blocos: [
                {
                  p: 'Para dar um aumento de 15%, some 15% ao valor: o novo valor é 115% do antigo, ou seja, multiplique por 1,15. Para dar um desconto de 15%, sobra 85%: multiplique por 0,85.'
                },
                {
                  tabela: {
                    cab: ['Mudança', 'Multiplique por'],
                    codigo: [],
                    linhas: [
                      ['aumento de 10%', '1,10'],
                      ['aumento de 25%', '1,25'],
                      ['desconto de 10%', '0,90'],
                      ['desconto de 30%', '0,70']
                    ]
                  }
                },
                {
                  p: 'O fator resolve também o caminho de volta: se um produto custa R$ 115 depois de um aumento de 15%, antes custava 115 ÷ 1,15 = R$ 100.'
                },
                {
                  dica: 'Um aumento de 10% seguido de um desconto de 10% não volta ao preço original: 1,10 × 0,90 = 0,99. Perde-se 1%.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Um produto de R$ {= br(V) } teve aumento de {P}%. Qual é o novo preço?',
              r: '{= V * (1 + P / 100) }',
              exp: 'Multiplique por {= br(1 + P / 100) }.',
              prefixo: 'R$',
              casas: 2,
              vars: { V: { de: 40, ate: 900, passo: 10 }, P: [5, 8, 10, 12, 15, 20, 25] }
            },
            {
              t: 'numero',
              p: 'Uma camiseta de R$ {= br(V) } está com {P}% de desconto. Quanto você paga?',
              r: '{= V * (1 - P / 100) }',
              exp: 'Sobra {= 100 - P }% do preço: multiplique por {= br(1 - P / 100) }.',
              prefixo: 'R$',
              casas: 2,
              vars: { V: { de: 30, ate: 300, passo: 5 }, P: [10, 15, 20, 25, 30, 40] }
            },
            {
              t: 'escolha',
              p: 'Para um aumento de {P}%, multiplicamos o valor por...',
              ops: ['{= br(1 + P / 100) }', '{= br(P / 100) }', '{= br(1 - P / 100) }'],
              c: 0,
              exp: 'O novo valor é 100% + {P}% = {= 100 + P }% do antigo.',
              vars: { P: [5, 8, 12, 15, 30, 45] }
            },
            {
              t: 'numero',
              p: 'Depois de um aumento de {P}%, um aluguel passou a custar R$ {= br(V * (1 + P / 100)) }. Quanto custava antes?',
              r: '{V}',
              exp: 'Divida por {= br(1 + P / 100) }.',
              prefixo: 'R$',
              casas: 2,
              vars: { V: { de: 600, ate: 2000, passo: 50 }, P: [5, 8, 10, 12] }
            },
            {
              t: 'numero',
              p: 'O salário mínimo de R$ {= br(V) } teve reajuste de {= br(P) }%. Qual é o novo valor, com 2 casas?',
              r: '{= V * (1 + P / 100) }',
              exp: 'Multiplique por {= br(1 + P / 100) }.',
              prefixo: 'R$',
              casas: 2,
              vars: { V: [1320, 1412, 1518], P: [4.5, 5.2, 6.97, 7.5] }
            },
            {
              t: 'escolha',
              p: 'Um preço sobe 10% e depois cai 10%. Comparado ao preço inicial, ele...',
              ops: ['Fica 1% menor', 'Volta ao mesmo valor', 'Fica 1% maior'],
              c: 0,
              exp: '1,10 × 0,90 = 0,99: o desconto é calculado sobre um valor maior.'
            }
          ]
        },
        {
          id: 'mb4l5',
          titulo: 'Variação e descontos em sequência',
          exs: [
            {
              t: 'texto',
              titulo: 'Quanto mudou, em porcentagem',
              blocos: [
                {
                  p: 'A variação percentual compara a mudança com o valor inicial: variação = (novo − antigo) ÷ antigo × 100. Se a passagem foi de R$ 4,00 para R$ 5,00, a variação é 1 ÷ 4 = 25%.'
                },
                {
                  p: 'Aumentos e descontos em sequência se multiplicam, não se somam. Dois aumentos de 10% dão 1,1 × 1,1 = 1,21, ou seja, 21%. Um desconto de 20% e depois mais 10% dão 0,8 × 0,9 = 0,72: um desconto total de 28%, e não de 30%.'
                },
                {
                  dica: 'Inflação e juros compostos funcionam assim: cada mês aplica a porcentagem sobre o valor que já mudou.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'A passagem de ônibus foi de R$ {= br(A, 2) } para R$ {= br(B, 2) }. Qual foi o aumento percentual?',
              r: '{= (B - A) / A * 100 }',
              exp: '({= br(B, 2) } − {= br(A, 2) }) ÷ {= br(A, 2) } × 100.',
              unidade: '%',
              casas: 1,
              vars: { A: [4, 4.4, 4.5, 5], B: [4.8, 5, 5.2, 5.5, 6] },
              se: 'B > A'
            },
            {
              t: 'numero',
              p: 'Um produto custava R$ {A} e agora custa R$ {B}. Qual foi o desconto percentual?',
              r: '{= (A - B) / A * 100 }',
              exp: '({A} − {B}) ÷ {A} × 100.',
              unidade: '%',
              casas: 1,
              vars: { A: [80, 120, 150, 200, 250], B: [60, 90, 100, 110, 140] },
              se: 'B < A'
            },
            {
              t: 'numero',
              p: 'Um preço sobe {P}% em um mês e mais {Q}% no mês seguinte. Qual foi o aumento total, em porcentagem?',
              r: '{= ((1 + P / 100) * (1 + Q / 100) - 1) * 100 }',
              exp: 'Multiplique os fatores: {= br(1 + P / 100) } × {= br(1 + Q / 100) } = {= br((1 + P / 100) * (1 + Q / 100), 4) }.',
              unidade: '%',
              casas: 2,
              vars: { P: [5, 10, 20], Q: [5, 10, 15, 20] }
            },
            {
              t: 'numero',
              p: 'Uma loja dá {P}% de desconto e, no caixa, mais {Q}% sobre o novo preço. Qual é o desconto total, em porcentagem?',
              r: '{= (1 - (1 - P / 100) * (1 - Q / 100)) * 100 }',
              exp: 'Fatores: {= br(1 - P / 100) } × {= br(1 - Q / 100) } = {= br((1 - P / 100) * (1 - Q / 100), 4) }. O desconto total é 1 menos isso.',
              unidade: '%',
              casas: 2,
              vars: { P: [10, 20, 30], Q: [5, 10, 20] }
            },
            {
              t: 'escolha',
              p: 'Dois descontos seguidos de 20% equivalem a um desconto de...',
              ops: ['36%', '40%', '20%'],
              c: 0,
              exp: '0,8 × 0,8 = 0,64. Sobra 64%: o desconto foi de 36%.'
            },
            {
              t: 'numero',
              p: 'Uma cidade tinha {= br(A) } habitantes e passou a ter {= br(A + D) }. Qual foi o crescimento percentual?',
              r: '{= D / A * 100 }',
              exp: '({= br(A + D) } − {= br(A) }) ÷ {= br(A) } × 100.',
              unidade: '%',
              casas: 1,
              vars: {
                A: { de: 20000, ate: 50000, passo: 1000 },
                D: { de: 500, ate: 12000, passo: 250 }
              }
            }
          ]
        }
      ]
    }
  ]
});
