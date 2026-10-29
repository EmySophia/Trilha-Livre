/* Trilha Livre · Python do zero · Nível 9: NumPy e gráficos
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'python',
  n: 9,
  titulo: 'NumPy e gráficos',
  desc: 'Contas com tabelas inteiras de números, sistemas lineares e gráficos de verdade, no próprio app.',
  videos: [
    {
      tipo: 'texto',
      titulo: 'Documentação do NumPy para iniciantes (em inglês)',
      canal: 'NumPy',
      url: 'https://numpy.org/doc/stable/user/absolute_beginners.html',
      obs: 'o guia oficial do básico'
    },
    {
      tipo: 'texto',
      titulo: 'Google Colab',
      canal: 'Google',
      url: 'https://colab.research.google.com/',
      obs: 'para usar NumPy e Matplotlib num caderno, de graça'
    }
  ],
  unidades: [
    {
      id: 'pyu17',
      titulo: 'NumPy',
      conceito: 'array',
      desc: 'Contas com vetores e matrizes.',
      licoes: [
        {
          id: 'pynp1',
          titulo: 'Arrays',
          exs: [
            {
              t: 'texto',
              titulo: 'Contas com tudo de uma vez',
              blocos: [
                {
                  p: 'O NumPy é a biblioteca de contas numéricas do Python. Quase toda a ciência e a engenharia feitas em Python usam ele. A peça principal é o array: uma tabela de números em que as contas valem para todos os itens de uma vez, sem laço.'
                },
                {
                  code: `import numpy as np

c = np.array([20, 25, 30])
f = c * 1.8 + 32
print(f)
print(np.arange(0, 10, 2))
print(np.linspace(0, 1, 5))`
                },
                {
                  p: '`np.arange` funciona como o range, mas devolve um array e aceita passo com ponto. `np.linspace(a, b, n)` dá n pontos igualmente espaçados de a até b, incluindo b.'
                },
                {
                  dica: 'Na primeira vez que um código usa NumPy, o app baixa a biblioteca, uns 3 MB. Depois ela fica guardada.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que `np.array([1, 2, 3]) * 2` dá?',
              ops: ['[2 4 6]', '[1, 2, 3, 1, 2, 3]', 'Erro'],
              c: 0,
              exp: 'Com array, a conta vale para cada item. Com lista, * repetiria a lista.'
            },
            {
              t: 'escolha',
              p: 'Quantos números `np.linspace(0, 1, {N})` gera?',
              ops: ['{N}', '{= N - 1 }', '{= N + 1 }'],
              c: 0,
              exp: 'O terceiro número é a quantidade de pontos.',
              vars: { N: { de: 3, ate: 11 } }
            },
            {
              t: 'complete',
              p: 'Complete o jeito comum de importar o NumPy',
              code: 'import numpy ___ np',
              bank: ['as', 'to', 'from', 'in'],
              c: ['as'],
              exp: 'O apelido np é usado no mundo inteiro.'
            },
            {
              t: 'codigo',
              p: 'Converta as temperaturas de Celsius para Fahrenheit com um array, sem laço, e mostre o resultado',
              start: `import numpy as np
c = np.array({L})
`,
              sol: `import numpy as np
c = np.array({L})
print(c * 1.8 + 32)`,
              dica: 'A conta c * 1.8 + 32 vale para o array inteiro.',
              exp: 'Sem laço e muito mais rápido em listas grandes.',
              vars: { L: ['[0, 10, 20, 30]', '[-5, 15, 35]', '[100, 37, 0]'] }
            },
            {
              t: 'codigo',
              p: 'Gere {N} pontos de 0 a {B} com linspace e mostre o array',
              start: `import numpy as np
`,
              sol: `import numpy as np
print(np.linspace(0, {B}, {N}))`,
              dica: 'np.linspace(início, fim, quantidade)',
              exp: 'linspace é o jeito mais comum de criar os pontos de um gráfico.',
              vars: { N: { de: 3, ate: 6 }, B: [1, 2, 10, 100] }
            },
            {
              t: 'codigo',
              p: 'Calcule a distância de cada ponto até a origem, com x e y em arrays, e mostre arredondada com 2 casas',
              start: `import numpy as np
x = np.array({X})
y = np.array({Y})
`,
              sol: `import numpy as np
x = np.array({X})
y = np.array({Y})
print(np.round(np.sqrt(x ** 2 + y ** 2), 2))`,
              dica: 'np.sqrt e np.round funcionam no array inteiro.',
              exp: 'É Pitágoras para vários pontos de uma vez.',
              vars: { X: ['[3, 1, 6]', '[1, 2, 2]'], Y: ['[4, 1, 8]', '[0, 2, 5]'] }
            }
          ]
        },
        {
          id: 'pynp2',
          titulo: 'Estatística e filtros',
          exs: [
            {
              t: 'texto',
              titulo: 'Resumir e filtrar dados',
              blocos: [
                {
                  p: 'Arrays têm métodos de estatística prontos e permitem filtrar com uma condição entre colchetes.'
                },
                {
                  code: `import numpy as np

pecas = np.array([10.1, 9.8, 10.4, 9.6, 10.0])
print(pecas.mean(), pecas.max(), pecas.argmax())
print(round(pecas.std(), 3))
print(pecas[pecas > 10])
print((pecas > 10).sum())`
                },
                {
                  p: '`argmax` dá a posição do maior valor. `pecas > 10` dá um array de True e False, e usar ele dentro dos colchetes pega só os itens True. Somar o array de True e False conta quantos são True.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que `np.array([4, 9, 2]).argmax()` dá?',
              ops: ['1', '9', '2'],
              c: 0,
              exp: 'argmax dá a posição, e não o valor.'
            },
            {
              t: 'complete',
              p: 'Complete para pegar só as medidas acima de 10',
              code: 'grandes = medidas[medidas ___ 10]',
              bank: ['>', '<', '==', '='],
              c: ['>'],
              exp: 'A condição vai dentro dos colchetes.'
            },
            {
              t: 'codigo',
              p: 'Mostre a média e o desvio padrão das medidas, os dois com 3 casas, um por linha',
              start: `import numpy as np
m = np.array({L})
`,
              sol: `import numpy as np
m = np.array({L})
print(round(m.mean(), 3))
print(round(m.std(), 3))`,
              dica: 'm.mean() e m.std(), com round(..., 3).',
              exp: 'O std do NumPy, por padrão, é o desvio da população; o do statistics.stdev é o da amostra.',
              vars: {
                L: [
                  '[10.1, 9.8, 10.4, 9.6, 10.0]',
                  '[5.02, 4.97, 5.00, 5.05]',
                  '[1.2, 1.5, 1.1, 1.4]'
                ]
              }
            },
            {
              t: 'codigo',
              p: 'Mostre quantas peças estão fora da faixa de 9.8 a 10.2 e, na linha de baixo, o array com elas',
              start: `import numpy as np
p = np.array({L})
`,
              sol: `import numpy as np
p = np.array({L})
fora = p[(p < 9.8) | (p > 10.2)]
print(len(fora))
print(fora)`,
              dica: 'Com arrays, o ou é | e cada condição vai entre parênteses.',
              exp: 'and e or não funcionam com arrays: use & e |.',
              vars: {
                L: [
                  '[10.0, 10.3, 9.9, 9.7, 10.1, 10.25]',
                  '[9.5, 10.5, 10.0]',
                  '[9.85, 10.21, 9.79, 10.0]'
                ]
              }
            },
            {
              t: 'codigo',
              p: 'Mostre em qual hora (posição no array, começando em 0) o consumo foi maior e qual foi o valor',
              start: `import numpy as np
consumo = np.array({L})
`,
              sol: `import numpy as np
consumo = np.array({L})
print(consumo.argmax())
print(consumo.max())`,
              dica: 'argmax para a posição, max para o valor.',
              exp: 'Achar o pico de consumo ajuda a dimensionar instalações elétricas.',
              vars: {
                L: ['[1.2, 1.5, 3.8, 2.1, 0.9]', '[5, 7, 6, 9, 8, 4]', '[0.3, 0.2, 0.8, 0.7]']
              }
            }
          ]
        },
        {
          id: 'pynp3',
          titulo: 'Matrizes e sistemas lineares',
          exs: [
            {
              t: 'texto',
              titulo: 'Resolvendo várias equações de uma vez',
              blocos: [
                {
                  p: 'Um sistema linear, como 2x + y = 5 e x − y = 1, vira uma matriz A com os coeficientes e um vetor b com os resultados. O NumPy resolve com `np.linalg.solve(A, b)`.'
                },
                {
                  code: `import numpy as np

A = np.array([[2, 1],
              [1, -1]])
b = np.array([5, 1])
x = np.linalg.solve(A, b)
print(x)
print(A @ x)`
                },
                {
                  p: 'O `@` multiplica matrizes. Multiplicar A pela solução tem que dar b: é um jeito de conferir. Sistemas assim aparecem em circuitos elétricos, treliças e balanços de massa.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Para que serve o `@` entre arrays?',
              ops: ['Multiplicar matrizes', 'Somar matrizes', 'Comparar matrizes'],
              c: 0,
              exp: 'O * multiplica item por item; o @ faz a multiplicação de matrizes.'
            },
            {
              t: 'complete',
              p: 'Complete para resolver o sistema A x = b',
              code: 'x = np.linalg.___(A, b)',
              bank: ['solve', 'inv', 'det', 'dot'],
              c: ['solve'],
              exp: 'solve é mais rápido e preciso do que calcular a inversa.'
            },
            {
              t: 'codigo',
              p: 'Resolva o sistema {A1}x + {B1}y = {= A1 * X + B1 * Y } e {A2}x − {= -B2 }y = {= A2 * X + B2 * Y } e mostre x e y arredondados com 2 casas',
              start: `import numpy as np
`,
              sol: `import numpy as np
A = np.array([[{A1}, {B1}], [{A2}, {B2}]])
b = np.array([{= A1 * X + B1 * Y }, {= A2 * X + B2 * Y }])
print(np.round(np.linalg.solve(A, b), 2))`,
              dica: 'Monte A com os coeficientes de x e y de cada equação, e b com os resultados.',
              exp: 'Cada vez que o exercício aparece, o sistema é outro.',
              vars: {
                A1: { de: 1, ate: 5 },
                B1: { de: 1, ate: 5 },
                A2: { de: 1, ate: 5 },
                B2: { de: -5, ate: -1 },
                X: { de: -5, ate: 5 },
                Y: { de: -5, ate: 5 }
              },
              se: 'X !== 0 && Y !== 0'
            },
            {
              t: 'codigo',
              p: 'Num circuito, as correntes satisfazem 10·i1 − 4·i2 = {V1} e −4·i1 + 8·i2 = {V2}. Mostre i1 e i2 com 3 casas',
              start: `import numpy as np
`,
              sol: `import numpy as np
A = np.array([[10, -4], [-4, 8]])
b = np.array([{V1}, {V2}])
print(np.round(np.linalg.solve(A, b), 3))`,
              dica: 'A = [[10, -4], [-4, 8]] e b = [{V1}, {V2}].',
              exp: 'É o método das malhas: cada equação vem de uma malha do circuito.',
              vars: { V1: { de: 5, ate: 24 }, V2: { de: 0, ate: 12 } }
            }
          ]
        }
      ]
    },
    {
      id: 'pyu18',
      titulo: 'Gráficos',
      conceito: 'plt.plot',
      desc: 'Matplotlib desenhando no app.',
      licoes: [
        {
          id: 'pynp4',
          titulo: 'Gráfico de linha',
          exs: [
            {
              t: 'texto',
              titulo: 'Matplotlib',
              blocos: [
                {
                  p: 'O Matplotlib é a biblioteca de gráficos mais usada em Python. O jeito mais simples: `plt.plot(x, y)`, títulos nos eixos e `plt.show()`. No app, o gráfico aparece como imagem embaixo da saída.'
                },
                {
                  code: `import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 10, 50)
plt.plot(x, np.sin(x), label="seno")
plt.plot(x, np.cos(x), label="cosseno")
plt.xlabel("x")
plt.ylabel("valor")
plt.title("Seno e cosseno")
plt.legend()
plt.grid(True)
plt.show()`
                },
                {
                  p: 'Cada `plt.plot` acrescenta uma linha. O `label` dá o nome que aparece na legenda, e `plt.grid(True)` põe a grade.'
                },
                {
                  dica: 'Na primeira vez, o app baixa o Matplotlib, uns 10 MB. Depois ele fica guardado.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que `plt.xlabel("Tempo (s)")` faz?',
              ops: ['Põe o título do eixo x', 'Muda os números do eixo', 'Desenha uma linha'],
              c: 0,
              exp: 'Sempre ponha a grandeza e a unidade nos eixos.'
            },
            {
              t: 'complete',
              p: 'Complete para mostrar a legenda com os labels das linhas',
              code: 'plt.___()',
              bank: ['legend', 'label', 'show', 'title'],
              c: ['legend'],
              exp: 'A legenda usa o label de cada plot.'
            },
            {
              t: 'codigo',
              p: 'Desenhe o gráfico de y = x² para x de −{A} a {A}, com 50 pontos, com os títulos dos eixos x e y. Mostre também o menor valor de y',
              start: `import numpy as np
import matplotlib.pyplot as plt
`,
              sol: `import numpy as np
import matplotlib.pyplot as plt
x = np.linspace(-{A}, {A}, 50)
y = x ** 2
plt.plot(x, y)
plt.xlabel("x")
plt.ylabel("y")
plt.show()
print(round(y.min(), 3))`,
              dica: 'x com linspace, y = x ** 2, plt.plot, os rótulos e plt.show().',
              exp: 'Com 50 pontos, o x = 0 não entra, por isso o menor y é um pouco maior que 0.',
              grafico: true,
              vars: { A: { de: 2, ate: 5 } }
            },
            {
              t: 'codigo',
              p: 'Desenhe a posição de um objeto em queda livre, y = {H} − 4.9·t², de t = 0 até tocar o chão, e mostre o tempo de queda com 2 casas',
              start: `import numpy as np
import matplotlib.pyplot as plt
altura = {H}
`,
              sol: `import numpy as np
import matplotlib.pyplot as plt
altura = {H}
t_queda = np.sqrt(altura / 4.9)
t = np.linspace(0, t_queda, 50)
plt.plot(t, altura - 4.9 * t ** 2)
plt.xlabel("Tempo (s)")
plt.ylabel("Altura (m)")
plt.show()
print(round(t_queda, 2))`,
              dica: 'O tempo de queda sai de altura − 4.9·t² = 0: t = raiz de altura / 4.9.',
              exp: 'Sem resistência do ar, o tempo de queda não depende da massa.',
              grafico: true,
              vars: { H: [5, 10, 20, 45, 80] }
            }
          ]
        },
        {
          id: 'pynp5',
          titulo: 'Barras e dispersão',
          exs: [
            {
              t: 'texto',
              titulo: 'Outros tipos de gráfico',
              blocos: [
                {
                  p: 'Para comparar categorias, use barras com `plt.bar`. Para ver a relação entre duas medidas, use pontos com `plt.scatter`. Para ver como os valores se distribuem, `plt.hist`.'
                },
                {
                  code: `import matplotlib.pyplot as plt

meses = ["jan", "fev", "mar"]
consumo = [210, 185, 240]
plt.bar(meses, consumo, color="tab:green")
plt.ylabel("Consumo (kWh)")
plt.title("Conta de luz")
plt.show()`
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual gráfico serve para comparar o consumo de cada mês?',
              ops: ['Barras (plt.bar)', 'Dispersão (plt.scatter)', 'Linha com 1000 pontos'],
              c: 0,
              exp: 'Categorias lado a lado pedem barras.'
            },
            {
              t: 'escolha',
              p: 'Qual gráfico mostra se duas medidas andam juntas, como altura e peso?',
              ops: ['Dispersão (plt.scatter)', 'Barras (plt.bar)', 'Pizza'],
              c: 0,
              exp: 'Cada ponto é um par de medidas.'
            },
            {
              t: 'codigo',
              p: 'Desenhe um gráfico de barras com a produção de cada máquina e mostre o nome da máquina que mais produziu',
              start: `import matplotlib.pyplot as plt
maquinas = ["torno", "fresa", "prensa"]
pecas = [{A}, {B}, {CC}]
`,
              sol: `import matplotlib.pyplot as plt
maquinas = ["torno", "fresa", "prensa"]
pecas = [{A}, {B}, {CC}]
plt.bar(maquinas, pecas)
plt.ylabel("Peças")
plt.show()
print(maquinas[pecas.index(max(pecas))])`,
              dica: 'plt.bar(maquinas, pecas). Para o nome, pecas.index(max(pecas)).',
              exp: 'O gráfico deixa a comparação visível na hora.',
              grafico: true,
              vars: {
                A: { de: 50, ate: 200, passo: 10 },
                B: { de: 50, ate: 200, passo: 10 },
                CC: { de: 50, ate: 200, passo: 10 }
              },
              se: 'A !== B && B !== CC && A !== CC'
            },
            {
              t: 'codigo',
              p: 'Desenhe a dispersão de horas de estudo × nota e mostre a correlação (np.corrcoef) com 2 casas',
              start: `import numpy as np
import matplotlib.pyplot as plt
horas = np.array([1, 2, 3, 4, 5, 6])
notas = np.array({L})
`,
              sol: `import numpy as np
import matplotlib.pyplot as plt
horas = np.array([1, 2, 3, 4, 5, 6])
notas = np.array({L})
plt.scatter(horas, notas)
plt.xlabel("Horas de estudo")
plt.ylabel("Nota")
plt.show()
print(round(np.corrcoef(horas, notas)[0, 1], 2))`,
              dica: 'plt.scatter(horas, notas) e np.corrcoef(horas, notas)[0, 1].',
              exp: 'Correlação perto de 1 quer dizer que as duas sobem juntas. Correlação não prova causa.',
              grafico: true,
              vars: { L: ['[4, 5, 5, 7, 8, 9]', '[6, 4, 7, 5, 8, 6]', '[3, 5, 6, 6, 8, 10]'] }
            }
          ]
        }
      ]
    }
  ]
});
