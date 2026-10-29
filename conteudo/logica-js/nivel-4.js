/* Trilha Livre · Lógica de programação com JavaScript · Nível 4: Funções de verdade
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'logica-js',
  n: 4,
  titulo: 'Funções de verdade',
  desc: 'Organizar e reaproveitar código.',
  unidades: [
    {
      id: 'u5',
      titulo: 'Funções',
      conceito: 'function',
      desc: 'Dar nome a um pedaço de código e reaproveitar.',
      licoes: [
        {
          id: 'u5l1',
          titulo: 'Criando funções',
          pre: ['u2l1', 'u3l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Funções: dar nome a uma tarefa',
              blocos: [
                {
                  p: 'Uma função é um bloco de código com nome. Você escreve uma vez e usa quantas vezes quiser. O próprio `console.log` é uma função que já vem pronta.'
                },
                {
                  code: `function saudar(nome) {
  return "Olá, " + nome + "!";
}
console.log(saudar("Maria"));
console.log(saudar("João"));`
                },
                {
                  p: '`nome` é um parâmetro: um valor que a função recebe de fora. O `return` devolve o resultado para quem chamou a função, e a função termina ali.'
                },
                {
                  dica: 'Mostrar (`console.log`) e devolver (`return`) são coisas diferentes. Uma função que só mostra não entrega o valor para o resto do programa usar.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Para que serve uma função?',
              ops: [
                'Guardar um bloco de código para usar várias vezes',
                'Deixar o programa mais bonito',
                'Guardar só números'
              ],
              c: 0,
              exp: 'Você escreve uma vez e chama quantas vezes quiser.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `function dobro(n) {
  return n * 2;
}
console.log(dobro(4));`,
              mono: true,
              ops: ['8', '4', 'n * 2'],
              c: 0,
              exp: 'O 4 entra no lugar de n, e o return devolve 4 * 2.'
            },
            {
              t: 'complete',
              p: 'Complete para a função devolver o texto',
              code: `function saudar(nome) {
  ___ "Olá, " + nome;
}`,
              bank: ['return', 'console', 'give', 'send'],
              c: ['return'],
              exp: 'return devolve um valor para quem chamou a função.'
            },
            {
              t: 'ordene',
              p: 'Monte o programa que mostra a área de um quadrado de lado 3',
              lines: ['function area(l) {', '  return l * l;', '}', 'console.log(area(3));'],
              exp: 'Primeiro a função é criada, depois ela é usada.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `function triplo(n) {
  return n * 3;
}
console.log(triplo({A}) + 1);`,
              ops: ['{= A * 3 + 1 }', '{= (A + 1) * 3 }', '{= A * 3 }'],
              c: 0,
              mono: true,
              exp: 'A função devolve {= A * 3 }, e o + 1 é feito depois.',
              vars: { A: { de: 2, ate: 20 } }
            },
            {
              t: 'codigo',
              p: 'Crie a função areaRetangulo(base, altura) e mostre areaRetangulo({B}, {H})',
              start: '',
              sol: `function areaRetangulo(base, altura) {
  return base * altura;
}
console.log(areaRetangulo({B}, {H}));`,
              dica: 'function, dois parâmetros e return base * altura.',
              exp: 'Com a função pronta, calcular outra área é só chamar de novo.',
              vars: { B: { de: 2, ate: 20 }, H: { de: 2, ate: 20 } }
            },
            {
              t: 'codigo',
              p: 'Crie saudacao(nome), que devolve "Bom dia, NOME!", e mostre saudacao("{NOME}")',
              start: '',
              sol: `function saudacao(nome) {
  return \`Bom dia, \${nome}!\`;
}
console.log(saudacao("{NOME}"));`,
              dica: 'Use return com crases.',
              exp: 'A função devolve o texto; quem mostra é o console.log de fora.',
              vars: { NOME: ['Ana', 'Bruno', 'Carla', 'Davi', 'Elis', 'Fábio', 'Gal', 'Hugo'] }
            }
          ]
        },
        {
          id: 'u5l2',
          titulo: 'Desafios',
          pre: ['u3l1', 'u4l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Juntando tudo',
              blocos: [
                {
                  p: 'Agora você conhece as peças principais da lógica: variáveis guardam dados, `if` decide, laços repetem e funções organizam. Quase todo programa é uma combinação delas.'
                },
                {
                  p: 'Veja uma função que usa um laço e um `if` para contar quantos números pares existem até um limite:'
                },
                {
                  code: `function contarPares(limite) {
  let pares = 0;
  for (let i = 1; i <= limite; i++) {
    if (i % 2 === 0) {
      pares++;
    }
  }
  return pares;
}
console.log(contarPares(10)); // 5`
                },
                {
                  dica: 'Antes de escrever código, descreva a solução em português, passo a passo. Depois traduza cada passo para JavaScript.'
                }
              ]
            },
            {
              t: 'codigo',
              p: 'Crie a função media(a, b) e mostre media(6, 9)',
              start: `function media(a, b) {
  
}
`,
              saida: '7.5',
              dica: 'A média é (a + b) / 2. Não esqueça do return e dos parênteses.',
              sol: `function media(a, b) {
  return (a + b) / 2;
}
console.log(media(6, 9));`,
              exp: 'Sem os parênteses, a conta seria a + (b / 2). A ordem das operações vale aqui também.'
            },
            {
              t: 'codigo',
              p: 'Crie podeVotar(idade), que devolve true se idade >= 16. Mostre podeVotar(20) e depois podeVotar(15).',
              start: '',
              saida: `true
false`,
              dica: 'Você pode devolver a própria comparação: return idade >= 16;',
              sol: `function podeVotar(idade) {
  return idade >= 16;
}
console.log(podeVotar(20));
console.log(podeVotar(15));`,
              exp: 'Uma comparação já é um valor true ou false, então dá para devolvê-la direto.'
            },
            {
              t: 'codigo',
              p: 'Crie maior(a, b), que devolve o maior dos dois, e mostre maior({A}, {B})',
              start: '',
              sol: `function maior(a, b) {
  if (a > b) return a;
  return b;
}
console.log(maior({A}, {B}));`,
              dica: 'Compare a com b e devolva o maior.',
              exp: 'O return termina a função: o segundo return só roda se o primeiro não rodou.',
              vars: { A: { de: 1, ate: 99 }, B: { de: 1, ate: 99 } },
              se: 'A !== B'
            },
            {
              t: 'codigo',
              p: 'Crie contarAte(n), que mostra os números de 1 até n, e chame contarAte({N})',
              start: '',
              sol: `function contarAte(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
contarAte({N});`,
              dica: 'Um for dentro da função, usando o parâmetro n.',
              exp: 'Essa função mostra em vez de devolver: por isso é chamada sem console.log.',
              vars: { N: { de: 3, ate: 8 } }
            },
            {
              t: 'codigo',
              p: 'Crie ehPositivo(n), que devolve true se n for maior que zero. Mostre ehPositivo({A}) e depois ehPositivo(-{B})',
              start: '',
              sol: `function ehPositivo(n) {
  return n > 0;
}
console.log(ehPositivo({A}));
console.log(ehPositivo(-{B}));`,
              dica: 'A comparação n > 0 já é true ou false: dá para devolver direto.',
              exp: 'return n > 0 é mais curto que um if com dois returns.',
              vars: { A: { de: 1, ate: 50 }, B: { de: 1, ate: 50 } }
            }
          ]
        }
      ]
    },
    {
      id: 'n4u2',
      titulo: 'Funções avançadas',
      conceito: 'map · filter · reduce',
      desc: 'Escopo, funções curtas, funções como valores e recursão.',
      licoes: [
        {
          id: 'n4l1',
          titulo: 'Escopo e funções curtas',
          pre: ['u5l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Onde cada variável existe',
              blocos: [
                {
                  p: 'Uma variável criada dentro de uma função (ou dentro de chaves) só existe ali dentro. Isso se chama escopo. Já as variáveis de fora podem ser usadas dentro da função.'
                },
                {
                  code: `let taxa = 0.1;
function comTaxa(valor) {
  let total = valor + valor * taxa; // usa taxa, que é de fora
  return total;
}
console.log(comTaxa(100)); // 110
// console.log(total);  daria erro: total só existe na função`
                },
                {
                  p: 'Funções pequenas podem ser escritas de um jeito mais curto, as arrow functions:'
                },
                {
                  code: `const dobro = n => n * 2;
const soma = (a, b) => a + b;
console.log(dobro(5), soma(2, 3)); // 10 5`
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que acontece?',
              code: `function f() {
  let x = 5;
}
f();
console.log(x);`,
              ops: ['Dá erro: x não existe fora da função', 'Mostra 5', 'Mostra undefined'],
              c: 0,
              exp: 'x nasceu dentro de f e deixou de existir quando f terminou.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `let total = 10;
function somar() {
  total = total + 5;
}
somar();
console.log(total);`,
              mono: true,
              ops: ['15', '10', 'Dá erro'],
              c: 0,
              exp: 'total foi criada fora da função, então a função consegue mudar o valor dessa variável.'
            },
            {
              t: 'escolha',
              p: 'Qual linha é igual a `function triplo(n) { return n * 3; }`?',
              mono: true,
              ops: ['const triplo = n => n * 3;', 'const triplo = n * 3;', 'triplo => (n * 3);'],
              c: 0,
              exp: 'Na arrow function, o que vem depois da seta é devolvido automaticamente.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `let x = 10;
function muda() {
  let x = 20;
  return x;
}
console.log(muda(), x);`,
              ops: ['20 10', '20 20', '10 10'],
              c: 0,
              mono: true,
              exp: 'O x de dentro da função é outra variável, que só existe lá dentro.'
            },
            {
              t: 'codigo',
              p: 'Crie a arrow function areaRet(b, h) e mostre areaRet(4, 5)',
              start: '',
              saida: '20',
              dica: 'const areaRet = (b, h) => b * h;',
              sol: `const areaRet = (b, h) => b * h;
console.log(areaRet(4, 5));`,
              exp: 'Curta e direta.'
            },
            {
              t: 'codigo',
              p: 'Crie a arrow function quadrado(n) e mostre quadrado({A})',
              start: '',
              sol: `const quadrado = n => n * n;
console.log(quadrado({A}));`,
              dica: 'const quadrado = n => n * n;',
              exp: 'Com um parâmetro só, nem precisa de parênteses.',
              vars: { A: { de: 2, ate: 30 } }
            },
            {
              t: 'codigo',
              p: 'Escreva soma3(a, b, c) como arrow function de uma linha e mostre soma3({A}, {B}, {D})',
              start: '',
              sol: `const soma3 = (a, b, c) => a + b + c;
console.log(soma3({A}, {B}, {D}));`,
              dica: 'Com mais de um parâmetro, eles vão entre parênteses.',
              exp: 'Sem chaves, o resultado da conta é devolvido sozinho.',
              vars: { A: { de: 1, ate: 20 }, B: { de: 1, ate: 20 }, D: { de: 1, ate: 20 } }
            }
          ]
        },
        {
          id: 'n4l2',
          titulo: 'map, filter e reduce',
          pre: ['n3l3'],
          exs: [
            {
              t: 'texto',
              titulo: 'Funções que recebem funções',
              blocos: [
                {
                  p: 'Arrays têm ferramentas que recebem uma função e aplicam ela em cada item. As três mais usadas:'
                },
                {
                  passos: [
                    'map transforma cada item e devolve uma lista nova do mesmo tamanho',
                    'filter escolhe os itens que passam num teste',
                    'reduce junta todos os itens em um valor só'
                  ]
                },
                {
                  code: `let precos = [10, 25, 40];
console.log(precos.map(p => p * 2));              // [20, 50, 80]
console.log(precos.filter(p => p > 20));          // [25, 40]
console.log(precos.reduce((soma, p) => soma + p, 0)); // 75`
                },
                {
                  p: 'No reduce, a função recebe o acumulado até agora e o item da vez. O 0 no final é o valor inicial do acumulado.'
                },
                {
                  dica: 'map, filter e reduce substituem muitos laços for. O código fica mais curto e diz direto o que você quer.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log([1, 2, 3].map(n => n * 10));',
              mono: true,
              ops: ['[10,20,30]', '60', '[1,2,3,10]'],
              c: 0,
              exp: 'Cada item foi multiplicado por 10.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log([5, 12, 8, 20].filter(n => n > 10));',
              mono: true,
              ops: ['[12,20]', '[5,8]', '2'],
              c: 0,
              exp: 'Só 12 e 20 passam no teste n > 10.'
            },
            {
              t: 'complete',
              p: 'Complete para somar a lista',
              code: 'let soma = [2, 4, 6].___((acc, n) => acc + n, 0);',
              bank: ['reduce', 'map', 'filter', 'sum'],
              c: ['reduce'],
              exp: 'reduce reduz a lista a um valor: 12.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log({L}.filter(n => n > {K}));',
              ops: [
                '{= JSON.stringify(JSON.parse(L).filter(n => n > K)) }',
                '{= JSON.stringify(JSON.parse(L).filter(n => n <= K)) }',
                '{= JSON.parse(L).filter(n => n > K).length }'
              ],
              c: 0,
              mono: true,
              exp: 'filter fica só com os que passam no teste.',
              vars: {
                L: [
                  '[3, 8, 5, 12, 7]',
                  '[10, 4, 7, 2, 9]',
                  '[6, 15, 2, 11, 4]',
                  '[20, 13, 8, 17, 1]'
                ],
                K: { de: 5, ate: 10 }
              }
            },
            {
              t: 'codigo',
              p: 'Use map para dar 10% de desconto em cada preço e mostre a lista nova',
              start: `let precos = [10, 25, 40];
`,
              saida: '[9,22.5,36]',
              dica: 'Cada preço vira p * 0.9.',
              sol: `let precos = [10, 25, 40];
console.log(precos.map(p => p * 0.9));`,
              exp: 'A lista original continua igual; map cria uma nova.'
            },
            {
              t: 'codigo',
              p: 'Use filter para ficar só com os números pares e mostre a lista nova',
              start: `const nums = {L};
`,
              sol: `const nums = {L};
console.log(nums.filter(n => n % 2 === 0));`,
              dica: 'filter(n => n % 2 === 0)',
              exp: 'A lista original continua igual: filter cria outra.',
              vars: {
                L: [
                  '[3, 8, 5, 12, 7]',
                  '[10, 4, 7, 2, 9]',
                  '[6, 15, 2, 11, 4]',
                  '[20, 13, 8, 17, 1]'
                ]
              }
            },
            {
              t: 'codigo',
              p: 'Use reduce para somar os preços e mostre o total',
              start: `const precos = {L};
`,
              sol: `const precos = {L};
console.log(precos.reduce((soma, p) => soma + p, 0));`,
              dica: 'reduce((soma, p) => soma + p, 0)',
              exp: 'O 0 é o começo da soma.',
              vars: {
                L: [
                  '[3, 8, 5, 12, 7]',
                  '[10, 4, 7, 2, 9]',
                  '[6, 15, 2, 11, 4]',
                  '[20, 13, 8, 17, 1]'
                ]
              }
            }
          ]
        },
        {
          id: 'n4l3',
          titulo: 'Recursão',
          pre: ['u3l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Uma função que chama a si mesma',
              blocos: [
                {
                  p: 'Recursão é quando uma função resolve um problema chamando a si mesma com uma versão menor dele. Toda recursão precisa de um caso base: a situação em que ela para.'
                },
                {
                  p: 'O fatorial é o exemplo clássico: 5! = 5 × 4 × 3 × 2 × 1. Repare que 5! é 5 × 4!, e 4! é 4 × 3!, e assim por diante, até 1! = 1.'
                },
                {
                  code: `function fatorial(n) {
  if (n <= 1) return 1;       // caso base
  return n * fatorial(n - 1); // chamada menor
}
console.log(fatorial(5)); // 120`
                },
                {
                  dica: 'Sem caso base, a função chama a si mesma sem parar até dar o erro "Maximum call stack size exceeded".'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que é o caso base?',
              ops: [
                'A condição que faz a recursão parar',
                'A primeira linha de qualquer programa',
                'O maior valor possível'
              ],
              c: 0,
              exp: 'Sem ele, a recursão nunca termina.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `function f(n) {
  if (n === 0) return 0;
  return n + f(n - 1);
}
console.log(f(4));`,
              mono: true,
              ops: ['10', '4', '24'],
              c: 0,
              exp: '4 + 3 + 2 + 1 + 0 = 10.'
            },
            {
              t: 'codigo',
              p: 'Complete a função fatorial usando recursão e mostre fatorial(6)',
              start: `function fatorial(n) {
  
}
console.log(fatorial(6));
`,
              saida: '720',
              dica: 'Caso base: se n <= 1, devolve 1. Senão, devolve n * fatorial(n - 1).',
              sol: `function fatorial(n) {
  if (n <= 1) return 1;
  return n * fatorial(n - 1);
}
console.log(fatorial(6));`,
              exp: '6 × 5 × 4 × 3 × 2 × 1 = 720.'
            },
            {
              t: 'codigo',
              p: 'Fibonacci: cada número é a soma dos dois anteriores (0, 1, 1, 2, 3, 5...). Faça fib(n) recursivo e mostre fib(10)',
              start: `function fib(n) {
  
}
console.log(fib(10));
`,
              saida: '55',
              dica: 'Se n < 2, devolve n. Senão, devolve fib(n - 1) + fib(n - 2).',
              sol: `function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(10));`,
              exp: 'Essa versão é elegante, mas lenta para números grandes. No Nível 5 você vai entender por quê.'
            },
            {
              t: 'codigo',
              p: 'Escreva somaAte(n) recursiva, que soma de 1 até n, e mostre somaAte({N})',
              start: `function somaAte(n) {
  
}
console.log(somaAte({N}));
`,
              sol: `function somaAte(n) {
  if (n <= 0) return 0;
  return n + somaAte(n - 1);
}
console.log(somaAte({N}));`,
              dica: 'Caso base: n <= 0 devolve 0. Senão, n + somaAte(n - 1).',
              exp: 'É o fatorial com soma no lugar da multiplicação.',
              vars: { N: { de: 5, ate: 100 } }
            },
            {
              t: 'codigo',
              p: 'Escreva potencia(b, e) recursiva, sem usar **, e mostre potencia({B}, {EX})',
              start: `function potencia(b, e) {
  
}
console.log(potencia({B}, {EX}));
`,
              sol: `function potencia(b, e) {
  if (e === 0) return 1;
  return b * potencia(b, e - 1);
}
console.log(potencia({B}, {EX}));`,
              dica: 'Caso base: expoente 0 dá 1. Senão, b vezes potencia(b, e - 1).',
              exp: 'b elevado a e é b vezes b elevado a e − 1.',
              vars: { B: { de: 2, ate: 5 }, EX: { de: 2, ate: 8 } }
            }
          ]
        },
        {
          id: 'n4l4',
          titulo: 'find, some, every e sort',
          pre: ['n3l3', 'n3l5'],
          exs: [
            {
              t: 'texto',
              titulo: 'Perguntas sobre listas',
              blocos: [
                { p: 'Mais ferramentas que recebem uma função de teste:' },
                {
                  passos: [
                    'find devolve o primeiro item que passa no teste (ou undefined)',
                    'some responde se algum item passa',
                    'every responde se todos os itens passam'
                  ]
                },
                {
                  code: `const nums = [4, 9, 12, 15];
console.log(nums.find(n => n > 10));  // 12
console.log(nums.some(n => n > 14));  // true
console.log(nums.every(n => n > 3));  // true`
                },
                {
                  p: 'O `sort` também aceita uma função, o que permite ordenar objetos por qualquer informação:'
                },
                {
                  code: `const produtos = [
  { nome: "Mouse", preco: 60 },
  { nome: "Teclado", preco: 150 },
  { nome: "Cabo", preco: 25 }
];
produtos.sort((a, b) => a.preco - b.preco);
console.log(produtos[0].nome); // Cabo, o mais barato`
                },
                { dica: 'Para inverter a ordem, troque para `b.preco - a.preco`.' }
              ]
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log([4, 9, 12, 15].find(n => n > 10));',
              mono: true,
              ops: ['12', '[12,15]', 'true'],
              c: 0,
              exp: 'find para no primeiro que passa. Quem devolve todos é o filter.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log([2, 4, 7].every(n => n % 2 === 0));',
              mono: true,
              ops: ['false', 'true', '[2,4]'],
              c: 0,
              exp: 'O 7 não é par, então nem todos passam.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log([2, 4, 7].some(n => n > 5));',
              mono: true,
              ops: ['true', 'false', '7'],
              c: 0,
              exp: 'O 7 é maior que 5, e basta um.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `const idades = {L};
console.log(idades.every(i => i >= 18));`,
              ops: [
                '{= JSON.parse(L).every(i => i >= 18) ? "true" : "false" }',
                '{= JSON.parse(L).every(i => i >= 18) ? "false" : "true" }'
              ],
              c: 0,
              mono: true,
              exp: 'every só é true se todos passarem.',
              vars: { L: ['[18, 25, 40]', '[17, 30, 22]', '[19, 18, 65]', '[12, 15, 50]'] }
            },
            {
              t: 'codigo',
              p: 'Ordene por preço e mostre o nome do mais barato e depois o do mais caro',
              start: `const produtos = [
  { nome: "Notebook", preco: 3500 },
  { nome: "Mouse", preco: 60 },
  { nome: "Teclado", preco: 150 }
];
`,
              saida: `Mouse
Notebook`,
              dica: 'Depois do sort crescente, o mais barato está na posição 0 e o mais caro na posição produtos.length - 1.',
              sol: `const produtos = [
  { nome: "Notebook", preco: 3500 },
  { nome: "Mouse", preco: 60 },
  { nome: "Teclado", preco: 150 }
];
produtos.sort((a, b) => a.preco - b.preco);
console.log(produtos[0].nome);
console.log(produtos[produtos.length - 1].nome);`,
              exp: 'É exatamente o que acontece quando você escolhe "menor preço" numa loja online.'
            },
            {
              t: 'codigo',
              p: 'Usando find, mostre o primeiro número da lista maior que {K}',
              start: `const nums = [3, 8, 12, 5, 20, 7];
`,
              sol: `const nums = [3, 8, 12, 5, 20, 7];
console.log(nums.find(n => n > {K}));`,
              dica: 'find(n => n > {K})',
              exp: 'find para no primeiro que passa.',
              vars: { K: [4, 9, 10, 15] }
            },
            {
              t: 'codigo',
              p: 'Ordene do maior para o menor e mostre a lista',
              start: `const pontos = {L};
`,
              sol: `const pontos = {L};
console.log(pontos.sort((a, b) => b - a));`,
              dica: 'sort((a, b) => b - a)',
              exp: 'Trocando a ordem da subtração, inverte a ordenação.',
              vars: {
                L: [
                  '[3, 8, 5, 12, 7]',
                  '[10, 4, 7, 2, 9]',
                  '[6, 15, 2, 11, 4]',
                  '[20, 13, 8, 17, 1]'
                ]
              }
            }
          ]
        },
        {
          id: 'n4l5',
          titulo: 'Mini projeto: nota do SiSU',
          pre: ['n3l5'],
          exs: [
            {
              t: 'texto',
              titulo: 'Projeto: média ponderada',
              blocos: [
                {
                  p: 'No SiSU, cada curso dá um peso para cada área do ENEM, e a nota final é uma média ponderada: cada nota é multiplicada pelo seu peso, tudo é somado e o total é dividido pela soma dos pesos.'
                },
                {
                  code: 'nota final = (nota1 × peso1 + nota2 × peso2 + ...) / (peso1 + peso2 + ...)',
                  semTeste: true
                },
                {
                  p: 'Guardando as notas e os pesos em objetos com as mesmas chaves, dá para percorrer as áreas com `for...in`:'
                },
                {
                  code: `const notas = { matematica: 700, redacao: 900 };
const pesos = { matematica: 3, redacao: 1 };
let soma = 0, somaPesos = 0;
for (const area in notas) {
  soma += notas[area] * pesos[area];
  somaPesos += pesos[area];
}
console.log(soma / somaPesos); // 750`
                },
                {
                  dica: 'Os pesos usados aqui são exemplos. Cada universidade define os pesos de cada curso.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que é uma média ponderada?',
              ops: [
                'Uma média em que alguns valores contam mais que outros',
                'A média só das maiores notas',
                'A soma de todas as notas'
              ],
              c: 0,
              exp: 'O peso diz quanto cada valor conta.'
            },
            {
              t: 'escolha',
              p: 'Nota 10 com peso 1 e nota 4 com peso 2. Qual é a média ponderada?',
              ops: ['6', '7', '5'],
              c: 0,
              exp: '(10 × 1 + 4 × 2) / (1 + 2) = 18 / 3 = 6. A média simples daria 7.'
            },
            {
              t: 'escolha',
              p: 'Notas 700 (peso {P1}) e 900 (peso {P2}). Qual é a média ponderada?',
              ops: [
                '{= ((700 * P1 + 900 * P2) / (P1 + P2)).toFixed(1) }',
                '800.0',
                '{= ((700 * P2 + 900 * P1) / (P1 + P2)).toFixed(1) }'
              ],
              c: 0,
              exp: '(700 × {P1} + 900 × {P2}) ÷ ({P1} + {P2}).',
              vars: { P1: [1, 2, 3], P2: [1, 2, 3] },
              se: 'P1 !== P2'
            },
            {
              t: 'codigo',
              p: 'Complete mediaPonderada(notas, pesos) e mostre a nota para os dois cursos',
              start: `const notas = { linguagens: 600, humanas: 640, natureza: 560, matematica: 720, redacao: 900 };
const engenharia = { linguagens: 1, humanas: 1, natureza: 2, matematica: 3, redacao: 1 };
const direito = { linguagens: 2, humanas: 3, natureza: 1, matematica: 1, redacao: 2 };

function mediaPonderada(notas, pesos) {
  
}
console.log("Engenharia: " + mediaPonderada(notas, engenharia).toFixed(1));
console.log("Direito: " + mediaPonderada(notas, direito).toFixed(1));
`,
              saida: `Engenharia: 677.5
Direito: 688.9`,
              dica: 'Use o for...in da leitura dentro da função e devolva soma / somaPesos.',
              sol: `const notas = { linguagens: 600, humanas: 640, natureza: 560, matematica: 720, redacao: 900 };
const engenharia = { linguagens: 1, humanas: 1, natureza: 2, matematica: 3, redacao: 1 };
const direito = { linguagens: 2, humanas: 3, natureza: 1, matematica: 1, redacao: 2 };

function mediaPonderada(notas, pesos) {
  let soma = 0, somaPesos = 0;
  for (const area in notas) {
    soma += notas[area] * pesos[area];
    somaPesos += pesos[area];
  }
  return soma / somaPesos;
}
console.log("Engenharia: " + mediaPonderada(notas, engenharia).toFixed(1));
console.log("Direito: " + mediaPonderada(notas, direito).toFixed(1));`,
              exp: 'Mesmas notas, resultados diferentes: os pesos mudam tudo. Uma função bem feita resolve para qualquer curso.'
            },
            {
              t: 'codigo',
              p: 'Mostre a média ponderada de matemática ({M}, peso {PM}) e redação ({R}, peso {PR}), com uma casa decimal',
              start: `const notas = { matematica: {M}, redacao: {R} };
const pesos = { matematica: {PM}, redacao: {PR} };
`,
              sol: `const notas = { matematica: {M}, redacao: {R} };
const pesos = { matematica: {PM}, redacao: {PR} };
let soma = 0, somaPesos = 0;
for (const area in notas) {
  soma += notas[area] * pesos[area];
  somaPesos += pesos[area];
}
console.log((soma / somaPesos).toFixed(1));`,
              dica: 'É o laço for...in da leitura, com toFixed(1) no fim.',
              exp: 'O mesmo código serve para quantas áreas existirem.',
              vars: {
                M: { de: 500, ate: 900, passo: 20 },
                R: { de: 500, ate: 980, passo: 20 },
                PM: [2, 3, 4],
                PR: [1, 2]
              }
            }
          ]
        }
      ]
    }
  ]
});
