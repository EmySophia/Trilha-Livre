/* Trilha Livre · Lógica de programação com JavaScript · Nível 5: Algoritmos clássicos
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'logica-js',
  n: 5,
  titulo: 'Algoritmos clássicos',
  desc: 'Buscar, ordenar e medir eficiência.',
  unidades: [
    {
      id: 'n5u1',
      titulo: 'Busca e ordenação',
      conceito: 'busca binária',
      desc: 'Os algoritmos que todo programador conhece.',
      licoes: [
        {
          id: 'n5l1',
          titulo: 'Busca linear e binária',
          pre: ['n3l3', 'u4l2', 'u5l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Dois jeitos de procurar',
              blocos: [
                {
                  p: 'Na busca linear, você olha item por item até achar. Funciona em qualquer lista, mas numa lista de 1 milhão de itens pode precisar de 1 milhão de comparações.'
                },
                {
                  p: 'A busca binária só funciona em listas ordenadas, mas é muito mais rápida. É o jogo de adivinhar um número de 1 a 100: você chuta 50; se a resposta for "é menor", descarta metade de uma vez.'
                },
                {
                  code: `function buscaBinaria(lista, alvo) {
  let ini = 0, fim = lista.length - 1;
  while (ini <= fim) {
    const meio = Math.floor((ini + fim) / 2);
    if (lista[meio] === alvo) return meio;
    if (lista[meio] < alvo) ini = meio + 1;
    else fim = meio - 1;
  }
  return -1;
}
console.log(buscaBinaria([2, 5, 8, 12, 16, 23, 38], 23)); // 5`
                },
                {
                  dica: 'Com 1 milhão de itens ordenados, a busca binária precisa de no máximo uns 20 passos.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que a busca binária exige?',
              ops: [
                'Que a lista esteja ordenada',
                'Que a lista tenha só números pares',
                'Que a lista seja pequena'
              ],
              c: 0,
              exp: 'Ela depende de saber para qual lado o alvo está.'
            },
            {
              t: 'escolha',
              p: 'Numa lista de 1000 itens, quantas comparações a busca linear faz no pior caso?',
              ops: ['1000', '10', '1'],
              c: 0,
              exp: 'Se o item for o último (ou não existir), ela olha todos.'
            },
            {
              t: 'escolha',
              p: 'E a busca binária, nos mesmos 1000 itens ordenados?',
              ops: ['Cerca de 10', 'Cerca de 500', '1000'],
              c: 0,
              exp: '1000 → 500 → 250 → 125 → ... chega a 1 em uns 10 passos.'
            },
            {
              t: 'codigo',
              p: 'Implemente buscaLinear(lista, alvo): devolve a posição do alvo ou -1',
              start: `function buscaLinear(lista, alvo) {
  
}
console.log(buscaLinear([4, 8, 15, 16, 23, 42], 23));
console.log(buscaLinear([4, 8, 15], 7));
`,
              saida: `4
-1`,
              dica: 'Percorra com for (let i = 0; ...). Se lista[i] === alvo, return i. Depois do laço, return -1.',
              sol: `function buscaLinear(lista, alvo) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === alvo) return i;
  }
  return -1;
}
console.log(buscaLinear([4, 8, 15, 16, 23, 42], 23));
console.log(buscaLinear([4, 8, 15], 7));`,
              exp: 'Você acabou de recriar o indexOf.'
            }
          ]
        },
        {
          id: 'n5l2',
          titulo: 'Ordenação',
          pre: ['n3l3', 'u4l3', 'u5l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Colocando em ordem',
              blocos: [
                {
                  p: 'O bubble sort é o algoritmo de ordenação mais simples de entender: compare cada item com o vizinho e troque se estiverem fora de ordem. A cada passada, o maior valor que falta "borbulha" até o fim.'
                },
                {
                  code: `function bubble(lista) {
  for (let i = 0; i < lista.length; i++) {
    for (let j = 0; j < lista.length - 1 - i; j++) {
      if (lista[j] > lista[j + 1]) {
        [lista[j], lista[j + 1]] = [lista[j + 1], lista[j]]; // troca
      }
    }
  }
  return lista;
}
console.log(bubble([5, 2, 9, 1])); // [1, 2, 5, 9]`
                },
                {
                  p: 'No dia a dia, use o `sort` que já vem pronto. Mas cuidado: sem argumentos ele ordena como texto. Para números, passe uma função de comparação.'
                },
                {
                  code: `console.log([10, 9, 1].sort());                // [1, 10, 9]  (!)
console.log([10, 9, 1].sort((a, b) => a - b));  // [1, 9, 10]
console.log([10, 9, 1].sort((a, b) => b - a));  // [10, 9, 1]`
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log([10, 9, 1].sort());',
              mono: true,
              ops: ['[1,10,9]', '[1,9,10]', '[10,9,1]'],
              c: 0,
              exp: 'Como texto, "10" vem antes de "9" porque o 1 vem antes do 9.'
            },
            {
              t: 'escolha',
              p: 'No bubble sort, o que acontece a cada passada completa?',
              ops: [
                'O maior valor que falta vai para o fim',
                'A lista é embaralhada',
                'O menor valor é apagado'
              ],
              c: 0,
              exp: 'Por isso cada passada pode olhar um item a menos.'
            },
            {
              t: 'complete',
              p: 'Complete para ordenar do menor para o maior',
              code: 'nums.sort((a, b) => a ___ b);',
              bank: ['-', '+', '>', '*'],
              c: ['-'],
              exp: 'Se a - b for negativo, a vem antes de b.'
            },
            {
              t: 'codigo',
              p: 'Implemente ordenar(lista) sem usar .sort()',
              start: `function ordenar(lista) {
  
}
console.log(ordenar([5, 2, 9, 1, 7]));
`,
              saida: '[1,2,5,7,9]',
              dica: 'Dois laços: compare lista[j] com lista[j + 1] e troque quando o da esquerda for maior.',
              sol: `function ordenar(lista) {
  for (let i = 0; i < lista.length; i++) {
    for (let j = 0; j < lista.length - 1 - i; j++) {
      if (lista[j] > lista[j + 1]) {
        const tmp = lista[j];
        lista[j] = lista[j + 1];
        lista[j + 1] = tmp;
      }
    }
  }
  return lista;
}
console.log(ordenar([5, 2, 9, 1, 7]));`,
              exp: 'Existem ordenações bem mais rápidas, como o merge sort e o quick sort. O sort do JavaScript usa uma delas.'
            }
          ]
        },
        {
          id: 'n5l5',
          titulo: 'Contando frequências',
          pre: ['n3l5', 'n3l3'],
          exs: [
            {
              t: 'texto',
              titulo: 'Quantas vezes cada coisa aparece?',
              blocos: [
                {
                  p: 'Contar quantas vezes cada item aparece é um problema clássico. O jeito eficiente é usar um objeto como contador e passar pela lista uma vez só.'
                },
                {
                  code: `const votos = ["sim", "não", "sim"];
const cont = {};
for (const v of votos) {
  cont[v] = (cont[v] || 0) + 1;
}
console.log(cont); // { sim: 2, não: 1 }`
                },
                {
                  p: 'Para ficar só com os valores únicos, use um `Set`, uma coleção que não aceita repetidos:'
                },
                {
                  code: `const cores = ["azul", "verde", "azul", "rosa"];
const unicas = new Set(cores);
console.log(unicas.size);   // 3
console.log([...unicas]);   // ["azul", "verde", "rosa"]`
                },
                {
                  dica: 'Contar cada item com um laço dentro de outro daria O(n²). Com o objeto contador é O(n).'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log(new Set([1, 1, 2, 3, 3]).size);',
              mono: true,
              ops: ['3', '5', '2'],
              c: 0,
              exp: 'Os únicos são 1, 2 e 3.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `const c = {};
for (const l of "ana") {
  c[l] = (c[l] || 0) + 1;
}
console.log(c.a);`,
              mono: true,
              ops: ['2', '1', '3'],
              c: 0,
              exp: 'A letra a aparece duas vezes em "ana".'
            },
            {
              t: 'escolha',
              p: 'Por que contar com um objeto é melhor do que um laço dentro de outro?',
              ops: [
                'Passa pela lista uma vez só',
                'Usa menos variáveis',
                'Não é melhor, só é diferente'
              ],
              c: 0,
              exp: 'Com listas grandes, a diferença é enorme.'
            },
            {
              t: 'codigo',
              p: 'Conte os votos e mostre "opção: quantidade" na ordem em que cada opção aparece',
              start: `const votos = ["sim", "não", "sim", "sim", "abstenção", "não"];
`,
              saida: `sim: 3
não: 2
abstenção: 1`,
              dica: 'Monte o contador e depois percorra com for (const op in cont).',
              sol: `const votos = ["sim", "não", "sim", "sim", "abstenção", "não"];
const cont = {};
for (const v of votos) cont[v] = (cont[v] || 0) + 1;
for (const op in cont) console.log(\`\${op}: \${cont[op]}\`);`,
              exp: 'Uma apuração de votação em poucas linhas de código.'
            }
          ]
        }
      ]
    },
    {
      id: 'n5u2',
      titulo: 'Estruturas e eficiência',
      conceito: 'O(n)',
      desc: 'Pilhas, filas e por que um código é mais rápido que outro.',
      licoes: [
        {
          id: 'n5l3',
          titulo: 'Pilhas e filas',
          pre: ['n3l3', 'u5l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Duas formas de organizar a espera',
              blocos: [
                {
                  p: 'Uma pilha funciona como uma pilha de pratos: o último a entrar é o primeiro a sair. O botão "desfazer" de um editor usa uma pilha. Em JavaScript: `push` para empilhar e `pop` para desempilhar.'
                },
                {
                  p: 'Uma fila funciona como a fila do banco: o primeiro a chegar é o primeiro a ser atendido. Use `push` para entrar no fim e `shift` para tirar do começo.'
                },
                {
                  code: `let pilha = [];
pilha.push("a"); pilha.push("b");
console.log(pilha.pop());  // b

let fila = ["Ana", "Bia"];
fila.push("Caio");
console.log(fila.shift()); // Ana`
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O botão desfazer (Ctrl+Z) usa qual estrutura?',
              ops: ['Pilha', 'Fila'],
              c: 0,
              exp: 'Ele desfaz primeiro a última coisa que você fez.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `let p = [];
p.push("a");
p.push("b");
p.push("c");
console.log(p.pop());`,
              mono: true,
              ops: ['c', 'a', 'b'],
              c: 0,
              exp: 'O último a entrar é o primeiro a sair.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `let f = ["Ana", "Bia", "Caio"];
f.shift();
console.log(f[0]);`,
              mono: true,
              ops: ['Bia', 'Ana', 'Caio'],
              c: 0,
              exp: 'Ana foi atendida e saiu. Agora a primeira é Bia.'
            },
            {
              t: 'codigo',
              p: 'Faça balanceado(s): true se todo "(" tiver um ")" correspondente, na ordem certa',
              start: `function balanceado(s) {
  
}
console.log(balanceado("(())"));
console.log(balanceado("(()"));
console.log(balanceado(")("));
`,
              saida: `true
false
false`,
              dica: 'Empilhe a cada "(" e desempilhe a cada ")". Se tentar desempilhar com a pilha vazia, é false. No fim, a pilha tem que estar vazia.',
              sol: `function balanceado(s) {
  const pilha = [];
  for (const c of s) {
    if (c === "(") pilha.push(c);
    else if (c === ")") {
      if (pilha.length === 0) return false;
      pilha.pop();
    }
  }
  return pilha.length === 0;
}
console.log(balanceado("(())"));
console.log(balanceado("(()"));
console.log(balanceado(")("));`,
              exp: 'É assim que editores de código avisam que falta fechar um parêntese.'
            }
          ]
        },
        {
          id: 'n5l4',
          titulo: 'Eficiência',
          pre: ['u4l3', 'n4l3'],
          exs: [
            {
              t: 'texto',
              titulo: 'Quanto trabalho seu código faz?',
              blocos: [
                {
                  p: 'Dois programas podem dar a mesma resposta e um ser milhares de vezes mais rápido. Para comparar, a gente conta quantos passos o código faz conforme a entrada cresce.'
                },
                {
                  tabela: {
                    cab: ['Padrão', 'Nome', '1.000 itens'],
                    linhas: [
                      ['Uma conta só, sem laço', 'O(1)', '1 passo'],
                      ['Busca binária', 'O(log n)', '~10 passos'],
                      ['Um laço pela lista', 'O(n)', '1.000 passos'],
                      ['Laço dentro de laço', 'O(n²)', '1.000.000 passos']
                    ]
                  }
                },
                {
                  p: 'Somar de 1 até n com um laço é O(n). Com a fórmula de Gauss, n × (n + 1) / 2, é uma conta só, não importa o tamanho de n.'
                },
                {
                  code: `const n = 1000000;
console.log(n * (n + 1) / 2); // 500000500000, na hora`
                },
                {
                  dica: 'O Fibonacci recursivo do Nível 4 recalcula os mesmos valores muitas vezes. fib(40) faz centenas de milhões de chamadas.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Um laço dentro de outro, numa lista de 100 itens, faz cerca de quantos passos?',
              ops: ['10.000', '100', '200'],
              c: 0,
              exp: '100 × 100. Por isso O(n²) fica lento rápido.'
            },
            {
              t: 'escolha',
              p: 'Para procurar em uma lista ordenada e enorme, qual é melhor?',
              ops: ['Busca binária, O(log n)', 'Busca linear, O(n)', 'Tanto faz'],
              c: 0,
              exp: 'A diferença cresce junto com a lista.'
            },
            {
              t: 'escolha',
              p: 'Por que a fórmula n × (n + 1) / 2 é mais eficiente que um laço?',
              ops: [
                'Faz uma conta só, não importa o tamanho de n',
                'Porque usa multiplicação',
                'Não é mais eficiente'
              ],
              c: 0,
              exp: 'É O(1): o trabalho não cresce com n.'
            },
            {
              t: 'codigo',
              p: 'Mostre a soma de 1 até 1.000.000 usando a fórmula de Gauss',
              start: '',
              saida: '500000500000',
              dica: 'Crie n = 1000000 e mostre n * (n + 1) / 2.',
              sol: `const n = 1000000;
console.log(n * (n + 1) / 2);`,
              exp: 'Matemática também é otimização.'
            }
          ]
        },
        {
          id: 'n5l6',
          titulo: 'Mini projeto: palíndromos',
          pre: ['n3l1', 'n3l7', 'u4l2'],
          exs: [
            {
              t: 'texto',
              titulo: 'Projeto: frases que se leem dos dois lados',
              blocos: [
                {
                  p: 'Um palíndromo é lido igual de trás para frente: "ovo", "arara", "A base do teto desaba". Para conferir frases, primeiro normalizamos o texto: tudo minúsculo e sem espaços.'
                },
                {
                  p: 'Existem dois jeitos de conferir. O mais curto inverte o texto e compara:'
                },
                {
                  code: `const t = "arara";
const invertido = t.split("").reverse().join("");
console.log(t === invertido); // true`
                },
                {
                  p: 'O mais eficiente usa dois índices, um no começo e outro no fim, andando em direção ao meio. Ele para na primeira diferença e não cria cópias do texto.'
                },
                {
                  code: `function ehPal(t) {
  let i = 0, j = t.length - 1;
  while (i < j) {
    if (t[i] !== t[j]) return false;
    i++; j--;
  }
  return true;
}
console.log(ehPal("radar"), ehPal("rato")); // true false`
                },
                {
                  dica: 'Para tirar acentos, existe a receita `texto.normalize("NFD").replace(/[\\u0300-\\u036f]/g, "")`. Ela usa expressões regulares, um assunto mais avançado.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual destas palavras é um palíndromo?',
              ops: ['arara', 'banana', 'casa'],
              c: 0,
              exp: 'a-r-a-r-a, igual dos dois lados.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log("roma".split("").sort().join(""));',
              mono: true,
              ops: ['amor', 'roma', 'amro'],
              c: 0,
              exp: 'As letras em ordem alfabética: a, m, o, r. Ordenar letras é um jeito de testar anagramas.'
            },
            {
              t: 'codigo',
              p: 'Escreva ehPalindromo(frase), ignorando espaços e maiúsculas',
              start: `function ehPalindromo(frase) {
  
}
console.log(ehPalindromo("arara"));
console.log(ehPalindromo("A base do teto desaba"));
console.log(ehPalindromo("programar"));
`,
              saida: `true
true
false`,
              dica: 'Normalize com toLowerCase() e replaceAll(" ", ""). Depois compare com o texto invertido ou use os dois índices.',
              sol: `function ehPalindromo(frase) {
  const t = frase.toLowerCase().replaceAll(" ", "");
  return t === t.split("").reverse().join("");
}
console.log(ehPalindromo("arara"));
console.log(ehPalindromo("A base do teto desaba"));
console.log(ehPalindromo("programar"));`,
              exp: 'Tente também a versão com dois índices e compare as duas.'
            }
          ]
        }
      ]
    }
  ]
});
