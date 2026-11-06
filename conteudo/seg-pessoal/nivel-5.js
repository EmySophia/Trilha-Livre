/* Trilha Livre · Segurança para todo mundo · Nível 5: Celular e computador
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'seg-pessoal',
  n: 5,
  titulo: 'Celular e computador',
  desc: 'Atualizações, celular roubado, aplicativos, Wi-Fi e cópias de segurança.',
  unidades: [
    {
      id: 'spu7',
      titulo: 'O aparelho',
      conceito: 'atualizar',
      desc: 'Atualizações, bloqueio de tela, celular roubado e aplicativos.',
      licoes: [
        {
          id: 'sp5l1',
          titulo: 'Atualizações',
          exs: [
            {
              t: 'texto',
              titulo: 'Por que atualizar',
              blocos: [
                {
                  p: 'Todo programa tem falhas que ninguém percebeu quando ele foi feito. Quando alguém descobre uma falha de segurança, chamada de **vulnerabilidade**, a empresa corrige e manda a correção numa **atualização**.'
                },
                {
                  p: 'O problema é que a correção também avisa os golpistas de que a falha existe. A partir daí, quem não atualizou fica com uma porta conhecida aberta. Por isso atualizar logo é uma das proteções mais simples e eficientes.'
                },
                {
                  dica: 'Ative as atualizações automáticas do sistema e dos aplicativos. Assim você não precisa lembrar.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que uma atualização de segurança faz?',
              ops: [
                'Corrige falhas que poderiam ser usadas para invadir o aparelho',
                'Só muda as cores do sistema',
                'Deixa o celular mais lento de propósito'
              ],
              c: 0,
              exp: 'Muitas atualizações trazem novidades, mas as de segurança fecham portas que já são conhecidas pelos golpistas.'
            },
            {
              t: 'escolha',
              p: 'Por que deixar uma atualização para depois aumenta o risco?',
              ops: [
                'Depois que a correção sai, a falha fica conhecida, e quem não atualizou continua com ela aberta',
                'Porque a atualização some se demorar',
                'Não aumenta: tanto faz atualizar hoje ou daqui a um ano'
              ],
              c: 0,
              exp: 'A correção é pública. Golpistas estudam as atualizações justamente para atacar quem ainda não as instalou.'
            },
            {
              t: 'texto',
              titulo: 'Aparelho que não recebe mais atualização',
              blocos: [
                {
                  p: 'Celulares e computadores antigos param de receber atualizações depois de alguns anos. Eles continuam funcionando, mas as falhas descobertas depois disso nunca mais serão corrigidas.'
                },
                {
                  p: 'Num aparelho assim, evite o que é mais sensível, como o aplicativo do banco, e considere usar outro aparelho para isso. Ao comprar um celular, vale ver por quantos anos o fabricante promete atualizações.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Seu celular antigo não recebe atualizações há três anos. Qual é o cuidado mais sensato?',
              ops: [
                'Evitar usar nele o aplicativo do banco e outras contas sensíveis',
                'Desligar o Wi-Fi para sempre',
                'Nenhum: se funciona, está seguro'
              ],
              c: 0,
              exp: 'Funcionar não é estar protegido. As falhas descobertas desde então continuam abertas nesse aparelho.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem o que acontece com uma falha de segurança',
              lines: [
                'Alguém descobre uma falha num programa',
                'A empresa cria uma correção',
                'A correção chega numa atualização',
                'Quem atualiza fica protegido; quem não atualiza continua exposto'
              ],
              exp: 'A janela de perigo maior é entre a correção sair e você instalar. Atualização automática fecha essa janela.'
            }
          ]
        },
        {
          id: 'sp5l2',
          titulo: 'Bloqueio de tela e celular roubado',
          exs: [
            {
              t: 'texto',
              titulo: 'A primeira tranca',
              blocos: [
                {
                  p: 'O celular guarda o banco, o e-mail, o WhatsApp e as fotos. Sem bloqueio de tela, quem pegar o aparelho tem acesso a tudo. Use uma senha ou um PIN de pelo menos 6 dígitos, e a biometria (digital ou rosto) para o dia a dia.'
                },
                {
                  p: 'Desenhos de desbloqueio são fracos: dá para adivinhar pela marca do dedo na tela ou olhando por cima do ombro. E ative o **PIN do chip**: ele impede que o ladrão coloque o seu chip em outro celular e receba os seus códigos por SMS.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Por que ativar o PIN do chip?',
              ops: [
                'Para o ladrão não conseguir usar o seu chip em outro celular e receber os seus códigos por SMS',
                'Para economizar bateria',
                'Para bloquear ligações de telemarketing'
              ],
              c: 0,
              exp: 'Com o seu chip, dá para receber os códigos de recuperação de várias contas. O PIN do chip trava isso.'
            },
            {
              t: 'escolha',
              p: 'Qual bloqueio de tela é o mais fraco?',
              ops: ['Um desenho simples', 'Uma senha de 8 caracteres', 'Um PIN de 6 dígitos'],
              c: 0,
              exp: 'Desenhos simples são fáceis de ver de longe e deixam marca de gordura na tela. Prefira senha ou PIN, com biometria para não precisar digitar toda hora.'
            },
            {
              t: 'texto',
              titulo: 'Se o celular for roubado',
              blocos: [
                {
                  passos: [
                    'De outro aparelho, use o Encontre meu dispositivo (Android) ou o Buscar (iPhone) para bloquear e, se preciso, apagar o celular à distância',
                    'Ligue para a operadora e peça o bloqueio da linha e do aparelho',
                    'Avise os seus bancos para bloquearem o acesso pelo aparelho roubado',
                    'Troque a senha do e-mail principal e encerre as sessões abertas no celular',
                    'Registre um boletim de ocorrência'
                  ]
                },
                {
                  dica: 'O programa Celular Seguro, do governo federal, avisa bancos e operadoras parceiros de uma vez. Cadastre o seu aparelho antes de precisar.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Seu celular foi roubado. Qual destas providências NÃO ajuda a proteger as suas contas?',
              ops: [
                'Mandar mensagem para o próprio número pedindo o celular de volta',
                'Pedir à operadora o bloqueio da linha',
                'Avisar o banco'
              ],
              c: 0,
              exp: 'Bloquear a linha impede o uso do seu número para receber códigos, e o banco bloqueia o acesso pelo aparelho. A mensagem não protege nada.'
            },
            {
              t: 'escolha',
              p: 'Para que serve apagar o celular à distância?',
              ops: [
                'Para que ninguém acesse os seus dados se não houver chance de recuperar o aparelho',
                'Para o celular voltar sozinho para você',
                'Para cancelar a linha'
              ],
              c: 0,
              exp: 'Apagar remove os seus dados do aparelho. Se você tiver backup, nada se perde: é só restaurar no celular novo.'
            }
          ]
        },
        {
          id: 'sp5l3',
          titulo: 'Aplicativos e permissões',
          exs: [
            {
              t: 'texto',
              titulo: 'De onde vem o aplicativo',
              blocos: [
                {
                  p: 'Instale aplicativos só pela **loja oficial** do celular. As lojas não são perfeitas, mas conferem os aplicativos. Um aplicativo baixado de um link, pirata ou “desbloqueado”, pode vir com um programa escondido.'
                },
                {
                  p: 'Mesmo na loja oficial, confira o nome de quem publicou, o número de downloads e as avaliações. Golpistas publicam cópias de aplicativos famosos com nomes quase iguais.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Um site oferece a versão “premium liberada” de um aplicativo pago, num arquivo para instalar. Qual é o risco?',
              ops: [
                'O arquivo pode trazer um programa malicioso escondido',
                'Nenhum: é só um aplicativo grátis',
                'O aplicativo pode ficar em inglês'
              ],
              c: 0,
              exp: 'Ninguém distribui aplicativo pago de graça por bondade. Muitas vezes o preço é o controle do seu celular.'
            },
            {
              t: 'texto',
              titulo: 'Permissões',
              blocos: [
                {
                  p: 'Ao instalar ou usar um aplicativo, ele pede **permissões**: câmera, microfone, localização, contatos, SMS. Pergunte sempre: ele precisa disso para funcionar?'
                },
                {
                  tabela: {
                    cab: ['Aplicativo', 'Pede', 'Faz sentido?'],
                    codigo: [],
                    linhas: [
                      ['Mapa', 'localização', 'sim'],
                      ['Lanterna', 'contatos e SMS', 'não: desconfie'],
                      ['Joguinho', 'microfone', 'quase nunca'],
                      ['Qualquer um', 'acessibilidade', 'só os de acessibilidade de verdade: essa permissão deixa o aplicativo ler e tocar na tela por você']
                    ]
                  }
                },
                {
                  dica: 'Programas maliciosos de banco costumam pedir a permissão de acessibilidade, porque com ela conseguem ler a tela e apertar botões sozinhos. Só conceda a aplicativos que você conhece e que precisam dela.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Um aplicativo de lanterna pede acesso aos seus contatos e às suas mensagens. O que fazer?',
              ops: ['Negar e desinstalar', 'Permitir, porque é da loja oficial', 'Permitir só os contatos'],
              c: 0,
              exp: 'Lanterna não precisa de contatos nem de mensagens. Pedir o que não precisa é sinal de que o aplicativo quer os seus dados.'
            },
            {
              t: 'escolha',
              p: 'Por que a permissão de acessibilidade é tão perigosa nas mãos erradas?',
              ops: [
                'Ela deixa o aplicativo ler a tela e tocar em botões por você',
                'Ela aumenta a letra do celular',
                'Ela gasta bateria'
              ],
              c: 0,
              exp: 'Ela foi criada para ajudar pessoas com deficiência, mas permite controlar o aparelho. Golpistas a usam para fazer transferências no seu aplicativo do banco.'
            }
          ]
        }
      ]
    },
    {
      id: 'spu8',
      titulo: 'Rede e cópias',
      conceito: 'backup',
      desc: 'Wi-Fi, o roteador de casa e cópias de segurança.',
      licoes: [
        {
          id: 'sp5l4',
          titulo: 'Wi-Fi e o roteador de casa',
          exs: [
            {
              t: 'texto',
              titulo: 'Wi-Fi público',
              blocos: [
                {
                  p: 'Hoje, a maioria dos sites e aplicativos usa conexão cifrada, então usar o Wi-Fi da padaria é bem menos perigoso do que já foi. Os riscos que continuam:'
                },
                {
                  passos: [
                    'Redes falsas: alguém cria uma rede com o nome “Aeroporto Grátis” para que você se conecte nela',
                    'Avisos de “conexão não segura” ou de certificado: num Wi-Fi público, não continue',
                    'Páginas de login da rede que pedem dados demais, como CPF e senha de e-mail'
                  ]
                },
                {
                  dica: 'Para o banco e compras, prefira os dados móveis do celular. É uma rede que você já conhece.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'No Wi-Fi do aeroporto, o navegador avisa: “Sua conexão não é particular”. O que fazer?',
              ops: [
                'Não continuar e usar os dados móveis',
                'Clicar em avançado e continuar mesmo assim',
                'Desligar o aviso nas configurações'
              ],
              c: 0,
              exp: 'O aviso pode indicar que alguém está no meio do caminho tentando ler a conexão. Num Wi-Fi público, leve o aviso a sério.'
            },
            {
              t: 'texto',
              titulo: 'O roteador de casa',
              blocos: [
                {
                  p: 'O roteador é a porta de entrada da sua casa na internet. Três cuidados:'
                },
                {
                  passos: [
                    'Troque a senha de administração, aquela que vem na etiqueta ou no manual, como admin',
                    'Use uma senha forte no Wi-Fi, com a proteção WPA2 ou WPA3',
                    'Atualize o roteador, ou peça à operadora, quando houver atualização'
                  ]
                },
                {
                  p: 'As senhas de fábrica são conhecidas e estão em listas na internet. Um roteador com a senha de fábrica pode ser controlado por qualquer um que esteja na rede.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Por que trocar a senha de administração que veio de fábrica no roteador?',
              ops: [
                'Porque senhas de fábrica são conhecidas e estão em listas na internet',
                'Porque ela expira em um mês',
                'Para a internet ficar mais rápida'
              ],
              c: 0,
              exp: 'Muitos roteadores do mesmo modelo saem com a mesma senha, como admin. Quem sabe o modelo sabe a senha.'
            },
            {
              t: 'escolha',
              p: 'Qual destas é a melhor configuração para o Wi-Fi de casa?',
              ops: [
                'Proteção WPA2 ou WPA3 com uma senha longa',
                'Rede aberta, para os vizinhos poderem usar',
                'Senha 12345678, fácil de passar para as visitas'
              ],
              c: 0,
              exp: 'Rede aberta deixa qualquer um entrar na mesma rede dos seus aparelhos. Para visitas, muitos roteadores têm uma rede de convidados separada.'
            }
          ]
        },
        {
          id: 'sp5l5',
          titulo: 'Backup e sequestro de dados',
          exs: [
            {
              t: 'texto',
              titulo: 'A cópia que salva',
              blocos: [
                {
                  p: '**Backup** é uma cópia de segurança dos seus arquivos. Ele protege contra quase tudo: celular roubado, computador quebrado, arquivo apagado por engano e o sequestro de dados.'
                },
                {
                  p: 'No **sequestro de dados**, ou ransomware, um programa malicioso cifra todos os seus arquivos e pede um resgate para devolver. Pagar não garante nada. Com backup, você apaga tudo, restaura a cópia e segue a vida.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Um programa trancou todos os arquivos do seu computador e pede resgate. O que mais ajuda nessa hora?',
              ops: [
                'Ter um backup recente guardado fora do computador',
                'Pagar o resgate rápido',
                'Reiniciar o computador várias vezes'
              ],
              c: 0,
              exp: 'Com uma cópia fora do computador, os arquivos voltam sem pagar nada. Pagar financia o crime e muitas vezes não devolve os arquivos.'
            },
            {
              t: 'texto',
              titulo: 'A regra do 3, 2, 1',
              blocos: [
                {
                  p: 'Uma regra fácil de lembrar para um backup que funciona:'
                },
                {
                  tabela: {
                    cab: ['Número', 'Quer dizer', 'Exemplo'],
                    codigo: [],
                    linhas: [
                      ['3', 'três cópias dos arquivos importantes', 'o original e mais duas cópias'],
                      ['2', 'em dois tipos de lugar diferentes', 'a nuvem e um HD externo'],
                      ['1', 'uma cópia fora de casa', 'a nuvem, ou um HD na casa de um parente']
                    ]
                  }
                },
                {
                  dica: 'Deixe o HD externo desconectado depois de copiar. Um programa de sequestro de dados tranca também os discos que estão ligados ao computador.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Por que guardar uma cópia fora de casa?',
              ops: [
                'Para não perder tudo num roubo, incêndio ou enchente que atinja a casa',
                'Porque é mais barato',
                'Porque a lei exige'
              ],
              c: 0,
              exp: 'Se todas as cópias estão no mesmo lugar, um único acidente leva todas. A nuvem resolve isso para a maioria das pessoas.'
            },
            {
              t: 'escolha',
              p: 'Por que desconectar o HD externo depois do backup?',
              ops: [
                'Um programa de sequestro de dados também tranca os discos ligados ao computador',
                'Para o HD não esquentar',
                'Porque o HD só funciona uma vez'
              ],
              c: 0,
              exp: 'Um backup que fica sempre ligado pode ser trancado junto com o original. Desconectado, ele fica fora do alcance.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem: montando o seu backup',
              lines: [
                'Escolher o que é importante: fotos, documentos, trabalhos',
                'Ativar o backup automático na nuvem',
                'Fazer de tempos em tempos uma cópia num HD externo e desconectar',
                'Testar de vez em quando se dá para abrir os arquivos copiados'
              ],
              exp: 'Um backup que nunca foi testado pode estar vazio ou corrompido. Abrir alguns arquivos de vez em quando garante que a cópia funciona.'
            }
          ]
        }
      ]
    }
  ]
});
