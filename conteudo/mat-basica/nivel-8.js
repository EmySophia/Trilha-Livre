/* Trilha Livre · Matemática básica · Nível 8: Medidas e geometria
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'mat-basica',
  n: 8,
  titulo: 'Medidas e geometria',
  desc: 'Unidades de medida, perímetro, área, círculo, volume e o teorema de Pitágoras.',
  videos: [
    {
      titulo: 'Matemática Zero 2.0',
      canal: 'Nerckie',
      obs: 'aulas de unidades de medida, áreas e volumes',
      url: 'https://www.youtube.com/playlist?list=PL6846F4C75FFBA3EC'
    },
    {
      titulo: 'Gis com Giz Matemática',
      canal: 'Gis com Giz',
      obs: 'playlists de geometria plana e espacial',
      url: 'https://www.youtube.com/c/GiscomGiz'
    },
    {
      titulo: 'Portal da Matemática',
      canal: 'OBMEP e IMPA',
      obs: 'geometria do 6º ao 9º ano',
      url: 'https://portaldaobmep.impa.br/index.php/site/index?a=1'
    }
  ],
  unidades: [
    {
      id: 'mbu15',
      titulo: 'Unidades de medida',
      conceito: 'km · m · cm',
      desc: 'Comprimento, massa, capacidade e tempo.',
      licoes: [
        {
          id: 'mb8l1',
          titulo: 'Converter unidades',
          exs: [
            {
              t: 'texto',
              titulo: 'Andar de 10 em 10',
              blocos: [
                {
                  p: 'No sistema métrico, as unidades andam de 10 em 10. Para o comprimento: km, hm, dam, m, dm, cm, mm. Cada passo para a direita multiplica por 10; para a esquerda, divide por 10.'
                },
                {
                  tabela: {
                    cab: ['De', 'Para', 'Faça'],
                    codigo: [],
                    linhas: [
                      ['km', 'm', '× 1.000'],
                      ['m', 'cm', '× 100'],
                      ['cm', 'mm', '× 10'],
                      ['kg', 'g', '× 1.000'],
                      ['L', 'mL', '× 1.000'],
                      ['t (tonelada)', 'kg', '× 1.000']
                    ]
                  }
                },
                {
                  p: 'Áreas andam de 100 em 100 (1 m² = 10.000 cm², porque é 100 cm × 100 cm) e volumes de 1.000 em 1.000 (1 m³ = 1.000.000 cm³). E um litro é o volume de um cubo de 10 cm de aresta: $$1 L = 1 dm^3 = 1.000 cm^3$$.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Quantos metros são {= br(K) } km?',
              r: '{= K * 1000 }',
              exp: 'Multiplique por 1.000.',
              unidade: 'm',
              vars: { K: { de: 0.5, ate: 25, passo: 0.5 } }
            },
            {
              t: 'numero',
              p: 'Quantos centímetros são {= br(M) } m?',
              r: '{= M * 100 }',
              exp: 'Multiplique por 100.',
              unidade: 'cm',
              vars: { M: { de: 0.25, ate: 9.75, passo: 0.25 } }
            },
            {
              t: 'numero',
              p: 'Quantos quilos são {G} g?',
              r: '{= G / 1000 }',
              exp: 'Divida por 1.000.',
              unidade: 'kg',
              vars: { G: { de: 250, ate: 9750, passo: 250 } }
            },
            {
              t: 'numero',
              p: 'Quantos mililitros são {= br(L) } L?',
              r: '{= L * 1000 }',
              exp: 'Multiplique por 1.000.',
              unidade: 'mL',
              vars: { L: { de: 0.25, ate: 5, passo: 0.25 } }
            },
            {
              t: 'numero',
              p: 'Quantos centímetros quadrados são {M} m²?',
              r: '{= M * 10000 }',
              exp: 'Área anda de 100 em 100: de m² para cm² são dois passos, × 10.000.',
              unidade: 'cm²',
              vars: { M: { de: 2, ate: 12 } }
            },
            {
              t: 'numero',
              p: 'Uma caixa d’água tem {M} m³. Quantos litros cabem nela?',
              r: '{= M * 1000 }',
              exp: '1 m³ = 1.000 L.',
              unidade: 'L',
              vars: { M: [1, 2, 5, 10, 15] }
            }
          ]
        },
        {
          id: 'mb8l2',
          titulo: 'Tempo e velocidade',
          exs: [
            {
              t: 'texto',
              titulo: 'O tempo não é decimal',
              blocos: [
                {
                  p: 'O tempo anda de 60 em 60: 1 hora tem 60 minutos, e 1 minuto tem 60 segundos. Por isso 1,5 hora é 1 hora e 30 minutos, e não 1 hora e 50 minutos.'
                },
                {
                  p: 'Para passar minutos para horas, divida por 60: 45 min = 0,75 h. Para velocidades, km/h e m/s se convertem pelo fator 3,6: 72 km/h ÷ 3,6 = 20 m/s.'
                },
                { dica: 'O 3,6 vem de 1 km/h = 1.000 m em 3.600 s.' }
              ]
            },
            {
              t: 'numero',
              p: 'Quantos minutos tem {= br(H) } hora(s)?',
              r: '{= H * 60 }',
              exp: 'Multiplique por 60.',
              unidade: 'min',
              vars: { H: [0.25, 0.5, 0.75, 1.5, 2.25, 3.5] }
            },
            {
              t: 'numero',
              p: 'Um filme dura {M} minutos. Quantas horas inteiras ele tem?',
              r: '{= Math.floor(M / 60) }',
              exp: '{M} ÷ 60 = {= Math.floor(M / 60) } e sobram {= M % 60 } minutos.',
              unidade: 'h',
              vars: { M: { de: 95, ate: 200 } },
              se: 'M % 60 !== 0'
            },
            {
              t: 'numero',
              p: 'Converta {V} km/h para m/s',
              r: '{= V / 3.6 }',
              exp: 'Divida por 3,6.',
              unidade: 'm/s',
              vars: { V: [18, 36, 54, 72, 90, 108] }
            },
            {
              t: 'numero',
              p: 'Um ônibus sai às {H}h{= M < 10 ? "0" + M : M } e a viagem dura {D} minutos. A que horas chega? Responda só os minutos do horário de chegada',
              r: '{= (M + D) % 60 }',
              exp: 'Some os minutos e tire 60 a cada hora completa.',
              unidade: 'min',
              vars: {
                H: { de: 6, ate: 20 },
                M: [0, 5, 15, 20, 35, 40, 50],
                D: { de: 25, ate: 170, passo: 5 }
              }
            },
            {
              t: 'numero',
              p: 'Uma pessoa caminha a {V} km/h. Quanto tempo leva para andar {D} km? Responda em minutos',
              r: '{= D / V * 60 }',
              exp: 'Tempo = distância ÷ velocidade, em horas. Depois × 60.',
              unidade: 'min',
              vars: { V: [3, 4, 5, 6], D: [1, 2, 3, 6, 9] },
              se: '(D / V * 60) % 1 === 0'
            }
          ]
        }
      ]
    },
    {
      id: 'mbu16',
      titulo: 'Geometria',
      conceito: 'área',
      desc: 'Perímetro, área, círculo, volume e Pitágoras.',
      licoes: [
        {
          id: 'mb8l3',
          titulo: 'Perímetro e área',
          exs: [
            {
              t: 'texto',
              titulo: 'Contorno e superfície',
              blocos: [
                {
                  p: 'O perímetro é o comprimento do contorno: a soma dos lados. A área é o tamanho da superfície, medida em quadradinhos: m², cm².'
                },
                {
                  tabela: {
                    cab: ['Figura', 'Área'],
                    codigo: [],
                    linhas: [
                      ['Quadrado de lado l', '$$l^2$$'],
                      ['Retângulo de base b e altura h', '$$b × h$$'],
                      ['Triângulo de base b e altura h', '$$(b × h)/2$$'],
                      ['Paralelogramo', '$$b × h$$'],
                      ['Trapézio de bases B e b, altura h', '$$((B + b) × h)/2$$']
                    ]
                  }
                },
                {
                  dica: 'A altura é sempre perpendicular (faz 90°) à base. No triângulo, não é o lado inclinado.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Qual é o perímetro de um retângulo de {B} m por {H} m?',
              r: '{= 2 * (B + H) }',
              exp: 'Some os quatro lados: 2 × ({B} + {H}).',
              unidade: 'm',
              vars: { B: { de: 3, ate: 30 }, H: { de: 2, ate: 20 } }
            },
            {
              t: 'numero',
              p: 'Qual é a área de um retângulo de {B} m por {H} m?',
              r: '{= B * H }',
              exp: 'Base vezes altura.',
              unidade: 'm²',
              vars: { B: { de: 3, ate: 30 }, H: { de: 2, ate: 20 } }
            },
            {
              t: 'numero',
              p: 'Qual é a área de um triângulo de base {B} cm e altura {H} cm?',
              r: '{= B * H / 2 }',
              exp: 'Base vezes altura, dividido por 2.',
              unidade: 'cm²',
              vars: { B: { de: 3, ate: 20 }, H: { de: 2, ate: 16 } }
            },
            {
              t: 'numero',
              p: 'Um piso de {B} m por {H} m vai ser coberto com cerâmica que custa R$ {P} o metro quadrado. Quanto vai custar a cerâmica?',
              r: '{= B * H * P }',
              exp: 'Área ({= B * H } m²) vezes o preço do m².',
              prefixo: 'R$',
              vars: { B: { de: 3, ate: 8 }, H: { de: 3, ate: 6 }, P: [35, 42, 50, 65] }
            },
            {
              t: 'numero',
              p: 'Qual é a área de um trapézio de bases {A} cm e {B} cm e altura {H} cm?',
              r: '{= (A + B) * H / 2 }',
              exp: 'Some as bases, multiplique pela altura e divida por 2.',
              unidade: 'cm²',
              vars: { A: { de: 8, ate: 20 }, B: { de: 3, ate: 7 }, H: { de: 2, ate: 12 } }
            },
            {
              t: 'escolha',
              p: 'Dobrando os dois lados de um retângulo, a área...',
              ops: ['Fica 4 vezes maior', 'Dobra', 'Fica 8 vezes maior'],
              c: 0,
              exp: '(2b) × (2h) = 4 × b × h.'
            }
          ]
        },
        {
          id: 'mb8l4',
          titulo: 'O círculo e o π',
          exs: [
            {
              t: 'texto',
              titulo: 'Um número que nunca acaba',
              blocos: [
                {
                  p: 'Em qualquer círculo, o contorno dividido pelo diâmetro dá sempre o mesmo número: π (pi), que vale cerca de 3,14. Ele tem infinitas casas decimais e não se repete.'
                },
                {
                  tabela: {
                    cab: ['Medida', 'Fórmula'],
                    codigo: [],
                    linhas: [
                      ['Diâmetro', '$$d = 2r$$'],
                      ['Comprimento da circunferência', '$$C = 2πr$$'],
                      ['Área do círculo', '$$A = πr^2$$']
                    ]
                  }
                },
                {
                  p: 'Exemplo: uma roda de raio 30 cm percorre, em uma volta, $$2 × 3,14 × 30 = 188,4$$ cm.'
                },
                {
                  dica: 'Nos exercícios, use π = 3,14, a não ser que o enunciado diga outro valor.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Qual é o comprimento de uma circunferência de raio {R} cm? Use π = 3,14',
              r: '{= 2 * 3.14 * R }',
              exp: '$$C = 2 × 3,14 × {R}$$.',
              unidade: 'cm',
              casas: 2,
              vars: { R: { de: 2, ate: 30 } }
            },
            {
              t: 'numero',
              p: 'Qual é a área de um círculo de raio {R} m? Use π = 3,14',
              r: '{= 3.14 * R * R }',
              exp: '$$A = 3,14 × {R}^2$$.',
              unidade: 'm²',
              casas: 2,
              vars: { R: { de: 2, ate: 20 } }
            },
            {
              t: 'numero',
              p: 'Uma pizza tem {D} cm de diâmetro. Qual é a área dela? Use π = 3,14',
              r: '{= 3.14 * (D / 2) ** 2 }',
              exp: 'O raio é a metade do diâmetro: {= br(D / 2) } cm.',
              unidade: 'cm²',
              casas: 2,
              vars: { D: [25, 30, 35, 40] }
            },
            {
              t: 'numero',
              p: 'A roda de uma bicicleta tem raio de {R} cm. Quantos metros a bicicleta anda em {V} voltas da roda? Use π = 3,14',
              r: '{= 2 * 3.14 * R * V / 100 }',
              exp: 'Uma volta anda $$2 × 3,14 × {R}$$ cm. Multiplique pelas voltas e passe para metros.',
              unidade: 'm',
              casas: 2,
              vars: { R: [30, 33, 35], V: [10, 50, 100, 250] }
            },
            {
              t: 'escolha',
              p: 'Uma pizza de 40 cm de diâmetro tem quanto de área a mais que uma de 20 cm?',
              ops: ['4 vezes mais', '2 vezes mais', 'O mesmo'],
              c: 0,
              exp: 'A área depende do raio ao quadrado: o dobro do raio dá $$2^2 = 4$$ vezes a área.'
            }
          ]
        },
        {
          id: 'mb8l5',
          titulo: 'Volume',
          exs: [
            {
              t: 'texto',
              titulo: 'Quanto cabe dentro',
              blocos: [
                {
                  p: 'Volume é o espaço que um sólido ocupa, medido em cubinhos: m³, cm³. Para prismas e cilindros (sólidos “retos”, com a mesma seção de cima a baixo), o volume é a área da base vezes a altura.'
                },
                {
                  tabela: {
                    cab: ['Sólido', 'Volume'],
                    codigo: [],
                    linhas: [
                      ['Cubo de aresta a', '$$a^3$$'],
                      ['Bloco retangular (paralelepípedo)', '$$c × l × h$$'],
                      ['Cilindro de raio r e altura h', '$$πr^2 × h$$']
                    ]
                  }
                },
                { p: 'Lembre: 1 L = 1.000 cm³ e 1 m³ = 1.000 L.' }
              ]
            },
            {
              t: 'numero',
              p: 'Qual é o volume de uma caixa de {C} cm × {L} cm × {H} cm?',
              r: '{= C * L * H }',
              exp: 'Multiplique as três medidas.',
              unidade: 'cm³',
              vars: { C: { de: 10, ate: 40 }, L: { de: 5, ate: 30 }, H: { de: 5, ate: 30 } }
            },
            {
              t: 'numero',
              p: 'Um aquário mede {C} cm × {L} cm × {H} cm. Quantos litros de água cabem nele?',
              r: '{= C * L * H / 1000 }',
              exp: 'Volume em cm³ dividido por 1.000.',
              unidade: 'L',
              vars: { C: [40, 50, 60, 80, 100], L: [20, 25, 30, 40], H: [25, 30, 40, 50] }
            },
            {
              t: 'numero',
              p: 'Uma piscina tem {C} m de comprimento, {L} m de largura e {= br(H) } m de profundidade. Quantos litros de água ela leva?',
              r: '{= C * L * H * 1000 }',
              exp: 'Volume em m³, vezes 1.000.',
              unidade: 'L',
              vars: { C: [6, 8, 10, 12], L: [3, 4, 5], H: [1.2, 1.4, 1.5, 1.8] }
            },
            {
              t: 'numero',
              p: 'Uma lata cilíndrica tem raio de {R} cm e altura de {H} cm. Qual é o volume dela, em cm³? Use π = 3,14',
              r: '{= 3.14 * R * R * H }',
              exp: '$$3,14 × {R}^2 × {H}$$.',
              unidade: 'cm³',
              casas: 2,
              vars: { R: { de: 3, ate: 8 }, H: { de: 8, ate: 20 } }
            },
            {
              t: 'escolha',
              p: 'Dobrando a aresta de um cubo, o volume...',
              ops: ['Fica 8 vezes maior', 'Dobra', 'Fica 4 vezes maior'],
              c: 0,
              exp: '$$(2a)^3 = 8a^3$$.'
            }
          ]
        },
        {
          id: 'mb8l6',
          titulo: 'Teorema de Pitágoras',
          exs: [
            {
              t: 'texto',
              titulo: 'O triângulo retângulo',
              blocos: [
                {
                  p: 'Num triângulo com um ângulo reto (90°), o lado oposto a esse ângulo é a hipotenusa (o maior), e os outros dois são os catetos. Pitágoras: o quadrado da hipotenusa é a soma dos quadrados dos catetos, $$a^2 = b^2 + c^2$$.'
                },
                {
                  p: 'Exemplo: catetos de 3 e 4. $$a^2 = 9 + 16 = 25$$, então $$a = 5$$. O trio 3, 4 e 5 é tão famoso que pedreiros usam para conferir se um canto está no esquadro.'
                },
                { dica: 'Para achar um cateto, subtraia: $$b^2 = a^2 − c^2$$.' }
              ]
            },
            {
              t: 'numero',
              p: 'Os catetos de um triângulo retângulo medem {= 3 * K } cm e {= 4 * K } cm. Quanto mede a hipotenusa?',
              r: '{= 5 * K }',
              exp: '$$a^2 = {= 3 * K }^2 + {= 4 * K }^2 = {= 25 * K * K }$$.',
              unidade: 'cm',
              vars: { K: { de: 1, ate: 10 } }
            },
            {
              t: 'numero',
              p: 'Os catetos medem {A} e {B}. Quanto mede a hipotenusa, com 2 casas?',
              r: '{= Math.hypot(A, B) }',
              exp: '$$sqrt({A}^2 + {B}^2) = sqrt({= A * A + B * B })$$.',
              casas: 2,
              vars: { A: { de: 2, ate: 12 }, B: { de: 2, ate: 12 } }
            },
            {
              t: 'numero',
              p: 'A hipotenusa mede {= 13 * K } e um cateto mede {= 5 * K }. Quanto mede o outro cateto?',
              r: '{= 12 * K }',
              exp: '$$b^2 = {= 13 * K }^2 − {= 5 * K }^2$$.',
              vars: { K: { de: 1, ate: 6 } }
            },
            {
              t: 'numero',
              p: 'Uma escada de {= 5 * K } m está apoiada num muro, com o pé a {= 3 * K } m do muro. Em que altura ela toca o muro?',
              r: '{= 4 * K }',
              exp: 'A escada é a hipotenusa: $$h^2 = {= 5 * K }^2 − {= 3 * K }^2$$.',
              unidade: 'm',
              vars: { K: [1, 2] }
            },
            {
              t: 'numero',
              p: 'Qual é a diagonal de uma tela de {L} cm por {H} cm, com 1 casa?',
              r: '{= Math.hypot(L, H) }',
              exp: 'A diagonal é a hipotenusa do triângulo formado pela largura e pela altura.',
              unidade: 'cm',
              casas: 1,
              vars: { L: [32, 48, 64, 80], H: [18, 27, 36, 45] }
            },
            {
              t: 'escolha',
              p: 'Num triângulo retângulo, a hipotenusa é sempre...',
              ops: ['O maior lado', 'O menor lado', 'Igual a um dos catetos'],
              c: 0,
              exp: 'O maior lado fica oposto ao maior ângulo, o de 90°.'
            }
          ]
        }
      ]
    }
  ]
});
