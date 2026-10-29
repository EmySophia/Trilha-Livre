/* Trilha Livre · Inglês do zero · Nível 14: Quem fez e o que veio antes (B1)
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md.
   ((frase)) tem botão de ouvir; [[americano|britânico]] muda com o sotaque escolhido. */

nivel({
  curso: 'ingles',
  n: 14,
  titulo: 'Quem fez e o que veio antes',
  faixa: 'B1',
  desc: 'A voz passiva, o "mandei fazer" com have something done, o past perfect e uma notícia para ouvir.',
  videos: [
    {
      titulo: 'BBC Learning English',
      canal: 'BBC',
      obs: 'a voz passiva e o past perfect na série de gramática, com notícias de verdade',
      url: 'https://www.youtube.com/@bbclearningenglish'
    },
    {
      titulo: 'English with Lucy',
      canal: 'Lucy Earl',
      obs: 'past perfect e as formas de contar histórias no passado',
      url: 'https://www.youtube.com/@EnglishwithLucy'
    },
    {
      titulo: 'English in Brazil',
      canal: 'Carina Fragozo',
      obs: 'procure no canal os vídeos sobre voz passiva e "have something done"',
      url: 'https://www.youtube.com/user/carinafragozo'
    }
  ],
  unidades: [
    {
      id: 'enu23',
      titulo: 'A voz passiva',
      conceito: 'was built · had it done',
      desc: 'Quando o importante é o que aconteceu, e não quem fez.',
      licoes: [
        {
          id: 'en14l1',
          titulo: 'A voz passiva: is made, was built',
          pre: ['en10l1', 'en5l2'],
          exs: [
            {
              t: 'texto',
              titulo: 'Quando o importante é o que aconteceu',
              blocos: [
                {
                  p: 'Compare ((Someone stole my bike.)) (Alguém roubou minha bicicleta.) com ((My bike was stolen.)) (Minha bicicleta foi roubada.) Na segunda, o foco está na bicicleta, e não em quem roubou, que talvez ninguém saiba.'
                },
                {
                  p: 'Essa é a **voz passiva**. Ela se forma com **to be + particípio**, exatamente como o português "ser + particípio": foi roubada, é feito, foram construídas. O tempo da frase fica no to be:'
                },
                {
                  tabela: {
                    cab: ['Tempo', 'Ativa', 'Passiva'],
                    codigo: [],
                    linhas: [
                      ['presente', '((They make cars here.))', '((Cars are made here.))'],
                      [
                        'passado',
                        '((Someone built this house in nineteen twenty.))',
                        '((This house was built in nineteen twenty.))'
                      ],
                      [
                        'futuro',
                        '((They will announce the results.))',
                        '((The results will be announced.))'
                      ],
                      ['com modal', '((You can do it online.))', '((It can be done online.))'],
                      [
                        'present perfect',
                        '((Someone has stolen my phone!))',
                        '((My phone has been stolen!))'
                      ]
                    ]
                  }
                },
                {
                  p: '**Quando usar.** O inglês usa a passiva bem mais que o português falado, principalmente quando quem fez não importa, é óbvio ou é desconhecido: em notícias, textos científicos, avisos e instruções. ((English is spoken all over the world.)) ((The museum was opened in twenty fifteen.))'
                },
                {
                  p: '**Quem fez**, quando importa, entra com **by**: ((The book was written by Machado de Assis.)) (O livro foi escrito por Machado de Assis.)'
                },
                {
                  p: '**Onde o português usa o "se"**, o inglês costuma usar a passiva: "vende-se" é ((for sale)), "aluga-se" é ((for rent)) nos EUA e ((to let)) no Reino Unido, e "isso se faz assim" é ((This is done like this.))'
                },
                {
                  p: '**Nascer**, como você viu no nível 5, é passivo: ((I was born in Recife.)) Agora você sabe por quê: alguém, a sua mãe, fez a ação.'
                },
                {
                  dica: 'Os particípios irregulares são essenciais aqui: made, built, written, stolen, sold, spoken, taken, given. Se esquecer algum, o dicionário mostra as três formas de cada verbo.',
                  rotulo: 'O particípio'
                }
              ]
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: 'This bridge ___ built in 1950. Today, cars ___ made in this factory.',
              bank: ['was', 'are', 'is', 'were'],
              c: ['was', 'are'],
              exp: 'Passado e singular: was built. Presente e plural: are made.'
            },
            {
              t: 'escolha',
              p: '"O livro foi escrito por Machado de Assis." Como fica?',
              ops: [
                'The book was written by Machado de Assis.',
                'The book was wrote by Machado de Assis.',
                'The book wrote by Machado de Assis.'
              ],
              c: 0,
              exp: 'Passiva: to be + particípio (written, e não wrote).'
            },
            {
              t: 'escreva',
              p: 'Passe para a voz passiva: "Someone stole my bike."',
              r: ['My bike was stolen.', 'My bike got stolen.'],
              exp: 'Ninguém sabe quem roubou, então o foco vai para a bicicleta.'
            },
            {
              t: 'escolha',
              p: 'Por que a voz passiva é tão comum em notícias?',
              ops: [
                'O foco está no que aconteceu, e muitas vezes não se sabe ou não importa quem fez',
                'Porque ela é mais curta',
                'Porque é obrigatória no passado'
              ],
              c: 0,
              exp: 'The museum was opened, the road was closed: o fato importa mais que o autor.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "O inglês é falado no mundo todo."',
              r: [
                'English is spoken (all over the world|around the world|everywhere|worldwide|throughout the world|all around the world).'
              ]
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'My phone has been stolen!',
              ops: [
                'My phone has been stolen!',
                'My phone has been stored!',
                'My phone has stolen!'
              ],
              c: 0
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Os resultados serão anunciados amanhã."',
              r: 'The results will be announced tomorrow.',
              extra: ['are', 'announce', 'by']
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'The museum was opened in twenty fifteen.',
              r: 'The museum was opened in (twenty fifteen|2015|two thousand fifteen|two thousand and fifteen).'
            }
          ]
        },
        {
          id: 'en14l2',
          titulo: 'Cortei o cabelo: have something done',
          pre: ['en14l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Quando outra pessoa faz por você',
              blocos: [
                {
                  p: 'Em português, dizemos "cortei o cabelo" mesmo quando foi o cabeleireiro que cortou. Em inglês, ((I cut my hair.)) quer dizer que **você mesmo** pegou a tesoura. Para um serviço feito por outra pessoa, o inglês usa **have + coisa + particípio**:'
                },
                {
                  tabela: {
                    cab: ['Português', 'Inglês'],
                    codigo: [],
                    linhas: [
                      ['Cortei o cabelo.', '((I had my hair cut.))'],
                      [
                        'Vou mandar consertar o celular.',
                        '((I\'m going to have my phone fixed.))'
                      ],
                      ['Mandamos pintar a casa.', '((We had the house painted.))'],
                      [
                        'Preciso fazer um exame de vista.',
                        '((I need to have my eyes tested.))'
                      ]
                    ]
                  }
                },
                {
                  p: 'Na conversa, **get** no lugar de have é muito comum e um pouco mais informal: ((I got my hair cut.)) ((Where did you get your nails done?))'
                },
                {
                  p: '**Get também forma uma passiva informal**, principalmente para coisas que acontecem com alguém de repente ou sem querer: ((My bike got stolen.)) ((He got fired.)) (Ele foi demitido.) E vários verbos que no português levam "se" usam get:'
                },
                {
                  vocab: [
                    ['get married', 'casar-se'],
                    ['get lost', 'perder-se'],
                    ['get hurt', 'machucar-se'],
                    ['get dressed', 'vestir-se'],
                    ['get fired', 'ser demitido'],
                    ['get paid', 'receber o pagamento']
                  ]
                },
                {
                  dialogo: [
                    ['Bruno', 'Wow, you look different!', 'Nossa, você está diferente!'],
                    [
                      'Carla',
                      'I got my hair cut yesterday. Do you like it?',
                      'Cortei o cabelo ontem. Gostou?'
                    ],
                    [
                      'Bruno',
                      'I love it! Where did you get it done?',
                      'Amei! Onde você cortou?'
                    ],
                    [
                      'Carla',
                      'At a small place near my work. I also had my nails done there.',
                      'Num lugar pequeno perto do trabalho. Também fiz as unhas lá.'
                    ]
                  ]
                },
                {
                  dica: 'A ordem é sempre have, depois a coisa, depois o particípio: I had my hair cut. "I had cut my hair" é outra coisa: é o past perfect, "eu tinha cortado o cabelo", que você vai ver na próxima unidade.',
                  rotulo: 'A ordem importa'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Você foi ao cabeleireiro. Como diz "cortei o cabelo"?',
              ops: ['I had my hair cut.', 'I cut my hair.', 'I had cut my hair.'],
              c: 0,
              exp: 'I cut my hair quer dizer que você mesmo cortou. I had cut é "eu tinha cortado".'
            },
            {
              t: 'escolha',
              p: '"Eles se casaram em junho." Como fica?',
              ops: [
                'They got married in June.',
                'They married themselves in June.',
                'They got marry in June.'
              ],
              c: 0,
              exp: 'Casar-se é get married, com o particípio.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Eu me perdi."',
              r: ['I got lost.'],
              exp: 'Perder-se é get lost.'
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: 'I need to have my car ___. It ___ hit by a truck yesterday.',
              bank: ['fixed', 'got', 'fix', 'gets'],
              c: ['fixed', 'got'],
              exp: 'Have + coisa + particípio: have my car fixed. E got hit é a passiva informal com get.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Ele foi demitido."',
              r: ['He (got|was) (fired|sacked|laid off|dismissed).'],
              exp: 'Get fired é o mais comum na conversa. Sacked é mais britânico, e laid off é ser demitido por corte, sem culpa.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'Where did you get it done?',
              ops: [
                'Where did you get it done?',
                'When did you get it done?',
                'Where did you get it, Don?'
              ],
              c: 0
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Vou mandar consertar meu celular."',
              r: [
                'I\'m going to have my phone fixed.',
                'I\'m going to get my phone fixed.',
                'I\'m gonna have my phone fixed.',
                'I\'ll have my phone fixed.'
              ],
              extra: ['fix', 'repair', 'will']
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'I got my hair cut yesterday.'
            }
          ]
        }
      ]
    },
    {
      id: 'enu24',
      titulo: 'Antes do passado',
      conceito: 'had done',
      desc: 'O past perfect, para contar o que já tinha acontecido, e uma notícia completa.',
      licoes: [
        {
          id: 'en14l3',
          titulo: 'O past perfect: tinha feito',
          pre: ['en10l3', 'en5l6'],
          exs: [
            {
              t: 'texto',
              titulo: 'O passado do passado',
              blocos: [
                {
                  p: 'O **past perfect** é o "tinha feito" do português: ((When I arrived, the movie had started.)) (Quando cheguei, o filme já tinha começado.) Ele se forma com **had + particípio**, igual para todas as pessoas.'
                },
                {
                  p: 'Ele mostra que uma ação aconteceu **antes** de outra, as duas no passado. Compare:'
                },
                {
                  tabela: {
                    cab: ['Frase', 'O que aconteceu primeiro'],
                    codigo: [],
                    linhas: [
                      [
                        '((When I got home, my brother left.))',
                        'Eu cheguei, e então meu irmão saiu.'
                      ],
                      [
                        '((When I got home, my brother had left.))',
                        'Meu irmão saiu antes; quando cheguei, ele já não estava.'
                      ]
                    ]
                  }
                },
                {
                  p: '**Quando não precisa.** Se a ordem já está clara, com before ou after, o passado simples basta: ((I ate before I left.)) O past perfect aparece quando você quer deixar claro que algo **já tinha** acontecido, ou numa história, para voltar no tempo.'
                },
                {
                  p: 'Na fala, had vira **\'d**: ((I\'d never seen snow before that trip.)) (Eu nunca tinha visto neve antes daquela viagem.) Cuidado, porque \'d também pode ser would. É o particípio depois (seen) que mostra que é had.'
                },
                {
                  p: '**By the time** forma um par frequente com ele: ((By the time we got there, everyone had left.)) (Quando a gente chegou, todo mundo já tinha ido embora.)'
                },
                {
                  p: '**Uma história para ouvir.** Repare em como o past perfect volta no tempo:'
                },
                {
                  fala: 'Last Friday was a disaster. When I got to the airport, my flight had already left.',
                  trad: 'A última sexta foi um desastre. Quando cheguei ao aeroporto, meu voo já tinha saído.'
                },
                {
                  fala: 'I had checked the time three times, but I hadn\'t noticed that the gate had changed.',
                  trad: 'Eu tinha conferido o horário três vezes, mas não tinha percebido que o portão tinha mudado.'
                },
                {
                  fala: 'Luckily, a kind woman at the desk found me a seat on the next flight. I had never been so happy to see a boarding pass!',
                  trad: 'Por sorte, uma moça simpática no balcão me arrumou um lugar no voo seguinte. Eu nunca tinha ficado tão feliz de ver um cartão de embarque!'
                }
              ]
            },
            {
              t: 'escolha',
              p: '"When I arrived, the party had ended." O que aconteceu?',
              ops: [
                'A festa acabou antes de eu chegar',
                'A festa acabou quando eu cheguei',
                'Eu cheguei e a festa começou'
              ],
              c: 0,
              exp: 'Had ended: a festa já tinha acabado.'
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: 'By the time we ___ there, everyone ___ left.',
              bank: ['got', 'had', 'have', 'get'],
              c: ['got', 'had'],
              exp: 'A chegada no passado simples; o que veio antes, no past perfect.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Eu nunca tinha visto neve."',
              r: ['I had never seen snow( before|).']
            },
            {
              t: 'escolha',
              p: 'Na história, por que a pessoa perdeu o voo?',
              ops: [
                'O portão tinha mudado e ela não percebeu',
                'Ela não conferiu o horário',
                'O voo foi cancelado'
              ],
              c: 0,
              exp: 'I hadn\'t noticed that the gate had changed.'
            },
            {
              t: 'escolha',
              p: 'Em "I\'d never seen it before", o \'d é...',
              ops: ['had, porque vem um particípio depois (seen)', 'would', 'did'],
              c: 0,
              exp: 'Would vem com o verbo na forma básica (I\'d see). Had vem com o particípio (I\'d seen).'
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Quando eu cheguei, o filme já tinha começado."',
              r: [
                'When I arrived, the [[movie|film]] had already started.',
                'When I got there, the [[movie|film]] had already started.'
              ],
              extra: ['has', 'start', 'was']
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'My flight had already left.',
              ops: [
                'My flight had already left.',
                'My flight has already left.',
                'My fight had already left.'
              ],
              c: 0
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'I hadn\'t noticed that the gate had changed.'
            }
          ]
        },
        {
          id: 'en14l4',
          titulo: 'Uma notícia para ouvir',
          pre: ['en14l3', 'en12l2'],
          exs: [
            {
              t: 'texto',
              titulo: 'Uma notícia',
              blocos: [
                {
                  p: 'Notícias em inglês usam muito a voz passiva e o past perfect. Ouça e leia esta, que é inventada, mas no estilo de um jornal. Antes, faça o skimming: leia só a primeira frase de cada parágrafo.'
                },
                {
                  fala: 'A rare painting that had been missing for over forty years was found last week in a small town in the south of Brazil.',
                  trad: 'Uma pintura rara que estava desaparecida havia mais de quarenta anos foi encontrada na semana passada numa cidade pequena do sul do Brasil.'
                },
                {
                  fala: 'The painting was stolen from a museum in Rio de Janeiro in the nineteen eighties. At the time, the police had no clues, and the case was eventually closed.',
                  trad: 'A pintura foi roubada de um museu no Rio de Janeiro nos anos 1980. Na época, a polícia não tinha pistas, e o caso acabou sendo encerrado.'
                },
                {
                  fala: 'It was discovered by a retired teacher, who had bought it at a garage sale without knowing its value.',
                  trad: 'Ela foi descoberta por uma professora aposentada, que a tinha comprado num bazar de garagem sem saber o valor.'
                },
                {
                  fala: 'Experts say the painting will be returned to the museum next month. The teacher, who has received a reward, said she had always thought it was just a pretty picture.',
                  trad: 'Especialistas dizem que a pintura será devolvida ao museu no mês que vem. A professora, que recebeu uma recompensa, disse que sempre tinha achado que era só um quadro bonito.'
                },
                {
                  vocab: [
                    ['missing', 'desaparecido'],
                    ['clue', 'pista'],
                    ['retired', 'aposentado'],
                    [
                      'garage sale',
                      'bazar de garagem',
                      'quando alguém vende coisas usadas na frente de casa'
                    ],
                    ['reward', 'recompensa']
                  ]
                },
                {
                  dica: 'Repare em como a notícia quase não diz quem fez as coisas: was found, was stolen, was closed, will be returned. É a voz passiva fazendo o seu trabalho.',
                  rotulo: 'A passiva na notícia'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual é a ideia principal da notícia?',
              ops: [
                'Uma pintura roubada há décadas foi encontrada por acaso',
                'Um museu foi roubado na semana passada',
                'Uma professora pintou um quadro famoso'
              ],
              c: 0,
              exp: 'O primeiro parágrafo já resume a notícia, como quase sempre nos jornais.'
            },
            {
              t: 'escolha',
              p: 'Quem encontrou a pintura?',
              ops: [
                'Uma professora aposentada, que a comprou sem saber o valor',
                'A polícia',
                'Os especialistas do museu'
              ],
              c: 0,
              exp: 'It was discovered by a retired teacher.'
            },
            {
              t: 'escolha',
              p: '"The case was eventually closed." O que quer dizer?',
              ops: [
                'O caso acabou sendo encerrado',
                'O caso foi fechado de vez em quando',
                'O caso foi reaberto'
              ],
              c: 0,
              exp: 'Eventually é "no fim das contas", um falso cognato que você viu no nível 12.'
            },
            {
              t: 'escolha',
              p: 'O que vai acontecer com a pintura?',
              ops: ['Vai ser devolvida ao museu', 'Vai ser vendida', 'Vai ficar com a professora'],
              c: 0,
              exp: 'The painting will be returned to the museum next month.'
            },
            {
              t: 'escolha',
              p: 'Em "who had bought it at a garage sale", por que o past perfect?',
              ops: [
                'Porque a compra aconteceu antes da descoberta',
                'Porque a ação continua até hoje',
                'Porque é uma pergunta'
              ],
              c: 0,
              exp: 'Primeiro ela comprou; anos depois, descobriram o quadro.'
            },
            {
              t: 'escreva',
              p: 'Traduza para o português: "The painting was stolen in the nineteen eighties."',
              r: [
                '(A pintura foi roubada|O quadro foi roubado) (nos anos|na década de) (1980|oitenta|80).'
              ],
              lingua: 'pt'
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'It was discovered by a retired teacher.'
            }
          ]
        }
      ]
    }
  ]
});
