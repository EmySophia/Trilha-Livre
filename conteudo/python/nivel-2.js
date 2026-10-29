/* Trilha Livre · Python do zero · Nível 2: Decisões
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'python',
  n: 2,
  titulo: 'Decisões',
  desc: 'Comparações, if, elif, else, o recuo do Python e o match.',
  videos: [
    {
      titulo: 'Curso de Python 3, Mundo 1: Fundamentos',
      canal: 'Curso em Vídeo (Gustavo Guanabara)',
      obs: 'aulas sobre condições',
      url: 'https://www.youtube.com/playlist?list=PLHz_AreHm4dlKP6QQCekuIPky1CiwmdI6'
    },
    {
      titulo: 'Curso de Python 3, Mundo 2: Estruturas de Controle',
      canal: 'Curso em Vídeo (Gustavo Guanabara)',
      obs: 'aulas 12 e seguintes: condições aninhadas',
      url: 'https://www.youtube.com/playlist?list=PLHz_AreHm4dk_nZHmxxf_J0WRAqy5Czye'
    }
  ],
  unidades: [
    {
      id: 'pyu3',
      titulo: 'Verdadeiro ou falso',
      conceito: 'bool',
      desc: 'Comparar valores.',
      licoes: [
        {
          id: 'py2l1',
          titulo: 'Comparações',
          exs: [
            {
              t: 'texto',
              titulo: 'True e False',
              blocos: [
                {
                  p: 'Uma comparação dá `True` (verdadeiro) ou `False` (falso), com maiúscula no começo.'
                },
                {
                  tabela: {
                    cab: ['Sinal', 'Significa'],
                    linhas: [
                      ['==', 'igual'],
                      ['!=', 'diferente'],
                      ['>', 'maior'],
                      ['<', 'menor'],
                      ['>=', 'maior ou igual'],
                      ['<=', 'menor ou igual']
                    ]
                  }
                },
                {
                  code: `idade = 17
print(idade >= 18)
print(idade == 17)`
                },
                {
                  p: 'Para juntar comparações, use as palavras `and` (as duas precisam ser verdadeiras), `or` (basta uma) e `not` (inverte).'
                },
                {
                  code: `nota = 7
frequencia = 0.8
print(nota >= 6 and frequencia >= 0.75)`
                },
                {
                  dica: 'Um `=` guarda um valor. Dois, `==`, comparam. Trocar um pelo outro é um erro muito comum.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que `print(5 != 3)` mostra?',
              ops: ['True', 'False', '2'],
              c: 0,
              exp: '5 é diferente de 3, então é verdadeiro.'
            },
            {
              t: 'escolha',
              p: 'O que dá `True and False`?',
              ops: ['False', 'True', 'Erro'],
              c: 0,
              exp: 'Com and, as duas precisam ser verdadeiras.'
            },
            {
              t: 'escolha',
              p: 'O que dá `not (3 > 5)`?',
              ops: ['True', 'False', '3'],
              c: 0,
              exp: '3 > 5 é falso, e o not inverte.'
            },
            {
              t: 'escolha',
              p: 'O que dá `{A} >= {B}`?',
              ops: ['{= A >= B ? "True" : "False" }', '{= A >= B ? "False" : "True" }'],
              c: 0,
              exp: 'Compare os dois números.',
              vars: { A: { de: 1, ate: 9 }, B: { de: 1, ate: 9 } }
            },
            {
              t: 'complete',
              p: 'Complete para testar se x está entre 1 e 10',
              code: 'print(x >= 1 ___ x <= 10)',
              bank: ['and', 'or', 'not', '=='],
              c: ['and'],
              exp: 'As duas condições precisam valer ao mesmo tempo.'
            },
            {
              t: 'codigo',
              p: 'Mostre se a temperatura passa de 30 graus (deve aparecer True ou False)',
              start: `temperatura = {T}
`,
              sol: `temperatura = {T}
print(temperatura > 30)`,
              dica: 'print de uma comparação mostra True ou False.',
              exp: 'Comparações também são valores e podem ser mostradas.',
              vars: { T: { de: 20, ate: 40 } }
            },
            {
              t: 'codigo',
              p: 'Mostre True se o número for par e False se for ímpar, usando o resto da divisão',
              start: `n = {N}
`,
              sol: `n = {N}
print(n % 2 == 0)`,
              dica: 'Par é quem tem resto 0 na divisão por 2.',
              exp: 'n % 2 == 0 é o teste de par mais usado.',
              vars: { N: { de: 1, ate: 99 } }
            },
            {
              t: 'codigo',
              p: 'Uma senha é válida se tiver 8 caracteres ou mais e não for "12345678". Mostre True ou False',
              start: `senha = "{S}"
`,
              sol: `senha = "{S}"
print(len(senha) >= 8 and senha != "12345678")`,
              dica: 'len(senha) >= 8 and senha != "12345678"',
              exp: 'Regras de senha juntam várias condições com and.',
              vars: {
                S: ['abc123', 'pao_de_queijo', '12345678', 'python2026', 'sol', 'Ipe-amarelo']
              }
            }
          ]
        }
      ]
    },
    {
      id: 'pyu4',
      titulo: 'if, elif, else e match',
      conceito: 'if',
      desc: 'Fazer o programa escolher.',
      licoes: [
        {
          id: 'py2l2',
          titulo: 'if, else e o recuo',
          exs: [
            {
              t: 'texto',
              titulo: 'Os espaços fazem parte do código',
              blocos: [
                {
                  p: 'O `if` executa um bloco só quando a condição é verdadeira. O `else` cuida do caso contrário. Repare nos dois-pontos no fim da linha e nos 4 espaços no começo das linhas de dentro.'
                },
                {
                  code: `nota = 6.5
if nota >= 6:
    print("Aprovado")
else:
    print("Reprovado")
print("Fim")`
                },
                {
                  p: 'Em Python não há chaves: o recuo, os espaços no começo da linha, é que diz o que está dentro do bloco. A linha `print("Fim")`, sem recuo, roda sempre.'
                },
                {
                  p: 'Faltou o recuo ou os dois-pontos? O Python avisa com um IndentationError ou um SyntaxError. No app, o Enter já coloca os 4 espaços depois de uma linha com dois-pontos.'
                },
                {
                  dica: 'Use sempre 4 espaços por nível. Misturar tabulação e espaços dá erro.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que define o bloco de dentro de um if em Python?',
              ops: ['O recuo: os espaços no começo da linha', 'As chaves { }', 'O ponto e vírgula'],
              c: 0,
              exp: 'Por isso o recuo não é enfeite em Python.'
            },
            {
              t: 'escolha',
              p: 'O que este programa mostra?',
              ops: ['{= X > 10 ? "A" : "B" }', '{= X > 10 ? "B" : "A" }', 'A e B'],
              c: 0,
              exp: 'Só um dos dois blocos roda.',
              code: `x = {X}
if x > 10:
    print("A")
else:
    print("B")`,
              vars: { X: { de: 1, ate: 20 } },
              se: 'X !== 10'
            },
            {
              t: 'ordene',
              p: 'Monte o programa que mostra Reprovado para nota 4',
              lines: [
                'nota = 4',
                'if nota >= 6:',
                '    print("Aprovado")',
                'else:',
                '    print("Reprovado")'
              ],
              exp: 'O if e o else ficam na mesma coluna; os prints, recuados.'
            },
            {
              t: 'codigo',
              p: 'Mostre Aprovado se a nota for 6 ou mais e Reprovado se não for',
              start: `nota = {N}
`,
              sol: `nota = {N}
if nota >= 6:
    print("Aprovado")
else:
    print("Reprovado")`,
              dica: 'if nota >= 6: e, na linha de baixo, recuado, o print. Depois, else:.',
              exp: 'Teste mudando a nota: o resultado muda.',
              vars: { N: { de: 3, ate: 10, passo: 0.5 } }
            },
            {
              t: 'codigo',
              p: 'Este programa tem dois erros de escrita. Conserte para mostrar Pode votar',
              start: `idade = 16
if idade >= 16
print("Pode votar")
`,
              saida: 'Pode votar',
              sol: `idade = 16
if idade >= 16:
    print("Pode votar")`,
              dica: 'Faltam os dois-pontos e o recuo.',
              exp: 'No Brasil, o voto é facultativo a partir dos 16 anos.'
            },
            {
              t: 'codigo',
              p: 'Mostre Par ou Ímpar para o número',
              start: `n = {N}
`,
              sol: `n = {N}
if n % 2 == 0:
    print("Par")
else:
    print("Ímpar")`,
              dica: 'Use o resto da divisão por 2.',
              exp: 'O mesmo teste da lição anterior, agora dentro de um if.',
              vars: { N: { de: 1, ate: 99 } }
            },
            {
              t: 'codigo',
              p: 'Peça a idade com `int(input("Idade: "))` e mostre Maior de idade (18 ou mais) ou Menor de idade',
              start: `# peça a idade
`,
              sol: `idade = int(input("Idade: "))
if idade >= 18:
    print("Maior de idade")
else:
    print("Menor de idade")`,
              dica: 'Converta a entrada e compare com 18.',
              exp: 'Juntar input, int e if é a base de muitos programas.',
              entrada: ['{I}'],
              vars: { I: { de: 10, ate: 30 } }
            },
            {
              t: 'codigo',
              p: 'Mostre o maior dos dois números, sem usar max',
              start: `a = {A}
b = {B}
`,
              sol: `a = {A}
b = {B}
if a > b:
    print(a)
else:
    print(b)`,
              dica: 'Compare a com b e mostre o vencedor.',
              exp: 'O max faz isso, mas saber fazer na mão ajuda quando a regra é diferente.',
              vars: { A: { de: 1, ate: 99 }, B: { de: 1, ate: 99 } },
              se: 'A !== B'
            }
          ]
        },
        {
          id: 'py2l3',
          titulo: 'Vários caminhos com elif',
          exs: [
            {
              t: 'texto',
              titulo: 'elif: senão, se',
              blocos: [
                {
                  p: 'Quando há mais de dois casos, use `elif`, que quer dizer senão, se. O Python testa de cima para baixo e executa só o primeiro bloco verdadeiro.'
                },
                {
                  code: `temperatura = 25
if temperatura <= 0:
    print("Sólido")
elif temperatura < 100:
    print("Líquido")
else:
    print("Gasoso")`
                },
                {
                  p: 'O exemplo mostra o estado da água ao nível do mar. Repare que a segunda condição não precisa repetir `temperatura > 0`: se chegou ao `elif`, a primeira já foi falsa.'
                },
                { dica: 'A ordem importa: comece pelo caso mais restrito.' }
              ]
            },
            {
              t: 'escolha',
              p: 'Com temperatura = 100, o que o exemplo mostra?',
              ops: ['Gasoso', 'Líquido', 'Sólido'],
              c: 0,
              exp: '100 < 100 é falso, então cai no else.'
            },
            {
              t: 'escolha',
              p: 'Com `nota = {N}`, que conceito dá a regra: A para 9 ou mais, B para 7 ou mais, C para 5 ou mais, D para o resto?',
              ops: [
                '{= N >= 9 ? "A" : N >= 7 ? "B" : N >= 5 ? "C" : "D" }',
                '{= N >= 9 ? "B" : N >= 7 ? "C" : N >= 5 ? "D" : "A" }',
                '{= N >= 9 ? "C" : N >= 7 ? "D" : N >= 5 ? "A" : "B" }'
              ],
              c: 0,
              exp: 'O primeiro teste verdadeiro, de cima para baixo, decide.',
              vars: { N: { de: 2, ate: 10, passo: 0.5 } }
            },
            {
              t: 'codigo',
              p: 'Peça a temperatura com `float(input("Temperatura em °C: "))` e mostre Sólido, Líquido ou Gasoso',
              start: `# use if, elif e else
`,
              sol: `t = float(input("Temperatura em °C: "))
if t <= 0:
    print("Sólido")
elif t < 100:
    print("Líquido")
else:
    print("Gasoso")`,
              dica: 'Até 0 é sólido; abaixo de 100, líquido; senão, gasoso.',
              exp: 'float aceita números com ponto, como 36.5.',
              entrada: ['{T}'],
              vars: { T: [-5, 0, 25, 99, 100, 120] }
            },
            {
              t: 'codigo',
              p: 'Dê o conceito: A para 9 ou mais, B para 7 ou mais, C para 5 ou mais e D para o resto',
              start: `nota = {N}
`,
              sol: `nota = {N}
if nota >= 9:
    print("A")
elif nota >= 7:
    print("B")
elif nota >= 5:
    print("C")
else:
    print("D")`,
              dica: 'Comece pelo maior: if nota >= 9, depois elif nota >= 7...',
              exp: 'Se começasse pelo >= 5, todo mundo com 9 tiraria C.',
              vars: { N: { de: 2, ate: 10, passo: 0.5 } }
            },
            {
              t: 'codigo',
              p: 'O frete custa 15 reais até 1 kg, 25 reais até 5 kg e 40 reais acima disso. Mostre o frete',
              start: `peso = {P}
`,
              sol: `peso = {P}
if peso <= 1:
    print(15)
elif peso <= 5:
    print(25)
else:
    print(40)`,
              dica: 'Teste do menor para o maior limite.',
              exp: 'Tabelas de preço por faixa aparecem em todo lugar: frete, imposto, conta de luz.',
              vars: { P: { de: 0.5, ate: 10, passo: 0.5 } }
            },
            {
              t: 'codigo',
              p: 'Peça os três lados de um triângulo com `int(input(...))` e mostre Equilátero (três iguais), Isósceles (dois iguais) ou Escaleno',
              start: `# a = int(input("Lado a: "))
`,
              sol: `a = int(input("Lado a: "))
b = int(input("Lado b: "))
c = int(input("Lado c: "))
if a == b == c:
    print("Equilátero")
elif a == b or b == c or a == c:
    print("Isósceles")
else:
    print("Escaleno")`,
              dica: 'Teste primeiro os três iguais. Em Python, dá para escrever a == b == c.',
              exp: 'O caso mais restrito, os três iguais, vem primeiro.',
              entrada: ['{A}', '{B}', '{CC}'],
              vars: { A: { de: 3, ate: 5 }, B: { de: 3, ate: 5 }, CC: { de: 3, ate: 5 } }
            },
            {
              t: 'codigo',
              p: 'Na conta de luz deste exemplo, os primeiros 100 kWh custam R$ 0,60 cada e o que passar disso custa R$ 0,80. Mostre o valor com 2 casas',
              start: `kwh = {K}
`,
              sol: `kwh = {K}
if kwh <= 100:
    valor = kwh * 0.60
else:
    valor = 100 * 0.60 + (kwh - 100) * 0.80
print(f"{valor:.2f}")`,
              dica: 'Acima de 100, some o preço dos 100 primeiros com o do que passou.',
              exp: 'É uma tarifa por faixas, parecida com as de verdade. Os valores são só um exemplo.',
              vars: { K: { de: 40, ate: 300, passo: 5 } }
            }
          ]
        },
        {
          id: 'py2l4',
          titulo: 'Condições compostas e in',
          exs: [
            {
              t: 'texto',
              titulo: 'Juntando condições',
              blocos: [
                {
                  p: 'Com `and` e `or`, um só `if` testa várias coisas. Um exemplo clássico: o ano bissexto. Ele é divisível por 4, mas não por 100, a não ser que seja divisível por 400.'
                },
                {
                  code: `ano = 2024
if (ano % 4 == 0 and ano % 100 != 0) or ano % 400 == 0:
    print("Bissexto")
else:
    print("Não é bissexto")`
                },
                {
                  p: 'O operador `in` pergunta se algo está dentro de outra coisa, como uma letra num texto ou um item numa lista.'
                },
                {
                  code: `print("a" in "banana")
print("Recife" in ["Natal", "Recife"])`
                },
                {
                  p: 'Para escolhas simples, existe o if de uma linha: `valor_se_sim if condição else valor_se_não`.'
                },
                {
                  code: `idade = 20
situacao = "maior" if idade >= 18 else "menor"
print(situacao)`
                }
              ]
            },
            {
              t: 'escolha',
              p: '2100 é bissexto pela regra?',
              ops: [
                'Não: é divisível por 100 e não por 400',
                'Sim: é divisível por 4',
                'Sim: é divisível por 100'
              ],
              c: 0,
              exp: 'Por isso 1900 também não foi, mas 2000 foi.'
            },
            {
              t: 'escolha',
              p: 'O ano {ANO} é bissexto?',
              ops: [
                '{= (ANO % 4 === 0 && ANO % 100 !== 0) || ANO % 400 === 0 ? "Sim" : "Não" }',
                '{= (ANO % 4 === 0 && ANO % 100 !== 0) || ANO % 400 === 0 ? "Não" : "Sim" }'
              ],
              c: 0,
              exp: 'Divisível por 4 e não por 100, ou divisível por 400.',
              vars: { ANO: [1900, 1996, 2000, 2023, 2024, 2025, 2100] }
            },
            {
              t: 'complete',
              p: 'Complete para testar se a letra é vogal',
              code: 'if letra ___ "aeiou":',
              bank: ['in', '==', 'and', 'is'],
              c: ['in'],
              exp: 'in procura a letra dentro do texto.'
            },
            {
              t: 'codigo',
              p: 'Peça o ano com `int(input("Ano: "))` e mostre Bissexto ou Não é bissexto',
              start: `# use and, or e o resto da divisão %
`,
              sol: `ano = int(input("Ano: "))
if (ano % 4 == 0 and ano % 100 != 0) or ano % 400 == 0:
    print("Bissexto")
else:
    print("Não é bissexto")`,
              dica: 'Divisível quer dizer resto zero: ano % 4 == 0.',
              exp: '1900 não foi bissexto, mesmo sendo divisível por 4.',
              entrada: ['{ANO}'],
              vars: { ANO: ['1900', '2000', '2024', '2025', '2100'] }
            },
            {
              t: 'codigo',
              p: 'Mostre Tem vogal no começo se a palavra começar com vogal; senão, Começa com consoante',
              start: `palavra = "{P}"
`,
              sol: `palavra = "{P}"
if palavra[0].lower() in "aeiouáéíóúâêôãõ":
    print("Tem vogal no começo")
else:
    print("Começa com consoante")`,
              dica: 'Pegue palavra[0] e use in com um texto de vogais. Lembre das vogais com acento.',
              exp: 'in com texto procura o caractere dentro dele.',
              vars: { P: ['ônibus', 'Python', 'Água', 'casa', 'ilha', 'trem'] }
            },
            {
              t: 'codigo',
              p: 'Com um if de uma linha, guarde "Positivo" ou "Não positivo" numa variável e mostre',
              start: `n = {N}
`,
              sol: `n = {N}
sinal = "Positivo" if n > 0 else "Não positivo"
print(sinal)`,
              dica: 'sinal = "Positivo" if n > 0 else "Não positivo"',
              exp: 'O if de uma linha é bom para escolhas simples entre dois valores.',
              vars: { N: { de: -20, ate: 20 } }
            },
            {
              t: 'codigo',
              p: 'Passa quem tem média 6 ou mais e frequência de 75% ou mais. Mostre Aprovado, Reprovado por nota ou Reprovado por falta (se as duas falharem, conta a falta)',
              start: `media = {M}
frequencia = {F}
`,
              sol: `media = {M}
frequencia = {F}
if frequencia < 75:
    print("Reprovado por falta")
elif media < 6:
    print("Reprovado por nota")
else:
    print("Aprovado")`,
              dica: 'Teste a falta primeiro, depois a nota.',
              exp: 'A ordem dos testes decide qual regra vale quando as duas falham.',
              vars: { M: { de: 3, ate: 10, passo: 0.5 }, F: { de: 50, ate: 100, passo: 5 } }
            }
          ]
        },
        {
          id: 'py2l5',
          titulo: 'Muitos casos com match',
          exs: [
            {
              t: 'texto',
              titulo: 'match e case',
              blocos: [
                {
                  p: 'Quando uma variável pode ter vários valores e cada um pede uma ação, o `match` organiza melhor do que uma fila de elifs. Ele existe desde o Python 3.10.'
                },
                {
                  code: `opcao = "s"
match opcao:
    case "s" | "S":
        print("Sim")
    case "n" | "N":
        print("Não")
    case _:
        print("Opção inválida")`
                },
                {
                  p: 'O `|` junta vários valores no mesmo caso. O `case _` pega tudo o que não combinou antes, como o else.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual caso pega qualquer valor que não combinou antes?',
              ops: ['case _', 'case default', 'case else'],
              c: 0,
              exp: 'O _ é um curinga.'
            },
            {
              t: 'complete',
              p: 'Complete para aceitar s minúsculo ou maiúsculo no mesmo caso',
              code: 'case "s" ___ "S":',
              bank: ['|', 'or', 'and', '||'],
              c: ['|'],
              exp: 'No match, o | quer dizer ou.'
            },
            {
              t: 'escolha',
              p: 'Para que serve o match?',
              ops: [
                'Escolher uma ação conforme o valor de uma variável, entre muitos casos',
                'Repetir um bloco',
                'Juntar textos'
              ],
              c: 0,
              exp: 'É uma forma organizada de muitos elifs.'
            },
            {
              t: 'codigo',
              p: 'Mostre o dia da semana para o número, de 1 (domingo) a 7 (sábado), usando match. Para outros números, mostre Inválido',
              start: `dia = {D}
`,
              sol: `dia = {D}
match dia:
    case 1:
        print("domingo")
    case 2:
        print("segunda")
    case 3:
        print("terça")
    case 4:
        print("quarta")
    case 5:
        print("quinta")
    case 6:
        print("sexta")
    case 7:
        print("sábado")
    case _:
        print("Inválido")`,
              dica: 'Um case para cada número e case _ para o resto. Use domingo, segunda, terça... em minúsculas.',
              exp: 'Repare como o match deixa a tabela de casos fácil de ler.',
              vars: { D: { de: 0, ate: 8 } }
            },
            {
              t: 'codigo',
              p: 'Faça uma calculadora: mostre o resultado de a op b para op igual a "+", "-", "*" ou "/"',
              start: `a = {A}
b = {B}
op = "{OP}"
`,
              sol: `a = {A}
b = {B}
op = "{OP}"
match op:
    case "+":
        print(a + b)
    case "-":
        print(a - b)
    case "*":
        print(a * b)
    case "/":
        print(a / b)`,
              dica: 'Um case para cada operação.',
              exp: 'Calculadoras e menus de opções são usos típicos do match.',
              vars: { A: { de: 1, ate: 20 }, B: { de: 1, ate: 9 }, OP: ['+', '-', '*', '/'] }
            }
          ]
        }
      ]
    }
  ]
});
