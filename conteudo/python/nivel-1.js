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
              p: 'O que o comando `print` faz?',
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
              t: 'escolha',
              p: 'Qual destas linhas mostra Olá na tela?',
              ops: ['print("Olá")', 'print(Olá)', 'Print("Olá")'],
              c: 0,
              mono: true,
              exp: 'Sem aspas, o Python acha que Olá é o nome de uma variável. E print é com letra minúscula.'
            },
            {
              t: 'escolha',
              p: 'O que acontece com a linha `# print("oi")`?',
              ops: ['Nada: ela é um comentário', 'Mostra oi', 'Dá erro'],
              c: 0,
              exp: 'O # transforma a linha inteira em comentário.'
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
              p: 'Mostre exatamente: Meu nome é {NOME}',
              start: `# escreva seu código aqui
`,
              sol: 'print("Meu nome é {NOME}")',
              dica: 'O texto vai inteiro entre aspas.',
              exp: 'Cada vez que este exercício aparece, o nome muda.',
              vars: { NOME: ['Ana', 'Bruno', 'Carla', 'Davi', 'Elis', 'Fábio', 'Gal', 'Hugo'] }
            },
            {
              t: 'codigo',
              p: 'Mostre uma moldura: uma linha com 10 sinais de igual, a palavra Python e outra linha com 10 sinais de igual',
              start: `# três prints, um para cada linha
`,
              saida: `==========
Python
==========`,
              sol: `print("==========")
print("Python")
print("==========")`,
              dica: 'Cada print mostra uma linha.',
              exp: 'Dá para fazer desenhos e telas simples só com print.'
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
                  p: 'A divisão com `/` sempre dá um número com vírgula (o Python usa ponto): `6 / 2` dá `3.0`. Use `//` quando quiser só a parte inteira, e `%` para o que sobra.'
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
              p: 'Quanto dá `{A} // {B}`?',
              ops: ['{= Math.floor(A / B) }', '{= pyf(A / B) }', '{= A % B }'],
              c: 0,
              exp: 'A divisão inteira joga fora a parte depois do ponto.',
              vars: { A: { de: 7, ate: 30 }, B: { de: 2, ate: 6 } },
              se: 'A % B !== 0'
            },
            {
              t: 'escolha',
              p: 'Quanto dá `{A} % {B}`?',
              ops: ['{= A % B }', '{= Math.floor(A / B) }', '{= A * B }'],
              c: 0,
              exp: 'O % dá o resto da divisão.',
              vars: { A: { de: 7, ate: 30 }, B: { de: 2, ate: 6 } }
            },
            {
              t: 'escolha',
              p: 'Quanto dá `2 ** {N}`?',
              ops: ['{= 2 ** N }', '{= 2 * N }', '{= N ** 2 }'],
              c: 0,
              exp: '2 elevado a {N}: 2 multiplicado por ele mesmo {N} vezes.',
              vars: { N: { de: 3, ate: 8 } },
              se: 'N !== 4'
            },
            {
              t: 'complete',
              p: 'Complete para mostrar o resto da divisão de 10 por 3',
              code: 'print(10 ___ 3)',
              bank: ['%', '//', '/', '**'],
              c: ['%'],
              exp: '10 dividido por 3 dá 3 e sobra 1.'
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
            },
            {
              t: 'codigo',
              p: 'Uma pizza tem {F} fatias para {P} pessoas. Mostre quantas fatias inteiras cada pessoa come e, na linha de baixo, quantas sobram',
              start: `fatias = {F}
pessoas = {P}
`,
              sol: `fatias = {F}
pessoas = {P}
print(fatias // pessoas)
print(fatias % pessoas)`,
              dica: 'Divisão inteira para as fatias de cada um e resto para as que sobram.',
              exp: '// e % andam juntos: um dá quantas vezes cabe, o outro o que sobra.',
              vars: { F: { de: 8, ate: 16 }, P: { de: 3, ate: 5 } }
            },
            {
              t: 'codigo',
              p: 'R$ {CAP} rendem {TX}% ao mês, com juros compostos. Mostre quanto ficam depois de 12 meses, com 2 casas',
              start: `capital = {CAP}
taxa = {TX}
`,
              sol: `capital = {CAP}
taxa = {TX}
print(round(capital * (1 + taxa / 100) ** 12, 2))`,
              dica: 'Juros compostos: capital vezes (1 + taxa/100) elevado ao número de meses.',
              exp: 'É só um exemplo de conta, não uma recomendação de investimento.',
              vars: { CAP: [500, 1000, 1500, 2000], TX: [1, 2] }
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
                  p: 'O `print` aceita vários valores separados por vírgula e coloca um espaço entre eles: `print("Total:", total)`.'
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
              p: 'Depois de `x = {A}` e `x = x + {B}`, quanto vale x?',
              ops: ['{= A + B }', '{A}', '{B}'],
              c: 0,
              exp: 'Primeiro calcula x + {B} com o valor antigo, depois guarda.',
              vars: { A: { de: 2, ate: 20 }, B: { de: 2, ate: 9 } }
            },
            {
              t: 'escolha',
              p: 'Qual é o tipo de `3.0`?',
              ops: ['float', 'int', 'str'],
              c: 0,
              exp: 'Tem ponto, então é float, mesmo sendo um número redondo.'
            },
            {
              t: 'escolha',
              p: 'Depois de `x = {A}`, `y = x * 2` e `x = 1`, quanto vale y?',
              ops: ['{= A * 2 }', '2', '{= A + 2 }'],
              c: 0,
              exp: 'y guardou o resultado da conta na hora; mudar x depois não muda y.',
              vars: { A: { de: 3, ate: 9 } }
            },
            {
              t: 'ordene',
              p: 'Monte o programa que calcula o troco',
              lines: ['preco = 37.5', 'pago = 50', 'troco = pago - preco', 'print("Troco:", troco)'],
              exp: 'Uma variável precisa existir antes de ser usada.'
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
            },
            {
              t: 'codigo',
              p: 'Um carro rodou {KM} km com {L} litros. Mostre quantos km ele faz por litro, com 1 casa',
              start: `km = {KM}
litros = {L}
`,
              sol: `km = {KM}
litros = {L}
print(round(km / litros, 1))`,
              dica: 'Divida km por litros e arredonde com round(..., 1).',
              exp: 'Consumo é distância dividida pelo combustível.',
              vars: { KM: { de: 300, ate: 600, passo: 25 }, L: { de: 25, ate: 45 } }
            },
            {
              t: 'codigo',
              p: 'Converta {S} segundos em horas, minutos e segundos, no formato 1 h 2 min 3 s',
              start: `s = {S}
`,
              sol: `s = {S}
h = s // 3600
m = s % 3600 // 60
seg = s % 60
print(h, "h", m, "min", seg, "s")`,
              dica: 'Horas: s // 3600. Minutos: o que sobra das horas (s % 3600), dividido por 60. Segundos: s % 60.',
              exp: 'O print com vírgulas põe os espaços sozinho.',
              vars: { S: { de: 3700, ate: 20000 } }
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
                      ['"ana lima".title()', 'maiúscula no começo de cada palavra', 'Ana Lima'],
                      ['"  oi  ".strip()', 'tira espaços das pontas', 'oi'],
                      ['"Brasil"[0]', 'primeiro caractere', 'B'],
                      ['"Brasil"[-1]', 'último caractere', 'l'],
                      ['"Brasil"[0:3]', 'do 0 até antes do 3', 'Bra'],
                      ['"Brasil"[3:]', 'do 3 até o fim', 'sil']
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
              p: 'O que `"Recife"[0]` devolve?',
              ops: ['R', 'e', 'Recife'],
              c: 0,
              exp: 'A primeira posição é a 0.'
            },
            {
              t: 'escolha',
              p: 'O que `"Recife"[-1]` devolve?',
              ops: ['e', 'R', 'f'],
              c: 0,
              exp: '-1 é o último caractere.'
            },
            {
              t: 'escolha',
              p: 'Quanto dá `len("{PAL}")`?',
              ops: ['{= PAL.length }', '{= PAL.length + 1 }', '{= PAL.length - 1 }'],
              c: 0,
              exp: 'len conta os caracteres.',
              vars: {
                PAL: ['Python', 'Brasil', 'engenharia', 'dado', 'Recife', 'computador', 'Amazonas']
              }
            },
            {
              t: 'escolha',
              p: 'O que `"{PAL}"[0:3]` devolve?',
              ops: ['{= PAL.slice(0, 3) }', '{= PAL.slice(0, 2) }', '{= PAL.slice(1, 4) }'],
              c: 0,
              exp: 'Da posição 0 até antes da 3: três caracteres.',
              vars: { PAL: ['Python', 'Brasil', 'engenharia', 'Recife', 'computador', 'Amazonas'] }
            },
            {
              t: 'complete',
              p: 'Complete a f-string',
              code: 'print(___"Olá, {nome}!")',
              bank: ['f', 'r', 's', '$'],
              c: ['f'],
              exp: 'O f antes das aspas liga as chaves.'
            },
            {
              t: 'codigo',
              p: 'Usando as variáveis, mostre exatamente: {NOME} tem {I} anos e mora em {CID}',
              start: `nome = "{NOME}"
idade = {I}
cidade = "{CID}"
`,
              sol: `nome = "{NOME}"
idade = {I}
cidade = "{CID}"
print(f"{nome} tem {idade} anos e mora em {cidade}")`,
              dica: 'Use uma f-string: f"{nome} tem ...".',
              exp: 'Com f-string, não precisa converter o número para texto.',
              vars: {
                NOME: ['Ana', 'Bruno', 'Carla', 'Davi', 'Elis', 'Fábio', 'Gal', 'Hugo'],
                I: { de: 16, ate: 70 },
                CID: ['Recife', 'Manaus', 'Belém', 'Natal', 'Curitiba', 'Goiânia']
              }
            },
            {
              t: 'codigo',
              p: 'Mostre a cidade em letras maiúsculas e, na linha de baixo, quantas letras ela tem',
              start: `cidade = "{CID}"
`,
              sol: `cidade = "{CID}"
print(cidade.upper())
print(len(cidade))`,
              dica: 'Use .upper() e len().',
              exp: 'upper() cria um texto novo; a variável continua em minúsculas.',
              vars: { CID: ['manaus', 'recife', 'teresina', 'palmas', 'salvador'] }
            },
            {
              t: 'codigo',
              p: 'Mostre o texto com as 3 primeiras letras em maiúsculas e o resto como está',
              start: `t = "{PAL}"
`,
              sol: `t = "{PAL}"
print(t[:3].upper() + t[3:])`,
              dica: 'Pegue t[:3], ponha em maiúsculas e junte com t[3:].',
              exp: 'Fatias e + combinam pedaços de texto.',
              vars: { PAL: ['paralelepipedo', 'computador', 'engenharia', 'bicicleta'] }
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
              p: 'O que `input` devolve quando a pessoa digita 42?',
              ops: ['O texto "42"', 'O número 42', 'Nada'],
              c: 0,
              exp: 'Para virar número, use int() ou float().'
            },
            {
              t: 'escolha',
              p: 'Qual função converte o texto "3.5" em número com ponto?',
              ops: ['float()', 'int()', 'str()'],
              c: 0,
              exp: 'int("3.5") daria erro: int só aceita números inteiros.'
            },
            {
              t: 'complete',
              p: 'Complete para converter a idade digitada em número inteiro',
              code: 'idade = ___(input("Idade: "))',
              bank: ['int', 'str', 'print', 'len'],
              c: ['int'],
              exp: 'int transforma o texto num número inteiro.'
            },
            {
              t: 'codigo',
              p: 'Peça o nome com `input("Qual é o seu nome? ")` e cumprimente: Olá, nome!',
              start: `# peça o nome e mostre o cumprimento
`,
              sol: `nome = input("Qual é o seu nome? ")
print(f"Olá, {nome}!")`,
              dica: 'Guarde o que input devolve numa variável e use uma f-string.',
              exp: 'Repare que a pergunta e o que foi digitado aparecem na saída.',
              entrada: ['{NOME}'],
              vars: { NOME: ['Ana', 'Bruno', 'Carla', 'Davi', 'Elis', 'Fábio', 'Gal', 'Hugo'] }
            },
            {
              t: 'codigo',
              p: 'Este programa deveria somar dois números, mas junta os dois como texto. Conserte',
              start: `a = input("Primeiro número: ")
b = input("Segundo número: ")
print(a + b)
`,
              sol: `a = int(input("Primeiro número: "))
b = int(input("Segundo número: "))
print(a + b)`,
              dica: 'Converta cada input com int().',
              exp: 'Agora o + soma números, e não junta textos.',
              entrada: ['{A}', '{B}'],
              vars: { A: { de: 2, ate: 50 }, B: { de: 2, ate: 50 } }
            },
            {
              t: 'codigo',
              p: 'Peça um número com `int(input("Número: "))` e mostre o dobro dele',
              start: `# peça o número
`,
              sol: `n = int(input("Número: "))
print(n * 2)`,
              dica: 'Converta com int e multiplique por 2.',
              exp: 'Sempre que for fazer conta com o que foi digitado, converta.',
              entrada: ['{N}'],
              vars: { N: { de: 2, ate: 99 } }
            },
            {
              t: 'codigo',
              p: 'Peça a largura e o comprimento de uma sala, em metros, com `float(input(...))`, e mostre a área',
              start: `# largura = float(input("Largura: "))
`,
              sol: `largura = float(input("Largura: "))
comprimento = float(input("Comprimento: "))
print(largura * comprimento)`,
              dica: 'Duas entradas convertidas com float e a multiplicação.',
              exp: 'float aceita medidas com ponto, como 3.5.',
              entrada: ['{L}', '{M}'],
              vars: { L: { de: 2, ate: 6, passo: 0.5 }, M: { de: 3, ate: 8, passo: 0.5 } }
            },
            {
              t: 'codigo',
              p: 'Peça a temperatura com `float(input("Temperatura em °C: "))` e mostre em Fahrenheit (C × 1.8 + 32), com 1 casa',
              start: `# peça a temperatura
`,
              sol: `t = float(input("Temperatura em °C: "))
print(round(t * 1.8 + 32, 1))`,
              dica: 'Converta, faça a conta e arredonde com round(..., 1).',
              exp: 'Os Estados Unidos ainda usam Fahrenheit no dia a dia.',
              entrada: ['{T}'],
              vars: { T: { de: -10, ate: 40 } }
            }
          ]
        }
      ]
    }
  ]
});
