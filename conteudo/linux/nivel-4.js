/* Trilha Livre · Linux e terminal · Nível 4: Permissões
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'linux',
  n: 4,
  titulo: 'Permissões',
  desc: 'Quem pode ler, escrever e executar cada arquivo, e como mudar isso.',
  unidades: [
    {
      id: 'lxu7',
      titulo: 'Ler permissões',
      conceito: 'rwx',
      desc: 'O ls -l, o dono, o grupo e os outros.',
      licoes: [
        {
          id: 'lx4l1',
          titulo: 'O ls -l por dentro',
          exs: [
            {
              t: 'texto',
              titulo: 'A listagem detalhada',
              blocos: [
                {
                  p: 'Com a opção -l (de long, “longa”), o ls mostra uma linha cheia de informação para cada item:'
                },
                {
                  code: '-rw-r--r-- 1 ana ana   120 nov  5 10:00 notas.txt\ndrwxr-xr-x 1 ana ana  4096 nov  5 10:00 fotos',
                  lang: 'texto'
                },
                {
                  tabela: {
                    cab: ['Pedaço', 'Quer dizer'],
                    codigo: [0],
                    linhas: [
                      ['- ou d', 'o primeiro caractere: - é arquivo, d é pasta (directory)'],
                      ['rw-r--r--', 'as permissões, que você vai ver na próxima lição'],
                      ['ana ana', 'o dono e o grupo do arquivo'],
                      ['120', 'o tamanho, em bytes'],
                      ['nov  5 10:00', 'a data da última alteração']
                    ]
                  }
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Use ls -l e escreva quem é o dono do arquivo contrato.pdf',
              usuarios: ['bia'],
              fs: { 'contrato.pdf': { c: 'pdf', dono: 'bia' }, 'notas.txt': 'oi\n' },
              objetivo: { resposta: 'bia' },
              sol: ['ls -l'],
              dica: 'O dono é a primeira palavra depois do número 1.',
              exp: 'A Bia é a dona do contrato, mesmo ele estando na pasta da Ana. Dono e lugar são coisas diferentes.'
            },
            {
              t: 'terminal',
              p: 'Três itens não têm extensão no nome. Use ls -l e escreva o nome do único que é uma pasta',
              fs: { 'relatorios/jan.txt': 'jan\n', 'dados': 'arquivo sem extensão\n', 'leiame': 'outro arquivo\n' },
              objetivo: { resposta: 'relatorios' },
              sol: ['ls -l'],
              dica: 'Olhe o primeiro caractere de cada linha.',
              exp: 'A linha de relatorios começa com d. No Linux, extensão é só parte do nome: quem diz se é pasta é o d.'
            },
            {
              t: 'escolha',
              p: 'O que quer dizer o d no começo de drwxr-xr-x?',
              mono: true,
              ops: ['Que é uma pasta (diretório)', 'Que o arquivo foi apagado', 'Que o dono é o root'],
              c: 0,
              exp: 'd de directory. Num arquivo comum, aparece um traço no lugar.'
            }
          ]
        },
        {
          id: 'lx4l2',
          titulo: 'Dono, grupo e outros',
          exs: [
            {
              t: 'texto',
              titulo: 'Três grupos de três letras',
              blocos: [
                {
                  p: 'As nove letras depois do primeiro caractere são três grupos de três. O primeiro grupo vale para o dono; o segundo, para o grupo do arquivo; o terceiro, para todos os outros.'
                },
                {
                  code: '-  rw-  r--  r--\n   dono grupo outros',
                  lang: 'texto'
                },
                {
                  tabela: {
                    cab: ['Letra', 'Num arquivo', 'Numa pasta'],
                    codigo: [0],
                    linhas: [
                      ['r', 'ler o conteúdo', 'listar o que tem dentro'],
                      ['w', 'alterar o conteúdo', 'criar e apagar coisas dentro'],
                      ['x', 'executar, como programa', 'entrar na pasta'],
                      ['-', 'essa permissão não existe', 'idem']
                    ]
                  }
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O arquivo tem -rw-r-----. Quem pode ler?',
              mono: true,
              ops: ['O dono e o grupo', 'Só o dono', 'Todo mundo'],
              c: 0,
              exp: 'Dono rw-, grupo r--, outros ---. Os outros não têm nenhuma permissão.'
            },
            {
              t: 'terminal',
              p: 'Tente ler o arquivo diario.txt. Você consegue? Responda sim ou não',
              fs: { 'diario.txt': { c: 'querido diário...\n', dono: 'root', modo: '600' } },
              objetivo: { resposta: ['não', 'nao', 'Não', 'Nao'], executou: '^(cat|head|tail|less|more) ' },
              sol: ['cat diario.txt', 'ls -l diario.txt'],
              dica: 'Tente cat diario.txt. Depois, ls -l diario.txt mostra o porquê.',
              exp: 'O dono é o root e as permissões são rw-------: só ele lê. Para você, Permissão negada.'
            },
            {
              t: 'texto',
              titulo: 'O x das pastas',
              blocos: [
                {
                  p: 'Numa pasta, o r deixa listar os nomes, mas é o x que deixa entrar e abrir o que tem dentro. Uma pasta pessoal com drwx------ é fechada para todo mundo menos o dono.'
                },
                {
                  dica: 'É assim que o Linux separa os usuários de um mesmo computador: cada um tem a sua pasta, e as permissões impedem que um mexa nas coisas do outro.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Tente entrar na pasta /root, que é a pasta pessoal do administrador. Escreva a mensagem de erro que aparece depois dos últimos dois-pontos',
              objetivo: { resposta: ['Permissão negada', 'permissão negada'] },
              sol: ['cd /root'],
              dica: 'cd /root',
              exp: 'A pasta /root é drwx------: só o root entra.'
            }
          ]
        }
      ]
    },
    {
      id: 'lxu8',
      titulo: 'Mudar permissões',
      conceito: 'chmod',
      desc: 'chmod com números e com letras, scripts e permissões perigosas.',
      licoes: [
        {
          id: 'lx4l3',
          titulo: 'chmod com números',
          exs: [
            {
              t: 'texto',
              titulo: 'Cada letra vale um número',
              blocos: [
                {
                  p: 'Cada grupo de três letras vira um número, somando: r vale 4, w vale 2 e x vale 1. Assim, rwx é 4 + 2 + 1 = 7, rw- é 6 e r-- é 4.'
                },
                {
                  tabela: {
                    cab: ['Número', 'Letras', 'Uso comum'],
                    codigo: [0, 1],
                    linhas: [
                      ['755', 'rwxr-xr-x', 'programas e pastas: todos usam, só o dono altera'],
                      ['644', 'rw-r--r--', 'arquivos comuns: todos leem, só o dono altera'],
                      ['600', 'rw-------', 'arquivos privados, como senhas e chaves'],
                      ['700', 'rwx------', 'pastas e programas só do dono']
                    ]
                  }
                }
              ]
            },
            {
              t: 'numero',
              p: 'Quanto vale r-x, somando r = 4, w = 2 e x = 1?',
              r: 5,
              exp: 'r vale 4, não há w, e x vale 1: 4 + 1 = 5.'
            },
            {
              t: 'numero',
              p: 'Escreva rwxr-x--- em número, com os três algarismos',
              r: 750,
              dica: 'Faça um grupo de cada vez: rwx, r-x e ---.',
              exp: 'rwx é 7, r-x é 5 e --- é 0: 750.'
            },
            {
              t: 'texto',
              titulo: 'Usando o chmod',
              blocos: [
                {
                  p: 'O chmod (change mode) muda as permissões: chmod 600 senhas.txt. Só o dono do arquivo, ou o root, pode fazer isso.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'O arquivo senhas.txt está legível por todos. Deixe-o com leitura e escrita só para você, e nada para ninguém mais',
              fs: { 'senhas.txt': 'banco: ****\n' },
              objetivo: { modo: { arquivo: 'senhas.txt', modo: '600' } },
              sol: ['chmod 600 senhas.txt'],
              dica: 'rw------- em número.',
              exp: '600: rw- para você (6) e nada para o grupo e os outros (0 e 0). Confira com ls -l.'
            }
          ]
        },
        {
          id: 'lx4l4',
          titulo: 'chmod com letras',
          exs: [
            {
              t: 'texto',
              titulo: 'Mudar só um pedaço',
              blocos: [
                {
                  p: 'Com números, você escreve todas as permissões de uma vez. Com letras, dá para mudar só um pedaço: quem (u dono, g grupo, o outros, a todos), a operação (+ dá, - tira, = define) e a permissão (r, w, x).'
                },
                {
                  tabela: {
                    cab: ['Comando', 'O que faz'],
                    codigo: [0],
                    linhas: [
                      ['chmod u+x script.sh', 'dá ao dono a permissão de executar'],
                      ['chmod o-r diario.txt', 'tira a leitura dos outros'],
                      ['chmod a+r aviso.txt', 'dá leitura a todos'],
                      ['chmod go-rwx chave', 'tira tudo do grupo e dos outros']
                    ]
                  }
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Tire a permissão de leitura dos outros em diario.txt, sem mexer no resto',
              fs: { 'diario.txt': 'hoje...\n' },
              objetivo: { modo: { arquivo: 'diario.txt', modo: '640' } },
              sol: ['chmod o-r diario.txt'],
              dica: 'o de outros, - para tirar, r de leitura.',
              exp: 'De 644 para 640: só o último grupo mudou.'
            },
            {
              t: 'terminal',
              p: 'Dê ao dono a permissão de executar backup.sh, sem mexer no resto',
              fs: { 'backup.sh': '#!/bin/bash\necho feito\n' },
              objetivo: { modo: { arquivo: 'backup.sh', modo: '744' } },
              sol: ['chmod u+x backup.sh'],
              dica: 'u de usuário dono, + para dar, x de executar.',
              exp: 'De 644 para 744. Agora o dono pode rodar o script.'
            },
            {
              t: 'escolha',
              p: 'Qual comando deixa um arquivo legível por todos, sem mexer nas outras permissões?',
              mono: true,
              ops: ['chmod a+r arquivo', 'chmod 777 arquivo', 'chmod o=r arquivo'],
              c: 0,
              exp: 'a+r dá leitura a todos e não toca no resto. O 777 daria tudo a todos; o o=r mexe só nos outros.'
            }
          ]
        },
        {
          id: 'lx4l5',
          titulo: 'Arquivos que viram programas',
          exs: [
            {
              t: 'texto',
              titulo: 'O x de executar',
              blocos: [
                {
                  p: 'Um script é um arquivo de texto com comandos. Para rodá-lo como programa, ele precisa da permissão x, e você chama pelo caminho: ./ola.sh. O ./ quer dizer “o ola.sh desta pasta”.'
                },
                {
                  code: 'ana@trilha:~$ ./ola.sh\nbash: ./ola.sh: Permissão negada\nana@trilha:~$ chmod u+x ola.sh\nana@trilha:~$ ./ola.sh\nOlá!',
                  lang: 'texto'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Rode o script ola.sh. Se der Permissão negada, dê permissão de execução e rode de novo. Escreva a mensagem que ele mostra',
              fs: { 'ola.sh': '#!/bin/bash\necho "Bem-vinda ao Linux, $USER"\n' },
              objetivo: { resposta: ['Bem-vinda ao Linux, ana', 'Bem-vinda ao Linux, ana!'], executou: '^\\./ola\\.sh' },
              sol: ['./ola.sh', 'chmod u+x ola.sh', './ola.sh'],
              dica: 'chmod u+x ola.sh e depois ./ola.sh',
              exp: 'Sem o x, o sistema se recusa a rodar. O $USER do script virou ana, o seu usuário.'
            },
            {
              t: 'texto',
              titulo: 'Por que o ./',
              blocos: [
                {
                  p: 'Quando você digita ls, o sistema procura o programa ls numa lista de pastas confiáveis, como /usr/bin. A pasta em que você está não entra nessa lista de propósito.'
                },
                {
                  p: 'Imagine que alguém deixa um arquivo chamado ls, malicioso, numa pasta compartilhada. Se a pasta atual contasse, bastaria você entrar nela e digitar ls para rodar o programa do invasor. O ./ obriga você a dizer, de propósito: quero rodar o arquivo daqui.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Por que o Linux exige ./ para rodar um programa da pasta atual?',
              ops: [
                'Para que um arquivo malicioso com nome de comando, como ls, não rode sem você querer',
                'Porque o ponto deixa o programa mais rápido',
                'Por costume, sem motivo'
              ],
              c: 0,
              exp: 'É uma decisão de segurança: só roda da pasta atual o que você pedir explicitamente.'
            }
          ]
        },
        {
          id: 'lx4l6',
          titulo: 'Permissões perigosas',
          exs: [
            {
              t: 'texto',
              titulo: 'O 777',
              blocos: [
                {
                  p: 'chmod 777 dá tudo a todos: qualquer usuário do sistema pode ler, alterar e executar. Às vezes alguém usa para “resolver” um erro de permissão, e abre um buraco.'
                },
                {
                  p: 'O caso mais grave: um script que o root roda sozinho, toda noite, mas que qualquer um pode alterar. Um invasor que entrou como usuário comum escreve um comando no script, e na noite seguinte o root roda o comando dele. Isso se chama escalada de privilégio.'
                },
                {
                  dica: 'Regra de bolso: dê a menor permissão que resolve o problema. Quase nada precisa de 777.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Um script que o root roda toda noite tem permissão 777. Qual é o risco?',
              ops: [
                'Qualquer usuário pode alterar o script, e o root vai rodar o que ele colocou lá',
                'O script fica mais lento',
                'Nenhum: só o root roda o script'
              ],
              c: 0,
              exp: 'Quem pode escrever num script que o root executa pode, na prática, agir como root.'
            },
            {
              t: 'texto',
              titulo: 'Achar o que está aberto demais',
              blocos: [
                {
                  p: 'O find procura por permissão: find pasta -perm 777 lista o que tem exatamente 777. É o tipo de varredura que uma auditoria faz, e que um invasor também faz.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Um dos arquivos da pasta site está com permissão 777. Ache com find e deixe-o com 644',
              fs: { 'site/index.html': '<h1>Oi</h1>\n', 'site/config.php': { c: '<?php $senha = "x"; ?>\n', modo: '777' }, 'site/estilo.css': 'body{}\n', 'site/img/logo.png': 'png' },
              objetivo: [{ modo: { arquivo: 'site/config.php', modo: '644' } }, { executou: '^find ' }],
              sol: ['find site -perm 777', 'chmod 644 site/config.php'],
              dica: 'find site -perm 777 acha o arquivo; depois, chmod 644 nele.',
              exp: 'Um arquivo de configuração com senha, alterável por qualquer um: era um buraco. Agora só o dono altera.'
            },
            {
              t: 'escolha',
              p: 'Que permissão é a adequada para uma chave privada, como a de acesso a um servidor?',
              mono: true,
              ops: ['600', '644', '777'],
              c: 0,
              exp: 'Só o dono lê e escreve. Programas como o ssh até se recusam a usar uma chave privada que outros conseguem ler.'
            }
          ]
        }
      ]
    }
  ]
});
