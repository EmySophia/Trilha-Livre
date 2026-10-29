/* Trilha Livre · Matemática básica · Nível 7: Equações
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'mat-basica',
  n: 7,
  titulo: 'Equações',
  desc: 'Letras no lugar de números, equações do 1º grau, sistemas e a equação do 2º grau.',
  videos: [
    {
      titulo: 'Matemática Zero 2.0',
      canal: 'Nerckie',
      obs: 'aulas de expressões algébricas e equações',
      url: 'https://www.youtube.com/playlist?list=PL6846F4C75FFBA3EC'
    },
    {
      titulo: 'Gis com Giz Matemática',
      canal: 'Gis com Giz',
      obs: 'playlists de equação do 1º grau, sistemas e Bhaskara',
      url: 'https://www.youtube.com/c/GiscomGiz'
    },
    {
      titulo: 'Portal da Matemática',
      canal: 'OBMEP e IMPA',
      obs: '7º e 9º anos: equações',
      url: 'https://portaldaobmep.impa.br/index.php/site/index?a=1'
    }
  ],
  unidades: [
    {
      id: 'mbu13',
      titulo: 'Equações do 1º grau',
      conceito: 'x',
      desc: 'Expressões com letras, equações e problemas.',
      licoes: [
        {
          id: 'mb7l1',
          titulo: 'Letras no lugar de números',
          exs: [
            {
              t: 'texto',
              titulo: 'Expressões algébricas',
              blocos: [
                {
                  p: 'Na álgebra, uma letra representa um número que pode variar ou que ainda não conhecemos. A expressão $$2x + 3$$ quer dizer “o dobro de um número, mais três”.'
                },
                {
                  p: 'O valor numérico de uma expressão é o que ela dá quando trocamos a letra por um número. Para $$x = 5$$: $$2 × 5 + 3 = 13$$.'
                },
                {
                  tabela: {
                    cab: ['Em palavras', 'Em álgebra'],
                    codigo: [],
                    linhas: [
                      ['o dobro de um número', '$$2x$$'],
                      ['a metade de um número', '$$x/2$$'],
                      ['um número mais 7', '$$x + 7$$'],
                      ['o quadrado de um número', '$$x^2$$'],
                      ['o consecutivo de um número', '$$x + 1$$']
                    ]
                  }
                },
                {
                  p: 'Termos com a mesma parte literal são semelhantes e podem ser somados: $$3x + 5x = 8x$$. Mas $$3x + 5$$ não junta: são termos diferentes.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Qual é o valor de $$2x + 3$$ quando $$x = {X}$$?',
              r: '{= 2 * X + 3 }',
              exp: 'Troque o x por {X}: 2 × {X} + 3.',
              vars: { X: { de: 2, ate: 15 } }
            },
            {
              t: 'numero',
              p: 'Qual é o valor de $${A}x − {B}$$ quando $$x = {X}$$?',
              r: '{= A * X - B }',
              exp: '{A} × {X} − {B}.',
              vars: { A: { de: 2, ate: 9 }, B: { de: 1, ate: 20 }, X: { de: -5, ate: 9 } },
              se: 'X !== 0'
            },
            {
              t: 'numero',
              p: 'Qual é o valor de $$x^2 + {A}x$$ quando $$x = {X}$$?',
              r: '{= X * X + A * X }',
              exp: '{X} ao quadrado, mais {A} vezes {X}.',
              vars: { A: { de: 2, ate: 6 }, X: { de: 2, ate: 8 } }
            },
            {
              t: 'escolha',
              p: 'Como se escreve “o triplo de um número, menos cinco”?',
              ops: ['$$3x − 5$$', '$$3(x − 5)$$', '$$x^3 − 5$$'],
              c: 0,
              exp: 'Primeiro o triplo, depois tira cinco. $$3(x − 5)$$ seria o triplo de “o número menos cinco”.'
            },
            {
              t: 'numero',
              p: 'Simplifique $${A}x + {B}x − {= cf(C, "x") }$$. Qual é o número que acompanha o x?',
              r: '{= A + B - C }',
              exp: 'Termos semelhantes: some e subtraia os números da frente.',
              vars: { A: { de: 2, ate: 9 }, B: { de: 2, ate: 9 }, C: { de: 1, ate: 9 } }
            },
            {
              t: 'numero',
              p: 'Um táxi cobra R$ {= br(B, 2) } de bandeirada mais R$ {= br(K, 2) } por quilômetro. A conta é $${= br(B, 2) } + {= br(K, 2) }x$$. Quanto custa uma corrida de {X} km?',
              r: '{= B + K * X }',
              exp: 'Troque o x por {X}.',
              prefixo: 'R$',
              casas: 2,
              vars: { B: [4.5, 5, 5.5, 6], K: [2.5, 2.8, 3, 3.2], X: { de: 3, ate: 25 } }
            }
          ]
        },
        {
          id: 'mb7l2',
          titulo: 'Equações do 1º grau',
          exs: [
            {
              t: 'texto',
              titulo: 'Uma balança em equilíbrio',
              blocos: [
                {
                  p: 'Uma equação é uma igualdade com um valor desconhecido. Pense numa balança equilibrada: o que você fizer de um lado, precisa fazer do outro, para continuar igual.'
                },
                {
                  passos: [
                    '$$3x + 5 = 20$$',
                    'Tire 5 dos dois lados: $$3x = 15$$',
                    'Divida os dois lados por 3: $$x = 5$$',
                    'Confira: $$3 × 5 + 5 = 20$$. Certo.'
                  ]
                },
                {
                  p: 'O atalho de “passar para o outro lado trocando a operação” é o mesmo raciocínio: o +5 passa como −5, e o 3 que multiplica passa dividindo.'
                },
                { dica: 'Sempre confira trocando o x pelo valor achado na equação original.' }
              ]
            },
            {
              t: 'numero',
              p: 'Resolva: $$x + {A} = {B}$$',
              r: '{= B - A }',
              exp: 'Tire {A} dos dois lados.',
              vars: { A: { de: 3, ate: 30 }, B: { de: 10, ate: 60 } }
            },
            {
              t: 'numero',
              p: 'Resolva: $${A}x = {= A * X }$$',
              r: '{X}',
              exp: 'Divida os dois lados por {A}.',
              vars: { A: { de: 2, ate: 12 }, X: { de: -9, ate: 15 } },
              se: 'X !== 0'
            },
            {
              t: 'numero',
              p: 'Resolva: $${A}x + {B} = {= A * X + B }$$',
              r: '{X}',
              exp: 'Tire {B} dos dois lados e depois divida por {A}.',
              vars: { A: { de: 2, ate: 9 }, B: { de: 1, ate: 20 }, X: { de: -6, ate: 12 } }
            },
            {
              t: 'numero',
              p: 'Resolva: $${A}x − {B} = {= cf(C, "x") } {= sn((A - C) * X - B) }$$',
              r: '{X}',
              exp: 'Junte os x de um lado e os números do outro: $${= cf(A - C, "x") } = {= (A - C) * X }$$.',
              vars: {
                A: { de: 4, ate: 9 },
                B: { de: 1, ate: 15 },
                C: { de: 1, ate: 3 },
                X: { de: -5, ate: 10 }
              }
            },
            {
              t: 'numero',
              p: 'Resolva: $$x/{A} + {B} = {= X / A + B }$$',
              r: '{X}',
              exp: 'Tire {B} dos dois lados e multiplique por {A}.',
              vars: { A: [2, 3, 4, 5], B: { de: 1, ate: 9 }, X: { de: -20, ate: 40 } },
              se: 'X % A === 0 && X !== 0'
            },
            {
              t: 'numero',
              p: 'Resolva: $${A}(x − {B}) = {= A * (X - B) }$$',
              r: '{X}',
              exp: 'Divida por {A} (ou aplique a distributiva) e depois some {B}.',
              vars: { A: { de: 2, ate: 6 }, B: { de: 1, ate: 9 }, X: { de: -5, ate: 15 } }
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem a resolução de $$5x − 4 = 2x + 11$$',
              lines: ['$$5x − 4 = 2x + 11$$', '$$5x − 2x = 11 + 4$$', '$$3x = 15$$', '$$x = 5$$'],
              exp: 'Letras de um lado, números do outro, e depois a divisão.'
            }
          ]
        },
        {
          id: 'mb7l3',
          titulo: 'Problemas com equações',
          exs: [
            {
              t: 'texto',
              titulo: 'Do texto para a equação',
              blocos: [
                {
                  p: 'Para resolver um problema com equação: chame de x o que você quer descobrir, escreva a equação que o texto descreve, resolva e confira no texto.'
                },
                {
                  p: 'Exemplo: “Somando a minha idade com o dobro dela, dá 87. Quantos anos eu tenho?” Fica $$x + 2x = 87$$, então $$3x = 87$$ e $$x = 29$$.'
                },
                {
                  dica: 'Num problema com duas coisas ligadas, como “João tem 5 a mais que Ana”, chame a menor de x e a outra de $$x + 5$$.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Pensei num número, multipliquei por {A} e somei {B}. Deu {= A * X + B }. Em que número pensei?',
              r: '{X}',
              exp: '$${A}x + {B} = {= A * X + B }$$.',
              vars: { A: { de: 2, ate: 7 }, B: { de: 3, ate: 20 }, X: { de: 3, ate: 20 } }
            },
            {
              t: 'numero',
              p: 'A soma de três números consecutivos é {= 3 * X + 3 }. Qual é o menor deles?',
              r: '{X}',
              exp: '$$x + (x + 1) + (x + 2) = {= 3 * X + 3 }$$.',
              vars: { X: { de: 5, ate: 60 } }
            },
            {
              t: 'numero',
              p: 'João tem {D} anos a mais que Ana, e a soma das idades é {= 2 * X + D }. Quantos anos tem Ana?',
              r: '{X}',
              exp: '$$x + (x + {D}) = {= 2 * X + D }$$.',
              unidade: 'anos',
              vars: { D: { de: 2, ate: 9 }, X: { de: 8, ate: 40 } }
            },
            {
              t: 'numero',
              p: 'Um plano de celular cobra R$ {F} por mês mais R$ {= br(K, 2) } por gigabyte extra. A conta veio R$ {= br(F + K * X, 2) }. Quantos gigabytes extras foram usados?',
              r: '{X}',
              exp: '$${F} + {= br(K, 2) }x = {= br(F + K * X, 2) }$$.',
              unidade: 'GB',
              vars: { F: [30, 40, 50], K: [5, 7.5, 10], X: { de: 1, ate: 12 } }
            },
            {
              t: 'numero',
              p: 'Um retângulo tem perímetro de {= 2 * (X + X + D) } cm, e o comprimento tem {D} cm a mais que a largura. Quanto mede a largura?',
              r: '{X}',
              exp: 'Perímetro = 2 × (largura + comprimento): $$2(x + x + {D}) = {= 2 * (2 * X + D) }$$.',
              unidade: 'cm',
              vars: { D: { de: 2, ate: 10 }, X: { de: 3, ate: 25 } }
            },
            {
              t: 'numero',
              p: 'Numa compra, {A} cadernos e uma mochila de R$ {M} custaram R$ {= A * X + M }. Quanto custou cada caderno?',
              r: '{X}',
              exp: '$${A}x + {M} = {= A * X + M }$$.',
              prefixo: 'R$',
              vars: { A: { de: 2, ate: 8 }, M: [60, 80, 95, 120], X: { de: 8, ate: 25 } }
            }
          ]
        }
      ]
    },
    {
      id: 'mbu14',
      titulo: 'Sistemas e 2º grau',
      conceito: 'x²',
      desc: 'Duas equações ao mesmo tempo e a fórmula de Bhaskara.',
      licoes: [
        {
          id: 'mb7l4',
          titulo: 'Sistemas de duas equações',
          exs: [
            {
              t: 'texto',
              titulo: 'Duas incógnitas, duas equações',
              blocos: [
                {
                  p: 'Quando há dois valores desconhecidos, são precisas duas equações. Exemplo: num estacionamento há 20 veículos, entre carros e motos, e 64 rodas. Quantos carros?'
                },
                { p: 'Com c carros e m motos: $$c + m = 20$$ e $$4c + 2m = 64$$.' },
                {
                  passos: [
                    'Isole uma letra na primeira: $$m = 20 − c$$.',
                    'Substitua na segunda: $$4c + 2(20 − c) = 64$$.',
                    'Resolva: $$2c + 40 = 64$$, então $$c = 12$$.',
                    'Volte na primeira: $$m = 20 − 12 = 8$$.'
                  ]
                },
                {
                  p: 'Esse é o método da substituição. Outro é o da adição: somar ou subtrair as equações para uma letra sumir.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Resolva o sistema $$x + y = {= X + Y }$$ e $$x − y = {= X - Y }$$. Quanto vale x?',
              r: '{X}',
              exp: 'Some as duas equações: $$2x = {= 2 * X }$$.',
              vars: { X: { de: 3, ate: 20 }, Y: { de: 1, ate: 15 } }
            },
            {
              t: 'numero',
              p: 'No mesmo tipo de sistema, $$x + y = {= X + Y }$$ e $$x − y = {= X - Y }$$, quanto vale y?',
              r: '{Y}',
              exp: 'Subtraia a segunda da primeira: $$2y = {= 2 * Y }$$.',
              vars: { X: { de: 3, ate: 20 }, Y: { de: 1, ate: 15 } }
            },
            {
              t: 'numero',
              p: 'Num estacionamento há {= C + M } veículos, entre carros e motos, e {= 4 * C + 2 * M } rodas. Quantos carros há?',
              r: '{C}',
              exp: '$$c + m = {= C + M }$$ e $$4c + 2m = {= 4 * C + 2 * M }$$.',
              vars: { C: { de: 3, ate: 30 }, M: { de: 2, ate: 20 } }
            },
            {
              t: 'numero',
              p: 'Uma lanchonete vende um suco e um salgado por R$ {= S + G }, e dois sucos e um salgado por R$ {= 2 * S + G }. Quanto custa o suco?',
              r: '{S}',
              exp: 'A diferença entre os dois pedidos é um suco.',
              prefixo: 'R$',
              vars: { S: { de: 4, ate: 12 }, G: { de: 5, ate: 15 } }
            },
            {
              t: 'numero',
              p: 'Num teste de {= A + B } questões, cada acerto vale {P} pontos e cada erro tira {Q}. Alguém fez {= P * A - Q * B } pontos respondendo tudo. Quantas acertou?',
              r: '{A}',
              exp: '$$a + e = {= A + B }$$ e $${P}a − {Q}e = {= P * A - Q * B }$$.',
              vars: { A: { de: 10, ate: 25 }, B: { de: 2, ate: 15 }, P: [3, 4, 5], Q: [1, 2] }
            },
            {
              t: 'escolha',
              p: 'Um sistema com as equações $$x + y = 10$$ e $$x + y = 12$$ tem quantas soluções?',
              ops: ['Nenhuma', 'Uma', 'Infinitas'],
              c: 0,
              exp: 'A mesma soma não pode dar 10 e 12 ao mesmo tempo.'
            }
          ]
        },
        {
          id: 'mb7l5',
          titulo: 'Equação do 2º grau',
          exs: [
            {
              t: 'texto',
              titulo: 'Quando o x aparece ao quadrado',
              blocos: [
                {
                  p: 'Uma equação do 2º grau tem a forma $$ax^2 + bx + c = 0$$, com a diferente de zero. Ela pode ter duas soluções (raízes), uma, ou nenhuma entre os números reais.'
                },
                {
                  p: 'A fórmula de Bhaskara resolve qualquer uma delas. Primeiro calcule o discriminante, $$Δ = b^2 − 4ac$$. Depois, $$x = (−b ± sqrt(Δ))/(2a)$$.'
                },
                {
                  tabela: {
                    cab: ['Δ', 'Raízes reais'],
                    codigo: [],
                    linhas: [
                      ['maior que 0', 'duas, diferentes'],
                      ['igual a 0', 'uma (duas iguais)'],
                      ['menor que 0', 'nenhuma']
                    ]
                  }
                },
                {
                  p: 'Exemplo: $$x^2 − 5x + 6 = 0$$. $$Δ = 25 − 24 = 1$$. $$x = (5 ± 1)/2$$: as raízes são 3 e 2.'
                },
                {
                  dica: 'Atalho com a = 1: as raízes somam −b e multiplicam c. Em $$x^2 − 5x + 6$$, dois números que somam 5 e multiplicam 6: 2 e 3.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Calcule o discriminante Δ de $$x^2 + {B}x + {C} = 0$$',
              r: '{= B * B - 4 * C }',
              exp: '$$Δ = b^2 − 4ac = {B}^2 − 4 × 1 × {C}$$.',
              vars: { B: { de: 2, ate: 12 }, C: { de: 1, ate: 20 } }
            },
            {
              t: 'numero',
              p: 'Qual é a maior raiz de $$x^2 − {= R1 + R2 }x + {= R1 * R2 } = 0$$?',
              r: '{= Math.max(R1, R2) }',
              exp: 'Procure dois números que somam {= R1 + R2 } e multiplicam {= R1 * R2 }, ou use Bhaskara.',
              vars: { R1: { de: 1, ate: 9 }, R2: { de: 1, ate: 12 } },
              se: 'R1 !== R2'
            },
            {
              t: 'numero',
              p: 'Qual é a menor raiz de $$x^2 − {= R1 + R2 }x + {= R1 * R2 } = 0$$?',
              r: '{= Math.min(R1, R2) }',
              exp: 'Soma {= R1 + R2 } e produto {= R1 * R2 }.',
              vars: { R1: { de: 1, ate: 9 }, R2: { de: 1, ate: 12 } },
              se: 'R1 !== R2'
            },
            {
              t: 'escolha',
              p: 'Quantas raízes reais tem $$x^2 + {B}x + {C} = 0$$?',
              ops: [
                '{= B * B - 4 * C > 0 ? "Duas" : B * B - 4 * C === 0 ? "Uma" : "Nenhuma" }',
                '{= B * B - 4 * C > 0 ? "Nenhuma" : "Duas" }',
                '{= B * B - 4 * C === 0 ? "Nenhuma" : "Uma" }'
              ],
              c: 0,
              exp: '$$Δ = {B}^2 − 4 × {C} = {= B * B - 4 * C }$$.',
              vars: { B: { de: 2, ate: 8 }, C: { de: 1, ate: 12 } }
            },
            {
              t: 'numero',
              p: 'Resolva $$x^2 = {= A * A }$$. Qual é a raiz positiva?',
              r: '{A}',
              exp: 'Os números que ao quadrado dão {= A * A } são {A} e −{A}.',
              vars: { A: { de: 2, ate: 15 } }
            },
            {
              t: 'numero',
              p: 'Um terreno retangular tem {D} m a mais de comprimento que de largura e área de {= X * (X + D) } m². Qual é a largura?',
              r: '{X}',
              exp: '$$x(x + {D}) = {= X * (X + D) }$$, ou $$x^2 + {D}x − {= X * (X + D) } = 0$$. Só a raiz positiva serve como medida.',
              unidade: 'm',
              vars: { D: { de: 2, ate: 8 }, X: { de: 4, ate: 20 } }
            }
          ]
        }
      ]
    }
  ]
});
