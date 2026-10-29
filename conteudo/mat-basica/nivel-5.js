/* Trilha Livre · Matemática básica · Nível 5: Razão e proporção
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'mat-basica',
  n: 5,
  titulo: 'Razão e proporção',
  desc: 'Razões do dia a dia, grandezas proporcionais e a regra de três.',
  videos: [
    {
      titulo: 'Matemática Zero 2.0',
      canal: 'Nerckie',
      obs: 'aulas de razão, proporção e regra de três',
      url: 'https://www.youtube.com/playlist?list=PL6846F4C75FFBA3EC'
    },
    {
      titulo: 'Gis com Giz Matemática',
      canal: 'Gis com Giz',
      obs: 'playlist de regra de três simples e composta',
      url: 'https://www.youtube.com/c/GiscomGiz'
    },
    {
      titulo: 'Portal da Matemática',
      canal: 'OBMEP e IMPA',
      obs: '7º ano: razões e proporções',
      url: 'https://portaldaobmep.impa.br/index.php/site/index?a=1'
    }
  ],
  unidades: [
    {
      id: 'mbu9',
      titulo: 'Razão e proporção',
      conceito: 'a : b',
      desc: 'Escalas, velocidade, densidade e grandezas proporcionais.',
      licoes: [
        {
          id: 'mb5l1',
          titulo: 'Razões',
          exs: [
            {
              t: 'texto',
              titulo: 'Comparar dividindo',
              blocos: [
                {
                  p: 'Uma razão compara duas grandezas por divisão. Num time com 12 vitórias em 20 jogos, a razão é $$12/20 = 3/5$$: 3 vitórias a cada 5 jogos.'
                },
                { p: 'Algumas razões têm nome próprio:' },
                {
                  tabela: {
                    cab: ['Razão', 'Conta', 'Exemplo'],
                    codigo: [],
                    linhas: [
                      ['Velocidade média', 'distância ÷ tempo', '300 km em 4 h → 75 km/h'],
                      [
                        'Escala',
                        'medida no desenho ÷ medida real',
                        '1 cm no mapa para 1 km: 1 : 100.000'
                      ],
                      [
                        'Densidade demográfica',
                        'habitantes ÷ área',
                        '50.000 habitantes em 200 km² → 250 hab/km²'
                      ],
                      ['Consumo', 'distância ÷ combustível', '420 km com 35 L → 12 km/L']
                    ]
                  }
                },
                {
                  dica: 'Na escala, as duas medidas precisam estar na mesma unidade. 1 km são 100.000 cm.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Um carro percorreu {D} km em {H} horas. Qual foi a velocidade média?',
              r: '{= D / H }',
              exp: 'Distância dividida pelo tempo.',
              unidade: 'km/h',
              vars: { H: [2, 3, 4, 5], D: { de: 120, ate: 480, passo: 10 } },
              se: '(D / H) % 1 === 0'
            },
            {
              t: 'numero',
              p: 'Num mapa com escala 1 : {= br(E) }, duas cidades estão a {C} cm de distância. Qual é a distância real, em km?',
              r: '{= C * E / 100000 }',
              exp: 'Cada centímetro do mapa vale {= br(E) } cm reais. Divida por 100.000 para ter quilômetros.',
              unidade: 'km',
              vars: { E: [100000, 200000, 500000, 1000000], C: { de: 2, ate: 15 } }
            },
            {
              t: 'numero',
              p: 'Um município tem {= br(P) } habitantes numa área de {A} km². Qual é a densidade demográfica?',
              r: '{= P / A }',
              exp: 'Habitantes divididos pela área.',
              unidade: 'hab/km²',
              casas: 1,
              vars: {
                P: { de: 20000, ate: 200000, passo: 5000 },
                A: { de: 50, ate: 800, passo: 10 }
              }
            },
            {
              t: 'numero',
              p: 'Um carro andou {D} km e gastou {L} litros. Quantos quilômetros fez por litro?',
              r: '{= D / L }',
              exp: 'Distância dividida pelo combustível.',
              unidade: 'km/L',
              casas: 1,
              vars: { D: { de: 200, ate: 600, passo: 10 }, L: { de: 18, ate: 50 } }
            },
            {
              t: 'escolha',
              p: 'Numa sala há 12 meninas e 18 meninos. Qual é a razão entre meninas e meninos?',
              ops: ['$$2/3$$', '$$3/2$$', '$$12/30$$'],
              c: 0,
              exp: '$$12/18$$ simplificada é $$2/3$$. $$12/30$$ seria meninas em relação ao total.'
            }
          ]
        },
        {
          id: 'mb5l2',
          titulo: 'Grandezas proporcionais',
          exs: [
            {
              t: 'texto',
              titulo: 'Quando uma cresce, a outra...',
              blocos: [
                {
                  p: 'Duas grandezas são diretamente proporcionais quando, dobrando uma, a outra também dobra: quantidade de pão e preço; horas de trabalho e salário por hora. A razão entre elas fica constante.'
                },
                {
                  p: 'São inversamente proporcionais quando, dobrando uma, a outra cai pela metade: número de pedreiros e tempo da obra; velocidade e tempo de viagem. O produto entre elas fica constante.'
                },
                {
                  p: 'Uma proporção é uma igualdade entre duas razões, como $$2/3 = 8/12$$. Nela, o produto dos extremos é igual ao produto dos meios: 2 × 12 = 3 × 8. É daí que vem a regra de três.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Velocidade e tempo de uma viagem, com a mesma distância, são grandezas...',
              ops: ['Inversamente proporcionais', 'Diretamente proporcionais', 'Sem relação'],
              c: 0,
              exp: 'Indo duas vezes mais rápido, a viagem leva metade do tempo.'
            },
            {
              t: 'escolha',
              p: 'A quantidade de quilos de arroz e o preço pago são grandezas...',
              ops: ['Diretamente proporcionais', 'Inversamente proporcionais', 'Sem relação'],
              c: 0,
              exp: 'O dobro de arroz custa o dobro.'
            },
            {
              t: 'escolha',
              p: 'A idade de uma pessoa e a altura dela são grandezas proporcionais?',
              ops: ['Não: não crescem na mesma razão', 'Sim, diretamente', 'Sim, inversamente'],
              c: 0,
              exp: 'Uma pessoa de 40 anos não tem o dobro da altura de uma de 20.'
            },
            {
              t: 'numero',
              p: 'Na proporção $${A}/{B} = x/{= B * K }$$, quanto vale x?',
              r: '{= A * K }',
              exp: 'Produto dos extremos igual ao dos meios: {B} × x = {A} × {= B * K }.',
              vars: { A: { de: 2, ate: 9 }, B: { de: 2, ate: 9 }, K: { de: 2, ate: 8 } },
              se: 'A !== B'
            },
            {
              t: 'numero',
              p: 'Na proporção $${A}/x = {= A * K }/{= B * K }$$, quanto vale x?',
              r: '{B}',
              exp: '{A} × {= B * K } = x × {= A * K }.',
              vars: { A: { de: 2, ate: 9 }, B: { de: 2, ate: 12 }, K: { de: 2, ate: 8 } },
              se: 'A !== B'
            },
            {
              t: 'numero',
              p: 'Dividir R$ {= br((A + B) * K) } entre duas pessoas na razão {A} para {B}. Quanto recebe a primeira?',
              r: '{= A * K }',
              exp: 'São {= A + B } partes ao todo; cada parte vale {= br(K) }. A primeira fica com {A} partes.',
              prefixo: 'R$',
              vars: {
                A: { de: 1, ate: 5 },
                B: { de: 2, ate: 7 },
                K: { de: 50, ate: 500, passo: 50 }
              },
              se: 'A !== B'
            }
          ]
        }
      ]
    },
    {
      id: 'mbu10',
      titulo: 'Regra de três',
      conceito: 'regra de três',
      desc: 'Simples, inversa e composta.',
      licoes: [
        {
          id: 'mb5l3',
          titulo: 'Regra de três simples',
          exs: [
            {
              t: 'texto',
              titulo: 'Três valores conhecidos, um desconhecido',
              blocos: [
                {
                  p: 'Com grandezas diretamente proporcionais, a regra de três acha um valor que falta. Exemplo: 3 kg de feijão custam R$ 24. Quanto custam 5 kg?'
                },
                {
                  tabela: { cab: ['Quilos', 'Preço'], codigo: [], linhas: [['3', '24'], ['5', 'x']] }
                },
                {
                  p: 'Como é proporção direta, multiplique em cruz: 3 · x = 5 · 24, então x = 120 ÷ 3 = 40. Ou pense na unidade: 1 kg custa 24 ÷ 3 = 8, e 5 kg custam 40.'
                },
                {
                  dica: 'Antes de fazer a conta, pergunte: se uma grandeza aumenta, a outra aumenta também? Se sim, é direta. Se diminui, é inversa (próxima lição).'
                }
              ]
            },
            {
              t: 'numero',
              p: '{A} kg de feijão custam R$ {= br(A * P) }. Quanto custam {B} kg?',
              r: '{= B * P }',
              exp: 'Um quilo custa {= br(P) }.',
              prefixo: 'R$',
              casas: 2,
              vars: {
                A: { de: 2, ate: 5 },
                B: { de: 3, ate: 10 },
                P: { de: 6, ate: 12, passo: 0.5 }
              },
              se: 'A !== B'
            },
            {
              t: 'numero',
              p: 'Uma receita usa {A} ovos para {B} pessoas. Quantos ovos são precisos para {= B * K } pessoas?',
              r: '{= A * K }',
              exp: 'São {K} vezes mais pessoas.',
              vars: { A: { de: 2, ate: 5 }, B: [4, 6, 8], K: [2, 3, 5] }
            },
            {
              t: 'numero',
              p: 'Uma impressora imprime {A} páginas em {B} minutos. Quantas páginas imprime em {C} minutos?',
              r: '{= A / B * C }',
              exp: '{A} ÷ {B} = {= br(A / B) } páginas por minuto.',
              vars: { A: [30, 40, 60, 90], B: [2, 3, 5], C: [7, 12, 15, 20] },
              se: '(A / B * C) % 1 === 0'
            },
            {
              t: 'numero',
              p: 'Um motorista dirige {D} km em {H} horas. Na mesma velocidade, quantos quilômetros dirige em {M} horas?',
              r: '{= D / H * M }',
              exp: 'Velocidade: {D} ÷ {H} km por hora.',
              unidade: 'km',
              vars: { D: [120, 180, 240, 300], H: [2, 3, 4], M: [5, 6, 7] },
              se: '(D / H) % 1 === 0'
            },
            {
              t: 'numero',
              p: 'Uma foto de {L} cm de largura e {A} cm de altura vai ser ampliada para {= L * K } cm de largura, sem distorcer. Qual será a altura?',
              r: '{= A * K }',
              exp: 'A largura foi multiplicada por {K}.',
              unidade: 'cm',
              vars: { L: [10, 15], A: [10, 15, 20], K: [2, 3, 4] },
              se: 'L !== A'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem os passos de uma regra de três',
              lines: [
                'Montar a tabela com as duas grandezas',
                'Ver se a proporção é direta ou inversa',
                'Multiplicar em cruz (direta) ou em linha (inversa)',
                'Isolar o x e conferir se o resultado faz sentido'
              ],
              exp: 'Conferir no fim pega muitos erros: o resultado tem de crescer ou diminuir como esperado.'
            }
          ]
        },
        {
          id: 'mb5l4',
          titulo: 'Grandezas inversas',
          exs: [
            {
              t: 'texto',
              titulo: 'Mais de um, menos do outro',
              blocos: [
                {
                  p: 'Com grandezas inversamente proporcionais, o produto fica constante. Exemplo: 4 pedreiros fazem um muro em 6 dias. Em quantos dias 3 pedreiros fazem o mesmo muro?'
                },
                {
                  p: 'O trabalho total é 4 × 6 = 24 “pedreiro-dias”. Com 3 pedreiros: 24 ÷ 3 = 8 dias. Faz sentido: com menos gente, demora mais.'
                },
                {
                  dica: 'Na tabela da regra de três, inverta uma das colunas antes de multiplicar em cruz, ou multiplique em linha: 4 × 6 = 3 × x.'
                }
              ]
            },
            {
              t: 'numero',
              p: '{A} pedreiros fazem um muro em {D} dias. Em quantos dias {B} pedreiros fazem o mesmo muro?',
              r: '{= A * D / B }',
              exp: 'O trabalho é {A} × {D} = {= A * D } pedreiro-dias.',
              unidade: 'dias',
              vars: { A: [2, 3, 4, 6], D: [6, 8, 12], B: [2, 3, 4, 6, 8] },
              se: 'A !== B && (A * D / B) % 1 === 0'
            },
            {
              t: 'numero',
              p: 'A {V} km/h, uma viagem leva {H} horas. Quanto tempo leva a {W} km/h?',
              r: '{= V * H / W }',
              exp: 'A distância é {V} × {H} = {= V * H } km.',
              unidade: 'h',
              vars: { V: [60, 80, 90], H: [2, 3, 4, 6], W: [40, 60, 80, 120] },
              se: 'V !== W && (V * H / W) % 1 === 0'
            },
            {
              t: 'numero',
              p: 'Uma caixa d’água esvazia em {H} horas com {A} torneiras abertas. Em quantas horas esvazia com {B} torneiras?',
              r: '{= A * H / B }',
              exp: '{A} × {H} = {B} × x.',
              unidade: 'h',
              vars: { A: [2, 3, 4], H: [6, 8, 12], B: [3, 4, 6, 8] },
              se: 'A !== B && (A * H / B) % 1 === 0'
            },
            {
              t: 'escolha',
              p: 'Com o dobro de trabalhadores, no mesmo ritmo, uma obra leva...',
              ops: ['Metade do tempo', 'O dobro do tempo', 'O mesmo tempo'],
              c: 0,
              exp: 'Trabalhadores e tempo são inversamente proporcionais.'
            },
            {
              t: 'numero',
              p: 'Uma ração alimenta {A} cachorros por {D} dias. Se chegarem mais {B} cachorros, quantos dias a ração dura?',
              r: '{= A * D / (A + B) }',
              exp: 'Agora são {= A + B } cachorros: {A} × {D} = {= A + B } × x.',
              unidade: 'dias',
              vars: { A: [4, 6, 8], D: [15, 20, 30], B: [2, 4] },
              se: '(A * D / (A + B)) % 1 === 0'
            }
          ]
        },
        {
          id: 'mb5l5',
          titulo: 'Regra de três composta',
          exs: [
            {
              t: 'texto',
              titulo: 'Três ou mais grandezas',
              blocos: [
                {
                  p: 'Quando o valor que falta depende de mais de uma grandeza, compare cada uma com a grandeza do x, separadamente, e veja se é direta ou inversa.'
                },
                {
                  p: 'Exemplo: 6 máquinas fazem 300 peças em 5 horas. Quantas peças 8 máquinas fazem em 3 horas? Mais máquinas, mais peças (direta). Mais horas, mais peças (direta). Então x = 300 × (8/6) × (3/5) = 240.'
                },
                {
                  dica: 'Comece pelo valor conhecido da grandeza do x e multiplique por uma fração para cada outra grandeza: a fração “cresce” (maior/menor) se a mudança aumenta o resultado, e “encolhe” (menor/maior) se diminui.'
                }
              ]
            },
            {
              t: 'numero',
              p: '{A} máquinas fazem {P} peças em {H} horas. Quantas peças {B} máquinas fazem em {G} horas?',
              r: '{= P * B / A * G / H }',
              exp: 'As duas são diretas: {P} × ({B}/{A}) × ({G}/{H}).',
              vars: {
                A: [2, 4, 5, 6],
                P: [120, 200, 300, 600],
                H: [2, 3, 4, 5],
                B: [3, 4, 8, 10],
                G: [2, 6, 8]
              },
              se: 'A !== B && H !== G && (P * B * G) % (A * H) === 0'
            },
            {
              t: 'numero',
              p: '{A} pessoas fazem uma tarefa em {D} dias trabalhando {H} horas por dia. Em quantos dias {B} pessoas fazem a mesma tarefa trabalhando {G} horas por dia?',
              r: '{= D * A / B * H / G }',
              exp: 'As duas são inversas: mais pessoas ou mais horas por dia, menos dias. {D} × ({A}/{B}) × ({H}/{G}).',
              unidade: 'dias',
              vars: {
                A: [4, 6, 8],
                D: [10, 12, 15, 20],
                H: [6, 8],
                B: [2, 3, 4, 5, 10],
                G: [4, 5, 6, 8, 10]
              },
              se: 'A !== B && H !== G && (D * A * H) % (B * G) === 0'
            },
            {
              t: 'escolha',
              p: 'Numa regra de três composta, cada grandeza é comparada com...',
              ops: [
                'A grandeza do x, uma de cada vez',
                'Todas as outras ao mesmo tempo',
                'A grandeza com o maior número'
              ],
              c: 0,
              exp: 'O resto fica parado na comparação: só muda uma grandeza de cada vez.'
            },
            {
              t: 'numero',
              p: 'Para alimentar {A} pessoas por {D} dias, são precisos {K} kg de arroz. Quantos quilos alimentam {B} pessoas por {G} dias?',
              r: '{= K * B / A * G / D }',
              exp: 'As duas são diretas.',
              unidade: 'kg',
              vars: {
                A: [4, 5, 10],
                D: [10, 15, 30],
                K: [20, 30, 60],
                B: [2, 6, 8, 20],
                G: [5, 12, 20]
              },
              se: 'A !== B && D !== G && (K * B * G) % (A * D) === 0'
            }
          ]
        }
      ]
    }
  ]
});
