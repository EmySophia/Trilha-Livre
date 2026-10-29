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
              t: 'escolha',
              p: 'O que acontece com `console.log(Olá)`, sem as aspas?',
              ops: [
                'Dá erro: sem aspas, Olá vira o nome de algo que não existe',
                'Mostra Olá normalmente',
                'Mostra "Olá", com aspas'
              ],
              c: 0,
              exp: 'Texto sempre fica entre aspas. Sem elas, o JavaScript procura uma variável chamada Olá.'
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
            },
            {
              t: 'codigo',
              p: 'Mostre duas linhas: Olá e, embaixo, Tudo bem?',
              start: '',
              sol: `console.log("Olá");
console.log("Tudo bem?");`,
              dica: 'Um console.log para cada linha.',
              exp: 'Cada console.log mostra uma linha nova.'
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
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log({A} + {B} * {C});',
              ops: ['{= A + B * C }', '{= (A + B) * C }', '{A}{= B * C }'],
              c: 0,
              mono: true,
              exp: 'A multiplicação vem antes: {B} × {C} = {= B * C }, mais {A}.',
              vars: { A: { de: 2, ate: 9 }, B: { de: 2, ate: 9 }, C: { de: 2, ate: 9 } }
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log({A} % {B});',
              ops: ['{= A % B }', '{= Math.floor(A / B) }', '{= A - B }'],
              c: 0,
              mono: true,
              exp: '{A} ÷ {B} dá {= Math.floor(A / B) } e sobram {= A % B }. O % mostra o que sobra.',
              vars: { A: { de: 10, ate: 40 }, B: { de: 3, ate: 7 } },
              se: 'A % B !== 0'
            },
            {
              t: 'codigo',
              p: 'Mostre o resultado de 7 vezes 8',
              start: '',
              saida: '56',
              dica: 'Coloque a conta dentro do console.log.',
              sol: 'console.log(7 * 8);',
              exp: 'O computador faz a conta antes de mostrar.'
            },
            {
              t: 'codigo',
              p: 'Mostre o resto da divisão de {A} por {B}',
              start: '',
              sol: 'console.log({A} % {B});',
              dica: 'Use o operador %.',
              exp: 'O resto aparece em muito lugar: par ou ímpar, horas no relógio, dígitos de um número.',
              vars: { A: { de: 20, ate: 99 }, B: { de: 3, ate: 9 } }
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
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `let pontos = {A};
pontos = pontos + {B};
console.log(pontos);`,
              ops: ['{= A + B }', '{A}', '{B}'],
              c: 0,
              mono: true,
              exp: 'A segunda linha pega o valor atual, soma {B} e guarda de volta.',
              vars: { A: { de: 5, ate: 50 }, B: { de: 1, ate: 20 } }
            },
            {
              t: 'escolha',
              p: 'Qual destes NÃO pode ser nome de variável?',
              ops: ['2nome', 'nome2', 'precoTotal'],
              c: 0,
              exp: 'Nomes não podem começar com número.',
              mono: true
            },
            {
              t: 'codigo',
              p: 'Crie a variável litros com {L} e a variável preco com {P}. Mostre quanto custa o abastecimento (litros vezes preço)',
              start: '',
              sol: `let litros = {L};
let preco = {P};
console.log(litros * preco);`,
              dica: 'Duas variáveis e um console.log com a multiplicação.',
              exp: 'Com variáveis, para mudar o preço basta mudar uma linha.',
              vars: { L: { de: 10, ate: 50 }, P: { de: 4, ate: 9 } }
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
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `const cidade = "{CID}";
console.log(\`Eu moro em \${cidade}\`);`,
              ops: ['Eu moro em {CID}', 'Eu moro em ${cidade}', 'Eu moro em cidade'],
              c: 0,
              mono: true,
              exp: 'Com crases, o ${cidade} é trocado pelo valor da variável.',
              vars: { CID: ['Recife', 'Belém', 'Manaus', 'Curitiba', 'Natal', 'Goiânia'] }
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
            },
            {
              t: 'codigo',
              p: 'Usando as variáveis, mostre exatamente: {NOME} tem {I} anos',
              start: `const nome = "{NOME}";
const idade = {I};
`,
              sol: `const nome = "{NOME}";
const idade = {I};
console.log(\`\${nome} tem \${idade} anos\`);`,
              dica: 'Crases e ${ } para cada variável.',
              exp: 'Assim o texto se adapta a qualquer nome e idade.',
              vars: {
                NOME: ['Ana', 'Bruno', 'Carla', 'Davi', 'Elis', 'Fábio', 'Gal', 'Hugo'],
                I: { de: 15, ate: 70 }
              }
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
                    codigo: [0, 1],
                    cab: ['Atalho', 'É o mesmo que'],
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
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `let x = {A};
x += {B};
x *= 2;
console.log(x);`,
              ops: ['{= (A + B) * 2 }', '{= A + B * 2 }', '{= A * 2 + B }'],
              c: 0,
              mono: true,
              exp: 'Primeiro x vira {= A + B }; depois, o dobro disso.',
              vars: { A: { de: 2, ate: 9 }, B: { de: 2, ate: 9 } }
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
            },
            {
              t: 'codigo',
              p: 'Comece com vidas = {V}. Perca uma vida com -- e depois ganhe {G} com +=. Mostre vidas',
              start: `let vidas = {V};
`,
              sol: `let vidas = {V};
vidas--;
vidas += {G};
console.log(vidas);`,
              dica: 'vidas-- tira 1; vidas += {G} soma {G}.',
              exp: 'Jogos fazem contas assim o tempo todo.',
              vars: { V: { de: 3, ate: 9 }, G: { de: 2, ate: 5 } }
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
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `let nota = {N};
if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 6) {
  console.log("Aprovado");
} else {
  console.log("Recuperação");
}`,
              ops: [
                '{= N >= 9 ? "Excelente" : N >= 6 ? "Aprovado" : "Recuperação" }',
                '{= N >= 9 ? "Aprovado" : N >= 6 ? "Recuperação" : "Excelente" }',
                '{= N >= 9 ? "Recuperação" : N >= 6 ? "Excelente" : "Aprovado" }'
              ],
              c: 0,
              mono: true,
              exp: 'Os testes são feitos de cima para baixo, e só o primeiro verdadeiro roda.',
              vars: { N: { de: 2, ate: 10 } }
            },
            {
              t: 'codigo',
              p: 'Mostre "Pode dirigir" se a idade for 18 ou mais, e "Não pode dirigir" se não for',
              start: `let idade = {I};
`,
              sol: `let idade = {I};
if (idade >= 18) {
  console.log("Pode dirigir");
} else {
  console.log("Não pode dirigir");
}`,
              dica: 'if (idade >= 18) { ... } else { ... }',
              exp: 'Cada vez que o exercício aparece, a idade muda: o código precisa funcionar para todas.',
              vars: { I: { de: 12, ate: 30 } }
            },
            {
              t: 'codigo',
              p: 'O frete é "Grátis" para compras de 150 ou mais. Abaixo disso, mostre "Frete: R$ 15"',
              start: `let compra = {V};
`,
              sol: `let compra = {V};
if (compra >= 150) {
  console.log("Grátis");
} else {
  console.log("Frete: R$ 15");
}`,
              dica: 'Compare compra com 150 usando >=.',
              exp: 'Regras de loja são ifs disfarçados.',
              vars: { V: { de: 50, ate: 300, passo: 10 } }
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
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `let idade = {I};
let temTitulo = {T};
console.log(idade >= 16 && temTitulo);`,
              ops: [
                '{= I >= 16 && T === "true" ? "true" : "false" }',
                '{= I >= 16 && T === "true" ? "false" : "true" }'
              ],
              c: 0,
              mono: true,
              exp: 'Com &&, os dois lados precisam ser verdadeiros.',
              vars: { I: { de: 14, ate: 30 }, T: ['true', 'false'] }
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log({A} > 10 || {B} > 10);',
              ops: [
                '{= A > 10 || B > 10 ? "true" : "false" }',
                '{= A > 10 || B > 10 ? "false" : "true" }'
              ],
              c: 0,
              mono: true,
              exp: 'Com ||, basta um dos lados ser verdadeiro.',
              vars: { A: { de: 1, ate: 20 }, B: { de: 1, ate: 20 } }
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
            },
            {
              t: 'codigo',
              p: 'Mostre "Meia-entrada" se a pessoa for estudante OU tiver menos de 18 anos. Senão, mostre "Inteira"',
              start: `let idade = {I};
let estudante = {EST};
`,
              sol: `let idade = {I};
let estudante = {EST};
if (estudante || idade < 18) {
  console.log("Meia-entrada");
} else {
  console.log("Inteira");
}`,
              dica: 'Use || entre as duas condições.',
              exp: 'Uma das duas basta para ter direito.',
              vars: { I: { de: 10, ate: 40 }, EST: ['true', 'false'] }
            },
            {
              t: 'codigo',
              p: 'Mostre "Fim de semana" se o dia for "sábado" ou "domingo". Senão, "Dia útil"',
              start: `let dia = "{D}";
`,
              sol: `let dia = "{D}";
if (dia === "sábado" || dia === "domingo") {
  console.log("Fim de semana");
} else {
  console.log("Dia útil");
}`,
              dica: 'Compare o dia com cada um dos dois textos, ligados por ||.',
              exp: 'Cada lado do || precisa ser uma comparação completa: dia === "sábado" || "domingo" não funciona.',
              vars: { D: ['segunda', 'sábado', 'quarta', 'domingo', 'sexta'] }
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
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `let op = "{OP}";
switch (op) {
  case "+":
    console.log(8 + 2);
    break;
  case "-":
    console.log(8 - 2);
    break;
  default:
    console.log("?");
}`,
              ops: [
                '{= OP === "+" ? "10" : OP === "-" ? "6" : "?" }',
                '{= OP === "+" ? "6" : OP === "-" ? "?" : "10" }',
                '{= OP === "+" ? "?" : OP === "-" ? "10" : "6" }'
              ],
              c: 0,
              mono: true,
              exp: 'Só roda o case igual ao valor de op; se nenhum bate, o default.',
              vars: { OP: ['+', '-', '*'] }
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
            },
            {
              t: 'codigo',
              p: 'Use switch para mostrar o nome do dia: 1 é Domingo, 2 é Segunda, 3 é Terça. Para o resto, mostre "Outro dia"',
              start: `let dia = {D};
`,
              sol: `let dia = {D};
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
}`,
              dica: 'Um case para cada dia, com break, e o default no fim.',
              exp: 'O default pega todos os outros valores.',
              vars: { D: { de: 1, ate: 6 } }
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
              t: 'escolha',
              p: 'Quantas linhas este laço mostra?',
              ops: ['{= B - A + 1 }', '{= B - A }', '{B}'],
              c: 0,
              exp: 'De {A} até {B}, contando os dois: {= B - A + 1 } números.',
              code: `for (let i = {A}; i <= {B}; i++) {
  console.log(i);
}`,
              vars: { A: { de: 2, ate: 5 }, B: { de: 8, ate: 15 } }
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
            },
            {
              t: 'codigo',
              p: 'Mostre os números de {A} a {B}, um por linha',
              start: '',
              sol: `for (let i = {A}; i <= {B}; i++) {
  console.log(i);
}`,
              dica: 'Comece o i em {A} e repita enquanto i <= {B}.',
              exp: 'Mudando o começo e o fim, o mesmo laço serve para qualquer intervalo.',
              vars: { A: { de: 1, ate: 10 }, B: { de: 12, ate: 20 } }
            },
            {
              t: 'codigo',
              p: 'Faça uma contagem regressiva de {N} até 1 e depois mostre "Já!"',
              start: '',
              sol: `for (let i = {N}; i >= 1; i--) {
  console.log(i);
}
console.log("Já!");`,
              dica: 'Comece em {N}, repita enquanto i >= 1 e use i--.',
              exp: 'O "Já!" fica fora do laço, para aparecer uma vez só.',
              vars: { N: { de: 3, ate: 10 } }
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
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `let n = {N};
let voltas = 0;
while (n > 1) {
  n = n / 2;
  voltas++;
}
console.log(voltas);`,
              ops: ['{= Math.log2(N) }', '{= N / 2 }', '{= Math.log2(N) + 1 }'],
              c: 0,
              mono: true,
              exp: 'A cada volta o n cai pela metade: {N}, {= N / 2 }, ... até chegar a 1.',
              vars: { N: [8, 16, 32, 64, 128] }
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
            },
            {
              t: 'codigo',
              p: 'Some os números de 1 a {N} com while e mostre o total',
              start: `let soma = 0;
let i = 1;
`,
              sol: `let soma = 0;
let i = 1;
while (i <= {N}) {
  soma += i;
  i++;
}
console.log(soma);`,
              dica: 'Repita enquanto i <= {N}, somando i e aumentando i.',
              exp: 'Sem o i++, o laço nunca terminaria.',
              vars: { N: { de: 10, ate: 200 } }
            },
            {
              t: 'codigo',
              p: 'Um saldo de {S} rende 10% ao ano (multiplique por 1.1). Em quantos anos ele passa de {= S * K }? Use while',
              start: `let saldo = {S};
let anos = 0;
`,
              sol: `let saldo = {S};
let anos = 0;
while (saldo <= {= S * K }) {
  saldo = saldo * 1.1;
  anos++;
}
console.log(anos);`,
              dica: 'Repita enquanto o saldo não passar do valor, contando os anos.',
              exp: 'Não dá para saber de antemão quantas voltas: é caso de while.',
              vars: { S: [100, 500, 1000], K: [2, 3, 5] }
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
              t: 'escolha',
              p: 'Qual é o último número que aparece?',
              ops: ['{= A - 1 }', '{A}', '10'],
              c: 0,
              exp: 'Quando i chega a {A}, o break para o laço antes do console.log.',
              code: `for (let i = 1; i <= 10; i++) {
  if (i === {A}) break;
  console.log(i);
}`,
              mono: true,
              vars: { A: { de: 3, ate: 9 } }
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
            },
            {
              t: 'codigo',
              p: 'Mostre os números de 1 a 30, mas pare (break) no primeiro múltiplo de {M}',
              start: '',
              sol: `for (let i = 1; i <= 30; i++) {
  if (i % {M} === 0) break;
  console.log(i);
}`,
              dica: 'Teste i % {M} === 0 antes de mostrar.',
              exp: 'O break sai do laço na hora.',
              vars: { M: { de: 4, ate: 9 } }
            },
            {
              t: 'codigo',
              p: 'Usando um laço dentro de outro, desenhe um retângulo de # com {L} linhas e {C} colunas',
              start: '',
              sol: `for (let l = 1; l <= {L}; l++) {
  let linha = "";
  for (let c = 1; c <= {C}; c++) {
    linha += "#";
  }
  console.log(linha);
}`,
              dica: 'O laço de dentro monta a linha com += "#"; o de fora mostra cada linha.',
              exp: 'São {L} × {C} = {= L * C } voltas do laço de dentro.',
              vars: { L: { de: 2, ate: 5 }, C: { de: 3, ate: 8 } }
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
            },
            {
              t: 'codigo',
              p: 'Mostre a tabuada do {N}, de 1 a 10, no formato "{N} x 1 = {N}"',
              start: '',
              sol: `const n = {N};
for (let i = 1; i <= 10; i++) {
  console.log(\`\${n} x \${i} = \${n * i}\`);
}`,
              dica: 'Um for de 1 a 10 e crases para montar cada linha.',
              exp: 'É o mesmo programa para qualquer número: só muda o n.',
              vars: { N: { de: 2, ate: 12 } }
            },
            {
              t: 'codigo',
              p: 'Mostre as tabuadas do 2 até o {N}, cada uma só de 1 a 3, no formato "2 x 1 = 2"',
              start: '',
              sol: `for (let n = 2; n <= {N}; n++) {
  for (let i = 1; i <= 3; i++) {
    console.log(\`\${n} x \${i} = \${n * i}\`);
  }
}`,
              dica: 'Um laço por fora para o número e outro por dentro para o multiplicador.',
              exp: 'Laços aninhados geram tabelas inteiras.',
              vars: { N: { de: 3, ate: 5 } }
            }
          ]
        }
      ]
    }
  ]
});
