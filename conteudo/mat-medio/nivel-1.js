/* Trilha Livre · Matemática do ensino médio · Nível 1: Funções
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'mat-medio',
  n: 1,
  titulo: 'Funções',
  desc: 'Conjuntos numéricos, o que é uma função, como ler um gráfico e a função afim.',
  videos: [
    {
      titulo: 'Professor Ferretto',
      canal: 'Matemática com Ferretto',
      obs: 'playlist de funções: do conceito à função afim',
      url: 'https://www.youtube.com/user/professorferretto'
    },
    {
      titulo: 'Matemática Rio',
      canal: 'Prof. Rafael Procopio',
      obs: 'aulas curtas de função do 1º grau, com exercícios do Enem',
      url: 'https://www.youtube.com/user/matematicario'
    },
    {
      tipo: 'texto',
      titulo: 'Khan Academy em português',
      canal: 'Khan Academy',
      obs: 'exercícios de funções e gráficos',
      url: 'https://pt.khanacademy.org/'
    }
  ],
  unidades: [
    {
      id: 'mmu1',
      titulo: 'O que é uma função',
      conceito: 'f(x)',
      desc: 'Conjuntos, funções e gráficos.',
      licoes: [
        {
          id: 'mm1l1',
          titulo: 'Conjuntos numéricos e intervalos',
          exs: [
            {
              t: 'texto',
              titulo: 'Os tipos de número',
              blocos: [
                {
                  tabela: {
                    cab: ['Conjunto', 'O que tem', 'Exemplos'],
                    codigo: [],
                    linhas: [
                      ['Naturais (ℕ)', 'os números de contar', '0, 1, 2, 3...'],
                      ['Inteiros (ℤ)', 'naturais e negativos', '−2, 0, 5'],
                      ['Racionais (ℚ)', 'tudo que vira fração', '$$3/4$$, −0,5, 0,333...'],
                      [
                        'Irracionais',
                        'decimais infinitos que não se repetem',
                        '$$sqrt(2)$$, π'
                      ],
                      ['Reais (ℝ)', 'racionais e irracionais juntos', 'todos acima']
                    ]
                  }
                },
                {
                  p: 'Um intervalo é um pedaço da reta dos reais. Colchete virado para dentro inclui a ponta; virado para fora, exclui. [2, 5] vai de 2 a 5, com os dois. ]2, 5] não tem o 2, mas tem o 5. Também se escreve 2 < x ≤ 5.'
                },
                {
                  dica: 'Dízimas periódicas, como 0,333..., são racionais: 0,333... é $$1/3$$.'
                }
              ]
            },
            {
              t: 'escolha',
              p: '$$sqrt(2)$$ é um número...',
              ops: ['Irracional', 'Racional', 'Inteiro'],
              c: 0,
              exp: 'Ele tem infinitas casas decimais que não se repetem: 1,41421356...'
            },
            {
              t: 'escolha',
              p: 'Qual destes números é racional?',
              ops: ['0,333...', 'π', '$$sqrt(3)$$'],
              c: 0,
              exp: 'Dízima periódica vira fração: 0,333... = $$1/3$$.'
            },
            {
              t: 'numero',
              p: 'Quantos números inteiros há no intervalo [{A}, {B}]?',
              r: '{= B - A + 1 }',
              exp: 'Os dois extremos entram: de {A} a {B}.',
              vars: { A: { de: -8, ate: 3 }, B: { de: 5, ate: 15 } }
            },
            {
              t: 'numero',
              p: 'Quantos números inteiros há no intervalo ]{A}, {B}[?',
              r: '{= B - A - 1 }',
              exp: 'Agora as duas pontas ficam de fora.',
              vars: { A: { de: -8, ate: 3 }, B: { de: 5, ate: 15 } }
            },
            {
              t: 'escolha',
              p: 'O número {A} pertence ao intervalo ]{A}, {B}]?',
              ops: ['Não: o colchete virado para fora exclui o {A}', 'Sim', 'Só se {A} for inteiro'],
              c: 0,
              exp: 'Em ]{A}, {B}], o {A} fica de fora e o {B} entra.',
              vars: { A: { de: -5, ate: 3 }, B: { de: 5, ate: 12 } }
            },
            {
              t: 'numero',
              p: 'Quantos números inteiros há no intervalo [{A}, {B}[?',
              r: '{= B - A }',
              exp: 'O {A} entra e o {B} fica de fora.',
              vars: { A: { de: -8, ate: 3 }, B: { de: 5, ate: 15 } }
            }
          ]
        },
        {
          id: 'mm1l2',
          titulo: 'O que é uma função',
          exs: [
            {
              t: 'texto',
              titulo: 'Uma regra que liga dois valores',
              blocos: [
                {
                  p: 'Uma função é uma regra que, para cada valor de entrada x, dá um único valor de saída y. Escrevemos y = f(x). Exemplo: o preço de uma corrida de táxi depende da distância; a conta de luz depende do consumo.'
                },
                {
                  p: 'Em $$f(x) = 2x + 3$$, para calcular f(4), troque o x por 4: $$f(4) = 2 × 4 + 3 = 11$$. O conjunto dos x permitidos é o domínio; o dos y que saem, a imagem.'
                },
                {
                  plano: {
                    x: [-1, 5],
                    y: [-1, 13],
                    f: [{ e: '2*x + 3', nome: 'f' }],
                    pontos: [[4, 11, '(4, 11)']],
                    alt: 'Gráfico da reta f(x) = 2x + 3, com o ponto (4, 11) marcado'
                  }
                },
                {
                  p: 'Cada par (x, f(x)) é um ponto do gráfico. O ponto (4, 11) quer dizer: quando x é 4, y é 11.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Numa função, cada valor de x pode ter...',
              ops: ['Um único y', 'Vários y', 'Nenhum y, às vezes'],
              c: 0,
              exp: 'É a regra que define uma função: entrou um x, sai um y só.'
            },
            {
              t: 'numero',
              p: 'Se $$f(x) = {A}x {= sn(B) }$$, quanto vale f({X})?',
              r: '{= A * X + B }',
              exp: 'Troque o x por {X}: {A} × ({X}) {= sn(B) }.',
              vars: { A: { de: 2, ate: 9 }, B: { de: -10, ate: 10 }, X: { de: -5, ate: 8 } }
            },
            {
              t: 'numero',
              p: 'Se $$f(x) = x^2 − {A}$$, quanto vale f({X})?',
              r: '{= X * X - A }',
              exp: '{X} ao quadrado, menos {A}. Cuidado com o sinal: $$({X})^2$$ é positivo.',
              vars: { A: { de: 1, ate: 20 }, X: { de: -6, ate: 6 } }
            },
            {
              t: 'numero',
              p: 'Se $$f(x) = {A}x {= sn(B) }$$ e f(x) = {= A * X + B }, quanto vale x?',
              r: '{X}',
              exp: 'Resolva a equação $${A}x {= sn(B) } = {= A * X + B }$$.',
              vars: { A: { de: 2, ate: 9 }, B: { de: -10, ate: 10 }, X: { de: -5, ate: 12 } }
            },
            {
              t: 'numero',
              p: 'Pelo gráfico de f, quanto vale f({X})?',
              r: '{= X + D }',
              exp: 'Ache o x = {X} no eixo de baixo, suba até a reta e leia o y.',
              plano: {
                x: [-1, 7],
                y: [-1, 12],
                f: ['x + {D}'],
                pontos: [['{X}', '{= X + D }']],
                alt: 'Gráfico de uma reta crescente'
              },
              vars: { X: { de: 1, ate: 6 }, D: { de: 1, ate: 5 } }
            },
            {
              t: 'escolha',
              p: 'O gráfico mostra uma função de x?',
              ops: [
                '{= A ? "Não: há x com dois valores de y" : "Sim: cada x tem um só y" }',
                '{= A ? "Sim: cada x tem um só y" : "Não: há x com dois valores de y" }'
              ],
              c: 0,
              exp: 'Passe uma linha vertical imaginária: se ela cortar o desenho em mais de um ponto, não é função.',
              plano: {
                x: [-4, 4],
                y: [-3, 3],
                f: [
                  { e: '{= A ? "sqrt(4 - x**2)" : "x**2 - 2" }', cor: 0 },
                  { e: '{= A ? "-sqrt(4 - x**2)" : "x**2 - 2" }', cor: 0 }
                ],
                alt: 'Um desenho no plano'
              },
              vars: { A: [0, 1] }
            }
          ]
        },
        {
          id: 'mm1l3',
          titulo: 'Lendo gráficos',
          exs: [
            {
              t: 'texto',
              titulo: 'O que um gráfico conta',
              blocos: [
                {
                  p: 'Num gráfico de função, procure três coisas: onde ele corta o eixo y (o valor de f(0)), onde ele corta o eixo x (as raízes, onde f(x) = 0) e se ele sobe ou desce.'
                },
                {
                  plano: {
                    x: [-2, 6],
                    y: [-4, 8],
                    f: ['2*x - 4'],
                    pontos: [[2, 0, 'raiz'], [0, -4, 'f(0)']],
                    alt: 'Reta que corta o eixo x em 2 e o eixo y em −4'
                  }
                },
                {
                  p: 'Esta reta corta o eixo y em −4 e o eixo x em 2. Ela é crescente: andando para a direita, o y aumenta.'
                },
                {
                  dica: 'No Enem, muita questão de gráfico se resolve só olhando: onde corta, onde sobe, onde desce, onde é maior.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Em que valor de x o gráfico corta o eixo x?',
              r: '{R}',
              exp: 'É a raiz: o ponto em que y vale zero.',
              plano: { x: [-6, 6], y: [-8, 8], f: ['{A}*(x - {R})'], alt: 'Gráfico de uma reta' },
              vars: { A: [1, 2, -1, -2], R: { de: -4, ate: 4 } },
              se: 'R !== 0'
            },
            {
              t: 'numero',
              p: 'Em que valor de y o gráfico corta o eixo y?',
              r: '{B}',
              exp: 'É o valor de f(0).',
              plano: { x: [-5, 5], y: [-8, 8], f: ['{A}*x + {B}'], alt: 'Gráfico de uma reta' },
              vars: { A: [1, 2, -1, -2, 3], B: { de: -6, ate: 6 } },
              se: 'B !== 0'
            },
            {
              t: 'escolha',
              p: 'A função do gráfico é...',
              ops: [
                '{= A > 0 ? "Crescente" : "Decrescente" }',
                '{= A > 0 ? "Decrescente" : "Crescente" }',
                'Constante'
              ],
              c: 0,
              exp: 'Olhe da esquerda para a direita: a reta {= A > 0 ? "sobe" : "desce" }.',
              plano: { x: [-5, 5], y: [-8, 8], f: ['{A}*x + {B}'], alt: 'Gráfico de uma reta' },
              vars: { A: [1, 2, -1, -2], B: { de: -3, ate: 3 } }
            },
            {
              t: 'escolha',
              p: 'Qual destes pontos está no gráfico de $$f(x) = 2x − 1$$?',
              ops: ['(3, 5)', '(5, 3)', '(2, 4)'],
              c: 0,
              exp: 'f(3) = 2 × 3 − 1 = 5. O ponto é (x, f(x)).'
            },
            {
              t: 'numero',
              p: 'Pelo gráfico, para quantos valores inteiros de x entre −5 e 5 a função é positiva (acima do eixo x)?',
              r: '{= 5 - R }',
              exp: 'A reta fica acima do eixo x à direita de x = {R}.',
              plano: {
                x: [-5, 5],
                y: [-8, 8],
                f: ['x - ({R})'],
                alt: 'Gráfico de uma reta crescente'
              },
              vars: { R: { de: -3, ate: 3 } }
            },
            {
              t: 'numero',
              p: 'Pelo gráfico, qual é o valor máximo da função?',
              r: '{K}',
              exp: 'É o ponto mais alto da curva.',
              plano: {
                x: [-6, 6],
                y: [-8, 8],
                f: ['-(x - ({H}))**2 + ({K})'],
                pontos: [['{H}', '{K}']],
                alt: 'Parábola com a boca para baixo'
              },
              vars: { H: { de: -3, ate: 3 }, K: { de: 1, ate: 6 } }
            }
          ]
        }
      ]
    },
    {
      id: 'mmu2',
      titulo: 'Função afim',
      conceito: 'ax + b',
      desc: 'Retas, taxas e problemas do dia a dia.',
      licoes: [
        {
          id: 'mm1l4',
          titulo: 'Função afim',
          exs: [
            {
              t: 'texto',
              titulo: 'f(x) = ax + b',
              blocos: [
                {
                  p: 'A função afim (ou do 1º grau) tem a forma $$f(x) = ax + b$$, e o gráfico é uma reta. O b é o valor inicial, onde a reta corta o eixo y. O a é a taxa de variação: quanto o y muda quando o x aumenta 1.'
                },
                {
                  p: 'Se a > 0, a reta sobe (crescente); se a < 0, desce (decrescente). A raiz, onde a reta corta o eixo x, é $$x = −b/a$$.'
                },
                {
                  plano: {
                    x: [0, 10],
                    y: [0, 40],
                    f: [{ e: '5 + 3*x', nome: 'táxi' }],
                    alt: 'Reta que começa em 5 e sobe 3 a cada unidade'
                  }
                },
                {
                  p: 'Exemplo: um táxi cobra R$ 5,00 de bandeirada mais R$ 3,00 por quilômetro. O preço é $$p(x) = 3x + 5$$: a taxa é 3 e o valor inicial é 5.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Em $$f(x) = −2x + 5$$, a função é...',
              ops: ['Decrescente', 'Crescente', 'Constante'],
              c: 0,
              exp: 'O a vale −2: a cada passo para a direita, o y cai 2.'
            },
            {
              t: 'numero',
              p: 'Qual é a raiz de $$f(x) = {A}x {= sn(-A * R) }$$?',
              r: '{R}',
              exp: '$${A}x {= sn(-A * R) } = 0$$, então $$x = {= A * R }/{A}$$.',
              vars: { A: { de: 2, ate: 9 }, R: { de: -6, ate: 9 } },
              se: 'R !== 0'
            },
            {
              t: 'numero',
              p: 'Um táxi cobra R$ {= br(B, 2) } de bandeirada mais R$ {= br(K, 2) } por km. Quanto custa uma corrida de {D} km?',
              r: '{= B + K * D }',
              exp: '$$p(x) = {= br(K, 2) }x + {= br(B, 2) }$$, com x = {D}.',
              prefixo: 'R$',
              casas: 2,
              vars: { B: [4.5, 5, 5.5], K: [2.5, 2.8, 3.2], D: { de: 3, ate: 30 } }
            },
            {
              t: 'numero',
              p: 'Uma reta passa por (0, {B}) e ({X}, {= A * X + B }). Qual é a taxa de variação a?',
              r: '{A}',
              exp: 'a = (variação de y) ÷ (variação de x) = ({= A * X + B } − {= pr(B) }) ÷ {X}.',
              vars: { A: { de: -5, ate: 6 }, B: { de: -5, ate: 9 }, X: { de: 2, ate: 6 } },
              se: 'A !== 0'
            },
            {
              t: 'numero',
              p: 'O plano A custa R$ {F} mais R$ {KA} por GB; o plano B custa R$ {= F + D * (KA - KB) } mais R$ {KB} por GB. Com quantos GB os dois custam o mesmo?',
              r: '{D}',
              exp: '$${F} + {KA}x = {= F + D * (KA - KB) } + {KB}x$$.',
              unidade: 'GB',
              vars: { F: [20, 30, 40], KA: [8, 10, 12], KB: [3, 4, 5], D: { de: 2, ate: 10 } }
            },
            {
              t: 'escolha',
              p: 'Uma conta de água é $$f(x) = 4x + 12$$, com x em metros cúbicos. O que o 12 representa?',
              ops: [
                'Um valor fixo cobrado mesmo sem consumo',
                'O preço de cada metro cúbico',
                'O consumo médio'
              ],
              c: 0,
              exp: 'É o valor de f(0): o que se paga com consumo zero.'
            }
          ]
        },
        {
          id: 'mm1l5',
          titulo: 'Inequações do 1º grau',
          exs: [
            {
              t: 'texto',
              titulo: 'Desigualdades',
              blocos: [
                {
                  p: 'Uma inequação é como uma equação, mas com <, >, ≤ ou ≥. Resolve-se do mesmo jeito, com um cuidado: ao multiplicar ou dividir os dois lados por um número negativo, o sinal se inverte.'
                },
                {
                  passos: [
                    '$$−2x + 6 > 0$$',
                    '$$−2x > −6$$',
                    'Dividindo por −2, o > vira <: $$x < 3$$'
                  ]
                },
                {
                  p: 'A resposta é um intervalo: todos os x menores que 3. No gráfico de $$f(x) = −2x + 6$$, é onde a reta fica acima do eixo x.'
                },
                {
                  plano: {
                    x: [-2, 6],
                    y: [-6, 10],
                    f: ['-2*x + 6'],
                    pontos: [[3, 0, 'x = 3']],
                    alt: 'Reta decrescente que corta o eixo x em 3'
                  }
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Ao dividir os dois lados de uma inequação por um número negativo...',
              ops: ['O sinal da desigualdade se inverte', 'Nada muda', 'Ela vira uma equação'],
              c: 0,
              exp: '−2 < 4, mas dividindo por −1: 2 > −4.'
            },
            {
              t: 'numero',
              p: 'Qual é o menor número inteiro que satisfaz $${A}x − {B} > {C}$$?',
              r: '{= Math.floor((B + C) / A) + 1 }',
              exp: '$$x > {= B + C }/{A}$$. Ache o primeiro inteiro depois disso.',
              vars: { A: { de: 2, ate: 6 }, B: { de: 1, ate: 20 }, C: { de: 1, ate: 20 } }
            },
            {
              t: 'numero',
              p: 'Qual é o maior número inteiro que satisfaz $$−{A}x + {= A * R } > 0$$?',
              r: '{= R - 1 }',
              exp: '$$−{A}x > −{= A * R }$$; dividindo por −{A}, o sinal vira: $$x < {R}$$.',
              vars: { A: { de: 2, ate: 6 }, R: { de: 1, ate: 9 } }
            },
            {
              t: 'numero',
              p: 'Um vendedor ganha R$ {= br(F) } fixos mais R$ {K} por venda. Quantas vendas, no mínimo, ele precisa fazer para ganhar mais de R$ {= br(M) }?',
              r: '{= Math.floor((M - F) / K) + 1 }',
              exp: '$${F} + {K}x > {M}$$, então $$x > {= M - F }/{K}$$.',
              vars: { F: [1200, 1500, 1800], K: [40, 50, 60], M: [2500, 3000, 3500] }
            },
            {
              t: 'escolha',
              p: 'Qual é a solução de $$3x − 6 ≤ 0$$?',
              ops: ['x ≤ 2', 'x ≥ 2', 'x ≤ −2'],
              c: 0,
              exp: '$$3x ≤ 6$$, então $$x ≤ 2$$.'
            },
            {
              t: 'numero',
              p: 'Um estacionamento cobra R$ {F} de entrada e R$ {K} por hora. Com R$ {M}, quantas horas inteiras, no máximo, dá para ficar?',
              r: '{= Math.floor((M - F) / K) }',
              exp: '$${F} + {K}x ≤ {M}$$.',
              unidade: 'h',
              vars: { F: [5, 8, 10], K: [3, 4, 6], M: [30, 40, 50] }
            }
          ]
        }
      ]
    }
  ]
});
