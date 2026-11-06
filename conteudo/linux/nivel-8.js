/* Trilha Livre · Linux e terminal · Nível 8: Desafios: capture a bandeira
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md.
   Desafios no estilo dos CTFs de treino: cada um esconde uma bandeira (flag{...}) atrás de um truque do terminal. */

// trinta arquivos iguais e um diferente, para a agulha no palheiro
const LX_PALHEIRO = (() => {
  const fs = {};
  for (let i = 1; i <= 30; i++) fs[`palheiro/caixa${String(i).padStart(2, '0')}.txt`] = 'só palha por aqui\n';
  fs['palheiro/caixa17.txt'] = { c: 'flag{find_por_dono}\n', dono: 'joao', modo: '644' };
  return fs;
})();
// quinhentas linhas e uma bandeira no meio
const LX_DADOS = Array.from({ length: 500 }, (_, i) => i === 341 ? 'registro 342: flag{grep_acha_a_agulha}' : `registro ${i + 1}: ok`).join('\n') + '\n';
// linhas repetidas, menos uma
const LX_REPETIDAS = (() => {
  const palavras = ['abacaxi', 'banana', 'caju', 'goiaba', 'manga', 'pitanga', 'acerola'];
  const linhas = [];
  for (const p of palavras) for (let i = 0; i < 3; i++) linhas.push(p);
  linhas.splice(11, 0, 'flag{a_unica_que_nao_se_repete}');
  return linhas.join('\n') + '\n';
})();

