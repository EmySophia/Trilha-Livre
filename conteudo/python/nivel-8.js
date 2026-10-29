/* Trilha Livre · Python do zero · Nível 8: Automação
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'python',
  n: 8,
  titulo: 'Automação',
  desc: 'Datas, expressões regulares, pastas e arquivos, e relatórios automáticos.',
  videos: [
    {
      tipo: 'texto',
      titulo: 'Automate the Boring Stuff with Python (em inglês)',
      canal: 'Al Sweigart, livro aberto',
      url: 'https://automatetheboringstuff.com/',
      obs: 'o livro clássico de automação com Python, de graça no site'
    }
  ],
  unidades: [
    {
      id: 'pyu16',
      titulo: 'Ferramentas de automação',
      conceito: 'datetime',
      desc: 'Datas, padrões em textos e arquivos.',
      licoes: [
        {
          id: 'pyau1',
          titulo: 'Datas e prazos',
          exs: [
            {
              t: 'texto',
              titulo: 'datetime',
              blocos: [
                {
                  p: 'O módulo `datetime` faz contas com datas: quantos dias faltam, que dia vai ser daqui a 30 dias, que dia da semana caiu uma data.'
                },
                {
                  code: `from datetime import date, timedelta

entrega = date(2026, 12, 20)
hoje = date(2026, 10, 28)
print((entrega - hoje).days)
print(hoje + timedelta(days=30))
print(hoje.strftime("%d/%m/%Y"))`
                },
                {
                  p: 'A diferença entre duas datas é um `timedelta`, com o número de dias em `.days`. O `strftime` formata: `%d` é o dia, `%m` o mês, `%Y` o ano com 4 dígitos. O `strptime` faz o contrário: lê um texto como data.'
                },
                {
                  code: `from datetime import datetime
d = datetime.strptime("07/09/2026", "%d/%m/%Y")
print(d.weekday())  # 0 é segunda-feira`
                },
                {
                  dica: 'Nos exercícios, a data de hoje é fixa, para o resultado não mudar de um dia para o outro.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que `(date(2026, 1, 10) - date(2026, 1, 1)).days` dá?',
              ops: ['9', '10', '1'],
              c: 0,
              exp: 'Do dia 1 ao dia 10 há 9 dias de diferença.'
            },
            {
              t: 'complete',
              p: 'Complete o formato brasileiro de data',
              code: 'hoje.strftime("___")',
              bank: ['%d/%m/%Y', '%Y/%d/%m', '%m/%d/%Y', 'dd/mm/aaaa'],
              c: ['%d/%m/%Y'],
              exp: 'Dia, mês e ano com 4 dígitos.'
            },
            {
              t: 'codigo',
              p: 'Mostre quantos dias faltam de 28/10/2026 até {D}/{M}/2027',
              start: `from datetime import date
hoje = date(2026, 10, 28)
`,
              sol: `from datetime import date
hoje = date(2026, 10, 28)
alvo = date(2027, {M}, {D})
print((alvo - hoje).days)`,
              dica: 'Crie a data com date(2027, mês, dia) e subtraia.',
              exp: 'O Python sabe quantos dias tem cada mês e os anos bissextos.',
              vars: { D: { de: 1, ate: 28 }, M: { de: 1, ate: 12 } }
            },
            {
              t: 'codigo',
              p: 'Mostre, no formato dd/mm/aaaa, a data que cai {N} dias depois de 28/10/2026',
              start: `from datetime import date, timedelta
hoje = date(2026, 10, 28)
`,
              sol: `from datetime import date, timedelta
hoje = date(2026, 10, 28)
print((hoje + timedelta(days={N})).strftime("%d/%m/%Y"))`,
              dica: 'Some um timedelta(days=...) e formate com strftime.',
              exp: 'Prazos de boleto e de garantia são calculados assim.',
              vars: { N: [7, 15, 30, 45, 60, 90] }
            },
            {
              t: 'codigo',
              p: 'Leia a data de nascimento {NASC} e mostre a idade, em anos completos, em 28/10/2026',
              start: `from datetime import datetime, date
hoje = date(2026, 10, 28)
nasc = datetime.strptime("{NASC}", "%d/%m/%Y").date()
`,
              sol: `from datetime import datetime, date
hoje = date(2026, 10, 28)
nasc = datetime.strptime("{NASC}", "%d/%m/%Y").date()
idade = hoje.year - nasc.year
if (hoje.month, hoje.day) < (nasc.month, nasc.day):
    idade -= 1
print(idade)`,
              dica: 'Subtraia os anos e tire 1 se o aniversário deste ano ainda não chegou. Tuplas se comparam item a item.',
              exp: 'Comparar (mês, dia) como tupla resolve o aniversário num if só.',
              vars: { NASC: ['15/03/2000', '30/11/1998', '28/10/2008', '01/01/1990', '29/12/2005'] }
            }
          ]
        },
        {
          id: 'pyau2',
          titulo: 'Expressões regulares',
          exs: [
            {
              t: 'texto',
              titulo: 'Achar padrões em textos',
              blocos: [
                {
                  p: 'Uma expressão regular descreve um padrão de texto, como "um CEP" ou "uma placa de carro". O módulo `re` procura, confere e troca esses padrões.'
                },
                {
                  tabela: {
                    cab: ['Padrão', 'Quer dizer'],
                    codigo: [0],
                    linhas: [
                      ['\\d', 'um dígito'],
                      ['\\w', 'uma letra, dígito ou _'],
                      ['[A-Z]', 'uma letra maiúscula'],
                      ['+', 'uma ou mais vezes'],
                      ['{5}', 'exatamente 5 vezes'],
                      ['^ e $', 'começo e fim do texto']
                    ]
                  }
                },
                {
                  code: `import re
texto = "Pedido 123 com 4 itens, total 56"
print(re.findall(r"\\d+", texto))
print(bool(re.fullmatch(r"\\d{5}-\\d{3}", "13420-000")))
print(re.sub(r"\\s+", " ", "muitos     espaços"))`
                },
                {
                  p: 'O `r` antes das aspas faz a barra invertida valer como barra, sem virar outra coisa. `findall` acha todos, `fullmatch` confere se o texto inteiro segue o padrão, e `sub` troca.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual padrão encontra um ou mais dígitos seguidos?',
              ops: ['\\d+', '\\w', '[A-Z]'],
              c: 0,
              exp: '\\d é um dígito; + quer dizer um ou mais.',
              mono: true
            },
            {
              t: 'complete',
              p: 'Complete para achar todos os números do texto',
              code: 're.___(r"\\d+", texto)',
              bank: ['findall', 'find', 'search', 'all'],
              c: ['findall'],
              exp: 'findall devolve uma lista com todos.'
            },
            {
              t: 'codigo',
              p: 'Mostre a lista de todos os números do texto, convertidos para int',
              start: `import re
texto = "{TX}"
`,
              sol: `import re
texto = "{TX}"
print([int(n) for n in re.findall(r"\\d+", texto)])`,
              dica: 're.findall(r"\\d+", texto) e uma compreensão com int.',
              exp: 'Extrair números de textos é uma das automações mais comuns.',
              vars: {
                TX: [
                  'Comprei 3 canetas por 12 reais e 2 cadernos',
                  'Sala 204, bloco 7, andar 2',
                  'Foram 1500 peças em 8 horas'
                ]
              }
            },
            {
              t: 'codigo',
              p: 'Diga se o CEP está no formato 00000-000. Mostre True ou False',
              start: `import re
cep = "{CEP}"
`,
              sol: `import re
cep = "{CEP}"
print(bool(re.fullmatch(r"\\d{5}-\\d{3}", cep)))`,
              dica: 'r"\\d{5}-\\d{3}" com re.fullmatch.',
              exp: 'fullmatch exige que o texto inteiro siga o padrão.',
              vars: { CEP: ['13420-000', '1342-000', '13420000', '01001-000', 'ABCDE-123'] }
            },
            {
              t: 'codigo',
              p: 'Diga se a placa segue o padrão Mercosul: 3 letras, 1 dígito, 1 letra e 2 dígitos, como ABC1D23. Mostre True ou False',
              start: `import re
placa = "{P}"
`,
              sol: `import re
placa = "{P}"
print(bool(re.fullmatch(r"[A-Z]{3}\\d[A-Z]\\d{2}", placa)))`,
              dica: 'Monte o padrão por partes: [A-Z]{3}, \\d, [A-Z] e \\d{2}.',
              exp: 'O padrão antigo, ABC-1234, não passa nessa regra.',
              vars: { P: ['ABC1D23', 'ABC-1234', 'RIO2A18', 'AB12C34', 'BRA2E19'] }
            }
          ]
        },
        {
          id: 'pyau3',
          titulo: 'Pastas e arquivos',
          exs: [
            {
              t: 'texto',
              titulo: 'pathlib',
              blocos: [
                {
                  p: 'O módulo `pathlib` trata caminhos de arquivos e pastas como objetos. Dá para criar pastas, listar arquivos, ver a extensão e renomear, do mesmo jeito no Windows, no Mac e no Linux.'
                },
                {
                  code: `from pathlib import Path

Path("fotos").mkdir(exist_ok=True)
for nome in ["praia.jpg", "notas.txt", "festa.jpg"]:
    Path("fotos", nome).write_text("")

for arq in sorted(Path("fotos").iterdir()):
    print(arq.name, arq.suffix, arq.stem)`
                },
                {
                  p: '`suffix` é a extensão, com o ponto; `stem` é o nome sem ela. `glob("*.jpg")` lista só os que combinam com o padrão, e `rename` muda o nome ou a pasta.'
                },
                {
                  dica: 'No app, cada programa roda numa pasta vazia que some no fim. Para usar no seu computador, rode o programa na pasta certa, e teste antes com cópias dos arquivos.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual atributo de Path dá a extensão do arquivo?',
              ops: ['suffix', 'stem', 'name'],
              c: 0,
              exp: 'Para "praia.jpg", suffix é ".jpg"; stem, "praia".'
            },
            {
              t: 'complete',
              p: 'Complete para criar a pasta, sem erro se ela já existir',
              code: 'Path("dados").___(exist_ok=True)',
              bank: ['mkdir', 'create', 'makedirs', 'new'],
              c: ['mkdir'],
              exp: 'exist_ok=True evita o erro de pasta já existente.'
            },
            {
              t: 'codigo',
              p: 'Crie os arquivos da lista e mostre os nomes, em ordem alfabética, só dos que terminam em .{EXT}',
              start: `from pathlib import Path
for nome in ["a.txt", "b.csv", "c.txt", "d.jpg", "e.csv"]:
    Path(nome).write_text("")
`,
              sol: `from pathlib import Path
for nome in ["a.txt", "b.csv", "c.txt", "d.jpg", "e.csv"]:
    Path(nome).write_text("")
for arq in sorted(Path(".").glob("*.{EXT}")):
    print(arq.name)`,
              dica: 'Path(".").glob("*.{EXT}") e sorted.',
              exp: 'O ponto é a pasta atual.',
              vars: { EXT: ['txt', 'csv', 'jpg'] }
            },
            {
              t: 'codigo',
              p: 'Conte quantos arquivos há de cada extensão e mostre no formato .csv: 2, em ordem alfabética',
              start: `from pathlib import Path
for nome in ["a.txt", "b.csv", "c.txt", "d.jpg", "e.csv", "f.txt"]:
    Path(nome).write_text("")
`,
              saida: `.csv: 2
.jpg: 1
.txt: 3`,
              sol: `from pathlib import Path
for nome in ["a.txt", "b.csv", "c.txt", "d.jpg", "e.csv", "f.txt"]:
    Path(nome).write_text("")
contagem = {}
for arq in Path(".").iterdir():
    contagem[arq.suffix] = contagem.get(arq.suffix, 0) + 1
for ext in sorted(contagem):
    print(f"{ext}: {contagem[ext]}")`,
              dica: 'Conte arq.suffix num dicionário, como na contagem de palavras.',
              exp: 'Saber o que tem numa pasta é o primeiro passo para organizar.'
            }
          ]
        },
        {
          id: 'pyau4',
          titulo: 'Projeto: organizar uma pasta',
          exs: [
            {
              t: 'texto',
              titulo: 'A bagunça da pasta Downloads',
              blocos: [
                {
                  p: 'Um script clássico: separar os arquivos de uma pasta em subpastas pelo tipo, como imagens, documentos e planilhas. Em vez de arrastar um por um, o programa faz em segundos.'
                },
                {
                  passos: [
                    'Listar os arquivos da pasta.',
                    'Decidir a pasta de destino de cada um pela extensão.',
                    'Criar a pasta de destino, se não existir.',
                    'Mover o arquivo com rename.',
                    'Mostrar o que ficou onde.'
                  ]
                },
                {
                  code: `from pathlib import Path

destinos = {".jpg": "imagens", ".png": "imagens", ".pdf": "documentos", ".csv": "planilhas"}
arq = Path("foto.jpg")
arq.write_text("")
pasta = Path(destinos.get(arq.suffix, "outros"))
pasta.mkdir(exist_ok=True)
arq.rename(pasta / arq.name)
print(sorted(str(p) for p in Path(".").rglob("*") if p.is_file()))`
                },
                {
                  p: 'A barra `/` entre Paths junta pedaços de caminho. O `rglob("*")` lista tudo, inclusive dentro das subpastas.'
                }
              ]
            },
            {
              t: 'ordene',
              p: 'Coloque em ordem os passos do organizador',
              lines: [
                'Listar os arquivos da pasta',
                'Escolher o destino pela extensão',
                'Criar a pasta de destino',
                'Mover o arquivo',
                'Mostrar o resultado'
              ],
              exp: 'Criar a pasta antes de mover evita erro.',
              plain: true
            },
            {
              t: 'escolha',
              p: 'O que `Path("imagens") / "praia.jpg"` dá?',
              ops: ['O caminho imagens/praia.jpg', 'Uma divisão', 'Um erro'],
              c: 0,
              exp: 'A barra junta caminhos, do jeito certo para cada sistema.'
            },
            {
              t: 'codigo',
              p: 'Organize os arquivos por extensão: .jpg e .png em imagens, .pdf em documentos e o resto em outros. Mostre os caminhos de todos os arquivos, em ordem',
              start: `from pathlib import Path
for nome in ["praia.jpg", "contrato.pdf", "logo.png", "musica.mp3", "boleto.pdf"]:
    Path(nome).write_text("")
`,
              saida: `documentos/boleto.pdf
documentos/contrato.pdf
imagens/logo.png
imagens/praia.jpg
outros/musica.mp3`,
              sol: `from pathlib import Path
for nome in ["praia.jpg", "contrato.pdf", "logo.png", "musica.mp3", "boleto.pdf"]:
    Path(nome).write_text("")
destinos = {".jpg": "imagens", ".png": "imagens", ".pdf": "documentos"}
for arq in list(Path(".").iterdir()):
    if arq.is_file():
        pasta = Path(destinos.get(arq.suffix, "outros"))
        pasta.mkdir(exist_ok=True)
        arq.rename(pasta / arq.name)
for p in sorted(Path(".").rglob("*")):
    if p.is_file():
        print(p)`,
              dica: 'Use destinos.get(arq.suffix, "outros"). Faça list(...) do iterdir antes de mover, para não mexer na lista enquanto percorre.',
              exp: 'O print de um Path mostra o caminho. No Windows, as barras aparecem invertidas.'
            },
            {
              t: 'codigo',
              p: 'Renomeie as fotos para foto_001.jpg, foto_002.jpg..., na ordem alfabética dos nomes atuais, e mostre os nomes novos',
              start: `from pathlib import Path
for nome in ["IMG_8812.jpg", "IMG_0045.jpg", "IMG_3001.jpg"]:
    Path(nome).write_text("")
`,
              saida: `foto_001.jpg
foto_002.jpg
foto_003.jpg`,
              sol: `from pathlib import Path
for nome in ["IMG_8812.jpg", "IMG_0045.jpg", "IMG_3001.jpg"]:
    Path(nome).write_text("")
for i, arq in enumerate(sorted(Path(".").glob("*.jpg")), 1):
    arq.rename(f"foto_{i:03d}.jpg")
for arq in sorted(Path(".").glob("*.jpg")):
    print(arq.name)`,
              dica: 'enumerate começando em 1 e o formato {i:03d} para os zeros.',
              exp: 'Com zeros à esquerda, a ordem alfabética dos nomes fica igual à numérica.'
            }
          ]
        },
        {
          id: 'pyau5',
          titulo: 'Relatórios automáticos',
          exs: [
            {
              t: 'texto',
              titulo: 'Do dado bruto ao relatório',
              blocos: [
                {
                  p: 'Toda semana alguém junta números de uma planilha e escreve o mesmo relatório. Um programa faz isso sozinho: lê os dados, agrupa, calcula e grava o texto pronto.'
                },
                {
                  code: `import csv, io

dados = "setor,valor\\nvendas,1200\\ncompras,300\\nvendas,800\\n"
totais = {}
for linha in csv.DictReader(io.StringIO(dados)):
    totais[linha["setor"]] = totais.get(linha["setor"], 0) + float(linha["valor"])
linhas = [f"{s}: R$ {v:.2f}" for s, v in sorted(totais.items())]
relatorio = "Relatório da semana\\n" + "\\n".join(linhas)
print(relatorio)`
                },
                {
                  p: 'O `io.StringIO` faz um texto se comportar como arquivo: útil para testar com dados de exemplo antes de usar o arquivo de verdade.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Para que serve o io.StringIO?',
              ops: [
                'Fazer um texto se comportar como arquivo',
                'Gravar no disco',
                'Mostrar na tela'
              ],
              c: 0,
              exp: 'O csv.DictReader aceita ele no lugar de um arquivo aberto.'
            },
            {
              t: 'codigo',
              p: 'Monte o relatório de produção: total de peças por máquina, em ordem alfabética, no formato prensa: 300, e uma última linha com Total: e a soma geral',
              start: `import csv, io
dados = "maquina,pecas\\ntorno,{A}\\nprensa,{B}\\ntorno,{CC}\\nfresa,{D}\\n"
`,
              sol: `import csv, io
dados = "maquina,pecas\\ntorno,{A}\\nprensa,{B}\\ntorno,{CC}\\nfresa,{D}\\n"
totais = {}
for linha in csv.DictReader(io.StringIO(dados)):
    totais[linha["maquina"]] = totais.get(linha["maquina"], 0) + int(linha["pecas"])
for m in sorted(totais):
    print(f"{m}: {totais[m]}")
print(f"Total: {sum(totais.values())}")`,
              dica: 'Agrupe num dicionário, percorra sorted(totais) e some os valores no fim.',
              exp: 'Esse mesmo programa serve para qualquer semana: só troca o arquivo.',
              vars: {
                A: { de: 50, ate: 300, passo: 10 },
                B: { de: 50, ate: 300, passo: 10 },
                CC: { de: 50, ate: 300, passo: 10 },
                D: { de: 50, ate: 300, passo: 10 }
              }
            },
            {
              t: 'codigo',
              p: 'Grave o relatório num arquivo relatorio.txt, leia de volta e mostre, para conferir',
              start: `linhas = ["Peças boas: {B}", "Peças com defeito: {D}", "Taxa de defeito: {= fix(100 * D / (B + D), 1) }%"]
`,
              sol: `linhas = ["Peças boas: {B}", "Peças com defeito: {D}", "Taxa de defeito: {= fix(100 * D / (B + D), 1) }%"]
with open("relatorio.txt", "w", encoding="utf-8") as arq:
    arq.write("\\n".join(linhas))
with open("relatorio.txt", encoding="utf-8") as arq:
    print(arq.read())`,
              dica: 'Junte as linhas com "\\n".join e grave; depois leia com read().',
              exp: 'No computador, o arquivo ficaria pronto para mandar por e-mail.',
              vars: { B: { de: 500, ate: 2000, passo: 50 }, D: { de: 5, ate: 80 } }
            }
          ]
        }
      ]
    }
  ]
});
