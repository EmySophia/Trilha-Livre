/* Trilha Livre · Python do zero · Nível 7: Classes e objetos
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'python',
  n: 7,
  titulo: 'Classes e objetos',
  desc: 'Criar seus próprios tipos: classes, métodos, herança e dataclasses.',
  videos: [
    {
      tipo: 'texto',
      titulo: 'Pense em Python',
      canal: 'Allen B. Downey, livro aberto',
      obs: 'capítulos 15 a 18: classes e objetos',
      url: 'https://penseallen.github.io/PensePython2e/'
    },
    {
      titulo: 'Curso de Python 3, Mundo 3',
      canal: 'Curso em Vídeo (Gustavo Guanabara)',
      obs: 'o fim do Mundo 3 traz uma introdução a módulos e pacotes',
      url: 'https://www.youtube.com/c/CursoemV%C3%ADdeo'
    }
  ],
  unidades: [
    {
      id: 'pyu15',
      titulo: 'Classes',
      conceito: 'class',
      desc: 'Dados e funções juntos.',
      licoes: [
        {
          id: 'pycl1',
          titulo: 'Classe e objeto',
          exs: [
            {
              t: 'texto',
              titulo: 'Um molde para criar coisas',
              blocos: [
                {
                  p: 'Uma classe é um molde. Cada objeto criado a partir dela tem os seus próprios dados (os atributos) e sabe fazer coisas (os métodos). Você já usa objetos o tempo todo: um texto é um objeto da classe `str`, e `upper()` é um método dele.'
                },
                {
                  code: `class Retangulo:
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

r = Retangulo(3, 4)
print(r.base)
print(r.area())`
                },
                {
                  p: 'O `__init__` roda quando o objeto é criado e guarda os dados. O `self` é o próprio objeto: `self.base` é a base deste retângulo. Todo método recebe o self como primeiro parâmetro, mas na chamada ele não aparece: `r.area()`.'
                },
                {
                  dica: 'O costume é dar nome de classe com a primeira letra maiúscula, como Retangulo, e de objeto com minúscula.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que é um objeto?',
              ops: [
                'Um valor criado a partir de uma classe, com dados e métodos próprios',
                'Um arquivo',
                'Um laço'
              ],
              c: 0,
              exp: 'A classe é o molde; o objeto, a coisa feita com ele.'
            },
            {
              t: 'escolha',
              p: 'O que é o self dentro de um método?',
              ops: ['O próprio objeto', 'Uma variável global', 'O nome da classe'],
              c: 0,
              exp: 'É assim que o método acessa os dados do objeto.'
            },
            {
              t: 'complete',
              p: 'Complete o método que roda quando o objeto é criado',
              code: `class Ponto:
    def ___(self, x, y):
        self.x = x
        self.y = y`,
              bank: ['__init__', 'init', '__new__', 'start'],
              c: ['__init__'],
              exp: 'Dois sublinhados antes e dois depois.'
            },
            {
              t: 'ordene',
              p: 'Monte a classe Circulo',
              lines: [
                'class Circulo:',
                '    def __init__(self, raio):',
                '        self.raio = raio',
                '    def diametro(self):',
                '        return 2 * self.raio'
              ],
              exp: 'Os métodos ficam recuados dentro da classe, e o corpo deles, mais recuado ainda.'
            },
            {
              t: 'codigo',
              p: 'Complete a classe Retangulo e mostre a área de um retângulo {B} por {H}',
              start: `class Retangulo:
    def __init__(self, base, altura):
        pass

    def area(self):
        pass

r = Retangulo({B}, {H})
print(r.area())
`,
              sol: `class Retangulo:
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

r = Retangulo({B}, {H})
print(r.area())`,
              dica: 'No __init__, guarde self.base e self.altura. Em area, devolva a multiplicação.',
              exp: 'Cada objeto Retangulo guarda a sua base e a sua altura.',
              vars: { B: { de: 2, ate: 12 }, H: { de: 2, ate: 12 } }
            },
            {
              t: 'codigo',
              p: 'Acrescente o método perimetro e mostre a área e o perímetro, um por linha',
              start: `class Retangulo:
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

r = Retangulo({B}, {H})
print(r.area())
print(r.perimetro())
`,
              sol: `class Retangulo:
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return 2 * (self.base + self.altura)

r = Retangulo({B}, {H})
print(r.area())
print(r.perimetro())`,
              dica: 'def perimetro(self): return 2 * (self.base + self.altura)',
              exp: 'Um método novo usa os mesmos atributos.',
              vars: { B: { de: 2, ate: 12 }, H: { de: 2, ate: 12 } }
            },
            {
              t: 'codigo',
              p: 'Crie a classe Conta com o saldo começando em 0, depositar(valor) e sacar(valor), que só saca se houver saldo. Faça as operações e mostre o saldo',
              start: `# crie a classe Conta

c = Conta()
c.depositar({D})
c.sacar({S1})
c.sacar({S2})
print(c.saldo)
`,
              sol: `class Conta:
    def __init__(self):
        self.saldo = 0

    def depositar(self, valor):
        self.saldo += valor

    def sacar(self, valor):
        if valor <= self.saldo:
            self.saldo -= valor

c = Conta()
c.depositar({D})
c.sacar({S1})
c.sacar({S2})
print(c.saldo)`,
              dica: 'No sacar, teste valor <= self.saldo antes de diminuir.',
              exp: 'A classe protege a regra: ninguém deixa o saldo negativo por engano.',
              vars: {
                D: { de: 100, ate: 500, passo: 50 },
                S1: { de: 20, ate: 200, passo: 10 },
                S2: { de: 20, ate: 400, passo: 10 }
              }
            }
          ]
        },
        {
          id: 'pycl2',
          titulo: 'Objetos que mudam',
          exs: [
            {
              t: 'texto',
              titulo: 'Estado: o que o objeto lembra',
              blocos: [
                {
                  p: 'Um objeto guarda o seu estado entre uma chamada e outra. Um carrinho de compras lembra os itens; um contador lembra quanto já contou.'
                },
                {
                  code: `class Carrinho:
    def __init__(self):
        self.itens = []

    def adicionar(self, nome, preco):
        self.itens.append((nome, preco))

    def total(self):
        return sum(p for _, p in self.itens)

c = Carrinho()
c.adicionar("café", 18.9)
c.adicionar("pão", 7.5)
print(len(c.itens), c.total())`
                },
                {
                  p: 'Cada objeto tem o seu estado separado: dois carrinhos diferentes não misturam os itens.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que este programa mostra?',
              ops: ['{N}', '1', '0'],
              c: 0,
              exp: 'Cada chamada de incrementar soma 1 no mesmo objeto.',
              code: `class Contador:
    def __init__(self):
        self.valor = 0
    def incrementar(self):
        self.valor += 1

c = Contador()
for _ in range({N}):
    c.incrementar()
print(c.valor)`,
              vars: { N: { de: 2, ate: 9 } }
            },
            {
              t: 'escolha',
              p: 'Dois objetos Carrinho, a e b. Se você adiciona um item em a, o que acontece com b?',
              ops: ['Nada: cada objeto tem o seu estado', 'b ganha o item também', 'Dá erro'],
              c: 0,
              exp: 'O self.itens de a é outra lista.'
            },
            {
              t: 'complete',
              p: 'Complete para cada carrinho começar com a lista vazia',
              code: `def __init__(self):
    ___.itens = []`,
              bank: ['self', 'Carrinho', 'this', 'objeto'],
              c: ['self'],
              exp: 'this é de outras linguagens; em Python, self.'
            },
            {
              t: 'codigo',
              p: 'Crie a classe Termometro com registrar(t) e media(). Registre as leituras e mostre a média com 1 casa',
              start: `# crie a classe Termometro

t = Termometro()
for leitura in {L}:
    t.registrar(leitura)
print(round(t.media(), 1))
`,
              sol: `class Termometro:
    def __init__(self):
        self.leituras = []

    def registrar(self, t):
        self.leituras.append(t)

    def media(self):
        return sum(self.leituras) / len(self.leituras)

t = Termometro()
for leitura in {L}:
    t.registrar(leitura)
print(round(t.media(), 1))`,
              dica: 'Guarde uma lista no __init__ e use append em registrar.',
              exp: 'O objeto junta os dados e as contas sobre eles num lugar só.',
              vars: { L: ['[21.5, 22.1, 23.4]', '[30, 31.5, 29]', '[18.2, 17.9, 19.5, 20.0]'] }
            },
            {
              t: 'codigo',
              p: 'Crie a classe Tanque com capacidade, encher(litros) sem passar da capacidade e esvaziar(litros) sem ficar negativo. Mostre o nível no fim',
              start: `# crie a classe Tanque

t = Tanque({CAP})
t.encher({A})
t.esvaziar({B})
t.encher({CC})
print(t.nivel)
`,
              sol: `class Tanque:
    def __init__(self, capacidade):
        self.capacidade = capacidade
        self.nivel = 0

    def encher(self, litros):
        self.nivel = min(self.capacidade, self.nivel + litros)

    def esvaziar(self, litros):
        self.nivel = max(0, self.nivel - litros)

t = Tanque({CAP})
t.encher({A})
t.esvaziar({B})
t.encher({CC})
print(t.nivel)`,
              dica: 'min e max seguram o nível entre 0 e a capacidade.',
              exp: 'Limites assim são comuns em simulações de sistemas físicos.',
              vars: {
                CAP: [100, 500, 1000],
                A: { de: 50, ate: 600, passo: 50 },
                B: { de: 50, ate: 400, passo: 50 },
                CC: { de: 50, ate: 600, passo: 50 }
              }
            }
          ]
        },
        {
          id: 'pycl3',
          titulo: 'Mostrando objetos: __str__',
          exs: [
            {
              t: 'texto',
              titulo: 'print(objeto)',
              blocos: [
                {
                  p: 'Sem ajuda, `print` mostra um objeto de um jeito estranho, como `<__main__.Fracao object at 0x...>`. O método `__str__` diz como o objeto vira texto.'
                },
                {
                  code: `class Fracao:
    def __init__(self, num, den):
        self.num = num
        self.den = den

    def __str__(self):
        return f"{self.num}/{self.den}"

print(Fracao(3, 4))`
                },
                {
                  p: 'Métodos com dois sublinhados dos dois lados são especiais: o Python chama sozinho em certas situações. `__init__` na criação, `__str__` no print, `__eq__` na comparação com ==.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual método o print usa para mostrar um objeto?',
              ops: ['__str__', '__init__', '__print__'],
              c: 0,
              exp: 'Ele devolve o texto que vai aparecer.'
            },
            {
              t: 'complete',
              p: 'Complete para o print mostrar o objeto do seu jeito',
              code: `def ___(self):
    return f"{self.nome} ({self.idade})"`,
              bank: ['__str__', '__init__', 'str', 'print'],
              c: ['__str__'],
              exp: 'Ele precisa devolver um texto, com return.'
            },
            {
              t: 'codigo',
              p: 'Escreva __str__ na classe Fracao para mostrar {A}/{B}',
              start: `class Fracao:
    def __init__(self, num, den):
        self.num = num
        self.den = den

print(Fracao({A}, {B}))
`,
              sol: `class Fracao:
    def __init__(self, num, den):
        self.num = num
        self.den = den

    def __str__(self):
        return f"{self.num}/{self.den}"

print(Fracao({A}, {B}))`,
              dica: 'return f"{self.num}/{self.den}"',
              exp: 'Agora print mostra a fração do jeito que a gente escreve.',
              vars: { A: { de: 1, ate: 9 }, B: { de: 2, ate: 9 } },
              se: 'A < B'
            },
            {
              t: 'codigo',
              p: 'Acrescente somar(outra), que devolve uma nova Fracao já simplificada (use math.gcd), e mostre {A}/{B} + {CC}/{D}',
              start: `import math

class Fracao:
    def __init__(self, num, den):
        self.num = num
        self.den = den

    def __str__(self):
        return f"{self.num}/{self.den}"

print(Fracao({A}, {B}).somar(Fracao({CC}, {D})))
`,
              sol: `import math

class Fracao:
    def __init__(self, num, den):
        self.num = num
        self.den = den

    def __str__(self):
        return f"{self.num}/{self.den}"

    def somar(self, outra):
        num = self.num * outra.den + outra.num * self.den
        den = self.den * outra.den
        m = math.gcd(num, den)
        return Fracao(num // m, den // m)

print(Fracao({A}, {B}).somar(Fracao({CC}, {D})))`,
              dica: 'a/b + c/d = (a·d + c·b) / (b·d). Divida os dois pelo math.gcd para simplificar.',
              exp: 'O método devolve um objeto novo, sem mudar os dois que foram somados.',
              vars: {
                A: { de: 1, ate: 5 },
                B: { de: 2, ate: 6 },
                CC: { de: 1, ate: 5 },
                D: { de: 2, ate: 6 }
              },
              se: 'A < B && CC < D'
            }
          ]
        },
        {
          id: 'pycl4',
          titulo: 'Herança',
          exs: [
            {
              t: 'texto',
              titulo: 'Uma classe que aproveita outra',
              blocos: [
                {
                  p: 'Com herança, uma classe nova recebe tudo de uma classe existente e só acrescenta ou troca o que é diferente. Em `class Quadrado(Retangulo)`, o Quadrado herda do Retangulo.'
                },
                {
                  code: `class Funcionario:
    def __init__(self, nome, salario):
        self.nome = nome
        self.salario = salario

    def pagamento(self):
        return self.salario

class Gerente(Funcionario):
    def pagamento(self):
        return self.salario * 1.10

for p in [Funcionario("Ana", 3000), Gerente("Bia", 5000)]:
    print(p.nome, p.pagamento())`
                },
                {
                  p: 'O Gerente trocou o método pagamento, e o resto veio pronto. Para aproveitar o `__init__` da classe de cima e acrescentar algo, use `super().__init__(...)`.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que `class Carro(Veiculo)` quer dizer?',
              ops: [
                'Carro herda tudo de Veiculo e pode acrescentar ou trocar coisas',
                'Carro e Veiculo são a mesma classe',
                'Veiculo herda de Carro'
              ],
              c: 0,
              exp: 'A classe entre parênteses é a de cima.'
            },
            {
              t: 'complete',
              p: 'Complete para aproveitar o __init__ da classe de cima',
              code: `def __init__(self, nome, placa):
    super().___(nome)
    self.placa = placa`,
              bank: ['__init__', 'init', 'self', 'parent'],
              c: ['__init__'],
              exp: 'super() dá acesso à classe de cima.'
            },
            {
              t: 'codigo',
              p: 'Crie Quadrado(Retangulo), que recebe só o lado, e mostre a área de um quadrado de lado {L}',
              start: `class Retangulo:
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

# crie a classe Quadrado

print(Quadrado({L}).area())
`,
              sol: `class Retangulo:
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

class Quadrado(Retangulo):
    def __init__(self, lado):
        super().__init__(lado, lado)

print(Quadrado({L}).area())`,
              dica: 'No __init__ do Quadrado, chame super().__init__(lado, lado).',
              exp: 'O método area veio de graça, herdado.',
              vars: { L: { de: 2, ate: 15 } }
            },
            {
              t: 'codigo',
              p: 'Mostre a área de cada forma da lista, com 2 casas. Cada classe tem o seu jeito de calcular',
              start: `import math

class Forma:
    def area(self):
        return 0

# crie Circulo(raio) e Quadrado(lado), herdando de Forma

formas = [Circulo({R}), Quadrado({L})]
for f in formas:
    print(f"{f.area():.2f}")
`,
              sol: `import math

class Forma:
    def area(self):
        return 0

class Circulo(Forma):
    def __init__(self, raio):
        self.raio = raio
    def area(self):
        return math.pi * self.raio ** 2

class Quadrado(Forma):
    def __init__(self, lado):
        self.lado = lado
    def area(self):
        return self.lado ** 2

formas = [Circulo({R}), Quadrado({L})]
for f in formas:
    print(f"{f.area():.2f}")`,
              dica: 'Cada classe filha tem o seu __init__ e o seu area.',
              exp: 'O laço chama f.area() sem saber de que tipo é cada forma: isso se chama polimorfismo.',
              vars: { R: { de: 1, ate: 5 }, L: { de: 2, ate: 9 } }
            }
          ]
        },
        {
          id: 'pycl5',
          titulo: 'dataclasses',
          exs: [
            {
              t: 'texto',
              titulo: 'Classes de dados sem repetir código',
              blocos: [
                {
                  p: 'Muitas classes só guardam dados. O `@dataclass` escreve sozinho o `__init__`, um texto de exibição e a comparação com ==. Você só lista os campos com os tipos.'
                },
                {
                  code: `from dataclasses import dataclass

@dataclass
class Produto:
    nome: str
    preco: float
    estoque: int = 0

p = Produto("parafuso", 0.35, 120)
print(p)
print(p.preco * p.estoque)`
                },
                {
                  p: 'Os tipos depois dos dois-pontos são anotações: ajudam quem lê e os editores, mas o Python não confere. Um campo com valor, como `estoque: int = 0`, fica opcional.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que o @dataclass escreve sozinho?',
              ops: ['O __init__, a exibição e a comparação com ==', 'Os métodos de cálculo', 'Nada'],
              c: 0,
              exp: 'Os métodos com regras de negócio continuam por sua conta.'
            },
            {
              t: 'complete',
              p: 'Complete para criar a classe de dados',
              code: `from dataclasses import dataclass

___
class Ponto:
    x: float
    y: float`,
              bank: ['@dataclass', '#dataclass', 'dataclass()', '@class'],
              c: ['@dataclass'],
              exp: 'O @ antes do nome é um decorador.'
            },
            {
              t: 'codigo',
              p: 'Crie a dataclass Produto (nome, preco, estoque) e mostre os nomes dos produtos com estoque abaixo de {M}',
              start: `from dataclasses import dataclass

# crie a dataclass Produto

produtos = [Produto("porca", 0.2, 30), Produto("rebite", 0.1, 4), Produto("arruela", 0.05, 80)]
`,
              sol: `from dataclasses import dataclass

@dataclass
class Produto:
    nome: str
    preco: float
    estoque: int

produtos = [Produto("porca", 0.2, 30), Produto("rebite", 0.1, 4), Produto("arruela", 0.05, 80)]
for p in produtos:
    if p.estoque < {M}:
        print(p.nome)`,
              dica: 'Três campos com tipos e um laço com if.',
              exp: 'Listas de dataclasses são um jeito organizado de guardar registros, como linhas de uma planilha.',
              vars: { M: [10, 50, 100] }
            },
            {
              t: 'codigo',
              p: 'Ordene os produtos pelo preço com sorted e key, e mostre os nomes do mais barato para o mais caro',
              start: `from dataclasses import dataclass

@dataclass
class Produto:
    nome: str
    preco: float

produtos = [Produto("café", {P1}), Produto("arroz", {P2}), Produto("feijão", {P3})]
`,
              sol: `from dataclasses import dataclass

@dataclass
class Produto:
    nome: str
    preco: float

produtos = [Produto("café", {P1}), Produto("arroz", {P2}), Produto("feijão", {P3})]
for p in sorted(produtos, key=lambda p: p.preco):
    print(p.nome)`,
              dica: 'key=lambda p: p.preco',
              exp: 'O lambda pega o atributo que decide a ordem.',
              vars: {
                P1: { de: 5, ate: 25, passo: 0.5 },
                P2: { de: 5, ate: 25, passo: 0.5 },
                P3: { de: 5, ate: 25, passo: 0.5 }
              },
              se: 'P1 !== P2 && P2 !== P3 && P1 !== P3'
            }
          ]
        }
      ]
    }
  ]
});
