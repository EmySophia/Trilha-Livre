/* Trilha Livre · Python do zero · Nível 10: Python para engenharia
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'python',
  n: 10,
  titulo: 'Python para engenharia',
  desc: 'Fórmulas com unidades, dimensionamento, métodos numéricos, equações diferenciais e gráficos de engenharia.',
  videos: [
    {
      tipo: 'texto',
      titulo: 'Google Colab',
      canal: 'Google',
      url: 'https://colab.research.google.com/',
      obs: 'para rodar os mesmos códigos num caderno, com arquivos grandes e mais memória'
    },
    {
      tipo: 'texto',
      titulo: 'Scientific Computing with Python (em inglês)',
      canal: 'freeCodeCamp',
      url: 'https://www.freecodecamp.org/learn/scientific-computing-with-python/',
      obs: 'curso gratuito de Python para ciência'
    },
    {
      tipo: 'texto',
      titulo: 'Pense em Python',
      canal: 'Allen B. Downey, livro aberto',
      obs: 'capítulos sobre funções e iteração, para revisar',
      url: 'https://penseallen.github.io/PensePython2e/'
    }
  ],
  unidades: [
    {
      id: 'pyu13',
      titulo: 'Contas de engenharia',
      conceito: 'σ = F/A',
      desc: 'Fórmulas, unidades, tabelas e dimensionamento.',
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
              t: 'escolha',
              p: 'Uma força em N dividida por uma área em mm² dá a tensão em...',
              ops: ['MPa', 'Pa', 'kPa'],
              c: 0,
              exp: '1 N/mm² é igual a 1 MPa. Por isso é tão comum fazer as contas em N e mm.'
            },
            {
              t: 'complete',
              p: 'Complete a área da seção circular a partir do diâmetro',
              code: 'area = math.pi * d ** 2 / ___',
              bank: ['4', '2', 'math.pi', '3'],
              c: ['4'],
              exp: 'π·d²/4 é o mesmo que π·r².'
            },
            {
              t: 'codigo',
              p: 'Uma barra de {D} mm de diâmetro sofre {F} kN de tração. Mostre a tensão em MPa com 2 casas, no formato 123.45 MPa',
              start: `import math
forca_kn = {F}
diametro_mm = {D}
`,
              sol: `import math
forca_kn = {F}
diametro_mm = {D}
area_mm2 = math.pi * diametro_mm ** 2 / 4
print(f"{forca_kn * 1000 / area_mm2:.2f} MPa")`,
              dica: 'Passe a força para N (vezes 1000) e divida pela área em mm², que é π · d² / 4.',
              exp: 'Com a força em N e a área em mm², a tensão sai direto em MPa.',
              vars: { D: { de: 8, ate: 32, passo: 2 }, F: { de: 5, ate: 60, passo: 5 } }
            },
            {
              t: 'codigo',
              p: 'Converta a carga de {KGF} kgf para newtons e mostre com 1 casa',
              start: `carga_kgf = {KGF}
`,
              sol: `carga_kgf = {KGF}
print(round(carga_kgf * 9.80665, 1))`,
              dica: 'Multiplique por 9.80665.',
              exp: 'kgf ainda aparece em placas de máquinas, mas o SI usa o newton.',
              vars: { KGF: { de: 50, ate: 2000, passo: 50 } }
            },
            {
              t: 'codigo',
              p: 'Um trilho de aço de {L} m esquenta de {T1} °C para {T2} °C. Mostre quanto ele aumenta, em mm, com 2 casas (ΔL = α · L · ΔT, com α = 12e-6 por °C)',
              start: `alfa = 12e-6
comprimento_m = {L}
`,
              sol: `alfa = 12e-6
comprimento_m = {L}
delta_t = {T2} - {T1}
print(round(alfa * comprimento_m * delta_t * 1000, 2))`,
              dica: 'ΔT = T2 − T1. A conta dá metros: multiplique por 1000 para ter milímetros.',
              exp: 'É por isso que trilhos, pontes e pisos grandes têm juntas de dilatação.',
              vars: { L: [12, 18, 24, 36], T1: { de: 10, ate: 25 }, T2: { de: 40, ate: 60 } }
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
              t: 'escolha',
              p: 'O que o formato :8.3f faz com o número?',
              ops: [
                'Ocupa 8 caracteres, com 3 casas decimais',
                'Mostra 8 casas decimais',
                'Multiplica o número por 8'
              ],
              c: 0,
              exp: 'Com largura fixa, as colunas ficam alinhadas.'
            },
            {
              t: 'codigo',
              p: 'Mostre a potência de um motor (P = torque × rotação × 2π / 60, em W) para 1000, 2000 e 3000 rpm, com torque de {TQ} N·m, no formato 1000 rpm: 1234 W',
              start: `import math
torque = {TQ}
`,
              sol: `import math
torque = {TQ}
for rpm in [1000, 2000, 3000]:
    potencia = torque * rpm * 2 * math.pi / 60
    print(f"{rpm} rpm: {potencia:.0f} W")`,
              dica: 'Um for nas rotações e uma f-string com :.0f para não mostrar casas.',
              exp: 'Rotação em rpm vezes 2π / 60 dá a velocidade angular em rad/s.',
              vars: { TQ: { de: 20, ate: 120, passo: 10 } }
            },
            {
              t: 'codigo',
              p: 'Monte a tabela da flecha da viga do exemplo, agora com uma força de {F} N, para L = 0.5, 1.0, 1.5 e 2.0 m, com o mesmo cabeçalho e os mesmos formatos',
              start: `E = 200e9
I = 0.05 * 0.10 ** 3 / 12
forca = {F}
`,
              sol: `E = 200e9
I = 0.05 * 0.10 ** 3 / 12
forca = {F}
print("L (m) | flecha (mm)")
for L in [0.5, 1.0, 1.5, 2.0]:
    flecha = forca * L ** 3 / (3 * E * I)
    print(f"{L:5.1f} | {flecha * 1000:8.3f}")`,
              dica: 'Copie o laço do exemplo, usando a variável forca.',
              exp: 'De 1 para 2 m, a flecha fica 8 vezes maior, seja qual for a força.',
              vars: { F: { de: 500, ate: 5000, passo: 500 } }
            },
            {
              t: 'codigo',
              p: 'Pela lei de Ohm (I = V / R) e pela potência (P = V · I), mostre a corrente e a potência de cada resistor ligado em {V} V, no formato 100 Ω: 0.120 A, 14.40 W',
              start: `tensao = {V}
resistores = [100, 220, 470, 1000]
`,
              sol: `tensao = {V}
resistores = [100, 220, 470, 1000]
for r in resistores:
    i = tensao / r
    print(f"{r} Ω: {i:.3f} A, {tensao * i:.2f} W")`,
              dica: 'Para cada r: i = tensao / r, e a potência é tensao * i.',
              exp: 'Quanto menor o resistor, mais corrente passa e mais ele esquenta.',
              vars: { V: [5, 12, 24, 127, 220] }
            }
          ]
        },
        {
          id: 'py7l7',
          titulo: 'Dimensionamento: escolher a peça',
          exs: [
            {
              t: 'texto',
              titulo: 'A menor peça que aguenta',
              blocos: [
                {
                  p: 'Dimensionar é escolher o tamanho de uma peça para ela aguentar a carga com folga. Na prática, a escolha é entre os tamanhos que existem para comprar: o programa testa um por um, do menor para o maior, e para no primeiro que serve.'
                },
                {
                  code: `import math

forca_n = 40_000
admissivel_mpa = 150
diametros_mm = [8, 10, 12.5, 16, 20, 25]
for d in diametros_mm:
    tensao = forca_n / (math.pi * d ** 2 / 4)
    if tensao <= admissivel_mpa:
        print(f"Use {d} mm: {tensao:.1f} MPa")
        break
else:
    print("Nenhum diâmetro serve")`
                },
                {
                  p: 'A tensão admissível já inclui um coeficiente de segurança: é a tensão de escoamento do material dividida por um número maior que 1. O `else` de um `for` roda só se o laço terminar sem `break`, ou seja, quando nenhum tamanho serviu.'
                },
                {
                  dica: 'Os diâmetros do exemplo são bitolas comerciais de barras de aço, em mm.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Quando o else de um for roda?',
              ops: [
                'Quando o laço termina sem passar por um break',
                'Sempre, depois do laço',
                'Quando dá erro'
              ],
              c: 0,
              exp: 'É um jeito limpo de tratar o caso de não achar nada.'
            },
            {
              t: 'escolha',
              p: 'Escoamento de {FY} MPa e coeficiente de segurança {CS}. Qual a tensão admissível?',
              ops: [
                '{= fix(FY / CS, 1) } MPa',
                '{= fix(FY * CS, 1) } MPa',
                '{= fix(FY - CS, 1) } MPa'
              ],
              c: 0,
              exp: 'Admissível = escoamento dividido pelo coeficiente.',
              vars: { FY: [250, 345, 500], CS: [1.5, 2, 2.5] }
            },
            {
              t: 'codigo',
              p: 'Escolha o menor diâmetro que aguenta {F} kN com tensão admissível de {ADM} MPa. Mostre no formato Use 16 mm: 123.4 MPa, ou Nenhum diâmetro serve',
              start: `import math
forca_n = {F} * 1000
admissivel_mpa = {ADM}
diametros_mm = [8, 10, 12.5, 16, 20, 25, 32]
`,
              sol: `import math
forca_n = {F} * 1000
admissivel_mpa = {ADM}
diametros_mm = [8, 10, 12.5, 16, 20, 25, 32]
for d in diametros_mm:
    tensao = forca_n / (math.pi * d ** 2 / 4)
    if tensao <= admissivel_mpa:
        print(f"Use {d} mm: {tensao:.1f} MPa")
        break
else:
    print("Nenhum diâmetro serve")`,
              dica: 'Percorra a lista, calcule a tensão e dê break no primeiro que servir. Use o else do for para quando nenhum servir.',
              exp: 'Testar do menor para o maior garante a peça mais leve que aguenta.',
              vars: { F: { de: 5, ate: 150, passo: 5 }, ADM: [100, 150, 200] }
            },
            {
              t: 'codigo',
              p: 'Escreva tensao_admissivel(escoamento, coef) e use para escolher a menor espessura de chapa, com 50 mm de largura, que aguenta {F} kN. O aço tem escoamento de {FY} MPa e o coeficiente é 2. Mostre a espessura em mm',
              start: `def tensao_admissivel(escoamento, coef):
    pass

espessuras_mm = [3, 4.75, 6.3, 8, 9.5, 12.5, 16]
largura_mm = 50
forca_n = {F} * 1000
`,
              sol: `def tensao_admissivel(escoamento, coef):
    return escoamento / coef

espessuras_mm = [3, 4.75, 6.3, 8, 9.5, 12.5, 16]
largura_mm = 50
forca_n = {F} * 1000
adm = tensao_admissivel({FY}, 2)
for t in espessuras_mm:
    if forca_n / (largura_mm * t) <= adm:
        print(t)
        break`,
              dica: 'A área da chapa é largura × espessura. Teste as espessuras em ordem e pare na primeira que serve.',
              exp: 'As espessuras da lista são medidas comuns de chapas de aço.',
              vars: { F: { de: 10, ate: 90, passo: 5 }, FY: [250, 345] }
            }
          ]
        }
      ]
    },
    {
      id: 'pyu14',
      titulo: 'Métodos numéricos e gráficos',
      conceito: 'numérico',
      desc: 'Raízes, integrais, simulações, gráficos e um projeto.',
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
              t: 'escolha',
              p: 'Começando com um intervalo de tamanho 1, qual o tamanho dele depois de {N} passos da bisseção?',
              ops: ['1/{= 2 ** N }', '1/{= 2 * N }', '1/{N}'],
              c: 0,
              exp: 'Cada passo corta o intervalo pela metade: são {N} metades seguidas.',
              vars: { N: { de: 3, ate: 10 } }
            },
            {
              t: 'ordene',
              p: 'Monte o laço da bisseção',
              lines: [
                'while b - a > 1e-6:',
                '    m = (a + b) / 2',
                '    if f(a) * f(m) < 0:',
                '        b = m',
                '    else:',
                '        a = m'
              ],
              exp: 'Depois de calcular o meio, decida qual metade fica.'
            },
            {
              t: 'codigo',
              p: 'Use a bisseção para achar a raiz quadrada de {N}, que é a raiz de x² − {N} entre 0 e {N}. Mostre com 4 casas',
              start: `def f(x):
    return x ** 2 - {N}

a, b = 0, {N}
`,
              sol: `def f(x):
    return x ** 2 - {N}

a, b = 0, {N}
while b - a > 1e-6:
    m = (a + b) / 2
    if f(a) * f(m) < 0:
        b = m
    else:
        a = m
print(f"{(a + b) / 2:.4f}")`,
              dica: 'Copie o laço do exemplo: só a função muda.',
              exp: 'Confira com {N} ** 0.5: dá o mesmo resultado.',
              vars: { N: [2, 3, 5, 7, 10, 11, 13] }
            },
            {
              t: 'codigo',
              p: 'Escreva bissecao(f, a, b), que devolve a raiz com precisão 1e-8, e use para achar a raiz cúbica de {N}: a raiz de x³ − {N} entre 0 e {N}. Mostre com 5 casas',
              start: `def bissecao(f, a, b):
    pass

def g(x):
    return x ** 3 - {N}

print(f"{bissecao(g, 0, {N}):.5f}")
`,
              sol: `def bissecao(f, a, b):
    while b - a > 1e-8:
        m = (a + b) / 2
        if f(a) * f(m) < 0:
            b = m
        else:
            a = m
    return (a + b) / 2

def g(x):
    return x ** 3 - {N}

print(f"{bissecao(g, 0, {N}):.5f}")`,
              dica: 'O mesmo laço, dentro da função, com 1e-8 no lugar de 1e-6 e um return no fim.',
              exp: 'Agora a bisseção serve para qualquer função: é só passar outra.',
              vars: { N: { de: 2, ate: 30 } }
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
                  p: 'A derivada numérica usa a mesma ideia: a inclinação entre dois pontos muito próximos, (f(x + h) − f(x − h)) / (2h). Com dados medidos, em arrays, o NumPy tem a regra do trapézio pronta: `np.trapezoid(y, dx=passo)`.'
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
              p: 'Use a regra do trapézio com 100 pedaços para calcular a integral de x² de 0 a {B} (o valor exato é {= fix(B ** 3 / 3, 4) }). Mostre com 4 casas',
              start: `def trapezio(f, a, b, n):
    h = (b - a) / n
    soma = (f(a) + f(b)) / 2
    for i in range(1, n):
        soma += f(a + i * h)
    return soma * h

`,
              sol: `def trapezio(f, a, b, n):
    h = (b - a) / n
    soma = (f(a) + f(b)) / 2
    for i in range(1, n):
        soma += f(a + i * h)
    return soma * h

def quadrado(x):
    return x ** 2

print(f"{trapezio(quadrado, 0, {B}, 100):.4f}")`,
              dica: 'Crie uma função quadrado(x) e passe para trapezio com a = 0, b = {B} e n = 100.',
              exp: 'O resultado passa um pouco do exato: em curvas que sobem cada vez mais, os trapézios ficam por cima.',
              vars: { B: { de: 2, ate: 6 } }
            },
            {
              t: 'codigo',
              p: 'Calcule a derivada numérica de x³ em x = {X} com h = 0.001 (o valor exato é {= 3 * X * X }). Mostre com 4 casas',
              start: `def f(x):
    return x ** 3

x = {X}
h = 0.001
`,
              sol: `def f(x):
    return x ** 3

x = {X}
h = 0.001
print(f"{(f(x + h) - f(x - h)) / (2 * h):.4f}")`,
              dica: '(f(x + h) - f(x - h)) / (2 * h)',
              exp: 'A diferença central erra bem pouco: aqui, só a partir da sexta casa.',
              vars: { X: { de: 1, ate: 6 } }
            },
            {
              t: 'codigo',
              p: 'Uma mola tem k = {K} N/m. O trabalho para esticá-la de 0 a {X} m é a integral de k · x. Calcule com a regra do trapézio, 100 pedaços, e mostre em J com 3 casas',
              start: `def trapezio(f, a, b, n):
    h = (b - a) / n
    soma = (f(a) + f(b)) / 2
    for i in range(1, n):
        soma += f(a + i * h)
    return soma * h

k = {K}
`,
              sol: `def trapezio(f, a, b, n):
    h = (b - a) / n
    soma = (f(a) + f(b)) / 2
    for i in range(1, n):
        soma += f(a + i * h)
    return soma * h

k = {K}

def forca(x):
    return k * x

print(f"{trapezio(forca, 0, {X}, 100):.3f}")`,
              dica: 'Crie a função forca(x), que devolve k * x, e integre de 0 a {X}.',
              exp: 'Para uma reta, o trapézio é exato: o resultado é k · x² / 2.',
              vars: { K: { de: 100, ate: 900, passo: 50 }, X: [0.05, 0.1, 0.15, 0.2] }
            },
            {
              t: 'codigo',
              p: 'A velocidade de um carro foi lida a cada {DT} s. Use np.trapezoid para calcular a distância percorrida, em m, e mostre com 1 casa',
              start: `import numpy as np
v = np.array({VS})  # m/s
dt = {DT}
`,
              sol: `import numpy as np
v = np.array({VS})  # m/s
dt = {DT}
print(round(np.trapezoid(v, dx=dt), 1))`,
              dica: 'np.trapezoid(v, dx=dt) faz a regra do trapézio com dados medidos.',
              exp: 'Com dados de sensores não existe fórmula, só os pontos, e o trapézio funciona do mesmo jeito.',
              vars: {
                DT: [1, 2, 5],
                VS: ['[0, 4, 9, 13, 16, 18]', '[20, 20, 18, 15, 10, 4, 0]', '[0, 2.5, 5.5, 8, 10]']
              }
            }
          ]
        },
        {
          id: 'py7l8',
          titulo: 'Simulações: o método de Euler',
          exs: [
            {
              t: 'texto',
              titulo: 'Simulando passo a passo',
              blocos: [
                {
                  p: 'Muitas leis da física dizem como uma grandeza muda, e não quanto ela vale. A lei do resfriamento de Newton diz que um café esfria mais rápido quanto mais quente ele está em relação à sala: dT/dt = −k · (T − T_amb). É uma equação diferencial.'
                },
                {
                  p: 'O método de Euler resolve andando em passos pequenos de tempo: a cada passo, calcula a taxa de variação naquele instante e anda um pouquinho nessa direção.'
                },
                {
                  code: `k = 0.1        # por minuto
T_amb = 25
T = 90         # temperatura inicial
dt = 1         # passo de 1 minuto
for minuto in range(10):
    T = T + dt * (-k * (T - T_amb))
print(f"Depois de 10 min: {T:.1f} °C")`
                },
                {
                  p: 'Quanto menor o passo dt, mais perto da solução exata, que neste caso é T_amb + (T0 − T_amb) · e^(−k·t). O mesmo método simula queda com resistência do ar, carga de capacitores, tanques enchendo, populações crescendo e muito mais.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que o método de Euler faz a cada passo?',
              ops: [
                'Calcula a taxa de variação e anda um pequeno passo nessa direção',
                'Resolve a equação com uma fórmula pronta',
                'Sorteia um valor'
              ],
              c: 0,
              exp: 'É uma simulação: pequenos passos em sequência.'
            },
            {
              t: 'escolha',
              p: 'O que acontece quando o passo dt diminui?',
              ops: [
                'O resultado fica mais preciso, com mais contas',
                'O resultado fica menos preciso',
                'Nada muda'
              ],
              c: 0,
              exp: 'Passos menores acompanham melhor a curva.'
            },
            {
              t: 'complete',
              p: 'Complete o passo de Euler',
              code: 'T = T + ___ * (-k * (T - T_amb))',
              bank: ['dt', 'k', 'T', 'minuto'],
              c: ['dt'],
              exp: 'O valor novo é o antigo mais o passo vezes a taxa de variação.'
            },
            {
              t: 'codigo',
              p: 'Simule um café que começa a {T0} °C, numa sala a {TA} °C, com k = {K} por minuto, durante {M} minutos, com dt = 1. Mostre a temperatura final com 1 casa',
              start: `k = {K}
T_amb = {TA}
T = {T0}
dt = 1
`,
              sol: `k = {K}
T_amb = {TA}
T = {T0}
dt = 1
for minuto in range({M}):
    T = T + dt * (-k * (T - T_amb))
print(f"{T:.1f}")`,
              dica: 'Um for com range({M}) e a linha do passo de Euler.',
              exp: 'Com dt = 1 minuto, o Euler já chega perto da resposta exata.',
              vars: {
                T0: { de: 70, ate: 95, passo: 5 },
                TA: { de: 18, ate: 30, passo: 2 },
                K: [0.05, 0.08, 0.1, 0.15],
                M: [5, 10, 15, 20]
              }
            },
            {
              t: 'codigo',
              p: 'Agora com dt = 0.1, dez vezes mais passos. Mostre, um por linha, o resultado do Euler e o da fórmula exata, os dois com 2 casas',
              start: `import math
k = {K}
T_amb = {TA}
T0 = {T0}
t_final = {M}
dt = 0.1
`,
              sol: `import math
k = {K}
T_amb = {TA}
T0 = {T0}
t_final = {M}
dt = 0.1
T = T0
for _ in range(round(t_final / dt)):
    T = T + dt * (-k * (T - T_amb))
print(f"{T:.2f}")
print(f"{T_amb + (T0 - T_amb) * math.exp(-k * t_final):.2f}")`,
              dica: 'O número de passos é round(t_final / dt). A fórmula exata usa math.exp.',
              exp: 'Com passo pequeno, os dois resultados quase coincidem.',
              vars: {
                T0: { de: 70, ate: 95, passo: 5 },
                TA: { de: 18, ate: 30, passo: 2 },
                K: [0.05, 0.08, 0.1, 0.15],
                M: [5, 10, 15, 20]
              }
            },
            {
              t: 'codigo',
              p: 'Desenhe a temperatura do café ao longo de {M} minutos, com dt = 0.5, guardando os tempos e as temperaturas em listas. Mostre também a temperatura final com 1 casa',
              start: `import matplotlib.pyplot as plt
k = {K}
T_amb = {TA}
T = {T0}
dt = 0.5
tempos = [0]
temperaturas = [T]
`,
              sol: `import matplotlib.pyplot as plt
k = {K}
T_amb = {TA}
T = {T0}
dt = 0.5
tempos = [0]
temperaturas = [T]
for i in range(1, round({M} / dt) + 1):
    T = T + dt * (-k * (T - T_amb))
    tempos.append(i * dt)
    temperaturas.append(T)
plt.plot(tempos, temperaturas)
plt.xlabel("Tempo (min)")
plt.ylabel("Temperatura (°C)")
plt.show()
print(f"{T:.1f}")`,
              dica: 'A cada passo, acrescente o tempo (i * dt) e a temperatura nas listas. Depois, plt.plot(tempos, temperaturas).',
              exp: 'A curva cai rápido no começo e cada vez mais devagar perto da temperatura da sala.',
              grafico: true,
              vars: {
                T0: { de: 70, ate: 95, passo: 5 },
                TA: { de: 18, ate: 30, passo: 2 },
                K: [0.05, 0.08, 0.1, 0.15],
                M: [20, 30, 45, 60]
              }
            }
          ]
        },
        {
          id: 'py7l5',
          titulo: 'Gráficos de engenharia',
          exs: [
            {
              t: 'texto',
              titulo: 'Ver o comportamento, e não só um número',
              blocos: [
                {
                  p: 'Um gráfico mostra de uma vez como o resultado muda com um parâmetro: onde cresce rápido, onde passa do limite, qual opção é melhor. Com NumPy, a fórmula é calculada para centenas de pontos numa linha só.'
                },
                {
                  code: `import numpy as np
import matplotlib.pyplot as plt

I = 0.05 * 0.10 ** 3 / 12
L = np.linspace(0.5, 3, 50)
for nome, E in [("aço", 200e9), ("alumínio", 70e9)]:
    flecha_mm = 1000 * L ** 3 / (3 * E * I) * 1000
    plt.plot(L, flecha_mm, label=nome)
plt.axhline(10, color="red", linestyle="--", label="limite")
plt.xlabel("Comprimento (m)")
plt.ylabel("Flecha (mm)")
plt.legend()
plt.grid(True)
plt.show()`
                },
                {
                  p: '`plt.axhline` desenha uma linha horizontal, ótima para marcar um limite. Repare que a viga de alumínio deforma quase 3 vezes mais que a de aço igual, porque o módulo de elasticidade dele é quase 3 vezes menor.'
                },
                {
                  p: 'Antes das bibliotecas, dá para fazer um gráfico rápido até com texto, repetindo um caractere: `"#" * 8` dá `########`.'
                },
                {
                  leia: {
                    rotulo: 'Para arquivos grandes',
                    titulo: 'Abrir o Google Colab',
                    url: 'https://colab.research.google.com/',
                    obs: 'Os mesmos códigos rodam lá, com mais memória e arquivos do seu Drive. Precisa de uma conta Google.'
                  }
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Para que serve plt.axhline(10)?',
              ops: [
                'Desenhar uma linha horizontal em y = 10',
                'Mudar o limite do eixo y',
                'Escrever 10 no título'
              ],
              c: 0,
              exp: 'Linhas de referência mostram na hora onde passa do limite.'
            },
            {
              t: 'escolha',
              p: 'Por que a viga de alumínio deforma mais que a de aço igual?',
              ops: [
                'O módulo de elasticidade do alumínio é menor',
                'O alumínio é mais pesado',
                'A fórmula é outra'
              ],
              c: 0,
              exp: 'A flecha é inversamente proporcional a E.'
            },
            {
              t: 'codigo',
              p: 'Faça um gráfico de barras de texto: uma linha por máquina, com o nome, um # para cada 10 peças e o total',
              start: `producao = {"torno": {A}, "fresa": {B}, "prensa": {CC}}
`,
              sol: `producao = {"torno": {A}, "fresa": {B}, "prensa": {CC}}
for maquina, pecas in producao.items():
    print(f"{maquina} {'#' * (pecas // 10)} {pecas}")`,
              dica: 'Para cada item, "#" * (pecas // 10).',
              exp: 'Gráficos de texto mostram a ordem de grandeza até num terminal.',
              vars: {
                A: { de: 30, ate: 150, passo: 10 },
                B: { de: 30, ate: 150, passo: 10 },
                CC: { de: 30, ate: 150, passo: 10 }
              }
            },
            {
              t: 'codigo',
              p: 'Desenhe a flecha de uma viga de aço com F = {F} N, para L de 0.5 a 3 m, com a linha do limite de 10 mm. Mostre também o maior comprimento, entre os pontos, com flecha até 10 mm, com 2 casas',
              start: `import numpy as np
import matplotlib.pyplot as plt
E_aco = 200e9
I = 0.05 * 0.10 ** 3 / 12
forca = {F}
L = np.linspace(0.5, 3, 51)
`,
              sol: `import numpy as np
import matplotlib.pyplot as plt
E_aco = 200e9
I = 0.05 * 0.10 ** 3 / 12
forca = {F}
L = np.linspace(0.5, 3, 51)
flecha_mm = forca * L ** 3 / (3 * E_aco * I) * 1000
plt.plot(L, flecha_mm)
plt.axhline(10, color="red", linestyle="--")
plt.xlabel("Comprimento (m)")
plt.ylabel("Flecha (mm)")
plt.show()
print(round(L[flecha_mm <= 10].max(), 2))`,
              dica: 'Calcule flecha_mm para o array L inteiro. Para o comprimento, filtre L[flecha_mm <= 10] e pegue o max().',
              exp: 'O filtro com colchetes é o mesmo da lição de NumPy.',
              grafico: true,
              vars: { F: { de: 1000, ate: 8000, passo: 500 } }
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
                  p: 'Na região elástica, tensão e deformação são proporcionais, e a razão entre elas é o módulo de elasticidade, E. Para os aços, ele fica perto de 200 GPa; para o alumínio, perto de 70 GPa.'
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
                  p: 'Com NumPy, a melhor reta que passa pelos pontos sai de `np.polyfit(x, y, 1)`, que devolve a inclinação e o intercepto. A inclinação da reta tensão × deformação é o próprio E.'
                },
                {
                  dica: 'Num ensaio de verdade, use só os pontos da parte reta do gráfico, antes do escoamento.'
                }
              ]
            },
            {
              t: 'ordene',
              p: 'Coloque as etapas do cálculo em ordem',
              lines: [
                'Ler a força e o alongamento de cada ponto',
                'Calcular a tensão: força dividida pela área',
                'Calcular a deformação: alongamento dividido pelo comprimento',
                'Dividir tensão por deformação para achar E',
                'Tirar a média de E dos pontos da região elástica'
              ],
              exp: 'Cada etapa usa o resultado da anterior.',
              plain: true
            },
            {
              t: 'codigo',
              p: 'Calcule E (em GPa) para cada ponto e mostre a média com 1 casa, no formato E = 123.4 GPa',
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
            },
            {
              t: 'codigo',
              p: 'Desenhe os pontos medidos e a melhor reta, e calcule E pela inclinação com np.polyfit. Mostre no formato E = 123.4 GPa',
              start: `import numpy as np
import matplotlib.pyplot as plt
area_mm2 = 20
comp_mm = 50
forca_n = np.array([2000, 4000, 6000, 8000])
along_mm = np.array({AL})
`,
              sol: `import numpy as np
import matplotlib.pyplot as plt
area_mm2 = 20
comp_mm = 50
forca_n = np.array([2000, 4000, 6000, 8000])
along_mm = np.array({AL})
tensao = forca_n / area_mm2
deform = along_mm / comp_mm
inclinacao, intercepto = np.polyfit(deform, tensao, 1)
plt.plot(deform, tensao, "o", label="medido")
plt.plot(deform, inclinacao * deform + intercepto, label="reta")
plt.xlabel("Deformação")
plt.ylabel("Tensão (MPa)")
plt.legend()
plt.show()
print(f"E = {inclinacao / 1000:.1f} GPa")`,
              dica: 'tensao e deform são arrays. np.polyfit(deform, tensao, 1) devolve a inclinação e o intercepto. Divida a inclinação por 1000 para ter GPa.',
              exp: 'A reta usa todos os pontos de uma vez e sofre menos com o ruído de uma medida só.',
              grafico: true,
              vars: {
                AL: [
                  '[0.025, 0.051, 0.074, 0.100]',
                  '[0.024, 0.050, 0.076, 0.099]',
                  '[0.071, 0.142, 0.215, 0.284]'
                ]
              }
            }
          ]
        }
      ]
    }
  ]
});
