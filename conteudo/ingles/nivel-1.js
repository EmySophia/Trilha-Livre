/* Trilha Livre · Inglês do zero · Nível 1: Primeiros passos (A1)
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md.
   ((frase)) tem botão de ouvir; [[americano|britânico]] muda com o sotaque escolhido. */

nivel({
  curso: 'ingles',
  n: 1,
  titulo: 'Primeiros passos',
  faixa: 'A1',
  desc: 'Como o inglês funciona, cumprimentos do jeito que as pessoas falam de verdade, apresentações e o verbo to be.',
  videos: [
    {
      titulo: 'English in Brazil',
      canal: 'Carina Fragozo',
      obs: 'aulas em português sobre pronúncia, vocabulário e as dúvidas mais comuns de brasileiros',
      url: 'https://www.youtube.com/user/carinafragozo'
    },
    {
      titulo: 'BBC Learning English',
      canal: 'BBC',
      obs: 'séries curtas para iniciantes, com legendas, em inglês britânico',
      url: 'https://www.youtube.com/@bbclearningenglish'
    },
    {
      tipo: 'texto',
      titulo: 'Dicionário Cambridge',
      canal: 'Cambridge',
      obs: 'dicionário com o áudio de cada palavra nos dois sotaques, americano e britânico',
      url: 'https://dictionary.cambridge.org/pt/'
    }
  ],
  unidades: [
    {
      id: 'enu1',
      titulo: 'Começando a conversa',
      conceito: 'Hi! How are you?',
      desc: 'Por que o inglês não se lê como se escreve, cumprimentos e apresentações.',
      licoes: [
        {
          id: 'en1l1',
          titulo: 'Por que o inglês não se lê como se escreve',
          exs: [
            {
              t: 'texto',
              titulo: 'Letras de um jeito, som de outro',
              blocos: [
                {
                  p: 'Em português, quem sabe ler consegue falar quase qualquer palavra nova, mesmo sem nunca ter ouvido. Em inglês, não. Repare: ((though)), ((through)), ((tough)) e ((thought)) têm quase as mesmas letras e sons completamente diferentes.'
                },
                {
                  p: '**Por que é assim?** A escrita do inglês foi fixada nos séculos 15 e 16, quando a imprensa chegou à Inglaterra. Bem nessa época, a pronúncia das vogais estava mudando muito (os linguistas chamam isso de Grande Mudança Vocálica). A fala continuou mudando e a escrita ficou parada no tempo. Além disso, o inglês pegou milhares de palavras do francês e do latim e manteve a grafia original delas.'
                },
                {
                  p: 'O resultado são letras que não se pronunciam e vogais que mudam de som. Ouça estas palavras e repare no que some ou muda:'
                },
                {
                  vocab: [
                    ['know', 'saber', 'o k não se pronuncia: soa igual a "no"'],
                    ['island', 'ilha', 'o s é mudo'],
                    ['Wednesday', 'quarta-feira', 'o primeiro d é mudo: duas sílabas só'],
                    ['people', 'pessoas', 'o "eo" soa como um i longo'],
                    ['women', 'mulheres', 'o "wo" soa como "ui"'],
                    ['comfortable', 'confortável', 'três sílabas, não quatro']
                  ]
                },
                {
                  p: '**O que isso muda para você:** aprenda cada palavra pelo som, e não pelas letras. Sempre que aparecer uma palavra nova, ouça antes de tentar ler. É para isso que servem os botões de som deste curso. Toque neles quantas vezes quiser e repita em voz alta.'
                },
                {
                  dica: 'O inglês tem padrões, sim. Eles vão aparecer ao longo do curso: o som do -s, o som do -ed, as vogais curtas e longas. Com o tempo, você começa a adivinhar a pronúncia certa na maioria das vezes.',
                  rotulo: 'A boa notícia'
                },
                {
                  p: 'Para soletrar o seu nome, você vai precisar do nome das letras. As vogais são as que mais confundem, porque têm o nome "trocado" em relação ao português: A se chama "ei", E se chama "i" e I se chama "ai".'
                },
                {
                  tabela: {
                    cab: ['Letra', 'Nome em inglês', 'Cuidado com'],
                    codigo: [],
                    linhas: [
                      ['A', 'parecido com "ei"', 'não é "a"'],
                      ['E', 'parecido com "i"', 'não é "é"'],
                      ['I', 'parecido com "ai"', 'não é "i"'],
                      ['G e J', '"dji" e "djei"', 'o contrário do que parece'],
                      ['H', '"eitch"', ''],
                      ['R', '"ar"', ''],
                      ['W', '"dâbliu"', 'literalmente "u duplo"'],
                      ['Y', '"uai"', ''],
                      [
                        'Z',
                        '"zi" nos EUA e "zéd" no Reino Unido',
                        'uma das diferenças entre os dois países'
                      ]
                    ]
                  }
                },
                { fala: 'How do you spell your name?', trad: 'Como se soletra o seu nome?' },
                { fala: 'My name is Ana. A, N, A.', trad: 'Meu nome é Ana. A, N, A.' }
              ]
            },
            {
              t: 'escolha',
              p: 'Por que a escrita do inglês é tão diferente da pronúncia?',
              ops: [
                'A escrita parou no tempo enquanto a fala continuou mudando, e muitas palavras vieram do francês e do latim com a grafia original',
                'Os ingleses decidiram escrever difícil de propósito',
                'O inglês tem menos letras que o português'
              ],
              c: 0,
              exp: 'A grafia foi fixada há uns 500 anos, no meio de uma grande mudança na pronúncia das vogais. Por isso, aprender pelo som funciona melhor do que tentar ler as letras.'
            },
            {
              t: 'escolha',
              p: 'Ouça ((know)). Qual destas palavras tem exatamente o mesmo som?',
              ops: ['no', 'now', 'knock'],
              c: 0,
              exp: 'O k de know é mudo, então know (saber) e no (não) soam igual. Quem diferencia é o contexto.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'Wednesday',
              ops: ['Wednesday', 'Wedding day', 'Windy day'],
              c: 0,
              exp: 'Wednesday (quarta-feira) tem só duas sílabas: o primeiro d não se pronuncia.'
            },
            {
              t: 'escolha',
              p: 'Em ((island)), qual letra não é pronunciada?',
              ops: ['s', 'l', 'd'],
              c: 0,
              exp: 'Island soa como "ailand". O s entrou na escrita séculos atrás, por engano, por causa de uma palavra parecida do latim.'
            },
            {
              t: 'escolha',
              p: 'Qual é o nome da letra I em inglês?',
              ops: ['Parecido com "ai"', 'Parecido com "i"', 'Parecido com "ei"'],
              c: 0,
              exp: 'As vogais têm nomes "trocados": A é "ei", E é "i" e I é "ai". Isso confunde muito na hora de soletrar e-mails e nomes.'
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'How do you spell your name?',
              exp: 'Spell é soletrar. É a pergunta que você mais vai ouvir ao dizer um nome brasileiro numa ligação ou num balcão.'
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Meu nome é Ana."',
              r: ['My name is Ana.', 'I am Ana.'],
              extra: ['I', 'am', 'Me']
            }
          ]
        },
        {
          id: 'en1l2',
          titulo: 'Oi, tudo bem? Do jeito de verdade',
          exs: [
            {
              t: 'texto',
              titulo: 'How are you? não é uma pergunta',
              blocos: [
                {
                  p: 'Muitos livros ensinam assim: ((Hello, how are you?)), com a resposta ((I am fine, thank you. And you?)). Não está errado, mas quase ninguém fala desse jeito. Soa como um diálogo de livro didático.'
                },
                {
                  p: '**O segredo:** em inglês, ((How are you?)) funciona como o nosso "tudo bem?". É um cumprimento, não uma pergunta de verdade sobre a sua vida. A resposta é curta e quase sempre devolve a pergunta.'
                },
                {
                  dialogo: [
                    ['Lia', 'Hey! How are you?', 'Oi! Tudo bem?'],
                    ['Sam', 'Good, you?', 'Tudo, e você?'],
                    ['Lia', 'Pretty good, thanks.', 'Tudo ótimo, valeu.']
                  ],
                  titulo: 'No corredor da faculdade'
                },
                { p: 'Para cumprimentar, escolha pelo grau de intimidade:' },
                {
                  vocab: [
                    ['Hi!', 'Oi!', 'o mais comum; serve para qualquer pessoa'],
                    ['Hey!', 'Oi! / E aí!', 'mais informal, com amigos e colegas'],
                    [
                      'Hello!',
                      'Olá! / Alô!',
                      'um pouco mais formal; também é o "alô" do telefone'
                    ],
                    ['Good morning!', 'Bom dia!', 'até o meio-dia'],
                    ['Good afternoon!', 'Boa tarde!', 'formal; entre amigos, Hi já basta'],
                    ['Good evening!', 'Boa noite!', 'só ao chegar'],
                    ['Good night!', 'Boa noite!', 'só para se despedir ou ir dormir']
                  ]
                },
                {
                  p: 'Repare nos dois "boa noite". ((Good evening)) é para cumprimentar. ((Good night)) é para ir embora ou ir dormir. Chegar numa festa dizendo "Good night" soa como se você já estivesse saindo.'
                },
                { p: 'Agora, as respostas que as pessoas usam de verdade para How are you:' },
                {
                  vocab: [
                    ['Good, you?', 'Tudo, e você?'],
                    ['I\'m good, thanks!', 'Tô bem, valeu!'],
                    ['Pretty good!', 'Tudo ótimo!'],
                    ['Not bad.', 'Nada mal.', 'parece fraco, mas é uma resposta positiva'],
                    [
                      'Could be better.',
                      'Já estive melhor.',
                      'use quando não está tudo bem: a pessoa vai perguntar o que houve'
                    ]
                  ]
                },
                {
                  dica: 'Você pode ouvir que o "certo" é I\'m well, e não I\'m good. Isso é regra de gramática antiga. Hoje, I\'m good é a resposta normal na conversa, em qualquer país de língua inglesa.',
                  rotulo: 'I\'m good ou I\'m well?'
                },
                {
                  p: 'Duas variações muito comuns. ((What\'s up?)) quer dizer, ao pé da letra, "o que está acontecendo?". Por isso a resposta natural não é "I\'m fine", e sim ((Not much, you?)) (nada de mais, e você?). E no Reino Unido você vai ouvir muito ((You alright?)), que é só um "oi, tudo bem?". Responda ((Yeah, you?)).'
                },
                { p: 'Para se despedir:' },
                {
                  vocab: [
                    ['Bye!', 'Tchau!'],
                    ['See you!', 'Até mais!'],
                    [
                      'See you later!',
                      'Até depois!',
                      'mesmo que vocês não vão se ver mais tarde no mesmo dia'
                    ],
                    ['Take care!', 'Se cuida!'],
                    [
                      'Have a good one!',
                      'Tenha um bom dia!',
                      'comum nos EUA, com quem atende você numa loja'
                    ],
                    [
                      'Cheers!',
                      'Valeu! / Tchau!',
                      'muito britânico: serve de obrigado e de tchau'
                    ]
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Um colega diz "How are you?" ao passar por você no corredor. Qual resposta soa mais natural?',
              ops: ['Good, you?', 'I am fine, thank you very much. And you?', 'I have good.'],
              c: 0,
              exp: 'How are you? de passagem é só um cumprimento: a resposta é curta e devolve a pergunta.'
            },
            {
              t: 'escolha',
              p: 'Alguém pergunta "What\'s up?". Qual resposta combina com essa pergunta?',
              ops: ['Not much, you?', 'I\'m fine, thank you.', 'Up there.'],
              c: 0,
              exp: 'What\'s up? é "o que está rolando?", então a resposta natural é "nada de mais".'
            },
            {
              t: 'escolha',
              p: 'Você chega numa festa às 21h. Como cumprimenta as pessoas?',
              ops: ['Good evening!', 'Good night!', 'Good afternoon!'],
              c: 0,
              exp: 'Good evening é para chegar. Good night é para ir embora ou dormir.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'Have a good one!',
              ops: ['Have a good one!', 'Have a good night!', 'Have a good time!'],
              c: 0,
              exp: 'Have a good one! (tenha um bom dia) é o tchau que o caixa de uma loja nos EUA mais usa.'
            },
            { t: 'escreva', p: 'Escreva o que você ouviu', ouvir: 'See you later!' },
            {
              t: 'escreva',
              p: 'Traduza do jeito que se fala no dia a dia: "Oi! Tudo bem?"',
              r: [
                '(Hi|Hey|Hello)! (How are you|How\'s it going|How are you doing|How\'s everything)?',
                '(Hi|Hey)! What\'s up?'
              ],
              exp: 'How\'s it going? e How are you doing? também são formas comuns de "tudo bem?".'
            },
            {
              t: 'monte',
              p: 'Monte a resposta: "Nada mal, e você?"',
              r: ['Not bad, you?', 'Not bad, and you?'],
              extra: ['good', 'is', 'and']
            },
            {
              t: 'escolha',
              p: 'No Reino Unido, um colega diz "You alright?". O que ele quer saber?',
              ops: [
                'Nada de especial: é só um "oi, tudo bem?"',
                'Se você está machucado',
                'Se você tem razão'
              ],
              c: 0,
              exp: 'You alright? é um cumprimento britânico. Responda Yeah, you? e siga a conversa.'
            }
          ]
        },
        {
          id: 'en1l3',
          titulo: 'Nome, idade e de onde você é',
          pre: ['en1l2'],
          exs: [
            {
              t: 'texto',
              titulo: 'Apresentando-se',
              blocos: [
                {
                  p: 'Para dizer o seu nome: ((My name is Ana.)) ou, mais comum na conversa, ((I\'m Ana.))'
                },
                {
                  p: 'A idade é onde quase todo brasileiro escorrega. Em português, você "tem" 20 anos. Em inglês, a idade é algo que você **é**: ((I\'m 20.)) ou ((I\'m 20 years old.)) Dizer "I have 20 years" soa estranho, como "eu possuo 20 anos".'
                },
                {
                  p: '**Por que é assim?** Para o inglês, a idade é um estado, como estar cansado ou ser alto, e estados usam o verbo to be. A mesma lógica aparece em outras frases que, em português, usam "ter" ou "estar com":'
                },
                {
                  vocab: [
                    ['I\'m hungry.', 'Estou com fome.'],
                    ['I\'m thirsty.', 'Estou com sede.'],
                    ['I\'m cold.', 'Estou com frio.'],
                    ['I\'m afraid.', 'Estou com medo.'],
                    ['You\'re right.', 'Você tem razão.'],
                    ['I\'m 25 years old.', 'Tenho 25 anos.']
                  ]
                },
                {
                  p: 'Para dizer de onde você é: ((I\'m from Brazil.)) (eu sou do Brasil) ou ((I\'m Brazilian.)) (eu sou brasileiro). Repare na letra maiúscula: em inglês, nacionalidades e idiomas sempre começam com maiúscula, porque vêm do nome do país. Brazilian, Portuguese, English. O mesmo vale para o pronome I (eu), que é sempre maiúsculo.'
                },
                {
                  dialogo: [
                    [
                      'Mia',
                      'Hi, I\'m Mia. What\'s your name?',
                      'Oi, eu sou a Mia. Qual é o seu nome?'
                    ],
                    [
                      'João',
                      'I\'m João. Nice to meet you.',
                      'Sou o João. Prazer em conhecer você.'
                    ],
                    [
                      'Mia',
                      'Nice to meet you too. Where are you from?',
                      'O prazer é meu. De onde você é?'
                    ],
                    ['João', 'I\'m from Brazil, from Recife.', 'Sou do Brasil, de Recife.'],
                    ['Mia', 'Oh, cool! Welcome!', 'Que legal! Bem-vindo!']
                  ],
                  titulo: 'Numa aula on-line'
                },
                {
                  p: '((Nice to meet you)) é só para a primeira vez que vocês se veem: meet aqui quer dizer conhecer. Para quem você já conhece, diga ((Nice to see you!)) (que bom te ver!).'
                },
                {
                  dica: 'Em muitos países de língua inglesa, perguntar a idade de um adulto que você acabou de conhecer soa indelicado. Com crianças e entre amigos, tudo bem.',
                  rotulo: 'Costume'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Como se diz "Eu tenho 30 anos"?',
              ops: ['I\'m 30.', 'I have 30 years.', 'I have 30 years old.'],
              c: 0,
              exp: 'A idade usa to be: I\'m 30 ou I\'m 30 years old. O "ter" do português não se traduz aqui.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Estou com fome."',
              r: ['I\'m hungry.'],
              exp: 'Fome, sede, frio e medo são estados, então usam to be: I\'m hungry, I\'m thirsty, I\'m cold, I\'m afraid.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Você tem razão."',
              r: ['You\'re right.'],
              exp: 'Ter razão também é um estado em inglês: be right.'
            },
            {
              t: 'escolha',
              p: 'Qual frase está escrita corretamente?',
              ops: [
                'I\'m Brazilian and I speak Portuguese.',
                'I\'m brazilian and I speak portuguese.',
                'I\'m Brazilian and i speak Portuguese.'
              ],
              c: 0,
              exp: 'Nacionalidades, idiomas e o pronome I são sempre maiúsculos em inglês.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'Nice to meet you.',
              ops: ['Nice to meet you.', 'Nice to see you.', 'Nice to beat you.'],
              c: 0,
              exp: 'Nice to meet you é para quando vocês acabaram de se conhecer. Nice to see you é para quem você já conhece.'
            },
            {
              t: 'monte',
              p: 'Monte a pergunta: "De onde você é?"',
              r: 'Where are you from?',
              extra: ['is', 'of', 'do']
            },
            { t: 'escreva', p: 'Escreva o que você ouviu', ouvir: 'I\'m from Brazil.' },
            {
              t: 'escreva',
              p: 'Traduza: "Meu nome é Carla e eu sou de São Paulo."',
              r: ['(My name is|My name\'s|I\'m) Carla and (I\'m|I come) from São Paulo.'],
              exp: 'I\'m from é o jeito mais comum de dizer de onde você é.'
            }
          ]
        }
      ]
    },
    {
      id: 'enu2',
      titulo: 'O verbo to be',
      conceito: 'am · is · are',
      desc: 'Ser e estar num verbo só, perguntas, negativas e this, that e it.',
      licoes: [
        {
          id: 'en1l4',
          titulo: 'Ser e estar numa palavra só',
          exs: [
            {
              t: 'texto',
              titulo: 'To be: ser e estar',
              blocos: [
                {
                  p: 'O português tem dois verbos, ser e estar. O inglês tem um só: **to be**. ((I am tired.)) (estou cansado) e ((I am a teacher.)) (sou professor) usam o mesmo verbo, e quem mostra se é ser ou estar é o contexto.'
                },
                {
                  tabela: {
                    cab: ['Pessoa', 'Forma completa', 'Contração', 'Em português'],
                    codigo: [],
                    linhas: [
                      ['I', '((I am))', '((I\'m))', 'eu sou / estou'],
                      ['you', '((you are))', '((you\'re))', 'você é / vocês são'],
                      ['he', '((he is))', '((he\'s))', 'ele é'],
                      ['she', '((she is))', '((she\'s))', 'ela é'],
                      ['it', '((it is))', '((it\'s))', 'é (para coisas e animais)'],
                      ['we', '((we are))', '((we\'re))', 'nós somos'],
                      ['they', '((they are))', '((they\'re))', 'eles / elas são']
                    ]
                  }
                },
                {
                  p: '**Por que o inglês nunca deixa o sujeito de fora?** Em português, o verbo muda para cada pessoa: sou, é, somos, são. Por isso dá para dizer só "Somos amigos": o "-mos" já mostra quem é. Os verbos em inglês quase não mudam (are serve para you, we e they), então é o sujeito que carrega essa informação. Por isso "Are friends." não funciona: precisa ser ((We are friends.))'
                },
                {
                  p: 'É também por isso que existe um ((it)) que parece sobrar. "Está chovendo" vira ((It\'s raining.)) "É tarde" vira ((It\'s late.)) O it não quer dizer nada nessas frases: ele só ocupa o lugar do sujeito, que o inglês não deixa vazio.'
                },
                {
                  p: 'Mais uma diferença: antes de uma profissão, o inglês põe ((a)) ou ((an)). Em português dizemos "sou professor"; em inglês é ((I\'m a teacher.)) Para o inglês, você é **um** dos professores que existem.'
                },
                {
                  p: 'E ((you)) serve para você e para vocês. Quando é preciso deixar claro que são várias pessoas, a conversa resolve: ((you guys)) nos EUA, para grupos de qualquer gênero, e ((y\'all)) no sul dos EUA.'
                },
                {
                  dica: 'As contrações (I\'m, you\'re, it\'s) são o normal na fala e nas mensagens. A forma completa aparece em textos formais ou quando você quer dar ênfase: ((I am serious!)) é "eu tô falando sério!".',
                  rotulo: 'Contração ou forma completa?'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Por que "Are friends." não está certo em inglês?',
              ops: [
                'O verbo quase não muda, então o inglês precisa do sujeito para saber quem é',
                'Porque friends está no plural',
                'Porque falta o artigo the'
              ],
              c: 0,
              exp: 'Sem o sujeito, are poderia ser you, we ou they. Por isso: We are friends.'
            },
            {
              t: 'complete',
              p: 'Complete as frases:',
              code: 'She ___ my sister. We ___ very close.',
              bank: ['is', 'are', 'am', 'be'],
              c: ['is', 'are'],
              exp: 'She usa is; we usa are.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Está frio hoje."',
              r: ['It\'s cold today.', 'Today it\'s cold.', 'It\'s cold out today.'],
              exp: 'O inglês precisa de um sujeito, mesmo quando ele não quer dizer nada: It\'s cold.'
            },
            { t: 'escreva', p: 'Traduza: "Nós somos amigos."', r: ['We\'re friends.'] },
            {
              t: 'escolha',
              p: 'Como se diz "Eu sou estudante"?',
              ops: ['I\'m a student.', 'I\'m student.', 'Am a student.'],
              c: 0,
              exp: 'Duas diferenças do português: o sujeito é obrigatório (I) e a profissão leva a ou an.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'They\'re at home.',
              ops: ['They\'re at home.', 'They\'re alone.', 'They\'re at work.'],
              c: 0,
              exp: 'They\'re (eles estão), there (lá) e their (deles) soam igual. Quem diferencia é o contexto.'
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Ele é professor e ela é médica."',
              r: 'He\'s a teacher and she\'s a doctor.',
              extra: ['is', 'an', 'doctors'],
              exp: 'Cada profissão ganha o seu a: a teacher, a doctor.'
            },
            { t: 'escreva', p: 'Escreva o que você ouviu', ouvir: 'It\'s raining again.' }
          ]
        },
        {
          id: 'en1l5',
          titulo: 'Perguntas e negativas com to be',
          pre: ['en1l4'],
          exs: [
            {
              t: 'texto',
              titulo: 'A ordem das palavras faz a pergunta',
              blocos: [
                {
                  p: 'Em português, a pergunta muitas vezes é só a afirmação com outra entonação: "Você está cansado?". Em inglês, a ordem das palavras muda: o verbo to be vai para **antes** do sujeito.'
                },
                {
                  tabela: {
                    cab: ['Afirmação', 'Pergunta'],
                    codigo: [],
                    linhas: [
                      ['((You are tired.))', '((Are you tired?))'],
                      ['((She is here.))', '((Is she here?))'],
                      ['((They are ready.))', '((Are they ready?))']
                    ]
                  }
                },
                {
                  p: 'Com palavra de pergunta (where, what, who, how), ela vem primeiro e o resto segue a mesma inversão: ((Where are you?)), ((What\'s your name?)), ((How old is he?)), ((Who is she?))'
                },
                {
                  p: 'Para negar, o not vem depois do verbo: ((I\'m not hungry.)), ((She isn\'t here.)), ((They aren\'t ready.)) Também se diz ((She\'s not here.)) e ((They\'re not ready.)): as duas contrações estão certas.'
                },
                {
                  p: 'Com I, só existe ((I\'m not)). "I amn\'t" não existe no inglês de hoje.'
                },
                {
                  p: '**Respostas curtas.** Em vez de só Yes ou No, o inglês costuma repetir o sujeito e o verbo: ((Are you tired?)) → ((Yes, I am.)) ou ((No, I\'m not.)) Repare que no "sim" não se contrai: "Yes, I\'m." está errado.'
                },
                {
                  dica: 'Por quê? Uma contração é uma forma fraca, sem acento na fala, e precisa de uma palavra depois para se apoiar. No fim da frase, a palavra precisa soar inteira: Yes, I am. Yes, she is. Yes, they are.',
                  rotulo: 'Por que não Yes, I\'m?'
                },
                {
                  dialogo: [
                    ['Ana', 'Are you ready?', 'Você está pronto?'],
                    ['Ben', 'Almost. Is it far?', 'Quase. É longe?'],
                    [
                      'Ana',
                      'No, it isn\'t. It\'s five minutes from here.',
                      'Não. São cinco minutos daqui.'
                    ],
                    ['Ben', 'Great. Are your friends there?', 'Ótimo. Seus amigos estão lá?'],
                    ['Ana', 'Yes, they are.', 'Estão, sim.']
                  ],
                  titulo: 'Saindo para um show'
                }
              ]
            },
            {
              t: 'escreva',
              p: 'Transforme em pergunta: "You are ready."',
              r: ['Are you ready?'],
              exp: 'O verbo to be vai para antes do sujeito.'
            },
            {
              t: 'escolha',
              p: 'Qual é a resposta curta certa para "Are you hungry?"',
              ops: ['Yes, I am.', 'Yes, I\'m.', 'Yes, I hungry.'],
              c: 0,
              exp: 'No fim da frase, o verbo aparece inteiro: Yes, I am.'
            },
            {
              t: 'complete',
              p: 'Complete as negativas:',
              code: 'I ___ not tired. She ___ here today.',
              bank: ['am', 'isn\'t', 'is', 'aren\'t'],
              c: ['am', 'isn\'t']
            },
            {
              t: 'monte',
              p: 'Monte a pergunta: "Onde eles estão?"',
              r: 'Where are they?',
              extra: ['is', 'do', 'there']
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'Is she your sister?',
              ops: ['Is she your sister?', 'She is your sister.', 'Is he your sister?'],
              c: 0,
              exp: 'Repare na ordem: Is she... é pergunta. She is... seria uma afirmação.'
            },
            { t: 'escreva', p: 'Traduza: "Eu não estou com fome."', r: ['I\'m not hungry.'] },
            {
              t: 'escolha',
              p: 'Qual destas formas NÃO existe em inglês?',
              ops: ['I amn\'t', 'I\'m not', 'She isn\'t'],
              c: 0,
              exp: 'Com I, a negativa é sempre I\'m not.'
            },
            { t: 'escreva', p: 'Escreva o que você ouviu', ouvir: 'Are you ready?' }
          ]
        },
        {
          id: 'en1l6',
          titulo: 'This, that e o it',
          pre: ['en1l4'],
          exs: [
            {
              t: 'texto',
              titulo: 'Perto, longe e o que já foi dito',
              blocos: [
                {
                  p: '**This** é este/isto, para o que está perto. **That** é aquele/aquilo, para o que está longe. No plural, viram **these** e **those**.'
                },
                {
                  tabela: {
                    cab: ['', 'Perto', 'Longe'],
                    codigo: [],
                    linhas: [
                      ['Uma coisa', '((this))', '((that))'],
                      ['Várias coisas', '((these))', '((those))']
                    ]
                  }
                },
                {
                  p: 'Cuidado com a pronúncia de this e these, que confunde muita gente. This tem um i curto e termina em s. These tem um i longo e termina com som de z.'
                },
                { pares: [['this', 'these', 'i curto × i longo']] },
                {
                  p: 'Para apresentar alguém, use this: ((This is my friend Leo.)) Não se diz "He is my friend Leo". Ao telefone, é a mesma coisa: ((Hi, this is Ana.)) (Oi, aqui é a Ana.)'
                },
                {
                  p: 'Depois que uma coisa já foi mencionada, ela vira ((it)): ((What\'s this?)) → ((It\'s a gift.)) (O que é isto? É um presente.)'
                },
                {
                  p: 'That também aparece em várias reações do dia a dia. Vale decorar como blocos:'
                },
                {
                  vocab: [
                    ['That\'s great!', 'Que ótimo!'],
                    ['That\'s right.', 'Isso mesmo.'],
                    ['That\'s it!', 'É isso! / Acabou.'],
                    ['That\'s too bad.', 'Que pena.'],
                    ['That\'s OK.', 'Tudo bem. / Não tem problema.']
                  ]
                }
              ]
            },
            {
              t: 'complete',
              p: 'Complete:',
              code: '___ shoes over there are nice, but ___ shoes here are cheaper.',
              bank: ['Those', 'these', 'This', 'That'],
              c: ['Those', 'these'],
              exp: 'Over there (lá longe) pede those; here (aqui) pede these. Os dois no plural, porque shoes é plural.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'I love these songs.',
              ops: ['I love these songs.', 'I love this song.', 'I love those songs.'],
              c: 0,
              exp: 'These tem i longo e som de z no fim; songs, no plural, confirma.'
            },
            {
              t: 'escolha',
              p: 'Você vai apresentar um amigo. O que diz?',
              ops: ['This is my friend Leo.', 'He is my friend Leo.', 'That my friend is Leo.'],
              c: 0,
              exp: 'Para apresentar alguém, o inglês usa this.'
            },
            {
              t: 'escolha',
              p: 'Uma amiga conta que passou na prova. Qual reação faz sentido?',
              ops: ['That\'s great!', 'That\'s too bad.', 'That\'s it.'],
              c: 0,
              exp: 'That\'s great! é "que ótimo!". That\'s too bad é "que pena".'
            },
            { t: 'escreva', p: 'Traduza: "O que é isto?"', r: ['What\'s this?'] },
            {
              t: 'monte',
              p: 'Monte a frase: "Esses livros são meus."',
              r: ['These books are mine.', 'These are my books.'],
              extra: ['This', 'is', 'my']
            },
            { t: 'escreva', p: 'Escreva o que você ouviu', ouvir: 'That\'s right.' },
            {
              t: 'escreva',
              p: 'Traduza: "Oi, aqui é o Pedro." (ao telefone)',
              r: ['(Hi|Hello|Hey), (this is|it\'s) Pedro( here|).'],
              exp: 'Ao telefone, o inglês usa this is ou it\'s, nunca I am.'
            }
          ]
        }
      ]
    }
  ]
});
