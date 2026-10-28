/* Trilha Livre · Git e GitHub · Nível 3: Voltar no tempo
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'git',
  n: 3,
  titulo: 'Voltar no tempo',
  desc: 'Desfazer mudanças, ver versões antigas, revert, reset e amend.',
  videos: [
    {
      titulo: 'Git e GitHub na vida real',
      canal: 'Willian Justen',
      obs: 'as aulas sobre desfazer mudanças',
      url: 'https://www.youtube.com/playlist?list=PLlAbYrWSYTiNqugqFFWWsgONJsmc3eMpg'
    },
    {
      tipo: 'texto',
      titulo: 'Pro Git, em português',
      canal: 'Scott Chacon e Ben Straub, livro aberto',
      obs: 'capítulo 2.4: desfazendo coisas',
      url: 'https://git-scm.com/book/pt-br/v2'
    }
  ],
  unidades: [
    {
      id: 'gtu3',
      titulo: 'Desfazer',
      conceito: 'restore',
      desc: 'O Git como rede de segurança.',
      licoes: [
        {
          id: 'gt3l1',
          titulo: 'Desfazer o que ainda não foi salvo',
          exs: [
            {
              t: 'texto',
              titulo: 'git restore',
              blocos: [
                {
                  p: 'Estragou um arquivo e ainda não fez commit? `git restore` volta o arquivo para como ele estava no último commit.'
                },
                { code: '$ git restore index.html' },
                {
                  p: 'Colocou no palco o que não queria? `git restore --staged` tira do palco, sem perder a mudança no arquivo.'
                },
                { code: '$ git restore --staged estilo.css' },
                {
                  dica: 'Cuidado: o git restore sem --staged descarta a mudança de vez. Não tem desfazer.'
                }
              ]
            },
            {
              t: 'comando',
              p: 'Volte o index.html para como estava no último commit',
              sol: 'git restore index.html',
              pasta: '~/meu-site',
              antes: [
                '$ git status',
                'Changes not staged for commit:',
                '        modified:   index.html'
              ],
              aceita: ['git checkout -- index.html', 'git checkout index.html'],
              exp: 'Em versões antigas do Git, o mesmo era feito com git checkout -- arquivo.'
            },
            {
              t: 'comando',
              p: 'Tire o estilo.css do palco, sem perder a mudança',
              sol: 'git restore --staged estilo.css',
              pasta: '~/meu-site',
              antes: ['$ git add .'],
              aceita: ['git reset estilo.css', 'git reset HEAD estilo.css'],
              exp: 'A mudança continua no arquivo; só não vai entrar no próximo commit.'
            }
          ]
        },
        {
          id: 'gt3l2',
          titulo: 'Visitar uma versão antiga',
          exs: [
            {
              t: 'texto',
              titulo: 'Andar pela história',
              blocos: [
                {
                  p: '`git show` mostra o que um commit mudou. Para ver o projeto inteiro como estava num commit antigo, use `git switch --detach` com o hash. Para voltar ao presente, volte para o ramo main.'
                },
                {
                  code: `$ git log --oneline
e4f5a6b (HEAD -> main) Adiciona página de contato
a1b2c3d Primeira versão do site
$ git switch --detach a1b2c3d
$ git switch main`
                },
                {
                  p: 'Enquanto você está num commit antigo, o Git avisa que o HEAD está solto (detached HEAD). É só para olhar: commits feitos ali ficam perdidos se você não criar um ramo.'
                }
              ]
            },
            {
              t: 'comando',
              p: 'Veja o que o commit a1b2c3d mudou',
              sol: 'git show a1b2c3d',
              pasta: '~/meu-site',
              exp: 'Também funciona com o hash completo.'
            },
            {
              t: 'comando',
              p: 'Volte ao presente, no ramo main',
              sol: 'git switch main',
              pasta: '~/meu-site',
              antes: [
                '$ git switch --detach a1b2c3d',
                'HEAD is now at a1b2c3d Primeira versão do site'
              ],
              aceita: ['git checkout main'],
              saida: `Previous HEAD position was a1b2c3d Primeira versão do site
Switched to branch 'main'`,
              exp: 'git checkout main faz o mesmo, em versões mais antigas do Git.'
            }
          ]
        },
        {
          id: 'gt3l3',
          titulo: 'revert ou reset?',
          exs: [
            {
              t: 'texto',
              titulo: 'Desfazer um commit',
              blocos: [
                {
                  p: 'Há dois jeitos de desfazer um commit, com consequências bem diferentes.'
                },
                {
                  tabela: {
                    cab: ['Comando', 'O que faz', 'Quando usar'],
                    codigo: [0],
                    linhas: [
                      [
                        'git revert e4f5a6b',
                        'cria um commit novo que desfaz aquele',
                        'sempre que o commit já foi compartilhado'
                      ],
                      [
                        'git reset --hard a1b2c3d',
                        'volta o ramo e apaga os commits depois daquele',
                        'só em commits que ninguém mais tem'
                      ]
                    ]
                  }
                },
                {
                  p: 'O revert é seguro: a história continua inteira, com o erro e a correção. O reset reescreve a história, e quem já tinha os commits apagados vai ter problemas. O `--hard` ainda descarta o que não foi salvo nos arquivos.'
                },
                { dica: 'Na dúvida, revert.' }
              ]
            },
            {
              t: 'escolha',
              p: 'O commit errado já foi enviado ao GitHub e outras pessoas baixaram. O que usar?',
              ops: ['git revert', 'git reset --hard', 'Apagar a pasta .git'],
              c: 0,
              exp: 'O revert desfaz sem reescrever a história dos outros.'
            },
            {
              t: 'comando',
              p: 'Desfaça o commit e4f5a6b criando um commit novo',
              sol: 'git revert e4f5a6b',
              pasta: '~/meu-site',
              antes: [
                '$ git log --oneline',
                'e4f5a6b (HEAD -> main) Adiciona página de contato',
                'a1b2c3d Primeira versão do site'
              ],
              aceita: ['git revert e4f5a6b --no-edit', 'git revert --no-edit e4f5a6b'],
              saida: `[main 9f8e7d6] Revert "Adiciona página de contato"
 1 file changed, 20 deletions(-)`,
              exp: 'O Git escreve sozinho a mensagem: Revert e o nome do commit desfeito.'
            },
            {
              t: 'escolha',
              p: 'O que o --hard do git reset faz a mais?',
              ops: [
                'Descarta também as mudanças não salvas nos arquivos',
                'Deixa o comando mais rápido',
                'Envia para o GitHub'
              ],
              c: 0,
              exp: 'Por isso é o comando mais perigoso do dia a dia.'
            }
          ]
        },
        {
          id: 'gt3l4',
          titulo: 'Corrigir o último commit',
          exs: [
            {
              t: 'texto',
              titulo: 'git commit --amend',
              blocos: [
                {
                  p: 'Errou a mensagem do último commit, ou esqueceu um arquivo? O `--amend` refaz o último commit, juntando o que estiver no palco.'
                },
                {
                  code: `$ git add estilo.css
$ git commit --amend -m "Adiciona página de contato com estilo"`
                },
                {
                  p: 'Como o reset, o amend troca o commit por outro, com outro hash. Use só antes de enviar para o GitHub.'
                }
              ]
            },
            {
              t: 'comando',
              p: 'Corrija a mensagem do último commit para uma mensagem nova, entre aspas',
              sol: 'git commit --amend -m "Adiciona página de contato"',
              pasta: '~/meu-site',
              antes: ['$ git log --oneline', 'e4f5a6b (HEAD -> main) Adiona pagina de contato'],
              aceita: ['/^git commit --amend -m "[^"]+"$/'],
              exp: 'O commit antigo, com o erro de digitação, é substituído.'
            },
            {
              t: 'escolha',
              p: 'Quando não usar o --amend?',
              ops: [
                'Quando o commit já foi enviado e outras pessoas têm ele',
                'Quando a mensagem tem erro de digitação',
                'Quando esqueceu um arquivo'
              ],
              c: 0,
              exp: 'Ele reescreve a história, como o reset.'
            }
          ]
        }
      ]
    }
  ]
});
