/* Trilha Livre · Leitura guiada de O Capital · Nível 1: Antes de começar
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'capital-guiado',
  n: 1,
  titulo: 'Antes de começar',
  desc: 'Qual texto usar, os prefácios e um jeito de ler sem desistir.',
  videos: [
    {
      tipo: 'texto',
      titulo: 'O Capital, Livro I',
      canal: 'Arquivo Marxista na Internet',
      url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/index.htm',
      obs: 'o índice com os 25 capítulos, de graça'
    },
    {
      titulo: 'Curso O Capital, de Marx',
      canal: 'TV Boitempo',
      obs: 'aula 1, com Eleutério Prado: a estrutura da obra e o método',
      url: 'https://blogdaboitempo.com.br/2017/08/23/boitempo-libera-curso-completo-sobre-o-capital-de-marx-no-youtube/'
    },
    {
      titulo: 'Reading Marx\'s Capital, volume 1 (em inglês)',
      canal: 'David Harvey',
      obs: 'o curso segue a ordem do livro; a numeração inglesa dos capítulos muda a partir do capítulo 4',
      url: 'https://davidharvey.org/2008/06/getting-started/'
    }
  ],
  unidades: [
    {
      id: 'gku1',
      titulo: 'Preparar a leitura',
      conceito: 'prefácios',
      desc: 'O texto, os prefácios e o método de estudo.',
      licoes: [
        {
          id: 'gk1l1',
          titulo: 'Qual texto ler',
          exs: [
            {
              t: 'texto',
              titulo: 'Um livro, várias traduções',
              blocos: [
                {
                  p: 'Este curso acompanha a leitura do Livro I de O Capital, capítulo por capítulo. Cada lição diz onde você está no livro e o que procurar antes de abrir o texto, explica os trechos que mais travam e traz perguntas para pensar sozinho ou em grupo.'
                },
                {
                  p: 'O texto completo do Livro I está de graça no Arquivo Marxista na Internet. É a tradução das Edições Avante!, de Lisboa, coordenada por José Barata-Moura e Francisco Melo a partir da quarta edição alemã. Por ser de Portugal, usa algumas palavras diferentes das edições brasileiras.'
                },
                {
                  tabela: {
                    cab: ['No site', 'Nas edições brasileiras', 'O que é'],
                    codigo: [],
                    linhas: [
                      [
                        'dia de trabalho',
                        'jornada de trabalho',
                        'quantas horas se trabalha por dia'
                      ],
                      [
                        'sobretrabalho',
                        'mais-trabalho',
                        'o tempo trabalhado além do que paga o salário'
                      ],
                      [
                        'carácter de feitiço',
                        'caráter fetichista',
                        'o fetichismo da mercadoria'
                      ],
                      [
                        'acumulação original',
                        'acumulação primitiva',
                        'a origem violenta do capitalismo'
                      ],
                      [
                        'secção, factor, facto',
                        'seção, fator, fato',
                        'só a ortografia de Portugal'
                      ]
                    ]
                  }
                },
                {
                  leia: {
                    titulo: 'O Capital, Livro I: índice',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/index.htm',
                    obs: 'Abra e veja as sete seções e os 25 capítulos.'
                  }
                },
                {
                  dica: 'Se você tem a edição da Boitempo ou da Nova Cultural, pode seguir o curso do mesmo jeito: os capítulos têm a mesma numeração. A edição inglesa é diferente: lá, o capítulo 4 vira três, e a numeração muda dali em diante.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'No site, o capítulo 8 se chama O dia de trabalho. Nas edições brasileiras, ele se chama...',
              ops: ['A jornada de trabalho', 'O salário por tempo', 'A cooperação'],
              c: 0
            },
            {
              t: 'escolha',
              p: 'No site aparece a expressão acumulação original. Ela corresponde a...',
              ops: ['Acumulação primitiva', 'Reprodução simples', 'Mais-valia relativa'],
              c: 0,
              exp: 'É o tema do capítulo 24, sobre a origem do capitalismo.'
            },
            {
              t: 'complete',
              p: 'Complete a correspondência entre as traduções',
              code: 'sobretrabalho = ___',
              bank: ['mais-trabalho', 'força de trabalho', 'trabalho morto'],
              c: ['mais-trabalho'],
              exp: 'É o tempo de trabalho que produz a mais-valia.'
            }
          ]
        },
        {
          id: 'gk1l2',
          titulo: 'Os prefácios',
          exs: [
            {
              t: 'texto',
              titulo: 'Antes de ler',
              blocos: [
                {
                  p: 'Antes do capítulo 1, há uma carta, prefácios e posfácios escritos por Marx e, depois da morte dele, por Engels. Não precisa ler todos agora. Dois valem a pena já: o prefácio da primeira edição, de 1867, e o posfácio da segunda, de 1873.'
                },
                {
                  leia: {
                    titulo: 'Prefácio da primeira edição (1867)',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/prefacios/02.htm',
                    obs: 'Curto. Marx apresenta o livro e avisa das dificuldades.'
                  }
                },
                {
                  leia: {
                    titulo: 'Posfácio da segunda edição (1873)',
                    url: 'https://www.marxists.org/portugues/marx/1867/capital/livro1/prefacios/03.htm',
                    obs: 'Mais longo. Marx responde a críticos e fala do método.'
                  }
                },
                {
                  dica: 'Repare em por que Marx usa a Inglaterra como exemplo e no que ele diz sobre os capitalistas e proprietários que aparecem no livro.'
                }
              ]
            },
            {
              t: 'texto',
              titulo: 'Trechos difíceis, explicados',
              blocos: [
                {
                  trecho: {
                    onde: 'Prefácio de 1867: todo começo é difícil',
                    explica: 'Marx avisa que o capítulo 1, e principalmente a parte sobre a forma de valor, é a mais difícil. Para estudar as formas econômicas, ele diz, não há microscópio nem reagente químico: a ferramenta é a capacidade de abstração. Por isso o começo é tão abstrato.'
                  }
                },
                {
                  trecho: {
                    onde: 'Prefácio de 1867: é de você que se fala',
                    explica: 'Marx estuda a Inglaterra porque lá o capitalismo estava mais desenvolvido. Ao leitor alemão que achasse que aquilo não era com ele, Marx responde com Horácio, em latim: de te fabula narratur, a história fala de você. O país mais industrializado mostra aos outros a imagem do futuro deles.'
                  }
                },
                {
                  trecho: {
                    onde: 'Prefácio de 1867: pessoas como personificações',
                    explica: 'Marx avisa que não vai julgar capitalistas e proprietários como pessoas boas ou más. No livro, eles aparecem como personificações de categorias econômicas, portadores de relações de classe. O alvo é o sistema, e não o caráter de cada um.'
                  }
                },
                {
                  trecho: {
                    onde: 'Posfácio de 1873: pesquisar e expor',
                    explica: 'Marx diferencia o modo de pesquisar do modo de expor. A pesquisa parte do material concreto, com todos os detalhes. A exposição vem depois e pode parecer uma construção feita só na cabeça. Não é: o começo abstrato é resultado de anos de pesquisa.'
                  }
                },
                {
                  trecho: {
                    onde: 'Posfácio de 1873: Hegel de cabeça para baixo',
                    explica: 'Para Hegel, o pensamento cria a realidade. Para Marx, o pensamento é o mundo material traduzido na cabeça das pessoas. A dialética de Hegel estaria de cabeça para baixo, e era preciso virá-la para achar o núcleo racional dentro da casca mística.'
                  }
                },
                {
                  perguntas: [
                    'Por que um livro sobre a Inglaterra do século 19 interessaria a quem vive no Brasil hoje?',
                    'O que muda quando criticamos um sistema, e não o caráter das pessoas que fazem parte dele?'
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Por que Marx usa a Inglaterra como exemplo principal?',
              ops: [
                'Era o país onde o capitalismo estava mais desenvolvido',
                'Era o país onde Marx nasceu',
                'Era o único país com fábricas'
              ],
              c: 0,
              exp: 'Marx nasceu em Tréveris, na Alemanha, e morou em Londres a partir de 1849.'
            },
            {
              t: 'escolha',
              p: 'Como os capitalistas aparecem em O Capital, segundo o prefácio?',
              ops: [
                'Como personificações de categorias econômicas',
                'Como pessoas más por natureza',
                'Como heróis da história'
              ],
              c: 0
            },
            {
              t: 'escolha',
              p: 'O que Marx diz da dialética de Hegel no posfácio de 1873?',
              ops: [
                'Que estava de cabeça para baixo e precisava ser virada',
                'Que estava totalmente certa',
                'Que não servia para nada'
              ],
              c: 0,
              exp: 'Havia, para Marx, um núcleo racional dentro da casca mística.'
            }
          ]
        },
        {
          id: 'gk1l3',
          titulo: 'Um método para não desistir',
          exs: [
            {
              t: 'texto',
              titulo: 'Como estudar O Capital',
              blocos: [
                {
                  p: 'O Capital não se lê como um romance. Vale mais ler pouco e com atenção do que muito e com pressa. O método de estudo que Jones Manoel defende cabe em três ideias:'
                },
                {
                  passos: [
                    'Paciência e repetição: é normal não entender na primeira vez. Releia o trecho, siga em frente e volte depois.',
                    'Nada de resumo fácil no lugar do livro: resumos e vídeos ajudam, mas não substituem o texto.',
                    'Saturação temática: enquanto lê um capítulo, procure o mesmo tema em outras fontes, como aulas, artigos e conversas.'
                  ]
                },
                {
                  p: 'Na prática: tenha um caderno. Anote as definições com as suas palavras, refaça as contas dos exemplos à mão e marque as dúvidas para levar ao grupo. Um capítulo por semana é um bom ritmo. Os capítulos 1, 8, 13, 23 e 24 são longos: tudo bem levar duas semanas em cada um.'
                },
                {
                  p: 'As notas de rodapé são muitas e longas, e muitas citam relatórios e autores da época. Na primeira leitura, você pode pular as maiores e voltar a elas depois. E desconfie quando Marx parece elogiar um economista ou um patrão: muitas vezes é ironia.'
                },
                {
                  dica: 'Na aba Livros, marque O Capital, Livro I como Lendo e use as anotações do livro como diário de leitura.'
                }
              ]
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem um bom jeito de estudar cada capítulo',
              lines: [
                'Fazer a lição do app antes de abrir o capítulo',
                'Ler o capítulo com o caderno ao lado',
                'Reler os trechos difíceis e refazer as contas',
                'Conversar sobre as perguntas com alguém ou em grupo'
              ],
              exp: 'O app prepara a leitura, mas quem ensina é o livro.'
            },
            {
              t: 'escolha',
              p: 'O que fazer quando não entender um trecho?',
              ops: [
                'Reler, seguir em frente e voltar depois',
                'Desistir do livro',
                'Trocar o livro por um resumo de uma página'
              ],
              c: 0
            },
            {
              t: 'escolha',
              p: 'O que é saturação temática?',
              ops: [
                'Estudar o mesmo tema em várias fontes ao mesmo tempo',
                'Ler o livro inteiro de uma vez',
                'Decorar as definições sem entender'
              ],
              c: 0
            }
          ]
        }
      ]
    }
  ]
});
