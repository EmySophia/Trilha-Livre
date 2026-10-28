/* Trilha Livre · Python do zero · Nível 3: Repetição
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'python',
  n: 3,
  titulo: 'Repetição',
  desc: 'while, for, range e os padrões de contar, somar e achar o maior.',
  videos: [
    {
      titulo: 'Curso de Python 3, Mundo 2: Estruturas de Controle',
      canal: 'Curso em Vídeo (Gustavo Guanabara)',
      obs: 'aulas sobre for e while',
      url: 'https://www.youtube.com/playlist?list=PLHz_AreHm4dk_nZHmxxf_J0WRAqy5Czye'
    },
    {
      tipo: 'texto',
      titulo: 'Pense em Python',
      canal: 'Allen B. Downey, livro aberto',
      obs: 'capítulo 7, Iteração',
      url: 'https://penseallen.github.io/PensePython2e/'
    }
  ],
  unidades: [
    {
      id: 'pyu5',
      titulo: 'Repetir com while e for',
      conceito: 'for',
      desc: 'Laços para não repetir código.',
      licoes: [
        {
          id: 'py3l1',
          titulo: 'while',
          exs: [
            {
              t: 'texto',
              titulo: 'Enquanto for verdade, repete',
              blocos: [
                {
                  p: 'O `while` repete o bloco enquanto a condição for verdadeira. Alguma coisa dentro do bloco precisa mudar, senão o laço nunca termina.'
                },
                {
                  code: `n = 1
while n <= 3:
    print(n)
    n = n + 1
print("Acabou")`
                },
                {
                  p: 'A forma `n += 1` é um atalho para `n = n + 1`. Também existem `-=`, `*=` e `/=`.'
                },
                { dica: 'Laço infinito? O app para o programa depois de 5 segundos e avisa.' }
              ]
            },
            {
              t: 'escolha',
              p: 'Quantas vezes o exemplo mostra um número?',
              ops: ['3', '4', 'Infinitas'],
              c: 0,
              exp: 'n vale 1, 2 e 3; quando chega a 4, a condição fica falsa.'
            },
            {
              t: 'codigo',
              p: 'Faça uma contagem regressiva de 5 até 1 e depois mostre Já!',
              start: `n = 5
`,
              saida: `5
4
3
2
1
Já!`,
              sol: `n = 5
while n >= 1:
    print(n)
    n -= 1
print("Já!")`,
              dica: 'Enquanto n >= 1, mostre n e diminua 1.',
              exp: 'O print("Já!") fica fora do laço, sem recuo.'
            },
            {
              t: 'codigo',
              p: 'Some os números de 1 a 100 com while e mostre o total',
              start: `n = 1
total = 0
`,
              saida: '5050',
              sol: `n = 1
total = 0
while n <= 100:
    total += n
    n += 1
print(total)`,
              dica: 'Dentro do laço: total += n e n += 1.',
              exp: 'Conta-se que Gauss fez essa soma de cabeça ainda criança.'
            }
          ]
        },
        {
          id: 'py3l2',
          titulo: 'for e range',
          exs: [
            {
              t: 'texto',
              titulo: 'Repetir um número certo de vezes',
              blocos: [
                {
                  p: 'Quando você sabe quantas vezes vai repetir, o `for` com `range` é mais simples.'
                },
                {
                  tabela: {
                    cab: ['Código', 'Números'],
                    codigo: [0, 1],
                    linhas: [
                      ['range(5)', '0, 1, 2, 3, 4'],
                      ['range(1, 6)', '1, 2, 3, 4, 5'],
                      ['range(0, 11, 5)', '0, 5, 10'],
                      ['range(3, 0, -1)', '3, 2, 1']
                    ]
                  }
                },
                { p: 'Repare: o segundo número não entra. `range(1, 6)` para no 5.' },
                {
                  code: `for i in range(1, 4):
    print(f"Volta {i}")`
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Que números range(2, 8, 2) gera?',
              ops: ['2, 4, 6', '2, 4, 6, 8', '2, 8'],
              c: 0,
              exp: 'O 8 não entra: o fim nunca entra.'
            },
            {
              t: 'codigo',
              p: 'Mostre a tabuada do 7, de 7 x 1 = 7 até 7 x 10 = 70',
              start: `n = 7
`,
              saida: `7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70`,
              sol: `n = 7
for i in range(1, 11):
    print(f"{n} x {i} = {n * i}")`,
              dica: 'for i in range(1, 11): e uma f-string com a conta.',
              exp: 'range(1, 11) vai de 1 a 10.'
            },
            {
              t: 'codigo',
              p: 'Mostre os números pares de 0 a 20, um por linha, usando o terceiro valor do range',
              start: `# for i in range(início, fim, passo):
`,
              saida: `0
2
4
6
8
10
12
14
16
18
20`,
              sol: `for i in range(0, 21, 2):
    print(i)`,
              dica: 'range(0, 21, 2): o fim é 21 para o 20 entrar.',
              exp: 'O passo pode ser qualquer número, até negativo.'
            }
          ]
        },
        {
          id: 'py3l3',
          titulo: 'Percorrendo textos',
          exs: [
            {
              t: 'texto',
              titulo: 'for em qualquer sequência',
              blocos: [
                {
                  p: 'O `for` percorre qualquer sequência: os números de um range, as letras de um texto ou os itens de uma lista.'
                },
                {
                  code: `for letra in "sol":
    print(letra.upper())`
                },
                {
                  p: 'Dois comandos ajudam a controlar o laço: `break` sai dele na hora, e `continue` pula para a próxima volta.'
                },
                {
                  code: `for n in range(1, 10):
    if n == 5:
        break
    if n % 2 == 0:
        continue
    print(n)`
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que o segundo exemplo mostra?',
              ops: ['1 e 3', '1, 3, 5, 7 e 9', '2 e 4'],
              c: 0,
              exp: 'Os pares são pulados, e o laço para no 5.'
            },
            {
              t: 'codigo',
              p: 'Conte quantas vogais tem a palavra e mostre o número',
              start: `palavra = "paralelepipedo"
contador = 0
`,
              saida: '7',
              sol: `palavra = "paralelepipedo"
contador = 0
for letra in palavra:
    if letra in "aeiou":
        contador += 1
print(contador)`,
              dica: 'Para cada letra, se ela estiver em "aeiou", some 1 no contador.',
              exp: 'É o padrão contador: começa em 0 e soma 1 a cada achado.'
            },
            {
              t: 'codigo',
              p: 'Mostre a palavra de trás para a frente, juntando as letras num texto novo',
              start: `palavra = "Brasil"
invertida = ""
`,
              saida: 'lisarB',
              sol: `palavra = "Brasil"
invertida = ""
for letra in palavra:
    invertida = letra + invertida
print(invertida)`,
              dica: 'Coloque cada letra na frente do que já tem: invertida = letra + invertida.',
              exp: 'Em Python há um atalho: palavra[::-1].'
            }
          ]
        }
      ]
    },
    {
      id: 'pyu6',
      titulo: 'Padrões de laço',
      conceito: 'acumulador',
      desc: 'Somar, contar, achar o maior e laços dentro de laços.',
      licoes: [
        {
          id: 'py3l4',
          titulo: 'Somar, contar e achar o maior',
          exs: [
            {
              t: 'texto',
              titulo: 'Três padrões que resolvem muita coisa',
              blocos: [
                {
                  p: 'Acumulador: uma variável que começa em 0 e vai somando. Contador: começa em 0 e soma 1 a cada caso. Maior valor: começa com o primeiro e troca quando aparece um maior.'
                },
                {
                  code: `medidas = [12.1, 11.8, 12.4, 12.0]
soma = 0
maior = medidas[0]
for m in medidas:
    soma += m
    if m > maior:
        maior = m
print(round(soma / len(medidas), 2))
print(maior)`
                },
                {
                  dica: 'O Python tem atalhos prontos: `sum`, `max`, `min` e `len`. Mas saber fazer na mão ajuda quando a regra é diferente.'
                }
              ]
            },
            {
              t: 'codigo',
              p: 'Some só os números pares de 1 a 100 e mostre o total',
              start: `total = 0
`,
              saida: '2550',
              sol: `total = 0
for n in range(1, 101):
    if n % 2 == 0:
        total += n
print(total)`,
              dica: 'Use o resto: n % 2 == 0 quer dizer par.',
              exp: 'Também daria com range(2, 101, 2).'
            },
            {
              t: 'codigo',
              p: 'Conte quantas peças passaram da tolerância: maiores que 10.2 ou menores que 9.8',
              start: `pecas = [10.0, 10.3, 9.9, 9.7, 10.1, 10.25]
fora = 0
`,
              saida: '3',
              sol: `pecas = [10.0, 10.3, 9.9, 9.7, 10.1, 10.25]
fora = 0
for p in pecas:
    if p > 10.2 or p < 9.8:
        fora += 1
print(fora)`,
              dica: 'Use or: basta uma das duas condições.',
              exp: 'Controle de qualidade é exatamente isso: contar o que saiu da faixa.'
            },
            {
              t: 'codigo',
              p: 'Ache a menor temperatura da lista sem usar min',
              start: `temps = [23, 19, 25, 17, 21]
`,
              saida: '17',
              sol: `temps = [23, 19, 25, 17, 21]
menor = temps[0]
for t in temps:
    if t < menor:
        menor = t
print(menor)`,
              dica: 'Comece com menor = temps[0] e troque quando achar um valor menor.',
              exp: 'Começar com o primeiro item evita chutar um valor inicial.'
            }
          ]
        },
        {
          id: 'py3l5',
          titulo: 'Laços dentro de laços',
          exs: [
            {
              t: 'texto',
              titulo: 'Uma volta completa para cada volta',
              blocos: [
                {
                  p: 'Um laço dentro de outro roda inteiro a cada volta do de fora. É assim que se percorrem tabelas: linhas e colunas.'
                },
                {
                  code: `for linha in range(1, 4):
    for coluna in range(1, 4):
        print(linha * coluna, end=" ")
    print()`
                },
                {
                  p: 'O `end=" "` faz o print terminar com um espaço em vez de pular linha. O `print()` vazio só pula a linha.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Quantas vezes o print de dentro roda no exemplo?',
              ops: ['9', '3', '6'],
              c: 0,
              exp: '3 linhas vezes 3 colunas.'
            },
            {
              t: 'codigo',
              p: 'Desenhe um triângulo de asteriscos com 4 linhas: *, **, *** e ****',
              start: `# dica: "*" * 3 dá "***"
`,
              saida: `*
**
***
****`,
              sol: `for i in range(1, 5):
    print("*" * i)`,
              dica: 'Em Python, texto vezes número repete o texto.',
              exp: 'Dá para fazer com dois laços também, mas a multiplicação de texto é um atalho.'
            },
            {
              t: 'codigo',
              p: 'Mostre todas as combinações de tamanho e cor, no formato P-azul, uma por linha',
              start: `tamanhos = ["P", "M"]
cores = ["azul", "preto"]
`,
              saida: `P-azul
P-preto
M-azul
M-preto`,
              sol: `tamanhos = ["P", "M"]
cores = ["azul", "preto"]
for t in tamanhos:
    for c in cores:
        print(f"{t}-{c}")`,
              dica: 'Um for para os tamanhos e, dentro dele, um for para as cores.',
              exp: '2 tamanhos vezes 2 cores: 4 combinações.'
            }
          ]
        }
      ]
    }
  ]
});
