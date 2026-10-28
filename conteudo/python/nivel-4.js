/* Trilha Livre · Python do zero · Nível 4: Listas e dicionários
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'python',
  n: 4,
  titulo: 'Listas e dicionários',
  desc: 'Guardar muitos valores: listas, tuplas, dicionários e conjuntos.',
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
              p: 'Depois de lista = [3, 5] e lista.append(7), como fica a lista?',
              ops: ['[3, 5, 7]', '[7, 3, 5]', '[3, 5]'],
              c: 0,
              exp: 'append põe no fim.'
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
              p: 'Troque a nota errada da posição 2 por 8.5 e mostre a lista',
              start: `notas = [7, 9, 85, 6]
`,
              saida: '[7, 9, 8.5, 6]',
              sol: `notas = [7, 9, 85, 6]
notas[2] = 8.5
print(notas)`,
              dica: 'notas[2] = 8.5',
              exp: 'Listas podem ser mudadas depois de criadas.'
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
                  p: 'Com listas de números, o Python já traz `sum`, `min`, `max` e `sorted`, que devolve uma cópia em ordem.'
                },
                {
                  code: `notas = [7, 9.5, 6, 8]
print(sum(notas) / len(notas))
print(max(notas), min(notas))
print(sorted(notas))`
                },
                {
                  p: 'Fatias pegam um pedaço: `notas[1:3]` vai da posição 1 até antes da 3. E a compreensão de lista cria uma lista nova a partir de outra numa linha só:'
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
              p: 'O que sorted([3, 1, 2]) devolve?',
              ops: ['[1, 2, 3]', '[3, 2, 1]', '3'],
              c: 0,
              exp: 'sorted devolve uma lista nova, em ordem crescente.'
            },
            {
              t: 'codigo',
              p: 'Mostre a média, a maior e a menor nota, cada uma numa linha',
              start: `notas = [6.5, 8, 9.5, 7]
`,
              saida: `7.75
9.5
6.5`,
              sol: `notas = [6.5, 8, 9.5, 7]
print(sum(notas) / len(notas))
print(max(notas))
print(min(notas))`,
              dica: 'Média é sum dividido por len.',
              exp: 'Esses atalhos funcionam com qualquer lista de números.'
            },
            {
              t: 'codigo',
              p: 'Converta as medidas de polegadas para milímetros (1 polegada = 25.4 mm) com uma compreensão de lista',
              start: `polegadas = [0.5, 1, 2]
`,
              saida: '[12.7, 25.4, 50.8]',
              sol: `polegadas = [0.5, 1, 2]
mm = [p * 25.4 for p in polegadas]
print(mm)`,
              dica: '[p * 25.4 for p in polegadas]',
              exp: 'Compreensão de lista é muito usada para transformar dados.'
            }
          ]
        },
        {
          id: 'py4l3',
          titulo: 'Tuplas, enumerate e zip',
          exs: [
            {
              t: 'texto',
              titulo: 'Pares de valores',
              blocos: [
                {
                  p: 'Uma tupla é como uma lista que não muda, escrita com parênteses. Dá para desempacotar os valores em variáveis de uma vez.'
                },
                {
                  code: `ponto = (3, 4)
x, y = ponto
print(x + y)`
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
              p: 'Depois de a, b = (10, 20), quanto vale b?',
              ops: ['20', '10', '(10, 20)'],
              c: 0,
              exp: 'Os valores vão para as variáveis na mesma ordem.'
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
            }
          ]
        }
      ]
    },
    {
      id: 'pyu8',
      titulo: 'Dicionários e conjuntos',
      conceito: '{ }',
      desc: 'Valores com nome e coleções sem repetição.',
      licoes: [
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
              exp: 'get devolve o padrão quando a chave falta.'
            },
            {
              t: 'codigo',
              p: 'Conte quantas vezes cada palavra aparece e mostre o dicionário',
              start: `texto = "sim nao sim talvez sim nao"
contagem = {}
`,
              saida: '{\'sim\': 3, \'nao\': 2, \'talvez\': 1}',
              sol: `texto = "sim nao sim talvez sim nao"
contagem = {}
for palavra in texto.split():
    contagem[palavra] = contagem.get(palavra, 0) + 1
print(contagem)`,
              dica: 'split() separa as palavras. Para cada uma: contagem[palavra] = contagem.get(palavra, 0) + 1.',
              exp: 'Esse padrão de contagem aparece em todo tipo de análise de dados.'
            },
            {
              t: 'codigo',
              p: 'Mostre só as peças com menos de 50 unidades, no formato porca: 30',
              start: `estoque = {"parafuso": 120, "porca": 30, "arruela": 45, "rebite": 300}
`,
              saida: `porca: 30
arruela: 45`,
              sol: `estoque = {"parafuso": 120, "porca": 30, "arruela": 45, "rebite": 300}
for peca, qtd in estoque.items():
    if qtd < 50:
        print(f"{peca}: {qtd}")`,
              dica: 'Percorra estoque.items() e teste a quantidade.',
              exp: 'Os dicionários mantêm a ordem em que os itens foram criados.'
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
print(a | b)`
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
              p: 'O que set([1, 1, 2]) guarda?',
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
            }
          ]
        }
      ]
    }
  ]
});
