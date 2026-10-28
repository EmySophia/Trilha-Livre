/* Trilha Livre · Python do zero · Nível 1: Primeiros passos
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'python',
  n: 1,
  titulo: 'Primeiros passos',
  desc: 'print, contas, variáveis, textos e input.',
  videos: [
    {
      titulo: 'Curso de Python 3, Mundo 1: Fundamentos',
      canal: 'Curso em Vídeo (Gustavo Guanabara)',
      obs: 'aulas 1 a 9: instalação, primeiros comandos, tipos e operadores',
      url: 'https://www.youtube.com/playlist?list=PLHz_AreHm4dlKP6QQCekuIPky1CiwmdI6'
    },
    {
      tipo: 'texto',
      titulo: 'Pense em Python',
      canal: 'Allen B. Downey, livro aberto',
      obs: 'capítulos 1 e 2, se você gosta de ler',
      url: 'https://penseallen.github.io/PensePython2e/'
    }
  ],
  unidades: [
    {
      id: 'pyu1',
      titulo: 'Olá, Python',
      conceito: 'print()',
      desc: 'O primeiro programa e as primeiras contas.',
      licoes: [
        {
          id: 'py1l1',
          titulo: 'O primeiro programa',
          exs: [
            {
              t: 'texto',
              titulo: 'Uma linguagem que parece inglês simples',
              blocos: [
                {
                  p: 'Python é uma linguagem de programação criada em 1991 por Guido van Rossum. Hoje é uma das mais usadas do mundo: em engenharia e ciência, para fazer contas e analisar dados; em automação, para fazer o computador repetir tarefas chatas; em inteligência artificial; e até em sites.'
                },
                {
                  p: 'O jeito de escrever é limpo. Para mostrar algo na tela, use `print`, com o texto entre aspas:'
                },
                { code: 'print("Olá, mundo!")' },
                {
                  p: 'Tudo o que vem depois de `#` é um comentário: o Python ignora. Comentários servem para explicar o código para pessoas.'
                },
                {
                  code: `# isto é um comentário
print("Python roda no seu celular")  # e aqui também`
                },
                {
                  dica: 'Se você fez o curso de lógica com JavaScript: `print` faz o papel do `console.log`, e não há ponto e vírgula no fim das linhas.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que o comando print faz?',
              ops: ['Mostra um valor na tela', 'Imprime numa impressora', 'Apaga a tela'],
              c: 0,
              exp: 'Apesar do nome, print só mostra o valor na saída do programa.'
            },
            {
              t: 'complete',
              p: 'Complete o comando que mostra uma frase',
              code: '___("Bom dia!")',
              bank: ['print', 'console.log', 'mostrar', 'echo'],
              c: ['print'],
              exp: 'Em Python, é print. console.log é do JavaScript.'
            },
            {
              t: 'codigo',
              p: 'Escreva um programa que mostre: Eu vou aprender Python',
              start: `# escreva seu código aqui
`,
              saida: 'Eu vou aprender Python',
              sol: 'print("Eu vou aprender Python")',
              dica: 'Use print com o texto entre aspas.',
              exp: 'Seu primeiro programa em Python!'
            },
            {
              t: 'codigo',
              p: 'Mostre duas linhas: primeiro Trilha Livre e depois Python do zero',
              start: `# um print para cada linha
`,
              saida: `Trilha Livre
Python do zero`,
              sol: `print("Trilha Livre")
print("Python do zero")`,
              dica: 'Cada print mostra uma linha.',
              exp: 'Cada print termina com uma quebra de linha.'
            }
          ]
        },
        {
          id: 'py1l2',
          titulo: 'Contas',
          exs: [
            {
              t: 'texto',
              titulo: 'Python como calculadora',
              blocos: [
                { p: 'Python faz contas com os sinais de sempre, mais alguns extras:' },
                {
                  tabela: {
                    cab: ['Sinal', 'Conta', 'Exemplo', 'Resultado'],
                    codigo: [0, 2, 3],
                    linhas: [
                      ['+', 'soma', '7 + 2', '9'],
                      ['-', 'subtração', '7 - 2', '5'],
                      ['*', 'multiplicação', '7 * 2', '14'],
                      ['/', 'divisão', '7 / 2', '3.5'],
                      ['//', 'divisão inteira', '7 // 2', '3'],
                      ['%', 'resto da divisão', '7 % 2', '1'],
                      ['**', 'potência', '7 ** 2', '49']
                    ]
                  }
                },
                {
                  p: 'A divisão com `/` sempre dá um número com vírgula (o Python usa ponto): `6 / 2` dá `3.0`. Use `//` quando quiser só a parte inteira.'
                },
                {
                  p: 'A ordem é a da matemática: primeiro `**`, depois `*`, `/`, `//` e `%`, e por último `+` e `-`. Parênteses mudam a ordem.'
                },
                {
                  code: `print(2 + 3 * 4)
print((2 + 3) * 4)
print(round(10 / 3, 2))`
                },
                { dica: '`round(valor, casas)` arredonda: `round(3.14159, 2)` dá `3.14`.' }
              ]
            },
            {
              t: 'escolha',
              p: 'Quanto dá 7 // 2?',
              ops: ['3', '3.5', '1'],
              c: 0,
              exp: 'A divisão inteira joga fora a parte depois do ponto.'
            },
            {
              t: 'escolha',
              p: 'Quanto dá 2 ** 3?',
              ops: ['8', '6', '5'],
              c: 0,
              exp: '2 elevado a 3: 2 × 2 × 2.'
            },
            {
              t: 'codigo',
              p: 'Mostre o resultado de (12 + 8) dividido por 4',
              start: `# use parênteses para somar antes de dividir
print(12 + 8 / 4)
`,
              saida: '5.0',
              sol: 'print((12 + 8) / 4)',
              dica: 'Sem parênteses, a divisão é feita antes da soma.',
              exp: 'A divisão com / sempre dá um número com ponto: 5.0.'
            },
            {
              t: 'codigo',
              p: 'Mostre a média das notas 7, 8.5 e 6, arredondada com 2 casas',
              start: `# some as três notas e divida por 3
`,
              saida: '7.17',
              sol: 'print(round((7 + 8.5 + 6) / 3, 2))',
              dica: 'Some entre parênteses, divida por 3 e use round(valor, 2).',
              exp: 'Sem o round, apareceriam muitas casas depois do ponto.'
            }
          ]
        }
      ]
    },
    {
      id: 'pyu2',
      titulo: 'Guardar e pedir dados',
      conceito: 'variável',
      desc: 'Variáveis, textos e a entrada do usuário.',
      licoes: [
        {
          id: 'py1l3',
          titulo: 'Variáveis',
          exs: [
            {
              t: 'texto',
              titulo: 'Uma etiqueta para um valor',
              blocos: [
                {
                  p: 'Uma variável guarda um valor com um nome. Em Python, basta escrever o nome, um `=` e o valor. Não precisa de `let` nem de declarar o tipo.'
                },
                {
                  code: `preco = 12.5
quantidade = 4
total = preco * quantidade
print(total)`
                },
                {
                  p: 'O valor pode mudar depois. O lado direito do `=` é calculado primeiro e o resultado vai para a variável da esquerda:'
                },
                {
                  code: `pontos = 10
pontos = pontos + 5
print(pontos)`
                },
                {
                  p: 'Regras dos nomes: letras, números e `_`, sem começar com número e sem espaço. O costume em Python é escrever com minúsculas e `_` entre as palavras, como `nota_final`.'
                },
                {
                  p: 'Cada valor tem um tipo. Os principais: `int` (número inteiro), `float` (número com ponto), `str` (texto) e `bool` (verdadeiro ou falso). A função `type` mostra o tipo.'
                },
                {
                  code: `print(type(10))
print(type(2.5))
print(type("oi"))`
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual destes é um nome de variável válido?',
              ops: ['nota_final', '2nota', 'nota final'],
              c: 0,
              exp: 'Não pode começar com número nem ter espaço.'
            },
            {
              t: 'escolha',
              p: 'Depois de x = 10 e x = x + 5, quanto vale x?',
              ops: ['15', '10', '5'],
              c: 0,
              exp: 'Primeiro calcula x + 5 com o valor antigo, depois guarda.'
            },
            {
              t: 'codigo',
              p: 'Um parafuso custa 0.35 e a caixa tem 200. Guarde os dois valores em variáveis e mostre o valor da caixa',
              start: `preco = 0.35
`,
              saida: '70.0',
              sol: `preco = 0.35
quantidade = 200
print(preco * quantidade)`,
              dica: 'Crie a variável quantidade e mostre preco * quantidade.',
              exp: 'Variáveis com bons nomes deixam a conta fácil de entender.'
            }
          ]
        },
        {
          id: 'py1l4',
          titulo: 'Textos',
          exs: [
            {
              t: 'texto',
              titulo: 'Trabalhando com str',
              blocos: [
                {
                  p: 'Texto, em Python, é `str`. Pode ser escrito com aspas duplas ou simples. Com `+`, dois textos se juntam.'
                },
                {
                  p: 'Para misturar texto e valores, a forma mais prática é a f-string: um `f` antes das aspas e as variáveis entre chaves.'
                },
                {
                  code: `nome = "Ana"
idade = 20
print(f"{nome} tem {idade} anos")`
                },
                { p: 'Alguns recursos úteis dos textos:' },
                {
                  tabela: {
                    cab: ['Código', 'O que faz', 'Resultado'],
                    codigo: [0, 2],
                    linhas: [
                      ['len("Brasil")', 'quantidade de caracteres', '6'],
                      ['"Brasil".upper()', 'tudo maiúsculo', 'BRASIL'],
                      ['"Brasil".lower()', 'tudo minúsculo', 'brasil'],
                      ['"  oi  ".strip()', 'tira espaços das pontas', 'oi'],
                      ['"Brasil"[0]', 'primeiro caractere', 'B'],
                      ['"Brasil"[-1]', 'último caractere', 'l'],
                      ['"Brasil"[0:3]', 'do 0 até antes do 3', 'Bra']
                    ]
                  }
                },
                {
                  dica: 'As posições começam no 0. Números negativos contam do fim: -1 é o último.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que "Recife"[0] devolve?',
              ops: ['R', 'e', 'Recife'],
              c: 0,
              exp: 'A primeira posição é a 0.'
            },
            {
              t: 'escolha',
              p: 'O que "Recife"[-1] devolve?',
              ops: ['e', 'R', 'f'],
              c: 0,
              exp: '-1 é o último caractere.'
            },
            {
              t: 'codigo',
              p: 'Usando as variáveis, mostre exatamente: Ana tem 20 anos e mora em Recife',
              start: `nome = "Ana"
idade = 20
cidade = "Recife"
`,
              saida: 'Ana tem 20 anos e mora em Recife',
              sol: `nome = "Ana"
idade = 20
cidade = "Recife"
print(f"{nome} tem {idade} anos e mora em {cidade}")`,
              dica: 'Use uma f-string: f"{nome} tem ...".',
              exp: 'Com f-string, não precisa converter o número para texto.'
            },
            {
              t: 'codigo',
              p: 'Mostre a cidade em letras maiúsculas e, na linha de baixo, quantas letras ela tem',
              start: `cidade = "manaus"
`,
              saida: `MANAUS
6`,
              sol: `cidade = "manaus"
print(cidade.upper())
print(len(cidade))`,
              dica: 'Use .upper() e len().',
              exp: 'upper() cria um texto novo; a variável continua em minúsculas.'
            }
          ]
        },
        {
          id: 'py1l5',
          titulo: 'Pedindo dados com input',
          exs: [
            {
              t: 'texto',
              titulo: 'O programa conversa com a pessoa',
              blocos: [
                {
                  p: 'A função `input` mostra uma pergunta e espera a pessoa digitar. O que ela digitar volta como texto.'
                },
                {
                  code: `nome = input("Qual é o seu nome? ")
print(f"Olá, {nome}!")`,
                  semTeste: true
                },
                {
                  p: 'Atenção: `input` sempre devolve texto, mesmo que a pessoa digite um número. Para fazer contas, converta com `int` (inteiro) ou `float` (com ponto).'
                },
                {
                  code: `idade = int(input("Idade: "))
print(idade + 1)`,
                  semTeste: true
                },
                {
                  p: 'Nos exercícios do app, a entrada é digitada automaticamente: o enunciado mostra o que o programa vai receber. Na saída, aparece a pergunta e o que foi digitado, como num terminal de verdade.'
                },
                { dica: 'Sem a conversão, "7" + "5" dá "75": o + junta textos.' }
              ]
            },
            {
              t: 'escolha',
              p: 'O que input devolve quando a pessoa digita 42?',
              ops: ['O texto "42"', 'O número 42', 'Nada'],
              c: 0,
              exp: 'Para virar número, use int() ou float().'
            },
            {
              t: 'codigo',
              p: 'Peça o nome com input("Qual é o seu nome? ") e cumprimente: Olá, nome!',
              start: `# peça o nome e mostre o cumprimento
`,
              saida: `Qual é o seu nome? Maria
Olá, Maria!`,
              sol: `nome = input("Qual é o seu nome? ")
print(f"Olá, {nome}!")`,
              dica: 'Guarde o que input devolve numa variável e use uma f-string.',
              exp: 'Repare que a pergunta e o que foi digitado aparecem na saída.',
              entrada: ['Maria']
            },
            {
              t: 'codigo',
              p: 'Este programa deveria somar dois números, mas mostra 75. Conserte',
              start: `a = input("Primeiro número: ")
b = input("Segundo número: ")
print(a + b)
`,
              saida: `Primeiro número: 7
Segundo número: 5
12`,
              sol: `a = int(input("Primeiro número: "))
b = int(input("Segundo número: "))
print(a + b)`,
              dica: 'Converta cada input com int().',
              exp: 'Agora o + soma números, e não junta textos.',
              entrada: ['7', '5']
            }
          ]
        }
      ]
    }
  ]
});
