/* Trilha Livre · O Capital, de Marx · Nível 3: Do dinheiro ao capital
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'o-capital',
  n: 3,
  titulo: 'Do dinheiro ao capital',
  desc: 'Livro I, seções 2 e 3: a força de trabalho, a mais-valia e a jornada de trabalho.',
  videos: [
    {
      titulo: 'Curso O Capital, de Marx · aula 3',
      canal: 'TV Boitempo',
      obs: 'Marcelo Carcanholo: capital, fetichismo e classes sociais',
      url: 'https://www.youtube.com/watch?v=6JYKsqECnoI'
    },
    {
      titulo: 'Como cheguei ao marxismo, com a mais-valia explicada',
      canal: 'Jones Manoel',
      obs: 'tem um trecho que explica a mais-valia de um jeito simples',
      url: 'https://www.youtube.com/watch?v=NS7az_aZPec'
    },
    {
      titulo: 'Reading Marx\'s Capital, volume 1 (em inglês)',
      canal: 'David Harvey',
      obs: 'as aulas sobre a transformação do dinheiro em capital e a jornada de trabalho',
      url: 'https://davidharvey.org/2008/06/getting-started/'
    }
  ],
  unidades: [
    {
      id: 'kpu3',
      titulo: 'A mais-valia',
      conceito: 'D – M – D′',
      desc: 'Capítulos 4 a 10 do Livro I.',
      licoes: [
        {
          id: 'kp3l1',
          titulo: 'O dinheiro que cresce',
          exs: [
            {
              t: 'texto',
              titulo: 'D – M – D′',
              blocos: [
                {
                  p: 'O capitalista faz um movimento diferente do sapateiro: compra para vender mais caro. A fórmula é D – M – D′, em que D′ é maior que D. Não faria sentido trocar 100 reais por 100 reais: o objetivo é terminar com mais dinheiro do que começou.'
                },
                {
                  p: 'Esse acréscimo, a diferença entre D′ e D, é a mais-valia. E o valor que se movimenta assim, buscando sempre crescer, é o que Marx chama de capital. Capital, para ele, não é uma coisa, como dinheiro ou máquina: é um movimento, valor em busca de mais valor.'
                },
                {
                  p: 'Mas aqui aparece um enigma. Se as mercadorias se trocam pelo seu valor, como pode alguém comprar e vender e sair com mais? Se um vende acima do valor, outro perde, e no conjunto da sociedade ninguém ganha. A esperteza no comércio não explica o lucro de toda uma classe.'
                },
                {
                  p: 'A solução, diz Marx, precisa estar numa mercadoria especial, cujo uso crie mais valor do que ela custa. Essa mercadoria existe e está à venda todos os dias: a força de trabalho.'
                },
                {
                  dica: 'O D′ se lê "D linha". Ele indica o dinheiro inicial mais o acréscimo.'
                }
              ]
            },
            {
              t: 'complete',
              p: 'Complete a fórmula geral do capital',
              code: 'D – M – ___',
              bank: ['D′', 'M', 'D', 'P'],
              c: ['D′'],
              exp: 'Comprar para vender mais caro: no fim, há mais dinheiro do que no começo.'
            },
            {
              t: 'escolha',
              p: 'O que é capital, para Marx?',
              ops: [
                'Valor em movimento, que busca sempre crescer',
                'Qualquer quantidade de dinheiro guardada',
                'As máquinas de uma fábrica'
              ],
              c: 0,
              exp: 'Dinheiro guardado no colchão não é capital; dinheiro investido para render, sim.'
            },
            {
              t: 'escolha',
              p: 'Por que a esperteza no comércio não explica o lucro de toda a classe capitalista?',
              ops: [
                'Porque o que um ganha vendendo caro, outro perde, e o total não cresce',
                'Porque o comércio é proibido',
                'Porque todos os comerciantes são honestos'
              ],
              c: 0,
              exp: 'Por isso Marx procura a origem da mais-valia fora da troca: na produção.'
            }
          ]
        },
        {
          id: 'kp3l2',
          titulo: 'A força de trabalho',
          exs: [
            {
              t: 'texto',
              titulo: 'Uma mercadoria especial',
              blocos: [
                {
                  p: 'A força de trabalho é a capacidade de trabalhar de uma pessoa. Para que ela esteja à venda, o trabalhador precisa ser livre em dois sentidos: livre para vender a si mesmo por um tempo, porque não é escravo, e livre dos meios de produção, porque não tem terra nem ferramentas para produzir por conta própria.'
                },
                {
                  p: 'Como toda mercadoria, a força de trabalho tem um valor: o valor de tudo o que o trabalhador precisa para viver e se reproduzir, como comida, moradia, transporte, roupa, a criação dos filhos e a formação. Esse valor aparece como salário.'
                },
                {
                  p: 'Marx diz que esse valor tem um elemento histórico e moral: o que é necessário para viver depende do país, da época e das lutas dos trabalhadores. Ter geladeira e celular pode fazer parte do necessário hoje, sem que isso mude a relação.'
                },
                {
                  p: 'O segredo está na diferença entre o valor da força de trabalho e o valor que ela cria quando é usada. O capitalista paga o valor de um dia de força de trabalho, mas o trabalhador, ao longo desse dia, cria mais valor do que isso.'
                },
                {
                  dica: 'Marx insiste que o capitalista não engana ninguém na troca: paga o salário combinado. A mais-valia nasce depois, na produção.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Em que dois sentidos o trabalhador é livre, para Marx?',
              ops: [
                'Livre para vender a força de trabalho e livre, isto é, sem, meios de produção',
                'Livre para escolher o salário e o horário',
                'Livre de impostos e de patrões'
              ],
              c: 0,
              exp: 'É a "dupla liberdade" que torna o trabalho assalariado possível.'
            },
            {
              t: 'escolha',
              p: 'O que determina o valor da força de trabalho?',
              ops: [
                'O valor do que o trabalhador precisa para viver e se reproduzir',
                'A quantidade de valor que ele cria no dia',
                'A vontade do patrão'
              ],
              c: 0,
              exp: 'É a diferença entre esses dois valores que explica a mais-valia.'
            },
            {
              t: 'escolha',
              p: 'Por que o valor da força de trabalho tem um elemento histórico e moral?',
              ops: [
                'Porque o necessário para viver muda com o país, a época e as lutas dos trabalhadores',
                'Porque é fixado pela igreja',
                'Porque é sempre o mesmo em todo lugar'
              ],
              c: 0,
              exp: 'Por isso conquistas como férias e salário mínimo fazem diferença.'
            }
          ]
        },
        {
          id: 'kp3l3',
          titulo: 'Capital constante, variável e taxa de mais-valia',
          exs: [
            {
              t: 'texto',
              titulo: 'Fazendo as contas',
              blocos: [
                {
                  p: 'Marx divide o capital investido em duas partes. O capital constante, c, é o que vai para os meios de produção: máquinas, matérias-primas, energia. Ele transfere o próprio valor ao produto, sem aumentá-lo. O capital variável, v, é o que vai para os salários: é a única parte que cria valor novo, maior do que o seu.'
                },
                {
                  p: 'O valor de uma mercadoria é, então, c + v + m: o valor dos meios de produção gastos, mais o valor dos salários, mais a mais-valia.'
                },
                {
                  p: 'A taxa de mais-valia mede o grau de exploração: é a mais-valia dividida pelo capital variável, m dividido por v. Se o trabalhador produz o valor do salário em 4 horas e trabalha 8, o trabalho excedente é igual ao necessário, e a taxa é de 100%.'
                },
                {
                  code: `Uma oficina num mês:
c = 6.000 reais (tecido, linha, máquinas, energia)
v = 2.000 reais (salários)
m = 2.000 reais (mais-valia)

Valor produzido: 6.000 + 2.000 + 2.000 = 10.000 reais
Taxa de mais-valia: 2.000 / 2.000 = 100%`,
                  lang: 'texto'
                },
                {
                  dica: 'Repare que a taxa de mais-valia só olha para v, e não para todo o capital. A conta do lucro, que inclui c, aparece no Livro III.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual parte do capital cria valor novo?',
              ops: [
                'O capital variável, gasto em salários',
                'O capital constante, gasto em máquinas',
                'As duas igualmente'
              ],
              c: 0,
              exp: 'Por isso Marx o chama de variável: ele muda de tamanho na produção.'
            },
            {
              t: 'escolha',
              p: 'Uma fábrica tem c = 300, v = 100 e m = 50. Qual é a taxa de mais-valia?',
              mono: true,
              ops: ['50%', '12,5%', '200%'],
              c: 0,
              exp: 'm dividido por v: 50 dividido por 100 é 50%.'
            },
            {
              t: 'escolha',
              p: 'Na mesma fábrica, c = 300, v = 100 e m = 50, qual é o valor total produzido?',
              mono: true,
              ops: ['450', '400', '150'],
              c: 0,
              exp: 'c + v + m = 300 + 100 + 50.'
            },
            {
              t: 'complete',
              p: 'Complete a fórmula da taxa de mais-valia',
              code: 'taxa de mais-valia = m / ___',
              bank: ['v', 'c', 'c + v', 'm'],
              c: ['v'],
              exp: 'A mais-valia comparada com o capital que a criou: o variável.'
            }
          ]
        },
        {
          id: 'kp3l4',
          titulo: 'A jornada de trabalho',
          exs: [
            {
              t: 'texto',
              titulo: 'A luta pelo tempo',
              blocos: [
                {
                  p: 'Se a mais-valia vem do trabalho excedente, o jeito mais direto de aumentá-la é esticar a jornada. Marx chama isso de mais-valia absoluta. O capítulo 8 do Livro I conta, com relatórios oficiais dos inspetores de fábrica ingleses, como as jornadas chegavam a 15 ou 16 horas, inclusive para crianças.'
                },
                {
                  p: 'O capital, diz Marx, tem uma fome sem limites por trabalho excedente. Os limites vêm de fora: do corpo, que se esgota, e sobretudo da luta dos trabalhadores. Na Inglaterra, depois de décadas de greves e campanhas, a lei das dez horas, de 1847, limitou a jornada de mulheres e jovens nas fábricas.'
                },
                {
                  p: 'Para Marx, o tamanho da jornada não é decidido pela economia sozinha: entre dois direitos, o do comprador e o do vendedor da força de trabalho, decide a força. Por isso ele diz que a fixação da jornada é resultado de uma luta de classes.'
                },
                {
                  p: 'No Brasil, a Constituição de 1988 fixou a jornada normal em até 8 horas por dia e 44 por semana, uma conquista que veio de muita mobilização. O debate sobre reduzir a jornada continua até hoje.'
                },
                {
                  dica: 'O capítulo 8 é um dos mais fáceis e impressionantes do livro. Se estiver travado nos primeiros capítulos, ele é um bom lugar para ganhar fôlego.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que é mais-valia absoluta?',
              ops: [
                'A mais-valia obtida esticando a jornada de trabalho',
                'Toda a mais-valia de um país',
                'A mais-valia das máquinas'
              ],
              c: 0,
              exp: 'Mais horas, com o mesmo salário, mais trabalho excedente.'
            },
            {
              t: 'escolha',
              p: 'Para Marx, o que decide o tamanho da jornada?',
              ops: [
                'A luta entre trabalhadores e capitalistas',
                'Uma lei natural da economia',
                'O gosto de cada patrão'
              ],
              c: 0,
              exp: 'Entre dois direitos iguais, decide a força, escreve Marx.'
            },
            {
              t: 'escolha',
              p: 'Qual é a jornada normal máxima na Constituição brasileira de 1988?',
              ops: [
                '8 horas por dia e 44 por semana',
                '10 horas por dia e 60 por semana',
                '6 horas por dia e 30 por semana'
              ],
              c: 0,
              exp: 'Está no artigo 7º, entre os direitos dos trabalhadores.'
            }
          ]
        }
      ]
    }
  ]
});
