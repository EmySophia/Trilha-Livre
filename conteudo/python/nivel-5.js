/* Trilha Livre · Python do zero · Nível 5: Funções e módulos
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'python',
  n: 5,
  titulo: 'Funções e módulos',
  desc: 'Criar funções, usar math e tratar erros.',
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
              p: 'O que faz o return?',
              ops: [
                'Devolve um valor para quem chamou a função',
                'Mostra o valor na tela',
                'Repete a função'
              ],
              c: 0,
              exp: 'Quem mostra é o print.'
            },
            {
              t: 'codigo',
              p: 'Escreva celsius_para_fahrenheit(c), que devolve c * 1.8 + 32',
              start: `def celsius_para_fahrenheit(c):
    pass  # troque esta linha

print(celsius_para_fahrenheit(0))
print(celsius_para_fahrenheit(100))
print(round(celsius_para_fahrenheit(37), 1))
`,
              saida: `32.0
212.0
98.6`,
              sol: `def celsius_para_fahrenheit(c):
    return c * 1.8 + 32

print(celsius_para_fahrenheit(0))
print(celsius_para_fahrenheit(100))
print(round(celsius_para_fahrenheit(37), 1))`,
              dica: 'return c * 1.8 + 32',
              exp: 'O round no último teste evita casas a mais, por causa de como o computador guarda números com ponto.'
            },
            {
              t: 'codigo',
              p: 'Escreva media(lista), que devolve a média dos números da lista',
              start: `def media(lista):
    pass

print(media([7, 8, 9]))
print(media([10, 5]))
`,
              saida: `8.0
7.5`,
              sol: `def media(lista):
    return sum(lista) / len(lista)

print(media([7, 8, 9]))
print(media([10, 5]))`,
              dica: 'sum(lista) / len(lista)',
              exp: 'Funções pequenas e com nome claro deixam o programa fácil de ler.'
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
              p: 'Com def f(a, b=2), quanto dá f(5) se f devolve a * b?',
              ops: ['10', '5', 'Erro'],
              c: 0,
              exp: 'b fica com o padrão 2.'
            },
            {
              t: 'codigo',
              p: 'Escreva juros_simples(capital, taxa, meses=12), que devolve capital * taxa / 100 * meses',
              start: `def juros_simples(capital, taxa, meses=12):
    pass

print(juros_simples(1000, 2))
print(juros_simples(1000, 2, 6))
`,
              saida: `240.0
120.0`,
              sol: `def juros_simples(capital, taxa, meses=12):
    return capital * taxa / 100 * meses

print(juros_simples(1000, 2))
print(juros_simples(1000, 2, 6))`,
              dica: 'return capital * taxa / 100 * meses',
              exp: 'Os números são só um exemplo de conta, não uma recomendação de investimento.'
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
              t: 'codigo',
              p: 'A função mostra o total em vez de devolver, e a última conta quebra. Conserte para mostrar 60',
              start: `def soma(a, b):
    print(a + b)

total = soma(10, 20)
print(total * 2)
`,
              saida: '60',
              sol: `def soma(a, b):
    return a + b

total = soma(10, 20)
print(total * 2)`,
              dica: 'Troque o print de dentro da função por return.',
              exp: 'Regra prática: funções que calculam devolvem; quem mostra é o programa principal.'
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
print(statistics.median(dados))`
                },
                { dica: 'Também dá para importar só uma função: `from math import sqrt`.' }
              ]
            },
            {
              t: 'escolha',
              p: 'O que math.ceil(2.1) devolve?',
              ops: ['3', '2', '2.1'],
              c: 0,
              exp: 'ceil arredonda para cima; floor, para baixo.'
            },
            {
              t: 'codigo',
              p: 'Calcule a hipotenusa de um triângulo com catetos 3 e 4 usando math.sqrt',
              start: `import math
a = 3
b = 4
`,
              saida: '5.0',
              sol: `import math
a = 3
b = 4
print(math.sqrt(a ** 2 + b ** 2))`,
              dica: 'Pitágoras: raiz de a² + b².',
              exp: 'math.sqrt sempre devolve número com ponto.'
            },
            {
              t: 'codigo',
              p: 'Mostre a área de um círculo de raio 2, arredondada com 2 casas',
              start: `import math
raio = 2
`,
              saida: '12.57',
              sol: `import math
raio = 2
print(round(math.pi * raio ** 2, 2))`,
              dica: 'Área = pi vezes raio ao quadrado.',
              exp: 'math.pi tem 15 casas de precisão.'
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
              p: 'Qual erro aparece em int("abc")?',
              ops: ['ValueError', 'ZeroDivisionError', 'KeyError'],
              c: 0,
              exp: 'O texto não pôde virar número.'
            },
            {
              t: 'codigo',
              p: 'Peça um número até a pessoa digitar um inteiro e mostre o dobro no formato O dobro é 20',
              start: `while True:
    n = int(input("Número: "))
    break
`,
              saida: `Número: abc
Digite um número inteiro.
Número: 10
O dobro é 20`,
              sol: `while True:
    try:
        n = int(input("Número: "))
        break
    except ValueError:
        print("Digite um número inteiro.")
print(f"O dobro é {n * 2}")`,
              dica: 'Coloque o int(input(...)) dentro de um try e, no except ValueError, mostre Digite um número inteiro.',
              exp: 'A primeira entrada, abc, foi recusada; a segunda passou.',
              entrada: ['abc', '10']
            },
            {
              t: 'codigo',
              p: 'Escreva dividir(a, b), que devolve a / b, ou o texto Divisão por zero se b for 0, usando try',
              start: `def dividir(a, b):
    return a / b

print(dividir(10, 4))
print(dividir(1, 0))
`,
              saida: `2.5
Divisão por zero`,
              sol: `def dividir(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Divisão por zero"

print(dividir(10, 4))
print(dividir(1, 0))`,
              dica: 'Dentro de um try, return a / b; no except ZeroDivisionError, devolva o texto.',
              exp: 'Também daria com um if b == 0. O try é útil quando o erro pode vir de vários lugares.'
            }
          ]
        }
      ]
    }
  ]
});
