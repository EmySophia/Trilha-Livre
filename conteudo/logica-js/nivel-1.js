/* Trilha Livre · Lógica de programação com JavaScript · Nível 1: Pensamento computacional
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'logica-js',
  n: 1,
  titulo: 'Pensamento computacional',
  desc: 'Pensar como programador antes de escrever código.',
  unidades: [
    {
      id: 'n1u1',
      titulo: 'Algoritmos',
      conceito: 'passo a passo',
      desc: 'Instruções claras, em ordem e com fim.',
      licoes: [
        {
          id: 'n1l1',
          titulo: 'O que é um algoritmo',
          exs: [
            {
              t: 'texto',
              titulo: 'Algoritmos estão em todo lugar',
              blocos: [
                {
                  p: 'Um algoritmo é uma sequência de passos bem definidos para resolver um problema. Uma receita de bolo é um algoritmo. As instruções para montar um móvel também. O caminho que você explica para alguém chegar na sua casa, idem.'
                },
                {
                  p: 'Todo bom algoritmo tem três características: os passos estão em uma ordem, cada passo é claro (não dá para entender de dois jeitos) e ele termina.'
                },
                { p: 'Veja um algoritmo para fazer café coado:' },
                {
                  passos: [
                    'Ferver a água',
                    'Colocar o filtro no suporte',
                    'Colocar o pó no filtro',
                    'Despejar a água quente aos poucos',
                    'Esperar a água passar',
                    'Servir'
                  ]
                },
                {
                  dica: 'O computador não entende "um pouco de açúcar". Ele precisa de instruções exatas, como "duas colheres de açúcar".'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual destes é um algoritmo?',
              ops: [
                'Uma receita de bolo com os passos em ordem',
                'A foto de um bolo',
                'A lista de convidados da festa'
              ],
              c: 0,
              exp: 'A receita diz o que fazer, em que ordem, até o bolo ficar pronto.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem: trocar um pneu furado',
              lines: [
                'Afrouxar os parafusos da roda',
                'Levantar o carro com o macaco',
                'Tirar os parafusos e a roda furada',
                'Colocar o estepe e os parafusos',
                'Baixar o carro e apertar os parafusos'
              ],
              exp: 'Os parafusos são afrouxados antes de levantar o carro, enquanto a roda ainda está presa no chão. A ordem muda o resultado.'
            },
            {
              t: 'escolha',
              p: 'Qual instrução é clara o bastante para um computador?',
              ops: [
                'Some 2 ao valor de x',
                'Deixe o número um pouco maior',
                'Faça a conta do jeito certo'
              ],
              c: 0,
              exp: 'Só a primeira diz exatamente o que fazer. "Um pouco" e "do jeito certo" podem ser entendidos de muitas formas.'
            },
            {
              t: 'escolha',
              p: 'Qual destes algoritmos nunca termina?',
              ops: [
                'Escreva "oi". Volte para o primeiro passo.',
                'Escreva "oi" 3 vezes e pare.',
                'Escreva "oi" uma vez.'
              ],
              c: 0,
              exp: 'Não existe nenhuma condição para parar. Em programação isso se chama loop infinito.'
            },
            {
              t: 'ordene',
              p: 'Coloque em ordem: mandar uma mensagem pelo celular',
              lines: [
                'Desbloquear o celular',
                'Abrir o aplicativo de mensagens',
                'Escolher o contato',
                'Digitar a mensagem',
                'Tocar em enviar'
              ],
              exp: 'Cada passo depende do anterior: sem escolher o contato, não tem para quem digitar.',
              plain: true
            },
            {
              t: 'escolha',
              p: 'Por que “misture e asse até ficar bom” é um passo ruim para um computador?',
              ops: [
                '“Até ficar bom” dá para entender de vários jeitos',
                'Porque é curto demais',
                'Porque computador não faz bolo'
              ],
              c: 0,
              exp: 'Um passo claro diria quanto tempo e em que temperatura: “asse por 40 minutos a 180 °C”.'
            }
          ]
        },
        {
          id: 'n1l2',
          titulo: 'Dividir para resolver',
          exs: [
            {
              t: 'texto',
              titulo: 'Problemas grandes viram problemas pequenos',
              blocos: [
                {
                  p: 'Ninguém resolve um problema grande de uma vez. Programadores dividem o problema em partes menores, e cada parte em partes ainda menores, até cada pedaço ficar fácil. Isso se chama decomposição.'
                },
                { p: 'Por exemplo, calcular a média de uma turma pode ser dividido assim:' },
                {
                  passos: [
                    'Receber as notas dos alunos',
                    'Somar todas as notas',
                    'Dividir a soma pela quantidade de alunos',
                    'Mostrar o resultado'
                  ]
                },
                {
                  p: 'Duas outras ideias andam juntas: reconhecer padrões (perceber que um problema novo parece com outro que você já resolveu) e abstração (focar no que importa e ignorar o que não muda o resultado).'
                },
                {
                  dica: 'Em código, cada parte do problema costuma virar uma função. Você vai ver isso no Nível 4.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Para fazer um app de lista de compras, qual é uma boa primeira divisão?',
              ops: [
                'Adicionar itens, remover itens, mostrar a lista e somar o total',
                'Escolher a cor do app',
                'Escrever o código todo de uma vez'
              ],
              c: 0,
              exp: 'Cada parte é pequena o bastante para ser resolvida sozinha.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem: calcular a média de 3 notas',
              lines: [
                'Receber as três notas',
                'Somar as notas',
                'Dividir a soma por 3',
                'Mostrar o resultado'
              ],
              exp: 'Não dá para dividir antes de somar, nem mostrar antes de calcular.'
            },
            {
              t: 'escolha',
              p: 'Para calcular o troco de uma compra, quais informações você precisa?',
              ops: ['O valor da compra e o valor pago', 'O nome do cliente', 'O horário da compra'],
              c: 0,
              exp: 'Isso é abstração: o nome e o horário existem, mas não mudam o troco.'
            },
            {
              t: 'escolha',
              p: 'O que é reconhecer padrões?',
              ops: [
                'Perceber que um problema novo parece com outro já resolvido',
                'Decorar o código de outras pessoas',
                'Escrever sempre o mesmo programa'
              ],
              c: 0,
              exp: 'Calcular a média de notas e a média de gastos do mês usam o mesmo raciocínio.'
            },
            {
              t: 'escolha',
              p: 'O que é abstração?',
              ops: [
                'Focar no que importa e ignorar o que não muda o resultado',
                'Dividir o problema em partes menores',
                'Repetir um passo várias vezes'
              ],
              c: 0,
              exp: 'Dividir em partes é a decomposição. Abstração é escolher o que importa: para calcular a média, a cor do caderno do aluno não importa.'
            },
            {
              t: 'ordene',
              p: 'Decomponha: descobrir se um aluno passou de ano',
              lines: [
                'Receber as notas do aluno',
                'Calcular a média',
                'Comparar a média com 6',
                'Mostrar aprovado ou reprovado'
              ],
              exp: 'Cada parte é pequena o bastante para virar poucas linhas de código.',
              plain: true
            }
          ]
        },
        {
          id: 'n1l5',
          titulo: 'Teste de mesa',
          exs: [
            {
              t: 'texto',
              titulo: 'Rodando o algoritmo à mão',
              blocos: [
                {
                  p: 'Teste de mesa é simular o algoritmo com papel e caneta, anotando o valor de cada variável a cada passo. É assim que se confere um algoritmo nas aulas de lógica, antes mesmo de ligar o computador.'
                },
                {
                  p: 'Veja o algoritmo: comece com x valendo 2 e, três vezes seguidas, faça x receber x × 3 − 1.'
                },
                {
                  tabela: {
                    codigo: [0, 1, 2],
                    cab: ['Passo', 'Conta', 'x'],
                    linhas: [
                      ['início', '', '2'],
                      ['volta 1', '2 × 3 − 1', '5'],
                      ['volta 2', '5 × 3 − 1', '14'],
                      ['volta 3', '14 × 3 − 1', '41']
                    ]
                  }
                },
                {
                  p: 'No próximo nível você vai escrever algoritmos assim em JavaScript. Só para matar a curiosidade, este é o mesmo algoritmo. Rode e confira se bate com a tabela:'
                },
                {
                  code: `let x = 2;
for (let i = 1; i <= 3; i++) {
  x = x * 3 - 1;
}
console.log(x); // 41`
                },
                {
                  dica: 'Quando o resultado do seu programa não bater com o esperado, faça o teste de mesa. Quase sempre o erro aparece em poucas linhas.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que é teste de mesa?',
              ops: [
                'Simular o algoritmo à mão, anotando os valores a cada passo',
                'Testar o programa em computadores diferentes',
                'Apagar o código e começar de novo'
              ],
              c: 0,
              exp: 'É a forma mais simples de entender o que um código faz, linha por linha.'
            },
            {
              t: 'escolha',
              p: 'Faça o teste de mesa: quais são os valores finais de a e b?',
              code: `a recebe 3
b recebe 5
a recebe a + b
b recebe a - b`,
              ops: ['a = 8 e b = 3', 'a = 3 e b = 5', 'a = 8 e b = 5'],
              c: 0,
              exp: 'a vira 3 + 5 = 8. Depois b vira 8 − 5 = 3. Anotar cada passo numa tabela evita confusão.'
            },
            {
              t: 'escolha',
              p: 'Faça o teste de mesa: qual é o valor final de t?',
              code: `t recebe 0
para i de 1 até 4, repita:
   t recebe t + i × 2`,
              ops: ['20', '10', '8'],
              c: 0,
              exp: 'i vale 1, 2, 3 e 4. t vai somando 2, 4, 6 e 8: 0 + 2 + 4 + 6 + 8 = 20.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem para trocar os valores de a e b',
              lines: ['aux recebe a', 'a recebe b', 'b recebe aux'],
              exp: 'Sem a variável auxiliar, o valor de a se perderia no segundo passo. Faça o teste de mesa com a = café e b = leite para conferir.'
            },
            {
              t: 'escolha',
              p: 'Teste de mesa: x começa valendo {A} e, três vezes seguidas, recebe x × 2 + 1. Qual é o valor final?',
              ops: ['{= 8 * A + 7 }', '{= 2 * A + 3 }', '{= 6 * A + 1 }'],
              c: 0,
              exp: 'Volta 1: {= 2 * A + 1 }. Volta 2: {= 4 * A + 3 }. Volta 3: {= 8 * A + 7 }.',
              vars: { A: { de: 1, ate: 9 } }
            },
            {
              t: 'escolha',
              p: 'Teste de mesa: a = {A} e b = {B}. Depois de “a recebe a + b” e, em seguida, “b recebe a − b”, quanto vale b?',
              ops: ['{A}', '{B}', '{= A - B }'],
              c: 0,
              exp: 'Depois do primeiro passo, a vale {= A + B }. Então b = {= A + B } − {B} = {A}.',
              vars: { A: { de: 2, ate: 9 }, B: { de: 10, ate: 19 } }
            }
          ]
        }
      ]
    },
    {
      id: 'n1u2',
      titulo: 'Fluxogramas e pseudocódigo',
      conceito: 'Portugol',
      desc: 'Desenhar e escrever o algoritmo antes do código.',
      licoes: [
        {
          id: 'n1l3',
          titulo: 'Fluxogramas',
          exs: [
            {
              t: 'texto',
              titulo: 'Desenhando um algoritmo',
              blocos: [
                {
                  p: 'Um fluxograma é o desenho de um algoritmo. Cada forma tem um significado: o oval marca o início e o fim, o retângulo é uma ação e o losango é uma decisão, com dois caminhos (sim ou não). As setas mostram a ordem.'
                },
                { p: 'Este fluxograma decide se um aluno foi aprovado:' },
                {
                  fluxo: [
                    { k: 'ini', s: 'Início' },
                    { k: 'acao', s: 'Ler a nota' },
                    {
                      k: 'dec',
                      s: 'nota >= 6?',
                      sim: 'Mostrar "Aprovado"',
                      nao: 'Mostrar "Reprovado"'
                    },
                    { k: 'fim', s: 'Fim' }
                  ]
                },
                {
                  dica: 'Fluxogramas ajudam a enxergar todos os caminhos possíveis antes de programar, inclusive os que a gente esquece.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'No fluxograma, qual forma representa uma decisão?',
              ops: ['Losango', 'Retângulo', 'Oval'],
              c: 0,
              exp: 'O losango tem uma pergunta e duas saídas: sim e não.'
            },
            {
              t: 'escolha',
              p: 'O que o losango "nota >= 6?" faz?',
              ops: [
                'Divide o caminho em dois: sim e não',
                'Mostra a nota na tela',
                'Termina o programa'
              ],
              c: 0,
              exp: 'Dependendo da resposta, o programa segue por um caminho ou pelo outro.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Monte o fluxo de um saque no caixa eletrônico',
              lines: [
                'Início',
                'Ler o valor do saque',
                'O saldo é suficiente?',
                'Sim: liberar o dinheiro. Não: avisar "saldo insuficiente"',
                'Fim'
              ],
              exp: 'A decisão vem depois de saber o valor e antes de liberar o dinheiro.'
            },
            {
              t: 'escolha',
              p: 'No fluxograma, que forma marca o início e o fim?',
              ops: ['O oval', 'O retângulo', 'O losango'],
              c: 0,
              exp: 'Retângulo é ação e losango é decisão.'
            },
            {
              t: 'escolha',
              p: 'Quantos caminhos saem de um losango (decisão)?',
              ops: ['Dois: sim e não', 'Um só', 'Três'],
              c: 0,
              exp: 'A pergunta do losango só tem duas respostas, e cada uma leva para um lado.'
            },
            {
              t: 'ordene',
              p: 'Monte o fluxo: decidir se leva guarda-chuva',
              lines: [
                'Início',
                'Olhar a previsão do tempo',
                'Decisão: vai chover?',
                'Sim: levar o guarda-chuva. Não: sair sem ele',
                'Fim'
              ],
              exp: 'A decisão vem depois de ter a informação: primeiro a previsão.',
              plain: true
            }
          ]
        },
        {
          id: 'n1l4',
          titulo: 'Pseudocódigo e Portugol',
          exs: [
            {
              t: 'texto',
              titulo: 'Algoritmo em português',
              blocos: [
                {
                  p: 'Pseudocódigo é escrever o algoritmo em português estruturado, parecido com código, mas sem as regras de uma linguagem. Muitas faculdades e cursos técnicos no Brasil usam o Portugol, em programas como o VisuAlg e o Portugol Studio.'
                },
                {
                  code: `algoritmo "media"
var
   n1, n2, media: real
inicio
   leia(n1, n2)
   media <- (n1 + n2) / 2
   se media >= 6 entao
      escreva("Aprovado")
   senao
      escreva("Reprovado")
   fimse
fimalgoritmo`,
                  semTeste: true
                },
                { p: 'O mesmo algoritmo em JavaScript:' },
                {
                  code: `let n1 = 7;
let n2 = 6;
let media = (n1 + n2) / 2;
if (media >= 6) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}`
                },
                { p: 'Se você já estudou Portugol, esta tabela ajuda a traduzir:' },
                {
                  tabela: {
                    codigo: [0, 1],
                    cab: ['Portugol', 'JavaScript'],
                    linhas: [
                      ['escreva("oi")', 'console.log("oi")'],
                      ['x <- 5', 'x = 5'],
                      ['se ... entao ... senao ... fimse', 'if (...) { } else { }'],
                      ['enquanto ... faca ... fimenquanto', 'while (...) { }'],
                      ['para i de 1 ate 10 faca', 'for (let i = 1; i <= 10; i++)'],
                      ['e, ou, nao', '&&, ||, !']
                    ]
                  }
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Em Portugol, `media <- 7` faz o mesmo que qual código JavaScript?',
              mono: true,
              ops: ['media = 7', 'media === 7', 'console.log(7)'],
              c: 0,
              exp: 'A seta `<-` do Portugol guarda um valor, como o `=` do JavaScript.'
            },
            {
              t: 'escolha',
              p: 'Qual é o equivalente de `escreva("Olá")` em JavaScript?',
              mono: true,
              ops: ['console.log("Olá")', 'let Olá', 'if ("Olá")'],
              c: 0,
              exp: 'Os dois mostram uma mensagem na tela.'
            },
            {
              t: 'complete',
              p: 'Traduza o se/senao para JavaScript',
              code: `let nota = 8;
___ (nota >= 6) {
  console.log("Aprovado");
} ___ {
  console.log("Reprovado");
}`,
              bank: ['if', 'else', 'se', 'senao', 'entao'],
              c: ['if', 'else'],
              exp: '`se` vira `if` e `senao` vira `else`. O `entao` não existe em JavaScript: as chaves fazem esse papel.'
            },
            {
              t: 'escolha',
              p: 'Em Portugol, `enquanto x < 10 faca` vira qual código JavaScript?',
              ops: ['while (x < 10)', 'for (x < 10)', 'if (x < 10)'],
              c: 0,
              exp: 'enquanto ... faca ... fimenquanto é o while.',
              mono: true
            },
            {
              t: 'codigo',
              p: 'Traduza este Portugol para JavaScript',
              code: `para i de 1 ate 3 faca
   escreva(i)
fimpara`,
              start: '',
              saida: `1
2
3`,
              dica: 'Use a tabela da leitura: "para i de 1 ate 3 faca" vira for (let i = 1; i <= 3; i++) e escreva vira console.log. O que fica entre para e fimpara vai dentro das chaves { }.',
              sol: `for (let i = 1; i <= 3; i++) {
  console.log(i);
}`,
              exp: 'A lógica é a mesma; muda só a forma de escrever.'
            },
            {
              t: 'codigo',
              p: 'Traduza este Portugol para JavaScript (ele já está nos comentários)',
              start: `// x <- {A}
// se x > 10 entao
//    escreva("grande")
// senao
//    escreva("pequeno")
// fimse
`,
              sol: `let x = {A};
if (x > 10) {
  console.log("grande");
} else {
  console.log("pequeno");
}`,
              dica: 'x <- vira let x =, se/senao vira if/else e escreva vira console.log.',
              exp: 'A lógica é a mesma; só muda a forma de escrever.',
              vars: { A: { de: 3, ate: 20 } },
              se: 'A !== 10'
            }
          ]
        },
        {
          id: 'n1l6',
          titulo: 'Mini projeto: a passagem de ônibus',
          exs: [
            {
              t: 'texto',
              titulo: 'Do problema ao código',
              blocos: [
                {
                  p: 'Vamos fazer o caminho completo. O problema: a passagem custa R$ 5,00. Estudantes pagam meia. Pessoas com 65 anos ou mais não pagam.'
                },
                {
                  p: 'Primeiro, decomponha: as entradas são a idade e se a pessoa é estudante. A saída é o valor a pagar. Depois, desenhe o fluxo:'
                },
                {
                  fluxo: [
                    { k: 'ini', s: 'Início' },
                    { k: 'acao', s: 'Ler a idade e se é estudante' },
                    {
                      k: 'dec',
                      s: 'idade >= 65?',
                      sim: 'Valor: R$ 0,00',
                      nao: 'Estudante? R$ 2,50. Senão, R$ 5,00'
                    },
                    { k: 'fim', s: 'Mostrar o valor' }
                  ]
                },
                { p: 'Em Portugol, o algoritmo fica assim:' },
                {
                  code: `algoritmo "passagem"
var
   idade: inteiro
   estudante: logico
   valor: real
inicio
   leia(idade, estudante)
   se idade >= 65 entao
      valor <- 0
   senao
      se estudante entao
         valor <- 2.5
      senao
         valor <- 5
      fimse
   fimse
   escreva(valor)
fimalgoritmo`,
                  semTeste: true
                },
                {
                  dica: 'As regras de meia-passagem mudam de cidade para cidade. Aqui é só um exemplo para praticar.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Quais são as entradas deste problema?',
              ops: [
                'A idade e se a pessoa é estudante',
                'O valor da passagem',
                'O nome do motorista'
              ],
              c: 0,
              exp: 'O valor é a saída: ele depende das entradas.'
            },
            {
              t: 'escolha',
              p: 'Uma pessoa de 70 anos que também é estudante paga quanto?',
              ops: ['Nada', 'R$ 2,50', 'R$ 5,00'],
              c: 0,
              exp: 'A idade é verificada primeiro. Com 70 anos, nem chega a perguntar se é estudante.'
            },
            {
              t: 'ordene',
              p: 'Mesmo sem saber JavaScript ainda, dá para seguir a lógica. Monte a função',
              lines: [
                'function passagem(idade, estudante) {',
                '  if (idade >= 65) return 0;',
                '  if (estudante) return 2.5;',
                '  return 5;',
                '}'
              ],
              exp: 'A ordem dos ifs segue o fluxograma: primeiro a idade, depois o estudante.'
            },
            {
              t: 'complete',
              p: 'Complete a função seguindo o fluxograma',
              code: `function passagem(idade, estudante) {
  if (idade ___ 65) return 0;
  if (estudante) return ___;
  return 5;
}`,
              bank: ['>=', '<', '2.5', '5', '0'],
              c: ['>=', '2.5'],
              exp: 'Quem tem 65 anos ou mais não paga; estudante paga R$ 2,50; os outros, R$ 5,00. Problema, decomposição, fluxograma, pseudocódigo e código: você fez o caminho inteiro.'
            },
            {
              t: 'escolha',
              p: 'Uma pessoa de {I} anos que não é estudante paga quanto?',
              ops: [
                '{= I >= 65 ? "Nada" : "R$ 5,00" }',
                '{= I >= 65 ? "R$ 5,00" : "Nada" }',
                'R$ 2,50'
              ],
              c: 0,
              exp: 'Com 65 anos ou mais, não paga. Abaixo disso e sem ser estudante, paga inteira.',
              vars: { I: [20, 34, 50, 66, 70, 80] }
            },
            {
              t: 'codigo',
              p: 'Agora em JavaScript: com idade = {I} e estudante = {EST}, mostre o valor a pagar (0, 2.5 ou 5)',
              start: `let idade = {I};
let estudante = {EST};
`,
              sol: `let idade = {I};
let estudante = {EST};
if (idade >= 65) {
  console.log(0);
} else if (estudante) {
  console.log(2.5);
} else {
  console.log(5);
}`,
              dica: 'Teste a idade primeiro, como no fluxograma. Depois, se é estudante.',
              exp: 'É o mesmo algoritmo do Portugol, linha por linha.',
              vars: { I: [15, 17, 30, 65, 72], EST: ['true', 'false'] }
            }
          ]
        }
      ]
    }
  ]
});
