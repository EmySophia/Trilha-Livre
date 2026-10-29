/* Trilha Livre · Matemática do ensino médio · Nível 7: Contagem e probabilidade
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'mat-medio',
  n: 7,
  titulo: 'Contagem e probabilidade',
  desc: 'Permutações, arranjos, combinações e probabilidade, inclusive condicional.',
  videos: [
    {
      titulo: 'Professor Ferretto',
      canal: 'Matemática com Ferretto',
      obs: 'playlists de análise combinatória e probabilidade',
      url: 'https://www.youtube.com/user/professorferretto'
    },
    {
      titulo: 'Equaciona Matemática',
      canal: 'Equaciona',
      obs: 'aulas de combinatória com muitos exemplos',
      url: 'https://www.youtube.com/channel/UCZLyNRqqp2MeFuwuZdbGDJw'
    },
    {
      tipo: 'texto',
      titulo: 'Khan Academy em português',
      canal: 'Khan Academy',
      obs: 'exercícios de probabilidade',
      url: 'https://pt.khanacademy.org/'
    }
  ],
  unidades: [
    {
      id: 'mmu13',
      titulo: 'Análise combinatória',
      conceito: 'n!',
      desc: 'Contar sem listar.',
      licoes: [
        {
          id: 'mm7l1',
          titulo: 'Permutações e anagramas',
          exs: [
            {
              t: 'texto',
              titulo: 'De quantas formas dá para ordenar',
              blocos: [
                {
                  p: 'Para pôr n coisas diferentes em ordem, são n! jeitos: $$n! = n × (n − 1) × ... × 2 × 1$$. Com 4 livros numa prateleira: 4! = 24 ordens.'
                },
                {
                  p: 'Um anagrama é uma reordenação das letras de uma palavra. AMOR tem 4! = 24 anagramas. Se houver letras repetidas, divida pelo fatorial de cada repetição: ARARA tem 5 letras, com o A 3 vezes e o R 2 vezes, então são $$5!/(3! × 2!) = 10$$ anagramas.'
                },
                { dica: '0! vale 1, por definição.' }
              ]
            },
            {
              t: 'numero',
              p: 'Quanto é {N}!?',
              r: '{= [1, 1, 2, 6, 24, 120, 720, 5040, 40320][N] }',
              exp: '{N} × {= N - 1 } × ... × 1.',
              vars: { N: { de: 3, ate: 8 } }
            },
            {
              t: 'numero',
              p: 'Quantos anagramas tem a palavra {= ["AMOR", "LIVRO", "BRASIL", "ARARA", "BANANA", "ENEM", "PAPAI"][I] }?',
              r: '{= [24, 120, 720, 10, 60, 12, 30][I] }',
              exp: 'Conte as letras e divida pelos fatoriais das que se repetem.',
              vars: { I: { de: 0, ate: 6 } }
            },
            {
              t: 'numero',
              p: 'De quantas formas {N} pessoas podem fazer uma fila?',
              r: '{= [1, 1, 2, 6, 24, 120, 720, 5040][N] }',
              exp: 'São {N}!.',
              vars: { N: { de: 3, ate: 7 } }
            },
            {
              t: 'numero',
              p: 'Quantos anagramas de {= ["AMOR", "LIVRO", "BRASIL"][I] } começam com a letra {= ["A", "L", "B"][I] }?',
              r: '{= [6, 24, 120][I] }',
              exp: 'Fixando a primeira letra, as outras {= I + 3 } se permutam: {= I + 3 }!.',
              vars: { I: { de: 0, ate: 2 } }
            },
            {
              t: 'escolha',
              p: 'Por que ARARA tem menos anagramas que 5! = 120?',
              ops: [
                'Trocar dois A de lugar não muda a palavra',
                'Porque tem só duas letras diferentes',
                'Porque é um palíndromo'
              ],
              c: 0,
              exp: 'As trocas entre letras iguais contam o mesmo anagrama várias vezes.'
            },
            {
              t: 'numero',
              p: 'Quantos números de 3 algarismos diferentes dá para formar com 1, 2, 3, 4 e 5?',
              r: '60',
              exp: '5 opções para o primeiro, 4 para o segundo, 3 para o terceiro.'
            }
          ]
        },
        {
          id: 'mm7l2',
          titulo: 'Arranjos e combinações',
          exs: [
            {
              t: 'texto',
              titulo: 'A ordem importa?',
              blocos: [
                {
                  p: 'Escolher p coisas de um grupo de n tem duas versões. Se a ordem importa (pódio, senha, presidente e vice), é um arranjo: $$A = n!/(n − p)!$$. Se a ordem não importa (comissão, salada de frutas, aposta da loteria), é uma combinação: $$C = n!/(p! (n − p)!)$$.'
                },
                {
                  passos: [
                    'Pódio de 3 entre 8 corredores: 8 × 7 × 6 = 336 (a ordem importa).',
                    'Comissão de 3 entre 8 pessoas: $$336/3! = 56$$ (a ordem não importa).'
                  ]
                },
                {
                  dica: 'Pergunte: trocar a ordem dá um resultado diferente? Se sim, arranjo. Se não, combinação.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'De quantas formas dá para formar o pódio (1º, 2º e 3º) numa corrida com {N} atletas?',
              r: '{= N * (N - 1) * (N - 2) }',
              exp: '{N} × {= N - 1 } × {= N - 2 }.',
              vars: { N: { de: 5, ate: 15 } }
            },
            {
              t: 'numero',
              p: 'Quantas comissões de 3 pessoas dá para formar com {N} pessoas?',
              r: '{= N * (N - 1) * (N - 2) / 6 }',
              exp: '$$C = ({N} × {= N - 1 } × {= N - 2 })/3!$$.',
              vars: { N: { de: 5, ate: 15 } }
            },
            {
              t: 'numero',
              p: 'Uma salada de frutas leva 2 frutas diferentes, escolhidas entre {N}. Quantas saladas diferentes existem?',
              r: '{= N * (N - 1) / 2 }',
              exp: 'A ordem não importa: $$({N} × {= N - 1 })/2$$.',
              vars: { N: { de: 4, ate: 12 } }
            },
            {
              t: 'escolha',
              p: 'Escolher um presidente e um vice num grupo é...',
              ops: [
                'Arranjo: a ordem importa',
                'Combinação: a ordem não importa',
                'Permutação de todos'
              ],
              c: 0,
              exp: 'Ana presidente e Bia vice é diferente de Bia presidente e Ana vice.'
            },
            {
              t: 'numero',
              p: 'Num campeonato com {N} times, cada time joga uma vez contra cada outro. Quantos jogos são?',
              r: '{= N * (N - 1) / 2 }',
              exp: 'Cada jogo é um par de times, sem ordem: $$C({N}, 2)$$.',
              vars: { N: { de: 4, ate: 20 } }
            },
            {
              t: 'numero',
              p: 'Um time de {N} jogadores vai escolher 2 para representar o grupo, sem cargos. De quantas formas?',
              r: '{= N * (N - 1) / 2 }',
              exp: 'Combinação: $$({N} × {= N - 1 })/2$$.',
              vars: { N: { de: 5, ate: 25 } }
            }
          ]
        }
      ]
    },
    {
      id: 'mmu14',
      titulo: 'Probabilidade',
      conceito: 'P(A)',
      desc: 'Chances, complementos e probabilidade condicional.',
      licoes: [
        {
          id: 'mm7l3',
          titulo: 'Probabilidade de eventos',
          exs: [
            {
              t: 'texto',
              titulo: 'Favoráveis sobre possíveis',
              blocos: [
                {
                  p: 'Com resultados igualmente prováveis: $$P = favoráveis/possíveis$$. A chance de não acontecer é $$1 − P$$. Para dois eventos independentes acontecerem juntos, multiplique as chances.'
                },
                {
                  p: '“Pelo menos um” costuma ser mais fácil pelo complemento: a chance de sair pelo menos um 6 em dois dados é $$1 − (5/6)^2 = 11/36$$.'
                },
                {
                  p: 'Para “A ou B”, some as chances e tire a parte contada duas vezes: $$P(A ou B) = P(A) + P(B) − P(A e B)$$.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Num baralho de 52 cartas, qual é a probabilidade de tirar uma carta de copas? Responda em fração irredutível',
              r: '1/4',
              exp: 'São 13 cartas de copas em 52.',
              fracao: true
            },
            {
              t: 'numero',
              p: 'Lançando um dado {K} vezes, qual é a probabilidade de NÃO sair nenhum 6? Responda em porcentagem, com 1 casa',
              r: '{= (5 / 6) ** K * 100 }',
              exp: 'Em cada lançamento, a chance de não sair 6 é $$5/6$$. Multiplique {K} vezes.',
              unidade: '%',
              casas: 1,
              vars: { K: [2, 3, 4, 5] }
            },
            {
              t: 'numero',
              p: 'E qual é a probabilidade de sair pelo menos um 6 em {K} lançamentos? Em porcentagem, com 1 casa',
              r: '{= (1 - (5 / 6) ** K) * 100 }',
              exp: 'É o complemento de não sair nenhum: $$1 − (5/6)^{K}$$.',
              unidade: '%',
              casas: 1,
              vars: { K: [2, 3, 4, 5] }
            },
            {
              t: 'numero',
              p: 'Sorteando um número de 1 a {N}, qual é a probabilidade de ele ser múltiplo de 2 ou de 3? Responda em fração irredutível',
              r: '{= fr(Math.floor(N / 2) + Math.floor(N / 3) - Math.floor(N / 6), N) }',
              exp: 'Múltiplos de 2, mais múltiplos de 3, menos os de 6, que foram contados duas vezes.',
              fracao: true,
              vars: { N: [10, 12, 20, 30, 60] }
            },
            {
              t: 'numero',
              p: 'Na Mega-Sena, uma aposta simples escolhe 6 números de 60. Quantas apostas diferentes existem?',
              r: '50063860',
              exp: '$$C(60, 6) = (60 × 59 × 58 × 57 × 56 × 55)/6!$$. A chance de acertar é 1 nessa quantidade.'
            },
            {
              t: 'numero',
              p: 'Num sorteio, a chance de ganhar é $$1/{K}$$. Participando de {M} sorteios independentes, qual é a chance de não ganhar nenhum? Em porcentagem, com 1 casa',
              r: '{= (1 - 1 / K) ** M * 100 }',
              exp: 'Em cada um, a chance de perder é $$1 − 1/{K}$$. Multiplique {M} vezes.',
              unidade: '%',
              casas: 1,
              vars: { K: [2, 4, 5, 10], M: [2, 3, 5] }
            }
          ]
        },
        {
          id: 'mm7l4',
          titulo: 'Probabilidade condicional',
          exs: [
            {
              t: 'texto',
              titulo: 'Sabendo que...',
              blocos: [
                {
                  p: 'A probabilidade condicional é a chance de A acontecer sabendo que B aconteceu: o espaço de possibilidades encolhe para só os casos de B. $$P(A|B) = P(A e B)/P(B)$$.'
                },
                {
                  p: 'Com uma tabela de dupla entrada, é só olhar a linha ou a coluna da condição. Exemplo, numa escola:'
                },
                {
                  tabela: {
                    cab: ['', 'Manhã', 'Tarde', 'Total'],
                    codigo: [],
                    linhas: [
                      ['Meninas', '30', '20', '50'],
                      ['Meninos', '25', '25', '50'],
                      ['Total', '55', '45', '100']
                    ]
                  }
                },
                {
                  p: 'Sorteando um aluno da manhã, a chance de ser menina é $$30/55 = 6/11$$: olhamos só a coluna da manhã.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Numa turma, {A} meninas e {B} meninos estudam de manhã, e {C} meninas e {D} meninos à tarde. Sorteando alguém da tarde, qual é a chance de ser menina? Responda em fração irredutível',
              r: '{= fr(C, C + D) }',
              exp: 'Olhe só a tarde: {C} meninas em {= C + D } alunos.',
              fracao: true,
              vars: {
                A: { de: 10, ate: 30 },
                B: { de: 10, ate: 30 },
                C: { de: 5, ate: 25 },
                D: { de: 5, ate: 25 }
              }
            },
            {
              t: 'numero',
              p: 'Na mesma escola ({A} meninas e {B} meninos de manhã; {C} meninas e {D} meninos à tarde), sorteando uma menina, qual é a chance de ela estudar de manhã? Fração irredutível',
              r: '{= fr(A, A + C) }',
              exp: 'Olhe só as meninas: {A} de manhã, de {= A + C }.',
              fracao: true,
              vars: {
                A: { de: 10, ate: 30 },
                B: { de: 10, ate: 30 },
                C: { de: 5, ate: 25 },
                D: { de: 5, ate: 25 }
              }
            },
            {
              t: 'escolha',
              p: 'Dois eventos são independentes quando...',
              ops: [
                'Um acontecer não muda a chance do outro',
                'Eles não podem acontecer juntos',
                'Têm a mesma probabilidade'
              ],
              c: 0,
              exp: 'Exemplo: o resultado de um dado não muda a chance da moeda.'
            },
            {
              t: 'numero',
              p: 'Uma urna tem {V} bolas vermelhas e {A} azuis. Tirando duas, sem devolver, qual é a probabilidade de as duas serem vermelhas? Fração irredutível',
              r: '{= fr(V * (V - 1), (V + A) * (V + A - 1)) }',
              exp: 'Primeira vermelha: $${V}/{= V + A }$$. Sabendo disso, a segunda: $${= V - 1 }/{= V + A - 1 }$$. Multiplique.',
              fracao: true,
              vars: { V: { de: 2, ate: 8 }, A: { de: 2, ate: 8 } }
            },
            {
              t: 'escolha',
              p: 'Um teste acerta 99% dos doentes. Uma doença é rara: 1 em 1.000 pessoas tem. Se o teste deu positivo, a chance de a pessoa estar doente é...',
              ops: [
                'Pode ser bem menor que 99%, porque há muitos falsos positivos entre os saudáveis',
                'Exatamente 99%',
                '1%, sempre'
              ],
              c: 0,
              exp: 'Com uma doença rara, os poucos erros entre os muitos saudáveis podem superar os acertos entre os poucos doentes. É por isso que se repete o exame.'
            },
            {
              t: 'numero',
              p: 'Numa cidade, {P}% das pessoas usam ônibus e, entre elas, {Q}% usam também o metrô. Que porcentagem da cidade usa os dois?',
              r: '{= P * Q / 100 }',
              exp: '$$P(A e B) = P(A) × P(B|A)$$: {P}% de {Q}%.',
              unidade: '%',
              casas: 1,
              vars: { P: [20, 40, 50, 60], Q: [10, 25, 30, 50] }
            }
          ]
        }
      ]
    }
  ]
});
