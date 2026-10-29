/* Trilha Livre · Matemática básica · Nível 9: Dados e probabilidade
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'mat-basica',
  n: 9,
  titulo: 'Dados e probabilidade',
  desc: 'Tabelas, média, mediana e moda, contagem e probabilidade: o que mais cai no Enem.',
  videos: [
    {
      titulo: 'Matemática Zero 2.0',
      canal: 'Nerckie',
      obs: 'aulas de estatística básica',
      url: 'https://www.youtube.com/playlist?list=PL6846F4C75FFBA3EC'
    },
    {
      titulo: 'Gis com Giz Matemática',
      canal: 'Gis com Giz',
      obs: 'playlists de estatística, análise combinatória e probabilidade',
      url: 'https://www.youtube.com/c/GiscomGiz'
    },
    {
      tipo: 'texto',
      titulo: 'Khan Academy em português',
      canal: 'Khan Academy',
      obs: 'exercícios de estatística e probabilidade',
      url: 'https://pt.khanacademy.org/'
    }
  ],
  unidades: [
    {
      id: 'mbu17',
      titulo: 'Estatística',
      conceito: 'média',
      desc: 'Ler tabelas e resumir dados.',
      licoes: [
        {
          id: 'mb9l1',
          titulo: 'Ler tabelas e gráficos',
          exs: [
            {
              t: 'texto',
              titulo: 'Antes de calcular, entender',
              blocos: [
                {
                  p: 'Tabelas e gráficos aparecem em quase toda prova. Antes de calcular, leia o título, as unidades e de onde vêm os dados. Muita questão erra-se por ler “mil” onde estava “milhões”, ou porcentagem onde estava valor.'
                },
                { p: 'Exemplo: vendas de uma loja no primeiro trimestre.' },
                {
                  tabela: {
                    cab: ['Mês', 'Vendas (R$ mil)'],
                    codigo: [],
                    linhas: [['Janeiro', '120'], ['Fevereiro', '90'], ['Março', '150']]
                  }
                },
                {
                  p: 'Total do trimestre: 360 mil reais. Março vendeu 25% a mais que janeiro (150 ÷ 120 = 1,25). Fevereiro foi 25% de 360? Não: 90 ÷ 360 = 0,25, ou seja, sim, 25% do total.'
                },
                {
                  dica: 'Num gráfico de setores (pizza), cada fatia é uma porcentagem do todo, e o círculo inteiro é 100% (360°).'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Uma loja vendeu {A}, {B} e {C} mil reais em três meses. Qual foi o total, em mil reais?',
              r: '{= A + B + C }',
              exp: 'Some os três meses.',
              vars: {
                A: { de: 80, ate: 200, passo: 10 },
                B: { de: 80, ate: 200, passo: 10 },
                C: { de: 80, ate: 200, passo: 10 }
              }
            },
            {
              t: 'numero',
              p: 'Com vendas de {A} mil em janeiro e {B} mil em fevereiro, qual foi a variação percentual de janeiro para fevereiro?',
              r: '{= (B - A) / A * 100 }',
              exp: '({B} − {A}) ÷ {A} × 100. Se cair, o resultado é negativo.',
              unidade: '%',
              casas: 1,
              vars: { A: { de: 80, ate: 200, passo: 10 }, B: { de: 80, ate: 200, passo: 10 } },
              se: 'A !== B'
            },
            {
              t: 'numero',
              p: 'Num gráfico de setores, uma fatia representa {P}% do total. Quantos graus tem essa fatia?',
              r: '{= P * 3.6 }',
              exp: 'O círculo inteiro tem 360°: {P}% de 360.',
              unidade: '°',
              casas: 1,
              vars: { P: [10, 15, 20, 25, 30, 40, 45] }
            },
            {
              t: 'numero',
              p: 'Numa pesquisa com {T} pessoas, {P}% preferem ônibus. Quantas pessoas são?',
              r: '{= T * P / 100 }',
              exp: '{P}% de {T}.',
              vars: { T: [200, 400, 500, 1000, 1200], P: [12, 15, 25, 35, 40] }
            },
            {
              t: 'escolha',
              p: 'Uma tabela diz “População (em milhares)” e mostra 2.450 para uma cidade. Quantos habitantes ela tem?',
              ops: ['2.450.000', '2.450', '24.500'],
              c: 0,
              exp: 'Em milhares: 2.450 × 1.000.'
            }
          ]
        },
        {
          id: 'mb9l2',
          titulo: 'Média, mediana e moda',
          exs: [
            {
              t: 'texto',
              titulo: 'Um número para resumir muitos',
              blocos: [
                {
                  p: 'A média é a soma dos valores dividida pela quantidade. A mediana é o valor do meio, com os dados em ordem (com quantidade par, é a média dos dois do meio). A moda é o valor que mais se repete.'
                },
                {
                  p: 'Exemplo: salários de R$ 2.000, 2.000, 2.500, 3.000 e 20.000. A média é 29.500 ÷ 5 = 5.900, mas 4 das 5 pessoas ganham bem menos que isso. A mediana, 2.500, representa melhor o salário típico. A moda é 2.000.'
                },
                {
                  dica: 'Valores muito diferentes dos outros puxam a média, mas quase não mexem na mediana. Por isso pesquisas de renda costumam usar a mediana.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Qual é a média de {A}, {B}, {C} e {D}?',
              r: '{= (A + B + C + D) / 4 }',
              exp: 'Some e divida por 4.',
              casas: 2,
              vars: {
                A: { de: 2, ate: 20 },
                B: { de: 2, ate: 20 },
                C: { de: 2, ate: 20 },
                D: { de: 2, ate: 20 }
              }
            },
            {
              t: 'numero',
              p: 'Qual é a mediana de {A}, {B}, {C}, {D} e {F}?',
              r: '{= [A, B, C, D, F].sort((x, y) => x - y)[2] }',
              exp: 'Ponha em ordem e pegue o do meio, o terceiro.',
              vars: {
                A: { de: 1, ate: 30 },
                B: { de: 1, ate: 30 },
                C: { de: 1, ate: 30 },
                D: { de: 1, ate: 30 },
                F: { de: 1, ate: 30 }
              }
            },
            {
              t: 'numero',
              p: 'Qual é a mediana de {A}, {B}, {C} e {D}?',
              r: '{= ([A, B, C, D].sort((x, y) => x - y)[1] + [A, B, C, D].sort((x, y) => x - y)[2]) / 2 }',
              exp: 'Com 4 valores, a mediana é a média dos dois do meio, depois de ordenar.',
              vars: {
                A: { de: 1, ate: 30 },
                B: { de: 1, ate: 30 },
                C: { de: 1, ate: 30 },
                D: { de: 1, ate: 30 }
              }
            },
            {
              t: 'numero',
              p: 'As notas de um aluno foram {A}, {B} e {C}. Quanto ele precisa tirar na quarta prova para a média das quatro ser {M}?',
              r: '{= 4 * M - A - B - C }',
              exp: 'A soma das quatro precisa ser 4 × {M} = {= 4 * M }.',
              vars: { A: { de: 3, ate: 9 }, B: { de: 3, ate: 9 }, C: { de: 3, ate: 9 }, M: [6, 7] },
              se: '4 * M - A - B - C >= 0 && 4 * M - A - B - C <= 10'
            },
            {
              t: 'escolha',
              p: 'Num bairro, a renda média é alta, mas a mediana é baixa. O que isso indica?',
              ops: [
                'Poucas pessoas ganham muito mais que a maioria',
                'Todos ganham parecido',
                'A conta está errada'
              ],
              c: 0,
              exp: 'Poucos valores muito altos puxam a média para cima; a mediana mostra o típico.'
            },
            {
              t: 'numero',
              p: 'Qual é a moda de: {A}, {B}, {A}, {C}, {A}, {B}?',
              r: '{A}',
              exp: 'O que mais aparece.',
              vars: { A: { de: 1, ate: 9 }, B: { de: 10, ate: 19 }, C: { de: 20, ate: 29 } }
            }
          ]
        }
      ]
    },
    {
      id: 'mbu18',
      titulo: 'Contagem e probabilidade',
      conceito: 'P(A)',
      desc: 'Quantas possibilidades e qual a chance.',
      licoes: [
        {
          id: 'mb9l3',
          titulo: 'Contar possibilidades',
          exs: [
            {
              t: 'texto',
              titulo: 'O princípio multiplicativo',
              blocos: [
                {
                  p: 'Se uma escolha pode ser feita de m jeitos e, depois, outra de n jeitos, as duas juntas podem ser feitas de $$m × n$$ jeitos. Com 3 camisetas e 4 calças, dá para montar $$3 × 4 = 12$$ combinações.'
                },
                {
                  p: 'Senhas e placas usam a mesma ideia: uma senha de 4 dígitos (0 a 9) tem $$10 × 10 × 10 × 10 = 10.000$$ possibilidades.'
                },
                {
                  p: 'Para pôr n coisas diferentes em fila, são $$n × (n − 1) × ... × 1$$ jeitos, o fatorial de n, escrito n!. Com 4 pessoas: 4! = 24 filas diferentes.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Uma lanchonete tem {P} tipos de pão, {R} de recheio e {S} de suco. Quantos combos diferentes (um de cada) dá para montar?',
              r: '{= P * R * S }',
              exp: 'Multiplique as possibilidades de cada escolha.',
              vars: { P: { de: 2, ate: 5 }, R: { de: 3, ate: 8 }, S: { de: 2, ate: 6 } }
            },
            {
              t: 'numero',
              p: 'Quantas senhas de {K} dígitos, de 0 a 9, existem?',
              r: '{= 10 ** K }',
              exp: '10 possibilidades em cada posição: $$10^{K}$$.',
              vars: { K: [3, 4, 5, 6] }
            },
            {
              t: 'numero',
              p: 'De quantas formas {N} pessoas podem se sentar em {N} cadeiras enfileiradas?',
              r: '{= [1, 1, 2, 6, 24, 120, 720, 5040][N] }',
              exp: '{N}! = {N} × {= N - 1 } × ... × 1.',
              vars: { N: [3, 4, 5, 6, 7] }
            },
            {
              t: 'numero',
              p: 'Uma placa tem 3 letras (26 possíveis) seguidas de 4 algarismos. Quantas placas assim existem?',
              r: '175760000',
              exp: '$$26 × 26 × 26 × 10 × 10 × 10 × 10$$ = 175.760.000. Por isso o padrão Mercosul, com mais letras, abriu espaço para mais carros.'
            },
            {
              t: 'numero',
              p: 'Um time de {N} jogadores vai escolher um capitão e um vice. De quantas formas?',
              r: '{= N * (N - 1) }',
              exp: '{N} jeitos para o capitão; sobram {= N - 1 } para o vice.',
              vars: { N: { de: 5, ate: 22 } }
            }
          ]
        },
        {
          id: 'mb9l4',
          titulo: 'Probabilidade',
          exs: [
            {
              t: 'texto',
              titulo: 'A chance de acontecer',
              blocos: [
                {
                  p: 'Quando todos os resultados têm a mesma chance, a probabilidade de um evento é: casos favoráveis ÷ casos possíveis. Ela vai de 0 (impossível) a 1 (certo), e muitas vezes é dada em porcentagem.'
                },
                {
                  p: 'Num dado comum, a chance de sair um número par é $$3/6 = 1/2 = 50%$$. A chance de sair 7 é zero.'
                },
                {
                  p: 'A chance de não acontecer é 1 menos a chance de acontecer. E para dois eventos independentes acontecerem juntos, multiplique as chances: duas caras seguidas numa moeda é $$1/2 × 1/2 = 1/4$$.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Uma urna tem {V} bolas vermelhas e {A} azuis. Qual é a probabilidade, em porcentagem, de sortear uma vermelha?',
              r: '{= V / (V + A) * 100 }',
              exp: 'Favoráveis ({V}) ÷ total ({= V + A }) × 100.',
              unidade: '%',
              casas: 1,
              vars: { V: { de: 2, ate: 15 }, A: { de: 2, ate: 15 } }
            },
            {
              t: 'numero',
              p: 'Num dado comum, qual é a probabilidade de sair um número maior que {K}? Responda em fração irredutível',
              r: '{= fr(6 - K, 6) }',
              exp: 'Os números maiores que {K} são {= 6 - K }, de 6 possíveis.',
              fracao: true,
              vars: { K: [1, 2, 4] }
            },
            {
              t: 'numero',
              p: 'Lançando uma moeda {K} vezes, qual é a probabilidade de sair cara em todas? Responda em fração',
              r: '1/{= 2 ** K }',
              exp: 'Multiplique $$1/2$$ por ele mesmo {K} vezes.',
              fracao: true,
              vars: { K: [2, 3, 4, 5] }
            },
            {
              t: 'numero',
              p: 'A chance de chover amanhã é de {P}%. Qual é a chance de não chover?',
              r: '{= 100 - P }',
              exp: 'As duas somam 100%.',
              unidade: '%',
              vars: { P: { de: 10, ate: 90, passo: 5 } }
            },
            {
              t: 'numero',
              p: 'Numa rifa de {T} números, você comprou {K}. Qual é a sua chance de ganhar, em porcentagem?',
              r: '{= K / T * 100 }',
              exp: '{K} ÷ {T} × 100.',
              unidade: '%',
              casas: 2,
              vars: { T: [100, 200, 500, 1000], K: { de: 1, ate: 10 } }
            },
            {
              t: 'escolha',
              p: 'Na Mega-Sena, apostar sempre nos mesmos números aumenta a chance de ganhar?',
              ops: [
                'Não: cada sorteio é independente',
                'Sim, com o tempo',
                'Só se os números já saíram antes'
              ],
              c: 0,
              exp: 'As bolas não têm memória. A chance de uma aposta simples é a mesma em todo sorteio, cerca de 1 em 50 milhões.'
            }
          ]
        }
      ]
    }
  ]
});
