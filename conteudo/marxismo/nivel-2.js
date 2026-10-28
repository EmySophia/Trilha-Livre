/* Trilha Livre · Introdução ao marxismo · Nível 2: O método: materialismo histórico
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'marxismo',
  n: 2,
  titulo: 'O método: materialismo histórico',
  desc: 'Como Marx explica a história e a sociedade.',
  videos: [
    {
      titulo: 'IV Curso Livre Marx-Engels',
      canal: 'TV Boitempo',
      obs: 'a aula de Antonio Rago sobre a crítica ao idealismo',
      url: 'https://blogdaboitempo.com.br/2014/11/07/nova-edicao-de-marx-chegando-e-curso-livre-completo-disponivel-online/'
    },
    {
      tipo: 'texto',
      titulo: 'Prefácio à Contribuição à Crítica da Economia Política (1859)',
      canal: 'Arquivo Marxista na Internet',
      url: 'https://www.marxists.org/portugues/marx/1859/01/prefacio.htm',
      obs: 'o resumo do método, pelo próprio Marx'
    },
    {
      tipo: 'texto',
      titulo: 'Teses sobre Feuerbach',
      canal: 'Arquivo Marxista na Internet',
      url: 'https://www.marxists.org/portugues/marx/1845/tesfeuer.htm'
    }
  ],
  unidades: [
    {
      id: 'mxu2',
      titulo: 'Como a sociedade funciona',
      conceito: 'base · superestrutura',
      desc: 'Produção, classes, contradições e ideias.',
      licoes: [
        {
          id: 'mx2l1',
          titulo: 'Materialismo histórico',
          exs: [
            {
              t: 'texto',
              titulo: 'Primeiro, é preciso viver',
              blocos: [
                {
                  p: 'O ponto de partida de Marx é bem concreto: antes de fazer política, arte ou filosofia, as pessoas precisam comer, morar e se vestir. Para isso, trabalham juntas e transformam a natureza. O jeito como uma sociedade organiza essa produção ajuda a explicar todo o resto.'
                },
                {
                  p: 'Ele chama de forças produtivas as ferramentas, as máquinas, as técnicas e o conhecimento. E chama de relações de produção as relações entre as pessoas na produção: quem é dono do quê, quem trabalha para quem, como o produto é dividido.'
                },
                {
                  p: 'No prefácio de 1859, Marx resume a ideia com uma imagem: as relações de produção formam a base econômica da sociedade, e sobre ela se ergue uma superestrutura, com o direito, o Estado, a política e as formas de pensar. Por isso, para ele, não é a consciência das pessoas que determina a vida social, mas a vida social que determina a consciência.'
                },
                {
                  p: 'Isso não quer dizer que só a economia importa. Anos depois, Engels escreveu em cartas que a economia é o fator determinante só em última instância, e que política, leis e ideias também agem de volta sobre ela. Ler Marx como se tudo fosse automático é um erro comum, chamado de economicismo.'
                },
                {
                  dica: 'Materialismo, aqui, não tem nada a ver com gostar de coisas. Quer dizer explicar a sociedade pela vida material, e não pelas ideias que as pessoas têm sobre ela.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que são relações de produção?',
              ops: [
                'As relações entre as pessoas na produção: quem é dono, quem trabalha para quem',
                'As máquinas e ferramentas de uma época',
                'As amizades no trabalho'
              ],
              c: 0,
              exp: 'As máquinas e as técnicas são as forças produtivas.'
            },
            {
              t: 'escolha',
              p: 'No esquema de Marx, o Estado e o direito fazem parte de quê?',
              ops: ['Da superestrutura', 'Da base econômica', 'Das forças produtivas'],
              c: 0,
              exp: 'A superestrutura se ergue sobre a base, mas também age sobre ela.'
            },
            {
              t: 'escolha',
              p: 'O que Engels quis evitar ao dizer que a economia determina só em última instância?',
              ops: [
                'A leitura de que tudo na sociedade é um reflexo automático da economia',
                'Que as pessoas estudassem economia',
                'Que a política fosse discutida'
              ],
              c: 0,
              exp: 'É uma relação de ida e volta, não de mão única.'
            }
          ]
        },
        {
          id: 'mx2l2',
          titulo: 'Modos de produção e classes',
          exs: [
            {
              t: 'texto',
              titulo: 'Quem produz e quem fica com o produto',
              blocos: [
                {
                  p: 'Um modo de produção é um jeito de organizar a vida econômica, com suas forças produtivas e suas relações de produção. Marx e Engels falam em sociedades sem classes nas origens da humanidade, depois em escravismo, feudalismo e capitalismo.'
                },
                {
                  p: 'Em cada um, há quem produz e quem se apropria de parte do que é produzido. O escravo não é dono nem de si mesmo. O servo feudal trabalhava uma parte da semana nas terras do senhor. O trabalhador assalariado é livre, mas não tem os meios de produção, e por isso precisa vender a sua força de trabalho.'
                },
                {
                  p: 'Por isso, para Marx, classe não é faixa de renda. É a posição na produção: ser ou não dono dos meios de produção, como terras, fábricas, máquinas e ferramentas. Um gerente bem pago e um operário são assalariados; um pequeno comerciante dono da loja tem outra posição.'
                },
                {
                  p: 'Essa sequência de modos de produção não é uma escada que todo país sobe na mesma ordem. O próprio Marx falou de caminhos diferentes, e no Brasil houve um longo debate sobre como encaixar a escravidão colonial nesse esquema, como no livro O escravismo colonial, de Jacob Gorender.'
                },
                {
                  dica: 'A pergunta de Marx para qualquer sociedade é sempre esta: quem trabalha, quem é dono e como o que se produz é dividido?'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Para Marx, o que define a classe de uma pessoa?',
              ops: [
                'A posição dela na produção: ter ou não os meios de produção',
                'Quanto ela ganha por mês',
                'O bairro em que ela mora'
              ],
              c: 0,
              exp: 'Renda e bairro costumam acompanhar a classe, mas não são a definição.'
            },
            {
              t: 'escolha',
              p: 'O que diferencia o trabalhador assalariado do escravo e do servo?',
              ops: [
                'Ele é juridicamente livre, mas precisa vender a força de trabalho para viver',
                'Ele é dono das máquinas com que trabalha',
                'Ele não produz nada'
              ],
              c: 0,
              exp: 'Marx chama isso de dupla liberdade: livre para vender o trabalho e livre, ou seja, sem, meios de produção.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque na ordem histórica da Europa, como Marx descreveu',
              lines: ['Sociedades sem classes', 'Escravismo antigo', 'Feudalismo', 'Capitalismo'],
              exp: 'Lembre que é um esquema da história europeia, não uma regra para todos os lugares.'
            }
          ]
        },
        {
          id: 'mx2l3',
          titulo: 'Dialética',
          exs: [
            {
              t: 'texto',
              titulo: 'Tudo está em movimento',
              blocos: [
                {
                  p: 'A dialética é um jeito de pensar que olha para o movimento e para as contradições. Em vez de ver as coisas como fixas, pergunta: de onde isso veio, que forças em conflito existem dentro dele, e no que ele pode se transformar?'
                },
                {
                  p: 'Marx aprendeu a dialética com o filósofo Hegel, para quem a história era o movimento das ideias. Marx disse que, em Hegel, a dialética estava de cabeça para baixo, e que era preciso virá-la: para ele, o movimento vem das condições materiais e das lutas reais, e as ideias acompanham.'
                },
                {
                  p: 'Um exemplo usado por Marx: o capitalismo desenvolve a produção como nunca, mas concentra a riqueza em poucas mãos. A mesma força que cria abundância cria crises e desigualdade. Essa contradição, para ele, empurra a sociedade para mudanças.'
                },
                {
                  p: 'Outra ideia dialética é a passagem da quantidade à qualidade: pequenas mudanças que se acumulam até provocar uma mudança de natureza, como a água que esquenta grau a grau até ferver.'
                },
                {
                  dica: 'Dialética não é falar difícil. É desconfiar do que parece eterno e natural, e perguntar como aquilo surgiu e como pode mudar.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'De quem Marx herdou a dialética?',
              ops: ['Do filósofo Hegel', 'De Adam Smith', 'De Engels'],
              c: 0,
              exp: 'Marx partiu de Hegel, mas trocou o motor: das ideias para a vida material.'
            },
            {
              t: 'escolha',
              p: 'Qual destes é um exemplo de contradição no sentido de Marx?',
              ops: [
                'O capitalismo produz abundância e, ao mesmo tempo, crises e desigualdade',
                'Uma pessoa que muda de opinião',
                'Duas frases que se desmentem num texto'
              ],
              c: 0,
              exp: 'Contradição, aqui, é um conflito real dentro da própria coisa, que a faz mudar.'
            },
            {
              t: 'escolha',
              p: 'Qual exemplo ilustra a passagem da quantidade à qualidade?',
              ops: [
                'A água que esquenta grau a grau até ferver',
                'Um time que ganha um jogo',
                'Uma loja que abre às 8h'
              ],
              c: 0,
              exp: 'Mudanças pequenas e contínuas, até um salto.'
            }
          ]
        },
        {
          id: 'mx2l4',
          titulo: 'Ideologia',
          exs: [
            {
              t: 'texto',
              titulo: 'As ideias que parecem naturais',
              blocos: [
                {
                  p: 'Em A ideologia alemã, escrita por volta de 1845 e 1846, Marx e Engels dizem que as ideias da classe dominante são, em cada época, as ideias dominantes. Quem controla a produção material também tem mais meios de produzir e espalhar ideias.'
                },
                {
                  p: 'Ideologia, nesse sentido, é um conjunto de ideias que faz uma organização social parecer natural, eterna e justa para todos, escondendo os interesses de quem se beneficia dela. Frases como "sempre foi assim" ou "rico é quem trabalha mais" são exemplos que os marxistas costumam analisar.'
                },
                {
                  p: 'Isso não quer dizer que toda ideia seja mentira ou que as pessoas sejam enganadas por burrice. A ideologia funciona porque se apoia em coisas que as pessoas vivem de verdade. O salário, por exemplo, parece pagar todo o trabalho feito, e é isso que O Capital vai discutir.'
                },
                {
                  p: 'Nas Teses sobre Feuerbach, de 1845, Marx escreveu a frase que virou lema de quem estuda o marxismo: os filósofos apenas interpretaram o mundo de maneiras diferentes; o que importa é transformá-lo.'
                },
                {
                  dica: 'Uma boa pergunta diante de uma ideia muito repetida: quem ganha se todo mundo acreditar nela?'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Segundo A ideologia alemã, quais ideias são dominantes numa época?',
              ops: ['As da classe dominante', 'As mais verdadeiras', 'As da maioria da população'],
              c: 0,
              exp: 'Quem controla a riqueza tem mais meios para produzir e espalhar ideias.'
            },
            {
              t: 'escolha',
              p: 'Por que a ideologia convence, segundo os marxistas?',
              ops: [
                'Porque se apoia em coisas que as pessoas vivem de verdade',
                'Porque as pessoas são enganadas por falta de inteligência',
                'Porque é imposta pela força'
              ],
              c: 0,
              exp: 'Por isso combater uma ideologia exige mais do que dizer que ela é falsa.'
            },
            {
              t: 'complete',
              p: 'Complete a 11ª tese sobre Feuerbach',
              code: `Os filósofos apenas interpretaram o mundo
de maneiras diferentes; o que importa é ___-lo.`,
              bank: ['transformá', 'explicá', 'descrevê', 'esquecê'],
              c: ['transformá'],
              exp: 'A teoria, para Marx, serve para orientar a ação.'
            }
          ]
        }
      ]
    }
  ]
});
