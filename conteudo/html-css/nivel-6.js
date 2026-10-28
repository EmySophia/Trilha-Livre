/* Trilha Livre · Sites com HTML e CSS · Nível 6: Site de verdade
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'html-css',
  n: 6,
  titulo: 'Site de verdade',
  desc: 'Tirar o site do app: arquivos, pastas, várias páginas e os detalhes para compartilhar.',
  videos: [
    {
      titulo: 'Instalando todas as ferramentas',
      canal: 'Curso em Vídeo',
      obs: 'editor de código e navegador',
      url: 'https://www.youtube.com/watch?v=UForX7ehChM'
    },
    {
      titulo: 'HTML5 e CSS3, módulo 4',
      canal: 'Curso em Vídeo',
      obs: 'quadros em linha (iframe) e media queries',
      url: 'https://www.youtube.com/playlist?list=PLHz_AreHm4dkcVCk2Bn_fdVQ81Fkrh6WT'
    }
  ],
  unidades: [
    {
      id: 'hcu11',
      titulo: 'No seu computador',
      conceito: 'index.html',
      desc: 'Arquivos, pastas e um site com várias páginas.',
      licoes: [
        {
          id: 'hcs1',
          titulo: 'Do app para o computador',
          pre: ['hc1l3', 'hc5l4'],
          exs: [
            {
              t: 'texto',
              titulo: 'Seu site, seus arquivos',
              blocos: [
                {
                  p: 'Até aqui, você escreveu tudo dentro do app. Um site de verdade é uma pasta com arquivos de texto: o HTML, o CSS e as imagens. Para criar esses arquivos, você precisa de um editor de código.'
                },
                {
                  p: 'O mais usado é o VS Code, gratuito, para Windows, Mac e Linux. Ele colore o código, completa as tags e aponta alguns erros. Quem prefere um programa totalmente livre pode usar o VSCodium, a mesma base sem as partes da Microsoft. Até o Bloco de Notas serve, só que sem nenhuma ajuda.'
                },
                {
                  passos: [
                    'Crie uma pasta chamada meu-site',
                    'Abra essa pasta no editor (no VS Code: File, depois Open Folder)',
                    'Crie um arquivo chamado index.html e escreva o esqueleto da página',
                    'Salve com Ctrl+S',
                    'Abra o index.html no navegador com dois cliques',
                    'Mudou o código? Salve e aperte F5 no navegador para recarregar'
                  ]
                },
                {
                  p: 'No celular, dá para começar sem instalar nada: no site do GitHub, dentro de um repositório, o botão Add file e depois Create new file cria e edita arquivos pelo navegador. O GitHub Pages mostra o resultado publicado.'
                },
                {
                  dica: 'No Windows, o Bloco de Notas pode salvar o arquivo como index.html.txt sem você perceber. Na hora de salvar, escolha Todos os arquivos no tipo, ou use um editor de código.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Você salvou o arquivo, mas a página aberta no navegador não mudou. O que falta?',
              ops: [
                'Recarregar a página, com F5',
                'Apagar o arquivo e criar de novo',
                'Instalar outro navegador'
              ],
              c: 0,
              exp: 'O navegador mostra o arquivo como ele estava quando foi aberto. Recarregar lê de novo.'
            },
            {
              t: 'escolha',
              p: 'O arquivo apareceu como index.html.txt. O que aconteceu?',
              ops: [
                'O editor salvou como texto e acrescentou .txt no fim do nome',
                'O arquivo estragou',
                'É assim mesmo, o navegador entende'
              ],
              c: 0,
              exp: 'Renomeie para index.html, sem o .txt, ou salve de novo escolhendo Todos os arquivos.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem para ver sua primeira página no computador',
              lines: [
                'Criar a pasta meu-site',
                'Abrir a pasta no editor',
                'Criar o arquivo index.html',
                'Escrever o código e salvar',
                'Abrir o index.html no navegador'
              ],
              exp: 'Daqui em diante, o ciclo é sempre o mesmo: mudar, salvar e recarregar.'
            },
            {
              t: 'web',
              p: 'Escreva o index.html que vai para a sua pasta: esqueleto com lang pt-BR, charset, a meta viewport, o título Meu site e um h1',
              html: '',
              regras: [
                { sel: 'html[lang="pt-BR"]', msg: 'Falta o `<html lang="pt-BR">`.' },
                { sel: 'head meta[charset]', msg: 'Falta o `<meta charset="utf-8">`.' },
                {
                  sel: 'meta[name="viewport"]',
                  attr: 'content',
                  contem: 'width=device-width',
                  msg: 'Falta a meta viewport: `<meta name="viewport" content="width=device-width, initial-scale=1">`.'
                },
                { titulo: 'Meu site', msg: 'Falta o `<title>` com "Meu site".' },
                { sel: 'body h1', msg: 'Falta um `<h1>` no `body`.' }
              ],
              solHtml: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Meu site</title>
</head>
<body>
  <h1>Olá! Este é o meu site.</h1>
</body>
</html>`,
              dica: 'A meta viewport apareceu na lição de páginas responsivas. Ela vai no `head`, junto do `charset`.',
              exp: 'Copie esse código para o seu editor, salve como index.html e abra no navegador: é o seu site, fora do app.'
            }
          ]
        },
        {
          id: 'hcs2',
          titulo: 'Pastas e caminhos',
          pre: ['hc2l2', 'hc2l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Onde está cada arquivo',
              blocos: [
                {
                  p: 'Quando o site cresce, os arquivos ficam organizados em pastas. Uma organização comum:'
                },
                {
                  code: `meu-site/
├── index.html
├── sobre.html
├── estilo.css
└── imagens/
    ├── logo.png
    └── capa.jpg`,
                  lang: 'texto'
                },
                {
                  p: 'Os caminhos relativos partem do arquivo onde você está escrevendo. Do `index.html`, a página `sobre.html` está na mesma pasta, então o link é só `href="sobre.html"`. A logo está dentro da pasta imagens: `src="imagens/logo.png"`.'
                },
                {
                  p: 'Para subir uma pasta, use `../`. Se o arquivo `blog/post.html` quer voltar para a página inicial, o caminho é `../index.html`.'
                },
                {
                  tabela: {
                    cab: ['Caminho', 'Quer dizer'],
                    linhas: [
                      ['sobre.html', 'Na mesma pasta'],
                      ['imagens/logo.png', 'Dentro da pasta imagens'],
                      ['../index.html', 'Uma pasta acima'],
                      ['https://...', 'Em outro site']
                    ]
                  }
                },
                {
                  dica: 'Use nomes de arquivo só com letras minúsculas, números e hífen, como `fotos-da-festa.jpg`. Espaços e acentos dão problema, e no GitHub Pages `Foto.JPG` e `foto.jpg` são arquivos diferentes.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'No index.html, qual caminho mostra o arquivo capa.jpg que está na pasta imagens?',
              mono: true,
              ops: ['imagens/capa.jpg', 'capa.jpg', 'capa.jpg/imagens'],
              c: 0,
              exp: 'Primeiro a pasta, depois uma barra, depois o arquivo.'
            },
            {
              t: 'escolha',
              p: 'O arquivo blog/post.html quer um link para o index.html, que está uma pasta acima. Qual href?',
              mono: true,
              ops: ['../index.html', 'index.html', 'blog/index.html'],
              c: 0,
              exp: 'Os dois pontos querem dizer "a pasta de cima".'
            },
            {
              t: 'escolha',
              p: 'Qual é o melhor nome para uma foto do site?',
              mono: true,
              ops: ['festa-junina-2026.jpg', 'Festa Junina 2026.JPG', 'festa_junina(1) final.jpeg'],
              c: 0,
              exp: 'Minúsculas, sem espaços e sem acentos: funciona em qualquer servidor.'
            },
            {
              t: 'web',
              conserte: true,
              p: 'A foto não aparece porque o caminho está errado. Conserte o src para imagens/biblioteca.jpg',
              html: `<h1>Nossa biblioteca</h1>
<img src="Imagens/Biblioteca.JPG" alt="Estantes cheias de livros coloridos" width="300">`,
              regras: [
                {
                  sel: 'img',
                  attr: 'src',
                  valor: 'imagens/biblioteca.jpg',
                  msg: 'O `src` ainda não é `imagens/biblioteca.jpg`. Repare nas letras maiúsculas.'
                }
              ],
              solHtml: `<h1>Nossa biblioteca</h1>
<img src="imagens/biblioteca.jpg" alt="Estantes cheias de livros coloridos" width="300">`,
              dica: 'A pasta e o arquivo se chamam `imagens` e `biblioteca.jpg`, tudo em minúsculas.',
              exp: 'A foto apareceu assim que o caminho ficou igualzinho ao nome do arquivo.'
            },
            {
              t: 'web',
              p: 'Mostre a logo imagens/logo.png com alt e width="80", e crie um link Sobre nós para a página sobre.html',
              html: '',
              regras: [
                {
                  sel: 'img',
                  attr: 'src',
                  valor: 'imagens/logo.png',
                  msg: 'Falta a imagem `imagens/logo.png`.'
                },
                { sel: 'img', attr: 'alt', msg: 'A logo precisa de `alt`.' },
                {
                  sel: 'a',
                  attr: 'href',
                  valor: 'sobre.html',
                  msg: 'Falta o link com `href="sobre.html"`.'
                },
                {
                  sel: 'a',
                  texto: 'Sobre nós',
                  msg: 'O texto do link precisa ser "Sobre nós".'
                }
              ],
              solHtml: `<img src="imagens/logo.png" alt="Logo da biblioteca: um livro aberto" width="80">
<p><a href="sobre.html">Sobre nós</a></p>`,
              dica: 'Na prévia, a página sobre.html não existe. Depois de acertar, toque no link para ver o aviso.',
              exp: 'No seu site, com um arquivo sobre.html na mesma pasta, o link abriria a página.'
            }
          ]
        },
        {
          id: 'hcs3',
          titulo: 'Várias páginas e um CSS só',
          pre: ['hcs2', 'hc4l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Um site com várias páginas',
              blocos: [
                {
                  p: 'Cada página do site é um arquivo `.html`. Elas se ligam pelos links do menu, que se repete em todas, e usam o mesmo arquivo de CSS. Assim, mudar uma cor no `estilo.css` muda o site inteiro.'
                },
                {
                  p: 'O CSS em arquivo separado entra no `head` de cada página com a tag `link`:'
                },
                {
                  code: `<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Contato · Biblioteca da Vila</title>
  <link rel="stylesheet" href="estilo.css">
</head>`
                },
                {
                  p: 'No menu, marque a página em que a pessoa está com `aria-current="page"`. O leitor de tela avisa "página atual", e o CSS pode destacar esse link com o seletor `[aria-current="page"]`.'
                },
                {
                  code: `<nav>
  <a href="index.html">Início</a>
  <a href="atividades.html">Atividades</a>
  <a href="contato.html" aria-current="page">Contato</a>
</nav>`
                },
                {
                  p: 'Para não repetir a mesma cor em vinte lugares, guarde-a numa variável. As variáveis do CSS começam com dois hífens, ficam no `:root` e são usadas com `var()`:'
                },
                {
                  code: `:root {
  --cor-principal: #2e7d32;
}

h1 {
  color: var(--cor-principal);
}

.botao {
  background-color: var(--cor-principal);
}`,
                  lang: 'css'
                },
                {
                  dica: 'Nos exercícios, a aba CSS faz o papel do arquivo `estilo.css`. No seu computador, ele é um arquivo de verdade, na mesma pasta das páginas.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Onde vai a tag `<link rel="stylesheet">`?',
              mono: true,
              ops: ['<head>', '<body>', '<footer>'],
              c: 0,
              exp: 'O navegador lê o `head` primeiro, então já desenha a página com o estilo certo.'
            },
            {
              t: 'complete',
              p: 'Complete para ligar o arquivo de estilo',
              code: '<link rel="___" href="___">',
              bank: ['stylesheet', 'estilo.css', 'style', 'index.html'],
              c: ['stylesheet', 'estilo.css'],
              exp: '`rel` diz o que o arquivo é; `href` diz onde ele está.'
            },
            {
              t: 'escolha',
              p: 'Para que serve `aria-current="page"` no menu?',
              ops: [
                'Dizer qual link é o da página atual',
                'Abrir o link numa aba nova',
                'Esconder o link'
              ],
              c: 0,
              exp: 'Quem não enxerga a página também fica sabendo onde está.'
            },
            {
              t: 'web',
              p: 'Monte o começo da página de contato: no head, ligue o estilo.css. No body, um nav com links para index.html, atividades.html e contato.html, com aria-current="page" no link de contato',
              html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Contato</title>
</head>
<body>
  
</body>
</html>`,
              regras: [
                {
                  sel: 'link[rel="stylesheet"]',
                  attr: 'href',
                  valor: 'estilo.css',
                  msg: 'Falta `<link rel="stylesheet" href="estilo.css">` no `head`.'
                },
                { sel: 'nav a', min: 3, msg: 'O `nav` precisa dos três links.' },
                {
                  sel: 'nav a[href="atividades.html"]',
                  msg: 'Falta o link para `atividades.html`.'
                },
                {
                  sel: 'nav a[href="contato.html"][aria-current="page"]',
                  msg: 'O link de contato precisa de `aria-current="page"`.'
                },
                {
                  sel: 'a[href="index.html"][aria-current]',
                  nao: true,
                  msg: 'Só o link da página atual leva `aria-current`.'
                }
              ],
              solHtml: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="estilo.css">
  <title>Contato</title>
</head>
<body>
  <nav>
    <a href="index.html">Início</a>
    <a href="atividades.html">Atividades</a>
    <a href="contato.html" aria-current="page">Contato</a>
  </nav>
</body>
</html>`,
              dica: 'O `link` vai dentro do `head`. O `nav` vai dentro do `body`.',
              exp: 'As outras páginas do site teriam o mesmo menu, cada uma com o `aria-current` no seu próprio link.'
            },
            {
              t: 'web',
              p: 'Crie a variável --cor-principal com #6a1b9a no :root, e use var(--cor-principal) na cor do h1 e no fundo do button',
              html: `<h1>Coral da comunidade</h1>
<button>Quero cantar</button>`,
              css: '',
              regras: [
                {
                  regra: ':root',
                  prop: '--cor-principal',
                  contem: '#6a1b9a',
                  msg: 'Falta a variável no `:root`: `--cor-principal: #6a1b9a;`.'
                },
                {
                  regra: 'h1',
                  prop: 'color',
                  contem: 'var(--cor-principal)',
                  msg: 'O `h1` ainda não usa `color: var(--cor-principal);`.'
                },
                {
                  regra: 'button',
                  prop: 'background-color',
                  contem: 'var(--cor-principal)',
                  msg: 'O `button` ainda não usa `background-color: var(--cor-principal);`.'
                }
              ],
              solHtml: `<h1>Coral da comunidade</h1>
<button>Quero cantar</button>`,
              solCss: `:root {
  --cor-principal: #6a1b9a;
}

h1 {
  color: var(--cor-principal);
}

button {
  background-color: var(--cor-principal);
  color: white;
}`,
              dica: 'Três regras: `:root` com a variável, `h1` e `button` usando `var(--cor-principal)`.',
              exp: 'Troque o valor da variável e veja as duas coisas mudarem juntas.'
            }
          ]
        }
      ]
    },
    {
      id: 'hcu12',
      titulo: 'Pronto para compartilhar',
      conceito: '<meta>',
      desc: 'Google, WhatsApp, fontes, vídeos e mapas.',
      licoes: [
        {
          id: 'hcs4',
          titulo: 'No Google e no WhatsApp',
          pre: ['hc1l3'],
          exs: [
            {
              t: 'texto',
              titulo: 'Como o seu site aparece quando é compartilhado',
              blocos: [
                {
                  p: 'Quando alguém manda o link do seu site no WhatsApp, aparece uma prévia com imagem, título e descrição. Quem monta essa prévia são algumas tags no `head`, que não aparecem na página.'
                },
                {
                  code: `<meta name="description" content="Biblioteca comunitária com empréstimo gratuito e oficinas na Vila Nova.">
<link rel="icon" href="imagens/icone.png">
<meta property="og:title" content="Biblioteca Comunitária Vila Nova">
<meta property="og:description" content="Empréstimo gratuito de livros e oficinas para todas as idades.">
<meta property="og:image" content="https://seu-usuario.github.io/biblioteca/imagens/capa.jpg">`
                },
                {
                  tabela: {
                    cab: ['Tag', 'Para quê'],
                    linhas: [
                      ['description', 'O resumo que o Google pode mostrar abaixo do título'],
                      ['link rel="icon"', 'O ícone da aba do navegador'],
                      ['og:title', 'O título da prévia no WhatsApp e nas redes'],
                      ['og:description', 'O texto da prévia'],
                      ['og:image', 'A imagem da prévia']
                    ]
                  }
                },
                {
                  p: 'As tags `og` são do Open Graph, um padrão criado pelo Facebook e usado pelo WhatsApp e por várias redes. O endereço da `og:image` precisa ser completo, começando com `https://`, porque quem lê é um programa de fora, que não sabe onde fica a pasta do seu site.'
                },
                {
                  p: 'Para a imagem da prévia, use uma foto deitada, de uns 1200 por 630 pixels, e leve.'
                },
                {
                  dica: 'Depois de publicar, mande o link para você mesmo no WhatsApp e confira a prévia. Se você mudar as tags, a prévia antiga pode continuar aparecendo por um tempo, porque fica guardada.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Onde ficam as tags `meta`?',
              mono: true,
              ops: ['<head>', '<body>', '<footer>'],
              c: 0,
              exp: 'São informações sobre a página, e não parte do conteúdo. Por isso ficam no `head`.'
            },
            {
              t: 'escolha',
              p: 'Por que o endereço da `og:image` começa com https://?',
              ops: [
                'Porque quem lê é um programa de fora, que precisa do endereço completo',
                'Porque imagens só funcionam com https',
                'Porque o WhatsApp não aceita arquivos .jpg'
              ],
              c: 0,
              exp: 'Um caminho como `imagens/capa.jpg` só faz sentido para quem está dentro do seu site.'
            },
            {
              t: 'escolha',
              p: 'Qual linha define o ícone da aba do navegador?',
              mono: true,
              ops: [
                '<link rel="icon" href="imagens/icone.png">',
                '<meta name="icon" content="icone.png">',
                '<img class="icone" src="icone.png">'
              ],
              c: 0,
              exp: 'O ícone é um arquivo ligado à página, por isso usa `link`, como o CSS.'
            },
            {
              t: 'web',
              p: 'Prepare o head: acrescente a meta description, o ícone imagens/icone.png e as tags og:title e og:image, com o endereço começando em https://',
              html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Biblioteca Comunitária Vila Nova</title>
</head>
<body>
  <h1>Biblioteca Comunitária Vila Nova</h1>
</body>
</html>`,
              regras: [
                {
                  sel: 'meta[name="description"]',
                  attr: 'content',
                  msg: 'Falta `<meta name="description" content="...">` com um resumo.'
                },
                {
                  sel: 'link[rel="icon"]',
                  attr: 'href',
                  valor: 'imagens/icone.png',
                  msg: 'Falta `<link rel="icon" href="imagens/icone.png">`.'
                },
                {
                  sel: 'meta[property="og:title"]',
                  attr: 'content',
                  msg: 'Falta `<meta property="og:title" content="...">`.'
                },
                {
                  sel: 'meta[property="og:image"]',
                  attr: 'content',
                  contem: 'https://',
                  msg: 'Falta a `og:image`, com um endereço que comece com https://'
                }
              ],
              solHtml: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Biblioteca comunitária com empréstimo gratuito e oficinas na Vila Nova.">
  <link rel="icon" href="imagens/icone.png">
  <meta property="og:title" content="Biblioteca Comunitária Vila Nova">
  <meta property="og:image" content="https://seu-usuario.github.io/biblioteca/imagens/biblioteca.jpg">
  <title>Biblioteca Comunitária Vila Nova</title>
</head>
<body>
  <h1>Biblioteca Comunitária Vila Nova</h1>
</body>
</html>`,
              dica: 'Tudo vai dentro do `head`. Copie o formato da leitura e troque os textos.',
              exp: 'A prévia não mudou, e é assim mesmo: essas tags são lidas pelo navegador, pelo Google e pelo WhatsApp.'
            }
          ]
        },
        {
          id: 'hcs5',
          titulo: 'Fontes do Google Fonts',
          pre: ['hc4l3'],
          exs: [
            {
              t: 'texto',
              titulo: 'Fontes que não estão no aparelho',
              blocos: [
                {
                  p: 'O `font-family` só usa fontes instaladas no aparelho de quem visita. Para usar outras, o site precisa carregar a fonte. O Google Fonts oferece centenas de fontes gratuitas e livres.'
                },
                {
                  passos: [
                    'Abra fonts.google.com e escolha uma fonte',
                    'Toque em Get font e depois em Get embed code',
                    'Copie as tags link e cole no head, antes do link do seu estilo.css',
                    'Use o nome da fonte no font-family, sempre com uma fonte genérica no fim'
                  ]
                },
                {
                  code: `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap" rel="stylesheet">`
                },
                {
                  code: `body {
  font-family: "Atkinson Hyperlegible", sans-serif;
}`,
                  lang: 'css'
                },
                {
                  p: 'A Atkinson Hyperlegible foi criada para ser fácil de ler, inclusive por quem enxerga pouco. É a fonte dos textos deste app.'
                },
                {
                  p: 'Cada fonte é um arquivo a mais para baixar. Use no máximo duas, e só os pesos de que precisa, para o site continuar rápido no celular.'
                },
                {
                  dica: 'Nomes de fonte com espaço vão entre aspas: `"Atkinson Hyperlegible"`.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Por que usar no máximo duas fontes no site?',
              ops: [
                'Cada fonte é um arquivo a mais, e o site fica mais lento',
                'O navegador não aceita três fontes',
                'O Google cobra a partir da terceira'
              ],
              c: 0,
              exp: 'No celular, com internet fraca, cada arquivo a menos faz diferença.'
            },
            {
              t: 'complete',
              p: 'Complete para usar a fonte Lora, com uma genérica de reserva',
              lang: 'css',
              code: `body {
  font-family: "Lora", ___;
}`,
              bank: ['serif', 'Lora', 'arial.ttf', 'font'],
              c: ['serif'],
              exp: 'A Lora é uma fonte com serifa, então a reserva certa é `serif`.'
            },
            {
              t: 'web',
              p: 'No head, acrescente `<link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&display=swap" rel="stylesheet">`. No CSS, use `font-family: "Atkinson Hyperlegible", sans-serif;` no body',
              html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Sarau</title>
</head>
<body>
  <h1>Sarau na biblioteca</h1>
  <p>Leitura de poemas aberta a todo mundo.</p>
</body>
</html>`,
              css: '',
              regras: [
                {
                  sel: 'link',
                  attr: 'href',
                  contem: 'fonts.googleapis.com',
                  msg: 'Falta a tag `link` do Google Fonts no `head`.'
                },
                {
                  sel: 'body',
                  css: 'font-family',
                  contem: 'atkinson hyperlegible',
                  msg: 'O `body` ainda não usa a fonte: `font-family: "Atkinson Hyperlegible", sans-serif;`.'
                }
              ],
              solHtml: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&display=swap" rel="stylesheet">
  <title>Sarau</title>
</head>
<body>
  <h1>Sarau na biblioteca</h1>
  <p>Leitura de poemas aberta a todo mundo.</p>
</body>
</html>`,
              solCss: `body {
  font-family: "Atkinson Hyperlegible", sans-serif;
}`,
              dica: 'O `link` vai no `head`, na aba HTML. O `font-family` vai na aba CSS.',
              exp: 'Com internet, a prévia já mostra a fonte nova.'
            }
          ]
        },
        {
          id: 'hcs6',
          titulo: 'Vídeos e mapas',
          pre: ['hc2l2'],
          exs: [
            {
              t: 'texto',
              titulo: 'Vídeos, mapas e outros sites dentro da página',
              blocos: [
                {
                  p: 'A tag `iframe` mostra um pedaço de outro site dentro do seu: um vídeo do YouTube, um mapa, uma playlist. O próprio site oferece o código pronto, numa opção como Compartilhar e depois Incorporar.'
                },
                {
                  code: `<iframe
  src="https://www.youtube-nocookie.com/embed/Ejkb_YpuHWs"
  title="Vídeo: começa o curso de HTML5 e CSS3 do Curso em Vídeo"
  loading="lazy"
  allowfullscreen>
</iframe>`
                },
                {
                  p: 'O `title` é obrigatório para a acessibilidade: é o que o leitor de tela anuncia. `loading="lazy"` só carrega o vídeo quando a pessoa chega perto dele, o que economiza dados. O endereço `youtube-nocookie.com` é o modo do YouTube que guarda menos dados de quem visita.'
                },
                {
                  p: 'Para o vídeo se ajustar à largura da tela, use no CSS `width: 100%` e `aspect-ratio: 16 / 9`, a proporção dos vídeos.'
                },
                {
                  p: 'Mapas funcionam igual. No OpenStreetMap, use Compartilhar e copie o HTML. No Google Maps, use Compartilhar e depois Incorporar um mapa.'
                },
                {
                  p: 'Para vídeos e áudios que são arquivos seus, existem as tags `video` e `audio`, com o atributo `controls` para mostrar os botões. Mas vídeo pesa muito: para vídeos longos, publicar no YouTube e incorporar costuma ser melhor.'
                },
                { code: '<audio controls src="audios/programa-de-radio.mp3"></audio>' },
                {
                  dica: 'Na prévia do app, vídeos e mapas de outros sites não carregam. No seu site publicado, funcionam normalmente.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual atributo do `iframe` o leitor de tela anuncia?',
              mono: true,
              ops: ['title', 'src', 'loading'],
              c: 0,
              exp: 'Sem `title`, a pessoa só ouve "quadro", sem saber o que tem dentro.'
            },
            {
              t: 'escolha',
              p: 'Para que serve `loading="lazy"`?',
              ops: [
                'Carregar o conteúdo só quando a pessoa chega perto dele',
                'Deixar o vídeo em câmera lenta',
                'Impedir o vídeo de carregar'
              ],
              c: 0,
              exp: 'Quem nunca rola até o vídeo não gasta dados com ele.'
            },
            {
              t: 'escolha',
              p: 'Você gravou uma aula de 40 minutos. Qual é o melhor jeito de pôr no site?',
              ops: [
                'Publicar no YouTube e incorporar com iframe',
                'Pôr o arquivo do vídeo direto na pasta do site',
                'Transformar o vídeo em imagens'
              ],
              c: 0,
              exp: 'Um vídeo longo pesa centenas de megabytes. O YouTube ajusta a qualidade à internet de cada pessoa.'
            },
            {
              t: 'web',
              p: 'Incorpore o vídeo: um iframe com src https://www.youtube-nocookie.com/embed/Ejkb_YpuHWs e um title. No CSS, deixe o iframe com width 100% e aspect-ratio 16 / 9',
              html: `<h1>Aula de abertura</h1>
`,
              css: '',
              regras: [
                {
                  sel: 'iframe',
                  attr: 'src',
                  contem: 'youtube',
                  msg: 'Falta o `iframe` com o endereço do vídeo no `src`.'
                },
                {
                  sel: 'iframe',
                  attr: 'title',
                  msg: 'O `iframe` precisa de um `title` que diga o que é o vídeo.'
                },
                {
                  regra: 'iframe',
                  prop: 'width',
                  contem: '100%',
                  msg: 'No CSS, falta `width: 100%;` no `iframe`.'
                },
                {
                  regra: 'iframe',
                  prop: 'aspect-ratio',
                  msg: 'No CSS, falta `aspect-ratio: 16 / 9;` no `iframe`.'
                }
              ],
              solHtml: `<h1>Aula de abertura</h1>
<iframe src="https://www.youtube-nocookie.com/embed/Ejkb_YpuHWs" title="Vídeo: começa o curso de HTML5 e CSS3" loading="lazy" allowfullscreen></iframe>`,
              solCss: `iframe {
  width: 100%;
  aspect-ratio: 16 / 9;
  border: none;
}`,
              dica: 'Copie o `iframe` da leitura. Na prévia o vídeo não toca, mas a conferência funciona.',
              exp: 'No seu site, o vídeo ocupa a largura da tela e mantém a proporção certa.'
            }
          ]
        }
      ]
    }
  ]
});
