/* Trilha Livre · Introdução ao marxismo · Nível 1: Quem foram Marx e Engels
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'marxismo',
  n: 1,
  titulo: 'Quem foram Marx e Engels',
  desc: 'A vida, a época e as perguntas que eles queriam responder.',
  videos: [
    {
      titulo: 'Capitalismo, socialismo e comunismo',
      canal: 'Jones Manoel',
      obs: 'as diferenças entre os três, para quem está começando',
      url: 'https://www.youtube.com/watch?v=JamxRpUuXDU'
    },
    {
      titulo: 'O projeto comunista não é voto de pobreza',
      canal: 'Jones Manoel',
      obs: 'resposta à ideia de que comunista não pode ter conforto',
      url: 'https://www.youtube.com/watch?v=KzlIqDxL_C0'
    },
    {
      titulo: 'IV Curso Livre Marx-Engels',
      canal: 'TV Boitempo',
      obs: 'a aula de José Paulo Netto sobre a atualidade do Manifesto',
      url: 'https://blogdaboitempo.com.br/2014/11/07/nova-edicao-de-marx-chegando-e-curso-livre-completo-disponivel-online/'
    },
    {
      tipo: 'texto',
      titulo: 'Manifesto do Partido Comunista',
      canal: 'Arquivo Marxista na Internet',
      url: 'https://www.marxists.org/portugues/marx/1848/ManifestoDoPartidoComunista/index.htm',
      obs: 'o texto completo, de graça'
    },
    {
      tipo: 'texto',
      titulo: 'Crítica do Programa de Gotha',
      canal: 'Arquivo Marxista na Internet',
      url: 'https://www.marxists.org/portugues/marx/1875/gotha/index.htm',
      obs: 'onde Marx fala das fases do comunismo'
    }
  ],
  unidades: [
    {
      id: 'mxu1',
      titulo: 'Origens',
      conceito: '1848',
      desc: 'O século XIX, dois amigos e um panfleto.',
      licoes: [
        {
          id: 'mx1l1',
          titulo: 'O mundo em que Marx viveu',
          exs: [
            {
              t: 'texto',
              titulo: 'Fábricas, fumaça e jornadas sem fim',
              blocos: [
                {
                  p: 'Karl Marx nasceu em 1818, em Tréveris, na Alemanha, e morreu em 1883, em Londres. Ele viveu no meio da Revolução Industrial: as máquinas a vapor multiplicavam a produção, e as cidades se enchiam de gente que tinha saído do campo para trabalhar nas fábricas.'
                },
                {
                  p: 'A vida dessa gente era dura. Jornadas de 14 horas ou mais eram comuns, crianças trabalhavam nas tecelagens, e os bairros operários tinham pouca água limpa e muita doença. Ao mesmo tempo, nunca se tinha produzido tanta riqueza.'
                },
                {
                  p: 'Marx estudou direito e filosofia e trabalhou como jornalista. Por causa das suas ideias, foi expulso de vários países e passou a maior parte da vida adulta exilado em Londres, muitas vezes na pobreza. Foi lá que escreveu O Capital.'
                },
                {
                  p: 'Friedrich Engels nasceu em 1820, filho de um industrial têxtil. Em 1845 publicou A situação da classe trabalhadora na Inglaterra, sobre a vida dos operários de Manchester. Ele e Marx se tornaram amigos e parceiros de trabalho por quase quarenta anos, e Engels ajudou Marx com dinheiro durante muito tempo.'
                },
                {
                  dica: 'A pergunta que move os dois é simples de dizer: por que uma sociedade que produz tanta riqueza mantém tanta gente na pobreza?'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Em que cidade Marx viveu a maior parte da vida adulta e escreveu O Capital?',
              ops: ['Londres', 'Paris', 'Moscou'],
              c: 0,
              exp: 'Ele chegou a Londres em 1849, exilado, e ficou lá até morrer, em 1883.'
            },
            {
              t: 'escolha',
              p: 'Qual livro de Engels descreve a vida dos operários de Manchester?',
              ops: [
                'A situação da classe trabalhadora na Inglaterra',
                'O Capital',
                'O Estado e a revolução'
              ],
              c: 0,
              exp: 'Engels conhecia as fábricas de perto: a família dele tinha uma tecelagem em Manchester.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque os fatos em ordem',
              lines: [
                'Marx nasce em Tréveris (1818)',
                'Sai o Manifesto Comunista (1848)',
                'Sai o Livro I de O Capital (1867)',
                'Marx morre em Londres (1883)'
              ],
              exp: 'Depois da morte de Marx, Engels organizou os manuscritos e publicou os Livros II e III de O Capital.'
            }
          ]
        },
        {
          id: 'mx1l2',
          titulo: 'O Manifesto Comunista',
          exs: [
            {
              t: 'texto',
              titulo: 'Um panfleto que atravessou séculos',
              blocos: [
                {
                  p: 'Em 1847, uma pequena organização de trabalhadores, a Liga dos Comunistas, pediu a Marx e Engels um programa. O resultado foi o Manifesto do Partido Comunista, publicado em Londres em fevereiro de 1848, no mesmo mês em que começava uma onda de revoluções pela Europa.'
                },
                {
                  p: 'O texto é curto e abre com a ideia que organiza todo o pensamento dos dois: a história de todas as sociedades até hoje é a história de lutas de classes. Livres e escravos, senhores e servos, e agora burgueses e proletários.'
                },
                {
                  p: 'O Manifesto reconhece que a burguesia, a classe dona das fábricas e do comércio, revolucionou o mundo: criou forças produtivas maiores do que todas as gerações anteriores juntas. Mas, segundo Marx e Engels, ela também criou a classe que poderia superá-la: o proletariado, quem só tem a própria força de trabalho para vender.'
                },
                {
                  p: 'O texto termina com a frase mais conhecida dos dois: proletários de todos os países, uni-vos!'
                },
                {
                  dica: 'O Manifesto tem umas 40 páginas e está de graça na internet, no Arquivo Marxista. É o melhor primeiro texto para quem quer ler Marx direto da fonte.'
                }
              ]
            },
            {
              t: 'complete',
              p: 'Complete a frase de abertura do Manifesto',
              code: `A história de todas as sociedades até hoje
é a história de lutas de ___.`,
              bank: ['classes', 'nações', 'ideias', 'religiões'],
              c: ['classes'],
              exp: 'Para Marx e Engels, o conflito entre classes é o motor das grandes mudanças da história.'
            },
            {
              t: 'escolha',
              p: 'Quem é o proletariado, no Manifesto?',
              ops: [
                'Quem não tem meios de produção e vive de vender a própria força de trabalho',
                'Quem ganha pouco, não importa o que faça',
                'Quem mora na cidade'
              ],
              c: 0,
              exp: 'A classe é definida pela posição na produção, não só pela renda.'
            },
            {
              t: 'escolha',
              p: 'O que o Manifesto diz sobre a burguesia?',
              ops: [
                'Que ela revolucionou a produção, mas criou a classe que poderia superá-la',
                'Que ela nunca teve papel importante na história',
                'Que ela é formada pelos trabalhadores do campo'
              ],
              c: 0,
              exp: 'É um texto que reconhece a força do capitalismo ao mesmo tempo em que o critica.'
            }
          ]
        },
        {
          id: 'mx1l3',
          titulo: 'Utopia, Internacional e Comuna',
          exs: [
            {
              t: 'texto',
              titulo: 'Do sonho à organização',
              blocos: [
                {
                  p: 'Antes de Marx, já existiam socialistas. Robert Owen, Charles Fourier e Henri de Saint-Simon imaginaram sociedades mais justas e alguns fundaram comunidades modelo. Engels chamou essa tradição de socialismo utópico: tinha boas intenções, mas esperava convencer os ricos com bons exemplos.'
                },
                {
                  p: 'Marx e Engels propunham outra coisa, que chamaram de socialismo científico: estudar como o capitalismo funciona de verdade, descobrir as suas contradições e identificar a força social capaz de transformá-lo, a classe trabalhadora organizada.'
                },
                {
                  p: 'Em 1864, foi fundada em Londres a Associação Internacional dos Trabalhadores, a Primeira Internacional, com sindicatos e grupos de vários países. Marx escreveu muitos dos seus documentos.'
                },
                {
                  p: 'Em 1871, os trabalhadores de Paris tomaram a cidade e a governaram por cerca de dois meses: a Comuna de Paris. Ela foi esmagada pelo exército, com milhares de mortos. Marx escreveu sobre ela em A guerra civil na França e viu ali um exemplo de governo dos próprios trabalhadores.'
                },
                {
                  dica: 'O livro Do socialismo utópico ao socialismo científico, de Engels, explica essa diferença em poucas páginas e também está de graça no Arquivo Marxista.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que Engels chamou de socialismo utópico?',
              ops: [
                'Projetos de sociedades justas que esperavam convencer pelo bom exemplo',
                'O socialismo de Marx',
                'Qualquer ideia impossível'
              ],
              c: 0,
              exp: 'Para Engels, faltava a esses projetos uma análise das forças reais que movem a sociedade.'
            },
            {
              t: 'escolha',
              p: 'O que foi a Comuna de Paris?',
              ops: [
                'O governo dos trabalhadores de Paris por cerca de dois meses, em 1871',
                'Um partido francês fundado por Marx',
                'Uma fábrica modelo de Robert Owen'
              ],
              c: 0,
              exp: 'Foi curta e terminou num massacre, mas virou referência para todo o movimento socialista.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem',
              lines: [
                'Manifesto Comunista (1848)',
                'Primeira Internacional (1864)',
                'O Capital, Livro I (1867)',
                'Comuna de Paris (1871)'
              ],
              exp: 'Teoria e organização andaram juntas na vida de Marx.'
            }
          ]
        },
        {
          id: 'mx1l4',
          titulo: 'Socialismo e comunismo',
          exs: [
            {
              t: 'texto',
              titulo: 'O que essas palavras querem dizer',
              blocos: [
                {
                  p: 'Socialismo e comunismo são palavras usadas de muitos jeitos. Em Marx, comunismo é o nome de uma sociedade sem classes: os meios de produção, como fábricas, terras e máquinas, deixam de ser propriedade privada de uma minoria e passam a ser da sociedade, e ninguém vive do trabalho dos outros.'
                },
                {
                  p: 'Na Crítica do Programa de Gotha, de 1875, Marx diz que essa sociedade não nasceria pronta. Numa primeira fase, cada pessoa receberia de acordo com o trabalho que fez. Numa fase superior, com a produção muito desenvolvida, valeria o princípio: de cada um, segundo as suas capacidades; a cada um, segundo as suas necessidades. Mais tarde, Lenin passou a chamar a primeira fase de socialismo.'
                },
                {
                  p: 'Um ponto que costuma ser confundido: o Manifesto fala em abolir a propriedade burguesa, ou seja, a propriedade dos meios de produção que permite explorar o trabalho alheio. Não fala em tirar a casa, a roupa ou o celular de ninguém. Marx também nunca defendeu que todos fossem pobres: para ele, o capitalismo tinha desenvolvido forças produtivas capazes de dar uma vida boa a todo mundo, e o problema era como a riqueza é dividida.'
                },
                {
                  p: 'Na prática, as palavras ganharam outros sentidos. Os países governados por partidos comunistas no século XX se chamavam de socialistas, e muita gente chama de socialismo qualquer política de bem-estar social, o que é bem diferente da proposta de Marx.'
                },
                {
                  dica: 'Quando alguém usar essas palavras num debate, vale perguntar: socialismo no sentido de Marx, no sentido dos países do século XX ou no sentido de políticas sociais?'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que define o comunismo, em Marx?',
              ops: [
                'Uma sociedade sem classes, em que os meios de produção são da sociedade',
                'Uma sociedade em que todos são pobres por igual',
                'Um governo que dá benefícios sociais'
              ],
              c: 0,
              exp: 'O centro da proposta é quem é dono dos meios de produção, e não a pobreza.'
            },
            {
              t: 'complete',
              p: 'Complete o princípio da fase superior, na Crítica do Programa de Gotha',
              code: `De cada um, segundo as suas ___;
a cada um, segundo as suas ___.`,
              bank: ['capacidades', 'necessidades', 'riquezas', 'vontades'],
              c: ['capacidades', 'necessidades'],
              exp: 'Para Marx, isso só seria possível com a produção muito desenvolvida.'
            },
            {
              t: 'escolha',
              p: 'Que propriedade o Manifesto propõe abolir?',
              ops: [
                'A propriedade burguesa, dos meios de produção que permitem explorar o trabalho alheio',
                'Toda propriedade, inclusive roupas e casas',
                'Só a propriedade das terras'
              ],
              c: 0,
              exp: 'Propriedade pessoal e propriedade dos meios de produção são coisas diferentes nessa teoria.'
            }
          ]
        }
      ]
    }
  ]
});
