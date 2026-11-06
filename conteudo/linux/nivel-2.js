/* Trilha Livre · Linux e terminal · Nível 2: Lendo e criando arquivos
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

// um log comprido, para treinar head e tail
const LX_LOG50 = Array.from({ length: 49 }, (_, i) => `evento ${i + 1}: tudo certo`).join('\n') + '\nevento 50: código X7Q2\n';

nivel({
  curso: 'linux',
  n: 2,
  titulo: 'Lendo e criando arquivos',
  desc: 'Ler, criar, escrever, copiar, mover e apagar, e os curingas.',
  unidades: [
    {
      id: 'lxu3',
      titulo: 'Ler e criar',
      conceito: 'cat, mkdir, echo',
      desc: 'Ler arquivos, criar pastas e escrever em arquivos.',
      licoes: [
        {
          id: 'lx2l1',
          titulo: 'Lendo arquivos: cat, head e tail',
          exs: [
            {
              t: 'texto',
              titulo: 'cat',
              blocos: [
                {
                  p: 'O cat mostra o conteúdo de um arquivo de texto inteiro na tela. Com vários nomes, ele mostra um depois do outro: o nome vem de concatenar, juntar em sequência.'
                },
                {
                  code: 'ana@trilha:~$ cat recado.txt\nOi, Ana!\nA reunião mudou para quinta.',
                  lang: 'texto'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Leia o arquivo recado.txt e escreva o nome de quem assinou',
              fs: { 'recado.txt': 'Oi, Ana!\nA reunião mudou para quinta, às 15h.\nAbraço, Carla\n', 'fotos/': null },
              objetivo: { resposta: ['Carla', 'carla'] },
              sol: ['cat recado.txt'],
              dica: 'cat recado.txt',
              exp: 'O cat é o jeito mais rápido de ler um arquivo pequeno.'
            },
            {
              t: 'texto',
              titulo: 'Só o começo ou só o fim',
              blocos: [
                {
                  p: 'Num arquivo grande, como um log com milhares de linhas, o cat enche a tela. Para ver só uma parte:'
                },
                {
                  tabela: {
                    cab: ['Comando', 'Mostra'],
                    codigo: [0],
                    linhas: [
                      ['head arquivo', 'as 10 primeiras linhas'],
                      ['tail arquivo', 'as 10 últimas linhas'],
                      ['head -n 3 arquivo', 'as 3 primeiras'],
                      ['tail -n 3 arquivo', 'as 3 últimas']
                    ]
                  }
                },
                {
                  dica: 'Nos logs, o mais novo fica no fim. Por isso tail é dos comandos mais usados para ver o que acabou de acontecer num servidor.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'O arquivo eventos.log tem 50 linhas. Mostre só as 3 últimas e escreva o código que aparece na última linha',
              fs: { 'eventos.log': LX_LOG50 },
              objetivo: { resposta: 'X7Q2' },
              sol: ['tail -n 3 eventos.log'],
              dica: 'tail -n 3 eventos.log',
              exp: 'Com tail, você vai direto ao fim, sem rolar 50 linhas.'
            },
            {
              t: 'escolha',
              p: 'Qual comando mostra as 5 primeiras linhas de dados.csv?',
              mono: true,
              ops: ['head -n 5 dados.csv', 'tail -n 5 dados.csv', 'cat -5 dados.csv'],
              c: 0,
              exp: 'head é a cabeça, o começo; tail é a cauda, o fim.'
            }
          ]
        },
        {
          id: 'lx2l2',
          titulo: 'Criando pastas e arquivos',
          exs: [
            {
              t: 'texto',
              titulo: 'mkdir e touch',
              blocos: [
                {
                  p: 'mkdir (make directory) cria uma pasta. touch cria um arquivo vazio. Os dois aceitam caminhos: touch viagem/roteiro.txt cria o arquivo dentro de viagem, se a pasta já existir.'
                },
                {
                  code: 'ana@trilha:~$ mkdir viagem\nana@trilha:~$ touch viagem/roteiro.txt\nana@trilha:~$ ls viagem\nroteiro.txt',
                  lang: 'texto'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Crie a pasta viagem e, dentro dela, o arquivo roteiro.txt',
              objetivo: { existe: ['viagem/', 'viagem/roteiro.txt'] },
              sol: ['mkdir viagem', 'touch viagem/roteiro.txt'],
              dica: 'Primeiro mkdir viagem, depois touch viagem/roteiro.txt.',
              exp: 'Na ordem: primeiro a pasta, depois o arquivo dentro dela. Ao contrário, o touch reclamaria que a pasta não existe.'
            },
            {
              t: 'texto',
              titulo: 'Várias pastas e nomes com espaço',
              blocos: [
                {
                  p: 'Para criar várias pastas, uma dentro da outra, de uma vez, use mkdir -p: mkdir -p escola/2026/provas. Sem o -p, o mkdir reclama que escola ainda não existe.'
                },
                {
                  p: 'O espaço separa os argumentos. Então mkdir minhas fotos cria duas pastas, minhas e fotos. Para um nome com espaço, use aspas: mkdir "minhas fotos".'
                },
                {
                  dica: 'Por isso quem usa terminal costuma evitar espaço nos nomes: minhas-fotos ou minhas_fotos dão menos trabalho.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Crie de uma vez as pastas escola/2026/provas, uma dentro da outra',
              objetivo: { existe: 'escola/2026/provas/' },
              sol: ['mkdir -p escola/2026/provas'],
              dica: 'mkdir com a opção -p.',
              exp: 'O -p cria todas as pastas do caminho que ainda não existem.'
            },
            {
              t: 'terminal',
              p: 'Crie uma única pasta chamada minhas fotos, com espaço no nome',
              objetivo: [{ existe: 'minhas fotos/' }, { naoExiste: 'fotos' }],
              sol: ['mkdir "minhas fotos"'],
              dica: 'Use aspas em volta do nome.',
              exp: 'Com aspas, minhas fotos é um argumento só. Sem elas, seriam duas pastas.'
            }
          ]
        },
        {
          id: 'lx2l3',
          titulo: 'Escrevendo: echo, > e >>',
          exs: [
            {
              t: 'texto',
              titulo: 'Mandar a saída para um arquivo',
              blocos: [
                {
                  p: 'O echo escreve na tela o que vier depois dele: echo Olá mostra Olá. Até aí, nada demais. O poder vem do redirecionamento: o sinal > manda o que apareceria na tela para dentro de um arquivo.'
                },
                {
                  code: 'ana@trilha:~$ echo arroz > compras.txt\nana@trilha:~$ cat compras.txt\narroz',
                  lang: 'texto'
                },
                {
                  p: 'O > funciona com qualquer comando: ls > lista.txt guarda a listagem num arquivo.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Crie o arquivo compras.txt com a linha arroz, usando echo',
              objetivo: { conteudo: { arquivo: 'compras.txt', igual: 'arroz' } },
              sol: ['echo arroz > compras.txt'],
              dica: 'echo arroz > compras.txt',
              exp: 'Se o arquivo não existe, o > cria.'
            },
            {
              t: 'texto',
              titulo: 'Cuidado: > apaga, >> acrescenta',
              blocos: [
                {
                  p: 'Se o arquivo já existe, o > substitui todo o conteúdo, sem perguntar. Para acrescentar uma linha no fim, use >>.'
                },
                {
                  tabela: {
                    cab: ['Sinal', 'O que faz com o arquivo'],
                    codigo: [0],
                    linhas: [
                      ['>', 'apaga o que tinha e escreve o novo'],
                      ['>>', 'mantém o que tinha e acrescenta no fim']
                    ]
                  }
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Acrescente a linha feijão ao fim de compras.txt, sem apagar o arroz que já está lá',
              fs: { 'compras.txt': 'arroz\n' },
              objetivo: { conteudo: { arquivo: 'compras.txt', igual: 'arroz\nfeijão' } },
              sol: ['echo feijão >> compras.txt'],
              dica: 'Dois sinais de maior: >>.',
              exp: 'Com >>, o arroz ficou e o feijão entrou embaixo. Se você usou > e perdeu o arroz, agora já sabe por quê.'
            },
            {
              t: 'escolha',
              p: 'O arquivo notas.txt tem 30 linhas. O que acontece depois de echo oi > notas.txt?',
              mono: true,
              ops: ['O arquivo fica só com a linha oi', 'O arquivo fica com 31 linhas', 'Dá erro, porque o arquivo já existe'],
              c: 0,
              exp: 'O > substitui tudo, sem aviso. É um dos jeitos mais comuns de perder dados no terminal.'
            }
          ]
        }
      ]
    },
    {
      id: 'lxu4',
      titulo: 'Organizar',
      conceito: 'cp, mv, rm',
      desc: 'Copiar, mover, renomear, apagar e os curingas.',
      licoes: [
        {
          id: 'lx2l4',
          titulo: 'Copiar e mover: cp e mv',
          exs: [
            {
              t: 'texto',
              titulo: 'cp',
              blocos: [
                {
                  p: 'cp copia: cp origem destino. O original continua lá. Para copiar uma pasta inteira, com tudo dentro, use cp -r (recursivo).'
                },
                {
                  code: 'ana@trilha:~$ cp contrato.txt contrato.bak\nana@trilha:~$ cp -r projetos projetos-copia',
                  lang: 'texto'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Antes de mexer no contrato, faça uma cópia de segurança chamada contrato.bak',
              fs: { 'contrato.txt': 'Cláusula 1: o aluguel vence no dia 10.\n' },
              objetivo: [{ existe: 'contrato.txt' }, { conteudo: { arquivo: 'contrato.bak', igual: 'Cláusula 1: o aluguel vence no dia 10.' } }],
              sol: ['cp contrato.txt contrato.bak'],
              dica: 'cp origem destino.',
              exp: 'Copiar antes de editar é um hábito de quem já perdeu um arquivo importante.'
            },
            {
              t: 'texto',
              titulo: 'mv: mover e renomear',
              blocos: [
                {
                  p: 'mv move: o arquivo sai de um lugar e vai para outro. Se o destino é uma pasta, ele vai para dentro dela. Se o destino é um nome novo, na mesma pasta, ele é renomeado: no Linux, renomear é mover para outro nome.'
                },
                {
                  code: 'ana@trilha:~$ mv foto1.jpg praia.jpg        (renomeia)\nana@trilha:~$ mv relatorio.txt trabalho/   (move para dentro de trabalho)',
                  lang: 'texto'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Renomeie foto1.jpg para praia.jpg',
              fs: { 'foto1.jpg': 'imagem' },
              objetivo: [{ existe: 'praia.jpg' }, { naoExiste: 'foto1.jpg' }],
              sol: ['mv foto1.jpg praia.jpg'],
              dica: 'mv nome-velho nome-novo.',
              exp: 'Não existe um comando “renomear”: o mv faz isso.'
            },
            {
              t: 'terminal',
              p: 'Mova relatorio.txt para dentro da pasta trabalho',
              fs: { 'relatorio.txt': 'vendas de outubro\n', 'trabalho/': null },
              objetivo: [{ existe: 'trabalho/relatorio.txt' }, { naoExiste: 'relatorio.txt' }],
              sol: ['mv relatorio.txt trabalho/'],
              dica: 'mv arquivo pasta/',
              exp: 'Como trabalho é uma pasta, o arquivo foi para dentro dela, com o mesmo nome.'
            }
          ]
        },
        {
          id: 'lx2l5',
          titulo: 'Apagar: rm',
          exs: [
            {
              t: 'texto',
              titulo: 'Não tem lixeira',
              blocos: [
                {
                  p: 'rm (remove) apaga arquivos. No terminal não existe lixeira: o que o rm apaga, sumiu. Para apagar uma pasta vazia, use rmdir; para apagar uma pasta com tudo o que tem dentro, rm -r.'
                },
                {
                  code: 'ana@trilha:~$ rm lixo.txt\nana@trilha:~$ rm -r temporario',
                  lang: 'texto'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Apague o arquivo lixo.txt, e só ele',
              fs: { 'lixo.txt': 'nada importante\n', 'importante.txt': 'não apague\n' },
              objetivo: [{ naoExiste: 'lixo.txt' }, { existe: 'importante.txt' }],
              sol: ['rm lixo.txt'],
              dica: 'rm e o nome do arquivo.',
              exp: 'Confira duas vezes o nome antes de apertar Enter num rm.'
            },
            {
              t: 'terminal',
              p: 'Apague a pasta temporario, com tudo o que tem dentro',
              fs: { 'temporario/a.txt': '1\n', 'temporario/b/c.txt': '2\n', 'fotos/praia.jpg': 'img' },
              objetivo: [{ naoExiste: 'temporario' }, { existe: 'fotos/praia.jpg' }],
              sol: ['rm -r temporario'],
              dica: 'Pasta com conteúdo pede o -r.',
              exp: 'O -r apaga a pasta e tudo o que tem dentro, de forma recursiva.'
            },
            {
              t: 'texto',
              titulo: 'O comando mais perigoso',
              blocos: [
                {
                  p: 'O -f (force) faz o rm não perguntar nem reclamar. Junto com o -r, vira rm -rf, que apaga tudo o que encontrar, sem volta. Um espaço no lugar errado, como rm -rf / pasta em vez de rm -rf /pasta, pode apagar o sistema inteiro.'
                },
                {
                  dica: 'Golpes em fóruns às vezes mandam “rodar um comando para resolver o problema” que é justamente um rm -rf. Nunca rode um comando que você não entende, ainda mais com sudo.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Alguém num fórum manda você rodar sudo rm -rf / para “limpar o cache”. O que fazer?',
              mono: true,
              ops: ['Não rodar: esse comando apaga o sistema inteiro', 'Rodar, porque tem sudo', 'Rodar sem o sudo, para ser mais seguro'],
              c: 0,
              exp: 'rm -rf / tenta apagar tudo a partir da raiz. Antes de rodar qualquer comando da internet, entenda o que ele faz.'
            }
          ]
        },
        {
          id: 'lx2l6',
          titulo: 'Curingas: * e ?',
          exs: [
            {
              t: 'texto',
              titulo: 'Muitos arquivos de uma vez',
              blocos: [
                {
                  p: 'Os curingas escolhem vários nomes de uma vez. O asterisco, *, combina com qualquer sequência de caracteres, inclusive nenhum. A interrogação, ?, combina com exatamente um caractere.'
                },
                {
                  tabela: {
                    cab: ['Padrão', 'Combina com'],
                    codigo: [0],
                    linhas: [
                      ['*.jpg', 'todos os arquivos que terminam em .jpg'],
                      ['foto*', 'tudo o que começa com foto'],
                      ['nota?.txt', 'nota1.txt, notaA.txt, mas não nota10.txt']
                    ]
                  }
                },
                {
                  p: 'Quem troca o curinga pelos nomes é o próprio terminal, antes de rodar o comando. Então ls *.jpg vira ls praia.jpg festa.jpg..., e funciona com qualquer comando.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Liste só os arquivos .jpg da pasta fotos e escreva quantos são',
              fs: { 'fotos/praia.jpg': 'i', 'fotos/festa.jpg': 'i', 'fotos/tela.png': 'i', 'fotos/gato.jpg': 'i', 'fotos/print.png': 'i' },
              objetivo: { resposta: ['3', 'três'] },
              sol: ['ls fotos/*.jpg'],
              dica: 'ls fotos/*.jpg',
              exp: 'O curinga filtrou os .png. Com dezenas de arquivos, isso economiza muito tempo.'
            },
            {
              t: 'terminal',
              p: 'Mova todas as imagens .png para a pasta capturas, deixando o .jpg onde está',
              fs: { 'a.png': 'i', 'b.png': 'i', 'c.jpg': 'i', 'capturas/': null },
              objetivo: [{ existe: ['capturas/a.png', 'capturas/b.png', 'c.jpg'] }, { naoExiste: ['a.png', 'b.png'] }],
              sol: ['mv *.png capturas/'],
              dica: 'mv com o curinga *.png.',
              exp: 'Um comando só moveu todos. Com um curinga, o mv aceita vários arquivos de origem.'
            },
            {
              t: 'escolha',
              p: 'O que faria rm * dentro da sua pasta pessoal?',
              mono: true,
              ops: ['Apagaria todos os arquivos visíveis da pasta', 'Apagaria só os arquivos com asterisco no nome', 'Nada'],
              c: 0,
              exp: 'O * vira o nome de cada arquivo. Por isso curinga e rm pedem atenção dobrada: confira antes com ls e o mesmo padrão.'
            }
          ]
        }
      ]
    }
  ]
});
