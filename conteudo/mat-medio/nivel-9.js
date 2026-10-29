/* Trilha Livre · Matemática do ensino médio · Nível 9: Geometria analítica
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'mat-medio',
  n: 9,
  titulo: 'Geometria analítica',
  desc: 'Pontos, distâncias, retas e circunferências no plano cartesiano.',
  videos: [
    {
      titulo: 'Professor Ferretto',
      canal: 'Matemática com Ferretto',
      obs: 'playlist de geometria analítica',
      url: 'https://www.youtube.com/user/professorferretto'
    },
    {
      titulo: 'Equaciona Matemática',
      canal: 'Equaciona',
      obs: 'aulas de distância entre pontos e equação da reta',
      url: 'https://www.youtube.com/channel/UCZLyNRqqp2MeFuwuZdbGDJw'
    },
    {
      tipo: 'texto',
      titulo: 'Khan Academy em português',
      canal: 'Khan Academy',
      obs: 'exercícios de geometria analítica',
      url: 'https://pt.khanacademy.org/'
    }
  ],
  unidades: [
    {
      id: 'mmu16',
      titulo: 'O plano cartesiano',
      conceito: '(x, y)',
      desc: 'Distância, ponto médio, reta e circunferência.',
      licoes: [
        {
          id: 'mm9l1',
          titulo: 'Distância e ponto médio',
          exs: [
            {
              t: 'texto',
              titulo: 'Pitágoras no plano',
              blocos: [
                {
                  p: 'A distância entre dois pontos A e B é a hipotenusa de um triângulo retângulo cujos catetos são as diferenças das coordenadas: $$d = sqrt((x_B − x_A)^2 + (y_B − y_A)^2)$$.'
                },
                {
                  plano: {
                    x: [-1, 7],
                    y: [-1, 6],
                    pontos: [[1, 1, 'A'], [5, 4, 'B']],
                    segmentos: [
                      { de: [1, 1], ate: [5, 4], rotulo: 'd = 5' },
                      { de: [1, 1], ate: [5, 1], tracejado: true },
                      { de: [5, 1], ate: [5, 4], tracejado: true }
                    ],
                    alt: 'Pontos A(1, 1) e B(5, 4), com a distância 5 como hipotenusa'
                  }
                },
                {
                  p: 'De A(1, 1) a B(5, 4): $$d = sqrt(4^2 + 3^2) = 5$$. O ponto médio é a média das coordenadas: $$M = ((1 + 5)/2, (1 + 4)/2) = (3; 2,5)$$.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Qual é a distância entre A({X}, {Y}) e B({= X + 3 * K }, {= Y + 4 * K })?',
              r: '{= 5 * K }',
              exp: '$$d = sqrt({= 3 * K }^2 + {= 4 * K }^2)$$.',
              vars: { X: { de: -5, ate: 5 }, Y: { de: -5, ate: 5 }, K: { de: 1, ate: 3 } }
            },
            {
              t: 'numero',
              p: 'Qual é a distância entre os pontos do gráfico, com 2 casas?',
              r: '{= Math.hypot(X2 - X1, Y2 - Y1) }',
              exp: 'Use Pitágoras com as diferenças de x e de y.',
              casas: 2,
              plano: {
                x: [-1, 9],
                y: [-1, 9],
                pontos: [['{X1}', '{Y1}', 'A'], ['{X2}', '{Y2}', 'B']],
                alt: 'Dois pontos no plano'
              },
              vars: {
                X1: { de: 0, ate: 3 },
                Y1: { de: 0, ate: 3 },
                X2: { de: 5, ate: 8 },
                Y2: { de: 4, ate: 8 }
              }
            },
            {
              t: 'numero',
              p: 'Qual é o x do ponto médio entre A({X1}, {Y1}) e B({X2}, {Y2})?',
              r: '{= (X1 + X2) / 2 }',
              exp: 'A média dos x: ({X1} + {= pr(X2) }) ÷ 2.',
              vars: {
                X1: { de: -8, ate: 8 },
                Y1: { de: -8, ate: 8 },
                X2: { de: -8, ate: 8 },
                Y2: { de: -8, ate: 8 }
              }
            },
            {
              t: 'numero',
              p: 'Um aplicativo mostra você no ponto (0, 0) e a padaria em ({= 6 * K }, {= 8 * K }), em quarteirões. Qual é a distância em linha reta?',
              r: '{= 10 * K }',
              exp: '$$sqrt({= 6 * K }^2 + {= 8 * K }^2)$$.',
              unidade: 'quarteirões',
              vars: { K: { de: 1, ate: 3 } }
            },
            {
              t: 'escolha',
              p: 'Em que quadrante fica o ponto (−{A}, {B})?',
              ops: ['2º quadrante', '1º quadrante', '3º quadrante'],
              c: 0,
              exp: 'x negativo e y positivo: em cima, à esquerda.',
              vars: { A: { de: 1, ate: 9 }, B: { de: 1, ate: 9 } }
            },
            {
              t: 'numero',
              p: 'O ponto médio entre A(2, {Y}) e B é M({= (2 + X) / 2 }, {= (Y + W) / 2 }). Qual é o x de B?',
              r: '{X}',
              exp: 'M é a média: (2 + x) ÷ 2 = {= (2 + X) / 2 }.',
              vars: { X: { de: -6, ate: 12 }, Y: { de: -6, ate: 6 }, W: { de: -6, ate: 6 } },
              se: 'X % 2 === 0 && (Y + W) % 2 === 0'
            }
          ]
        },
        {
          id: 'mm9l2',
          titulo: 'A equação da reta',
          exs: [
            {
              t: 'texto',
              titulo: 'Inclinação e corte',
              blocos: [
                {
                  p: 'Toda reta não vertical tem a forma $$y = mx + n$$. O m é o coeficiente angular, a inclinação: $$m = (y_B − y_A)/(x_B − x_A)$$. O n é onde a reta corta o eixo y.'
                },
                {
                  plano: {
                    x: [-2, 6],
                    y: [-3, 9],
                    f: ['2*x - 1'],
                    pontos: [[1, 1, 'A(1, 1)'], [3, 5, 'B(3, 5)']],
                    alt: 'Reta que passa por A(1, 1) e B(3, 5)'
                  }
                },
                {
                  p: 'Pelos pontos A(1, 1) e B(3, 5): $$m = (5 − 1)/(3 − 1) = 2$$. Usando A: 1 = 2 × 1 + n, então n = −1, e a reta é $$y = 2x − 1$$.'
                },
                {
                  dica: 'Retas paralelas têm o mesmo m. Retas perpendiculares têm m que, multiplicados, dão −1.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Qual é o coeficiente angular da reta que passa por ({X}, {Y}) e ({= X + D }, {= Y + M * D })?',
              r: '{M}',
              exp: '$$m = ({= Y + M * D } − {= pr(Y) })/({= X + D } − {= pr(X) })$$.',
              vars: {
                X: { de: -5, ate: 5 },
                Y: { de: -5, ate: 5 },
                D: { de: 1, ate: 4 },
                M: { de: -4, ate: 5 }
              },
              se: 'M !== 0'
            },
            {
              t: 'numero',
              p: 'A reta $$y = {= cf(M, "x") } + n$$ passa pelo ponto ({X}, {= M * X + NN }). Quanto vale n?',
              r: '{NN}',
              exp: 'Troque x e y: {= M * X + NN } = {M} × {= pr(X) } + n.',
              vars: { M: { de: -4, ate: 5 }, X: { de: -4, ate: 6 }, NN: { de: -8, ate: 8 } },
              se: 'M !== 0'
            },
            {
              t: 'numero',
              p: 'Pelo gráfico, qual é o coeficiente angular da reta?',
              r: '{M}',
              exp: 'Escolha dois pontos da reta e divida a variação de y pela de x.',
              plano: { x: [-5, 5], y: [-10, 10], f: ['{M}*x + {NN}'], alt: 'Uma reta' },
              vars: { M: [-3, -2, -1, 1, 2, 3], NN: { de: -3, ate: 3 } }
            },
            {
              t: 'escolha',
              p: 'Qual reta é paralela a $$y = {M}x + 1$$?',
              ops: ['$$y = {M}x − 5$$', '$$y = {= -M }x + 1$$', '$$y = x + {M}$$'],
              c: 0,
              exp: 'Paralelas têm o mesmo coeficiente angular.',
              vars: { M: [2, 3, 4, 5] }
            },
            {
              t: 'numero',
              p: 'Uma reta perpendicular a $$y = {M}x$$ tem que coeficiente angular? Responda em fração irredutível',
              r: '{= fr(-1, M) }',
              exp: '$${M} × m = −1$$.',
              fracao: true,
              vars: { M: [2, 3, 4, 5] }
            },
            {
              t: 'numero',
              p: 'Em que ponto a reta $$y = {M}x {= sn(NN) }$$ corta o eixo x? Responda o x',
              r: '{= -NN / M }',
              exp: 'No eixo x, y = 0: $${M}x {= sn(NN) } = 0$$.',
              casas: 2,
              vars: { M: [2, 3, 4, -2, -4], NN: { de: -8, ate: 8 } },
              se: 'NN !== 0'
            }
          ]
        },
        {
          id: 'mm9l3',
          titulo: 'A circunferência',
          exs: [
            {
              t: 'texto',
              titulo: 'Todos os pontos à mesma distância',
              blocos: [
                {
                  p: 'Uma circunferência de centro (a, b) e raio r é formada por todos os pontos a uma distância r do centro. A equação vem de Pitágoras: $$(x − a)^2 + (y − b)^2 = r^2$$.'
                },
                {
                  plano: {
                    x: [-3, 7],
                    y: [-3.5, 3.5],
                    circulos: [{ centro: [2, 0], raio: 2 }],
                    pontos: [[2, 0, 'C (2, 0)']],
                    segmentos: [{ de: [2, 0], ate: [0.586, 1.414], rotulo: 'r = 2' }],
                    alt: 'Circunferência de centro (2, 0) e raio 2'
                  }
                },
                {
                  p: 'Exemplo: $$(x − 2)^2 + y^2 = 4$$ tem centro (2, 0) e raio 2. Para saber se um ponto está dentro, calcule a distância dele até o centro e compare com o raio.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Qual é o raio da circunferência $$(x − {A})^2 + (y − {B})^2 = {= R * R }$$?',
              r: '{R}',
              exp: '$$r^2 = {= R * R }$$.',
              vars: { A: { de: 1, ate: 9 }, B: { de: 1, ate: 9 }, R: { de: 2, ate: 12 } }
            },
            {
              t: 'numero',
              p: 'Qual é o x do centro da circunferência $$(x − {A})^2 + (y + {B})^2 = 25$$?',
              r: '{A}',
              exp: 'O centro é ({A}, −{B}).',
              vars: { A: { de: 1, ate: 9 }, B: { de: 1, ate: 9 } }
            },
            {
              t: 'numero',
              p: 'E o y do centro de $$(x − {A})^2 + (y + {B})^2 = 25$$?',
              r: '{= -B }',
              exp: '$$(y + {B}) = (y − (−{B}))$$.',
              vars: { A: { de: 1, ate: 9 }, B: { de: 1, ate: 9 } }
            },
            {
              t: 'escolha',
              p: 'O ponto ({= A + P }, {B}) fica dentro, fora ou sobre a circunferência de centro ({A}, {B}) e raio {R}?',
              ops: [
                '{= P < R ? "Dentro" : P > R ? "Fora" : "Sobre" }',
                '{= P < R ? "Fora" : P > R ? "Sobre" : "Dentro" }',
                '{= P < R ? "Sobre" : P > R ? "Dentro" : "Fora" }'
              ],
              c: 0,
              exp: 'A distância até o centro é {P}; o raio é {R}.',
              vars: {
                A: { de: -3, ate: 3 },
                B: { de: -3, ate: 3 },
                P: { de: 1, ate: 8 },
                R: { de: 2, ate: 6 }
              }
            },
            {
              t: 'numero',
              p: 'Uma antena alcança {R} km. Uma casa fica {X} km a leste e {Y} km ao norte dela. Qual é a distância da casa até a antena, com 2 casas? (Até {R} km, a casa recebe o sinal.)',
              r: '{= Math.hypot(X, Y) }',
              exp: '$$sqrt({X}^2 + {Y}^2)$$. Compare com {R}.',
              unidade: 'km',
              casas: 2,
              vars: { R: [5, 8, 10], X: { de: 1, ate: 8 }, Y: { de: 1, ate: 8 } }
            },
            {
              t: 'numero',
              p: 'Qual é o raio da circunferência que passa pela origem e tem centro em ({= 3 * K }, {= 4 * K })?',
              r: '{= 5 * K }',
              exp: 'O raio é a distância do centro até a origem.',
              vars: { K: { de: 1, ate: 4 } }
            }
          ]
        }
      ]
    }
  ]
});
