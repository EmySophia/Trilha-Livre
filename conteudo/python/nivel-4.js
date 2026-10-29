/* Trilha Livre · Python do zero · Nível 4: Listas e dicionários
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'python',
  n: 4,
  titulo: 'Listas e dicionários',
  desc: 'Guardar muitos valores: listas, tabelas, tuplas, dicionários e conjuntos.',
  videos: [
    {
      titulo: 'Curso de Python 3, Mundo 3',
      canal: 'Curso em Vídeo (Gustavo Guanabara)',
      obs: 'o Mundo 3 trata de tuplas, listas e dicionários; procure a playlist no canal',
      url: 'https://www.youtube.com/c/CursoemV%C3%ADdeo'
    },
    {
      tipo: 'texto',
      titulo: 'Pense em Python',
      canal: 'Allen B. Downey, livro aberto',
      obs: 'capítulos 10 a 12: listas, dicionários e tuplas',
      url: 'https://penseallen.github.io/PensePython2e/'
    }
  ],
  unidades: [
    {
      id: 'pyu7',
      titulo: 'Listas',
      conceito: '[ ]',
      desc: 'Uma variável, muitos valores.',
      licoes: [
        {
          id: 'py4l1',
          titulo: 'Criando e mudando listas',
          exs: [
            {
              t: 'texto',
              titulo: 'Listas',
              blocos: [
                {
                  p: 'Uma lista guarda vários valores em ordem, entre colchetes. As posições começam no 0.'
                },
                {
                  code: `compras = ["arroz", "feijão", "café"]
print(compras[0])
print(len(compras))`
                },
                {
                  tabela: {
                    cab: ['Código', 'O que faz'],
                    linhas: [
                      ['lista.append(x)', 'põe x no fim'],
                      ['lista.insert(0, x)', 'põe x na posição 0'],
                      ['lista.remove(x)', 'tira o primeiro x'],
                      ['lista.pop()', 'tira e devolve o último'],
                      ['lista.pop(0)', 'tira e devolve o primeiro'],
                      ['x in lista', 'True se x está na lista'],
                      ['lista[1] = y', 'troca o item da posição 1']
                    ]
                  }
                },
                {
                  code: `compras = ["arroz", "feijão"]
compras.append("café")
compras.remove("arroz")
print(compras)`
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Depois de `lista = [3, 5]` e `lista.append(7)`, como fica a lista?',
              ops: ['[3, 5, 7]', '[7, 3, 5]', '[3, 5]'],
              c: 0,
              exp: 'append põe no fim.'
            },
            {
              t: 'escolha',
              p: 'Com `lista = {LST}`, quanto vale `lista[{I}]`?',
              ops: [
                '{= JSON.parse(LST)[I] }',
                '{= JSON.parse(LST)[(I + 1) % 4] }',
                '{= JSON.parse(LST)[(I + 3) % 4] }'
              ],
              c: 0,
              exp: 'Conte as posições a partir do 0.',
              vars: {
                LST: ['[3, 8, 5, 1]', '[10, 4, 7, 2]', '[6, 9, 2, 5]', '[12, 15, 11, 18]'],
                I: { de: 0, ate: 3 }
              }
            },
            {
              t: 'escolha',
              p: 'O que `lista.pop()` faz?',
              ops: [
                'Tira o último item e devolve ele',
                'Apaga a lista inteira',
                'Põe um item no fim'
              ],
              c: 0,
              exp: 'Com um número, pop(0), tira daquela posição.'
            },
            {
              t: 'complete',
              p: 'Complete para pôr "café" no fim da lista',
              code: 'compras.___("café")',
              bank: ['append', 'add', 'push', 'insert'],
              c: ['append'],
              exp: 'push é do JavaScript; em Python, append.'
            },
            {
              t: 'codigo',
              p: 'Comece com a lista de ferramentas, acrescente "alicate" no fim e mostre a lista e o tamanho dela',
              start: `ferramentas = ["martelo", "chave de fenda"]
`,
              saida: `['martelo', 'chave de fenda', 'alicate']
3`,
              sol: `ferramentas = ["martelo", "chave de fenda"]
ferramentas.append("alicate")
print(ferramentas)
print(len(ferramentas))`,
              dica: 'Use append e depois dois prints.',
              exp: 'print de uma lista mostra os colchetes e as aspas.'
            },
            {
              t: 'codigo',
              p: 'A nota 85 foi digitada errada. Troque por {N} e mostre a lista',
              start: `notas = {L}
`,
              sol: `notas = {L}
notas[notas.index(85)] = {N}
print(notas)`,
              dica: 'Conte as posições a partir de 0 e use notas[posição] = {N}. Ou deixe o Python achar a posição com notas.index(85).',
              exp: 'Listas podem ser mudadas depois de criadas.',
              vars: {
                L: ['[7, 9, 85, 6]', '[85, 7, 9, 6]', '[7, 85, 9, 6]', '[7, 9, 6, 85]'],
                N: { de: 5, ate: 10, passo: 0.5 }
              }
            },
            {
              t: 'codigo',
              p: 'Tire "{X}" da lista e mostre como ela ficou',
              start: `compras = ["arroz", "feijão", "café", "leite"]
`,
              sol: `compras = ["arroz", "feijão", "café", "leite"]
compras.remove("{X}")
print(compras)`,
              dica: 'remove tira pelo valor.',
              exp: 'Para tirar pela posição, use pop.',
              vars: { X: ['arroz', 'feijão', 'café', 'leite'] }
            },
            {
              t: 'codigo',
              p: 'Atenda o primeiro da fila: tire ele do começo, ponha no fim (ele voltou para a fila) e mostre a fila',
              start: `fila = {F}
`,
              sol: `fila = {F}
primeiro = fila.pop(0)
fila.append(primeiro)
print(fila)`,
              dica: 'pop(0) tira do começo e devolve; append põe no fim.',
              exp: 'Filas que giram assim aparecem em jogos de turnos e em agendas de tarefas.',
              vars: { F: ['["Ana", "Bia", "Caio"]', '["Duda", "Eli", "Fê", "Gui"]'] }
            }
          ]
        },
        {
          id: 'py4l2',
          titulo: 'Calculando com listas',
          exs: [
            {
              t: 'texto',
              titulo: 'Atalhos prontos',
              blocos: [
                {
                  p: 'Com listas de números, o Python já traz `sum`, `min`, `max` e `sorted`, que devolve uma cópia em ordem. Com `reverse=True`, a ordem fica do maior para o menor.'
                },
                {
                  code: `notas = [7, 9.5, 6, 8]
print(sum(notas) / len(notas))
print(max(notas), min(notas))
print(sorted(notas, reverse=True))`
                },
                {
                  p: 'Fatias pegam um pedaço: `notas[1:3]` vai da posição 1 até antes da 3; `notas[:2]` pega os dois primeiros. E a compreensão de lista cria uma lista nova a partir de outra numa linha só:'
                },
                {
                  code: `precos = [10, 25, 40]
com_desconto = [p * 0.9 for p in precos]
print(com_desconto)
caros = [p for p in precos if p > 20]
print(caros)`
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que `sorted([3, 1, 2])` devolve?',
              ops: ['[1, 2, 3]', '[3, 2, 1]', '3'],
              c: 0,
              exp: 'sorted devolve uma lista nova, em ordem crescente.'
            },
            {
              t: 'escolha',
              p: 'Com `n = {LST}`, quanto dá `sum(n)`?',
              ops: [
                '{= JSON.parse(LST).reduce((a, b) => a + b, 0) }',
                '{= Math.max(...JSON.parse(LST)) }',
                '{= JSON.parse(LST).length }'
              ],
              c: 0,
              exp: 'sum soma todos os itens.',
              vars: { LST: ['[3, 8, 5, 1]', '[10, 4, 7, 2]', '[6, 9, 2, 5]', '[12, 15, 11, 18]'] }
            },
            {
              t: 'complete',
              p: 'Complete a compreensão de lista que dobra cada número',
              code: '[x * 2 ___ x in nums]',
              bank: ['for', 'in', 'if', 'while'],
              c: ['for'],
              exp: 'A ordem é: o que calcular, for, variável, in, lista.'
            },
            {
              t: 'codigo',
              p: 'Mostre a média, a maior e a menor nota, cada uma numa linha',
              start: `notas = {L}
`,
              sol: `notas = {L}
print(sum(notas) / len(notas))
print(max(notas))
print(min(notas))`,
              dica: 'Média é sum dividido por len.',
              exp: 'Esses atalhos funcionam com qualquer lista de números.',
              vars: { L: ['[6.5, 8, 9.5, 7]', '[5, 10, 7.5]', '[9, 8, 6, 4.5, 10]'] }
            },
            {
              t: 'codigo',
              p: 'Converta as medidas de polegadas para milímetros (1 polegada = 25.4 mm) com uma compreensão de lista',
              start: `polegadas = {L}
`,
              sol: `polegadas = {L}
mm = [p * 25.4 for p in polegadas]
print(mm)`,
              dica: '[p * 25.4 for p in polegadas]',
              exp: 'Compreensão de lista é muito usada para transformar dados.',
              vars: { L: ['[0.5, 1, 2]', '[0.25, 3]', '[1, 1.5, 4]'] }
            },
            {
              t: 'codigo',
              p: 'Com uma compreensão de lista, pegue só os números pares e mostre a nova lista',
              start: `numeros = {L}
`,
              sol: `numeros = {L}
pares = [n for n in numeros if n % 2 == 0]
print(pares)`,
              dica: '[n for n in numeros if n % 2 == 0]',
              exp: 'O if no fim filtra os itens.',
              vars: { L: ['[3, 8, 5, 12, 7, 10]', '[1, 2, 3, 4, 5, 6]', '[11, 14, 20, 9]'] }
            },
            {
              t: 'codigo',
              p: 'Mostre os 3 maiores valores da lista, do maior para o menor',
              start: `v = {L}
`,
              sol: `v = {L}
print(sorted(v, reverse=True)[:3])`,
              dica: 'Ordene ao contrário e pegue a fatia [:3].',
              exp: 'Ordenar e fatiar é um jeito rápido de fazer um pódio.',
              vars: { L: ['[4, 9, 1, 7, 3]', '[15, 2, 8, 22, 11, 5]', '[0.5, 0.9, 0.1, 0.7]'] }
            },
            {
              t: 'codigo',
              p: 'Normalize as medidas: divida cada uma pela maior e arredonde com 2 casas',
              start: `medidas = {L}
`,
              sol: `medidas = {L}
maior = max(medidas)
print([round(m / maior, 2) for m in medidas])`,
              dica: 'Guarde o max numa variável e use uma compreensão de lista com round.',
              exp: 'Normalizar deixa os valores entre 0 e 1, o que facilita comparar.',
              vars: { L: ['[12, 30, 18, 24]', '[3.5, 7, 1.4]', '[200, 150, 400, 50]'] }
            }
          ]
        },
        {
          id: 'py4l7',
          titulo: 'Listas de listas',
          exs: [
            {
              t: 'texto',
              titulo: 'Tabelas e matrizes',
              blocos: [
                {
                  p: 'Uma lista pode guardar outras listas. É assim que se representa uma tabela ou uma matriz: cada item é uma linha.'
                },
                {
                  code: `m = [[1, 2, 3],
     [4, 5, 6]]
print(m[1])
print(m[1][2])
for linha in m:
    print(sum(linha))`
                },
                {
                  p: '`m[1]` é a segunda linha; `m[1][2]` é o terceiro item dela. Para somar uma coluna, percorra as linhas pegando sempre a mesma posição.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Em `m = [[1, 2, 3], [4, 5, 6]]`, quanto vale `m[1][0]`?',
              ops: ['4', '2', '1'],
              c: 0,
              exp: 'Linha 1 (a segunda), posição 0 (a primeira).'
            },
            {
              t: 'escolha',
              p: 'Em `m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]`, quanto vale `m[{I}][{J}]`?',
              ops: ['{= 3 * I + J + 1 }', '{= 3 * J + I + 1 }', '{= 3 * I + J + 2 }'],
              c: 0,
              exp: 'O primeiro índice é a linha; o segundo, a coluna.',
              vars: { I: { de: 0, ate: 2 }, J: { de: 0, ate: 2 } },
              se: 'I !== J'
            },
            {
              t: 'codigo',
              p: 'Mostre a soma de cada linha da tabela, uma por linha',
              start: `m = {M}
`,
              sol: `m = {M}
for linha in m:
    print(sum(linha))`,
              dica: 'Cada item de m é uma lista: some com sum.',
              exp: 'Somar linhas é como o total de cada aluno numa planilha de notas.',
              vars: {
                M: ['[[1, 2, 3], [4, 5, 6]]', '[[7, 1], [2, 2], [5, 9]]', '[[10, 20, 30, 40]]']
              }
            },
            {
              t: 'codigo',
              p: 'Mostre a soma de cada coluna da tabela, uma por linha',
              start: `m = {M}
`,
              sol: `m = {M}
for j in range(len(m[0])):
    total = 0
    for linha in m:
        total += linha[j]
    print(total)`,
              dica: 'Para cada posição j, some linha[j] de todas as linhas.',
              exp: 'O número de colunas é o tamanho da primeira linha.',
              vars: { M: ['[[1, 2, 3], [4, 5, 6]]', '[[7, 1], [2, 2], [5, 9]]'] }
            },
            {
              t: 'codigo',
              p: 'Transponha a matriz (linhas viram colunas) e mostre o resultado',
              start: `m = {M}
`,
              sol: `m = {M}
t = [[m[i][j] for i in range(len(m))] for j in range(len(m[0]))]
print(t)`,
              dica: 'A linha j da transposta junta o item j de cada linha da original.',
              exp: 'Transpor é uma das operações mais usadas com matrizes. O NumPy faz isso com .T.',
              vars: { M: ['[[1, 2, 3], [4, 5, 6]]', '[[1, 2], [3, 4], [5, 6]]'] }
            }
          ]
        }
      ]
    },
    {
      id: 'pyu8',
      titulo: 'Tuplas, dicionários e conjuntos',
      conceito: '{ }',
      desc: 'Valores com nome e coleções sem repetição.',
      licoes: [
        {
          id: 'py4l3',
          titulo: 'Tuplas, enumerate e zip',
          exs: [
            {
              t: 'texto',
              titulo: 'Pares de valores',
              blocos: [
                {
                  p: 'Uma tupla é como uma lista que não muda, escrita com parênteses. Dá para desempacotar os valores em variáveis de uma vez, e até trocar dois valores numa linha.'
                },
                {
                  code: `ponto = (3, 4)
x, y = ponto
print(x + y)
a, b = 1, 2
a, b = b, a
print(a, b)`
                },
                {
                  p: '`enumerate` dá a posição junto com o item, e `zip` anda em duas listas ao mesmo tempo:'
                },
                {
                  code: `nomes = ["Ana", "Bia"]
notas = [8, 9]
for i, nome in enumerate(nomes, 1):
    print(i, nome)
for nome, nota in zip(nomes, notas):
    print(f"{nome}: {nota}")`
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Depois de `a, b = ({A}, {B})`, quanto vale b?',
              ops: ['{B}', '{A}', '({A}, {B})'],
              c: 0,
              exp: 'Os valores vão para as variáveis na mesma ordem.',
              vars: { A: { de: 1, ate: 50 }, B: { de: 1, ate: 50 } },
              se: 'A !== B'
            },
            {
              t: 'escolha',
              p: 'O que acontece em `t = (1, 2)` seguido de `t[0] = 5`?',
              ops: ['Dá erro: tuplas não mudam', 't vira (5, 2)', 'Nada'],
              c: 0,
              exp: 'Para algo que muda, use lista.'
            },
            {
              t: 'complete',
              p: 'Complete para numerar os nomes a partir de 1',
              code: 'for i, nome in ___(nomes, 1):',
              bank: ['enumerate', 'zip', 'range', 'list'],
              c: ['enumerate'],
              exp: 'enumerate devolve pares (posição, item).'
            },
            {
              t: 'codigo',
              p: 'Troque os valores de a e b numa linha só, desempacotando, e mostre a e b',
              start: `a = {A}
b = {B}
`,
              sol: `a = {A}
b = {B}
a, b = b, a
print(a, b)`,
              dica: 'a, b = b, a',
              exp: 'Em muitas linguagens isso precisa de uma variável auxiliar. Em Python, não.',
              vars: { A: { de: 1, ate: 50 }, B: { de: 1, ate: 50 } },
              se: 'A !== B'
            },
            {
              t: 'codigo',
              p: 'Mostre o ranking no formato 1º Ana, 2º Caio, 3º Duda',
              start: `ranking = ["Ana", "Caio", "Duda"]
`,
              saida: `1º Ana
2º Caio
3º Duda`,
              sol: `ranking = ["Ana", "Caio", "Duda"]
for pos, nome in enumerate(ranking, 1):
    print(f"{pos}º {nome}")`,
              dica: 'enumerate(ranking, 1) começa a contar do 1.',
              exp: 'Sem o 1, a contagem começaria do 0.'
            },
            {
              t: 'codigo',
              p: 'Mostre cada peça com o preço, no formato parafuso: R$ 0.35',
              start: `pecas = ["parafuso", "porca", "arruela"]
precos = [0.35, 0.20, 0.10]
`,
              saida: `parafuso: R$ 0.35
porca: R$ 0.20
arruela: R$ 0.10`,
              sol: `pecas = ["parafuso", "porca", "arruela"]
precos = [0.35, 0.20, 0.10]
for peca, preco in zip(pecas, precos):
    print(f"{peca}: R$ {preco:.2f}")`,
              dica: 'Use zip e, na f-string, {preco:.2f} para duas casas.',
              exp: 'O :.2f mostra sempre duas casas: 0.20, e não 0.2.'
            },
            {
              t: 'codigo',
              p: 'Usando zip, mostre o nome de quem tirou a maior nota',
              start: `alunos = ["Ana", "Bia", "Caio", "Duda"]
notas = {L}
`,
              sol: `alunos = ["Ana", "Bia", "Caio", "Duda"]
notas = {L}
melhor, maior = alunos[0], notas[0]
for aluno, nota in zip(alunos, notas):
    if nota > maior:
        melhor, maior = aluno, nota
print(melhor)`,
              dica: 'Guarde o melhor aluno e a maior nota e troque os dois juntos.',
              exp: 'Também daria com max(zip(notas, alunos)), comparando primeiro as notas.',
              vars: { L: ['[7, 9, 6, 8]', '[10, 4, 8, 9]', '[5, 6, 7, 9.5]'] }
            }
          ]
        },
        {
          id: 'py4l4',
          titulo: 'Dicionários',
          exs: [
            {
              t: 'texto',
              titulo: 'Chave e valor',
              blocos: [
                {
                  p: 'Um dicionário guarda pares de chave e valor, entre chaves. Em vez de posição, você acessa pelo nome.'
                },
                {
                  code: `estoque = {"parafuso": 120, "porca": 80}
print(estoque["porca"])
estoque["arruela"] = 200
estoque["porca"] -= 30
print(estoque)`
                },
                {
                  p: 'Pedir uma chave que não existe dá KeyError. O método `get` devolve um valor padrão no lugar do erro. E `items()` percorre os pares:'
                },
                {
                  code: `estoque = {"parafuso": 120, "porca": 80}
print(estoque.get("rebite", 0))
for peca, qtd in estoque.items():
    print(peca, qtd)`
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Como pegar o valor da chave "porca" sem erro se ela não existir?',
              ops: ['estoque.get("porca", 0)', 'estoque[0]', 'estoque.porca'],
              c: 0,
              mono: true,
              exp: 'get devolve o padrão quando a chave falta.'
            },
            {
              t: 'escolha',
              p: 'Com `d = {"a": {A}, "b": {B}}`, o que `d.get("c", 0)` devolve?',
              ops: ['0', '{A}', 'Erro'],
              c: 0,
              exp: 'A chave "c" não existe, então vem o padrão.',
              vars: { A: { de: 1, ate: 9 }, B: { de: 1, ate: 9 } }
            },
            {
              t: 'complete',
              p: 'Complete para percorrer chaves e valores juntos',
              code: 'for chave, valor in d.___():',
              bank: ['items', 'keys', 'values', 'pairs'],
              c: ['items'],
              exp: 'keys dá só as chaves; values, só os valores.'
            },
            {
              t: 'codigo',
              p: 'Conte quantas vezes cada palavra aparece e mostre o dicionário',
              start: `texto = "{TX}"
contagem = {}
`,
              sol: `texto = "{TX}"
contagem = {}
for palavra in texto.split():
    contagem[palavra] = contagem.get(palavra, 0) + 1
print(contagem)`,
              dica: 'split() separa as palavras. Para cada uma: contagem[palavra] = contagem.get(palavra, 0) + 1.',
              exp: 'Esse padrão de contagem aparece em todo tipo de análise de dados.',
              vars: { TX: ['sim nao sim talvez sim nao', 'a b a c b a', 'azul verde azul azul'] }
            },
            {
              t: 'codigo',
              p: 'Mostre só as peças com menos de {M} unidades, no formato porca: 30',
              start: `estoque = {"parafuso": 120, "porca": 30, "arruela": 45, "rebite": 300}
`,
              sol: `estoque = {"parafuso": 120, "porca": 30, "arruela": 45, "rebite": 300}
for peca, qtd in estoque.items():
    if qtd < {M}:
        print(f"{peca}: {qtd}")`,
              dica: 'Percorra estoque.items() e teste a quantidade.',
              exp: 'Os dicionários mantêm a ordem em que os itens foram criados.',
              vars: { M: [40, 50, 150] }
            },
            {
              t: 'codigo',
              p: 'Calcule o valor total do estoque (quantidade vezes preço de cada peça) e mostre com 2 casas',
              start: `quantidade = {"parafuso": {Q1}, "porca": {Q2}}
preco = {"parafuso": 0.35, "porca": 0.20}
`,
              sol: `quantidade = {"parafuso": {Q1}, "porca": {Q2}}
preco = {"parafuso": 0.35, "porca": 0.20}
total = 0
for peca, qtd in quantidade.items():
    total += qtd * preco[peca]
print(f"{total:.2f}")`,
              dica: 'Para cada peça, some qtd * preco[peca].',
              exp: 'Dois dicionários com as mesmas chaves funcionam como colunas de uma tabela.',
              vars: { Q1: { de: 10, ate: 200, passo: 10 }, Q2: { de: 10, ate: 200, passo: 10 } }
            },
            {
              t: 'codigo',
              p: 'Agrupe as palavras pela primeira letra num dicionário de listas e mostre o dicionário',
              start: `palavras = ["ana", "bola", "asa", "bico", "casa"]
grupos = {}
`,
              saida: '{\'a\': [\'ana\', \'asa\'], \'b\': [\'bola\', \'bico\'], \'c\': [\'casa\']}',
              sol: `palavras = ["ana", "bola", "asa", "bico", "casa"]
grupos = {}
for p in palavras:
    letra = p[0]
    if letra not in grupos:
        grupos[letra] = []
    grupos[letra].append(p)
print(grupos)`,
              dica: 'Se a letra ainda não é chave, crie uma lista vazia; depois, append.',
              exp: 'Agrupar é o primeiro passo de muitos relatórios.'
            }
          ]
        },
        {
          id: 'py4l5',
          titulo: 'Conjuntos e qual estrutura usar',
          exs: [
            {
              t: 'texto',
              titulo: 'set: sem repetição',
              blocos: [
                {
                  p: 'Um conjunto (`set`) guarda valores sem repetir e sem ordem. É ótimo para tirar repetidos e para comparar grupos.'
                },
                {
                  code: `cidades = ["Natal", "Recife", "Natal", "Belém"]
print(sorted(set(cidades)))
a = {1, 2, 3}
b = {2, 3, 4}
print(a & b)
print(a | b)
print(a - b)`
                },
                {
                  tabela: {
                    cab: ['Estrutura', 'Quando usar'],
                    codigo: [0],
                    linhas: [
                      ['list [ ]', 'itens em ordem, que podem repetir e mudar'],
                      ['tuple ( )', 'poucos valores que andam juntos e não mudam, como x e y'],
                      ['dict { : }', 'achar um valor pelo nome, como estoque por peça'],
                      ['set { }', 'sem repetidos, ou comparar grupos']
                    ]
                  }
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que `set([1, 1, 2])` guarda?',
              ops: ['{1, 2}', '{1, 1, 2}', '[1, 2]'],
              c: 0,
              exp: 'Conjuntos não têm repetidos.'
            },
            {
              t: 'escolha',
              p: 'Qual estrutura usar para achar o telefone de alguém pelo nome?',
              ops: ['Um dicionário', 'Uma tupla', 'Um conjunto'],
              c: 0,
              exp: 'Chave nome, valor telefone.'
            },
            {
              t: 'escolha',
              p: 'O que `{1, 2, 3} & {2, 3, 4}` dá?',
              ops: ['{2, 3}', '{1, 2, 3, 4}', '{1, 4}'],
              c: 0,
              exp: '& é a interseção: o que está nos dois.'
            },
            {
              t: 'complete',
              p: 'Complete para contar quantos valores diferentes a lista tem',
              code: 'print(len(___(lista)))',
              bank: ['set', 'list', 'dict', 'sorted'],
              c: ['set'],
              exp: 'O set tira os repetidos; o len conta o que sobrou.'
            },
            {
              t: 'codigo',
              p: 'Mostre quantos números diferentes a lista tem',
              start: `v = {L}
`,
              sol: `v = {L}
print(len(set(v)))`,
              dica: 'len(set(v))',
              exp: 'Contar valores distintos é muito comum em análise de dados.',
              vars: {
                L: [
                  '[1, 2, 2, 3, 3, 3]',
                  '[5, 5, 5]',
                  '[4, 8, 15, 16, 23, 42]',
                  '[7, 1, 7, 2, 1]'
                ]
              }
            },
            {
              t: 'codigo',
              p: 'Mostre, em ordem alfabética e sem repetir, as matérias das duas turmas juntas',
              start: `turma_a = ["física", "cálculo", "química"]
turma_b = ["cálculo", "desenho", "física"]
`,
              saida: '[\'cálculo\', \'desenho\', \'física\', \'química\']',
              sol: `turma_a = ["física", "cálculo", "química"]
turma_b = ["cálculo", "desenho", "física"]
print(sorted(set(turma_a) | set(turma_b)))`,
              dica: 'Transforme as duas em set, junte com | e use sorted.',
              exp: 'sorted devolve uma lista, por isso aparecem os colchetes.'
            },
            {
              t: 'codigo',
              p: 'Mostre, em ordem alfabética, as letras que aparecem nas duas palavras',
              start: `p1 = "{P1}"
p2 = "{P2}"
`,
              sol: `p1 = "{P1}"
p2 = "{P2}"
print(sorted(set(p1) & set(p2)))`,
              dica: 'set de um texto dá o conjunto das letras dele.',
              exp: 'Interseção de conjuntos responde perguntas do tipo o que os dois têm em comum.',
              vars: { P1: ['python', 'brasil', 'amazonas'], P2: ['planta', 'sol', 'nuvem'] }
            }
          ]
        }
      ]
    }
  ]
});
