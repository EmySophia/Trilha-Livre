/* Trilha Livre · Segurança para todo mundo · Nível 4: Phishing e links
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md.
   Os endereços dos exemplos usam um banco que não existe, meubanco.com.br. */

nivel({
  curso: 'seg-pessoal',
  n: 4,
  titulo: 'Phishing e links',
  desc: 'Reconhecer a isca, ler um endereço de site e saber o que fazer se clicou.',
  unidades: [
    {
      id: 'spu6',
      titulo: 'A isca',
      conceito: 'phishing',
      desc: 'Mensagens falsas, endereços enganosos, links e anexos.',
      licoes: [
        {
          id: 'sp4l1',
          titulo: 'O que é phishing',
          exs: [
            {
              t: 'texto',
              titulo: 'A mensagem que imita',
              blocos: [
                {
                  p: '**Phishing** é a mensagem que imita uma empresa, um órgão público ou uma pessoa conhecida para fazer você clicar num link, abrir um arquivo ou passar dados. Ela chega por vários caminhos, e cada um tem um apelido:'
                },
                {
                  tabela: {
                    cab: ['Caminho', 'Nome', 'Exemplo'],
                    codigo: [],
                    linhas: [
                      ['E-mail', 'phishing', '“Sua conta foi suspensa, clique para regularizar”'],
                      ['SMS', 'smishing', '“Sua encomenda está retida, pague a taxa no link”'],
                      ['Ligação', 'vishing', 'a falsa central do banco, do nível anterior'],
                      ['Redes sociais', 'phishing', 'perfil falso de loja, de sorteio ou de suporte']
                    ]
                  }
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Um SMS diz que sua encomenda está retida e pede para pagar uma taxa num link. Como se chama esse golpe?',
              ops: ['Smishing, o phishing por SMS', 'Vishing', 'Spam comum, sem perigo'],
              c: 0,
              exp: 'O S vem de SMS. É o mesmo golpe do e-mail falso, só que no celular. E taxas de encomenda se pagam no site oficial dos Correios ou da transportadora, nunca por link de SMS.'
            },
            {
              t: 'escolha',
              p: 'O que todo phishing quer que você faça?',
              ops: [
                'Clicar num link, abrir um arquivo ou passar dados',
                'Responder com um “ok”',
                'Apagar a mensagem'
              ],
              c: 0,
              exp: 'A mensagem é só a isca. O golpe acontece no link, no arquivo ou nos dados que você entrega.'
            },
            {
              t: 'texto',
              titulo: 'Os sinais',
              blocos: [
                {
                  p: 'Nenhum sinal sozinho prova o golpe, mas juntos eles acendem o alerta:'
                },
                {
                  passos: [
                    'Pressa ou ameaça: bloqueio, multa, cancelamento, prazo curto',
                    'Pedido de dados, senha, código ou pagamento',
                    'Remetente estranho: um endereço de e-mail que não é o da empresa, um número desconhecido',
                    'Saudação genérica, como “Prezado cliente”, quando a empresa costuma usar o seu nome',
                    'Um link para clicar, quando você poderia abrir o aplicativo oficial'
                  ]
                },
                {
                  dica: 'Golpes estão cada vez mais bem escritos, sem erro nenhum de português. Não confie na falta de erros: confie na conferência por outro caminho.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Um e-mail bem escrito, com o logo do seu banco, pede para você “atualizar o cadastro” por um link. Qual é a atitude segura?',
              ops: [
                'Não clicar e abrir o aplicativo oficial do banco para ver se há alguma pendência',
                'Clicar, porque o e-mail não tem erros',
                'Responder o e-mail perguntando se é verdade'
              ],
              c: 0,
              exp: 'Logo e bom português não provam nada. Se existir mesmo uma pendência, ela vai estar no aplicativo oficial.'
            },
            {
              t: 'escolha',
              p: 'Qual destes é o sinal mais forte de phishing?',
              ops: [
                'Um pedido de senha ou código com prazo curto',
                'A mensagem ter o nome da empresa',
                'A mensagem chegar de manhã'
              ],
              c: 0,
              exp: 'Empresas sérias não pedem senha nem código por mensagem, e menos ainda com pressa.'
            }
          ]
        },
        {
          id: 'sp4l2',
          titulo: 'Lendo um endereço de site',
          exs: [
            {
              t: 'texto',
              titulo: 'O que importa é o final',
              blocos: [
                {
                  p: 'Um endereço de site tem partes. O que diz **de quem é o site** é o **domínio**: o trecho que vem logo antes da primeira barra depois do https://. Veja as partes de https://app.meubanco.com.br/pix:'
                },
                {
                  tabela: {
                    cab: ['Parte', 'Exemplo'],
                    codigo: [1],
                    linhas: [
                      ['O tipo de conexão', 'https://'],
                      ['O subdomínio, criado pelo dono do site', 'app'],
                      ['O domínio: diz de quem é o site', 'meubanco.com.br'],
                      ['A página dentro do site', '/pix']
                    ]
                  }
                },
                {
                  p: 'O domínio aqui é meubanco.com.br. O app antes dele é um subdomínio: o próprio banco cria quantos quiser, então app.meubanco.com.br também é do banco.'
                },
                {
                  dica: 'Leia o endereço assim: ache a primeira barra depois do https://, e olhe o que está logo antes dela. É lá que mora o dono do site.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'De quem é o site https://pagamentos.meubanco.com.br/boleto?',
              mono: true,
              ops: ['meubanco.com.br', 'pagamentos', 'boleto'],
              c: 0,
              exp: 'O domínio é o que vem logo antes da primeira barra: meubanco.com.br. O pagamentos é um subdomínio do próprio banco.'
            },
            {
              t: 'escolha',
              p: 'Qual destes endereços é mesmo do meubanco.com.br?',
              mono: true,
              ops: [
                'https://app.meubanco.com.br/entrar',
                'https://meubanco-seguranca.com/entrar',
                'https://www.meubanco.co/entrar'
              ],
              c: 0,
              exp: 'O segundo é outro domínio, que só tem o nome do banco no meio. O terceiro termina em .co, e não em .com.br: é outro site.'
            },
            {
              t: 'texto',
              titulo: 'Os truques',
              blocos: [
                {
                  p: 'Golpistas registram domínios que **parecem** o verdadeiro. Os truques mais comuns:'
                },
                {
                  tabela: {
                    cab: ['Endereço', 'O truque', 'O dono de verdade'],
                    codigo: [0, 2],
                    linhas: [
                      ['meubamco.com.br', 'uma letra trocada (m no lugar de n)', 'meubamco.com.br'],
                      ['meubanco.com.br.acesso.net', 'o nome do banco no começo, como subdomínio', 'acesso.net'],
                      ['meubanco-pix.com', 'o nome do banco com uma palavra a mais', 'meubanco-pix.com']
                    ]
                  }
                },
                {
                  p: 'O segundo truque é o mais perigoso, porque o endereço começa igualzinho ao do banco. Mas lembre: o que vale é o que vem **logo antes da primeira barra**.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'De quem é o site https://meubanco.com.br.verificar-conta.site/pix?',
              mono: true,
              ops: ['verificar-conta.site', 'meubanco.com.br', 'pix'],
              c: 0,
              exp: 'A primeira barra vem depois de .site. O que está logo antes dela é verificar-conta.site, um site que não tem nada a ver com o banco.'
            },
            {
              t: 'escolha',
              p: 'Qual destes endereços tem uma letra trocada para enganar?',
              mono: true,
              ops: ['https://meubamco.com.br', 'https://meubanco.com.br', 'https://app.meubanco.com.br'],
              c: 0,
              exp: 'Meubamco, com m no lugar do n. Num celular, com pressa, quase ninguém percebe. Por isso o mais seguro é abrir o aplicativo ou digitar o endereço você mesmo.'
            },
            {
              t: 'complete',
              p: 'Complete a regra',
              code: 'O dono do site é o que vem logo antes da primeira ___ depois do https://.',
              bank: ['barra', 'vírgula', 'palavra', 'letra'],
              c: ['barra'],
              exp: 'Tudo o que vem antes do domínio pode ser inventado pelo dono do site, inclusive o nome de um banco.'
            }
          ]
        },
        {
          id: 'sp4l3',
          titulo: 'Cadeado, encurtadores e anexos',
          exs: [
            {
              t: 'texto',
              titulo: 'O cadeado não quer dizer “site confiável”',
              blocos: [
                {
                  p: 'Muita gente aprendeu que o cadeado, ou o https, mostra que o site é seguro. Ele mostra uma coisa só: que a **conexão** entre você e o site é cifrada, e ninguém no caminho consegue ler.'
                },
                {
                  p: 'Ele não diz **quem** está do outro lado. Golpistas também conseguem cadeado, de graça, para os sites falsos deles. Um site falso com cadeado continua falso, só que a conexão com o golpista é bem protegida.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O site tem cadeado e começa com https. O que isso garante?',
              ops: [
                'Que a conexão é cifrada, mas não que o site seja de quem diz ser',
                'Que o site é da empresa verdadeira',
                'Que o site não tem vírus'
              ],
              c: 0,
              exp: 'O cadeado protege o caminho, não o destino. Quem é o dono do site, você confere no domínio.'
            },
            {
              t: 'texto',
              titulo: 'Links escondidos e arquivos perigosos',
              blocos: [
                {
                  p: '**Encurtadores e QR codes** escondem o endereço de verdade: você não sabe para onde vai antes de abrir. Em mensagens suspeitas, isso é motivo a mais para não abrir.'
                },
                {
                  p: '**Anexos** podem instalar programas maliciosos. Desconfie principalmente de:'
                },
                {
                  tabela: {
                    cab: ['Arquivo', 'Por que desconfiar'],
                    codigo: [],
                    linhas: [
                      ['.exe, .msi', 'são programas para Windows: abrir é instalar'],
                      ['.apk', 'aplicativo para Android de fora da loja oficial'],
                      ['.zip, .rar', 'podem esconder um programa dentro'],
                      ['documento que pede para “habilitar conteúdo”', 'isso liga macros, pequenos programas que rodam dentro do arquivo']
                    ]
                  }
                },
                {
                  dica: 'Nota fiscal, boleto e comprovante de verdade são PDF, e não programas. Uma “nota fiscal” que termina em .exe ou .apk é golpe.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Chega por e-mail o anexo NotaFiscal.pdf.exe. O que ele é?',
              ops: [
                'Um programa para Windows disfarçado de PDF: o que vale é o final, .exe',
                'Uma nota fiscal em PDF',
                'Um arquivo vazio'
              ],
              c: 0,
              exp: 'Como no domínio, o que vale é o final. O .pdf no meio é só parte do nome, para enganar.'
            },
            {
              t: 'escolha',
              p: 'Uma mensagem pede para instalar um aplicativo por um arquivo .apk para “receber o seu benefício”. O que fazer?',
              ops: [
                'Não instalar: aplicativo se instala pela loja oficial',
                'Instalar, porque é do governo',
                'Instalar e apagar depois'
              ],
              c: 0,
              exp: 'Um .apk de fora da loja pode dar ao golpista o controle do celular. Aplicativos oficiais, inclusive os do governo, estão na loja do seu celular.'
            },
            {
              t: 'escolha',
              p: 'Um documento do Word, recebido de um desconhecido, pede para clicar em “Habilitar conteúdo”. Qual é o risco?',
              ops: [
                'Habilitar liga macros, que podem instalar um programa malicioso',
                'Nenhum: só mostra as imagens',
                'O documento fica mais bonito'
              ],
              c: 0,
              exp: 'Macros são pequenos programas dentro do documento. Num arquivo de um desconhecido, deixe desligado.'
            }
          ]
        },
        {
          id: 'sp4l4',
          titulo: 'Cliquei. E agora?',
          exs: [
            {
              t: 'texto',
              titulo: 'Depende do que você fez depois',
              blocos: [
                {
                  p: 'Clicar por engano acontece com qualquer um, inclusive com gente que trabalha com segurança. O importante é agir rápido, de acordo com o que aconteceu:'
                },
                {
                  tabela: {
                    cab: ['O que aconteceu', 'O que fazer'],
                    codigo: [],
                    linhas: [
                      ['Só abri o link e fechei', 'Na maioria das vezes, nada grave. Fique atento a mensagens estranhas nos próximos dias'],
                      ['Digitei uma senha', 'Troque essa senha agora, e em todo lugar onde você usava a mesma, e ative a verificação em duas etapas'],
                      ['Passei dados do cartão', 'Ligue para o número do verso do cartão e peça o bloqueio'],
                      ['Instalei um arquivo ou aplicativo', 'Desligue a internet do aparelho, desinstale e peça ajuda; em casos graves, restaure o aparelho']
                    ]
                  }
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Você digitou a senha do e-mail num site falso. O que fazer primeiro?',
              ops: [
                'Trocar a senha do e-mail na hora, pelo site verdadeiro, e ativar a verificação em duas etapas',
                'Esperar para ver se algo acontece',
                'Fechar o navegador e esquecer'
              ],
              c: 0,
              exp: 'O golpista pode usar a senha em minutos. Trocar rápido fecha a porta. E troque também onde você repetia essa senha.'
            },
            {
              t: 'escolha',
              p: 'Você passou o número e o código de segurança do cartão num site falso. Qual é o passo certo?',
              ops: [
                'Ligar para o número do verso do cartão e pedir o bloqueio',
                'Trocar a senha do e-mail',
                'Esperar a fatura chegar'
              ],
              c: 0,
              exp: 'Com os dados do cartão, o golpista faz compras pela internet. O bloqueio impede novas compras, e o banco pode contestar as que já foram feitas.'
            },
            {
              t: 'texto',
              titulo: 'Sem vergonha de avisar',
              blocos: [
                {
                  p: 'Muita gente esconde que caiu num golpe por vergonha, e isso só ajuda o golpista. Avise o banco, a família e, se for no trabalho, a equipe de informática. Quanto antes, mais dá para fazer.'
                },
                {
                  p: 'E depois, fique de olho: confira o extrato e a fatura nos dias seguintes e desconfie de quem entrar em contato oferecendo “recuperar o dinheiro perdido”, que é um golpe em cima do golpe.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Depois de cair num golpe, alguém liga oferecendo recuperar o seu dinheiro mediante uma taxa. O que é isso?',
              ops: [
                'Outro golpe, que mira quem acabou de perder dinheiro',
                'Um serviço do Banco Central',
                'A polícia'
              ],
              c: 0,
              exp: 'Quem já caiu uma vez está numa lista, e golpistas sabem que a pessoa está desesperada. A recuperação de verdade é pelo seu banco e pelo boletim de ocorrência.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem: digitei a senha do banco num site falso',
              lines: [
                'Ligar para o banco pelo número oficial e avisar',
                'Trocar a senha pelo aplicativo ou site verdadeiro',
                'Conferir o extrato em busca de movimentações estranhas',
                'Registrar um boletim de ocorrência se houver prejuízo'
              ],
              exp: 'O banco consegue bloquear e acompanhar a conta. O boletim de ocorrência ajuda a contestar e a investigar.'
            }
          ]
        }
      ]
    }
  ]
});
