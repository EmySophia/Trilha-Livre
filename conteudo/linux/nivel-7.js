/* Trilha Livre · Linux e terminal · Nível 7: Scripts
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'linux',
  n: 7,
  titulo: 'Scripts',
  desc: 'Juntar comandos num arquivo, com variáveis e argumentos, e agendar tarefas.',
  unidades: [
    {
      id: 'lxu13',
      titulo: 'Seu primeiro script',
      conceito: 'bash',
      desc: 'Scripts, o #! e os argumentos.',
      licoes: [
        {
          id: 'lx7l1',
          titulo: 'Um arquivo cheio de comandos',
          exs: [
            {
              t: 'texto',
              titulo: 'O que é um script',
              blocos: [
                {
                  p: 'Um script é um arquivo de texto com comandos, um por linha. Em vez de digitar os mesmos cinco comandos todo dia, você escreve uma vez e roda o arquivo: bash nome-do-script.sh.'
                },
                {
                  code: 'ana@trilha:~$ cat ola.sh\necho Olá, mundo\nana@trilha:~$ bash ola.sh\nOlá, mundo',
                  lang: 'texto'
                },
                {
                  p: 'Num computador de verdade, você escreveria o script num editor de texto. Aqui, para criar arquivos, use o echo com > e >>, que você já conhece.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Crie o script ola.sh com a linha echo Olá, mundo, e rode-o com bash',
              objetivo: [{ conteudo: { arquivo: 'ola.sh', contem: 'echo' } }, { executou: '^(bash|sh) ola\\.sh' }],
              sol: ['echo "echo Olá, mundo" > ola.sh', 'bash ola.sh'],
              dica: 'echo "echo Olá, mundo" > ola.sh grava a linha no arquivo; depois, bash ola.sh.',
              exp: 'O primeiro echo escreveu o comando no arquivo; o bash leu o arquivo e rodou o comando.'
            },
            {
              t: 'texto',
              titulo: 'Várias linhas',
              blocos: [
                {
                  p: 'Para acrescentar mais linhas ao script, use >>. Linhas que começam com # são comentários: o bash ignora, e elas servem para explicar o script para quem lê.'
                },
                {
                  code: '# mostra quem sou e onde estou\nwhoami\npwd',
                  lang: 'texto'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Crie o script quem.sh com duas linhas, whoami e pwd, e rode-o',
              objetivo: [{ conteudo: [{ arquivo: 'quem.sh', contem: 'whoami' }, { arquivo: 'quem.sh', contem: 'pwd' }] }, { executou: '^(bash|sh|\\./)\\s*quem\\.sh' }],
              sol: ['echo whoami > quem.sh', 'echo pwd >> quem.sh', 'bash quem.sh'],
              dica: 'A primeira linha com >, a segunda com >>.',
              exp: 'Com > na segunda linha, você teria apagado a primeira. O >> acrescenta.'
            },
            {
              t: 'escolha',
              p: 'Num script, o que acontece com a linha # faz o backup?',
              mono: true,
              ops: ['Nada: é um comentário, e o bash ignora', 'O bash faz o backup', 'Dá erro'],
              c: 0,
              exp: 'Comentários são para pessoas. Um script bem comentado é um script que outra pessoa, ou você mesmo daqui a um ano, consegue entender.'
            }
          ]
        },
        {
          id: 'lx7l2',
          titulo: 'O #! e o ./',
          exs: [
            {
              t: 'texto',
              titulo: 'A primeira linha',
              blocos: [
                {
                  p: 'Scripts costumam começar com #!/bin/bash. Essa linha, chamada shebang, diz ao sistema qual programa deve ler o resto do arquivo. Com ela e com a permissão x, o script vira um programa: dá para rodar com ./script.sh, sem escrever bash antes.'
                },
                {
                  code: '#!/bin/bash\necho "Arquivos em docs:"\nls docs | wc -l',
                  lang: 'texto'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Torne relatorio.sh executável, rode-o com ./ e escreva o número que ele mostra',
              fs: { 'relatorio.sh': '#!/bin/bash\necho "Arquivos em docs:"\nls docs | wc -l\n', 'docs/a.txt': '1\n', 'docs/b.txt': '2\n', 'docs/c.txt': '3\n', 'docs/d.txt': '4\n' },
              objetivo: { resposta: ['4', 'quatro'], executou: '^\\./relatorio\\.sh' },
              sol: ['chmod +x relatorio.sh', './relatorio.sh'],
              dica: 'chmod +x relatorio.sh e depois ./relatorio.sh',
              exp: 'Sem o chmod, o ./ daria Permissão negada. Com bash relatorio.sh, funcionaria mesmo sem o x, porque quem executa é o bash.'
            },
            {
              t: 'texto',
              titulo: 'bash script.sh ou ./script.sh?',
              blocos: [
                {
                  tabela: {
                    cab: ['Jeito', 'Precisa do x?', 'Precisa do #!?'],
                    codigo: [0],
                    linhas: [
                      ['bash script.sh', 'não', 'não'],
                      ['./script.sh', 'sim', 'sim, para saber quem lê o arquivo']
                    ]
                  }
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Para que serve a linha #!/bin/bash no começo do script?',
              mono: true,
              ops: ['Diz ao sistema que o bash deve ler o arquivo', 'É um comentário sem efeito nenhum', 'Dá permissão de execução'],
              c: 0,
              exp: 'Ela começa com #, mas, na primeira linha e com o !, tem esse papel especial. A permissão vem do chmod.'
            }
          ]
        },
        {
          id: 'lx7l3',
          titulo: 'Variáveis e argumentos',
          exs: [
            {
              t: 'texto',
              titulo: 'Guardar valores',
              blocos: [
                {
                  p: 'Num script, NOME=valor guarda um valor, e $NOME usa. Sem espaço em volta do igual.'
                },
                {
                  p: 'E o script pode receber argumentos, como os comandos: em bash saudacao.sh Ana, dentro do script, $1 vale Ana. $2 seria o segundo argumento, e assim por diante.'
                },
                {
                  code: '#!/bin/bash\nNOME=$1\necho "Olá, $NOME! Hoje é dia de estudar."',
                  lang: 'texto'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Rode o script saudacao.sh passando o seu nome como argumento',
              fs: { 'saudacao.sh': '#!/bin/bash\nNOME=$1\necho "Olá, $NOME! Hoje é dia de estudar."\n' },
              objetivo: { executou: '^(bash |sh |\\./)saudacao\\.sh \\S+' },
              sol: ['bash saudacao.sh Ana'],
              dica: 'bash saudacao.sh e o seu nome depois.',
              exp: 'O $1 virou o que você escreveu depois do nome do script.'
            },
            {
              t: 'texto',
              titulo: 'Aspas simples guardam o $',
              blocos: [
                {
                  p: 'Para escrever um script que use $1 com o echo, há um detalhe: entre aspas duplas, o terminal troca o $1 na hora. Entre aspas simples, ele deixa o texto como está.'
                },
                {
                  code: "echo 'wc -l $1' > conta.sh",
                  lang: 'texto'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Crie o script conta.sh, que mostra quantas linhas tem o arquivo passado como argumento (use wc -l e $1), e rode-o com alunos.txt',
              fs: { 'alunos.txt': 'Ana\nBeto\nCaio\nDani\nEdu\n' },
              objetivo: [{ conteudo: { arquivo: 'conta.sh', contem: '$1' } }, { executou: 'conta\\.sh alunos\\.txt' }],
              sol: ["echo 'wc -l $1' > conta.sh", 'bash conta.sh alunos.txt'],
              dica: "Use aspas simples: echo 'wc -l $1' > conta.sh. Depois, bash conta.sh alunos.txt.",
              exp: 'Agora o mesmo script conta as linhas de qualquer arquivo. Argumentos deixam o script reaproveitável.'
            },
            {
              t: 'escolha',
              p: 'O script soma.sh foi rodado como bash soma.sh 3 8. Quanto vale $2 dentro dele?',
              mono: true,
              ops: ['8', '3', 'soma.sh'],
              c: 0,
              exp: '$1 é o primeiro argumento (3), $2 o segundo (8). O nome do script é o $0.'
            }
          ]
        }
      ]
    },
    {
      id: 'lxu14',
      titulo: 'Scripts de verdade',
      conceito: 'if, for, cron',
      desc: 'Ler decisões e repetições, e agendar tarefas.',
      licoes: [
        {
          id: 'lx7l4',
          titulo: 'Lendo if e for',
          exs: [
            {
              t: 'texto',
              titulo: 'Decisões',
              blocos: [
                {
                  p: 'Scripts de verdade tomam decisões com if. A sintaxe é diferente da de JavaScript e Python, mas a ideia é a mesma. Este terminal simulado não roda if, mas você vai ler muitos scripts assim:'
                },
                {
                  code: '#!/bin/bash\nif [ -f backup.zip ]; then\n  echo "O backup existe"\nelse\n  echo "Falta o backup!"\nfi',
                  lang: 'texto'
                },
                {
                  p: 'O [ -f arquivo ] testa se o arquivo existe. O then abre o bloco, o else é o senão, e o fi (if de trás para a frente) fecha.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Se o arquivo backup.zip não existir, o que esse script mostra?',
              mono: true,
              ops: ['Falta o backup!', 'O backup existe', 'Nada'],
              c: 0,
              exp: 'O teste dá falso, então roda o bloco do else.'
            },
            {
              t: 'texto',
              titulo: 'Repetições',
              blocos: [
                {
                  p: 'O for repete comandos para cada item de uma lista. Junto com um curinga, ele passa por todos os arquivos de um tipo:'
                },
                {
                  code: '#!/bin/bash\nfor arquivo in *.log; do\n  echo "Conferindo $arquivo"\n  grep -c ERRO "$arquivo"\ndone',
                  lang: 'texto'
                },
                {
                  p: 'Em cada volta, a variável arquivo recebe um nome; o do e o done marcam o começo e o fim do bloco que se repete.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'A pasta tem app.log, web.log e notas.txt. Quantas vezes o script acima mostra “Conferindo”?',
              mono: true,
              ops: ['2', '3', '1'],
              c: 0,
              exp: 'O *.log combina com app.log e web.log. O notas.txt fica de fora.'
            },
            {
              t: 'escolha',
              p: 'O que faz este script? for u in ana bia; do echo "Olá, $u"; done',
              mono: true,
              ops: ['Mostra Olá, ana e depois Olá, bia', 'Mostra Olá, $u duas vezes', 'Cria os usuários ana e bia'],
              c: 0,
              exp: 'A lista é ana e bia; em cada volta, $u vale um deles.'
            }
          ]
        },
        {
          id: 'lx7l5',
          titulo: 'Automatizando: backup e cron',
          exs: [
            {
              t: 'texto',
              titulo: 'Um script de backup',
              blocos: [
                {
                  p: 'Um dos usos mais comuns de scripts é o backup: copiar o que importa para outro lugar, sempre do mesmo jeito.'
                },
                {
                  code: '#!/bin/bash\n# copia a pasta docs para backup\nmkdir -p backup\ncp -r docs backup/',
                  lang: 'texto'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Crie o script backup.sh com as linhas mkdir -p backup e cp -r docs backup/, e rode-o',
              fs: { 'docs/contrato.txt': 'importante\n', 'docs/fotos/praia.jpg': 'img' },
              objetivo: [{ conteudo: { arquivo: 'backup.sh', contem: 'cp' } }, { existe: ['backup/docs/contrato.txt', 'backup/docs/fotos/praia.jpg'] }],
              sol: ["echo 'mkdir -p backup' > backup.sh", "echo 'cp -r docs backup/' >> backup.sh", 'bash backup.sh'],
              dica: 'Uma linha com >, a outra com >>, e depois bash backup.sh.',
              exp: 'O script copiou a pasta inteira. Agora é só rodar o mesmo script sempre que quiser uma cópia nova.'
            },
            {
              t: 'texto',
              titulo: 'O cron: rodar sozinho',
              blocos: [
                {
                  p: 'O cron é o agendador do Linux: ele roda comandos sozinho, nos horários marcados. Cada linha da agenda (o crontab) tem cinco campos de tempo e o comando:'
                },
                {
                  code: '# minuto hora dia mês dia-da-semana  comando\n0 3 * * * /home/ana/backup.sh',
                  lang: 'texto'
                },
                {
                  p: 'O asterisco quer dizer “todos”. Essa linha roda o backup às 3h00, todos os dias.'
                },
                {
                  dica: 'Invasores adoram o cron: uma linha escondida no crontab faz o programa deles voltar mesmo depois de encerrado. Conferir o crontab faz parte de toda investigação.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Quando roda a linha de cron 30 18 * * 5 /home/ana/relatorio.sh? (o dia da semana 5 é sexta)',
              mono: true,
              ops: ['Toda sexta, às 18h30', 'Todo dia 5, às 18h30', 'Às 5h30 de todo dia 18'],
              c: 0,
              exp: 'Minuto 30, hora 18, qualquer dia do mês, qualquer mês, dia da semana 5.'
            },
            {
              t: 'escolha',
              p: 'Você encerrou um programa malicioso, e ele voltou na hora seguinte. Onde é um bom lugar para procurar a causa?',
              ops: ['No crontab, onde ele pode ter sido agendado', 'No arquivo /etc/hostname', 'Na pasta de fotos'],
              c: 0,
              exp: 'Uma tarefa agendada que relança o programa é uma das formas mais comuns de um invasor continuar no sistema.'
            }
          ]
        }
      ]
    }
  ]
});
