/* Trilha Livre · Python do zero · Nível 6: Arquivos e dados
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'python',
  n: 6,
  titulo: 'Arquivos e dados',
  desc: 'Formatar números, ler e gravar arquivos, CSV, JSON e limpeza de dados.',
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
                      ['f"{"ok":>6}"', '    ok'],
                      ['f"{"ok":<6}|"', 'ok    |']
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
              p: 'O que `f"{{X}:.1f}"` mostra?',
              ops: ['{= fix(X, 1) }', '{= fix(X, 2) }', '{= Math.round(X) }'],
              c: 0,
              exp: '.1f mostra uma casa depois do ponto, arredondando.',
              vars: { X: [2.345, 3.14159, 9.876, 0.555, 12.04] }
            },
            {
              t: 'complete',
              p: 'Complete para mostrar o preço com duas casas',
              code: 'print(f"{preco___}")',
              bank: [':.2f', ':2f', '.2', ':f2'],
              c: [':.2f'],
              exp: 'Dois-pontos, ponto, número de casas e f.'
            },
            {
              t: 'codigo',
              p: 'Mostre o salário no formato brasileiro, como em R$ 3.250,50',
              start: `salario = {S}
`,
              sol: `salario = {S}
texto = f"{salario:,.2f}"
br = texto.replace(",", "_").replace(".", ",").replace("_", ".")
print(f"R$ {br}")`,
              dica: 'Formate com :,.2f e troque vírgula e ponto usando um caractere temporário.',
              exp: 'O caractere temporário evita que a primeira troca atrapalhe a segunda.',
              vars: { S: { de: 1412, ate: 15000, passo: 0.5 } }
            },
            {
              t: 'codigo',
              p: 'Mostre quanto {A} é de {B} em porcentagem, com 1 casa, usando o formato :.1%',
              start: `parte = {A}
total = {B}
`,
              sol: `parte = {A}
total = {B}
print(f"{parte / total:.1%}")`,
              dica: 'O formato % multiplica por 100 e põe o símbolo.',
              exp: 'Não precisa multiplicar por 100 na mão.',
              vars: { A: { de: 1, ate: 40 }, B: { de: 41, ate: 200 } }
            },
            {
              t: 'codigo',
              p: 'Transforme a data {D} (dia/mês/ano) no formato ano-mês-dia',
              start: `data = "{D}"
`,
              sol: `data = "{D}"
dia, mes, ano = data.split("/")
print("-".join([ano, mes, dia]))`,
              dica: 'split("/") e depois "-".join([...]) na nova ordem.',
              exp: 'O formato ano-mês-dia é o padrão internacional, e ordena certo como texto.',
              vars: { D: ['28/10/2026', '07/09/1822', '15/11/1889', '01/05/1943'] }
            },
            {
              t: 'codigo',
              p: 'Transforme a lista de nomes no texto Ana, Bruno e Carla, usando join',
              start: `nomes = {L}
`,
              sol: `nomes = {L}
print(", ".join(nomes[:-1]) + " e " + nomes[-1])`,
              dica: 'Junte todos menos o último com ", " e acrescente " e " com o último.',
              exp: 'nomes[:-1] pega todos menos o último.',
              vars: {
                L: [
                  '["Ana", "Bruno", "Carla"]',
                  '["Davi", "Elis", "Fábio", "Gal"]',
                  '["Hugo", "Iara"]'
                ]
              }
            },
            {
              t: 'codigo',
              p: 'Monte uma tabela alinhada: nome do produto à esquerda em 10 caracteres e preço à direita em 8, com 2 casas',
              start: `produtos = [("café", 18.9), ("arroz", 6.5), ("feijão", 9)]
`,
              saida: `café         18.90
arroz         6.50
feijão        9.00`,
              sol: `produtos = [("café", 18.9), ("arroz", 6.5), ("feijão", 9)]
for nome, preco in produtos:
    print(f"{nome:<10}{preco:>8.2f}")`,
              dica: 'Use {nome:<10} e {preco:>8.2f}.',
              exp: 'Alinhar colunas deixa relatórios de texto fáceis de ler.'
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
                  p: 'Para gravar um arquivo de texto, abra com `open(nome, "w")` e use `write`. Para ler, abra com `"r"`, que é o padrão. O `with` fecha o arquivo sozinho no fim do bloco.'
                },
                {
                  code: `with open("notas.txt", "w", encoding="utf-8") as arq:
    arq.write("Ana;8\\n")
    arq.write("Bia;9\\n")

with open("notas.txt", encoding="utf-8") as arq:
    for linha in arq:
        print(linha.strip())`
                },
                {
                  p: 'O `\\n` é a quebra de linha. Ao ler, cada linha vem com ela no fim, por isso o `strip()`. O modo `"a"` acrescenta no fim em vez de apagar o que já existia. O `encoding="utf-8"` faz os acentos saírem certos em qualquer computador.'
                },
                {
                  dica: 'No app, cada programa roda numa pasta vazia, e os arquivos somem quando ele termina. No seu computador, eles são gravados de verdade na pasta do programa.'
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
              t: 'escolha',
              p: 'Por que usar `with open(...)`?',
              ops: [
                'Ele fecha o arquivo sozinho no fim do bloco',
                'Deixa o arquivo mais rápido',
                'É o único jeito de ler'
              ],
              c: 0,
              exp: 'Esquecer arquivos abertos pode perder dados.'
            },
            {
              t: 'complete',
              p: 'Complete para abrir o arquivo para gravar',
              code: 'with open("dados.txt", ___) as arq:',
              bank: ['"w"', '"r"', '"g"', '"q"'],
              c: ['"w"'],
              exp: 'w vem de write, escrever.'
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
            },
            {
              t: 'codigo',
              p: 'Grave os números de 1 a {N} no arquivo, um por linha; depois leia o arquivo e mostre a soma',
              start: `# grave em "numeros.txt"
`,
              sol: `with open("numeros.txt", "w") as arq:
    for i in range(1, {= N + 1 }):
        arq.write(f"{i}\\n")

total = 0
with open("numeros.txt") as arq:
    for linha in arq:
        total += int(linha)
print(total)`,
              dica: 'Ao ler, converta cada linha com int().',
              exp: 'int ignora a quebra de linha no fim.',
              vars: { N: { de: 3, ate: 12 } }
            },
            {
              t: 'codigo',
              p: 'O arquivo já tem duas tarefas. Acrescente "lavar a louça" com o modo "a" e mostre o arquivo inteiro',
              start: `with open("tarefas.txt", "w") as arq:
    arq.write("estudar Python\\nregar as plantas\\n")

`,
              saida: `estudar Python
regar as plantas
lavar a louça
`,
              sol: `with open("tarefas.txt", "w") as arq:
    arq.write("estudar Python\\nregar as plantas\\n")

with open("tarefas.txt", "a") as arq:
    arq.write("lavar a louça\\n")

with open("tarefas.txt") as arq:
    print(arq.read())`,
              dica: 'Abra com "a", escreva, e depois leia tudo com read().',
              exp: 'O print de read() mostra uma linha vazia no fim, por causa da última quebra de linha.'
            },
            {
              t: 'codigo',
              p: 'Conte quantas palavras o arquivo tem',
              start: `with open("texto.txt", "w") as arq:
    arq.write("{TX}")

`,
              sol: `with open("texto.txt", "w") as arq:
    arq.write("{TX}")

with open("texto.txt") as arq:
    print(len(arq.read().split()))`,
              dica: 'Leia tudo, divida com split() e conte com len.',
              exp: 'split() sem argumentos separa por qualquer espaço ou quebra de linha.',
              vars: {
                TX: [
                  'O Python roda no celular\\ne no computador',
                  'um dois tres\\nquatro',
                  'Trilha Livre\\né gratuita\\npara sempre'
                ]
              }
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
                { p: 'Para gravar, o `csv.writer` cuida das vírgulas e das aspas:' },
                {
                  code: `import csv

with open("saida.csv", "w", newline="") as arq:
    w = csv.writer(arq)
    w.writerow(["peca", "qtd"])
    w.writerow(["porca", 30])

print(open("saida.csv").read())`
                },
                {
                  dica: 'Para CSV com ponto e vírgula, use `delimiter=";"` no DictReader e no writer.'
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
              t: 'escolha',
              p: 'Os valores lidos de um CSV chegam como...',
              ops: ['Texto (str)', 'Números', 'Listas'],
              c: 0,
              exp: 'Sempre converta antes de fazer contas.'
            },
            {
              t: 'complete',
              p: 'Complete para ler um CSV separado por ponto e vírgula',
              code: 'csv.DictReader(arq, delimiter=___)',
              bank: ['";"', '","', '"."', '":"'],
              c: ['";"'],
              exp: 'delimiter diz qual caractere separa as colunas.'
            },
            {
              t: 'codigo',
              p: 'Leia o CSV e mostre o consumo total e o mês de maior consumo, em duas linhas',
              start: `import csv

with open("consumo.csv", "w", encoding="utf-8") as arq:
    arq.write("mes,kwh\\njan,{K1}\\nfev,{K2}\\nmar,{K3}\\nabr,{K4}\\n")

# leia o arquivo e calcule
`,
              sol: `import csv

with open("consumo.csv", "w", encoding="utf-8") as arq:
    arq.write("mes,kwh\\njan,{K1}\\nfev,{K2}\\nmar,{K3}\\nabr,{K4}\\n")

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
              exp: 'Os valores do CSV chegam como texto: sempre converta antes de fazer contas.',
              vars: {
                K1: { de: 150, ate: 300 },
                K2: { de: 150, ate: 300 },
                K3: { de: 150, ate: 300 },
                K4: { de: 150, ate: 300 }
              }
            },
            {
              t: 'codigo',
              p: 'Mostre a média de cada aluno, no formato Ana: 7.5',
              start: `import csv

with open("notas.csv", "w") as arq:
    arq.write("aluno;p1;p2\\nAna;{A1};{A2}\\nBeto;{B1};{B2}\\n")

`,
              sol: `import csv

with open("notas.csv", "w") as arq:
    arq.write("aluno;p1;p2\\nAna;{A1};{A2}\\nBeto;{B1};{B2}\\n")

with open("notas.csv") as arq:
    for linha in csv.DictReader(arq, delimiter=";"):
        media = (float(linha["p1"]) + float(linha["p2"])) / 2
        print(f"{linha['aluno']}: {media}")`,
              dica: 'Use delimiter=";" e converta as notas com float.',
              exp: 'Na f-string, aspas simples dentro de aspas duplas: linha[\'aluno\'].',
              vars: {
                A1: { de: 4, ate: 10 },
                A2: { de: 4, ate: 10 },
                B1: { de: 4, ate: 10 },
                B2: { de: 4, ate: 10 }
              }
            },
            {
              t: 'codigo',
              p: 'Grave num CSV novo só os produtos com estoque abaixo de 10 (com o cabeçalho) e mostre o conteúdo dele',
              start: `import csv
produtos = [("porca", 30), ("rebite", 4), ("arruela", 8), ("parafuso", 120)]
`,
              saida: `produto,estoque
rebite,4
arruela,8
`,
              sol: `import csv
produtos = [("porca", 30), ("rebite", 4), ("arruela", 8), ("parafuso", 120)]
with open("repor.csv", "w", newline="") as arq:
    w = csv.writer(arq)
    w.writerow(["produto", "estoque"])
    for nome, qtd in produtos:
        if qtd < 10:
            w.writerow([nome, qtd])
print(open("repor.csv").read())`,
              dica: 'csv.writer, um writerow para o cabeçalho e um para cada produto que passa no if.',
              exp: 'Filtrar e gravar é a base de muitas automações de planilha.'
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

texto = '{"nome": "Bomba d\\'água", "potencia_w": 750, "ligada": true}'
dados = json.loads(texto)
print(dados["potencia_w"], dados["ligada"])
print(json.dumps({"ok": True, "valor": 3.5}))`
                },
                {
                  p: '`json.loads` lê um texto JSON e devolve dicionários e listas. `json.dumps` faz o contrário. Use `ensure_ascii=False` para os acentos aparecerem e `indent=2` para deixar o texto organizado. Repare: em JSON, verdadeiro é `true`, com minúscula.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que `json.loads` faz?',
              ops: [
                'Transforma um texto JSON em dicionários e listas do Python',
                'Baixa um arquivo da internet',
                'Apaga o JSON'
              ],
              c: 0,
              exp: 'O s no fim de loads vem de string, texto.'
            },
            {
              t: 'escolha',
              p: 'Como o True do Python aparece em JSON?',
              ops: ['true', 'True', '"True"'],
              c: 0,
              exp: 'JSON usa true e false com minúscula, e null no lugar de None.'
            },
            {
              t: 'complete',
              p: 'Complete para transformar o dicionário em texto JSON com acentos',
              code: 'texto = json.___(dados, ensure_ascii=False)',
              bank: ['dumps', 'loads', 'dump', 'load'],
              c: ['dumps'],
              exp: 'dumps: do Python para texto.'
            },
            {
              t: 'codigo',
              p: 'Leia o JSON e mostre o nome do sensor e a média das leituras, arredondada com 1 casa',
              start: `import json
texto = '{"sensor": "T-0{S}", "leituras": {L}}'
`,
              sol: `import json
texto = '{"sensor": "T-0{S}", "leituras": {L}}'
dados = json.loads(texto)
print(dados["sensor"])
print(round(sum(dados["leituras"]) / len(dados["leituras"]), 1))`,
              dica: 'json.loads(texto) e depois dados["sensor"] e dados["leituras"].',
              exp: 'Dados de sensores e de sites costumam chegar assim.',
              vars: {
                S: { de: 1, ate: 9 },
                L: ['[21.5, 22.0, 23.1, 22.4]', '[30.2, 29.8]', '[18.0, 18.5, 19.0]']
              }
            },
            {
              t: 'codigo',
              p: 'Transforme o dicionário em JSON organizado, com indent=2 e acentos, e mostre',
              start: `import json
maquina = {"nome": "Prensa hidráulica", "ligada": True, "pecas_hora": 120}
`,
              saida: `{
  "nome": "Prensa hidráulica",
  "ligada": true,
  "pecas_hora": 120
}`,
              sol: `import json
maquina = {"nome": "Prensa hidráulica", "ligada": True, "pecas_hora": 120}
print(json.dumps(maquina, ensure_ascii=False, indent=2))`,
              dica: 'json.dumps(maquina, ensure_ascii=False, indent=2)',
              exp: 'Repare que o True virou true.'
            },
            {
              t: 'codigo',
              p: 'Leia o JSON de pedidos e mostre o total de cada cliente, no formato Ana: 45.5, na ordem em que aparecem',
              start: `import json
texto = '[{"cliente": "Ana", "valor": 30.0}, {"cliente": "Beto", "valor": 12.5}, {"cliente": "Ana", "valor": 15.5}]'
`,
              saida: `Ana: 45.5
Beto: 12.5`,
              sol: `import json
texto = '[{"cliente": "Ana", "valor": 30.0}, {"cliente": "Beto", "valor": 12.5}, {"cliente": "Ana", "valor": 15.5}]'
totais = {}
for p in json.loads(texto):
    totais[p["cliente"]] = totais.get(p["cliente"], 0) + p["valor"]
for cliente, total in totais.items():
    print(f"{cliente}: {total}")`,
              dica: 'Some num dicionário com get, como na contagem de palavras.',
              exp: 'Juntar os pedidos por cliente é um agrupamento, como numa tabela dinâmica.'
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
                  p: 'Outros métodos úteis: `zfill` completa com zeros à esquerda (`"42".zfill(5)` dá `"00042"`), e `isdigit` diz se o texto só tem dígitos.'
                },
                {
                  dica: 'Anote quantos valores foram descartados. Jogar dados fora sem contar pode esconder um problema no processo.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual método tira os espaços das pontas?',
              ops: ['strip()', 'trim()', 'clean()'],
              c: 0,
              exp: 'trim é de outras linguagens.'
            },
            {
              t: 'escolha',
              p: 'Como trocar vírgula por ponto num texto t?',
              ops: ['t.replace(",", ".")', 't.swap(",", ".")', 't.change(",", ".")'],
              c: 0,
              mono: true,
              exp: 'replace(velho, novo).'
            },
            {
              t: 'complete',
              p: 'Complete a conversão de "12,5" para número',
              code: 'valor = float(texto.___(",", "."))',
              bank: ['replace', 'split', 'strip', 'join'],
              c: ['replace'],
              exp: 'Primeiro troque a vírgula pelo ponto.'
            },
            {
              t: 'codigo',
              p: 'Limpe as medidas, ignore as inválidas e mostre a média com 2 casas e, na linha de baixo, quantas foram descartadas',
              start: `brutas = {L}
validas = []
descartadas = 0
`,
              sol: `brutas = {L}
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
              exp: 'Limpar dados costuma ser a maior parte do trabalho de quem analisa dados.',
              vars: {
                L: [
                  '["10,2", " 9.8", "N/A", "10.0 ", "", "10,4"]',
                  '["5,5", "x", "6,0 ", "6.5"]',
                  '[" 1,1", "1,3", "-", "1.2"]'
                ]
              }
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
            },
            {
              t: 'codigo',
              p: 'Padronize os códigos de peça: sem espaços, em maiúsculas e com 6 caracteres, completando com zeros à esquerda. Mostre a lista',
              start: `codigos = [" ab12", "x9 ", "CD3412", "7"]
`,
              saida: '[\'00AB12\', \'0000X9\', \'CD3412\', \'000007\']',
              sol: `codigos = [" ab12", "x9 ", "CD3412", "7"]
print([c.strip().upper().zfill(6) for c in codigos])`,
              dica: 'Encadeie strip(), upper() e zfill(6).',
              exp: 'Códigos padronizados evitam que a mesma peça apareça com nomes diferentes no estoque.'
            }
          ]
        }
      ]
    }
  ]
});
