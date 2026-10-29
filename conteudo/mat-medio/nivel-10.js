/* Trilha Livre · Matemática do ensino médio · Nível 10: Matrizes e sistemas
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'mat-medio',
  n: 10,
  titulo: 'Matrizes e sistemas',
  desc: 'Tabelas de números, operações com matrizes, determinantes e sistemas lineares.',
  videos: [
    {
      titulo: 'Professor Ferretto',
      canal: 'Matemática com Ferretto',
      obs: 'playlists de matrizes, determinantes e sistemas lineares',
      url: 'https://www.youtube.com/user/professorferretto'
    },
    {
      titulo: 'Equaciona Matemática',
      canal: 'Equaciona',
      obs: 'aulas de multiplicação de matrizes',
      url: 'https://www.youtube.com/channel/UCZLyNRqqp2MeFuwuZdbGDJw'
    },
    {
      tipo: 'texto',
      titulo: 'Khan Academy em português',
      canal: 'Khan Academy',
      obs: 'exercícios de matrizes',
      url: 'https://pt.khanacademy.org/'
    }
  ],
  unidades: [
    {
      id: 'mmu17',
      titulo: 'Matrizes',
      conceito: '[aᵢⱼ]',
      desc: 'Matrizes, determinantes e sistemas.',
      licoes: [
        {
          id: 'mm10l1',
          titulo: 'Matrizes',
          exs: [
            {
              t: 'texto',
              titulo: 'Tabelas de números',
              blocos: [
                {
                  p: 'Uma matriz é uma tabela de números com linhas e colunas. O elemento $$a_ij$$ fica na linha i e na coluna j. Uma matriz 2 × 3 tem 2 linhas e 3 colunas.'
                },
                {
                  tabela: {
                    cab: ['', 'Coluna 1', 'Coluna 2', 'Coluna 3'],
                    codigo: [],
                    linhas: [['Linha 1', '4', '7', '1'], ['Linha 2', '2', '5', '9']]
                  }
                },
                {
                  p: 'Nessa matriz, $$a_12 = 7$$ e $$a_23 = 9$$. Para somar matrizes de mesmo tamanho, some os elementos da mesma posição. Para multiplicar por um número, multiplique cada elemento.'
                },
                {
                  dica: 'Planilhas, imagens digitais (cada pixel é um número) e tabelas de preços são matrizes.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Na matriz da leitura (linha 1: 4, 7, 1; linha 2: 2, 5, 9), quanto vale $$a_{I}{J}$$?',
              r: '{= [[4, 7, 1], [2, 5, 9]][I - 1][J - 1] }',
              exp: 'Linha {I}, coluna {J}.',
              vars: { I: { de: 1, ate: 2 }, J: { de: 1, ate: 3 } }
            },
            {
              t: 'numero',
              p: 'Uma matriz tem {L} linhas e {C} colunas. Quantos elementos ela tem?',
              r: '{= L * C }',
              exp: '{L} × {C}.',
              vars: { L: { de: 2, ate: 6 }, C: { de: 2, ate: 6 } }
            },
            {
              t: 'numero',
              p: 'A = [[{A}, {B}], [{C}, {D}]] e B = [[{E}, {F}], [{G}, {H}]]. Quanto vale o elemento da linha 1, coluna 2 de A + B?',
              r: '{= B + F }',
              exp: 'Some os elementos da mesma posição: {B} + {= pr(F) }.',
              vars: {
                A: { de: -5, ate: 9 },
                B: { de: -5, ate: 9 },
                C: { de: -5, ate: 9 },
                D: { de: -5, ate: 9 },
                E: { de: -5, ate: 9 },
                F: { de: -5, ate: 9 },
                G: { de: -5, ate: 9 },
                H: { de: -5, ate: 9 }
              }
            },
            {
              t: 'numero',
              p: 'Multiplicando a matriz [[{A}, {B}], [{C}, {D}]] por {K}, quanto fica o elemento da linha 2, coluna 1?',
              r: '{= K * C }',
              exp: 'Cada elemento é multiplicado por {K}.',
              vars: {
                A: { de: -5, ate: 9 },
                B: { de: -5, ate: 9 },
                C: { de: -5, ate: 9 },
                D: { de: -5, ate: 9 },
                K: { de: 2, ate: 6 }
              }
            },
            {
              t: 'escolha',
              p: 'Na matriz $$a_ij = i + j$$, de tamanho 2 × 2, qual é o elemento $$a_21$$?',
              ops: ['3', '2', '21'],
              c: 0,
              exp: 'i = 2 e j = 1: 2 + 1 = 3.'
            },
            {
              t: 'numero',
              p: 'A matriz de notas de 3 alunos (linhas) em 2 provas (colunas) é [[7, {A}], [5, {B}], [8, 6]]. Qual é a média do aluno 2?',
              r: '{= (5 + B) / 2 }',
              exp: 'Linha 2: 5 e {B}.',
              casas: 1,
              vars: { A: { de: 4, ate: 10 }, B: { de: 4, ate: 10 } }
            }
          ]
        },
        {
          id: 'mm10l2',
          titulo: 'Multiplicar matrizes',
          exs: [
            {
              t: 'texto',
              titulo: 'Linha vezes coluna',
              blocos: [
                {
                  p: 'Para multiplicar A por B, o número de colunas de A precisa ser igual ao de linhas de B. Cada elemento do resultado é a linha de A “vezes” a coluna de B: multiplique termo a termo e some.'
                },
                {
                  p: 'Exemplo: [[1, 2], [3, 4]] × [[5, 6], [7, 8]]. Elemento da linha 1, coluna 1: 1 × 5 + 2 × 7 = 19. Linha 1, coluna 2: 1 × 6 + 2 × 8 = 22. O resultado é [[19, 22], [43, 50]].'
                },
                { dica: 'A ordem importa: A × B quase nunca é igual a B × A.' }
              ]
            },
            {
              t: 'numero',
              p: '[[{A}, {B}], [{C}, {D}]] × [[{E}, {F}], [{G}, {H}]]: quanto vale o elemento da linha 1, coluna 1?',
              r: '{= A * E + B * G }',
              exp: 'Linha 1 da primeira vezes coluna 1 da segunda: {A} × {= pr(E) } + {= pr(B) } × {= pr(G) }.',
              vars: {
                A: { de: -3, ate: 6 },
                B: { de: -3, ate: 6 },
                C: { de: -3, ate: 6 },
                D: { de: -3, ate: 6 },
                E: { de: -3, ate: 6 },
                F: { de: -3, ate: 6 },
                G: { de: -3, ate: 6 },
                H: { de: -3, ate: 6 }
              }
            },
            {
              t: 'numero',
              p: 'No mesmo produto, [[{A}, {B}], [{C}, {D}]] × [[{E}, {F}], [{G}, {H}]], quanto vale o elemento da linha 2, coluna 2?',
              r: '{= C * F + D * H }',
              exp: 'Linha 2 da primeira vezes coluna 2 da segunda: {C} × {= pr(F) } + {= pr(D) } × {= pr(H) }.',
              vars: {
                A: { de: -3, ate: 6 },
                B: { de: -3, ate: 6 },
                C: { de: -3, ate: 6 },
                D: { de: -3, ate: 6 },
                E: { de: -3, ate: 6 },
                F: { de: -3, ate: 6 },
                G: { de: -3, ate: 6 },
                H: { de: -3, ate: 6 }
              }
            },
            {
              t: 'escolha',
              p: 'Dá para multiplicar uma matriz 2 × 3 por uma 2 × 3?',
              ops: [
                'Não: são 3 colunas na primeira e 2 linhas na segunda',
                'Sim, sempre',
                'Só se forem iguais'
              ],
              c: 0,
              exp: 'As colunas da primeira precisam bater com as linhas da segunda.'
            },
            {
              t: 'numero',
              p: 'Uma loja vende camisetas a R$ {P1} e bonés a R$ {P2}. Na segunda, vendeu {A} camisetas e {B} bonés. Quanto faturou? (é a linha das quantidades vezes a coluna dos preços)',
              r: '{= A * P1 + B * P2 }',
              exp: '{A} × {P1} + {B} × {P2}.',
              prefixo: 'R$',
              vars: {
                P1: [30, 40, 50],
                P2: [20, 25, 35],
                A: { de: 5, ate: 30 },
                B: { de: 5, ate: 30 }
              }
            },
            {
              t: 'numero',
              p: 'Quantos elementos tem o produto de uma matriz {L} × {C} por uma {C} × {P}?',
              r: '{= L * P }',
              exp: 'O resultado é {L} × {P}.',
              vars: { L: { de: 2, ate: 5 }, C: { de: 2, ate: 5 }, P: { de: 2, ate: 5 } }
            },
            {
              t: 'escolha',
              p: 'A matriz identidade [[1, 0], [0, 1]] multiplicada por uma matriz A dá...',
              ops: ['A própria A', 'Uma matriz de zeros', 'A transposta de A'],
              c: 0,
              exp: 'É o “1” da multiplicação de matrizes.'
            }
          ]
        },
        {
          id: 'mm10l3',
          titulo: 'Determinantes e sistemas',
          exs: [
            {
              t: 'texto',
              titulo: 'Um número que diz muito',
              blocos: [
                {
                  p: 'O determinante de uma matriz 2 × 2 [[a, b], [c, d]] é $$ad − bc$$. Ele diz se um sistema linear tem uma única solução: se o determinante é diferente de zero, tem.'
                },
                {
                  p: 'A regra de Cramer resolve o sistema $$ax + by = e$$ e $$cx + dy = f$$: $$x = (ed − bf)/D$$ e $$y = (af − ec)/D$$, com D o determinante.'
                },
                {
                  passos: [
                    '$$2x + y = 5$$ e $$x − y = 1$$',
                    'D = 2 × (−1) − 1 × 1 = −3',
                    '$$x = (5 × (−1) − 1 × 1)/(−3) = 2$$',
                    '$$y = (2 × 1 − 5 × 1)/(−3) = 1$$'
                  ]
                }
              ]
            },
            {
              t: 'numero',
              p: 'Qual é o determinante de [[{A}, {B}], [{C}, {D}]]?',
              r: '{= A * D - B * C }',
              exp: '{A} × {= pr(D) } − {= pr(B) } × {= pr(C) }.',
              vars: {
                A: { de: -5, ate: 9 },
                B: { de: -5, ate: 9 },
                C: { de: -5, ate: 9 },
                D: { de: -5, ate: 9 }
              }
            },
            {
              t: 'numero',
              p: 'Resolva o sistema $${A}x + {B}y = {= A * X + B * Y }$$ e $${C}x {= sn(D) }y = {= C * X + D * Y }$$. Quanto vale x?',
              r: '{X}',
              exp: 'O determinante do sistema é {= A * D - B * C }. Use Cramer ou isole uma letra.',
              vars: {
                A: { de: 2, ate: 5 },
                B: { de: 2, ate: 5 },
                C: { de: 2, ate: 5 },
                D: { de: -5, ate: -2 },
                X: { de: -5, ate: 8 },
                Y: { de: -5, ate: 8 }
              }
            },
            {
              t: 'numero',
              p: 'No mesmo tipo de sistema, $${A}x + {B}y = {= A * X + B * Y }$$ e $${C}x {= sn(D) }y = {= C * X + D * Y }$$, quanto vale y?',
              r: '{Y}',
              exp: 'Volte numa das equações com o x que você achou.',
              vars: {
                A: { de: 2, ate: 5 },
                B: { de: 2, ate: 5 },
                C: { de: 2, ate: 5 },
                D: { de: -5, ate: -2 },
                X: { de: -5, ate: 8 },
                Y: { de: -5, ate: 8 }
              }
            },
            {
              t: 'escolha',
              p: 'O sistema $$x + 2y = 3$$ e $$2x + 4y = 7$$ tem...',
              ops: ['Nenhuma solução', 'Uma solução', 'Infinitas soluções'],
              c: 0,
              exp: 'O determinante é 1 × 4 − 2 × 2 = 0. E a segunda equação é o dobro da primeira do lado esquerdo, mas não do direito: as retas são paralelas.'
            },
            {
              t: 'numero',
              p: 'Num estacionamento, {= C + M } veículos (carros e motos) somam {= 4 * C + 2 * M } rodas. Quantas motos há?',
              r: '{M}',
              exp: '$$c + m = {= C + M }$$ e $$4c + 2m = {= 4 * C + 2 * M }$$.',
              vars: { C: { de: 5, ate: 40 }, M: { de: 3, ate: 30 } }
            },
            {
              t: 'escolha',
              p: 'Se o determinante de um sistema 2 × 2 é diferente de zero, o sistema tem...',
              ops: ['Uma única solução', 'Nenhuma solução', 'Infinitas soluções'],
              c: 0,
              exp: 'É o caso das retas que se cruzam num ponto só.'
            }
          ]
        }
      ]
    }
  ]
});
