/* Trilha Livre · Sites com HTML e CSS · Nível 8: Projetos
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'html-css',
  n: 8,
  titulo: 'Projetos',
  desc: 'Juntar tudo em páginas e num site completo, e colocar no ar.',
  videos: [
    {
      titulo: 'HTML5 e CSS3, módulo 3',
      canal: 'Curso em Vídeo',
      obs: 'versionamento e hospedagem de sites estáticos',
      url: 'https://www.youtube.com/playlist?list=PLHz_AreHm4dmcAviDwiGgHbeEJToxbOpZ'
    }
  ],
  unidades: [
    {
      id: 'hcu9',
      titulo: 'Primeiros projetos',
      conceito: 'HTML + CSS',
      desc: 'Um cartão de visita e uma página completa.',
      licoes: [
        {
          id: 'hc6l1',
          titulo: 'Projeto: cartão de visita',
          pre: ['hc5l1', 'hc5l2', 'hc2l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Projeto: seu cartão na internet',
              blocos: [
                {
                  p: 'Hora de juntar o que você aprendeu num cartão de visita digital: nome, o que você faz e como falar com você.'
                },
                {
                  passos: [
                    'No HTML: um `article` com a classe `cartao`, um `h1` com o nome, um parágrafo com a profissão e uma lista de contatos com links',
                    'No CSS: borda, padding e cantos arredondados no cartão',
                    'Uma cor de destaque no nome',
                    'Os contatos lado a lado, com flex'
                  ]
                },
                {
                  web: `<article class="cartao">
  <h1>Ana Lima</h1>
  <p>Eletricista residencial</p>
  <ul class="contatos">
    <li><a href="mailto:ana@exemplo.com">E-mail</a></li>
    <li><a href="https://exemplo.com/ana">Portfólio</a></li>
  </ul>
</article>`,
                  css: `.cartao {
  max-width: 320px;
  padding: 20px;
  border: 2px solid #00897b;
  border-radius: 16px;
  font-family: sans-serif;
}

.cartao h1 {
  color: #00897b;
  margin: 0;
}

.contatos {
  display: flex;
  gap: 12px;
  padding: 0;
  list-style: none;
}`
                },
                {
                  dica: '`list-style: none` tira os marcadores da lista, e `padding: 0` tira o recuo. É o jeito comum de transformar uma lista numa barra de links.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Por que usar `article` no cartão?',
              ops: [
                'Porque o cartão faz sentido sozinho, como uma unidade',
                'Porque deixa o texto maior',
                'Porque todo cartão precisa de article'
              ],
              c: 0,
              exp: 'Um `article` poderia ser copiado para outra página e continuaria fazendo sentido.'
            },
            {
              t: 'web',
              projeto: { id: 'cartao', titulo: 'Cartão de visita' },
              p: 'Monte o seu cartão: article.cartao com h1 e parágrafo, padding de 20px e borda sólida no cartão, e uma lista .contatos com dois links lado a lado (display flex)',
              html: '',
              css: '',
              regras: [
                { sel: 'article.cartao', msg: 'Falta o `<article class="cartao">`.' },
                { sel: '.cartao h1', msg: 'Falta o `<h1>` com o nome dentro do cartão.' },
                { sel: '.cartao p', msg: 'Falta um parágrafo dentro do cartão.' },
                {
                  sel: '.contatos a',
                  min: 2,
                  msg: 'A lista `.contatos` precisa de pelo menos dois links.'
                },
                {
                  sel: '.cartao',
                  css: 'padding-top',
                  valor: '20px',
                  msg: 'Dê `padding: 20px;` ao cartão.'
                },
                {
                  sel: '.cartao',
                  css: 'border-top-style',
                  valor: 'solid',
                  msg: 'O cartão precisa de uma borda sólida, como `border: 2px solid teal;`.'
                },
                {
                  sel: '.contatos',
                  css: 'display',
                  valor: 'flex',
                  msg: 'A lista `.contatos` precisa de `display: flex;`.'
                }
              ],
              solHtml: `<article class="cartao">
  <h1>Seu nome</h1>
  <p>O que você faz</p>
  <ul class="contatos">
    <li><a href="mailto:voce@exemplo.com">E-mail</a></li>
    <li><a href="https://exemplo.com">Portfólio</a></li>
  </ul>
</article>`,
              solCss: `.cartao {
  max-width: 320px;
  padding: 20px;
  border: 2px solid teal;
  border-radius: 16px;
}

.contatos {
  display: flex;
  gap: 12px;
  padding: 0;
  list-style: none;
}`,
              dica: 'Siga os passos da leitura. Comece pelo HTML e só depois vá para a aba CSS.',
              exp: 'Seu cartão foi guardado. Na última lição do curso, você vai colocá-lo na internet.'
            }
          ]
        },
        {
          id: 'hc6l2',
          titulo: 'Projeto: página completa',
          pre: ['hc3l3', 'hc3l1', 'hc5l2'],
          exs: [
            {
              t: 'texto',
              titulo: 'Projeto: a página de um projeto social',
              blocos: [
                {
                  p: 'Agora uma página inteira para um projeto da comunidade: cursinho popular, horta, biblioteca, time de futebol. Ela tem tudo o que um site de verdade precisa.'
                },
                {
                  passos: [
                    '`header` com o nome do projeto e um `nav` com links para as seções',
                    '`main` com duas `section`: uma sobre o projeto e uma de inscrição',
                    'Na inscrição, um formulário com nome e e-mail, os dois com `label`, e um botão',
                    '`footer` com uma frase de contato',
                    'No CSS: uma fonte para a página toda, o `nav` com flex e espaço nas seções'
                  ]
                },
                {
                  code: `<nav>
  <a href="#sobre">Sobre</a>
  <a href="#inscricao">Inscrição</a>
</nav>`
                },
                {
                  dica: 'Faça primeiro o HTML inteiro, sem estilo. Quando a estrutura estiver certa, aí sim vá para o CSS. Fica muito mais fácil achar os problemas.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Por que começar pelo HTML e só depois fazer o CSS?',
              ops: [
                'Com a estrutura certa, fica mais fácil estilizar e achar problemas',
                'Porque o CSS não funciona sem todo o HTML pronto',
                'Não faz diferença a ordem'
              ],
              c: 0,
              exp: 'Estrutura primeiro, aparência depois. É assim que profissionais trabalham também.'
            },
            {
              t: 'web',
              projeto: { id: 'pagina', titulo: 'Página do projeto social' },
              p: 'Monte a página: header com h1 e um nav com links, main com duas section, um form com nome e e-mail (com label) e um botão, e um footer. No CSS, ponha o nav em flex',
              html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <title>Cursinho Popular</title>
</head>
<body>
  
</body>
</html>`,
              css: '',
              regras: [
                { sel: 'header h1', msg: 'Falta o `<header>` com um `<h1>`.' },
                {
                  sel: 'header nav a',
                  min: 2,
                  msg: 'O `<nav>` dentro do header precisa de pelo menos dois links.'
                },
                { sel: 'main section', min: 2, msg: 'O `<main>` precisa de duas `<section>`.' },
                {
                  sel: 'form input',
                  min: 2,
                  msg: 'O formulário precisa de dois campos: nome e e-mail.'
                },
                {
                  sel: 'form input[type="email"]',
                  msg: 'Um dos campos precisa ser `type="email"`.'
                },
                {
                  rotulado: 'form input',
                  todos: true,
                  msg: 'Todos os campos precisam de um `<label>` ligado a eles.'
                },
                { sel: 'form button', msg: 'Falta o botão do formulário.' },
                { sel: 'footer', msg: 'Falta o `<footer>`.' },
                {
                  sel: 'nav',
                  css: 'display',
                  valor: 'flex',
                  msg: 'O `<nav>` precisa de `display: flex;` no CSS.'
                }
              ],
              solHtml: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <title>Cursinho Popular</title>
</head>
<body>
  <header>
    <h1>Cursinho Popular da Vila</h1>
    <nav>
      <a href="#sobre">Sobre</a>
      <a href="#inscricao">Inscrição</a>
    </nav>
  </header>
  <main>
    <section id="sobre">
      <h2>Sobre</h2>
      <p>Aulas gratuitas para o ENEM, aos sábados.</p>
    </section>
    <section id="inscricao">
      <h2>Inscrição</h2>
      <form>
        <label for="nome">Nome</label>
        <input id="nome" type="text">
        <label for="email">E-mail</label>
        <input id="email" type="email">
        <button>Quero participar</button>
      </form>
    </section>
  </main>
  <footer>
    <p>Fale com a gente na associação do bairro.</p>
  </footer>
</body>
</html>`,
              solCss: `body {
  font-family: sans-serif;
  margin: 0;
}

header {
  background-color: #4527a0;
  color: white;
  padding: 16px;
}

nav {
  display: flex;
  gap: 16px;
}

nav a {
  color: white;
}

section {
  padding: 16px;
}`,
              dica: 'Escreva dentro do `<body>`. Comece pelo `header`, depois o `main` com as duas seções, e por último o `footer`.',
              exp: 'Essa é a estrutura de boa parte dos sites que você visita. Sua página foi guardada para você publicar na próxima lição.'
            }
          ]
        }
      ]
    },
    {
      id: 'hcu14',
      titulo: 'Projeto final: o site da biblioteca',
      conceito: 'estilo.css',
      desc: 'Um site de três páginas, do planejamento ao arquivo .zip.',
      licoes: [
        {
          id: 'hcp1',
          titulo: 'Planejando o site',
          pre: ['hcs3'],
          exs: [
            {
              t: 'texto',
              titulo: 'Antes do código, o plano',
              blocos: [
                {
                  p: 'O projeto final é o site de uma biblioteca comunitária, com três páginas: Início, Atividades e Contato. Você vai montar uma página por lição, todas usando o mesmo estilo.css. No fim, o app junta tudo num arquivo .zip pronto para publicar.'
                },
                {
                  p: 'Todo site começa com perguntas simples: para quem é, o que a pessoa quer encontrar e o que você quer que ela faça. Na biblioteca, quem mora no bairro quer saber o horário, as atividades e como chegar.'
                },
                {
                  code: `biblioteca/
├── index.html        quem somos e chamada para as atividades
├── atividades.html   as oficinas em cartões, com fotos
├── contato.html      horários, mapa e formulário
├── estilo.css        um estilo só para as três páginas
└── imagens/
    ├── logo.png
    ├── biblioteca.jpg
    └── ...`,
                  lang: 'texto'
                },
                {
                  p: 'Antes de abrir o editor, rabisque cada página num papel: caixas para o topo, a capa, os cartões e o rodapé. Esse rascunho se chama wireframe e evita muito retrabalho.'
                },
                {
                  dica: 'Comece pelo conteúdo, não pela decoração. Uma página simples com a informação certa é útil; uma página bonita sem o horário de funcionamento não serve para nada.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Por que as três páginas usam o mesmo estilo.css?',
              ops: [
                'Para o site ter a mesma cara e dar para mudar tudo de uma vez',
                'Porque cada página só aceita um arquivo',
                'Para o site ficar mais pesado'
              ],
              c: 0,
              exp: 'Mudou a cor no estilo.css, mudou nas três páginas.'
            },
            {
              t: 'escolha',
              p: 'O que é um wireframe?',
              ops: [
                'Um rascunho simples da página, com caixas no lugar do conteúdo',
                'Um tipo de cabo de internet',
                'O código final da página'
              ],
              c: 0,
              exp: 'Papel e caneta bastam. O importante é decidir o que vai onde.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem o caminho de um site',
              lines: [
                'Decidir para quem é e o que a pessoa procura',
                'Listar as páginas e o conteúdo de cada uma',
                'Rabiscar o wireframe',
                'Escrever o HTML',
                'Escrever o CSS',
                'Publicar e compartilhar'
              ],
              exp: 'Agora, mão na massa: a página inicial.'
            }
          ]
        },
        {
          id: 'hcp2',
          titulo: 'Projeto final: página inicial',
          pre: ['hcs3', 'hc4l7', 'hc5l2'],
          exs: [
            {
              t: 'texto',
              titulo: 'A página inicial',
              blocos: [
                {
                  p: 'A página inicial tem quatro partes: o topo, com a logo, o nome e o menu; uma capa com foto de fundo e um botão; uma lista de como a biblioteca funciona; e o rodapé.'
                },
                {
                  passos: [
                    'No head: a meta viewport, a meta description e o link para o estilo.css',
                    'Topo: um header com a logo (imagens/logo.png, com alt), o nome num h1 e um nav com os três links. O link Início leva aria-current="page"',
                    'Capa: uma section com a classe capa, com um h2, um parágrafo e um link com a classe botao para atividades.html',
                    'Uma section com um h2 Como funciona e uma lista',
                    'Um footer com o endereço'
                  ]
                },
                {
                  p: 'No CSS: o header com flex, a capa com a foto imagens/biblioteca.jpg de fundo, com uma camada escura por cima para o texto ficar legível, e o botão com uma cor que muda no hover.'
                },
                {
                  dica: 'Faça primeiro todo o HTML e veja a página sem estilo. Depois vá para a aba CSS. A prévia mostra o resultado a cada linha.'
                }
              ]
            },
            {
              t: 'web',
              projeto: { id: 'biblioteca', titulo: 'Site da biblioteca', arquivo: 'index.html' },
              p: 'Monte a página inicial seguindo os passos da leitura. O esqueleto já está pronto, com comentários marcando onde vai cada parte',
              html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <title>Biblioteca Comunitária Vila Nova</title>
  <!-- meta viewport, meta description e o link para o estilo.css -->
</head>
<body>
  <!-- topo: logo, nome e menu -->

  <main>
    <!-- capa com foto de fundo e botão -->

    <!-- como funciona -->

  </main>

  <!-- rodapé -->
</body>
</html>`,
              css: '',
              regras: [
                { sel: 'meta[name="viewport"]', msg: 'Falta a meta viewport no `head`.' },
                {
                  sel: 'meta[name="description"]',
                  attr: 'content',
                  msg: 'Falta a meta description, com um resumo da biblioteca.'
                },
                {
                  sel: 'link[rel="stylesheet"]',
                  attr: 'href',
                  valor: 'estilo.css',
                  msg: 'Falta `<link rel="stylesheet" href="estilo.css">` no `head`.'
                },
                {
                  sel: 'header img',
                  attr: 'src',
                  valor: 'imagens/logo.png',
                  msg: 'Falta a logo `imagens/logo.png` dentro do `header`.'
                },
                { sel: 'header img', attr: 'alt', msg: 'A logo precisa de `alt`.' },
                {
                  sel: 'header h1',
                  msg: 'Falta o nome da biblioteca num `<h1>` dentro do `header`.'
                },
                {
                  sel: 'header nav a',
                  min: 3,
                  msg: 'O `nav` do topo precisa dos três links: Início, Atividades e Contato.'
                },
                {
                  sel: 'nav a[href="index.html"][aria-current="page"]',
                  msg: 'O link Início (`index.html`) precisa de `aria-current="page"`.'
                },
                {
                  sel: 'nav a[href="contato.html"]',
                  msg: 'Falta o link para `contato.html` no menu.'
                },
                {
                  sel: 'section.capa h2',
                  msg: 'Falta a `<section class="capa">` com um `<h2>`.'
                },
                {
                  sel: '.capa a.botao',
                  attr: 'href',
                  valor: 'atividades.html',
                  msg: 'Falta, na capa, o link com `class="botao"` para `atividades.html`.'
                },
                {
                  sel: 'main ul li',
                  min: 2,
                  msg: 'Falta a lista de como funciona, com pelo menos dois itens.'
                },
                { sel: 'footer', msg: 'Falta o `<footer>` com o endereço.' },
                {
                  sel: 'header',
                  css: 'display',
                  valor: 'flex',
                  msg: 'No CSS, o `header` precisa de `display: flex;`.'
                },
                {
                  sel: '.capa',
                  css: 'background-image',
                  contem: 'imagens/biblioteca.jpg',
                  msg: 'No CSS, a `.capa` precisa de `background-image: url(imagens/biblioteca.jpg);`.'
                },
                {
                  regra: '.botao:hover',
                  prop: 'background-color',
                  msg: 'No CSS, falta a regra `.botao:hover` mudando o `background-color`.'
                }
              ],
              solHtml: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Início · Biblioteca Comunitária Vila Nova</title>
  <meta name="description" content="Biblioteca comunitária com empréstimo gratuito de livros e oficinas na Vila Nova.">
  <link rel="icon" href="imagens/icone.png">
  <link rel="stylesheet" href="estilo.css">
</head>
<body>
  <header>
    <div class="marca">
      <img src="imagens/logo.png" alt="Logo da biblioteca: um livro aberto" width="48" height="48">
      <h1>Biblioteca Comunitária Vila Nova</h1>
    </div>
    <nav>
      <a href="index.html" aria-current="page">Início</a>
      <a href="atividades.html">Atividades</a>
      <a href="contato.html">Contato</a>
    </nav>
  </header>
  <main>
    <section class="capa">
      <h2>Livros, oficinas e encontros, de graça</h2>
      <p>Um espaço da comunidade, cuidado por voluntários.</p>
      <a class="botao" href="atividades.html">Conheça as atividades</a>
    </section>
    <section>
      <h2>Como funciona</h2>
      <ul>
        <li>Faça a carteirinha com um documento e um comprovante de endereço.</li>
        <li>Leve até três livros por vez, por duas semanas.</li>
        <li>As oficinas são abertas: é só chegar.</li>
      </ul>
    </section>
  </main>
  <footer>
    <p>Rua das Palmeiras, 120 · Vila Nova · Entrada gratuita</p>
  </footer>
</body>
</html>`,
              solCss: `:root {
  --verde: #2e7d32;
  --verde-escuro: #1b5e20;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: sans-serif;
  color: #263238;
  line-height: 1.5;
}

header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background-color: var(--verde);
  color: white;
}

header h1 {
  font-size: 1.25rem;
  margin: 0;
}

.marca {
  display: flex;
  align-items: center;
  gap: 10px;
}

nav {
  display: flex;
  gap: 16px;
}

nav a {
  color: white;
}

nav a[aria-current="page"] {
  font-weight: bold;
  text-decoration-thickness: 3px;
}

main {
  max-width: 900px;
  margin: 0 auto;
  padding: 16px;
}

.capa {
  background-image: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(imagens/biblioteca.jpg);
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  padding: 2rem 1rem;
  color: white;
  text-shadow: 0 2px 6px black;
}

.botao {
  display: inline-block;
  padding: 10px 18px;
  background-color: var(--verde);
  color: white;
  border-radius: 8px;
  text-decoration: none;
  text-shadow: none;
  transition: background-color 0.3s;
}

.botao:hover {
  background-color: var(--verde-escuro);
}

footer {
  padding: 16px;
  text-align: center;
  background-color: #eceff1;
}`,
              dica: 'São muitas partes. Vá uma por uma e use Verificar para ver o que ainda falta.',
              exp: 'A primeira página do site está pronta e guardada. Na próxima lição, o mesmo CSS continua valendo para a página de atividades.'
            }
          ]
        },
        {
          id: 'hcp3',
          titulo: 'Projeto final: atividades',
          pre: ['hcp2', 'hc5l3'],
          exs: [
            {
              t: 'texto',
              titulo: 'A página de atividades',
              blocos: [
                {
                  p: 'A segunda página mostra as atividades da biblioteca em cartões, cada um com foto, título e descrição. Numa tela larga, os cartões ficam lado a lado; no celular, um embaixo do outro.'
                },
                {
                  p: 'O topo e o rodapé são iguais aos da página inicial. Num site feito só de HTML, é assim mesmo: cada página tem a sua cópia. Só muda o `aria-current`, que agora vai no link Atividades.'
                },
                {
                  passos: [
                    'Passe o aria-current do link Início para o link Atividades',
                    'No main: um h2 Atividades e uma div com a classe cartoes',
                    'Dentro dela, três article com a classe cartao, cada um com uma img, um h3 e um parágrafo',
                    'Use as fotos imagens/livros.jpg, imagens/computadores.jpg e imagens/horta.jpg, cada uma com alt',
                    'No CSS, acrescente: .cartoes em grid com repeat(auto-fill, minmax(220px, 1fr)), as fotos com width 100% e uma sombra nos cartões'
                  ]
                },
                {
                  dica: 'A aba CSS já traz o estilo da página inicial. Acrescente as regras novas no fim, sem apagar o que já existe.'
                }
              ]
            },
            {
              t: 'web',
              projeto: {
                id: 'biblioteca',
                titulo: 'Site da biblioteca',
                arquivo: 'atividades.html',
                herdaCss: true
              },
              p: 'Monte a página de atividades: passe o aria-current para Atividades e crie os três cartões com foto. No CSS, ponha os cartões em grid',
              html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Atividades · Biblioteca Comunitária Vila Nova</title>
  <meta name="description" content="Biblioteca comunitária com empréstimo gratuito de livros e oficinas na Vila Nova.">
  <link rel="icon" href="imagens/icone.png">
  <link rel="stylesheet" href="estilo.css">
</head>
<body>
  <header>
    <div class="marca">
      <img src="imagens/logo.png" alt="Logo da biblioteca: um livro aberto" width="48" height="48">
      <h1>Biblioteca Comunitária Vila Nova</h1>
    </div>
    <nav>
      <a href="index.html" aria-current="page">Início</a>
      <a href="atividades.html">Atividades</a>
      <a href="contato.html">Contato</a>
    </nav>
  </header>
  <main>
    <!-- h2 Atividades e os três cartões -->

  </main>
  <footer>
    <p>Rua das Palmeiras, 120 · Vila Nova · Entrada gratuita</p>
  </footer>
</body>
</html>`,
              css: `:root {
  --verde: #2e7d32;
  --verde-escuro: #1b5e20;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: sans-serif;
  color: #263238;
  line-height: 1.5;
}

header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background-color: var(--verde);
  color: white;
}

header h1 {
  font-size: 1.25rem;
  margin: 0;
}

.marca {
  display: flex;
  align-items: center;
  gap: 10px;
}

nav {
  display: flex;
  gap: 16px;
}

nav a {
  color: white;
}

nav a[aria-current="page"] {
  font-weight: bold;
  text-decoration-thickness: 3px;
}

main {
  max-width: 900px;
  margin: 0 auto;
  padding: 16px;
}

.capa {
  background-image: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(imagens/biblioteca.jpg);
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  padding: 2rem 1rem;
  color: white;
  text-shadow: 0 2px 6px black;
}

.botao {
  display: inline-block;
  padding: 10px 18px;
  background-color: var(--verde);
  color: white;
  border-radius: 8px;
  text-decoration: none;
  text-shadow: none;
  transition: background-color 0.3s;
}

.botao:hover {
  background-color: var(--verde-escuro);
}

footer {
  padding: 16px;
  text-align: center;
  background-color: #eceff1;
}`,
              regras: [
                {
                  sel: 'nav a[href="atividades.html"][aria-current="page"]',
                  msg: 'O link Atividades precisa de `aria-current="page"`.'
                },
                {
                  sel: 'nav a[href="index.html"][aria-current]',
                  nao: true,
                  msg: 'Tire o `aria-current` do link Início: agora a página atual é Atividades.'
                },
                {
                  sel: 'main h2',
                  texto: 'Atividades',
                  msg: 'Falta o `<h2>` Atividades no `main`.'
                },
                {
                  sel: '.cartoes article.cartao',
                  min: 3,
                  msg: 'Faltam os três `<article class="cartao">` dentro da `<div class="cartoes">`.'
                },
                { sel: '.cartao img', min: 3, msg: 'Cada cartão precisa de uma foto `<img>`.' },
                {
                  sel: '.cartao img:not([alt])',
                  nao: true,
                  msg: 'Todas as fotos dos cartões precisam de `alt`.'
                },
                {
                  sel: '.cartao img[src="imagens/computadores.jpg"]',
                  msg: 'Use as fotos da leitura, como `imagens/computadores.jpg`.'
                },
                { sel: '.cartao h3', min: 3, msg: 'Cada cartão precisa de um título `<h3>`.' },
                {
                  sel: '.cartoes',
                  css: 'display',
                  valor: 'grid',
                  msg: 'No CSS, a `.cartoes` precisa de `display: grid;`.'
                },
                {
                  regra: '.cartoes',
                  prop: 'grid-template-columns',
                  contem: 'minmax',
                  msg: 'Falta `grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));` na `.cartoes`.'
                },
                {
                  regra: 'img',
                  prop: 'width',
                  contem: '100%',
                  msg: 'Falta `width: 100%;` nas fotos, numa regra `.cartao img`.'
                },
                {
                  sel: '.cartao',
                  css: 'box-shadow',
                  diferente: 'none',
                  msg: 'Falta uma sombra nos cartões: `box-shadow` na regra `.cartao`.'
                }
              ],
              solHtml: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Atividades · Biblioteca Comunitária Vila Nova</title>
  <meta name="description" content="Biblioteca comunitária com empréstimo gratuito de livros e oficinas na Vila Nova.">
  <link rel="icon" href="imagens/icone.png">
  <link rel="stylesheet" href="estilo.css">
</head>
<body>
  <header>
    <div class="marca">
      <img src="imagens/logo.png" alt="Logo da biblioteca: um livro aberto" width="48" height="48">
      <h1>Biblioteca Comunitária Vila Nova</h1>
    </div>
    <nav>
      <a href="index.html">Início</a>
      <a href="atividades.html" aria-current="page">Atividades</a>
      <a href="contato.html">Contato</a>
    </nav>
  </header>
  <main>
    <h2>Atividades</h2>
    <div class="cartoes">
      <article class="cartao">
        <img src="imagens/livros.jpg" alt="Pilha de livros coloridos sobre a mesa">
        <h3>Roda de leitura</h3>
        <p>Toda quarta, às 19h. Um livro por mês, escolhido junto.</p>
      </article>
      <article class="cartao">
        <img src="imagens/computadores.jpg" alt="Dois notebooks abertos com código na tela">
        <h3>Informática para começar</h3>
        <p>Sábados, às 10h. Do primeiro e-mail ao primeiro site.</p>
      </article>
      <article class="cartao">
        <img src="imagens/horta.jpg" alt="Canteiros da horta com verduras e cenouras">
        <h3>Horta da biblioteca</h3>
        <p>Domingos, às 8h. Plantar, cuidar e dividir a colheita.</p>
      </article>
    </div>
  </main>
  <footer>
    <p>Rua das Palmeiras, 120 · Vila Nova · Entrada gratuita</p>
  </footer>
</body>
</html>`,
              solCss: `:root {
  --verde: #2e7d32;
  --verde-escuro: #1b5e20;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: sans-serif;
  color: #263238;
  line-height: 1.5;
}

header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background-color: var(--verde);
  color: white;
}

header h1 {
  font-size: 1.25rem;
  margin: 0;
}

.marca {
  display: flex;
  align-items: center;
  gap: 10px;
}

nav {
  display: flex;
  gap: 16px;
}

nav a {
  color: white;
}

nav a[aria-current="page"] {
  font-weight: bold;
  text-decoration-thickness: 3px;
}

main {
  max-width: 900px;
  margin: 0 auto;
  padding: 16px;
}

.capa {
  background-image: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(imagens/biblioteca.jpg);
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  padding: 2rem 1rem;
  color: white;
  text-shadow: 0 2px 6px black;
}

.botao {
  display: inline-block;
  padding: 10px 18px;
  background-color: var(--verde);
  color: white;
  border-radius: 8px;
  text-decoration: none;
  text-shadow: none;
  transition: background-color 0.3s;
}

.botao:hover {
  background-color: var(--verde-escuro);
}

footer {
  padding: 16px;
  text-align: center;
  background-color: #eceff1;
}

.cartoes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}

.cartao {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.cartao img {
  width: 100%;
  display: block;
}

.cartao h3,
.cartao p {
  margin: 12px;
}`,
              dica: 'Copie um cartão inteiro, cole duas vezes e troque a foto e os textos.',
              exp: 'Duas páginas prontas. Falta a de contato.'
            }
          ]
        },
        {
          id: 'hcp4',
          titulo: 'Projeto final: contato',
          pre: ['hcp2', 'hc3l2', 'hc2l4'],
          exs: [
            {
              t: 'texto',
              titulo: 'A página de contato',
              blocos: [
                {
                  p: 'A última página reúne o que a pessoa precisa para chegar e falar com a biblioteca: os horários numa tabela, um mapa e um formulário.'
                },
                {
                  passos: [
                    'Passe o aria-current para o link Contato',
                    'Uma tabela com caption Horários, cabeçalhos Dia e Horário e os dias de funcionamento',
                    'A imagem imagens/mapa.png, com um alt que diga onde fica a biblioteca',
                    'Um formulário com nome, e-mail e mensagem, todos com label e obrigatórios, e um botão Enviar',
                    'No CSS, dê bordas e espaço às células da tabela e largura de 100% aos campos'
                  ]
                },
                {
                  p: 'No seu site publicado, dá para trocar a imagem do mapa por um mapa de verdade, com o iframe do OpenStreetMap ou do Google Maps que você viu na lição de vídeos e mapas.'
                },
                {
                  dica: 'Um site estático não consegue guardar as mensagens do formulário sozinho. Para recebê-las de verdade, é preciso um programa no servidor, assunto dos cursos de back-end. Até lá, ponha também um telefone ou e-mail de contato.'
                }
              ]
            },
            {
              t: 'web',
              projeto: {
                id: 'biblioteca',
                titulo: 'Site da biblioteca',
                arquivo: 'contato.html',
                herdaCss: true
              },
              p: 'Monte a página de contato: aria-current no link Contato, a tabela de horários, o mapa e o formulário. No CSS, dê bordas às células da tabela',
              html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Contato · Biblioteca Comunitária Vila Nova</title>
  <meta name="description" content="Biblioteca comunitária com empréstimo gratuito de livros e oficinas na Vila Nova.">
  <link rel="icon" href="imagens/icone.png">
  <link rel="stylesheet" href="estilo.css">
</head>
<body>
  <header>
    <div class="marca">
      <img src="imagens/logo.png" alt="Logo da biblioteca: um livro aberto" width="48" height="48">
      <h1>Biblioteca Comunitária Vila Nova</h1>
    </div>
    <nav>
      <a href="index.html" aria-current="page">Início</a>
      <a href="atividades.html">Atividades</a>
      <a href="contato.html">Contato</a>
    </nav>
  </header>
  <main>
    <!-- h2 Contato, tabela de horários, mapa e formulário -->

  </main>
  <footer>
    <p>Rua das Palmeiras, 120 · Vila Nova · Entrada gratuita</p>
  </footer>
</body>
</html>`,
              css: `:root {
  --verde: #2e7d32;
  --verde-escuro: #1b5e20;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: sans-serif;
  color: #263238;
  line-height: 1.5;
}

header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background-color: var(--verde);
  color: white;
}

header h1 {
  font-size: 1.25rem;
  margin: 0;
}

.marca {
  display: flex;
  align-items: center;
  gap: 10px;
}

nav {
  display: flex;
  gap: 16px;
}

nav a {
  color: white;
}

nav a[aria-current="page"] {
  font-weight: bold;
  text-decoration-thickness: 3px;
}

main {
  max-width: 900px;
  margin: 0 auto;
  padding: 16px;
}

.capa {
  background-image: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(imagens/biblioteca.jpg);
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  padding: 2rem 1rem;
  color: white;
  text-shadow: 0 2px 6px black;
}

.botao {
  display: inline-block;
  padding: 10px 18px;
  background-color: var(--verde);
  color: white;
  border-radius: 8px;
  text-decoration: none;
  text-shadow: none;
  transition: background-color 0.3s;
}

.botao:hover {
  background-color: var(--verde-escuro);
}

footer {
  padding: 16px;
  text-align: center;
  background-color: #eceff1;
}

.cartoes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}

.cartao {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.cartao img {
  width: 100%;
  display: block;
}

.cartao h3,
.cartao p {
  margin: 12px;
}`,
              regras: [
                {
                  sel: 'nav a[href="contato.html"][aria-current="page"]',
                  msg: 'O link Contato precisa de `aria-current="page"`.'
                },
                {
                  sel: 'nav a[href="index.html"][aria-current]',
                  nao: true,
                  msg: 'Tire o `aria-current` do link Início.'
                },
                {
                  sel: 'table caption',
                  texto: 'Horários',
                  msg: 'Falta a tabela com `<caption>Horários</caption>`.'
                },
                {
                  sel: 'table th',
                  min: 2,
                  msg: 'A tabela precisa dos cabeçalhos `<th>` Dia e Horário.'
                },
                {
                  sel: 'table td',
                  min: 4,
                  msg: 'Ponha pelo menos dois dias na tabela, cada um com duas células `<td>`.'
                },
                {
                  sel: 'img[src="imagens/mapa.png"]',
                  attr: 'alt',
                  msg: 'Falta o mapa `imagens/mapa.png`, com `alt`.'
                },
                {
                  sel: 'form input[type="email"]',
                  msg: 'Falta o campo de e-mail no formulário.'
                },
                { sel: 'form textarea', msg: 'Falta o campo de mensagem (`textarea`).' },
                {
                  rotulado: 'form input, form textarea',
                  todos: true,
                  msg: 'Todos os campos precisam de um `<label>` ligado.'
                },
                {
                  sel: 'form [required]',
                  min: 3,
                  msg: 'Os três campos precisam ser obrigatórios (`required`).'
                },
                { sel: 'form button', msg: 'Falta o botão Enviar.' },
                {
                  sel: 'td',
                  css: 'border-top-style',
                  valor: 'solid',
                  msg: 'No CSS, dê borda às células, por exemplo `th, td { border: 1px solid #b0bec5; }`.'
                }
              ],
              solHtml: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Contato · Biblioteca Comunitária Vila Nova</title>
  <meta name="description" content="Biblioteca comunitária com empréstimo gratuito de livros e oficinas na Vila Nova.">
  <link rel="icon" href="imagens/icone.png">
  <link rel="stylesheet" href="estilo.css">
</head>
<body>
  <header>
    <div class="marca">
      <img src="imagens/logo.png" alt="Logo da biblioteca: um livro aberto" width="48" height="48">
      <h1>Biblioteca Comunitária Vila Nova</h1>
    </div>
    <nav>
      <a href="index.html">Início</a>
      <a href="atividades.html">Atividades</a>
      <a href="contato.html" aria-current="page">Contato</a>
    </nav>
  </header>
  <main>
    <h2>Contato</h2>
    <table>
      <caption>Horários</caption>
      <tr>
        <th>Dia</th>
        <th>Horário</th>
      </tr>
      <tr>
        <td>Terça a sexta</td>
        <td>14h às 20h</td>
      </tr>
      <tr>
        <td>Sábado</td>
        <td>9h às 13h</td>
      </tr>
    </table>
    <img class="mapa" src="imagens/mapa.png" alt="Mapa: a biblioteca fica na Rua Principal, perto da praça">
    <h3>Mande uma mensagem</h3>
    <form>
      <label for="nome">Nome</label>
      <input id="nome" type="text" required>
      <label for="email">E-mail</label>
      <input id="email" type="email" required>
      <label for="mensagem">Mensagem</label>
      <textarea id="mensagem" required></textarea>
      <button class="botao">Enviar</button>
    </form>
  </main>
  <footer>
    <p>Rua das Palmeiras, 120 · Vila Nova · Entrada gratuita</p>
  </footer>
</body>
</html>`,
              solCss: `:root {
  --verde: #2e7d32;
  --verde-escuro: #1b5e20;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: sans-serif;
  color: #263238;
  line-height: 1.5;
}

header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background-color: var(--verde);
  color: white;
}

header h1 {
  font-size: 1.25rem;
  margin: 0;
}

.marca {
  display: flex;
  align-items: center;
  gap: 10px;
}

nav {
  display: flex;
  gap: 16px;
}

nav a {
  color: white;
}

nav a[aria-current="page"] {
  font-weight: bold;
  text-decoration-thickness: 3px;
}

main {
  max-width: 900px;
  margin: 0 auto;
  padding: 16px;
}

.capa {
  background-image: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(imagens/biblioteca.jpg);
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  padding: 2rem 1rem;
  color: white;
  text-shadow: 0 2px 6px black;
}

.botao {
  display: inline-block;
  padding: 10px 18px;
  background-color: var(--verde);
  color: white;
  border-radius: 8px;
  text-decoration: none;
  text-shadow: none;
  transition: background-color 0.3s;
}

.botao:hover {
  background-color: var(--verde-escuro);
}

footer {
  padding: 16px;
  text-align: center;
  background-color: #eceff1;
}

.cartoes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}

.cartao {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.cartao img {
  width: 100%;
  display: block;
}

.cartao h3,
.cartao p {
  margin: 12px;
}

table {
  border-collapse: collapse;
  margin-bottom: 16px;
}

th,
td {
  border: 1px solid #b0bec5;
  padding: 8px 12px;
}

.mapa {
  max-width: 100%;
  border-radius: 12px;
}

form {
  display: grid;
  gap: 8px;
  max-width: 480px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  font: inherit;
}`,
              dica: 'Vá por partes: primeiro o `aria-current`, depois a tabela, o mapa e o formulário. O CSS fica por último.',
              exp: 'O site está completo: três páginas, um estilo e as imagens. Na próxima lição, baixe o .zip e coloque tudo no ar.'
            }
          ]
        }
      ]
    },
    {
      id: 'hcu15',
      titulo: 'Publicação',
      conceito: 'github.io',
      desc: 'Colocar o site no ar, de graça ou com domínio próprio.',
      licoes: [
        {
          id: 'hc6l3',
          titulo: 'Publicando na internet',
          exs: [
            {
              t: 'texto',
              titulo: 'Seu site no ar, de graça',
              blocos: [
                {
                  p: 'Uma página feita só de HTML e CSS é um site estático: são apenas arquivos, sem nenhum programa rodando no servidor. Serviços como o GitHub Pages publicam esses arquivos de graça, com um endereço que qualquer pessoa pode abrir.'
                },
                {
                  p: 'Os projetos que você fez ficaram guardados. Os de uma página só vêm num arquivo `index.html`, com o CSS já dentro, numa tag `style`. O site da biblioteca vem num arquivo .zip com as três páginas, o estilo.css e as imagens: descompacte antes de enviar.'
                },
                { projetos: true },
                {
                  p: 'Com o arquivo em mãos, siga os passos. Dá para fazer tudo pelo navegador, no computador ou no celular:'
                },
                {
                  passos: [
                    'Crie uma conta gratuita em github.com',
                    'Toque no + e em New repository. Dê um nome, como meu-site, marque Public e crie',
                    'Na página do repositório, toque em uploading an existing file, envie os arquivos e confirme em Commit changes. No computador, dá para arrastar de uma vez todos os arquivos e a pasta imagens',
                    'Vá em Settings, depois em Pages. Em Branch, escolha main e toque em Save',
                    'Espere um ou dois minutos e abra https://SEU-USUARIO.github.io/meu-site/'
                  ]
                },
                {
                  p: 'O arquivo `index.html` é especial: é a página que abre quando alguém visita o endereço sem dizer o nome de um arquivo. Por isso o nome precisa ser exatamente esse.'
                },
                {
                  p: 'Na conta gratuita, o GitHub Pages só publica repositórios públicos, ou seja, qualquer pessoa pode ver o seu código. Para um site, isso não é problema: o HTML e o CSS de qualquer página já aparecem para quem abre o código-fonte no navegador.'
                },
                {
                  p: 'No celular, o envio do GitHub não aceita pastas. Para publicar o site da biblioteca pelo celular, use o Cloudflare Pages, que aceita o .zip inteiro, como mostra a próxima lição.'
                },
                {
                  dica: 'Quer mudar alguma coisa depois? Edite o arquivo, envie de novo para o mesmo repositório, e o site se atualiza sozinho em alguns minutos. No curso de Git e GitHub, você vai aprender a fazer isso pelo terminal.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual nome o arquivo principal do site precisa ter?',
              mono: true,
              ops: ['index.html', 'principal.html', 'site.html'],
              c: 0,
              exp: 'Os servidores procuram o `index.html` quando o endereço não diz qual arquivo abrir.'
            },
            {
              t: 'escolha',
              p: 'O que é um site estático?',
              ops: [
                'Um site feito só de arquivos, como HTML, CSS e imagens, sem programa rodando no servidor',
                'Um site que nunca muda',
                'Um site sem imagens'
              ],
              c: 0,
              exp: 'Ele pode mudar sempre que você enviar arquivos novos. Estático quer dizer que o servidor só entrega os arquivos.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem para publicar no GitHub Pages',
              lines: [
                'Criar a conta no GitHub',
                'Criar um repositório público',
                'Enviar o index.html e os outros arquivos',
                'Ativar o Pages em Settings',
                'Abrir o endereço github.io'
              ],
              exp: 'Pronto: seu site está no ar, de graça. Na próxima lição, você conhece outros lugares para publicar, inclusive com um endereço só seu.'
            }
          ]
        },
        {
          id: 'hc6l4',
          titulo: 'Outros jeitos de publicar',
          pre: ['hc6l3'],
          exs: [
            {
              t: 'texto',
              titulo: 'Grátis em outros lugares',
              blocos: [
                {
                  p: 'O GitHub Pages é um bom caminho gratuito, mas não é o único. Outros serviços também publicam sites estáticos de graça, e alguns nem pedem repositório: você arrasta a pasta do site, ou um arquivo .zip com ela, e recebe um endereço na hora.'
                },
                {
                  p: 'No Netlify Drop, você arrasta a pasta na página `app.netlify.com/drop`. No Cloudflare Pages, você cria um projeto no painel e escolhe a opção de arrastar e soltar os arquivos. O Cloudflare aceita até o arquivo .zip do jeito que o app baixa.'
                },
                {
                  p: 'Esses serviços têm planos gratuitos com limites de uso, que um site pequeno dificilmente atinge. Para o site não sumir, crie uma conta gratuita e deixe o projeto guardado nela.'
                },
                {
                  dica: 'Os nomes e as telas desses serviços mudam com o tempo, mas a ideia é sempre a mesma: você entrega os arquivos e eles devolvem um endereço.'
                }
              ]
            },
            {
              t: 'texto',
              titulo: 'Pagando: domínio e hospedagem',
              blocos: [
                {
                  p: 'Publicar de graça dá um endereço como `seu-usuario.github.io`. Para ter um endereço só seu, como `cursinhodavila.com.br`, existem duas coisas diferentes, que podem ser compradas separadas: o domínio e a hospedagem.'
                },
                {
                  p: 'O domínio é o nome do endereço. Os domínios .br são registrados no Registro.br, mantido por uma entidade sem fins lucrativos. Em 2026, um domínio custava R$ 40 por ano, e para registrar é preciso ter CPF ou CNPJ.'
                },
                {
                  p: 'A hospedagem é o computador, chamado servidor, onde os arquivos ficam guardados e de onde são entregues para quem visita o site.'
                },
                {
                  p: 'O jeito mais barato de ter domínio próprio é pagar só o domínio e continuar com a hospedagem gratuita. O GitHub Pages aceita domínio próprio, com o cadeado do HTTPS:'
                },
                {
                  passos: [
                    'Registre o domínio no Registro.br',
                    'No GitHub, em Settings e depois Pages, escreva o domínio em Custom domain e salve',
                    'No painel do domínio, na parte de DNS, crie um registro do tipo CNAME para o www, apontando para SEU-USUARIO.github.io',
                    'Espere: a mudança pode levar até 24 horas para valer em toda a internet',
                    'Volte em Settings e Pages e marque Enforce HTTPS'
                  ]
                },
                {
                  p: 'Também dá para contratar uma hospedagem paga. A mais comum é a compartilhada, em que vários sites dividem o mesmo servidor. Em 2026, ela custava em média de R$ 10 a R$ 50 por mês. Você entra num painel, abre o gerenciador de arquivos e envia o `index.html` para a pasta pública do site, que muitas vezes se chama `public_html`.'
                },
                {
                  dica: 'Cuidado com o preço de propaganda: ele costuma valer só no primeiro período, e a renovação sai bem mais cara. Confira o valor da renovação antes de contratar.'
                },
                {
                  p: 'Para uma página só de HTML e CSS, a hospedagem gratuita resolve. Pagar hospedagem faz sentido quando o site precisa de um programa rodando no servidor: guardar as inscrições de um formulário, ter login, usar um banco de dados. O formulário da página do projeto social, por exemplo, ainda não guarda nada. Isso você aprende nos cursos de programação para servidor.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual é a diferença entre domínio e hospedagem?',
              ops: [
                'Domínio é o nome do endereço; hospedagem é o servidor onde os arquivos ficam',
                'São dois nomes para a mesma coisa',
                'Domínio é o servidor; hospedagem é o nome do endereço'
              ],
              c: 0,
              exp: 'Dá para ter um sem o outro: um domínio apontando para o GitHub Pages, ou uma hospedagem usando o endereço que ela mesma oferece.'
            },
            {
              t: 'escolha',
              p: 'Um cursinho quer o endereço cursinhodavila.com.br para uma página só de HTML e CSS, gastando o mínimo. O que fazer?',
              ops: [
                'Registrar o domínio e apontá-lo para o GitHub Pages',
                'Contratar hospedagem paga, porque domínio próprio só funciona com ela',
                'Não dá: com domínio próprio, o site precisa de programa no servidor'
              ],
              c: 0,
              exp: 'Assim o cursinho paga só o domínio, e a hospedagem continua gratuita.'
            },
            {
              t: 'escolha',
              p: 'Uma hospedagem anuncia R$ 9,90 por mês. O que conferir antes de contratar?',
              ops: [
                'O preço da renovação, que costuma ser mais alto que o da propaganda',
                'Se o painel tem a cor que você gosta',
                'Nada: o preço anunciado vale para sempre'
              ],
              c: 0,
              exp: 'Muitos preços de propaganda valem só no primeiro período. O custo de verdade, ao longo dos anos, é o da renovação.'
            },
            {
              t: 'escolha',
              p: 'Em qual caso faz sentido pagar hospedagem em vez de usar um serviço gratuito de site estático?',
              ops: [
                'Quando o site precisa guardar as inscrições do formulário num banco de dados',
                'Quando o site tem mais de uma página',
                'Quando o site tem fotos'
              ],
              c: 0,
              exp: 'Um site estático pode ter muitas páginas e fotos e continuar gratuito. Guardar dados exige um programa rodando no servidor.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem para usar um domínio próprio com o GitHub Pages',
              lines: [
                'Registrar o domínio no Registro.br',
                'Escrever o domínio em Custom domain, em Settings e Pages',
                'Criar no DNS o registro CNAME apontando para o github.io',
                'Esperar a mudança valer em toda a internet',
                'Marcar Enforce HTTPS e abrir o endereço novo'
              ],
              exp: 'Pronto: você terminou o curso e sabe colocar um site no ar, de graça ou com um endereço só seu.'
            }
          ]
        }
      ]
    }
  ]
});
