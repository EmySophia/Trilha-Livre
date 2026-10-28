/* Trilha Livre · Sites com HTML e CSS · Nível 1: Primeira página
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'html-css',
  n: 1,
  titulo: 'Primeira página',
  desc: 'Tags, títulos, parágrafos e o esqueleto de um documento.',
  videos: [
    {
      titulo: 'HTML5 e CSS3, módulo 1',
      canal: 'Curso em Vídeo',
      obs: 'as primeiras aulas: o que é HTML, primeiro código, títulos e parágrafos',
      url: 'https://www.youtube.com/playlist?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n'
    }
  ],
  unidades: [
    {
      id: 'hcu1',
      titulo: 'Primeiros passos',
      conceito: '<tags>',
      desc: 'O que é HTML e como o navegador lê uma página.',
      licoes: [
        {
          id: 'hc1l1',
          titulo: 'O que é HTML',
          exs: [
            {
              t: 'texto',
              titulo: 'A língua das páginas',
              blocos: [
                {
                  p: 'Toda página que você abre no navegador é escrita em HTML. HTML não é uma linguagem de programação: é uma linguagem de marcação. Ele diz ao navegador o que é cada pedaço do conteúdo: isto é um título, isto é um parágrafo, isto é uma imagem.'
                },
                {
                  p: 'Para marcar o conteúdo, usamos tags. Uma tag abre com `<nome>` e fecha com `</nome>`, com uma barra. O que fica entre as duas faz parte daquele elemento.'
                },
                {
                  web: `<h1>Olá, mundo!</h1>
<p>Esta é a minha primeira página.</p>`
                },
                {
                  p: 'Repare que o navegador não mostra as tags. Ele usa as tags para decidir como mostrar o texto: o `h1` sai grande e em negrito, o `p` sai como um parágrafo comum.'
                },
                {
                  dica: 'Quase toda tag precisa ser fechada. Esquecer a barra do fechamento é o erro mais comum de quem está começando.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que o HTML faz?',
              ops: [
                'Diz ao navegador o que é cada parte do conteúdo',
                'Faz contas e toma decisões, como o JavaScript',
                'Deixa a página colorida'
              ],
              c: 0,
              exp: 'HTML marca a estrutura. A aparência fica com o CSS, e a lógica com o JavaScript.'
            },
            {
              t: 'escolha',
              p: 'Qual é a tag de fechamento certa para `<p>`?',
              mono: true,
              ops: ['</p>', '<p/>', '<\\p>'],
              c: 0,
              exp: 'A barra vem logo depois do sinal de menor: `</p>`.'
            },
            {
              t: 'complete',
              p: 'Complete para fechar o título',
              code: '<h1>Bem-vindo___',
              bank: ['</h1>', '<h1>', '</p>', '<h1/>'],
              c: ['</h1>'],
              exp: 'A tag que abre e a que fecha precisam ter o mesmo nome.'
            },
            {
              t: 'web',
              p: 'Escreva um título com o texto Olá, mundo',
              html: '',
              regras: [
                { sel: 'h1', msg: 'Falta um título `<h1>`.' },
                {
                  sel: 'h1',
                  texto: 'Olá, mundo',
                  msg: 'O título precisa ter o texto "Olá, mundo".'
                }
              ],
              solHtml: '<h1>Olá, mundo</h1>',
              dica: 'Abra com `<h1>`, escreva o texto e feche com `</h1>`. O resultado aparece logo abaixo enquanto você digita.',
              exp: 'Sua primeira página está pronta.'
            },
            {
              t: 'web',
              p: 'Escreva um título h1 com o seu nome e, embaixo, um parágrafo dizendo a sua cidade',
              html: '',
              regras: [
                { sel: 'h1', msg: 'Falta o título `<h1>` com o seu nome.' },
                { sel: 'p', msg: 'Falta um parágrafo `<p>` com a sua cidade.' }
              ],
              solHtml: `<h1>Ana Lima</h1>
<p>Moro em Juazeiro do Norte.</p>`,
              dica: 'Duas linhas: um `<h1>` e um `<p>`, cada um com sua tag de fechamento.',
              exp: 'Quase toda página começa assim: um título e um texto.'
            }
          ]
        },
        {
          id: 'hc1l2',
          titulo: 'Títulos e parágrafos',
          exs: [
            {
              t: 'texto',
              titulo: 'Organizando o texto',
              blocos: [
                {
                  p: 'Existem seis níveis de título, de `h1` a `h6`. O `h1` é o título principal da página, e deve existir um só. Os outros organizam as seções, como capítulos e subcapítulos de um livro.'
                },
                {
                  web: `<h1>Receitas da vó</h1>
<h2>Bolo de fubá</h2>
<p>Um clássico do café da tarde.</p>
<h2>Pão de queijo</h2>
<p>Fica pronto em 30 minutos.</p>`
                },
                {
                  p: 'Cada parágrafo vai numa tag `p`. Apertar Enter várias vezes no código não cria linhas novas na página: o navegador junta os espaços e as quebras de linha num espaço só.'
                },
                {
                  dica: 'Escolha o nível do título pela importância, não pelo tamanho. O tamanho a gente muda depois, com CSS.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Quantos `h1` uma página deve ter, de preferência?',
              ops: ['Um só', 'Um por parágrafo', 'Quantos quiser'],
              c: 0,
              exp: 'O `h1` diz do que a página trata. Leitores de tela e buscadores usam isso.'
            },
            {
              t: 'escolha',
              p: 'Qual destes títulos é o mais importante?',
              mono: true,
              ops: ['<h2>', '<h4>', '<h6>'],
              c: 0,
              exp: 'Quanto menor o número, mais importante o título.'
            },
            {
              t: 'ordene',
              p: 'Monte a página na ordem certa',
              lines: [
                '<h1>Minha cidade</h1>',
                '<p>Uma cidade pequena e tranquila.</p>',
                '<h2>Onde comer</h2>',
                '<p>A feira de domingo tem pastel.</p>'
              ],
              exp: 'O título principal vem primeiro, com a apresentação logo abaixo. Depois vêm as seções, cada uma com seu `h2`.'
            },
            {
              t: 'web',
              p: 'Crie uma página com o título Meu bairro (h1) e dois parágrafos sobre ele',
              html: '',
              regras: [
                {
                  sel: 'h1',
                  texto: 'Meu bairro',
                  msg: 'Falta o título `<h1>` com "Meu bairro".'
                },
                { sel: 'p', min: 2, msg: 'Faltam parágrafos: são pelo menos dois `<p>`.' }
              ],
              solHtml: `<h1>Meu bairro</h1>
<p>Moro perto da praça.</p>
<p>Aos sábados tem feira.</p>`,
              dica: 'Um `<h1>` e depois dois `<p>`, cada um com seu fechamento.',
              exp: 'Título e parágrafos são a base de quase toda página.'
            },
            {
              t: 'web',
              p: 'Monte a receita: um h1 Bolo de cenoura, um h2 Ingredientes com um parágrafo, e um h2 Modo de fazer com outro parágrafo',
              html: '',
              regras: [
                {
                  sel: 'h1',
                  texto: 'Bolo de cenoura',
                  msg: 'Falta o `<h1>` com "Bolo de cenoura".'
                },
                {
                  sel: 'h2',
                  min: 2,
                  msg: 'Faltam os dois subtítulos `<h2>`: Ingredientes e Modo de fazer.'
                },
                {
                  sel: 'h2',
                  texto: 'Modo de fazer',
                  msg: 'Falta o `<h2>` com "Modo de fazer".'
                },
                {
                  sel: 'p',
                  min: 2,
                  msg: 'Cada seção precisa de um parágrafo: são pelo menos dois `<p>`.'
                }
              ],
              solHtml: `<h1>Bolo de cenoura</h1>
<h2>Ingredientes</h2>
<p>Três cenouras, três ovos, óleo, açúcar e farinha.</p>
<h2>Modo de fazer</h2>
<p>Bata tudo no liquidificador e asse por 40 minutos.</p>`,
              dica: 'Um `<h1>`, depois um `<h2>` e um `<p>`, depois outro `<h2>` e outro `<p>`.',
              exp: 'Os subtítulos dividem a página em seções, como numa receita de caderno.'
            }
          ]
        },
        {
          id: 'hc1l3',
          titulo: 'O esqueleto do documento',
          exs: [
            {
              t: 'texto',
              titulo: 'O esqueleto de toda página',
              blocos: [
                {
                  p: 'Uma página completa tem sempre o mesmo esqueleto. O `<!DOCTYPE html>` avisa que é HTML moderno. O `html` envolve tudo. O `head` guarda informações sobre a página, que não aparecem no corpo. O `body` guarda o que aparece na tela.'
                },
                {
                  code: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8">
    <title>Minha página</title>
  </head>
  <body>
    <h1>Olá!</h1>
  </body>
</html>`
                },
                {
                  p: 'O `lang="pt-BR"` diz que a página está em português do Brasil, o que ajuda leitores de tela a pronunciar certo. O `meta charset="utf-8"` faz os acentos aparecerem direito. O `title` é o nome que aparece na aba do navegador.'
                },
                {
                  p: '`lang` e `charset` são atributos: informações extras que vão dentro da tag de abertura, no formato `nome="valor"`.'
                },
                {
                  dica: 'Use espaços no começo das linhas (indentação) para mostrar o que está dentro do quê. O navegador ignora, mas o código fica muito mais fácil de ler.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Onde fica o conteúdo que aparece na tela?',
              mono: true,
              ops: ['<body>', '<head>', '<title>'],
              c: 0,
              exp: 'O `head` tem informações sobre a página; o `body` tem a página em si.'
            },
            {
              t: 'escolha',
              p: 'Para que serve o `<title>`?',
              ops: [
                'Dá o nome que aparece na aba do navegador',
                'Cria o maior título da página',
                'Deixa o texto em negrito'
              ],
              c: 0,
              exp: 'Ele não aparece no corpo da página. Quem cria o título visível é o `h1`.'
            },
            {
              t: 'ordene',
              p: 'Monte o esqueleto da página',
              lines: [
                '<!DOCTYPE html>',
                '<html lang="pt-BR">',
                '<head>',
                '<title>Portfólio</title>',
                '</head>',
                '<body>',
                '<h1>Meu portfólio</h1>',
                '</body>',
                '</html>'
              ],
              exp: 'Cada tag que abre fecha na ordem inversa, como caixas dentro de caixas.'
            },
            {
              t: 'web',
              p: 'Complete o esqueleto: coloque Receitas como título da aba e um h1 com Minhas receitas no corpo',
              html: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8">
    
  </head>
  <body>
    
  </body>
</html>`,
              regras: [
                {
                  titulo: 'Receitas',
                  msg: 'Falta o `<title>` com "Receitas" dentro do `head`.'
                },
                {
                  sel: 'body h1',
                  texto: 'Minhas receitas',
                  msg: 'Falta o `<h1>` com "Minhas receitas" dentro do `body`.'
                }
              ],
              solHtml: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8">
    <title>Receitas</title>
  </head>
  <body>
    <h1>Minhas receitas</h1>
  </body>
</html>`,
              dica: 'O `<title>` vai dentro do `<head>`; o `<h1>` vai dentro do `<body>`.',
              exp: 'Todo arquivo HTML que você criar daqui para frente pode começar com esse esqueleto.'
            },
            {
              t: 'web',
              p: 'Agora escreva o esqueleto inteiro, do zero: DOCTYPE, html com lang pt-BR, head com meta charset utf-8 e o título Agenda, e um body com um h1 Agenda da semana',
              html: '',
              regras: [
                {
                  sel: 'html[lang="pt-BR"]',
                  msg: 'Falta o `<html lang="pt-BR">` envolvendo tudo.'
                },
                {
                  sel: 'head meta[charset]',
                  msg: 'Falta o `<meta charset="utf-8">` dentro do `head`.'
                },
                { titulo: 'Agenda', msg: 'Falta o `<title>` com "Agenda".' },
                {
                  sel: 'body h1',
                  texto: 'Agenda da semana',
                  msg: 'Falta o `<h1>` com "Agenda da semana" dentro do `body`.'
                }
              ],
              solHtml: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8">
    <title>Agenda</title>
  </head>
  <body>
    <h1>Agenda da semana</h1>
  </body>
</html>`,
              dica: 'Se travar, volte na leitura: o esqueleto é sempre igual, só mudam o título e o conteúdo.',
              exp: 'De tanto escrever esse esqueleto, logo ele sai de memória.'
            }
          ]
        }
      ]
    },
    {
      id: 'hcu2',
      titulo: 'Detalhes do texto',
      conceito: '<strong>',
      desc: 'Ênfase, quebras de linha e comentários.',
      licoes: [
        {
          id: 'hc1l4',
          titulo: 'Ênfase, quebras e comentários',
          exs: [
            {
              t: 'texto',
              titulo: 'Detalhes do texto',
              blocos: [
                {
                  p: '`strong` marca algo importante, e o navegador mostra em negrito. `em` marca ênfase, como quando a gente muda o tom da voz, e sai em itálico. As duas ficam dentro do parágrafo, em volta só das palavras que importam.'
                },
                {
                  web: `<p>Atenção: a inscrição termina <strong>amanhã</strong>.</p>
<p>Eu <em>adoro</em> pão de queijo.</p>
<p>Rua das Flores, 120<br>Centro</p>
<hr>
<!-- este comentário não aparece -->
<p>Fim.</p>`
                },
                {
                  p: '`br` quebra a linha e `hr` desenha uma linha separadora. As duas não têm conteúdo, então não têm tag de fechamento.'
                },
                {
                  p: 'Tudo entre `<!--` e `-->` é um comentário: fica no código, mas não aparece na página. Serve para deixar anotações.'
                },
                {
                  dica: 'Use `strong` e `em` pelo significado. Se você só quer mudar a aparência, o caminho é o CSS.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual tag marca um texto importante?',
              mono: true,
              ops: ['<strong>', '<em>', '<br>'],
              c: 0,
              exp: 'O navegador mostra em negrito, e leitores de tela podem dar mais ênfase.'
            },
            {
              t: 'escolha',
              p: 'Qual destas tags não tem fechamento?',
              mono: true,
              ops: ['<br>', '<p>', '<strong>'],
              c: 0,
              exp: '`br` e `hr` não têm conteúdo dentro, então não fecham.'
            },
            {
              t: 'complete',
              p: 'Complete para deixar a palavra amanhã em negrito',
              code: '<p>A prova é ___amanhã___.</p>',
              bank: ['<strong>', '</strong>', '<br>', '</p>'],
              c: ['<strong>', '</strong>'],
              exp: 'A tag envolve só a palavra que importa.'
            },
            {
              t: 'web',
              p: 'Escreva um parágrafo com o endereço em duas linhas: Rua Bahia, 45 e, embaixo, Bairro Jardim. Use `<br>` para quebrar a linha',
              html: '',
              regras: [
                {
                  sel: 'p',
                  texto: 'Rua Bahia',
                  msg: 'Falta um parágrafo com "Rua Bahia, 45".'
                },
                { sel: 'p br', msg: 'Use `<br>` dentro do parágrafo para quebrar a linha.' },
                {
                  sel: 'p',
                  texto: 'Bairro Jardim',
                  msg: 'Falta "Bairro Jardim" no parágrafo.'
                }
              ],
              solHtml: '<p>Rua Bahia, 45<br>Bairro Jardim</p>',
              dica: 'Tudo dentro de um único `<p>`, com `<br>` no meio.',
              exp: 'Endereços e poemas são os usos mais comuns do `br`.'
            },
            {
              t: 'web',
              p: 'Escreva num parágrafo o aviso: Atenção: a vacinação vai até sexta. Deixe Atenção em strong e sexta em em',
              html: '',
              regras: [
                {
                  sel: 'p strong',
                  texto: 'Atenção',
                  msg: 'A palavra "Atenção" precisa estar dentro de `<strong>`.'
                },
                {
                  sel: 'p em',
                  texto: 'sexta',
                  msg: 'A palavra "sexta" precisa estar dentro de `<em>`.'
                },
                { sel: 'p', texto: 'vacinação', msg: 'Falta o texto do aviso no parágrafo.' }
              ],
              solHtml: '<p><strong>Atenção:</strong> a vacinação vai até <em>sexta</em>.</p>',
              dica: 'As duas tags ficam dentro do mesmo `<p>`, em volta só da palavra.',
              exp: 'Negrito para o que é importante, itálico para a ênfase.'
            }
          ]
        }
      ]
    }
  ]
});
