/* Trilha Livre · Git e GitHub · Nível 5: GitHub
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'git',
  n: 5,
  titulo: 'GitHub',
  desc: 'Repositório on-line, push, clone, pull, README e GitHub Pages.',
  videos: [
    {
      titulo: 'Curso de Git e GitHub',
      canal: 'Curso em Vídeo (Gustavo Guanabara)',
      obs: 'o curso mostra o GitHub pelo site e pelo GitHub Desktop',
      url: 'https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA'
    },
    {
      tipo: 'texto',
      titulo: 'Documentação do GitHub em português',
      canal: 'GitHub',
      obs: 'comece por Introdução',
      url: 'https://docs.github.com/pt/get-started'
    },
    {
      tipo: 'texto',
      titulo: 'GitHub Pages',
      canal: 'GitHub',
      obs: 'a documentação de como publicar sites',
      url: 'https://docs.github.com/pt/pages'
    }
  ],
  unidades: [
    {
      id: 'gtu5',
      titulo: 'Na internet',
      conceito: 'push',
      desc: 'Enviar, baixar e publicar.',
      licoes: [
        {
          id: 'gt5l1',
          titulo: 'Conta e repositório',
          exs: [
            {
              t: 'texto',
              titulo: 'Criando o repositório no site',
              blocos: [
                {
                  p: 'Crie uma conta gratuita em github.com. Depois, use o botão New para criar um repositório. As escolhas da tela:'
                },
                {
                  tabela: {
                    cab: ['Opção', 'O que é'],
                    codigo: [],
                    linhas: [
                      [
                        'Public ou Private',
                        'público, todo mundo vê; privado, só quem você convidar'
                      ],
                      ['Add a README', 'cria um arquivo de apresentação do projeto'],
                      [
                        '.gitignore',
                        'um modelo pronto de arquivos para ignorar, por linguagem'
                      ],
                      ['License', 'a licença diz o que os outros podem fazer com o seu código']
                    ]
                  }
                },
                {
                  p: 'Se você já tem o projeto no computador, crie o repositório vazio, sem README, sem .gitignore e sem licença. Assim o envio do primeiro commit não briga com arquivos que só existem no site.'
                },
                {
                  dica: 'Sem licença, ninguém pode reutilizar seu código legalmente. Licenças livres comuns: MIT (bem permissiva), GPL e AGPL (exigem que versões modificadas continuem abertas).'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Você já tem o projeto com commits no computador. Como criar o repositório no GitHub?',
              ops: ['Vazio, sem README, .gitignore ou licença', 'Com README e licença', 'Tanto faz'],
              c: 0,
              exp: 'Os arquivos você envia depois, com o push.'
            },
            {
              t: 'escolha',
              p: 'Sem licença, o que os outros podem fazer com o seu código público?',
              ops: ['Ver, mas não reutilizar legalmente', 'Qualquer coisa', 'Nem ver'],
              c: 0,
              exp: 'Por isso projetos abertos escolhem uma licença.'
            }
          ]
        },
        {
          id: 'gt5l2',
          titulo: 'Enviando com git push',
          exs: [
            {
              t: 'texto',
              titulo: 'Ligando o local ao GitHub',
              blocos: [
                {
                  p: 'Diga ao Git onde fica o repositório no GitHub. Por costume, o nome desse endereço é origin. Depois, envie o ramo main com `git push`:'
                },
                {
                  code: `$ git remote add origin https://github.com/ana/meu-site.git
$ git push -u origin main
branch 'main' set up to track 'origin/main'.`
                },
                {
                  p: 'O `-u` liga o main local ao main do GitHub. Nos próximos envios, basta `git push`.'
                },
                {
                  p: 'Na primeira vez, o GitHub pede para você entrar. Senha não funciona mais no terminal: o jeito mais simples é o gerenciador de credenciais que vem com o Git no Windows, que abre o navegador. Outras opções: o GitHub CLI, com `gh auth login`, ou um token de acesso pessoal criado nas configurações do GitHub.'
                }
              ]
            },
            {
              t: 'comando',
              p: 'Ligue o repositório ao endereço https://github.com/ana/meu-site.git com o nome origin',
              sol: 'git remote add origin https://github.com/ana/meu-site.git',
              pasta: '~/meu-site',
              aceita: ['git remote add origin https://github.com/ana/meu-site'],
              exp: 'Só precisa fazer isso uma vez. git remote -v mostra os endereços ligados.'
            },
            {
              t: 'comando',
              p: 'Envie o ramo main para o origin, ligando os dois',
              sol: 'git push -u origin main',
              pasta: '~/meu-site',
              antes: ['$ git remote add origin https://github.com/ana/meu-site.git'],
              aceita: ['git push --set-upstream origin main'],
              saida: 'branch \'main\' set up to track \'origin/main\'.',
              exp: 'Depois, é só git push.'
            },
            {
              t: 'complete',
              p: 'Complete o comando que envia os commits novos',
              code: 'git ___',
              bank: ['push', 'pull', 'commit', 'send'],
              c: ['push'],
              exp: 'push empurra para o GitHub; pull puxa de lá.'
            }
          ]
        },
        {
          id: 'gt5l3',
          titulo: 'Clonar e atualizar',
          exs: [
            {
              t: 'texto',
              titulo: 'git clone e git pull',
              blocos: [
                {
                  p: 'Para baixar um repositório inteiro, com toda a história, use `git clone`. Ele cria uma pasta com o nome do projeto e já deixa o origin configurado.'
                },
                {
                  code: `$ git clone https://github.com/EmySophia/Trilha-Livre.git
$ cd Trilha-Livre`
                },
                {
                  p: 'Quando alguém envia commits novos, `git pull` traz e junta ao seu ramo. O `git fetch` só baixa, sem juntar, para você olhar antes.'
                },
                {
                  dica: 'Antes de começar a trabalhar, git pull. Assim você parte da versão mais nova e evita conflitos.'
                }
              ]
            },
            {
              t: 'comando',
              p: 'Baixe o repositório https://github.com/EmySophia/Trilha-Livre.git',
              sol: 'git clone https://github.com/EmySophia/Trilha-Livre.git',
              pasta: '~',
              aceita: [
                'git clone https://github.com/EmySophia/Trilha-Livre',
                'git clone https://github.com/emysophia/trilha-livre.git'
              ],
              saida: 'Cloning into \'Trilha-Livre\'...',
              exp: 'Esse é o repositório do próprio Trilha Livre.'
            },
            {
              t: 'comando',
              p: 'Traga os commits novos do GitHub para o seu main',
              sol: 'git pull',
              pasta: '~/Trilha-Livre',
              aceita: ['git pull origin main'],
              saida: `Updating d892fc6..aa65ffd
Fast-forward`,
              exp: 'pull é um fetch seguido de um merge.'
            },
            {
              t: 'escolha',
              p: 'Qual a diferença entre git fetch e git pull?',
              ops: [
                'fetch só baixa; pull baixa e junta ao seu ramo',
                'São iguais',
                'fetch envia; pull baixa'
              ],
              c: 0,
              exp: 'Use fetch quando quiser ver antes de juntar.'
            }
          ]
        },
        {
          id: 'gt5l4',
          titulo: 'README e Markdown',
          exs: [
            {
              t: 'texto',
              titulo: 'A vitrine do projeto',
              blocos: [
                {
                  p: 'O README.md aparece na página do repositório. Ele explica o que o projeto é, como usar e como contribuir. É escrito em Markdown, um jeito simples de formatar texto:'
                },
                {
                  tabela: {
                    cab: ['Você escreve', 'Aparece como'],
                    codigo: [0],
                    linhas: [
                      ['# Título', 'um título grande'],
                      ['## Seção', 'um subtítulo'],
                      ['**negrito**', 'texto em negrito'],
                      ['- item', 'item de lista'],
                      ['[texto](https://...)', 'um link'],
                      ['`código`', 'código no meio do texto']
                    ]
                  }
                },
                {
                  dica: 'O Markdown também funciona nas issues, nos pull requests e em muitos outros sites.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Como fazer um título em Markdown?',
              ops: ['# Título', '<título>', '**Título**'],
              c: 0,
              exp: 'Um # é o título maior; ## é um subtítulo.'
            },
            {
              t: 'escolha',
              p: 'Como fazer um link em Markdown?',
              ops: ['[texto](https://exemplo.com)', '(texto)[https://exemplo.com]', '<texto>'],
              c: 0,
              exp: 'Colchetes para o texto, parênteses para o endereço.'
            },
            {
              t: 'complete',
              p: 'Complete para deixar a palavra em negrito',
              code: 'Este projeto é ___gratuito___.',
              bank: ['**', '**', '##', '[]'],
              c: ['**', '**'],
              exp: 'Dois asteriscos de cada lado.'
            }
          ]
        },
        {
          id: 'gt5l5',
          titulo: 'Publicando com GitHub Pages',
          exs: [
            {
              t: 'texto',
              titulo: 'Seu site no ar, de graça',
              blocos: [
                {
                  p: 'O GitHub Pages publica de graça um site feito de arquivos HTML, CSS e JavaScript que estejam num repositório público. É assim que o próprio Trilha Livre está no ar.'
                },
                {
                  passos: [
                    'Envie o site para o GitHub, com o index.html na raiz do repositório.',
                    'No repositório, abra Settings e depois Pages.',
                    'Em Source, escolha Deploy from a branch, o ramo main e a pasta / (root). Salve.',
                    'Espere um ou dois minutos. O endereço fica no formato usuario.github.io/repositorio.'
                  ]
                },
                {
                  p: 'O campo Custom domain é só para quem comprou um domínio próprio, como meusite.com.br. Deixe vazio se não tiver.'
                },
                {
                  dica: 'Se o site abrir sem alguns arquivos, crie na raiz um arquivo vazio chamado .nojekyll. Sem ele, o GitHub descarta arquivos e pastas que começam com sublinhado.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual é o endereço de um site no GitHub Pages da usuária ana, no repositório meu-site?',
              ops: ['ana.github.io/meu-site', 'github.com/pages/ana', 'meu-site.com.br'],
              c: 0,
              exp: 'Domínio próprio só se você comprar um.'
            },
            {
              t: 'escolha',
              p: 'O que o arquivo .nojekyll resolve?',
              ops: [
                'Faz o GitHub publicar os arquivos como estão, inclusive os que começam com _',
                'Deixa o site mais rápido',
                'Esconde o site'
              ],
              c: 0,
              exp: 'Foi o que resolveu o Trilha Livre abrindo sem cursos.'
            }
          ]
        }
      ]
    }
  ]
});
