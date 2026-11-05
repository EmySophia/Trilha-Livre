/* Trilha Livre · Linux e terminal · Nível 3: Procurando
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'linux',
  n: 3,
  titulo: 'Procurando',
  desc: 'Achar texto com grep, achar arquivos com find e juntar comandos com pipes.',
  unidades: [
    {
      id: 'lxu5',
      titulo: 'Achar texto e arquivos',
      conceito: 'grep, find',
      desc: 'Procurar dentro dos arquivos e procurar os próprios arquivos.',
      licoes: [
        {
          id: 'lx3l1',
          titulo: 'Procurando texto: grep',
          exs: [
            {
              t: 'texto',
              titulo: 'Só as linhas que interessam',
              blocos: [
                {
                  p: 'O grep procura um texto dentro de arquivos e mostra só as linhas em que ele aparece. O formato é: grep o-que-procurar onde-procurar.'
                },
                {
                  code: 'ana@trilha:~$ grep Bia contatos.txt\nBia: 98888-2222',
                  lang: 'texto'
                },
                {
                  p: 'Num arquivo de três linhas, tanto faz. Num log de um servidor, com um milhão de linhas, o grep é a diferença entre achar o problema em um segundo e não achar nunca.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Ache, em contatos.txt, o telefone da Bia e escreva-o',
              fs: { 'contatos.txt': 'Ana: 99999-1111\nCarlos: 97777-3333\nBia: 98888-2222\nDavi: 96666-4444\nElis: 95555-5555\n' },
              objetivo: { resposta: '98888-2222' },
              sol: ['grep Bia contatos.txt'],
              dica: 'grep Bia contatos.txt',
              exp: 'O grep devolveu só a linha da Bia.'
            },
            {
              t: 'texto',
              titulo: 'Maiúsculas importam',
              blocos: [
                {
                  p: 'O grep diferencia maiúsculas de minúsculas: grep bia não acha Bia. Quando o texto procurado tem espaço, use aspas: grep "frango assado" cardapio.txt.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'No cardápio, ache o prato com camarão e escreva o preço dele, só o número',
              fs: { 'cardapio.txt': 'Feijoada - 32\nMoqueca de peixe - 45\nBobó de camarão - 52\nEscondidinho - 28\nBaião de dois - 30\n' },
              objetivo: { resposta: ['52', 'R$ 52', '52,00'] },
              sol: ['grep camarão cardapio.txt'],
              dica: 'Procure por camarão, em minúsculas, como está no arquivo.',
              exp: 'grep camarão achou a linha do bobó. Se você procurou Camarão, com maiúscula, não achou nada: o grep diferencia.'
            },
            {
              t: 'escolha',
              p: 'O comando grep erro sistema.log não mostrou nada, mas você sabe que há linhas com ERRO. Por quê?',
              mono: true,
              ops: ['O grep diferencia maiúsculas: erro e ERRO são textos diferentes', 'O arquivo está vazio', 'Faltou o sudo'],
              c: 0,
              exp: 'Na próxima lição você vai ver a opção que ignora essa diferença.'
            }
          ]
        },
        {
          id: 'lx3l2',
          titulo: 'As opções do grep',
          exs: [
            {
              t: 'texto',
              titulo: 'Quatro opções que você vai usar sempre',
              blocos: [
                {
                  tabela: {
                    cab: ['Opção', 'O que faz', 'Exemplo'],
                    codigo: [0, 2],
                    linhas: [
                      ['-i', 'ignora maiúsculas e minúsculas', 'grep -i erro log'],
                      ['-n', 'mostra o número da linha', 'grep -n lua poema.txt'],
                      ['-c', 'só conta as linhas', 'grep -c falha log'],
                      ['-v', 'mostra as linhas que NÃO têm o texto', 'grep -v ok log']
                    ]
                  }
                },
                {
                  p: 'Dá para juntar opções: grep -ic erro log conta as linhas com erro, ignorando maiúsculas.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Quantas linhas de servidor.log têm a palavra erro, escrita de qualquer jeito (ERRO, Erro, erro)?',
              fs: { 'servidor.log': 'ERRO: disco cheio\nok: backup feito\nErro ao conectar\nok: login\nerro de leitura\nok: e-mail enviado\nERRO: tempo esgotado\n' },
              objetivo: { resposta: ['4', 'quatro'] },
              sol: ['grep -ic erro servidor.log'],
              dica: 'Junte o -i com o -c.',
              exp: 'Duas com ERRO, uma com Erro e uma com erro: 4. Sem o -i, seriam só as que batem exatamente.'
            },
            {
              t: 'texto',
              titulo: 'Procurar em pastas inteiras',
              blocos: [
                {
                  p: 'Com -r (recursivo), o grep procura em todos os arquivos de uma pasta e das pastas dentro dela. A resposta vem com o nome do arquivo antes da linha:'
                },
                {
                  code: 'ana@trilha:~$ grep -r senha notas\nnotas/casa.txt:a senha do wi-fi está atrás do roteador',
                  lang: 'texto'
                },
                {
                  dica: 'Esse é um dos primeiros comandos de quem investiga um servidor: grep -r password ou grep -r senha costuma achar senhas esquecidas em arquivos de configuração.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Uma das anotações dentro da pasta notas fala de senha. Escreva o nome do arquivo em que ela está',
              fs: { 'notas/mercado.txt': 'leite\novos\n', 'notas/casa.txt': 'trocar lâmpada\na senha do wi-fi está atrás do roteador\n', 'notas/trabalho/reuniao.txt': 'pauta: orçamento\n' },
              objetivo: { resposta: ['casa.txt', 'notas/casa.txt'] },
              sol: ['grep -r senha notas'],
              dica: 'grep -r senha notas',
              exp: 'O -r procurou em notas e nas subpastas, e mostrou o caminho do arquivo antes da linha.'
            },
            {
              t: 'escolha',
              p: 'Num log, você quer ver tudo o que NÃO é a linha comum “ok”. Qual comando?',
              mono: true,
              ops: ['grep -v ok log', 'grep -c ok log', 'grep -n ok log'],
              c: 0,
              exp: 'O -v inverte a busca. Filtrar o que é normal deixa o estranho à mostra.'
            }
          ]
        },
        {
          id: 'lx3l3',
          titulo: 'Procurando arquivos: find',
          exs: [
            {
              t: 'texto',
              titulo: 'grep procura dentro; find procura os arquivos',
              blocos: [
                {
                  p: 'O grep procura texto dentro dos arquivos. O find procura os próprios arquivos, pelo nome, pelo tipo, pelo dono. O formato é: find onde-começar critérios.'
                },
                {
                  tabela: {
                    cab: ['Comando', 'Acha'],
                    codigo: [0],
                    linhas: [
                      ['find projetos -name config.ini', 'arquivos chamados config.ini dentro de projetos'],
                      ['find . -name "*.log"', 'tudo que termina em .log, a partir da pasta atual'],
                      ['find . -type d', 'só as pastas'],
                      ['find . -type f', 'só os arquivos']
                    ]
                  }
                },
                {
                  dica: 'Com curinga no find, use aspas: find . -name "*.log". Sem elas, o terminal troca o * antes de o find ver.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Em algum lugar dentro de projetos existe um arquivo config.ini. Ache e escreva o caminho dele',
              fs: { 'projetos/site/index.html': 'oi', 'projetos/app/v1/leia.txt': 'antigo', 'projetos/app/v2/etc/config.ini': 'porta=8080\n', 'projetos/app/v2/main.py': 'print(1)' },
              objetivo: { resposta: ['projetos/app/v2/etc/config.ini', './projetos/app/v2/etc/config.ini', '~/projetos/app/v2/etc/config.ini', '/home/ana/projetos/app/v2/etc/config.ini'] },
              sol: ['find projetos -name config.ini'],
              dica: 'find projetos -name config.ini',
              exp: 'O find desceu por todas as pastas até achar. Na mão, você teria que abrir pasta por pasta.'
            },
            {
              t: 'terminal',
              p: 'Quantos arquivos terminados em .log existem dentro da pasta servidor, em qualquer subpasta?',
              fs: { 'servidor/app.log': 'a', 'servidor/web/acesso.log': 'b', 'servidor/web/erros.log': 'c', 'servidor/web/config.txt': 'd', 'servidor/banco/dados.db': 'e' },
              objetivo: { resposta: ['3', 'três'] },
              sol: ['find servidor -name "*.log"'],
              dica: 'find servidor -name "*.log", com aspas.',
              exp: 'Três: app.log, acesso.log e erros.log. O config.txt e o dados.db ficaram de fora.'
            },
            {
              t: 'escolha',
              p: 'Você quer achar o arquivo que contém a frase “chave de acesso”, mas não sabe o nome dele. Qual comando usar?',
              mono: true,
              ops: ['grep -r "chave de acesso" .', 'find . -name "chave de acesso"', 'ls -a'],
              c: 0,
              exp: 'A frase está dentro do arquivo, então é trabalho do grep. O find olharia só os nomes.'
            }
          ]
        }
      ]
    },
    {
      id: 'lxu6',
      titulo: 'Juntando comandos',
      conceito: 'pipe',
      desc: 'Pipes, contar, ordenar e recortar.',
      licoes: [
        {
          id: 'lx3l4',
          titulo: 'Pipes: um comando alimenta o outro',
          exs: [
            {
              t: 'texto',
              titulo: 'O cano',
              blocos: [
                {
                  p: 'O sinal | se chama pipe, “cano” em inglês. Ele pega o que um comando mostraria na tela e entrega como entrada para o próximo. Assim, comandos pequenos se juntam para fazer coisas grandes.'
                },
                {
                  code: 'ana@trilha:~$ ls downloads | grep boleto\nboleto-luz.pdf\nboleto-agua.pdf',
                  lang: 'texto'
                },
                {
                  p: 'O ls lista tudo, e o grep filtra só o que tem boleto. Nenhum dos dois sozinho faria isso.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Liste a pasta downloads e, com um pipe, mostre só os arquivos com boleto no nome. Escreva quantos são',
              fs: { 'downloads/boleto-luz.pdf': 'p', 'downloads/foto.jpg': 'p', 'downloads/boleto-agua.pdf': 'p', 'downloads/curriculo.pdf': 'p', 'downloads/musica.mp3': 'p', 'downloads/boleto-internet.pdf': 'p' },
              objetivo: { resposta: ['3', 'três'], executou: '\\|' },
              sol: ['ls downloads | grep boleto'],
              dica: 'ls downloads | grep boleto',
              exp: 'O pipe levou a lista do ls para o grep.'
            },
            {
              t: 'texto',
              titulo: 'Pipes em sequência',
              blocos: [
                {
                  p: 'Dá para encadear quantos pipes quiser. grep falha sistema.log | head -n 2 acha as falhas e mostra só as duas primeiras.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Mostre só as 2 primeiras linhas de sistema.log que têm a palavra falha, e escreva o código que aparece na segunda delas',
              fs: { 'sistema.log': 'ok inicio\nfalha F101 no disco\nok rede\nok backup\nfalha F207 no login\nok fim\nfalha F330 na rede\n' },
              objetivo: { resposta: 'F207' },
              sol: ['grep falha sistema.log | head -n 2'],
              dica: 'grep falha sistema.log | head -n 2',
              exp: 'Primeiro o grep filtra, depois o head corta. A ordem dos comandos no pipe importa.'
            },
            {
              t: 'escolha',
              p: 'O que faz cat nomes.txt | grep Ana?',
              mono: true,
              ops: ['Mostra só as linhas de nomes.txt que têm Ana', 'Apaga as linhas com Ana', 'Grava Ana em nomes.txt'],
              c: 0,
              exp: 'O cat manda o arquivo inteiro pelo cano, e o grep deixa passar só as linhas com Ana. É o mesmo que grep Ana nomes.txt.'
            }
          ]
        },
        {
          id: 'lx3l5',
          titulo: 'Contar e ordenar: wc, sort e uniq',
          exs: [
            {
              t: 'texto',
              titulo: 'Três ferramentas pequenas',
              blocos: [
                {
                  tabela: {
                    cab: ['Comando', 'O que faz'],
                    codigo: [0],
                    linhas: [
                      ['wc -l', 'conta linhas'],
                      ['sort', 'ordena as linhas; -n ordena como número, -r inverte'],
                      ['uniq', 'junta linhas repetidas que estão uma embaixo da outra; -c conta quantas eram']
                    ]
                  }
                },
                {
                  p: 'O uniq só junta repetidas vizinhas. Por isso ele quase sempre vem depois de um sort, que coloca as iguais juntas.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Quantas linhas tem o arquivo alunos.txt?',
              fs: { 'alunos.txt': 'Ana\nBeto\nCaio\nDani\nEdu\nFabi\nGabi\nHugo\nIsa\n' },
              objetivo: { resposta: ['9', 'nove'] },
              sol: ['wc -l alunos.txt'],
              dica: 'wc -l alunos.txt',
              exp: 'wc vem de word count, mas com -l ele conta linhas.'
            },
            {
              t: 'texto',
              titulo: 'Uma apuração no terminal',
              blocos: [
                {
                  p: 'Juntando os três, dá para fazer uma apuração: ordenar os votos, contar cada um e ordenar pela contagem, do maior para o menor.'
                },
                {
                  code: 'ana@trilha:~$ sort votos.txt | uniq -c | sort -nr\n      4 coco\n      2 morango',
                  lang: 'texto'
                },
                {
                  dica: 'Essa mesma linha serve para achar o endereço que mais tentou entrar num servidor, a página mais acessada de um site ou a palavra mais repetida de um texto.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'O arquivo votos.txt tem um voto de sabor de bolo por linha. Qual sabor ganhou?',
              fs: { 'votos.txt': 'chocolate\ncenoura\nchocolate\nmilho\ncenoura\nchocolate\nfubá\nchocolate\nmilho\ncenoura\n' },
              objetivo: { resposta: ['chocolate', 'Chocolate'] },
              sol: ['sort votos.txt | uniq -c | sort -nr'],
              dica: 'sort votos.txt | uniq -c | sort -nr',
              exp: 'Chocolate, com 4 votos. Primeiro o sort junta os iguais, o uniq -c conta e o sort -nr coloca o maior no topo.'
            },
            {
              t: 'escolha',
              p: 'Por que uniq costuma vir depois de sort?',
              ops: [
                'O uniq só junta repetidas que estão vizinhas, e o sort coloca as iguais lado a lado',
                'Porque o uniq não funciona sem o sort instalado',
                'Para deixar o resultado colorido'
              ],
              c: 0,
              exp: 'Sem o sort, uma mesma palavra espalhada pelo arquivo seria contada em vários pedaços.'
            }
          ]
        },
        {
          id: 'lx3l6',
          titulo: 'Recortar colunas: cut',
          exs: [
            {
              t: 'texto',
              titulo: 'Arquivos com colunas',
              blocos: [
                {
                  p: 'Muitos arquivos guardam informação em colunas separadas por um caractere: vírgula num .csv, dois-pontos em arquivos do sistema. O cut recorta só as colunas que você quer: -d diz o separador e -f diz o número da coluna.'
                },
                {
                  code: 'ana@trilha:~$ cut -d , -f 1 vendas.csv\nAna\nBeto',
                  lang: 'texto'
                },
                {
                  p: 'O arquivo /etc/passwd, que lista os usuários do sistema, separa os campos com dois-pontos. O primeiro campo é o nome do usuário.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Recorte o primeiro campo de /etc/passwd para ver só os nomes dos usuários. Quantos usuários existem?',
              usuarios: ['bia', 'carlos'],
              objetivo: { resposta: ['4', 'quatro'] },
              sol: ['cut -d : -f 1 /etc/passwd'],
              dica: 'cut -d : -f 1 /etc/passwd',
              exp: 'root, ana, bia e carlos. Listar os usuários é um passo comum para entender um sistema.'
            },
            {
              t: 'terminal',
              p: 'O arquivo vendas.csv tem vendedor e valor em cada linha. Quantos vendedores diferentes aparecem?',
              fs: { 'vendas.csv': 'Ana,120\nBeto,80\nAna,200\nCaio,50\nBeto,90\nAna,30\nDani,70\n' },
              objetivo: { resposta: ['4', 'quatro'] },
              sol: ['cut -d , -f 1 vendas.csv | sort | uniq | wc -l'],
              dica: 'Recorte a coluna 1, ordene, junte as repetidas e conte as linhas.',
              exp: 'Ana, Beto, Caio e Dani. Quatro comandos pequenos, ligados por pipes, fizeram uma análise de dados.'
            },
            {
              t: 'escolha',
              p: 'Em cut -d , -f 2 dados.csv, o que é o -d ,?',
              mono: true,
              ops: ['O separador das colunas: a vírgula', 'A coluna 2', 'O nome do arquivo'],
              c: 0,
              exp: '-d é o delimitador, o que separa as colunas. -f é o campo, a coluna que você quer.'
            }
          ]
        }
      ]
    }
  ]
});
