/* Trilha Livre · Inglês do zero · Nível 6: Inglês do dia a dia
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md.
   ((frase)) tem botão de ouvir; [[americano|britânico]] muda com o sotaque escolhido. */

nivel({
  curso: 'ingles',
  n: 6,
  titulo: 'Inglês do dia a dia',
  desc: 'Reações, gírias, abreviações de mensagens, pedidos no café, pedir ajuda e os phrasal verbs que todo mundo usa.',
  videos: [
    {
      titulo: 'Speak English With Vanessa',
      canal: 'Vanessa',
      obs: 'expressões e gírias americanas em conversas de verdade',
      url: 'https://www.youtube.com/@SpeakEnglishWithVanessa'
    },
    {
      titulo: 'English with Lucy',
      canal: 'Lucy Earl',
      obs: 'gírias e expressões britânicas, com o contexto de cada uma',
      url: 'https://www.youtube.com/@EnglishwithLucy'
    },
    {
      titulo: 'English in Brazil',
      canal: 'Carina Fragozo',
      obs: 'expressões do dia a dia explicadas em português',
      url: 'https://www.youtube.com/user/carinafragozo'
    }
  ],
  unidades: [
    {
      id: 'enu11',
      titulo: 'Conversa de verdade',
      conceito: 'No way! · My bad.',
      desc: 'As reações rápidas, as gírias mais ouvidas e a escrita das mensagens.',
      licoes: [
        {
          id: 'en6l1',
          titulo: 'Reações e respostas rápidas',
          pre: ['en1l2'],
          exs: [
            {
              t: 'texto',
              titulo: 'O que dizer enquanto o outro fala',
              blocos: [
                {
                  p: 'Boa parte de uma conversa são reações curtas. São elas que fazem você soar natural, e quase nenhum livro ensina. Aprenda em blocos, sem traduzir palavra por palavra.'
                },
                { p: '**Surpresa:**' },
                {
                  vocab: [
                    ['No way!', 'Não acredito! / Sério?!'],
                    ['Seriously?', 'Sério?'],
                    ['For real?', 'É sério? / Na moral?', 'bem informal'],
                    ['You\'re kidding!', 'Tá brincando!']
                  ]
                },
                { p: '**Concordar:**' },
                {
                  vocab: [
                    ['Exactly!', 'Exatamente!'],
                    ['Totally.', 'Total. / Com certeza.'],
                    ['Same here.', 'Comigo também.'],
                    ['Fair enough.', 'Justo. / Faz sentido.', 'aceitar um argumento'],
                    ['Makes sense.', 'Faz sentido.'],
                    ['Sounds good!', 'Fechado! / Beleza!', 'para aceitar um plano']
                  ]
                },
                {
                  p: '**Eu também e eu também não.** Para concordar com algo positivo, ((Me too.)) Com algo negativo, é ((Me neither.)): "I don\'t like coffee." → "Me neither." Dizer "me too" para uma frase negativa soa como se você estivesse discordando. Nos EUA também se ouve ((Me either.)) com o mesmo sentido.'
                },
                { p: '**Pedir desculpas e tranquilizar:**' },
                {
                  vocab: [
                    ['My bad.', 'Foi mal. / Minha culpa.', 'informal, para coisas pequenas'],
                    ['Sorry about that.', 'Desculpa por isso.'],
                    ['No worries.', 'Sem problema. / Relaxa.'],
                    ['It\'s all good.', 'Tá tudo certo.'],
                    ['Never mind.', 'Deixa pra lá.']
                  ]
                },
                {
                  p: '**Para quando a notícia é ruim:** ((Oh no!)), ((I\'m sorry to hear that.)) (sinto muito) e, entre amigos, ((That sucks.)) (que droga).'
                },
                {
                  dica: 'Whatever (tanto faz) soa desdenhoso e pode ser ofensivo. E Good for you! pode ser sincero ou irônico, dependendo do tom. Na dúvida, prefira That\'s great!',
                  rotulo: 'Cuidado com o tom'
                },
                {
                  dialogo: [
                    [
                      'Ana',
                      'I can\'t come tonight, sorry. I have to work.',
                      'Não vou conseguir ir hoje, desculpa. Tenho que trabalhar.'
                    ],
                    ['Ben', 'No worries! Next time.', 'Sem problema! Fica para a próxima.'],
                    [
                      'Ana',
                      'Oh, and I forgot your book again. My bad!',
                      'Ah, e esqueci o seu livro de novo. Foi mal!'
                    ],
                    [
                      'Ben',
                      'It\'s all good. Bring it on Monday.',
                      'Tá tudo certo. Traz na segunda.'
                    ]
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Um amigo conta que vai morar no Japão. Qual reação combina?',
              ops: ['No way! That\'s amazing!', 'Never mind.', 'My bad.'],
              c: 0,
              exp: 'No way! mostra surpresa.'
            },
            {
              t: 'escolha',
              p: '"I don\'t like horror movies." Você também não gosta. O que diz?',
              ops: ['Me neither.', 'Me too.', 'Me no.'],
              c: 0,
              exp: 'Para concordar com uma frase negativa, use me neither.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Eu também não."',
              r: ['Me neither.', 'Neither do I.', 'Me either.']
            },
            {
              t: 'escolha',
              p: 'Você esbarrou em alguém sem querer, numa situação informal. O que diz?',
              ops: ['My bad!', 'Fair enough.', 'Sounds good!'],
              c: 0,
              exp: 'My bad é o "foi mal" para coisas pequenas.'
            },
            {
              t: 'escolha',
              p: 'Alguém pergunta "Pizza at eight?". Você topa. O que responde?',
              ops: ['Sounds good!', 'Whatever.', 'Never mind.'],
              c: 0,
              exp: 'Sounds good! aceita o plano. Whatever soaria como "tanto faz", meio grosseiro.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'Fair enough.',
              ops: ['Fair enough.', 'Fair enough?', 'Fairly enough.'],
              c: 0,
              exp: 'Fair enough aceita o argumento do outro: "justo, faz sentido".'
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Sem problema, acontece."',
              r: 'No worries, it happens.',
              extra: ['problems', 'happen', 'worry']
            },
            { t: 'escreva', p: 'Escreva o que você ouviu', ouvir: 'You\'re kidding!' }
          ]
        },
        {
          id: 'en6l2',
          titulo: 'Gírias que você vai ouvir',
          pre: ['en6l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Do jeito que as pessoas falam',
              blocos: [
                {
                  p: 'Gíria muda rápido e depende muito de idade, região e grupo. As desta lição são as mais estáveis e mais ouvidas, em séries, jogos, redes e conversas. Primeiro, as que você ouve em qualquer lugar:'
                },
                {
                  vocab: [
                    ['cool', 'legal'],
                    ['awesome', 'incrível'],
                    [
                      'guys',
                      'pessoal, galera',
                      'serve para grupos de qualquer gênero: Hi, guys!'
                    ],
                    ['to hang out', 'sair junto, ficar de boa com alguém'],
                    ['to chill', 'relaxar, ficar de boa'],
                    ['I\'m down.', 'Topo! / Tô dentro.'],
                    ['I\'m in.', 'Tô dentro.'],
                    ['totally', 'totalmente, com certeza'],
                    ['dude', 'cara', 'bem americano']
                  ]
                },
                {
                  p: '**Das redes e dos mais jovens.** Estas aparecem muito em comentários, vídeos e jogos. Entenda todas; use só se combinar com você:'
                },
                {
                  vocab: [
                    [
                      'lowkey',
                      'meio que, discretamente',
                      'I\'m lowkey tired = tô meio cansado'
                    ],
                    ['salty', 'chateado, rancoroso', 'ficou salty porque perdeu'],
                    ['to ghost someone', 'sumir, parar de responder alguém'],
                    ['the vibe', 'a energia, o clima de um lugar'],
                    ['no cap', 'sem mentira, papo reto']
                  ]
                },
                { p: '**Do Reino Unido.** Algumas são bem diferentes do inglês americano:' },
                {
                  vocab: [
                    ['mate', 'amigo, cara', 'Thanks, mate!'],
                    ['cheers', 'valeu / saúde / tchau'],
                    ['brilliant', 'ótimo, demais'],
                    ['rubbish', 'lixo, ruim', 'that film was rubbish'],
                    ['knackered', 'exausto, morto de cansado'],
                    ['gutted', 'arrasado, muito decepcionado'],
                    ['Fancy a coffee?', 'Bora tomar um café?', 'fancy aqui é querer'],
                    ['innit?', 'né?', 'informal, de Londres']
                  ]
                },
                {
                  dialogo: [
                    [
                      'Kim',
                      'Hey guys, wanna hang out later?',
                      'E aí, galera, bora sair mais tarde?'
                    ],
                    ['Tom', 'I\'m down. Where?', 'Topo. Onde?'],
                    [
                      'Kim',
                      'That new café [[downtown|in town]]. It\'s got a really cool vibe.',
                      'Naquele café novo do centro. Tem uma vibe bem legal.'
                    ],
                    ['Tom', 'Awesome. See you there!', 'Demais. Te vejo lá!']
                  ]
                },
                {
                  dica: 'Gíria em excesso, ou fora do grupo certo, soa forçado em qualquer língua. Comece entendendo; o uso vem naturalmente quando você ouve muito.',
                  rotulo: 'Na dúvida'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que quer dizer "I\'m down" quando alguém convida você para algo?',
              ops: ['Topo! Estou dentro.', 'Estou triste.', 'Estou caindo.'],
              c: 0,
              exp: 'Down aqui não é triste: é concordar com o plano.'
            },
            {
              t: 'escolha',
              p: 'Um britânico diz "I\'m knackered." Como ele está?',
              ops: ['Exausto', 'Animado', 'Bêbado'],
              c: 0,
              exp: 'Knackered é morto de cansado, bem britânico.'
            },
            {
              t: 'escolha',
              p: '"He ghosted me." O que aconteceu?',
              ops: ['Ele sumiu e parou de responder', 'Ele me assustou', 'Ele me deu um presente'],
              c: 0,
              exp: 'Ghost, como verbo, é desaparecer sem explicação.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'Do you wanna hang out later?',
              ops: [
                'Do you wanna hang out later?',
                'Do you wanna hang up later?',
                'Do you wanna help out later?'
              ],
              c: 0,
              exp: 'Hang out é sair junto. Hang up é desligar o telefone.'
            },
            {
              t: 'escreva',
              p: 'Traduza para o português: "That movie was rubbish."',
              r: [
                'Aquele filme era um lixo.',
                'Aquele filme foi um lixo.',
                'Esse filme foi um lixo.',
                'Esse filme era um lixo.',
                'Aquele filme foi ruim.',
                'Aquele filme era ruim.',
                'Esse filme foi ruim.',
                'O filme foi um lixo.',
                'O filme era um lixo.',
                'O filme foi ruim.',
                'Aquele filme foi horrível.',
                'Esse filme foi horrível.',
                'O filme foi horrível.',
                'Aquele filme foi uma porcaria.',
                'O filme foi uma porcaria.',
                'Esse filme foi uma porcaria.'
              ],
              lingua: 'pt'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Topo!" (aceitando um convite)',
              r: ['I\'m down!', 'I\'m in!']
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Valeu, cara!" (como um britânico)',
              r: ['Cheers, mate!', 'Thanks, mate!'],
              extra: ['dude', 'thanks', 'man']
            },
            { t: 'escreva', p: 'Escreva o que você ouviu', ouvir: 'That\'s so cool!' }
          ]
        },
        {
          id: 'en6l3',
          titulo: 'Mensagens: lol, btw, idk',
          pre: ['en6l2'],
          exs: [
            {
              t: 'texto',
              titulo: 'Escrever como se fala',
              blocos: [
                {
                  p: 'Em mensagens, comentários e jogos on-line, o inglês encurta tudo. Estas abreviações aparecem o tempo todo:'
                },
                {
                  tabela: {
                    cab: ['Abreviação', 'Por extenso', 'Em português'],
                    codigo: [],
                    linhas: [
                      ['lol', 'laughing out loud', 'kkkk (quase nunca é rir alto de verdade)'],
                      ['omg', 'oh my god', 'meu deus'],
                      ['btw', 'by the way', 'aliás, a propósito'],
                      ['idk', 'I don\'t know', 'não sei'],
                      ['tbh', 'to be honest', 'pra ser sincero'],
                      ['imo', 'in my opinion', 'na minha opinião'],
                      ['brb', 'be right back', 'já volto'],
                      ['ngl', 'not gonna lie', 'não vou mentir'],
                      ['ty / thx', 'thank you / thanks', 'obrigado'],
                      ['np', 'no problem', 'de nada, sem problema'],
                      ['u, ur, r', 'you, your, are', 'você, seu, é/são'],
                      ['dm', 'direct message', 'mensagem privada'],
                      ['asap', 'as soon as possible', 'o quanto antes']
                    ]
                  }
                },
                { p: 'Ouça algumas por extenso, que é como elas aparecem na fala:' },
                {
                  vocab: [
                    ['By the way, are you coming tonight?', 'Aliás, você vem hoje à noite?'],
                    ['To be honest, I don\'t know.', 'Pra ser sincero, não sei.'],
                    ['I\'ll be right back.', 'Já volto.']
                  ]
                },
                {
                  p: '**Um detalhe que pouca gente conta:** em mensagens curtas, o ponto final pode soar seco ou irritado. "ok" é neutro; "ok." pode soar como "tá bom, então." de quem ficou chateado. Muita gente escreve sem ponto justamente por isso.'
                },
                {
                  dica: 'Abreviações são para conversas informais. Num e-mail de trabalho, numa candidatura ou para um professor, escreva tudo por extenso e com pontuação.',
                  rotulo: 'Onde não usar'
                }
              ]
            },
            { t: 'escreva', p: 'Escreva por extenso: btw', r: ['by the way'] },
            { t: 'escreva', p: 'Escreva por extenso: idk', r: ['I don\'t know'] },
            {
              t: 'escolha',
              p: 'O que quer dizer "tbh"?',
              ops: [
                'To be honest: pra ser sincero',
                'To be happy: pra ser feliz',
                'Thanks, bye, hugs'
              ],
              c: 0,
              exp: 'Tbh costuma vir antes de uma opinião sincera.'
            },
            {
              t: 'escolha',
              p: 'Numa mensagem curta, o que "ok." com ponto final pode passar?',
              ops: [
                'Que a pessoa está seca ou chateada',
                'Que ela está muito feliz',
                'Nada: é sempre neutro'
              ],
              c: 0,
              exp: 'Em mensagens, o ponto final às vezes soa como frieza.'
            },
            {
              t: 'escreva',
              p: 'Traduza a mensagem para o português: "brb, my [[mom|mum]] is calling"',
              r: [
                'Já volto, minha mãe está ligando',
                'Já volto, minha mãe tá ligando',
                'Volto já, minha mãe está ligando',
                'Já volto, minha mãe está me ligando',
                'Já volto, minha mãe tá me ligando',
                'Já volto, minha mãe está chamando',
                'Já volto, minha mãe tá chamando',
                'Já volto, minha mãe está me chamando',
                'Já volto, minha mãe tá me chamando'
              ],
              lingua: 'pt'
            },
            {
              t: 'escolha',
              p: 'Onde não é uma boa usar "u" no lugar de "you"?',
              ops: [
                'Num e-mail para uma empresa',
                'Numa mensagem para um amigo',
                'Num comentário num jogo'
              ],
              c: 0,
              exp: 'Em textos formais, sempre por extenso.'
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'By the way, are you coming tonight?'
            }
          ]
        }
      ]
    },
    {
      id: 'enu12',
      titulo: 'Situações do dia a dia',
      conceito: 'Can I get...?',
      desc: 'Pedir no café e no restaurante, pedir ajuda e informação, e os phrasal verbs.',
      licoes: [
        {
          id: 'en6l4',
          titulo: 'No café e no restaurante',
          pre: ['en3l5'],
          exs: [
            {
              t: 'texto',
              titulo: 'Pedindo com educação',
              blocos: [
                {
                  p: 'Em inglês, a educação está mais na **forma da frase** do que no please. "Give me a coffee, please" soa grosseiro, mesmo com please, porque é uma ordem. O natural é pedir com uma pergunta ou com would like:'
                },
                {
                  vocab: [
                    [
                      'Can I get a coffee, please?',
                      'Pode me ver um café, por favor?',
                      'muito comum nos EUA'
                    ],
                    [
                      'Could I have the menu, please?',
                      'Pode me trazer o cardápio, por favor?',
                      'educado em qualquer lugar'
                    ],
                    [
                      'I\'d like the chicken, please.',
                      'Eu queria o frango, por favor.',
                      'I\'d like = I would like'
                    ],
                    ['I\'ll have the soup.', 'Vou querer a sopa.']
                  ]
                },
                {
                  p: '**Por que a pergunta é mais educada?** Ela deixa a outra pessoa com a escolha, ao menos na forma. É a mesma lógica do nosso "você poderia...?". O inglês leva isso mais a sério que o português: pedidos diretos soam como ordens.'
                },
                { p: 'O que você vai ouvir:' },
                {
                  vocab: [
                    ['For here or to go?', 'Para comer aqui ou para viagem?', 'EUA'],
                    ['Eat in or take away?', 'Para comer aqui ou para levar?', 'Reino Unido'],
                    ['Anything else?', 'Mais alguma coisa?'],
                    ['That\'s it, thanks.', 'É só isso, obrigado.'],
                    ['Here you go.', 'Aqui está.'],
                    ['Enjoy!', 'Bom apetite! / Aproveite!']
                  ]
                },
                {
                  dialogo: [
                    ['Barista', 'Hi! What can I get you?', 'Oi! O que vai ser?'],
                    [
                      'Leo',
                      'Can I get a large latte, please?',
                      'Pode me ver um latte grande, por favor?'
                    ],
                    [
                      'Barista',
                      'Sure. For here or to go?',
                      'Claro. Para tomar aqui ou para viagem?'
                    ],
                    ['Leo', 'To go, please.', 'Para viagem, por favor.'],
                    ['Barista', 'Anything else?', 'Mais alguma coisa?'],
                    ['Leo', 'That\'s it, thanks.', 'É só isso, obrigado.']
                  ],
                  titulo: 'Num café',
                  vozes: ['f', 'm']
                },
                {
                  p: 'Para pagar no restaurante: ((Can I have the [[check|bill]], please?)) A conta é check nos EUA e bill no Reino Unido.'
                },
                {
                  dica: 'Nos EUA, a gorjeta não está incluída e é esperada: de 15% a 20% em restaurantes. No Reino Unido, ela costuma ser menor, por volta de 10% a 12,5%, e às vezes já vem na conta como service charge.',
                  rotulo: 'Gorjeta'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual pedido soa mais educado?',
              ops: ['Could I have a water, please?', 'Give me a water, please.', 'I want water.'],
              c: 0,
              exp: 'Pedidos em forma de pergunta soam educados; ordens soam grosseiras, mesmo com please.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Eu queria um café, por favor."',
              r: [
                'I\'d like a coffee(, please|).',
                '(Can|Could|May) I (have|get) a coffee(, please|)?',
                'A coffee(, please|).'
              ]
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'For here or to go?',
              ops: ['For here or to go?', 'For her or to go?', 'Four here or two go?'],
              c: 0,
              exp: 'É a pergunta do caixa nos EUA: para comer aqui ou para viagem?'
            },
            {
              t: 'escolha',
              p: 'O atendente pergunta "Anything else?" e você não quer mais nada. O que responde?',
              ops: ['That\'s it, thanks.', 'Everything.', 'Yes, nothing.'],
              c: 0,
              exp: 'That\'s it é "é só isso".'
            },
            {
              t: 'monte',
              p: 'Monte o pedido: "A conta, por favor."',
              r: 'Can I have the [[check|bill]], please?',
              extra: ['account', 'count', 'pay'],
              exp: 'Conta de restaurante é check (EUA) ou bill (Reino Unido), nunca account.'
            },
            {
              t: 'escolha',
              p: 'Nos EUA, a gorjeta no restaurante...',
              ops: [
                'Não vem na conta e é esperada: de 15% a 20%',
                'É proibida',
                'Já vem sempre incluída'
              ],
              c: 0,
              exp: 'Em restaurantes americanos, quem atende vive em boa parte da gorjeta.'
            },
            { t: 'escreva', p: 'Escreva o que você ouviu', ouvir: 'Here you go. Enjoy!' }
          ]
        },
        {
          id: 'en6l5',
          titulo: 'Pedindo ajuda e informação',
          pre: ['en6l4'],
          exs: [
            {
              t: 'texto',
              titulo: 'Quando você não entendeu',
              blocos: [
                {
                  p: 'As frases mais úteis para quem está aprendendo são as que salvam a conversa quando você se perde. Decore estas como blocos:'
                },
                {
                  vocab: [
                    ['Sorry?', 'Como? / Não entendi.', 'com tom de pergunta'],
                    ['Could you say that again, please?', 'Você pode repetir, por favor?'],
                    [
                      'Could you speak more slowly, please?',
                      'Você pode falar mais devagar, por favor?'
                    ],
                    ['What does "awkward" mean?', 'O que quer dizer "awkward"?'],
                    [
                      'How do you say "saudade" in English?',
                      'Como se diz "saudade" em inglês?'
                    ],
                    ['How do you spell it?', 'Como se escreve?']
                  ]
                },
                {
                  p: '**Excuse me ou sorry?** ((Excuse me)) é para chamar a atenção ou pedir licença, antes de incomodar: "Excuse me, where\'s the station?". ((Sorry)) é para pedir desculpas depois. No Reino Unido, sorry também serve para pedir licença e para "como?".'
                },
                {
                  p: 'Repare em ((What does it mean?)): o verbo mean fica na forma básica porque o does já está lá. É a mesma regra das perguntas no presente.'
                },
                { p: '**Direções:**' },
                {
                  vocab: [
                    [
                      'Where\'s the nearest subway station?',
                      'Onde fica a estação de metrô mais próxima?',
                      'metrô é subway nos EUA e underground ou tube em Londres'
                    ],
                    ['Go straight ahead.', 'Siga em frente.'],
                    ['Turn left at the corner.', 'Vire à esquerda na esquina.'],
                    ['It\'s on your right.', 'Fica à sua direita.'],
                    ['It\'s just around the corner.', 'Fica logo ali, virando a esquina.']
                  ]
                },
                {
                  dica: 'Dizer que você está aprendendo ajuda muito: Sorry, my English isn\'t very good. Could you speak more slowly? Quase todo mundo fica mais paciente.',
                  rotulo: 'Uma frase que abre portas'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Você quer pedir uma informação a um desconhecido na rua. Como começa?',
              ops: ['Excuse me...', 'Sorry for that...', 'Hey you...'],
              c: 0,
              exp: 'Excuse me chama a atenção com educação, antes de pedir algo.'
            },
            {
              t: 'escreva',
              p: 'Como se diz: "O que quer dizer awkward?"',
              r: [
                'What does awkward mean?',
                'What does "awkward" mean?',
                'What is the meaning of awkward?'
              ],
              exp: 'Com does, mean fica na forma básica.'
            },
            {
              t: 'escreva',
              p: 'Peça para a pessoa repetir, com educação.',
              r: [
                'Could you say that again, please?',
                'Can you say that again, please?',
                'Could you repeat that, please?',
                'Can you repeat that, please?',
                'Sorry, could you say that again?',
                'Sorry, could you repeat that?',
                'Could you say that again?',
                'Could you repeat that?',
                'Pardon?',
                'Sorry?'
              ]
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'Turn left at the corner.',
              ops: [
                'Turn left at the corner.',
                'Turn right at the corner.',
                'Turn left after the corner.'
              ],
              c: 0
            },
            {
              t: 'monte',
              p: 'Monte: "Como se diz isso em inglês?"',
              r: 'How do you say this in English?',
              extra: ['speak', 'talk', 'does']
            },
            {
              t: 'escolha',
              p: 'Qual destas perguntas está certa?',
              ops: ['What does it mean?', 'What does it means?', 'What it means?'],
              c: 0,
              exp: 'Depois de does, o verbo fica na forma básica.'
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'Could you speak more slowly, please?'
            }
          ]
        },
        {
          id: 'en6l6',
          titulo: 'Phrasal verbs do dia a dia',
          pre: ['en6l4'],
          exs: [
            {
              t: 'texto',
              titulo: 'Verbo mais uma partícula',
              blocos: [
                {
                  p: '**Phrasal verbs** são verbos com uma partícula (up, out, off, on, down...) que juntos ganham outro significado. ((give)) é dar; ((give up)) é desistir. ((find)) é encontrar; ((find out)) é descobrir.'
                },
                {
                  p: '**Por que os nativos usam tanto?** O inglês tem duas camadas de vocabulário: as palavras germânicas, antigas e do dia a dia, e as latinas, que vieram do francês e soam mais formais. Para quem fala português, as latinas parecem naturais: discover, abandon, continue. Mas na conversa os nativos preferem os phrasal verbs: find out, give up, go on. Usar só as latinas deixa você parecendo um documento oficial.'
                },
                { p: 'A partícula costuma dar uma pista do sentido:' },
                {
                  tabela: {
                    cab: ['Partícula', 'Ideia', 'Exemplos'],
                    codigo: [],
                    linhas: [
                      [
                        'up',
                        'completar, aumentar, para cima',
                        '((give up)), ((eat up)), ((wake up)), ((pick up))'
                      ],
                      [
                        'out',
                        'para fora, até o fim, descobrir',
                        '((find out)), ((figure out)), ((run out of))'
                      ],
                      [
                        'off',
                        'desligar, se afastar',
                        '((turn off)), ((take off)), ((log off))'
                      ],
                      ['on', 'ligar, continuar', '((turn on)), ((go on)), ((put on))']
                    ]
                  }
                },
                {
                  vocab: [
                    ['wake up', 'acordar'],
                    ['turn on / turn off', 'ligar / desligar'],
                    ['look for', 'procurar'],
                    ['find out', 'descobrir'],
                    ['figure out', 'entender, resolver'],
                    ['give up', 'desistir'],
                    ['come up with', 'ter uma ideia, inventar'],
                    ['run out of', 'ficar sem'],
                    ['pick up', 'buscar alguém, pegar'],
                    ['put on / take off', 'vestir / tirar (roupa); take off também é decolar']
                  ]
                },
                {
                  p: '**Onde fica o pronome:** com muitos phrasal verbs, o pronome vai **no meio**: ((Turn it off.)) e não "Turn off it". ((I\'ll pick you up at eight.)) (Busco você às oito.)'
                },
                {
                  dica: 'Não tente decorar listas enormes. Aprenda cada phrasal verb numa frase, como nos exemplos, e ele fica.',
                  rotulo: 'Como aprender'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que quer dizer "give up"?',
              ops: ['Desistir', 'Dar para cima', 'Doar'],
              c: 0,
              exp: 'Give é dar, mas give up é desistir.'
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: 'Can you turn ___ the light? I can\'t sleep.',
              bank: ['off', 'on', 'out'],
              c: ['off'],
              exp: 'Para dormir, desligar a luz: turn off.'
            },
            { t: 'escreva', p: 'Traduza: "Eu desisti."', r: ['I gave up.'] },
            {
              t: 'escolha',
              p: 'Qual está certa?',
              ops: ['Turn it off.', 'Turn off it.', 'Turn it of.'],
              c: 0,
              exp: 'O pronome fica no meio: turn it off.'
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Nós ficamos sem leite."',
              r: 'We ran out of milk.',
              extra: ['run', 'from', 'without']
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'I\'ll pick you up at eight.',
              ops: [
                'I\'ll pick you up at eight.',
                'I\'ll pick it up at eight.',
                'I\'ll call you up at eight.'
              ],
              c: 0,
              exp: 'Pick someone up: buscar alguém.'
            },
            {
              t: 'escolha',
              p: 'Por que os nativos preferem "find out" a "discover" numa conversa?',
              ops: [
                'Phrasal verbs são do inglês do dia a dia; as palavras latinas soam mais formais',
                'Porque discover está errado',
                'Porque find out é mais curto'
              ],
              c: 0,
              exp: 'As duas existem, mas cada uma combina com um tipo de situação.'
            },
            { t: 'escreva', p: 'Escreva o que você ouviu', ouvir: 'I can\'t figure it out.' }
          ]
        }
      ]
    }
  ]
});
