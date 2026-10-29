/* Trilha Livre · Matemática do ensino médio · Nível 2: Função quadrática
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'mat-medio',
  n: 2,
  titulo: 'Função quadrática',
  desc: 'Parábolas, raízes, vértice, máximos e mínimos e o estudo do sinal.',
  videos: [
    {
      titulo: 'Professor Ferretto',
      canal: 'Matemática com Ferretto',
      obs: 'playlist de função do 2º grau',
      url: 'https://www.youtube.com/user/professorferretto'
    },
    {
      titulo: 'Equaciona Matemática',
      canal: 'Equaciona',
      obs: 'aulas de função quadrática e vértice da parábola',
      url: 'https://www.youtube.com/channel/UCZLyNRqqp2MeFuwuZdbGDJw'
    },
    {
      tipo: 'texto',
      titulo: 'Khan Academy em português',
      canal: 'Khan Academy',
      obs: 'exercícios de funções quadráticas',
      url: 'https://pt.khanacademy.org/'
    }
  ],
  unidades: [
    {
      id: 'mmu3',
      titulo: 'Parábolas',
      conceito: 'ax² + bx + c',
      desc: 'Concavidade, raízes e vértice.',
      licoes: [
        {
          id: 'mm2l1',
          titulo: 'A parábola',
          exs: [
            {
              t: 'texto',
              titulo: 'f(x) = ax² + bx + c',
              blocos: [
                {
                  p: 'A função quadrática tem a forma $$f(x) = ax^2 + bx + c$$, com a diferente de zero. O gráfico é uma parábola.'
                },
                {
                  plano: {
                    x: [-4, 4],
                    y: [-5, 9],
                    f: [{ e: 'x**2 - 4', nome: 'a > 0' }, { e: '-x**2 + 6', nome: 'a < 0' }],
                    alt: 'Duas parábolas: uma com a boca para cima, outra com a boca para baixo'
                  }
                },
                {
                  p: 'Se a > 0, a parábola tem a concavidade (a “boca”) para cima; se a < 0, para baixo. O c é onde ela corta o eixo y. As raízes, onde ela corta o eixo x, saem da fórmula de Bhaskara: $$x = (−b ± sqrt(Δ))/(2a)$$, com $$Δ = b^2 − 4ac$$.'
                },
                {
                  dica: 'Atalho com a = 1: as raízes somam −b e multiplicam c. Em $$x^2 − 5x + 6$$, os números 2 e 3 somam 5 e multiplicam 6.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Para onde fica a concavidade da parábola de $$f(x) = {= cf(A, "x^2") } {= tm(B, "x") } {= sn(C) }$$?',
              ops: [
                '{= A > 0 ? "Para cima" : "Para baixo" }',
                '{= A > 0 ? "Para baixo" : "Para cima" }'
              ],
              c: 0,
              exp: 'O sinal do a decide: a = {A}.',
              vars: { A: [-3, -2, -1, 1, 2, 3], B: { de: -5, ate: 5 }, C: { de: -5, ate: 5 } },
              se: 'B !== 0 && C !== 0'
            },
            {
              t: 'numero',
              p: 'Em que valor de y a parábola $$f(x) = x^2 {= tm(B, "x") } {= sn(C) }$$ corta o eixo y?',
              r: '{C}',
              exp: 'É f(0) = c.',
              vars: { B: { de: -6, ate: 6 }, C: { de: -9, ate: 9 } },
              se: 'B !== 0 && C !== 0'
            },
            {
              t: 'numero',
              p: 'Qual é a maior raiz de $$x^2 {= tm(-(R1 + R2), "x") } {= sn(R1 * R2) } = 0$$?',
              r: '{= Math.max(R1, R2) }',
              exp: 'Dois números que somam {= R1 + R2 } e multiplicam {= R1 * R2 }.',
              vars: { R1: { de: -5, ate: 6 }, R2: { de: 1, ate: 9 } },
              se: 'R1 !== R2 && R1 + R2 !== 0 && R1 !== 0'
            },
            {
              t: 'numero',
              p: 'Pelo gráfico, qual é a soma das duas raízes da parábola?',
              r: '{= R1 + R2 }',
              exp: 'As raízes são os pontos em que a parábola corta o eixo x.',
              plano: {
                x: [-7, 7],
                y: [-12, 12],
                f: ['(x - ({R1}))*(x - ({R2}))'],
                alt: 'Parábola que corta o eixo x em dois pontos'
              },
              vars: { R1: { de: -5, ate: 0 }, R2: { de: 1, ate: 5 } }
            },
            {
              t: 'numero',
              p: 'Calcule f({X}) para $$f(x) = {A}x^2 − {B}x {= sn(C) }$$',
              r: '{= A * X * X - B * X + C }',
              exp: 'Primeiro a potência, depois as multiplicações.',
              vars: {
                A: { de: 2, ate: 4 },
                B: { de: 2, ate: 6 },
                C: { de: -5, ate: 5 },
                X: { de: -3, ate: 4 }
              },
              se: 'C !== 0'
            },
            {
              t: 'numero',
              p: 'Pelo gráfico, qual é o produto das duas raízes?',
              r: '{= R1 * R2 }',
              exp: 'Leia onde a parábola corta o eixo x e multiplique.',
              plano: {
                x: [-7, 7],
                y: [-12, 12],
                f: ['(x - ({R1}))*(x - ({R2}))'],
                alt: 'Parábola que corta o eixo x em dois pontos'
              },
              vars: { R1: { de: -5, ate: -1 }, R2: { de: 1, ate: 5 } }
            }
          ]
        },
        {
          id: 'mm2l2',
          titulo: 'O vértice',
          exs: [
            {
              t: 'texto',
              titulo: 'O ponto da virada',
              blocos: [
                {
                  p: 'O vértice é o ponto em que a parábola muda de direção: o ponto mais baixo (se a > 0) ou o mais alto (se a < 0). As coordenadas são $$x_v = −b/(2a)$$ e $$y_v = f(x_v)$$, que também dá para calcular por $$−Δ/(4a)$$.'
                },
                {
                  plano: {
                    x: [-1, 7],
                    y: [-5, 8],
                    f: ['x**2 - 6*x + 5'],
                    pontos: [[3, -4, 'vértice (3, −4)']],
                    alt: 'Parábola com o vértice no ponto (3, −4)'
                  }
                },
                {
                  p: 'Exemplo: $$f(x) = x^2 − 6x + 5$$. $$x_v = 6/2 = 3$$ e $$y_v = 9 − 18 + 5 = −4$$. Como a > 0, −4 é o valor mínimo da função.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Qual é o x do vértice de $$f(x) = x^2 {= sn(-2 * V) }x {= sn(C) }$$?',
              r: '{V}',
              exp: '$$x_v = −b/(2a)$$ = {= 2 * V } ÷ 2.',
              vars: { V: { de: -6, ate: 6 }, C: { de: -9, ate: 9 } },
              se: 'V !== 0 && C !== 0'
            },
            {
              t: 'numero',
              p: 'Qual é o valor mínimo de $$f(x) = x^2 {= sn(-2 * V) }x {= sn(C) }$$?',
              r: '{= C - V * V }',
              exp: 'Calcule $$x_v = {V}$$ e depois f({V}).',
              vars: { V: { de: -6, ate: 6 }, C: { de: -9, ate: 9 } },
              se: 'V !== 0 && C !== 0'
            },
            {
              t: 'escolha',
              p: 'O vértice de $$f(x) = −x^2 + 4x + 1$$ é um ponto de...',
              ops: ['Máximo', 'Mínimo', 'Nem máximo nem mínimo'],
              c: 0,
              exp: 'a < 0: a parábola tem a boca para baixo, então o vértice é o ponto mais alto.'
            },
            {
              t: 'numero',
              p: 'Pelo gráfico, qual é o y do vértice?',
              r: '{K}',
              exp: 'O vértice é o ponto mais {= A > 0 ? "baixo" : "alto" } da parábola.',
              plano: {
                x: [-6, 6],
                y: [-10, 10],
                f: ['{A}*(x - ({H}))**2 + ({K})'],
                pontos: [['{H}', '{K}']],
                alt: 'Parábola'
              },
              vars: { A: [1, -1], H: { de: -3, ate: 3 }, K: { de: -6, ate: 6 } }
            },
            {
              t: 'numero',
              p: 'Qual é o valor máximo de $$f(x) = −x^2 + {= 2 * V }x {= sn(C) }$$?',
              r: '{= V * V + C }',
              exp: 'x do vértice: {V}. Depois calcule f({V}).',
              vars: { V: { de: 1, ate: 6 }, C: { de: -5, ate: 9 } },
              se: 'C !== 0'
            },
            {
              t: 'numero',
              p: 'Uma parábola tem raízes {R1} e {R2}. Qual é o x do vértice?',
              r: '{= (R1 + R2) / 2 }',
              exp: 'O vértice fica no meio das raízes, por simetria.',
              vars: { R1: { de: -8, ate: 2 }, R2: { de: 3, ate: 12 } }
            }
          ]
        }
      ]
    },
    {
      id: 'mmu4',
      titulo: 'Máximos e sinais',
      conceito: 'máximo',
      desc: 'Problemas de otimização e inequações.',
      licoes: [
        {
          id: 'mm2l3',
          titulo: 'Problemas de máximo e mínimo',
          exs: [
            {
              t: 'texto',
              titulo: 'O melhor resultado possível',
              blocos: [
                {
                  p: 'Quando um problema pede “o maior” ou “o menor” e a conta dá uma função quadrática, a resposta está no vértice. Três exemplos clássicos:'
                },
                {
                  passos: [
                    'Cercado retangular com P metros de cerca: a maior área é a do quadrado de lado P/4.',
                    'Lucro L(x) = −x² + bx − c: o lucro máximo é no x do vértice, b/2.',
                    'Bola lançada para cima com velocidade v (em m/s): a altura h(t) = vt − 5t² é máxima no instante t = v/10.'
                  ]
                },
                {
                  plano: {
                    x: [0, 4],
                    y: [0, 22],
                    f: [{ e: '20*x - 5*x**2', nome: 'h(t)', em: 3.5 }],
                    pontos: [[2, 20, 'altura máxima']],
                    alt: 'Parábola da altura de uma bola lançada a 20 m/s, com máximo de 20 m em t = 2 s'
                  }
                },
                { dica: 'Usamos g ≈ 10 m/s², então a altura é vt − 5t².' }
              ]
            },
            {
              t: 'numero',
              p: 'Com {P} m de cerca, qual é a maior área retangular que dá para cercar?',
              r: '{= (P / 4) ** 2 }',
              exp: 'O melhor retângulo é o quadrado de lado {P} ÷ 4 = {= P / 4 } m.',
              unidade: 'm²',
              vars: { P: { de: 20, ate: 200, passo: 4 } }
            },
            {
              t: 'numero',
              p: 'O lucro de uma empresa é $$L(x) = −x^2 + {B}x − {C}$$, em milhares de reais, vendendo x mil peças. Quantas mil peças dão o lucro máximo?',
              r: '{= B / 2 }',
              exp: '$$x_v = −b/(2a) = {B}/2$$.',
              vars: { B: { de: 10, ate: 60, passo: 2 }, C: { de: 20, ate: 100, passo: 10 } }
            },
            {
              t: 'numero',
              p: 'Com o mesmo lucro $$L(x) = −x^2 + {B}x − {C}$$, qual é o lucro máximo, em milhares de reais?',
              r: '{= B * B / 4 - C }',
              exp: 'Calcule L no x do vértice, {= B / 2 }.',
              vars: { B: { de: 10, ate: 60, passo: 2 }, C: { de: 20, ate: 100, passo: 10 } }
            },
            {
              t: 'numero',
              p: 'Uma bola é lançada para cima a {V} m/s. A altura é $$h(t) = {V}t − 5t^2$$. Qual é a altura máxima, em metros?',
              r: '{= V * V / 20 }',
              exp: 'O máximo é em t = {V}/10 = {= V / 10 } s. Calcule h nesse instante.',
              unidade: 'm',
              vars: { V: [10, 20, 30, 40] }
            },
            {
              t: 'numero',
              p: 'Um ônibus de excursão cobra R$ {P} por pessoa e dá R$ {D} de desconto para cada pessoa a mais além de {B}. A receita com x pessoas a mais é $$R(x) = ({B} + x)({P} − {D}x)$$. Quantas pessoas a mais dão a maior receita?',
              r: '{= (P / D - B) / 2 }',
              exp: 'Abra a conta: $$R(x) = −{D}x^2 + {= P - B * D }x + {= B * P }$$. O máximo é no x do vértice.',
              vars: { P: [100, 120, 150], D: [2, 4, 5], B: [10, 20] },
              se: '(P / D - B) / 2 > 0 && Number.isInteger((P / D - B) / 2)'
            },
            {
              t: 'numero',
              p: 'Com {P} m de tela, um fazendeiro vai cercar um canteiro retangular encostado num muro (o muro faz um dos lados). Qual é a maior área possível?',
              r: '{= P * P / 8 }',
              exp: 'Com largura x, o comprimento é {P} − 2x e a área é $$x({P} − 2x)$$. O máximo é em x = {= P / 4 }.',
              unidade: 'm²',
              vars: { P: { de: 20, ate: 120, passo: 4 } }
            }
          ]
        },
        {
          id: 'mm2l4',
          titulo: 'Estudo do sinal',
          exs: [
            {
              t: 'texto',
              titulo: 'Onde a parábola fica acima do eixo',
              blocos: [
                {
                  p: 'Para resolver $$f(x) > 0$$ ou $$f(x) < 0$$, olhe o gráfico. Com a > 0 e duas raízes, a parábola fica negativa entre as raízes e positiva fora delas.'
                },
                {
                  plano: {
                    x: [-1, 6],
                    y: [-3, 6],
                    f: ['x**2 - 5*x + 6'],
                    pontos: [[2, 0, '2'], [3, 0, '3']],
                    alt: 'Parábola que fica abaixo do eixo x entre 2 e 3'
                  }
                },
                {
                  p: 'Em $$x^2 − 5x + 6 < 0$$, as raízes são 2 e 3, e a solução é 2 < x < 3. Já $$x^2 − 5x + 6 > 0$$ vale para x < 2 ou x > 3.'
                },
                { dica: 'Com a < 0, é o contrário: positiva entre as raízes e negativa fora.' }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual é a solução de $$x^2 {= tm(-(R1 + R2), "x") } {= sn(R1 * R2) } < 0$$?',
              ops: ['{R1} < x < {R2}', 'x < {R1} ou x > {R2}', 'x > {R2}'],
              c: 0,
              exp: 'a > 0: a parábola fica abaixo do eixo x entre as raízes, {R1} e {R2}.',
              vars: { R1: { de: -4, ate: 3 }, R2: { de: 4, ate: 9 } },
              se: 'R1 + R2 !== 0 && R1 !== 0'
            },
            {
              t: 'numero',
              p: 'Quantos números inteiros satisfazem $$x^2 {= tm(-(R1 + R2), "x") } {= sn(R1 * R2) } < 0$$?',
              r: '{= R2 - R1 - 1 }',
              exp: 'São os inteiros entre {R1} e {R2}, sem contar as raízes.',
              vars: { R1: { de: -4, ate: 3 }, R2: { de: 4, ate: 9 } },
              se: 'R1 + R2 !== 0 && R1 !== 0'
            },
            {
              t: 'numero',
              p: 'Quantos números inteiros satisfazem $$x^2 {= tm(-(R1 + R2), "x") } {= sn(R1 * R2) } ≤ 0$$?',
              r: '{= R2 - R1 + 1 }',
              exp: 'Agora as raízes entram, porque é ≤.',
              vars: { R1: { de: -4, ate: 3 }, R2: { de: 4, ate: 9 } },
              se: 'R1 + R2 !== 0 && R1 !== 0'
            },
            {
              t: 'escolha',
              p: 'Para quais x a função do gráfico é positiva?',
              ops: ['x < {R1} ou x > {R2}', '{R1} < x < {R2}', 'Para todo x'],
              c: 0,
              exp: 'Positiva é acima do eixo x: fora das raízes.',
              plano: {
                x: [-6, 8],
                y: [-10, 10],
                f: ['(x - ({R1}))*(x - ({R2}))'],
                alt: 'Parábola com a boca para cima'
              },
              vars: { R1: { de: -4, ate: 0 }, R2: { de: 2, ate: 6 } }
            },
            {
              t: 'escolha',
              p: '$$x^2 + 1 > 0$$ vale para...',
              ops: ['Todo número real', 'Nenhum número real', 'Só os positivos'],
              c: 0,
              exp: 'x² é sempre zero ou positivo; somando 1, fica sempre positivo. A parábola não toca o eixo x.'
            },
            {
              t: 'numero',
              p: 'Quantos números inteiros satisfazem $$−x^2 + {= R1 + R2 }x {= sn(-(R1 * R2)) } > 0$$?',
              r: '{= R2 - R1 - 1 }',
              exp: 'Com a < 0, a parábola é positiva entre as raízes, {R1} e {R2}.',
              vars: { R1: { de: 1, ate: 4 }, R2: { de: 6, ate: 10 } }
            }
          ]
        }
      ]
    }
  ]
});
