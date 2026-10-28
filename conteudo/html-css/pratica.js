/* Trilha Livre · Sites com HTML e CSS · Prática livre: desafios de página.
   dif: 'facil', 'medio' ou 'dificil'. Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). */

desafios('html-css', [
  {
    id: 'p-hc-menu',
    t: 'web',
    dif: 'facil',
    titulo: 'Menu de links',
    temas: ['links', 'listas'],
    p: 'Crie um `nav` com uma lista `ul` de três links: Início, Sobre e Contato',
    html: '',
    regras: [
      { sel: 'nav ul', msg: 'Falta uma lista `<ul>` dentro de um `<nav>`.' },
      {
        sel: 'nav ul li a',
        min: 3,
        msg: 'A lista precisa de três itens, cada um com um link.'
      },
      { sel: 'nav a', texto: 'Contato', msg: 'Falta o link Contato.' }
    ],
    solHtml: `<nav>
  <ul>
    <li><a href="#inicio">Início</a></li>
    <li><a href="#sobre">Sobre</a></li>
    <li><a href="#contato">Contato</a></li>
  </ul>
</nav>`,
    dica: 'Cada `<li>` leva um `<a>` dentro.',
    exp: 'Com CSS, essa lista vira a barra de menu de qualquer site.'
  },
  {
    id: 'p-hc-botao',
    t: 'web',
    dif: 'facil',
    titulo: 'Botão chamativo',
    temas: ['cores', 'caixas'],
    p: 'Deixe o botão .cta com fundo #2e7d32, texto white, padding de 12px e cantos arredondados de 8px',
    html: '<button class="cta">Quero participar</button>',
    css: '',
    regras: [
      {
        sel: '.cta',
        css: 'background-color',
        valor: '#2e7d32',
        msg: 'O fundo do botão ainda não é #2e7d32.'
      },
      { sel: '.cta', css: 'color', valor: 'white', msg: 'O texto do botão precisa ser white.' },
      { sel: '.cta', css: 'padding-top', valor: '12px', msg: 'Falta `padding: 12px;`.' },
      { sel: '.cta', css: 'border-radius', valor: '8px', msg: 'Falta `border-radius: 8px;`.' }
    ],
    solHtml: '<button class="cta">Quero participar</button>',
    solCss: `.cta {
  background-color: #2e7d32;
  color: white;
  padding: 12px;
  border-radius: 8px;
}`,
    dica: 'Quatro propriedades numa regra `.cta`.',
    exp: 'Botões claros e com bom contraste fazem mais gente clicar.'
  },
  {
    id: 'p-hc-horarios',
    t: 'web',
    dif: 'medio',
    titulo: 'Horários do posto de saúde',
    temas: ['tabelas'],
    p: 'Monte uma tabela com os cabeçalhos Dia e Horário e três linhas: segunda, quarta e sexta, das 7h às 17h',
    html: '',
    regras: [
      { sel: 'th', min: 2, msg: 'Faltam os cabeçalhos `<th>` Dia e Horário.' },
      {
        sel: 'tr',
        min: 4,
        msg: 'A tabela precisa de 4 linhas `<tr>`: o cabeçalho e os três dias.'
      },
      { sel: 'td', min: 6, msg: 'Cada um dos três dias precisa de duas células `<td>`.' },
      { sel: 'td', texto: 'quarta', msg: 'Falta a linha da quarta-feira.' }
    ],
    solHtml: `<table>
  <tr><th>Dia</th><th>Horário</th></tr>
  <tr><td>Segunda</td><td>7h às 17h</td></tr>
  <tr><td>Quarta</td><td>7h às 17h</td></tr>
  <tr><td>Sexta</td><td>7h às 17h</td></tr>
</table>`,
    dica: 'Uma linha de cabeçalho com `<th>` e três linhas com `<td>`.',
    exp: 'Informação de serviço público em tabela fica fácil de consultar.'
  },
  {
    id: 'p-hc-rodape',
    t: 'web',
    dif: 'medio',
    titulo: 'Rodapé em colunas',
    temas: ['flexbox'],
    p: 'Coloque as três colunas do rodapé lado a lado com flex, com o espaço dividido entre elas (space-between)',
    html: `<footer class="rodape">
  <div>Endereço<br>Rua das Palmeiras, 10</div>
  <div>Horário<br>Seg a sex, 8h às 18h</div>
  <div>Contato<br>contato@exemplo.com</div>
</footer>`,
    css: '',
    regras: [
      {
        sel: '.rodape',
        css: 'display',
        valor: 'flex',
        msg: 'O `.rodape` ainda não tem `display: flex;`.'
      },
      {
        sel: '.rodape',
        css: 'justify-content',
        valor: 'space-between',
        msg: 'Falta `justify-content: space-between;`.'
      }
    ],
    solHtml: `<footer class="rodape">
  <div>Endereço<br>Rua das Palmeiras, 10</div>
  <div>Horário<br>Seg a sex, 8h às 18h</div>
  <div>Contato<br>contato@exemplo.com</div>
</footer>`,
    solCss: `.rodape {
  display: flex;
  justify-content: space-between;
}`,
    dica: 'Duas linhas numa regra `.rodape`.',
    exp: 'No celular, acrescente `flex-wrap: wrap;` para as colunas descerem quando faltar espaço.'
  },
  {
    id: 'p-hc-galeria',
    t: 'web',
    dif: 'dificil',
    titulo: 'Galeria que se adapta',
    temas: ['grid', 'responsivo'],
    p: 'Faça a .galeria virar uma grade que se adapta à tela: grid-template-columns com repeat(auto-fill, minmax(120px, 1fr)) e gap de 8px',
    html: `<div class="galeria">
  <div>Foto 1</div><div>Foto 2</div><div>Foto 3</div>
  <div>Foto 4</div><div>Foto 5</div><div>Foto 6</div>
</div>`,
    css: `.galeria div {
  background-color: #ffe0b2;
  padding: 30px 10px;
  text-align: center;
}
`,
    regras: [
      {
        sel: '.galeria',
        css: 'display',
        valor: 'grid',
        msg: 'A `.galeria` ainda não tem `display: grid;`.'
      },
      {
        sel: '.galeria',
        colunasMin: 2,
        msg: 'A grade precisa ter colunas: use `grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));`.'
      },
      { sel: '.galeria', css: 'gap', valor: '8px', msg: 'Falta `gap: 8px;`.' }
    ],
    solHtml: `<div class="galeria">
  <div>Foto 1</div><div>Foto 2</div><div>Foto 3</div>
  <div>Foto 4</div><div>Foto 5</div><div>Foto 6</div>
</div>`,
    solCss: `.galeria div {
  background-color: #ffe0b2;
  padding: 30px 10px;
  text-align: center;
}

.galeria {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 8px;
}`,
    dica: 'Copie o valor do `grid-template-columns` do enunciado com cuidado: são dois parênteses aninhados.',
    exp: 'Num computador, a mesma galeria mostra mais colunas, sem nenhuma media query.'
  },
  {
    id: 'p-hc-inscricao',
    t: 'web',
    dif: 'dificil',
    titulo: 'Inscrição acessível',
    temas: ['formulários', 'acessibilidade'],
    p: 'Deixe este formulário acessível: todos os campos com label, o e-mail obrigatório (required) e o logo com alt',
    html: `<img src="imagens/logo.png" width="80">
<form>
  <input id="nome" type="text" placeholder="Nome">
  <input id="email" type="email" placeholder="E-mail">
  <button>Inscrever</button>
</form>`,
    regras: [
      { sel: 'img', attr: 'alt', msg: 'O logo ainda está sem `alt`.' },
      { rotulado: 'input', todos: true, msg: 'Ainda há campo sem `<label>` ligado a ele.' },
      {
        sel: 'input[type="email"][required]',
        msg: 'O campo de e-mail precisa do atributo `required`.'
      }
    ],
    solHtml: `<img src="imagens/logo.png" width="80" alt="Logo do projeto">
<form>
  <label for="nome">Nome</label>
  <input id="nome" type="text" placeholder="Nome">
  <label for="email">E-mail</label>
  <input id="email" type="email" placeholder="E-mail" required>
  <button>Inscrever</button>
</form>`,
    dica: 'Um `<label for="...">` para cada campo, `required` no e-mail e `alt` na imagem.',
    exp: 'Agora qualquer pessoa consegue se inscrever, inclusive quem usa leitor de tela.',
    conserte: true
  },
  {
    id: 'p-hc-sumario',
    t: 'web',
    dif: 'facil',
    titulo: 'Sumário da página',
    temas: ['links'],
    p: 'Crie um nav com dois links, Horários e Endereço, que levem até as seções de id horarios e endereco',
    html: `
<h2 id="horarios">Horários</h2>
<p>De segunda a sexta, das 8h às 17h.</p>
<h2 id="endereco">Endereço</h2>
<p>Avenida Brasil, 500.</p>`,
    regras: [
      {
        sel: 'nav a[href="#horarios"]',
        msg: 'Falta, no `nav`, o link com `href="#horarios"`.'
      },
      {
        sel: 'nav a[href="#endereco"]',
        msg: 'Falta, no `nav`, o link com `href="#endereco"`.'
      }
    ],
    solHtml: `<nav>
  <a href="#horarios">Horários</a>
  <a href="#endereco">Endereço</a>
</nav>
<h2 id="horarios">Horários</h2>
<p>De segunda a sexta, das 8h às 17h.</p>
<h2 id="endereco">Endereço</h2>
<p>Avenida Brasil, 500.</p>`,
    dica: 'O `href` de cada link é o `id` da seção com uma cerquilha na frente.',
    exp: 'Páginas longas ficam muito mais fáceis com um sumário no topo.'
  },
  {
    id: 'p-hc-figura',
    t: 'web',
    dif: 'facil',
    titulo: 'Foto com legenda',
    temas: ['imagens'],
    p: 'Mostre imagens/quadra.jpg com alt e width="300", dentro de um figure, com a legenda Final do campeonato no figcaption',
    html: '',
    regras: [
      {
        sel: 'figure img',
        attr: 'src',
        valor: 'imagens/quadra.jpg',
        msg: 'Falta `imagens/quadra.jpg` dentro de um `<figure>`.'
      },
      { sel: 'figure img', attr: 'alt', msg: 'A foto precisa de `alt`.' },
      {
        sel: 'figcaption',
        texto: 'Final do campeonato',
        msg: 'Falta o `<figcaption>` com "Final do campeonato".'
      }
    ],
    solHtml: `<figure>
  <img src="imagens/quadra.jpg" alt="Campo de futebol com a bola perto do meio" width="300">
  <figcaption>Final do campeonato</figcaption>
</figure>`,
    dica: 'O `figure` envolve a imagem e o `figcaption`.',
    exp: 'Legenda para todos, `alt` para quem não vê a imagem.'
  },
  {
    id: 'p-hc-hover',
    t: 'web',
    dif: 'facil',
    titulo: 'Link que reage',
    temas: ['estados'],
    p: 'Faça os links do menu ficarem darkorange com o mouse em cima (regra nav a:hover) e ganharem um contorno no foco (regra nav a:focus-visible com outline)',
    html: `<nav>
  <a href="#">Início</a>
  <a href="#">Notícias</a>
  <a href="#">Contato</a>
</nav>`,
    css: '',
    regras: [
      {
        regra: 'nav a:hover',
        prop: 'color',
        msg: 'Falta a regra `nav a:hover` com `color: darkorange;`.'
      },
      {
        regra: 'nav a:focus-visible',
        prop: 'outline',
        msg: 'Falta a regra `nav a:focus-visible` com um `outline`.'
      }
    ],
    solHtml: `<nav>
  <a href="#">Início</a>
  <a href="#">Notícias</a>
  <a href="#">Contato</a>
</nav>`,
    solCss: `nav a:hover {
  color: darkorange;
}

nav a:focus-visible {
  outline: 3px solid darkorange;
}`,
    dica: 'Duas regras, uma para cada estado.',
    exp: 'Mouse e teclado agora têm resposta visual.'
  },
  {
    id: 'p-hc-perfil',
    t: 'web',
    dif: 'medio',
    titulo: 'Cartão de perfil',
    temas: ['caixas', 'imagens'],
    p: 'Monte o cartão .perfil: a foto imagens/pessoa.jpg redonda (border-radius 50%), o texto centralizado e uma sombra no cartão',
    html: `<div class="perfil">
  <img src="imagens/pessoa.jpg" alt="Foto de perfil" width="120">
  <h2>Joana Ribeiro</h2>
  <p>Professora de matemática</p>
</div>`,
    css: `.perfil {
  max-width: 260px;
  padding: 1rem;
  border-radius: 12px;
}
`,
    regras: [
      {
        sel: '.perfil img',
        css: 'border-radius',
        valor: '50%',
        msg: 'A foto ainda não está redonda: `border-radius: 50%;`.'
      },
      {
        sel: '.perfil',
        css: 'text-align',
        valor: 'center',
        msg: 'O texto do cartão ainda não está centralizado.'
      },
      {
        sel: '.perfil',
        css: 'box-shadow',
        diferente: 'none',
        msg: 'O cartão ainda não tem sombra (`box-shadow`).'
      }
    ],
    solHtml: `<div class="perfil">
  <img src="imagens/pessoa.jpg" alt="Foto de perfil" width="120">
  <h2>Joana Ribeiro</h2>
  <p>Professora de matemática</p>
</div>`,
    solCss: `.perfil {
  max-width: 260px;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.perfil img {
  border-radius: 50%;
}`,
    dica: 'Uma regra nova para `.perfil img` e duas linhas a mais na `.perfil`.',
    exp: 'Esse cartão aparece em sites de equipe, de escola e de associação.'
  },
  {
    id: 'p-hc-capa',
    t: 'web',
    dif: 'medio',
    titulo: 'Capa com foto',
    temas: ['fundos', 'unidades'],
    p: 'Faça a .capa ter a foto imagens/praia.jpg no fundo, cobrindo tudo (background-size cover), com min-height de 60vh e o título branco',
    html: `<section class="capa">
  <h1>Festival de verão</h1>
</section>`,
    css: `.capa {
  padding: 1rem;
}
`,
    regras: [
      {
        sel: '.capa',
        css: 'background-image',
        contem: 'imagens/praia.jpg',
        msg: 'Falta `background-image: url(imagens/praia.jpg);` na `.capa`.'
      },
      {
        sel: '.capa',
        css: 'background-size',
        valor: 'cover',
        msg: 'Falta `background-size: cover;`.'
      },
      { regra: '.capa', prop: 'min-height', contem: '60vh', msg: 'Falta `min-height: 60vh;`.' },
      { sel: '.capa h1', css: 'color', valor: 'white', msg: 'O título ainda não está branco.' }
    ],
    solHtml: `<section class="capa">
  <h1>Festival de verão</h1>
</section>`,
    solCss: `.capa {
  padding: 1rem;
  background-image: url(imagens/praia.jpg);
  background-size: cover;
  min-height: 60vh;
}

.capa h1 {
  color: white;
  text-shadow: 0 2px 6px black;
}`,
    dica: 'A cor pode ir no `h1` ou na `.capa`, porque `color` é herdada.',
    exp: 'Com `vh`, a capa ocupa boa parte da tela em qualquer aparelho.'
  },
  {
    id: 'p-hc-preco',
    t: 'web',
    dif: 'medio',
    titulo: 'Tabela com destaque',
    temas: ['tabelas', 'seletores'],
    p: 'Dê à linha com a classe destaque o fundo #fff59d, e às células th e td borda de 1px solid #9e9e9e e padding de 8px',
    html: `<table>
  <caption>Mensalidade da escolinha</caption>
  <tr><th>Plano</th><th>Valor</th></tr>
  <tr><td>Morador</td><td>Grátis</td></tr>
  <tr class="destaque"><td>Bolsa integral</td><td>Grátis</td></tr>
  <tr><td>Visitante</td><td>R$ 20,00</td></tr>
</table>`,
    css: '',
    regras: [
      {
        sel: 'tr.destaque',
        css: 'background-color',
        valor: '#fff59d',
        msg: 'A linha `.destaque` ainda não tem `background-color: #fff59d;`.'
      },
      {
        sel: 'td',
        css: 'border-top-style',
        valor: 'solid',
        msg: 'As células ainda não têm borda.'
      },
      {
        sel: 'th',
        css: 'padding-top',
        valor: '8px',
        msg: 'Falta `padding: 8px;` nas células `th` e `td`.'
      }
    ],
    solHtml: `<table>
  <caption>Mensalidade da escolinha</caption>
  <tr><th>Plano</th><th>Valor</th></tr>
  <tr><td>Morador</td><td>Grátis</td></tr>
  <tr class="destaque"><td>Bolsa integral</td><td>Grátis</td></tr>
  <tr><td>Visitante</td><td>R$ 20,00</td></tr>
</table>`,
    solCss: `th,
td {
  border: 1px solid #9e9e9e;
  padding: 8px;
}

.destaque {
  background-color: #fff59d;
}`,
    dica: 'Uma regra `th, td` para as células e uma `.destaque` para a linha.',
    exp: 'Destacar uma linha ajuda a pessoa a achar a informação que mais importa.'
  },
  {
    id: 'p-hc-topo-fixo',
    t: 'web',
    dif: 'medio',
    titulo: 'Topo que acompanha',
    temas: ['posicionamento'],
    p: 'Faça o .topo grudar no alto da tela quando a página rolar: position sticky e top 0',
    html: `<header class="topo">Feira de ciências</header>
<p>Abertura às 8h.</p>
<p>Robótica às 9h.</p>
<p>Química às 10h.</p>
<p>Astronomia às 11h.</p>
<p>Almoço às 12h.</p>
<p>Premiação às 15h.</p>
<p>Encerramento às 16h.</p>`,
    css: `.topo {
  background-color: #00695c;
  color: white;
  padding: 12px;
}

p {
  padding: 16px 0;
}
`,
    regras: [
      {
        sel: '.topo',
        css: 'position',
        valor: 'sticky',
        msg: 'Falta `position: sticky;` no `.topo`.'
      },
      { sel: '.topo', css: 'top', valor: '0', msg: 'Falta `top: 0;` no `.topo`.' }
    ],
    solHtml: `<header class="topo">Feira de ciências</header>
<p>Abertura às 8h.</p>
<p>Robótica às 9h.</p>
<p>Química às 10h.</p>
<p>Astronomia às 11h.</p>
<p>Almoço às 12h.</p>
<p>Premiação às 15h.</p>
<p>Encerramento às 16h.</p>`,
    solCss: `.topo {
  background-color: #00695c;
  color: white;
  padding: 12px;
  position: sticky;
  top: 0;
}

p {
  padding: 16px 0;
}`,
    dica: 'Duas linhas na regra `.topo`.',
    exp: 'Role a prévia: o topo fica sempre à vista.'
  },
  {
    id: 'p-hc-conserta-menu',
    t: 'web',
    dif: 'dificil',
    conserte: true,
    titulo: 'Menu quebrado',
    temas: ['depuração', 'flexbox'],
    p: 'O menu deveria ter os links lado a lado, brancos, com espaço de 16px entre eles e fundo #37474f. O CSS tem três erros. Ache e conserte',
    html: `<nav class="menu">
  <a href="#">Início</a>
  <a href="#">Cursos</a>
  <a href="#">Contato</a>
</nav>`,
    css: `menu {
  display: flex;
  gap: 16px
  background-color: #37474f;
  padding: 12px;
}

.menu a {
  colour: white;
}
`,
    regras: [
      {
        sel: '.menu',
        css: 'display',
        valor: 'flex',
        msg: 'Os links ainda não estão lado a lado. Confira o seletor da primeira regra.'
      },
      {
        sel: '.menu',
        css: 'gap',
        valor: '16px',
        msg: 'O espaço entre os links ainda não vale. Confira a pontuação.'
      },
      {
        sel: '.menu',
        css: 'background-color',
        valor: '#37474f',
        msg: 'O fundo ainda não aparece.'
      },
      {
        sel: '.menu a',
        css: 'color',
        valor: 'white',
        msg: 'Os links ainda não estão brancos. Confira o nome da propriedade.'
      }
    ],
    solHtml: `<nav class="menu">
  <a href="#">Início</a>
  <a href="#">Cursos</a>
  <a href="#">Contato</a>
</nav>`,
    solCss: `.menu {
  display: flex;
  gap: 16px;
  background-color: #37474f;
  padding: 12px;
}

.menu a {
  color: white;
}`,
    dica: 'Um seletor sem ponto, um ponto e vírgula faltando e uma propriedade escrita do jeito britânico.',
    exp: 'Três erros silenciosos. Agora você sabe onde procurar.'
  },
  {
    id: 'p-hc-cards-responsivos',
    t: 'web',
    dif: 'dificil',
    titulo: 'Colunas no computador',
    temas: ['responsivo', 'grid'],
    p: 'Os cartões ficam empilhados no celular. Com @media (min-width: 700px), faça a .grade ter três colunas iguais (grid-template-columns: 1fr 1fr 1fr)',
    html: `<div class="grade">
  <article><h2>Saúde</h2><p>Vacinas e consultas.</p></article>
  <article><h2>Escola</h2><p>Matrículas abertas.</p></article>
  <article><h2>Cultura</h2><p>Oficinas gratuitas.</p></article>
</div>`,
    css: `.grade {
  display: grid;
  gap: 12px;
}

.grade article {
  border: 1px solid #b0bec5;
  border-radius: 8px;
  padding: 12px;
}
`,
    regras: [
      {
        regra: '.grade',
        prop: 'grid-template-columns',
        media: '700px',
        msg: 'Falta a regra `.grade` com `grid-template-columns: 1fr 1fr 1fr;` dentro de `@media (min-width: 700px) { }`.'
      }
    ],
    solHtml: `<div class="grade">
  <article><h2>Saúde</h2><p>Vacinas e consultas.</p></article>
  <article><h2>Escola</h2><p>Matrículas abertas.</p></article>
  <article><h2>Cultura</h2><p>Oficinas gratuitas.</p></article>
</div>`,
    solCss: `.grade {
  display: grid;
  gap: 12px;
}

.grade article {
  border: 1px solid #b0bec5;
  border-radius: 8px;
  padding: 12px;
}

@media (min-width: 700px) {
  .grade {
    grid-template-columns: 1fr 1fr 1fr;
  }
}`,
    dica: 'O `@media` vai no fim do CSS, com a regra `.grade` dentro.',
    exp: 'Celular primeiro, tela grande depois.'
  },
  {
    id: 'p-hc-evento',
    t: 'web',
    dif: 'dificil',
    titulo: 'Página de um evento',
    temas: ['semântica', 'formulários', 'flexbox'],
    p: 'Monte a página do evento: header com h1, main com uma section de programação (lista ul com 3 itens) e uma section de inscrição (form com nome e e-mail, com label, e botão), e footer. No CSS, ponha a lista da programação em flex',
    html: '',
    css: '',
    regras: [
      { sel: 'header h1', msg: 'Falta o `header` com o `h1`.' },
      { sel: 'main section', min: 2, msg: 'O `main` precisa de duas `section`.' },
      {
        sel: 'section ul li',
        min: 3,
        msg: 'A programação precisa de uma lista com três itens.'
      },
      { sel: 'form input[type="email"]', msg: 'Falta o campo de e-mail no formulário.' },
      {
        rotulado: 'form input',
        todos: true,
        msg: 'Todos os campos precisam de `label` ligado.'
      },
      { sel: 'form button', msg: 'Falta o botão do formulário.' },
      { sel: 'footer', msg: 'Falta o `footer`.' },
      {
        sel: 'section ul',
        css: 'display',
        valor: 'flex',
        msg: 'No CSS, a lista da programação precisa de `display: flex;`.'
      }
    ],
    solHtml: `<header>
  <h1>Festa da cultura popular</h1>
</header>
<main>
  <section>
    <h2>Programação</h2>
    <ul class="programa">
      <li>Maracatu</li>
      <li>Capoeira</li>
      <li>Forró</li>
    </ul>
  </section>
  <section>
    <h2>Inscrição</h2>
    <form>
      <label for="nome">Nome</label>
      <input id="nome" type="text">
      <label for="email">E-mail</label>
      <input id="email" type="email">
      <button>Quero ir</button>
    </form>
  </section>
</main>
<footer>
  <p>Praça da Matriz, sábado às 16h.</p>
</footer>`,
    solCss: `.programa {
  display: flex;
  gap: 12px;
  list-style: none;
  padding: 0;
}`,
    dica: 'Monte o HTML inteiro primeiro. A lista ganha uma classe, e o CSS tem uma regra só.',
    exp: 'Estrutura, formulário acessível e layout: tudo numa página.'
  }
]);
