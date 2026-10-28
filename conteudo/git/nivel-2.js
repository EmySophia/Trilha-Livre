/* Trilha Livre · Git e GitHub · Nível 2: Primeiros commits
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'git',
  n: 2,
  titulo: 'Primeiros commits',
  desc: 'init, status, add, commit, log, diff e .gitignore.',
  videos: [
    {
      titulo: 'Git e GitHub na vida real',
      canal: 'Willian Justen',
      obs: 'as primeiras aulas mostram o Git no terminal e no VS Code',
      url: 'https://www.youtube.com/playlist?list=PLlAbYrWSYTiNqugqFFWWsgONJsmc3eMpg'
    },
    {
      tipo: 'texto',
      titulo: 'Pro Git, em português',
      canal: 'Scott Chacon e Ben Straub, livro aberto',
      obs: 'capítulo 2: o básico do Git',
      url: 'https://git-scm.com/book/pt-br/v2'
    }
  ],
  unidades: [
    {
      id: 'gtu2',
      titulo: 'Guardar versões',
      conceito: 'commit',
      desc: 'O ciclo de todo dia.',
      licoes: [
        {
          id: 'gt2l1',
          titulo: 'git init e git status',
          exs: [
            {
              t: 'texto',
              titulo: 'Criando um repositório',
              blocos: [
                {
                  p: 'Dentro da pasta do projeto, `git init` cria o repositório. O Git guarda tudo numa pasta escondida chamada `.git`. Apague essa pasta e a história some; o resto continua igual.'
                },
                {
                  code: `$ cd meu-site
$ git init
Initialized empty Git repository in /home/ana/meu-site/.git/`
                },
                {
                  p: '`git status` é o comando mais usado: ele conta como está o repositório. Logo depois do init, ele avisa que há arquivos que o Git ainda não acompanha (untracked).'
                },
                {
                  code: `$ git status
On branch main

No commits yet

Untracked files:
        index.html
        estilo.css`
                },
                {
                  dica: 'O Git pode mostrar as mensagens em inglês ou em português, dependendo do idioma do sistema. Os comandos são os mesmos.'
                }
              ]
            },
            {
              t: 'comando',
              p: 'Transforme a pasta num repositório Git',
              sol: 'git init',
              pasta: '~/meu-site',
              antes: ['$ ls', 'index.html  estilo.css'],
              saida: 'Initialized empty Git repository in /home/ana/meu-site/.git/',
              exp: 'Só precisa fazer isso uma vez por projeto.'
            },
            {
              t: 'comando',
              p: 'Veja como está o repositório',
              sol: 'git status',
              pasta: '~/meu-site',
              antes: ['$ git init', 'Initialized empty Git repository in /home/ana/meu-site/.git/'],
              saida: `On branch main

No commits yet

Untracked files:
        index.html
        estilo.css`,
              exp: 'Na dúvida, git status. Ele quase sempre diz qual é o próximo passo.'
            },
            {
              t: 'escolha',
              p: 'O que acontece se você apagar a pasta .git?',
              ops: [
                'A história do projeto some, mas os arquivos continuam',
                'Os arquivos do site são apagados',
                'Nada'
              ],
              c: 0,
              exp: 'Por isso não mexa nela à mão.'
            }
          ]
        },
        {
          id: 'gt2l2',
          titulo: 'As três áreas e o git add',
          exs: [
            {
              t: 'texto',
              titulo: 'Pasta, palco e história',
              blocos: [
                {
                  p: 'O Git trabalha com três lugares. A pasta de trabalho é onde você edita os arquivos. A área de preparação, ou staging, é um palco: lá você coloca o que vai entrar no próximo commit. O repositório guarda os commits.'
                },
                {
                  fluxo: [
                    { k: 'ini', s: 'Você edita os arquivos' },
                    { k: 'acao', s: 'git add: põe as mudanças no palco' },
                    { k: 'acao', s: 'git commit: tira a foto do que está no palco' },
                    { k: 'fim', s: 'A foto fica na história' }
                  ]
                },
                {
                  code: `$ git add index.html      # só um arquivo
$ git add .               # tudo o que mudou na pasta`
                },
                {
                  p: 'Por que existe o palco? Para você escolher o que entra em cada commit. Se mexeu em duas coisas diferentes, pode fazer dois commits, um para cada.'
                }
              ]
            },
            {
              t: 'comando',
              p: 'Coloque só o index.html no palco',
              sol: 'git add index.html',
              pasta: '~/meu-site',
              antes: ['$ git status', 'Untracked files:', '        index.html', '        estilo.css'],
              exp: 'Agora o index.html vai entrar no próximo commit; o estilo.css, não.'
            },
            {
              t: 'comando',
              p: 'Agora coloque no palco tudo o que mudou na pasta',
              sol: 'git add .',
              pasta: '~/meu-site',
              aceita: ['git add -A', 'git add --all'],
              exp: 'O ponto quer dizer a pasta atual inteira.'
            },
            {
              t: 'ordene',
              p: 'Coloque o ciclo em ordem',
              lines: [
                '$ git status',
                '$ git add .',
                '$ git commit -m "Adiciona contato"',
                '$ git log --oneline'
              ],
              exp: 'Olhar, preparar, salvar e conferir.'
            }
          ]
        },
        {
          id: 'gt2l3',
          titulo: 'git commit',
          exs: [
            {
              t: 'texto',
              titulo: 'Tirando a foto',
              blocos: [
                {
                  p: '`git commit` salva o que está no palco, com uma mensagem que explica a mudança. O `-m` deixa escrever a mensagem na mesma linha:'
                },
                {
                  code: `$ git commit -m "Primeira versão do site"
[main (root-commit) a1b2c3d] Primeira versão do site
 2 files changed, 40 insertions(+)`
                },
                {
                  p: 'O código `a1b2c3d` é o começo do hash, a identidade única do commit. Cada commit tem o seu.'
                },
                {
                  p: 'Uma boa mensagem diz o que a mudança faz, de forma curta: "Adiciona formulário de contato", "Corrige link quebrado no menu". Evite "mudanças", "ajustes" ou "agora vai": daqui a um mês, ninguém vai saber o que foi.'
                }
              ]
            },
            {
              t: 'comando',
              p: 'Faça o commit com uma mensagem entre aspas',
              sol: 'git commit -m "Primeira versão do site"',
              pasta: '~/meu-site',
              antes: ['$ git add .'],
              aceita: ['/^git commit -m "[^"]+"$/'],
              dica: 'git commit -m "sua mensagem"',
              saida: `[main (root-commit) a1b2c3d] {msg}
 2 files changed, 40 insertions(+)`,
              exp: 'O root-commit avisa que é o primeiro commit do repositório.'
            },
            {
              t: 'escolha',
              p: 'Qual é a melhor mensagem de commit?',
              ops: ['Corrige link quebrado no menu', 'mudanças', 'agora vai'],
              c: 0,
              exp: 'A mensagem precisa dizer o que mudou.'
            },
            {
              t: 'complete',
              p: 'Complete o comando de commit',
              code: 'git ___ -m "Adiciona página de contato"',
              bank: ['commit', 'add', 'push', 'save'],
              c: ['commit'],
              exp: 'add prepara; commit salva.'
            }
          ]
        },
        {
          id: 'gt2l4',
          titulo: 'git log e git diff',
          exs: [
            {
              t: 'texto',
              titulo: 'Olhando a história e as mudanças',
              blocos: [
                {
                  p: '`git log` mostra os commits, do mais novo para o mais velho. Com `--oneline`, cada um ocupa uma linha:'
                },
                {
                  code: `$ git log --oneline
e4f5a6b (HEAD -> main) Adiciona página de contato
a1b2c3d Primeira versão do site`
                },
                {
                  p: 'O HEAD indica onde você está agora. `git diff` mostra o que mudou nos arquivos e ainda não foi para o palco; `git diff --staged` mostra o que está no palco. Linhas com `+` foram acrescentadas; com `-`, tiradas.'
                },
                {
                  code: `$ git diff
-<h1>Meu site</h1>
+<h1>Meu portfólio</h1>`
                },
                {
                  dica: 'Se o log ou o diff forem longos, o Git abre uma tela de leitura. Use as setas para rolar e a tecla q para sair.'
                }
              ]
            },
            {
              t: 'comando',
              p: 'Mostre a história em uma linha por commit',
              sol: 'git log --oneline',
              pasta: '~/meu-site',
              aceita: ['git log --oneline --graph', 'git log --oneline --all'],
              saida: `e4f5a6b (HEAD -> main) Adiciona página de contato
a1b2c3d Primeira versão do site`,
              exp: 'O mais novo aparece em cima.'
            },
            {
              t: 'comando',
              p: 'Veja o que mudou nos arquivos e ainda não foi para o palco',
              sol: 'git diff',
              pasta: '~/meu-site',
              saida: `-<h1>Meu site</h1>
+<h1>Meu portfólio</h1>`,
              exp: 'Depois do git add, use git diff --staged para ver o que vai no commit.'
            },
            {
              t: 'escolha',
              p: 'No git diff, o que quer dizer uma linha começando com +?',
              ops: ['Foi acrescentada', 'Foi apagada', 'Deu erro'],
              c: 0,
              exp: 'E com -, foi tirada.'
            }
          ]
        },
        {
          id: 'gt2l5',
          titulo: 'O que não vai para o Git',
          exs: [
            {
              t: 'texto',
              titulo: '.gitignore',
              blocos: [
                {
                  p: 'Alguns arquivos não devem entrar no repositório: pastas de dependências que se baixam de novo, como `node_modules`, arquivos temporários e, principalmente, senhas e chaves.'
                },
                {
                  p: 'O arquivo `.gitignore`, na raiz do projeto, lista o que o Git deve ignorar, um por linha:'
                },
                {
                  code: `# dependências
node_modules/
# senhas e chaves
.env
# temporários
*.log
.DS_Store`,
                  lang: 'texto'
                },
                {
                  p: 'O `*` vale qualquer coisa: `*.log` ignora todos os arquivos que terminam em .log. Ao criar um repositório no GitHub, dá para escolher um .gitignore pronto para a sua linguagem.'
                },
                {
                  dica: 'Subiu uma senha sem querer? Trocar a senha é obrigatório. Apagar o arquivo num commit novo não basta, porque ela continua na história.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Onde fica a lista de arquivos que o Git deve ignorar?',
              ops: ['No arquivo .gitignore', 'No README.md', 'Na pasta .git'],
              c: 0,
              exp: 'Ele mesmo vai para o repositório, para valer para todo mundo.'
            },
            {
              t: 'escolha',
              p: 'Você publicou sem querer um arquivo com uma senha. O que fazer primeiro?',
              ops: [
                'Trocar a senha, porque ela continua na história',
                'Só apagar o arquivo e fazer um commit',
                'Nada, ninguém vai ver'
              ],
              c: 0,
              exp: 'Robôs procuram senhas em repositórios públicos o tempo todo.'
            },
            {
              t: 'complete',
              p: 'Complete o .gitignore para ignorar todos os arquivos .log',
              code: '___.log',
              bank: ['*', '#', '!', '/'],
              c: ['*'],
              exp: 'O asterisco quer dizer qualquer nome.'
            }
          ]
        }
      ]
    }
  ]
});
