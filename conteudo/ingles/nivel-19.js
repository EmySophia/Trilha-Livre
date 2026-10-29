/* Trilha Livre · Inglês do zero · Nível 19: Escrever e argumentar (B2)
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md.
   ((frase)) tem botão de ouvir; [[americano|britânico]] muda com o sotaque escolhido. */

nivel({
  curso: 'ingles',
  n: 19,
  titulo: 'Escrever e argumentar',
  faixa: 'B2',
  desc: 'O tom certo para cada pessoa, e-mails formais e informais, como organizar uma opinião e como suavizar o que se diz.',
  videos: [
    {
      titulo: 'English with Lucy',
      canal: 'Lucy Earl',
      obs: 'como escrever e-mails formais e informais em inglês',
      url: 'https://www.youtube.com/@EnglishwithLucy'
    },
    {
      titulo: 'BBC Learning English',
      canal: 'BBC',
      obs: 'vídeos sobre linking words e escrita de opinião',
      url: 'https://www.youtube.com/@bbclearningenglish'
    },
    {
      tipo: 'texto',
      titulo: 'Dicionário Cambridge',
      canal: 'Cambridge',
      obs: 'confira o sentido e o tom de uma palavra antes de usar num texto formal',
      url: 'https://dictionary.cambridge.org/pt/'
    }
  ],
  unidades: [
    {
      id: 'enu32',
      titulo: 'Escrever com o tom certo',
      conceito: 'Dear... · Moreover · It seems',
      desc: 'Registro formal e informal, textos de opinião e o hedging, o jeito de não soar absoluto.',
      licoes: [
        {
          id: 'en19l1',
          titulo: 'Formal ou informal: e-mails',
          pre: ['en15l2'],
          exs: [
            {
              t: 'texto',
              titulo: 'O tom certo para cada pessoa',
              blocos: [
                {
                  p: 'O mesmo pedido muda muito conforme a pessoa. Isso se chama **registro**, e errar o tom é tão perceptível quanto errar a gramática: um e-mail informal demais para um professor parece falta de respeito; um formal demais para um amigo parece frieza.'
                },
                {
                  tabela: {
                    cab: ['Parte', 'Informal', 'Formal'],
                    codigo: [],
                    linhas: [
                      [
                        'abrir',
                        '((Hi Ana,)) ((Hey!))',
                        '((Dear Ms. Silva,)) ((Dear Sir or Madam,))'
                      ],
                      [
                        'começar',
                        '((Hope you\'re well!))',
                        '((I hope this email finds you well.)) ((I am writing to...))'
                      ],
                      [
                        'pedir',
                        '((Can you send me...?))',
                        '((Could you please send me...?)) ((I would be grateful if you could...))'
                      ],
                      [
                        'fechar',
                        '((Talk soon!)) ((Cheers,))',
                        '((I look forward to hearing from you.)) ((Kind regards,))'
                      ]
                    ]
                  }
                },
                {
                  p: '**Na escrita formal**, as contrações costumam ser evitadas (I am, e não I\'m), as frases ficam mais completas e os pedidos vêm suavizados com could, would e please.'
                },
                {
                  p: '**Dear** abre quase qualquer e-mail formal, e não tem o sentido carinhoso de "querido": é o nosso "prezado". Quando você não sabe o nome de quem vai ler, use ((Dear Sir or Madam,)) ou, cada vez mais comum, ((Dear Hiring Manager,)), para uma vaga.'
                },
                {
                  p: '**Ms.** é o tratamento para mulheres que não depende do estado civil, e é o padrão hoje; Mr. é para homens. No Reino Unido, eles aparecem sem o ponto: Ms Silva, Mr Lima.'
                },
                { p: 'Um exemplo de e-mail formal, para um estágio:' },
                {
                  fala: 'Dear Ms. Carter, I am writing to apply for the internship advertised on your website.',
                  trad: 'Prezada Sra. Carter, escrevo para me candidatar ao estágio anunciado no seu site.'
                },
                {
                  fala: 'I am a second-year university student, and I would be grateful for the opportunity to learn from your team.',
                  trad: 'Sou estudante do segundo ano da faculdade e ficaria grato pela oportunidade de aprender com a sua equipe.'
                },
                {
                  fala: 'Please find my [[résumé|CV]] attached. I look forward to hearing from you. Kind regards, Lucas Lima.',
                  trad: 'Segue o meu currículo em anexo. Aguardo seu retorno. Atenciosamente, Lucas Lima.'
                },
                {
                  dica: 'Currículo é résumé (ou resume, sem os acentos) nos EUA e CV no Reino Unido. Nos EUA, o résumé costuma ter uma página só, e não leva foto, idade nem estado civil.',
                  rotulo: 'Résumé ou CV?'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual é a melhor abertura para um e-mail a uma empresa, sem saber o nome de quem vai ler?',
              ops: ['Dear Sir or Madam,', 'Hey guys!', 'Dear friend,'],
              c: 0,
              exp: 'Dear Sir or Madam é a abertura formal clássica.'
            },
            {
              t: 'escolha',
              p: 'Qual pedido é o mais formal?',
              ops: [
                'I would be grateful if you could send me the information.',
                'Send me the info.',
                'Can you send me the info?'
              ],
              c: 0,
              exp: 'Would e could suavizam o pedido.'
            },
            {
              t: 'escolha',
              p: 'Qual é o fecho de um e-mail formal?',
              ops: ['Kind regards,', 'Cheers,', 'Love,'],
              c: 0,
              exp: 'Kind regards é o "atenciosamente".'
            },
            {
              t: 'escolha',
              p: 'Na escrita formal, o que se costuma evitar?',
              ops: ['Contrações, como I\'m e don\'t', 'Verbos no passado', 'A palavra please'],
              c: 0,
              exp: 'Num texto formal, as palavras aparecem inteiras: I am, do not.'
            },
            {
              t: 'escreva',
              p: 'Reescreva de um jeito formal: "Can you send me the form?"',
              r: [
                '(Could|Would) you please send me the form?',
                'Could you send me the form, please?',
                'I would be grateful if you could send me the form.',
                'Would you mind sending me the form?'
              ]
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Escrevo para me candidatar à vaga."',
              r: 'I am writing to apply for the position.',
              extra: ['applying', 'candidate', 'job']
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'I look forward to hearing from you.'
            }
          ]
        },
        {
          id: 'en19l2',
          titulo: 'Argumentar: firstly, however, in conclusion',
          pre: ['en13l4', 'en19l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Organizar uma opinião',
              blocos: [
                {
                  p: 'Num texto de opinião em inglês, a estrutura costuma ser bem clara: uma introdução com a sua posição, um parágrafo para cada argumento e uma conclusão. As palavras de ligação mostram ao leitor onde ele está:'
                },
                {
                  tabela: {
                    cab: ['Função', 'Expressões'],
                    codigo: [],
                    linhas: [
                      [
                        'dar a opinião',
                        '((In my opinion,)) ((I believe that)) ((From my point of view,))'
                      ],
                      ['ordenar', '((Firstly,)) ((Secondly,)) ((Finally,))'],
                      ['acrescentar', '((Moreover,)) ((Furthermore,)) ((In addition,))'],
                      ['dar um exemplo', '((For example,)) ((For instance,)) ((such as))'],
                      ['contrastar', '((However,)) ((On the other hand,)) ((Nevertheless,))'],
                      ['concluir', '((In conclusion,)) ((To sum up,)) ((Overall,))']
                    ]
                  }
                },
                {
                  p: '**Reconheça o outro lado.** Um bom argumento mostra que você considerou a opinião contrária antes de responder a ela: ((Some people argue that..., but...)) ((It is true that... However, ...))'
                },
                {
                  p: '**Cuidado com os falsos amigos:** actually é "na verdade", e não "atualmente" (currently); eventually é "no fim", e não "eventualmente"; e pretend é fingir, e não pretender (intend).'
                },
                { p: 'Ouça um parágrafo de exemplo:' },
                {
                  fala: 'Some people argue that social media brings people together. It is true that it helps us keep in touch with friends who are far away.',
                  trad: 'Algumas pessoas argumentam que as redes sociais aproximam as pessoas. É verdade que elas nos ajudam a manter contato com amigos que estão longe.'
                },
                {
                  fala: 'However, many studies suggest that heavy users feel lonelier, not less lonely. Moreover, the time we spend online is often time we could spend with people face to face.',
                  trad: 'No entanto, muitos estudos sugerem que quem usa muito se sente mais sozinho, e não menos. Além disso, o tempo que passamos na internet muitas vezes é um tempo que poderíamos passar com as pessoas pessoalmente.'
                },
                {
                  fala: 'In conclusion, social media can connect us, but only if we use it in moderation.',
                  trad: 'Em suma, as redes sociais podem nos conectar, mas só se as usarmos com moderação.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual palavra acrescenta um argumento na mesma direção?',
              ops: ['Moreover', 'However', 'Nevertheless'],
              c: 0,
              exp: 'Moreover: além disso.'
            },
            {
              t: 'escolha',
              p: 'No parágrafo, o que o However introduz?',
              ops: [
                'A resposta à opinião de que as redes aproximam as pessoas',
                'Um exemplo',
                'A conclusão'
              ],
              c: 0,
              exp: 'However marca o contraste com o que "some people argue".'
            },
            {
              t: 'escolha',
              p: 'Qual é a posição final do autor?',
              ops: [
                'As redes sociais podem conectar, desde que usadas com moderação',
                'As redes sociais só fazem mal',
                'As redes sociais sempre aproximam as pessoas'
              ],
              c: 0,
              exp: 'A conclusão está na última frase.'
            },
            {
              t: 'escolha',
              p: 'Qual expressão começa a conclusão de um texto?',
              ops: ['To sum up,', 'For instance,', 'Moreover,'],
              c: 0,
              exp: 'To sum up: resumindo.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Por outro lado, é mais caro."',
              r: ['On the other hand, it is more expensive.']
            },
            {
              t: 'monte',
              p: 'Monte a frase: "Algumas pessoas argumentam que é perigoso."',
              r: 'Some people argue that it is dangerous.',
              extra: ['peoples', 'discuss', 'what'],
              exp: 'Argue é argumentar; discuss é discutir um assunto.'
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'In conclusion, social media can connect us.'
            }
          ]
        },
        {
          id: 'en19l3',
          titulo: 'Suavizar: o inglês que não é direto demais',
          pre: ['en19l2', 'en17l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Hedging',
              blocos: [
                {
                  p: 'Em textos e conversas mais formais, o inglês costuma **suavizar** as afirmações, para não soar arrogante ou absoluto. Isso se chama **hedging**. Compare:'
                },
                {
                  tabela: {
                    cab: ['Direto demais', 'Suavizado'],
                    codigo: [],
                    linhas: [
                      ['((This is wrong.))', '((I\'m not sure this is right.))'],
                      ['((Everyone hates it.))', '((Many people seem to dislike it.))'],
                      ['((This will fail.))', '((This might not work as expected.))'],
                      ['((Your idea is bad.))', '((I\'m not sure that idea would work.))']
                    ]
                  }
                },
                {
                  vocab: [
                    ['It seems that...', 'Parece que...'],
                    [
                      'tend to',
                      'tender a, costumar',
                      'People tend to sleep less when they are stressed.'
                    ],
                    ['to some extent', 'até certo ponto'],
                    ['It could be argued that...', 'Pode-se argumentar que...'],
                    ['generally', 'em geral'],
                    ['I\'d say...', 'Eu diria...'],
                    ['slightly', 'um pouco, levemente']
                  ]
                },
                {
                  p: '**No trabalho e na universidade**, frases como ((The results suggest that...)) (os resultados sugerem que...) são preferidas a ((The results prove that...)), porque raramente algo fica provado de vez.'
                },
                {
                  p: '**O understatement britânico.** No Reino Unido, é comum dizer menos do que se pensa. ((It\'s not bad)) pode ser um grande elogio, e ((That\'s an interesting idea)), dito com hesitação, às vezes quer dizer que a ideia é ruim. Perceber o tom é parte de chegar ao C1.'
                },
                {
                  dica: 'O português também suaviza: "será que dava para...", "acho que talvez...". A diferença é que, em inglês, a suavização aparece até em textos escritos e em reuniões, onde o português costuma ser mais direto.',
                  rotulo: 'Não é só o inglês'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual frase é a mais suavizada?',
              ops: [
                'It seems that the plan might need some changes.',
                'The plan is wrong.',
                'Change the plan.'
              ],
              c: 0,
              exp: 'It seems e might suavizam a crítica.'
            },
            {
              t: 'escolha',
              p: '"People tend to sleep less when they are stressed." O que o tend to faz?',
              ops: [
                'Mostra que é algo comum, mas não absoluto',
                'Diz que todo mundo, sempre, dorme menos',
                'Dá uma ordem'
              ],
              c: 0,
              exp: 'Tend to: costumar, ter tendência a.'
            },
            {
              t: 'escolha',
              p: 'Um colega britânico diz, com hesitação: "That\'s an interesting idea...". O que ele pode estar querendo dizer?',
              ops: ['Que tem dúvidas sobre a ideia', 'Que adorou a ideia', 'Que não ouviu a ideia'],
              c: 0,
              exp: 'É o understatement: dizer menos do que se pensa.'
            },
            {
              t: 'escreva',
              p: 'Traduza: "Parece que vai chover."',
              r: [
                '(It seems|It looks like|It seems like) (it\'s|it is) going to rain.',
                'It seems that it is going to rain.'
              ]
            },
            {
              t: 'escolha',
              p: 'Num relatório, qual frase soa mais adequada?',
              ops: [
                'The results suggest that the method works.',
                'The results prove that the method is perfect.',
                'The method obviously works.'
              ],
              c: 0,
              exp: 'Suggest é a escolha mais cuidadosa e mais comum em textos acadêmicos.'
            },
            {
              t: 'escolha',
              p: 'O que você ouviu?',
              ouvir: 'I\'d say it\'s slightly better.',
              ops: [
                'I\'d say it\'s slightly better.',
                'I\'d say it\'s quite better.',
                'I said it\'s slightly better.'
              ],
              c: 0
            },
            {
              t: 'escreva',
              p: 'Escreva o que você ouviu',
              ouvir: 'People tend to sleep less when they are stressed.'
            }
          ]
        }
      ]
    }
  ]
});
