/* Trilha Livre · Python do zero · Prática livre: desafios avulsos, fora da trilha.
   dif: 'facil', 'medio' ou 'dificil'. Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). */

desafios('python', [
  {
    id: 'py-p-fizzbuzz',
    dif: 'facil',
    titulo: 'FizzBuzz',
    temas: ['laços', 'decisões'],
    p: 'De 1 a 15, mostre Fizz para múltiplos de 3, Buzz para múltiplos de 5, FizzBuzz para múltiplos dos dois e o número nos outros casos',
    start: `for n in range(1, 16):
    print(n)
`,
    saida: `1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz`,
    sol: `for n in range(1, 16):
    if n % 15 == 0:
        print("FizzBuzz")
    elif n % 3 == 0:
        print("Fizz")
    elif n % 5 == 0:
        print("Buzz")
    else:
        print(n)`,
    dica: 'Teste o múltiplo de 15 primeiro.',
    exp: 'Um clássico de entrevista de emprego.'
  },
  {
    id: 'py-p-palindromo',
    dif: 'facil',
    titulo: 'Palíndromo',
    temas: ['textos', 'funções'],
    p: 'Escreva eh_palindromo(texto), que devolve True se o texto, sem espaços e em minúsculas, for igual de trás para a frente',
    start: `def eh_palindromo(texto):
    pass

print(eh_palindromo("Ana"))
print(eh_palindromo("Python"))
print(eh_palindromo("Socorram me subi no onibus em Marrocos"))
`,
    saida: `True
False
True`,
    sol: `def eh_palindromo(texto):
    t = texto.replace(" ", "").lower()
    return t == t[::-1]

print(eh_palindromo("Ana"))
print(eh_palindromo("Python"))
print(eh_palindromo("Socorram me subi no onibus em Marrocos"))`,
    dica: 'texto[::-1] inverte o texto.',
    exp: 'Limpar antes de comparar é metade do problema.'
  },
  {
    id: 'py-p-fatorial',
    dif: 'facil',
    titulo: 'Fatorial',
    temas: ['laços', 'funções'],
    p: 'Escreva fatorial(n), que devolve 1 × 2 × ... × n (e 1 para n = 0), e mostre fatorial(0), fatorial(5) e fatorial({N})',
    start: `def fatorial(n):
    pass

print(fatorial(0))
print(fatorial(5))
print(fatorial({N}))
`,
    sol: `def fatorial(n):
    r = 1
    for i in range(2, n + 1):
        r *= i
    return r

print(fatorial(0))
print(fatorial(5))
print(fatorial({N}))`,
    dica: 'Comece com 1 e multiplique.',
    exp: 'Em Python, inteiros não têm limite de tamanho: fatorial(100) funciona.',
    vars: { N: { de: 8, ate: 30 } }
  },
  {
    id: 'py-p-mdc',
    dif: 'facil',
    titulo: 'MDC de Euclides',
    temas: ['laços', 'funções'],
    p: 'Escreva mdc(a, b) com o algoritmo de Euclides, sem usar math.gcd: enquanto b não for 0, troque a, b por b, a % b. Mostre mdc({A}, {B})',
    start: `def mdc(a, b):
    pass

print(mdc({A}, {B}))
`,
    sol: `def mdc(a, b):
    while b != 0:
        a, b = b, a % b
    return a

print(mdc({A}, {B}))`,
    dica: 'a, b = b, a % b faz a troca numa linha só.',
    exp: 'É um dos algoritmos mais antigos que se conhece: está nos Elementos de Euclides, de uns 300 anos antes de Cristo.',
    vars: { A: { de: 12, ate: 300, passo: 6 }, B: { de: 12, ate: 300, passo: 4 } }
  },
  {
    id: 'py-p-bissexto',
    dif: 'facil',
    titulo: 'Ano bissexto',
    temas: ['decisões', 'operadores'],
    p: 'Um ano é bissexto se for divisível por 4, mas não por 100, a não ser que seja divisível por 400. Mostre True ou False para o ano {ANO}',
    start: `ano = {ANO}
`,
    sol: `ano = {ANO}
print(ano % 4 == 0 and (ano % 100 != 0 or ano % 400 == 0))`,
    dica: 'Junte as condições com and e or, e use parênteses.',
    exp: '1900 não foi bissexto, mas 2000 foi: a regra dos 400 anos corrige o calendário.',
    vars: { ANO: [1900, 1996, 2000, 2023, 2024, 2026, 2100, 2400] }
  },
  {
    id: 'py-p-juros',
    dif: 'facil',
    titulo: 'Juros compostos',
    temas: ['contas', 'formatação'],
    p: 'Uma aplicação de R$ {P} rende {TX}% ao mês. Mostre o montante depois de {M} meses, no formato R$ 1234.56',
    start: `capital = {P}
taxa = {TX} / 100
meses = {M}
`,
    sol: `capital = {P}
taxa = {TX} / 100
meses = {M}
print(f"R$ {capital * (1 + taxa) ** meses:.2f}")`,
    dica: 'Montante = capital × (1 + taxa) elevado ao número de meses.',
    exp: 'Nos juros compostos, cada mês rende sobre o que já rendeu antes.',
    vars: { P: { de: 500, ate: 5000, passo: 500 }, TX: [0.5, 0.8, 1, 1.2], M: [6, 12, 24, 36] }
  },
  {
    id: 'py-p-anagrama',
    dif: 'facil',
    titulo: 'Anagramas',
    temas: ['textos', 'funções'],
    p: 'Escreva anagramas(a, b), que devolve True se as duas palavras têm as mesmas letras em outra ordem, e mostre o resultado de cada par',
    start: `def anagramas(a, b):
    pass

for a, b in [("amor", "roma"), ("pedra", "padre"), ("lata", "tala"), ("mar", "rim")]:
    print(a, b, anagramas(a, b))
`,
    saida: `amor roma True
pedra padre True
lata tala True
mar rim False`,
    sol: `def anagramas(a, b):
    return sorted(a) == sorted(b)

for a, b in [("amor", "roma"), ("pedra", "padre"), ("lata", "tala"), ("mar", "rim")]:
    print(a, b, anagramas(a, b))`,
    dica: 'sorted("roma") dá a lista de letras em ordem alfabética.',
    exp: 'Ordenar as letras transforma o problema numa comparação simples.'
  },
  {
    id: 'py-p-primos',
    dif: 'medio',
    titulo: 'Números primos',
    temas: ['laços', 'funções'],
    p: 'Mostre a lista dos números primos até {N}',
    start: `def eh_primo(n):
    pass

print([n for n in range(2, {N} + 1) if eh_primo(n)])
`,
    sol: `def eh_primo(n):
    if n < 2:
        return False
    for d in range(2, int(n ** 0.5) + 1):
        if n % d == 0:
            return False
    return True

print([n for n in range(2, {N} + 1) if eh_primo(n)])`,
    dica: 'Basta testar divisores até a raiz quadrada de n.',
    exp: 'Testar só até a raiz deixa o programa muito mais rápido.',
    vars: { N: [30, 50, 60, 80, 100] }
  },
  {
    id: 'py-p-fibonacci',
    dif: 'medio',
    titulo: 'Fibonacci',
    temas: ['laços', 'listas'],
    p: 'Mostre os {N} primeiros termos da sequência de Fibonacci, começando com 0 e 1, numa lista',
    start: `fib = [0, 1]
`,
    sol: `fib = [0, 1]
while len(fib) < {N}:
    fib.append(fib[-1] + fib[-2])
print(fib)`,
    dica: 'Cada termo é a soma dos dois anteriores: fib[-1] + fib[-2].',
    exp: 'fib[-1] e fib[-2] são os dois últimos.',
    vars: { N: { de: 8, ate: 20 } }
  },
  {
    id: 'py-p-binario',
    dif: 'medio',
    titulo: 'Para binário',
    temas: ['laços', 'textos'],
    p: 'Escreva para_binario(n), que devolve o número em binário como texto, sem usar bin(), e mostre para_binario({N})',
    start: `def para_binario(n):
    pass

print(para_binario({N}))
`,
    sol: `def para_binario(n):
    if n == 0:
        return "0"
    bits = ""
    while n > 0:
        bits = str(n % 2) + bits
        n //= 2
    return bits

print(para_binario({N}))`,
    dica: 'Divida por 2 e guarde os restos, de trás para a frente.',
    exp: 'É assim que o computador guarda números: em bits.',
    vars: { N: { de: 5, ate: 1000 } }
  },
  {
    id: 'py-p-frequencia',
    dif: 'medio',
    titulo: 'Letra mais comum',
    temas: ['dicionários', 'textos'],
    p: 'Mostre a letra que mais aparece no texto (ignore espaços) e quantas vezes, no formato x: 5',
    start: `texto = "a casa amarela da esquina"
`,
    saida: 'a: 8',
    sol: `texto = "a casa amarela da esquina"
cont = {}
for letra in texto.replace(" ", ""):
    cont[letra] = cont.get(letra, 0) + 1
mais = max(cont, key=cont.get)
print(f"{mais}: {cont[mais]}")`,
    dica: 'Conte num dicionário e use max(cont, key=cont.get).',
    exp: 'key=cont.get faz o max comparar os valores, e não as chaves.'
  },
  {
    id: 'py-p-troco',
    dif: 'medio',
    titulo: 'Troco em cédulas',
    temas: ['laços', 'divisão inteira'],
    p: 'Mostre como pagar {V} reais com o menor número de cédulas de 100, 50, 20, 10, 5 e 2 e moedas de 1, no formato 2 x 100',
    start: `valor = {V}
notas = [100, 50, 20, 10, 5, 2, 1]
`,
    sol: `valor = {V}
notas = [100, 50, 20, 10, 5, 2, 1]
for n in notas:
    qtd = valor // n
    if qtd:
        print(f"{qtd} x {n}")
        valor %= n`,
    dica: 'Para cada valor, use // para a quantidade e % para o que sobra.',
    exp: 'Com as cédulas brasileiras, pegar sempre a maior possível dá o menor número de notas.',
    vars: { V: { de: 11, ate: 499 } }
  },
  {
    id: 'py-p-media-ponderada',
    dif: 'facil',
    titulo: 'Média ponderada',
    temas: ['listas', 'zip'],
    p: 'Mostre a média ponderada das notas com os pesos, com 2 casas',
    start: `notas = [{N1}, {N2}, {N3}]
pesos = [2, 3, 5]
`,
    sol: `notas = [{N1}, {N2}, {N3}]
pesos = [2, 3, 5]
media = sum(n * p for n, p in zip(notas, pesos)) / sum(pesos)
print(f"{media:.2f}")`,
    dica: 'Some nota vezes peso e divida pela soma dos pesos.',
    exp: 'zip junta cada nota com o seu peso.',
    vars: {
      N1: { de: 3, ate: 10, passo: 0.5 },
      N2: { de: 3, ate: 10, passo: 0.5 },
      N3: { de: 3, ate: 10, passo: 0.5 }
    }
  },
  {
    id: 'py-p-collatz',
    dif: 'medio',
    titulo: 'Conjectura de Collatz',
    temas: ['laços', 'decisões'],
    p: 'Começando em {N}: se o número for par, divida por 2; se for ímpar, faça 3n + 1. Mostre quantos passos leva até chegar a 1',
    start: `n = {N}
passos = 0
`,
    sol: `n = {N}
passos = 0
while n != 1:
    if n % 2 == 0:
        n //= 2
    else:
        n = 3 * n + 1
    passos += 1
print(passos)`,
    dica: 'Um while n != 1, um if para par ou ímpar e um contador.',
    exp: 'Ninguém conseguiu provar que todo número chega a 1, mas até hoje nenhum computador achou um que não chegue.',
    vars: { N: { de: 6, ate: 99 } }
  },
  {
    id: 'py-p-cesar',
    dif: 'medio',
    titulo: 'Cifra de César',
    temas: ['textos', 'laços'],
    p: 'Troque cada letra pela que está {K} posições adiante no alfabeto (depois do z, volta para o a). Mantenha os espaços e mostre a frase cifrada',
    start: `frase = "{FR}"
k = {K}
`,
    sol: `frase = "{FR}"
k = {K}
cifrada = ""
for letra in frase:
    if letra == " ":
        cifrada += letra
    else:
        cifrada += chr((ord(letra) - ord("a") + k) % 26 + ord("a"))
print(cifrada)`,
    dica: 'ord("a") dá o código da letra a. Some k à posição da letra e use % 26 para dar a volta.',
    exp: 'Júlio César usava essa cifra com k = 3. Hoje ela é quebrada em segundos: só existem 25 chaves para testar.',
    vars: {
      K: { de: 2, ate: 25 },
      FR: [
        'ataque ao amanhecer',
        'o rato roeu a roupa do rei de roma',
        'trilha livre',
        'vamos estudar python juntos'
      ]
    }
  },
  {
    id: 'py-p-cpf',
    dif: 'medio',
    titulo: 'Dígitos do CPF',
    temas: ['textos', 'laços', 'contas'],
    p: 'Calcule os dois dígitos verificadores do CPF que começa com {D} e mostre o número completo no formato 123.456.789-09. Para cada dígito: multiplique os algarismos pelos pesos (10 a 2 para o primeiro, 11 a 2 para o segundo), some e tire o resto por 11; se o resto for menor que 2, o dígito é 0, senão é 11 menos o resto',
    start: `base = "{D}"
`,
    sol: `base = "{D}"

def digito(numeros):
    peso = len(numeros) + 1
    soma = sum(int(n) * (peso - i) for i, n in enumerate(numeros))
    resto = soma % 11
    return "0" if resto < 2 else str(11 - resto)

s = base + digito(base)
s = s + digito(s)
print(f"{s[:3]}.{s[3:6]}.{s[6:9]}-{s[9:]}")`,
    dica: 'Escreva uma função digito(numeros) que serve para os dois: o peso começa em len(numeros) + 1.',
    exp: 'Os dígitos verificadores pegam erros de digitação: trocar dois algarismos de lugar quase sempre muda o resultado.',
    vars: { D: { de: 100000000, ate: 999999999 } }
  },
  {
    id: 'py-p-heron',
    dif: 'medio',
    titulo: 'Raiz pelo método de Herão',
    temas: ['laços', 'métodos numéricos'],
    p: 'Calcule a raiz quadrada de {N} pelo método de Herão: comece com x = {N} / 2 e repita x = (x + {N} / x) / 2 até a mudança ficar menor que 1e-12. Mostre a raiz com 8 casas e, na linha de baixo, quantas vezes você calculou um x novo',
    start: `n = {N}
x = n / 2
passos = 0
`,
    sol: `n = {N}
x = n / 2
passos = 0
while True:
    novo = (x + n / x) / 2
    passos += 1
    if abs(novo - x) < 1e-12:
        x = novo
        break
    x = novo
print(f"{x:.8f}")
print(passos)`,
    dica: 'Num while True, calcule o novo x, conte o passo e saia quando a diferença for pequena.',
    exp: 'É o método de Newton aplicado a x² − n, conhecido há quase 2000 anos.',
    vars: { N: { de: 2, ate: 200 } },
    se: 'Math.sqrt(N) % 1 !== 0'
  },
  {
    id: 'py-p-newton',
    dif: 'dificil',
    titulo: 'Método de Newton',
    temas: ['métodos numéricos', 'funções'],
    p: 'Use o método de Newton (x = x − f(x) / f\'(x)) para achar a raiz de cos(x) − x, começando em x = 1. Pare quando a mudança for menor que 1e-10 e mostre a raiz com 6 casas e o número de passos',
    start: `import math

def f(x):
    return math.cos(x) - x

def df(x):
    return -math.sin(x) - 1

x = 1
`,
    saida: `0.739085
5`,
    sol: `import math

def f(x):
    return math.cos(x) - x

def df(x):
    return -math.sin(x) - 1

x = 1
passos = 0
while True:
    novo = x - f(x) / df(x)
    passos += 1
    if abs(novo - x) < 1e-10:
        x = novo
        break
    x = novo
print(f"{x:.6f}")
print(passos)`,
    dica: 'Num while True, calcule o novo x, conte o passo e saia quando a diferença for pequena.',
    exp: 'Newton converge muito mais rápido que a bisseção, mas precisa da derivada.'
  },
  {
    id: 'py-p-matriz',
    dif: 'dificil',
    titulo: 'Multiplicar matrizes',
    temas: ['listas', 'laços aninhados'],
    p: 'Multiplique as matrizes A e B (listas de listas) sem bibliotecas e mostre o resultado, uma linha por linha da matriz',
    start: `A = [[{A1}, {A2}], [{A3}, {A4}]]
B = [[5, 6], [7, 8]]
`,
    sol: `A = [[{A1}, {A2}], [{A3}, {A4}]]
B = [[5, 6], [7, 8]]
C = [[sum(A[i][k] * B[k][j] for k in range(2)) for j in range(2)] for i in range(2)]
for linha in C:
    print(linha)`,
    dica: 'C[i][j] é a soma de A[i][k] * B[k][j] para cada k.',
    exp: 'No NumPy, isso vira A @ B, e funciona com matrizes enormes.',
    vars: {
      A1: { de: 1, ate: 9 },
      A2: { de: 1, ate: 9 },
      A3: { de: 1, ate: 9 },
      A4: { de: 1, ate: 9 }
    }
  },
  {
    id: 'py-p-relatorio',
    dif: 'dificil',
    titulo: 'Relatório de turnos',
    temas: ['dicionários', 'csv', 'formatação'],
    p: 'A partir do CSV, mostre o total de peças por turno, em ordem alfabética, no formato manhã: 300',
    start: `import csv
import io
dados = "turno,pecas\\nmanhã,{A}\\ntarde,{B}\\nmanhã,{CC}\\nnoite,{D}\\ntarde,110\\n"
`,
    sol: `import csv
import io
dados = "turno,pecas\\nmanhã,{A}\\ntarde,{B}\\nmanhã,{CC}\\nnoite,{D}\\ntarde,110\\n"
totais = {}
for linha in csv.DictReader(io.StringIO(dados)):
    totais[linha["turno"]] = totais.get(linha["turno"], 0) + int(linha["pecas"])
for turno in sorted(totais):
    print(f"{turno}: {totais[turno]}")`,
    dica: 'io.StringIO faz um texto se comportar como arquivo. Some num dicionário e percorra sorted(totais).',
    exp: 'Agrupar e somar é o que as tabelas dinâmicas das planilhas fazem.',
    vars: {
      A: { de: 50, ate: 200, passo: 5 },
      B: { de: 50, ate: 200, passo: 5 },
      CC: { de: 50, ate: 200, passo: 5 },
      D: { de: 20, ate: 100, passo: 5 }
    }
  },
  {
    id: 'py-p-sistema3',
    dif: 'dificil',
    titulo: 'Sistema 3 × 3',
    temas: ['NumPy', 'matrizes'],
    p: 'Resolva com NumPy o sistema 2x + y − z = {= 2 * X + Y - Z }, x + 3y + 2z = {= X + 3 * Y + 2 * Z } e 3x − y + z = {= 3 * X - Y + Z }. Mostre x, y e z arredondados para inteiros, separados por espaço',
    start: `import numpy as np
`,
    sol: `import numpy as np
A = np.array([[2, 1, -1], [1, 3, 2], [3, -1, 1]])
b = np.array([{= 2 * X + Y - Z }, {= X + 3 * Y + 2 * Z }, {= 3 * X - Y + Z }])
x, y, z = np.round(np.linalg.solve(A, b)).astype(int)
print(x, y, z)`,
    dica: 'Cada linha de A tem os coeficientes de x, y e z de uma equação. np.round(...).astype(int) arredonda e converte.',
    exp: 'Com 3 equações à mão já dá trabalho; o NumPy resolve sistemas com milhares de incógnitas.',
    vars: { X: { de: -6, ate: 6 }, Y: { de: -6, ate: 6 }, Z: { de: -6, ate: 6 } }
  },
  {
    id: 'py-p-parabola',
    dif: 'medio',
    titulo: 'Raízes e gráfico da parábola',
    temas: ['NumPy', 'gráficos', 'contas'],
    p: 'Para y = a·x² + b·x + c, com a = {A}, b = {= -A * (R1 + R2) } e c = {= A * R1 * R2 }, calcule as raízes pela fórmula de Bhaskara e mostre cada uma com 2 casas, da menor para a maior. Desenhe a curva de x = {= R1 - 2 } a x = {= R2 + 2 }',
    start: `import numpy as np
import matplotlib.pyplot as plt
a, b, c = {A}, {= -A * (R1 + R2) }, {= A * R1 * R2 }
`,
    sol: `import numpy as np
import matplotlib.pyplot as plt
a, b, c = {A}, {= -A * (R1 + R2) }, {= A * R1 * R2 }
delta = b ** 2 - 4 * a * c
raizes = sorted([(-b - delta ** 0.5) / (2 * a), (-b + delta ** 0.5) / (2 * a)])
for r in raizes:
    print(f"{r:.2f}")
x = np.linspace({= R1 - 2 }, {= R2 + 2 }, 100)
plt.plot(x, a * x ** 2 + b * x + c)
plt.axhline(0, color="gray")
plt.show()`,
    dica: 'delta = b² − 4ac; as raízes são (−b ± raiz de delta) / 2a. Use sorted para pôr em ordem.',
    exp: 'No gráfico, as raízes são os pontos em que a curva cruza a linha do zero.',
    grafico: true,
    vars: { A: [1, 2, -1], R1: { de: -5, ate: 0 }, R2: { de: 1, ate: 5 } }
  }
]);
