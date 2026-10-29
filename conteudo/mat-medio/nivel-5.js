/* Trilha Livre · Matemática do ensino médio · Nível 5: Trigonometria
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'mat-medio',
  n: 5,
  titulo: 'Trigonometria',
  desc: 'Seno, cosseno e tangente, ângulos notáveis, radianos e a lei dos cossenos.',
  videos: [
    {
      titulo: 'Professor Ferretto',
      canal: 'Matemática com Ferretto',
      obs: 'playlist de trigonometria no triângulo retângulo',
      url: 'https://www.youtube.com/user/professorferretto'
    },
    {
      titulo: 'Matemática Rio',
      canal: 'Prof. Rafael Procopio',
      obs: 'aulas de seno, cosseno e tangente',
      url: 'https://www.youtube.com/user/matematicario'
    },
    {
      tipo: 'texto',
      titulo: 'Khan Academy em português',
      canal: 'Khan Academy',
      obs: 'exercícios de trigonometria',
      url: 'https://pt.khanacademy.org/'
    }
  ],
  unidades: [
    {
      id: 'mmu9',
      titulo: 'Triângulo retângulo',
      conceito: 'sen · cos · tg',
      desc: 'As razões trigonométricas e os ângulos notáveis.',
      licoes: [
        {
          id: 'mm5l1',
          titulo: 'Seno, cosseno e tangente',
          exs: [
            {
              t: 'texto',
              titulo: 'Razões entre os lados',
              blocos: [
                {
                  p: 'Num triângulo retângulo, olhando de um dos ângulos agudos (vamos chamar de α), cada cateto tem um nome: o oposto fica na frente do ângulo, e o adjacente fica ao lado dele, junto da hipotenusa.'
                },
                {
                  plano: {
                    eixos: false,
                    x: [0, 4],
                    y: [0, 3],
                    poligonos: [
                      {
                        pts: [[0, 0], [4, 0], [4, 3]],
                        lados: ['4 (adjacente)', '3 (oposto)', '5 (hipotenusa)'],
                        vertices: ['α', '', ''],
                        reto: 1
                      }
                    ],
                    alt: 'Triângulo retângulo com catetos 4 e 3 e hipotenusa 5; o ângulo α fica no vértice da esquerda'
                  }
                },
                {
                  tabela: {
                    cab: ['Razão', 'Conta', 'No triângulo acima'],
                    codigo: [],
                    linhas: [
                      ['seno de α', 'oposto ÷ hipotenusa', '$$3/5$$'],
                      ['cosseno de α', 'adjacente ÷ hipotenusa', '$$4/5$$'],
                      ['tangente de α', 'oposto ÷ adjacente', '$$3/4$$']
                    ]
                  }
                },
                {
                  dica: 'Um jeito de lembrar: SOH CAH TOA. Seno = Oposto/Hipotenusa, Cosseno = Adjacente/Hipotenusa, Tangente = Oposto/Adjacente.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual razão usa o cateto oposto e a hipotenusa?',
              ops: ['Seno', 'Cosseno', 'Tangente'],
              c: 0,
              exp: 'Seno = oposto ÷ hipotenusa.'
            },
            {
              t: 'numero',
              p: 'No triângulo, qual é o seno de α? Responda em fração irredutível',
              r: '{= fr(3, 5) }',
              exp: 'Oposto a α ({= 3 * K }) dividido pela hipotenusa ({= 5 * K }).',
              fracao: true,
              plano: {
                eixos: false,
                x: [0, 4],
                y: [0, 3],
                poligonos: [
                  {
                    pts: [[0, 0], [4, 0], [4, 3]],
                    lados: ['{= 4 * K }', '{= 3 * K }', '{= 5 * K }'],
                    vertices: ['α', '', ''],
                    reto: 1
                  }
                ],
                alt: 'Triângulo retângulo; α no vértice da esquerda'
              },
              vars: { K: { de: 1, ate: 6 } }
            },
            {
              t: 'numero',
              p: 'No triângulo, qual é a tangente de α? Responda em fração irredutível',
              r: '{= fr(5, 12) }',
              exp: 'Oposto ({= 5 * K }) dividido pelo adjacente ({= 12 * K }).',
              fracao: true,
              plano: {
                eixos: false,
                x: [0, 12],
                y: [0, 5],
                poligonos: [
                  {
                    pts: [[0, 0], [12, 0], [12, 5]],
                    lados: ['{= 12 * K }', '{= 5 * K }', '{= 13 * K }'],
                    vertices: ['α', '', ''],
                    reto: 1
                  }
                ],
                alt: 'Triângulo retângulo de lados 5, 12 e 13 vezes um fator; α no vértice da esquerda'
              },
              vars: { K: { de: 1, ate: 4 } }
            },
            {
              t: 'numero',
              p: 'No triângulo, qual é o cosseno de α? Responda em fração irredutível',
              r: '{= fr(8, 17) }',
              exp: 'Adjacente ({= 8 * K }) dividido pela hipotenusa ({= 17 * K }).',
              fracao: true,
              plano: {
                eixos: false,
                x: [0, 8],
                y: [0, 15],
                poligonos: [
                  {
                    pts: [[0, 0], [8, 0], [8, 15]],
                    lados: ['{= 8 * K }', '{= 15 * K }', '{= 17 * K }'],
                    vertices: ['α', '', ''],
                    reto: 1
                  }
                ],
                alt: 'Triângulo retângulo de lados 8, 15 e 17 vezes um fator; α no vértice da esquerda'
              },
              vars: { K: { de: 1, ate: 3 } }
            },
            {
              t: 'escolha',
              p: 'Num triângulo retângulo, o seno de um ângulo agudo é sempre...',
              ops: ['Maior que 0 e menor que 1', 'Maior que 1', 'Negativo'],
              c: 0,
              exp: 'O cateto oposto é sempre menor que a hipotenusa.'
            },
            {
              t: 'numero',
              p: 'No triângulo, quanto mede o lado x? (use o seno de α = $$3/5$$)',
              r: '{= 3 * K }',
              exp: 'sen α = oposto ÷ hipotenusa: $$x/{= 5 * K } = 3/5$$.',
              plano: {
                eixos: false,
                x: [0, 4],
                y: [0, 3],
                poligonos: [
                  {
                    pts: [[0, 0], [4, 0], [4, 3]],
                    lados: ['', 'x', '{= 5 * K }'],
                    vertices: ['α', '', ''],
                    reto: 1
                  }
                ],
                alt: 'Triângulo retângulo com hipotenusa marcada; o cateto oposto a α é x'
              },
              vars: { K: { de: 2, ate: 9 } }
            }
          ]
        },
        {
          id: 'mm5l2',
          titulo: 'Ângulos notáveis',
          exs: [
            {
              t: 'texto',
              titulo: '30°, 45° e 60°',
              blocos: [
                {
                  tabela: {
                    cab: ['', '30°', '45°', '60°'],
                    codigo: [],
                    linhas: [
                      ['seno', '$$1/2$$', '$$sqrt(2)/2$$', '$$sqrt(3)/2$$'],
                      ['cosseno', '$$sqrt(3)/2$$', '$$sqrt(2)/2$$', '$$1/2$$'],
                      ['tangente', '$$sqrt(3)/3$$', '1', '$$sqrt(3)$$']
                    ]
                  }
                },
                {
                  p: 'Com essa tabela, dá para medir alturas e distâncias sem chegar perto. Exemplo: uma rampa de 10 m de comprimento sobe com inclinação de 30°. A altura que ela vence é o cateto oposto: $$10 × sen 30° = 10 × 1/2 = 5$$ m.'
                },
                {
                  plano: {
                    eixos: false,
                    x: [0, 1.732],
                    y: [0, 1],
                    poligonos: [
                      {
                        pts: [[0, 0], [1.732, 0], [1.732, 1]],
                        lados: ['', 'altura', '10 m'],
                        vertices: ['30°', '', ''],
                        reto: 1
                      }
                    ],
                    alt: 'Rampa de 10 metros inclinada 30 graus'
                  }
                },
                {
                  dica: 'Use $$sqrt(2) ≈ 1,41$$ e $$sqrt(3) ≈ 1,73$$ quando a resposta pedir um número com vírgula.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Uma rampa de {L} m faz um ângulo de 30° com o chão. Que altura ela vence?',
              r: '{= L / 2 }',
              exp: 'Altura = comprimento × sen 30° = {L} × 1/2.',
              unidade: 'm',
              vars: { L: { de: 4, ate: 30, passo: 2 } }
            },
            {
              t: 'numero',
              p: 'Uma escada de {L} m está encostada num muro, fazendo 60° com o chão. A que distância do muro fica o pé da escada?',
              r: '{= L / 2 }',
              exp: 'A distância é o cateto adjacente ao ângulo de 60°: {L} × cos 60° = {L} × 1/2.',
              unidade: 'm',
              vars: { L: { de: 4, ate: 12, passo: 2 } }
            },
            {
              t: 'numero',
              p: 'A sombra de um poste mede {S} m quando o sol está a 45° do chão. Qual é a altura do poste?',
              r: '{S}',
              exp: 'tg 45° = 1: a altura é igual à sombra.',
              unidade: 'm',
              vars: { S: { de: 3, ate: 15 } }
            },
            {
              t: 'numero',
              p: 'Uma pessoa vê o topo de um prédio sob um ângulo de 60°, a {D} m da base. Usando $$sqrt(3) ≈ 1,73$$, qual é a altura do prédio?',
              r: '{= D * 1.73 }',
              exp: 'tg 60° = altura ÷ distância, então altura = {D} × 1,73.',
              unidade: 'm',
              casas: 2,
              vars: { D: { de: 5, ate: 40, passo: 5 } }
            },
            {
              t: 'escolha',
              p: 'Quanto é sen 30° + cos 60°?',
              ops: ['1', '$$1/2$$', '$$sqrt(3)$$'],
              c: 0,
              exp: 'Os dois valem $$1/2$$.'
            },
            {
              t: 'numero',
              p: 'Um avião decola com um ângulo de 30° e percorre {D} m em linha reta. A que altura ele está?',
              r: '{= D / 2 }',
              exp: 'A altura é o cateto oposto: {D} × sen 30°.',
              unidade: 'm',
              vars: { D: { de: 200, ate: 2000, passo: 100 } }
            }
          ]
        }
      ]
    },
    {
      id: 'mmu10',
      titulo: 'Ciclo e triângulos quaisquer',
      conceito: 'rad',
      desc: 'Radianos e a lei dos cossenos.',
      licoes: [
        {
          id: 'mm5l3',
          titulo: 'Radianos e o ciclo',
          exs: [
            {
              t: 'texto',
              titulo: 'Outra forma de medir ângulos',
              blocos: [
                {
                  p: 'Além de graus, ângulos podem ser medidos em radianos. A volta inteira tem 360°, que são 2π radianos. Então 180° = π rad, e para converter basta uma regra de três.'
                },
                {
                  tabela: {
                    cab: ['Graus', 'Radianos'],
                    codigo: [],
                    linhas: [
                      ['30°', '$$π/6$$'],
                      ['45°', '$$π/4$$'],
                      ['60°', '$$π/3$$'],
                      ['90°', '$$π/2$$'],
                      ['180°', 'π'],
                      ['360°', '2π']
                    ]
                  }
                },
                {
                  p: 'No ciclo trigonométrico (um círculo de raio 1), o cosseno de um ângulo é o x do ponto e o seno é o y. Por isso o seno é positivo nos quadrantes de cima (entre 0° e 180°) e negativo nos de baixo.'
                },
                {
                  plano: {
                    x: [-1.5, 1.5],
                    y: [-1.06, 1.06],
                    circulos: [{ centro: [0, 0], raio: 1 }],
                    pontos: [[0.866, 0.5, '30°']],
                    segmentos: [
                      { de: [0, 0], ate: [0.866, 0.5] },
                      { de: [0.866, 0], ate: [0.866, 0.5], tracejado: true, rotulo: 'sen' }
                    ],
                    alt: 'Círculo de raio 1 com o ponto de 30 graus; o seno é a altura do ponto'
                  }
                }
              ]
            },
            {
              t: 'numero',
              p: 'Quantos graus são $$π/{K}$$ radianos?',
              r: '{= 180 / K }',
              exp: 'π rad = 180°. Divida por {K}.',
              unidade: '°',
              vars: { K: [2, 3, 4, 5, 6, 9, 10, 12] }
            },
            {
              t: 'numero',
              p: '{G}° são quantos radianos? Responda como fração de π: digite só o número que multiplica π, em fração irredutível',
              r: '{= fr(G, 180) }',
              exp: '{G}/180 de π.',
              fracao: true,
              vars: { G: [30, 45, 60, 120, 135, 150, 270] }
            },
            {
              t: 'escolha',
              p: 'O seno de 150° é...',
              ops: ['Positivo', 'Negativo', 'Zero'],
              c: 0,
              exp: '150° fica no segundo quadrante, na parte de cima do círculo: o y é positivo.'
            },
            {
              t: 'escolha',
              p: 'O cosseno de {G}° é...',
              ops: [
                '{= Math.cos(G * Math.PI / 180) > 0 ? "Positivo" : "Negativo" }',
                '{= Math.cos(G * Math.PI / 180) > 0 ? "Negativo" : "Positivo" }',
                'Zero'
              ],
              c: 0,
              exp: 'O cosseno é o x do ponto no círculo: positivo à direita, negativo à esquerda.',
              vars: { G: [40, 100, 160, 200, 250, 300, 340] }
            },
            {
              t: 'numero',
              p: 'Um ponteiro de relógio gira {G}°. Quantas voltas completas ele dá?',
              r: '{= Math.floor(G / 360) }',
              exp: 'Cada volta tem 360°.',
              vars: { G: { de: 400, ate: 2000, passo: 10 } }
            },
            {
              t: 'numero',
              p: 'Um ângulo de {G}° tem o mesmo seno que qual ângulo entre 0° e 90°?',
              r: '{= 180 - G }',
              exp: 'Ângulos suplementares (que somam 180°) têm o mesmo seno.',
              unidade: '°',
              vars: { G: [100, 110, 120, 135, 150, 160] }
            }
          ]
        },
        {
          id: 'mm5l4',
          titulo: 'A lei dos cossenos',
          exs: [
            {
              t: 'texto',
              titulo: 'Para qualquer triângulo',
              blocos: [
                {
                  p: 'Pitágoras só vale no triângulo retângulo. Para qualquer triângulo, com dois lados b e c e o ângulo A entre eles, o terceiro lado a sai da lei dos cossenos: $$a^2 = b^2 + c^2 − 2bc × cos A$$.'
                },
                {
                  p: 'Com A = 90°, cos A = 0 e volta a ser Pitágoras. Com A = 60°, cos A = $$1/2$$ e fica $$a^2 = b^2 + c^2 − bc$$. Com A = 120°, cos A = $$−1/2$$ e fica $$a^2 = b^2 + c^2 + bc$$.'
                },
                {
                  plano: {
                    eixos: false,
                    x: [0, 8],
                    y: [0, 6.9],
                    poligonos: [
                      {
                        pts: [[0, 0], [8, 0], [3, 5.2]],
                        lados: ['8', 'a', '6'],
                        vertices: ['60°', '', '']
                      }
                    ],
                    alt: 'Triângulo com lados 6 e 8 formando 60 graus; o lado oposto é a'
                  }
                },
                {
                  p: 'No desenho, $$a^2 = 36 + 64 − 48 = 52$$, e a ≈ 7,2. Com lados 5 e 8 e 60°, a conta fecha certinho: $$25 + 64 − 40 = 49$$, e a = 7.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Dois lados de um triângulo medem {= [3, 5, 7, 5, 3, 7, 5][T] } e {= [8, 8, 15, 21, 5, 8, 16][T] }, e o ângulo entre eles mede {= T < 4 ? 60 : 120 }°. Quanto mede o terceiro lado?',
              r: '{= [7, 7, 13, 19, 7, 13, 19][T] }',
              exp: 'Com {= T < 4 ? 60 : 120 }°, o cosseno vale {= T < 4 ? "1/2" : "−1/2" }: $$a^2 = {= [3, 5, 7, 5, 3, 7, 5][T] }^2 + {= [8, 8, 15, 21, 5, 8, 16][T] }^2 {= T < 4 ? "-" : "+" } {= [3, 5, 7, 5, 3, 7, 5][T] } × {= [8, 8, 15, 21, 5, 8, 16][T] }$$.',
              vars: { T: { de: 0, ate: 6 } }
            },
            {
              t: 'escolha',
              p: 'Na lei dos cossenos, se o ângulo A é 90°, ela vira...',
              ops: ['O teorema de Pitágoras', 'A lei dos senos', 'A fórmula de Bhaskara'],
              c: 0,
              exp: 'cos 90° = 0 e o último termo some.'
            },
            {
              t: 'numero',
              p: 'Num triângulo, os lados que formam um ângulo de 60° medem {B} e {C}. Calcule o terceiro lado, com 1 casa',
              r: '{= Math.sqrt(B * B + C * C - B * C) }',
              exp: '$$a^2 = {B}^2 + {C}^2 − {B} × {C} = {= B * B + C * C - B * C }$$.',
              casas: 1,
              vars: { B: { de: 3, ate: 12 }, C: { de: 3, ate: 12 } }
            },
            {
              t: 'escolha',
              p: 'Num triângulo, o maior lado fica sempre...',
              ops: ['De frente para o maior ângulo', 'Do lado do menor ângulo', 'Na base'],
              c: 0,
              exp: 'Quanto maior o ângulo, mais “aberto”, e mais comprido o lado da frente.'
            },
            {
              t: 'numero',
              p: 'Dois lados de um terreno triangular medem {B} m e {C} m, formando um ângulo de 120°. Quanto mede o terceiro lado, com 1 casa?',
              r: '{= Math.sqrt(B * B + C * C + B * C) }',
              exp: 'Com 120°, $$a^2 = {B}^2 + {C}^2 + {B} × {C}$$.',
              unidade: 'm',
              casas: 1,
              vars: { B: { de: 5, ate: 30 }, C: { de: 5, ate: 30 } }
            },
            {
              t: 'escolha',
              p: 'Com os três lados de um triângulo, dá para descobrir os ângulos?',
              ops: [
                'Sim, isolando o cosseno na lei dos cossenos',
                'Não, só com régua',
                'Só se ele for retângulo'
              ],
              c: 0,
              exp: '$$cos A = (b^2 + c^2 − a^2)/(2bc)$$.'
            }
          ]
        }
      ]
    }
  ]
});
