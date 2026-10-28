/* Trilha Livre · Git e GitHub · Nível 4: Ramos
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'git',
  n: 4,
  titulo: 'Ramos',
  desc: 'Trabalhar em paralelo com branch, switch e merge, e resolver conflitos.',
  videos: [
    {
      titulo: 'Git e GitHub na vida real',
      canal: 'Willian Justen',
      obs: 'as aulas sobre branches e merge',
      url: 'https://www.youtube.com/playlist?list=PLlAbYrWSYTiNqugqFFWWsgONJsmc3eMpg'
    },
    {
      tipo: 'texto',
      titulo: 'Pro Git, em português',
      canal: 'Scott Chacon e Ben Straub, livro aberto',
      obs: 'capítulo 3: ramificação no Git',
      url: 'https://git-scm.com/book/pt-br/v2'
    }
  ],
  unidades: [
    {
      id: 'gtu4',
      titulo: 'Linhas paralelas',
      conceito: 'branch',
      desc: 'Testar sem estragar o que funciona.',
      licoes: [
        {
          id: 'gt4l1',
          titulo: 'Criando um ramo',
          exs: [
            {
              t: 'texto',
              titulo: 'Uma linha do tempo paralela',
              blocos: [
                {
                  p: 'Um ramo (branch) é uma linha de commits separada. O ramo principal se chama main. Para fazer uma página nova sem mexer no que já funciona, crie um ramo, trabalhe nele e, no fim, junte ao main.'
                },
                {
                  code: `$ git switch -c pagina-contato
Switched to a new branch 'pagina-contato'
$ git branch
  main
* pagina-contato`
                },
                {
                  p: '`git switch -c nome` cria o ramo e já entra nele. `git branch` lista os ramos, com um asterisco no atual. Em tutoriais mais antigos, você vai ver `git checkout -b nome`, que faz o mesmo.'
                },
                {
                  dica: 'Nomes de ramo sem espaço e sem acento: pagina-contato, corrige-menu.'
                }
              ]
            },
            {
              t: 'comando',
              p: 'Crie o ramo pagina-contato e entre nele',
              sol: 'git switch -c pagina-contato',
              pasta: '~/meu-site',
              aceita: ['git checkout -b pagina-contato'],
              saida: 'Switched to a new branch \'pagina-contato\'',
              exp: 'Os commits que você fizer agora vão para esse ramo.'
            },
            {
              t: 'comando',
              p: 'Liste os ramos',
              sol: 'git branch',
              pasta: '~/meu-site',
              antes: ['$ git switch -c pagina-contato', 'Switched to a new branch \'pagina-contato\''],
              aceita: ['git branch -a', 'git branch --list'],
              saida: `  main
* pagina-contato`,
              exp: 'O asterisco marca o ramo atual.'
            },
            {
              t: 'escolha',
              p: 'Para que servem os ramos?',
              ops: [
                'Trabalhar numa mudança sem mexer no que já funciona',
                'Apagar commits antigos',
                'Publicar o site'
              ],
              c: 0,
              exp: 'Se a ideia não der certo, é só abandonar o ramo.'
            }
          ]
        },
        {
          id: 'gt4l2',
          titulo: 'Juntando ramos com merge',
          exs: [
            {
              t: 'texto',
              titulo: 'git merge',
              blocos: [
                {
                  p: 'Terminou a página no ramo? Volte para o main e traga as mudanças com `git merge`:'
                },
                {
                  code: `$ git switch main
$ git merge pagina-contato
Updating a1b2c3d..e4f5a6b
Fast-forward
 contato.html | 30 ++++++++++++
$ git branch -d pagina-contato`
                },
                {
                  p: 'Se o main não mudou enquanto você trabalhava no ramo, o Git só avança o main até o último commit do ramo: é o fast-forward. Se os dois mudaram, o Git cria um commit de merge, que junta as duas linhas.'
                },
                {
                  p: 'Depois do merge, o ramo pode ser apagado com `git branch -d`. Os commits continuam no main.'
                }
              ]
            },
            {
              t: 'ordene',
              p: 'Coloque em ordem: criar um ramo, trabalhar e juntar ao main',
              lines: [
                '$ git switch -c pagina-contato',
                '$ git add contato.html',
                '$ git commit -m "Adiciona página de contato"',
                '$ git switch main',
                '$ git merge pagina-contato'
              ],
              exp: 'O merge é feito de dentro do ramo que vai receber as mudanças.'
            },
            {
              t: 'comando',
              p: 'Você está no main. Traga as mudanças do ramo pagina-contato',
              sol: 'git merge pagina-contato',
              pasta: '~/meu-site',
              antes: ['$ git switch main', 'Switched to branch \'main\''],
              saida: `Updating a1b2c3d..e4f5a6b
Fast-forward
 contato.html | 30 ++++++++++++`,
              exp: 'Fast-forward: o main só avançou, sem commit de merge.'
            },
            {
              t: 'comando',
              p: 'Apague o ramo pagina-contato, que já foi juntado',
              sol: 'git branch -d pagina-contato',
              pasta: '~/meu-site',
              aceita: ['git branch --delete pagina-contato'],
              saida: 'Deleted branch pagina-contato (was e4f5a6b).',
              exp: 'O -d só apaga ramos já juntados. O -D apaga de qualquer jeito.'
            }
          ]
        },
        {
          id: 'gt4l3',
          titulo: 'Conflitos',
          exs: [
            {
              t: 'texto',
              titulo: 'Quando duas mudanças batem',
              blocos: [
                {
                  p: 'Se os dois ramos mudaram a mesma linha do mesmo arquivo, o Git não sabe qual escolher e para no meio do merge. Ele marca o trecho no arquivo:'
                },
                {
                  code: `<<<<<<< HEAD
<h1>Meu site</h1>
=======
<h1>Meu portfólio</h1>
>>>>>>> pagina-nova`,
                  lang: 'texto'
                },
                {
                  p: 'Em cima, entre `<<<<<<<` e `=======`, está a versão do ramo em que você está. Embaixo, a do outro ramo. Para resolver:'
                },
                {
                  passos: [
                    'Abra o arquivo e escolha o texto final: uma versão, a outra ou uma mistura.',
                    'Apague as três linhas de marcação.',
                    'Salve, faça git add do arquivo e termine com git commit.'
                  ]
                },
                {
                  dica: 'Conflito não é erro: é o Git pedindo uma decisão que só uma pessoa pode tomar. O VS Code tem botões para escolher cada lado.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'No conflito, o que vem entre <<<<<<< HEAD e =======?',
              ops: [
                'A versão do ramo em que você está',
                'A versão do outro ramo',
                'Uma mensagem de erro'
              ],
              c: 0,
              exp: 'O HEAD é você.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem a resolução de um conflito',
              lines: [
                'Abrir o arquivo marcado pelo Git',
                'Escolher o texto final e apagar as marcações',
                'git add no arquivo resolvido',
                'git commit para terminar o merge'
              ],
              exp: 'O git status mostra quais arquivos ainda estão em conflito.'
            },
            {
              t: 'comando',
              p: 'Você já resolveu o conflito no index.html e fez git add. Termine o merge',
              sol: 'git commit',
              pasta: '~/meu-site',
              antes: [
                '$ git add index.html',
                '$ git status',
                'All conflicts fixed but you are still merging.'
              ],
              aceita: ['git commit --no-edit', '/^git commit -m "[^"]+"$/', 'git merge --continue'],
              exp: 'Sem -m, o Git abre o editor com uma mensagem de merge pronta: é só salvar e fechar. Com --no-edit, ele usa essa mensagem direto.'
            }
          ]
        }
      ]
    }
  ]
});
