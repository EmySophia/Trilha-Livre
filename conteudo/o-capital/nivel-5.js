/* Trilha Livre · O Capital, de Marx · Nível 5: Salário e acumulação
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'o-capital',
  n: 5,
  titulo: 'Salário e acumulação',
  desc: 'Livro I, seções 6 e 7: o salário, a reprodução, o desemprego e a origem do capitalismo.',
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
      obs: 'as últimas aulas, sobre salário, acumulação e acumulação primitiva',
      url: 'https://davidharvey.org/2008/06/getting-started/'
    },
    {
      tipo: 'texto',
      titulo: 'A chamada acumulação primitiva (capítulo 24)',
      canal: 'Arquivo Marxista na Internet',
      url: 'https://www.marxists.org/portugues/marx/1867/capital/cap24/index.htm'
    }
  ],
  unidades: [
    {
      id: 'kpu5',
      titulo: 'Acumulação',
      conceito: 'exército de reserva',
      desc: 'Capítulos 17 a 25 do Livro I.',
      licoes: [
        {
          id: 'kp5l1',
          titulo: 'O salário esconde a exploração',
          exs: [
            {
              t: 'texto',
              titulo: 'Parece que todo o trabalho foi pago',
              blocos: [
                {
                  p: 'Na forma do salário, parece que o trabalhador vende o seu trabalho e recebe por ele inteiro: tantos reais por hora, tantos por mês. A divisão entre trabalho necessário e trabalho excedente some de vista.'
                },
                {
                  p: 'Para Marx, essa aparência é decisiva. Na escravidão, até o trabalho que o escravizado fazia para se sustentar parecia ser trabalho para o senhor. No salário, acontece o contrário: até o trabalho excedente parece trabalho pago.'
                },
                {
                  p: 'Ele analisa duas formas de salário: por tempo, por hora ou por mês, e por peça, por unidade produzida. O salário por peça, diz Marx, é o mais adequado ao capitalismo: o próprio trabalhador se esforça para produzir mais, e o controle da qualidade e do ritmo fica mais fácil para o patrão.'
                },
                {
                  dica: 'A lógica do salário por peça aparece hoje em muitos pagamentos por tarefa, como por entrega ou por corrida.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que a forma do salário esconde, segundo Marx?',
              ops: [
                'A divisão entre trabalho necessário e trabalho excedente',
                'O valor das máquinas',
                'O preço das mercadorias'
              ],
              c: 0,
              exp: 'Parece que todo o trabalho foi pago.'
            },
            {
              t: 'escolha',
              p: 'Qual forma de salário Marx considerava a mais adequada ao capitalismo?',
              ops: ['O salário por peça', 'O salário por mês', 'O salário em mercadorias'],
              c: 0,
              exp: 'O trabalhador se pressiona a produzir mais, e o patrão controla melhor.'
            }
          ]
        },
        {
          id: 'kp5l2',
          titulo: 'Reprodução e acumulação',
          exs: [
            {
              t: 'texto',
              titulo: 'O ciclo que se repete e cresce',
              blocos: [
                {
                  p: 'A produção capitalista não acontece uma vez só: ela se repete. Na reprodução simples, o capitalista gasta toda a mais-valia no próprio consumo e recomeça do mesmo tamanho. Mesmo assim, Marx mostra algo importante: com o tempo, todo o capital passa a ser mais-valia acumulada, trabalho não pago de ciclos anteriores.'
                },
                {
                  p: 'A reprodução também reproduz as classes: no fim de cada ciclo, o capitalista continua dono dos meios de produção, e o trabalhador continua precisando vender a força de trabalho para viver.'
                },
                {
                  p: 'Na reprodução ampliada, parte da mais-valia é reinvestida: vira mais capital, mais máquinas, mais salários. Isso é a acumulação. E ela não é uma escolha: a concorrência obriga cada capitalista a crescer, sob pena de ficar para trás.'
                },
                {
                  p: 'Marx resume essa pressão com uma frase dirigida aos economistas que elogiavam a poupança dos capitalistas: acumular, acumular, esse é o lema do capital.'
                },
                {
                  dica: 'A ideia de que a riqueza do capitalista vem da sua poupança e do seu sacrifício é exatamente o que Marx quer discutir nesses capítulos.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que é a reprodução ampliada?',
              ops: [
                'O reinvestimento de parte da mais-valia, que faz o capital crescer',
                'O capitalista gastar tudo no próprio consumo',
                'A volta ao início do ciclo, do mesmo tamanho'
              ],
              c: 0,
              exp: 'A reprodução simples é a que recomeça do mesmo tamanho.'
            },
            {
              t: 'escolha',
              p: 'O que a reprodução do capital também reproduz, segundo Marx?',
              ops: [
                'As próprias classes: o dono dos meios de produção e quem precisa vender a força de trabalho',
                'Só as mercadorias',
                'Só o dinheiro'
              ],
              c: 0,
              exp: 'Cada ciclo termina com as mesmas posições de partida.'
            }
          ]
        },
        {
          id: 'kp5l3',
          titulo: 'O exército industrial de reserva',
          exs: [
            {
              t: 'texto',
              titulo: 'A lei geral da acumulação',
              blocos: [
                {
                  p: 'Com a acumulação, cada capitalista investe proporcionalmente mais em máquinas e matérias-primas, o capital constante, do que em salários, o capital variável. Marx chama essa proporção de composição orgânica do capital, e mostra que ela tende a subir.'
                },
                {
                  p: 'Por isso, mesmo quando a economia cresce, a procura por trabalhadores cresce mais devagar do que o capital. Forma-se uma superpopulação relativa: gente sobrando para as necessidades do capital, e não para as necessidades da sociedade.'
                },
                {
                  p: 'Esse exército industrial de reserva tem várias camadas: quem entra e sai do emprego conforme os ciclos, quem migra do campo para a cidade, e quem vive de bicos e trabalhos irregulares. Ele pressiona os salários para baixo e disciplina quem está empregado, com o medo de ser substituído.'
                },
                {
                  p: 'Marx chama isso de lei geral da acumulação capitalista: acumulação de riqueza num polo e, no outro, acumulação de miséria, trabalho pesado e insegurança.'
                },
                {
                  dica: 'Essa lei é uma das mais discutidas. Críticos lembram que os salários reais subiram em muitos países; marxistas respondem com as lutas operárias e com a desigualdade entre países.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que é a composição orgânica do capital?',
              ops: [
                'A proporção entre capital constante e capital variável',
                'A lista de sócios de uma empresa',
                'A quantidade de produtos orgânicos'
              ],
              c: 0,
              exp: 'Ela tende a subir com a mecanização.'
            },
            {
              t: 'escolha',
              p: 'Qual é o efeito do exército industrial de reserva sobre quem está empregado?',
              ops: [
                'Pressiona os salários para baixo e disciplina com o medo de ser substituído',
                'Faz os salários subirem',
                'Não tem nenhum efeito'
              ],
              c: 0,
              exp: 'Para Marx, o desemprego não é um acidente: é parte do funcionamento do sistema.'
            },
            {
              t: 'escolha',
              p: 'Qual destes faz parte do exército industrial de reserva, na descrição de Marx?',
              ops: [
                'Quem vive de bicos e trabalhos irregulares',
                'O dono da fábrica',
                'O gerente do banco'
              ],
              c: 0,
              exp: 'Marx descreve várias camadas: flutuante, latente e estagnada.'
            }
          ]
        },
        {
          id: 'kp5l4',
          titulo: 'A chamada acumulação primitiva',
          exs: [
            {
              t: 'texto',
              titulo: 'Como tudo começou',
              blocos: [
                {
                  p: 'Se o capital nasce da mais-valia, de onde veio o primeiro capital? Os economistas da época contavam uma fábula: no começo, uns eram trabalhadores e econômicos, e outros eram preguiçosos e gastadores. Os primeiros enriqueceram; os outros ficaram só com a pele para vender.'
                },
                {
                  p: 'Marx chama essa história de infantil e conta outra, no capítulo 24. Na Inglaterra, os camponeses foram expulsos das terras comuns pelos cercamentos, e leis duras puniam quem ficasse sem trabalho. Assim surgiu, à força, uma massa de gente sem meios de produção, obrigada a vender a força de trabalho.'
                },
                {
                  p: 'No resto do mundo, Marx aponta o saque colonial, o extermínio dos povos indígenas na América, o tráfico de africanos escravizados e a dívida pública como fontes da riqueza inicial. Ele escreve que o capital chega ao mundo pingando sangue e sujeira por todos os poros.'
                },
                {
                  p: 'Muitos autores, como David Harvey, defendem que esse tipo de acumulação pela expropriação não ficou só no passado, e continua em casos como a tomada de terras e a privatização de bens comuns.'
                },
                {
                  dica: 'Para o Brasil, esse capítulo conversa diretamente com a história da colonização, da escravidão e da concentração de terras.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Como os economistas da época explicavam a origem do capital?',
              ops: [
                'Pela poupança dos trabalhadores e econômicos, contra os preguiçosos',
                'Pela violência e pela expropriação',
                'Pela descoberta de ouro'
              ],
              c: 0,
              exp: 'Marx chamou essa explicação de fábula infantil.'
            },
            {
              t: 'escolha',
              p: 'O que foram os cercamentos na Inglaterra?',
              ops: [
                'A expulsão dos camponeses das terras comuns',
                'A construção de muralhas nas cidades',
                'A proteção das fábricas'
              ],
              c: 0,
              exp: 'Sem terra, os camponeses só tinham a força de trabalho para vender.'
            },
            {
              t: 'escolha',
              p: 'Quais fontes de riqueza inicial Marx aponta fora da Inglaterra?',
              ops: [
                'O saque colonial, o extermínio indígena e o tráfico de escravizados',
                'A poupança dos comerciantes',
                'As invenções científicas'
              ],
              c: 0,
              exp: 'Para Marx, a violência foi parte essencial do nascimento do capitalismo.'
            }
          ]
        }
      ]
    }
  ]
});
