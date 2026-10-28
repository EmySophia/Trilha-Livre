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
    p: 'Escreva fatorial(n), que devolve 1 × 2 × ... × n (e 1 para n = 0)',
    start: `def fatorial(n):
    pass

print(fatorial(0))
print(fatorial(5))
print(fatorial(10))
`,
    saida: `1
120
3628800`,
    sol: `def fatorial(n):
    r = 1
    for i in range(2, n + 1):
        r *= i
    return r

print(fatorial(0))
print(fatorial(5))
print(fatorial(10))`,
    dica: 'Comece com 1 e multiplique.',
    exp: 'Em Python, inteiros não têm limite de tamanho: fatorial(100) funciona.'
  },
  {
    id: 'py-p-primos',
    dif: 'medio',
    titulo: 'Números primos',
    temas: ['laços', 'funções'],
    p: 'Mostre a lista dos números primos até 50',
    start: `def eh_primo(n):
    pass

print([n for n in range(2, 51) if eh_primo(n)])
`,
    saida: '[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]',
    sol: `def eh_primo(n):
    if n < 2:
        return False
    for d in range(2, int(n ** 0.5) + 1):
        if n % d == 0:
            return False
    return True

print([n for n in range(2, 51) if eh_primo(n)])`,
    dica: 'Basta testar divisores até a raiz quadrada de n.',
    exp: 'Testar só até a raiz deixa o programa muito mais rápido.'
  },
  {
    id: 'py-p-fibonacci',
    dif: 'medio',
    titulo: 'Fibonacci',
    temas: ['laços', 'listas'],
    p: 'Mostre os 12 primeiros termos da sequência de Fibonacci, começando com 0 e 1, numa lista',
    start: `fib = [0, 1]
`,
    saida: '[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]',
    sol: `fib = [0, 1]
while len(fib) < 12:
    fib.append(fib[-1] + fib[-2])
print(fib)`,
    dica: 'Cada termo é a soma dos dois anteriores: fib[-1] + fib[-2].',
    exp: 'fib[-1] e fib[-2] são os dois últimos.'
  },
  {
    id: 'py-p-binario',
    dif: 'medio',
    titulo: 'Para binário',
    temas: ['laços', 'textos'],
    p: 'Escreva para_binario(n), que devolve o número em binário como texto, sem usar bin()',
    start: `def para_binario(n):
    pass

print(para_binario(5))
print(para_binario(10))
print(para_binario(255))
`,
    saida: `101
1010
11111111`,
    sol: `def para_binario(n):
    if n == 0:
        return "0"
    bits = ""
    while n > 0:
        bits = str(n % 2) + bits
        n //= 2
    return bits

print(para_binario(5))
print(para_binario(10))
print(para_binario(255))`,
    dica: 'Divida por 2 e guarde os restos, de trás para a frente.',
    exp: 'É assim que o computador guarda números: em bits.'
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
    p: 'Mostre como pagar 287 reais com o menor número de cédulas de 100, 50, 20, 10, 5 e 2 e moedas de 1, no formato 2 x 100',
    start: `valor = 287
notas = [100, 50, 20, 10, 5, 2, 1]
`,
    saida: `2 x 100
1 x 50
1 x 20
1 x 10
1 x 5
1 x 2`,
    sol: `valor = 287
notas = [100, 50, 20, 10, 5, 2, 1]
for n in notas:
    qtd = valor // n
    if qtd:
        print(f"{qtd} x {n}")
        valor %= n`,
    dica: 'Para cada valor, use // para a quantidade e % para o que sobra.',
    exp: 'Com as cédulas brasileiras, pegar sempre a maior possível dá o menor número de notas.'
  },
  {
    id: 'py-p-media-ponderada',
    dif: 'facil',
    titulo: 'Média ponderada',
    temas: ['listas', 'zip'],
    p: 'Mostre a média ponderada das notas com os pesos, com 2 casas',
    start: `notas = [7.0, 8.5, 6.0]
pesos = [2, 3, 5]
`,
    saida: '6.95',
    sol: `notas = [7.0, 8.5, 6.0]
pesos = [2, 3, 5]
media = sum(n * p for n, p in zip(notas, pesos)) / sum(pesos)
print(f"{media:.2f}")`,
    dica: 'Some nota vezes peso e divida pela soma dos pesos.',
    exp: 'zip junta cada nota com o seu peso.'
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
    start: `A = [[1, 2], [3, 4]]
B = [[5, 6], [7, 8]]
`,
    saida: `[19, 22]
[43, 50]`,
    sol: `A = [[1, 2], [3, 4]]
B = [[5, 6], [7, 8]]
C = [[sum(A[i][k] * B[k][j] for k in range(2)) for j in range(2)] for i in range(2)]
for linha in C:
    print(linha)`,
    dica: 'C[i][j] é a soma de A[i][k] * B[k][j] para cada k.',
    exp: 'No NumPy, isso vira A @ B, e funciona com matrizes enormes.'
  },
  {
    id: 'py-p-relatorio',
    dif: 'dificil',
    titulo: 'Relatório de turnos',
    temas: ['dicionários', 'csv', 'formatação'],
    p: 'A partir do CSV, mostre o total de peças por turno, em ordem alfabética, no formato manhã: 300',
    start: `import csv
import io
dados = "turno,pecas\\nmanhã,120\\ntarde,95\\nmanhã,180\\nnoite,60\\ntarde,110\\n"
`,
    saida: `manhã: 300
noite: 60
tarde: 205`,
    sol: `import csv
import io
dados = "turno,pecas\\nmanhã,120\\ntarde,95\\nmanhã,180\\nnoite,60\\ntarde,110\\n"
totais = {}
for linha in csv.DictReader(io.StringIO(dados)):
    totais[linha["turno"]] = totais.get(linha["turno"], 0) + int(linha["pecas"])
for turno in sorted(totais):
    print(f"{turno}: {totais[turno]}")`,
    dica: 'io.StringIO faz um texto se comportar como arquivo. Some num dicionário e percorra sorted(totais).',
    exp: 'Agrupar e somar é o que as tabelas dinâmicas das planilhas fazem.'
  }
]);
