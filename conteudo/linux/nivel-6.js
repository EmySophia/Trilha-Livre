/* Trilha Livre · Linux e terminal · Nível 6: Processos, variáveis e logs
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md.
   Os endereços IP dos exemplos são dos blocos reservados para documentação (RFC 5737): não pertencem a ninguém. */

// processos de um computador comum, mais um intruso
const LX_PROCS = [
  { pid: 1, usuario: 'root', cmd: '/sbin/init' },
  { pid: 412, usuario: 'root', cmd: 'cron' },
  { pid: 880, usuario: 'root', cmd: 'sshd' },
  { pid: 2041, usuario: 'ana', cmd: 'firefox' },
  { pid: 2290, usuario: 'ana', cmd: 'python3 bot.py' }
];
// o log de login de um servidor que sofreu um ataque de força bruta
const LX_AUTH = (() => {
  const l = [];
  const linha = (h, m, s, tipo, usuario, ip, porta) => `Nov 05 ${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')} trilha sshd: ${tipo} password for ${usuario} from ${ip} port ${porta}`;
  l.push(linha('01', 2, 10, 'Failed', 'ana', '192.0.2.10', 40111));
  l.push(linha('01', 2, 31, 'Failed', 'ana', '192.0.2.10', 40112));
  l.push(linha('01', 2, 50, 'Accepted', 'ana', '192.0.2.10', 40113));
  for (let i = 0; i < 4; i++) l.push(linha('02', 40 + i, 5, 'Failed', 'admin', '198.51.100.23', 50200 + i));
  for (let i = 0; i < 8; i++) l.push(linha('03', 10 + i, 1, 'Failed', 'root', '203.0.113.45', 51230 + i));
  for (let i = 0; i < 4; i++) l.push(linha('03', 18 + i, 2, 'Failed', 'ana', '203.0.113.45', 51240 + i));
  l.push(linha('03', 22, 44, 'Accepted', 'ana', '203.0.113.45', 51300));
  return l.join('\n') + '\n';
})();
const LX_SYSLOG = [
  'Nov 05 09:58:01 trilha CRON: backup diário iniciado',
  'Nov 05 09:59:40 trilha kernel: No space left on device',
  'Nov 05 10:00:02 trilha CRON: backup diário terminou com erro',
  'Nov 05 10:01:15 trilha kernel: No space left on device',
  'Nov 05 10:02:00 trilha systemd: limpeza de arquivos temporários',
  'Nov 05 10:04:58 trilha kernel: No space left on device',
  'Nov 05 10:05:12 trilha systemd: nginx.service: o processo principal terminou',
  'Nov 05 10:05:13 trilha systemd: Restarted nginx.service',
  'Nov 05 10:05:14 trilha nginx: servidor no ar'
].join('\n') + '\n';

