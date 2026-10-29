/* Trilha Livre · Matemática básica · Nível 3: Frações
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'mat-basica',
  n: 3,
  titulo: 'Frações',
  desc: 'Partes de um inteiro, frações equivalentes e as quatro operações com frações.',
  videos: [
    {
      titulo: 'Matemática Zero 2.0',
      canal: 'Nerckie',
      obs: 'aulas de frações: equivalência, simplificação e operações',
      url: 'https://www.youtube.com/playlist?list=PL6846F4C75FFBA3EC'
    },
    {
      titulo: 'Portal da Matemática',
      canal: 'OBMEP e IMPA',
      obs: '6º ano: frações, com vídeos e exercícios',
      url: 'https://portaldaobmep.impa.br/index.php/site/index?a=1'
    },
    {
      titulo: 'Gis com Giz Matemática',
      canal: 'Gis com Giz',
      obs: 'playlist de frações',
      url: 'https://www.youtube.com/c/GiscomGiz'
    }
  ],
  unidades: [
    {
      id: 'mbu5',
      titulo: 'O que é uma fração',
      conceito: '3/4',
      desc: 'Partes, equivalência e comparação.',
      licoes: [
        {
          id: 'mb3l1',
          titulo: 'Partes de um inteiro',
          exs: [
            {
              t: 'texto',
              titulo: 'Numerador e denominador',
              blocos: [
                {
                  p: 'Uma fração representa partes iguais de um inteiro. Em $$3/4$$, o 4 de baixo (denominador) diz em quantas partes iguais o inteiro foi dividido, e o 3 de cima (numerador) diz quantas partes pegamos.'
                },
                {
                  p: 'Lemos: meio, terço, quarto, quinto, sexto, sétimo, oitavo, nono e décimo. Acima de 10, usamos “avos”: $$5/12$$ é cinco doze avos.'
                },
                {
                  p: 'Fração de uma quantidade: para achar $$3/4$$ de 20, divida pelo denominador e multiplique pelo numerador. 20 ÷ 4 = 5, e 5 × 3 = 15.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Uma pizza foi cortada em 8 pedaços iguais e você comeu 3. Que fração da pizza você comeu?',
              ops: ['$$3/8$$', '$$8/3$$', '$$3/5$$'],
              c: 0,
              exp: 'O denominador é o total de partes (8); o numerador, as que você pegou (3).'
            },
            {
              t: 'escolha',
              p: 'Como se lê $$5/12$$?',
              ops: ['Cinco doze avos', 'Cinco doze', 'Doze quintos'],
              c: 0,
              exp: 'Com denominador maior que 10, usamos “avos”.'
            },
            {
              t: 'numero',
              p: 'Quanto é $${A}/{B}$$ de {= B * K }?',
              r: '{= A * K }',
              exp: 'Divida pelo denominador e multiplique pelo numerador: {= B * K } ÷ {B} = {K}, e {K} × {A} = {= A * K }.',
              vars: { B: { de: 2, ate: 9 }, A: { de: 1, ate: 8 }, K: { de: 2, ate: 15 } },
              se: 'A < B && mdc(A, B) === 1'
            },
            {
              t: 'numero',
              p: 'Numa turma de {= B * K } alunos, $${A}/{B}$$ são mulheres. Quantas mulheres há na turma?',
              r: '{= A * K }',
              exp: '{= B * K } ÷ {B} = {K}, e {K} × {A} = {= A * K }.',
              vars: { B: [3, 4, 5], A: [1, 2, 3, 4], K: { de: 4, ate: 10 } },
              se: 'A < B && mdc(A, B) === 1'
            },
            {
              t: 'numero',
              p: 'Um tanque de {= B * K } litros está com $${A}/{B}$$ da capacidade. Quantos litros faltam para encher?',
              r: '{= (B - A) * K }',
              exp: 'Falta $${= B - A }/{B}$$ do tanque: {= B * K } ÷ {B} × {= B - A }.',
              unidade: 'L',
              vars: { B: [4, 5, 8, 10], A: { de: 1, ate: 7 }, K: { de: 5, ate: 50, passo: 5 } },
              se: 'A < B && mdc(A, B) === 1'
            },
            {
              t: 'escolha',
              p: 'Que fração do dia são {H} horas?',
              ops: ['$${H}/24$$', '$$24/{H}$$', '$${H}/12$$'],
              c: 0,
              exp: 'O dia tem 24 horas: são {H} partes de 24.',
              vars: { H: [5, 7, 11, 13, 17] }
            }
          ]
        },
        {
          id: 'mb3l2',
          titulo: 'Frações equivalentes',
          exs: [
            {
              t: 'texto',
              titulo: 'O mesmo valor, outros números',
              blocos: [
                {
                  p: 'Multiplicar ou dividir o numerador e o denominador pelo mesmo número não muda o valor da fração: $$1/2 = 2/4 = 3/6$$. São frações equivalentes, como meia pizza cortada em mais pedaços.'
                },
                {
                  p: 'Simplificar é dividir os dois pelo mesmo número até não dar mais. A fração que não dá mais para simplificar é irredutível. O atalho é dividir os dois pelo MDC de uma vez: em $$18/24$$, o MDC é 6, e $$18/24 = 3/4$$.'
                },
                {
                  dica: 'Somar o mesmo número em cima e embaixo muda o valor: 1/2 não é igual a 2/3.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Simplifique $${= A * K }/{= B * K }$$ até a fração irredutível',
              r: '{A}/{B}',
              exp: 'Divida os dois pelo MDC, que é {K}.',
              fracao: true,
              vars: { A: { de: 1, ate: 9 }, B: { de: 2, ate: 12 }, K: { de: 2, ate: 9 } },
              se: 'A < B && mdc(A, B) === 1'
            },
            {
              t: 'escolha',
              p: 'Qual destas frações é equivalente a $$2/3$$?',
              ops: [
                '$${= 2 * K }/{= 3 * K }$$',
                '$${= 2 + K }/{= 3 + K }$$',
                '$${= 3 * K }/{= 2 * K }$$'
              ],
              c: 0,
              exp: 'Multiplique o numerador e o denominador pelo mesmo número. Somar não vale.',
              vars: { K: { de: 2, ate: 9 } }
            },
            {
              t: 'numero',
              p: 'Complete: $${A}/{B} = x/{= B * K }$$. Quanto vale x?',
              r: '{= A * K }',
              exp: 'O denominador foi multiplicado por {K}; o numerador também precisa ser.',
              vars: { A: { de: 1, ate: 8 }, B: { de: 2, ate: 9 }, K: { de: 2, ate: 9 } },
              se: 'A < B'
            },
            {
              t: 'escolha',
              p: '$$12/16$$ simplificada fica...',
              ops: ['$$3/4$$', '$$6/8$$', '$$2/3$$'],
              c: 0,
              exp: '6/8 ainda dá para simplificar. Dividindo direto pelo MDC, que é 4, chega-se a 3/4.'
            },
            {
              t: 'numero',
              p: 'Por qual número dá para dividir o numerador e o denominador de $${= A * K }/{= B * K }$$ para simplificar numa divisão só?',
              r: '{K}',
              exp: 'É o MDC de {= A * K } e {= B * K }.',
              vars: { A: { de: 1, ate: 9 }, B: { de: 2, ate: 12 }, K: { de: 2, ate: 9 } },
              se: 'A < B && mdc(A, B) === 1'
            },
            {
              t: 'escolha',
              p: 'Uma fração é irredutível quando...',
              ops: [
                'O MDC do numerador e do denominador é 1',
                'O numerador é 1',
                'O denominador é primo'
              ],
              c: 0,
              exp: '$$4/9$$ é irredutível e nem 4 nem 9 são primos: o que importa é não terem divisor comum.'
            }
          ]
        },
        {
          id: 'mb3l3',
          titulo: 'Comparar frações',
          exs: [
            {
              t: 'texto',
              titulo: 'Qual é maior?',
              blocos: [
                {
                  p: 'Com o mesmo denominador, a maior é a de maior numerador: $$5/7 > 3/7$$. Com o mesmo numerador, a maior é a de menor denominador: $$1/3 > 1/5$$, porque dividir em menos partes dá pedaços maiores.'
                },
                {
                  p: 'Com denominadores diferentes, deixe as frações com o mesmo denominador (o MMC) e compare os numeradores: $$2/3 = 10/15$$ e $$3/5 = 9/15$$, então $$2/3$$ é maior.'
                },
                {
                  p: 'Uma fração com numerador maior que o denominador vale mais que 1. Ela pode ser escrita como número misto: $$7/4$$ é 1 inteiro e $$3/4$$, ou $$1 3/4$$.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual é maior: $$1/{A}$$ ou $$1/{B}$$?',
              ops: ['$$1/{= Math.min(A, B) }$$', '$$1/{= Math.max(A, B) }$$', 'São iguais'],
              c: 0,
              exp: 'Com o mesmo numerador, pedaços maiores vêm de dividir em menos partes.',
              vars: { A: { de: 2, ate: 9 }, B: { de: 2, ate: 9 } },
              se: 'A !== B'
            },
            {
              t: 'escolha',
              p: 'Qual é maior: $$2/3$$ ou $$3/5$$?',
              ops: ['$$2/3$$', '$$3/5$$', 'São iguais'],
              c: 0,
              exp: 'Com denominador 15: $$2/3 = 10/15$$ e $$3/5 = 9/15$$.'
            },
            {
              t: 'escolha',
              p: 'Qual é maior: $${A}/{B}$$ ou $${C}/{D}$$?',
              ops: [
                '$${= A * D > C * B ? A : C }/{= A * D > C * B ? B : D }$$',
                '$${= A * D > C * B ? C : A }/{= A * D > C * B ? D : B }$$',
                'São iguais'
              ],
              c: 0,
              exp: 'Com o mesmo denominador, {= B * D }: $${A}/{B} = {= A * D }/{= B * D }$$ e $${C}/{D} = {= C * B }/{= B * D }$$.',
              vars: {
                A: { de: 1, ate: 6 },
                B: { de: 2, ate: 9 },
                C: { de: 1, ate: 6 },
                D: { de: 2, ate: 9 }
              },
              se: 'A < B && C < D && B !== D && A * D !== C * B'
            },
            {
              t: 'numero',
              p: 'Escreva $${= Q * B + A }/{B}$$ como número misto. Qual é a parte inteira?',
              r: '{Q}',
              exp: '{= Q * B + A } ÷ {B} dá {Q} e sobra {A}: $${Q} {A}/{B}$$.',
              vars: { B: { de: 3, ate: 9 }, A: { de: 1, ate: 8 }, Q: { de: 1, ate: 6 } },
              se: 'A < B'
            },
            {
              t: 'numero',
              p: 'Transforme $${Q} {A}/{B}$$ em fração imprópria, com denominador {B}. Qual é o numerador?',
              r: '{= Q * B + A }',
              exp: 'Cada inteiro tem {B} partes: {Q} × {B} + {A}.',
              vars: { B: { de: 3, ate: 9 }, A: { de: 1, ate: 8 }, Q: { de: 1, ate: 6 } },
              se: 'A < B'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem, da menor para a maior',
              lines: ['$$1/4$$', '$$1/3$$', '$$1/2$$', '$$3/4$$'],
              exp: 'Em decimais: 0,25; 0,33...; 0,5 e 0,75.'
            }
          ]
        }
      ]
    },
    {
      id: 'mbu6',
      titulo: 'Contas com frações',
      conceito: '½ + ⅓',
      desc: 'Somar, subtrair, multiplicar, dividir e resolver problemas.',
      licoes: [
        {
          id: 'mb3l4',
          titulo: 'Somar e subtrair frações',
          exs: [
            {
              t: 'texto',
              titulo: 'Só com o mesmo denominador',
              blocos: [
                {
                  p: 'Para somar ou subtrair frações com o mesmo denominador, faça a conta com os numeradores e mantenha o denominador: $$2/7 + 3/7 = 5/7$$.'
                },
                {
                  p: 'Com denominadores diferentes, primeiro troque as frações por equivalentes com o mesmo denominador, usando o MMC. Depois some e simplifique:'
                },
                {
                  passos: [
                    '$$1/6 + 1/4$$: o MMC de 6 e 4 é 12.',
                    '$$1/6 = 2/12$$ e $$1/4 = 3/12$$.',
                    '$$2/12 + 3/12 = 5/12$$.'
                  ]
                },
                {
                  dica: 'Somar numerador com numerador e denominador com denominador é o erro mais comum: $$1/2 + 1/3$$ não é $$2/5$$.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Calcule $${A}/{D} + {B}/{D}$$. Responda com a fração irredutível',
              r: '{= fr(A + B, D) }',
              exp: 'Mesmo denominador: some os numeradores, {A} + {B} = {= A + B }, e simplifique se der.',
              fracao: true,
              vars: { A: { de: 1, ate: 9 }, B: { de: 1, ate: 9 }, D: { de: 5, ate: 12 } },
              se: 'A < D && B < D && (A + B) % D !== 0'
            },
            {
              t: 'numero',
              p: 'Calcule $${A}/{B} + {C}/{D}$$. Responda com a fração irredutível',
              r: '{= fr(A * D + C * B, B * D) }',
              exp: 'Use um denominador comum, como {= mmc(B, D) }, troque as duas frações e some os numeradores.',
              fracao: true,
              vars: {
                A: { de: 1, ate: 5 },
                B: { de: 2, ate: 6 },
                C: { de: 1, ate: 5 },
                D: { de: 2, ate: 6 }
              },
              se: 'A < B && C < D && B !== D && (A * D + C * B) % (B * D) !== 0'
            },
            {
              t: 'numero',
              p: 'Calcule $${A}/{B} − {C}/{D}$$. Responda com a fração irredutível',
              r: '{= fr(A * D - C * B, B * D) }',
              exp: 'Denominador comum {= mmc(B, D) }, depois subtraia os numeradores.',
              fracao: true,
              vars: {
                A: { de: 1, ate: 5 },
                B: { de: 2, ate: 6 },
                C: { de: 1, ate: 5 },
                D: { de: 2, ate: 6 }
              },
              se: 'A < B && C < D && B !== D && A * D > C * B'
            },
            {
              t: 'escolha',
              p: 'Quanto é $$1/2 + 1/3$$?',
              ops: ['$$5/6$$', '$$2/5$$', '$$2/6$$'],
              c: 0,
              exp: 'Com denominador 6: $$3/6 + 2/6 = 5/6$$.'
            },
            {
              t: 'numero',
              p: 'Uma receita usa $${A}/{B}$$ xícara de açúcar e $${C}/{D}$$ xícara de leite. Quantas xícaras são, juntando os dois? (fração irredutível)',
              r: '{= fr(A * D + C * B, B * D) }',
              exp: 'Some as frações com um denominador comum.',
              fracao: true,
              vars: { A: [1, 2, 3], B: [2, 3, 4], C: [1, 3], D: [4, 8] },
              se: 'A < B && C < D && B !== D && (A * D + C * B) % (B * D) !== 0'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem os passos para calcular $$3/4 − 1/6$$',
              lines: [
                'Achar o MMC de 4 e 6: 12',
                'Trocar 3/4 por 9/12 e 1/6 por 2/12',
                'Subtrair os numeradores: 9 − 2 = 7',
                'Escrever o resultado: 7/12'
              ],
              exp: 'O denominador comum vem antes de qualquer conta com os numeradores.'
            }
          ]
        },
        {
          id: 'mb3l5',
          titulo: 'Multiplicar e dividir frações',
          exs: [
            {
              t: 'texto',
              titulo: 'Vezes e dividido com frações',
              blocos: [
                {
                  p: 'Para multiplicar, multiplique os numeradores entre si e os denominadores entre si: $$2/3 × 4/5 = 8/15$$. A palavra “de” vira vezes: a metade de $$3/4$$ é $$1/2 × 3/4 = 3/8$$.'
                },
                {
                  p: 'Para dividir, mantenha a primeira fração e multiplique pela inversa da segunda (vire a segunda de cabeça para baixo): $$2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6$$.'
                },
                {
                  dica: 'Dá para simplificar antes de multiplicar, cortando um número de cima com um de baixo que tenham divisor comum. A conta fica menor.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Calcule $${A}/{B} × {C}/{D}$$. Responda com a fração irredutível',
              r: '{= fr(A * C, B * D) }',
              exp: 'Numerador com numerador ({A} × {C}) e denominador com denominador ({B} × {D}). Depois simplifique.',
              fracao: true,
              vars: {
                A: { de: 1, ate: 6 },
                B: { de: 2, ate: 9 },
                C: { de: 1, ate: 6 },
                D: { de: 2, ate: 9 }
              },
              se: 'A < B && C < D && (A * C) % (B * D) !== 0'
            },
            {
              t: 'numero',
              p: 'Calcule $${A}/{B} ÷ {C}/{D}$$. Responda com a fração irredutível',
              r: '{= fr(A * D, B * C) }',
              exp: 'Multiplique $${A}/{B}$$ pela inversa, $${D}/{C}$$.',
              fracao: true,
              vars: {
                A: { de: 1, ate: 6 },
                B: { de: 2, ate: 9 },
                C: { de: 1, ate: 6 },
                D: { de: 2, ate: 9 }
              },
              se: 'A < B && C < D && (A * D) % (B * C) !== 0'
            },
            {
              t: 'escolha',
              p: 'Qual é o inverso de $$3/7$$?',
              ops: ['$$7/3$$', '−3/7', '$$3/7$$'],
              c: 0,
              exp: 'O inverso troca o numerador com o denominador. O produto de um número pelo seu inverso dá 1.'
            },
            {
              t: 'numero',
              p: 'Quanto é a metade de $${A}/{B}$$? (fração irredutível)',
              r: '{= fr(A, 2 * B) }',
              exp: 'A metade é $$1/2 × {A}/{B}$$.',
              fracao: true,
              vars: { A: [1, 3, 5, 7], B: { de: 2, ate: 9 } },
              se: 'A < B && mdc(A, B) === 1'
            },
            {
              t: 'numero',
              p: 'Uma garrafa tem $${A}/{B}$$ de litro de suco. Quantos copos de $$1/{= B * K }$$ de litro ela enche?',
              r: '{= A * K }',
              exp: 'Dividir por $$1/{= B * K }$$ é multiplicar por {= B * K }: $${A}/{B} × {= B * K }$$.',
              vars: { A: [1, 2, 3], B: [2, 4, 5], K: [2, 3, 4] },
              se: 'A < B && mdc(A, B) === 1'
            },
            {
              t: 'escolha',
              p: 'Dividir por $$1/2$$ é o mesmo que...',
              ops: ['Multiplicar por 2', 'Dividir por 2', 'Multiplicar por $$1/2$$'],
              c: 0,
              exp: 'Quantas metades cabem em 3 pizzas? 6. Dividir por 1/2 dobra.'
            }
          ]
        },
        {
          id: 'mb3l6',
          titulo: 'Problemas com frações',
          exs: [
            {
              t: 'texto',
              titulo: 'Achar a unidade',
              blocos: [
                {
                  p: 'Muitos problemas de fração se resolvem achando quanto vale uma parte. Se $$2/5$$ de um número é 30, cada quinto vale 15, e o número inteiro (5 quintos) é 75.'
                },
                {
                  p: 'Cuidado com “do que sobrou”: gastar $$1/2$$ e depois $$1/3$$ do que sobrou não é gastar $$1/2 + 1/3$$. O $$1/3$$ é da metade que sobrou, ou seja, $$1/6$$ do total.'
                },
                {
                  dica: 'Desenhe uma barra dividida em partes iguais. Muitos problemas ficam óbvios no desenho.'
                }
              ]
            },
            {
              t: 'numero',
              p: '$${A}/{B}$$ de um número é {= A * K }. Que número é esse?',
              r: '{= B * K }',
              exp: 'Se {A} partes valem {= A * K }, uma parte vale {K}. O inteiro tem {B} partes.',
              vars: { A: { de: 2, ate: 5 }, B: { de: 3, ate: 9 }, K: { de: 3, ate: 20 } },
              se: 'A < B && mdc(A, B) === 1'
            },
            {
              t: 'numero',
              p: 'Um livro tem {= B * K } páginas e Lucas já leu $${A}/{B}$$ dele. Quantas páginas faltam?',
              r: '{= (B - A) * K }',
              exp: 'Falta $${= B - A }/{B}$$ do livro.',
              vars: { A: { de: 1, ate: 4 }, B: [3, 4, 5, 6], K: { de: 20, ate: 60, passo: 2 } },
              se: 'A < B && mdc(A, B) === 1'
            },
            {
              t: 'numero',
              p: 'Carla gasta $$1/{B}$$ do salário com aluguel e $$1/{D}$$ com mercado. Que fração do salário sobra? (fração irredutível)',
              r: '{= fr(B * D - D - B, B * D) }',
              exp: 'Some o que ela gasta e tire de 1 inteiro.',
              fracao: true,
              vars: { B: [3, 4], D: [4, 5, 6] },
              se: 'B !== D'
            },
            {
              t: 'numero',
              p: 'Uma pessoa gastou $$1/{B}$$ do dinheiro que tinha e ficou com R$ {= (B - 1) * K }. Quanto tinha no começo?',
              r: '{= B * K }',
              exp: 'O que sobrou é $${= B - 1 }/{B}$$ do total. Então $$1/{B}$$ vale {K}.',
              prefixo: 'R$',
              vars: { B: [3, 4, 5], K: { de: 20, ate: 200, passo: 10 } }
            },
            {
              t: 'numero',
              p: 'De um tanque cheio, saiu $$1/{B}$$ da água e, depois, metade do que restou. Que fração do tanque ainda tem água? (fração irredutível)',
              r: '{= fr(B - 1, 2 * B) }',
              exp: 'Depois da primeira saída restam $${= B - 1 }/{B}$$; a metade disso é $${= B - 1 }/{= 2 * B }$$.',
              fracao: true,
              vars: { B: [3, 4, 5, 6] }
            },
            {
              t: 'escolha',
              p: 'Gastei metade do dinheiro e, depois, metade do que sobrou. Que fração do total eu gastei?',
              ops: ['$$3/4$$', '$$1/2$$', 'Tudo'],
              c: 0,
              exp: 'Primeiro $$1/2$$; depois a metade de $$1/2$$, que é $$1/4$$. Ao todo, $$3/4$$.'
            }
          ]
        }
      ]
    }
  ]
});
