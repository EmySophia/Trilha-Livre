/* Trilha Livre · Git e GitHub · Nível 6: Trabalhar junto
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'git',
  n: 6,
  titulo: 'Trabalhar junto',
  desc: 'Fork, pull request, revisão, issues e como contribuir com projetos abertos.',
  videos: [
    {
      titulo: 'Git e GitHub na vida real',
      canal: 'Willian Justen',
      obs: 'as aulas finais sobre pull requests e trabalho em equipe',
      url: 'https://www.youtube.com/playlist?list=PLlAbYrWSYTiNqugqFFWWsgONJsmc3eMpg'
    },
    {
      tipo: 'texto',
      titulo: 'Pro Git, em português',
      canal: 'Scott Chacon e Ben Straub, livro aberto',
      obs: 'capítulo 6: GitHub',
      url: 'https://git-scm.com/book/pt-br/v2'
    }
  ],
  unidades: [
    {
      id: 'gtu6',
      titulo: 'Colaboração',
      conceito: 'pull request',
      desc: 'Propor mudanças em projetos dos outros.',
      licoes: [
        {
          id: 'gt6l1',
          titulo: 'Fork e pull request',
          exs: [
            {
              t: 'texto',
              titulo: 'Propondo uma mudança',
              blocos: [
                {
                  p: 'Num projeto de outra pessoa, você não pode enviar commits direto. O caminho é o pull request, ou PR: um pedido para juntar as suas mudanças ao projeto, que os responsáveis revisam antes de aceitar.'
                },
                {
                  passos: [
                    'Faça um fork: uma cópia do repositório na sua conta, pelo botão Fork.',
                    'Clone o seu fork e crie um ramo para a mudança.',
                    'Faça os commits e envie o ramo para o seu fork com git push.',
                    'No GitHub, abra o pull request, explicando o que mudou e por quê.',
                    'Responda aos comentários da revisão. Se pedirem ajustes, novos commits no mesmo ramo atualizam o PR.'
                  ]
                },
                {
                  p: 'Se você tem acesso ao repositório, como numa equipe, não precisa do fork: crie o ramo no próprio repositório e abra o PR dele para o main.'
                }
              ]
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem os passos para contribuir com um projeto aberto',
              lines: [
                'Fazer um fork do projeto',
                'Clonar o fork e criar um ramo',
                'Fazer os commits e enviar o ramo com git push',
                'Abrir o pull request no GitHub',
                'Ajustar o que a revisão pedir'
              ],
              exp: 'O PR é a conversa sobre a mudança.'
            },
            {
              t: 'comando',
              p: 'Envie o ramo corrige-texto para o seu fork, no origin',
              sol: 'git push origin corrige-texto',
              pasta: '~/Trilha-Livre',
              antes: [
                '$ git switch -c corrige-texto',
                '$ git commit -am "Corrige erro de digitação na lição 3"'
              ],
              aceita: [
                'git push -u origin corrige-texto',
                'git push --set-upstream origin corrige-texto'
              ],
              exp: 'Depois disso, o GitHub mostra um botão para abrir o pull request.'
            },
            {
              t: 'escolha',
              p: 'O que é um fork?',
              ops: [
                'Uma cópia de um repositório na sua conta',
                'Um ramo apagado',
                'Um tipo de commit'
              ],
              c: 0,
              exp: 'No fork, você pode fazer o que quiser.'
            }
          ]
        },
        {
          id: 'gt6l2',
          titulo: 'Issues e revisão',
          exs: [
            {
              t: 'texto',
              titulo: 'Conversando sobre o código',
              blocos: [
                {
                  p: 'Issues são a lista de tarefas e problemas do projeto: um erro encontrado, uma ideia, uma dúvida. Cada uma tem um número, como #12.'
                },
                {
                  p: 'Escrever `Closes #12` na descrição do pull request fecha a issue 12 sozinho quando o PR é aceito no ramo principal.'
                },
                {
                  p: 'Na revisão, quem revisa pode comentar linhas, aprovar (Approve) ou pedir mudanças (Request changes). Uma boa revisão é sobre o código, nunca sobre a pessoa, e explica o porquê de cada pedido.'
                },
                {
                  dica: 'Antes de abrir um PR grande, abra uma issue para combinar a ideia. Evita trabalho jogado fora.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que escrever no PR para fechar a issue 12 quando ele for aceito?',
              ops: ['Closes #12', 'Delete 12', 'Issue = 12'],
              c: 0,
              exp: 'Também funcionam Fixes #12 e Resolves #12.'
            },
            {
              t: 'escolha',
              p: 'O que é uma boa revisão de código?',
              ops: [
                'Comentários sobre o código, explicando o porquê',
                'Aprovar tudo sem ler',
                'Críticas à pessoa que escreveu'
              ],
              c: 0,
              exp: 'Revisar bem também é uma forma de ensinar.'
            }
          ]
        },
        {
          id: 'gt6l3',
          titulo: 'Commits pequenos e mensagens claras',
          exs: [
            {
              t: 'texto',
              titulo: 'Uma história que dá para ler',
              blocos: [
                {
                  p: 'Um commit deve fazer uma coisa só. Commits pequenos são fáceis de revisar, de entender e de desfazer com revert.'
                },
                {
                  p: 'Muitos projetos usam um padrão de mensagem, como o Conventional Commits: uma palavra que diz o tipo da mudança, dois-pontos e o resumo.'
                },
                {
                  tabela: {
                    cab: ['Tipo', 'Quando usar', 'Exemplo'],
                    codigo: [0, 2],
                    linhas: [
                      ['feat', 'algo novo', 'feat: adiciona curso de Python'],
                      ['fix', 'correção de erro', 'fix: corrige link do capítulo 24'],
                      ['docs', 'só documentação', 'docs: explica o bloco leia'],
                      ['style', 'formatação, sem mudar o que faz', 'style: alinha o menu']
                    ]
                  }
                },
                {
                  dica: 'Siga o padrão do projeto em que você está. O importante é a história fazer sentido para quem vier depois.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Pelo Conventional Commits, qual tipo usar para a correção de um erro?',
              ops: ['fix', 'feat', 'docs'],
              c: 0,
              exp: 'feat é para algo novo.'
            },
            {
              t: 'escolha',
              p: 'Você corrigiu um erro e também criou uma página nova. Quantos commits?',
              ops: ['Dois, um para cada mudança', 'Um só, com tudo', 'Nenhum'],
              c: 0,
              exp: 'Separados, dá para desfazer um sem perder o outro.'
            }
          ]
        },
        {
          id: 'gt6l4',
          titulo: 'Contribuindo com o Trilha Livre',
          exs: [
            {
              t: 'texto',
              titulo: 'Seu primeiro pull request',
              blocos: [
                {
                  p: 'O Trilha Livre é aberto: qualquer pessoa pode corrigir um texto, escrever uma lição ou criar um curso. É um ótimo lugar para o seu primeiro PR.'
                },
                {
                  code: `$ git clone https://github.com/SEU-USUARIO/Trilha-Livre.git
$ cd Trilha-Livre
$ git switch -c corrige-licao
$ npm install
$ npm run validar
$ git add .
$ git commit -m "Corrige exemplo da lição de listas"
$ git push -u origin corrige-licao`
                },
                {
                  p: 'O `npm run validar` confere todo o conteúdo e roda todas as soluções dos exercícios. O guia CONTRIBUINDO.md, no repositório, explica o formato das lições.'
                },
                {
                  leia: {
                    rotulo: 'Repositório',
                    titulo: 'Trilha Livre no GitHub',
                    url: 'https://github.com/EmySophia/Trilha-Livre',
                    obs: 'Comece pelo README e pelo CONTRIBUINDO.md.'
                  }
                }
              ]
            },
            {
              t: 'ordene',
              p: 'Coloque em ordem a preparação de uma contribuição',
              lines: [
                '$ git clone https://github.com/SEU-USUARIO/Trilha-Livre.git',
                '$ git switch -c corrige-licao',
                '$ npm run validar',
                '$ git commit -m "Corrige exemplo da lição de listas"',
                '$ git push -u origin corrige-licao'
              ],
              exp: 'Validar antes do commit evita mandar um erro para a revisão.'
            },
            {
              t: 'escolha',
              p: 'O que faz o npm run validar no Trilha Livre?',
              ops: [
                'Confere o conteúdo e roda as soluções dos exercícios',
                'Publica o site',
                'Apaga o progresso'
              ],
              c: 0,
              exp: 'Rode antes de abrir o PR.'
            }
          ]
        },
        {
          id: 'gt6l5',
          titulo: 'Sem terminal também dá',
          exs: [
            {
              t: 'texto',
              titulo: 'Ferramentas visuais',
              blocos: [
                {
                  p: 'Tudo o que você aprendeu tem botão em programas visuais. Saber os comandos ajuda a entender o que os botões fazem.'
                },
                {
                  tabela: {
                    cab: ['Ferramenta', 'Para quê'],
                    codigo: [],
                    linhas: [
                      [
                        'GitHub Desktop',
                        'programa gratuito para Windows e Mac, com botões para commit, push, pull e ramos'
                      ],
                      [
                        'VS Code',
                        'editor gratuito com o Git embutido, que mostra as mudanças e ajuda a resolver conflitos'
                      ],
                      [
                        'Site do GitHub',
                        'editar arquivos, fazer commits e abrir PRs direto no navegador, até no celular'
                      ],
                      [
                        'App GitHub Mobile',
                        'acompanhar issues, revisar e aceitar PRs pelo celular'
                      ]
                    ]
                  }
                },
                {
                  p: 'Apertando a tecla ponto (.) num repositório no site do GitHub, abre-se um editor parecido com o VS Code no navegador.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual programa visual do próprio GitHub faz commits e push com botões?',
              ops: ['GitHub Desktop', 'Git Bash', 'PowerShell'],
              c: 0,
              exp: 'O curso do Curso em Vídeo usa ele.'
            },
            {
              t: 'escolha',
              p: 'Por que vale aprender os comandos, se há botões?',
              ops: [
                'Para entender o que os botões fazem e resolver problemas',
                'Porque os botões não funcionam',
                'Não vale'
              ],
              c: 0,
              exp: 'E nos servidores, muitas vezes, só existe o terminal.'
            }
          ]
        }
      ]
    }
  ]
});
