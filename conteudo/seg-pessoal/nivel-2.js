/* Trilha Livre · Segurança para todo mundo · Nível 2: Senhas e contas
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'seg-pessoal',
  n: 2,
  titulo: 'Senhas e contas',
  desc: 'Senhas que resistem, gerenciador de senhas, verificação em duas etapas e como recuperar uma conta.',
  videos: [
    {
      tipo: 'texto',
      titulo: 'Have I Been Pwned',
      canal: 'Troy Hunt',
      obs: 'consulte se o seu e-mail apareceu em algum vazamento conhecido',
      url: 'https://haveibeenpwned.com/'
    },
    {
      tipo: 'texto',
      titulo: 'Bitwarden',
      canal: 'Bitwarden',
      obs: 'gerenciador de senhas de código aberto, com plano gratuito',
      url: 'https://bitwarden.com/'
    }
  ],
  unidades: [
    {
      id: 'spu2',
      titulo: 'Senhas fortes',
      conceito: 'tamanho',
      desc: 'O que faz uma senha resistir e por que nunca repetir.',
      licoes: [
        {
          id: 'sp2l1',
          titulo: 'O que faz uma senha forte',
          exs: [
            {
              t: 'texto',
              titulo: 'Como uma senha é descoberta',
              blocos: [
                {
                  p: 'Quase ninguém “adivinha” uma senha olhando para você. Ela é descoberta por um programa que testa milhões de combinações por segundo, começando pelas mais comuns: 123456, senha, o nome do time, datas de aniversário.'
                },
                {
                  p: 'Por isso uma senha forte tem duas qualidades: **não está em nenhuma lista de senhas comuns** e tem **combinações demais** para testar todas.'
                },
                {
                  p: 'Faça a conta com uma senha só de números. Cada dígito tem 10 possibilidades. Com 4 dígitos, são 10 × 10 × 10 × 10 = 10.000 combinações.'
                }
              ]
            },
            {
              t: 'numero',
              p: 'Uma senha de 4 dígitos tem 10.000 combinações. Quantas combinações tem uma senha de 6 dígitos?',
              r: 1000000,
              dica: 'Cada dígito a mais multiplica por 10.',
              exp: '10 multiplicado por ele mesmo 6 vezes dá 1.000.000. Parece muito, mas não é: veja o próximo exercício.'
            },
            {
              t: 'numero',
              p: 'Um programa comum testa 1 milhão de senhas por segundo. Em quantos segundos ele testa todas as senhas de 6 dígitos?',
              r: 1,
              unidade: 's',
              exp: 'Um segundo. Senhas curtas e só de números caem na hora. É por isso que o banco bloqueia depois de poucas tentativas erradas.'
            },
            {
              t: 'texto',
              titulo: 'O tamanho é o que mais pesa',
              blocos: [
                {
                  p: 'Cada caractere a mais **multiplica** o número de combinações. Por isso o tamanho pesa mais do que trocar a por @ ou pôr um ponto de exclamação no fim, truques que os programas já conhecem.'
                },
                {
                  tabela: {
                    cab: ['Senha', 'Problema'],
                    codigo: [],
                    linhas: [
                      ['123456', 'a senha mais comum do mundo: é a primeira testada'],
                      ['flamengo2010', 'time e ano: está nas listas'],
                      ['S3nh@!', 'curta, e trocar letra por símbolo não engana'],
                      ['dados mesa chuva violão', 'boa: longa e sem sentido para um programa']
                    ]
                  }
                },
                {
                  dica: 'Uma boa regra: pelo menos 12 caracteres, e de preferência 15 ou mais. E nada que tenha a ver com você, como nome, data ou time.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual destas senhas é a mais forte?',
              ops: ['dados mesa chuva violão', 'Fl@meng0!', 'Ana1990'],
              c: 0,
              exp: 'É a mais longa e não tem nada pessoal. Trocar letras por símbolos, como em Fl@meng0!, é um truque que os programas já testam.'
            },
            {
              t: 'escolha',
              p: 'O que aumenta mais a força de uma senha?',
              ops: [
                'Deixar a senha mais longa',
                'Trocar o a por @',
                'Pôr um ponto de exclamação no fim'
              ],
              c: 0,
              exp: 'Cada caractere a mais multiplica as combinações. As trocas previsíveis quase não ajudam, porque os programas já as conhecem.'
            },
            {
              t: 'escolha',
              p: 'Por que a data de nascimento é uma senha ruim?',
              ops: [
                'Ela é fácil de descobrir, nas redes sociais ou em documentos, e tem poucas combinações',
                'Porque datas têm números',
                'Porque o banco proíbe'
              ],
              c: 0,
              exp: 'Uma data tem 8 dígitos e muita gente sabe a sua, ou acha numa foto de aniversário. É das primeiras coisas que um golpista testa.'
            }
          ]
        },
        {
          id: 'sp2l2',
          titulo: 'Frases-senha',
          exs: [
            {
              t: 'texto',
              titulo: 'Longa e fácil de lembrar',
              blocos: [
                {
                  p: 'Se o tamanho é o que mais pesa, como lembrar de uma senha longa? Use uma **frase-senha**: quatro ou mais palavras sorteadas, sem relação entre si.'
                },
                {
                  p: 'Exemplo: **telhado pipoca girafa lanterna**. São 31 caracteres, é fácil de imaginar (uma girafa comendo pipoca no telhado com uma lanterna) e um programa não tem como adivinhar.'
                },
                {
                  dica: 'As palavras precisam ser sorteadas, e não escolhidas. Uma frase famosa, como um verso de música ou um ditado, já está nas listas dos programas.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual destas é uma boa frase-senha?',
              ops: [
                'caneca trilho abacate novelo',
                'eu te amo para sempre',
                'batatinha quando nasce'
              ],
              c: 0,
              exp: 'Palavras sorteadas, sem relação. As outras duas são frases conhecidas, e frases conhecidas estão nas listas de senhas.'
            },
            {
              t: 'escolha',
              p: 'Por que uma frase-senha costuma ser melhor que uma senha curta cheia de símbolos?',
              ops: [
                'Porque é mais longa e mais fácil de lembrar',
                'Porque os sites não aceitam símbolos',
                'Porque palavras não podem ser testadas por programas'
              ],
              c: 0,
              exp: 'Programas também testam palavras, mas a combinação de quatro palavras sorteadas tem combinações demais. E você lembra dela sem anotar num papel.'
            },
            {
              t: 'texto',
              titulo: 'Quando usar e quando não precisar',
              blocos: [
                {
                  p: 'Você não precisa decorar uma frase-senha para cada site. Decore poucas: a do celular, a do e-mail principal e a do **gerenciador de senhas**, que você vai conhecer na próxima unidade. O gerenciador cria e guarda todas as outras.'
                },
                {
                  p: 'O e-mail principal merece uma das melhores senhas, porque quem entra nele consegue usar o “esqueci minha senha” de quase todas as suas outras contas.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Por que o e-mail principal precisa de uma das senhas mais fortes?',
              ops: [
                'Quem entra no e-mail pode redefinir a senha de quase todas as outras contas',
                'Porque o e-mail guarda as fotos do celular',
                'Porque é a conta mais antiga'
              ],
              c: 0,
              exp: 'O “esqueci minha senha” manda o link para o seu e-mail. Quem controla o e-mail controla todo o resto.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem: como criar uma frase-senha',
              lines: [
                'Sortear quatro ou mais palavras sem relação entre si',
                'Imaginar uma cena com elas, para lembrar',
                'Usar a frase só numa conta importante',
                'Nunca repetir a mesma frase em outro lugar'
              ],
              exp: 'Sorteio, uma imagem para lembrar e uso único. Repetir a frase em outro site anula o cuidado, como você vai ver na próxima lição.'
            }
          ]
        },
        {
          id: 'sp2l3',
          titulo: 'Vazamentos e senhas repetidas',
          exs: [
            {
              t: 'texto',
              titulo: 'O site que vazou não foi o seu banco',
              blocos: [
                {
                  p: 'Sites são invadidos o tempo todo, e listas com e-mails e senhas acabam vendidas ou publicadas. Você não tem controle sobre isso: pode ser uma loja onde você comprou uma vez, anos atrás.'
                },
                {
                  p: 'O perigo começa quando a senha é **repetida**. Com a lista vazada da loja, programas testam o mesmo e-mail e a mesma senha no e-mail, nas redes sociais e nos bancos. Se você usou a mesma senha, eles entram.'
                },
                {
                  dica: 'Esse ataque tem nome em inglês: credential stuffing, algo como “rechear com credenciais”. Ele é automático e acontece em massa.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'A senha de uma loja on-line vazou. Por que isso pode atingir o seu e-mail?',
              ops: [
                'Se você usou a mesma senha nos dois, os programas testam a senha vazada no e-mail',
                'Porque a loja tem acesso ao seu e-mail',
                'Não atinge: cada site é separado'
              ],
              c: 0,
              exp: 'Cada site é separado, mas a sua senha repetida liga todos eles. Uma senha diferente em cada lugar faz o vazamento ficar só naquele site.'
            },
            {
              t: 'escolha',
              p: 'Qual é a melhor proteção contra vazamentos de outros sites?',
              ops: [
                'Usar uma senha diferente em cada conta',
                'Nunca comprar pela internet',
                'Trocar a senha toda semana'
              ],
              c: 0,
              exp: 'Você não controla quem vai ser invadido. Mas, com senhas diferentes, um vazamento não abre as suas outras portas.'
            },
            {
              t: 'texto',
              titulo: 'Como saber se você estava num vazamento',
              blocos: [
                {
                  p: 'O site **Have I Been Pwned** (haveibeenpwned.com) reúne vazamentos conhecidos. Você digita o seu e-mail e vê em quais vazamentos ele apareceu. Muitos gerenciadores de senhas também avisam quando uma senha sua aparece numa lista vazada.'
                },
                {
                  passos: [
                    'Consulte o seu e-mail no Have I Been Pwned',
                    'Troque a senha das contas que apareceram',
                    'Troque também em todo lugar onde você usava a mesma senha',
                    'Ative a verificação em duas etapas nas contas importantes'
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Seu e-mail apareceu num vazamento de um fórum antigo, e você usava a mesma senha no Instagram. O que fazer?',
              ops: [
                'Trocar a senha do fórum e a do Instagram, e ativar a verificação em duas etapas',
                'Trocar só a senha do fórum, que foi o que vazou',
                'Apagar o e-mail'
              ],
              c: 0,
              exp: 'A senha vazada vale em todo lugar onde foi repetida. Troque em todos e ponha uma segunda proteção nas contas importantes.'
            },
            {
              t: 'escolha',
              p: 'Trocar todas as senhas toda semana é necessário?',
              ops: [
                'Não: o mais importante é ter senhas fortes e diferentes, e trocar quando houver vazamento ou suspeita',
                'Sim, senão as senhas vencem',
                'Sim, porque os hackers descobrem qualquer senha em uma semana'
              ],
              c: 0,
              exp: 'Trocas forçadas fazem as pessoas criarem senhas previsíveis, como senha1, senha2. Senha forte, única e trocada quando há motivo funciona melhor.'
            }
          ]
        }
      ]
    },
    {
      id: 'spu3',
      titulo: 'Guardar e proteger as contas',
      conceito: '2 etapas',
      desc: 'Gerenciador de senhas, verificação em duas etapas e recuperação.',
      licoes: [
        {
          id: 'sp2l4',
          titulo: 'Gerenciador de senhas',
          exs: [
            {
              t: 'texto',
              titulo: 'Um cofre para todas as senhas',
              blocos: [
                {
                  p: 'Ninguém consegue decorar uma senha longa e diferente para cada site. Um **gerenciador de senhas** resolve isso: é um aplicativo que cria senhas fortes, guarda todas num cofre trancado e preenche sozinho na hora de entrar.'
                },
                {
                  p: 'Você só precisa lembrar de **uma** senha, a do cofre, chamada de senha mestra. Ela deve ser uma frase-senha forte, que você não usa em mais nenhum lugar.'
                },
                {
                  p: 'Opções gratuitas: o **Bitwarden**, de código aberto, que funciona no celular e no computador; o **KeePassXC**, também aberto, que guarda o cofre num arquivo seu; e o gerenciador que já vem no Google, no iPhone e nos navegadores.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Quantas senhas você precisa decorar usando um gerenciador?',
              ops: [
                'Uma: a senha mestra do cofre',
                'Todas, porque o gerenciador só lembra a dica',
                'Nenhuma'
              ],
              c: 0,
              exp: 'O gerenciador lembra todas as outras. Por isso a senha mestra precisa ser forte e única.'
            },
            {
              t: 'escolha',
              p: 'Por que um gerenciador de senhas ajuda contra golpes de sites falsos?',
              ops: [
                'Ele só preenche a senha no endereço verdadeiro do site; num site falso, ele não reconhece e não preenche',
                'Ele bloqueia todos os sites falsos da internet',
                'Ele avisa a polícia'
              ],
              c: 0,
              exp: 'Se o gerenciador não ofereceu a senha, desconfie: talvez o endereço não seja o que parece. É um alarme que trabalha sozinho.'
            },
            {
              t: 'texto',
              titulo: '“Mas e se roubarem o cofre?”',
              blocos: [
                {
                  p: 'É a dúvida mais comum. O cofre é guardado **cifrado** com a sua senha mestra: sem ela, o arquivo é só um monte de caracteres sem sentido. Por isso a senha mestra precisa ser forte, e de preferência com verificação em duas etapas.'
                },
                {
                  p: 'Comparando os riscos: anotar senhas num caderno ou repetir a mesma senha em todo lugar é muito mais perigoso do que um cofre bem trancado.'
                },
                {
                  dica: 'Guarde num papel, em casa, os códigos de recuperação do gerenciador. Se você esquecer a senha mestra, quase nenhum gerenciador consegue recuperar: é justamente isso que o torna seguro.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que protege o cofre do gerenciador se alguém copiar o arquivo dele?',
              ops: [
                'Ele é cifrado com a senha mestra: sem ela, o conteúdo não pode ser lido',
                'Nada: quem copiar vê todas as senhas',
                'O antivírus'
              ],
              c: 0,
              exp: 'Cifrar é transformar os dados com uma chave. Sem a chave, que vem da senha mestra, não dá para voltar ao texto original.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem: começando a usar um gerenciador',
              lines: [
                'Instalar um gerenciador confiável, de loja oficial',
                'Criar uma senha mestra forte, uma frase-senha',
                'Guardar os códigos de recuperação num papel, em casa',
                'Trocar, aos poucos, a senha de cada conta por uma criada pelo gerenciador'
              ],
              exp: 'Não precisa trocar tudo num dia. Comece pelo e-mail, pelo banco e pelas redes sociais.'
            }
          ]
        },
        {
          id: 'sp2l5',
          titulo: 'Verificação em duas etapas',
          exs: [
            {
              t: 'texto',
              titulo: 'Uma segunda porta',
              blocos: [
                {
                  p: 'A **verificação em duas etapas** pede, além da senha, uma segunda prova de que é você: um código que muda a cada 30 segundos, uma confirmação no celular ou uma chave física. Mesmo que a senha vaze, o golpista para na segunda porta.'
                },
                {
                  p: 'A ideia é juntar duas coisas de tipos diferentes: algo que você **sabe** (a senha) e algo que você **tem** (o celular ou a chave). Roubar as duas ao mesmo tempo é muito mais difícil.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Sua senha vazou, mas a conta tem verificação em duas etapas por aplicativo. O que acontece quando o golpista tenta entrar?',
              ops: [
                'Ele para, porque não tem o código que só aparece no seu celular',
                'Ele entra normalmente',
                'A conta é apagada'
              ],
              c: 0,
              exp: 'A senha sozinha não basta. É por isso que a verificação em duas etapas é o cuidado que mais protege uma conta.'
            },
            {
              t: 'escolha',
              p: 'Senha e código no celular são uma boa dupla porque...',
              ops: [
                'Uma é algo que você sabe e a outra, algo que você tem',
                'São duas senhas',
                'O celular guarda a senha'
              ],
              c: 0,
              exp: 'Dois tipos diferentes de prova. Quem rouba uma lista de senhas não leva o seu celular junto.'
            },
            {
              t: 'texto',
              titulo: 'Nem toda segunda etapa é igual',
              blocos: [
                {
                  tabela: {
                    cab: ['Tipo', 'Segurança', 'Por quê'],
                    codigo: [],
                    linhas: [
                      ['Código por SMS', 'Melhor que nada', 'o golpista pode transferir o seu número para outro chip'],
                      ['Aplicativo autenticador', 'Boa', 'o código é gerado no próprio celular, sem passar pela operadora'],
                      ['Chave de acesso ou chave física', 'A melhor', 'só funciona no site verdadeiro, então nem um site falso consegue usá-la']
                    ]
                  }
                },
                {
                  p: 'Ative a verificação em duas etapas, nesta ordem de prioridade: no e-mail principal, no WhatsApp, nas redes sociais e no gerenciador de senhas. Os bancos já fazem algo parecido com o celular cadastrado.'
                },
                {
                  dica: 'Ao ativar, o site mostra códigos de recuperação. Guarde num papel, em casa. Eles salvam a conta se você perder o celular.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Por que o código por SMS é o tipo mais fraco de segunda etapa?',
              ops: [
                'O golpista pode conseguir transferir o seu número para um chip dele e receber os SMS',
                'Porque SMS é pago',
                'Porque o código por SMS nunca chega'
              ],
              c: 0,
              exp: 'Esse golpe se chama troca de chip. Ainda assim, SMS é muito melhor do que só a senha. Se puder, prefira um aplicativo autenticador.'
            },
            {
              t: 'escolha',
              p: 'Ao ativar a verificação em duas etapas, o site mostra códigos de recuperação. O que fazer com eles?',
              ops: [
                'Guardar num papel, num lugar seguro de casa',
                'Mandar para o próprio WhatsApp',
                'Ignorar, porque não servem para nada'
              ],
              c: 0,
              exp: 'Se você perder o celular, eles são a única forma de voltar à conta. No WhatsApp ou no e-mail, eles se perdem junto com a conta que deveriam salvar.'
            }
          ]
        },
        {
          id: 'sp2l6',
          titulo: 'Recuperar uma conta',
          exs: [
            {
              t: 'texto',
              titulo: 'Prepare a saída antes de precisar',
              blocos: [
                {
                  p: 'Toda conta importante tem um caminho de recuperação: um e-mail e um telefone de recuperação, e os códigos que você guardou. Se eles estiverem desatualizados, perder o acesso pode ser para sempre.'
                },
                {
                  passos: [
                    'Confira se o e-mail e o telefone de recuperação ainda são seus',
                    'Guarde os códigos de recuperação num papel',
                    'Anote, em casa, quais contas usam qual e-mail'
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Você trocou de número e esqueceu de atualizar o telefone de recuperação do e-mail. Qual é o risco?',
              ops: [
                'Se perder a senha, o código de recuperação vai para um número que não é mais seu',
                'Nenhum: o e-mail funciona igual',
                'O e-mail é apagado na hora'
              ],
              c: 0,
              exp: 'E o número antigo pode ser entregue a outra pessoa pela operadora. Atualize o telefone de recuperação sempre que trocar de número.'
            },
            {
              t: 'texto',
              titulo: 'O falso suporte',
              blocos: [
                {
                  p: 'Quem perde uma conta fica desesperado, e golpistas sabem disso. Nos comentários e nas mensagens aparecem “técnicos” que prometem recuperar o seu Instagram em minutos, mediante pagamento ou pedindo códigos e senhas. É golpe.'
                },
                {
                  p: 'Recupere sempre pelo caminho oficial: o botão “Esqueci a senha” do próprio aplicativo e as páginas de ajuda do site. As empresas não mandam mensagem oferecendo recuperar a sua conta.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Seu Instagram foi invadido. Um perfil comenta: “Recupero sua conta em 10 minutos, me chama no direct”. O que fazer?',
              ops: [
                'Ignorar e seguir a recuperação oficial do próprio aplicativo',
                'Chamar, porque está oferecendo ajuda',
                'Pagar só depois que ele recuperar'
              ],
              c: 0,
              exp: 'É o golpe do falso suporte: ele vai pedir dinheiro, códigos ou a sua senha nova. A recuperação é sempre pelo caminho oficial.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem o que fazer quando uma conta é invadida',
              lines: [
                'Tentar entrar e trocar a senha pelo caminho oficial',
                'Usar a recuperação oficial se a senha não funcionar mais',
                'Encerrar as sessões abertas em outros aparelhos',
                'Ativar a verificação em duas etapas',
                'Avisar os contatos para ignorarem pedidos estranhos vindos da conta'
              ],
              exp: 'Primeiro recuperar o acesso, depois fechar as portas que o invasor abriu. E avisar quem confia em você, porque o invasor costuma pedir dinheiro aos seus contatos.'
            },
            {
              t: 'escolha',
              p: 'Por que avisar os contatos depois de uma conta invadida?',
              ops: [
                'Porque o invasor costuma usar a conta para pedir dinheiro ou aplicar golpes nos seus contatos',
                'Por educação',
                'Porque a empresa exige'
              ],
              c: 0,
              exp: 'Os seus amigos confiam em mensagens que vêm de você. Um aviso rápido nos stories ou num grupo da família evita que alguém caia.'
            }
          ]
        }
      ]
    }
  ]
});
