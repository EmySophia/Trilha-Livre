/* Trilha Livre · Sites com HTML e CSS · Nível 5: CSS: caixas e layout
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'html-css',
  n: 5,
  titulo: 'CSS: caixas e layout',
  desc: 'Espaçamento, alinhamento e páginas que se adaptam ao celular.',
  videos: [
    {
      titulo: 'HTML5 e CSS3, módulo 2',
      canal: 'Curso em Vídeo',
      obs: 'modelo de caixas e responsividade',
      url: 'https://www.youtube.com/playlist?list=PLHz_AreHm4dlUpEXkY1AyVLQGcpSgVF8s'
    },
    {
      titulo: 'HTML5 e CSS3, módulo 5',
      canal: 'Curso em Vídeo',
      obs: 'flexbox e grid',
      url: 'https://www.youtube.com/playlist?list=PLHz_AreHm4dn1bAtIJWFrugl5z2Ej_52d'
    }
  ],
  unidades: [
    {
      id: 'hcu8',
      titulo: 'Caixas e alinhamento',
      conceito: 'flex · grid',
      desc: 'O modelo de caixa, flexbox e grid.',
      licoes: [
        {
          id: 'hc5l0',
          titulo: 'Bloco e linha: div e span',
          pre: ['hc4l2'],
          exs: [
            {
              t: 'texto',
              titulo: 'Caixas de bloco e de linha',
              blocos: [
                {
                  p: 'Cada elemento tem um jeito de ocupar espaço. Os de bloco, como `h1`, `p`, `div` e `section`, começam numa linha nova e ocupam a largura toda. Os de linha, como `a`, `strong`, `em` e `span`, ficam no meio do texto e ocupam só o espaço do conteúdo.'
                },
                {
                  web: `<div class="bloco">Sou uma div: ocupo a linha toda.</div>
<p>Um texto com um <span class="marca">span</span> no meio e um <a href="#">link</a>.</p>`,
                  css: `.bloco {
  background-color: #e3f2fd;
  padding: 8px;
}

.marca {
  background-color: #fff176;
}`
                },
                {
                  p: '`div` e `span` são caixas sem significado: `div` é um bloco genérico e `span` é um pedaço genérico de texto. Use os dois quando nenhuma tag com significado servir, só para pendurar uma classe e dar estilo.'
                },
                {
                  p: 'A propriedade `display` muda esse comportamento: `display: block` transforma em bloco, `display: inline` em linha, e `display: inline-block` fica no meio do texto, mas aceita largura, altura e padding como um bloco. É assim que links viram botões.'
                },
                {
                  dica: 'Largura e altura não funcionam em elementos de linha. Se o `width` de um link não muda nada, é por isso: experimente `display: inline-block`.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual destes é um elemento de linha?',
              mono: true,
              ops: ['<span>', '<div>', '<p>'],
              c: 0,
              exp: 'O `span` fica no meio do texto, sem quebrar a linha.'
            },
            {
              t: 'escolha',
              p: 'Para dar estilo a uma palavra só, no meio de um parágrafo, qual tag usar?',
              mono: true,
              ops: ['<span>', '<div>', '<section>'],
              c: 0,
              exp: 'Uma `div` quebraria a linha; o `span` fica no meio do texto.'
            },
            {
              t: 'web',
              p: 'Envolva a palavra grátis num span com a classe preco, e deixe essa classe com color green e font-weight bold',
              html: '<p>A oficina de costura é grátis para moradores.</p>',
              css: '',
              regras: [
                {
                  sel: 'p span.preco',
                  texto: 'grátis',
                  msg: 'A palavra "grátis" precisa estar dentro de `<span class="preco">`.'
                },
                {
                  sel: '.preco',
                  css: 'color',
                  valor: 'green',
                  msg: 'A classe `.preco` ainda não tem `color: green;`.'
                },
                {
                  sel: '.preco',
                  css: 'font-weight',
                  valor: 'bold',
                  msg: 'A classe `.preco` ainda não tem `font-weight: bold;`.'
                }
              ],
              solHtml: '<p>A oficina de costura é <span class="preco">grátis</span> para moradores.</p>',
              solCss: `.preco {
  color: green;
  font-weight: bold;
}`,
              dica: 'No HTML: `<span class="preco">grátis</span>`. No CSS: uma regra `.preco`.',
              exp: 'O `span` não muda nada sozinho; ele só dá um lugar para o CSS se segurar.'
            },
            {
              t: 'web',
              p: 'Transforme os links .botao em botões: display inline-block, padding de 10px e fundo #00897b',
              html: `<p>
  <a class="botao" href="#">Inscreva-se</a>
  <a class="botao" href="#">Saiba mais</a>
</p>`,
              css: `.botao {
  color: white;
  text-decoration: none;
  border-radius: 6px;
}
`,
              regras: [
                {
                  sel: '.botao',
                  css: 'display',
                  valor: 'inline-block',
                  msg: 'Os links ainda não têm `display: inline-block;`.'
                },
                {
                  sel: '.botao',
                  css: 'padding-top',
                  valor: '10px',
                  msg: 'Falta `padding: 10px;`.'
                },
                {
                  sel: '.botao',
                  css: 'background-color',
                  valor: '#00897b',
                  msg: 'Falta `background-color: #00897b;`.'
                }
              ],
              solHtml: `<p>
  <a class="botao" href="#">Inscreva-se</a>
  <a class="botao" href="#">Saiba mais</a>
</p>`,
              solCss: `.botao {
  color: white;
  text-decoration: none;
  border-radius: 6px;
  display: inline-block;
  padding: 10px;
  background-color: #00897b;
}`,
              dica: 'As três linhas entram na regra `.botao` que já existe.',
              exp: 'Com `inline-block`, o padding empurra os vizinhos, e o link vira um botão de verdade.'
            }
          ]
        },
        {
          id: 'hc5l1',
          titulo: 'O modelo de caixa',
          pre: ['hc4l2'],
          exs: [
            {
              t: 'texto',
              titulo: 'Tudo é uma caixa',
              blocos: [
                {
                  p: 'Para o CSS, todo elemento é uma caixa. De dentro para fora, ela tem o conteúdo, o `padding` (espaço interno), a `border` (borda) e a `margin` (espaço externo, que afasta dos vizinhos).'
                },
                {
                  web: `<div class="cartao">
  <h2>Maria Souza</h2>
  <p>Costureira em Belém</p>
</div>`,
                  css: `.cartao {
  border: 2px solid #1565c0;
  padding: 16px;
  margin: 20px;
  border-radius: 12px;
  max-width: 280px;
}`
                },
                {
                  p: '`padding: 16px` vale para os quatro lados. Também dá para mexer num lado só, como `padding-top` ou `margin-left`. `border` junta espessura, estilo e cor. `border-radius` arredonda os cantos.'
                },
                {
                  p: 'Ponha `box-sizing: border-box` nos elementos para que a largura que você definir já inclua o padding e a borda. Sem isso, uma caixa de 300px com 20px de padding de cada lado ocupa 340px.'
                },
                {
                  code: `* {
  box-sizing: border-box;
}`,
                  lang: 'css'
                },
                {
                  dica: 'No navegador do computador, aperte F12 e passe o mouse sobre os elementos: as ferramentas de desenvolvedor mostram a margem e o padding de cada caixa em cores.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual propriedade cria espaço dentro da borda?',
              mono: true,
              ops: ['padding', 'margin', 'border'],
              c: 0,
              exp: 'O padding afasta o conteúdo da borda; a margin afasta a caixa dos vizinhos.'
            },
            {
              t: 'escolha',
              p: 'Qual propriedade afasta o elemento dos vizinhos?',
              mono: true,
              ops: ['margin', 'padding', 'outline'],
              c: 0,
              exp: 'margin é o espaço do lado de fora da borda.'
            },
            {
              t: 'complete',
              p: 'Complete para arredondar os cantos',
              lang: 'css',
              code: `.foto {
  ___: 50%;
}`,
              bank: ['border-radius', 'corner', 'round', 'border-style'],
              c: ['border-radius'],
              exp: 'Com 50%, uma imagem quadrada vira um círculo.'
            },
            {
              t: 'web',
              p: 'Dê à caixa .aviso padding de 20px, borda 3px solid orange e margin-bottom de 24px',
              html: `<div class="aviso">A biblioteca fecha mais cedo na sexta.</div>
<p>Horário normal: das 8h às 20h.</p>`,
              css: '',
              regras: [
                {
                  sel: '.aviso',
                  css: 'padding-top',
                  valor: '20px',
                  msg: 'A caixa ainda não tem `padding: 20px;`.'
                },
                {
                  sel: '.aviso',
                  css: 'border-top-style',
                  valor: 'solid',
                  msg: 'Falta a borda: `border: 3px solid orange;`.'
                },
                {
                  sel: '.aviso',
                  css: 'border-top-width',
                  valor: '3px',
                  msg: 'A borda precisa ter 3px.'
                },
                {
                  sel: '.aviso',
                  css: 'border-top-color',
                  valor: 'orange',
                  msg: 'A borda precisa ser orange.'
                },
                {
                  sel: '.aviso',
                  css: 'margin-bottom',
                  valor: '24px',
                  msg: 'Falta `margin-bottom: 24px;`.'
                }
              ],
              solHtml: `<div class="aviso">A biblioteca fecha mais cedo na sexta.</div>
<p>Horário normal: das 8h às 20h.</p>`,
              solCss: `.aviso {
  padding: 20px;
  border: 3px solid orange;
  margin-bottom: 24px;
}`,
              dica: 'Uma regra `.aviso` com três linhas: `padding`, `border` e `margin-bottom`.',
              exp: 'Espaço bem usado é o que separa uma página apertada de uma página agradável.'
            },
            {
              t: 'web',
              p: 'Centralize a caixa .conteudo na página: max-width de 600px e margin 0 auto',
              html: `<div class="conteudo">
  <h1>Associação de moradores</h1>
  <p>Reuniões na primeira segunda-feira do mês.</p>
</div>`,
              css: `.conteudo {
  background-color: #f1f8e9;
  padding: 1rem;
}
`,
              regras: [
                {
                  sel: '.conteudo',
                  css: 'max-width',
                  valor: '600px',
                  msg: 'A `.conteudo` ainda não tem `max-width: 600px;`.'
                },
                {
                  regra: '.conteudo',
                  prop: 'margin',
                  contem: 'auto',
                  msg: 'Falta `margin: 0 auto;`, que divide o espaço que sobra igualmente entre os dois lados.'
                }
              ],
              solHtml: `<div class="conteudo">
  <h1>Associação de moradores</h1>
  <p>Reuniões na primeira segunda-feira do mês.</p>
</div>`,
              solCss: `.conteudo {
  background-color: #f1f8e9;
  padding: 1rem;
  max-width: 600px;
  margin: 0 auto;
}`,
              dica: 'A prévia aqui é estreita como um celular. Numa tela larga, a caixa fica no meio.',
              exp: 'Esse par, `max-width` e `margin: 0 auto`, aparece em quase todo site.'
            }
          ]
        },
        {
          id: 'hc5l2',
          titulo: 'Flexbox',
          exs: [
            {
              t: 'texto',
              titulo: 'Alinhando lado a lado',
              blocos: [
                {
                  p: 'Por padrão, as caixas ficam uma embaixo da outra. Com `display: flex` no elemento pai, os filhos passam a ficar lado a lado, numa linha.'
                },
                {
                  web: `<nav class="menu">
  <a href="#">Início</a>
  <a href="#">Cursos</a>
  <a href="#">Contato</a>
</nav>`,
                  css: `.menu {
  display: flex;
  gap: 16px;
  justify-content: center;
  background-color: #263238;
  padding: 12px;
}

.menu a {
  color: white;
}`
                },
                {
                  tabela: {
                    cab: ['No elemento pai', 'O que faz'],
                    linhas: [
                      ['display: flex', 'Coloca os filhos lado a lado'],
                      ['gap: 16px', 'Espaço entre os filhos'],
                      [
                        'justify-content',
                        'Distribui na linha: flex-start, center, space-between'
                      ],
                      ['align-items', 'Alinha na outra direção: center, flex-start, stretch'],
                      ['flex-wrap: wrap', 'Deixa os filhos quebrarem para a linha de baixo'],
                      ['flex-direction: column', 'Empilha em coluna em vez de linha']
                    ]
                  }
                },
                {
                  dica: 'O flex vai no pai, e quem se move são os filhos. Quando nada acontece, confira se você pôs o `display: flex` no elemento certo.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Onde vai o `display: flex`?',
              ops: ['No elemento pai, que contém os itens', 'Em cada item', 'Sempre no body'],
              c: 0,
              exp: 'O pai vira um contêiner flex, e os filhos se organizam dentro dele.'
            },
            {
              t: 'escolha',
              p: 'Qual valor de `justify-content` deixa o primeiro item na esquerda, o último na direita e divide o espaço entre eles?',
              mono: true,
              ops: ['space-between', 'center', 'flex-start'],
              c: 0,
              exp: 'É o valor clássico para um topo com o logo de um lado e o menu do outro.'
            },
            {
              t: 'complete',
              p: 'Complete para centralizar os itens na vertical',
              lang: 'css',
              code: `.barra {
  display: flex;
  ___: center;
}`,
              bank: ['align-items', 'justify-content', 'text-align', 'vertical'],
              c: ['align-items'],
              exp: '`justify-content` cuida da direção da linha; `align-items` cuida da outra direção.'
            },
            {
              t: 'web',
              p: 'Deixe os três cartões lado a lado: .cartoes com display flex e gap de 12px',
              html: `<div class="cartoes">
  <div class="cartao">Arroz</div>
  <div class="cartao">Feijão</div>
  <div class="cartao">Farinha</div>
</div>`,
              css: `.cartao {
  padding: 12px;
  border: 1px solid #999999;
}
`,
              regras: [
                {
                  sel: '.cartoes',
                  css: 'display',
                  valor: 'flex',
                  msg: 'O `.cartoes` ainda não tem `display: flex;`.'
                },
                {
                  sel: '.cartoes',
                  css: 'gap',
                  valor: '12px',
                  msg: 'Falta `gap: 12px;` no `.cartoes`.'
                }
              ],
              solHtml: `<div class="cartoes">
  <div class="cartao">Arroz</div>
  <div class="cartao">Feijão</div>
  <div class="cartao">Farinha</div>
</div>`,
              solCss: `.cartao {
  padding: 12px;
  border: 1px solid #999999;
}

.cartoes {
  display: flex;
  gap: 12px;
}`,
              dica: 'Crie uma regra nova para `.cartoes`, o pai. A regra de `.cartao` já existe.',
              exp: 'Mude para `justify-content: center;` e veja os cartões irem para o meio.'
            },
            {
              t: 'web',
              p: 'Monte o topo: .topo com display flex, justify-content space-between e align-items center',
              html: `<header class="topo">
  <strong>Rádio Vila</strong>
  <nav>
    <a href="#">Programação</a>
    <a href="#">Contato</a>
  </nav>
</header>`,
              css: `.topo {
  background-color: #ede7f6;
  padding: 12px;
}
`,
              regras: [
                {
                  sel: '.topo',
                  css: 'display',
                  valor: 'flex',
                  msg: 'O `.topo` ainda não tem `display: flex;`.'
                },
                {
                  sel: '.topo',
                  css: 'justify-content',
                  valor: 'space-between',
                  msg: 'Falta `justify-content: space-between;`.'
                },
                {
                  sel: '.topo',
                  css: 'align-items',
                  valor: 'center',
                  msg: 'Falta `align-items: center;`.'
                }
              ],
              solHtml: `<header class="topo">
  <strong>Rádio Vila</strong>
  <nav>
    <a href="#">Programação</a>
    <a href="#">Contato</a>
  </nav>
</header>`,
              solCss: `.topo {
  background-color: #ede7f6;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}`,
              dica: 'Acrescente as três linhas dentro da regra `.topo` que já existe.',
              exp: 'Nome de um lado, menu do outro: é o topo de metade dos sites.'
            },
            {
              t: 'web',
              conserte: true,
              p: 'As etiquetas estão escapando da caixa no celular. Deixe-as quebrar de linha com flex-wrap: wrap',
              html: `<div class="etiquetas">
  <span>Arte</span>
  <span>Música</span>
  <span>Esporte</span>
  <span>Leitura</span>
  <span>Tecnologia</span>
  <span>Culinária</span>
</div>`,
              css: `.etiquetas {
  display: flex;
  gap: 8px;
}

.etiquetas span {
  background-color: #fff3e0;
  border: 1px solid #ffb74d;
  border-radius: 99px;
  padding: 6px 14px;
}
`,
              regras: [
                {
                  sel: '.etiquetas',
                  css: 'flex-wrap',
                  valor: 'wrap',
                  msg: 'O `.etiquetas` ainda não tem `flex-wrap: wrap;`.'
                }
              ],
              solHtml: `<div class="etiquetas">
  <span>Arte</span>
  <span>Música</span>
  <span>Esporte</span>
  <span>Leitura</span>
  <span>Tecnologia</span>
  <span>Culinária</span>
</div>`,
              solCss: `.etiquetas {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.etiquetas span {
  background-color: #fff3e0;
  border: 1px solid #ffb74d;
  border-radius: 99px;
  padding: 6px 14px;
}`,
              dica: 'O `flex-wrap` vai no pai, junto do `display: flex`.',
              exp: 'Sem o wrap, o flex tenta espremer tudo numa linha só, mesmo que não caiba.'
            }
          ]
        },
        {
          id: 'hc5l3',
          titulo: 'Grid',
          exs: [
            {
              t: 'texto',
              titulo: 'Grades de verdade',
              blocos: [
                {
                  p: 'O flexbox organiza numa direção. O grid organiza em linhas e colunas ao mesmo tempo, ótimo para galerias e para o layout da página.'
                },
                {
                  web: `<div class="galeria">
  <div>1</div><div>2</div><div>3</div>
  <div>4</div><div>5</div><div>6</div>
</div>`,
                  css: `.galeria {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
}

.galeria div {
  background-color: #c8e6c9;
  padding: 20px;
  text-align: center;
}`
                },
                {
                  p: '`grid-template-columns` diz quantas colunas e de que tamanho. `fr` é uma fração do espaço que sobra: `1fr 1fr 1fr` são três colunas iguais, e `2fr 1fr` deixa a primeira com o dobro da segunda.'
                },
                {
                  p: 'Um truque muito usado faz a galeria se adaptar sozinha ao tamanho da tela:'
                },
                {
                  code: `.galeria {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}`,
                  lang: 'css'
                },
                {
                  dica: 'Use flex para uma linha de coisas, como um menu ou uma barra de botões, e grid para grades e para o layout geral da página.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Quantas colunas tem esta grade?',
              lang: 'css',
              code: 'grid-template-columns: 1fr 2fr 1fr;',
              mono: true,
              ops: ['3', '4', '2'],
              c: 0,
              exp: 'Cada valor é uma coluna. Os números dizem a proporção, não a quantidade.'
            },
            {
              t: 'escolha',
              p: 'Em `grid-template-columns: 2fr 1fr`, a primeira coluna é:',
              ops: [
                'Duas vezes mais larga que a segunda',
                'Duas vezes mais estreita',
                'Do mesmo tamanho'
              ],
              c: 0,
              exp: 'O espaço é dividido em 3 partes: 2 para a primeira, 1 para a segunda.'
            },
            {
              t: 'web',
              p: 'Transforme .produtos numa grade de 2 colunas iguais, com gap de 10px',
              html: `<div class="produtos">
  <div>Caneca</div>
  <div>Camiseta</div>
  <div>Boné</div>
  <div>Adesivo</div>
</div>`,
              css: `.produtos div {
  border: 1px solid #aaaaaa;
  padding: 10px;
}
`,
              regras: [
                {
                  sel: '.produtos',
                  css: 'display',
                  valor: 'grid',
                  msg: 'O `.produtos` ainda não tem `display: grid;`.'
                },
                {
                  sel: '.produtos',
                  colunas: 2,
                  msg: 'A grade precisa ter 2 colunas: `grid-template-columns: 1fr 1fr;`.'
                },
                { sel: '.produtos', css: 'gap', valor: '10px', msg: 'Falta `gap: 10px;`.' }
              ],
              solHtml: `<div class="produtos">
  <div>Caneca</div>
  <div>Camiseta</div>
  <div>Boné</div>
  <div>Adesivo</div>
</div>`,
              solCss: `.produtos div {
  border: 1px solid #aaaaaa;
  padding: 10px;
}

.produtos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}`,
              dica: 'Uma regra para `.produtos` com `display`, `grid-template-columns` e `gap`.',
              exp: 'Quatro produtos, duas linhas de dois, sem nenhuma conta de largura.'
            },
            {
              t: 'web',
              p: 'Monte a galeria de fotos: .galeria com display grid, gap de 8px e colunas que se adaptam com repeat(auto-fill, minmax(140px, 1fr)). E faça as imagens ocuparem a coluna com width 100%',
              html: `<div class="galeria">
  <img src="imagens/horta.jpg" alt="Canteiros da horta comunitária">
  <img src="imagens/feira.jpg" alt="Barracas da feira de domingo">
  <img src="imagens/quadra.jpg" alt="Campo de futebol do bairro">
  <img src="imagens/biblioteca.jpg" alt="Estantes cheias de livros">
</div>`,
              css: '',
              regras: [
                {
                  sel: '.galeria',
                  css: 'display',
                  valor: 'grid',
                  msg: 'A `.galeria` ainda não tem `display: grid;`.'
                },
                {
                  regra: '.galeria',
                  prop: 'grid-template-columns',
                  contem: 'minmax',
                  msg: 'Falta `grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));`.'
                },
                { sel: '.galeria', css: 'gap', valor: '8px', msg: 'Falta `gap: 8px;`.' },
                {
                  regra: 'img',
                  prop: 'width',
                  contem: '100%',
                  msg: 'Falta `width: 100%;` nas imagens, numa regra `.galeria img`.'
                }
              ],
              solHtml: `<div class="galeria">
  <img src="imagens/horta.jpg" alt="Canteiros da horta comunitária">
  <img src="imagens/feira.jpg" alt="Barracas da feira de domingo">
  <img src="imagens/quadra.jpg" alt="Campo de futebol do bairro">
  <img src="imagens/biblioteca.jpg" alt="Estantes cheias de livros">
</div>`,
              solCss: `.galeria {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 8px;
}

.galeria img {
  width: 100%;
}`,
              dica: 'Duas regras: `.galeria` para a grade e `.galeria img` para as fotos.',
              exp: 'Numa tela larga, cabem mais fotos por linha, sem mudar nada no código.'
            }
          ]
        },
        {
          id: 'hc5l4',
          titulo: 'Páginas responsivas',
          exs: [
            {
              t: 'texto',
              titulo: 'Do celular ao computador',
              blocos: [
                {
                  p: 'No Brasil, quase todo mundo que usa a internet acessa pelo celular. Uma página responsiva se adapta a qualquer tela. O primeiro passo é esta linha no `head`, que diz ao celular para mostrar a página na largura real da tela:'
                },
                {
                  code: '<meta name="viewport" content="width=device-width, initial-scale=1">'
                },
                {
                  p: 'Depois, evite larguras fixas grandes. Prefira `max-width` a `width`, use porcentagens, e ponha `max-width: 100%` nas imagens para elas nunca passarem da tela.'
                },
                {
                  p: 'Com media queries, você muda o estilo a partir de um tamanho de tela. Escreva primeiro para o celular e acrescente regras para as telas maiores:'
                },
                {
                  code: `.colunas {
  display: grid;
  gap: 16px;
}

@media (min-width: 700px) {
  .colunas {
    grid-template-columns: 1fr 1fr;
  }
}`,
                  lang: 'css'
                },
                {
                  dica: 'Para testar, abra as ferramentas de desenvolvedor do navegador (F12) e ative o modo de celular, ou simplesmente deixe a janela estreita.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Para que serve a meta viewport?',
              ops: [
                'Fazer o celular mostrar a página na largura real da tela',
                'Deixar a página mais rápida',
                'Mudar a cor da barra do navegador'
              ],
              c: 0,
              exp: 'Sem ela, o celular finge ser uma tela larga e mostra tudo miniatura.'
            },
            {
              t: 'escolha',
              p: 'A partir de que largura vale esta regra?',
              lang: 'css',
              code: `@media (min-width: 900px) {
  .menu { display: flex; }
}`,
              ops: [
                'A partir de 900px de largura',
                'Até 900px de largura',
                'Só em telas de exatamente 900px'
              ],
              c: 0,
              exp: '`min-width` quer dizer "largura mínima": de 900px para cima.'
            },
            {
              t: 'complete',
              p: 'Complete para a imagem nunca passar da largura da tela',
              lang: 'css',
              code: `img {
  ___: 100%;
}`,
              bank: ['max-width', 'width-limit', 'min-width', 'size'],
              c: ['max-width'],
              exp: 'Com `max-width`, a imagem pode ser menor, mas nunca maior que o espaço disponível.'
            },
            {
              t: 'web',
              p: 'Faça a imagem nunca passar da largura da página: img com max-width de 100%',
              html: `<h1>Nossa horta</h1>
<img src="imagens/horta.jpg" alt="Canteiros de alface e couve na horta da escola" width="1200">`,
              css: '',
              regras: [
                {
                  sel: 'img',
                  css: 'max-width',
                  valor: '100%',
                  msg: 'A imagem ainda não tem `max-width: 100%;`.'
                }
              ],
              solHtml: `<h1>Nossa horta</h1>
<img src="imagens/horta.jpg" alt="Canteiros de alface e couve na horta da escola" width="1200">`,
              solCss: `img {
  max-width: 100%;
}`,
              dica: 'Uma regra para `img`, com uma linha só.',
              exp: 'Essa regra está em quase todo site do mundo.'
            },
            {
              t: 'web',
              p: 'No celular, os cartões ficam um embaixo do outro. Com @media (min-width: 600px), deixe .cartoes com grid-template-columns: 1fr 1fr 1fr',
              html: `<div class="cartoes">
  <div>Saúde</div>
  <div>Educação</div>
  <div>Cultura</div>
</div>`,
              css: `.cartoes {
  display: grid;
  gap: 8px;
}

.cartoes div {
  background-color: #e8eaf6;
  padding: 1rem;
}
`,
              regras: [
                {
                  regra: '.cartoes',
                  prop: 'grid-template-columns',
                  media: '600px',
                  msg: 'Falta uma regra `.cartoes` com `grid-template-columns` dentro de `@media (min-width: 600px) { }`.'
                }
              ],
              solHtml: `<div class="cartoes">
  <div>Saúde</div>
  <div>Educação</div>
  <div>Cultura</div>
</div>`,
              solCss: `.cartoes {
  display: grid;
  gap: 8px;
}

.cartoes div {
  background-color: #e8eaf6;
  padding: 1rem;
}

@media (min-width: 600px) {
  .cartoes {
    grid-template-columns: 1fr 1fr 1fr;
  }
}`,
              dica: 'Escreva o `@media` no fim do CSS, com a regra `.cartoes` dentro das chaves dele. A prévia é estreita como um celular, então as três colunas só aparecem numa tela larga.',
              exp: 'Primeiro para o celular, depois para telas maiores: isso se chama mobile first.'
            }
          ]
        },
        {
          id: 'hc5l5',
          titulo: 'Posicionamento',
          pre: ['hc5l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Tirando a caixa do lugar',
              blocos: [
                {
                  p: 'Normalmente as caixas seguem o fluxo da página, uma depois da outra. A propriedade `position` muda isso.'
                },
                {
                  tabela: {
                    cab: ['Valor', 'O que faz'],
                    linhas: [
                      ['static', 'O normal, seguindo o fluxo'],
                      [
                        'relative',
                        'Fica no lugar, mas vira referência para os filhos posicionados'
                      ],
                      [
                        'absolute',
                        'Sai do fluxo e se posiciona em relação ao pai que tem position relative'
                      ],
                      ['fixed', 'Fica preso na tela, mesmo quando a página rola'],
                      ['sticky', 'Rola com a página até encostar no topo, e ali gruda']
                    ]
                  }
                },
                {
                  web: `<div class="cartao">
  <span class="selo">Novo</span>
  <h2>Curso de informática</h2>
  <p>Para iniciantes, aos sábados.</p>
</div>`,
                  css: `.cartao {
  position: relative;
  border: 2px solid #90a4ae;
  border-radius: 12px;
  padding: 1rem;
}

.selo {
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: #d81b60;
  color: white;
  padding: 2px 10px;
  border-radius: 99px;
}`
                },
                {
                  p: 'Com `top`, `right`, `bottom` e `left` você diz a distância até cada borda. No exemplo, o selo fica a 8px do topo e da direita do cartão.'
                },
                {
                  p: 'Um uso comum do `sticky` é o topo do site que acompanha a rolagem: `position: sticky; top: 0;`.'
                },
                {
                  dica: 'Use position com moderação. Para organizar a página, flex e grid resolvem quase tudo; position é para detalhes, como selos e topos que grudam.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Para o selo se posicionar em relação ao cartão, o cartão precisa de:',
              mono: true,
              ops: ['position: relative', 'position: absolute', 'display: flex'],
              c: 0,
              exp: 'O `absolute` procura o pai mais próximo que tenha position diferente de static.'
            },
            {
              t: 'escolha',
              p: 'Qual valor faz o topo grudar no alto da tela quando a página rola?',
              mono: true,
              ops: ['sticky', 'static', 'relative'],
              c: 0,
              exp: 'Sticky quer dizer grudento, em inglês.'
            },
            {
              t: 'web',
              p: 'Faça o topo acompanhar a rolagem: header com position sticky e top 0',
              html: `<header>Rádio Vila · Ao vivo</header>
<p>6h · Bom dia, Vila</p>
<p>8h · Notícias do bairro</p>
<p>10h · Música popular</p>
<p>12h · Hora do almoço</p>
<p>14h · Rodas de conversa</p>
<p>16h · Esporte</p>
<p>18h · Forró</p>
<p>20h · Rap nacional</p>
<p>22h · Boa noite</p>`,
              css: `header {
  background-color: #4527a0;
  color: white;
  padding: 12px;
}

p {
  padding: 12px 0;
}
`,
              regras: [
                {
                  sel: 'header',
                  css: 'position',
                  valor: 'sticky',
                  msg: 'O `header` ainda não tem `position: sticky;`.'
                },
                {
                  sel: 'header',
                  css: 'top',
                  valor: '0',
                  msg: 'Falta `top: 0;`, que diz onde ele gruda.'
                }
              ],
              solHtml: `<header>Rádio Vila · Ao vivo</header>
<p>6h · Bom dia, Vila</p>
<p>8h · Notícias do bairro</p>
<p>10h · Música popular</p>
<p>12h · Hora do almoço</p>
<p>14h · Rodas de conversa</p>
<p>16h · Esporte</p>
<p>18h · Forró</p>
<p>20h · Rap nacional</p>
<p>22h · Boa noite</p>`,
              solCss: `header {
  background-color: #4527a0;
  color: white;
  padding: 12px;
  position: sticky;
  top: 0;
}

p {
  padding: 12px 0;
}`,
              dica: 'Depois de acertar, role a prévia para baixo e veja o topo grudar.',
              exp: 'Assim o menu fica sempre à mão, mesmo no fim de uma página longa.'
            },
            {
              t: 'web',
              p: 'Ponha o selo Grátis no canto do cartão: .cartao com position relative, e .selo com position absolute, top 8px e right 8px',
              html: `<div class="cartao">
  <span class="selo">Grátis</span>
  <h2>Aula de capoeira</h2>
  <p>Terças e quintas, às 18h.</p>
</div>`,
              css: `.cartao {
  border: 2px solid #8d6e63;
  border-radius: 12px;
  padding: 1rem;
}

.selo {
  background-color: #2e7d32;
  color: white;
  padding: 2px 10px;
  border-radius: 99px;
}
`,
              regras: [
                {
                  sel: '.cartao',
                  css: 'position',
                  valor: 'relative',
                  msg: 'O `.cartao` ainda não tem `position: relative;`.'
                },
                {
                  sel: '.selo',
                  css: 'position',
                  valor: 'absolute',
                  msg: 'O `.selo` ainda não tem `position: absolute;`.'
                },
                {
                  sel: '.selo',
                  css: 'top',
                  valor: '8px',
                  msg: 'Falta `top: 8px;` no `.selo`.'
                },
                {
                  sel: '.selo',
                  css: 'right',
                  valor: '8px',
                  msg: 'Falta `right: 8px;` no `.selo`.'
                }
              ],
              solHtml: `<div class="cartao">
  <span class="selo">Grátis</span>
  <h2>Aula de capoeira</h2>
  <p>Terças e quintas, às 18h.</p>
</div>`,
              solCss: `.cartao {
  border: 2px solid #8d6e63;
  border-radius: 12px;
  padding: 1rem;
  position: relative;
}

.selo {
  background-color: #2e7d32;
  color: white;
  padding: 2px 10px;
  border-radius: 99px;
  position: absolute;
  top: 8px;
  right: 8px;
}`,
              dica: 'O pai (`.cartao`) ganha `relative`; o filho (`.selo`) ganha `absolute` e as distâncias.',
              exp: 'Esse par, relative no pai e absolute no filho, resolve quase todo selo e etiqueta.'
            }
          ]
        }
      ]
    }
  ]
});
