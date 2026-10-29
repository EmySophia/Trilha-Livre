/* Trilha Livre · Matemática do ensino médio · Nível 6: Geometria
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'mat-medio',
  n: 6,
  titulo: 'Geometria',
  desc: 'Semelhança, áreas de figuras compostas e volumes de prismas, cilindros, pirâmides, cones e esferas.',
  videos: [
    {
      titulo: 'Professor Ferretto',
      canal: 'Matemática com Ferretto',
      obs: 'playlists de geometria plana e espacial',
      url: 'https://www.youtube.com/user/professorferretto'
    },
    {
      titulo: 'Equaciona Matemática',
      canal: 'Equaciona',
      obs: 'aulas de semelhança e de volumes',
      url: 'https://www.youtube.com/channel/UCZLyNRqqp2MeFuwuZdbGDJw'
    },
    {
      titulo: 'Portal da Matemática',
      canal: 'OBMEP e IMPA',
      obs: 'geometria do ensino médio',
      url: 'https://portaldaobmep.impa.br/index.php/site/index?a=1'
    }
  ],
  unidades: [
    {
      id: 'mmu11',
      titulo: 'Geometria plana',
      conceito: 'semelhança',
      desc: 'Semelhança de triângulos e áreas.',
      licoes: [
        {
          id: 'mm6l1',
          titulo: 'Semelhança e Tales',
          exs: [
            {
              t: 'texto',
              titulo: 'Mesma forma, outro tamanho',
              blocos: [
                {
                  p: 'Duas figuras são semelhantes quando uma é a ampliação da outra: os ângulos são iguais e os lados são proporcionais. A razão entre lados correspondentes é a razão de semelhança, k.'
                },
                {
                  p: 'Um uso clássico é medir alturas pela sombra. No mesmo instante, os raios de sol fazem o mesmo ângulo: o poste e a sua sombra formam um triângulo semelhante ao da pessoa e a sombra dela.'
                },
                {
                  plano: {
                    eixos: false,
                    x: [0, 12],
                    y: [0, 6],
                    poligonos: [
                      { pts: [[0, 0], [8, 0], [8, 6]], lados: ['sombra 8 m', 'poste', ''] },
                      { pts: [[9.5, 0], [12, 0], [12, 1.9]], lados: ['2 m', '1,5 m', ''] }
                    ],
                    alt: 'Um poste e uma pessoa com as sombras formando triângulos semelhantes'
                  }
                },
                {
                  p: 'Na figura: $$poste/8 = 1,5/2$$, então o poste mede 6 m. Atenção: se os lados são multiplicados por k, as áreas são multiplicadas por $$k^2$$, e os volumes por $$k^3$$.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Uma pessoa de {= br(P) } m faz uma sombra de {= br(S) } m. No mesmo instante, um prédio faz uma sombra de {= br(S * K) } m. Qual é a altura do prédio?',
              r: '{= P * K }',
              exp: 'A sombra do prédio é {K} vezes a da pessoa; a altura também.',
              unidade: 'm',
              vars: { P: [1.5, 1.6, 1.8, 2], S: [1, 1.2, 2, 2.5], K: { de: 5, ate: 20 } }
            },
            {
              t: 'numero',
              p: 'Dois triângulos são semelhantes, com razão de semelhança {K}. Se o menor tem área {A} cm², qual é a área do maior?',
              r: '{= A * K * K }',
              exp: 'As áreas são multiplicadas por $$k^2 = {= K * K }$$.',
              unidade: 'cm²',
              vars: { K: { de: 2, ate: 5 }, A: { de: 3, ate: 20 } }
            },
            {
              t: 'numero',
              p: 'Uma maquete está na escala 1 : {K}. Um prédio tem {H} cm de altura na maquete. Qual é a altura real, em metros?',
              r: '{= H * K / 100 }',
              exp: 'Multiplique por {K} e passe de centímetros para metros.',
              unidade: 'm',
              vars: { K: [50, 100, 200, 250], H: { de: 10, ate: 60 } }
            },
            {
              t: 'escolha',
              p: 'Dobrando todas as medidas de uma caixa, o volume dela...',
              ops: ['Fica 8 vezes maior', 'Dobra', 'Fica 4 vezes maior'],
              c: 0,
              exp: 'Volume é multiplicado por $$k^3 = 2^3 = 8$$.'
            },
            {
              t: 'numero',
              p: 'Três retas paralelas cortam duas transversais. Numa delas, os segmentos medem {A} cm e {B} cm; na outra, o primeiro mede {= A * K } cm. Quanto mede o segundo?',
              r: '{= B * K }',
              exp: 'Teorema de Tales: os segmentos são proporcionais, $${A}/{B} = {= A * K }/x$$.',
              unidade: 'cm',
              vars: { A: { de: 2, ate: 8 }, B: { de: 3, ate: 9 }, K: [2, 3] },
              se: 'A !== B'
            },
            {
              t: 'numero',
              p: 'Uma foto de {L} cm × {H} cm é ampliada para {= L * K } cm de largura. Quantas vezes a área aumenta?',
              r: '{= K * K }',
              exp: 'Lados multiplicados por {K}; a área, por {K}².',
              vars: { L: [10, 15], H: [10, 15, 20], K: [2, 3, 4] }
            }
          ]
        },
        {
          id: 'mm6l2',
          titulo: 'Áreas',
          exs: [
            {
              t: 'texto',
              titulo: 'Somar e tirar pedaços',
              blocos: [
                {
                  p: 'Figuras complicadas são juntas de figuras simples: some as áreas das partes, ou calcule uma área maior e tire o que sobra.'
                },
                {
                  tabela: {
                    cab: ['Figura', 'Área'],
                    codigo: [],
                    linhas: [
                      ['Triângulo equilátero de lado l', '$$(l^2 sqrt(3))/4$$'],
                      [
                        'Hexágono regular de lado l',
                        '6 triângulos equiláteros: $$(3 l^2 sqrt(3))/2$$'
                      ],
                      ['Setor circular de ângulo θ', '$$(θ/360) × πr^2$$'],
                      ['Coroa circular', '$$π(R^2 − r^2)$$']
                    ]
                  }
                },
                {
                  plano: {
                    eixos: false,
                    x: [-1, 1],
                    y: [-0.9, 0.9],
                    poligonos: [
                      {
                        pts: [
                          [1, 0],
                          [0.5, 0.866],
                          [-0.5, 0.866],
                          [-1, 0],
                          [-0.5, -0.866],
                          [0.5, -0.866]
                        ]
                      }
                    ],
                    segmentos: [
                      { de: [0, 0], ate: [1, 0] },
                      { de: [0, 0], ate: [0.5, 0.866] },
                      { de: [0, 0], ate: [-0.5, 0.866] },
                      { de: [0, 0], ate: [-1, 0] },
                      { de: [0, 0], ate: [-0.5, -0.866] },
                      { de: [0, 0], ate: [0.5, -0.866] }
                    ],
                    alt: 'Hexágono regular dividido em 6 triângulos equiláteros'
                  }
                },
                {
                  dica: 'O Enem costuma pedir π = 3 e $$sqrt(3) ≈ 1,7$$. Use o valor que o enunciado der.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Um terreno retangular de {B} m por {H} m tem uma piscina circular de {R} m de raio. Qual é a área do terreno sem a piscina? Use π = 3',
              r: '{= B * H - 3 * R * R }',
              exp: 'Retângulo menos o círculo: {B} × {H} − 3 × {R}².',
              unidade: 'm²',
              vars: { B: { de: 15, ate: 40 }, H: { de: 10, ate: 30 }, R: { de: 2, ate: 5 } }
            },
            {
              t: 'numero',
              p: 'Qual é a área de um hexágono regular de lado {L} cm? Use $$sqrt(3) ≈ 1,7$$',
              r: '{= 3 * L * L * 1.7 / 2 }',
              exp: 'São 6 triângulos equiláteros: $$6 × ({L}^2 × 1,7)/4$$.',
              unidade: 'cm²',
              casas: 1,
              vars: { L: { de: 2, ate: 12 } }
            },
            {
              t: 'numero',
              p: 'Uma pizza de raio {R} cm foi cortada em {K} fatias iguais. Qual é a área de cada fatia? Use π = 3',
              r: '{= 3 * R * R / K }',
              exp: 'A pizza inteira tem 3 × {R}² cm². Divida por {K}.',
              unidade: 'cm²',
              casas: 2,
              vars: { R: [15, 18, 20], K: [6, 8, 10, 12] }
            },
            {
              t: 'numero',
              p: 'Uma praça circular de raio {R} m tem uma calçada em volta de {L} m de largura. Qual é a área da calçada? Use π = 3',
              r: '{= 3 * ((R + L) ** 2 - R * R) }',
              exp: 'Coroa circular: $$3 × (({R} + {L})^2 − {R}^2)$$.',
              unidade: 'm²',
              vars: { R: { de: 5, ate: 30 }, L: [1, 2, 3] }
            },
            {
              t: 'escolha',
              p: 'Um quadrado e um círculo têm o mesmo perímetro. Qual tem área maior?',
              ops: ['O círculo', 'O quadrado', 'São iguais'],
              c: 0,
              exp: 'Entre as figuras com o mesmo perímetro, o círculo é a que cerca a maior área.'
            },
            {
              t: 'numero',
              p: 'Qual é a área do triângulo do desenho?',
              r: '{= B * H / 2 }',
              exp: 'Base vezes altura, dividido por 2: a altura é a perpendicular à base.',
              unidade: 'cm²',
              plano: {
                eixos: false,
                x: [0, 10],
                y: [0, 6],
                poligonos: [{ pts: [[0, 0], [10, 0], [3, 6]], lados: ['{B} cm', '', ''] }],
                segmentos: [{ de: [3, 0], ate: [3, 6], tracejado: true, rotulo: '{H} cm' }],
                alt: 'Triângulo com a base e a altura marcadas'
              },
              vars: { B: { de: 6, ate: 20 }, H: { de: 3, ate: 12 } }
            }
          ]
        }
      ]
    },
    {
      id: 'mmu12',
      titulo: 'Geometria espacial',
      conceito: 'volume',
      desc: 'Prismas, cilindros, pirâmides, cones e esferas.',
      licoes: [
        {
          id: 'mm6l3',
          titulo: 'Prismas e cilindros',
          exs: [
            {
              t: 'texto',
              titulo: 'Base vezes altura',
              blocos: [
                {
                  p: 'Prismas e cilindros têm a mesma seção de cima a baixo, então o volume é a área da base vezes a altura. A área total é a soma das áreas de todas as faces (a planificação).'
                },
                {
                  tabela: {
                    cab: ['Sólido', 'Volume', 'Área da superfície'],
                    codigo: [],
                    linhas: [
                      ['Paralelepípedo a × b × c', '$$a × b × c$$', '$$2(ab + ac + bc)$$'],
                      ['Cubo de aresta a', '$$a^3$$', '$$6a^2$$'],
                      ['Cilindro de raio r e altura h', '$$πr^2 h$$', '$$2πr^2 + 2πrh$$']
                    ]
                  }
                },
                { dica: 'Volume em litros: 1 dm³ = 1 L e 1 m³ = 1.000 L.' }
              ]
            },
            {
              t: 'numero',
              p: 'Quantos litros cabem numa caixa d’água cilíndrica de raio {= br(R) } m e altura {= br(H) } m? Use π = 3',
              r: '{= 3 * R * R * H * 1000 }',
              exp: '$$V = 3 × {= br(R) }^2 × {= br(H) }$$ m³; cada m³ tem 1.000 L.',
              unidade: 'L',
              vars: { R: [0.5, 1, 1.5], H: [1, 1.2, 2] }
            },
            {
              t: 'numero',
              p: 'Qual é a área total de uma caixa de {A} cm × {B} cm × {C} cm (para saber quanto papelão gasta)?',
              r: '{= 2 * (A * B + A * C + B * C) }',
              exp: '$$2({A} × {B} + {A} × {C} + {B} × {C})$$.',
              unidade: 'cm²',
              vars: { A: { de: 10, ate: 40 }, B: { de: 5, ate: 30 }, C: { de: 5, ate: 30 } }
            },
            {
              t: 'numero',
              p: 'Um cubo tem área total de {= 6 * A * A } cm². Qual é o volume dele?',
              r: '{= A ** 3 }',
              exp: '6 faces de área $$a^2$$: a aresta é {A} cm.',
              unidade: 'cm³',
              vars: { A: { de: 2, ate: 10 } }
            },
            {
              t: 'numero',
              p: 'Uma piscina de {C} m × {L} m está cheia até {= br(H) } m de altura. Quantos litros de água tem?',
              r: '{= C * L * H * 1000 }',
              exp: 'Volume em m³ vezes 1.000.',
              unidade: 'L',
              vars: { C: [6, 8, 10], L: [3, 4, 5], H: [1.2, 1.5, 1.8] }
            },
            {
              t: 'escolha',
              p: 'Uma lata cilíndrica passa a ter o dobro do raio, com a mesma altura. O volume...',
              ops: ['Fica 4 vezes maior', 'Dobra', 'Fica 8 vezes maior'],
              c: 0,
              exp: 'O raio entra ao quadrado: $$2^2 = 4$$.'
            },
            {
              t: 'numero',
              p: 'Um aquário cúbico tem {A} cm de aresta. Quantos litros cabem nele?',
              r: '{= A ** 3 / 1000 }',
              exp: 'Volume em cm³ dividido por 1.000.',
              unidade: 'L',
              vars: { A: [20, 30, 40, 50, 60] }
            }
          ]
        },
        {
          id: 'mm6l4',
          titulo: 'Pirâmides, cones e esferas',
          exs: [
            {
              t: 'texto',
              titulo: 'Um terço do prisma',
              blocos: [
                {
                  p: 'Uma pirâmide cabe exatamente 3 vezes num prisma de mesma base e mesma altura; o mesmo vale para o cone e o cilindro. Por isso o volume deles é $$(A_b × h)/3$$.'
                },
                {
                  tabela: {
                    cab: ['Sólido', 'Volume'],
                    codigo: [],
                    linhas: [
                      ['Pirâmide', '$$(A_b × h)/3$$'],
                      ['Cone de raio r e altura h', '$$(πr^2 h)/3$$'],
                      ['Esfera de raio r', '$$(4πr^3)/3$$']
                    ]
                  }
                },
                {
                  p: 'Exemplo: uma casquinha de sorvete (cone) de raio 3 cm e altura 10 cm tem $$(3 × 9 × 10)/3 = 90$$ cm³, usando π = 3.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Qual é o volume de uma pirâmide de base quadrada com lado {L} m e altura {H} m?',
              r: '{= L * L * H / 3 }',
              exp: '$$({L}^2 × {H})/3$$.',
              unidade: 'm³',
              casas: 2,
              vars: { L: { de: 3, ate: 12 }, H: { de: 3, ate: 15 } }
            },
            {
              t: 'numero',
              p: 'Qual é o volume de um cone de raio {R} cm e altura {H} cm? Use π = 3',
              r: '{= R * R * H }',
              exp: 'Com π = 3: $$(3 × {R}^2 × {H})/3 = {R}^2 × {H}$$.',
              unidade: 'cm³',
              vars: { R: { de: 2, ate: 10 }, H: { de: 5, ate: 20 } }
            },
            {
              t: 'numero',
              p: 'Qual é o volume de uma bola de raio {R} cm? Use π = 3',
              r: '{= 4 * R ** 3 }',
              exp: 'Com π = 3: $$(4 × 3 × {R}^3)/3 = 4 × {R}^3$$.',
              unidade: 'cm³',
              vars: { R: { de: 2, ate: 12 } }
            },
            {
              t: 'numero',
              p: 'Quantas casquinhas cônicas de raio {R} cm e altura {H} cm dá para encher com um pote cilíndrico de mesmo raio e altura {= H * K } cm?',
              r: '{= 3 * K }',
              exp: 'O cilindro de altura {H} cabe 3 cones; com altura {K} vezes maior, cabem 3 × {K}.',
              vars: { R: [3, 4, 5], H: [8, 10, 12], K: [2, 3, 4] }
            },
            {
              t: 'escolha',
              p: 'Um cone e um cilindro têm a mesma base e a mesma altura. O volume do cone é...',
              ops: ['Um terço do volume do cilindro', 'A metade', 'Igual'],
              c: 0,
              exp: 'São precisos 3 cones cheios para encher o cilindro.'
            },
            {
              t: 'numero',
              p: 'Uma esfera de raio {R} cm é derretida e moldada num cilindro de raio {R} cm. Qual é a altura do cilindro?',
              r: '{= 4 * R / 3 }',
              exp: 'Os volumes são iguais: $$(4πR^3)/3 = πR^2 h$$, então $$h = (4R)/3$$.',
              unidade: 'cm',
              casas: 2,
              vars: { R: [3, 6, 9, 12] }
            }
          ]
        }
      ]
    }
  ]
});
