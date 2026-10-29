/* Trilha Livre · Matemática do ensino médio · Nível 4: Sequências
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'mat-medio',
  n: 4,
  titulo: 'Sequências',
  desc: 'Progressões aritméticas e geométricas, somas e a ligação com juros.',
  videos: [
    {
      titulo: 'Professor Ferretto',
      canal: 'Matemática com Ferretto',
      obs: 'playlists de PA e PG',
      url: 'https://www.youtube.com/user/professorferretto'
    },
    {
      titulo: 'Equaciona Matemática',
      canal: 'Equaciona',
      obs: 'aulas de progressão aritmética e geométrica',
      url: 'https://www.youtube.com/channel/UCZLyNRqqp2MeFuwuZdbGDJw'
    },
    {
      tipo: 'texto',
      titulo: 'Khan Academy em português',
      canal: 'Khan Academy',
      obs: 'exercícios de sequências',
      url: 'https://pt.khanacademy.org/'
    }
  ],
  unidades: [
    {
      id: 'mmu7',
      titulo: 'Progressão aritmética',
      conceito: 'PA',
      desc: 'Somar sempre o mesmo número.',
      licoes: [
        {
          id: 'mm4l1',
          titulo: 'PA: o termo geral',
          exs: [
            {
              t: 'texto',
              titulo: 'Somando sempre a mesma razão',
              blocos: [
                {
                  p: 'Numa progressão aritmética (PA), cada termo é o anterior mais um número fixo, a razão r. Em (3, 7, 11, 15, ...), a razão é 4.'
                },
                {
                  p: 'Para achar o termo de posição n sem escrever todos: $$a_n = a_1 + (n − 1) × r$$. O 20º termo da PA acima é $$3 + 19 × 4 = 79$$.'
                },
                {
                  dica: 'A razão pode ser negativa (a PA decresce) ou zero (todos os termos iguais).'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Qual é a razão da PA ({A}, {= A + R }, {= A + 2 * R }, ...)?',
              r: '{R}',
              exp: 'Subtraia um termo do seguinte.',
              vars: { A: { de: -10, ate: 20 }, R: { de: -6, ate: 9 } },
              se: 'R !== 0'
            },
            {
              t: 'numero',
              p: 'Qual é o {K}º termo da PA ({A}, {= A + R }, {= A + 2 * R }, ...)?',
              r: '{= A + (K - 1) * R }',
              exp: '$$a_{K} = {A} + ({K} − 1) × {R}$$.',
              vars: { A: { de: -10, ate: 20 }, R: { de: 2, ate: 9 }, K: { de: 10, ate: 50 } }
            },
            {
              t: 'numero',
              p: 'Em que posição da PA ({A}, {= A + R }, {= A + 2 * R }, ...) aparece o número {= A + (K - 1) * R }?',
              r: '{K}',
              exp: '$${A} + (n − 1) × {R} = {= A + (K - 1) * R }$$.',
              vars: { A: { de: 1, ate: 20 }, R: { de: 2, ate: 9 }, K: { de: 8, ate: 40 } }
            },
            {
              t: 'escolha',
              p: 'Qual destas sequências é uma PA?',
              ops: ['(5, 8, 11, 14)', '(2, 4, 8, 16)', '(1, 4, 9, 16)'],
              c: 0,
              exp: 'Só na primeira a diferença é sempre a mesma: 3.'
            },
            {
              t: 'numero',
              p: 'Um carro novo custa R$ {= br(P) } e perde R$ {= br(D) } de valor por ano. Quanto vale depois de {K} anos?',
              r: '{= P - K * D }',
              exp: 'É uma PA de razão −{= br(D) }.',
              prefixo: 'R$',
              vars: { P: [60000, 80000, 100000], D: [3000, 4000, 5000], K: { de: 2, ate: 8 } }
            },
            {
              t: 'numero',
              p: 'Numa PA, o 1º termo é {A} e o {K}º termo é {= A + (K - 1) * R }. Qual é a razão?',
              r: '{R}',
              exp: '$${= A + (K - 1) * R } = {A} + ({K} − 1) × r$$.',
              vars: { A: { de: 1, ate: 20 }, K: { de: 5, ate: 15 }, R: { de: 2, ate: 8 } }
            }
          ]
        },
        {
          id: 'mm4l2',
          titulo: 'Soma da PA',
          exs: [
            {
              t: 'texto',
              titulo: 'O truque de Gauss',
              blocos: [
                {
                  p: 'Para somar 1 + 2 + ... + 100, junte o primeiro com o último (1 + 100), o segundo com o penúltimo (2 + 99): todos os pares dão 101, e são 50 pares. Total: 5.050.'
                },
                { p: 'Isso vale para qualquer PA: $$S_n = ((a_1 + a_n) × n)/2$$.' },
                { dica: 'Se não souber o último termo, calcule antes pelo termo geral.' }
              ]
            },
            {
              t: 'numero',
              p: 'Quanto é 1 + 2 + 3 + ... + {N}?',
              r: '{= N * (N + 1) / 2 }',
              exp: '$$((1 + {N}) × {N})/2$$.',
              vars: { N: { de: 20, ate: 500 } }
            },
            {
              t: 'numero',
              p: 'Qual é a soma dos {K} primeiros termos da PA ({A}, {= A + R }, {= A + 2 * R }, ...)?',
              r: '{= (2 * A + (K - 1) * R) * K / 2 }',
              exp: 'Último termo: {= A + (K - 1) * R }. Depois, $$S = ((a_1 + a_n) × n)/2$$.',
              vars: { A: { de: 1, ate: 15 }, R: { de: 2, ate: 7 }, K: { de: 10, ate: 30 } }
            },
            {
              t: 'numero',
              p: 'Um atleta corre {A} km no primeiro dia de treino e {= br(R) } km a mais a cada dia. Quantos km corre ao todo em {K} dias?',
              r: '{= (2 * A + (K - 1) * R) * K / 2 }',
              exp: 'É a soma de uma PA de razão {= br(R) }.',
              unidade: 'km',
              vars: { A: [2, 3, 5], R: [0.5, 1], K: [10, 14, 20, 30] }
            },
            {
              t: 'numero',
              p: 'Quanto é a soma dos números ímpares de 1 a {= 2 * K - 1 }?',
              r: '{= K * K }',
              exp: 'São {K} números ímpares: $$((1 + {= 2 * K - 1 }) × {K})/2$$.',
              vars: { K: { de: 10, ate: 60 } }
            },
            {
              t: 'escolha',
              p: 'Numa arquibancada, a 1ª fila tem 20 lugares e cada fila tem 2 a mais que a anterior. Como achar o total de lugares de 15 filas?',
              ops: [
                'Soma de uma PA: ((20 + 48) × 15)/2',
                'Multiplicar 20 por 15',
                'Multiplicar 20 por 2 elevado a 15'
              ],
              c: 0,
              exp: 'A 15ª fila tem 20 + 14 × 2 = 48 lugares.'
            },
            {
              t: 'numero',
              p: 'Quanto é a soma dos múltiplos de {M} de {M} até {= M * K }?',
              r: '{= M * K * (K + 1) / 2 }',
              exp: 'São {K} termos de uma PA de razão {M}: $$(({M} + {= M * K }) × {K})/2$$.',
              vars: { M: { de: 2, ate: 9 }, K: { de: 10, ate: 40 } }
            }
          ]
        }
      ]
    },
    {
      id: 'mmu8',
      titulo: 'Progressão geométrica',
      conceito: 'PG',
      desc: 'Multiplicar sempre pelo mesmo número.',
      licoes: [
        {
          id: 'mm4l3',
          titulo: 'PG: o termo geral',
          exs: [
            {
              t: 'texto',
              titulo: 'Multiplicando sempre pela mesma razão',
              blocos: [
                {
                  p: 'Numa progressão geométrica (PG), cada termo é o anterior multiplicado por um número fixo, a razão q. Em (3, 6, 12, 24, ...), a razão é 2.'
                },
                {
                  p: 'Termo geral: $$a_n = a_1 × q^(n − 1)$$. O 8º termo da PG acima é $$3 × 2^7 = 384$$.'
                },
                {
                  p: 'Uma PG cresce muito mais rápido que uma PA: é a diferença entre somar e multiplicar.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Qual é a razão da PG ({A}, {= A * Q }, {= A * Q * Q }, ...)?',
              r: '{Q}',
              exp: 'Divida um termo pelo anterior.',
              vars: { A: { de: 1, ate: 9 }, Q: [2, 3, 4, 5, -2] }
            },
            {
              t: 'numero',
              p: 'Qual é o {K}º termo da PG ({A}, {= A * Q }, {= A * Q * Q }, ...)?',
              r: '{= A * Q ** (K - 1) }',
              exp: '$$a_{K} = {A} × {Q}^{= K - 1 }$$.',
              vars: { A: { de: 1, ate: 5 }, Q: [2, 3], K: { de: 5, ate: 10 } }
            },
            {
              t: 'escolha',
              p: 'Qual destas sequências é uma PG?',
              ops: ['(2, 6, 18, 54)', '(2, 6, 10, 14)', '(2, 4, 7, 11)'],
              c: 0,
              exp: 'Na primeira, cada termo é o anterior vezes 3.'
            },
            {
              t: 'numero',
              p: 'Uma notícia falsa é repassada por cada pessoa para {Q} outras, a cada hora. Começando com 1 pessoa, quantas pessoas novas recebem na {K}ª hora?',
              r: '{= Q ** K }',
              exp: 'Na hora 1 são {Q}; na hora 2, {= Q * Q }; é uma PG de razão {Q}.',
              vars: { Q: [2, 3, 4, 5], K: { de: 3, ate: 8 } }
            },
            {
              t: 'numero',
              p: 'Uma máquina perde {P}% do valor por ano. Se custa R$ {= br(V) } hoje, quanto valerá daqui a {K} anos?',
              r: '{= V * (1 - P / 100) ** K }',
              exp: 'Cada ano multiplica por {= br(1 - P / 100) }: é uma PG.',
              prefixo: 'R$',
              casas: 2,
              vars: { V: [10000, 20000, 50000], P: [10, 20], K: { de: 2, ate: 5 } }
            },
            {
              t: 'numero',
              p: 'Numa PG de 1º termo {A} e razão {Q}, qual é o 1º termo maior que 1000? Responda o valor do termo',
              r: '{= A * Q ** (Math.floor(Math.log(1000 / A) / Math.log(Q)) + 1) }',
              exp: 'Vá multiplicando por {Q} até passar de 1000.',
              vars: { A: [1, 2, 3, 5], Q: [2, 3] },
              se: 'Number.isInteger(Math.log(1000 / A) / Math.log(Q)) === false'
            }
          ]
        },
        {
          id: 'mm4l4',
          titulo: 'Soma da PG e juros',
          exs: [
            {
              t: 'texto',
              titulo: 'Somas e o dinheiro',
              blocos: [
                {
                  p: 'A soma dos n primeiros termos de uma PG é $$S_n = a_1 × (q^n − 1)/(q − 1)$$. Se a razão está entre −1 e 1, os termos vão ficando minúsculos e a soma infinita chega perto de $$a_1/(1 − q)$$.'
                },
                {
                  p: 'Juros simples são uma PA: o juro de cada mês é sempre o mesmo. Juros compostos são uma PG: cada mês rende sobre o que já rendeu.'
                },
                {
                  tabela: {
                    cab: ['', 'Fórmula', 'R$ 1.000 a 10% por 3 meses'],
                    codigo: [],
                    linhas: [
                      ['Juros simples', '$$M = C × (1 + i × t)$$', 'R$ 1.300,00'],
                      ['Juros compostos', '$$M = C × (1 + i)^t$$', 'R$ 1.331,00']
                    ]
                  }
                }
              ]
            },
            {
              t: 'numero',
              p: 'Qual é a soma dos {K} primeiros termos da PG (1, 2, 4, 8, ...)?',
              r: '{= 2 ** K - 1 }',
              exp: '$$S = 1 × (2^{K} − 1)/(2 − 1)$$.',
              vars: { K: { de: 5, ate: 15 } }
            },
            {
              t: 'numero',
              p: 'Qual é a soma infinita 1 + $$1/{Q}$$ + $$1/{= Q * Q }$$ + ...? Responda em fração irredutível',
              r: '{= fr(Q, Q - 1) }',
              exp: '$$a_1/(1 − q) = 1/(1 − 1/{Q})$$.',
              fracao: true,
              vars: { Q: [2, 3, 4, 5] }
            },
            {
              t: 'numero',
              p: 'R$ {= br(C) } a {I}% ao mês por {M} meses, com juros simples. Qual é o montante?',
              r: '{= C * (1 + I / 100 * M) }',
              exp: '$$M = {C} × (1 + {= br(I / 100) } × {M})$$.',
              prefixo: 'R$',
              casas: 2,
              vars: { C: [1000, 2000, 5000], I: [2, 5, 10], M: [3, 6, 12] }
            },
            {
              t: 'numero',
              p: 'E com juros compostos, nas mesmas condições ({C} reais, {I}% ao mês, {M} meses)?',
              r: '{= C * (1 + I / 100) ** M }',
              exp: '$$M = {C} × (1 + {= br(I / 100) })^{M}$$.',
              prefixo: 'R$',
              casas: 2,
              vars: { C: [1000, 2000, 5000], I: [2, 5, 10], M: [3, 6, 12] }
            },
            {
              t: 'escolha',
              p: 'Por que, no longo prazo, os juros compostos rendem muito mais que os simples?',
              ops: [
                'Porque cada período rende sobre os juros já ganhos',
                'Porque a taxa é maior',
                'Porque o capital aumenta sozinho'
              ],
              c: 0,
              exp: 'É a diferença entre uma PA e uma PG.'
            },
            {
              t: 'numero',
              p: 'Uma bola cai de {H} m e, a cada quique, sobe metade da altura anterior. Quantos metros ela percorre até parar? (soma infinita)',
              r: '{= 3 * H }',
              exp: 'Desce {H}; depois sobe e desce $$2 × ({H}/2 + {H}/4 + ...)$$ = 2 × {H}.',
              unidade: 'm',
              vars: { H: [2, 4, 5, 8, 10] }
            }
          ]
        }
      ]
    }
  ]
});
