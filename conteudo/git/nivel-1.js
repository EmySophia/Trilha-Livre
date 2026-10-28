/* Trilha Livre · Git e GitHub · Nível 1: Antes do Git
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'git',
  n: 1,
  titulo: 'Antes do Git',
  desc: 'Para que serve o controle de versões, o terminal e a configuração.',
  videos: [
    {
      titulo: 'Curso de Git e GitHub',
      canal: 'Curso em Vídeo (Gustavo Guanabara)',
      obs: 'as primeiras aulas explicam o que é versionamento; o curso usa o GitHub Desktop, sem terminal',
      url: 'https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA'
    },
    {
      tipo: 'texto',
      titulo: 'Pro Git, em português',
      canal: 'Scott Chacon e Ben Straub, livro aberto',
      obs: 'capítulo 1: começando',
      url: 'https://git-scm.com/book/pt-br/v2'
    }
  ],
  unidades: [
    {
      id: 'gtu1',
      titulo: 'Por que o Git',
      conceito: 'versão',
      desc: 'Guardar a história do seu trabalho.',
      licoes: [
        {
          id: 'gt1l1',
          titulo: 'Chega de final_v2_agora_vai',
          exs: [
            {
              t: 'texto',
              titulo: 'Uma máquina do tempo para pastas',
              blocos: [
                {
                  p: 'Quem nunca teve uma pasta com trabalho.docx, trabalho_v2.docx e trabalho_final_agora_vai.docx? O Git resolve isso: ele guarda fotos do seu projeto ao longo do tempo, chamadas commits, e deixa voltar a qualquer uma delas.'
                },
                {
                  p: 'Cada commit diz o que mudou, quem mudou, quando e por quê. Dá para comparar versões, desfazer um erro, testar uma ideia num ramo separado e juntar o trabalho de várias pessoas sem uma apagar o que a outra fez.'
                },
                {
                  tabela: {
                    cab: ['Nome', 'O que é'],
                    codigo: [],
                    linhas: [
                      [
                        'Git',
                        'um programa gratuito e livre que roda no seu computador e guarda as versões'
                      ],
                      [
                        'repositório',
                        'uma pasta acompanhada pelo Git, com toda a história dela'
                      ],
                      ['commit', 'uma foto do projeto num momento, com uma mensagem'],
                      [
                        'GitHub',
                        'um site que guarda repositórios na internet, para fazer backup, publicar e colaborar'
                      ]
                    ]
                  }
                },
                {
                  p: 'O Git foi criado em 2005 por Linus Torvalds, o mesmo do Linux, para organizar o trabalho de milhares de pessoas no código do sistema. O GitHub é de uma empresa, a Microsoft. Existem alternativas, como o GitLab e o Codeberg, que funcionam com o mesmo Git.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual é a diferença entre Git e GitHub?',
              ops: [
                'Git é o programa que guarda as versões; GitHub é um site que hospeda repositórios',
                'São a mesma coisa',
                'GitHub é o programa; Git é o site'
              ],
              c: 0,
              exp: 'Dá para usar o Git sem o GitHub, só no seu computador.'
            },
            {
              t: 'escolha',
              p: 'O que é um commit?',
              ops: [
                'Uma foto do projeto num momento, com uma mensagem',
                'Um arquivo apagado',
                'Um site publicado'
              ],
              c: 0,
              exp: 'A história do projeto é uma sequência de commits.'
            },
            {
              t: 'escolha',
              p: 'Quem criou o Git, e para quê?',
              ops: [
                'Linus Torvalds, para organizar o desenvolvimento do Linux',
                'A Microsoft, para vender o GitHub',
                'O Google, para guardar fotos'
              ],
              c: 0
            }
          ]
        },
        {
          id: 'gt1l2',
          titulo: 'O terminal',
          exs: [
            {
              t: 'texto',
              titulo: 'Conversando com o computador por texto',
              blocos: [
                {
                  p: 'O terminal é um programa em que você digita comandos em vez de clicar. No Windows, use o Git Bash, que vem com o Git, ou o PowerShell; no Mac e no Linux, o Terminal. O `$` no começo da linha só indica onde se digita: não é para escrever.'
                },
                {
                  tabela: {
                    cab: ['Comando', 'O que faz'],
                    linhas: [
                      ['pwd', 'mostra em que pasta você está'],
                      ['ls', 'lista os arquivos da pasta'],
                      ['cd pasta', 'entra numa pasta'],
                      ['cd ..', 'volta para a pasta de cima'],
                      ['mkdir nome', 'cria uma pasta'],
                      ['clear', 'limpa a tela']
                    ]
                  }
                },
                {
                  code: `$ pwd
/home/ana
$ mkdir meu-site
$ cd meu-site
$ pwd
/home/ana/meu-site`
                },
                {
                  dica: 'O til, ~, é um atalho para a sua pasta pessoal. A tecla Tab completa nomes de pastas e arquivos: digite o começo e aperte Tab.'
                }
              ]
            },
            {
              t: 'comando',
              p: 'Mostre em que pasta você está',
              sol: 'pwd',
              pasta: '~',
              saida: '/home/ana',
              exp: 'pwd vem de print working directory: mostre a pasta de trabalho.'
            },
            {
              t: 'comando',
              p: 'Crie uma pasta chamada meu-site',
              sol: 'mkdir meu-site',
              pasta: '~',
              antes: ['$ pwd', '/home/ana'],
              exp: 'mkdir vem de make directory.'
            },
            {
              t: 'comando',
              p: 'Entre na pasta meu-site',
              sol: 'cd meu-site',
              pasta: '~',
              antes: ['$ mkdir meu-site'],
              aceita: ['cd meu-site/', 'cd ./meu-site'],
              exp: 'Depois disso, os próximos comandos acontecem dentro dela.'
            },
            {
              t: 'comando',
              p: 'Liste os arquivos da pasta',
              sol: 'ls',
              pasta: '~/meu-site',
              aceita: ['ls -l', 'ls -la', 'ls -a', 'dir'],
              saida: 'index.html  estilo.css',
              exp: 'No Prompt de Comando do Windows, o equivalente é dir.'
            }
          ]
        },
        {
          id: 'gt1l3',
          titulo: 'Instalar e configurar',
          exs: [
            {
              t: 'texto',
              titulo: 'Uma vez por computador',
              blocos: [
                {
                  p: 'Instale o Git pelo site oficial, git-scm.com. No Windows, o instalador traz o Git Bash. No Mac, o Git vem com as ferramentas de desenvolvedor. No Linux, use o gerenciador de pacotes, como `sudo apt install git`. Para conferir, peça a versão:'
                },
                {
                  code: `$ git --version
git version 2.47.0`
                },
                {
                  p: 'Depois, diga ao Git o seu nome e o seu e-mail. Eles vão em cada commit que você fizer. Use o mesmo e-mail da sua conta no GitHub.'
                },
                {
                  code: `$ git config --global user.name "Ana Souza"
$ git config --global user.email "ana@exemplo.com"
$ git config --global init.defaultBranch main`
                },
                {
                  p: 'O `--global` vale para todos os projetos do computador. A última linha faz os repositórios novos começarem com o ramo principal chamado main, o nome usado hoje no GitHub.'
                },
                {
                  dica: 'Os comandos do Git sempre começam com `git`, seguido do que você quer fazer.'
                }
              ]
            },
            {
              t: 'comando',
              p: 'Confira se o Git está instalado, pedindo a versão',
              sol: 'git --version',
              aceita: ['git version', 'git -v'],
              saida: 'git version 2.47.0',
              exp: 'Se aparecer comando não encontrado, o Git ainda não está instalado.'
            },
            {
              t: 'comando',
              p: 'Configure o seu nome no Git (pode ser qualquer nome, entre aspas)',
              sol: 'git config --global user.name "Ana Souza"',
              aceita: ['/^git config --global user\\.name "[^"]+"$/'],
              dica: 'git config --global user.name "Seu Nome"',
              exp: 'As aspas são necessárias porque o nome tem espaço.'
            },
            {
              t: 'comando',
              p: 'Agora configure o e-mail',
              sol: 'git config --global user.email "ana@exemplo.com"',
              aceita: ['/^git config --global user\\.email "?[^" ]+@[^" ]+"?$/'],
              antes: ['$ git config --global user.name "Ana Souza"'],
              dica: 'Igual ao do nome, mas com user.email.',
              exp: 'Use o mesmo e-mail da sua conta no GitHub para os commits aparecerem no seu perfil.'
            }
          ]
        }
      ]
    }
  ]
});
