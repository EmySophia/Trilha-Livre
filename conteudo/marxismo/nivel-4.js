/* Trilha Livre · Introdução ao marxismo · Nível 4: Depois de Marx
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'marxismo',
  n: 4,
  titulo: 'Depois de Marx',
  desc: 'Quem continuou, discordou e transformou o marxismo, e o que aconteceu no século XX.',
  videos: [
    {
      tipo: 'texto',
      titulo: 'Reforma ou revolução?',
      canal: 'Arquivo Marxista na Internet',
      url: 'https://www.marxists.org/portugues/luxemburgo/1900/ref_rev/index.htm',
      obs: 'Rosa Luxemburgo'
    },
    {
      tipo: 'texto',
      titulo: 'O Estado e a revolução',
      canal: 'Arquivo Marxista na Internet',
      url: 'https://www.marxists.org/portugues/lenin/1917/08/estadoerevolucao/index.htm',
      obs: 'Lenin'
    },
    {
      tipo: 'texto',
      titulo: 'Textos de Gramsci',
      canal: 'Arquivo Marxista na Internet',
      url: 'https://www.marxists.org/portugues/gramsci/index.htm'
    }
  ],
  unidades: [
    {
      id: 'mxu4',
      titulo: 'Revolução e reforma',
      conceito: '1917',
      desc: 'Os grandes debates do começo do século XX.',
      licoes: [
        {
          id: 'mx4l1',
          titulo: 'Reforma ou revolução',
          exs: [
            {
              t: 'texto',
              titulo: 'Mudar por dentro ou mudar tudo?',
              blocos: [
                {
                  p: 'Depois da morte de Marx, os partidos operários cresceram muito, principalmente na Alemanha. Em 1889 foi fundada a Segunda Internacional, que reunia partidos socialistas de vários países.'
                },
                {
                  p: 'Em 1899, Eduard Bernstein, do Partido Social-Democrata alemão, defendeu que o capitalismo estava ficando mais estável e que o socialismo poderia chegar aos poucos, por reformas, eleições e sindicatos, sem revolução. Essa posição foi chamada de revisionismo.'
                },
                {
                  p: 'Rosa Luxemburgo respondeu no livro Reforma ou revolução?, também de 1899. Para ela, as reformas eram importantes, mas não mudavam a base do sistema: sem transformar a propriedade dos meios de produção, o capitalismo continuaria produzindo exploração e crises.'
                },
                {
                  p: 'Esse debate nunca terminou. A partir dele, a social-democracia foi se afastando do marxismo e passou a defender um capitalismo com direitos sociais, enquanto as correntes revolucionárias seguiram outro caminho.'
                },
                {
                  dica: 'O nome social-democracia mudou de sentido com o tempo: no começo era o nome dos partidos marxistas; hoje costuma indicar partidos que defendem reformas dentro do capitalismo.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que Bernstein defendia?',
              ops: [
                'Que o socialismo poderia chegar aos poucos, por reformas, sem revolução',
                'Que a revolução deveria começar na Rússia',
                'Que os sindicatos deveriam acabar'
              ],
              c: 0,
              exp: 'Por discordar de pontos centrais de Marx, a posição dele foi chamada de revisionismo.'
            },
            {
              t: 'escolha',
              p: 'Qual era o argumento central de Rosa Luxemburgo em Reforma ou revolução?',
              ops: [
                'Reformas importam, mas não mudam a base do sistema',
                'Reformas são inúteis e devem ser recusadas',
                'O capitalismo tinha deixado de ter crises'
              ],
              c: 0,
              exp: 'Ela defendia lutar por reformas como parte de uma luta maior.'
            }
          ]
        },
        {
          id: 'mx4l2',
          titulo: 'Lenin e a Revolução Russa',
          exs: [
            {
              t: 'texto',
              titulo: '1917',
              blocos: [
                {
                  p: 'Vladimir Lenin liderou os bolcheviques, uma ala do partido operário russo. Em Que fazer?, de 1902, defendeu um partido de revolucionários profissionais e bem organizados. Em O imperialismo, fase superior do capitalismo, de 1916, analisou como as grandes potências disputavam o mundo, o que, para ele, explicava a Primeira Guerra Mundial.'
                },
                {
                  p: 'Em fevereiro de 1917, no meio da guerra e da fome, uma revolução derrubou o czar. Surgiram os sovietes, conselhos de operários, soldados e camponeses. Em outubro, os bolcheviques tomaram o poder com o lema "paz, terra e pão".'
                },
                {
                  p: 'Seguiu-se uma guerra civil de anos, com intervenção de vários países estrangeiros. Os bolcheviques venceram, mas o país saiu arrasado, e a partir dali o poder foi se concentrando no partido único. Em 1922 foi criada a União Soviética.'
                },
                {
                  p: 'A revolução aconteceu na Rússia, um país pouco industrializado, e não nos países ricos da Europa, como muitos marxistas esperavam. Isso gerou debates que você verá no nível de críticas.'
                },
                {
                  dica: 'O Estado e a revolução, que Lenin escreveu em 1917, é o texto em que ele expõe o que pensava sobre o Estado e a transição ao socialismo. Está de graça no Arquivo Marxista.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que eram os sovietes?',
              ops: [
                'Conselhos de operários, soldados e camponeses',
                'Os ministros do czar',
                'Os bancos russos'
              ],
              c: 0,
              exp: 'Soviete quer dizer conselho, em russo.'
            },
            {
              t: 'escolha',
              p: 'Qual era o lema dos bolcheviques em 1917?',
              ops: ['Paz, terra e pão', 'Ordem e progresso', 'Liberdade, igualdade e fraternidade'],
              c: 0,
              exp: 'O lema falava às urgências de um país em guerra e com fome.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem',
              lines: [
                'Lenin escreve Que fazer? (1902)',
                'Começa a Primeira Guerra Mundial (1914)',
                'Cai o czar, em fevereiro (1917)',
                'Os bolcheviques tomam o poder, em outubro (1917)',
                'É criada a União Soviética (1922)'
              ],
              exp: 'Em cinco anos, a Rússia passou por guerra mundial, duas revoluções e uma guerra civil.'
            }
          ]
        },
        {
          id: 'mx4l3',
          titulo: 'Rosa Luxemburgo e Gramsci',
          exs: [
            {
              t: 'texto',
              titulo: 'Democracia, hegemonia e cultura',
              blocos: [
                {
                  p: 'Rosa Luxemburgo apoiou a Revolução Russa, mas criticou os bolcheviques por restringirem as eleições, a imprensa e o direito de reunião. No texto A Revolução Russa, de 1918, escreveu que a liberdade só para os partidários do governo não é liberdade, e que a liberdade é sempre a liberdade de quem pensa diferente.'
                },
                {
                  p: 'Em janeiro de 1919, durante um levante em Berlim, Rosa foi presa e assassinada por milícias paramilitares, num governo comandado pela social-democracia alemã.'
                },
                {
                  p: 'Antonio Gramsci foi um dos fundadores do Partido Comunista Italiano. Preso pelo regime fascista de Mussolini em 1926, escreveu na prisão os Cadernos do cárcere, e morreu em 1937, pouco depois de ser libertado por causa da saúde.'
                },
                {
                  p: 'Gramsci se perguntou por que a revolução não acontecia nos países ocidentais. A resposta dele passa pela ideia de hegemonia: a classe dominante não governa só pela força, mas também pelo consentimento, construído na escola, na igreja, na imprensa e na cultura. Mudar a sociedade exigiria disputar esse terreno, numa longa guerra de posição.'
                },
                {
                  dica: 'A ideia de hegemonia de Gramsci é usada até hoje, inclusive fora do marxismo, para estudar a cultura e os meios de comunicação.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que Rosa Luxemburgo criticou nos bolcheviques?',
              ops: [
                'A restrição das eleições, da imprensa e da liberdade de reunião',
                'O fim da guerra com a Alemanha',
                'A reforma agrária'
              ],
              c: 0,
              exp: 'Ela defendia a revolução e a democracia ao mesmo tempo.'
            },
            {
              t: 'escolha',
              p: 'O que é hegemonia, para Gramsci?',
              ops: [
                'O domínio que se apoia também no consentimento, construído pela cultura e pelas instituições',
                'O controle de um país sobre outro pelas armas',
                'Um tipo de eleição'
              ],
              c: 0,
              exp: 'Por isso ele dava tanta importância à escola, à imprensa e aos intelectuais.'
            },
            {
              t: 'escolha',
              p: 'Onde Gramsci escreveu os Cadernos do cárcere?',
              ops: [
                'Na prisão, durante o fascismo italiano',
                'No exílio em Londres',
                'Em Moscou, depois de 1917'
              ],
              c: 0,
              exp: 'Ele escreveu cerca de 30 cadernos, com vigilância e censura da prisão.'
            }
          ]
        }
      ]
    },
    {
      id: 'mxu5',
      titulo: 'As experiências do século XX',
      conceito: 'URSS · China · Cuba',
      desc: 'Conquistas, crimes e o que se discute sobre elas.',
      licoes: [
        {
          id: 'mx4l4',
          titulo: 'A União Soviética',
          exs: [
            {
              t: 'texto',
              titulo: 'Conquistas e crimes',
              blocos: [
                {
                  p: 'A União Soviética durou de 1922 a 1991. Em poucas décadas, um país agrário se industrializou, acabou com o analfabetismo em massa, criou sistemas públicos de saúde e educação e lançou o primeiro satélite e o primeiro ser humano ao espaço. Na Segunda Guerra Mundial, teve papel decisivo na derrota do nazismo, com cerca de 27 milhões de mortos.'
                },
                {
                  p: 'Ao mesmo tempo, sob Josef Stalin, o país viveu uma ditadura de partido único com crimes em massa. A coletivização forçada do campo levou à fome de 1932 e 1933, com milhões de mortos; só na Ucrânia, onde é chamada de Holodomor, as estimativas mais aceitas falam em 3,5 a 5 milhões. Nos expurgos de 1937 e 1938, os próprios registros da polícia política mostram cerca de 680 mil execuções. Milhões passaram pelos campos de trabalho forçado, o Gulag.'
                },
                {
                  p: 'Esses crimes também foram denunciados por marxistas. Leon Trotsky, um dos líderes de 1917, criticou o regime em A revolução traída, de 1936, e foi assassinado no México em 1940 por um agente soviético. Em 1956, o próprio líder soviético Nikita Khrushchev denunciou parte dos crimes de Stalin num discurso ao partido.'
                },
                {
                  p: 'Até hoje, as correntes marxistas discordam sobre como entender a União Soviética: um socialismo real com erros graves, um Estado operário que degenerou, ou um capitalismo de Estado. Quem critica o marxismo vê ali a prova de que a teoria leva ao autoritarismo.'
                },
                {
                  dica: 'Estudar com seriedade é olhar as conquistas e os crimes com os mesmos números e as mesmas fontes, sem esconder nenhum dos dois.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual destas é uma conquista soviética reconhecida por historiadores de várias correntes?',
              ops: [
                'O fim do analfabetismo em massa',
                'Eleições livres com vários partidos',
                'O fim de toda desigualdade'
              ],
              c: 0,
              exp: 'A alfabetização em massa é bem documentada; já eleições livres com vários partidos nunca existiram lá.'
            },
            {
              t: 'escolha',
              p: 'O que foi o Holodomor?',
              ops: [
                'A fome de 1932 e 1933 na Ucrânia, ligada à coletivização forçada',
                'Uma vitória militar soviética',
                'Um plano de alfabetização'
              ],
              c: 0,
              exp: 'É um dos crimes mais graves do período de Stalin.'
            },
            {
              t: 'escolha',
              p: 'Quem escreveu A revolução traída, uma crítica marxista ao regime de Stalin?',
              ops: ['Leon Trotsky', 'Adam Smith', 'Karl Popper'],
              c: 0,
              exp: 'Trotsky foi um dos líderes de 1917 e virou opositor de Stalin.'
            }
          ]
        },
        {
          id: 'mx4l5',
          titulo: 'China, Cuba e o Sul global',
          exs: [
            {
              t: 'texto',
              titulo: 'Revoluções fora da Europa',
              blocos: [
                {
                  p: 'Em 1949, o Partido Comunista Chinês, liderado por Mao Tsé-tung, venceu a guerra civil e fundou a República Popular da China, com apoio sobretudo dos camponeses. O país passou por mudanças enormes, mas também por tragédias: a fome do Grande Salto Adiante, de 1959 a 1961, matou dezenas de milhões de pessoas, com estimativas que vão de 15 a 50 milhões, e a Revolução Cultural, de 1966 a 1976, perseguiu milhões.'
                },
                {
                  p: 'A partir de 1978, com Deng Xiaoping, a China abriu a economia ao mercado e ao capital estrangeiro, mantendo o Partido Comunista no poder. Centenas de milhões de pessoas saíram da pobreza extrema. Há um debate grande sobre o que é a China hoje: socialismo de mercado, capitalismo de Estado ou outra coisa.'
                },
                {
                  p: 'Em Cuba, a revolução de 1959 derrubou a ditadura de Fulgencio Batista. A campanha de alfabetização de 1961 e o sistema público de saúde são conquistas reconhecidas internacionalmente. Ao mesmo tempo, o país tem um partido único, restrições à imprensa e à oposição, e presos políticos. Desde 1962, sofre um embargo econômico dos Estados Unidos.'
                },
                {
                  p: 'O marxismo também inspirou lutas contra o colonialismo na Ásia e na África, como no Vietnã, em Angola e em Moçambique, e influenciou muitos movimentos na América Latina.'
                },
                {
                  dica: 'Uma boa regra de estudo: para cada experiência, pergunte o que ela conquistou, o que ela custou e quem pagou o preço.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual força social foi decisiva na Revolução Chinesa de 1949?',
              ops: [
                'Os camponeses',
                'Os operários de fábricas europeias',
                'Os militares estrangeiros'
              ],
              c: 0,
              exp: 'Foi uma das diferenças em relação ao esquema clássico, centrado nos operários.'
            },
            {
              t: 'escolha',
              p: 'O que mudou na China a partir de 1978?',
              ops: [
                'A economia foi aberta ao mercado, com o Partido Comunista no poder',
                'O Partido Comunista deixou o governo',
                'O país voltou a ter um imperador'
              ],
              c: 0,
              exp: 'É um dos casos mais debatidos por marxistas e por seus críticos.'
            },
            {
              t: 'escolha',
              p: 'Qual conquista da Revolução Cubana é reconhecida internacionalmente?',
              ops: [
                'A campanha de alfabetização de 1961',
                'A liberdade de imprensa',
                'As eleições com vários partidos'
              ],
              c: 0,
              exp: 'As outras duas não existem em Cuba, o que é uma das críticas mais feitas ao regime.'
            }
          ]
        }
      ]
    }
  ]
});
