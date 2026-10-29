/* Trilha Livre · Matemática básica · Nível 6: Potências e raízes
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'mat-basica',
  n: 6,
  titulo: 'Potências e raízes',
  desc: 'Potências, suas propriedades, notação científica e raízes.',
  videos: [
    {
      titulo: 'Matemática Zero 2.0',
      canal: 'Nerckie',
      obs: 'aulas de potenciação e radiciação',
      url: 'https://www.youtube.com/playlist?list=PL6846F4C75FFBA3EC'
    },
    {
      titulo: 'Gis com Giz Matemática',
      canal: 'Gis com Giz',
      obs: 'playlists de potências, raízes e notação científica',
      url: 'https://www.youtube.com/c/GiscomGiz'
    },
    {
      titulo: 'Portal da Matemática',
      canal: 'OBMEP e IMPA',
      obs: '8º ano: potências e raízes',
      url: 'https://portaldaobmep.impa.br/index.php/site/index?a=1'
    }
  ],
  unidades: [
    {
      id: 'mbu11',
      titulo: 'Potências',
      conceito: 'xⁿ',
      desc: 'Multiplicações repetidas e a notação científica.',
      licoes: [
        {
          id: 'mb6l1',
          titulo: 'Potências',
          exs: [
            {
              t: 'texto',
              titulo: 'Multiplicar o mesmo número várias vezes',
              blocos: [
                {
                  p: 'Uma potência é uma multiplicação de fatores iguais: $$2^5 = 2 × 2 × 2 × 2 × 2 = 32$$. O 2 é a base e o 5 é o expoente, que diz quantas vezes a base aparece.'
                },
                {
                  p: 'Casos especiais: qualquer número (menos o zero) elevado a 0 dá 1, e elevado a 1 dá ele mesmo. Potências de 10 são 1 seguido de tantos zeros quanto o expoente: $$10^6 = 1.000.000$$.'
                },
                {
                  p: 'Com base negativa, os parênteses importam: $$(−3)^2 = 9$$, mas $$−3^2 = −9$$, porque a potência vem antes do sinal. Expoente par dá resultado positivo; ímpar mantém o sinal.'
                },
                { p: 'Expoente negativo vira o inverso: $$2^(−3) = 1/2^3 = 1/8$$.' }
              ]
            },
            {
              t: 'numero',
              p: 'Quanto é $${A}^{B}$$?',
              r: '{= A ** B }',
              exp: '{A} multiplicado por ele mesmo {B} vezes.',
              vars: { A: { de: 2, ate: 9 }, B: { de: 2, ate: 4 } },
              se: 'A ** B <= 10000'
            },
            {
              t: 'numero',
              p: 'Quanto é $$10^{B}$$?',
              r: '{= 10 ** B }',
              exp: '1 seguido de {B} zeros.',
              vars: { B: { de: 2, ate: 7 } }
            },
            {
              t: 'numero',
              p: 'Quanto é $$(−{A})^{B}$$?',
              r: '{= (-A) ** B }',
              exp: 'Expoente {= B % 2 === 0 ? "par: o resultado é positivo" : "ímpar: o sinal negativo continua" }.',
              vars: { A: { de: 2, ate: 6 }, B: { de: 2, ate: 5 } }
            },
            {
              t: 'escolha',
              p: 'Quanto é $${A}^0$$?',
              ops: ['1', '0', '{A}'],
              c: 0,
              exp: 'Todo número diferente de zero elevado a 0 dá 1.',
              vars: { A: { de: 2, ate: 99 } }
            },
            {
              t: 'escolha',
              p: 'Quanto é $$2^(−3)$$?',
              ops: ['$$1/8$$', '−8', '−6'],
              c: 0,
              exp: 'Expoente negativo é o inverso: $$1/2^3$$.'
            },
            {
              t: 'numero',
              p: 'Uma colônia de bactérias dobra a cada hora. Começando com {A} bactérias, quantas haverá depois de {H} horas?',
              r: '{= A * 2 ** H }',
              exp: 'Depois de {H} dobras: {A} × $$2^{H}$$.',
              vars: { A: [10, 50, 100, 300], H: { de: 3, ate: 10 } }
            }
          ]
        },
        {
          id: 'mb6l2',
          titulo: 'Propriedades das potências',
          exs: [
            {
              t: 'texto',
              titulo: 'Atalhos com a mesma base',
              blocos: [
                {
                  tabela: {
                    cab: ['Propriedade', 'Exemplo'],
                    codigo: [],
                    linhas: [
                      ['$$a^m × a^n = a^(m+n)$$', '$$2^3 × 2^4 = 2^7$$'],
                      ['$$a^m ÷ a^n = a^(m−n)$$', '$$5^6 ÷ 5^2 = 5^4$$'],
                      ['$$(a^m)^n = a^(m×n)$$', '$$(3^2)^3 = 3^6$$'],
                      ['$$(a × b)^n = a^n × b^n$$', '$$(2 × 5)^3 = 2^3 × 5^3$$']
                    ]
                  }
                },
                {
                  p: 'Essas regras só valem com a mesma base (nas duas primeiras) ou dentro do mesmo parêntese. $$2^3 + 2^4$$ não é $$2^7$$: com soma, não tem atalho.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Escreva $${A}^{M} × {A}^{K}$$ como uma potência de base {A}. Qual é o expoente?',
              r: '{= M + K }',
              exp: 'Multiplicação com a mesma base: some os expoentes.',
              vars: { A: { de: 2, ate: 9 }, M: { de: 2, ate: 9 }, K: { de: 2, ate: 9 } }
            },
            {
              t: 'numero',
              p: 'Escreva $${A}^{M} ÷ {A}^{K}$$ como uma potência de base {A}. Qual é o expoente?',
              r: '{= M - K }',
              exp: 'Divisão com a mesma base: subtraia os expoentes.',
              vars: { A: { de: 2, ate: 9 }, M: { de: 5, ate: 12 }, K: { de: 2, ate: 4 } }
            },
            {
              t: 'numero',
              p: 'Escreva $$({A}^{M})^{K}$$ como uma potência de base {A}. Qual é o expoente?',
              r: '{= M * K }',
              exp: 'Potência de potência: multiplique os expoentes.',
              vars: { A: { de: 2, ate: 9 }, M: { de: 2, ate: 5 }, K: { de: 2, ate: 5 } }
            },
            {
              t: 'escolha',
              p: '$$2^3 + 2^3$$ é igual a...',
              ops: ['$$2^4$$', '$$2^6$$', '$$4^6$$'],
              c: 0,
              exp: '$$2^3 + 2^3 = 2 × 2^3 = 2^4$$ = 16. Com soma, não se somam expoentes.'
            },
            {
              t: 'numero',
              p: 'Calcule $$2^{M} × 5^{M}$$ (dica: junte num parêntese só)',
              r: '{= 10 ** M }',
              exp: '$$2^{M} × 5^{M} = (2 × 5)^{M} = 10^{M}$$.',
              vars: { M: { de: 2, ate: 6 } }
            },
            {
              t: 'numero',
              p: 'Quanto é $$({A}^{M} × {A}^{K}) ÷ {A}^{= M + K - 2 }$$?',
              r: '{= A ** 2 }',
              exp: 'Some os expoentes de cima e subtraia o de baixo: sobra $${A}^2$$.',
              vars: { A: { de: 2, ate: 9 }, M: { de: 3, ate: 8 }, K: { de: 3, ate: 8 } }
            }
          ]
        },
        {
          id: 'mb6l3',
          titulo: 'Notação científica',
          exs: [
            {
              t: 'texto',
              titulo: 'Números muito grandes e muito pequenos',
              blocos: [
                {
                  p: 'A notação científica escreve um número como um valor de 1 até menos que 10, vezes uma potência de 10. A distância da Terra ao Sol, cerca de 150.000.000 km, fica $$1,5 × 10^8$$ km.'
                },
                {
                  p: 'Para números pequenos, o expoente é negativo. O diâmetro de um fio de cabelo, cerca de 0,00007 m, fica $$7 × 10^(−5)$$ m.'
                },
                {
                  passos: [
                    'Ande a vírgula até sobrar um só algarismo, diferente de zero, antes dela.',
                    'Conte quantas casas andou: esse é o expoente.',
                    'Andou para a esquerda (número grande): expoente positivo. Para a direita (número pequeno): negativo.'
                  ]
                },
                { dica: 'Na calculadora, $$1,5 × 10^8$$ aparece como 1.5E8 ou 1.5e8.' }
              ]
            },
            {
              t: 'numero',
              p: 'Escreva {= br(M * 10 ** K) } em notação científica: $$M × 10^n$$. Qual é o expoente n?',
              r: '{K}',
              exp: 'Ande a vírgula até sobrar um algarismo antes dela.',
              vars: { M: [1.5, 2.3, 3.8, 4.2, 6.7, 9.1], K: { de: 4, ate: 9 } }
            },
            {
              t: 'numero',
              p: 'Escreva {= br(M / 10 ** K) } em notação científica: $$M × 10^n$$. Qual é o expoente n?',
              r: '{= -K }',
              exp: 'Número menor que 1: o expoente é negativo. Conte as casas até o primeiro algarismo diferente de zero.',
              vars: { M: [2, 3, 5, 7, 8], K: { de: 2, ate: 6 } }
            },
            {
              t: 'numero',
              p: 'Quanto é $${= br(A) } × 10^{K}$$ escrito por extenso, sem potência?',
              r: '{= A * 10 ** K }',
              exp: 'Ande a vírgula {K} casas para a direita.',
              vars: { A: [2, 3, 4.5, 6, 7.2], K: { de: 2, ate: 5 } }
            },
            {
              t: 'escolha',
              p: 'Qual destes está em notação científica?',
              ops: ['$$3,2 × 10^5$$', '$$32 × 10^4$$', '$$0,32 × 10^6$$'],
              c: 0,
              exp: 'O número antes da potência precisa estar entre 1 e 10 (sem chegar a 10).'
            },
            {
              t: 'numero',
              p: 'Multiplique $$(2 × 10^{A}) × (3 × 10^{B})$$. O resultado é $$6 × 10^n$$. Quanto vale n?',
              r: '{= A + B }',
              exp: 'Multiplique os números (2 × 3) e some os expoentes.',
              vars: { A: { de: 2, ate: 9 }, B: { de: 2, ate: 9 } }
            }
          ]
        }
      ]
    },
    {
      id: 'mbu12',
      titulo: 'Raízes',
      conceito: '√',
      desc: 'Raiz quadrada, estimativa e raiz cúbica.',
      licoes: [
        {
          id: 'mb6l4',
          titulo: 'Raiz quadrada',
          exs: [
            {
              t: 'texto',
              titulo: 'O caminho de volta da potência',
              blocos: [
                {
                  p: 'A raiz quadrada de um número é o valor que, multiplicado por ele mesmo, dá o número: $$sqrt(49) = 7$$, porque $$7^2 = 49$$. Ela responde: qual é o lado de um quadrado com essa área?'
                },
                {
                  p: 'Os quadrados perfeitos são 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144... Para os outros números, a raiz não é exata e dá para estimar: $$sqrt(50)$$ está entre 7 e 8, mais perto de 7, porque 50 está mais perto de 49 do que de 64.'
                },
                {
                  dica: 'Não existe raiz quadrada real de número negativo: nenhum número multiplicado por ele mesmo dá negativo.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Quanto é $$sqrt({= A * A })$$?',
              r: '{A}',
              exp: '{A} × {A} = {= A * A }.',
              vars: { A: { de: 4, ate: 20 } }
            },
            {
              t: 'numero',
              p: 'Um terreno quadrado tem {= A * A } m² de área. Quanto mede cada lado?',
              r: '{A}',
              exp: 'O lado é a raiz quadrada da área.',
              unidade: 'm',
              vars: { A: { de: 6, ate: 30 } }
            },
            {
              t: 'escolha',
              p: '$$sqrt({N})$$ fica entre quais inteiros?',
              ops: [
                '{= Math.floor(Math.sqrt(N)) } e {= Math.floor(Math.sqrt(N)) + 1 }',
                '{= Math.floor(Math.sqrt(N)) - 1 } e {= Math.floor(Math.sqrt(N)) }',
                '{= Math.floor(N / 2) } e {= Math.floor(N / 2) + 1 }'
              ],
              c: 0,
              exp: '$${= Math.floor(Math.sqrt(N)) }^2 = {= Math.floor(Math.sqrt(N)) ** 2 }$$ e $${= Math.floor(Math.sqrt(N)) + 1 }^2 = {= (Math.floor(Math.sqrt(N)) + 1) ** 2 }$$.',
              vars: { N: { de: 20, ate: 140 } },
              se: 'Math.sqrt(N) % 1 !== 0 && Math.floor(N / 2) - 1 > Math.floor(Math.sqrt(N))'
            },
            {
              t: 'numero',
              p: 'Calcule $$sqrt({= A * A }) + sqrt({= B * B })$$',
              r: '{= A + B }',
              exp: 'Calcule cada raiz separada e some.',
              vars: { A: { de: 2, ate: 12 }, B: { de: 2, ate: 12 } }
            },
            {
              t: 'escolha',
              p: '$$sqrt(9 + 16)$$ é igual a...',
              ops: ['5', '7', '25'],
              c: 0,
              exp: 'Primeiro a soma, dentro da raiz: $$sqrt(25) = 5$$. A raiz de uma soma não é a soma das raízes.'
            },
            {
              t: 'numero',
              p: 'Calcule $$sqrt({N})$$ com 1 casa decimal',
              r: '{= Math.sqrt(N) }',
              exp: 'Ela fica entre {= Math.floor(Math.sqrt(N)) } e {= Math.floor(Math.sqrt(N)) + 1 }. Teste {= Math.floor(Math.sqrt(N)) },5 ao quadrado para saber de que lado está.',
              casas: 1,
              tol: 0.051,
              vars: { N: [2, 3, 5, 6, 7, 8, 10, 12, 15, 20] }
            }
          ]
        },
        {
          id: 'mb6l5',
          titulo: 'Simplificar raízes e raiz cúbica',
          exs: [
            {
              t: 'texto',
              titulo: 'Tirar fatores de dentro da raiz',
              blocos: [
                {
                  p: 'Como $$sqrt(a × b) = sqrt(a) × sqrt(b)$$, dá para tirar da raiz os quadrados perfeitos: $$sqrt(50) = sqrt(25 × 2) = 5 sqrt(2)$$.'
                },
                {
                  p: 'A raiz cúbica é o número que, elevado ao cubo, dá o valor: a raiz cúbica de 27 é 3, porque $$3^3 = 27$$. Ela responde: qual é a aresta de um cubo com esse volume? Os cubos perfeitos são 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000.'
                },
                {
                  p: 'Raiz também é potência com expoente fracionário: $$sqrt(a) = a^(1/2)$$.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Escreva $$sqrt({= K * K * R })$$ na forma $$a sqrt({R})$$. Quanto vale a?',
              r: '{K}',
              exp: '{= K * K * R } = {= K * K } × {R}, e $$sqrt({= K * K }) = {K}$$.',
              vars: { K: { de: 2, ate: 9 }, R: [2, 3, 5, 6, 7] }
            },
            {
              t: 'numero',
              p: 'Qual é a raiz cúbica de {= A ** 3 }?',
              r: '{A}',
              exp: '{A} × {A} × {A} = {= A ** 3 }.',
              vars: { A: { de: 2, ate: 10 } }
            },
            {
              t: 'numero',
              p: 'Uma caixa cúbica tem volume de {= A ** 3 } cm³. Quanto mede a aresta?',
              r: '{A}',
              exp: 'A aresta é a raiz cúbica do volume.',
              unidade: 'cm',
              vars: { A: { de: 3, ate: 12 } }
            },
            {
              t: 'escolha',
              p: '$$sqrt(2) × sqrt(8)$$ é igual a...',
              ops: ['4', '$$sqrt(10)$$', '16'],
              c: 0,
              exp: '$$sqrt(2 × 8) = sqrt(16) = 4$$.'
            },
            {
              t: 'numero',
              p: 'Quanto é $${= A * A }^(1/2)$$?',
              r: '{A}',
              exp: 'Expoente $$1/2$$ é a raiz quadrada.',
              vars: { A: { de: 3, ate: 15 } }
            }
          ]
        }
      ]
    }
  ]
});
