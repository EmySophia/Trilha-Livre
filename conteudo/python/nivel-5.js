/* Trilha Livre · Python do zero · Nível 5: Funções e módulos
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'python',
  n: 5,
  titulo: 'Funções e módulos',
  desc: 'Criar funções, lambda, usar math e tratar erros.',
  videos: [
    {
      titulo: 'Curso de Python 3, Mundo 3',
      canal: 'Curso em Vídeo (Gustavo Guanabara)',
      obs: 'aulas sobre funções, módulos e tratamento de erros',
      url: 'https://www.youtube.com/c/CursoemV%C3%ADdeo'
    },
    {
      tipo: 'texto',
      titulo: 'Pense em Python',
      canal: 'Allen B. Downey, livro aberto',
      obs: 'capítulos 3 e 6: funções',
      url: 'https://penseallen.github.io/PensePython2e/'
    }
  ],
  unidades: [
    {
      id: 'pyu9',
      titulo: 'Funções',
      conceito: 'def',
      desc: 'Dar nome a um pedaço de código.',
      licoes: [
        {
          id: 'py5l1',
          titulo: 'def e return',
          exs: [
            {
              t: 'texto',
              titulo: 'Funções',
              blocos: [
                {
                  p: 'Uma função é um pedaço de código com nome, que você escreve uma vez e usa quantas vezes quiser. Em Python, ela começa com `def`, recebe parâmetros entre parênteses e devolve um resultado com `return`.'
                },
                {
                  code: `def area_retangulo(base, altura):
    return base * altura

print(area_retangulo(3, 4))
print(area_retangulo(2.5, 2))`
                },
                {
                  p: 'O código dentro da função só roda quando ela é chamada. O `return` termina a função e manda o valor para quem chamou.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que faz o `return`?',
              ops: [
                'Devolve um valor para quem chamou a função',
                'Mostra o valor na tela',
                'Repete a função'
              ],
              c: 0,
              exp: 'Quem mostra é o print.'
            },
            {
              t: 'escolha',
              p: 'O que este programa mostra?',
              ops: ['{= A * B + 1 }', '{= A * B }', '{= (B + 1) * A }'],
              c: 0,
              exp: 'f({B}) calcula {B} * {A} + 1.',
              code: `def f(x):
    return x * {A} + 1

print(f({B}))`,
              vars: { A: { de: 2, ate: 9 }, B: { de: 2, ate: 9 } }
            },
            {
              t: 'complete',
              p: 'Complete a função',
              code: `def area(b, h):
    ___ b * h`,
              bank: ['return', 'print', 'def', 'yield'],
              c: ['return'],
              exp: 'Para devolver o resultado, return.'
            },
            {
              t: 'codigo',
              p: 'Escreva celsius_para_fahrenheit(c), que devolve c * 1.8 + 32',
              start: `def celsius_para_fahrenheit(c):
    pass  # troque esta linha

print(celsius_para_fahrenheit(0))
print(celsius_para_fahrenheit(100))
print(round(celsius_para_fahrenheit({T}), 1))
`,
              sol: `def celsius_para_fahrenheit(c):
    return c * 1.8 + 32

print(celsius_para_fahrenheit(0))
print(celsius_para_fahrenheit(100))
print(round(celsius_para_fahrenheit({T}), 1))`,
              dica: 'return c * 1.8 + 32',
              exp: 'O round no último teste evita casas a mais, por causa de como o computador guarda números com ponto.',
              vars: { T: { de: -20, ate: 45 } }
            },
            {
              t: 'codigo',
              p: 'Escreva media(lista), que devolve a média dos números da lista',
              start: `def media(lista):
    pass

print(media([7, 8, 9]))
print(media({L}))
`,
              sol: `def media(lista):
    return sum(lista) / len(lista)

print(media([7, 8, 9]))
print(media({L}))`,
              dica: 'sum(lista) / len(lista)',
              exp: 'Funções pequenas e com nome claro deixam o programa fácil de ler.',
              vars: { L: ['[10, 5]', '[2, 4, 6, 8]', '[9.5, 7.5]'] }
            },
            {
              t: 'codigo',
              p: 'Escreva eh_par(n), que devolve True ou False, e teste com {A} e {B}',
              start: `def eh_par(n):
    pass

print(eh_par({A}))
print(eh_par({B}))
`,
              sol: `def eh_par(n):
    return n % 2 == 0

print(eh_par({A}))
print(eh_par({B}))`,
              dica: 'Devolva a própria comparação: return n % 2 == 0.',
              exp: 'Não precisa de if: a comparação já é True ou False.',
              vars: { A: { de: 1, ate: 99 }, B: { de: 1, ate: 99 } }
            },
            {
              t: 'codigo',
              p: 'Escreva fatorial(n), que devolve 1 × 2 × ... × n (e 1 para n = 0), e mostre fatorial({N})',
              start: `def fatorial(n):
    pass

print(fatorial({N}))
`,
              sol: `def fatorial(n):
    r = 1
    for i in range(2, n + 1):
        r *= i
    return r

print(fatorial({N}))`,
              dica: 'Comece com 1 e multiplique num laço.',
              exp: 'Fatorial cresce muito rápido: 20! já passa de 2 quintilhões.',
              vars: { N: { de: 0, ate: 12 } }
            }
          ]
        },
        {
          id: 'py5l2',
          titulo: 'Parâmetros com valor padrão',
          exs: [
            {
              t: 'texto',
              titulo: 'Parâmetros opcionais e nomeados',
              blocos: [
                {
                  p: 'Um parâmetro pode ter um valor padrão, usado quando ninguém informa outro. E, na chamada, dá para dizer o nome do parâmetro, o que deixa claro o que é cada número.'
                },
                {
                  code: `def preco_final(preco, desconto=0):
    """Devolve o preço com o desconto em porcentagem."""
    return preco * (1 - desconto / 100)

print(preco_final(100))
print(preco_final(100, 15))
print(preco_final(preco=80, desconto=50))`
                },
                {
                  p: 'O texto entre três aspas logo abaixo do `def` é a docstring: a documentação da função.'
                },
                { dica: 'Parâmetros com valor padrão vêm sempre depois dos que não têm.' }
              ]
            },
            {
              t: 'escolha',
              p: 'Com `def f(a, b=2)` devolvendo `a * b`, quanto dá `f({A})`?',
              ops: ['{= A * 2 }', '{A}', 'Erro'],
              c: 0,
              exp: 'b fica com o padrão 2.',
              vars: { A: { de: 3, ate: 12 } }
            },
            {
              t: 'escolha',
              p: 'Qual chamada funciona para `def f(a, b=2)`?',
              ops: ['f(1)', 'f(b=3)', 'f()'],
              c: 0,
              mono: true,
              exp: 'O a não tem padrão: precisa ser informado.'
            },
            {
              t: 'complete',
              p: 'Complete para o texto ter um valor padrão',
              code: 'def saudacao(nome, texto___"Olá"):',
              bank: ['=', '==', ':', '->'],
              c: ['='],
              exp: 'Um = só, na definição.'
            },
            {
              t: 'codigo',
              p: 'Escreva juros_simples(capital, taxa, meses=12), que devolve capital * taxa / 100 * meses',
              start: `def juros_simples(capital, taxa, meses=12):
    pass

print(juros_simples({CAP}, {TX}))
print(juros_simples({CAP}, {TX}, 6))
`,
              sol: `def juros_simples(capital, taxa, meses=12):
    return capital * taxa / 100 * meses

print(juros_simples({CAP}, {TX}))
print(juros_simples({CAP}, {TX}, 6))`,
              dica: 'return capital * taxa / 100 * meses',
              exp: 'Os números são só um exemplo de conta, não uma recomendação de investimento.',
              vars: { CAP: [500, 1000, 2000], TX: [1, 2, 3] }
            },
            {
              t: 'codigo',
              p: 'Escreva potencia(base, expoente=2) e mostre potencia({A}) e potencia({A}, 3)',
              start: `def potencia(base, expoente=2):
    pass

print(potencia({A}))
print(potencia({A}, 3))
`,
              sol: `def potencia(base, expoente=2):
    return base ** expoente

print(potencia({A}))
print(potencia({A}, 3))`,
              dica: 'return base ** expoente',
              exp: 'Sem informar o expoente, vale o quadrado.',
              vars: { A: { de: 2, ate: 9 } }
            },
            {
              t: 'codigo',
              p: 'Escreva com_taxa(preco, taxa=10), que soma a taxa em porcentagem ao preço, e mostre com_taxa({P}) com 2 casas',
              start: `def com_taxa(preco, taxa=10):
    pass

print(f"{com_taxa({P}):.2f}")
`,
              sol: `def com_taxa(preco, taxa=10):
    return preco * (1 + taxa / 100)

print(f"{com_taxa({P}):.2f}")`,
              dica: 'preco * (1 + taxa / 100)',
              exp: 'Taxa de serviço de 10% é comum em restaurantes.',
              vars: { P: { de: 10, ate: 200, passo: 5 } }
            }
          ]
        },
        {
          id: 'py5l3',
          titulo: 'print ou return?',
          exs: [
            {
              t: 'texto',
              titulo: 'Mostrar não é devolver',
              blocos: [
                {
                  p: 'Um erro muito comum: usar `print` dentro da função quando ela deveria devolver o valor. A função mostra o número, mas devolve `None`, que quer dizer nada. Aí a conta de fora quebra.'
                },
                {
                  code: `def dobro(x):
    print(x * 2)

resultado = dobro(5)
print(resultado)`
                },
                {
                  p: 'Variáveis criadas dentro de uma função só existem lá dentro. Isso é o escopo: a função recebe dados pelos parâmetros e entrega pelo `return`.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que o exemplo mostra na segunda linha?',
              ops: ['None', '10', 'Erro'],
              c: 0,
              exp: 'Sem return, a função devolve None.'
            },
            {
              t: 'escolha',
              p: 'O que uma função sem return devolve?',
              ops: ['None', '0', 'Erro'],
              c: 0,
              exp: 'None é o valor que representa nada.'
            },
            {
              t: 'escolha',
              p: 'O que este programa mostra?',
              ops: ['{B} {A}', '{B} {B}', '{A} {A}'],
              c: 0,
              exp: 'O x de dentro da função é outro x, que some quando ela termina.',
              code: `x = {A}
def f():
    x = {B}
    return x
print(f(), x)`,
              vars: { A: { de: 1, ate: 9 }, B: { de: 10, ate: 20 } }
            },
            {
              t: 'codigo',
              p: 'A função mostra o total em vez de devolver, e a última conta quebra. Conserte para mostrar o dobro da soma',
              start: `def soma(a, b):
    print(a + b)

total = soma({A}, {B})
print(total * 2)
`,
              sol: `def soma(a, b):
    return a + b

total = soma({A}, {B})
print(total * 2)`,
              dica: 'Troque o print de dentro da função por return.',
              exp: 'Regra prática: funções que calculam devolvem; quem mostra é o programa principal.',
              vars: { A: { de: 1, ate: 50 }, B: { de: 1, ate: 50 } }
            },
            {
              t: 'codigo',
              p: 'Escreva media_e_maior(lista), que devolve a média e o maior valor numa tupla, e mostre os dois na mesma linha',
              start: `def media_e_maior(lista):
    pass

m, g = media_e_maior({L})
print(m, g)
`,
              sol: `def media_e_maior(lista):
    return sum(lista) / len(lista), max(lista)

m, g = media_e_maior({L})
print(m, g)`,
              dica: 'return media, maior: com vírgula, vira uma tupla.',
              exp: 'Devolver uma tupla é o jeito Python de devolver vários valores.',
              vars: { L: ['[4, 8, 6]', '[10, 2, 7, 1]', '[5.5, 9.5]'] }
            }
          ]
        },
        {
          id: 'py5l7',
          titulo: 'Funções como valores: lambda',
          exs: [
            {
              t: 'texto',
              titulo: 'Passar uma função para outra',
              blocos: [
                {
                  p: 'Em Python, uma função é um valor como outro qualquer: dá para guardar numa variável e passar para outra função. O `sorted`, o `max` e o `min` aceitam um `key`: uma função que diz o que comparar.'
                },
                {
                  code: `produtos = [("café", 18.9), ("arroz", 6.5), ("feijão", 9.0)]
print(sorted(produtos, key=lambda p: p[1]))
print(max(produtos, key=lambda p: p[1]))`
                },
                {
                  p: '`lambda p: p[1]` é uma função pequena, sem nome, que recebe p e devolve p[1]. É o mesmo que um `def` de uma linha.'
                },
                {
                  code: `palavras = ["sol", "abacaxi", "pé"]
print(sorted(palavras, key=len))`
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que é `lambda x: x * 2`?',
              ops: ['Uma função pequena, sem nome, que devolve o dobro', 'Uma lista', 'Um laço'],
              c: 0,
              exp: 'Equivale a def f(x): return x * 2.'
            },
            {
              t: 'complete',
              p: 'Complete para ordenar pelo segundo item de cada tupla',
              code: 'sorted(pessoas, ___=lambda p: p[1])',
              bank: ['key', 'by', 'order', 'sort'],
              c: ['key'],
              exp: 'key diz o que comparar.'
            },
            {
              t: 'codigo',
              p: 'Ordene os produtos pelo preço e mostre a lista',
              start: `produtos = [("café", 18.9), ("arroz", 6.5), ("feijão", 9.0), ("óleo", 7.8)]
`,
              saida: '[(\'arroz\', 6.5), (\'óleo\', 7.8), (\'feijão\', 9.0), (\'café\', 18.9)]',
              sol: `produtos = [("café", 18.9), ("arroz", 6.5), ("feijão", 9.0), ("óleo", 7.8)]
print(sorted(produtos, key=lambda p: p[1]))`,
              dica: 'key=lambda p: p[1]',
              exp: 'O preço é a posição 1 de cada tupla.'
            },
            {
              t: 'codigo',
              p: 'Ordene as palavras pelo tamanho, da menor para a maior',
              start: `palavras = {L}
`,
              sol: `palavras = {L}
print(sorted(palavras, key=len))`,
              dica: 'key=len: o próprio len serve de função.',
              exp: 'Palavras do mesmo tamanho mantêm a ordem original.',
              vars: {
                L: [
                  '["engenharia", "sol", "python", "pé"]',
                  '["abacaxi", "uva", "kiwi", "banana"]'
                ]
              }
            },
            {
              t: 'codigo',
              p: 'Mostre o pódio: os nomes dos 3 alunos com as maiores notas, do primeiro ao terceiro, um por linha',
              start: `alunos = {L}
`,
              sol: `alunos = {L}
podio = sorted(alunos, key=lambda a: a[1], reverse=True)[:3]
for nome, nota in podio:
    print(nome)`,
              dica: 'Ordene pela nota com reverse=True, pegue [:3] e mostre os nomes.',
              exp: 'key e reverse juntos resolvem quase todo ranking.',
              vars: {
                L: [
                  '[("Ana", 8.5), ("Bia", 9.7), ("Caio", 7.0), ("Duda", 9.1)]',
                  '[("Eli", 6.0), ("Fê", 8.8), ("Gui", 9.9), ("Hel", 8.9), ("Ivo", 5.5)]'
                ]
              }
            }
          ]
        }
      ]
    },
    {
      id: 'pyu10',
      titulo: 'Módulos e erros',
      conceito: 'import',
      desc: 'Usar o que já vem pronto e não deixar o programa quebrar.',
      licoes: [
        {
          id: 'py5l4',
          titulo: 'Módulos: math e companhia',
          exs: [
            {
              t: 'texto',
              titulo: 'Baterias incluídas',
              blocos: [
                {
                  p: 'O Python vem com muitos módulos prontos. Para usar, faça o `import`. O `math` tem raiz quadrada, pi, seno e muito mais:'
                },
                {
                  code: `import math
print(math.sqrt(16))
print(round(math.pi, 4))
print(math.ceil(2.1), math.floor(2.9))`
                },
                {
                  p: 'Outros módulos úteis: `statistics` (média, mediana, desvio padrão), `random` (sorteios) e `datetime` (datas).'
                },
                {
                  code: `import statistics
dados = [12, 15, 11, 18, 15]
print(statistics.mean(dados))
print(statistics.median(dados))
print(round(statistics.stdev(dados), 2))`
                },
                { dica: 'Também dá para importar só uma função: `from math import sqrt`.' }
              ]
            },
            {
              t: 'escolha',
              p: 'O que `math.ceil({X})` devolve?',
              ops: ['{= Math.ceil(X) }', '{= Math.floor(X) }', '{X}'],
              c: 0,
              exp: 'ceil arredonda para cima; floor, para baixo.',
              vars: { X: { de: 1.1, ate: 9.9, passo: 0.1 } },
              se: '!Number.isInteger(X)'
            },
            {
              t: 'escolha',
              p: 'Como importar só a função sqrt do math?',
              ops: ['from math import sqrt', 'import sqrt from math', 'include math.sqrt'],
              c: 0,
              mono: true,
              exp: 'Depois disso, dá para escrever sqrt(16) direto.'
            },
            {
              t: 'codigo',
              p: 'Calcule a hipotenusa de um triângulo com catetos {A} e {B} usando math.sqrt, com 2 casas',
              start: `import math
a = {A}
b = {B}
`,
              sol: `import math
a = {A}
b = {B}
print(round(math.sqrt(a ** 2 + b ** 2), 2))`,
              dica: 'Pitágoras: raiz de a² + b².',
              exp: 'math.sqrt sempre devolve número com ponto.',
              vars: { A: { de: 3, ate: 12 }, B: { de: 3, ate: 12 } }
            },
            {
              t: 'codigo',
              p: 'Mostre a área de um círculo de raio {R}, arredondada com 2 casas',
              start: `import math
raio = {R}
`,
              sol: `import math
raio = {R}
print(round(math.pi * raio ** 2, 2))`,
              dica: 'Área = pi vezes raio ao quadrado.',
              exp: 'math.pi tem 15 casas de precisão.',
              vars: { R: { de: 1, ate: 10, passo: 0.5 } }
            },
            {
              t: 'codigo',
              p: 'Calcule o volume de uma esfera de raio {R} (4/3 × π × r³), com 2 casas',
              start: `import math
r = {R}
`,
              sol: `import math
r = {R}
print(round(4 / 3 * math.pi * r ** 3, 2))`,
              dica: '4 / 3 * math.pi * r ** 3',
              exp: 'Cuidado com 4 / 3: em Python 3 dá 1.333..., e não 1.',
              vars: { R: { de: 1, ate: 10 } }
            },
            {
              t: 'codigo',
              p: 'Mostre a média e a mediana das medidas com o módulo statistics, uma por linha',
              start: `import statistics
medidas = {L}
`,
              sol: `import statistics
medidas = {L}
print(statistics.mean(medidas))
print(statistics.median(medidas))`,
              dica: 'statistics.mean e statistics.median.',
              exp: 'Quando há um valor muito fora, a mediana descreve melhor o grupo do que a média.',
              vars: { L: ['[10, 12, 11, 40]', '[3, 1, 2]', '[5, 5, 6, 8, 100]'] }
            },
            {
              t: 'codigo',
              p: 'Calcule o desvio padrão das medidas com 3 casas e, na linha de baixo, mostre Estável se ele for menor que 0.2 ou Instável se não for',
              start: `import statistics
medidas = {L}
`,
              sol: `import statistics
medidas = {L}
dp = statistics.stdev(medidas)
print(round(dp, 3))
print("Estável" if dp < 0.2 else "Instável")`,
              dica: 'statistics.stdev e um if de uma linha.',
              exp: 'O desvio padrão mede o quanto as medidas se espalham em volta da média.',
              vars: {
                L: [
                  '[10.0, 10.1, 9.9, 10.05]',
                  '[9.5, 10.4, 10.0, 9.8]',
                  '[5.01, 5.02, 4.99, 5.0]'
                ]
              }
            }
          ]
        },
        {
          id: 'py5l5',
          titulo: 'Tratando erros com try',
          exs: [
            {
              t: 'texto',
              titulo: 'try e except',
              blocos: [
                {
                  p: 'Alguns erros não dependem de você: a pessoa digita letra onde devia ser número, ou o divisor é zero. Com `try` e `except`, o programa trata o erro em vez de parar.'
                },
                {
                  code: `texto = "abc"
try:
    n = int(texto)
    print(n * 2)
except ValueError:
    print("Isso não é um número inteiro.")`
                },
                {
                  p: 'Combinado com `while True` e `break`, dá para pedir de novo até a pessoa digitar certo.'
                },
                {
                  code: `while True:
    try:
        n = int(input("Número: "))
        break
    except ValueError:
        print("Digite um número inteiro.")`,
                  semTeste: true
                },
                {
                  dica: 'Escreva no except o tipo do erro que você espera, como ValueError. Um except sem tipo esconde erros que você precisava ver.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual erro aparece em `int("abc")`?',
              ops: ['ValueError', 'ZeroDivisionError', 'KeyError'],
              c: 0,
              exp: 'O texto não pôde virar número.'
            },
            {
              t: 'escolha',
              p: 'O que `except ZeroDivisionError:` captura?',
              ops: ['Divisões por zero', 'Qualquer erro', 'Erros de digitação no código'],
              c: 0,
              exp: 'Só o tipo de erro que está escrito.'
            },
            {
              t: 'complete',
              p: 'Complete o tratamento de erro',
              code: `try:
    n = int(t)
___ ValueError:
    n = 0`,
              bank: ['except', 'catch', 'error', 'else'],
              c: ['except'],
              exp: 'catch é de outras linguagens; em Python, except.'
            },
            {
              t: 'codigo',
              p: 'Peça um número até a pessoa digitar um inteiro e mostre o dobro no formato O dobro é 20',
              start: `while True:
    n = int(input("Número: "))
    break
`,
              sol: `while True:
    try:
        n = int(input("Número: "))
        break
    except ValueError:
        print("Digite um número inteiro.")
print(f"O dobro é {n * 2}")`,
              dica: 'Coloque o int(input(...)) dentro de um try e, no except ValueError, mostre Digite um número inteiro.',
              exp: 'A primeira entrada foi recusada; a segunda passou.',
              entrada: ['{X}', '{N}'],
              vars: { X: ['abc', '1.5', 'dez'], N: { de: 2, ate: 50 } }
            },
            {
              t: 'codigo',
              p: 'Escreva dividir(a, b), que devolve a / b, ou o texto Divisão por zero se b for 0, usando try',
              start: `def dividir(a, b):
    return a / b

print(dividir({A}, {B}))
print(dividir(1, 0))
`,
              sol: `def dividir(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Divisão por zero"

print(dividir({A}, {B}))
print(dividir(1, 0))`,
              dica: 'Dentro de um try, return a / b; no except ZeroDivisionError, devolva o texto.',
              exp: 'Também daria com um if b == 0. O try é útil quando o erro pode vir de vários lugares.',
              vars: { A: { de: 1, ate: 50 }, B: { de: 1, ate: 9 } }
            },
            {
              t: 'codigo',
              p: 'Some os itens da lista que são números e conte quantos foram ignorados. Mostre a soma e, na linha de baixo, os ignorados',
              start: `itens = {L}
`,
              sol: `itens = {L}
soma = 0
ignorados = 0
for t in itens:
    try:
        soma += float(t)
    except ValueError:
        ignorados += 1
print(soma)
print(ignorados)`,
              dica: 'float(t) dentro de um try; no except, conte.',
              exp: 'Dados reais quase sempre trazem valores estragados.',
              vars: {
                L: [
                  '["10", "x", "2.5", "", "3"]',
                  '["1", "2", "três", "4"]',
                  '["abc", "7.5", "2.5"]'
                ]
              }
            }
          ]
        }
      ]
    }
  ]
});
