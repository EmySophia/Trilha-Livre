/* Trilha Livre · Matemática do ensino médio · Nível 3: Exponencial e logaritmo
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'mat-medio',
  n: 3,
  titulo: 'Exponencial e logaritmo',
  desc: 'Crescimento que se multiplica, meia-vida, juros compostos e logaritmos.',
  videos: [
    {
      titulo: 'Professor Ferretto',
      canal: 'Matemática com Ferretto',
      obs: 'playlists de função exponencial e de logaritmo',
      url: 'https://www.youtube.com/user/professorferretto'
    },
    {
      titulo: 'Matemática Rio',
      canal: 'Prof. Rafael Procopio',
      obs: 'aulas de logaritmo com as propriedades',
      url: 'https://www.youtube.com/user/matematicario'
    },
    {
      tipo: 'texto',
      titulo: 'Khan Academy em português',
      canal: 'Khan Academy',
      obs: 'exercícios de exponenciais e logaritmos',
      url: 'https://pt.khanacademy.org/'
    }
  ],
  unidades: [
    {
      id: 'mmu5',
      titulo: 'Exponencial',
      conceito: 'aˣ',
      desc: 'Crescimento, decaimento e equações exponenciais.',
      licoes: [
        {
          id: 'mm3l1',
          titulo: 'Crescer multiplicando',
          exs: [
            {
              t: 'texto',
              titulo: 'A função exponencial',
              blocos: [
                {
                  p: 'Na função afim, o y soma sempre o mesmo valor. Na exponencial, $$f(x) = a^x$$, o y é multiplicado sempre pelo mesmo fator. Com a > 1, cresce cada vez mais rápido; com 0 < a < 1, diminui cada vez mais devagar.'
                },
                {
                  plano: {
                    x: [-3, 4],
                    y: [0, 10],
                    f: [{ e: '2**x', nome: '2ˣ' }, { e: '0.5**x', nome: '(1/2)ˣ', em: -2.4 }],
                    alt: 'A curva de 2 elevado a x subindo e a de meio elevado a x descendo'
                  }
                },
                {
                  tabela: {
                    cab: ['Situação', 'Fórmula'],
                    codigo: [],
                    linhas: [
                      ['População que dobra a cada T anos', '$$P = P_0 × 2^(t/T)$$'],
                      ['Juros compostos', '$$M = C × (1 + i)^t$$'],
                      ['Meia-vida (radioatividade, remédios)', '$$m = m_0 × (1/2)^(t/T)$$']
                    ]
                  }
                },
                {
                  dica: 'Toda curva $$a^x$$ passa pelo ponto (0, 1), porque qualquer número (diferente de zero) elevado a 0 dá 1.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Uma população de {P} bactérias dobra a cada {T} horas. Quantas haverá depois de {= T * K } horas?',
              r: '{= P * 2 ** K }',
              exp: 'São {K} dobras: {P} × $$2^{K}$$.',
              vars: { P: [100, 300, 500, 1000], T: [2, 3, 4], K: { de: 2, ate: 6 } }
            },
            {
              t: 'numero',
              p: 'R$ {= br(C) } aplicados a {I}% ao mês, com juros compostos. Quanto haverá depois de {M} meses?',
              r: '{= C * (1 + I / 100) ** M }',
              exp: '$$M = {C} × (1 + {= br(I / 100) })^{M}$$.',
              prefixo: 'R$',
              casas: 2,
              vars: { C: [1000, 2000, 5000], I: [1, 2, 5, 10], M: [2, 3, 4] }
            },
            {
              t: 'numero',
              p: 'Um remédio tem meia-vida de {T} horas. De uma dose de {D} mg, quanto resta no corpo depois de {= T * K } horas?',
              r: '{= D / 2 ** K }',
              exp: 'A cada {T} horas, a quantidade cai pela metade: são {K} metades.',
              unidade: 'mg',
              vars: { D: [400, 500, 800, 1000], T: [4, 6, 8], K: { de: 1, ate: 4 } }
            },
            {
              t: 'escolha',
              p: 'Qual destas funções é decrescente?',
              ops: ['$$f(x) = (1/3)^x$$', '$$f(x) = 3^x$$', '$$f(x) = 10^x$$'],
              c: 0,
              exp: 'Com a base entre 0 e 1, cada passo multiplica por um número menor que 1.'
            },
            {
              t: 'escolha',
              p: 'Em que ponto toda função $$f(x) = a^x$$ corta o eixo y?',
              ops: ['(0, 1)', '(1, 0)', '(0, a)'],
              c: 0,
              exp: '$$a^0 = 1$$.'
            },
            {
              t: 'numero',
              p: 'A população de uma cidade cresce {I}% ao ano. Hoje são {= br(P) } habitantes. Quantos serão daqui a 2 anos?',
              r: '{= P * (1 + I / 100) ** 2 }',
              exp: 'Multiplique por {= br(1 + I / 100) } duas vezes.',
              vars: { P: [10000, 50000, 200000], I: [1, 2, 5, 10] }
            }
          ]
        },
        {
          id: 'mm3l2',
          titulo: 'Equações exponenciais',
          exs: [
            {
              t: 'texto',
              titulo: 'Igualar as bases',
              blocos: [
                {
                  p: 'Para resolver uma equação com o x no expoente, escreva os dois lados como potências da mesma base. Com as bases iguais, os expoentes também são iguais.'
                },
                { passos: ['$$2^x = 32$$', '$$32 = 2^5$$, então $$2^x = 2^5$$', '$$x = 5$$'] },
                {
                  passos: [
                    '$$4^x = 8$$',
                    '$$4 = 2^2$$ e $$8 = 2^3$$, então $$2^(2x) = 2^3$$',
                    '$$2x = 3$$, e $$x = 3/2$$'
                  ]
                }
              ]
            },
            {
              t: 'numero',
              p: 'Resolva $$2^x = {= 2 ** K }$$',
              r: '{K}',
              exp: '{= 2 ** K } é 2 multiplicado por ele mesmo {K} vezes.',
              vars: { K: { de: 2, ate: 10 } }
            },
            {
              t: 'numero',
              p: 'Resolva $$3^(x + {A}) = {= 3 ** K }$$',
              r: '{= K - A }',
              exp: '$${= 3 ** K } = 3^{K}$$, então x + {A} = {K}.',
              vars: { A: { de: 1, ate: 3 }, K: { de: 3, ate: 6 } }
            },
            {
              t: 'numero',
              p: 'Resolva $$5^x = 1/{= 5 ** K }$$',
              r: '{= -K }',
              exp: '$$1/5^{K} = 5^(−{K})$$.',
              vars: { K: { de: 1, ate: 4 } }
            },
            {
              t: 'numero',
              p: 'Resolva $$4^x = 8$$',
              r: '1.5',
              exp: 'Base 2 nos dois lados: $$2^(2x) = 2^3$$.'
            },
            {
              t: 'numero',
              p: 'Resolva $$9^x = 27$$',
              r: '1.5',
              exp: '$$9 = 3^2$$ e $$27 = 3^3$$: $$3^(2x) = 3^3$$.'
            },
            {
              t: 'numero',
              p: 'Uma cultura de células triplica a cada dia. Começando com {P}, em quantos dias chega a {= P * 3 ** K }?',
              r: '{K}',
              exp: '$${P} × 3^x = {= P * 3 ** K }$$, então $$3^x = {= 3 ** K }$$.',
              unidade: 'dias',
              vars: { P: [10, 50, 100], K: { de: 2, ate: 6 } }
            }
          ]
        }
      ]
    },
    {
      id: 'mmu6',
      titulo: 'Logaritmo',
      conceito: 'log',
      desc: 'O expoente que falta e suas propriedades.',
      licoes: [
        {
          id: 'mm3l3',
          titulo: 'O que é logaritmo',
          exs: [
            {
              t: 'texto',
              titulo: 'Achar o expoente',
              blocos: [
                {
                  p: 'O logaritmo responde: a que expoente devo elevar a base para chegar a um número? $$log_2 8 = 3$$, porque $$2^3 = 8$$. Em geral, $$log_b a = x$$ quer dizer $$b^x = a$$.'
                },
                {
                  p: 'Quando a base não aparece, ela é 10: $$log 1000 = 3$$, porque $$10^3 = 1000$$. Na calculadora, é a tecla log.'
                },
                {
                  tabela: {
                    cab: ['Valor', 'Por quê'],
                    codigo: [],
                    linhas: [
                      ['$$log_b 1 = 0$$', '$$b^0 = 1$$'],
                      ['$$log_b b = 1$$', '$$b^1 = b$$'],
                      ['$$log 10^k = k$$', 'a própria definição']
                    ]
                  }
                },
                {
                  dica: 'Só existe logaritmo de número positivo, com base positiva e diferente de 1.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Quanto é $$log_2 {= 2 ** K }$$?',
              r: '{K}',
              exp: 'Que expoente leva 2 até {= 2 ** K }?',
              vars: { K: { de: 2, ate: 10 } }
            },
            {
              t: 'numero',
              p: 'Quanto é $$log {= 10 ** K }$$ (base 10)?',
              r: '{K}',
              exp: 'Conte os zeros.',
              vars: { K: { de: 2, ate: 7 } }
            },
            {
              t: 'numero',
              p: 'Quanto é $$log_{B} {= B ** K }$$?',
              r: '{K}',
              exp: '$${B}^{K} = {= B ** K }$$.',
              vars: { B: [3, 4, 5, 6, 7], K: { de: 2, ate: 4 } }
            },
            {
              t: 'numero',
              p: 'Quanto é $$log 0,{= "0".repeat(K - 1) }1$$ (base 10)?',
              r: '{= -K }',
              exp: '0,{= "0".repeat(K - 1) }1 = $$10^(−{K})$$.',
              vars: { K: { de: 1, ate: 5 } }
            },
            {
              t: 'escolha',
              p: 'Quanto é $$log_{B} 1$$?',
              ops: ['0', '1', '{B}'],
              c: 0,
              exp: 'Qualquer base elevada a 0 dá 1.',
              vars: { B: [2, 3, 5, 10] }
            },
            {
              t: 'numero',
              p: 'Se $$log_2 x = {K}$$, quanto vale x?',
              r: '{= 2 ** K }',
              exp: 'Pela definição, $$x = 2^{K}$$.',
              vars: { K: { de: 2, ate: 10 } }
            }
          ]
        },
        {
          id: 'mm3l4',
          titulo: 'Propriedades e aplicações',
          exs: [
            {
              t: 'texto',
              titulo: 'Transformar multiplicações em somas',
              blocos: [
                {
                  tabela: {
                    cab: ['Propriedade', 'Exemplo'],
                    codigo: [],
                    linhas: [
                      ['$$log(a × b) = log a + log b$$', '$$log 6 = log 2 + log 3$$'],
                      ['$$log(a/b) = log a − log b$$', '$$log 5 = log 10 − log 2$$'],
                      ['$$log a^n = n × log a$$', '$$log 8 = 3 × log 2$$']
                    ]
                  }
                },
                {
                  p: 'As provas costumam dar $$log 2 ≈ 0,301$$ e $$log 3 ≈ 0,477$$. Com as propriedades, dá para calcular muitos outros.'
                },
                {
                  p: 'O logaritmo aparece onde os valores variam muito: no pH (pH = −log da concentração de H⁺), na escala Richter dos terremotos (cada ponto a mais é uma amplitude 10 vezes maior) e no tempo para um investimento dobrar.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Usando $$log 2 ≈ 0,301$$ e $$log 3 ≈ 0,477$$, quanto é $$log 6$$?',
              r: '0.778',
              exp: '$$log 6 = log(2 × 3) = log 2 + log 3$$.',
              casas: 3
            },
            {
              t: 'numero',
              p: 'Usando $$log 2 ≈ 0,301$$, quanto é $$log {= 2 ** K }$$?',
              r: '{= K * 0.301 }',
              exp: '$$log 2^{K} = {K} × log 2$$.',
              casas: 3,
              vars: { K: { de: 2, ate: 6 } }
            },
            {
              t: 'numero',
              p: 'Usando $$log 2 ≈ 0,301$$, quanto é $$log 5$$?',
              r: '0.699',
              exp: '$$log 5 = log(10/2) = log 10 − log 2 = 1 − 0,301$$.',
              casas: 3
            },
            {
              t: 'numero',
              p: 'Uma solução tem concentração de H⁺ igual a $$10^(−{K})$$ mol/L. Qual é o pH?',
              r: '{K}',
              exp: 'pH = −log($$10^(−{K})$$) = {K}.',
              vars: { K: { de: 1, ate: 13 } }
            },
            {
              t: 'numero',
              p: 'Um terremoto de magnitude {A} tem amplitude quantas vezes maior que um de magnitude {B}?',
              r: '{= 10 ** (A - B) }',
              exp: 'Cada ponto multiplica por 10: são {= A - B } pontos de diferença.',
              vars: { A: { de: 5, ate: 8 }, B: { de: 3, ate: 4 } }
            },
            {
              t: 'numero',
              p: 'Um investimento rende 10% ao ano. Usando $$log 2 ≈ 0,301$$ e $$log 1,1 ≈ 0,041$$, em quantos anos ele dobra, aproximadamente? (1 casa)',
              r: '7.3',
              exp: '$$1,1^t = 2$$, então $$t = log 2/log 1,1$$.',
              casas: 1,
              tol: 0.06
            }
          ]
        }
      ]
    }
  ]
});
