/* Trilha Livre · Lógica de programação com JavaScript · Nível 7: Projetos
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'logica-js',
  n: 7,
  titulo: 'Projetos',
  desc: 'Programas completos com cara de Brasil.',
  unidades: [
    {
      id: 'n7u1',
      titulo: 'Dinheiro e contas',
      conceito: 'R$',
      desc: 'Troco, parcelas, conversão e gastos do mês.',
      licoes: [
        {
          id: 'n7l1',
          titulo: 'Troco do caixa',
          pre: ['u4l1', 'n3l3'],
          exs: [
            {
              t: 'texto',
              titulo: 'Projeto: calcular o troco',
              blocos: [
                {
                  p: 'O caixa precisa dar o troco usando o menor número de notas e moedas. A estratégia é começar pela maior nota que cabe, ver quantas dela cabem e seguir para a próxima com o que sobrou. Esse tipo de estratégia se chama algoritmo guloso.'
                },
                {
                  passos: [
                    'Para cada nota, da maior para a menor:',
                    'Quantidade = parte inteira de (valor ÷ nota)',
                    'Valor = o que sobra, ou seja, valor % nota',
                    'Se a quantidade for maior que zero, mostrar'
                  ]
                },
                {
                  code: `console.log(Math.floor(146 / 100)); // 1 nota de 100
console.log(146 % 100);             // sobram 46`
                },
                {
                  p: 'Atenção com centavos: o computador guarda decimais de um jeito aproximado.'
                },
                { code: 'console.log(0.1 + 0.2); // 0.30000000000000004' },
                {
                  dica: 'Sistemas de verdade guardam dinheiro em centavos (números inteiros) para fugir desse problema: R$ 12,50 vira 1250.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log(0.1 + 0.2);',
              mono: true,
              ops: ['0.30000000000000004', '0.3', '0.12'],
              c: 0,
              exp: 'Decimais são guardados de forma aproximada em binário.'
            },
            {
              t: 'escolha',
              p: 'Por que sistemas financeiros costumam guardar valores em centavos?',
              ops: [
                'Números inteiros não têm erro de arredondamento',
                'Porque ocupa menos espaço na tela',
                'Porque o real não tem centavos'
              ],
              c: 0,
              exp: '1250 centavos é exato; 12.5 em binário nem sempre é.'
            },
            {
              t: 'codigo',
              p: 'Complete troco(valor): mostre "R$ nota: quantidade" para cada nota usada (pule as com quantidade zero)',
              start: `function troco(valor) {
  const notas = [200, 100, 50, 20, 10, 5, 2, 1];
  
}
troco(146);
`,
              saida: `R$ 100: 1
R$ 20: 2
R$ 5: 1
R$ 1: 1`,
              dica: 'Para cada nota: const qtd = Math.floor(valor / nota); valor = valor % nota; se qtd > 0, console.log(`R$ ${nota}: ${qtd}`).',
              sol: `function troco(valor) {
  const notas = [200, 100, 50, 20, 10, 5, 2, 1];
  for (const nota of notas) {
    const qtd = Math.floor(valor / nota);
    valor = valor % nota;
    if (qtd > 0) console.log(\`R$ \${nota}: \${qtd}\`);
  }
}
troco(146);`,
              exp: '146 = 100 + 20 + 20 + 5 + 1.'
            }
          ]
        },
        {
          id: 'n7l2',
          titulo: 'Parcelas com juros',
          pre: ['u5l1', 'u1l2'],
          exs: [
            {
              t: 'texto',
              titulo: 'Projeto: simular um parcelamento',
              blocos: [
                {
                  p: 'Nos juros compostos, os juros de cada mês entram na conta do mês seguinte: são juros sobre juros. É assim que funcionam financiamentos, cartão de crédito e cheque especial.'
                },
                {
                  p: 'Para parcelas fixas, a fórmula mais usada é a da tabela Price, comum em financiamentos de carro e empréstimos pessoais no Brasil:'
                },
                { code: 'parcela = valor × taxa / (1 − (1 + taxa) ^ −meses)', semTeste: true },
                {
                  p: 'Em JavaScript, a potência é `**`, e `.toFixed(2)` arredonda para duas casas decimais.'
                },
                {
                  code: `const valor = 1000, taxa = 0.03, meses = 10;
const p = valor * taxa / (1 - (1 + taxa) ** -meses);
console.log(p.toFixed(2));               // 117.23
console.log((p * meses).toFixed(2));     // total pago: 1172.31`
                },
                { dica: 'A taxa entra em decimal: 3% ao mês é 0.03.' }
              ]
            },
            {
              t: 'escolha',
              p: 'O que são juros compostos?',
              ops: [
                'Juros calculados sobre o valor que já inclui os juros anteriores',
                'Juros só sobre o valor inicial',
                'Um desconto para quem paga à vista'
              ],
              c: 0,
              exp: 'Por isso uma dívida parada cresce cada vez mais rápido.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log(2 ** 3);',
              mono: true,
              ops: ['8', '6', '9'],
              c: 0,
              exp: '2 elevado a 3: 2 × 2 × 2.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: 'console.log((2.5).toFixed(2));',
              mono: true,
              ops: ['2.50', '2.5', '3'],
              c: 0,
              exp: 'toFixed(2) sempre mostra duas casas decimais.'
            },
            {
              t: 'codigo',
              p: 'Escreva parcela(valor, taxa, meses) devolvendo o valor com duas casas',
              start: `function parcela(valor, taxa, meses) {
  
}
console.log(parcela(1000, 0.03, 10));
console.log(parcela(2400, 0.02, 12));
`,
              saida: `117.23
226.94`,
              dica: 'return (valor * taxa / (1 - (1 + taxa) ** -meses)).toFixed(2);',
              sol: `function parcela(valor, taxa, meses) {
  return (valor * taxa / (1 - (1 + taxa) ** -meses)).toFixed(2);
}
console.log(parcela(1000, 0.03, 10));
console.log(parcela(2400, 0.02, 12));`,
              exp: 'Multiplique a parcela pelos meses e compare com o valor original para ver quanto custam os juros.'
            }
          ]
        },
        {
          id: 'n7l3',
          titulo: 'Gastos do mês e câmbio',
          pre: ['n3l5', 'n4l2'],
          exs: [
            {
              t: 'texto',
              titulo: 'Projeto: controle de gastos',
              blocos: [
                {
                  p: 'Um controle de gastos é uma lista de objetos. Com o que você já sabe, dá para somar o total, filtrar uma categoria e somar por categoria.'
                },
                {
                  code: `const gastos = [
  { desc: "Feira", cat: "mercado", valor: 120 },
  { desc: "Ônibus", cat: "transporte", valor: 45 },
  { desc: "Açougue", cat: "mercado", valor: 80 }
];
const total = gastos.reduce((s, g) => s + g.valor, 0);
console.log(total); // 245

const porCat = {};
for (const g of gastos) {
  porCat[g.cat] = (porCat[g.cat] || 0) + g.valor;
}
console.log(porCat); // { mercado: 200, transporte: 45 }`
                },
                {
                  p: 'O truque `(porCat[g.cat] || 0)` usa 0 quando a categoria ainda não existe no objeto.'
                },
                {
                  p: 'Conversão de moeda é uma divisão: reais ÷ cotação. A cotação muda todo dia, então num app real ela viria de um serviço na internet. Aqui usamos um valor de exemplo.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `const g = [{ valor: 10 }, { valor: 15 }];
console.log(g.reduce((s, x) => s + x.valor, 0));`,
              mono: true,
              ops: ['25', '[10,15]', '1015'],
              c: 0,
              exp: 'reduce somou o valor de cada objeto.'
            },
            {
              t: 'codigo',
              p: 'Mostre o total de cada categoria, uma por linha, no formato "categoria: total"',
              start: `const gastos = [
  { desc: "Feira", cat: "mercado", valor: 300 },
  { desc: "Ônibus", cat: "transporte", valor: 120 },
  { desc: "Cinema", cat: "lazer", valor: 50 },
  { desc: "Padaria", cat: "mercado", valor: 150 },
  { desc: "Show", cat: "lazer", valor: 30 }
];
`,
              saida: `mercado: 450
transporte: 120
lazer: 80`,
              dica: 'Some num objeto por categoria. Depois percorra com for (const cat in porCat) e mostre `${cat}: ${porCat[cat]}`.',
              sol: `const gastos = [
  { desc: "Feira", cat: "mercado", valor: 300 },
  { desc: "Ônibus", cat: "transporte", valor: 120 },
  { desc: "Cinema", cat: "lazer", valor: 50 },
  { desc: "Padaria", cat: "mercado", valor: 150 },
  { desc: "Show", cat: "lazer", valor: 30 }
];
const porCat = {};
for (const g of gastos) {
  porCat[g.cat] = (porCat[g.cat] || 0) + g.valor;
}
for (const cat in porCat) {
  console.log(\`\${cat}: \${porCat[cat]}\`);
}`,
              exp: 'Com mais uma linha você descobre a categoria que mais pesa no mês.'
            },
            {
              t: 'codigo',
              p: 'Escreva converter(reais, cotacao) devolvendo o valor em dólares com duas casas (cotação de exemplo)',
              start: `function converter(reais, cotacao) {
  
}
console.log(converter(100, 5.40));
console.log(converter(250, 5.40));
`,
              saida: `18.52
46.30`,
              dica: 'return (reais / cotacao).toFixed(2);',
              sol: `function converter(reais, cotacao) {
  return (reais / cotacao).toFixed(2);
}
console.log(converter(100, 5.40));
console.log(converter(250, 5.40));`,
              exp: 'Para converter de volta, multiplique pela cotação.'
            }
          ]
        },
        {
          id: 'n7l8',
          titulo: 'Guardando dinheiro todo mês',
          pre: ['u4l2', 'u5l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Projeto: simular um investimento',
              blocos: [
                {
                  p: 'Quando você guarda dinheiro todo mês numa aplicação, duas coisas acontecem a cada mês: o saldo rende juros e entra um novo depósito. Como o rendimento depende do saldo do mês anterior, o jeito natural de simular é um laço, mês a mês.'
                },
                {
                  code: `let saldo = 0;
for (let mes = 1; mes <= 12; mes++) {
  saldo = saldo * 1.006 + 100; // rende 0,6% e entra R$ 100
}
console.log(saldo.toFixed(2));`
                },
                {
                  p: 'Para descobrir em quantos meses você chega numa meta, o laço certo é o `while`: você não sabe de antemão quantas voltas vão ser.'
                },
                {
                  dica: 'A taxa de 0,6% ao mês é só um exemplo para o exercício. Rendimentos reais variam e não são garantidos.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Por que simular mês a mês com um laço?',
              ops: [
                'O rendimento de cada mês depende do saldo do mês anterior',
                'Porque laços são mais rápidos que contas',
                'Porque o JavaScript não sabe multiplicar decimais'
              ],
              c: 0,
              exp: 'Cada volta usa o resultado da anterior.'
            },
            {
              t: 'escolha',
              p: 'O que aparece no console?',
              code: `let s = 100;
s = s * 1.1;
s = s * 1.1;
console.log(s.toFixed(2));`,
              mono: true,
              ops: ['121.00', '120.00', '110.00'],
              c: 0,
              exp: 'No segundo mês, os 10% rendem sobre 110, não sobre 100. Juros sobre juros.'
            },
            {
              t: 'codigo',
              p: 'Escreva simular(aporte, taxa, meses) devolvendo o saldo final com duas casas',
              start: `function simular(aporte, taxa, meses) {
  
}
console.log(simular(200, 0.006, 12));
console.log(simular(200, 0.006, 60));
`,
              saida: `2480.81
14392.95`,
              dica: 'Saldo começa em 0. A cada mês: saldo = saldo * (1 + taxa) + aporte.',
              sol: `function simular(aporte, taxa, meses) {
  let saldo = 0;
  for (let m = 1; m <= meses; m++) {
    saldo = saldo * (1 + taxa) + aporte;
  }
  return saldo.toFixed(2);
}
console.log(simular(200, 0.006, 12));
console.log(simular(200, 0.006, 60));`,
              exp: 'Em 60 meses você depositou R$ 12.000. O resto veio dos juros.'
            },
            {
              t: 'codigo',
              p: 'Escreva mesesAte(meta, aporte, taxa): em quantos meses o saldo chega na meta?',
              start: `function mesesAte(meta, aporte, taxa) {
  
}
console.log(mesesAte(5000, 300, 0.006));
console.log(mesesAte(10000, 500, 0.006));
`,
              saida: `16
19`,
              dica: 'Use while (saldo < meta), contando os meses dentro do laço.',
              sol: `function mesesAte(meta, aporte, taxa) {
  let saldo = 0, meses = 0;
  while (saldo < meta) {
    saldo = saldo * (1 + taxa) + aporte;
    meses++;
  }
  return meses;
}
console.log(mesesAte(5000, 300, 0.006));
console.log(mesesAte(10000, 500, 0.006));`,
              exp: 'for quando você sabe quantas voltas; while quando depende de uma condição.'
            }
          ]
        }
      ]
    },
    {
      id: 'n7u2',
      titulo: 'Jogos e validação',
      conceito: 'CPF · jogos',
      desc: 'Dígito verificador, adivinhação, jogo da velha e lista de compras.',
      licoes: [
        {
          id: 'n7l4',
          titulo: 'Validar CPF',
          pre: ['n3l1', 'n4l2', 'u4l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Projeto: o dígito verificador do CPF',
              blocos: [
                {
                  p: 'Os dois últimos números do CPF não são aleatórios. Eles são calculados a partir dos 9 primeiros e servem para pegar erros de digitação. Validar CPF é um ótimo exercício de lógica.'
                },
                { p: 'Para o primeiro dígito verificador:' },
                {
                  passos: [
                    'Multiplique os 9 primeiros dígitos por 10, 9, 8, 7, 6, 5, 4, 3 e 2',
                    'Some os resultados',
                    'Calcule o resto da soma por 11',
                    'Se o resto for menor que 2, o dígito é 0. Senão, é 11 menos o resto'
                  ]
                },
                {
                  p: 'O segundo dígito é igual, mas usando os 10 primeiros dígitos e os pesos de 11 até 2. Um CPF com todos os números iguais, como 111.111.111-11, passa na conta mas é considerado inválido.'
                },
                {
                  code: `const cpf = "52998224725"; // CPF de exemplo, válido e fictício
const d = cpf.split("").map(Number);
let soma = 0;
for (let i = 0; i < 9; i++) soma += d[i] * (10 - i);
const resto = soma % 11;
console.log(resto < 2 ? 0 : 11 - resto); // 2, o primeiro dígito verificador`
                },
                {
                  dica: 'Use sempre CPFs de exemplo nos seus testes. Nunca coloque CPFs de pessoas reais em código ou em lugares públicos.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Quantos dígitos verificadores o CPF tem?',
              ops: ['2', '1', '11'],
              c: 0,
              exp: 'Os dois que vêm depois do traço.'
            },
            {
              t: 'escolha',
              p: 'O que `"529.982.247-25".replaceAll(".", "")` devolve?',
              mono: true,
              ops: ['529982247-25', '52998224725', '529.982.247'],
              c: 0,
              exp: 'Só os pontos foram removidos. O traço continua.'
            },
            {
              t: 'codigo',
              p: 'Escreva validaCPF(cpf) para 11 dígitos sem pontuação',
              start: `function validaCPF(cpf) {
  
}
console.log(validaCPF("52998224725"));
console.log(validaCPF("52998224726"));
console.log(validaCPF("11111111111"));
`,
              saida: `true
false
false`,
              dica: 'Crie uma função dv(qtd) que soma d[i] * (qtd + 1 - i) para os qtd primeiros dígitos e aplica a regra do resto. Compare dv(9) com d[9] e dv(10) com d[10]. Antes, recuse se todos os dígitos forem iguais.',
              sol: `function validaCPF(cpf) {
  const d = cpf.split("").map(Number);
  if (d.every(x => x === d[0])) return false;
  function dv(qtd) {
    let soma = 0;
    for (let i = 0; i < qtd; i++) soma += d[i] * (qtd + 1 - i);
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  }
  return dv(9) === d[9] && dv(10) === d[10];
}
console.log(validaCPF("52998224725"));
console.log(validaCPF("52998224726"));
console.log(validaCPF("11111111111"));`,
              exp: 'CNPJ, cartões de crédito e códigos de barras usam ideias parecidas.'
            }
          ]
        },
        {
          id: 'n7l5',
          titulo: 'Jogo de adivinhação',
          pre: ['u4l3', 'u3l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Projeto: adivinhe o número',
              blocos: [
                {
                  p: 'O computador sorteia um número de 1 a 100 e o jogador tenta adivinhar. A cada palpite, o jogo diz se o número secreto é maior ou menor.'
                },
                {
                  code: `const secreto = Math.floor(Math.random() * 100) + 1;
console.log(secreto); // muda a cada execução`
                },
                {
                  p: '`Math.random()` dá um decimal entre 0 e 1 (sem chegar no 1). Multiplicando por 100 e tirando a parte decimal com `Math.floor`, sai de 0 a 99. Somando 1, de 1 a 100.'
                },
                {
                  p: 'Aqui nas lições o jogo recebe os palpites prontos numa lista. Num app de verdade, eles viriam do teclado ou de um botão.'
                },
                {
                  dica: 'A melhor estratégia para o jogador é a busca binária: começar no 50 e sempre chutar o meio do que sobrou. Nunca passa de 7 palpites.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Que números `Math.floor(Math.random() * 10) + 1` pode gerar?',
              ops: ['De 1 a 10', 'De 0 a 10', 'De 1 a 9'],
              c: 0,
              exp: 'Sem o +1 seria de 0 a 9.'
            },
            {
              t: 'codigo',
              p: 'Complete jogar(secreto, palpites). Para cada palpite mostre "N: é maior", "N: é menor" ou "N: acertou em X tentativas!" e pare ao acertar.',
              start: `function jogar(secreto, palpites) {
  
}
jogar(37, [50, 25, 37, 40]);
`,
              saida: `50: é menor
25: é maior
37: acertou em 3 tentativas!`,
              dica: '"é menor" quer dizer que o secreto é menor que o palpite. Use for com índice para contar as tentativas e return para parar.',
              sol: `function jogar(secreto, palpites) {
  for (let i = 0; i < palpites.length; i++) {
    const p = palpites[i];
    if (p === secreto) {
      console.log(\`\${p}: acertou em \${i + 1} tentativas!\`);
      return;
    }
    console.log(p > secreto ? \`\${p}: é menor\` : \`\${p}: é maior\`);
  }
}
jogar(37, [50, 25, 37, 40]);`,
              exp: 'Repare que o 40 nunca foi usado: o jogo acabou antes.'
            }
          ]
        },
        {
          id: 'n7l6',
          titulo: 'Jogo da velha',
          pre: ['n3l6'],
          exs: [
            {
              t: 'texto',
              titulo: 'Projeto: quem ganhou?',
              blocos: [
                {
                  p: 'O tabuleiro do jogo da velha é uma matriz 3 por 3. Para saber se alguém venceu, basta conferir as 8 combinações possíveis: 3 linhas, 3 colunas e 2 diagonais.'
                },
                {
                  p: 'Um jeito organizado é guardar as combinações como listas de posições e testar uma por uma:'
                },
                {
                  code: `const linhas = [
  [[0,0],[0,1],[0,2]], [[1,0],[1,1],[1,2]], [[2,0],[2,1],[2,2]], // linhas
  [[0,0],[1,0],[2,0]], [[0,1],[1,1],[2,1]], [[0,2],[1,2],[2,2]], // colunas
  [[0,0],[1,1],[2,2]], [[0,2],[1,1],[2,0]]                       // diagonais
];
console.log(linhas.length); // 8`
                },
                {
                  p: 'Para cada combinação, pegue as três casas. Se a primeira não estiver vazia e as três forem iguais, temos um vencedor.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Quantas combinações de vitória existem no jogo da velha?',
              ops: ['8', '6', '9'],
              c: 0,
              exp: '3 linhas + 3 colunas + 2 diagonais.'
            },
            {
              t: 'codigo',
              p: 'Escreva vencedor(t) que devolve "X", "O" ou "ninguém"',
              start: `function vencedor(t) {
  
}
console.log(vencedor([["X","X","X"],["O","O",""],["","",""]]));
console.log(vencedor([["X","O","X"],["X","O",""],["","O",""]]));
console.log(vencedor([["X","O","X"],["X","O","O"],["O","X","X"]]));
`,
              saida: `X
O
ninguém`,
              dica: 'Copie a lista de combinações da leitura. Para cada combinação, leia as três casas no tabuleiro (na primeira linha, por exemplo, t[0][0], t[0][1] e t[0][2]) e veja se são iguais e não vazias.',
              sol: `function vencedor(t) {
  const linhas = [
    [[0,0],[0,1],[0,2]], [[1,0],[1,1],[1,2]], [[2,0],[2,1],[2,2]],
    [[0,0],[1,0],[2,0]], [[0,1],[1,1],[2,1]], [[0,2],[1,2],[2,2]],
    [[0,0],[1,1],[2,2]], [[0,2],[1,1],[2,0]]
  ];
  for (const [a, b, c] of linhas) {
    const v = t[a[0]][a[1]];
    if (v !== "" && v === t[b[0]][b[1]] && v === t[c[0]][c[1]]) return v;
  }
  return "ninguém";
}
console.log(vencedor([["X","X","X"],["O","O",""],["","",""]]));
console.log(vencedor([["X","O","X"],["X","O",""],["","O",""]]));
console.log(vencedor([["X","O","X"],["X","O","O"],["O","X","X"]]));`,
              exp: 'Com isso e uma tela de botões, você tem o jogo completo.'
            }
          ]
        },
        {
          id: 'n7l9',
          titulo: 'Tabela do campeonato',
          pre: ['n3l5', 'n4l4'],
          exs: [
            {
              t: 'texto',
              titulo: 'Projeto: classificação',
              blocos: [
                {
                  p: 'Como no Brasileirão, vitória vale 3 pontos, empate vale 1 e derrota vale 0. Aqui o desempate é pelo saldo de gols (gols feitos menos gols sofridos).'
                },
                {
                  passos: [
                    'Criar um objeto com uma entrada por time: pontos e saldo',
                    'Para cada jogo, atualizar os dois times',
                    'Transformar o objeto em lista com Object.values',
                    'Ordenar por pontos e, se empatar, por saldo',
                    'Mostrar a classificação'
                  ]
                },
                {
                  code: `const times = [
  { nome: "A", pontos: 4, saldo: 1 },
  { nome: "B", pontos: 4, saldo: 3 }
];
times.sort((x, y) => y.pontos - x.pontos || y.saldo - x.saldo);
console.log(times[0].nome); // B`
                },
                {
                  p: 'O `||` no sort é o truque do desempate: se a diferença de pontos der 0 (empate), ele usa a diferença de saldo.'
                },
                {
                  dica: 'Os times do exercício são fictícios. O mesmo código serve para qualquer campeonato de pontos corridos.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Um time com 5 vitórias, 2 empates e 3 derrotas tem quantos pontos?',
              ops: ['17', '15', '10'],
              c: 0,
              exp: '5 × 3 + 2 × 1 + 3 × 0 = 17.'
            },
            {
              t: 'escolha',
              p: 'O que `lista.sort((a, b) => b.pontos - a.pontos)` faz?',
              ops: [
                'Ordena do maior para o menor número de pontos',
                'Ordena do menor para o maior',
                'Soma os pontos de todos'
              ],
              c: 0,
              exp: 'b − a coloca os maiores primeiro.'
            },
            {
              t: 'codigo',
              p: 'Monte a classificação no formato "1. Time X pts, saldo Y"',
              start: `const jogos = [
  { casa: "Ventania", gc: 2, fora: "Serrano", gf: 0 },
  { casa: "Cerrado", gc: 1, fora: "Vale", gf: 1 },
  { casa: "Serrano", gc: 3, fora: "Cerrado", gf: 0 },
  { casa: "Vale", gc: 0, fora: "Ventania", gf: 2 },
  { casa: "Ventania", gc: 1, fora: "Cerrado", gf: 1 },
  { casa: "Vale", gc: 0, fora: "Serrano", gf: 0 }
];
`,
              saida: `1. Ventania 7 pts, saldo 4
2. Serrano 4 pts, saldo 1
3. Vale 2 pts, saldo -2
4. Cerrado 2 pts, saldo -3`,
              dica: 'Crie uma função registrar(nome, feitos, sofridos) que atualiza a tabela. Chame duas vezes por jogo: uma para cada time.',
              sol: `const jogos = [
  { casa: "Ventania", gc: 2, fora: "Serrano", gf: 0 },
  { casa: "Cerrado", gc: 1, fora: "Vale", gf: 1 },
  { casa: "Serrano", gc: 3, fora: "Cerrado", gf: 0 },
  { casa: "Vale", gc: 0, fora: "Ventania", gf: 2 },
  { casa: "Ventania", gc: 1, fora: "Cerrado", gf: 1 },
  { casa: "Vale", gc: 0, fora: "Serrano", gf: 0 }
];
const tabela = {};
function registrar(nome, feitos, sofridos) {
  if (!tabela[nome]) tabela[nome] = { nome, pontos: 0, saldo: 0 };
  const t = tabela[nome];
  t.saldo += feitos - sofridos;
  if (feitos > sofridos) t.pontos += 3;
  else if (feitos === sofridos) t.pontos += 1;
}
for (const j of jogos) {
  registrar(j.casa, j.gc, j.gf);
  registrar(j.fora, j.gf, j.gc);
}
const lista = Object.values(tabela);
lista.sort((a, b) => b.pontos - a.pontos || b.saldo - a.saldo);
lista.forEach((t, i) => console.log(\`\${i + 1}. \${t.nome} \${t.pontos} pts, saldo \${t.saldo}\`));`,
              exp: 'Vale e Cerrado empataram em pontos; o saldo de gols decidiu.'
            }
          ]
        },
        {
          id: 'n7l7',
          titulo: 'Lista de compras',
          pre: ['n4l2', 'n3l5'],
          exs: [
            {
              t: 'texto',
              titulo: 'Projeto final: lista de compras',
              blocos: [
                {
                  p: 'Quase todo app faz quatro operações com dados: criar, ler, atualizar e apagar. Uma lista de compras é o jeito perfeito de praticar isso com tudo o que você aprendeu.'
                },
                {
                  code: `let lista = [];
lista.push({ nome: "Arroz", preco: 25 });
lista.push({ nome: "Café", preco: 18 });
lista = lista.filter(item => item.nome !== "Arroz"); // remove
console.log(lista);`
                },
                {
                  p: 'Separar cada operação numa função deixa o código fácil de entender e de testar. Daqui para frente, o próximo passo é ligar essas funções a uma tela com HTML, e o app vira algo que qualquer pessoa usa.'
                },
                {
                  dica: 'Parabéns por chegar até aqui. Você já sabe as bases da lógica que servem para qualquer linguagem, inclusive Python.'
                }
              ]
            },
            {
              t: 'codigo',
              p: 'Complete as funções adicionar, remover e total para os testes passarem',
              start: `function adicionar(lista, nome, preco) {
  
}
function remover(lista, nome) {
  // devolva uma lista nova sem o item
}
function total(lista) {
  
}

let compras = [];
adicionar(compras, "Arroz", 25);
adicionar(compras, "Feijão", 9.5);
adicionar(compras, "Café", 18);
console.log("Itens: " + compras.length);
compras = remover(compras, "Feijão");
console.log("Itens: " + compras.length);
console.log("Total: " + total(compras));
`,
              saida: `Itens: 3
Itens: 2
Total: 43`,
              dica: 'adicionar usa lista.push({ nome, preco }). remover usa filter. total usa reduce.',
              sol: `function adicionar(lista, nome, preco) {
  lista.push({ nome, preco });
}
function remover(lista, nome) {
  return lista.filter(item => item.nome !== nome);
}
function total(lista) {
  return lista.reduce((s, item) => s + item.preco, 0);
}

let compras = [];
adicionar(compras, "Arroz", 25);
adicionar(compras, "Feijão", 9.5);
adicionar(compras, "Café", 18);
console.log("Itens: " + compras.length);
compras = remover(compras, "Feijão");
console.log("Itens: " + compras.length);
console.log("Total: " + total(compras));`,
              exp: 'Você terminou a trilha. Agora é construir seus próprios projetos.'
            }
          ]
        }
      ]
    }
  ]
});
