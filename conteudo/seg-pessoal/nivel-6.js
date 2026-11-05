/* Trilha Livre · Segurança para todo mundo · Nível 6: Privacidade e direitos
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'seg-pessoal',
  n: 6,
  titulo: 'Privacidade e direitos',
  desc: 'O que você expõe sem perceber, a LGPD, cuidar da família, denunciar e os próximos passos.',
  videos: [
    {
      tipo: 'texto',
      titulo: 'Lei Geral de Proteção de Dados (Lei 13.709/2018)',
      canal: 'Planalto',
      obs: 'o texto completo da LGPD; os direitos do titular estão no artigo 18',
      url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm'
    },
    {
      tipo: 'texto',
      titulo: 'SaferNet Brasil',
      canal: 'SaferNet',
      obs: 'denúncias de crimes na internet e orientação sobre segurança',
      url: 'https://new.safernet.org.br/'
    }
  ],
  unidades: [
    {
      id: 'spu9',
      titulo: 'Seus dados',
      conceito: 'privacidade',
      desc: 'O que se expõe sem perceber, a LGPD e a família.',
      licoes: [
        {
          id: 'sp6l1',
          titulo: 'O que você mostra sem perceber',
          exs: [
            {
              t: 'texto',
              titulo: 'Cada post é uma peça',
              blocos: [
                {
                  p: 'Um post sozinho parece inofensivo. Mas golpistas juntam as peças: o nome da escola no uniforme do filho, a foto da fachada da casa, a placa do carro, o nome do cachorro, a data do aniversário. Juntando tudo, montam um golpe convincente ou descobrem a resposta de uma pergunta de segurança.'
                },
                {
                  tabela: {
                    cab: ['O que aparece', 'O que revela'],
                    codigo: [],
                    linhas: [
                      ['Foto do cartão de embarque', 'o código da reserva: dá para mexer na sua viagem'],
                      ['“Partiu férias, 15 dias fora!”', 'que a casa está vazia'],
                      ['Foto com documento ou cartão', 'números para fraudes no seu nome'],
                      ['Uniforme da escola das crianças', 'onde elas estão todos os dias']
                    ]
                  }
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual destes posts expõe mais?',
              ops: [
                'A foto do cartão de embarque, com o código e o nome',
                'Uma foto da paisagem da viagem',
                'Uma foto do prato do almoço'
              ],
              c: 0,
              exp: 'Com o código da reserva e o sobrenome, dá para entrar na sua reserva no site da companhia aérea, e até cancelar o voo.'
            },
            {
              t: 'escolha',
              p: 'Por que é melhor postar as fotos das férias depois de voltar?',
              ops: [
                'Anunciar que você está fora mostra que a casa está vazia',
                'Porque as fotos ficam com mais curtidas',
                'Porque a internet é mais rápida em casa'
              ],
              c: 0,
              exp: 'As fotos são as mesmas, mas sem avisar em tempo real onde você está e por quanto tempo.'
            },
            {
              t: 'texto',
              titulo: 'Ajustes que ajudam',
              blocos: [
                {
                  passos: [
                    'Deixe o perfil fechado, se ele é pessoal, e revise quem pode ver o quê',
                    'Desligue a localização nas fotos da câmera, se não precisa dela',
                    'Antes de postar, olhe o fundo da foto: documentos, telas, endereço, placa',
                    'Pense duas vezes antes de postar fotos de crianças com uniforme ou em lugares que elas frequentam'
                  ]
                },
                {
                  dica: 'As respostas de perguntas de segurança, como o nome do primeiro animal de estimação, costumam estar nas redes. Se um site pedir uma pergunta de segurança, invente uma resposta e guarde no gerenciador de senhas.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Um site pede uma pergunta de segurança: “Nome do seu primeiro animal de estimação”. Qual é a melhor resposta?',
              ops: [
                'Uma resposta inventada, guardada no gerenciador de senhas',
                'O nome verdadeiro, que aparece nas suas fotos',
                'Deixar em branco'
              ],
              c: 0,
              exp: 'Se a resposta verdadeira está nas redes, ela não protege nada. Uma resposta inventada funciona como mais uma senha.'
            },
            {
              t: 'escolha',
              p: 'Antes de postar uma foto, o que vale conferir no fundo?',
              ops: [
                'Se aparecem documentos, telas, endereço ou placa de carro',
                'Se a luz está boa',
                'Se tem outras pessoas sorrindo'
              ],
              c: 0,
              exp: 'O que está no fundo é o que mais vaza sem querer. Basta um corte na foto para resolver.'
            }
          ]
        },
        {
          id: 'sp6l2',
          titulo: 'LGPD: seus direitos',
          exs: [
            {
              t: 'texto',
              titulo: 'A lei dos seus dados',
              blocos: [
                {
                  p: 'A **Lei Geral de Proteção de Dados**, a LGPD (Lei 13.709 de 2018), diz como empresas e órgãos públicos podem usar os seus dados pessoais: nome, CPF, endereço, e-mail, compras, localização. Eles precisam de um motivo previsto na lei, como o seu consentimento ou um contrato, e só podem usar o necessário para aquilo.'
                },
                {
                  p: 'Alguns dados são **sensíveis** e têm proteção maior: saúde, religião, opinião política, origem racial ou étnica, vida sexual, dados genéticos e biométricos, como a digital e o rosto.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual destes é um dado pessoal sensível, segundo a LGPD?',
              ops: ['Informações sobre a sua saúde', 'O nome da sua rua', 'A marca do seu celular'],
              c: 0,
              exp: 'Dados de saúde podem levar a discriminação, por isso a lei os protege mais. Biometria, religião e opinião política também são sensíveis.'
            },
            {
              t: 'texto',
              titulo: 'O que você pode pedir',
              blocos: [
                {
                  p: 'A LGPD dá a você, o titular dos dados, vários direitos. Os principais:'
                },
                {
                  passos: [
                    'Saber se uma empresa tem dados seus, e ver quais são',
                    'Corrigir dados errados ou desatualizados',
                    'Pedir a eliminação de dados desnecessários ou usados com o seu consentimento',
                    'Saber com quem a empresa compartilhou os seus dados',
                    'Retirar o consentimento que você deu'
                  ]
                },
                {
                  p: 'Para pedir, procure no site da empresa o canal do **encarregado de dados**, a pessoa responsável pela LGPD. Se a empresa não responder, dá para reclamar na **ANPD**, a Autoridade Nacional de Proteção de Dados.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Uma loja onde você nunca comprou manda propaganda para o seu celular. O que a LGPD permite pedir?',
              ops: [
                'Saber como a loja conseguiu os seus dados e pedir que sejam eliminados',
                'Nada: dado na internet é público',
                'Só bloquear o número'
              ],
              c: 0,
              exp: 'Você tem direito de saber de onde vieram e com quem foram compartilhados os seus dados, e de pedir a eliminação.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem: exercendo um direito da LGPD',
              lines: [
                'Achar no site da empresa o canal do encarregado de dados',
                'Fazer o pedido por escrito, guardando o protocolo',
                'Aguardar a resposta da empresa',
                'Se não houver resposta, reclamar na ANPD'
              ],
              exp: 'Guardar o protocolo é importante: ele prova que você pediu, se precisar levar o caso adiante.'
            },
            {
              t: 'escolha',
              p: 'Quem fiscaliza o cumprimento da LGPD no Brasil?',
              ops: ['A ANPD, Autoridade Nacional de Proteção de Dados', 'O Procon apenas', 'Cada empresa fiscaliza a si mesma'],
              c: 0,
              exp: 'A ANPD recebe reclamações e pode aplicar sanções. Procons e o Ministério Público também atuam em casos de consumo.'
            }
          ]
        },
        {
          id: 'sp6l3',
          titulo: 'Cuidando da família',
          exs: [
            {
              t: 'texto',
              titulo: 'Os mais velhos',
              blocos: [
                {
                  p: 'Pessoas mais velhas são alvo frequente da falsa central do banco e do falso parente. Não porque sejam ingênuas, mas porque cresceram num tempo em que uma ligação do banco era sempre do banco.'
                },
                {
                  passos: [
                    'Combine a palavra-senha da família para pedidos de dinheiro',
                    'Repita as três regras: banco não pede senha, não pede Pix para conta segura e não busca cartão em casa',
                    'Ative a verificação em duas etapas no WhatsApp delas',
                    'Deixe claro que podem ligar para você antes de fazer qualquer coisa, sem vergonha'
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual é a melhor forma de proteger um parente idoso dos golpes por telefone?',
              ops: [
                'Combinar regras simples e deixar claro que ele pode ligar para você antes de agir',
                'Tirar o celular dele',
                'Dizer que ele não sabe usar tecnologia'
              ],
              c: 0,
              exp: 'Regras curtas e alguém de confiança para conferir funcionam melhor do que proibir ou criticar.'
            },
            {
              t: 'texto',
              titulo: 'As crianças',
              blocos: [
                {
                  p: 'Com crianças, o risco maior costuma estar em jogos on-line e redes sociais: adultos que fingem ser crianças, pedidos de fotos, chantagem e compras dentro dos jogos.'
                },
                {
                  passos: [
                    'Use o controle parental do celular e dos consoles, ajustado para a idade',
                    'Converse sobre não passar dados, fotos nem endereço para quem conheceram on-line',
                    'Explique que podem contar qualquer coisa estranha sem ficar de castigo',
                    'Desconfie de presentes, moedas de jogo e segredos oferecidos por desconhecidos'
                  ]
                },
                {
                  dica: 'Se uma criança contar algo preocupante, guarde as provas, não confronte o agressor e procure a polícia. A SaferNet Brasil também orienta e recebe denúncias.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Por que é importante dizer à criança que ela não vai ficar de castigo se contar algo estranho que aconteceu on-line?',
              ops: [
                'Porque o medo do castigo faz a criança esconder o problema, e quem se aproveita disso é o agressor',
                'Porque castigo não funciona com crianças',
                'Porque a internet é segura para crianças'
              ],
              c: 0,
              exp: 'Agressores costumam usar a ameaça de “vou contar para os seus pais” para manter o segredo. Conversa aberta quebra esse poder.'
            },
            {
              t: 'escolha',
              p: 'Um desconhecido oferece moedas de um jogo ao seu filho em troca de fotos. O que fazer?',
              ops: [
                'Guardar as provas, bloquear, denunciar na plataforma e procurar a polícia',
                'Responder ao desconhecido com ameaças',
                'Apagar tudo e esquecer'
              ],
              c: 0,
              exp: 'As provas são essenciais para a investigação. Confrontar o agressor pode fazê-lo sumir com tudo.'
            }
          ]
        }
      ]
    },
    {
      id: 'spu10',
      titulo: 'Lei e próximos passos',
      conceito: 'denunciar',
      desc: 'Como denunciar um golpe e o caminho do hacking ético.',
      licoes: [
        {
          id: 'sp6l4',
          titulo: 'Golpe é crime: como denunciar',
          exs: [
            {
              t: 'texto',
              titulo: 'O que diz a lei',
              blocos: [
                {
                  p: 'Golpe pela internet é crime. A Lei 14.155 de 2021 criou a **fraude eletrônica**, uma forma de estelionato com pena maior para quem engana usando mensagens, redes sociais, ligações ou e-mails. E **invadir** o celular ou o computador de alguém, sem autorização, também é crime: está no artigo 154-A do Código Penal, criado pela Lei 12.737 de 2012.'
                },
                {
                  p: 'Denunciar ajuda a recuperar o dinheiro, a investigar e a tirar o golpista de circulação. E o boletim de ocorrência costuma ser pedido pelo banco para contestar uma transação.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Enganar alguém por mensagem para conseguir um Pix é...',
              ops: ['Crime de fraude eletrônica', 'Só falta de educação', 'Crime só se passar de mil reais'],
              c: 0,
              exp: 'A fraude eletrônica foi criada justamente para os golpes por meios digitais, com pena maior que a do estelionato comum.'
            },
            {
              t: 'texto',
              titulo: 'Como denunciar',
              blocos: [
                {
                  passos: [
                    'Guarde as provas: prints das conversas, o número, o perfil, os links e os comprovantes',
                    'Avise o banco na hora e, se foi Pix, peça o MED',
                    'Registre o boletim de ocorrência, que em muitos estados pode ser feito pela internet, na delegacia eletrônica',
                    'Denuncie o perfil ou o número na própria plataforma',
                    'Avise a família e os amigos, para não caírem no mesmo golpe'
                  ]
                },
                {
                  dica: 'Tire os prints antes de bloquear o golpista. Depois de bloquear, a conversa pode sumir ou ficar mais difícil de mostrar.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual deve ser a primeira coisa a fazer antes de bloquear o golpista?',
              ops: [
                'Tirar prints da conversa, do número e do perfil',
                'Xingar o golpista',
                'Apagar a conversa'
              ],
              c: 0,
              exp: 'As provas sustentam o boletim de ocorrência e a contestação no banco. Sem elas, fica a sua palavra contra a de ninguém.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem: caí num golpe com Pix',
              lines: [
                'Guardar as provas',
                'Avisar o banco e pedir o MED',
                'Registrar o boletim de ocorrência',
                'Denunciar o perfil na plataforma e avisar os conhecidos'
              ],
              exp: 'As provas vêm primeiro porque podem sumir. O banco vem logo depois porque cada minuto conta para bloquear o dinheiro.'
            },
            {
              t: 'escolha',
              p: 'Por que denunciar mesmo quando o valor perdido foi pequeno?',
              ops: [
                'A denúncia ajuda a investigar e pode ligar o seu caso a muitos outros do mesmo golpista',
                'Porque a polícia cobra uma multa de quem não denuncia',
                'Não vale a pena denunciar valores pequenos'
              ],
              c: 0,
              exp: 'Golpes em massa fazem muitas vítimas de valores pequenos. Juntas, as denúncias mostram o tamanho do crime.'
            }
          ]
        },
        {
          id: 'sp6l5',
          titulo: 'E se eu quiser ir além?',
          exs: [
            {
              t: 'texto',
              titulo: 'O outro lado: quem protege',
              blocos: [
                {
                  p: 'Tudo o que você viu neste curso é o lado de quem se defende. Existe uma profissão inteira dedicada a isso: a de **segurança da informação**. Tem gente que vigia sistemas para detectar ataques, gente que investiga incidentes e gente que **testa** sistemas, tentando invadi-los, para achar as falhas antes dos criminosos.'
                },
                {
                  p: 'Quem faz esses testes é chamado de **hacker ético**, ou pentester. As técnicas podem ser as mesmas de um criminoso. A diferença está numa palavra: **autorização**. O hacker ético só testa o que o dono pediu, por escrito, e entrega um relatório para que as falhas sejam corrigidas.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que separa um hacker ético de um criminoso?',
              ops: [
                'A autorização por escrito do dono do sistema, e o objetivo de corrigir as falhas',
                'As ferramentas que cada um usa',
                'O hacker ético só usa computadores da empresa'
              ],
              c: 0,
              exp: 'Sem autorização, testar a invasão de um sistema é crime, mesmo com boa intenção. Com autorização e relatório, é uma profissão.'
            },
            {
              t: 'escolha',
              p: 'Você acha que o site da sua escola tem uma falha. Qual é o caminho certo?',
              ops: [
                'Não testar nada e avisar os responsáveis pelo site, explicando o que você notou',
                'Tentar invadir para provar que a falha existe',
                'Contar nas redes sociais'
              ],
              c: 0,
              exp: 'Isso se chama divulgação responsável: avisar quem pode corrigir, sem explorar a falha. Muitas empresas têm até um canal para isso, e algumas pagam recompensas.'
            },
            {
              t: 'texto',
              titulo: 'O caminho a partir daqui',
              blocos: [
                {
                  p: 'Se você quer seguir, este curso é a primeira etapa da formação **Segurança e hacking ético**, que está na aba Cursos. O caminho passa por programação, Linux, redes, segurança de sites, criptografia e, no fim, a prática de testes de invasão, sempre em laboratórios dentro do próprio app.'
                },
                {
                  p: 'Para treinar desde já, existem plataformas gratuitas e legais, feitas para isso, como os desafios do OverTheWire e do picoCTF. Nelas, invadir é permitido, porque os sistemas foram criados para serem atacados.'
                },
                {
                  dica: 'Regra que vale para toda a carreira: só teste o que é seu ou o que você tem autorização por escrito para testar.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Onde é legal praticar técnicas de invasão?',
              ops: [
                'Em plataformas e laboratórios criados para isso, ou em sistemas com autorização por escrito do dono',
                'Em qualquer site, desde que você não roube nada',
                'No Wi-Fi do vizinho, se ele não tiver senha'
              ],
              c: 0,
              exp: 'Sem autorização, até “só olhar” um sistema alheio pode ser crime de invasão. Laboratórios e plataformas de treino existem justamente para isso.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem o trabalho de um hacker ético',
              lines: [
                'Receber a autorização por escrito, com o que pode e o que não pode ser testado',
                'Testar o sistema, procurando falhas',
                'Escrever um relatório explicando cada falha e como corrigir',
                'Entregar o relatório ao dono do sistema'
              ],
              exp: 'O produto final do hacker ético não é a invasão, é o relatório que ajuda a fechar as portas.'
            }
          ]
        }
      ]
    }
  ]
});
