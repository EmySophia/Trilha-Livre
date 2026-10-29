/* Trilha Livre · Inglês do zero · Nível 4: O passado
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md.
   ((frase)) tem botão de ouvir; [[americano|britânico]] muda com o sotaque escolhido. */

nivel({
  curso: 'ingles',
  n: 4,
  titulo: 'O passado',
  desc: 'O passado simples, o som do -ed, os irregulares mais usados, did, was e were, used to e uma história para ouvir.',
  videos: [
    {
      titulo: 'Rachel\'s English',
      canal: 'Rachel Smith',
      obs: 'a pronúncia do -ed em inglês americano, com exemplos em câmera lenta',
      url: 'https://www.youtube.com/@rachelsenglish'
    },
    {
      titulo: 'English in Brazil',
      canal: 'Carina Fragozo',
      obs: 'verbos irregulares e as dúvidas mais comuns sobre o passado',
      url: 'https://www.youtube.com/user/carinafragozo'
    },
    {
      titulo: 'BBC Learning English',
      canal: 'BBC',
      obs: 'histórias curtas e notícias para praticar o passado ouvindo',
      url: 'https://www.youtube.com/@bbclearningenglish'
    }
  ],
  unidades: [
    {
      id: 'enu7',
      titulo: 'O passado simples',
      conceito: 'worked · went · did',
      desc: 'Os verbos regulares e o som do -ed, os irregulares e o ajudante did.',
      licoes: [
        {
          id: 'en4l1',
          titulo: 'Verbos regulares e o som do -ed',
          pre: ['en3l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'O -ed e os seus três sons',
              blocos: [
                {
                  p: 'O passado dos verbos regulares é o verbo com **-ed**, igual para todas as pessoas: ((I worked)), ((she worked)), ((they worked)). Sem -s da terceira pessoa, sem conjugação. Aqui o inglês é mais fácil que o português.'
                },
                {
                  tabela: {
                    cab: ['Regra da escrita', 'Exemplos'],
                    codigo: [],
                    linhas: [
                      ['Regra geral: -ed', '((work)) → ((worked)), ((play)) → ((played))'],
                      ['Termina em e: só -d', '((live)) → ((lived)), ((like)) → ((liked))'],
                      ['Consoante + y: -ied', '((study)) → ((studied)), ((try)) → ((tried))'],
                      [
                        'Uma vogal + uma consoante, sílaba forte: dobra',
                        '((stop)) → ((stopped)), ((plan)) → ((planned))'
                      ]
                    ]
                  }
                },
                {
                  p: '**A pronúncia é o que mais importa aqui.** Quase todo brasileiro pronuncia o -ed como "id": "uórk-id", "plêi-id". Na maioria das vezes, o -ed **não cria sílaba nenhuma**. Ele tem três sons:'
                },
                {
                  tabela: {
                    cab: ['Som', 'Quando', 'Exemplos'],
                    codigo: [],
                    linhas: [
                      [
                        't',
                        'depois de sons "sem voz": p, k, f, s, sh, ch',
                        '((worked)), ((stopped)), ((laughed)), ((watched))'
                      ],
                      [
                        'd',
                        'depois de vogais e de sons "com voz": b, g, l, m, n, v, z',
                        '((played)), ((lived)), ((called)), ((cleaned))'
                      ],
                      [
                        'id (sílaba a mais)',
                        'só depois de t e d',
                        '((wanted)), ((needed)), ((started)), ((decided))'
                      ]
                    ]
                  }
                },
                {
                  p: '**Por que só depois de t e d?** É a mesma lógica do -s do plural. Juntar o som de t ou d ao -ed seria impossível ("want-t"), então entra uma vogal para separar. Em todos os outros casos, o som gruda no fim da palavra: ((worked)) tem uma sílaba só, como "uôrkt".'
                },
                {
                  pares: [
                    ['walked', 'wanted', 'uma sílaba × duas sílabas'],
                    ['played', 'painted', 'uma sílaba × duas sílabas']
                  ]
                },
                {
                  dica: 'Treine falando em voz alta: worked, watched, played, lived. Só uma sílaba cada. Depois: wanted, needed, started. Essas, sim, com duas.',
                  rotulo: 'Treino'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Quantas sílabas tem ((worked))?',
              ops: ['Uma', 'Duas', 'Três'],
              c: 0,
              exp: 'O -ed depois de k soa como t e não forma sílaba: "uôrkt".'
            },
            {
              t: 'escolha',
              p: 'Em qual destas palavras o -ed forma uma sílaba a mais?',
              ops: ['needed', 'played', 'watched'],
              c: 0,
              exp: 'A sílaba extra só aparece depois de t ou d. Need termina em d.'
            },
            {
              t: 'complete',
              p: 'Complete com o passado:',
              code: 'Yesterday I ___ my room and ___ a movie.',
              bank: ['cleaned', 'watched', 'clean', 'watch'],
              c: ['cleaned', 'watched'],
              exp: 'Yesterday pede o passado: cleaned e watched.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Ela estudou ontem."',
              r: ['She studied yesterday.'],
              exp: 'Study, com consoante + y, vira studied.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'I walked to work.',
              ops: ['I walked to work.', 'I walk to work.', 'I worked at home.'],
              c: 0,
              exp: 'Walked soa "uókt": o -ed vira só um t.'
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Nós moramos em Recife por dois anos."',
              r: 'We lived in Recife for two years.',
              extra: ['live', 'during', 'by'],
              exp: 'For indica quanto tempo durou: for two years.'
            },
            {
              t: 'escolha',
              p: 'Por que dizer "uórk-id" para worked soa errado?',
              ops: [
                'Porque o -ed só vira uma sílaba depois de t ou d; depois de k, ele soa só como t',
                'Porque worked é irregular',
                'Porque o certo é "uórk-éd"'
              ],
              c: 0,
              exp: 'Na maioria dos verbos, o -ed gruda no final: worked, liked, stopped.'
            },
            { t: 'escreva', p: 'Escreva o que você ouviu', ouvir: 'They started at nine.' }
          ]
        },
        {
          id: 'en4l2',
          titulo: 'Os irregulares de todo dia',
          pre: ['en4l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Os que não seguem o -ed',
              blocos: [
                {
                  p: 'Alguns verbos fazem o passado do seu próprio jeito. **Por que existem?** São formas muito antigas, que mudavam a vogal no passado (como sing, sang). Quase todos os verbos perderam isso e passaram a usar -ed. Os que resistiram são justamente os mais usados, porque palavra muito usada não deixa a gente esquecer a forma antiga. Por isso a lista parece injusta: os irregulares são os verbos que você mais vai precisar.'
                },
                { p: 'Comece por estes, que aparecem em quase toda conversa:' },
                {
                  vocab: [
                    ['go, went', 'ir, fui'],
                    ['have, had', 'ter, tive'],
                    ['do, did', 'fazer, fiz'],
                    ['get, got', 'conseguir, receber, ficar'],
                    ['make, made', 'fazer, criar'],
                    ['say, said', 'dizer', 'said soa "séd"'],
                    ['see, saw', 'ver, vi'],
                    ['come, came', 'vir, vim'],
                    ['take, took', 'pegar, levar'],
                    ['give, gave', 'dar, dei'],
                    ['know, knew', 'saber, soube', 'knew soa igual a new'],
                    ['think, thought', 'pensar, pensei'],
                    ['buy, bought', 'comprar, comprei'],
                    ['find, found', 'encontrar, encontrei'],
                    ['tell, told', 'contar, contei'],
                    ['leave, left', 'sair, deixar']
                  ]
                },
                {
                  p: '**Um truque:** muitos irregulares andam em grupos com o mesmo som. Aprender o grupo é mais fácil do que decorar um por um.'
                },
                {
                  tabela: {
                    cab: ['Grupo', 'Exemplos'],
                    codigo: [],
                    linhas: [
                      [
                        '-ought / -aught (soam igual)',
                        '((thought)), ((bought)), ((brought)), ((taught)), ((caught))'
                      ],
                      ['i → a', '((sing, sang)), ((drink, drank)), ((swim, swam))'],
                      ['não muda nada', '((put)), ((cut)), ((hit)), ((let))']
                    ]
                  }
                },
                {
                  dica: 'O passado irregular só vale nas frases afirmativas. Na pergunta e na negativa, o did assume o passado e o verbo volta ao normal: Did you go? (e nunca Did you went?). Isso é a próxima lição.',
                  rotulo: 'Antes de continuar'
                }
              ]
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: 'Last year I ___ to Chile and ___ a lot of photos.',
              bank: ['went', 'took', 'go', 'taked'],
              c: ['went', 'took']
            },
            {
              t: 'escreva',
              p: 'Traduza: "Eu comprei um celular novo."',
              r: [
                'I bought a new phone.',
                'I bought a new cell phone.',
                'I bought a new mobile.',
                'I bought a new mobile phone.'
              ]
            },
            {
              t: 'escolha',
              p: 'Qual é o passado de think?',
              ops: ['thought', 'thinked', 'thank'],
              c: 0,
              exp: 'Think, thought: do grupo do -ought, junto com bought e brought.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'She said no.',
              ops: ['She said no.', 'She says no.', 'She said so.'],
              c: 0,
              exp: 'Said soa "séd", com e aberto curto. Não rima com paid.'
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Eu vi um filme ótimo ontem."',
              r: ['I saw a great movie yesterday.', 'I watched a great movie yesterday.'],
              extra: ['see', 'seen', 'watched']
            },
            { t: 'escreva', p: 'Escreva o passado de go.', r: ['went'] },
            {
              t: 'escolha',
              p: 'Ouça ((knew)). Que palavra tem exatamente o mesmo som?',
              ops: ['new', 'now', 'know'],
              c: 0,
              exp: 'O k de knew é mudo, como o de know. Knew e new soam igual.'
            },
            { t: 'escreva', p: 'Escreva o que você ouviu', ouvir: 'We had a great time.' }
          ]
        },
        {
          id: 'en4l3',
          titulo: 'Did: perguntas e negativas no passado',
          pre: ['en4l2', 'en3l2'],
          exs: [
            {
              t: 'texto',
              titulo: 'O ajudante do passado',
              blocos: [
                {
                  p: 'Lembra do do e do does? No passado, o ajudante é **did**, e ele serve para todas as pessoas. Assim como o does pegava o -s do verbo, o **did pega o passado**: o verbo principal volta para a forma básica.'
                },
                {
                  tabela: {
                    cab: ['Afirmação', 'Pergunta', 'Negativa'],
                    codigo: [],
                    linhas: [
                      [
                        '((You went to the party.))',
                        '((Did you go to the party?))',
                        '((You didn\'t go to the party.))'
                      ],
                      [
                        '((She called me.))',
                        '((Did she call you?))',
                        '((She didn\'t call me.))'
                      ]
                    ]
                  }
                },
                {
                  p: '"Did you went?" e "I didn\'t saw" são erros muito comuns, porque o passado apareceria duas vezes: no did e no verbo. Uma vez só basta, e quem carrega é o did.'
                },
                {
                  p: '**Respostas curtas:** ((Did you like the movie?)) → ((Yes, I did.)) / ((No, I didn\'t.))'
                },
                {
                  p: 'Com palavra de pergunta: ((Where did you go?)), ((What did you do?)), ((When did it happen?)), ((Why did she leave?))'
                },
                {
                  dialogo: [
                    [
                      'Zoe',
                      'So, what did you do [[on the weekend|at the weekend]]?',
                      'E aí, o que você fez no fim de semana?'
                    ],
                    [
                      'Max',
                      'Not much. I stayed home and watched a series. You?',
                      'Nada de mais. Fiquei em casa vendo uma série. E você?'
                    ],
                    ['Zoe', 'I went to a concert!', 'Fui a um show!'],
                    ['Max', 'Really? Did you have fun?', 'Sério? Você se divertiu?'],
                    ['Zoe', 'Yes, I did. It was amazing.', 'Muito. Foi incrível.']
                  ]
                },
                {
                  dica: 'Concert é show de música. A palavra show em inglês é mais usada para programas de TV e espetáculos.',
                  rotulo: 'Show ou concert?'
                }
              ]
            },
            {
              t: 'escreva',
              p: 'Transforme em pergunta: "You went to the party."',
              r: ['Did you go to the party?'],
              exp: 'O did leva o passado; went volta a ser go.'
            },
            {
              t: 'escolha',
              p: 'Qual está certa?',
              ops: ['I didn\'t see him.', 'I didn\'t saw him.', 'I don\'t saw him.'],
              c: 0,
              exp: 'Depois de didn\'t, o verbo fica na forma básica: see.'
            },
            {
              t: 'monte',
              p: 'Monte a pergunta: "O que você fez no fim de semana?"',
              r: [
                'What did you do [[on the weekend|at the weekend]]?',
                'What did you do last weekend?'
              ],
              extra: ['does', 'made', 'done']
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'Did you call her?',
              ops: ['Did you call her?', 'Do you call her?', 'Did you tell her?'],
              c: 0
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: 'She ___ come yesterday. ___ she call you?',
              bank: ['didn\'t', 'Did', 'doesn\'t', 'Does'],
              c: ['didn\'t', 'Did'],
              exp: 'Yesterday pede o passado: didn\'t e Did.'
            },
            {
              t: 'escolha',
              p: 'Resposta curta para "Did you like the movie?"',
              ops: ['Yes, I did.', 'Yes, I liked.', 'Yes, I do.'],
              c: 0,
              exp: 'A resposta curta repete o ajudante: did.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Eu não entendi."',
              r: ['I didn\'t understand.', 'I didn\'t get it.'],
              exp: 'Na conversa, I didn\'t get it é muito comum para "não entendi".'
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'Where did you go last night?'
            }
          ]
        }
      ]
    },
    {
      id: 'enu8',
      titulo: 'Contando uma história',
      conceito: 'was · were · used to',
      desc: 'O passado do to be, there was, ago, used to e as palavras que costuram uma história.',
      licoes: [
        {
          id: 'en4l4',
          titulo: 'Was e were',
          pre: ['en4l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'O passado do to be',
              blocos: [
                {
                  tabela: {
                    cab: ['Pessoa', 'Passado de to be'],
                    codigo: [],
                    linhas: [['I, he, she, it', '((was))'], ['you, we, they', '((were))']]
                  }
                },
                {
                  p: 'As perguntas e negativas funcionam como no presente, sem ajudante: ((Were you at home?)) ((She wasn\'t there.)) ((We weren\'t ready.))'
                },
                {
                  p: '**Nascer é passivo.** Em inglês, você não "nasce": você **foi nascido**, como se a ação fosse da sua mãe. Por isso é ((I was born in 2005.)), sempre com was ou were. "I born" e "I am born" estão errados.'
                },
                {
                  p: '**There was e there were** são o passado de there is e there are: ((There was a problem.)) (Teve um problema.) ((There were a lot of people at the party.)) (Tinha muita gente na festa.)'
                },
                {
                  p: '**Há três anos** se diz ((three years ago)). Repare na ordem: o ago vem **depois** do tempo. "Ago three years" não existe.'
                },
                {
                  dialogo: [
                    [
                      'Ana',
                      'Where were you yesterday? I called you twice.',
                      'Onde você estava ontem? Te liguei duas vezes.'
                    ],
                    [
                      'Ben',
                      'Sorry, I was at my grandma\'s. It was her birthday.',
                      'Desculpa, eu estava na casa da minha avó. Era aniversário dela.'
                    ],
                    [
                      'Ana',
                      'Oh, nice! Was it a big party?',
                      'Que legal! Foi uma festa grande?'
                    ],
                    [
                      'Ben',
                      'Not really. There were about ten people.',
                      'Não muito. Tinha umas dez pessoas.'
                    ]
                  ]
                },
                {
                  dica: 'At my grandma\'s é "na casa da minha avó". O inglês costuma deixar o house subentendido depois do \'s.',
                  rotulo: 'Repare'
                }
              ]
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: 'I ___ at home yesterday, but my parents ___ at work.',
              bank: ['was', 'were', 'are', 'is'],
              c: ['was', 'were']
            },
            {
              t: 'escreva',
              p: 'Traduza: "Eu nasci em 2005."',
              r: ['I was born in 2005.'],
              exp: 'Nascer é passivo em inglês: was born.'
            },
            {
              t: 'escolha',
              p: 'Como se diz "há três anos"?',
              ops: ['three years ago', 'ago three years', 'has three years'],
              c: 0,
              exp: 'Ago vem depois do tempo.'
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Tinha muita gente na festa."',
              r: 'There were a lot of people at the party.',
              extra: ['was', 'had', 'in']
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'It wasn\'t my fault.',
              ops: ['It wasn\'t my fault.', 'It isn\'t my fault.', 'It was my fault.'],
              c: 0
            },
            {
              t: 'escreva',
              p: 'Traduza para o português: "Where were you last night?"',
              r: [
                'Onde você estava ontem à noite?',
                'Onde você estava ontem de noite?',
                'Onde você estava noite passada?',
                'Onde vocês estavam ontem à noite?',
                'Onde você esteve ontem à noite?',
                'Onde você tava ontem à noite?'
              ],
              lingua: 'pt'
            },
            { t: 'escreva', p: 'Escreva o que você ouviu', ouvir: 'I was born in Brazil.' }
          ]
        },
        {
          id: 'en4l5',
          titulo: 'Used to e uma história para ouvir',
          pre: ['en4l3'],
          exs: [
            {
              t: 'texto',
              titulo: 'Antigamente, e depois',
              blocos: [
                {
                  p: 'Para hábitos do passado que não existem mais, o inglês usa **used to**: ((I used to play [[soccer|football]].)) (Eu jogava futebol.) É o nosso imperfeito, o "jogava", "morava", "ia". A ideia é: era assim, não é mais.'
                },
                {
                  p: 'Na fala, used to soa como "iúst-tu", com som de s, e não de z. Na pergunta e na negativa, o did assume o passado: ((Did you use to live here?)) ((I didn\'t use to like coffee.))'
                },
                { p: 'Para contar uma história, estas palavras costuram as partes:' },
                {
                  vocab: [
                    ['first', 'primeiro'],
                    ['then', 'então, depois'],
                    ['after that', 'depois disso'],
                    ['later', 'mais tarde'],
                    ['suddenly', 'de repente'],
                    ['finally', 'finalmente, por fim']
                  ]
                },
                {
                  p: '**Agora, uma história.** Ouça cada parte antes de ler a tradução. Repare nos verbos no passado e no som do -ed.'
                },
                {
                  fala: 'Last summer, I went to the beach with my friends. We left early in the morning, but the traffic was terrible.',
                  trad: 'No verão passado, fui à praia com meus amigos. Saímos cedo, mas o trânsito estava horrível.'
                },
                {
                  fala: 'When we finally arrived, it started to rain! So we found a small café and waited.',
                  trad: 'Quando finalmente chegamos, começou a chover! Então achamos um cafezinho e esperamos.'
                },
                {
                  fala: 'After an hour, the sun came out, and we had a great day. We used to go there every summer when we were kids.',
                  trad: 'Depois de uma hora, o sol saiu, e o dia foi ótimo. A gente ia lá todo verão quando era criança.'
                },
                {
                  dica: 'Repare em started e waited: os dois terminam em t antes do -ed, então ganham a sílaba extra. Arrived, depois do som de v, termina só com som de d.',
                  rotulo: 'O -ed na história'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Na história, por que eles foram a um café?',
              ops: [
                'Porque começou a chover',
                'Porque estavam com fome',
                'Porque o trânsito estava ruim'
              ],
              c: 0,
              exp: 'When we finally arrived, it started to rain! So we found a small café...'
            },
            {
              t: 'escolha',
              p: 'O que quer dizer "We used to go there every summer"?',
              ops: [
                'A gente ia lá todo verão (e hoje não vai mais)',
                'A gente vai lá todo verão',
                'A gente se acostumou a ir lá'
              ],
              c: 0,
              exp: 'Used to fala de um hábito do passado que acabou.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Eu morava em Salvador."',
              r: ['I used to live in Salvador.', 'I lived in Salvador.']
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'I used to play the guitar.',
              ops: [
                'I used to play the guitar.',
                'I use to play the guitar.',
                'I used to pay the guitar.'
              ],
              c: 0,
              exp: 'Used to soa "iúst-tu": o d some na fala, mas na escrita ele fica.'
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Primeiro nós comemos, depois fomos ao cinema."',
              r: [
                'First we ate, then we went to the [[movies|cinema]].',
                'First, we ate, then we went to the [[movies|cinema]].'
              ],
              extra: ['eat', 'go', 'after'],
              exp: 'Ir ao cinema é go to the movies nos EUA e go to the cinema no Reino Unido.'
            },
            {
              t: 'escreva',
              p: 'Traduza para o português: "Suddenly, it started to rain."',
              r: ['De repente, começou a chover.', 'De repente começou a chover.'],
              lingua: 'pt'
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'After an hour, the sun came out.'
            }
          ]
        }
      ]
    }
  ]
});
