/* Trilha Livre · Matemática do ensino médio · Nível 8: Estatística
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'mat-medio',
  n: 8,
  titulo: 'Estatística',
  desc: 'Média ponderada, tabelas de frequência, dispersão e leitura crítica de gráficos.',
  videos: [
    {
      titulo: 'Professor Ferretto',
      canal: 'Matemática com Ferretto',
      obs: 'playlist de estatística para o Enem',
      url: 'https://www.youtube.com/user/professorferretto'
    },
    {
      titulo: 'Matemática Rio',
      canal: 'Prof. Rafael Procopio',
      obs: 'aulas de média, moda, mediana e desvio padrão',
      url: 'https://www.youtube.com/user/matematicario'
    },
    {
      tipo: 'texto',
      titulo: 'Khan Academy em português',
      canal: 'Khan Academy',
      obs: 'exercícios de estatística',
      url: 'https://pt.khanacademy.org/'
    }
  ],
  unidades: [
    {
      id: 'mmu15',
      titulo: 'Resumir e comparar dados',
      conceito: 'σ',
      desc: 'Médias, dispersão e gráficos.',
      licoes: [
        {
          id: 'mm8l1',
          titulo: 'Médias e frequências',
          exs: [
            {
              t: 'texto',
              titulo: 'Quando os valores se repetem',
              blocos: [
                {
                  p: 'Numa tabela de frequências, cada valor aparece com o número de vezes que ocorreu. A média é a soma de valor × frequência, dividida pelo total de frequências. É uma média ponderada, com as frequências como pesos.'
                },
                {
                  tabela: {
                    cab: ['Nota', 'Alunos'],
                    codigo: [],
                    linhas: [['5', '4'], ['7', '10'], ['9', '6']]
                  }
                },
                {
                  p: 'Média: $$(5 × 4 + 7 × 10 + 9 × 6)/(4 + 10 + 6) = 144/20 = 7,2$$. A moda é 7, a nota que mais aparece. A mediana, com 20 alunos, é a média do 10º e do 11º valores em ordem: os dois são 7.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Na tabela, {A} alunos tiraram 5, {B} tiraram 7 e {C} tiraram 9. Qual é a média da turma?',
              r: '{= (5 * A + 7 * B + 9 * C) / (A + B + C) }',
              exp: 'Some nota × alunos e divida pelo total de alunos, {= A + B + C }.',
              casas: 2,
              vars: { A: { de: 2, ate: 10 }, B: { de: 2, ate: 12 }, C: { de: 2, ate: 10 } }
            },
            {
              t: 'numero',
              p: 'Uma prova tem peso {P1} e um trabalho tem peso {P2}. Com nota {N1} na prova e {N2} no trabalho, qual é a média?',
              r: '{= (P1 * N1 + P2 * N2) / (P1 + P2) }',
              exp: '$$({P1} × {N1} + {P2} × {N2})/({P1} + {P2})$$.',
              casas: 2,
              vars: { P1: [2, 3, 4], P2: [1, 2], N1: { de: 4, ate: 10 }, N2: { de: 4, ate: 10 } }
            },
            {
              t: 'numero',
              p: 'Um aluno precisa de média ponderada 6. A prova tem peso 3 e ele tirou {N1}; o trabalho tem peso 2. Que nota mínima ele precisa no trabalho?',
              r: '{= (30 - 3 * N1) / 2 }',
              exp: '$$(3 × {N1} + 2x)/5 = 6$$, então $$2x = 30 − {= 3 * N1 }$$.',
              casas: 1,
              vars: { N1: [4, 4.5, 5, 5.5, 6, 7] }
            },
            {
              t: 'escolha',
              p: 'Numa tabela, o salário mais comum de uma empresa é R$ 2.000. Essa medida é...',
              ops: ['A moda', 'A média', 'A mediana'],
              c: 0,
              exp: 'Moda é o valor que mais aparece.'
            },
            {
              t: 'numero',
              p: 'Os gols por jogo de um time foram: 0 gols em {A} jogos, 1 gol em {B} jogos e 2 gols em {C} jogos. Qual é a média de gols por jogo?',
              r: '{= (B + 2 * C) / (A + B + C) }',
              exp: '$$(0 × {A} + 1 × {B} + 2 × {C})/{= A + B + C }$$.',
              casas: 2,
              vars: { A: { de: 2, ate: 8 }, B: { de: 2, ate: 10 }, C: { de: 2, ate: 8 } }
            },
            {
              t: 'numero',
              p: 'A média de {N} números é {M}. Acrescentando o número {X}, qual é a nova média?',
              r: '{= (N * M + X) / (N + 1) }',
              exp: 'A soma era {N} × {M} = {= N * M }; agora são {= N + 1 } números.',
              casas: 2,
              vars: { N: { de: 4, ate: 9 }, M: { de: 5, ate: 15 }, X: { de: 1, ate: 30 } }
            }
          ]
        },
        {
          id: 'mm8l2',
          titulo: 'Dispersão',
          exs: [
            {
              t: 'texto',
              titulo: 'O quanto os dados se espalham',
              blocos: [
                {
                  p: 'Duas turmas podem ter a mesma média e ser bem diferentes: numa, todo mundo tirou perto de 7; na outra, metade tirou 4 e metade 10. A dispersão mede esse espalhamento.'
                },
                {
                  passos: [
                    'Amplitude: o maior valor menos o menor.',
                    'Variância: a média dos quadrados das distâncias até a média.',
                    'Desvio padrão: a raiz quadrada da variância, na mesma unidade dos dados.'
                  ]
                },
                {
                  p: 'Exemplo: 4, 6 e 8. Média 6. Distâncias: −2, 0 e 2. Quadrados: 4, 0 e 4. Variância: $$8/3 ≈ 2,67$$. Desvio padrão: $$sqrt(2,67) ≈ 1,63$$.'
                },
                {
                  dica: 'Quanto menor o desvio padrão, mais regular é o conjunto de dados. Numa fábrica, desvio pequeno quer dizer peças parecidas.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Qual é a amplitude dos dados {A}, {B}, {C}, {D}?',
              r: '{= Math.max(A, B, C, D) - Math.min(A, B, C, D) }',
              exp: 'Maior menos menor.',
              vars: {
                A: { de: 1, ate: 50 },
                B: { de: 1, ate: 50 },
                C: { de: 1, ate: 50 },
                D: { de: 1, ate: 50 }
              }
            },
            {
              t: 'numero',
              p: 'Qual é a variância de {= M - K }, {M} e {= M + K }?',
              r: '{= 2 * K * K / 3 }',
              exp: 'A média é {M}. As distâncias são −{K}, 0 e {K}; a média dos quadrados é $$(2 × {K}^2)/3$$.',
              casas: 2,
              vars: { M: { de: 5, ate: 20 }, K: { de: 1, ate: 6 } }
            },
            {
              t: 'numero',
              p: 'Qual é o desvio padrão de {= M - K }, {= M + K }, {= M - K } e {= M + K }?',
              r: '{K}',
              exp: 'A média é {M}, e todos estão a {K} dela.',
              vars: { M: { de: 5, ate: 20 }, K: { de: 1, ate: 6 } }
            },
            {
              t: 'escolha',
              p: 'Duas máquinas fazem parafusos com média de 10 mm. A máquina A tem desvio padrão 0,1 mm e a B, 0,5 mm. Qual é mais regular?',
              ops: ['A máquina A', 'A máquina B', 'As duas são iguais'],
              c: 0,
              exp: 'Desvio padrão menor: as peças variam menos em torno da média.'
            },
            {
              t: 'escolha',
              p: 'Somando 5 a todos os valores de um conjunto, o desvio padrão...',
              ops: ['Não muda', 'Aumenta 5', 'Fica 5 vezes maior'],
              c: 0,
              exp: 'Os dados andam juntos: as distâncias até a média continuam as mesmas.'
            },
            {
              t: 'escolha',
              p: 'Qual destes conjuntos tem o maior desvio padrão?',
              ops: ['1, 10, 19', '9, 10, 11', '10, 10, 10'],
              c: 0,
              exp: 'Os três têm média 10, mas o primeiro está muito mais espalhado.'
            }
          ]
        },
        {
          id: 'mm8l3',
          titulo: 'Gráficos que enganam',
          exs: [
            {
              t: 'texto',
              titulo: 'Ler com desconfiança',
              blocos: [
                {
                  p: 'Gráficos podem dizer a verdade e mesmo assim enganar. Antes de concluir, confira: o eixo vertical começa no zero? Os valores são absolutos ou porcentagens? O período escolhido é justo?'
                },
                {
                  plano: {
                    x: [0, 5],
                    y: [95, 101],
                    segmentos: [
                      { de: [1, 96], ate: [2, 97] },
                      { de: [2, 97], ate: [3, 98.5] },
                      { de: [3, 98.5], ate: [4, 100] }
                    ],
                    pontos: [[1, 96], [2, 97], [3, 98.5], [4, 100]],
                    alt: 'Gráfico de linha com o eixo vertical começando em 95, o que faz uma subida de 4% parecer enorme'
                  }
                },
                {
                  p: 'Neste gráfico, o eixo vertical começa em 95. A subida de 96 para 100 é de pouco mais de 4%, mas parece que o valor disparou. Com o eixo começando no zero, a linha pareceria quase reta.'
                },
                {
                  dica: 'O Enem adora gráficos de linha e de barras com dados reais. Leia o título, as unidades e a escala antes das contas.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Um valor foi de {A} para {B}. Qual foi o aumento percentual, com 1 casa?',
              r: '{= (B - A) / A * 100 }',
              exp: '({B} − {A}) ÷ {A} × 100.',
              unidade: '%',
              casas: 1,
              vars: { A: { de: 90, ate: 99 }, B: { de: 100, ate: 110 } }
            },
            {
              t: 'escolha',
              p: 'No gráfico, em qual intervalo o valor subiu mais?',
              ops: [
                '{= ["Entre 1 e 2", "Entre 2 e 3", "Entre 3 e 4"][[Y2 - Y1, Y3 - Y2, Y4 - Y3].indexOf(Math.max(Y2 - Y1, Y3 - Y2, Y4 - Y3))] }',
                '{= ["Entre 2 e 3", "Entre 3 e 4", "Entre 1 e 2"][[Y2 - Y1, Y3 - Y2, Y4 - Y3].indexOf(Math.max(Y2 - Y1, Y3 - Y2, Y4 - Y3))] }',
                '{= ["Entre 3 e 4", "Entre 1 e 2", "Entre 2 e 3"][[Y2 - Y1, Y3 - Y2, Y4 - Y3].indexOf(Math.max(Y2 - Y1, Y3 - Y2, Y4 - Y3))] }'
              ],
              c: 0,
              exp: 'Onde a linha está mais inclinada, a subida é maior.',
              plano: {
                x: [0, 5],
                y: [0, 20],
                segmentos: [
                  { de: [1, '{Y1}'], ate: [2, '{Y2}'] },
                  { de: [2, '{Y2}'], ate: [3, '{Y3}'] },
                  { de: [3, '{Y3}'], ate: [4, '{Y4}'] }
                ],
                pontos: [[1, '{Y1}'], [2, '{Y2}'], [3, '{Y3}'], [4, '{Y4}']],
                alt: 'Gráfico de linha com quatro pontos'
              },
              vars: {
                Y1: { de: 2, ate: 5 },
                Y2: { de: 6, ate: 10 },
                Y3: { de: 11, ate: 14 },
                Y4: { de: 15, ate: 19 }
              },
              se: 'new Set([Y2 - Y1, Y3 - Y2, Y4 - Y3]).size === 3'
            },
            {
              t: 'escolha',
              p: 'Uma notícia diz: “os casos dobraram!”. Foram de 2 para 4. O que falta para avaliar?',
              ops: [
                'Saber o total de pessoas e se 2 casos é um número relevante',
                'Nada, dobrar é sempre grave',
                'Saber a cor do gráfico'
              ],
              c: 0,
              exp: 'Porcentagens sobre números pequenos podem exagerar uma mudança.'
            },
            {
              t: 'numero',
              p: 'Uma cidade de {= br(P) } habitantes teve {A} casos de uma doença. Quantos casos por 100 mil habitantes?',
              r: '{= A / P * 100000 }',
              exp: 'Divida os casos pela população e multiplique por 100.000. Assim dá para comparar cidades de tamanhos diferentes.',
              casas: 1,
              vars: { P: [50000, 200000, 800000, 1500000], A: { de: 10, ate: 500 } }
            },
            {
              t: 'escolha',
              p: 'Um gráfico de barras mostra 2.000 e 2.200, com o eixo começando em 1.900. A segunda barra parece 3 vezes maior. Quanto ela é maior, de verdade?',
              ops: ['10%', '200%', '300%'],
              c: 0,
              exp: '2.200 ÷ 2.000 = 1,1: só 10% a mais.'
            },
            {
              t: 'numero',
              p: 'Uma empresa tem {A} funcionárias entre {T} funcionários. Que porcentagem são mulheres, com 1 casa?',
              r: '{= A / T * 100 }',
              exp: '{A} ÷ {T} × 100.',
              unidade: '%',
              casas: 1,
              vars: { A: { de: 10, ate: 80 }, T: [100, 120, 150, 200] }
            }
          ]
        }
      ]
    }
  ]
});
