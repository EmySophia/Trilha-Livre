/* Trilha Livre · Python do zero · Nível 7: Python para engenharia
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'python',
  n: 7,
  titulo: 'Python para engenharia',
  desc: 'Fórmulas com unidades, tabelas, métodos numéricos, gráficos e um projeto de ensaio de tração.',
  videos: [
    {
      tipo: 'texto',
      titulo: 'Google Colab',
      canal: 'Google',
      obs: 'Python no navegador, de graça, com NumPy e Matplotlib prontos para usar',
      url: 'https://colab.research.google.com/'
    },
    {
      tipo: 'texto',
      titulo: 'Pense em Python',
      canal: 'Allen B. Downey, livro aberto',
      obs: 'capítulos sobre funções e iteração, para revisar',
      url: 'https://penseallen.github.io/PensePython2e/'
    },
    {
      tipo: 'texto',
      titulo: 'Scientific Computing with Python (em inglês)',
      canal: 'freeCodeCamp',
      obs: 'curso gratuito de Python para ciência',
      url: 'https://www.freecodecamp.org/learn/scientific-computing-with-python/'
    }
  ],
  unidades: [
    {
      id: 'pyu13',
      titulo: 'Contas de engenharia',
      conceito: 'σ = F/A',
      desc: 'Fórmulas, unidades e tabelas de resultados.',
      licoes: [
        {
          id: 'py7l1',
          titulo: 'Fórmulas e unidades',
          exs: [
            {
              t: 'texto',
              titulo: 'O computador não sabe de unidades',
              blocos: [
                {
                  p: 'Em engenharia, quase todo erro de conta é erro de unidade. O Python faz a conta com os números que você der, sem saber se é milímetro ou metro. Um bom hábito: converter tudo para um sistema só no começo e deixar a unidade no nome da variável.'
                },
                {
                  code: `import math

forca_n = 30_000           # 30 kN em newtons
diametro_mm = 20
area_mm2 = math.pi * diametro_mm ** 2 / 4
tensao_mpa = forca_n / area_mm2   # N/mm² é o mesmo que MPa
print(f"Área: {area_mm2:.2f} mm²")
print(f"Tensão: {tensao_mpa:.2f} MPa")`
                },
                {
                  p: 'No exemplo, a tensão normal numa barra redonda: força dividida pela área da seção. O `_` em `30_000` é só para facilitar a leitura do número.'
                },
                {
                  tabela: {
                    cab: ['Conversão', 'Fator'],
                    codigo: [],
                    linhas: [
                      ['1 kgf em N', '9.80665'],
                      ['1 polegada em mm', '25.4'],
                      ['1 MPa em N/mm²', '1'],
                      ['°C em K', 'somar 273.15'],
                      ['1 bar em kPa', '100']
                    ]
                  }
                },
                {
                  dica: 'Compare o resultado com a tensão admissível do material. Para um aço estrutural comum, o limite de escoamento fica na casa de 250 MPa.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Por que é bom pôr a unidade no nome da variável, como diametro_mm?',
              ops: [
                'Para não misturar unidades nas contas',
                'Porque o Python exige',
                'Para o programa rodar mais rápido'
              ],
              c: 0,
              exp: 'O Python não sabe de unidades: quem cuida disso é você.'
            },
            {
              t: 'codigo',
              p: 'Uma barra de 12 mm de diâmetro sofre 15 kN de tração. Mostre a tensão em MPa com 2 casas, no formato 123.45 MPa',
              start: `import math
forca_n = 15_000
diametro_mm = 12
`,
              saida: '132.63 MPa',
              sol: `import math
forca_n = 15_000
diametro_mm = 12
area_mm2 = math.pi * diametro_mm ** 2 / 4
print(f"{forca_n / area_mm2:.2f} MPa")`,
              dica: 'Área = pi * d² / 4, em mm². Força em N dividida por mm² dá MPa.',
              exp: 'Com d em mm e F em N, a tensão sai direto em MPa.'
            },
            {
              t: 'codigo',
              p: 'Converta a carga de 250 kgf para newtons e mostre com 1 casa',
              start: `carga_kgf = 250
`,
              saida: '2451.7',
              sol: `carga_kgf = 250
print(round(carga_kgf * 9.80665, 1))`,
              dica: 'Multiplique por 9.80665.',
              exp: 'kgf ainda aparece em placas de máquinas, mas o SI usa o newton.'
            }
          ]
        },
        {
          id: 'py7l2',
          titulo: 'Tabelas de resultados',
          exs: [
            {
              t: 'texto',
              titulo: 'Variar um parâmetro e ver o efeito',
              blocos: [
                {
                  p: 'Um uso muito comum do Python em engenharia: calcular a mesma fórmula para vários valores e montar uma tabela. Exemplo: a flecha (deslocamento da ponta) de uma viga engastada com uma carga na ponta é F · L³ / (3 · E · I).'
                },
                {
                  code: `E = 200e9          # aço, em Pa
b, h = 0.05, 0.10   # seção retangular, em m
I = b * h ** 3 / 12 # momento de inércia, em m⁴
F = 1000           # N
print("L (m) | flecha (mm)")
for L in [0.5, 1.0, 1.5, 2.0]:
    flecha = F * L ** 3 / (3 * E * I)
    print(f"{L:5.1f} | {flecha * 1000:8.3f}")`
                },
                {
                  p: 'Repare como a flecha cresce com o cubo do comprimento: dobrar o comprimento multiplica a flecha por 8. Uma tabela assim mostra isso na hora.'
                },
                {
                  p: 'Os formatos `:5.1f` e `:8.3f` fixam a largura das colunas, para os números ficarem alinhados.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Se o comprimento da viga dobra, a flecha...',
              ops: ['Fica 8 vezes maior', 'Dobra', 'Fica 4 vezes maior'],
              c: 0,
              exp: 'Ela depende de L³: 2³ = 8.'
            },
            {
              t: 'codigo',
              p: 'Mostre a potência de um motor (P = torque × rotação × 2π / 60, em W) para 1000, 2000 e 3000 rpm, com torque de 50 N·m, no formato 1000 rpm: 1234 W',
              start: `import math
torque = 50
`,
              saida: `1000 rpm: 5236 W
2000 rpm: 10472 W
3000 rpm: 15708 W`,
              sol: `import math
torque = 50
for rpm in [1000, 2000, 3000]:
    potencia = torque * rpm * 2 * math.pi / 60
    print(f"{rpm} rpm: {potencia:.0f} W")`,
              dica: 'Um for nas rotações e uma f-string com :.0f para não mostrar casas.',
              exp: 'Rotação em rpm vezes 2π / 60 dá a velocidade angular em rad/s.'
            }
          ]
        }
      ]
    },
    {
      id: 'pyu14',
      titulo: 'Métodos numéricos e gráficos',
      conceito: 'numérico',
      desc: 'Raízes, integrais, gráficos e um projeto.',
      licoes: [
        {
          id: 'py7l3',
          titulo: 'Achando raízes: bisseção',
          exs: [
            {
              t: 'texto',
              titulo: 'Quando a equação não tem fórmula',
              blocos: [
                {
                  p: 'Muitas equações de engenharia não têm uma fórmula para isolar o x. A saída é um método numérico: chegar perto da resposta passo a passo. O mais simples é a bisseção.'
                },
                {
                  passos: [
                    'Escolha um intervalo [a, b] em que f(a) e f(b) tenham sinais diferentes: a raiz está entre eles.',
                    'Calcule o meio, m = (a + b) / 2.',
                    'Se f(a) e f(m) têm sinais diferentes, a raiz está em [a, m]; senão, em [m, b].',
                    'Repita até o intervalo ficar menor que a precisão desejada.'
                  ]
                },
                {
                  code: `def f(x):
    return x ** 3 - x - 2

a, b = 1, 2
while b - a > 1e-6:
    m = (a + b) / 2
    if f(a) * f(m) < 0:
        b = m
    else:
        a = m
print(f"{(a + b) / 2:.4f}")`
                },
                {
                  p: 'A cada volta, o intervalo cai pela metade. Em 20 voltas, ele fica um milhão de vezes menor.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Por que f(a) e f(b) precisam ter sinais diferentes?',
              ops: [
                'Para garantir que a curva cruza o zero entre a e b',
                'Para o programa rodar mais rápido',
                'Não precisam'
              ],
              c: 0,
              exp: 'Uma função contínua que muda de sinal passa pelo zero.'
            },
            {
              t: 'codigo',
              p: 'Use a bisseção para achar a raiz de x² − 2 entre 1 e 2 (ela é a raiz quadrada de 2). Mostre com 4 casas',
              start: `def f(x):
    return x ** 2 - 2

a, b = 1, 2
`,
              saida: '1.4142',
              sol: `def f(x):
    return x ** 2 - 2

a, b = 1, 2
while b - a > 1e-6:
    m = (a + b) / 2
    if f(a) * f(m) < 0:
        b = m
    else:
        a = m
print(f"{(a + b) / 2:.4f}")`,
              dica: 'Copie o laço do exemplo, trocando só a função.',
              exp: 'O resultado bate com math.sqrt(2): 1.4142.'
            }
          ]
        },
        {
          id: 'py7l4',
          titulo: 'Integrais e derivadas numéricas',
          exs: [
            {
              t: 'texto',
              titulo: 'Área debaixo da curva com trapézios',
              blocos: [
                {
                  p: 'Para integrar numericamente, divida o intervalo em n pedaços e some a área de trapézios. Quanto mais pedaços, mais perto do valor exato.'
                },
                {
                  code: `import math

def trapezio(f, a, b, n):
    h = (b - a) / n
    soma = (f(a) + f(b)) / 2
    for i in range(1, n):
        soma += f(a + i * h)
    return soma * h

print(f"{trapezio(math.sin, 0, math.pi, 10):.4f}")
print(f"{trapezio(math.sin, 0, math.pi, 1000):.6f}")`
                },
                {
                  p: 'A integral exata do seno de 0 a π é 2. Com 10 trapézios, o erro já é pequeno; com 1000, quase some.'
                },
                {
                  p: 'A derivada numérica usa a mesma ideia: a inclinação entre dois pontos muito próximos, (f(x + h) − f(x − h)) / (2h).'
                },
                {
                  dica: 'Repare que a função f é passada como parâmetro para trapezio: em Python, funções são valores como quaisquer outros.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que acontece com o erro do método do trapézio quando n aumenta?',
              ops: ['Diminui', 'Aumenta', 'Fica igual'],
              c: 0,
              exp: 'Mais trapézios acompanham melhor a curva.'
            },
            {
              t: 'codigo',
              p: 'Use a regra do trapézio com 100 pedaços para calcular a integral de x² de 0 a 3 (o valor exato é 9). Mostre com 4 casas',
              start: `def trapezio(f, a, b, n):
    h = (b - a) / n
    soma = (f(a) + f(b)) / 2
    for i in range(1, n):
        soma += f(a + i * h)
    return soma * h

`,
              saida: '9.0004',
              sol: `def trapezio(f, a, b, n):
    h = (b - a) / n
    soma = (f(a) + f(b)) / 2
    for i in range(1, n):
        soma += f(a + i * h)
    return soma * h

def quadrado(x):
    return x ** 2

print(f"{trapezio(quadrado, 0, 3, 100):.4f}")`,
              dica: 'Crie uma função quadrado(x) e passe para trapezio com a=0, b=3 e n=100.',
              exp: 'O resultado passa um pouco de 9: para curvas que sobem cada vez mais, os trapézios ficam por cima.'
            },
            {
              t: 'codigo',
              p: 'Calcule a derivada numérica de x³ em x = 2 com h = 0.001 (o valor exato é 12). Mostre com 4 casas',
              start: `def f(x):
    return x ** 3

x = 2
h = 0.001
`,
              saida: '12.0000',
              sol: `def f(x):
    return x ** 3

x = 2
h = 0.001
print(f"{(f(x + h) - f(x - h)) / (2 * h):.4f}")`,
              dica: '(f(x + h) - f(x - h)) / (2 * h)',
              exp: 'A diferença central erra bem pouco: aqui, só a partir da sexta casa.'
            }
          ]
        },
        {
          id: 'py7l5',
          titulo: 'Gráficos',
          exs: [
            {
              t: 'texto',
              titulo: 'Do gráfico de texto ao Matplotlib',
              blocos: [
                {
                  p: 'Um gráfico de barras simples dá para fazer com texto, repetindo um caractere:'
                },
                {
                  code: `producao = {"jan": 42, "fev": 35, "mar": 51}
for mes, pecas in producao.items():
    print(f"{mes} {'█' * (pecas // 5)} {pecas}")`
                },
                {
                  p: 'Para gráficos de verdade, a biblioteca mais usada é o Matplotlib, quase sempre junto com o NumPy, que faz contas com tabelas de números inteiras de uma vez. Este é um exemplo de como fica:'
                },
                {
                  code: `import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 2, 50)          # 50 pontos de 0 a 2
flecha = 1000 * x ** 3 / (3 * 200e9 * 4.17e-6)
plt.plot(x, flecha * 1000)
plt.xlabel("Comprimento (m)")
plt.ylabel("Flecha (mm)")
plt.grid(True)
plt.show()`,
                  semTeste: true
                },
                {
                  p: 'Essas bibliotecas não rodam dentro do app, mas você pode usá-las de graça no Google Colab, que roda Python no navegador, inclusive no celular. Copie o exemplo, cole numa célula do Colab e aperte o play.'
                },
                {
                  leia: {
                    rotulo: 'Para praticar',
                    titulo: 'Abrir o Google Colab',
                    url: 'https://colab.research.google.com/',
                    obs: 'É grátis. Precisa de uma conta Google.'
                  }
                },
                {
                  dica: 'No computador, você instala com `pip install numpy matplotlib`. O VS Code e o Jupyter também são gratuitos.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual biblioteca é a mais usada para gráficos em Python?',
              ops: ['Matplotlib', 'math', 'csv'],
              c: 0,
              exp: 'Ela costuma andar junto com o NumPy.'
            },
            {
              t: 'codigo',
              p: 'Faça um gráfico de barras de texto: uma linha por máquina, com o nome, um # para cada 10 peças e o total',
              start: `producao = {"torno": 80, "fresa": 50, "prensa": 120}
`,
              saida: `torno ######## 80
fresa ##### 50
prensa ############ 120`,
              sol: `producao = {"torno": 80, "fresa": 50, "prensa": 120}
for maquina, pecas in producao.items():
    print(f"{maquina} {'#' * (pecas // 10)} {pecas}")`,
              dica: 'Para cada item, "#" * (pecas // 10).',
              exp: 'Gráficos de texto ajudam a ver a ordem de grandeza na hora, até num terminal.'
            }
          ]
        },
        {
          id: 'py7l6',
          titulo: 'Projeto: ensaio de tração',
          exs: [
            {
              t: 'texto',
              titulo: 'Do dado do laboratório ao módulo de elasticidade',
              blocos: [
                {
                  p: 'No ensaio de tração, um corpo de prova é puxado enquanto se mede a força e o alongamento. Com esses dados, calculamos a tensão (força dividida pela área) e a deformação (alongamento dividido pelo comprimento inicial).'
                },
                {
                  p: 'Na região elástica, tensão e deformação são proporcionais, e a razão entre elas é o módulo de elasticidade, E. Para os aços, ele fica perto de 200 GPa.'
                },
                {
                  code: `area_mm2 = 20       # área inicial da seção
comp_mm = 50        # comprimento inicial
forca_n = [2000, 4000, 6000]
along_mm = [0.025, 0.050, 0.075]
for F, dL in zip(forca_n, along_mm):
    tensao = F / area_mm2        # MPa
    deform = dL / comp_mm        # sem unidade
    print(f"{tensao:.0f} MPa  {deform:.4f}")`
                },
                {
                  dica: 'Num ensaio de verdade, use só os pontos da parte reta do gráfico, antes do escoamento.'
                }
              ]
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque as etapas do cálculo em ordem',
              lines: [
                'Ler a força e o alongamento de cada ponto',
                'Calcular a tensão: força dividida pela área',
                'Calcular a deformação: alongamento dividido pelo comprimento',
                'Dividir tensão por deformação para achar E',
                'Tirar a média de E dos pontos da região elástica'
              ],
              exp: 'Cada etapa usa o resultado da anterior.'
            },
            {
              t: 'codigo',
              p: 'Calcule E (em GPa) para cada ponto, mostre a média com 1 casa no formato E = 123.4 GPa',
              start: `area_mm2 = 20
comp_mm = 50
forca_n = [2000, 4000, 6000, 8000]
along_mm = [0.025, 0.051, 0.074, 0.100]
`,
              saida: 'E = 199.7 GPa',
              sol: `area_mm2 = 20
comp_mm = 50
forca_n = [2000, 4000, 6000, 8000]
along_mm = [0.025, 0.051, 0.074, 0.100]
modulos = []
for F, dL in zip(forca_n, along_mm):
    tensao = F / area_mm2
    deform = dL / comp_mm
    modulos.append(tensao / deform / 1000)
print(f"E = {sum(modulos) / len(modulos):.1f} GPa")`,
              dica: 'tensao / deform dá MPa; divida por 1000 para GPa. Guarde numa lista e tire a média.',
              exp: 'Pequenas diferenças entre os pontos são normais: medidas reais têm ruído.'
            },
            {
              t: 'codigo',
              p: 'Agora escreva a função modulo_elasticidade(forcas, alongamentos, area, comprimento), que devolve a média de E em GPa, e teste com os dados',
              start: `def modulo_elasticidade(forcas, alongamentos, area, comprimento):
    pass

print(round(modulo_elasticidade([1000, 2000], [0.0125, 0.025], 20, 50), 1))
print(round(modulo_elasticidade([300, 600, 900], [0.11, 0.22, 0.33], 10, 50), 1))
`,
              saida: `200.0
13.6`,
              sol: `def modulo_elasticidade(forcas, alongamentos, area, comprimento):
    modulos = []
    for F, dL in zip(forcas, alongamentos):
        modulos.append((F / area) / (dL / comprimento) / 1000)
    return sum(modulos) / len(modulos)

print(round(modulo_elasticidade([1000, 2000], [0.0125, 0.025], 20, 50), 1))
print(round(modulo_elasticidade([300, 600, 900], [0.11, 0.22, 0.33], 10, 50), 1))`,
              dica: 'Mesma conta do exercício anterior, dentro da função, com return.',
              exp: 'O primeiro resultado parece aço; o segundo, com E bem menor, parece um polímero.'
            }
          ]
        }
      ]
    }
  ]
});
