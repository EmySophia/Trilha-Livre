/* Trilha Livre · Leitura guiada de O Capital · Nível 7: Seção 7: a acumulação do capital
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'capital-guiado',
  n: 7,
  titulo: 'Seção 7: a acumulação do capital',
  desc: 'Capítulos 21 a 25: reprodução, acumulação, desemprego e a origem violenta do capitalismo.',
  videos: [
    {
      titulo: 'Curso O Capital, de Marx',
      canal: 'TV Boitempo',
      obs: 'aula 4, com Jorge Grespan: acumulação e crise',
      url: 'https://blogdaboitempo.com.br/2017/08/23/boitempo-libera-curso-completo-sobre-o-capital-de-marx-no-youtube/'
    },
    {
      titulo: 'Reading Marx\'s Capital, volume 1 (em inglês)',
      canal: 'David Harvey',
      obs: 'as últimas aulas tratam da acumulação e da acumulação primitiva; na edição inglesa, são os capítulos 23 a 33',
      url: 'https://davidharvey.org/2008/06/getting-started/'
    }
  ],
  unidades: [
    {
      id: 'gku11',
      titulo: 'Capítulos 21 e 22',
      conceito: 'reprodução',
      desc: 'O processo se repetindo no tempo.',
      licoes: [
        {
          id: 'gk7l1',
          titulo: '21. Reprodução simples',
          exs: [
            {
              t: 'texto',
              titulo: 'Antes de ler',
              blocos: [
                {
                  p: 'A última seção olha para o processo inteiro se repetindo no tempo. O capítulo 21 imagina o caso mais simples: o capitalista consome toda a mais-valia, e a produção se repete do mesmo tamanho.'
                },
                {
                  leia: {
                    titulo: 'Capítulo 21',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap21/01.htm',
                    obs: 'Reprodução simples'
                  }
                },
                { dica: 'Repare no que a repetição revela e que um ciclo só escondia.' }
              ]
            },
            {
              t: 'texto',
              titulo: 'Trechos difíceis, explicados',
              blocos: [
                {
                  trecho: {
                    onde: 'O salário vem do próprio trabalho',
                    explica: 'Olhando um ciclo só, parece que o capitalista adianta o salário do próprio bolso. Olhando a repetição, o salário de hoje é pago com o produto do trabalho de ontem. É o próprio trabalhador quem produz o fundo que o paga.'
                  }
                },
                {
                  trecho: {
                    onde: 'Todo capital vira mais-valia',
                    explica: 'Se um capitalista começa com 1.000 e consome a cada ano uma mais-valia de 200, em 5 anos terá consumido 1.000. O capital que continua lá equivale só a mais-valia acumulada: trabalho alheio não pago.'
                  }
                },
                {
                  trecho: {
                    onde: 'Fios invisíveis',
                    explica: 'Até o consumo do trabalhador, comer e descansar, serve ao capital, porque repõe a força de trabalho. O escravo romano estava preso por correntes; o assalariado, diz Marx, está preso por fios invisíveis.'
                  }
                },
                {
                  trecho: {
                    onde: 'O que se reproduz',
                    explica: 'O processo não produz só mercadorias e mais-valia. Reproduz a própria relação de capital: de um lado o capitalista, do outro o assalariado, que sai da fábrica como entrou, só com a força de trabalho para vender.'
                  }
                },
                { perguntas: ['Que fios invisíveis prendem alguém a um emprego hoje?'] }
              ]
            },
            {
              t: 'escolha',
              p: 'Olhando a repetição, de onde vem o dinheiro dos salários?',
              ops: [
                'Do produto do trabalho dos próprios trabalhadores',
                'Da poupança pessoal do capitalista',
                'Do governo'
              ],
              c: 0
            },
            {
              t: 'complete',
              p: 'Complete as contas do capitalista',
              code: `capital inicial: 1000
mais-valia consumida por ano: 200
anos para consumir o valor do capital inicial: ___`,
              bank: ['5', '10', '2', '200'],
              c: ['5'],
              exp: '5 vezes 200 é 1.000. Depois disso, o capital equivale a mais-valia acumulada.'
            },
            {
              t: 'escolha',
              p: 'O que a reprodução simples reproduz, além das mercadorias?',
              ops: [
                'A relação entre capitalista e assalariado',
                'Nada além das mercadorias',
                'A igualdade entre as classes'
              ],
              c: 0
            }
          ]
        },
        {
          id: 'gk7l2',
          titulo: '22. Mais-valia vira capital',
          exs: [
            {
              t: 'texto',
              titulo: 'Antes de ler',
              blocos: [
                {
                  p: 'Agora o capitalista não consome tudo: transforma parte da mais-valia em capital novo. É a acumulação, ou reprodução em escala ampliada.'
                },
                {
                  leia: {
                    titulo: 'Capítulo 22, seção 1',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap22/01.htm',
                    obs: 'O processo de produção em escala ampliada'
                  }
                },
                {
                  leia: {
                    titulo: 'Capítulo 22, seção 3',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap22/03.htm',
                    obs: 'A divisão da mais-valia em capital e renda. A teoria da abstinência'
                  }
                },
                {
                  dica: 'Repare em como as leis da troca de mercadorias viram o seu contrário.'
                }
              ]
            },
            {
              t: 'texto',
              titulo: 'Trechos difíceis, explicados',
              blocos: [
                {
                  trecho: {
                    onde: 'A propriedade se inverte',
                    explica: 'No começo, parecia que a propriedade vinha do próprio trabalho. Com a acumulação, ela vira o direito de se apropriar de trabalho alheio não pago e, para o trabalhador, a impossibilidade de ficar com o próprio produto. Tudo isso sem violar nenhuma regra da troca.'
                  }
                },
                {
                  trecho: {
                    onde: 'Acumulai, acumulai!',
                    explica: 'Marx resume o espírito do capital com uma frase de tom bíblico: acumulai, acumulai, essa é a lei e os profetas. A concorrência obriga cada capitalista a crescer para não ser engolido.'
                  }
                },
                {
                  trecho: {
                    onde: 'A teoria da abstinência',
                    explica: 'O economista Nassau Senior dizia que o lucro é a recompensa pela abstinência do capitalista, que deixa de gastar para investir. Marx trata a ideia com ironia: o capital cresce com trabalho alheio, e não com renúncia. E nota que, com a riqueza, até o luxo vira necessidade do negócio, para mostrar crédito. No peito do capitalista, como no Fausto, moram duas almas: a paixão de acumular e o desejo de gozar.'
                  }
                },
                {
                  perguntas: [
                    'Por que, para Marx, um capitalista não pode simplesmente parar de crescer?'
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que é acumulação de capital?',
              ops: [
                'Transformar parte da mais-valia em capital novo',
                'Guardar dinheiro no cofre',
                'Pagar salários mais altos'
              ],
              c: 0
            },
            {
              t: 'escolha',
              p: 'O que dizia a teoria da abstinência?',
              ops: [
                'Que o lucro recompensa o capitalista por deixar de gastar',
                'Que os trabalhadores deviam se abster de greves',
                'Que o Estado devia se abster da economia'
              ],
              c: 0
            }
          ]
        }
      ]
    },
    {
      id: 'gku12',
      titulo: 'Capítulo 23',
      conceito: 'reserva',
      desc: 'A lei geral da acumulação capitalista.',
      licoes: [
        {
          id: 'gk7l3',
          titulo: '23. Composição e centralização',
          exs: [
            {
              t: 'texto',
              titulo: 'Antes de ler',
              blocos: [
                {
                  p: 'O capítulo 23 é um dos mais importantes do livro: o que a acumulação faz com a classe trabalhadora. Vamos lê-lo em duas lições. Esta cobre as seções 1 e 2.'
                },
                {
                  leia: {
                    titulo: 'Capítulo 23, seção 1',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap23/01.htm',
                    obs: 'Mais procura por trabalhadores, quando a composição do capital não muda'
                  }
                },
                {
                  leia: {
                    titulo: 'Capítulo 23, seção 2',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap23/02.htm',
                    obs: 'A parte variável do capital diminui em relação à constante'
                  }
                },
                {
                  dica: 'Repare nos nomes da composição do capital e na diferença entre concentração e centralização.'
                }
              ]
            },
            {
              t: 'texto',
              titulo: 'Trechos difíceis, explicados',
              blocos: [
                {
                  trecho: {
                    onde: 'Composição do capital',
                    explica: 'É a proporção entre meios de produção e força de trabalho. Do lado técnico: quantas máquinas e matérias-primas há por trabalhador. Do lado do valor: a proporção entre c e v. Quando a composição em valor reflete a técnica, Marx a chama de composição orgânica.'
                  }
                },
                {
                  trecho: {
                    onde: 'A corrente de ouro',
                    explica: 'Se a composição não muda, a acumulação aumenta a procura por trabalhadores, e os salários podem subir. Mas isso só alarga e afrouxa um pouco a corrente de ouro que o trabalhador forjou para si. Se os salários sobem a ponto de o lucro cair, a acumulação desacelera, e os salários voltam a cair.'
                  }
                },
                {
                  trecho: {
                    onde: 'Mais máquinas por trabalhador',
                    explica: 'Com o tempo, a acumulação traz máquinas e técnicas novas. Cresce o capital constante, e o variável cresce menos, ou até diminui. A procura por trabalhadores cresce menos que o capital.'
                  }
                },
                {
                  trecho: {
                    onde: 'Concentração e centralização',
                    explica: 'Concentração é o capital crescer acumulando. Centralização é juntar capitais que já existem: o grande engole o pequeno, pela concorrência, por fusões ou pelo crédito.'
                  }
                },
                {
                  perguntas: [
                    'Que exemplos de centralização de capital você vê hoje, em bancos, supermercados ou empresas de tecnologia?'
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que é centralização do capital?',
              ops: [
                'Capitais existentes se juntando, o grande engolindo o pequeno',
                'O capital crescendo só por acumulação',
                'O governo controlando as empresas'
              ],
              c: 0
            },
            {
              t: 'escolha',
              p: 'O que acontece quando cresce a composição orgânica do capital?',
              ops: [
                'A procura por trabalhadores cresce menos que o capital',
                'Os salários sempre sobem',
                'Todo o capital vira salário'
              ],
              c: 0
            }
          ]
        },
        {
          id: 'gk7l4',
          titulo: '23. O exército de reserva',
          exs: [
            {
              t: 'texto',
              titulo: 'Antes de ler',
              blocos: [
                {
                  p: 'As seções 3 e 4 trazem uma das ideias mais conhecidas de Marx: o desemprego não é um acidente do capitalismo, é parte do funcionamento dele. A seção 5 ilustra com dados da Inglaterra e da Irlanda.'
                },
                {
                  leia: {
                    titulo: 'Capítulo 23, seção 3',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap23/03.htm',
                    obs: 'A produção de uma população excedente relativa, ou exército industrial de reserva'
                  }
                },
                {
                  leia: {
                    titulo: 'Capítulo 23, seção 4',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap23/04.htm',
                    obs: 'As formas da população excedente e a lei geral da acumulação'
                  }
                },
                { dica: 'Repare em por que Marx chama a população excedente de relativa.' }
              ]
            },
            {
              t: 'texto',
              titulo: 'Trechos difíceis, explicados',
              blocos: [
                {
                  trecho: {
                    onde: 'Uma população que sobra',
                    explica: 'A acumulação produz uma população trabalhadora que sobra em relação às necessidades do capital, e não à comida do planeta. Marx critica Malthus, que culpava o crescimento da população: para Marx, cada modo de produção tem as suas próprias leis de população.'
                  }
                },
                {
                  trecho: {
                    onde: 'O exército industrial de reserva',
                    explica: 'Os desempregados ficam à disposição para quando os negócios crescem e voltam a sobrar quando caem. E pressionam os salários de quem está empregado. Para Marx, os salários sobem e descem conforme esse exército diminui ou aumenta, e não conforme o tamanho da população.'
                  }
                },
                {
                  trecho: {
                    onde: 'As formas',
                    explica: 'Marx distingue a população flutuante, que entra e sai dos empregos; a latente, no campo, pronta para migrar para as cidades; e a estagnada, com trabalho irregular e mal pago. Abaixo de todas está o pauperismo, que ele chama de asilo de inválidos do exército ativo.'
                  }
                },
                {
                  trecho: {
                    onde: 'A lei geral',
                    explica: 'Quanto maiores a riqueza social e o capital, maior o exército de reserva. A acumulação de riqueza num polo é, ao mesmo tempo, acumulação de miséria, de trabalho penoso e de ignorância no polo oposto. É uma das teses mais debatidas do livro: o último nível do curso O Capital, de Marx, traz as críticas e as respostas.'
                  }
                },
                {
                  perguntas: [
                    'Em que forma descrita por Marx você colocaria quem trabalha por conta própria, sem direitos e sem renda fixa?',
                    'Por que interessa ao capital que exista sempre algum desemprego?'
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Para Marx, o desemprego no capitalismo é...',
              ops: [
                'Parte do funcionamento normal da acumulação',
                'Um acidente que logo desaparece',
                'Culpa só do crescimento da população'
              ],
              c: 0
            },
            {
              t: 'escolha',
              p: 'O que regula os salários, segundo o capítulo 23?',
              ops: [
                'O aumento e a diminuição do exército de reserva',
                'O tamanho total da população',
                'A bondade dos patrões'
              ],
              c: 0
            },
            {
              t: 'escolha',
              p: 'Que forma da população excedente está no campo, pronta para migrar?',
              ops: ['A latente', 'A flutuante', 'A estagnada'],
              c: 0
            }
          ]
        }
      ]
    },
    {
      id: 'gku13',
      titulo: 'Capítulos 24 e 25',
      conceito: 'origem',
      desc: 'De onde veio o capitalismo, e o fim do livro.',
      licoes: [
        {
          id: 'gk7l5',
          titulo: '24. O segredo e a expropriação',
          exs: [
            {
              t: 'texto',
              titulo: 'Antes de ler',
              blocos: [
                {
                  p: 'O capítulo 24 volta no tempo. Até aqui, o livro supôs que já existiam capitalistas com dinheiro e trabalhadores sem nada. Como se chegou a isso? No site, ele se chama A chamada acumulação original; nas edições brasileiras, primitiva.'
                },
                {
                  leia: {
                    titulo: 'Capítulo 24, seção 1',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap24/01.htm',
                    obs: 'O segredo da acumulação original. Curta.'
                  }
                },
                {
                  leia: {
                    titulo: 'Capítulo 24, seção 2',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap24/02.htm',
                    obs: 'A expropriação da população do campo'
                  }
                },
                {
                  leia: {
                    titulo: 'Capítulo 24, seção 3',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap24/03.htm',
                    obs: 'A legislação sanguinária contra os expropriados'
                  }
                },
                {
                  dica: 'Repare no tom: é um dos capítulos mais irônicos e mais indignados do livro.'
                }
              ]
            },
            {
              t: 'texto',
              titulo: 'Trechos difíceis, explicados',
              blocos: [
                {
                  trecho: {
                    onde: 'Um conto para crianças',
                    explica: 'A economia contava que, há muito tempo, houve uma elite trabalhadora e poupadora e um bando de preguiçosos que gastou tudo. Marx chama isso de conto infantil. Na história real, diz ele, a conquista, a escravização, o roubo e o assassinato, em suma, a violência, tiveram o papel principal.'
                  }
                },
                {
                  trecho: {
                    onde: 'Separar o produtor dos meios de produção',
                    explica: 'A acumulação original é o processo histórico que separou os produtores dos seus meios de produção. Na Inglaterra, a partir do fim do século 15, camponeses foram expulsos das terras comuns pelos cercamentos, para dar lugar às ovelhas, porque a lã dava lucro.'
                  }
                },
                {
                  trecho: {
                    onde: 'A duquesa de Sutherland',
                    explica: 'Entre 1814 e 1820, a duquesa de Sutherland expulsou cerca de 15 mil moradores das suas terras na Escócia e as transformou em pastagens de ovelhas. As aldeias foram destruídas e queimadas.'
                  }
                },
                {
                  trecho: {
                    onde: 'Leis contra os pobres',
                    explica: 'Os expulsos não cabiam todos nas manufaturas e viraram mendigos e vagabundos. As leis passaram a puni-los com chicote, marcas a ferro e até escravidão, como a de Eduardo VI, de 1547. Outras leis fixavam salários máximos e proibiam a organização dos trabalhadores.'
                  }
                },
                {
                  perguntas: [
                    'Por que Marx chama de conto infantil a explicação de que a riqueza veio da poupança?',
                    'No Brasil, a Lei de Terras de 1850 fez da compra o único jeito de conseguir terras do Estado. Que relação você vê com este capítulo?'
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que é a acumulação original, ou primitiva?',
              ops: [
                'O processo histórico que separou os produtores dos meios de produção',
                'A poupança dos primeiros capitalistas',
                'A primeira vez que alguém guardou dinheiro'
              ],
              c: 0
            },
            {
              t: 'escolha',
              p: 'Por que os camponeses ingleses foram expulsos das terras, segundo Marx?',
              ops: [
                'Para dar lugar a pastagens de ovelhas, porque a lã dava lucro',
                'Porque quiseram ir para as cidades',
                'Por causa de uma seca'
              ],
              c: 0
            },
            {
              t: 'escolha',
              p: 'O que Marx diz da história da elite poupadora?',
              ops: [
                'É um conto infantil: na história real, a violência teve o papel principal',
                'É a explicação correta',
                'Vale só para a Inglaterra'
              ],
              c: 0
            }
          ]
        },
        {
          id: 'gk7l6',
          titulo: '24. Colônias, escravidão e o fim',
          exs: [
            {
              t: 'texto',
              titulo: 'Antes de ler',
              blocos: [
                {
                  p: 'As seções 4 a 6 mostram como surgiram os arrendatários e os capitalistas industriais. A seção 7, curta, é o famoso fecho do livro: a tendência histórica.'
                },
                {
                  leia: {
                    titulo: 'Capítulo 24, seção 6',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap24/06.htm',
                    obs: 'A gênese do capitalista industrial'
                  }
                },
                {
                  leia: {
                    titulo: 'Capítulo 24, seção 7',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap24/07.htm',
                    obs: 'A tendência histórica da acumulação capitalista. Poucas páginas.'
                  }
                },
                {
                  dica: 'Na seção 6, repare no papel das colônias e da escravidão. Na 7, na expressão expropriação dos expropriadores.'
                }
              ]
            },
            {
              t: 'texto',
              titulo: 'Trechos difíceis, explicados',
              blocos: [
                {
                  trecho: {
                    onde: 'A aurora da era capitalista',
                    explica: 'A descoberta do ouro e da prata na América, o extermínio, a escravização e o enterro nas minas dos povos indígenas, o começo da conquista e do saque das Índias Orientais, a transformação da África num campo de caça de pessoas negras: para Marx, isso marca a aurora da era da produção capitalista.'
                  }
                },
                {
                  trecho: {
                    onde: 'As alavancas',
                    explica: 'O sistema colonial, a dívida pública, o sistema de impostos moderno e o protecionismo usaram o poder do Estado para acelerar a passagem ao capitalismo. A violência, diz Marx, é a parteira de toda velha sociedade que carrega uma nova no ventre.'
                  }
                },
                {
                  trecho: {
                    onde: 'A escravidão como pedestal',
                    explica: 'Para Marx, a escravidão disfarçada dos assalariados na Europa precisava, como pedestal, da escravidão pura e simples no Novo Mundo. O capital vem ao mundo escorrendo sangue e sujeira por todos os poros, da cabeça aos pés.'
                  }
                },
                {
                  trecho: {
                    onde: 'A expropriação dos expropriadores',
                    explica: 'Na seção 7, Marx resume: a pequena propriedade de quem trabalhava com os próprios meios foi destruída pela propriedade capitalista. Esta concentra os meios de produção e socializa o trabalho em escala gigante, enquanto cresce uma classe trabalhadora unida e organizada pelo próprio processo de produção. Então, diz ele, os expropriadores são expropriados. É a negação da negação.'
                  }
                },
                {
                  perguntas: [
                    'O Brasil aparece neste capítulo como parte do mundo colonial e escravista. O que muda ao ler a história do capitalismo a partir daqui, e não da Inglaterra?',
                    'Em que Marx acertou e em que errou sobre o crescimento e a organização da classe trabalhadora?'
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual foi o papel da escravidão nas colônias, segundo Marx?',
              ops: [
                'Foi o pedestal da escravidão disfarçada dos assalariados na Europa',
                'Não teve relação com o capitalismo',
                'Foi uma sobra da Idade Média sem importância econômica'
              ],
              c: 0
            },
            {
              t: 'escolha',
              p: 'Que imagem Marx usa para a violência na história?',
              ops: [
                'A parteira de toda velha sociedade que carrega uma nova',
                'Um vampiro',
                'Uma corrente de ouro'
              ],
              c: 0
            },
            {
              t: 'escolha',
              p: 'Como termina a seção 7?',
              ops: [
                'Com a expropriação dos expropriadores',
                'Com a vitória definitiva do capital',
                'Com uma lista de leis'
              ],
              c: 0
            }
          ]
        },
        {
          id: 'gk7l7',
          titulo: '25. O infeliz senhor Peel',
          exs: [
            {
              t: 'texto',
              titulo: 'Antes de ler',
              blocos: [
                {
                  p: 'O último capítulo é curto e parece um apêndice, mas tem uma das histórias mais engraçadas do livro e fecha o argumento sobre a origem do capital.'
                },
                {
                  leia: {
                    titulo: 'Capítulo 25',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/cap25/01.htm',
                    obs: 'A moderna teoria da colonização'
                  }
                },
                { dica: 'Repare na história do senhor Peel e no plano de Wakefield.' }
              ]
            },
            {
              t: 'texto',
              titulo: 'Trechos difíceis, explicados',
              blocos: [
                {
                  trecho: {
                    onde: 'O infeliz senhor Peel',
                    explica: 'O economista Edward Gibbon Wakefield contou que um tal senhor Peel levou da Inglaterra para o rio Swan, na Austrália, meios de vida e de produção no valor de 50 mil libras e 3 mil pessoas da classe trabalhadora. Chegando lá, ficou sem um criado para arrumar a cama ou buscar água no rio. Com terra livre à vontade, todos foram trabalhar para si.'
                  }
                },
                {
                  trecho: {
                    onde: 'Capital é uma relação social',
                    explica: 'A lição, para Marx: capital não é uma coisa, como dinheiro ou máquinas. É uma relação social entre pessoas, mediada por coisas. O senhor Peel levou tudo, menos as relações de produção inglesas.'
                  }
                },
                {
                  trecho: {
                    onde: 'A colonização sistemática',
                    explica: 'Wakefield propôs que o governo vendesse a terra das colônias por um preço alto o bastante para que os imigrantes precisassem trabalhar anos como assalariados antes de comprar um pedaço. Para Marx, as colônias revelam o segredo que a Europa esconde: o capitalismo precisa de trabalhadores separados da terra.'
                  }
                },
                {
                  perguntas: [
                    'Historiadores comparam a Lei de Terras brasileira, de 1850, às ideias de Wakefield. No mesmo ano, foi proibido o tráfico de pessoas escravizadas para o Brasil. Por que terra barata seria um problema para quem precisava de trabalhadores?'
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que aconteceu com o senhor Peel na Austrália?',
              ops: [
                'Ficou sem trabalhadores, porque com terra livre todos foram trabalhar para si',
                'Ficou rico com a lã',
                'Voltou para a Inglaterra com os trabalhadores'
              ],
              c: 0
            },
            {
              t: 'escolha',
              p: 'Qual é a lição do capítulo 25?',
              ops: [
                'Capital é uma relação social entre pessoas, mediada por coisas',
                'Capital é qualquer quantidade de dinheiro',
                'Capital é o mesmo que máquinas'
              ],
              c: 0
            }
          ]
        },
        {
          id: 'gk7l8',
          titulo: 'Fechar a leitura',
          exs: [
            {
              t: 'texto',
              titulo: 'Você leu o Livro I',
              blocos: [
                {
                  p: 'Quem chegou até aqui lendo o livro atravessou uma das obras mais difíceis e influentes da história do pensamento. Vale olhar o caminho inteiro de uma vez.'
                },
                {
                  tabela: {
                    cab: ['Seção', 'Capítulos', 'A pergunta'],
                    codigo: [],
                    linhas: [
                      ['1', '1 a 3', 'O que são a mercadoria e o dinheiro?'],
                      ['2', '4', 'Como dinheiro vira capital?'],
                      ['3', '5 a 9', 'De onde vem a mais-valia?'],
                      ['4', '10 a 13', 'Como aumentar a mais-valia sem esticar a jornada?'],
                      ['5', '14 a 16', 'Como as duas formas de mais-valia se combinam?'],
                      ['6', '17 a 20', 'Por que o salário esconde a exploração?'],
                      ['7', '21 a 25', 'Como o capital se reproduz, e de onde ele veio?']
                    ]
                  }
                },
                {
                  p: 'Marx só publicou este livro em vida. O Livro II, sobre a circulação do capital, e o Livro III, sobre o processo como um todo, com lucro, juros, renda da terra e crises, foram editados por Engels a partir dos manuscritos, em 1885 e 1894. No Arquivo Marxista, por enquanto, estão só os prefácios do Livro II.'
                },
                {
                  dica: 'O curso O Capital, de Marx, aqui no app, resume os Livros II e III e traz as críticas mais fortes e as respostas. Na aba Livros, estão os autores que Marx criticou e o debate com os críticos dele.'
                },
                {
                  perguntas: [
                    'Que ideia do livro mais mudou o jeito como você vê o trabalho?',
                    'Que capítulo você gostaria de reler, agora que sabe aonde o livro chega?'
                  ]
                }
              ]
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque estas seções do Livro I em ordem',
              lines: [
                'Mercadoria e dinheiro',
                'A transformação do dinheiro em capital',
                'A mais-valia absoluta',
                'A mais-valia relativa',
                'O salário',
                'A acumulação do capital'
              ],
              exp: 'A seção 5, entre a relativa e o salário, junta as duas formas de mais-valia.'
            },
            {
              t: 'escolha',
              p: 'Quem editou os Livros II e III de O Capital?',
              ops: ['Friedrich Engels', 'O próprio Marx', 'Lenin'],
              c: 0,
              exp: 'Engels trabalhou nos manuscritos de Marx por mais de dez anos.'
            }
          ]
        }
      ]
    }
  ]
});
