/* Trilha Livre · Linux e terminal · Nível 5: Usuários e o root
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'linux',
  n: 5,
  titulo: 'Usuários e o root',
  desc: 'Os usuários do sistema, o administrador, o sudo e o princípio do menor privilégio.',
  unidades: [
    {
      id: 'lxu9',
      titulo: 'Usuários',
      conceito: 'id, sudo',
      desc: 'Quem existe no sistema, o root e as senhas.',
      licoes: [
        {
          id: 'lx5l1',
          titulo: 'Quem existe no sistema',
          exs: [
            {
              t: 'texto',
              titulo: 'Vários usuários, um computador',
              blocos: [
                {
                  p: 'O Linux nasceu para ser usado por muitas pessoas ao mesmo tempo. Cada usuário tem um nome, um número (o uid), uma pasta pessoal e os seus grupos. O comando id mostra tudo isso:'
                },
                {
                  code: 'ana@trilha:~$ id\nuid=1000(ana) gid=1000(ana) grupos=1000(ana)',
                  lang: 'texto'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Com o comando id, descubra o número do seu usuário (o uid) e escreva-o',
              objetivo: { resposta: '1000' },
              sol: ['id'],
              dica: 'Rode id e olhe o número depois de uid=.',
              exp: 'Na maioria dos sistemas, o primeiro usuário comum recebe o uid 1000. O root é sempre 0.'
            },
            {
              t: 'texto',
              titulo: 'O /etc/passwd',
              blocos: [
                {
                  p: 'A lista de usuários fica em /etc/passwd, com um usuário por linha e os campos separados por dois-pontos:'
                },
                {
                  code: 'carlos:x:1002:1002:carlos:/home/carlos:/bin/bash\n  nome  senha uid gid  nome   pasta pessoal  shell',
                  lang: 'texto'
                },
                {
                  p: 'Apesar do nome, as senhas não ficam aí: o x quer dizer “a senha está em outro arquivo”. Antigamente ficavam, e qualquer usuário conseguia ler. Foi um problema de segurança tão grande que elas foram separadas.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Em /etc/passwd, qual é a pasta pessoal do usuário carlos?',
              usuarios: ['bia', 'carlos'],
              objetivo: { resposta: ['/home/carlos', '/home/carlos/'] },
              sol: ['grep carlos /etc/passwd'],
              dica: 'grep carlos /etc/passwd mostra só a linha dele.',
              exp: 'A pasta pessoal é o sexto campo: /home/carlos.'
            },
            {
              t: 'escolha',
              p: 'O que quer dizer o x no segundo campo de cada linha do /etc/passwd?',
              ops: [
                'Que a senha não está ali, e sim noutro arquivo protegido',
                'Que o usuário está bloqueado',
                'Que a senha é a letra x'
              ],
              c: 0,
              exp: 'As senhas, embaralhadas, ficam em /etc/shadow, que só o root lê. Você vai ver esse arquivo na lição seguinte.'
            }
          ]
        },
        {
          id: 'lx5l2',
          titulo: 'O root e o sudo',
          exs: [
            {
              t: 'texto',
              titulo: 'O superusuário',
              blocos: [
                {
                  p: 'O root (uid 0) é o administrador: as permissões não valem para ele. Ele lê qualquer arquivo, apaga qualquer coisa e muda o dono de tudo. Quando você está como root, o prompt termina em # em vez de $.'
                },
                {
                  p: 'Por segurança, ninguém trabalha como root o tempo todo. Quem tem permissão usa o sudo: sudo comando roda só aquele comando como root, pede a sua senha e registra o que foi feito.'
                },
                {
                  code: 'ana@trilha:~$ cat /etc/shadow\ncat: /etc/shadow: Permissão negada\nana@trilha:~$ sudo cat /etc/shadow\n[sudo] senha para ana:\nroot:$6$...',
                  lang: 'texto'
                },
                {
                  dica: 'Neste terminal simulado, o sudo não pede a senha. Num sistema de verdade, pede a sua senha, e não a do root.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Leia o arquivo /etc/shadow. Sem sudo vai dar erro; com sudo, escreva qual é o primeiro usuário da lista',
              sudo: true,
              objetivo: { resposta: 'root', executou: '^sudo ' },
              sol: ['cat /etc/shadow', 'sudo cat /etc/shadow'],
              dica: 'sudo cat /etc/shadow',
              exp: 'Com sudo, o cat rodou como root, e as permissões deixaram de valer.'
            },
            {
              t: 'texto',
              titulo: 'Nem todo mundo pode',
              blocos: [
                {
                  p: 'Só quem está no grupo de administradores (sudo, em muitos sistemas) pode usar o sudo. Se outra pessoa tentar, o sistema recusa e registra a tentativa.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Neste computador, a Ana é uma usuária comum. Tente rodar sudo whoami. Funcionou? Responda sim ou não',
              objetivo: { resposta: ['não', 'nao', 'Não', 'Nao'], executou: '^sudo ' },
              sol: ['sudo whoami'],
              dica: 'Rode sudo whoami e leia a mensagem.',
              exp: 'A Ana não está no arquivo sudoers, a lista de quem pode usar o sudo. A tentativa fica registrada nos logs.'
            },
            {
              t: 'escolha',
              p: 'O prompt mudou de ana@trilha:~$ para root@trilha:~#. O que isso indica?',
              mono: true,
              ops: ['Que agora você está como root, o administrador', 'Que o terminal travou', 'Que você saiu do sistema'],
              c: 0,
              exp: 'O # avisa que cada comando vai rodar sem as proteções das permissões. Atenção redobrada.'
            }
          ]
        },
        {
          id: 'lx5l3',
          titulo: 'Onde ficam as senhas',
          exs: [
            {
              t: 'texto',
              titulo: 'O /etc/shadow',
              blocos: [
                {
                  p: 'As senhas ficam em /etc/shadow, e não ficam como foram digitadas: ficam como um hash, uma espécie de impressão digital da senha. Do hash não dá para voltar à senha diretamente. Quando você faz login, o sistema calcula o hash do que você digitou e compara.'
                },
                {
                  p: 'Mas, com o hash na mão, um atacante pode testar milhões de senhas no computador dele até achar uma que gere o mesmo hash. É por isso que o /etc/shadow só pode ser lido pelo root, e por isso senhas fortes importam também aqui.'
                },
                {
                  dica: 'Você vai ver hashes com calma no curso de Criptografia.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Por que o sistema guarda o hash da senha, e não a senha?',
              ops: [
                'Para que, mesmo se o arquivo vazar, as senhas não apareçam escritas',
                'Para ocupar menos espaço',
                'Porque é mais rápido de digitar'
              ],
              c: 0,
              exp: 'Ninguém, nem o administrador, precisa saber a sua senha: basta conferir o hash.'
            },
            {
              t: 'terminal',
              p: 'Veja as permissões de /etc/shadow com ls -l e escreva as dez primeiras letras da linha',
              objetivo: { resposta: '-rw-r-----' },
              sol: ['ls -l /etc/shadow'],
              dica: 'ls -l /etc/shadow',
              exp: 'O root lê e escreve, o grupo shadow só lê, e os outros não têm nada. Compare com o /etc/passwd, que todos leem.'
            },
            {
              t: 'escolha',
              p: 'Um atacante conseguiu uma cópia do /etc/shadow. O que ele pode fazer com os hashes?',
              ops: [
                'Testar muitas senhas no computador dele até achar alguma que gere o mesmo hash',
                'Ler as senhas diretamente, como texto',
                'Nada, hashes são inúteis'
              ],
              c: 0,
              exp: 'Senhas curtas ou comuns caem rápido nesse teste. Senhas longas e únicas resistem.'
            }
          ]
        }
      ]
    },
    {
      id: 'lxu10',
      titulo: 'Privilégios',
      conceito: 'menor privilégio',
      desc: 'Usar o root só quando precisa, e mudar donos.',
      licoes: [
        {
          id: 'lx5l4',
          titulo: 'O menor privilégio',
          exs: [
            {
              t: 'texto',
              titulo: 'Só o necessário',
              blocos: [
                {
                  p: 'O princípio do menor privilégio diz: cada pessoa e cada programa deve ter só as permissões de que precisa, e mais nada. Um servidor de sites, por exemplo, roda com um usuário próprio e limitado, e não como root. Se for invadido, o invasor fica preso nesse usuário.'
                },
                {
                  p: 'Para você, isso vira hábito: use o sudo só no comando que precisa dele e volte a ser usuário comum logo depois.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Por que um servidor de sites não deve rodar como root?',
              ops: [
                'Se ele for invadido, o invasor ganha poder total sobre o sistema',
                'Porque o root é mais lento',
                'Porque o root não consegue abrir sites'
              ],
              c: 0,
              exp: 'Com um usuário limitado, uma invasão do site fica contida. Com root, o sistema inteiro cai junto.'
            },
            {
              t: 'texto',
              titulo: 'Entrar e sair do root',
              blocos: [
                {
                  p: 'Às vezes é preciso fazer várias tarefas como root. sudo su abre uma sessão como root, com o prompt #. Quando terminar, exit volta para o seu usuário.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Entre como root com sudo su, crie a pasta /opt/app e volte para a usuária ana com exit',
              sudo: true,
              objetivo: [{ existe: '/opt/app/' }, { usuario: 'ana' }],
              sol: ['sudo su', 'mkdir -p /opt/app', 'exit'],
              dica: 'Três comandos: sudo su, mkdir -p /opt/app e exit.',
              exp: 'Como ana, você não poderia criar nada em /opt. Como root, pôde. E o exit encerrou o poder extra assim que ele deixou de ser necessário.'
            },
            {
              t: 'escolha',
              p: 'Você terminou as tarefas de administrador numa sessão aberta com sudo su. O que fazer?',
              mono: true,
              ops: ['Digitar exit para voltar ao usuário comum', 'Deixar a sessão de root aberta para a próxima vez', 'Fechar só a janela, sem sair'],
              c: 0,
              exp: 'Uma sessão de root esquecida aberta é um convite para um erro grave, ou para alguém que sentar ao computador.'
            }
          ]
        },
        {
          id: 'lx5l5',
          titulo: 'Mudando o dono: chown',
          exs: [
            {
              t: 'texto',
              titulo: 'chown',
              blocos: [
                {
                  p: 'O chown (change owner) muda o dono de um arquivo: chown bia relatorio.txt. Para mudar também o grupo: chown bia:bia relatorio.txt. Só o root pode dar um arquivo para outra pessoa, então quase sempre se usa com sudo.'
                },
                {
                  dica: 'Por que só o root? Se qualquer um pudesse dar arquivos para os outros, daria para esconder um arquivo malicioso no nome de outra pessoa.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'O arquivo relatorio.txt precisa passar a ser da usuária bia. Mude o dono usando sudo',
              sudo: true,
              usuarios: ['bia'],
              fs: { 'relatorio.txt': 'vendas de outubro\n' },
              objetivo: { dono: { arquivo: 'relatorio.txt', dono: 'bia' } },
              sol: ['sudo chown bia relatorio.txt'],
              dica: 'sudo chown bia relatorio.txt',
              exp: 'Confira com ls -l: agora a dona é a bia.'
            },
            {
              t: 'terminal',
              p: 'Sem sudo, tente mudar o dono de notas.txt para bia. Escreva a mensagem de erro que aparece depois dos últimos dois-pontos',
              usuarios: ['bia'],
              fs: { 'notas.txt': 'minhas notas\n' },
              objetivo: { resposta: ['Operação não permitida', 'operação não permitida'] },
              sol: ['chown bia notas.txt'],
              dica: 'chown bia notas.txt',
              exp: 'Mesmo sendo a dona, a Ana não pode dar o arquivo para outra pessoa. Só o root pode.'
            },
            {
              t: 'escolha',
              p: 'Quem pode mudar o dono de um arquivo para outro usuário?',
              ops: ['Só o root', 'O dono do arquivo', 'Qualquer usuário'],
              c: 0,
              exp: 'Mudar permissões (chmod) o dono pode. Mudar o dono (chown), só o root.'
            }
          ]
        }
      ]
    }
  ]
});
