/* Trilha Livre · Inglês do zero · Nível 6: Pronúncia que muda tudo (A2)
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md.
   ((frase)) tem botão de ouvir; [[americano|britânico]] muda com o sotaque escolhido. */

nivel({
  curso: 'ingles',
  n: 6,
  titulo: 'Pronúncia que muda tudo',
  faixa: 'A2',
  desc: 'Os sons que o português não tem, vogais curtas e longas, a sílaba forte, o schwa e a fala rápida de verdade.',
  videos: [
    {
      titulo: 'Rachel\'s English',
      canal: 'Rachel Smith',
      obs: 'o canal mais completo de pronúncia americana: posição da boca e câmera lenta',
      url: 'https://www.youtube.com/@rachelsenglish'
    },
    {
      titulo: 'English with Lucy',
      canal: 'Lucy Earl',
      obs: 'pronúncia britânica, com os sons difíceis explicados um por um',
      url: 'https://www.youtube.com/@EnglishwithLucy'
    },
    {
      titulo: 'English in Brazil',
      canal: 'Carina Fragozo',
      obs: 'os erros de pronúncia mais comuns de brasileiros, explicados em português',
      url: 'https://www.youtube.com/user/carinafragozo'
    },
    {
      tipo: 'texto',
      titulo: 'YouGlish',
      canal: 'YouGlish',
      obs: 'digite uma palavra e ouça pessoas de verdade falando, em vídeos do YouTube, com o sotaque que você escolher',
      url: 'https://youglish.com/english'
    }
  ],
  unidades: [
    {
      id: 'enu11',
      titulo: 'Sons que o português não tem',
      conceito: 'think · ship · sheep',
      desc: 'O th, as vogais curtas e longas, o h, o r e o fim das palavras.',
      licoes: [
        {
          id: 'en6l1',
          titulo: 'O TH',
          exs: [
            {
              t: 'texto',
              titulo: 'A língua entre os dentes',
              blocos: [
                {
                  p: 'O **th** é o som mais famoso do inglês que não existe em português. Ele tem duas versões, e as duas se fazem do mesmo jeito: a ponta da língua encosta de leve entre os dentes da frente, e o ar passa por ali.'
                },
                {
                  tabela: {
                    cab: ['Versão', 'Como fazer', 'Exemplos'],
                    codigo: [],
                    linhas: [
                      [
                        'Sem voz',
                        'só o ar passando, como um sopro',
                        '((think)), ((three)), ((thanks)), ((birthday)), (([[math|maths]]))'
                      ],
                      [
                        'Com voz',
                        'o mesmo, mas com a garganta vibrando',
                        '((this)), ((the)), ((they)), ((mother)), ((brother))'
                      ]
                    ]
                  }
                },
                {
                  p: 'Para sentir a diferença, ponha a mão na garganta: em ((this)) ela vibra; em ((think)), não.'
                },
                {
                  p: '**O que o brasileiro costuma fazer:** trocar o th por f, t, s ou d. ((think)) vira "fink" ou "sink", ((three)) vira "tree" ou "free", ((this)) vira "dis". Às vezes isso só deixa o sotaque mais forte; às vezes muda a palavra. Ouça os pares:'
                },
                {
                  pares: [
                    ['think', 'sink', 'pensar × pia, afundar'],
                    ['three', 'tree', 'três × árvore'],
                    ['thank', 'tank', 'agradecer × tanque'],
                    ['they', 'day', 'eles × dia'],
                    ['thought', 'taught', 'pensou × ensinou'],
                    ['mouth', 'mouse', 'boca × rato']
                  ]
                },
                {
                  p: '**Para treinar:** fale devagar, exagerando a língua para fora no começo. Com o tempo, ela vai para trás dos dentes e o som fica natural. Repita estas frases em voz alta, junto com o áudio:'
                },
                { fala: 'Thank you. I think so.', trad: 'Obrigado. Acho que sim.' },
                {
                  fala: 'My brother and my mother are there.',
                  trad: 'Meu irmão e minha mãe estão lá.'
                },
                { fala: 'Three thousand three hundred.', trad: 'Três mil e trezentos.' },
                {
                  dica: 'Ninguém precisa de um th perfeito para ser entendido. Muitos nativos da Irlanda e de partes de Londres também o trocam por t ou f. Mas, quando a troca cria outra palavra (three e tree), o contexto precisa ajudar, e vale caprichar.',
                  rotulo: 'Calma'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'think',
              ops: ['think', 'sink', 'pink'],
              c: 0,
              exp: 'Think tem a língua entre os dentes. Sink começa com um s comum.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'three',
              ops: ['three', 'tree', 'free'],
              c: 0,
              exp: 'Três é three, com th. Tree, com t, é árvore.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'they',
              ops: ['they', 'day', 'hey'],
              c: 0,
              exp: 'They tem o th com voz; day começa com d.'
            },
            {
              t: 'escolha',
              p: 'Como se faz o som do th?',
              ops: [
                'A ponta da língua encosta de leve entre os dentes da frente e o ar passa',
                'Os lábios se fecham, como no f',
                'A língua toca o céu da boca, como no t'
              ],
              c: 0,
              exp: 'É a única posição de língua do inglês que o português não usa.'
            },
            {
              t: 'escolha',
              p: 'Em qual destas palavras o th tem voz (a garganta vibra)?',
              ops: ['mother', '[[math|maths]]', 'thanks'],
              c: 0,
              exp: 'Mother, this, the, they: th com voz. [[Math|Maths]], thanks, think: sem voz.'
            },
            { t: 'escreva', p: 'Traduza: "Eu acho que sim."', r: ['I think so.'] },
            {
              t: 'monte',
              p: 'Monte: "minha mãe e meu irmão"',
              r: ['my mother and my brother', 'my mom and my brother'],
              extra: ['the', 'mom', 'with']
            },
            { t: 'escreva', p: 'Escreva o que você ouviu', ouvir: 'Thank you so much.' }
          ]
        },
        {
          id: 'en6l2',
          titulo: 'Vogais curtas e longas',
          pre: ['en6l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Ship ou sheep?',
              blocos: [
                {
                  p: 'O português tem um i só. O inglês tem dois: um **curto e relaxado**, entre o nosso i e o ê, e um **longo e esticado**, como o nosso i, só que mais comprido. Essa diferença muda a palavra.'
                },
                {
                  pares: [
                    ['ship', 'sheep', 'navio × ovelha'],
                    ['live', 'leave', 'morar × sair'],
                    ['sit', 'seat', 'sentar × assento'],
                    ['fill', 'feel', 'encher × sentir'],
                    ['it', 'eat', 'isso × comer']
                  ]
                },
                {
                  p: '**Como treinar o curto:** relaxe a boca, sem sorrir, como se fosse falar "ê" e parasse no meio do caminho. **O longo:** sorria um pouco e estique o som. Na escrita, ee e ea costumam ser longos (sheep, leave, eat), e o i sozinho entre consoantes costuma ser curto (ship, live, sit).'
                },
                {
                  dica: 'Brasileiros costumam falar todas essas palavras com o i longo. Cuidado especial com sheet (folha) e beach (praia): elas têm o i longo. Com o i curto, viram palavrões.',
                  rotulo: 'Atenção'
                },
                { p: 'O mesmo acontece com o u e com o a:' },
                {
                  pares: [
                    ['full', 'fool', 'cheio × bobo: u curto × u longo'],
                    ['pull', 'pool', 'puxar × piscina'],
                    ['bad', 'bed', 'ruim × cama'],
                    ['man', 'men', 'homem × homens'],
                    ['sad', 'said', 'triste × disse']
                  ]
                },
                {
                  p: 'O a de ((bad)), ((man)) e ((cat)) é um som aberto, entre o nosso a e o é, com a boca bem aberta. É um dos sons mais marcantes do inglês americano.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'ship',
              ops: ['ship', 'sheep', 'shop'],
              c: 0,
              exp: 'Ship tem o i curto e relaxado. Sheep tem o i longo.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'leave',
              ops: ['leave', 'live', 'love'],
              c: 0,
              exp: 'Leave (sair) tem o i longo, escrito ea.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'bed',
              ops: ['bed', 'bad', 'bird'],
              c: 0,
              exp: 'Bed (cama) tem um é. Bad (ruim) tem o a bem aberto.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'men',
              ops: ['men', 'man', 'mean'],
              c: 0,
              exp: 'Men, o plural de man, tem o som de é.'
            },
            {
              t: 'escolha',
              p: 'Qual destas palavras tem o i longo?',
              ops: ['seat', 'sit', 'city'],
              c: 0,
              exp: 'O ea costuma ser i longo: seat, eat, leave.'
            },
            {
              t: 'escolha',
              p: '"I live in São Paulo" com o i longo vira...',
              ops: [
                '"I leave São Paulo": eu saio de São Paulo',
                'A mesma frase, só com sotaque',
                '"Eu amo São Paulo"'
              ],
              c: 0,
              exp: 'Live, com i curto, é morar. Leave, com i longo, é sair, partir.'
            },
            { t: 'escreva', p: 'Escreva o que você ouviu', ouvir: 'I live in a big city.' },
            {
              t: 'escreva',
              p: 'Traduza: "O navio é grande."',
              r: ['The ship is big.', 'The ship is large.']
            }
          ]
        },
        {
          id: 'en6l3',
          titulo: 'O H, o R e o fim das palavras',
          pre: ['en6l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Três sons que entregam o sotaque',
              blocos: [
                {
                  p: '**O h do inglês** é um sopro suave, como o rr de "carro" ou o r de "rato" em boa parte do Brasil: ((house)), ((hello)), ((happy)). Ele existe, e engolir o h muda palavras: ((hair)) (cabelo) vira ((air)) (ar).'
                },
                {
                  p: '**O r do inglês** é outro som: a ponta da língua se curva para trás, sem encostar em nada. E aqui mora uma confusão curiosa: como o nosso r de "rato" soa parecido com o h do inglês, muitos brasileiros falam ((red)) como se fosse ((head)), e ((ready)) como "hédi".'
                },
                {
                  pares: [
                    ['red', 'head', 'vermelho × cabeça'],
                    ['hair', 'air', 'cabelo × ar'],
                    ['hat', 'at', 'chapéu × em']
                  ]
                },
                {
                  p: '**O r depois da vogal** é uma das maiores diferenças entre os sotaques. Nos EUA, ele é pronunciado: ((car)), ((park)), ((her)). No Reino Unido, ele some quando não vem vogal depois: car soa "cá", park soa "páak". Os dois estão certos.'
                },
                {
                  p: '**O fim das palavras.** O português quase não termina palavras em consoantes como t, d, k, g ou p. Por isso, brasileiros costumam acrescentar um i no fim: "Facebook-i", "big-i", "internet-chi". Em inglês, a palavra termina na consoante: ((big)), ((book)), ((good)), ((stop)), ((cat)).'
                },
                {
                  p: 'Truque para treinar: ligue a consoante final à próxima palavra, quando ela começa com vogal. ((big apple)) soa como "bi-gápple". Assim o i extra não tem onde entrar.'
                },
                {
                  p: '**E o m final:** em ((I\'m)), ((time)) e ((name)), os lábios se fecham no fim. Em português, "tem" e "bom" não fecham a boca. Em inglês, fecham.'
                },
                {
                  vocab: [
                    [
                      'I need a big bag.',
                      'Preciso de uma bolsa grande.',
                      'nada de "bigi bégui"'
                    ],
                    ['What time is it?', 'Que horas são?', 'feche os lábios no m de time'],
                    ['Good job!', 'Bom trabalho!']
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'red',
              ops: ['red', 'head', 'bed'],
              c: 0,
              exp: 'Red começa com o r do inglês, com a língua curvada para trás.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'hair',
              ops: ['hair', 'air', 'her'],
              c: 0,
              exp: 'Hair começa com o sopro do h.'
            },
            {
              t: 'escolha',
              p: 'Por que tantos brasileiros falam "bigi" para big?',
              ops: [
                'O português quase não termina palavras em g, t, d ou k, então a boca acrescenta um i',
                'Porque está na escrita',
                'Porque é o sotaque britânico'
              ],
              c: 0,
              exp: 'Em inglês, a palavra termina na própria consoante.'
            },
            {
              t: 'escolha',
              p: 'Por que ready às vezes sai como "hédi"?',
              ops: [
                'Porque o nosso r de "rato" soa como o h do inglês',
                'Porque o r de ready é mudo',
                'Porque é assim no Reino Unido'
              ],
              c: 0,
              exp: 'O r inglês é com a língua curvada para trás, sem encostar, e não um sopro.'
            },
            {
              t: 'escolha',
              p: 'Como um britânico costuma pronunciar car?',
              ops: ['Sem o r: "cá"', 'Com o r bem forte no fim', 'Como "quér"'],
              c: 0,
              exp: 'No Reino Unido, o r depois de vogal some se não vier outra vogal em seguida.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'What time is it?',
              ops: ['What time is it?', 'What time it is?', 'What a time it is!'],
              c: 0
            },
            { t: 'escreva', p: 'Escreva o que você ouviu', ouvir: 'I need a big bag.' }
          ]
        }
      ]
    },
    {
      id: 'enu12',
      titulo: 'Ritmo e fala conectada',
      conceito: 'gonna · wanna · ə',
      desc: 'A sílaba forte, o schwa, as palavras fracas e como as palavras se juntam na fala rápida.',
      licoes: [
        {
          id: 'en6l4',
          titulo: 'Sílaba forte e o schwa',
          exs: [
            {
              t: 'texto',
              titulo: 'O ritmo do inglês',
              blocos: [
                {
                  p: 'Toda palavra em inglês tem uma **sílaba forte**, e errar qual é atrapalha mais a compreensão do que errar uma vogal. Repare como ela muda de lugar numa mesma família de palavras:'
                },
                {
                  vocab: [
                    ['photograph', 'fotografia (a foto)', 'forte no PHO'],
                    ['photography', 'fotografia (a arte)', 'forte no TO'],
                    ['photographer', 'fotógrafo', 'forte no TO'],
                    ['photographic', 'fotográfico', 'forte no GRA']
                  ]
                },
                {
                  p: 'Às vezes, a sílaba forte separa duas palavras: ((desert)) (deserto) é forte no começo; ((dessert)) (sobremesa) é forte no fim.'
                },
                {
                  p: '**O schwa.** As sílabas fracas do inglês perdem a vogal original e viram um som neutro e curto, parecido com o "â" de "cama" falado bem rápido. Os linguistas chamam esse som de schwa, e ele é **o som mais comum do inglês**. Está no a de ((about)), nos dois a fracos de ((banana)) e no o de ((problem)).'
                },
                {
                  p: '**Palavras fracas.** Numa frase, as palavras de conteúdo (verbos, substantivos, adjetivos) são fortes, e as pequenas (to, for, and, of, can, a, the) ficam fracas, com schwa. ((a cup of coffee)) soa como "a cáp-â cófi". ((fish and chips)) soa como "fish-ân-chips".'
                },
                {
                  p: '**Can e can\'t:** na frase afirmativa, can é fraco ("kân"). Can\'t é sempre forte. É por isso que ((I can swim)) e ((I can\'t swim)) se diferenciam mais pela força da palavra do que pelo t final, que muitas vezes quase some.'
                },
                { pares: [['I can swim.', 'I can\'t swim.', 'can fraco × can\'t forte']] },
                {
                  dica: 'O português dá o mesmo tempo para cada sílaba. O inglês corre pelas fracas e se demora nas fortes, como uma música com batidas. Ouvir e imitar o ritmo, e não só os sons, deixa a sua fala muito mais fácil de entender.',
                  rotulo: 'O segredo do ritmo'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Em ((photography)), qual é a sílaba forte?',
              ops: ['TO: pho-TO-gra-phy', 'PHO: PHO-to-gra-phy', 'PHY: pho-to-gra-PHY'],
              c: 0,
              exp: 'Repare como ela muda de photograph (PHO) para photography (TO).'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'dessert',
              ops: ['dessert', 'desert', 'deserve'],
              c: 0,
              exp: 'Dessert, a sobremesa, é forte no fim. Desert, o deserto, é forte no começo.'
            },
            {
              t: 'escolha',
              p: 'Qual é o som mais comum do inglês?',
              ops: ['O schwa, a vogal fraca e neutra de about', 'O th', 'O i longo'],
              c: 0,
              exp: 'Ele aparece em quase toda sílaba fraca.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'I can\'t swim.',
              ops: ['I can\'t swim.', 'I can swim.'],
              c: 0,
              exp: 'Can\'t é forte; can, na afirmativa, é fraco.'
            },
            {
              t: 'escolha',
              p: 'Como costuma soar o and em "fish and chips"?',
              ops: [
                'Como um "ân" fraco: "fish-ân-chips"',
                'Como "énd", bem forte',
                'Ele não é pronunciado'
              ],
              c: 0,
              exp: 'Palavras pequenas ficam fracas na frase.'
            },
            { t: 'escreva', p: 'Escreva o que você ouviu', ouvir: 'A cup of coffee, please.' },
            {
              t: 'monte',
              p: 'Monte: "Eu sei nadar."',
              r: 'I can swim.',
              extra: ['can\'t', 'know', 'to'],
              exp: 'Saber fazer algo é can: I can swim.'
            }
          ]
        },
        {
          id: 'en6l5',
          titulo: 'Fala rápida: wanna, gonna, gotta',
          pre: ['en4l5', 'en6l4'],
          exs: [
            {
              t: 'texto',
              titulo: 'O inglês de verdade é mais rápido que o do livro',
              blocos: [
                {
                  p: 'Na conversa, as palavras se juntam e encolhem. Não é preguiça nem gíria: é como qualquer língua funciona falada rápido. Em português também dizemos "tô", "cê" e "pra". Algumas dessas formas aparecem até na escrita informal:'
                },
                {
                  tabela: {
                    cab: ['Forma falada', 'Por extenso', 'Exemplo'],
                    codigo: [],
                    linhas: [
                      ['gonna', 'going to', '((I\'m gonna call you.))'],
                      ['wanna', 'want to', '((I wanna go home.))'],
                      ['gotta', 'have got to (ter que)', '((I gotta go.))'],
                      ['dunno', 'don\'t know', '((I dunno.))'],
                      ['lemme', 'let me', '((Lemme see.))'],
                      ['gimme', 'give me', '((Gimme a second.))'],
                      ['kinda', 'kind of (meio, mais ou menos)', '((I\'m kinda tired.))'],
                      ['whatcha', 'what are you / what do you', '((Whatcha doing?))']
                    ]
                  }
                },
                {
                  p: '**Use assim:** entenda todas quando ouvir. Fale gonna e wanna à vontade na conversa. Na escrita, só em mensagens informais. Em e-mails de trabalho, redações e provas, escreva por extenso.'
                },
                {
                  p: '**Um erro comum:** gonna substitui going to, e não o verbo to be. Continua sendo ((I\'m gonna)), e não "I gonna".'
                },
                {
                  p: '**Palavras que se ligam.** Quando uma palavra termina em consoante e a seguinte começa com vogal, elas se juntam: ((an apple)) soa "a-népol", ((turn it off)) soa "tur-ni-tóff", ((check it out)) soa "che-ki-dáut".'
                },
                {
                  p: '**O t americano.** Nos EUA, o t entre vogais vira um toque rápido da língua, parecido com o r de "caro": ((water)) soa "uóder", ((better)) soa "béder", ((city)) soa "cídi". No Reino Unido, o t costuma ficar claro, ou vira uma pausa na garganta na fala informal ("wa\'er").'
                },
                {
                  dica: 'Se você ouve uma frase e não entende, mas lendo entende na hora, o problema não é vocabulário: é a fala conectada. Ouvir e repetir frases inteiras, como os ditados deste curso, treina exatamente isso.',
                  rotulo: 'Por que é difícil entender filme sem legenda'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'I wanna go home.',
              ops: ['I wanna go home.', 'I want go home.', 'I won\'t go home.'],
              c: 0,
              exp: 'Wanna é want to falado rápido.'
            },
            {
              t: 'escolha',
              p: 'O que quer dizer gotta, em "I gotta go"?',
              ops: ['Have got to: ter que (preciso ir)', 'Got: consegui', 'Go to: ir para'],
              c: 0,
              exp: 'I gotta go é "tenho que ir".'
            },
            { t: 'escreva', p: 'Escreva por extenso: "I dunno."', r: ['I don\'t know.'] },
            { t: 'escreva', p: 'Escreva por extenso: "Lemme see."', r: ['Let me see.'] },
            {
              t: 'escolha',
              p: 'Qual destas frases está errada?',
              ops: ['I gonna travel.', 'I\'m gonna travel.', 'I wanna travel.'],
              c: 0,
              exp: 'Gonna substitui going to. O am continua lá: I\'m gonna.'
            },
            {
              t: 'escolha',
              p: 'Por que water soa como "uóder" nos EUA?',
              ops: [
                'O t entre vogais vira um toque rápido da língua, parecido com o r de "caro"',
                'Porque a palavra tem um d escondido',
                'Porque é gíria'
              ],
              c: 0,
              exp: 'É o mesmo que acontece em better, city e party.'
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'I gotta go.',
              exp: 'Gotta é got to, "ter que". Por extenso, também vale.',
              r: '(I gotta go|I\'ve got to go|I have got to go|I got to go|I have to go).'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'I\'m kinda tired.',
              ops: ['I\'m kinda tired.', 'I\'m kind and tired.', 'I\'m kinda fired.'],
              c: 0,
              exp: 'Kinda é kind of: "meio", "um pouco".'
            }
          ]
        }
      ]
    }
  ]
});
