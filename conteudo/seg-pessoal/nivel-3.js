/* Trilha Livre · Segurança para todo mundo · Nível 3: Golpes do dia a dia
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'seg-pessoal',
  n: 3,
  titulo: 'Golpes do dia a dia',
  desc: 'WhatsApp, falsa central do banco, Pix, boleto, lojas falsas e dinheiro fácil.',
  unidades: [
    {
      id: 'spu4',
      titulo: 'No WhatsApp',
      conceito: 'falso parente',
      desc: 'O pedido de dinheiro de um número novo e o código que nunca se passa.',
      licoes: [
        {
          id: 'sp3l1',
          titulo: 'O falso parente',
          exs: [
            {
              t: 'texto',
              titulo: '“Oi, mãe, troquei de número”',
              blocos: [
                {
                  p: 'É um dos golpes mais comuns no Brasil. Chega uma mensagem de um número desconhecido, com a foto de um filho, de um neto ou de um amigo, tirada das redes sociais:'
                },
                {
                  code: 'Oi, mãe, troquei de número, salva esse.\nTô com um problema aqui, o app do banco travou.\nPode fazer um Pix pra mim? Te devolvo amanhã.',
                  lang: 'texto'
                },
                {
                  p: 'Repare nos gatilhos: o afeto (é o seu filho), a urgência (o problema é agora) e uma desculpa para a pessoa não poder ligar nem usar a própria conta. O Pix quase sempre vai para a conta de um “amigo” ou de uma “empresa”.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual sinal dessa mensagem mais denuncia o golpe?',
              ops: [
                'Um número novo pedindo dinheiro, com uma desculpa para não usar a própria conta',
                'A mensagem ter erros de digitação',
                'A pessoa chamar você de mãe'
              ],
              c: 0,
              exp: 'Número novo, pedido de dinheiro e um motivo para pagar em outra conta: essa combinação é o desenho do golpe.'
            },
            {
              t: 'escolha',
              p: 'De onde o golpista costuma tirar a foto e o nome do parente?',
              ops: [
                'Das redes sociais, que mostram fotos e quem é da família',
                'Do banco',
                'Da operadora de celular'
              ],
              c: 0,
              exp: 'Perfis abertos mostram rostos, nomes e quem comenta em quem. Com isso, o golpista monta um perfil falso convincente.'
            },
            {
              t: 'texto',
              titulo: 'Como conferir',
              blocos: [
                {
                  passos: [
                    'Não faça nada pelo número novo',
                    'Ligue para o número antigo da pessoa, ou para alguém que esteja com ela',
                    'Se não conseguir falar, faça uma pergunta que só ela saberia: o nome do primeiro cachorro, onde foi o último almoço de família',
                    'Desconfie de pedido para pagar na conta de outra pessoa'
                  ]
                },
                {
                  dica: 'Combine com a família uma palavra-senha para emergências. Se alguém pedir dinheiro por mensagem, pergunte a palavra. Golpista não sabe.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Seu “sobrinho” manda mensagem de um número novo pedindo um Pix urgente. Qual é a melhor forma de conferir?',
              ops: [
                'Ligar para o número antigo dele',
                'Pedir uma foto dele pelo número novo',
                'Perguntar pelo número novo se é ele mesmo'
              ],
              c: 0,
              exp: 'A foto pode ter sido tirada das redes, e o golpista sempre vai dizer que é ele. Só um caminho que você já conhecia confirma de verdade.'
            },
            {
              t: 'escolha',
              p: 'Para que serve combinar uma palavra-senha com a família?',
              ops: [
                'Para confirmar que um pedido de ajuda por mensagem vem mesmo da pessoa',
                'Para entrar no WhatsApp dos outros',
                'Para desbloquear o celular'
              ],
              c: 0,
              exp: 'É uma prova simples que nenhum golpista tem como achar nas redes sociais.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem: chegou um pedido de dinheiro de um número novo',
              lines: [
                'Não responder nem pagar pelo número novo',
                'Ligar para o número antigo da pessoa',
                'Confirmar a história com ela ou com alguém próximo',
                'Se for golpe, denunciar o número no WhatsApp e avisar a família'
              ],
              exp: 'Avisar a família importa: se o golpista tem a foto do seu filho, ele provavelmente está tentando com outros parentes também.'
            }
          ]
        },
        {
          id: 'sp3l2',
          titulo: 'O código que nunca se passa',
          exs: [
            {
              t: 'texto',
              titulo: 'Como roubam um WhatsApp',
              blocos: [
                {
                  p: 'Para instalar o WhatsApp num celular novo, o aplicativo manda um **código de 6 dígitos** por SMS para o seu número. Quem digitar esse código fica com a sua conta.'
                },
                {
                  p: 'Então o golpista instala o WhatsApp com o **seu** número no celular dele, e você recebe o código. Aí entra a conversa: “Sou da loja onde você anunciou, vou mandar um código para confirmar o anúncio”, “É do posto de saúde, para confirmar a vacina”. Se você passar o código, ele entra na sua conta.'
                },
                {
                  dica: 'Nenhuma empresa, loja, banco ou órgão público precisa do código que chegou por SMS no seu celular. Código é como uma chave: não se empresta.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Uma pessoa diz ser da loja onde você anunciou um sofá e pede o código que acabou de chegar por SMS. O que está acontecendo?',
              ops: [
                'Ela está tentando instalar o seu WhatsApp no celular dela',
                'A loja precisa confirmar o anúncio',
                'É um teste de segurança do WhatsApp'
              ],
              c: 0,
              exp: 'O código que chega no seu celular serve para entrar na sua conta. Quem pede esse código está tentando entrar.'
            },
            {
              t: 'escolha',
              p: 'Para quem é seguro passar um código de verificação que chegou por SMS?',
              ops: ['Para ninguém', 'Para o banco, se ele ligar', 'Para o suporte do WhatsApp'],
              c: 0,
              exp: 'O código é só para você digitar no seu próprio aparelho. O WhatsApp e os bancos nunca pedem esse código por mensagem ou ligação.'
            },
            {
              t: 'texto',
              titulo: 'A segunda porta do WhatsApp',
              blocos: [
                {
                  p: 'O WhatsApp tem a **confirmação em duas etapas**: um PIN de 6 dígitos que você cria e que é pedido quando alguém tenta instalar a sua conta num celular novo. Mesmo que um golpista consiga o código do SMS, ele para no PIN.'
                },
                {
                  passos: [
                    'Abra Configurações, depois Conta',
                    'Toque em Confirmação em duas etapas e em Ativar',
                    'Crie um PIN de 6 dígitos que não seja a sua data de nascimento',
                    'Cadastre um e-mail, para recuperar o PIN se esquecer'
                  ]
                },
                {
                  dica: 'Os nomes dos menus podem mudar um pouco entre versões do aplicativo, mas a opção fica sempre nas configurações da conta.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Com a confirmação em duas etapas ativada, um golpista consegue o código do SMS. O que acontece?',
              ops: [
                'Ele ainda precisa do PIN que só você sabe, e para aí',
                'Ele entra na conta normalmente',
                'O WhatsApp apaga a sua conta'
              ],
              c: 0,
              exp: 'É a mesma ideia da verificação em duas etapas do nível anterior: uma segunda porta, que o código sozinho não abre.'
            },
            {
              t: 'escolha',
              p: 'Qual PIN é uma má escolha para a confirmação em duas etapas?',
              ops: ['A sua data de nascimento', 'Seis números sorteados', 'Um número que só você conhece'],
              c: 0,
              exp: 'A data de nascimento aparece em redes sociais e documentos. É das primeiras coisas que um golpista testa.'
            }
          ]
        }
      ]
    },
    {
      id: 'spu5',
      titulo: 'Com o dinheiro',
      conceito: 'Pix',
      desc: 'Falsa central, Pix, boleto, QR code, lojas falsas e dinheiro fácil.',
      licoes: [
        {
          id: 'sp3l3',
          titulo: 'A falsa central do banco',
          exs: [
            {
              t: 'texto',
              titulo: 'A ligação que parece do banco',
              blocos: [
                {
                  p: 'O telefone toca, e a pessoa do outro lado sabe o seu nome, o seu CPF e até os últimos números do seu cartão, que conseguiu em vazamentos. Ela diz que detectou uma compra suspeita e que vai “ajudar a proteger a sua conta”.'
                },
                {
                  p: 'Depois vem o pedido, que muda de golpe para golpe: confirmar a senha, digitar um código, instalar um aplicativo “de segurança”, transferir o dinheiro para uma “conta segura” ou entregar o cartão a um motoboy que vai buscar na sua casa.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'A pessoa na ligação sabe o seu nome e o seu CPF. Isso prova que é do banco?',
              ops: [
                'Não: esses dados circulam em vazamentos e são fáceis de conseguir',
                'Sim, só o banco tem esses dados',
                'Sim, se ela também souber o seu endereço'
              ],
              c: 0,
              exp: 'Saber os seus dados não prova nada. Golpistas compram listas vazadas justamente para parecerem confiáveis.'
            },
            {
              t: 'escolha',
              p: 'O que um banco de verdade NUNCA pede numa ligação?',
              ops: [
                'Para transferir o seu dinheiro para uma “conta segura”',
                'Para você conferir as compras no aplicativo',
                'Para você ir a uma agência'
              ],
              c: 0,
              exp: 'Não existe conta segura. Banco também não pede senha, não pede para instalar aplicativo e não manda buscar cartão em casa.'
            },
            {
              t: 'texto',
              titulo: 'O que fazer: desligar e ligar você',
              blocos: [
                {
                  passos: [
                    'Desligue, sem discutir',
                    'Pegue o número que está no verso do seu cartão ou no aplicativo do banco',
                    'Ligue você, de preferência de outro telefone',
                    'Ou abra o aplicativo oficial e confira se existe mesmo alguma compra'
                  ]
                },
                {
                  p: 'Ligar de outro telefone tem um motivo: alguns golpistas não desligam a chamada do lado deles, e quando você liga “para o banco” logo em seguida, quem atende é o mesmo golpista.'
                },
                {
                  dica: 'O golpe da mão fantasma: o falso atendente pede para você instalar um aplicativo de acesso remoto e passa a controlar o seu celular, fazendo transferências enquanto você assiste. Nunca instale aplicativo a pedido de quem ligou.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O “atendente” pede para você instalar um aplicativo para “proteger o celular”. O que pode acontecer?',
              ops: [
                'Ele passa a controlar o seu celular à distância e faz transferências',
                'O celular fica mais rápido',
                'Nada: é só um antivírus'
              ],
              c: 0,
              exp: 'Aplicativos de acesso remoto são legítimos para suporte técnico, mas na mão de um golpista dão o controle do seu aparelho. É o golpe da mão fantasma.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem: recebeu uma ligação da “central de segurança” do banco',
              lines: [
                'Não confirmar nenhum dado e desligar',
                'Pegar o número oficial no verso do cartão ou no aplicativo',
                'Ligar você mesmo, de preferência de outro telefone',
                'Conferir no aplicativo se existe alguma compra de verdade'
              ],
              exp: 'Quem liga para você pode ser qualquer um. Quando é você que liga para o número oficial, sabe com quem está falando.'
            },
            {
              t: 'escolha',
              p: 'O “banco” diz que vai mandar um motoboy buscar o seu cartão para trocar por um novo. O que é?',
              ops: ['Golpe: banco não busca cartão na casa de ninguém', 'Um serviço normal do banco', 'Só um golpe se o motoboy não tiver uniforme'],
              c: 0,
              exp: 'Com o cartão na mão e a senha que pedem para você digitar no telefone, eles fazem compras e saques. Uniforme e crachá são fáceis de falsificar.'
            }
          ]
        },
        {
          id: 'sp3l4',
          titulo: 'Pix: comprovante falso e Pix errado',
          exs: [
            {
              t: 'texto',
              titulo: 'Para quem vende',
              blocos: [
                {
                  p: 'Quem vende pela internet ou numa feira precisa saber de um golpe simples: o comprador mostra um **comprovante falso**, uma imagem editada ou um Pix agendado para outro dia, e leva o produto.'
                },
                {
                  p: 'A regra é uma só: **confira o dinheiro no extrato do seu banco** antes de entregar. Print, foto de tela e comprovante enviado por mensagem não provam nada.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Um comprador manda o print de um Pix e quer levar o celular que você vendeu. O que fazer antes de entregar?',
              ops: [
                'Abrir o aplicativo do seu banco e conferir se o dinheiro entrou',
                'Conferir se o print tem o logo do banco',
                'Pedir um segundo print'
              ],
              c: 0,
              exp: 'Imagens são fáceis de editar, e um Pix agendado pode ser cancelado depois. Só o seu extrato mostra o dinheiro de verdade.'
            },
            {
              t: 'escolha',
              p: 'O comprovante diz “Pix agendado para amanhã”. Isso garante o pagamento?',
              ops: [
                'Não: um Pix agendado pode ser cancelado antes da data',
                'Sim, agendou é porque pagou',
                'Sim, se o valor estiver certo'
              ],
              c: 0,
              exp: 'Agendar não é pagar. Entregue o produto quando o dinheiro estiver na sua conta.'
            },
            {
              t: 'texto',
              titulo: 'O falso Pix errado',
              blocos: [
                {
                  p: 'Cai um Pix na sua conta, de alguém que você não conhece. Logo depois chega uma mensagem: “Mandei por engano, pode devolver para esta outra chave?”. Às vezes o dinheiro veio de uma conta usada em outro golpe, e quem devolve para a chave errada acaba envolvido ou no prejuízo.'
                },
                {
                  p: 'Se receber um Pix por engano de verdade, devolva pelo botão de **devolução** do próprio aplicativo, que manda o dinheiro de volta para a conta que pagou. Nunca para uma chave nova que a pessoa indicar.'
                },
                {
                  dica: 'Se você caiu num golpe com Pix, avise o seu banco o quanto antes e peça o MED, o Mecanismo Especial de Devolução do Banco Central. Ele permite bloquear e devolver o dinheiro se ainda estiver na conta do golpista. Registre também um boletim de ocorrência.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Você recebeu um Pix de um desconhecido, que pede para devolver para outra chave. Como devolver com segurança?',
              ops: [
                'Pelo botão de devolução do próprio aplicativo, que manda para a conta de origem',
                'Para a chave nova que a pessoa mandou',
                'Em dinheiro, pessoalmente'
              ],
              c: 0,
              exp: 'A devolução pelo aplicativo vai para a mesma conta de onde o dinheiro saiu. Assim você não entra no caminho de um golpe.'
            },
            {
              t: 'escolha',
              p: 'Você fez um Pix para um golpista há poucos minutos. Qual é o primeiro passo?',
              ops: [
                'Avisar o banco na hora e pedir o MED, o mecanismo de devolução do Pix',
                'Esperar uma semana para ver se o dinheiro volta',
                'Mandar mensagem para o golpista pedindo de volta'
              ],
              c: 0,
              exp: 'Quanto mais rápido, maior a chance de o dinheiro ainda estar na conta do golpista e ser bloqueado. Depois, registre o boletim de ocorrência.'
            }
          ]
        },
        {
          id: 'sp3l5',
          titulo: 'Boleto e QR code trocados',
          exs: [
            {
              t: 'texto',
              titulo: 'O boleto falso',
              blocos: [
                {
                  p: 'Um boleto falso parece igual ao verdadeiro: tem o logo da empresa, o seu nome e o valor certo. O que muda é o **código de barras**, que manda o dinheiro para a conta do golpista. Ele chega por e-mail, por WhatsApp ou até pelo correio.'
                },
                {
                  p: 'A conferência que resolve: na hora de pagar, **antes de confirmar**, o aplicativo do banco mostra o nome de quem vai receber. Ele tem que ser a empresa que você está pagando, e não uma pessoa ou uma empresa estranha.'
                },
                {
                  dica: 'Prefira tirar a segunda via do boleto no site ou no aplicativo oficial da empresa, e não num link recebido por mensagem.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Na tela de pagamento do boleto da internet, o beneficiário aparece como “J. Souza Serviços”, e não como a operadora. O que fazer?',
              ops: [
                'Não pagar e tirar a segunda via no site ou aplicativo oficial da operadora',
                'Pagar, porque o valor está certo',
                'Pagar e guardar o comprovante'
              ],
              c: 0,
              exp: 'O valor e o logo podem estar certos num boleto falso. O nome do beneficiário é o que denuncia para onde o dinheiro vai.'
            },
            {
              t: 'escolha',
              p: 'Qual cuidado mais protege contra boleto falso?',
              ops: [
                'Conferir o nome de quem vai receber antes de confirmar o pagamento',
                'Conferir se o boleto tem o logo da empresa',
                'Pagar sempre no último dia'
              ],
              c: 0,
              exp: 'O logo é fácil de copiar. O beneficiário vem do código de barras, que é justamente o que o golpista troca.'
            },
            {
              t: 'texto',
              titulo: 'O QR code trocado',
              blocos: [
                {
                  p: 'O mesmo vale para o QR code do Pix. Golpistas colam um adesivo com outro QR code por cima do verdadeiro, na mesa do restaurante, no caixa de uma loja ou num cartaz de doação. E mandam QR codes por mensagem, dizendo ser de cobranças.'
                },
                {
                  p: 'Antes de confirmar um Pix, leia o nome de quem vai receber. Se não for o restaurante ou a loja, não pague e avise o estabelecimento.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Você lê o QR code da mesa do restaurante, e o Pix vai para “Carlos M.”, e não para o restaurante. O que fazer?',
              ops: [
                'Não pagar e avisar o restaurante, que pode ter um QR code falso colado na mesa',
                'Pagar, porque deve ser o dono',
                'Pagar só metade'
              ],
              c: 0,
              exp: 'O dono pode até se chamar Carlos, mas é por isso que se pergunta. Avisar o restaurante protege os próximos clientes também.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem: pagando um boleto ou um Pix com segurança',
              lines: [
                'Pegar o boleto ou o QR code numa fonte oficial',
                'Ler o código no aplicativo do banco',
                'Conferir o nome de quem vai receber e o valor',
                'Só então confirmar o pagamento'
              ],
              exp: 'A conferência do recebedor leva dois segundos e evita a maioria dos golpes com boleto e QR code.'
            }
          ]
        },
        {
          id: 'sp3l6',
          titulo: 'Lojas falsas e dinheiro fácil',
          exs: [
            {
              t: 'texto',
              titulo: 'A loja que não existe',
              blocos: [
                {
                  p: 'Lojas falsas copiam o visual de marcas conhecidas e anunciam nas redes sociais com preços muito abaixo do mercado. Você paga, e o produto nunca chega.'
                },
                {
                  tabela: {
                    cab: ['Sinal', 'Por que desconfiar'],
                    codigo: [],
                    linhas: [
                      ['Preço bom demais', 'ninguém vende abaixo do custo'],
                      ['Só aceita Pix, com desconto', 'Pix não tem estorno como o cartão'],
                      ['Site criado há poucos dias', 'golpes trocam de endereço o tempo todo'],
                      ['Sem CNPJ nem endereço', 'não há a quem cobrar depois'],
                      ['Contagem regressiva de oferta', 'é o gatilho da urgência']
                    ]
                  }
                },
                {
                  dica: 'Antes de comprar numa loja que você não conhece, procure o nome dela com a palavra “golpe” e veja a reputação em sites de reclamação. Na dúvida, pague com cartão de crédito, que tem como contestar.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Um anúncio oferece um celular de R$ 4.000 por R$ 900, só no Pix, com a oferta acabando em 10 minutos. O que mais denuncia o golpe?',
              ops: [
                'O preço impossível junto com a pressa e o pagamento só por Pix',
                'O anúncio ter fotos bonitas',
                'Ser um celular caro'
              ],
              c: 0,
              exp: 'Ganância (o preço), urgência (10 minutos) e um pagamento difícil de recuperar. Os mesmos gatilhos do nível 1.'
            },
            {
              t: 'escolha',
              p: 'Por que, numa loja desconhecida, o cartão de crédito é mais seguro que o Pix?',
              ops: [
                'Com o cartão, dá para contestar a compra se o produto não chegar',
                'O cartão é mais rápido',
                'O Pix é sempre golpe'
              ],
              c: 0,
              exp: 'O Pix é seguro para transferir, mas o dinheiro sai na hora. No cartão, o banco pode investigar e estornar uma compra contestada.'
            },
            {
              t: 'texto',
              titulo: 'Dinheiro fácil que custa caro',
              blocos: [
                {
                  p: 'Outro grupo de golpes promete ganho fácil. No **golpe das tarefas**, uma “empresa” paga alguns reais para você curtir vídeos ou avaliar produtos. Depois de pagar pequenas quantias para ganhar confiança, ela pede um depósito para “liberar tarefas maiores”, e o dinheiro some.'
                },
                {
                  p: 'Nas **pirâmides** e nos falsos investimentos, o retorno prometido é alto e garantido, e quem paga os primeiros participantes é o dinheiro dos novos. Quando param de entrar pessoas, tudo desmorona.'
                },
                {
                  dica: 'Regra de ouro: se você precisa pagar para começar a ganhar, ou se o retorno é alto e garantido, é golpe. Nenhum investimento sério garante ganho alto sem risco.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Uma “empresa” pagou R$ 20 para você curtir vídeos e agora pede R$ 300 para liberar as tarefas premium. O que está acontecendo?',
              ops: [
                'É o golpe das tarefas: o pagamento pequeno foi para ganhar a sua confiança',
                'É um emprego normal pela internet',
                'É um investimento com risco baixo'
              ],
              c: 0,
              exp: 'O golpista perde R$ 20 para ganhar R$ 300. Trabalho de verdade não cobra para você trabalhar.'
            },
            {
              t: 'escolha',
              p: '“Rendimento garantido de 10% ao mês, sem risco.” O que isso indica?',
              ops: [
                'Um golpe: nenhum investimento sério garante um retorno tão alto sem risco',
                'Um ótimo investimento',
                'Um investimento normal do banco'
              ],
              c: 0,
              exp: '10% ao mês, somando os rendimentos, é mais que o triplo do dinheiro em um ano. Quem promete isso costuma pagar os antigos com o dinheiro dos novos, como numa pirâmide.'
            }
          ]
        }
      ]
    }
  ]
});
