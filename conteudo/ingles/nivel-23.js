/* Trilha Livre · Inglês do zero · Nível 23: Ler e ouvir no avançado (C1)
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md.
   ((frase)) tem botão de ouvir; [[americano|britânico]] muda com o sotaque escolhido. */

nivel({
  curso: 'ingles',
  n: 23,
  titulo: 'Ler e ouvir no avançado',
  faixa: 'C1',
  desc: 'Um artigo de opinião, uma palestra e um conto, com áudio: textos longos, com ideias nas entrelinhas, como os que você vai encontrar fora do app.',
  videos: [
    {
      titulo: 'TED-Ed',
      canal: 'TED-Ed',
      obs: 'animações curtas sobre ciência, história e linguagem, com legendas em inglês',
      url: 'https://www.youtube.com/@TEDEd'
    },
    {
      titulo: 'Easy English',
      canal: 'Easy Languages',
      obs: 'entrevistas na rua, com pessoas falando na velocidade real',
      url: 'https://www.youtube.com/@EasyEnglishVideos'
    },
    {
      titulo: 'BBC Learning English',
      canal: 'BBC',
      obs: '6 Minute English e outras séries com transcrição',
      url: 'https://www.youtube.com/@bbclearningenglish'
    }
  ],
  unidades: [
    {
      id: 'enu37',
      titulo: 'Textos de verdade',
      conceito: 'read between the lines',
      desc: 'Entender o argumento, o tom e o que não está escrito.',
      licoes: [
        {
          id: 'en23l1',
          titulo: 'Um artigo de opinião',
          pre: ['en19l2', 'en21l3'],
          exs: [
            {
              t: 'texto',
              titulo: 'Cidades para pessoas',
              blocos: [
                {
                  p: 'Um artigo de opinião, no estilo de uma coluna de jornal. Antes de ouvir, leia só a primeira e a última frase de cada parágrafo e tente adivinhar a posição do autor.'
                },
                {
                  fala: 'For most of the last century, cities were designed around one thing: the car. Streets grew wider, sidewalks grew narrower, and parks gave way to parking lots.',
                  trad: 'Durante a maior parte do século passado, as cidades foram planejadas em função de uma coisa: o carro. As ruas ficaram mais largas, as calçadas mais estreitas, e as praças deram lugar a estacionamentos.'
                },
                {
                  fala: 'It is often argued that this was simply the price of progress. Yet a growing number of cities are now proving that it does not have to be this way.',
                  trad: 'Muitas vezes se argumenta que esse foi apenas o preço do progresso. No entanto, um número cada vez maior de cidades está provando que não precisa ser assim.'
                },
                {
                  fala: 'When streets are redesigned for people rather than vehicles, something remarkable tends to happen. Local shops see more customers, air quality improves, and residents report feeling safer.',
                  trad: 'Quando as ruas são redesenhadas para as pessoas, e não para os veículos, algo notável costuma acontecer. O comércio local recebe mais clientes, a qualidade do ar melhora e os moradores dizem se sentir mais seguros.'
                },
                {
                  fala: 'Critics claim that such changes hurt drivers and slow down the economy. To some extent, they have a point: change is rarely painless. But the question is not whether cars should disappear. It is whether they should continue to decide what our cities look like.',
                  trad: 'Os críticos afirmam que essas mudanças prejudicam os motoristas e desaceleram a economia. Até certo ponto, eles têm razão: mudanças raramente são indolores. Mas a questão não é se os carros devem desaparecer. É se eles devem continuar decidindo como as nossas cidades são.'
                },
                {
                  vocab: [
                    ['to give way to', 'dar lugar a'],
                    ['yet', 'no entanto', 'no começo da frase, é um contraste'],
                    ['remarkable', 'notável, impressionante'],
                    ['to have a point', 'ter certa razão'],
                    ['painless', 'indolor, sem sofrimento']
                  ]
                },
                {
                  dica: 'Repare em como o autor reconhece o outro lado ("to some extent, they have a point") antes de responder. É a estrutura que você viu no nível 19, usada por um escritor experiente.',
                  rotulo: 'A técnica do autor'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual é a posição do autor?',
              ops: [
                'As cidades deveriam ser pensadas para as pessoas, e não para os carros',
                'Os carros devem ser proibidos',
                'As cidades devem continuar como estão'
              ],
              c: 0,
              exp: 'Ele não quer que os carros desapareçam; quer que eles deixem de decidir como as cidades são.'
            },
            {
              t: 'escolha',
              p: 'O que o autor diz sobre os críticos?',
              ops: [
                'Que eles têm razão até certo ponto, porque mudanças raramente são indolores',
                'Que eles estão totalmente errados',
                'Que eles não existem'
              ],
              c: 0,
              exp: 'To some extent, they have a point.'
            },
            {
              t: 'escolha',
              p: 'Segundo o texto, o que costuma acontecer quando as ruas são redesenhadas para pessoas?',
              ops: [
                'O comércio local melhora, o ar melhora e as pessoas se sentem mais seguras',
                'O trânsito some completamente',
                'As lojas fecham'
              ],
              c: 0,
              exp: 'Local shops see more customers, air quality improves, and residents report feeling safer.'
            },
            {
              t: 'escolha',
              p: 'Em "Yet a growing number of cities...", o que o yet faz?',
              ops: [
                'Introduz um contraste com a ideia anterior',
                'Indica tempo: "ainda"',
                'Introduz um exemplo'
              ],
              c: 0,
              exp: 'No começo da frase, yet é um "no entanto".'
            },
            {
              t: 'escolha',
              p: '"The question is not whether cars should disappear." Por que o autor diz isso?',
              ops: [
                'Para mostrar que a proposta dele é mais moderada do que os críticos pensam',
                'Porque ele quer que os carros desapareçam',
                'Porque não sabe a resposta'
              ],
              c: 0,
              exp: 'Ele redefine a questão para tirar a força do argumento contrário.'
            },
            {
              t: 'escreva',
              p: 'Traduza para o português: "Change is rarely painless."',
              r: [
                '(A mudança é|As mudanças são|Mudança é|Mudanças são) raramente (indolor|indolores|sem dor).',
                '(Mudanças|Mudança|A mudança|As mudanças) raramente (é|são) (indolor|indolores|sem dor).'
              ],
              lingua: 'pt'
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'It is often argued that this was simply the price of progress.'
            }
          ]
        },
        {
          id: 'en23l2',
          titulo: 'Uma palestra: aprender línguas depois de adulto',
          pre: ['en23l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Ouça a palestra',
              blocos: [
                {
                  p: 'Um trecho no estilo de uma palestra curta. Ouça sem ler primeiro. Depois, repare em como a palestrante usa perguntas, exemplos e uma virada para prender a atenção.'
                },
                {
                  fala: 'How many of you have ever said, "I\'m too old to learn a new language"? Keep your hands up if you said it this year.',
                  trad: 'Quantos de vocês já disseram "estou velho demais para aprender uma língua nova"? Continuem com a mão levantada se disseram isso este ano.'
                },
                {
                  fala: 'It\'s one of the most common beliefs about learning, and it\'s mostly wrong. Children do have one clear advantage: they\'re better at picking up a native-like accent.',
                  trad: 'É uma das crenças mais comuns sobre aprender, e ela está quase toda errada. As crianças têm, sim, uma vantagem clara: elas são melhores em pegar um sotaque de nativo.'
                },
                {
                  fala: 'But adults, it turns out, often learn vocabulary and grammar faster, at least at the beginning. We already know how a language works. We can read, take notes, and use strategies that a five-year-old simply cannot.',
                  trad: 'Mas os adultos, ao que tudo indica, muitas vezes aprendem vocabulário e gramática mais rápido, pelo menos no começo. Nós já sabemos como uma língua funciona. Sabemos ler, tomar notas e usar estratégias que uma criança de cinco anos simplesmente não consegue.'
                },
                {
                  fala: 'So why do so many adults give up? In my experience, it\'s rarely about ability. It\'s about time, embarrassment, and the fear of sounding foolish.',
                  trad: 'Então, por que tantos adultos desistem? Na minha experiência, raramente é por falta de capacidade. É por falta de tempo, por vergonha e pelo medo de parecer bobo.'
                },
                {
                  fala: 'Here\'s the thing: sounding foolish is part of the process. Every fluent speaker you admire once said something ridiculous in front of a native speaker. The only difference is that they kept going.',
                  trad: 'O negócio é o seguinte: parecer bobo faz parte do processo. Todo falante fluente que você admira já disse alguma coisa ridícula na frente de um nativo. A única diferença é que ele continuou.'
                },
                {
                  vocab: [
                    [
                      'to pick up',
                      'pegar, aprender sem esforço',
                      'pick up an accent, pick up a language'
                    ],
                    ['it turns out', 'no fim, descobre-se que'],
                    ['embarrassment', 'vergonha, constrangimento'],
                    ['foolish', 'bobo, ridículo'],
                    ['to keep going', 'continuar, seguir em frente']
                  ]
                },
                {
                  dica: 'Repare em "Children do have one clear advantage". O do numa frase afirmativa dá ênfase: "as crianças têm, sim, uma vantagem". É um recurso comum para conceder um ponto antes de discordar.',
                  rotulo: 'O do de ênfase'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual é a ideia principal da palestra?',
              ops: [
                'Adultos conseguem aprender línguas; o que mais atrapalha é o medo de errar e a falta de tempo',
                'Só crianças conseguem aprender línguas',
                'Adultos nunca perdem o sotaque, então não vale a pena'
              ],
              c: 0,
              exp: 'A palestrante desmonta a crença do "velho demais".'
            },
            {
              t: 'escolha',
              p: 'Qual vantagem as crianças têm, segundo a palestrante?',
              ops: [
                'Pegam com mais facilidade um sotaque parecido com o de um nativo',
                'Aprendem gramática mais rápido',
                'Têm mais tempo livre'
              ],
              c: 0,
              exp: 'They\'re better at picking up a native-like accent.'
            },
            {
              t: 'escolha',
              p: 'Por que os adultos às vezes aprendem mais rápido no começo?',
              ops: [
                'Já sabem como uma língua funciona e usam estratégias, como ler e tomar notas',
                'Porque têm mais medo de errar',
                'Porque escutam melhor'
              ],
              c: 0,
              exp: 'We already know how a language works.'
            },
            {
              t: 'escolha',
              p: 'Segundo ela, qual é a diferença entre quem fica fluente e quem não fica?',
              ops: [
                'Quem fica fluente continuou, mesmo depois de passar vergonha',
                'Quem fica fluente nunca errou',
                'Quem fica fluente começou criança'
              ],
              c: 0,
              exp: 'The only difference is that they kept going.'
            },
            {
              t: 'escolha',
              p: '"Children do have one clear advantage." Para que serve o do?',
              ops: [
                'Para dar ênfase, concedendo um ponto antes de discordar',
                'Para fazer uma pergunta',
                'Para formar o passado'
              ],
              c: 0,
              exp: 'É o do de ênfase: "têm, sim".'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Parecer bobo faz parte do processo."',
              r: ['Sounding (foolish|silly|stupid) is part of the process.']
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'The only difference is that they kept going.'
            }
          ]
        },
        {
          id: 'en23l3',
          titulo: 'Um conto',
          pre: ['en23l2', 'en21l4'],
          exs: [
            {
              t: 'texto',
              titulo: 'A última carta',
              blocos: [
                {
                  p: 'Um conto curto, escrito para este curso. A literatura usa imagens, frases longas e muito do que você viu no avançado: orações reduzidas, inversão e o que fica nas entrelinhas. Ouça com calma, mais de uma vez.'
                },
                {
                  fala: 'The letter arrived on a Tuesday, which was strange, because nobody wrote letters anymore. Least of all to Helena, who had lived alone in the house by the river for almost thirty years.',
                  trad: 'A carta chegou numa terça-feira, o que era estranho, porque ninguém mais escrevia cartas. Muito menos para a Helena, que morava sozinha na casa à beira do rio havia quase trinta anos.'
                },
                {
                  fala: 'Holding the envelope up to the window, she recognized the handwriting at once. Never had she expected to see it again.',
                  trad: 'Segurando o envelope contra a janela, ela reconheceu a letra na hora. Nunca tinha esperado vê-la de novo.'
                },
                {
                  fala: 'She did not open it that day, or the next. She placed it on the kitchen table, where it sat like a guest who had arrived too early.',
                  trad: 'Ela não a abriu naquele dia, nem no seguinte. Deixou-a na mesa da cozinha, onde ela ficou como uma visita que chegou cedo demais.'
                },
                {
                  fala: 'On the third morning, having made her coffee and fed the cat, she finally sat down and tore the envelope open. Inside, there was only one line: "I kept my promise. Look under the old bridge."',
                  trad: 'Na terceira manhã, depois de fazer o café e dar comida ao gato, ela finalmente se sentou e rasgou o envelope. Dentro, havia uma única linha: "Cumpri a minha promessa. Olhe embaixo da ponte velha."'
                },
                {
                  vocab: [
                    ['least of all', 'muito menos'],
                    ['handwriting', 'a letra de alguém, a caligrafia'],
                    ['at once', 'na hora, imediatamente'],
                    ['to tear open', 'abrir rasgando']
                  ]
                },
                {
                  dica: 'O conto não diz quem escreveu a carta nem qual era a promessa. Esse silêncio é proposital: em textos literários, o que não está escrito também faz parte da história. Que tal escrever, em inglês, o que ela encontrou embaixo da ponte?',
                  rotulo: 'Nas entrelinhas'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Por que a chegada da carta era estranha?',
              ops: [
                'Ninguém mais escrevia cartas, muito menos para a Helena',
                'Era domingo',
                'A carta estava em branco'
              ],
              c: 0,
              exp: 'Nobody wrote letters anymore. Least of all to Helena.'
            },
            {
              t: 'escolha',
              p: 'O que a frase "Never had she expected to see it again" revela?',
              ops: [
                'Que ela conhecia quem escreveu, mas achava que nunca mais teria notícias da pessoa',
                'Que ela não sabia ler',
                'Que ela esperava a carta havia dias'
              ],
              c: 0,
              exp: 'Ela reconheceu a letra. A inversão dá peso dramático à surpresa.'
            },
            {
              t: 'escolha',
              p: 'O que a comparação "like a guest who had arrived too early" sugere?',
              ops: [
                'Que ela ainda não estava pronta para lidar com a carta',
                'Que a carta chegou atrasada',
                'Que ela tinha visitas em casa'
              ],
              c: 0,
              exp: 'Uma visita que chega cedo demais encontra a dona da casa despreparada.'
            },
            {
              t: 'escolha',
              p: 'Em "having made her coffee and fed the cat", o que a forma having made mostra?',
              ops: [
                'Que ela fez o café e deu comida ao gato antes de abrir a carta',
                'Que ela fez o café depois de abrir a carta',
                'Que ela nunca fez o café'
              ],
              c: 0,
              exp: 'Having + particípio: uma ação anterior.'
            },
            {
              t: 'escolha',
              p: 'O que dizia a carta?',
              ops: [
                'Que a pessoa cumpriu uma promessa, e que Helena devia olhar embaixo da ponte velha',
                'Que a pessoa estava voltando para casa',
                'Nada: estava vazia'
              ],
              c: 0,
              exp: 'I kept my promise. Look under the old bridge.'
            },
            {
              t: 'escreva',
              p: 'Traduza para o português: "She recognized the handwriting at once."',
              r: [
                'Ela reconheceu a (letra|caligrafia) (na hora|imediatamente|de imediato|logo|na mesma hora).'
              ],
              lingua: 'pt'
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'The letter arrived on a Tuesday, which was strange.'
            }
          ]
        }
      ]
    }
  ]
});
