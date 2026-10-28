/* Trilha Livre · Introdução ao marxismo · Nível 5: Marxismo no Brasil
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'marxismo',
  n: 5,
  titulo: 'Marxismo no Brasil',
  desc: 'Lutas, partidos e pensadores que usaram o marxismo para entender o país.',
  videos: [
    {
      tipo: 'texto',
      titulo: 'Caio Prado Júnior',
      canal: 'Arquivo Marxista na Internet',
      url: 'https://www.marxists.org/portugues/junior/index.htm'
    },
    {
      tipo: 'texto',
      titulo: 'Florestan Fernandes',
      canal: 'Arquivo Marxista na Internet',
      url: 'https://www.marxists.org/portugues/fernandes/index.htm'
    },
    {
      tipo: 'texto',
      titulo: 'Lélia Gonzalez',
      canal: 'Arquivo Marxista na Internet',
      url: 'https://www.marxists.org/portugues/gonzalez/index.htm'
    },
    {
      tipo: 'texto',
      titulo: 'Vânia Bambirra',
      canal: 'Arquivo Marxista na Internet',
      url: 'https://www.marxists.org/portugues/bambirra/index.htm'
    },
    {
      tipo: 'texto',
      titulo: 'Jacob Gorender',
      canal: 'Arquivo Marxista na Internet',
      url: 'https://www.marxists.org/portugues/gorender/index.htm'
    }
  ],
  unidades: [
    {
      id: 'mxu6',
      titulo: 'Pensar o Brasil',
      conceito: 'formação',
      desc: 'História, formação social, dependência, raça e gênero.',
      licoes: [
        {
          id: 'mx5l1',
          titulo: 'Partidos e lutas',
          exs: [
            {
              t: 'texto',
              titulo: 'Um século de história',
              blocos: [
                {
                  p: 'O Partido Comunista do Brasil, o PCB, foi fundado em março de 1922, em Niterói, por um pequeno grupo de militantes, muitos vindos do anarquismo e do movimento operário. Passou a maior parte da sua história na ilegalidade.'
                },
                {
                  p: 'Em 1935, a Aliança Nacional Libertadora, com participação dos comunistas e de Luís Carlos Prestes, tentou um levante armado contra o governo de Getúlio Vargas. Foi derrotado, e a repressão que veio depois atingiu toda a esquerda.'
                },
                {
                  p: 'Na ditadura militar, de 1964 a 1985, militantes de esquerda foram presos, torturados e mortos. A Comissão Nacional da Verdade, em 2014, reconheceu 434 mortos e desaparecidos políticos. Parte da esquerda pegou em armas, como na Guerrilha do Araguaia; outra parte apostou na resistência política e na reconstrução dos movimentos sociais.'
                },
                {
                  p: 'Com a redemocratização, surgiram e se reorganizaram vários partidos, sindicatos e movimentos que se reivindicam marxistas ou dialogam com o marxismo, nas cidades e no campo. Eles discordam bastante entre si sobre estratégia, como em toda a história do marxismo.'
                },
                {
                  dica: 'Os arquivos da Comissão Nacional da Verdade são públicos e ajudam a estudar o período da ditadura com documentos.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Em que ano foi fundado o Partido Comunista no Brasil?',
              ops: ['1922', '1945', '1964'],
              c: 0,
              exp: 'No mesmo ano da Semana de Arte Moderna e do primeiro levante tenentista.'
            },
            {
              t: 'escolha',
              p: 'Quantos mortos e desaparecidos políticos a Comissão Nacional da Verdade reconheceu?',
              mono: true,
              ops: ['434', '43', '4.340'],
              c: 0,
              exp: 'O relatório final foi entregue em dezembro de 2014.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem',
              lines: [
                'Fundação do PCB (1922)',
                'Levante da Aliança Nacional Libertadora (1935)',
                'Golpe militar (1964)',
                'Fim da ditadura (1985)',
                'Relatório da Comissão Nacional da Verdade (2014)'
              ],
              exp: 'Quase um século de história, a maior parte dele na ilegalidade ou sob repressão.'
            }
          ]
        },
        {
          id: 'mx5l2',
          titulo: 'A formação do Brasil',
          exs: [
            {
              t: 'texto',
              titulo: 'Colônia, escravidão e revolução burguesa',
              blocos: [
                {
                  p: 'Caio Prado Júnior, em Formação do Brasil contemporâneo, de 1942, mostrou que a colonização teve um sentido: produzir para o mercado externo, com açúcar, ouro e café, em grandes propriedades e com trabalho escravo. Esse passado, para ele, explicava muito da economia e da desigualdade brasileiras.'
                },
                {
                  p: 'Jacob Gorender, em O escravismo colonial, de 1978, defendeu que a escravidão colonial foi um modo de produção próprio, nem feudal nem capitalista, com leis de funcionamento específicas.'
                },
                {
                  p: 'Florestan Fernandes estudou como a abolição deixou a população negra sem terra, sem trabalho e sem direitos, em A integração do negro na sociedade de classes, de 1965. Em A revolução burguesa no Brasil, de 1975, analisou como o capitalismo brasileiro se modernizou sem romper com as elites antigas e com muita exclusão.'
                },
                {
                  dica: 'Esses autores discordam em vários pontos. Lê-los juntos ajuda a ver que marxismo não é uma resposta pronta, e sim um jeito de fazer perguntas.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual era, para Caio Prado Júnior, o sentido da colonização?',
              ops: [
                'Produzir para o mercado externo, em grandes propriedades e com trabalho escravo',
                'Povoar o território com pequenos agricultores',
                'Criar indústrias no Brasil'
              ],
              c: 0,
              exp: 'É uma das ideias mais influentes sobre a história do Brasil.'
            },
            {
              t: 'escolha',
              p: 'Quem estudou a situação da população negra depois da abolição em A integração do negro na sociedade de classes?',
              ops: ['Florestan Fernandes', 'Caio Prado Júnior', 'Antonio Gramsci'],
              c: 0,
              exp: 'Florestan mostrou que a abolição não veio acompanhada de terra, trabalho nem direitos.'
            },
            {
              t: 'escolha',
              p: 'O que Gorender defendeu em O escravismo colonial?',
              ops: [
                'Que a escravidão colonial foi um modo de produção próprio',
                'Que o Brasil colonial era feudal',
                'Que o Brasil nunca teve escravidão em larga escala'
              ],
              c: 0,
              exp: 'Foi uma resposta a quem tentava encaixar o Brasil no esquema europeu.'
            }
          ]
        },
        {
          id: 'mx5l3',
          titulo: 'Dependência, raça e gênero',
          exs: [
            {
              t: 'texto',
              titulo: 'Para entender a periferia',
              blocos: [
                {
                  p: 'Nos anos 1960 e 1970, pensadores latino-americanos criaram a teoria marxista da dependência. Ruy Mauro Marini, em Dialética da dependência, de 1973, e Vânia Bambirra estudaram por que países como o Brasil continuam exportando produtos baratos e importando tecnologia. Marini usou a ideia de superexploração: nos países dependentes, os salários tendem a ficar abaixo do necessário para uma vida digna.'
                },
                {
                  p: 'Clóvis Moura, em Rebeliões da senzala, de 1959, mostrou os quilombos e as revoltas de escravizados como luta de classes, e não como episódios isolados. Lélia Gonzalez uniu marxismo, feminismo e a luta contra o racismo, e criou a ideia de amefricanidade para falar da experiência negra e indígena nas Américas.'
                },
                {
                  p: 'Heleieth Saffioti, em A mulher na sociedade de classes, de 1969, analisou como o capitalismo usa e reforça a desigualdade entre homens e mulheres.'
                },
                {
                  p: 'Esses autores mostram um debate que continua vivo: como juntar classe, raça e gênero na análise da sociedade, sem tratar nenhuma dessas desigualdades como menos importante.'
                },
                {
                  dica: 'Vários textos desses autores estão de graça no Arquivo Marxista, na seção em português.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que é a superexploração, para Marini?',
              ops: [
                'Salários que tendem a ficar abaixo do necessário para uma vida digna, nos países dependentes',
                'A exploração dos recursos naturais',
                'O trabalho em horário noturno'
              ],
              c: 0,
              exp: 'É um conceito central da teoria marxista da dependência.'
            },
            {
              t: 'escolha',
              p: 'Como Clóvis Moura interpretou os quilombos e as revoltas de escravizados?',
              ops: [
                'Como luta de classes',
                'Como fatos isolados, sem importância',
                'Como movimentos religiosos apenas'
              ],
              c: 0,
              exp: 'Rebeliões da senzala mudou a forma de contar a história da escravidão no Brasil.'
            },
            {
              t: 'escolha',
              p: 'Quem criou a ideia de amefricanidade?',
              ops: ['Lélia Gonzalez', 'Heleieth Saffioti', 'Ruy Mauro Marini'],
              c: 0,
              exp: 'Lélia uniu marxismo, feminismo e a luta antirracista.'
            }
          ]
        }
      ]
    }
  ]
});
