/* Trilha Livre · Python do zero · Nível 6: Arquivos e dados
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'python',
  n: 6,
  titulo: 'Arquivos e dados',
  desc: 'Formatar números, ler e gravar arquivos, CSV e JSON.',
  videos: [
    {
      titulo: 'Curso de Python 3, Mundo 3',
      canal: 'Curso em Vídeo (Gustavo Guanabara)',
      obs: 'aulas sobre arquivos e módulos',
      url: 'https://www.youtube.com/c/CursoemV%C3%ADdeo'
    },
    {
      tipo: 'texto',
      titulo: 'Pense em Python',
      canal: 'Allen B. Downey, livro aberto',
      obs: 'capítulo 14: arquivos',
      url: 'https://penseallen.github.io/PensePython2e/'
    }
  ],
  unidades: [
    {
      id: 'pyu11',
      titulo: 'Textos e arquivos',
      conceito: 'open()',
      desc: 'Formatar a saída e guardar dados.',
      licoes: [
        {
          id: 'py6l1',
          titulo: 'Formatando números e textos',
          exs: [
            {
              t: 'texto',
              titulo: 'Números do jeito certo',
              blocos: [
                {
                  p: 'Dentro das chaves de uma f-string, depois de dois-pontos, vem o formato. Os mais usados:'
                },
                {
                  tabela: {
                    cab: ['Código', 'Resultado'],
                    codigo: [0, 1],
                    linhas: [
                      ['f"{3.14159:.2f}"', '3.14'],
                      ['f"{7:03d}"', '007'],
                      ['f"{0.256:.1%}"', '25.6%'],
                      ['f"{1234567.8:,.2f}"', '1,234,567.80'],
                      ['f"{"ok":>6}"', '    ok']
                    ]
                  }
                },
                {
                  p: 'O padrão do Python usa o jeito americano: ponto nas casas decimais e vírgula nos milhares. Para mostrar dinheiro no formato brasileiro, uma troca resolve:'
                },
                {
                  code: `valor = 1234567.8
texto = f"{valor:,.2f}"
br = texto.replace(",", "_").replace(".", ",").replace("_", ".")
print(f"R$ {br}")`
                },
                {
                  p: 'Outros recursos dos textos: `split` quebra em pedaços, `join` junta uma lista com um separador, e `replace` troca um trecho.'
                },
                {
                  code: `data = "28/10/2026"
dia, mes, ano = data.split("/")
print("-".join([ano, mes, dia]))`
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que f"{2.5:.2f}" mostra?',
              ops: ['2.50', '2.5', '3'],
              c: 0,
              exp: '.2f mostra sempre duas casas.'
            },
            {
              t: 'codigo',
              p: 'Mostre o salário no formato brasileiro: R$ 3.250,50',
              start: `salario = 3250.5
`,
              saida: 'R$ 3.250,50',
              sol: `salario = 3250.5
texto = f"{salario:,.2f}"
br = texto.replace(",", "_").replace(".", ",").replace("_", ".")
print(f"R$ {br}")`,
              dica: 'Formate com :,.2f e troque vírgula e ponto usando um caractere temporário.',
              exp: 'O caractere temporário evita que a primeira troca atrapalhe a segunda.'
            },
            {
              t: 'codigo',
              p: 'Transforme a lista de nomes no texto Ana, Bruno e Carla, usando join',
              start: `nomes = ["Ana", "Bruno", "Carla"]
`,
              saida: 'Ana, Bruno e Carla',
              sol: `nomes = ["Ana", "Bruno", "Carla"]
print(", ".join(nomes[:-1]) + " e " + nomes[-1])`,
              dica: 'Junte todos menos o último com ", " e acrescente " e " com o último.',
              exp: 'nomes[:-1] pega todos menos o último.'
            }
          ]
        },
        {
          id: 'py6l2',
          titulo: 'Lendo e gravando arquivos',
          exs: [
            {
              t: 'texto',
              titulo: 'open e with',
              blocos: [
                {
                  p: 'Para gravar um arquivo de texto, abra com `open(nome, "w")` e use `write`. Para ler, abra com `"r"`. O `with` fecha o arquivo sozinho no fim do bloco.'
                },
                {
                  code: `with open("notas.txt", "w") as arq:
    arq.write("Ana;8\\n")
    arq.write("Bia;9\\n")

with open("notas.txt") as arq:
    for linha in arq:
        print(linha.strip())`
                },
                {
                  p: 'O `\\n` é a quebra de linha. Ao ler, cada linha vem com ela no fim, por isso o `strip()`. O modo `"a"` acrescenta no fim em vez de apagar o que já existia.'
                },
                {
                  dica: 'No app, os arquivos ficam numa memória temporária e somem quando o programa termina. No seu computador, eles são gravados de verdade na pasta do programa.'
                },
                {
                  p: 'Uma boa prática: diga a codificação, para os acentos saírem certos em qualquer computador: `open("notas.txt", "w", encoding="utf-8")`.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual modo de open acrescenta no fim do arquivo sem apagar?',
              ops: ['"a"', '"w"', '"r"'],
              c: 0,
              exp: '"w" apaga e começa de novo; "r" só lê.'
            },
            {
              t: 'codigo',
              p: 'Grave três linhas no arquivo, uma por medição, e depois leia e mostre quantas linhas ele tem',
              start: `medicoes = ["10.1", "9.9", "10.3"]
`,
              saida: '3',
              sol: `medicoes = ["10.1", "9.9", "10.3"]
with open("medicoes.txt", "w", encoding="utf-8") as arq:
    for m in medicoes:
        arq.write(m + "\\n")

with open("medicoes.txt", encoding="utf-8") as arq:
    linhas = arq.readlines()
print(len(linhas))`,
              dica: 'Grave com "w" e write(m + "\\n"); depois leia com readlines().',
              exp: 'readlines devolve uma lista com as linhas.'
            }
          ]
        }
      ]
    },
    {
      id: 'pyu12',
      titulo: 'Dados',
      conceito: 'csv',
      desc: 'Planilhas, JSON e dados bagunçados.',
      licoes: [
        {
          id: 'py6l3',
          titulo: 'Planilhas em CSV',
          exs: [
            {
              t: 'texto',
              titulo: 'CSV: a planilha em texto',
              blocos: [
                {
                  p: 'CSV é uma planilha em texto puro: uma linha por registro e as colunas separadas por vírgula (ou ponto e vírgula, no Brasil). Quase todo programa de planilha abre e salva CSV.'
                },
                {
                  p: 'O módulo `csv` lê sem você precisar quebrar as linhas na mão. O `DictReader` usa a primeira linha como nome das colunas:'
                },
                {
                  code: `import csv

with open("consumo.csv", "w", encoding="utf-8") as arq:
    arq.write("mes,kwh\\njan,210\\nfev,185\\nmar,240\\n")

with open("consumo.csv", encoding="utf-8") as arq:
    for linha in csv.DictReader(arq):
        print(linha["mes"], int(linha["kwh"]))`
                },
                {
                  dica: 'Para CSV com ponto e vírgula, use `csv.DictReader(arq, delimiter=";")`.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que o DictReader usa como nome das colunas?',
              ops: ['A primeira linha do arquivo', 'Números de 0 em diante', 'Nada'],
              c: 0,
              exp: 'Cada linha vira um dicionário com esses nomes.'
            },
            {
              t: 'codigo',
              p: 'Leia o CSV e mostre o consumo total e o mês de maior consumo, em duas linhas',
              start: `import csv

with open("consumo.csv", "w", encoding="utf-8") as arq:
    arq.write("mes,kwh\\njan,210\\nfev,185\\nmar,240\\nabr,198\\n")

# leia o arquivo e calcule
`,
              saida: `833
mar`,
              sol: `import csv

with open("consumo.csv", "w", encoding="utf-8") as arq:
    arq.write("mes,kwh\\njan,210\\nfev,185\\nmar,240\\nabr,198\\n")

total = 0
maior_mes = ""
maior = 0
with open("consumo.csv", encoding="utf-8") as arq:
    for linha in csv.DictReader(arq):
        kwh = int(linha["kwh"])
        total += kwh
        if kwh > maior:
            maior = kwh
            maior_mes = linha["mes"]
print(total)
print(maior_mes)`,
              dica: 'Para cada linha, converta kwh com int, some no total e guarde o mês do maior valor.',
              exp: 'Os valores do CSV chegam como texto: sempre converta antes de fazer contas.'
            }
          ]
        },
        {
          id: 'py6l4',
          titulo: 'JSON',
          exs: [
            {
              t: 'texto',
              titulo: 'O formato dos dados na internet',
              blocos: [
                {
                  p: 'JSON é o formato mais usado para trocar dados entre programas e sites. Ele se parece muito com os dicionários e listas do Python. O módulo `json` converte nos dois sentidos.'
                },
                {
                  code: `import json

texto = '{"nome": "Bomba d\\'água", "potencia_w": 750, "tags": ["hidráulica", "motor"]}'
dados = json.loads(texto)
print(dados["potencia_w"])
print(json.dumps({"ok": True, "valor": 3.5}))`
                },
                {
                  p: '`json.loads` lê um texto JSON e devolve dicionários e listas. `json.dumps` faz o contrário. Use `ensure_ascii=False` para os acentos aparecerem e `indent=2` para deixar o texto organizado.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que json.loads faz?',
              ops: [
                'Transforma um texto JSON em dicionários e listas do Python',
                'Baixa um arquivo da internet',
                'Apaga o JSON'
              ],
              c: 0,
              exp: 'O s no fim de loads vem de string, texto.'
            },
            {
              t: 'codigo',
              p: 'Leia o JSON e mostre o nome do sensor e a média das leituras, arredondada com 1 casa',
              start: `import json
texto = '{"sensor": "T-01", "leituras": [21.5, 22.0, 23.1, 22.4]}'
`,
              saida: `T-01
22.2`,
              sol: `import json
texto = '{"sensor": "T-01", "leituras": [21.5, 22.0, 23.1, 22.4]}'
dados = json.loads(texto)
print(dados["sensor"])
print(round(sum(dados["leituras"]) / len(dados["leituras"]), 1))`,
              dica: 'json.loads(texto) e depois dados["sensor"] e dados["leituras"].',
              exp: 'Dados de sensores e de sites costumam chegar assim.'
            }
          ]
        },
        {
          id: 'py6l5',
          titulo: 'Limpando dados bagunçados',
          exs: [
            {
              t: 'texto',
              titulo: 'Dados reais vêm sujos',
              blocos: [
                {
                  p: 'Planilhas preenchidas à mão trazem espaços sobrando, vírgula no lugar do ponto, maiúsculas misturadas e valores faltando. Antes de calcular, é preciso limpar.'
                },
                {
                  code: `brutos = [" 12,5", "13.0 ", "", "erro", "11,8"]
valores = []
for b in brutos:
    b = b.strip().replace(",", ".")
    try:
        valores.append(float(b))
    except ValueError:
        pass  # ignora o que não é número
print(valores)`
                },
                {
                  dica: 'Anote quantos valores foram descartados. Jogar dados fora sem contar pode esconder um problema no processo.'
                }
              ]
            },
            {
              t: 'codigo',
              p: 'Limpe as medidas, ignore as inválidas e mostre a média com 2 casas e quantas foram descartadas',
              start: `brutas = ["10,2", " 9.8", "N/A", "10.0 ", "", "10,4"]
validas = []
descartadas = 0
`,
              saida: `10.10
2`,
              sol: `brutas = ["10,2", " 9.8", "N/A", "10.0 ", "", "10,4"]
validas = []
descartadas = 0
for b in brutas:
    b = b.strip().replace(",", ".")
    try:
        validas.append(float(b))
    except ValueError:
        descartadas += 1
print(f"{sum(validas) / len(validas):.2f}")
print(descartadas)`,
              dica: 'strip, replace(",", ".") e float dentro de um try. No except, some 1 em descartadas.',
              exp: 'Limpar dados costuma ser a maior parte do trabalho de quem analisa dados.'
            },
            {
              t: 'codigo',
              p: 'Padronize os nomes das cidades (sem espaços nas pontas e com a primeira letra maiúscula) e mostre a lista sem repetidos, em ordem',
              start: `cidades = ["  recife", "NATAL", "Recife ", "belém", "natal"]
`,
              saida: '[\'Belém\', \'Natal\', \'Recife\']',
              sol: `cidades = ["  recife", "NATAL", "Recife ", "belém", "natal"]
limpas = sorted(set(c.strip().title() for c in cidades))
print(limpas)`,
              dica: 'c.strip().title() padroniza; set tira os repetidos; sorted ordena.',
              exp: 'title() põe maiúscula no começo de cada palavra.'
            }
          ]
        }
      ]
    }
  ]
});
