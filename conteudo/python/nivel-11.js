/* Trilha Livre · Python do zero · Nível 11: Projetos
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'python',
  n: 11,
  titulo: 'Projetos',
  desc: 'Quatro programas completos, do começo ao fim: um jogo, um controle de estoque, as notas de uma turma e o cálculo de uma viga.',
  videos: [
    {
      titulo: 'Curso de Python 3, Mundo 3',
      canal: 'Curso em Vídeo (Gustavo Guanabara)',
      obs: 'os desafios do fim de cada mundo do Curso em Vídeo são ótimos projetos extras',
      url: 'https://www.youtube.com/c/CursoemV%C3%ADdeo'
    },
    {
      tipo: 'texto',
      titulo: 'Automate the Boring Stuff with Python (em inglês)',
      canal: 'Al Sweigart, livro aberto',
      url: 'https://automatetheboringstuff.com/',
      obs: 'cada capítulo termina com projetos práticos'
    }
  ],
  unidades: [
    {
      id: 'pyu19',
      titulo: 'Programas do dia a dia',
      conceito: 'projeto',
      desc: 'Um jogo e um controle de estoque.',
      licoes: [
        {
          id: 'pypj1',
          titulo: 'Jogo de adivinhação',
          exs: [
            {
              t: 'texto',
              titulo: 'Planejar antes de programar',
              blocos: [
                {
                  p: 'Um projeto começa no papel: o que o programa faz, que dados guarda e em que ordem as coisas acontecem. O jogo: o computador pensa num número de 1 a 100, a pessoa chuta, e o programa diz se o número secreto é maior ou menor, até ela acertar.'
                },
                {
                  passos: [
                    'Escolher o número secreto.',
                    'Pedir um palpite.',
                    'Comparar e dizer se o segredo é maior ou menor.',
                    'Repetir até acertar, contando as tentativas.',
                    'Mostrar quantas tentativas foram.'
                  ]
                },
                {
                  code: `import random
segredo = random.randint(1, 100)
print(1 <= segredo <= 100)`
                },
                {
                  p: 'No jogo de verdade, o segredo vem de `random.randint(1, 100)`, que sorteia um número de 1 a 100. Nos exercícios, ele vem pronto, para dar para conferir a saída.'
                },
                {
                  dica: 'Separar a comparação numa função deixa o programa fácil de testar: dá para conferir a função sozinha, sem jogar.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Por que usar while True com break no jogo?',
              ops: [
                'Porque não dá para saber quantas tentativas a pessoa vai precisar',
                'Porque o for não funciona com input',
                'Para o jogo nunca acabar'
              ],
              c: 0,
              exp: 'O laço roda até o acerto, que faz o break.'
            },
            {
              t: 'codigo',
              p: 'Escreva comparar(palpite, segredo), que devolve "Maior" se o segredo for maior que o palpite, "Menor" se for menor e "Acertou!" se for igual',
              start: `def comparar(palpite, segredo):
    pass

print(comparar({A}, {S}))
print(comparar({B}, {S}))
print(comparar({S}, {S}))
`,
              sol: `def comparar(palpite, segredo):
    if segredo > palpite:
        return "Maior"
    if segredo < palpite:
        return "Menor"
    return "Acertou!"

print(comparar({A}, {S}))
print(comparar({B}, {S}))
print(comparar({S}, {S}))`,
              dica: 'Dois if com return e um return no fim para o acerto.',
              exp: 'Testar a função com um caso de cada tipo é um bom hábito.',
              vars: { S: { de: 10, ate: 90 }, A: { de: 1, ate: 9 }, B: { de: 91, ate: 100 } }
            },
            {
              t: 'codigo',
              p: 'Agora o jogo: peça palpites com int(input("Palpite: ")) até acertar. A cada erro, mostre a dica; no acerto, mostre Acertou em 3 tentativas',
              start: `def comparar(palpite, segredo):
    if segredo > palpite:
        return "Maior"
    if segredo < palpite:
        return "Menor"
    return "Acertou!"

segredo = {S}
tentativas = 0
`,
              sol: `def comparar(palpite, segredo):
    if segredo > palpite:
        return "Maior"
    if segredo < palpite:
        return "Menor"
    return "Acertou!"

segredo = {S}
tentativas = 0
while True:
    palpite = int(input("Palpite: "))
    tentativas += 1
    resposta = comparar(palpite, segredo)
    if resposta == "Acertou!":
        break
    print(resposta)
print(f"Acertou em {tentativas} tentativas")`,
              dica: 'while True, input convertido com int, conte a tentativa e dê break no acerto.',
              exp: 'A pessoa joga pela entrada: 50, depois a metade certa, depois o segredo.',
              entrada: ['50', '{= S < 50 ? 25 : 75 }', '{S}'],
              vars: { S: { de: 1, ate: 100 } },
              se: 'S !== 50 && S !== 25 && S !== 75'
            },
            {
              t: 'codigo',
              p: 'Versão com limite: só 3 tentativas. Use um for com range(1, 4) e o else do for para mostrar Fim de jogo! O número era 42 quando a pessoa errar as três',
              start: `def comparar(palpite, segredo):
    if segredo > palpite:
        return "Maior"
    if segredo < palpite:
        return "Menor"
    return "Acertou!"

segredo = {S}
`,
              sol: `def comparar(palpite, segredo):
    if segredo > palpite:
        return "Maior"
    if segredo < palpite:
        return "Menor"
    return "Acertou!"

segredo = {S}
for tentativa in range(1, 4):
    palpite = int(input("Palpite: "))
    resposta = comparar(palpite, segredo)
    if resposta == "Acertou!":
        print(f"Acertou em {tentativa} tentativas")
        break
    print(resposta)
else:
    print(f"Fim de jogo! O número era {segredo}")`,
              dica: 'O else do for só roda se não houve break, ou seja, se a pessoa não acertou.',
              exp: 'Às vezes a pessoa acerta na última, às vezes não: o programa trata os dois casos.',
              entrada: ['{A}', '{B}', '{= GANHA ? S : (S > 50 ? S - 7 : S + 7) }'],
              vars: {
                S: { de: 20, ate: 80 },
                A: { de: 1, ate: 19 },
                B: { de: 81, ate: 100 },
                GANHA: [0, 1]
              }
            }
          ]
        },
        {
          id: 'pypj2',
          titulo: 'Controle de estoque',
          exs: [
            {
              t: 'texto',
              titulo: 'Um programa que guarda dados',
              blocos: [
                {
                  p: 'Um controle de estoque simples: cada produto tem uma quantidade; entradas somam, saídas tiram (se houver o bastante), e um relatório mostra tudo. No fim, os dados vão para um arquivo JSON, para não se perderem quando o programa fecha.'
                },
                {
                  passos: [
                    'Guardar as quantidades num dicionário, dentro de uma classe.',
                    'Métodos de entrada e de saída, com a regra de não ficar negativo.',
                    'Um relatório em ordem alfabética.',
                    'Salvar e carregar em JSON.'
                  ]
                },
                {
                  code: `class Estoque:
    def __init__(self):
        self.itens = {}

    def entrada(self, nome, qtd):
        self.itens[nome] = self.itens.get(nome, 0) + qtd

    def relatorio(self):
        for nome in sorted(self.itens):
            print(f"{nome}: {self.itens[nome]}")

e = Estoque()
e.entrada("parafuso", 100)
e.entrada("parafuso", 50)
e.relatorio()`
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Por que guardar as quantidades num dicionário?',
              ops: [
                'Para achar cada produto pelo nome',
                'Porque listas não guardam números',
                'Para não precisar de classe'
              ],
              c: 0,
              exp: 'O nome do produto é a chave; a quantidade, o valor.'
            },
            {
              t: 'escolha',
              p: 'Para que salvar o estoque num arquivo JSON?',
              ops: [
                'Para os dados continuarem lá quando o programa fechar',
                'Para o programa rodar mais rápido',
                'Porque dicionários somem sozinhos'
              ],
              c: 0,
              exp: 'Variáveis vivem só enquanto o programa roda.'
            },
            {
              t: 'codigo',
              p: 'Crie a classe Estoque com entrada(nome, qtd); saida(nome, qtd), que mostra Estoque insuficiente de porca quando não há o bastante; e relatorio(), que mostra nome: qtd em ordem alfabética',
              start: `# crie a classe Estoque

e = Estoque()
e.entrada("parafuso", {A})
e.entrada("porca", {B})
e.saida("parafuso", {S1})
e.saida("porca", {S2})
e.relatorio()
`,
              sol: `class Estoque:
    def __init__(self):
        self.itens = {}

    def entrada(self, nome, qtd):
        self.itens[nome] = self.itens.get(nome, 0) + qtd

    def saida(self, nome, qtd):
        if self.itens.get(nome, 0) < qtd:
            print(f"Estoque insuficiente de {nome}")
        else:
            self.itens[nome] -= qtd

    def relatorio(self):
        for nome in sorted(self.itens):
            print(f"{nome}: {self.itens[nome]}")

e = Estoque()
e.entrada("parafuso", {A})
e.entrada("porca", {B})
e.saida("parafuso", {S1})
e.saida("porca", {S2})
e.relatorio()`,
              dica: 'Use self.itens.get(nome, 0) para produtos que ainda não existem.',
              exp: 'A regra de não ficar negativo fica num lugar só, dentro do método.',
              vars: {
                A: { de: 50, ate: 200, passo: 10 },
                B: { de: 50, ate: 200, passo: 10 },
                S1: { de: 20, ate: 250, passo: 10 },
                S2: { de: 20, ate: 250, passo: 10 }
              }
            },
            {
              t: 'codigo',
              p: 'Acrescente repor(minimo), que mostra os produtos abaixo do mínimo, em ordem alfabética, no formato porca: faltam 30',
              start: `class Estoque:
    def __init__(self):
        self.itens = {}

    def entrada(self, nome, qtd):
        self.itens[nome] = self.itens.get(nome, 0) + qtd

    def relatorio(self):
        for nome in sorted(self.itens):
            print(f"{nome}: {self.itens[nome]}")

    # crie o método repor

e = Estoque()
e.entrada("arruela", {A})
e.entrada("parafuso", {B})
e.entrada("porca", {CC})
e.repor(100)
`,
              sol: `class Estoque:
    def __init__(self):
        self.itens = {}

    def entrada(self, nome, qtd):
        self.itens[nome] = self.itens.get(nome, 0) + qtd

    def relatorio(self):
        for nome in sorted(self.itens):
            print(f"{nome}: {self.itens[nome]}")

    def repor(self, minimo):
        for nome in sorted(self.itens):
            if self.itens[nome] < minimo:
                print(f"{nome}: faltam {minimo - self.itens[nome]}")

e = Estoque()
e.entrada("arruela", {A})
e.entrada("parafuso", {B})
e.entrada("porca", {CC})
e.repor(100)`,
              dica: 'Percorra sorted(self.itens) e mostre só os que têm menos que o mínimo.',
              exp: 'Um aviso de reposição evita a linha de produção parar por falta de peça.',
              vars: {
                A: { de: 10, ate: 200, passo: 10 },
                B: { de: 10, ate: 200, passo: 10 },
                CC: { de: 10, ate: 200, passo: 10 }
              },
              se: 'A < 100 || B < 100 || CC < 100'
            },
            {
              t: 'codigo',
              p: 'Complete salvar e carregar com JSON. O programa grava o estoque, carrega num objeto novo e mostra o relatório dele',
              start: `import json

class Estoque:
    def __init__(self):
        self.itens = {}

    def entrada(self, nome, qtd):
        self.itens[nome] = self.itens.get(nome, 0) + qtd

    def relatorio(self):
        for nome in sorted(self.itens):
            print(f"{nome}: {self.itens[nome]}")

    def salvar(self, arquivo):
        pass

    def carregar(self, arquivo):
        pass

e = Estoque()
e.entrada("cabo", {A})
e.entrada("tomada", {B})
e.salvar("estoque.json")

novo = Estoque()
novo.carregar("estoque.json")
novo.relatorio()
`,
              sol: `import json

class Estoque:
    def __init__(self):
        self.itens = {}

    def entrada(self, nome, qtd):
        self.itens[nome] = self.itens.get(nome, 0) + qtd

    def relatorio(self):
        for nome in sorted(self.itens):
            print(f"{nome}: {self.itens[nome]}")

    def salvar(self, arquivo):
        with open(arquivo, "w", encoding="utf-8") as f:
            json.dump(self.itens, f)

    def carregar(self, arquivo):
        with open(arquivo, encoding="utf-8") as f:
            self.itens = json.load(f)

e = Estoque()
e.entrada("cabo", {A})
e.entrada("tomada", {B})
e.salvar("estoque.json")

novo = Estoque()
novo.carregar("estoque.json")
novo.relatorio()`,
              dica: 'json.dump(self.itens, f) para gravar; self.itens = json.load(f) para ler.',
              exp: 'O objeto novo começou vazio e recebeu tudo do arquivo.',
              vars: { A: { de: 5, ate: 95, passo: 5 }, B: { de: 5, ate: 95, passo: 5 } }
            }
          ]
        }
      ]
    },
    {
      id: 'pyu20',
      titulo: 'Dados e engenharia',
      conceito: 'projeto',
      desc: 'As notas de uma turma e o cálculo de uma viga.',
      licoes: [
        {
          id: 'pypj3',
          titulo: 'Notas da turma',
          exs: [
            {
              t: 'texto',
              titulo: 'Da planilha ao boletim',
              blocos: [
                {
                  p: 'Uma professora tem as notas da turma numa planilha, salva como CSV. O programa calcula a média de cada aluno, diz a situação, resume a turma e desenha um gráfico. É o mesmo caminho de qualquer análise de dados: ler, calcular, resumir e mostrar.'
                },
                {
                  tabela: {
                    cab: ['Média', 'Situação'],
                    linhas: [
                      ['6 ou mais', 'Aprovado'],
                      ['de 4 até menos de 6', 'Recuperação'],
                      ['menos de 4', 'Reprovado']
                    ]
                  }
                },
                {
                  code: `import csv, io
dados = "nome,p1,p2\\nAna,7.0,8.0\\nBruno,5.0,4.5\\n"
for linha in csv.DictReader(io.StringIO(dados)):
    print(linha["nome"], float(linha["p1"]) + float(linha["p2"]))`
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Com a regra da tabela, qual a situação de quem tem média 5.5?',
              ops: ['Recuperação', 'Aprovado', 'Reprovado'],
              c: 0,
              exp: 'Fica entre 4 e 6.'
            },
            {
              t: 'codigo',
              p: 'Mostre a média de cada aluno, com 1 casa, e a situação, no formato Ana: 7.5 Aprovado',
              start: `import csv, io
dados = """nome,p1,p2,p3
Ana,{A1},{A2},{A3}
Bruno,5.0,4.5,6.0
Carla,{C1},{C2},8.0
Davi,3.0,2.5,4.0
"""
`,
              sol: `import csv, io
dados = """nome,p1,p2,p3
Ana,{A1},{A2},{A3}
Bruno,5.0,4.5,6.0
Carla,{C1},{C2},8.0
Davi,3.0,2.5,4.0
"""
def situacao(media):
    if media >= 6:
        return "Aprovado"
    if media >= 4:
        return "Recuperação"
    return "Reprovado"

for linha in csv.DictReader(io.StringIO(dados)):
    notas = [float(linha[p]) for p in ["p1", "p2", "p3"]]
    media = sum(notas) / 3
    print(f"{linha['nome']}: {media:.1f} {situacao(media)}")`,
              dica: 'Uma função situacao(media) com if, e um laço no DictReader.',
              exp: 'Separar a regra numa função deixa fácil mudar a nota de corte depois.',
              vars: {
                A1: { de: 4, ate: 10, passo: 0.5 },
                A2: { de: 4, ate: 10, passo: 0.5 },
                A3: { de: 4, ate: 10, passo: 0.5 },
                C1: { de: 2, ate: 10, passo: 0.5 },
                C2: { de: 2, ate: 10, passo: 0.5 }
              }
            },
            {
              t: 'codigo',
              p: 'Resuma a turma: mostre Média da turma com 2 casas, a Maior média com o nome do aluno e quantos foram Aprovados, como no formato Média da turma: 5.83, Maior média: Carla (8.17) e Aprovados: 2, um por linha',
              start: `import csv, io
dados = """nome,p1,p2,p3
Ana,{A1},{A2},{A3}
Bruno,5.0,4.5,6.0
Carla,{C1},{C2},8.0
Davi,3.0,2.5,4.0
"""
`,
              sol: `import csv, io
dados = """nome,p1,p2,p3
Ana,{A1},{A2},{A3}
Bruno,5.0,4.5,6.0
Carla,{C1},{C2},8.0
Davi,3.0,2.5,4.0
"""
nomes, medias = [], []
for linha in csv.DictReader(io.StringIO(dados)):
    nomes.append(linha["nome"])
    medias.append((float(linha["p1"]) + float(linha["p2"]) + float(linha["p3"])) / 3)
i = medias.index(max(medias))
print(f"Média da turma: {sum(medias) / len(medias):.2f}")
print(f"Maior média: {nomes[i]} ({medias[i]:.2f})")
print(f"Aprovados: {len([m for m in medias if m >= 6])}")`,
              dica: 'Guarde os nomes e as médias em duas listas. medias.index(max(medias)) dá a posição da maior.',
              exp: 'Duas listas na mesma ordem funcionam como colunas de uma planilha.',
              vars: {
                A1: { de: 4, ate: 10, passo: 0.5 },
                A2: { de: 4, ate: 10, passo: 0.5 },
                A3: { de: 4, ate: 10, passo: 0.5 },
                C1: { de: 2, ate: 10, passo: 0.5 },
                C2: { de: 2, ate: 10, passo: 0.5 }
              }
            },
            {
              t: 'codigo',
              p: 'Desenhe um gráfico de barras com a média de cada aluno e uma linha tracejada na média 6. Mostre os nomes de quem ficou abaixo de 6, um por linha',
              start: `import csv, io
dados = """nome,p1,p2,p3
Ana,{A1},{A2},{A3}
Bruno,5.0,4.5,6.0
Carla,{C1},{C2},8.0
Davi,3.0,2.5,4.0
"""
import matplotlib.pyplot as plt
`,
              sol: `import csv, io
dados = """nome,p1,p2,p3
Ana,{A1},{A2},{A3}
Bruno,5.0,4.5,6.0
Carla,{C1},{C2},8.0
Davi,3.0,2.5,4.0
"""
import matplotlib.pyplot as plt
nomes, medias = [], []
for linha in csv.DictReader(io.StringIO(dados)):
    nomes.append(linha["nome"])
    medias.append((float(linha["p1"]) + float(linha["p2"]) + float(linha["p3"])) / 3)
plt.bar(nomes, medias)
plt.axhline(6, color="red", linestyle="--")
plt.ylabel("Média")
plt.show()
for nome, media in zip(nomes, medias):
    if media < 6:
        print(nome)`,
              dica: 'plt.bar(nomes, medias) e plt.axhline(6, linestyle="--"). Depois, um zip para achar quem ficou abaixo.',
              exp: 'Bruno e Davi sempre ficam abaixo; Ana e Carla dependem das notas sorteadas.',
              grafico: true,
              vars: {
                A1: { de: 4, ate: 10, passo: 0.5 },
                A2: { de: 4, ate: 10, passo: 0.5 },
                A3: { de: 4, ate: 10, passo: 0.5 },
                C1: { de: 2, ate: 10, passo: 0.5 },
                C2: { de: 2, ate: 10, passo: 0.5 }
              }
            }
          ]
        },
        {
          id: 'pypj4',
          titulo: 'Viga biapoiada',
          exs: [
            {
              t: 'texto',
              titulo: 'Uma viga com carga distribuída',
              blocos: [
                {
                  p: 'Uma viga apoiada nas duas pontas, com uma carga q espalhada por todo o vão L (como o peso de uma laje), é um dos casos mais comuns da engenharia civil. As fórmulas clássicas são:'
                },
                {
                  tabela: {
                    cab: ['Grandeza', 'Fórmula'],
                    linhas: [
                      ['Reação em cada apoio', 'R = q·L / 2'],
                      ['Momento fletor máximo, no meio', 'M = q·L² / 8'],
                      ['Momento ao longo da viga', 'M(x) = q·x·(L − x) / 2'],
                      ['Flecha máxima, no meio', 'f = 5·q·L⁴ / (384·E·I)']
                    ]
                  }
                },
                {
                  p: 'Para uma seção retangular de base b e altura h, o momento de inércia é I = b·h³ / 12. A NBR 6118, a norma brasileira de estruturas de concreto, usa L/250 como limite de flecha para a aparência da peça. Vamos usar o mesmo limite aqui.'
                },
                {
                  code: `q = 10      # kN/m
L = 5       # m
print(f"R = {q * L / 2} kN")
print(f"M = {q * L ** 2 / 8} kN·m")`
                },
                {
                  dica: 'Cuidado com as unidades na flecha: com q em N/m, L em m, E em Pa e I em m⁴, ela sai em metros.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Se o vão L dobra, o momento máximo q·L²/8...',
              ops: ['Fica 4 vezes maior', 'Dobra', 'Fica 8 vezes maior'],
              c: 0,
              exp: 'Ele depende de L²: 2² = 4. A flecha, que depende de L⁴, fica 16 vezes maior.'
            },
            {
              t: 'codigo',
              p: 'Para q = {Q} kN/m e L = {L} m, mostre a reação em cada apoio e o momento máximo, com 2 casas, no formato R = 25.00 kN e M = 31.25 kN·m, um por linha',
              start: `q = {Q}  # kN/m
L = {L}  # m
`,
              sol: `q = {Q}  # kN/m
L = {L}  # m
print(f"R = {q * L / 2:.2f} kN")
print(f"M = {q * L ** 2 / 8:.2f} kN·m")`,
              dica: 'R = q * L / 2 e M = q * L ** 2 / 8.',
              exp: 'A soma das duas reações é igual à carga total, q · L.',
              vars: { Q: { de: 5, ate: 30 }, L: { de: 3, ate: 8, passo: 0.5 } }
            },
            {
              t: 'codigo',
              p: 'Calcule a flecha no meio de uma viga de madeira (E = 12 GPa) de seção {B} cm × {H} cm, vão de {L} m e carga de {Q} kN/m. Mostre a flecha em mm com 2 casas e, na linha de baixo, OK se ela for até L/250, ou Não passa',
              start: `q = {Q} * 1000      # N/m
L = {L}             # m
E_mod = 12e9        # Pa
b = {B} / 100       # m
h = {H} / 100       # m
`,
              sol: `q = {Q} * 1000      # N/m
L = {L}             # m
E_mod = 12e9        # Pa
b = {B} / 100       # m
h = {H} / 100       # m
I = b * h ** 3 / 12
flecha = 5 * q * L ** 4 / (384 * E_mod * I)
print(f"{flecha * 1000:.2f}")
print("OK" if flecha <= L / 250 else "Não passa")`,
              dica: 'I = b * h ** 3 / 12. A flecha sai em metros: compare com L / 250 e multiplique por 1000 para mostrar em mm.',
              exp: 'A altura entra ao cubo no I: dobrar a altura deixa a viga 8 vezes mais rígida.',
              vars: {
                B: [6, 8],
                H: [15, 20, 25, 30],
                L: { de: 2, ate: 4, passo: 0.5 },
                Q: { de: 1, ate: 3 }
              }
            },
            {
              t: 'codigo',
              p: 'Desenhe o diagrama de momento fletor M(x) = q·x·(L − x)/2, com q = {Q} kN/m e L = {L} m, usando 101 pontos. Mostre o maior momento do gráfico com 2 casas',
              start: `import numpy as np
import matplotlib.pyplot as plt
q = {Q}
L = {L}
`,
              sol: `import numpy as np
import matplotlib.pyplot as plt
q = {Q}
L = {L}
x = np.linspace(0, L, 101)
M = q * x * (L - x) / 2
plt.plot(x, M)
plt.fill_between(x, M, alpha=0.3)
plt.xlabel("Posição (m)")
plt.ylabel("Momento (kN·m)")
plt.show()
print(f"{M.max():.2f}")`,
              dica: 'x = np.linspace(0, L, 101) e a fórmula de M para o array inteiro. plt.fill_between pinta a área.',
              exp: 'Com 101 pontos, o meio da viga entra e o máximo bate com q·L²/8. Nos livros brasileiros, o diagrama costuma ir para baixo, do lado tracionado: plt.gca().invert_yaxis() faz isso.',
              grafico: true,
              vars: { Q: { de: 5, ate: 30 }, L: { de: 3, ate: 8, passo: 0.5 } }
            },
            {
              t: 'codigo',
              p: 'Dimensione: escolha a menor altura comercial de viga de madeira que deixa a flecha até L/250. Base de {B} cm, vão de {L} m, carga de {Q} kN/m e E = 12 GPa. Mostre a altura em cm, ou Nenhuma serve',
              start: `q = {Q} * 1000
L = {L}
E_mod = 12e9
b = {B} / 100
alturas_cm = [10, 12, 15, 20, 25, 30]
`,
              sol: `q = {Q} * 1000
L = {L}
E_mod = 12e9
b = {B} / 100
alturas_cm = [10, 12, 15, 20, 25, 30]
for h_cm in alturas_cm:
    I = b * (h_cm / 100) ** 3 / 12
    flecha = 5 * q * L ** 4 / (384 * E_mod * I)
    if flecha <= L / 250:
        print(h_cm)
        break
else:
    print("Nenhuma serve")`,
              dica: 'É o mesmo laço da lição de dimensionamento: teste as alturas em ordem, com break e o else do for.',
              exp: 'Na vida real, a viga também precisa passar na verificação de tensão, além da flecha.',
              vars: { B: [6, 8], L: { de: 2, ate: 5, passo: 0.5 }, Q: { de: 1, ate: 5 } }
            }
          ]
        }
      ]
    }
  ]
});
