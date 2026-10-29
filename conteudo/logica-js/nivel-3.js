/* Trilha Livre · Lógica de programação com JavaScript · Nível 3: Dados
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'logica-js',
  n: 3,
  titulo: 'Dados',
  desc: 'Textos, listas, objetos e tabelas.',
  unidades: [
    {
      id: 'n3u1',
      titulo: 'Textos e tipos',
      conceito: '.length · Number()',
      desc: 'Trabalhar com textos e converter valores.',
      licoes: [
        {
          id: 'n3l1',
          titulo: 'Trabalhando com textos',
          pre: ['u2l1', 'u4l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Textos têm superpoderes',
              blocos: [
                {
                  p: 'Textos (strings) vêm com ferramentas prontas. `.length` dá o tamanho. `.toUpperCase()` e `.toLowerCase()` mudam para maiúsculas e minúsculas. `.includes()` diz se um pedaço aparece no texto.'
                },
                {
                  p: 'Cada letra tem uma posição, e a contagem começa do zero. Com `.slice(início, fim)` você recorta um pedaço: ele pega do início até antes do fim.'
                },
                {
                  code: `let p = "Brasil";
console.log(p.length);         // 6
console.log(p[0]);             // B
console.log(p.toUpperCase());  // BRASIL
console.log(p.slice(0, 3));    // Bra
console.log(p.includes("sil")); // true`
                },
                {
                  dica: 'A última letra de qualquer texto está na posição `texto.length - 1`.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log("Recife".length);',
              mono: true,
              ops: ['6', '5', '7'],
              c: 0,
              exp: 'R-e-c-i-f-e: 6 caracteres.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log("banana"[1]);',
              mono: true,
              ops: ['a', 'b', 'n'],
              c: 0,
              exp: 'A posição 0 é o b. A posição 1 é o primeiro a.'
            },
            {
              t: 'complete',
              p: 'Complete para mostrar PERNAMBUCO',
              code: 'console.log("pernambuco".___());',
              bank: ['toUpperCase', 'upper', 'maiusculo', 'toLowerCase'],
              c: ['toUpperCase'],
              exp: 'Os nomes das ferramentas são em inglês: upper case quer dizer maiúsculas.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log("Florianópolis".slice(0, 5));',
              mono: true,
              ops: ['Flori', 'Floria', 'loria'],
              c: 0,
              exp: 'Pega das posições 0 a 4. A posição 5 fica de fora.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `let p = "{PAL}";
console.log(p.length);`,
              ops: ['{= PAL.length }', '{= PAL.length - 1 }', '{= PAL.length + 1 }'],
              c: 0,
              mono: true,
              exp: 'length conta todas as letras, inclusive as com acento.',
              vars: { PAL: ['Brasil', 'Paraná', 'Fortaleza', 'Teresina', 'Macapá', 'Rio'] }
            },
            {
              t: 'codigo',
              p: 'Conte quantas letras a existem na frase',
              start: `let frase = "programar é para todo mundo";
`,
              saida: '4',
              dica: 'Percorra a frase com um for de 0 até antes de frase.length e compare frase[i] === "a".',
              sol: `let frase = "programar é para todo mundo";
let conta = 0;
for (let i = 0; i < frase.length; i++) {
  if (frase[i] === "a") {
    conta++;
  }
}
console.log(conta);`,
              exp: 'Percorrer um texto letra por letra é a base de muitos algoritmos.'
            },
            {
              t: 'codigo',
              p: 'Mostre a primeira e a última letra da palavra, juntas',
              start: `let palavra = "{PAL}";
`,
              sol: `let palavra = "{PAL}";
console.log(palavra[0] + palavra[palavra.length - 1]);`,
              dica: 'A última está em palavra.length - 1.',
              exp: 'A posição da última letra muda com o tamanho da palavra: por isso o length.',
              vars: { PAL: ['Brasil', 'Paraná', 'Fortaleza', 'Teresina', 'Macapá', 'Salvador'] }
            }
          ]
        },
        {
          id: 'n3l2',
          titulo: 'Conversão de tipos',
          pre: ['u1l2', 'u2l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Número ou texto?',
              blocos: [
                {
                  p: 'Todo valor tem um tipo. `typeof` mostra qual é: `"number"` para números, `"string"` para textos, `"boolean"` para true e false.'
                },
                {
                  code: `console.log(typeof 42);    // number
console.log(typeof "42");  // string
console.log("2" + 2);       // 22
console.log("2" * 2);       // 4`
                },
                {
                  p: 'Repare: com `+`, se um lado for texto, o JavaScript junta. Com `*`, ele tenta converter para número. Para não depender da sorte, converta você mesmo: `Number("42")` vira número e `String(42)` vira texto.'
                },
                {
                  code: `let digitado = "19";
console.log(Number(digitado) + 1); // 20
console.log(Number("cinco"));      // NaN`
                },
                {
                  dica: 'NaN quer dizer "Not a Number": a conversão falhou. Dados digitados pelo usuário quase sempre chegam como texto, então converter é uma tarefa diária.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log("2" + 2);',
              mono: true,
              ops: ['22', '4', 'Dá erro'],
              c: 0,
              exp: 'Um dos lados é texto, então o + junta os dois.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log(typeof "10");',
              mono: true,
              ops: ['string', 'number', 'text'],
              c: 0,
              exp: 'Está entre aspas, então é texto, mesmo sendo dígitos.'
            },
            {
              t: 'complete',
              p: 'Complete para mostrar 20',
              code: `let idade = "19";
console.log(___(idade) + 1);`,
              bank: ['Number', 'String', 'typeof', 'text'],
              c: ['Number'],
              exp: 'Number() transforma o texto "19" no número 19.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log(Number("cinco"));',
              mono: true,
              ops: ['NaN', '5', '0'],
              c: 0,
              exp: 'O JavaScript não entende números escritos por extenso.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log("{A}" + {B});',
              ops: ['{A}{B}', '{= A + B }', 'NaN'],
              c: 0,
              mono: true,
              exp: 'Com um lado texto, o + junta.',
              vars: { A: { de: 1, ate: 9 }, B: { de: 1, ate: 9 } }
            },
            {
              t: 'codigo',
              p: 'a e b chegaram como texto. Mostre a soma deles: 10',
              start: `let a = "7";
let b = "3";
`,
              saida: '10',
              dica: 'Converta cada um com Number() antes de somar.',
              sol: `let a = "7";
let b = "3";
console.log(Number(a) + Number(b));`,
              exp: 'Sem a conversão, o resultado seria "73".'
            },
            {
              t: 'codigo',
              p: 'A idade chegou como texto. Mostre a idade daqui a {K} anos',
              start: `let idade = "{I}";
`,
              sol: `let idade = "{I}";
console.log(Number(idade) + {K});`,
              dica: 'Converta com Number() antes de somar.',
              exp: 'Sem converter, "{I}" + {K} daria {I}{K}.',
              vars: { I: { de: 12, ate: 60 }, K: { de: 2, ate: 10 } }
            }
          ]
        }
      ]
    },
    {
      id: 'n3u2',
      titulo: 'Listas',
      conceito: '[ ]',
      desc: 'Guardar vários valores em uma variável só.',
      licoes: [
        {
          id: 'n3l3',
          titulo: 'Arrays',
          pre: ['u2l1', 'u4l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Uma variável, muitos valores',
              blocos: [
                {
                  p: 'Um array é uma lista de valores entre colchetes. Assim como nas letras de um texto, as posições começam do zero.'
                },
                {
                  code: `let frutas = ["caju", "manga", "acerola"];
console.log(frutas[0]);      // caju
console.log(frutas.length);  // 3
frutas.push("cupuaçu");       // adiciona no fim
console.log(frutas);`
                },
                {
                  p: '`push` adiciona no fim e `pop` tira o último. Para passar por todos os itens, use um `for` com índice ou o `for...of`, que entrega cada item direto:'
                },
                {
                  code: `let notas = [7, 9, 5];
let soma = 0;
for (const n of notas) {
  soma = soma + n;
}
console.log(soma); // 21`
                },
                {
                  dica: 'Para achar o maior valor, comece supondo que o primeiro é o maior e vá comparando com os outros.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `let frutas = ["caju", "manga", "acerola"];
console.log(frutas[1]);`,
              mono: true,
              ops: ['manga', 'caju', 'acerola'],
              c: 0,
              exp: 'Posição 0 é caju, posição 1 é manga.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `let n = [4, 8, 15];
console.log(n.length);`,
              mono: true,
              ops: ['3', '2', '15'],
              c: 0,
              exp: 'length conta os itens, não a última posição.'
            },
            {
              t: 'complete',
              p: 'Complete para adicionar feijão à lista',
              code: `let lista = ["arroz"];
lista.___("feijão");`,
              bank: ['push', 'add', 'pop', 'insert'],
              c: ['push'],
              exp: 'push empurra um item para o fim da lista.'
            },
            {
              t: 'ordene',
              p: 'Monte o programa que soma os números da lista',
              lines: [
                'let soma = 0;',
                'for (const n of [7, 9, 5]) {',
                '  soma = soma + n;',
                '}',
                'console.log(soma);'
              ],
              exp: 'O acumulador nasce antes do laço e é mostrado depois dele.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `let l = {L};
console.log(l[{I}]);`,
              ops: [
                '{= JSON.parse(L)[I] }',
                '{= JSON.parse(L)[I + 1] }',
                '{= JSON.parse(L)[I - 1] }'
              ],
              c: 0,
              mono: true,
              exp: 'As posições começam do zero: l[{I}] é o item número {= I + 1 }.',
              vars: {
                L: [
                  '[3, 8, 5, 12, 7]',
                  '[10, 4, 7, 2, 9]',
                  '[6, 15, 2, 11, 4]',
                  '[20, 13, 8, 17, 1]'
                ],
                I: { de: 1, ate: 3 }
              }
            },
            {
              t: 'codigo',
              p: 'Mostre a maior temperatura da lista, sem usar Math.max',
              start: `let temps = [28, 35, 31, 22, 33];
`,
              saida: '35',
              dica: 'Crie maior = temps[0] e, para cada temperatura, troque maior se ela for maior.',
              sol: `let temps = [28, 35, 31, 22, 33];
let maior = temps[0];
for (const t of temps) {
  if (t > maior) {
    maior = t;
  }
}
console.log(maior);`,
              exp: 'Esse padrão serve para menor valor, palavra mais longa, produto mais caro e muito mais.'
            },
            {
              t: 'codigo',
              p: 'Mostre a média das notas da lista',
              start: `let notas = {L};
`,
              sol: `let notas = {L};
let soma = 0;
for (const n of notas) {
  soma = soma + n;
}
console.log(soma / notas.length);`,
              dica: 'Some com um for...of e divida por notas.length.',
              exp: 'Usando length, o código funciona com listas de qualquer tamanho.',
              vars: { L: ['[7, 8, 9]', '[5, 6, 10, 7]', '[10, 8, 6, 4, 2]', '[9, 3]'] }
            }
          ]
        },
        {
          id: 'n3l4',
          titulo: 'Buscar em listas',
          pre: ['u3l1', 'u4l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Procurando itens',
              blocos: [
                {
                  p: '`includes` responde se um item está na lista (true ou false). `indexOf` diz em que posição ele está, ou `-1` se não encontrar.'
                },
                {
                  code: `let estados = ["SP", "RJ", "MG"];
console.log(estados.includes("RJ")); // true
console.log(estados.indexOf("MG"));  // 2
console.log(estados.indexOf("BA"));  // -1`
                },
                {
                  p: 'Para perguntas mais complexas, como "quantos são maiores de idade?", você combina um laço, um if e um contador.'
                },
                {
                  code: `let idades = [12, 19, 25, 15];
let maiores = 0;
for (const idade of idades) {
  if (idade >= 18) maiores++;
}
console.log(maiores); // 2`
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log(["sp", "rj", "mg"].indexOf("rj"));',
              mono: true,
              ops: ['1', '2', 'true'],
              c: 0,
              exp: 'rj está na posição 1.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log(["sp", "rj"].indexOf("ba"));',
              mono: true,
              ops: ['-1', '0', 'undefined'],
              c: 0,
              exp: '-1 é o jeito de dizer "não encontrei".'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log([3, 7].includes(7));',
              mono: true,
              ops: ['true', '1', '7'],
              c: 0,
              exp: 'includes sempre responde true ou false.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `let l = ["SP", "RJ", "MG", "BA"];
console.log(l.indexOf("{UF}"));`,
              ops: [
                '{= ["SP", "RJ", "MG", "BA"].indexOf(UF) }',
                '{= ["SP", "RJ", "MG", "BA"].indexOf(UF) + 1 }',
                'false'
              ],
              c: 0,
              mono: true,
              exp: 'indexOf dá a posição, começando do zero, ou -1 se não achar.',
              vars: { UF: ['RJ', 'MG', 'BA', 'PE'] }
            },
            {
              t: 'codigo',
              p: 'Conte quantas pessoas têm 18 anos ou mais',
              start: `let idades = [15, 22, 17, 30, 16, 41];
`,
              saida: '3',
              dica: 'Contador começando em 0, laço pela lista e if com >= 18.',
              sol: `let idades = [15, 22, 17, 30, 16, 41];
let conta = 0;
for (const idade of idades) {
  if (idade >= 18) conta++;
}
console.log(conta);`,
              exp: '22, 30 e 41.'
            },
            {
              t: 'codigo',
              p: 'Conte quantas notas são maiores ou iguais a {M}',
              start: `let notas = [4, 7.5, 9, 6, 3, 8, 5.5];
`,
              sol: `let notas = [4, 7.5, 9, 6, 3, 8, 5.5];
let cont = 0;
for (const n of notas) {
  if (n >= {M}) cont++;
}
console.log(cont);`,
              dica: 'Um laço, um if e um contador.',
              exp: 'É o mesmo padrão da contagem de maiores de idade.',
              vars: { M: [5, 6, 7] }
            },
            {
              t: 'codigo',
              p: 'Mostre "achou" se {X} estiver na lista, e "não achou" se não estiver',
              start: `let numeros = [3, 8, 15, 21, 42];
`,
              sol: `let numeros = [3, 8, 15, 21, 42];
if (numeros.includes({X})) {
  console.log("achou");
} else {
  console.log("não achou");
}`,
              dica: 'includes devolve true ou false.',
              exp: 'includes responde sim ou não; indexOf diz também onde.',
              vars: { X: [8, 10, 21, 30, 42] }
            }
          ]
        },
        {
          id: 'n3l7',
          titulo: 'Mais ferramentas de texto',
          pre: ['n3l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Cortar, juntar e limpar',
              blocos: [
                {
                  p: '`split` corta um texto e devolve uma lista. `join` faz o contrário: junta uma lista em um texto. `trim` tira os espaços das pontas. `replaceAll` troca todas as ocorrências de um pedaço.'
                },
                {
                  code: `console.log("a,b,c".split(","));          // ["a","b","c"]
console.log(["São", "Paulo"].join(" "));   // São Paulo
console.log("  oi  ".trim());              // oi
console.log("12.345.678".replaceAll(".", "")); // 12345678`
                },
                {
                  p: 'Combinando essas ferramentas, dá para resolver muita coisa. Para contar palavras, por exemplo:'
                },
                {
                  code: `const frase = "o rato roeu a roupa";
console.log(frase.split(" ").length); // 5`
                },
                {
                  dica: '`startsWith` e `endsWith` dizem se um texto começa ou termina com um pedaço. Úteis para conferir extensões de arquivo, como ".pdf".'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log("a,b,c".split(","));',
              mono: true,
              ops: ['["a","b","c"]', '"abc"', '["a,b,c"]'],
              c: 0,
              exp: 'split corta onde encontra a vírgula.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log(["São", "Paulo"].join(" "));',
              mono: true,
              ops: ['São Paulo', 'SãoPaulo', '["São Paulo"]'],
              c: 0,
              exp: 'join juntou os itens usando um espaço entre eles.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log("  oi  ".trim().length);',
              mono: true,
              ops: ['2', '6', '4'],
              c: 0,
              exp: 'Sem os espaços das pontas, sobra "oi".'
            },
            {
              t: 'complete',
              p: 'Complete para tirar o traço do CEP',
              code: `let cep = "12345-678";
console.log(cep.___("-", "")); // 12345678`,
              bank: ['replace', 'split', 'join', 'trim'],
              c: ['replace'],
              exp: 'replace troca a primeira ocorrência; replaceAll troca todas.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log("{FR}".split(" ").length);',
              ops: ['{= FR.split(" ").length }', '{= FR.length }', '1'],
              c: 0,
              mono: true,
              exp: 'split(" ") corta nos espaços: cada pedaço é uma palavra.',
              vars: {
                FR: [
                  'o rato roeu a roupa',
                  'bom dia',
                  'programar é para todo mundo',
                  'trilha livre'
                ]
              }
            },
            {
              t: 'codigo',
              p: 'Transforme o nome nas iniciais com ponto: M.C.S.',
              start: `let nome = "Maria Clara Souza";
`,
              saida: 'M.C.S.',
              dica: 'split(" ") separa as palavras. Percorra a lista com for...of e vá juntando num texto a primeira letra de cada palavra e um ponto.',
              sol: `let nome = "Maria Clara Souza";
let iniciais = "";
for (const palavra of nome.split(" ")) {
  iniciais += palavra[0] + ".";
}
console.log(iniciais);`,
              exp: 'Com map, que aparece no Nível 4, dá para fazer isso em uma linha só.'
            },
            {
              t: 'codigo',
              p: 'Troque todos os espaços do nome do arquivo por "_" e mostre',
              start: `let arquivo = "{ARQ}";
`,
              sol: `let arquivo = "{ARQ}";
console.log(arquivo.replaceAll(" ", "_"));`,
              dica: 'replaceAll(" ", "_")',
              exp: 'Nomes de arquivo sem espaço evitam problema em sites e no terminal.',
              vars: { ARQ: ['meu trabalho final.pdf', 'foto da viagem.jpg', 'lista de compras.txt'] }
            }
          ]
        },
        {
          id: 'n3l8',
          titulo: 'Fatiar e modificar listas',
          pre: ['n3l3'],
          exs: [
            {
              t: 'texto',
              titulo: 'Pedaços de listas',
              blocos: [
                {
                  p: '`slice(início, fim)` copia um pedaço da lista sem mexer na original. `splice(posição, quantidade)` remove itens da própria lista. `reverse` inverte a ordem, também mudando a original.'
                },
                {
                  code: `const l = [10, 20, 30, 40];
console.log(l.slice(1, 3)); // [20, 30]
console.log(l);              // a original continua igual
l.splice(0, 1);              // remove 1 item na posição 0
console.log(l);              // [20, 30, 40]`
                },
                {
                  p: 'Os três pontinhos (spread) espalham os itens de uma lista. Servem para copiar e para juntar listas:'
                },
                {
                  code: `const a = [1, 2];
const b = [3, 4];
const juntas = [...a, ...b];  // [1, 2, 3, 4]
const copia = [...a];
console.log(juntas, copia);`
                },
                {
                  dica: 'slice e splice têm nomes parecidos, mas slice só lê e splice altera. Na dúvida, rode no terminal.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log([10, 20, 30, 40].slice(1, 3));',
              mono: true,
              ops: ['[20,30]', '[20,30,40]', '[10,20]'],
              c: 0,
              exp: 'Da posição 1 até antes da 3.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `let l = [1, 2, 3, 4];
l.splice(1, 2);
console.log(l);`,
              mono: true,
              ops: ['[1,4]', '[2,3]', '[1,2,3,4]'],
              c: 0,
              exp: 'splice removeu 2 itens a partir da posição 1 da própria lista.'
            },
            {
              t: 'escolha',
              p: 'Qual destes não muda a lista original?',
              mono: true,
              ops: ['slice', 'splice', 'reverse'],
              c: 0,
              exp: 'slice devolve uma cópia do pedaço.'
            },
            {
              t: 'complete',
              p: 'Complete para juntar as duas listas',
              code: `const a = [1, 2];
const b = [3, 4];
const c = [___a, ...b];`,
              bank: ['...', '..', '+', '&'],
              c: ['...'],
              exp: 'São exatamente três pontos.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `const l = [10, 20, 30, 40, 50];
console.log(l.slice({A}, {B}));`,
              ops: [
                '{= JSON.stringify([10, 20, 30, 40, 50].slice(A, B)) }',
                '{= JSON.stringify([10, 20, 30, 40, 50].slice(A, B + 1)) }',
                '{= JSON.stringify([10, 20, 30, 40, 50].slice(A - 1, B)) }'
              ],
              c: 0,
              mono: true,
              exp: 'slice pega do início até antes do fim.',
              vars: { A: { de: 1, ate: 2 }, B: { de: 3, ate: 4 } }
            },
            {
              t: 'codigo',
              p: 'Mostre os três primeiros colocados, sem mudar a lista original',
              start: `const chegada = ["Ana", "Bruno", "Caio", "Davi", "Eva"];
`,
              saida: '["Ana","Bruno","Caio"]',
              dica: 'slice(0, 3).',
              sol: `const chegada = ["Ana", "Bruno", "Caio", "Davi", "Eva"];
console.log(chegada.slice(0, 3));`,
              exp: 'O pódio sem estragar a classificação completa.'
            },
            {
              t: 'codigo',
              p: 'Junte as duas listas numa só, com os três pontinhos, e mostre',
              start: `const a = {LA};
const b = {LB};
`,
              sol: `const a = {LA};
const b = {LB};
console.log([...a, ...b]);`,
              dica: '[...a, ...b]',
              exp: 'O spread espalha os itens das duas listas dentro de uma nova.',
              vars: { LA: ['[1, 2]', '[5, 6, 7]', '[10]'], LB: ['[3, 4]', '[8]', '[20, 30]'] }
            }
          ]
        }
      ]
    },
    {
      id: 'n3u3',
      titulo: 'Objetos e matrizes',
      conceito: '{ } · [[ ]]',
      desc: 'Agrupar informações e montar tabelas.',
      licoes: [
        {
          id: 'n3l5',
          titulo: 'Objetos',
          pre: ['u2l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Juntando informações de uma coisa',
              blocos: [
                {
                  p: 'Um objeto agrupa informações sobre uma mesma coisa. Cada informação tem um nome (a chave) e um valor. Você acessa com ponto.'
                },
                {
                  code: `let aluno = { nome: "Ana", nota: 8.5, turma: "3B" };
console.log(aluno.nome);  // Ana
aluno.nota = 9;            // muda a nota
aluno.cidade = "Natal";    // cria uma informação nova
console.log(aluno);`
                },
                {
                  p: 'Objetos ficam ainda mais úteis dentro de listas: uma lista de alunos, de produtos, de gastos.'
                },
                {
                  code: `let produtos = [
  { nome: "Arroz", preco: 25 },
  { nome: "Feijão", preco: 9 }
];
console.log(produtos[1].nome); // Feijão`
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `let carro = { marca: "Fiat", ano: 2015 };
console.log(carro.ano);`,
              mono: true,
              ops: ['2015', 'Fiat', 'ano'],
              c: 0,
              exp: 'carro.ano pega o valor guardado na chave ano.'
            },
            {
              t: 'complete',
              p: 'Complete para mostrar o nome do aluno',
              code: 'console.log(aluno___nome);',
              bank: ['.', ',', ':', '->'],
              c: ['.'],
              exp: 'O ponto acessa uma informação do objeto.'
            },
            {
              t: 'escolha',
              p: 'Qual linha cria um objeto corretamente?',
              mono: true,
              ops: ['{ nome: "Leo", idade: 20 }', '{ nome = "Leo", idade = 20 }', '[ nome: "Leo" ]'],
              c: 0,
              exp: 'Chaves { }, dois-pontos entre nome e valor, vírgula entre as informações.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `let carro = { modelo: "{MOD}", ano: {ANO} };
console.log(carro.ano);`,
              ops: ['{ANO}', '{MOD}', 'undefined'],
              c: 0,
              mono: true,
              exp: 'carro.ano pega o valor da chave ano.',
              vars: { MOD: ['Uno', 'Gol', 'Kombi', 'Fusca'], ANO: { de: 1970, ate: 2015 } }
            },
            {
              t: 'codigo',
              p: 'Mostre o total da compra',
              start: `let produtos = [
  { nome: "Café", preco: 18 },
  { nome: "Pão", preco: 9 },
  { nome: "Leite", preco: 6 }
];
`,
              saida: '33',
              dica: 'Some p.preco de cada produto em um acumulador.',
              sol: `let produtos = [
  { nome: "Café", preco: 18 },
  { nome: "Pão", preco: 9 },
  { nome: "Leite", preco: 6 }
];
let total = 0;
for (const p of produtos) {
  total = total + p.preco;
}
console.log(total);`,
              exp: 'Esse é o coração de qualquer carrinho de compras.'
            },
            {
              t: 'codigo',
              p: 'Aumente o preço do produto em {P} e mostre o objeto inteiro',
              start: `let produto = { nome: "Café", preco: {V} };
`,
              sol: `let produto = { nome: "Café", preco: {V} };
produto.preco += {P};
console.log(produto);`,
              dica: 'produto.preco += {P}',
              exp: 'Os atalhos como += funcionam com as informações de um objeto.',
              vars: { V: { de: 10, ate: 30 }, P: { de: 1, ate: 5 } }
            }
          ]
        },
        {
          id: 'n3l6',
          titulo: 'Matrizes',
          pre: ['n3l3', 'u4l3'],
          exs: [
            {
              t: 'texto',
              titulo: 'Listas dentro de listas',
              blocos: [
                {
                  p: 'Uma matriz é uma lista de listas, como uma tabela com linhas e colunas. Você acessa com dois índices: primeiro a linha, depois a coluna.'
                },
                {
                  code: `let tabuleiro = [
  ["X", "O", "X"],
  ["", "X", "O"],
  ["O", "", "X"]
];
console.log(tabuleiro[0][2]); // X (linha 0, coluna 2)
console.log(tabuleiro[1][1]); // X (o meio)`
                },
                {
                  p: 'Para passar por todas as casas, use um laço dentro de outro: o de fora anda pelas linhas e o de dentro pelas colunas.'
                },
                {
                  code: `let m = [[1, 2], [3, 4]];
for (let l = 0; l < m.length; l++) {
  for (let c = 0; c < m[l].length; c++) {
    console.log(\`linha \${l}, coluna \${c}: \${m[l][c]}\`);
  }
}`
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `let m = [[1, 2], [3, 4]];
console.log(m[1][0]);`,
              mono: true,
              ops: ['3', '2', '4'],
              c: 0,
              exp: 'm[1] é a linha [3, 4]. A posição 0 dela é o 3.'
            },
            {
              t: 'escolha',
              p: 'Num tabuleiro 3 por 3, qual é a casa do meio?',
              mono: true,
              ops: ['tab[1][1]', 'tab[2][2]', 'tab[3][3]'],
              c: 0,
              exp: 'As posições vão de 0 a 2, então o meio é 1.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `let m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(m[{L}][{C}]);`,
              ops: ['{= L * 3 + C + 1 }', '{= C * 3 + L + 1 }', '{= L + C }'],
              c: 0,
              mono: true,
              exp: 'Primeiro a linha {L}, depois a coluna {C}, contando do zero.',
              vars: { L: { de: 0, ate: 2 }, C: { de: 0, ate: 2 } },
              se: 'L !== C'
            },
            {
              t: 'codigo',
              p: 'Mostre a soma de todos os números da matriz',
              start: `let m = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
`,
              saida: '45',
              dica: 'Dois laços, um dentro do outro, somando m[l][c].',
              sol: `let m = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let soma = 0;
for (const linha of m) {
  for (const n of linha) {
    soma = soma + n;
  }
}
console.log(soma);`,
              exp: 'Planilhas, imagens e mapas de jogos são matrizes por dentro.'
            },
            {
              t: 'codigo',
              p: 'Mostre a soma de cada linha da matriz, uma por linha',
              start: `let m = {M};
`,
              sol: `let m = {M};
for (const linha of m) {
  let soma = 0;
  for (const n of linha) soma += n;
  console.log(soma);
}`,
              dica: 'Para cada linha, comece uma soma em zero e some os números dela.',
              exp: 'O acumulador começa de novo em cada linha, por isso fica dentro do laço de fora.',
              vars: {
                M: [
                  '[[1, 2], [3, 4], [5, 6]]',
                  '[[10, 20, 30], [4, 5, 6]]',
                  '[[2, 4, 6], [1, 3, 5], [7, 8, 9]]'
                ]
              }
            },
            {
              t: 'codigo',
              p: 'Mostre a diagonal principal da matriz numa lista: m[0][0], m[1][1] e m[2][2]',
              start: `let m = [[{A}, 2, 3], [4, {B}, 6], [7, 8, {D}]];
`,
              sol: `let m = [[{A}, 2, 3], [4, {B}, 6], [7, 8, {D}]];
console.log([m[0][0], m[1][1], m[2][2]]);`,
              dica: 'Na diagonal principal, a linha e a coluna são iguais.',
              exp: 'Dá para fazer com um laço também: m[i][i].',
              vars: { A: { de: 10, ate: 99 }, B: { de: 10, ate: 99 }, D: { de: 10, ate: 99 } }
            }
          ]
        },
        {
          id: 'n3l9',
          titulo: 'Mini projeto: boletim da turma',
          pre: ['u3l1', 'u4l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Projeto: o boletim',
              blocos: [
                {
                  p: 'Vamos montar o boletim de uma turma: para cada aluno, calcular a média e dizer a situação.'
                },
                {
                  passos: [
                    'Representar a turma como uma lista de objetos, cada um com nome e notas',
                    'Para cada aluno, somar as notas e dividir pela quantidade',
                    'Média 6 ou mais: aprovado. De 4 até menos de 6: recuperação. Abaixo de 4: reprovado',
                    'Mostrar nome, média com uma casa decimal e situação'
                  ]
                },
                {
                  code: `const aluno = { nome: "Lia", notas: [8, 6, 7] };
let soma = 0;
for (const n of aluno.notas) soma += n;
const media = soma / aluno.notas.length;
console.log(aluno.nome, media.toFixed(1)); // Lia 7.0`
                },
                {
                  dica: 'Comece fazendo funcionar para um aluno só. Depois coloque o código dentro de um laço pela turma.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual estrutura representa melhor a turma?',
              ops: [
                'Uma lista de objetos, um por aluno',
                'Uma variável separada para cada nota',
                'Um texto com todos os nomes'
              ],
              c: 0,
              exp: 'Cada objeto junta as informações de um aluno; a lista junta os alunos.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `const a = { nome: "Lia", notas: [8, 6, 7] };
console.log(a.notas[2]);`,
              mono: true,
              ops: ['7', '6', '8'],
              c: 0,
              exp: 'notas é uma lista dentro do objeto; a posição 2 é o 7.'
            },
            {
              t: 'escolha',
              p: 'Por que guardar cada aluno como um objeto, com nome e notas?',
              ops: [
                'Para manter juntas as informações de cada aluno',
                'Porque listas não guardam números',
                'Para o código rodar mais rápido'
              ],
              c: 0,
              exp: 'Com o objeto, o nome nunca se separa das notas dele.'
            },
            {
              t: 'codigo',
              p: 'Mostre o boletim no formato "Nome: média - situação"',
              start: `const turma = [
  { nome: "Lia", notas: [8, 6, 7] },
  { nome: "Rui", notas: [5, 4, 3] },
  { nome: "Bia", notas: [3, 2, 4] }
];
`,
              saida: `Lia: 7.0 - Aprovado
Rui: 4.0 - Recuperação
Bia: 3.0 - Reprovado`,
              dica: 'Para cada aluno: calcule a média, decida a situação com if / else if / else e mostre com `${a.nome}: ${media.toFixed(1)} - ${situacao}`.',
              sol: `const turma = [
  { nome: "Lia", notas: [8, 6, 7] },
  { nome: "Rui", notas: [5, 4, 3] },
  { nome: "Bia", notas: [3, 2, 4] }
];
for (const a of turma) {
  let soma = 0;
  for (const n of a.notas) soma += n;
  const media = soma / a.notas.length;
  let situacao;
  if (media >= 6) situacao = "Aprovado";
  else if (media >= 4) situacao = "Recuperação";
  else situacao = "Reprovado";
  console.log(\`\${a.nome}: \${media.toFixed(1)} - \${situacao}\`);
}`,
              exp: 'Listas, objetos, laços e decisões juntos num programa só.'
            },
            {
              t: 'codigo',
              p: 'Mostre a média de {NOME} com uma casa decimal',
              start: `const aluno = { nome: "{NOME}", notas: {L} };
`,
              sol: `const aluno = { nome: "{NOME}", notas: {L} };
let soma = 0;
for (const n of aluno.notas) soma += n;
console.log((soma / aluno.notas.length).toFixed(1));`,
              dica: 'Some aluno.notas, divida pela quantidade e use toFixed(1).',
              exp: 'toFixed(1) arredonda e mostra sempre uma casa: 7 vira 7.0.',
              vars: {
                NOME: ['Ana', 'Bruno', 'Carla', 'Davi', 'Elis', 'Fábio', 'Gal', 'Hugo'],
                L: ['[8, 6, 7]', '[5, 4, 3]', '[9, 7, 10, 6]', '[6.5, 8, 7]']
              }
            },
            {
              t: 'codigo',
              p: 'Mostre quantos alunos tiveram média 6 ou mais',
              start: `const turma = [
  { nome: "Lia", notas: [8, 6, 7] },
  { nome: "Rui", notas: [5, 4, {N}] },
  { nome: "Bia", notas: [6, 6, 6] }
];
`,
              sol: `const turma = [
  { nome: "Lia", notas: [8, 6, 7] },
  { nome: "Rui", notas: [5, 4, {N}] },
  { nome: "Bia", notas: [6, 6, 6] }
];
let aprovados = 0;
for (const aluno of turma) {
  let soma = 0;
  for (const n of aluno.notas) soma += n;
  if (soma / aluno.notas.length >= 6) aprovados++;
}
console.log(aprovados);`,
              dica: 'Para cada aluno, calcule a média; se for 6 ou mais, conte.',
              exp: 'Bia tem média exatamente 6: o >= faz ela contar.',
              vars: { N: [3, 7, 9, 10] }
            }
          ]
        }
      ]
    }
  ]
});
