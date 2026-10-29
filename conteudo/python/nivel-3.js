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
              t: 'escolha',
              p: 'Quantas vezes este laço roda?',
              ops: ['{= Math.ceil(N / P) }', '{N}', '{= Math.ceil(N / P) + 1 }'],
              c: 0,
              exp: 'Conte quantos passos de {P} cabem até chegar a {N}.',
              code: `n = 0
while n < {N}:
    n += {P}`,
              vars: { N: { de: 5, ate: 20 }, P: { de: 2, ate: 4 } }
            },
            {
              t: 'complete',
              p: 'Complete para o laço repetir enquanto n for menor que 10',
              code: 'while n ___ 10:',
              bank: ['<', '>', '==', '='],
              c: ['<'],
              exp: 'O = sozinho guarda valor; para comparar, use <.'
            },
            {
              t: 'codigo',
              p: 'Faça uma contagem regressiva de {N} até 1 e depois mostre Já!',
              start: `n = {N}
`,
              sol: `n = {N}
while n >= 1:
    print(n)
    n -= 1
print("Já!")`,
              dica: 'Enquanto n >= 1, mostre n e diminua 1.',
              exp: 'O print("Já!") fica fora do laço, sem recuo.',
              vars: { N: { de: 3, ate: 8 } }
            },
            {
              t: 'codigo',
              p: 'Some os números de 1 a {N} com while e mostre o total',
              start: `n = 1
total = 0
`,
              sol: `n = 1
total = 0
while n <= {N}:
    total += n
    n += 1
print(total)`,
              dica: 'Dentro do laço: total += n e n += 1.',
              exp: 'Conta-se que Gauss fez a soma de 1 a 100 de cabeça ainda criança.',
              vars: { N: [10, 50, 100, 200] }
            },
            {
              t: 'codigo',
              p: 'Mostre as potências de 2 menores que {L}, uma por linha, começando em 1',
              start: `n = 1
`,
              sol: `n = 1
while n < {L}:
    print(n)
    n *= 2`,
              dica: 'Enquanto n < {L}: mostre e dobre.',
              exp: 'Potências de 2 aparecem em todo lugar na computação: 8 bits, 1024 bytes...',
              vars: { L: [50, 100, 500, 1000] }
            },
            {
              t: 'codigo',
              p: 'Peça números com `int(input("Número: "))` até a pessoa digitar 0 e mostre a soma',
              start: `total = 0
`,
              sol: `total = 0
n = int(input("Número: "))
while n != 0:
    total += n
    n = int(input("Número: "))
print(total)`,
              dica: 'Leia um número antes do laço e outro no fim de cada volta.',
              exp: 'O 0 é o sinal de parada, ou sentinela.',
              entrada: ['{A}', '{B}', '{CC}', '0'],
              vars: { A: { de: 1, ate: 20 }, B: { de: 1, ate: 20 }, CC: { de: 1, ate: 20 } }
            },
            {
              t: 'codigo',
              p: 'Com {T}% de juros ao ano, em quantos anos R$ 1000 passam de R$ 2000? Mostre o número de anos',
              start: `valor = 1000
anos = 0
`,
              sol: `valor = 1000
anos = 0
while valor <= 2000:
    valor *= 1 + {T} / 100
    anos += 1
print(anos)`,
              dica: 'Enquanto valor <= 2000: aplique os juros e conte um ano.',
              exp: 'A regra dos 72: dividindo 72 pela taxa, você tem uma boa estimativa.',
              vars: { T: [5, 6, 8, 10, 12] }
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
              p: 'Que números `range(2, 8, 2)` gera?',
              ops: ['2, 4, 6', '2, 4, 6, 8', '2, 8'],
              c: 0,
              exp: 'O 8 não entra: o fim nunca entra.'
            },
            {
              t: 'escolha',
              p: 'De que número a que número vai `range({A}, {B})`?',
              ops: ['de {A} a {= B - 1 }', 'de {A} a {B}', 'de {= A + 1 } a {B}'],
              c: 0,
              exp: 'O fim não entra.',
              vars: { A: { de: 1, ate: 5 }, B: { de: 7, ate: 12 } }
            },
            {
              t: 'complete',
              p: 'Complete para contar de 10 até 1',
              code: 'for i in range(10, 0, ___):',
              bank: ['-1', '1', '0', '-10'],
              c: ['-1'],
              exp: 'O passo negativo faz o range andar para trás.'
            },
            {
              t: 'codigo',
              p: 'Mostre a tabuada do {N}, de {N} x 1 = {N} até {N} x 10 = {= N * 10 }',
              start: `n = {N}
`,
              sol: `n = {N}
for i in range(1, 11):
    print(f"{n} x {i} = {n * i}")`,
              dica: 'for i in range(1, 11): e uma f-string com a conta.',
              exp: 'range(1, 11) vai de 1 a 10.',
              vars: { N: { de: 2, ate: 9 } }
            },
            {
              t: 'codigo',
              p: 'Mostre a contagem de {A} até {= A + P * Q }, de {P} em {P}, um número por linha',
              start: `# use o terceiro valor do range
`,
              sol: `for i in range({A}, {= A + P * Q + 1 }, {P}):
    print(i)`,
              dica: 'range(início, fim + 1, passo): o fim precisa passar do último número.',
              exp: 'O passo pode ser qualquer número, até negativo.',
              vars: { A: { de: 0, ate: 5 }, P: { de: 2, ate: 5 }, Q: { de: 3, ate: 6 } }
            },
            {
              t: 'codigo',
              p: 'Mostre a soma dos quadrados de 1 a {N} (1² + 2² + ... + {N}²)',
              start: `total = 0
`,
              sol: `total = 0
for i in range(1, {= N + 1 }):
    total += i ** 2
print(total)`,
              dica: 'Acumule i ** 2 a cada volta.',
              exp: 'Existe fórmula para isso, mas o laço funciona para qualquer regra.',
              vars: { N: { de: 3, ate: 12 } }
            },
            {
              t: 'codigo',
              p: 'Mostre a tabela de conversão de 0 °C a 100 °C, de 20 em 20, no formato 0 °C = 32.0 °F',
              start: `# F = C * 1.8 + 32
`,
              saida: `0 °C = 32.0 °F
20 °C = 68.0 °F
40 °C = 104.0 °F
60 °C = 140.0 °F
80 °C = 176.0 °F
100 °C = 212.0 °F`,
              sol: `for c in range(0, 101, 20):
    print(f"{c} °C = {c * 1.8 + 32} °F")`,
              dica: 'range(0, 101, 20) e a fórmula numa f-string.',
              exp: 'Tabelas de conversão são um uso típico do for.'
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
              t: 'escolha',
              p: 'O que o `break` faz?',
              ops: ['Sai do laço na hora', 'Pula para a próxima volta', 'Para o programa inteiro'],
              c: 0,
              exp: 'Quem pula para a próxima volta é o continue.'
            },
            {
              t: 'complete',
              p: 'Complete para percorrer as letras',
              code: 'for letra ___ "abc":',
              bank: ['in', 'of', '=', 'from'],
              c: ['in'],
              exp: 'Em Python, o for sempre usa in.'
            },
            {
              t: 'codigo',
              p: 'Conte quantas vogais tem a palavra e mostre o número',
              start: `palavra = "{P}"
contador = 0
`,
              sol: `palavra = "{P}"
contador = 0
for letra in palavra:
    if letra in "aeiou":
        contador += 1
print(contador)`,
              dica: 'Para cada letra, se ela estiver em "aeiou", some 1 no contador.',
              exp: 'É o padrão contador: começa em 0 e soma 1 a cada achado.',
              vars: { P: ['paralelepipedo', 'computador', 'abacaxi', 'python', 'engenharia'] }
            },
            {
              t: 'codigo',
              p: 'Conte quantas vezes a letra "{L}" aparece na palavra',
              start: `palavra = "{P}"
`,
              sol: `palavra = "{P}"
vezes = 0
for letra in palavra:
    if letra == "{L}":
        vezes += 1
print(vezes)`,
              dica: 'Compare cada letra com "{L}".',
              exp: 'O Python também tem o atalho palavra.count("{L}").',
              vars: { P: ['banana', 'arara', 'abacaxi', 'barreira'], L: ['a', 'r', 'b'] }
            },
            {
              t: 'codigo',
              p: 'Mostre a palavra de trás para a frente, juntando as letras num texto novo',
              start: `palavra = "{P}"
invertida = ""
`,
              sol: `palavra = "{P}"
invertida = ""
for letra in palavra:
    invertida = letra + invertida
print(invertida)`,
              dica: 'Coloque cada letra na frente do que já tem: invertida = letra + invertida.',
              exp: 'Em Python há um atalho: palavra[::-1].',
              vars: { P: ['Brasil', 'Python', 'amor', 'Recife'] }
            },
            {
              t: 'codigo',
              p: 'Mostre só as consoantes da palavra, juntas, sem usar continue',
              start: `palavra = "{P}"
`,
              sol: `palavra = "{P}"
consoantes = ""
for letra in palavra:
    if letra not in "aeiou":
        consoantes += letra
print(consoantes)`,
              dica: 'Use not in para testar se não é vogal.',
              exp: 'not in é o contrário de in.',
              vars: { P: ['paralelepipedo', 'computador', 'engenharia', 'bicicleta'] }
            },
            {
              t: 'codigo',
              p: 'Sem usar [::-1], diga se a palavra é um palíndromo (igual de trás para a frente). Mostre True ou False',
              start: `palavra = "{P}"
`,
              sol: `palavra = "{P}"
invertida = ""
for letra in palavra:
    invertida = letra + invertida
print(invertida == palavra)`,
              dica: 'Inverta com o laço e compare com a original.',
              exp: 'arara, ovo e radar são palíndromos.',
              vars: { P: ['arara', 'ovo', 'radar', 'python', 'casa', 'reviver'] }
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
              t: 'escolha',
              p: 'Para achar o maior valor, com o que é melhor começar a variável maior?',
              ops: ['Com o primeiro item da lista', 'Com 0', 'Com 1000'],
              c: 0,
              exp: 'Começar com 0 dá errado se todos os números forem negativos.'
            },
            {
              t: 'codigo',
              p: 'Some só os números pares de 1 a {N} e mostre o total',
              start: `total = 0
`,
              sol: `total = 0
for n in range(1, {= N + 1 }):
    if n % 2 == 0:
        total += n
print(total)`,
              dica: 'Use o resto: n % 2 == 0 quer dizer par.',
              exp: 'Também daria com range(2, ..., 2).',
              vars: { N: [10, 20, 50, 100] }
            },
            {
              t: 'codigo',
              p: 'Conte quantas peças passaram da tolerância: maiores que 10.2 ou menores que 9.8',
              start: `pecas = {L}
fora = 0
`,
              sol: `pecas = {L}
fora = 0
for p in pecas:
    if p > 10.2 or p < 9.8:
        fora += 1
print(fora)`,
              dica: 'Use or: basta uma das duas condições.',
              exp: 'Controle de qualidade é exatamente isso: contar o que saiu da faixa.',
              vars: {
                L: [
                  '[10.0, 10.3, 9.9, 9.7, 10.1, 10.25]',
                  '[9.9, 10.0, 10.1]',
                  '[9.5, 10.5, 10.0, 9.85, 10.21]'
                ]
              }
            },
            {
              t: 'codigo',
              p: 'Ache a menor temperatura da lista sem usar min',
              start: `temps = {L}
`,
              sol: `temps = {L}
menor = temps[0]
for t in temps:
    if t < menor:
        menor = t
print(menor)`,
              dica: 'Comece com menor = temps[0] e troque quando achar um valor menor.',
              exp: 'Começar com o primeiro item evita chutar um valor inicial.',
              vars: { L: ['[23, 19, 25, 17, 21]', '[-3, 2, -8, 0]', '[30, 31, 29, 33]'] }
            },
            {
              t: 'codigo',
              p: 'Calcule a média da lista sem usar sum, com um acumulador',
              start: `notas = {L}
`,
              sol: `notas = {L}
total = 0
for n in notas:
    total += n
print(total / len(notas))`,
              dica: 'Some tudo num acumulador e divida pela quantidade.',
              exp: 'É o que sum(notas) / len(notas) faz.',
              vars: { L: ['[7, 8, 9]', '[5.5, 6, 9.5, 8]', '[10, 4, 7, 7]'] }
            },
            {
              t: 'codigo',
              p: 'Conte quantos números da lista são maiores que {M}',
              start: `numeros = {L}
`,
              sol: `numeros = {L}
maiores = 0
for n in numeros:
    if n > {M}:
        maiores += 1
print(maiores)`,
              dica: 'Padrão contador com um if.',
              exp: 'Trocando a condição, o mesmo laço conta qualquer coisa.',
              vars: {
                L: ['[3, 9, 4, 7, 1, 8]', '[10, 2, 6, 6, 5]', '[1, 2, 3, 4, 5, 6, 7]'],
                M: { de: 3, ate: 7 }
              }
            },
            {
              t: 'codigo',
              p: 'Ache o segundo maior valor da lista, sem ordenar',
              start: `v = {L}
`,
              sol: `v = {L}
maior = segundo = None
for x in v:
    if maior is None or x > maior:
        segundo = maior
        maior = x
    elif x != maior and (segundo is None or x > segundo):
        segundo = x
print(segundo)`,
              dica: 'Guarde o maior e o segundo. Quando aparecer um novo maior, o antigo vira o segundo.',
              exp: 'Valores repetidos do maior não contam como segundo.',
              vars: { L: ['[4, 9, 2, 7]', '[10, 3, 10, 8]', '[1, 5, 3, 5, 4]'] }
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
                  p: 'O `end=" "` faz o print terminar com um espaço em vez de pular linha. O `print()` vazio só pula a linha. E texto vezes número repete o texto: `"*" * 3` dá `"***"`.'
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
              t: 'escolha',
              p: 'Com um laço de {A} voltas dentro de outro de {B}, quantas vezes o de dentro roda?',
              ops: ['{= A * B }', '{= A + B }', '{A}'],
              c: 0,
              exp: 'Multiplique as voltas.',
              vars: { A: { de: 2, ate: 6 }, B: { de: 2, ate: 6 } }
            },
            {
              t: 'complete',
              p: 'Complete para o print não pular a linha',
              code: 'print(i * j, end=___)',
              bank: ['" "', '"-n"', '0', 'True'],
              c: ['" "'],
              exp: 'end diz o que vai no fim, no lugar da quebra de linha.'
            },
            {
              t: 'codigo',
              p: 'Desenhe um triângulo de asteriscos com {N} linhas: *, **, *** e assim por diante',
              start: `# dica: "*" * 3 dá "***"
`,
              sol: `for i in range(1, {= N + 1 }):
    print("*" * i)`,
              dica: 'Em Python, texto vezes número repete o texto.',
              exp: 'Dá para fazer com dois laços também, mas a multiplicação de texto é um atalho.',
              vars: { N: { de: 3, ate: 6 } }
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
            },
            {
              t: 'codigo',
              p: 'Desenhe um retângulo de {L} linhas e {CC} colunas de #, usando dois laços e end=""',
              start: `# um laço para as linhas e outro para as colunas
`,
              sol: `for i in range({L}):
    for j in range({CC}):
        print("#", end="")
    print()`,
              dica: 'Dentro, print("#", end=""); fora do laço de dentro, print() para pular a linha.',
              exp: 'end="" cola um caractere no outro.',
              vars: { L: { de: 2, ate: 4 }, CC: { de: 3, ate: 8 } }
            },
            {
              t: 'codigo',
              p: 'Mostre a tabuada de 1 a {N} em forma de tabela: uma linha por número, com os produtos de 1 a {N} separados por espaço',
              start: `# dois laços e end=" "
`,
              sol: `for i in range(1, {= N + 1 }):
    for j in range(1, {= N + 1 }):
        print(i * j, end=" ")
    print()`,
              dica: 'Igual ao exemplo, até {N}.',
              exp: 'É a tabela de multiplicar que as escolas penduram na parede.',
              vars: { N: { de: 3, ate: 5 } }
            }
          ]
        }
      ]
    }
  ]
});
