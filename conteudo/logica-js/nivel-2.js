/* Trilha Livre · Lógica de programação com JavaScript · Nível 2: Fundamentos
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'logica-js',
  n: 2,
  titulo: 'Fundamentos',
  desc: 'As peças básicas de todo programa.',
  unidades: [
    {
      id: 'u1',
      titulo: 'Primeiros passos',
      conceito: 'console.log()',
      desc: 'Fazer o computador mostrar mensagens e contas.',
      licoes: [
        {
          id: 'u1l1',
          titulo: 'Falando com o computador',
          exs: [
            {
              t: 'texto',
              titulo: 'O que é programar',
              blocos: [
                {
                  p: 'Programar é escrever instruções para o computador seguir. Ele não adivinha nada: faz exatamente o que está escrito, na ordem em que está escrito.'
                },
                {
                  p: 'Essas instruções são escritas numa linguagem de programação. Aqui vamos usar JavaScript, que roda em qualquer navegador, no celular ou no computador, sem instalar nada.'
                },
                {
                  p: 'O primeiro comando que todo mundo aprende é o `console.log`. Ele mostra uma mensagem no console, a área onde o programa conversa com você.'
                },
                { code: 'console.log("Olá, mundo!");' },
                { dica: 'Texto em programação se chama string e sempre fica entre aspas.' }
              ]
            },
            {
              t: 'escolha',
              p: 'O que o console.log faz?',
              ops: [
                'Mostra uma mensagem na tela (no console)',
                'Apaga o programa',
                'Salva um arquivo no computador'
              ],
              c: 0,
              exp: 'console.log é o jeito mais simples de ver o que o programa está fazendo: ele escreve no console.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log("Bom dia!");',
              mono: true,
              ops: ['Bom dia!', '"Bom dia!"', 'console.log'],
              c: 0,
              exp: 'As aspas só avisam que aquilo é um texto (uma string). Elas não aparecem na saída.'
            },
            {
              t: 'complete',
              p: 'Complete para mostrar Olá, Brasil',
              code: 'console.log(___);',
              bank: ['"Olá, Brasil"', 'Olá, Brasil', '(Olá)'],
              c: ['"Olá, Brasil"'],
              exp: 'Texto precisa estar entre aspas. Sem aspas, o JavaScript acha que Olá é o nome de uma variável.'
            },
            {
              t: 'codigo',
              p: 'Escreva um programa que mostre: Eu vou aprender a programar',
              start: `// escreva seu código aqui
`,
              saida: 'Eu vou aprender a programar',
              dica: 'Use console.log com o texto entre aspas.',
              sol: 'console.log("Eu vou aprender a programar");',
              exp: 'Você escreveu seu primeiro programa!'
            }
          ]
        },
        {
          id: 'u1l2',
          titulo: 'Números e contas',
          exs: [
            {
              t: 'texto',
              titulo: 'Contas no computador',
              blocos: [
                {
                  p: 'O JavaScript sabe fazer contas. Os operadores são `+` (soma), `-` (subtração), `*` (multiplicação) e `/` (divisão). Ele respeita a ordem da matemática: multiplicação e divisão vêm antes de soma e subtração.'
                },
                {
                  code: `console.log(2 + 3 * 4);   // 14
console.log((2 + 3) * 4); // 20`
                },
                {
                  p: 'Atenção à diferença entre número e texto. `5` é um número. `"5"` é um texto que contém o caractere 5. Com textos, o `+` não soma: ele junta.'
                },
                {
                  code: `console.log(5 + 5);     // 10
console.log("5" + "5"); // 55`
                },
                {
                  dica: 'O operador `%` dá o resto da divisão: `10 % 3` é 1. Ele vai aparecer bastante.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log(2 + 3);',
              mono: true,
              ops: ['5', '2 + 3', '23'],
              c: 0,
              exp: 'Sem aspas, 2 e 3 são números, e o + faz a soma.'
            },
            {
              t: 'escolha',
              p: 'E agora, com aspas?',
              code: 'console.log("2" + "3");',
              mono: true,
              ops: ['23', '5', 'Dá erro'],
              c: 0,
              exp: 'Com aspas, "2" e "3" são textos. Texto + texto junta os dois: "23".'
            },
            {
              t: 'complete',
              p: 'Complete para mostrar 20',
              code: 'console.log(10 ___ 2);',
              bank: ['*', '+', 'x', '/'],
              c: ['*'],
              exp: 'Em programação, a multiplicação usa * (asterisco). O x não funciona.'
            },
            {
              t: 'codigo',
              p: 'Mostre o resultado de 7 vezes 8',
              start: '',
              saida: '56',
              dica: 'Coloque a conta dentro do console.log.',
              sol: 'console.log(7 * 8);',
              exp: 'O computador faz a conta antes de mostrar.'
            }
          ]
        }
      ]
    },
    {
      id: 'u2',
      titulo: 'Variáveis',
      conceito: 'let · const',
      desc: 'Guardar valores com nome para usar depois.',
      licoes: [
        {
          id: 'u2l1',
          titulo: 'Guardando valores',
          exs: [
            {
              t: 'texto',
              titulo: 'Variáveis são caixas com nome',
              blocos: [
                {
                  p: 'Uma variável guarda um valor para você usar depois. Pense numa caixa com etiqueta: a etiqueta é o nome, e o que está dentro é o valor.'
                },
                {
                  code: `let idade = 20;
console.log(idade);`
                },
                {
                  p: 'Em programação, o sinal `=` não quer dizer "é igual". Ele quer dizer "guarde". Por isso a linha do meio abaixo faz sentido: pega o valor atual, soma 1 e guarda de volta.'
                },
                {
                  code: `let pontos = 10;
pontos = pontos + 1;
console.log(pontos); // 11`
                },
                {
                  dica: 'Escolha nomes que expliquem o conteúdo: `precoTotal` é melhor que `x`. Nomes não podem ter espaço nem começar com número.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual linha cria uma variável corretamente?',
              mono: true,
              ops: ['let idade = 20;', 'variable idade = 20;', 'idade := 20;'],
              c: 0,
              exp: 'let cria uma variável. O = guarda o valor da direita no nome da esquerda.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `let nome = "Ana";
console.log("Oi, " + nome);`,
              mono: true,
              ops: ['Oi, Ana', 'Oi, nome', 'Oi, "Ana"'],
              c: 0,
              exp: 'nome está sem aspas, então o JavaScript usa o valor guardado nela: Ana.'
            },
            {
              t: 'complete',
              p: 'Complete para criar a variável',
              code: `___ cidade = "Recife";
console.log(cidade);`,
              bank: ['let', 'var:', 'set', 'print'],
              c: ['let'],
              exp: 'let cidade = "Recife" guarda o texto Recife na variável cidade.'
            },
            {
              t: 'ordene',
              p: 'Monte o programa que mostra 15',
              lines: ['let preco = 10;', 'preco = preco + 5;', 'console.log(preco);'],
              exp: 'Primeiro cria, depois muda, por último mostra. A ordem das linhas importa.'
            }
          ]
        },
        {
          id: 'u2l2',
          titulo: 'const e textos',
          exs: [
            {
              t: 'texto',
              titulo: 'const e textos com variáveis',
              blocos: [
                {
                  p: 'Além do `let`, existe o `const`, para valores que não devem mudar. Se o código tentar mudar uma const, o JavaScript avisa com um erro. Isso evita bugs.'
                },
                {
                  code: `const diasDaSemana = 7;
let saldo = 200;
saldo = saldo - 50; // pode, saldo é let
console.log(saldo);`
                },
                {
                  p: 'Para misturar texto e variáveis, use crases no lugar das aspas. Dentro delas, o que estiver em `${ }` é trocado pelo valor da variável.'
                },
                {
                  code: `const cidade = "Salvador";
console.log(\`Eu moro em \${cidade}\`);`
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual a diferença entre let e const?',
              ops: [
                'const não pode receber outro valor depois',
                'const é mais rápido para contas',
                'Não existe diferença'
              ],
              c: 0,
              exp: 'Use const para valores que não mudam e let para os que vão mudar.'
            },
            {
              t: 'escolha',
              p: 'O que acontece aqui?',
              code: `const pi = 3.14;
pi = 3;`,
              mono: false,
              ops: ['Dá erro', 'pi passa a valer 3', 'Nada acontece'],
              c: 0,
              exp: 'Tentar mudar uma const gera o erro "Assignment to constant variable".'
            },
            {
              t: 'complete',
              p: 'Complete para mostrar: Tenho 19 anos',
              code: `let idade = 19;
console.log(\`Tenho \${___} anos\`);`,
              bank: ['idade', '"idade"', '$idade'],
              c: ['idade'],
              exp: 'Com crases (`), dá para colocar variáveis no meio do texto usando ${ }.'
            },
            {
              t: 'codigo',
              p: 'Crie salario = 1500 e aumento = 300. Mostre a soma dos dois.',
              start: `let salario = 1500;
`,
              saida: '1800',
              dica: 'Crie a variável aumento e mostre salario + aumento.',
              sol: `let salario = 1500;
let aumento = 300;
console.log(salario + aumento);`,
              exp: 'Variáveis com nomes claros deixam o código fácil de entender.'
            }
          ]
        },
        {
          id: 'u2l3',
          titulo: 'Atalhos: +=, ++ e companhia',
          exs: [
            {
              t: 'texto',
              titulo: 'Escrevendo menos',
              blocos: [
                {
                  p: 'Mudar uma variável a partir do próprio valor é tão comum que existem atalhos para isso:'
                },
                {
                  tabela: {
                    codigo: [0, 1], cab: ['Atalho', 'É o mesmo que'],
                    linhas: [
                      ['x += 5', 'x = x + 5'],
                      ['x -= 2', 'x = x - 2'],
                      ['x *= 3', 'x = x * 3'],
                      ['x /= 2', 'x = x / 2'],
                      ['x++', 'x = x + 1'],
                      ['x--', 'x = x - 1']
                    ]
                  }
                },
                {
                  code: `let saldo = 100;
saldo += 50;  // depósito
saldo -= 30;  // compra
console.log(saldo); // 120`
                },
                { p: 'O `+=` também funciona com textos: ele junta no fim.' },
                {
                  code: `let msg = "Bom";
msg += " dia!";
console.log(msg); // Bom dia!`
                },
                {
                  dica: 'Esses atalhos mudam o valor da variável, então não funcionam com `const`.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `let x = 10;
x += 5;
x *= 2;
console.log(x);`,
              mono: true,
              ops: ['30', '25', '20'],
              c: 0,
              exp: '10 + 5 = 15. Depois 15 × 2 = 30.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `let msg = "Oi";
msg += ", tudo bem?";
console.log(msg);`,
              mono: true,
              ops: ['Oi, tudo bem?', 'Oi', 'Dá erro'],
              c: 0,
              exp: 'Com textos, += junta no fim.'
            },
            {
              t: 'complete',
              p: 'Complete para perder uma vida',
              code: `let vidas = 3;
vidas___;
console.log(vidas); // 2`,
              bank: ['--', '++', '-=', '- 1'],
              c: ['--'],
              exp: '`vidas--` tira 1 de vidas.'
            },
            {
              t: 'codigo',
              p: 'Usando atalhos: some 50 ao saldo, depois tire 30 e por fim dobre. Mostre o saldo.',
              start: `let saldo = 100;
`,
              saida: '240',
              dica: 'saldo += 50; saldo -= 30; saldo *= 2;',
              sol: `let saldo = 100;
saldo += 50;
saldo -= 30;
saldo *= 2;
console.log(saldo);`,
              exp: '(100 + 50 − 30) × 2 = 240.'
            }
          ]
        }
      ]
    },
    {
      id: 'u3',
      titulo: 'Decisões',
      conceito: 'if · else',
      desc: 'Fazer o programa escolher o que fazer.',
      licoes: [
        {
          id: 'u3l1',
          titulo: 'Se, senão',
          exs: [
            {
              t: 'texto',
              titulo: 'Fazendo escolhas com if',
              blocos: [
                {
                  p: 'Programas precisam tomar decisões. O `if` (se) testa uma condição: se ela for verdadeira, o bloco entre chaves roda. O `else` (senão) é o caminho para quando ela for falsa.'
                },
                {
                  code: `let saldo = 30;
if (saldo >= 50) {
  console.log("Dá para comprar");
} else {
  console.log("Saldo insuficiente");
}`
                },
                {
                  p: 'Comparações sempre dão `true` (verdadeiro) ou `false` (falso): `>` maior, `<` menor, `>=` maior ou igual, `<=` menor ou igual, `===` igual e `!==` diferente.'
                },
                { p: 'Quando há mais de dois caminhos, use `else if`:' },
                {
                  code: `let nota = 8;
if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 6) {
  console.log("Aprovado");
} else {
  console.log("Recuperação");
}`
                },
                {
                  dica: 'Cuidado: `=` guarda um valor e `===` compara. Trocar um pelo outro é um dos erros mais comuns.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `let nota = 7;
if (nota >= 6) {
  console.log("Aprovado");
} else {
  console.log("Recuperação");
}`,
              mono: true,
              ops: ['Aprovado', 'Recuperação', 'Aprovado e Recuperação'],
              c: 0,
              exp: '7 é maior ou igual a 6, então só o bloco do if roda. O else fica de fora.'
            },
            {
              t: 'escolha',
              p: 'Qual operador verifica se dois valores são iguais?',
              mono: true,
              ops: ['===', '=', '=>'],
              c: 0,
              exp: 'Um = guarda valor. Três === comparam. => é outra coisa (usado em funções).'
            },
            {
              t: 'complete',
              p: 'Complete: quem tem 16 anos ou mais pode votar',
              code: `if (idade ___ 16) {
  console.log("Pode votar");
}`,
              bank: ['>=', '=', '=>', '<'],
              c: ['>='],
              exp: '>= significa "maior ou igual a".'
            },
            {
              t: 'ordene',
              p: 'Monte o programa que avisa quando está calor',
              lines: ['let temp = 32;', 'if (temp > 30) {', '  console.log("Calor!");', '}'],
              exp: 'O bloco do if fica entre chaves { }.'
            }
          ]
        },
        {
          id: 'u3l2',
          titulo: 'E, ou',
          exs: [
            {
              t: 'texto',
              titulo: 'Combinando condições',
              blocos: [
                {
                  p: 'Às vezes uma decisão depende de mais de uma coisa. Para isso existem os operadores lógicos: `&&` (E) só é verdadeiro se os dois lados forem verdadeiros; `||` (OU) basta um lado ser verdadeiro; `!` (NÃO) inverte o valor.'
                },
                {
                  code: `let idade = 17;
let temTitulo = true;
console.log(idade >= 16 && temTitulo); // true
console.log(!temTitulo);              // false`
                },
                {
                  p: 'Um truque clássico: um número é par quando o resto da divisão por 2 é zero, ou seja, quando `n % 2 === 0`.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log(true && false);',
              mono: true,
              ops: ['false', 'true', 'Dá erro'],
              c: 0,
              exp: '&& é o "E": só dá true se os dois lados forem true.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log(5 > 3 || 2 > 9);',
              mono: true,
              ops: ['true', 'false', '5'],
              c: 0,
              exp: '|| é o "OU": basta um lado ser true. 5 > 3 já é verdade.'
            },
            {
              t: 'codigo',
              p: 'Se x for par, mostre par. Se não, mostre ímpar.',
              start: `let x = 15;
`,
              saida: 'ímpar',
              dica: 'x % 2 dá o resto da divisão por 2. Se o resto for 0, é par.',
              sol: `let x = 15;
if (x % 2 === 0) {
  console.log("par");
} else {
  console.log("ímpar");
}`,
              exp: 'O operador % (resto) aparece muito em programação.'
            }
          ]
        },
        {
          id: 'u3l3',
          titulo: 'Vários caminhos com switch',
          exs: [
            {
              t: 'texto',
              titulo: 'Escolhendo entre muitos casos',
              blocos: [
                {
                  p: 'Quando você compara a mesma variável com vários valores, o `switch` deixa o código mais limpo do que uma fila de `else if`.'
                },
                {
                  code: `let dia = 3;
switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  case 3:
    console.log("Terça");
    break;
  default:
    console.log("Outro dia");
}`
                },
                {
                  p: 'Cada `case` é um valor possível. O `break` sai do switch. O `default` é o caminho quando nenhum caso bate, como o else.'
                },
                {
                  dica: 'Esquecer o `break` faz o código continuar rodando os casos de baixo. É um erro clássico.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `let fruta = "uva";
switch (fruta) {
  case "maçã":
    console.log("Vermelha");
    break;
  case "uva":
    console.log("Roxa");
    break;
  default:
    console.log("Não sei");
}`,
              mono: true,
              ops: ['Roxa', 'Vermelha', 'Não sei'],
              c: 0,
              exp: 'fruta vale "uva", então só o caso "uva" roda.'
            },
            {
              t: 'escolha',
              p: 'O que acontece se você esquecer um `break`?',
              ops: ['O código continua rodando os casos seguintes', 'Dá erro', 'Nada muda'],
              c: 0,
              exp: 'Sem break, o JavaScript "cai" no próximo caso e executa ele também.'
            },
            {
              t: 'complete',
              p: 'Complete o switch da calculadora',
              code: `switch (op) {
  ___ "+":
    console.log(a + b);
    ___;
  default:
    console.log("Operação inválida");
}`,
              bank: ['case', 'break', 'if', 'stop'],
              c: ['case', 'break'],
              exp: '`case` marca o valor e `break` encerra aquele caso.'
            },
            {
              t: 'codigo',
              p: 'Use switch para mostrar o nome do mês 1, 2 ou 3. Com mes = 2, deve aparecer Fevereiro.',
              start: `let mes = 2;
`,
              saida: 'Fevereiro',
              dica: 'Um case para cada mês, cada um com seu console.log e seu break.',
              sol: `let mes = 2;
switch (mes) {
  case 1:
    console.log("Janeiro");
    break;
  case 2:
    console.log("Fevereiro");
    break;
  case 3:
    console.log("Março");
    break;
  default:
    console.log("Mês inválido");
}`,
              exp: 'Mude o valor de mes e rode de novo para ver os outros casos.'
            }
          ]
        }
      ]
    },
    {
      id: 'u4',
      titulo: 'Repetição',
      conceito: 'for · while',
      desc: 'Repetir tarefas sem copiar código.',
      licoes: [
        {
          id: 'u4l1',
          titulo: 'O laço for',
          exs: [
            {
              t: 'texto',
              titulo: 'Repetir sem copiar',
              blocos: [
                {
                  p: 'Imagine mostrar os números de 1 a 100. Escrever 100 linhas seria cansativo. Laços (loops) repetem um bloco de código por você.'
                },
                {
                  p: 'O `for` tem três partes, separadas por ponto e vírgula: onde começa, até quando repete e o que muda a cada volta.'
                },
                {
                  code: `for (let i = 1; i <= 5; i++) {
  console.log("Volta número " + i);
}`
                },
                {
                  p: 'Leia assim: comece com i valendo 1; enquanto i for menor ou igual a 5, rode o bloco; no fim de cada volta, some 1 a i.'
                },
                {
                  dica: '`i++` é um atalho para `i = i + 1`, e `i--` é o mesmo que `i = i - 1`.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `for (let i = 1; i <= 3; i++) {
  console.log(i);
}`,
              ops: ['1, 2 e 3', '0, 1 e 2', '1, 2, 3 e 4'],
              c: 0,
              exp: 'Começa em 1, repete enquanto i <= 3 e soma 1 a cada volta.'
            },
            {
              t: 'complete',
              p: 'Complete para i aumentar 1 a cada volta',
              code: `for (let i = 0; i < 5; ___) {
  console.log(i);
}`,
              bank: ['i++', 'i--', 'i + 1'],
              c: ['i++'],
              exp: 'i++ é o mesmo que i = i + 1. Só escrever i + 1 não muda o valor de i.'
            },
            {
              t: 'escolha',
              p: 'Quantas vezes esse laço roda?',
              code: 'for (let i = 0; i < 10; i++) { }',
              ops: ['10', '9', '11'],
              c: 0,
              exp: 'De 0 até 9 são 10 voltas. Começar do 0 é muito comum em programação.'
            },
            {
              t: 'codigo',
              p: 'Mostre os números de 1 a 5, um por linha',
              start: '',
              saida: `1
2
3
4
5`,
              dica: 'Use um for começando em 1 e indo até 5.',
              sol: `for (let i = 1; i <= 5; i++) {
  console.log(i);
}`,
              exp: 'Mudando um número, o mesmo código mostraria de 1 a 1000.'
            }
          ]
        },
        {
          id: 'u4l2',
          titulo: 'O laço while',
          exs: [
            {
              t: 'texto',
              titulo: 'Enquanto for verdade',
              blocos: [
                {
                  p: 'O `while` (enquanto) repete enquanto a condição for verdadeira. Ele é útil quando você não sabe de antemão quantas voltas vão ser necessárias.'
                },
                {
                  code: `let garrafas = 3;
while (garrafas > 0) {
  console.log(garrafas + " garrafas na mesa");
  garrafas--;
}`
                },
                {
                  p: 'Algo dentro do laço precisa mudar a condição. Se nada mudar, ele nunca para: é o loop infinito. Aqui o app interrompe o programa depois de alguns segundos, mas um programa de verdade travaria.'
                },
                {
                  p: 'Um padrão muito usado é o acumulador: uma variável que começa em zero e vai somando a cada volta.'
                },
                {
                  code: `let total = 0;
for (let i = 1; i <= 4; i++) {
  total = total + i;
}
console.log(total); // 10`
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `let n = 3;
while (n > 0) {
  console.log(n);
  n--;
}`,
              ops: ['3, 2 e 1', '3, 2, 1 e 0', 'Roda para sempre'],
              c: 0,
              exp: 'Quando n chega a 0, a condição n > 0 fica falsa e o laço para.'
            },
            {
              t: 'escolha',
              p: 'E se a linha n-- fosse apagada?',
              ops: ['O laço nunca terminaria', 'Mostraria só o 3', 'Daria erro de sintaxe'],
              c: 0,
              exp: 'Isso se chama loop infinito: a condição nunca fica falsa.'
            },
            {
              t: 'codigo',
              p: 'Mostre a soma de todos os números de 1 a 100',
              start: `let soma = 0;
`,
              saida: '5050',
              dica: 'Use um laço que some cada número em soma, e mostre soma no final, fora do laço.',
              sol: `let soma = 0;
for (let i = 1; i <= 100; i++) {
  soma = soma + i;
}
console.log(soma);`,
              exp: 'Contam que Gauss fez essa conta de cabeça ainda criança. Você fez com um laço.'
            }
          ]
        },
        {
          id: 'u4l3',
          titulo: 'break, continue e laços aninhados',
          exs: [
            {
              t: 'texto',
              titulo: 'Controlando a repetição',
              blocos: [
                {
                  p: '`break` para o laço na hora, mesmo que a condição ainda seja verdadeira. `continue` pula o resto da volta atual e vai para a próxima.'
                },
                {
                  code: `for (let i = 1; i <= 10; i++) {
  if (i === 5) break;   // para no 5
  console.log(i);       // 1, 2, 3, 4
}`
                },
                {
                  code: `for (let i = 1; i <= 6; i++) {
  if (i % 2 === 0) continue; // pula os pares
  console.log(i);             // 1, 3, 5
}`
                },
                {
                  p: 'Também dá para colocar um laço dentro de outro. A cada volta do laço de fora, o de dentro faz todas as voltas dele.'
                },
                {
                  code: `for (let linha = 1; linha <= 2; linha++) {
  for (let col = 1; col <= 3; col++) {
    console.log(\`linha \${linha}, coluna \${col}\`);
  }
}`
                },
                {
                  dica: 'Laços aninhados multiplicam o trabalho: 2 voltas fora × 3 dentro = 6 execuções.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}`,
              ops: ['1 e 2', '1, 2 e 3', '1, 2, 4 e 5'],
              c: 0,
              exp: 'Quando i chega a 3, o break encerra o laço antes do console.log.'
            },
            {
              t: 'escolha',
              p: 'E agora, com continue?',
              code: `for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}`,
              ops: ['1, 2, 4 e 5', '1 e 2', '1, 2, 3, 4 e 5'],
              c: 0,
              exp: 'continue pula só a volta do 3.'
            },
            {
              t: 'escolha',
              p: 'Quantas vezes o console.log roda?',
              code: `for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 4; j++) {
    console.log(i, j);
  }
}`,
              ops: ['12', '7', '4'],
              c: 0,
              exp: '3 voltas de fora × 4 de dentro.'
            },
            {
              t: 'codigo',
              p: 'Mostre os múltiplos de 3 de 1 a 20, um por linha, usando continue para pular os outros',
              start: '',
              saida: `3
6
9
12
15
18`,
              dica: 'Dentro do for, se i % 3 !== 0, use continue.',
              sol: `for (let i = 1; i <= 20; i++) {
  if (i % 3 !== 0) continue;
  console.log(i);
}`,
              exp: 'Também daria para fazer com i += 3. Existem vários caminhos certos.'
            }
          ]
        },
        {
          id: 'u4l4',
          titulo: 'Mini projeto: tabuada',
          exs: [
            {
              t: 'texto',
              titulo: 'Projeto: gerador de tabuada',
              blocos: [
                {
                  p: 'A tabuada é um laço perfeito: o número fica fixo e o multiplicador vai de 1 a 10. Com as crases e o ${ }, cada linha sai bem formatada.'
                },
                {
                  code: `const n = 2;
for (let i = 1; i <= 10; i++) {
  console.log(\`\${n} x \${i} = \${n * i}\`);
}`
                },
                {
                  p: 'Com um laço por fora para o número e outro por dentro para o multiplicador, dá para gerar várias tabuadas de uma vez.'
                },
                {
                  dica: 'Troque o n e rode de novo. Um programa bom resolve muitos casos mudando só um valor.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual é a última linha mostrada?',
              code: `const n = 4;
for (let i = 1; i <= 3; i++) {
  console.log(\`\${n} x \${i} = \${n * i}\`);
}`,
              mono: true,
              ops: ['4 x 3 = 12', '4 x 4 = 16', '3 x 4 = 12'],
              c: 0,
              exp: 'O laço vai até i = 3.'
            },
            {
              t: 'complete',
              p: 'Complete a tabuada do 7',
              code: `for (let i = 1; i <= 10; i++) {
  console.log(\`7 x \${i} = \${7 ___ i}\`);
}`,
              bank: ['*', '+', 'x', 'i'],
              c: ['*'],
              exp: 'Dentro de ${ }, a conta é JavaScript: multiplicação é *.'
            },
            {
              t: 'codigo',
              p: 'Mostre a tabuada do 9, de 1 a 10, no formato "9 x 1 = 9"',
              start: '',
              saida: `9 x 1 = 9
9 x 2 = 18
9 x 3 = 27
9 x 4 = 36
9 x 5 = 45
9 x 6 = 54
9 x 7 = 63
9 x 8 = 72
9 x 9 = 81
9 x 10 = 90`,
              dica: 'Um for de 1 a 10 com console.log(`9 x ${i} = ${9 * i}`).',
              sol: `for (let i = 1; i <= 10; i++) {
  console.log(\`9 x \${i} = \${9 * i}\`);
}`,
              exp: 'Repare: na tabuada do 9, os algarismos de cada resultado somam 9.'
            },
            {
              t: 'codigo',
              p: 'Mostre só as linhas da tabuada do 7 cujo resultado é par',
              start: '',
              saida: `7 x 2 = 14
7 x 4 = 28
7 x 6 = 42
7 x 8 = 56
7 x 10 = 70`,
              dica: 'Calcule o resultado e use um if com % 2 === 0 antes de mostrar.',
              sol: `for (let i = 1; i <= 10; i++) {
  const r = 7 * i;
  if (r % 2 === 0) console.log(\`7 x \${i} = \${r}\`);
}`,
              exp: 'Laço + condição: a dupla que mais aparece em programação.'
            }
          ]
        }
      ]
    }
  ]
});