nivel({
  curso: 'linux',
  n: 8,
  titulo: 'Desafios: capture a bandeira',
  desc: 'Desafios no estilo dos CTFs, que juntam tudo o que você aprendeu.',
  unidades: [
    {
      id: 'lxu15',
      titulo: 'Capture a bandeira',
      conceito: 'flag{...}',
      desc: 'Truques clássicos: nomes estranhos, ocultos e agulhas no palheiro.',
      licoes: [
        {
          id: 'lx8l1',
          titulo: 'Como funciona um CTF',
          exs: [
            {
              t: 'texto',
              titulo: 'Capture a bandeira',
              blocos: [
                {
                  p: 'CTF vem de capture the flag, capture a bandeira. São desafios de segurança em que algo está escondido, a bandeira, um texto como flag{alguma_coisa}, e você precisa achar usando as ferramentas e os truques que conhece.'
                },
                {
                  p: 'Existem CTFs para iniciantes, campeonatos e plataformas de treino, como o OverTheWire e o picoCTF. É o jeito legal, e divertido, de praticar segurança: os sistemas foram feitos para serem atacados.'
                },
                {
                  dica: 'Daqui em diante, cada missão esconde uma bandeira. Quando achar, copie exatamente, com as chaves.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Por que CTFs são um jeito legal de treinar invasão?',
              ops: [
                'Os sistemas foram criados para serem atacados, com autorização de quem os mantém',
                'Porque ninguém fiscaliza',
                'Porque as bandeiras são falsas'
              ],
              c: 0,
              exp: 'A diferença entre treino e crime continua sendo a autorização. Num CTF, ela é o próprio convite do desafio.'
            },
            {
              t: 'texto',
              titulo: 'O arquivo chamado -',
              blocos: [
                {
                  p: 'Primeiro truque: para muitos comandos, um traço sozinho, -, quer dizer “a entrada padrão”, o que vem pelo pipe. Então, se um arquivo se chama -, cat - não abre o arquivo: fica esperando a entrada.'
                },
                {
                  p: 'A saída é escrever o caminho de um jeito que não seja só o traço: ./- quer dizer “o arquivo - desta pasta”.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'A bandeira está num arquivo chamado - (um traço). Leia e escreva a bandeira',
              fs: { 'leia-me.txt': 'A bandeira está no arquivo chamado -\n', '-': 'flag{traco_nao_assusta}\n' },
              objetivo: { resposta: 'flag{traco_nao_assusta}' },
              sol: ['cat leia-me.txt', 'cat ./-'],
              dica: 'cat ./-',
              exp: 'O ./ transforma o traço num caminho de arquivo. O mesmo truque serve para arquivos cujo nome começa com traço, como -rf.'
            }
          ]
        },
        {
          id: 'lx8l2',
          titulo: 'Nomes difíceis',
          exs: [
            {
              t: 'texto',
              titulo: 'Espaços no nome',
              blocos: [
                {
                  p: 'Um nome com espaços vira vários argumentos, e o comando procura arquivos que não existem. A saída são aspas em volta do nome inteiro, ou uma barra invertida antes de cada espaço.'
                },
                {
                  code: 'cat "bandeira com espacos.txt"\ncat bandeira\\ com\\ espacos.txt',
                  lang: 'texto'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Leia o arquivo que tem espaços no nome e escreva a bandeira',
              fs: { 'bandeira com espacos.txt': 'flag{aspas_resolvem}\n', 'bandeira': 'quase... mas não é este\n' },
              objetivo: { resposta: 'flag{aspas_resolvem}' },
              sol: ['cat "bandeira com espacos.txt"'],
              dica: 'Aspas em volta do nome todo.',
              exp: 'Sem aspas, o cat tentaria abrir três arquivos: bandeira, com e espacos.txt. E ainda mostraria o arquivo bandeira, que é uma armadilha.'
            },
            {
              t: 'texto',
              titulo: 'Oculto dentro de oculto',
              blocos: [
                {
                  p: 'Pastas ocultas podem estar dentro de pastas ocultas. Você pode descer uma por uma com ls -a, ou usar as ferramentas de busca: find pasta -name "*flag*" procura pelo nome, e grep -r flag pasta procura pelo conteúdo, olhando inclusive os ocultos.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Em algum lugar dentro da pasta cofre há uma bandeira escondida em pastas ocultas. Ache e escreva',
              fs: { 'cofre/leia.txt': 'Nada aqui. Procure melhor.\n', 'cofre/.gaveta/vazia.txt': 'vazio\n', 'cofre/.gaveta/.fundo-falso/.bilhete': 'flag{oculto_dentro_de_oculto}\n' },
              objetivo: { resposta: 'flag{oculto_dentro_de_oculto}' },
              sol: ['grep -r flag cofre'],
              dica: 'grep -r flag cofre olha em todos os arquivos, inclusive nos ocultos.',
              exp: 'Descer com ls -a também resolve, mas o grep -r acha de uma vez. Em desafios e investigações, use as ferramentas de busca.'
            }
          ]
        },
        {
          id: 'lx8l3',
          titulo: 'A agulha no palheiro',
          exs: [
            {
              t: 'texto',
              titulo: 'Procurar por características',
              blocos: [
                {
                  p: 'Quando há muitos arquivos parecidos, abrir um por um não dá. Procure pelo que torna o certo diferente: o dono (find -user), as permissões (find -perm), o nome (find -name) ou o conteúdo (grep).'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'A pasta palheiro tem 31 caixas. Só uma pertence ao usuário joao, e ela guarda a bandeira. Ache e escreva',
              usuarios: ['joao'],
              fs: LX_PALHEIRO,
              objetivo: { resposta: 'flag{find_por_dono}' },
              sol: ['find palheiro -user joao', 'cat palheiro/caixa17.txt'],
              dica: 'find palheiro -user joao mostra qual é. Depois, cat nele.',
              exp: 'O find achou a única caixa do joao entre trinta e uma. Investigações reais fazem isso para achar arquivos deixados por um invasor.'
            },
            {
              t: 'terminal',
              p: 'O arquivo dados.txt tem 500 linhas. Uma delas tem a bandeira. Ache e escreva',
              fs: { 'dados.txt': LX_DADOS },
              objetivo: { resposta: 'flag{grep_acha_a_agulha}' },
              sol: ['grep flag dados.txt'],
              dica: 'Toda bandeira tem a palavra flag.',
              exp: 'Rolar 500 linhas levaria minutos; o grep levou um instante.'
            }
          ]
        }
      ]
    },
    {
      id: 'lxu16',
      titulo: 'Desafios finais',
      conceito: 'tudo junto',
      desc: 'A linha única, textos codificados e uma investigação completa.',
      licoes: [
        {
          id: 'lx8l4',
          titulo: 'A linha única',
          exs: [
            {
              t: 'texto',
              titulo: 'uniq -u',
              blocos: [
                {
                  p: 'O uniq tem mais um truque: com -u, ele mostra só as linhas que não se repetem. Como sempre com o uniq, ordene antes, para as repetidas ficarem lado a lado.'
                },
                {
                  code: 'sort frutas.txt | uniq -u',
                  lang: 'texto'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'No arquivo frutas.txt, todas as linhas aparecem três vezes, menos uma. Ache a única e escreva',
              fs: { 'frutas.txt': LX_REPETIDAS },
              objetivo: { resposta: 'flag{a_unica_que_nao_se_repete}' },
              sol: ['sort frutas.txt | uniq -u'],
              dica: 'sort frutas.txt | uniq -u',
              exp: 'Num arquivo pequeno, um grep flag também acharia. Mas a técnica do uniq -u funciona até quando você não sabe o que está procurando, só que é o diferente.'
            },
            {
              t: 'escolha',
              p: 'Por que é preciso o sort antes do uniq -u?',
              ops: [
                'O uniq só compara linhas vizinhas; sem ordenar, repetidas espalhadas pareceriam únicas',
                'Para a bandeira ficar no topo',
                'Não é preciso'
              ],
              c: 0,
              exp: 'Sem o sort, cada abacaxi separado dos outros seria contado como único.'
            }
          ]
        },
        {
          id: 'lx8l5',
          titulo: 'Codificado não é escondido',
          exs: [
            {
              t: 'texto',
              titulo: 'Base64',
              blocos: [
                {
                  p: 'Base64 é um jeito de escrever qualquer dado usando só letras, números e alguns símbolos. Ele aparece em e-mails, em páginas e em desafios. Um texto em base64 parece embaralhado, como ZmxhZ3t4fQo=, mas não tem segredo nenhum: qualquer um decodifica com base64 -d.'
                },
                {
                  dica: 'Codificar não é criptografar. Criptografia precisa de uma chave para desfazer; base64, não. Guardar uma senha “em base64” é o mesmo que guardar a senha aberta.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'O arquivo segredo.txt está em base64. Decodifique e escreva a bandeira',
              fs: { 'segredo.txt': 'ZmxhZ3tiYXNlNjRfbmFvX2VfY3JpcHRvZ3JhZmlhfQo=\n' },
              objetivo: { resposta: 'flag{base64_nao_e_criptografia}' },
              sol: ['base64 -d segredo.txt'],
              dica: 'base64 -d segredo.txt',
              exp: 'Sem chave nenhuma, só com um comando. Por isso base64 nunca protege nada.'
            },
            {
              t: 'terminal',
              p: 'Este outro segredo foi codificado em base64 duas vezes seguidas. Decodifique as duas camadas e escreva a bandeira',
              fs: { 'duplo.txt': 'Wm14aFozdGtkV0Z6WDJOaGJXRmtZWE45Q2c9PQo=\n' },
              objetivo: { resposta: 'flag{duas_camadas}' },
              sol: ['base64 -d duplo.txt | base64 -d'],
              dica: 'Decodifique e mande o resultado, com um pipe, para outro base64 -d.',
              exp: 'Duas camadas continuam sem proteger nada: só dão um passo a mais. O pipe faz as duas de uma vez.'
            },
            {
              t: 'escolha',
              p: 'Um sistema guarda as senhas dos clientes em base64. Isso é seguro?',
              ops: ['Não: qualquer um decodifica base64 sem precisar de chave', 'Sim, porque o texto fica embaralhado', 'Sim, se forem duas camadas'],
              c: 0,
              exp: 'Senhas devem ser guardadas como hash, com salt, como você vai ver no curso de Criptografia.'
            }
          ]
        },
        {
          id: 'lx8l6',
          titulo: 'Desafio final: resposta a incidente',
          exs: [
            {
              t: 'texto',
              titulo: 'O servidor da Ana foi invadido',
              blocos: [
                {
                  p: 'Lembra do ataque de força bruta que você investigou nos logs? O invasor entrou com a conta da Ana. Agora é com você: contenha o estrago, como faria uma equipe de resposta a incidentes.'
                },
                {
                  passos: [
                    'Ache o processo estranho que o invasor deixou rodando',
                    'Leia o script que ele usa, que fica numa pasta oculta em /tmp: lá dentro há uma bandeira',
                    'Encerre o processo',
                    'Apague o script do invasor',
                    'A chave privada da Ana, .ssh/id_rsa, está com permissão aberta demais: deixe-a só para a dona'
                  ]
                },
                {
                  dica: 'Antes de apagar o script, leia: ele é prova do que aconteceu. Numa investigação de verdade, você guardaria uma cópia.'
                }
              ]
            },
            {
              t: 'terminal',
              p: 'Faça os cinco passos: ache o processo, leia o script em /tmp, escreva a bandeira na caixa, encerre o processo, apague o script e proteja a chave',
              fs: {
                '/tmp/.x/': { dono: 'ana' },
                '/tmp/.x/minerador.sh': { c: '#!/bin/bash\n# deixado pelo invasor\n# flag{incidente_contido}\n./xmrig --pool mineracao.exemplo\n', dono: 'ana' },
                '.ssh/id_rsa': { c: '-----BEGIN PRIVATE KEY-----\n(chave de exemplo)\n-----END PRIVATE KEY-----\n', modo: '644' },
                'notas.txt': 'lembrar de trocar a senha\n'
              },
              processos: [
                { pid: 1, usuario: 'root', cmd: '/sbin/init' },
                { pid: 880, usuario: 'root', cmd: 'sshd' },
                { pid: 2041, usuario: 'ana', cmd: 'bash' },
                { pid: 6666, usuario: 'ana', cmd: 'bash /tmp/.x/minerador.sh' }
              ],
              objetivo: [
                { semProcesso: 6666 },
                { naoExiste: '/tmp/.x/minerador.sh' },
                { modo: { arquivo: '.ssh/id_rsa', modo: '600' } },
                { resposta: 'flag{incidente_contido}' }
              ],
              sol: ['ps', 'cat /tmp/.x/minerador.sh', 'kill 6666', 'rm /tmp/.x/minerador.sh', 'chmod 600 .ssh/id_rsa'],
              dica: 'ps mostra o processo e o caminho do script. Depois: cat no script, kill no PID, rm no script e chmod 600 na chave.',
              exp: 'Processo encerrado, script apagado, chave protegida. Num caso real, ainda faltaria trocar a senha da Ana, bloquear o IP atacante e trocar o login por senha por login com chave.'
            },
            {
              t: 'texto',
              titulo: 'Você terminou o curso',
              blocos: [
                {
                  p: 'Você navega, lê, cria, procura, entende permissões, usa o root com cuidado, investiga logs, escreve scripts e resolve desafios. Com isso, o terminal deixou de ser uma tela preta assustadora e virou uma ferramenta.'
                },
                {
                  p: 'Para continuar treinando, o Bandit, do OverTheWire, é o próximo passo natural: são dezenas de níveis com os mesmos truques deste nível, num Linux de verdade, acessado por ssh. Na formação Segurança e hacking ético, o próximo curso é Python, a linguagem dos scripts de segurança.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Num incidente, por que ler o script do invasor antes de apagá-lo?',
              ops: [
                'Ele mostra o que o invasor fez e para onde mandava os dados, e serve de prova',
                'Para aprender a fazer igual',
                'Não há motivo: o certo é apagar na hora'
              ],
              c: 0,
              exp: 'Entender o ataque ajuda a fechar a porta e a avisar quem foi afetado. Apagar sem ler destrói a prova.'
            }
          ]
        }
      ]
    }
  ]
});
