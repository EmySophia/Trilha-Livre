/* Trilha Livre · Python do zero · Nível 2: Decisões
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'python',
  n: 2,
  titulo: 'Decisões',
  desc: 'Comparações, if, elif, else e o recuo do Python.',
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
              p: 'O que print(5 != 3) mostra?',
              ops: ['True', 'False', '2'],
              c: 0,
              exp: '5 é diferente de 3, então é verdadeiro.'
            },
            {
              t: 'escolha',
              p: 'O que dá True and False?',
              ops: ['False', 'True', 'Erro'],
              c: 0,
              exp: 'Com and, as duas precisam ser verdadeiras.'
            },
            {
              t: 'escolha',
              p: 'O que dá not (3 > 5)?',
              ops: ['True', 'False', '3'],
              c: 0,
              exp: '3 > 5 é falso, e o not inverte.'
            },
            {
              t: 'codigo',
              p: 'Mostre se a temperatura passa de 30 graus (deve aparecer True ou False)',
              start: `temperatura = 32
`,
              saida: 'True',
              sol: `temperatura = 32
print(temperatura > 30)`,
              dica: 'print de uma comparação mostra True ou False.',
              exp: 'Comparações também são valores e podem ser mostradas.'
            }
          ]
        }
      ]
    },
    {
      id: 'pyu4',
      titulo: 'if, elif e else',
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
              start: `nota = 5.5
`,
              saida: 'Reprovado',
              sol: `nota = 5.5
if nota >= 6:
    print("Aprovado")
else:
    print("Reprovado")`,
              dica: 'if nota >= 6: e, na linha de baixo, recuado, o print. Depois, else:.',
              exp: 'Teste mudando a nota para 6: o resultado muda.'
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
              t: 'codigo',
              p: 'Peça a temperatura com float(input("Temperatura em °C: ")) e mostre Sólido, Líquido ou Gasoso',
              start: `# use if, elif e else
`,
              saida: `Temperatura em °C: -5
Sólido`,
              sol: `t = float(input("Temperatura em °C: "))
if t <= 0:
    print("Sólido")
elif t < 100:
    print("Líquido")
else:
    print("Gasoso")`,
              dica: 'Até 0 é sólido; abaixo de 100, líquido; senão, gasoso.',
              exp: 'float aceita números com ponto, como 36.5.',
              entrada: ['-5']
            },
            {
              t: 'codigo',
              p: 'Dê o conceito: A para 9 ou mais, B para 7 ou mais, C para 5 ou mais e D para o resto',
              start: `nota = 7.5
`,
              saida: 'B',
              sol: `nota = 7.5
if nota >= 9:
    print("A")
elif nota >= 7:
    print("B")
elif nota >= 5:
    print("C")
else:
    print("D")`,
              dica: 'Comece pelo maior: if nota >= 9, depois elif nota >= 7...',
              exp: 'Se começasse pelo >= 5, todo mundo com 9 tiraria C.'
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
              t: 'codigo',
              p: 'Peça o ano com int(input("Ano: ")) e mostre Bissexto ou Não é bissexto',
              start: `# use and, or e o resto da divisão %
`,
              saida: `Ano: 1900
Não é bissexto`,
              sol: `ano = int(input("Ano: "))
if (ano % 4 == 0 and ano % 100 != 0) or ano % 400 == 0:
    print("Bissexto")
else:
    print("Não é bissexto")`,
              dica: 'Divisível quer dizer resto zero: ano % 4 == 0.',
              exp: '1900 não foi bissexto, mesmo sendo divisível por 4.',
              entrada: ['1900']
            },
            {
              t: 'codigo',
              p: 'Mostre Tem vogal no começo se a palavra começar com vogal; senão, Começa com consoante',
              start: `palavra = "ônibus"
`,
              saida: 'Tem vogal no começo',
              sol: `palavra = "ônibus"
if palavra[0].lower() in "aeiouáéíóúâêôãõ":
    print("Tem vogal no começo")
else:
    print("Começa com consoante")`,
              dica: 'Pegue palavra[0] e use in com um texto de vogais. Lembre das vogais com acento.',
              exp: 'in com texto procura o caractere dentro dele.'
            }
          ]
        }
      ]
    }
  ]
});
