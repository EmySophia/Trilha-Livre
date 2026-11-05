/* Trilha Livre · Linux e terminal · Nível 1: Primeiros passos
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md.
   As missões rodam no Linux simulado do app (js/linux.js): nada aqui mexe no aparelho de verdade. */

nivel({
  curso: 'linux',
  n: 1,
  titulo: 'Primeiros passos',
  desc: 'O que é o Linux, o terminal e como andar pelas pastas.',
  unidades: [
    {
      id: 'lxu1',
      titulo: 'O terminal',
      conceito: 'pwd, ls, cd',
      desc: 'Onde você está, o que tem aqui e como entrar nas pastas.',
      licoes: [
        {
          id: 'lx1l1',
          titulo: 'O que é o Linux e o terminal',
          exs: [
            {
              t: 'texto',
              titulo: 'O sistema que roda a internet',
              blocos: [
                {
                  p: 'O Linux é um sistema operacional, como o Windows e o macOS. A diferença é que ele é livre: qualquer pessoa pode usar, estudar e modificar o código. Por isso ele está em toda parte: na maioria dos servidores da internet, nos supercomputadores, em roteadores e, por dentro, em todo celular Android.'
                },
                {
                  p: 'Existem várias versões, chamadas de distribuições: Ubuntu, Debian, Fedora, Mint. Todas usam o mesmo núcleo e quase os mesmos comandos, então o que você aprender aqui vale para todas.'
                },
                {
                  dica: 'Quem trabalha com segurança usa Linux o tempo todo: os servidores que precisa proteger rodam Linux, e as ferramentas de teste também.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Onde o Linux NÃO costuma estar?',
              ops: [
                'Na maioria dos computadores de mesa vendidos em loja, que vêm com Windows',
                'Na maioria dos servidores da internet',
                'Por dentro dos celulares Android'
              ],
              c: 0,
              exp: 'Nos computadores de casa, o Windows é o mais comum. Mas nos servidores, que você não vê, quem manda é o Linux.'
            },
            {
              t: 'texto',
              titulo: 'O terminal',
              blocos: [
                {
                  p: 'O terminal é onde você conversa com o sistema por texto: digita um comando, aperta Enter, e ele responde. Antes do cursor aparece o prompt, que mostra quem você é e onde está:'
                },
                {
                  code: 'ana@trilha:~$',
                  lang: 'texto'
                },
                {
                  tabela: {
                    cab: ['Parte', 'Quer dizer'],
                    codigo: [0],
                    linhas: [
                      ['ana', 'o usuário com que você entrou'],
                      ['trilha', 'o nome do computador'],
                      ['~', 'a pasta em que você está; o til é a sua pasta pessoal'],
                      ['$', 'usuário comum (quando é o administrador, aparece #)']
                    ]
                  }
                },
                {
                  dica: 'Os terminais deste curso são simulados, dentro do app. Pode testar à vontade: nada que você digitar aqui mexe no seu aparelho.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'No prompt maria@servidor:~$, quem é o usuário?',
              mono: true,
              ops: ['maria', 'servidor', '~'],
              c: 0,
              exp: 'Antes da arroba vem o usuário; depois, o nome do computador; depois dos dois-pontos, a pasta.'
            },
            {
              t: 'terminal',
              p: 'Seu primeiro comando: descubra com qual usuário você está. Digite whoami, aperte Enter e escreva a resposta na caixa',
              objetivo: { resposta: 'ana' },
              sol: ['whoami'],
              dica: 'whoami quer dizer “quem sou eu”, em inglês.',
              exp: 'whoami mostra o usuário atual. Parece bobo, mas numa invasão é das primeiras perguntas que se faz: com que usuário eu entrei?'
            },
            {
              t: 'terminal',
              p: 'Agora descubra em que pasta você está, com o comando pwd, e escreva o caminho que apareceu',
              objetivo: { resposta: ['/home/ana', '/home/ana/'] },
              sol: ['pwd'],
              dica: 'pwd vem de print working directory: mostre a pasta de trabalho.',
              exp: '/home/ana é a pasta pessoal da usuária ana. É ela que o til, ~, representa no prompt.'
            }
          ]
        },
        {
          id: 'lx1l2',
          titulo: 'O que tem aqui: ls',
          exs: [
            {
              t: 'texto',
              titulo: 'Listar',
              blocos: [
                {
                  p: 'O comando ls lista o que tem na pasta em que você está: arquivos e outras pastas. No Linux, pasta também se chama diretório.'
                },
                {
                  code: 'ana@trilha:~$ ls\ndocumentos  fotos  lista.txt',
                  lang: 'texto'
                },
                {
                  p: 'Os nomes aparecem lado a lado, em ordem alfabética. Arquivos costumam ter extensão, como .txt; pastas, normalmente, não.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Liste o que tem na sua pasta pessoal e escreva quantos itens aparecem',
              fs: { 'documentos/': null, 'fotos/': null, 'lista.txt': 'arroz\nfeijão\n', 'musicas/': null },
              objetivo: { resposta: ['4', 'quatro'] },
              sol: ['ls'],
              dica: 'Digite ls e conte os nomes.',
              exp: 'São três pastas e um arquivo. O ls não diferencia os dois na listagem simples; você vai ver como diferenciar com ls -l mais adiante.'
            },
            {
              t: 'texto',
              titulo: 'Listar outra pasta',
              blocos: [
                {
                  p: 'Você não precisa entrar numa pasta para ver o que tem nela: escreva o nome dela depois do ls.'
                },
                {
                  code: 'ana@trilha:~$ ls fotos\npraia.jpg  aniversario.jpg',
                  lang: 'texto'
                },
                {
                  p: 'Comando, espaço, e o alvo: esse é o formato da maioria dos comandos. O que vem depois do comando se chama argumento.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Sem sair da pasta pessoal, liste a pasta musicas e escreva o nome do único arquivo que está nela',
              fs: { 'musicas/forro.mp3': 'som', 'fotos/praia.jpg': 'img', 'lista.txt': 'arroz\n' },
              objetivo: { resposta: 'forro.mp3' },
              sol: ['ls musicas'],
              dica: 'ls seguido do nome da pasta.',
              exp: 'ls musicas mostra o conteúdo de musicas sem você sair de onde está.'
            },
            {
              t: 'escolha',
              p: 'Em ls fotos, o que é fotos?',
              mono: true,
              ops: ['O argumento: o alvo do comando', 'O comando', 'Uma opção'],
              c: 0,
              exp: 'O comando é ls; fotos é o argumento, dizendo qual pasta listar.'
            },
            {
              t: 'escolha',
              p: 'O terminal diz “ls: não foi possível acessar \'foto\': Arquivo ou diretório inexistente”. O que provavelmente aconteceu?',
              ops: ['O nome foi digitado errado: a pasta se chama fotos', 'O computador quebrou', 'Faltou o sudo'],
              c: 0,
              exp: 'O terminal não adivinha: foto e fotos são nomes diferentes. Ler a mensagem de erro com calma resolve a maioria dos problemas.'
            }
          ]
        },
        {
          id: 'lx1l3',
          titulo: 'Andando pelas pastas: cd',
          exs: [
            {
              t: 'texto',
              titulo: 'Entrar e sair',
              blocos: [
                {
                  p: 'O comando cd (change directory, “mudar de diretório”) entra numa pasta. Repare que o prompt muda para mostrar onde você está:'
                },
                {
                  code: 'ana@trilha:~$ cd projetos\nana@trilha:~/projetos$',
                  lang: 'texto'
                },
                {
                  p: 'Para voltar uma pasta, para a de cima, use cd .. (dois pontos). Os dois pontos sempre querem dizer “a pasta de cima”.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Entre na pasta projetos',
              fs: { 'projetos/site/index.html': '<h1>Oi</h1>\n', 'fotos/': null },
              objetivo: { pasta: '~/projetos' },
              sol: ['cd projetos'],
              dica: 'cd e o nome da pasta.',
              exp: 'O prompt passou a mostrar ~/projetos: você está dentro dela.'
            },
            {
              t: 'terminal',
              p: 'Entre em projetos/site e depois volte uma pasta, terminando em projetos',
              fs: { 'projetos/site/index.html': '<h1>Oi</h1>\n', 'projetos/app/': null },
              objetivo: { pasta: '~/projetos', executou: 'cd \\.\\.' },
              sol: ['cd projetos/site', 'cd ..'],
              dica: 'Dá para entrar em duas pastas de uma vez: cd projetos/site. Depois, cd .. sobe uma.',
              exp: 'cd .. sobe para a pasta de cima. A barra separa as pastas de um caminho.'
            },
            {
              t: 'texto',
              titulo: 'Voltar para casa',
              blocos: [
                {
                  p: 'Esteja onde estiver, cd sozinho, sem nada depois, volta para a sua pasta pessoal. cd ~ faz o mesmo. E cd - volta para a pasta em que você estava antes.'
                },
                {
                  dica: 'Num terminal de verdade, a tecla Tab completa nomes: digite cd proj e aperte Tab. Isso evita muito erro de digitação.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Você está perdido dentro de várias pastas. Volte para a sua pasta pessoal com um comando só',
              fs: { 'a/b/c/d/nota.txt': 'perdido\n' },
              pasta: '~/a/b/c/d',
              objetivo: { pasta: '~' },
              sol: ['cd'],
              dica: 'O cd sozinho leva para casa.',
              exp: 'cd sem argumento volta para a pasta pessoal, de qualquer lugar.'
            },
            {
              t: 'escolha',
              p: 'Você está em ~/projetos/site. Para onde leva o comando cd ..?',
              mono: true,
              ops: ['~/projetos', '~', '~/projetos/site/..'],
              c: 0,
              exp: 'Os dois pontos são a pasta de cima. De site, a de cima é projetos.'
            }
          ]
        }
      ]
    },
    {
      id: 'lxu2',
      titulo: 'Caminhos',
      conceito: 'caminhos',
      desc: 'Caminhos absolutos e relativos, e os arquivos ocultos.',
      licoes: [
        {
          id: 'lx1l4',
          titulo: 'Caminhos absolutos e relativos',
          exs: [
            {
              t: 'texto',
              titulo: 'A árvore de pastas',
              blocos: [
                {
                  p: 'No Linux, tudo está numa única árvore de pastas que começa na raiz, escrita com uma barra só: /. Não existe C: nem D: como no Windows.'
                },
                {
                  code: '/\n├── home\n│   └── ana        (a sua pasta pessoal, o ~)\n├── etc            (configurações do sistema)\n├── tmp            (arquivos temporários)\n└── var\n    └── log        (registros do que acontece no sistema)',
                  lang: 'texto'
                },
                {
                  p: 'Um caminho que começa com / é absoluto: diz o endereço completo, a partir da raiz, e funciona de qualquer lugar. /var/log é sempre a mesma pasta, esteja você onde estiver.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual destes caminhos é absoluto?',
              mono: true,
              ops: ['/home/ana/fotos', 'fotos', '../fotos'],
              c: 0,
              exp: 'Só o que começa com / parte da raiz. Os outros dependem de onde você está.'
            },
            {
              t: 'terminal',
              p: 'Vá até a pasta de logs do sistema, /var/log, usando o caminho absoluto',
              fs: { '/var/log/sistema.log': 'tudo certo\n' },
              objetivo: { pasta: '/var/log' },
              sol: ['cd /var/log'],
              dica: 'Comece pela barra: cd /var/log.',
              exp: 'Repare no prompt: fora da pasta pessoal, ele mostra o caminho completo.'
            },
            {
              t: 'texto',
              titulo: 'Caminhos relativos',
              blocos: [
                {
                  p: 'Um caminho que não começa com / é relativo: parte da pasta em que você está. Nele, dois atalhos ajudam:'
                },
                {
                  tabela: {
                    cab: ['Atalho', 'Quer dizer', 'Exemplo'],
                    codigo: [0, 2],
                    linhas: [
                      ['.', 'a pasta atual', './script.sh'],
                      ['..', 'a pasta de cima', 'cd ../fotos'],
                      ['~', 'a sua pasta pessoal', 'cd ~/docs']
                    ]
                  }
                },
                {
                  p: 'Estando em ~/docs/trabalho, o caminho ../pessoal sobe uma pasta (para docs) e entra em pessoal. E ../.. sobe duas.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Você está em docs/trabalho. Vá para docs/pessoal num comando só, sem passar pela pasta pessoal',
              fs: { 'docs/trabalho/relatorio.txt': 'pronto\n', 'docs/pessoal/receitas.txt': 'bolo\n' },
              pasta: '~/docs/trabalho',
              objetivo: { pasta: '~/docs/pessoal', executou: '\\.\\.' },
              sol: ['cd ../pessoal'],
              dica: 'Suba uma pasta com .. e entre em pessoal, tudo no mesmo caminho.',
              exp: '../pessoal: sobe para docs e entra em pessoal. Caminhos relativos economizam digitação.'
            },
            {
              t: 'escolha',
              p: 'Você está em /home/ana/docs. Para onde leva cd ../fotos?',
              mono: true,
              ops: ['/home/ana/fotos', '/home/ana/docs/fotos', '/fotos'],
              c: 0,
              exp: 'O .. sobe de docs para /home/ana, e dali entra em fotos.'
            }
          ]
        },
        {
          id: 'lx1l5',
          titulo: 'Arquivos ocultos',
          exs: [
            {
              t: 'texto',
              titulo: 'O ponto no começo',
              blocos: [
                {
                  p: 'No Linux, todo arquivo ou pasta cujo nome começa com ponto fica oculto: o ls normal não mostra. É assim que os programas guardam as suas configurações sem bagunçar a pasta pessoal, como .bashrc e .config.'
                },
                {
                  p: 'Para ver tudo, inclusive os ocultos, use a opção -a (de all, “todos”). Opções começam com traço e mudam o jeito como o comando funciona.'
                },
                {
                  code: 'ana@trilha:~$ ls\nnotas.txt\nana@trilha:~$ ls -a\n.  ..  .bashrc  .config  notas.txt',
                  lang: 'texto'
                },
                {
                  dica: 'Os itens . e .. que aparecem no ls -a são a pasta atual e a de cima, os mesmos atalhos da lição anterior.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Liste tudo da pasta pessoal, inclusive os ocultos, e escreva o nome do arquivo oculto que termina em .txt',
              fs: { 'notas.txt': 'comprar pão\n', '.config/': null, '.escondido.txt': 'nada aqui\n', 'fotos/': null },
              objetivo: { resposta: '.escondido.txt' },
              sol: ['ls -a'],
              dica: 'ls -a mostra os que começam com ponto.',
              exp: 'O ponto faz parte do nome: o arquivo se chama .escondido.txt, com o ponto.'
            },
            {
              t: 'texto',
              titulo: 'Ler o que achou',
              blocos: [
                {
                  p: 'Para ler um arquivo de texto, use cat e o nome do arquivo. Você vai ver o cat com calma no próximo nível; por enquanto, basta saber que ele mostra o conteúdo.'
                },
                {
                  code: 'ana@trilha:~$ cat notas.txt\ncomprar pão',
                  lang: 'texto'
                },
                {
                  p: 'Achar arquivos ocultos é das primeiras coisas que se faz num desafio de segurança: senhas, chaves e anotações costumam ficar justamente onde o ls comum não mostra.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Há um arquivo oculto dentro da pasta docs com uma palavra secreta. Ache e escreva a palavra',
              fs: { 'docs/relatorio.txt': 'nada de especial\n', 'docs/.pista': 'A palavra é: aurora\n', 'fotos/': null },
              objetivo: { resposta: ['aurora', 'Aurora'] },
              sol: ['ls -a docs', 'cat docs/.pista'],
              dica: 'ls -a docs mostra os ocultos de docs. Depois, cat no arquivo que você achou.',
              exp: 'ls -a docs revelou .pista, e cat docs/.pista mostrou o conteúdo. Ver tudo e ler: esse é o começo de toda investigação.'
            },
            {
              t: 'escolha',
              p: 'Por que muitos programas guardam configurações em arquivos que começam com ponto?',
              ops: [
                'Para ficarem ocultos e não bagunçarem a pasta pessoal',
                'Porque assim ficam protegidos de invasores',
                'Porque o ponto deixa o arquivo menor'
              ],
              c: 0,
              exp: 'Oculto não é protegido: qualquer um com ls -a vê. O ponto só tira o arquivo da listagem comum.'
            }
          ]
        }
      ]
    }
  ]
});
