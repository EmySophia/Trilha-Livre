/* Trilha Livre · Leitura guiada de O Capital · Nível 4: Seção 3: mais-valia absoluta
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'capital-guiado',
  n: 4,
  titulo: 'Seção 3: mais-valia absoluta',
  desc: 'Capítulos 5 a 9: o trabalho, a exploração e a luta pela jornada.',
  videos: [
    {
      titulo: 'Curso O Capital, de Marx',
      canal: 'TV Boitempo',
      obs: 'aula 3, com Marcelo Carcanholo',
      url: 'https://blogdaboitempo.com.br/2017/08/23/boitempo-libera-curso-completo-sobre-o-capital-de-marx-no-youtube/'
    },
    {
      titulo: 'Como cheguei ao marxismo, com a mais-valia explicada',
      canal: 'Jones Manoel',
      obs: 'o trecho sobre a mais-valia ajuda a fixar o capítulo 5',
      url: 'https://www.youtube.com/watch?v=NS7az_aZPec'
    }
  ],
  unidades: [
    {
      id: 'gku5',
      titulo: 'Capítulos 5 a 7',
      conceito: 'm/v',
      desc: 'De onde vem a mais-valia e como medi-la.',
      licoes: [
        {
          id: 'gk4l1',
          titulo: '5. Trabalho e valorização',
          exs: [
            {
              t: 'texto',
              titulo: 'Antes de ler',
              blocos: [
                {
                  p: 'Agora estamos no local oculto da produção. O capítulo 5 tem duas seções: a primeira fala do trabalho em qualquer sociedade; a segunda mostra o que muda quando ele acontece para o capital.'
                },
                {
                  leia: {
                    titulo: 'Capítulo 5, seção 1',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap05/01.htm',
                    obs: 'O processo de trabalho'
                  }
                },
                {
                  leia: {
                    titulo: 'Capítulo 5, seção 2',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap05/02.htm',
                    obs: 'O processo de valorização. Tem as contas do fio de algodão.'
                  }
                },
                { dica: 'Refaça as contas do fio no caderno. Elas são o centro do capítulo.' }
              ]
            },
            {
              t: 'texto',
              titulo: 'Trechos difíceis, explicados',
              blocos: [
                {
                  trecho: {
                    onde: 'A abelha e o arquiteto',
                    explica: 'A aranha tece como um tecelão, e a abelha faz favos melhores do que muitos arquitetos. Mas o pior arquiteto se diferencia da melhor abelha porque constrói a obra na cabeça antes de construí-la de verdade. O trabalho humano tem um objetivo pensado antes.'
                  }
                },
                {
                  trecho: {
                    onde: 'Os elementos do trabalho',
                    explica: 'Todo processo de trabalho tem três elementos: a atividade com um objetivo, o objeto em que se trabalha, como a matéria-prima, e os meios de trabalho, como ferramentas e máquinas.'
                  }
                },
                {
                  trecho: {
                    onde: 'Sob o capital, duas coisas mudam',
                    explica: 'O trabalhador trabalha sob o controle do capitalista, a quem o trabalho dele pertence. E o produto é do capitalista, não do trabalhador.'
                  }
                },
                {
                  trecho: {
                    onde: 'As contas do fio',
                    explica: 'Marx supõe: algodão de 10 xelins, desgaste do fuso de 2 xelins e 6 horas de trabalho. Se a força de trabalho de um dia vale 3 xelins, e 6 horas de trabalho criam 3 xelins de valor, o fio vale 15, exatamente o que custou. Nada de mais-valia. Mas o capitalista comprou o dia inteiro. Em 12 horas, gasta 20 xelins de algodão, 4 de fuso e os mesmos 3 de salário: 27. O fio sai valendo 30. Os 3 xelins a mais são a mais-valia.'
                  }
                },
                {
                  trecho: {
                    onde: 'Ninguém foi enganado',
                    explica: 'Todas as mercadorias foram compradas pelo valor, inclusive a força de trabalho. A mais-valia vem da diferença entre o valor da força de trabalho e o valor que o trabalho dela cria num dia. O truque, diz Marx com ironia, finalmente deu certo.'
                  }
                },
                {
                  perguntas: [
                    'Se ninguém foi enganado na troca, onde está a exploração, para Marx?',
                    'Pense num trabalho que você conhece. O que se produz num dia vale mais ou menos do que o salário do dia?'
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que diferencia o pior arquiteto da melhor abelha?',
              ops: [
                'O arquiteto planeja a obra na cabeça antes de construir',
                'A abelha trabalha mais devagar',
                'O arquiteto usa ferramentas melhores'
              ],
              c: 0
            },
            {
              t: 'complete',
              p: 'Complete as contas do fio, com 12 horas de trabalho',
              code: `custo: 20 + 4 + 3 = 27 xelins
valor do fio: 20 + 4 + 6 = ___ xelins`,
              bank: ['30', '27', '24', '33'],
              c: ['30'],
              exp: 'Doze horas de trabalho criam 6 xelins de valor, mas custaram 3. A mais-valia é de 3 xelins.'
            },
            {
              t: 'escolha',
              p: 'De onde vem a mais-valia nas contas do fio?',
              ops: [
                'Da diferença entre o valor da força de trabalho e o valor que o trabalho cria',
                'De vender o fio acima do valor',
                'Do algodão, que ganha valor sozinho'
              ],
              c: 0
            }
          ]
        },
        {
          id: 'gk4l2',
          titulo: '6. Capital constante e variável',
          exs: [
            {
              t: 'texto',
              titulo: 'Antes de ler',
              blocos: [
                {
                  p: 'Um capítulo curto que dá nome às duas partes do capital. Os nomes vão aparecer até o fim do livro, com as letras c e v.'
                },
                {
                  leia: {
                    titulo: 'Capítulo 6',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap06/01.htm',
                    obs: 'Capital constante e capital variável'
                  }
                },
                {
                  dica: 'Repare em como o mesmo trabalho faz duas coisas ao mesmo tempo: conserva o valor antigo e cria valor novo.'
                }
              ]
            },
            {
              t: 'texto',
              titulo: 'Trechos difíceis, explicados',
              blocos: [
                {
                  trecho: {
                    onde: 'Conservar e acrescentar',
                    explica: 'Ao fiar, o trabalhador passa para o fio o valor do algodão e do desgaste do fuso e, ao mesmo tempo, acrescenta valor novo. O lado concreto do trabalho, fiar, conserva o valor antigo. O lado abstrato, o gasto de tempo, cria o novo.'
                  }
                },
                {
                  trecho: {
                    onde: 'Capital constante (c)',
                    explica: 'É a parte gasta em meios de produção: matérias-primas, máquinas, energia. O valor dela só é transferido ao produto, sem aumentar. Uma máquina passa o seu valor aos poucos, à medida que se desgasta.'
                  }
                },
                {
                  trecho: {
                    onde: 'Capital variável (v)',
                    explica: 'É a parte gasta em força de trabalho. Ela muda de tamanho no processo: o trabalho repõe o valor dela e ainda cria a mais-valia. Por isso, variável.'
                  }
                },
                {
                  perguntas: [
                    'Por que, para Marx, uma máquina sozinha não cria valor novo, mesmo produzindo muito?'
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que é capital constante?',
              ops: [
                'A parte gasta em meios de produção, que só transfere o seu valor',
                'A parte gasta em salários',
                'O dinheiro guardado no banco'
              ],
              c: 0
            },
            {
              t: 'escolha',
              p: 'Por que o capital variável tem esse nome?',
              ops: [
                'Porque cria mais valor do que custa',
                'Porque o salário muda todo mês',
                'Porque pode ser trocado por máquinas'
              ],
              c: 0
            },
            {
              t: 'complete',
              p: 'Complete o valor do produto',
              code: 'valor do produto = c + v + ___',
              bank: ['m', 'c', 'v', 'D'],
              c: ['m'],
              exp: 'Capital constante, capital variável e mais-valia.'
            }
          ]
        },
        {
          id: 'gk4l3',
          titulo: '7. A taxa de mais-valia',
          exs: [
            {
              t: 'texto',
              titulo: 'Antes de ler',
              blocos: [
                {
                  p: 'Se a mais-valia vem só do capital variável, é com ele que ela deve ser comparada. O capítulo 7 mede o grau de exploração.'
                },
                {
                  leia: {
                    titulo: 'Capítulo 7, seção 1',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap07/cap01.htm',
                    obs: 'O grau de exploração da força de trabalho'
                  }
                },
                {
                  leia: {
                    titulo: 'Capítulo 7, seção 3',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap07/cap03.htm',
                    obs: 'A última hora de Senior. Curta e divertida.'
                  }
                },
                { dica: 'As seções 2 e 4 também são curtas. Leia se tiver tempo.' }
              ]
            },
            {
              t: 'texto',
              titulo: 'Trechos difíceis, explicados',
              blocos: [
                {
                  trecho: {
                    onde: 'Trabalho necessário e sobretrabalho',
                    explica: 'O dia de trabalho se divide em duas partes. No tempo de trabalho necessário, o trabalhador produz o equivalente ao seu salário. No sobretrabalho, que as edições brasileiras chamam de mais-trabalho, produz a mais-valia, de graça para o capitalista.'
                  }
                },
                {
                  trecho: {
                    onde: 'A taxa',
                    explica: 'A taxa de mais-valia é m/v: a mais-valia dividida pelo capital variável. É o mesmo que sobretrabalho dividido por trabalho necessário. Se, num dia de 12 horas, 6 pagam o salário e 6 são de sobretrabalho, a taxa é de 100%.'
                  }
                },
                {
                  trecho: {
                    onde: 'A última hora de Senior',
                    explica: 'Em 1836, os industriais de Manchester chamaram o economista Nassau Senior para argumentar contra a redução da jornada. Ele dizia que todo o lucro vinha da última hora de trabalho, e que sem ela as fábricas quebrariam. Marx refaz as contas e mostra que o argumento não fecha.'
                  }
                },
                {
                  perguntas: [
                    'Com uma taxa de mais-valia de 100%, quantas horas de um dia de 8 horas iriam para pagar o salário?'
                  ]
                }
              ]
            },
            {
              t: 'complete',
              p: 'Complete a fórmula da taxa de mais-valia',
              code: 'taxa de mais-valia = m / ___',
              bank: ['v', 'c', 'c + v', 'm'],
              c: ['v'],
              exp: 'A mais-valia comparada com o capital que a criou, o variável.'
            },
            {
              t: 'escolha',
              p: 'Num dia de 12 horas, 6 pagam o salário. Qual é a taxa de mais-valia?',
              ops: ['100%', '50%', '200%'],
              c: 0,
              exp: 'Seis horas de sobretrabalho divididas por seis de trabalho necessário.'
            },
            {
              t: 'escolha',
              p: 'O que Senior defendia?',
              ops: [
                'Que todo o lucro vinha da última hora, e por isso a jornada não podia diminuir',
                'Que a jornada deveria ser de 8 horas',
                'Que os trabalhadores deviam receber o lucro'
              ],
              c: 0
            }
          ]
        }
      ]
    },
    {
      id: 'gku6',
      titulo: 'Capítulos 8 e 9',
      conceito: 'jornada',
      desc: 'A luta pelo tamanho do dia de trabalho.',
      licoes: [
        {
          id: 'gk4l4',
          titulo: '8. Os limites da jornada',
          exs: [
            {
              t: 'texto',
              titulo: 'Antes de ler',
              blocos: [
                {
                  p: 'O capítulo 8 é dos mais vivos do livro: em vez de fórmulas, relatos de fábricas, padarias e oficinas. No site, ele se chama O dia de trabalho; nas edições brasileiras, A jornada de trabalho. Esta lição cobre as seções 1 a 4.'
                },
                {
                  leia: {
                    titulo: 'Capítulo 8, seção 1',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap08/01.htm',
                    obs: 'Os limites do dia de trabalho'
                  }
                },
                {
                  leia: {
                    titulo: 'Capítulo 8, seção 3',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap08/03.htm',
                    obs: 'Ramos da indústria inglesa sem limites legais à exploração. A seção 2, antes dela, também é curta.'
                  }
                },
                {
                  dica: 'Repare no vampiro, na frase sobre direitos iguais e na história de Mary Anne Walkley.'
                }
              ]
            },
            {
              t: 'texto',
              titulo: 'Trechos difíceis, explicados',
              blocos: [
                {
                  trecho: {
                    onde: 'Uma jornada elástica',
                    explica: 'O trabalho necessário tem um tamanho dado, mas o sobretrabalho, não. A jornada tem um limite físico, o descanso e a comida, e um limite moral, o tempo para a vida social. Os dois são elásticos.'
                  }
                },
                {
                  trecho: {
                    onde: 'O vampiro',
                    explica: 'Marx escreve que o capital é trabalho morto que, como um vampiro, só vive sugando trabalho vivo, e vive tanto mais quanto mais suga. Trabalho morto é o trabalho passado, guardado em máquinas e matérias-primas.'
                  }
                },
                {
                  trecho: {
                    onde: 'Entre direitos iguais, decide a força',
                    explica: 'O capitalista tem o direito do comprador: quer usar ao máximo o que comprou. O trabalhador tem o direito do vendedor: quer limitar o uso da sua força para não se destruir. Pela lei da troca, os dois direitos valem. Entre direitos iguais, diz Marx, decide a força. Por isso a jornada é decidida pela luta de classes.'
                  }
                },
                {
                  trecho: {
                    onde: 'Mary Anne Walkley',
                    explica: 'Marx conta, a partir dos jornais de 1863, a morte de uma modista de 20 anos, depois de trabalhar mais de 26 horas seguidas fazendo vestidos para um baile. É um dos trechos mais duros do livro.'
                  }
                },
                {
                  perguntas: [
                    'O que quer dizer que o limite da jornada é físico e moral? Quais desses limites você vê hoje?',
                    'Por que, entre direitos iguais, quem decide é a força?'
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Para Marx, o que decide o tamanho da jornada?',
              ops: [
                'A luta entre as classes, porque os dois lados têm direitos iguais pela lei da troca',
                'Uma lei natural da economia',
                'A vontade do trabalhador'
              ],
              c: 0
            },
            {
              t: 'escolha',
              p: 'O que é trabalho morto, na metáfora do vampiro?',
              ops: [
                'Trabalho passado, guardado em máquinas e matérias-primas',
                'O trabalho de quem já morreu',
                'Trabalho mal pago'
              ],
              c: 0
            }
          ]
        },
        {
          id: 'gk4l5',
          titulo: '8. A luta pela jornada normal',
          exs: [
            {
              t: 'texto',
              titulo: 'Antes de ler',
              blocos: [
                {
                  p: 'As seções 5 a 7 contam a história das leis sobre a jornada: primeiro para aumentá-la, depois para limitá-la. É a luta de classes acontecendo na lei.'
                },
                {
                  leia: {
                    titulo: 'Capítulo 8, seção 6',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap08/06.htm',
                    obs: 'As leis fabris inglesas de 1833 a 1864. A seção 5, antes dela, conta as leis que aumentavam a jornada.'
                  }
                },
                {
                  leia: {
                    titulo: 'Capítulo 8, seção 7',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap08/07.htm',
                    obs: 'A repercussão em outros países. Curta.'
                  }
                },
                {
                  dica: 'Repare em quem lutou por cada lei e em como os patrões tentavam burlá-las.'
                }
              ]
            },
            {
              t: 'texto',
              titulo: 'Trechos difíceis, explicados',
              blocos: [
                {
                  trecho: {
                    onde: 'Leis para trabalhar mais',
                    explica: 'Do século 14 ao 17, as leis inglesas obrigavam as pessoas a trabalhar mais tempo. O capital ainda não tinha força para arrancar trabalho só pela pressão econômica e precisava do Estado.'
                  }
                },
                {
                  trecho: {
                    onde: 'Leis para trabalhar menos',
                    explica: 'No século 19, depois de décadas de pressão operária, as leis fabris passaram a limitar a jornada, primeiro de crianças e mulheres. A lei de 1833 regulou o trabalho nas fábricas têxteis, e a lei das 10 horas, de 1847, valeu a partir de 1848. Os patrões burlavam com turnos em revezamento, e os inspetores de fábrica denunciavam isso nos relatórios que Marx cita.'
                  }
                },
                {
                  trecho: {
                    onde: 'Uma longa guerra civil',
                    explica: 'Marx conclui que a jornada normal é produto de uma guerra civil longa, mais ou menos escondida, entre a classe capitalista e a classe trabalhadora.'
                  }
                },
                {
                  trecho: {
                    onde: 'Branco e negro',
                    explica: 'Nos Estados Unidos, diz Marx, o movimento operário ficou paralisado enquanto existiu a escravidão: o trabalho de pele branca não pode se emancipar onde o de pele negra é marcado a ferro. Logo depois da abolição, veio a campanha pelas 8 horas. Em 1866, um congresso operário em Baltimore e o congresso da Associação Internacional dos Trabalhadores, em Genebra, defenderam a jornada de 8 horas.'
                  }
                },
                {
                  perguntas: [
                    'No Brasil, a Constituição de 1988 limitou a jornada a 8 horas por dia e 44 por semana. Como você acha que se chegou a esse limite?',
                    'Que formas de esticar a jornada você conhece hoje?'
                  ]
                }
              ]
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem histórica',
              lines: [
                'Leis que obrigavam a trabalhar mais (séculos 14 a 17)',
                'Lei fabril inglesa de 1833',
                'Lei das 10 horas (1847)',
                'Congressos operários defendem as 8 horas (1866)'
              ],
              exp: 'Primeiro o Estado ajudou a esticar a jornada; depois, a luta operária a limitou.'
            },
            {
              t: 'escolha',
              p: 'Como Marx descreve a criação da jornada normal de trabalho?',
              ops: [
                'Como produto de uma longa guerra civil entre as classes',
                'Como um presente dos patrões',
                'Como uma descoberta dos economistas'
              ],
              c: 0
            },
            {
              t: 'escolha',
              p: 'Por que, segundo Marx, o movimento operário dos Estados Unidos ficou paralisado antes da abolição?',
              ops: [
                'O trabalho dos brancos não podia se emancipar enquanto o dos negros era escravizado',
                'Não havia fábricas no país',
                'A jornada já era curta'
              ],
              c: 0
            }
          ]
        },
        {
          id: 'gk4l6',
          titulo: '9. Taxa e massa da mais-valia',
          exs: [
            {
              t: 'texto',
              titulo: 'Antes de ler',
              blocos: [
                {
                  p: 'Um capítulo curto, de passagem, que fecha a seção 3 com algumas leis sobre a quantidade de mais-valia.'
                },
                {
                  leia: {
                    titulo: 'Capítulo 9',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap09/01.htm',
                    obs: 'Taxa e massa da mais-valia'
                  }
                },
                { dica: 'Repare na ideia de que a quantidade vira qualidade.' }
              ]
            },
            {
              t: 'texto',
              titulo: 'Trechos difíceis, explicados',
              blocos: [
                {
                  trecho: {
                    onde: 'Massa de mais-valia',
                    explica: 'A massa de mais-valia é a taxa vezes o número de trabalhadores. Um capital pode compensar menos trabalhadores com mais exploração, mas só até certo ponto: o dia tem 24 horas.'
                  }
                },
                {
                  trecho: {
                    onde: 'Quantidade vira qualidade',
                    explica: 'Para ser capitalista, não basta ter um pouco de dinheiro. É preciso uma soma mínima, que permita empregar gente suficiente para viver do trabalho dela, sem trabalhar. Marx usa uma ideia de Hegel: a partir de certo ponto, mudanças de quantidade viram mudanças de qualidade.'
                  }
                },
                {
                  trecho: {
                    onde: 'Os meios de produção empregam o trabalhador',
                    explica: 'No capitalismo, a relação se inverte: não é o trabalhador quem usa os meios de produção; são eles que usam o trabalhador, para crescer.'
                  }
                },
                {
                  perguntas: [
                    'Qual é a diferença entre ter um pequeno negócio em que a pessoa trabalha e ser capitalista, no sentido de Marx?'
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que é a massa de mais-valia?',
              ops: [
                'A taxa de mais-valia vezes o número de trabalhadores',
                'O lucro de um dia',
                'O valor das máquinas'
              ],
              c: 0
            },
            {
              t: 'escolha',
              p: 'Por que nem todo dono de dinheiro é capitalista?',
              ops: [
                'É preciso uma soma mínima para viver do trabalho alheio',
                'É preciso uma licença do governo',
                'Só bancos são capitalistas'
              ],
              c: 0
            }
          ]
        }
      ]
    }
  ]
});
