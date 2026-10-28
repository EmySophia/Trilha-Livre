/* Trilha Livre · Leitura guiada de O Capital · Nível 2: Seção 1: mercadoria e dinheiro
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'capital-guiado',
  n: 2,
  titulo: 'Seção 1: mercadoria e dinheiro',
  desc: 'Capítulos 1 a 3: a parte mais abstrata do livro, explicada seção por seção.',
  videos: [
    {
      titulo: 'Curso O Capital, de Marx',
      canal: 'TV Boitempo',
      obs: 'aula 2, com Leda Paulani: a teoria do valor',
      url: 'https://blogdaboitempo.com.br/2017/08/23/boitempo-libera-curso-completo-sobre-o-capital-de-marx-no-youtube/'
    },
    {
      titulo: 'Reading Marx\'s Capital, volume 1 (em inglês)',
      canal: 'David Harvey',
      obs: 'as primeiras aulas tratam da mercadoria e do dinheiro',
      url: 'https://davidharvey.org/2008/06/getting-started/'
    }
  ],
  unidades: [
    {
      id: 'gku2',
      titulo: 'Capítulo 1: a mercadoria',
      conceito: 'valor',
      desc: 'As quatro seções do capítulo mais difícil do livro.',
      licoes: [
        {
          id: 'gk2l1',
          titulo: '1.1 Valor de uso e valor',
          exs: [
            {
              t: 'texto',
              titulo: 'Antes de ler',
              blocos: [
                {
                  p: 'O livro começa pela mercadoria porque, no capitalismo, a riqueza aparece como uma enorme coleção de mercadorias. Entender a mercadoria é entender a célula do sistema.'
                },
                {
                  p: 'A pergunta da seção: o que faz coisas tão diferentes, como um casaco e um saco de trigo, poderem ser trocadas numa certa proporção? O que elas têm em comum?'
                },
                {
                  leia: {
                    titulo: 'Capítulo 1, seção 1',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap01/01.htm',
                    obs: 'Os dois fatores da mercadoria: valor de uso e valor'
                  }
                },
                {
                  dica: 'Repare em três expressões que vão aparecer no livro inteiro, valor de uso, valor de troca e valor, e em como Marx chega ao tempo de trabalho socialmente necessário.'
                }
              ]
            },
            {
              t: 'texto',
              titulo: 'Trechos difíceis, explicados',
              blocos: [
                {
                  trecho: {
                    onde: 'Valor de uso',
                    explica: 'É a utilidade da coisa, que vem das propriedades físicas dela: o trigo alimenta, o casaco aquece. Valores de uso existem em qualquer sociedade. No capitalismo, eles também carregam o valor de troca.'
                  }
                },
                {
                  trecho: {
                    onde: 'Valor de troca e o algo em comum',
                    explica: 'Um casaco vale tantos quilos de trigo, ou tantos metros de linho. Se coisas tão diferentes se igualam, há nelas algo comum que não é nenhuma propriedade física. Deixando de lado o valor de uso, sobra uma coisa só: todas são produtos do trabalho humano.'
                  }
                },
                {
                  trecho: {
                    onde: 'Uma geleia de trabalho',
                    explica: 'Sem olhar para o tipo de trabalho, o que sobra é uma geleia de trabalho humano indiferenciado: puro gasto de cérebro, músculo e nervo, seja costura ou plantio. Essa substância comum é o valor. O valor de troca é só a forma como o valor aparece.'
                  }
                },
                {
                  trecho: {
                    onde: 'Tempo socialmente necessário',
                    explica: 'O valor não se mede pelo tempo que cada um leva, senão o produto de quem trabalha devagar valeria mais. Mede-se pelo tempo socialmente necessário: o tempo médio, com a habilidade e as ferramentas normais da época. Quando o tear mecânico chegou à Inglaterra, tecer passou a levar mais ou menos a metade do tempo, e o tecido feito à mão passou a valer só a metade.'
                  }
                },
                {
                  trecho: {
                    onde: 'Nem tudo é mercadoria',
                    explica: 'Uma coisa pode ter valor de uso sem ter valor, como o ar. E pode ser produto do trabalho sem ser mercadoria, como o que alguém faz para consumo próprio. Para ser mercadoria, precisa ser útil para outros e chegar a eles pela troca.'
                  }
                },
                {
                  perguntas: [
                    'Pense em três coisas que você comprou nesta semana. O que elas têm em comum, além de terem um preço?',
                    'Se uma máquina nova faz o mesmo produto na metade do tempo, o que acontece com o valor do produto de quem ainda trabalha do jeito antigo?'
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Para Marx, o que as mercadorias têm em comum, que permite trocá-las?',
              ops: ['São produtos do trabalho humano', 'Têm o mesmo peso', 'Têm a mesma utilidade'],
              c: 0
            },
            {
              t: 'escolha',
              p: 'O que determina a grandeza do valor de uma mercadoria?',
              ops: [
                'O tempo de trabalho socialmente necessário para produzi-la',
                'O tempo que cada trabalhador leva, mesmo que seja lento',
                'A vontade de quem vende'
              ],
              c: 0,
              exp: 'Senão, o produto do trabalhador mais lento valeria mais.'
            },
            {
              t: 'escolha',
              p: 'O ar que respiramos é uma mercadoria?',
              ops: [
                'Não: tem valor de uso, mas não é produto do trabalho nem é trocado',
                'Sim, porque é útil',
                'Sim, porque todo mundo precisa dele'
              ],
              c: 0
            },
            {
              t: 'complete',
              p: 'Complete a ideia da seção',
              code: 'O valor de troca é a forma como aparece o ___.',
              bank: ['valor', 'preço', 'lucro', 'salário'],
              c: ['valor'],
              exp: 'O valor é a substância; o valor de troca, a forma de aparecer.'
            }
          ]
        },
        {
          id: 'gk2l2',
          titulo: '1.2 O duplo caráter do trabalho',
          exs: [
            {
              t: 'texto',
              titulo: 'Antes de ler',
              blocos: [
                {
                  p: 'A seção 1 mostrou que a mercadoria tem dois lados: valor de uso e valor. Esta mostra que o trabalho que a produz também tem dois lados. Marx diz que esse é o ponto em torno do qual gira a compreensão da economia política, e que foi ele quem o examinou criticamente pela primeira vez.'
                },
                {
                  p: 'Os exemplos são o casaco e o linho, feitos pelo trabalho do alfaiate e do tecelão.'
                },
                {
                  leia: {
                    titulo: 'Capítulo 1, seção 2',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap01/02.htm',
                    obs: 'O duplo caráter do trabalho representado nas mercadorias. É curta.'
                  }
                },
                {
                  dica: 'Repare nas duas expressões: trabalho útil, ou concreto, e trabalho humano abstrato.'
                }
              ]
            },
            {
              t: 'texto',
              titulo: 'Trechos difíceis, explicados',
              blocos: [
                {
                  trecho: {
                    onde: 'Trabalho útil, ou concreto',
                    explica: 'É o trabalho com uma qualidade e um objetivo: costurar, tecer, plantar. Ele produz valores de uso diferentes, e por isso existe a divisão social do trabalho, em que cada um faz coisas diferentes.'
                  }
                },
                {
                  trecho: {
                    onde: 'O pai e a mãe da riqueza',
                    explica: 'Marx cita o economista William Petty: o trabalho é o pai da riqueza material, e a terra é a mãe. O trabalho concreto não cria do nada: transforma o que a natureza oferece.'
                  }
                },
                {
                  trecho: {
                    onde: 'Trabalho humano abstrato',
                    explica: 'Olhando só para o valor, não importa se foi costura ou tecelagem. Conta só que houve gasto de força humana de trabalho, medido em tempo. É esse lado abstrato que cria valor.'
                  }
                },
                {
                  trecho: {
                    onde: 'Trabalho simples e complexo',
                    explica: 'Um trabalho que exige formação conta como trabalho simples multiplicado: uma hora dele vale por várias horas de trabalho simples. Marx diz que essa conversão acontece na sociedade, pelas costas de quem produz.'
                  }
                },
                {
                  trecho: {
                    onde: 'Mais riqueza, mesmo valor',
                    explica: 'Se a produtividade dobra, o mesmo trabalho faz o dobro de casacos. A riqueza material aumenta, mas o valor total produzido no mesmo tempo, não: cada casaco passa a valer a metade. Essa é uma das chaves do livro.'
                  }
                },
                {
                  perguntas: [
                    'Escolha um trabalho que você conhece. O que ele tem de concreto, só dele? E o que tem em comum com qualquer outro trabalho?',
                    'Por que mais produtividade não quer dizer mais valor?'
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Que lado do trabalho cria valor, para Marx?',
              ops: ['O trabalho humano abstrato', 'O trabalho útil, ou concreto', 'Nenhum dos dois'],
              c: 0,
              exp: 'O trabalho concreto cria valores de uso; o abstrato, valor.'
            },
            {
              t: 'escolha',
              p: 'Se a produtividade dobra, o que acontece com o valor de cada casaco?',
              ops: ['Cai pela metade', 'Dobra', 'Fica igual'],
              c: 0
            },
            {
              t: 'complete',
              p: 'Complete a frase de William Petty citada por Marx',
              code: 'O trabalho é o pai da riqueza material, e a ___ é a mãe.',
              bank: ['terra', 'fábrica', 'moeda', 'família'],
              c: ['terra'],
              exp: 'O trabalho transforma o que a natureza oferece.'
            }
          ]
        },
        {
          id: 'gk2l3',
          titulo: '1.3 A forma simples do valor',
          exs: [
            {
              t: 'texto',
              titulo: 'Antes de ler',
              blocos: [
                {
                  p: 'A seção 3 é a mais difícil do livro, e o próprio Marx avisou disso no prefácio. A pergunta dela: se o valor é trabalho, por que ele só aparece quando uma mercadoria é comparada com outra? E como, dessa comparação, nasce o dinheiro?'
                },
                {
                  p: 'Marx começa pela troca mais simples possível: uma quantidade de linho vale 1 casaco. Nas traduções, aparecem 20 varas ou 20 braças de linho, medidas antigas de comprimento.'
                },
                {
                  leia: {
                    titulo: 'Capítulo 1, seção 3',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap01/03.htm',
                    obs: 'A forma de valor. Nesta lição, leia só a parte A, a forma simples.'
                  }
                },
                {
                  dica: 'Repare em quem fica de cada lado da igualdade. O papel de cada um é diferente.'
                }
              ]
            },
            {
              t: 'texto',
              titulo: 'Trechos difíceis, explicados',
              blocos: [
                {
                  trecho: {
                    onde: 'Forma relativa e forma equivalente',
                    explica: 'Em 20 varas de linho = 1 casaco, o linho é quem expressa o seu valor: está na forma relativa. O casaco só serve de espelho para o valor do linho: está na forma equivalente. Se a igualdade for invertida, os papéis se trocam.'
                  }
                },
                {
                  trecho: {
                    onde: 'O corpo do casaco vira valor',
                    explica: 'Na igualdade, o corpo físico do casaco passa a representar valor, como se valor fosse uma propriedade natural dele. Marx compara com a balança: pedaços de ferro servem para medir o peso de um pão de açúcar. Mas o peso é mesmo natural, e o valor não é. É uma relação social.'
                  }
                },
                {
                  trecho: {
                    onde: 'As três curiosidades da forma equivalente',
                    explica: 'Na forma equivalente, um valor de uso vira a forma de aparecer do valor; um trabalho concreto, o do alfaiate, vira a forma de aparecer do trabalho abstrato; e um trabalho privado vira a forma de aparecer do trabalho social. Essas três inversões reaparecem no dinheiro.'
                  }
                },
                {
                  trecho: {
                    onde: 'Aristóteles e a igualdade',
                    explica: 'Marx elogia Aristóteles, que percebeu que 5 camas = 1 casa só é possível se houver algo igual nas duas coisas. Mas Aristóteles não conseguiu dizer o que era. Para Marx, faltava a ideia de igualdade entre os trabalhos humanos, que não podia ser evidente numa sociedade baseada na escravidão.'
                  }
                },
                {
                  perguntas: [
                    'Quando você diz que algo vale tanto, em que outra coisa você está pensando?',
                    'Por que, para Marx, só numa sociedade que acredita na igualdade entre as pessoas fica visível que o valor é trabalho humano igual?'
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Em 20 varas de linho = 1 casaco, quem está na forma relativa?',
              ops: ['O linho, que expressa o seu valor', 'O casaco', 'Os dois ao mesmo tempo'],
              c: 0,
              exp: 'O casaco está na forma equivalente: é o espelho do valor do linho.'
            },
            {
              t: 'escolha',
              p: 'O que impediu Aristóteles de explicar a troca, segundo Marx?',
              ops: [
                'A sociedade grega se baseava na escravidão, e a igualdade dos trabalhos não era evidente',
                'Ele não conhecia o dinheiro',
                'Ele achava a troca imoral'
              ],
              c: 0
            },
            {
              t: 'escolha',
              p: 'O valor é uma propriedade natural das coisas, como o peso?',
              ops: [
                'Não: é uma relação social que aparece como se fosse natural',
                'Sim, como o peso e a cor',
                'Só no caso do ouro'
              ],
              c: 0
            }
          ]
        },
        {
          id: 'gk2l4',
          titulo: '1.3 Do linho ao dinheiro',
          exs: [
            {
              t: 'texto',
              titulo: 'Antes de ler',
              blocos: [
                {
                  p: 'Na parte A, uma mercadoria expressa o seu valor em outra. Nas partes B, C e D, Marx mostra como, passo a passo, uma mercadoria se separa de todas as outras e vira dinheiro. A pergunta: o dinheiro foi inventado por alguém ou nasce da própria troca?'
                },
                {
                  leia: {
                    titulo: 'Capítulo 1, seção 3',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap01/03.htm',
                    obs: 'Continue de onde parou: forma total, forma geral e forma dinheiro.'
                  }
                },
                {
                  dica: 'Escreva no caderno as quatro formas, uma embaixo da outra. Ver o desenho ajuda muito.'
                }
              ]
            },
            {
              t: 'texto',
              titulo: 'Trechos difíceis, explicados',
              blocos: [
                {
                  trecho: {
                    onde: 'B. Forma total, ou desdobrada',
                    explica: 'O linho expressa o seu valor em todas as outras mercadorias: 20 varas de linho = 1 casaco, ou = 10 libras de chá, ou = 40 libras de café, e assim por diante. Fica claro que o valor não depende da mercadoria escolhida. Mas a lista não tem fim nem unidade.'
                  }
                },
                {
                  trecho: {
                    onde: 'C. Forma geral',
                    explica: 'Basta inverter a lista: agora todas as mercadorias expressam o seu valor numa só, o linho. O linho vira equivalente geral, e pela primeira vez todas as mercadorias se comparam por uma medida comum.'
                  }
                },
                {
                  trecho: {
                    onde: 'D. Forma dinheiro',
                    explica: 'Quando o papel de equivalente geral fica preso, pelo costume, a uma mercadoria só, temos o dinheiro. Historicamente, foi o ouro: 20 varas de linho = 2 onças de ouro. Se 2 onças de ouro se chamam 2 libras esterlinas, o valor do linho ganhou um preço.'
                  }
                },
                {
                  trecho: {
                    onde: 'A conclusão',
                    explica: 'O dinheiro não é invenção nem acordo: é o resultado necessário de um mundo em que os produtos do trabalho são trocados como mercadorias. No capítulo 2, Marx resume: a dificuldade não é entender que o dinheiro é mercadoria, e sim como e por que uma mercadoria vira dinheiro.'
                  }
                },
                {
                  perguntas: [
                    'Por que você acha que foi o ouro, e não o casaco, que virou dinheiro?',
                    'Hoje o dinheiro é quase todo digital. Ele deixou de ser uma relação entre trabalhos?'
                  ]
                }
              ]
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque as formas do valor na ordem em que Marx as apresenta',
              lines: [
                'Forma simples: 20 varas de linho = 1 casaco',
                'Forma total: o linho expressa o valor em todas as outras',
                'Forma geral: todas expressam o valor no linho',
                'Forma dinheiro: todas expressam o valor no ouro'
              ],
              exp: 'Da troca mais simples até o dinheiro.'
            },
            {
              t: 'escolha',
              p: 'O que muda da forma geral para a forma dinheiro?',
              ops: [
                'O papel de equivalente geral fica preso a uma mercadoria só, o ouro',
                'As mercadorias deixam de ter valor',
                'O linho passa a valer mais'
              ],
              c: 0
            },
            {
              t: 'escolha',
              p: 'Para Marx, o dinheiro é...',
              ops: [
                'O resultado necessário da troca de mercadorias',
                'Uma invenção de um rei',
                'Um acordo assinado entre comerciantes'
              ],
              c: 0
            }
          ]
        },
        {
          id: 'gk2l5',
          titulo: '1.4 O fetichismo da mercadoria',
          exs: [
            {
              t: 'texto',
              titulo: 'Antes de ler',
              blocos: [
                {
                  p: 'A seção 4 é a mais famosa do capítulo, e a mais gostosa de ler. Depois de tanta abstração, Marx pergunta: por que tudo isso parece tão natural? Por que vemos preços e coisas, e não relações entre pessoas?'
                },
                {
                  leia: {
                    titulo: 'Capítulo 1, seção 4',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap01/04.htm',
                    obs: 'No site, o título é O carácter de feitiço da mercadoria e o seu segredo.'
                  }
                },
                {
                  dica: 'Repare na mesa que dança, na comparação com a religião e nos quatro exemplos de sociedades sem mercadoria: Robinson, a Idade Média, a família camponesa e uma associação de pessoas livres.'
                }
              ]
            },
            {
              t: 'texto',
              titulo: 'Trechos difíceis, explicados',
              blocos: [
                {
                  trecho: {
                    onde: 'A mesa que dança',
                    explica: 'Uma mesa é uma coisa comum. Mas, quando vira mercadoria, Marx diz que ela parece tirar da cabeça de madeira ideias mais estranhas do que se começasse a dançar sozinha. É ironia: a mercadoria parece ter vontade própria, subir e descer de preço como se fosse viva.'
                  }
                },
                {
                  trecho: {
                    onde: 'Relação entre coisas',
                    explica: 'Quem produz só se encontra com os outros por meio dos produtos, no mercado. Então a relação social entre pessoas aparece como uma relação entre coisas: o preço do café, a cotação do dólar. Esse é o fetichismo. Marx compara com a religião, em que criações humanas parecem ter vida e mandar nas pessoas.'
                  }
                },
                {
                  trecho: {
                    onde: 'Não sabem, mas fazem',
                    explica: 'Quando igualamos produtos na troca, igualamos sem perceber os trabalhos humanos que estão neles. Marx resume: não sabem disso, mas o fazem. O valor não traz escrito na testa o que ele é.'
                  }
                },
                {
                  trecho: {
                    onde: 'Sociedades sem fetiche',
                    explica: 'Para mostrar que isso não é natural, Marx compara. Robinson Crusoé, sozinho na ilha, sabe quanto tempo gasta em cada tarefa. Na Idade Média, a dependência é clara: o servo sabe quanto trabalho entrega ao senhor. Na família camponesa, o trabalho é dividido às claras. E numa associação de pessoas livres, que trabalhem com meios de produção comuns e de forma planejada, as relações seriam transparentes.'
                  }
                },
                {
                  trecho: {
                    onde: 'Se as mercadorias falassem',
                    explica: 'No fim da seção, Marx imagina as mercadorias falando: o nosso valor de uso não nos interessa; o que nos importa é o nosso valor. É assim, diz ele, que a economia da época enxerga o mundo.'
                  }
                },
                {
                  perguntas: [
                    'Quando o noticiário diz que o mercado ficou nervoso, quem está nervoso de verdade?',
                    'Escolha um objeto perto de você. Quantas pessoas trabalharam para ele existir? Você conhece alguma delas?'
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que é o fetichismo da mercadoria?',
              ops: [
                'Relações sociais entre pessoas aparecerem como relações entre coisas',
                'Gostar demais de fazer compras',
                'Adorar objetos religiosos'
              ],
              c: 0,
              exp: 'Não é um defeito moral de quem compra: é o jeito como o próprio sistema funciona e aparece.'
            },
            {
              t: 'escolha',
              p: 'Por que Marx fala de Robinson Crusoé e da Idade Média?',
              ops: [
                'Para mostrar sociedades em que o trabalho não aparece disfarçado de valor',
                'Para elogiar a vida no campo',
                'Para contar a história do dinheiro'
              ],
              c: 0
            },
            {
              t: 'escolha',
              p: 'Com o que Marx compara o fetichismo?',
              ops: [
                'Com a religião, em que criações humanas parecem ter vida própria',
                'Com a medicina',
                'Com o teatro'
              ],
              c: 0
            }
          ]
        }
      ]
    },
    {
      id: 'gku3',
      titulo: 'Capítulos 2 e 3: troca e dinheiro',
      conceito: 'M–D–M',
      desc: 'Os donos das mercadorias e as funções do dinheiro.',
      licoes: [
        {
          id: 'gk2l6',
          titulo: '2. O processo de troca',
          exs: [
            {
              t: 'texto',
              titulo: 'Antes de ler',
              blocos: [
                {
                  p: 'O capítulo 1 analisou a mercadoria sozinha. O 2 põe em cena os donos das mercadorias. É curto e fecha a explicação do dinheiro.'
                },
                {
                  leia: {
                    titulo: 'Capítulo 2',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap02/01.htm',
                    obs: 'O processo de troca. Um capítulo curto.'
                  }
                },
                {
                  dica: 'Repare na relação entre o contrato, que é jurídico, e a troca, que é econômica.'
                }
              ]
            },
            {
              t: 'texto',
              titulo: 'Trechos difíceis, explicados',
              blocos: [
                {
                  trecho: {
                    onde: 'As mercadorias não vão sozinhas ao mercado',
                    explica: 'Por isso precisam dos seus guardiões, os donos. Eles se reconhecem como proprietários privados e fazem um contrato. Para Marx, essa relação jurídica é o espelho da relação econômica: quem dá o conteúdo do contrato é a troca.'
                  }
                },
                {
                  trecho: {
                    onde: 'Pessoas e máscaras',
                    explica: 'Aqui, as pessoas existem umas para as outras só como representantes de mercadorias. É como se usassem máscaras econômicas: vendedor, comprador. A ideia volta muitas vezes no livro.'
                  }
                },
                {
                  trecho: {
                    onde: 'A troca nasce na fronteira',
                    explica: 'A troca de mercadorias começa onde as comunidades terminam, nos contatos entre comunidades diferentes. Só depois ela entra na vida interna de cada uma.'
                  }
                },
                {
                  trecho: {
                    onde: 'No princípio era a ação',
                    explica: 'Marx cita o Fausto, de Goethe: no princípio era a ação. Os donos das mercadorias agem antes de pensar. Na prática da troca, uma mercadoria acaba separada para ser o equivalente geral. O dinheiro surge assim, e não por decisão de alguém.'
                  }
                },
                {
                  perguntas: [
                    'O que um contrato de trabalho diz sobre a relação entre patrão e empregado? E o que ele não diz?'
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Para Marx, a relação jurídica do contrato...',
              ops: [
                'Espelha a relação econômica da troca',
                'Cria a economia do nada',
                'Não tem relação com a economia'
              ],
              c: 0
            },
            {
              t: 'escolha',
              p: 'Onde começa a troca de mercadorias, segundo o capítulo 2?',
              ops: ['Nas fronteiras entre comunidades', 'Dentro de cada família', 'Nos bancos'],
              c: 0
            }
          ]
        },
        {
          id: 'gk2l7',
          titulo: '3. Preço e circulação',
          exs: [
            {
              t: 'texto',
              titulo: 'Antes de ler',
              blocos: [
                {
                  p: 'O capítulo 3 mostra o que o dinheiro faz. Tem três seções. Esta lição cobre as duas primeiras: o dinheiro como medida dos valores e como meio de circulação.'
                },
                {
                  leia: {
                    titulo: 'Capítulo 3, seção 1',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap03/01.htm',
                    obs: 'Medida dos valores'
                  }
                },
                {
                  leia: {
                    titulo: 'Capítulo 3, seção 2',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap03/02.htm',
                    obs: 'Meio de circulação. É a mais longa das três.'
                  }
                },
                { dica: 'Repare na fórmula M–D–M e na expressão salto mortal.' }
              ]
            },
            {
              t: 'texto',
              titulo: 'Trechos difíceis, explicados',
              blocos: [
                {
                  trecho: {
                    onde: 'Preço',
                    explica: 'O preço é o nome em dinheiro do trabalho contido numa mercadoria. Para medir valores, o dinheiro nem precisa estar na mão: basta imaginá-lo, como na etiqueta de uma loja.'
                  }
                },
                {
                  trecho: {
                    onde: 'Preço e valor podem se afastar',
                    explica: 'O preço pode ficar acima ou abaixo do valor, conforme a oferta e a procura. Para Marx, isso não é defeito da teoria: faz parte da forma preço. E coisas que não são produto do trabalho, como a honra ou a consciência, podem ganhar preço sem ter valor.'
                  }
                },
                {
                  trecho: {
                    onde: 'M–D–M',
                    explica: 'Na circulação simples, alguém vende uma mercadoria (M) por dinheiro (D) para comprar outra mercadoria (M). Vender para comprar. O objetivo é um valor de uso.'
                  }
                },
                {
                  trecho: {
                    onde: 'O salto mortal',
                    explica: 'Vender é o salto mortal da mercadoria: se ela não é vendida, quem se machuca é o dono. E como venda e compra se separam, alguém pode vender e não comprar logo. Aí está a possibilidade, só a possibilidade, das crises.'
                  }
                },
                {
                  trecho: {
                    onde: 'Moedas e papel',
                    explica: 'Como, na circulação, o dinheiro só passa de mão em mão, ele pode ser substituído por símbolos: moedas gastas, moedas de metal barato e papel-moeda emitido pelo Estado.'
                  }
                },
                {
                  perguntas: [
                    'Por que a separação entre vender e comprar já traz a possibilidade de uma crise?'
                  ]
                }
              ]
            },
            {
              t: 'complete',
              p: 'Complete a fórmula da circulação simples',
              code: 'M – ___ – M',
              bank: ['D', 'D′', 'P', 'C'],
              c: ['D'],
              exp: 'Vender para comprar: o dinheiro é só o intermediário.'
            },
            {
              t: 'escolha',
              p: 'O que é o salto mortal da mercadoria?',
              ops: ['A venda, que pode não acontecer', 'A fabricação', 'O transporte até a loja'],
              c: 0
            },
            {
              t: 'escolha',
              p: 'Por que importa que compra e venda se separem?',
              ops: [
                'Abre a possibilidade de crises',
                'Garante que nunca haja crises',
                'Faz os preços sempre subirem'
              ],
              c: 0
            }
          ]
        },
        {
          id: 'gk2l8',
          titulo: '3. Guardar, pagar e o dinheiro mundial',
          exs: [
            {
              t: 'texto',
              titulo: 'Antes de ler',
              blocos: [
                {
                  p: 'A última seção do capítulo 3 trata do dinheiro guardado, usado para pagar dívidas e circulando entre países. Ela prepara o capítulo 4, sobre o capital.'
                },
                {
                  leia: {
                    titulo: 'Capítulo 3, seção 3',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap03/03.htm',
                    obs: 'Dinheiro: entesouramento, meio de pagamento e dinheiro mundial'
                  }
                },
                {
                  dica: 'Repare na figura do entesourador, o avarento que guarda ouro. Ela volta no capítulo 4, comparada com o capitalista.'
                }
              ]
            },
            {
              t: 'texto',
              titulo: 'Trechos difíceis, explicados',
              blocos: [
                {
                  trecho: {
                    onde: 'O entesourador',
                    explica: 'Quem guarda dinheiro tira-o da circulação. O avarento sacrifica os prazeres ao fetiche do ouro: trabalha muito, consome pouco e guarda. É um desejo sem limite, porque o dinheiro pode comprar qualquer coisa.'
                  }
                },
                {
                  trecho: {
                    onde: 'Meio de pagamento',
                    explica: 'Quando a venda é a prazo, o dinheiro entra depois, para pagar a dívida. Forma-se uma corrente de credores e devedores. Se um pagamento falha, outros falham em cadeia, e todo mundo corre atrás de dinheiro vivo: é a crise monetária.'
                  }
                },
                {
                  trecho: {
                    onde: 'Dinheiro mundial',
                    explica: 'Entre países, o dinheiro tira os uniformes nacionais, as moedas, e volta a ser ouro e prata em barra.'
                  }
                },
                {
                  perguntas: [
                    'Por que guardar dinheiro no colchão não deixa ninguém mais rico com o tempo?',
                    'O que acontece quando muita gente não consegue pagar as dívidas ao mesmo tempo?'
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que acontece numa crise monetária, segundo Marx?',
              ops: [
                'Pagamentos falham em cadeia e todos procuram dinheiro vivo',
                'O ouro deixa de existir',
                'Os preços ficam todos iguais'
              ],
              c: 0
            },
            {
              t: 'escolha',
              p: 'Quem é o entesourador?',
              ops: [
                'Quem tira dinheiro da circulação para guardar',
                'Quem empresta a juros',
                'Quem compra para revender'
              ],
              c: 0
            }
          ]
        }
      ]
    }
  ]
});
