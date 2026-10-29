/* Trilha Livre · Lógica de programação com JavaScript · Nível 6: Depuração
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'logica-js',
  n: 6,
  titulo: 'Depuração',
  desc: 'Encontrar e consertar erros.',
  unidades: [
    {
      id: 'n6u1',
      titulo: 'Caçando erros',
      conceito: 'debug',
      desc: 'Ler erros, investigar e testar.',
      licoes: [
        {
          id: 'n6l1',
          titulo: 'Lendo mensagens de erro',
          pre: ['u2l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'O erro está tentando te ajudar',
              blocos: [
                {
                  p: 'Toda mensagem de erro diz duas coisas: o tipo do erro e uma descrição. Ler com calma economiza muito tempo.'
                },
                {
                  tabela: {
                    codigo: [0, 2],
                    cab: ['Tipo', 'O que quer dizer', 'Exemplo'],
                    linhas: [
                      [
                        'SyntaxError',
                        'O código está escrito errado',
                        'faltou fechar um parêntese'
                      ],
                      ['ReferenceError', 'Um nome não existe', 'variável digitada errado'],
                      [
                        'TypeError',
                        'Usou um valor do jeito errado',
                        'chamar um número como função'
                      ],
                      ['RangeError', 'Um valor passou do limite', 'recursão sem caso base']
                    ]
                  }
                },
                {
                  p: 'Existe ainda o erro mais traiçoeiro: o erro de lógica. O programa roda sem reclamar, mas o resultado está errado. Para esses, não tem mensagem: você precisa investigar.'
                },
                {
                  dica: 'Maiúsculas e minúsculas importam: `nome` e `Nome` são variáveis diferentes.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual erro este código causa?',
              code: `let nome = "Rui";
console.log(nmoe);`,
              ops: ['ReferenceError', 'SyntaxError', 'TypeError'],
              c: 0,
              exp: 'nmoe (digitado errado) não existe.'
            },
            {
              t: 'escolha',
              p: 'Qual erro este código causa?',
              code: 'console.log("oi";',
              ops: ['SyntaxError', 'ReferenceError', 'RangeError'],
              c: 0,
              exp: 'Faltou fechar o parêntese: o código nem chega a rodar.'
            },
            {
              t: 'escolha',
              p: 'Qual erro este código causa?',
              code: `let x = 5;
x();`,
              ops: ['TypeError', 'SyntaxError', 'Nenhum'],
              c: 0,
              exp: 'x é um número, não uma função. Não dá para chamar.'
            },
            {
              t: 'escolha',
              p: 'Qual erro este código causa?',
              ops: ['TypeError', 'SyntaxError', 'ReferenceError'],
              c: 0,
              exp: 'Mudar uma const dá TypeError: “Assignment to constant variable”.',
              code: `const total = 10;
total = 20;`,
              mono: true
            },
            {
              t: 'codigo',
              p: 'Este código tem um erro. Conserte para mostrar: Total: 40',
              start: `let preco = 50;
let desconto = 10;
console.log("Total: " + (preco - Desconto));
`,
              saida: 'Total: 40',
              dica: 'Rode primeiro e leia a mensagem de erro. Ela aponta o nome que não existe.',
              sol: `let preco = 50;
let desconto = 10;
console.log("Total: " + (preco - desconto));`,
              exp: 'Desconto com D maiúsculo não é a mesma variável que desconto.'
            },
            {
              t: 'codigo',
              p: 'Conserte o erro de escrita para mostrar a soma de a e b',
              start: `let a = {A};
let b = {B};
console.log(a + b;
`,
              sol: `let a = {A};
let b = {B};
console.log(a + b);`,
              dica: 'Falta fechar um parêntese.',
              exp: 'Parêntese sem fechar é SyntaxError: o código nem começa a rodar.',
              vars: { A: { de: 1, ate: 50 }, B: { de: 1, ate: 50 } }
            }
          ]
        },
        {
          id: 'n6l2',
          titulo: 'Investigando com console.log',
          pre: ['u4l1', 'u5l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Seja detetive do seu código',
              blocos: [
                {
                  p: 'Quando o resultado sai errado e não há mensagem de erro, espalhe `console.log` pelo código para ver os valores mudando. Assim você descobre exatamente onde o caminho saiu do previsto.'
                },
                {
                  code: `let soma = 0;
for (let i = 1; i < 5; i++) {
  soma = soma + i;
  console.log("i =", i, "soma =", soma);
}
console.log("final:", soma); // queria 15, deu 10. Por quê?`
                },
                {
                  p: 'Rodando, você vê que o i nunca chega a 5. O problema é o `<`, que devia ser `<=`. Esse tipo de engano, errar por um, é tão comum que tem nome: off-by-one.'
                },
                {
                  dica: 'Desconfie primeiro de: começar em 0 ou em 1, usar < ou <=, e variáveis que mudam dentro de laços.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Este código deveria somar de 1 a 5 (15), mas mostra 10. Qual é o problema?',
              code: `let soma = 0;
for (let i = 1; i < 5; i++) soma += i;
console.log(soma);`,
              ops: [
                'O laço para antes de chegar no 5',
                'soma devia começar em 1',
                'O += não funciona'
              ],
              c: 0,
              exp: 'Com i <= 5, o 5 entra na conta.'
            },
            {
              t: 'escolha',
              p: 'Acompanhe os valores: o que aparece no console?',
              code: `let x = 1;
for (let i = 0; i < 3; i++) {
  x = x * 2;
}
console.log(x);`,
              mono: true,
              ops: ['8', '6', '4'],
              c: 0,
              exp: '1 → 2 → 4 → 8. Três voltas, dobrando a cada uma.'
            },
            {
              t: 'codigo',
              p: 'A média de [6, 8, 10] deveria ser 8. Ache e conserte o erro de lógica',
              start: `function media(lista) {
  let soma = 0;
  for (let i = 1; i < lista.length; i++) {
    soma = soma + lista[i];
  }
  return soma / lista.length;
}
console.log(media([6, 8, 10]));
`,
              saida: '8',
              dica: 'Coloque um console.log(lista[i]) dentro do laço. Algum número está ficando de fora?',
              sol: `function media(lista) {
  let soma = 0;
  for (let i = 0; i < lista.length; i++) {
    soma = soma + lista[i];
  }
  return soma / lista.length;
}
console.log(media([6, 8, 10]));`,
              exp: 'O laço começava em 1 e pulava o primeiro item. Off-by-one de novo.'
            },
            {
              t: 'codigo',
              p: 'somar(n) deveria somar de 1 até n, mas está deixando o último de fora. Conserte',
              start: `function somar(n) {
  let s = 0;
  for (let i = 1; i < n; i++) s += i;
  return s;
}
console.log(somar({N}));
`,
              sol: `function somar(n) {
  let s = 0;
  for (let i = 1; i <= n; i++) s += i;
  return s;
}
console.log(somar({N}));`,
              dica: 'É um erro de off-by-one: olhe o < do for.',
              exp: 'Com <=, o próprio n entra na soma.',
              vars: { N: { de: 5, ate: 50 } }
            },
            {
              t: 'codigo',
              p: 'O código deveria contar as notas 6 ou mais, mas está contando a menos. Conserte',
              start: `const notas = {L};
let aprovados = 0;
for (const n of notas) {
  if (n > 6) aprovados++;
}
console.log(aprovados);
`,
              sol: `const notas = {L};
let aprovados = 0;
for (const n of notas) {
  if (n >= 6) aprovados++;
}
console.log(aprovados);`,
              dica: 'Quem tirou exatamente 6 está ficando de fora.',
              exp: '> e >= diferem justamente no valor da fronteira.',
              vars: { L: ['[6, 7, 5, 6, 9]', '[4, 6, 8, 6]', '[6, 6, 3, 10]'] }
            }
          ]
        },
        {
          id: 'n6l3',
          titulo: 'Testes simples',
          pre: ['u5l1', 'u3l2'],
          exs: [
            {
              t: 'texto',
              titulo: 'Deixe o código conferir o código',
              blocos: [
                {
                  p: 'Um teste é um pedaço de código que chama sua função com valores conhecidos e confere se a resposta está certa. Quando você muda algo, roda os testes de novo e descobre na hora se quebrou alguma coisa.'
                },
                {
                  code: `function teste(nome, obtido, esperado) {
  console.log((obtido === esperado ? "OK " : "FALHOU ") + nome);
}

function dobro(n) { return n * 2; }

teste("dobro de 3", dobro(3), 6);
teste("dobro de 0", dobro(0), 0);
teste("dobro de -2", dobro(-2), -4);`
                },
                {
                  p: 'Teste os casos comuns e também os casos de borda: zero, lista vazia, números negativos, texto vazio. É neles que os erros costumam se esconder.'
                },
                {
                  dica: 'Programadores profissionais usam ferramentas de teste como Jest e Vitest, mas a ideia é exatamente esta.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que é um caso de borda?',
              ops: [
                'Uma entrada extrema, como zero, lista vazia ou número negativo',
                'O último teste do arquivo',
                'Um erro de digitação'
              ],
              c: 0,
              exp: 'São as situações que a gente esquece ao escrever o código.'
            },
            {
              t: 'escolha',
              p: 'Para testar uma função ehPar(n), qual conjunto de testes é melhor?',
              ops: ['0, 7, 10 e -4', '2, 4 e 6', 'Só o 8'],
              c: 0,
              exp: 'Cobre par, ímpar, zero e negativo.'
            },
            {
              t: 'escolha',
              p: 'maior(lista) passa em todos os testes com números positivos. Que teste ainda vale fazer?',
              ops: [
                'Uma lista só com números negativos',
                'Outra lista com números positivos',
                'Nenhum, já está testado'
              ],
              c: 0,
              exp: 'Se a função começa supondo que o maior é 0, ela erra com negativos: é um caso de borda.'
            },
            {
              t: 'codigo',
              p: 'Escreva ehPar(n) para que todos os testes mostrem OK',
              start: `function teste(nome, obtido, esperado) {
  console.log((obtido === esperado ? "OK " : "FALHOU ") + nome);
}

function ehPar(n) {
  
}

teste("0 é par", ehPar(0), true);
teste("7 é ímpar", ehPar(7), false);
teste("-4 é par", ehPar(-4), true);
`,
              saida: `OK 0 é par
OK 7 é ímpar
OK -4 é par`,
              dica: 'return n % 2 === 0;',
              sol: `function teste(nome, obtido, esperado) {
  console.log((obtido === esperado ? "OK " : "FALHOU ") + nome);
}

function ehPar(n) {
  return n % 2 === 0;
}

teste("0 é par", ehPar(0), true);
teste("7 é ímpar", ehPar(7), false);
teste("-4 é par", ehPar(-4), true);`,
              exp: 'Escrever o teste antes da função tem nome: TDD, desenvolvimento guiado por testes.'
            },
            {
              t: 'codigo',
              p: 'Escreva maiorDaLista(lista) para todos os testes mostrarem OK',
              start: `function teste(nome, obtido, esperado) {
  console.log((obtido === esperado ? "OK " : "FALHOU ") + nome);
}

function maiorDaLista(lista) {
  
}

teste("positivos", maiorDaLista([3, 9, 2]), 9);
teste("negativos", maiorDaLista([-5, -2, -8]), -2);
teste("um só", maiorDaLista([{A}]), {A});
`,
              sol: `function teste(nome, obtido, esperado) {
  console.log((obtido === esperado ? "OK " : "FALHOU ") + nome);
}

function maiorDaLista(lista) {
  let maior = lista[0];
  for (const n of lista) {
    if (n > maior) maior = n;
  }
  return maior;
}

teste("positivos", maiorDaLista([3, 9, 2]), 9);
teste("negativos", maiorDaLista([-5, -2, -8]), -2);
teste("um só", maiorDaLista([{A}]), {A});`,
              dica: 'Comece com o primeiro item da lista, e não com 0.',
              exp: 'Começando com lista[0], os negativos funcionam.',
              vars: { A: { de: -20, ate: 20 } }
            }
          ]
        },
        {
          id: 'n6l4',
          titulo: 'Erros clássicos de iniciante',
          pre: ['u5l1', 'n3l8'],
          exs: [
            {
              t: 'texto',
              titulo: 'Os erros que todo mundo comete',
              blocos: [
                { p: 'Alguns erros aparecem tanto que vale conhecer de antemão:' },
                {
                  passos: [
                    'Usar `=` no lugar de `===` dentro de um if: em vez de comparar, guarda o valor',
                    'Esquecer o `return`: a função faz a conta e devolve undefined',
                    'Comparar texto com número: `"5" === 5` é false',
                    'Mudar a lista original sem querer: sort e reverse alteram a própria lista',
                    'Esquecer de converter o que o usuário digitou: chega como texto'
                  ]
                },
                {
                  code: `function dobro(n) {
  n * 2; // faltou o return
}
console.log(dobro(4)); // undefined`
                },
                {
                  code: `const original = [3, 1, 2];
const ordenada = [...original].sort(); // copia antes de ordenar
console.log(original, ordenada);`
                },
                {
                  dica: 'Quando aparecer undefined onde você esperava um valor, a primeira suspeita é um return esquecido.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `function dobro(n) {
  n * 2;
}
console.log(dobro(4));`,
              mono: true,
              ops: ['undefined', '8', '4'],
              c: 0,
              exp: 'A conta é feita, mas ninguém devolve o resultado.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log("5" === 5);',
              mono: true,
              ops: ['false', 'true', 'Dá erro'],
              c: 0,
              exp: 'O === compara também o tipo: texto não é número.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `let x = 3;
if (x = 10) {
  console.log("dez");
} else {
  console.log("outro");
}`,
              mono: true,
              ops: ['dez', 'outro', 'Dá erro'],
              c: 0,
              exp: 'x = 10 guarda 10 em x, e 10 conta como verdadeiro. Era para ser ===.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `let x = 5;
if (x = 10) {
  console.log("dez");
} else {
  console.log("não é dez");
}`,
              ops: ['dez', 'não é dez', 'Erro'],
              c: 0,
              mono: true,
              exp: 'O = guarda 10 em x, e 10 conta como verdadeiro no if. O certo seria ===.'
            },
            {
              t: 'codigo',
              p: 'categoria(8) deveria dar "criança", mas dá "adulto". Conserte',
              start: `function categoria(idade) {
  if (idade < 12) {
    "criança";
  } else if (idade < 18) {
    return "adolescente";
  }
  return "adulto";
}
console.log(categoria(8));
console.log(categoria(15));
console.log(categoria(30));
`,
              saida: `criança
adolescente
adulto`,
              dica: 'Uma das linhas faz o valor, mas não devolve.',
              sol: `function categoria(idade) {
  if (idade < 12) {
    return "criança";
  } else if (idade < 18) {
    return "adolescente";
  }
  return "adulto";
}
console.log(categoria(8));
console.log(categoria(15));
console.log(categoria(30));`,
              exp: 'Sem o return, a função seguia até o fim e devolvia "adulto".'
            },
            {
              t: 'codigo',
              p: 'Conserte para a lista original não mudar: a primeira linha deve mostrar a original e a segunda, a ordenada',
              start: `const original = {L};
const ordenada = original.sort((a, b) => a - b);
console.log(original);
console.log(ordenada);
`,
              sol: `const original = {L};
const ordenada = [...original].sort((a, b) => a - b);
console.log(original);
console.log(ordenada);`,
              dica: 'Copie antes de ordenar: [...original].',
              exp: 'O sort muda a própria lista; a cópia protege a original.',
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
          id: 'n6l5',
          titulo: 'try, catch e throw',
          pre: ['u5l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Lidando com erros de propósito',
              blocos: [
                {
                  p: 'Alguns erros não dá para evitar escrevendo melhor: um dado inválido, um arquivo que não existe, a internet que caiu. Para esses casos, o `try` tenta executar um bloco e o `catch` captura o erro, sem o programa parar.'
                },
                {
                  code: `try {
  naoExiste();
} catch (erro) {
  console.log("Deu ruim: " + erro.message);
}
console.log("O programa continua");`
                },
                {
                  p: 'Você também pode criar um erro de propósito com `throw`, quando receber algo inválido. Assim quem chamou a função fica sabendo do problema.'
                },
                {
                  code: `function sacar(saldo, valor) {
  if (valor > saldo) throw new Error("Saldo insuficiente");
  return saldo - valor;
}
try {
  console.log(sacar(100, 30));
  console.log(sacar(100, 500));
} catch (erro) {
  console.log(erro.message);
}`
                },
                {
                  dica: 'Use try/catch para erros que podem acontecer de verdade. Ele não deve esconder bugs do seu próprio código.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `try {
  console.log("a");
  x();
  console.log("b");
} catch (e) {
  console.log("c");
}`,
              ops: ['a e c', 'a, b e c', 'Só c'],
              c: 0,
              exp: 'Quando x() falha, o resto do try é pulado e o catch roda.'
            },
            {
              t: 'escolha',
              p: 'Para que serve o throw?',
              ops: [
                'Criar um erro de propósito quando algo está inválido',
                'Esconder erros do usuário',
                'Repetir um bloco de código'
              ],
              c: 0,
              exp: 'throw avisa que algo deu errado; catch decide o que fazer.'
            },
            {
              t: 'complete',
              p: 'Complete para capturar o erro',
              code: `try {
  dividir(1, 0);
} ___ (erro) {
  console.log(erro.message);
}`,
              bank: ['catch', 'throw', 'error', 'else'],
              c: ['catch'],
              exp: 'try e catch andam sempre juntos.'
            },
            {
              t: 'escolha',
              p: 'Quantas linhas este código mostra?',
              ops: ['2', '3', '1'],
              c: 0,
              exp: 'Depois do throw, o resto do try é pulado e o catch roda.',
              code: `try {
  console.log("a");
  throw new Error("ops");
  console.log("b");
} catch (e) {
  console.log(e.message);
}`,
              mono: true
            },
            {
              t: 'codigo',
              p: 'Faça dividir(a, b) lançar o erro "Divisão por zero" quando b for 0',
              start: `function dividir(a, b) {
  
}
try {
  console.log(dividir(10, 2));
  console.log(dividir(1, 0));
} catch (erro) {
  console.log("Erro: " + erro.message);
}
`,
              saida: `5
Erro: Divisão por zero`,
              dica: 'if (b === 0) throw new Error("Divisão por zero"); e depois return a / b;',
              sol: `function dividir(a, b) {
  if (b === 0) throw new Error("Divisão por zero");
  return a / b;
}
try {
  console.log(dividir(10, 2));
  console.log(dividir(1, 0));
} catch (erro) {
  console.log("Erro: " + erro.message);
}`,
              exp: 'Sem o throw, 1 / 0 daria Infinity, um valor que ninguém espera numa conta de dinheiro.'
            },
            {
              t: 'codigo',
              p: 'Faça idadeValida(i) lançar o erro "Idade inválida" se i for negativa, e devolver i se não for',
              start: `function idadeValida(i) {
  
}
try {
  console.log(idadeValida({A}));
  console.log(idadeValida(-{B}));
} catch (erro) {
  console.log("Erro: " + erro.message);
}
`,
              sol: `function idadeValida(i) {
  if (i < 0) throw new Error("Idade inválida");
  return i;
}
try {
  console.log(idadeValida({A}));
  console.log(idadeValida(-{B}));
} catch (erro) {
  console.log("Erro: " + erro.message);
}`,
              dica: 'if (i < 0) throw new Error("Idade inválida");',
              exp: 'Quem chamou a função decide o que fazer com o erro.',
              vars: { A: { de: 1, ate: 90 }, B: { de: 1, ate: 20 } }
            }
          ]
        }
      ]
    }
  ]
});
