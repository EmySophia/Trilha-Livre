/* Trilha Livre · Segurança para todo mundo · Nível 1: Por que se proteger
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'seg-pessoal',
  n: 1,
  titulo: 'Por que se proteger',
  desc: 'Quem ataca, o que se protege e como os golpistas pensam.',
  videos: [
    {
      tipo: 'texto',
      titulo: 'Cartilha de Segurança para Internet',
      canal: 'CERT.br',
      obs: 'o guia gratuito do centro brasileiro de resposta a incidentes',
      url: 'https://cartilha.cert.br/'
    }
  ],
  unidades: [
    {
      id: 'spu1',
      titulo: 'Você é um alvo',
      conceito: 'golpe em massa',
      desc: 'Por que qualquer pessoa interessa a um golpista.',
      licoes: [
        {
          id: 'sp1l1',
          titulo: 'Ninguém é desinteressante',
          exs: [
            {
              t: 'texto',
              titulo: '“Quem vai querer me atacar?”',
              blocos: [
                {
                  p: 'Quase todo mundo pensa assim: “não sou famoso nem rico, ninguém vai perder tempo comigo”. O problema é que a maioria dos golpes não escolhe ninguém. Eles são **em massa**: a mesma mensagem vai para milhares de pessoas ao mesmo tempo, e o golpista só precisa que algumas caiam.'
                },
                {
                  p: 'Pense numa pescaria com uma rede enorme. O pescador não mira num peixe: joga a rede e vê o que vem. Por isso o golpe também se chama **phishing**, que soa como fishing, “pescaria” em inglês.'
                },
                {
                  dica: 'Se uma mensagem chegou para você, ela provavelmente chegou para muita gente. Isso não quer dizer que você foi escolhido: quer dizer que você está na rede.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Por que uma pessoa comum, sem fama nem fortuna, recebe mensagens de golpe?',
              ops: [
                'A maioria dos golpes é enviada em massa, para milhares de pessoas de uma vez',
                'Porque alguém a escolheu a dedo',
                'Porque ela fez algo errado na internet'
              ],
              c: 0,
              exp: 'O golpe em massa funciona pela quantidade: basta uma pequena parte cair para valer a pena para o golpista.'
            },
            {
              t: 'escolha',
              p: 'De onde vem o nome phishing?',
              ops: [
                'Do inglês fishing, pescaria: joga-se a isca para muita gente e espera-se alguém morder',
                'Do nome do primeiro hacker',
                'De um vírus de celular'
              ],
              c: 0,
              exp: 'A troca do f pelo ph é uma brincadeira antiga da internet. A ideia é a da pescaria com isca.'
            },
            {
              t: 'texto',
              titulo: 'O que você tem que vale dinheiro',
              blocos: [
                {
                  p: 'Mesmo sem ser rico, você tem coisas que valem dinheiro para um golpista:'
                },
                {
                  tabela: {
                    cab: ['O que você tem', 'Para que o golpista quer'],
                    codigo: [],
                    linhas: [
                      ['Dinheiro na conta e o Pix', 'Transferir para ele, de uma vez'],
                      ['Seu WhatsApp', 'Pedir dinheiro aos seus contatos fingindo ser você'],
                      ['Seu nome e seu CPF', 'Abrir contas, pegar empréstimos e fazer compras no seu nome'],
                      ['Suas senhas', 'Entrar nas suas contas e nas de quem confia em você'],
                      ['Suas fotos e conversas', 'Chantagem, ou montar um golpe mais convincente']
                    ]
                  }
                },
                {
                  p: 'Repare que boa parte disso não é o seu dinheiro, mas a **confiança** que as pessoas têm em você. Por isso proteger as suas contas também protege a sua família e os seus amigos.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Por que um golpista quer o WhatsApp de alguém que tem pouco dinheiro?',
              ops: [
                'Para pedir dinheiro aos contatos dessa pessoa, fingindo ser ela',
                'Para ler as conversas por curiosidade',
                'Ele não quer: só contas de gente rica interessam'
              ],
              c: 0,
              exp: 'O valor está na confiança: a mãe, o irmão e os amigos acreditam que é você pedindo ajuda.'
            },
            {
              t: 'escolha',
              p: 'O que um golpista pode fazer com o seu nome e o seu CPF?',
              ops: [
                'Abrir contas, pegar empréstimos e fazer compras como se fosse você',
                'Nada: sem a senha do banco, CPF não serve para nada',
                'Só descobrir a sua idade'
              ],
              c: 0,
              exp: 'Com dados pessoais, dá para se passar por você em lojas e financeiras. Por isso não se manda foto de documento para quem pediu por mensagem.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem: como funciona um golpe em massa',
              lines: [
                'O golpista escreve uma mensagem que parece verdadeira',
                'Ele envia para milhares de números ou e-mails',
                'A maioria ignora, mas algumas pessoas respondem',
                'Ele continua a conversa só com quem respondeu'
              ],
              exp: 'O golpista não precisa enganar todo mundo, só alguns. Quem não responde não perde nada.'
            }
          ]
        },
        {
          id: 'sp1l2',
          titulo: 'O que proteger: segredo, verdade e acesso',
          exs: [
            {
              t: 'texto',
              titulo: 'Os três cuidados',
              blocos: [
                {
                  p: 'Quem trabalha com segurança resume o que precisa ser protegido em três palavras. Elas servem para uma empresa e servem para você.'
                },
                {
                  tabela: {
                    cab: ['Palavra', 'Quer dizer', 'Exemplo de ataque'],
                    codigo: [],
                    linhas: [
                      ['Confidencialidade', 'Só quem deve vê a informação', 'Alguém lê as suas mensagens'],
                      ['Integridade', 'A informação não foi alterada', 'Alguém troca o código de barras de um boleto'],
                      ['Disponibilidade', 'Você consegue usar quando precisa', 'Um vírus tranca os seus arquivos e pede resgate']
                    ]
                  }
                },
                {
                  dica: 'As iniciais formam a sigla CID. Em inglês, é CIA: confidentiality, integrity e availability.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Um golpista troca o código de barras de um boleto para o dinheiro cair na conta dele. Qual dos três cuidados foi atacado?',
              ops: ['Integridade', 'Confidencialidade', 'Disponibilidade'],
              c: 0,
              exp: 'O boleto foi alterado: a informação deixou de ser a verdadeira. Isso é um ataque à integridade.'
            },
            {
              t: 'escolha',
              p: 'Alguém descobre a sua senha e lê os seus e-mails, sem mudar nada. Qual cuidado foi quebrado?',
              ops: ['Confidencialidade', 'Integridade', 'Disponibilidade'],
              c: 0,
              exp: 'A informação continuou igual e disponível, mas foi vista por quem não devia: confidencialidade.'
            },
            {
              t: 'texto',
              titulo: 'Proteger também é poder usar',
              blocos: [
                {
                  p: 'A disponibilidade é a que mais gente esquece. Se o seu celular é roubado e todas as fotos dos seus filhos só estavam nele, ninguém leu nem mudou nada, mas você perdeu o acesso para sempre.'
                },
                {
                  p: 'Por isso, nesse curso, segurança não é só esconder: é também ter **cópia** do que importa e um jeito de **recuperar** as suas contas. Você vai ver isso nos níveis de senhas e de backup.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Um vírus trava todos os arquivos do computador de uma loja e pede resgate para destravar. Qual cuidado foi atacado?',
              ops: ['Disponibilidade', 'Confidencialidade', 'Integridade'],
              c: 0,
              exp: 'A loja não consegue usar os próprios arquivos. Esse tipo de vírus se chama ransomware, e a defesa principal é ter backup.'
            },
            {
              t: 'escolha',
              p: 'Qual destas atitudes protege a disponibilidade das suas fotos?',
              ops: [
                'Ter uma cópia delas fora do celular',
                'Colocar uma senha mais longa no celular',
                'Não postar as fotos nas redes'
              ],
              c: 0,
              exp: 'A senha protege o segredo; a cópia garante que você ainda tenha as fotos se o celular sumir ou quebrar.'
            },
            {
              t: 'complete',
              p: 'Complete com os três cuidados',
              code: 'Ninguém leu: ___. Ninguém mudou: ___. Eu consigo usar: ___.',
              bank: ['confidencialidade', 'integridade', 'disponibilidade', 'velocidade'],
              c: ['confidencialidade', 'integridade', 'disponibilidade'],
              exp: 'Segredo, verdade e acesso: as três coisas que a segurança protege.'
            }
          ]
        },
        {
          id: 'sp1l3',
          titulo: 'Como o golpista pensa',
          exs: [
            {
              t: 'texto',
              titulo: 'Engenharia social',
              blocos: [
                {
                  p: 'A maioria dos golpes não quebra nenhum sistema: engana uma pessoa. Isso se chama **engenharia social**. É mais fácil convencer alguém a passar a senha do que descobrir a senha sozinho.'
                },
                {
                  p: 'Para convencer, o golpista usa sempre os mesmos gatilhos, que fazem a gente agir antes de pensar:'
                },
                {
                  tabela: {
                    cab: ['Gatilho', 'Como aparece'],
                    codigo: [],
                    linhas: [
                      ['Urgência', '“Sua conta será bloqueada em 1 hora”'],
                      ['Medo', '“Detectamos uma compra suspeita de R$ 3.000”'],
                      ['Autoridade', '“Aqui é da central do banco”, “da Receita”, “da polícia”'],
                      ['Ganância', '“Você ganhou um prêmio”, “renda de R$ 500 por dia”'],
                      ['Afeto', '“Mãe, troquei de número, me ajuda?”']
                    ]
                  }
                }
              ]
            },
            {
              t: 'escolha',
              p: '“Seu CPF será cancelado hoje se você não regularizar pelo link.” Que gatilhos essa mensagem usa?',
              ops: ['Urgência e medo', 'Ganância e afeto', 'Nenhum: é uma mensagem normal'],
              c: 0,
              exp: 'O prazo curto (hoje) é a urgência; o cancelamento do CPF é o medo. E nenhum órgão público cancela CPF por mensagem com link.'
            },
            {
              t: 'escolha',
              p: 'Por que golpistas preferem enganar pessoas a invadir sistemas?',
              ops: [
                'Porque convencer alguém a passar a senha costuma ser mais fácil do que descobri-la',
                'Porque invadir sistemas é proibido, e enganar pessoas não é',
                'Porque as pessoas sempre leem tudo com atenção'
              ],
              c: 0,
              exp: 'Os sistemas dos bancos são muito protegidos. A pessoa do outro lado da tela, com pressa e com medo, nem sempre está. E enganar também é crime.'
            },
            {
              t: 'texto',
              titulo: 'A defesa: parar e conferir',
              blocos: [
                {
                  p: 'Todos os gatilhos têm o mesmo objetivo: fazer você agir **agora**. Então a melhor defesa é o contrário: **parar**. Golpe não aguenta espera.'
                },
                {
                  passos: [
                    'Respire: nada de verdadeiro precisa ser resolvido em cinco minutos por mensagem',
                    'Desconfie de quem pede senha, código, dinheiro ou dados',
                    'Confira por outro caminho: ligue para o número que você já conhece, abra o app oficial, fale com a pessoa ao vivo',
                    'Na dúvida, não faça'
                  ]
                },
                {
                  dica: 'Conferir “por outro caminho” é a regra mais importante do curso. Nunca use o telefone ou o link que veio na própria mensagem suspeita.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Chega um SMS: “Compra de R$ 2.890 aprovada. Se não foi você, ligue 0800 xxx”. Qual é a atitude mais segura?',
              ops: [
                'Abrir o app do banco ou ligar para o número do verso do cartão para conferir',
                'Ligar para o número da mensagem, rápido, antes que a compra seja confirmada',
                'Responder o SMS com os dados do cartão para cancelar'
              ],
              c: 0,
              exp: 'O número da mensagem pode ser do próprio golpista. Confira sempre por um canal que você já conhece: o app oficial ou o número do cartão.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem o que fazer ao receber uma mensagem que pede ação urgente',
              lines: [
                'Parar e não clicar em nada',
                'Perceber o gatilho: pressa, medo, prêmio ou pedido de ajuda',
                'Conferir por outro caminho, que você já conhece',
                'Só então decidir se faz alguma coisa'
              ],
              exp: 'A pressa é a arma do golpista. Ganhar tempo e conferir por fora desarma quase todos os golpes.'
            },
            {
              t: 'escolha',
              p: 'Qual mensagem usa o gatilho do afeto?',
              ops: [
                '“Oi, filho, é a mamãe. Perdi o celular, esse é o número novo. Pode me ajudar com um Pix?”',
                '“Parabéns! Você foi sorteado e ganhou um celular.”',
                '“Sua conta será bloqueada em 30 minutos.”'
              ],
              c: 0,
              exp: 'O golpista usa o carinho e a vontade de ajudar. A defesa é ligar para o número antigo da pessoa ou fazer uma pergunta que só ela saberia responder.'
            }
          ]
        }
      ]
    }
  ]
});
