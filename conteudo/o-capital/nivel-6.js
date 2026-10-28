/* Trilha Livre · O Capital, de Marx · Nível 6: Os Livros II e III
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'o-capital',
  n: 6,
  titulo: 'Os Livros II e III',
  desc: 'Um panorama: a circulação do capital, o lucro, os juros, a renda da terra e as crises.',
  videos: [
    {
      titulo: 'Curso O Capital, de Marx',
      canal: 'TV Boitempo',
      obs: 'aula 4, com Jorge Grespan: leis tendenciais, acumulação e crise',
      url: 'https://blogdaboitempo.com.br/2017/08/23/boitempo-libera-curso-completo-sobre-o-capital-de-marx-no-youtube/'
    }
  ],
  unidades: [
    {
      id: 'kpu6',
      titulo: 'Circulação e processo global',
      conceito: 'taxa de lucro',
      desc: 'O caminho do capital e a divisão da mais-valia.',
      licoes: [
        {
          id: 'kp6l1',
          titulo: 'Livro II: a circulação do capital',
          exs: [
            {
              t: 'texto',
              titulo: 'O capital em movimento',
              blocos: [
                {
                  p: 'O Livro II acompanha o capital enquanto ele muda de forma. O ciclo completo é: dinheiro compra meios de produção e força de trabalho; a produção cria mercadorias com mais valor; as mercadorias são vendidas, e o capital volta à forma de dinheiro, maior.'
                },
                {
                  code: 'D – M (meios de produção + força de trabalho) … P … M′ – D′',
                  lang: 'texto'
                },
                {
                  p: 'Cada parada custa caro. Enquanto a mercadoria não é vendida, o capital está parado. Por isso o tempo de rotação, o tempo que o capital leva para dar uma volta completa, importa tanto: quanto mais rápido gira, mais mais-valia produz no ano. Daí a pressa em vender, entregar e receber.'
                },
                {
                  p: 'Marx também mostra, com os esquemas de reprodução, como a economia inteira precisa manter certas proporções entre o setor que produz meios de produção e o setor que produz bens de consumo. Quando essas proporções se quebram, abre-se espaço para crises.'
                },
                {
                  dica: 'O Livro II é o mais técnico e o menos lido. Vale ler depois do Livro I, com a ajuda de um guia, como o de David Harvey sobre os Livros II e III.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que é o tempo de rotação do capital?',
              ops: [
                'O tempo que o capital leva para dar uma volta completa e voltar como dinheiro',
                'A jornada de trabalho',
                'O tempo de vida de uma máquina'
              ],
              c: 0,
              exp: 'Quanto mais rápido gira, mais mais-valia o capital produz no ano.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem o ciclo do capital',
              lines: [
                'Dinheiro (D)',
                'Compra de meios de produção e força de trabalho (M)',
                'Produção (P)',
                'Mercadorias com mais valor (M′)',
                'Venda e mais dinheiro (D′)'
              ],
              exp: 'Se a venda não acontece, o ciclo trava, e o capital fica parado.'
            }
          ]
        },
        {
          id: 'kp6l2',
          titulo: 'Livro III: lucro e preços de produção',
          exs: [
            {
              t: 'texto',
              titulo: 'Como a mais-valia aparece',
              blocos: [
                {
                  p: 'Para o capitalista, o que importa não é a taxa de mais-valia, m sobre v, mas a taxa de lucro: o ganho comparado com todo o capital investido, m sobre c + v. Na conta do lucro, máquinas e salários aparecem misturados como custos, e o papel especial do trabalho some de vista.'
                },
                {
                  code: `c = 60, v = 20, m = 20
Taxa de mais-valia: 20 / 20 = 100%
Taxa de lucro: 20 / (60 + 20) = 25%`,
                  lang: 'texto'
                },
                {
                  p: 'Com a concorrência, os capitais migram para os setores que dão mais lucro, até que as taxas tendam a se igualar numa taxa média. Por isso, as mercadorias não são vendidas exatamente pelo valor, mas por preços de produção: o custo mais o lucro médio.'
                },
                {
                  p: 'Setores com muitas máquinas e poucos trabalhadores vendem acima do valor; setores com muito trabalho, abaixo. Para Marx, isso só redistribui a mais-valia entre os capitalistas: no total da economia, a soma dos preços é igual à soma dos valores, e a soma dos lucros é igual à soma da mais-valia.'
                },
                {
                  dica: 'Essa passagem dos valores aos preços de produção é o famoso problema da transformação, discutido no último nível deste curso.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Com c = 60, v = 20 e m = 20, qual é a taxa de lucro?',
              mono: true,
              ops: ['25%', '100%', '33%'],
              c: 0,
              exp: 'm dividido por c + v: 20 dividido por 80.'
            },
            {
              t: 'complete',
              p: 'Complete a fórmula da taxa de lucro',
              code: 'taxa de lucro = m / (___ + ___)',
              bank: ['c', 'v', 'm', 'D'],
              c: ['c', 'v'],
              exp: 'O lucro é comparado com todo o capital investido.'
            },
            {
              t: 'escolha',
              p: 'O que é o preço de produção?',
              ops: [
                'O custo de produção mais o lucro médio',
                'O valor exato da mercadoria',
                'O preço que o consumidor acha justo'
              ],
              c: 0,
              exp: 'É em torno dele que os preços de mercado oscilam, segundo o Livro III.'
            }
          ]
        },
        {
          id: 'kp6l3',
          titulo: 'Juros, renda da terra e capital fictício',
          exs: [
            {
              t: 'texto',
              titulo: 'Quem fica com cada pedaço',
              blocos: [
                {
                  p: 'A mais-valia criada na produção é dividida entre vários grupos. O capital comercial, que compra e revende, fica com uma parte na forma de lucro comercial. O capital que empresta dinheiro, o capital portador de juros, fica com outra parte, na forma de juros.'
                },
                {
                  p: 'Os donos da terra recebem a renda fundiária: uma parte da mais-valia paga só porque eles têm a propriedade de um recurso que não pode ser multiplicado, como terras férteis ou bem localizadas.'
                },
                {
                  p: 'Marx também fala em capital fictício: títulos, como ações e papéis da dívida pública, que dão direito a rendimentos futuros e são comprados e vendidos como se fossem capital. O preço deles pode subir muito acima da riqueza que existe de fato, o que alimenta bolhas e crises financeiras.'
                },
                {
                  p: 'Nessas formas, a relação com o trabalho fica ainda mais escondida: parece que o dinheiro rende sozinho, como uma árvore dá frutos. Marx chama isso de a forma mais fetichizada do capital.'
                },
                {
                  dica: 'Muitos estudos marxistas sobre a financeirização da economia partem da parte 5 do Livro III, sobre o crédito e o capital fictício.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'De onde vêm os juros, para Marx?',
              ops: [
                'De uma parte da mais-valia criada na produção',
                'Do próprio dinheiro, que rende sozinho',
                'Da generosidade dos bancos'
              ],
              c: 0,
              exp: 'Parece que o dinheiro rende sozinho; para Marx, isso é a forma mais fetichizada do capital.'
            },
            {
              t: 'escolha',
              p: 'O que é capital fictício?',
              ops: [
                'Títulos que dão direito a rendimentos futuros e são negociados como se fossem capital',
                'Dinheiro falsificado',
                'O capital das empresas que faliram'
              ],
              c: 0,
              exp: 'O preço desses títulos pode se descolar muito da produção real.'
            }
          ]
        },
        {
          id: 'kp6l4',
          titulo: 'As crises',
          exs: [
            {
              t: 'texto',
              titulo: 'A queda da taxa de lucro e as crises',
              blocos: [
                {
                  p: 'No Livro III, Marx apresenta a lei da tendência à queda da taxa de lucro. Com a acumulação, a composição orgânica sobe: cada vez mais capital constante em relação ao variável. Como só o trabalho vivo cria mais-valia, a taxa de lucro, m sobre c + v, tenderia a cair.'
                },
                {
                  p: 'Mas Marx fala em tendência porque há forças em sentido contrário: aumentar a exploração, baratear máquinas e matérias-primas, pagar salários abaixo do valor, buscar mão de obra e mercados em outros países. A taxa de lucro sobe e desce no meio dessa disputa.'
                },
                {
                  p: 'As crises, para Marx, são o jeito violento de o sistema se reequilibrar: capitais são destruídos, empresas quebram, salários caem, e a acumulação recomeça em novas bases. Ele também liga as crises ao crédito, que estica a produção além do que o mercado consegue absorver, e às desproporções entre os setores.'
                },
                {
                  p: 'Essa lei é discutida até entre marxistas. Uns medem a taxa de lucro em vários países e veem uma queda de longo prazo; outros, como Michael Heinrich, acham que Marx não conseguiu provar a lei. Fora do marxismo, o economista Nobuo Okishio publicou em 1961 um teorema que questiona o argumento.'
                },
                {
                  dica: 'Diante de uma crise, os marxistas costumam perguntar: o que estava acontecendo com a taxa de lucro, com o crédito e com os salários antes dela?'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Por que Marx fala em tendência à queda da taxa de lucro, e não em queda certa?',
              ops: [
                'Porque há forças em sentido contrário, como o aumento da exploração',
                'Porque ele não tinha certeza de nada',
                'Porque a taxa de lucro nunca cai'
              ],
              c: 0,
              exp: 'A taxa sobe e desce no meio da disputa entre a tendência e as contratendências.'
            },
            {
              t: 'escolha',
              p: 'Qual é o papel das crises, para Marx?',
              ops: [
                'Reequilibrar o sistema de forma violenta, destruindo capital, para a acumulação recomeçar',
                'Acabar com o capitalismo automaticamente',
                'Nenhum: são acidentes sem explicação'
              ],
              c: 0,
              exp: 'Para Marx, a crise é parte do funcionamento normal do capitalismo.'
            },
            {
              t: 'escolha',
              p: 'Todos os marxistas concordam com a lei da queda da taxa de lucro?',
              ops: [
                'Não: há marxistas que acham que Marx não conseguiu prová-la',
                'Sim: é aceita por todos',
                'Nenhum marxista a aceita'
              ],
              c: 0,
              exp: 'É um dos debates mais vivos da economia marxista.'
            }
          ]
        }
      ]
    }
  ]
});