nivel({
  curso: 'linux',
  n: 6,
  titulo: 'Processos, variáveis e logs',
  desc: 'O que está rodando, as variáveis do terminal, o histórico e os registros do sistema.',
  unidades: [
    {
      id: 'lxu11',
      titulo: 'Processos e ambiente',
      conceito: 'ps, kill, $PATH',
      desc: 'Ver e encerrar processos, e as variáveis de ambiente.',
      licoes: [
        {
          id: 'lx6l1',
          titulo: 'O que está rodando: ps',
          exs: [
            {
              t: 'texto',
              titulo: 'Processos',
              blocos: [
                {
                  p: 'Cada programa rodando é um processo, com um número único, o PID, e um usuário dono. O comando ps lista os processos: sozinho, mostra os seus; com aux, mostra os de todos os usuários.'
                },
                {
                  code: 'ana@trilha:~$ ps aux\nUSUARIO     PID  COMANDO\nroot          1  /sbin/init\nana        2041  firefox',
                  lang: 'texto'
                },
                {
                  p: 'O processo 1 é o primeiro a nascer quando o sistema liga, e é ele que começa todos os outros.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Liste os processos de todos os usuários e escreva o PID do servidor de acesso remoto, o sshd',
              processos: LX_PROCS,
              objetivo: { resposta: '880' },
              sol: ['ps aux'],
              dica: 'ps aux',
              exp: 'O sshd é o programa que recebe as conexões ssh. Ele roda como root, desde que o sistema liga.'
            },
            {
              t: 'terminal',
              p: 'Quantos processos são seus, da usuária ana?',
              processos: LX_PROCS,
              objetivo: { resposta: ['2', 'dois'] },
              sol: ['ps'],
              dica: 'O ps sozinho mostra só os seus.',
              exp: 'O firefox e o bot.py. Os outros são do root.'
            },
            {
              t: 'escolha',
              p: 'O que é o PID?',
              ops: ['O número único de cada processo', 'A senha do processo', 'O tamanho do programa'],
              c: 0,
              exp: 'É pelo PID que você se refere a um processo, por exemplo para encerrá-lo.'
            }
          ]
        },
        {
          id: 'lx6l2',
          titulo: 'Encerrando processos: kill',
          exs: [
            {
              t: 'texto',
              titulo: 'kill',
              blocos: [
                {
                  p: 'O kill encerra um processo pelo PID: kill 2290. Você só pode encerrar os seus processos; os dos outros usuários, só o root.'
                },
                {
                  p: 'Um processo estranho, que você não reconhece, gastando o processador, é um sinal clássico de invasão: muitos invasores instalam mineradores de criptomoeda, que usam o computador da vítima para gerar dinheiro para eles.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Um minerador está gastando todo o processador. Ache o PID dele e encerre-o',
              processos: [...LX_PROCS, { pid: 3666, usuario: 'ana', cmd: './xmrig --pool mineracao.exemplo' }],
              objetivo: { semProcesso: 3666 },
              sol: ['ps', 'kill 3666'],
              dica: 'ps mostra o PID; depois, kill e o número.',
              exp: 'Encerrado. Mas numa invasão de verdade isso não basta: é preciso descobrir como ele entrou, senão ele volta.'
            },
            {
              t: 'terminal',
              p: 'Tente encerrar o sshd, que é do root. Conseguiu? Responda sim ou não',
              processos: LX_PROCS,
              objetivo: { resposta: ['não', 'nao', 'Não', 'Nao'], executou: '^kill ' },
              sol: ['ps aux', 'kill 880'],
              dica: 'Ache o PID do sshd com ps aux e tente kill nele.',
              exp: 'Operação não permitida: um usuário comum não mexe nos processos do sistema.'
            },
            {
              t: 'escolha',
              p: 'Você encerrou um minerador malicioso, e no dia seguinte ele estava rodando de novo. Por quê?',
              ops: [
                'O invasor ainda tem um jeito de entrar ou de reiniciar o programa',
                'O kill não funciona',
                'É normal programas voltarem sozinhos'
              ],
              c: 0,
              exp: 'Encerrar o processo trata o sintoma. É preciso achar a porta: uma senha fraca, uma tarefa agendada, um arquivo esquecido.'
            }
          ]
        },
        {
          id: 'lx6l3',
          titulo: 'Variáveis e o PATH',
          exs: [
            {
              t: 'texto',
              titulo: 'Variáveis de ambiente',
              blocos: [
                {
                  p: 'O terminal guarda informações em variáveis. Para ler uma, use $ antes do nome: echo $HOME mostra a sua pasta pessoal, e echo $USER mostra o seu usuário. O comando env lista todas.'
                },
                {
                  p: 'Para criar uma, use export: export CIDADE=Recife. Sem espaços em volta do sinal de igual.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Crie a variável de ambiente CIDADE com o valor Recife, usando export',
              objetivo: { variavel: { nome: 'CIDADE', valor: 'Recife' } },
              sol: ['export CIDADE=Recife'],
              dica: 'export CIDADE=Recife, sem espaços.',
              exp: 'Confira com echo $CIDADE. Programas usam variáveis assim para saber configurações, como o idioma ou onde ficam arquivos.'
            },
            {
              t: 'texto',
              titulo: 'O PATH',
              blocos: [
                {
                  p: 'A variável PATH é a lista de pastas onde o terminal procura os programas, separadas por dois-pontos. Quando você digita ls, ele procura um programa ls na primeira pasta da lista, depois na segunda, e assim por diante.'
                },
                {
                  dica: 'Se um invasor consegue colocar uma pasta dele no começo do PATH, pode trocar comandos comuns por versões maliciosas. Por isso o PATH é uma das primeiras coisas que se confere numa investigação.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Mostre o valor do PATH e escreva a primeira pasta da lista',
              objetivo: { resposta: ['/usr/local/bin', '/usr/local/bin/'] },
              sol: ['echo $PATH'],
              dica: 'echo $PATH',
              exp: 'A ordem importa: a primeira pasta que tiver o programa vence.'
            }
          ]
        }
      ]
    },
    {
      id: 'lxu12',
      titulo: 'Rastros',
      conceito: 'logs',
      desc: 'O histórico de comandos, os logs e uma investigação.',
      licoes: [
        {
          id: 'lx6l4',
          titulo: 'O histórico guarda tudo',
          exs: [
            {
              t: 'texto',
              titulo: 'history',
              blocos: [
                {
                  p: 'O terminal lembra os comandos que você digitou. As setas para cima e para baixo trazem os anteriores, inclusive neste terminal do curso. O comando history lista todos, numerados.'
                },
                {
                  p: 'Isso é muito útil, e também perigoso: se alguém digita uma senha dentro de um comando, ela fica guardada no histórico, em texto puro, para quem olhar depois.'
                },
                {
                  dica: 'Programas bem feitos pedem a senha numa pergunta à parte, que não vai para o histórico. Nunca escreva senhas direto no comando.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Alguém usou este computador antes e digitou uma senha dentro de um comando. Ache a senha no histórico e escreva-a',
              historico: ['ls', 'cd projetos', 'git pull', 'mysql -u admin -pS3nhaForte!', 'exit', 'cd'],
              objetivo: { resposta: 'S3nhaForte!', executou: '^history' },
              sol: ['history'],
              dica: 'history',
              exp: 'O -p do mysql veio colado na senha: S3nhaForte!. Achar senhas em históricos é um passo clássico de quem invade, e de quem audita.'
            },
            {
              t: 'escolha',
              p: 'Qual é o jeito mais seguro de informar uma senha a um programa no terminal?',
              ops: [
                'Deixar o programa pedir a senha numa pergunta à parte',
                'Escrever a senha no próprio comando',
                'Guardar a senha numa variável e mostrar com echo'
              ],
              c: 0,
              exp: 'Na pergunta à parte, a senha não aparece na tela nem fica no histórico.'
            }
          ]
        },
        {
          id: 'lx6l5',
          titulo: 'Os logs do sistema',
          exs: [
            {
              t: 'texto',
              titulo: 'O diário do sistema',
              blocos: [
                {
                  p: 'Os logs são o diário do sistema: cada programa anota ali o que fez, com data e hora. Eles ficam em /var/log. Dois dos mais importantes:'
                },
                {
                  tabela: {
                    cab: ['Arquivo', 'O que registra'],
                    codigo: [0],
                    linhas: [
                      ['/var/log/syslog', 'mensagens gerais do sistema e dos serviços'],
                      ['/var/log/auth.log', 'logins, usos do sudo e autenticações']
                    ]
                  }
                },
                {
                  p: 'Você já conhece as ferramentas para ler logs: tail para ver o mais recente, grep para filtrar, wc e uniq para contar.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Veja as 5 últimas linhas de /var/log/syslog e escreva o nome do serviço que foi reiniciado (Restarted)',
              fs: { '/var/log/syslog': LX_SYSLOG },
              objetivo: { resposta: ['nginx', 'nginx.service'] },
              sol: ['tail -n 5 /var/log/syslog'],
              dica: 'tail -n 5 /var/log/syslog',
              exp: 'O nginx, um servidor de sites, caiu e foi reiniciado às 10:05.'
            },
            {
              t: 'terminal',
              p: 'O problema começou antes: quantas vezes o disco ficou sem espaço? Conte as linhas com “No space left” no syslog',
              fs: { '/var/log/syslog': LX_SYSLOG },
              objetivo: { resposta: ['3', 'três'] },
              sol: ['grep -c "No space left" /var/log/syslog'],
              dica: 'grep -c com o texto entre aspas, porque tem espaços.',
              exp: 'Três vezes. O disco cheio derrubou o backup e depois o nginx: o log conta a história em ordem.'
            }
          ]
        },
        {
          id: 'lx6l6',
          titulo: 'Investigando um ataque nos logs',
          exs: [
            {
              t: 'texto',
              titulo: 'Força bruta',
              blocos: [
                {
                  p: 'Um ataque de força bruta tenta entrar num servidor testando muitas senhas, uma atrás da outra. Ele deixa rastro no /var/log/auth.log: uma linha para cada tentativa.'
                },
                {
                  code: 'Nov 05 03:10:01 trilha sshd: Failed password for root from 203.0.113.45 port 51230\nNov 05 01:02:50 trilha sshd: Accepted password for ana from 192.0.2.10 port 40113',
                  lang: 'texto'
                },
                {
                  p: 'Failed password é uma senha errada; Accepted password é um login que deu certo. Depois de from vem o endereço IP de quem tentou.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Quantas tentativas de login falharam no total, segundo /var/log/auth.log?',
              fs: { '/var/log/auth.log': LX_AUTH },
              objetivo: { resposta: '18' },
              sol: ['grep -c Failed /var/log/auth.log'],
              dica: 'grep -c Failed /var/log/auth.log',
              exp: '18 falhas numa madrugada. Algumas pessoas erram a senha, mas uma sequência assim, em poucos minutos, é um robô.'
            },
            {
              t: 'terminal',
              p: 'Qual endereço IP mais errou a senha? Separe o IP das linhas de falha, conte e ordene',
              fs: { '/var/log/auth.log': LX_AUTH },
              objetivo: { resposta: '203.0.113.45' },
              sol: ["grep Failed /var/log/auth.log | cut -d ' ' -f 11 | sort | uniq -c | sort -nr"],
              dica: "Com espaço como separador, o IP é o campo 11: grep Failed /var/log/auth.log | cut -d ' ' -f 11 | sort | uniq -c | sort -nr",
              exp: 'A mesma apuração dos votos de bolo, agora num log de verdade: 203.0.113.45 tentou 12 vezes.'
            },
            {
              t: 'terminal',
              p: 'O atacante conseguiu entrar? Procure os logins aceitos e escreva o horário do login que veio do IP atacante',
              fs: { '/var/log/auth.log': LX_AUTH },
              objetivo: { resposta: ['03:22:44', '03:22', '3:22'] },
              sol: ['grep Accepted /var/log/auth.log'],
              dica: 'grep Accepted /var/log/auth.log',
              exp: 'Às 03:22 de 203.0.113.45, com a conta da ana: depois de errar a senha dela quatro vezes, acertou. A conta foi invadida.'
            },
            {
              t: 'texto',
              titulo: 'E agora?',
              blocos: [
                {
                  passos: [
                    'Trocar a senha da conta invadida por uma forte, e as de quem usava a mesma',
                    'Bloquear o IP atacante no firewall',
                    'Trocar o login por senha por login com chave, que não cai em força bruta',
                    'Instalar uma ferramenta como o fail2ban, que bloqueia sozinha quem erra demais',
                    'Ver o que o invasor fez enquanto esteve dentro: processos, arquivos novos, o histórico'
                  ]
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual medida impede de vez que um ataque de força bruta adivinhe a senha do ssh?',
              ops: ['Desligar o login por senha e usar só chaves', 'Apagar o auth.log', 'Mudar o nome do computador'],
              c: 0,
              exp: 'Sem login por senha, não há senha para adivinhar. Apagar o log só esconderia o problema, e ainda apagaria as provas.'
            }
          ]
        }
      ]
    }
  ]
});
