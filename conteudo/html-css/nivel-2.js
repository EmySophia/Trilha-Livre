/* Trilha Livre · Sites com HTML e CSS · Nível 2: Links, imagens e listas
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'html-css',
  n: 2,
  titulo: 'Links, imagens e listas',
  desc: 'Ligar páginas, mostrar imagens e organizar informações.',
  videos: [
    {
      titulo: 'HTML5 e CSS3, módulo 1',
      canal: 'Curso em Vídeo',
      obs: 'aulas de links e de imagens',
      url: 'https://www.youtube.com/playlist?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n'
    },
    {
      titulo: 'HTML5 e CSS3, módulo 3',
      canal: 'Curso em Vídeo',
      obs: 'aulas de tabelas',
      url: 'https://www.youtube.com/playlist?list=PLHz_AreHm4dmcAviDwiGgHbeEJToxbOpZ'
    }
  ],
  unidades: [
    {
      id: 'hcu3',
      titulo: 'Links e imagens',
      conceito: 'href · src',
      desc: 'Levar a outros lugares e mostrar fotos.',
      licoes: [
        {
          id: 'hc2l1',
          titulo: 'Links',
          pre: ['hc1l1'],
          exs: [
            {
              t: 'texto',
              titulo: 'Ligando páginas',
              blocos: [
                {
                  p: 'O que faz a web ser uma teia são os links. A tag `a` cria um link, e o atributo `href` diz para onde ele leva.'
                },
                {
                  web: `<p>Veja o site do <a href="https://www.ibge.gov.br">IBGE</a>.</p>
<p><a href="https://pt.wikipedia.org" target="_blank">Abrir a Wikipédia em outra aba</a></p>
<p><a href="#contato">Ir para o contato</a></p>
<h2 id="contato">Contato</h2>`
                },
                {
                  p: '`target="_blank"` abre o link numa aba nova. Um `href` que começa com `#` leva a um ponto da própria página: o elemento que tem aquele `id`.'
                },
                {
                  p: 'O texto do link deve dizer para onde ele leva. "Veja o site do IBGE" é muito melhor do que "clique aqui", principalmente para quem usa leitor de tela.'
                },
                {
                  dica: 'Endereços de outros sites começam com `https://`. Sem isso, o navegador procura uma página com aquele nome dentro do seu próprio site.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual atributo diz para onde o link leva?',
              mono: true,
              ops: ['href', 'src', 'link'],
              c: 0,
              exp: '`href` vem de hypertext reference, a referência do link.'
            },
            {
              t: 'escolha',
              p: 'Qual texto de link é melhor?',
              ops: ['Baixe o edital do concurso', 'Clique aqui', 'Link'],
              c: 0,
              exp: 'Quem lê só os links, como fazem os leitores de tela, entende para onde cada um leva.'
            },
            {
              t: 'complete',
              p: 'Complete o link',
              code: '<a ___="https://www.gov.br">Portal do governo</a>',
              bank: ['href', 'src', 'alt', 'link'],
              c: ['href'],
              exp: 'Sem o `href`, a tag `a` não leva a lugar nenhum.'
            },
            {
              t: 'web',
              p: 'Crie um link com o texto Biblioteca Nacional que leve para https://www.bn.gov.br',
              html: '',
              regras: [
                { sel: 'a', msg: 'Falta um link `<a>`.' },
                {
                  sel: 'a',
                  attr: 'href',
                  valor: 'https://www.bn.gov.br',
                  msg: 'O `href` do link precisa ser https://www.bn.gov.br'
                },
                {
                  sel: 'a',
                  texto: 'Biblioteca Nacional',
                  msg: 'O texto do link precisa ser "Biblioteca Nacional".'
                }
              ],
              solHtml: '<a href="https://www.bn.gov.br">Biblioteca Nacional</a>',
              dica: 'O endereço vai no `href`, entre aspas; o texto vai entre a abertura e o fechamento.',
              exp: 'Aqui no exercício o link não abre, mas numa página de verdade ele levaria ao site.'
            },
            {
              t: 'web',
              p: 'Faça o link Ver horários levar até a seção Horários, mais abaixo: dê ao h2 o id horarios e ao link o href #horarios',
              html: `<p><a>Ver horários</a></p>
<p>A biblioteca empresta livros de graça.</p>
<h2>Horários</h2>
<p>De terça a sábado, das 9h às 17h.</p>`,
              regras: [
                { sel: 'h2#horarios', msg: 'O `<h2>` Horários precisa de `id="horarios"`.' },
                {
                  sel: 'a',
                  attr: 'href',
                  valor: '#horarios',
                  msg: 'O link precisa de `href="#horarios"`, com a cerquilha na frente.'
                }
              ],
              solHtml: `<p><a href="#horarios">Ver horários</a></p>
<p>A biblioteca empresta livros de graça.</p>
<h2 id="horarios">Horários</h2>
<p>De terça a sábado, das 9h às 17h.</p>`,
              dica: 'Dois ajustes: `id="horarios"` no `h2` e `href="#horarios"` no link.',
              exp: 'Links para dentro da página funcionam como um sumário em páginas longas.'
            },
            {
              t: 'web',
              p: 'Crie um link Abrir o mapa que leve para https://www.openstreetmap.org e abra numa aba nova',
              html: '',
              regras: [
                {
                  sel: 'a',
                  attr: 'href',
                  valor: 'https://www.openstreetmap.org',
                  msg: 'O `href` precisa ser https://www.openstreetmap.org'
                },
                {
                  sel: 'a',
                  attr: 'target',
                  valor: '_blank',
                  msg: 'Para abrir numa aba nova, use `target="_blank"`.'
                },
                {
                  sel: 'a',
                  texto: 'Abrir o mapa',
                  msg: 'O texto do link precisa ser "Abrir o mapa".'
                }
              ],
              solHtml: '<a href="https://www.openstreetmap.org" target="_blank">Abrir o mapa</a>',
              dica: 'Os dois atributos vão na mesma tag de abertura, separados por um espaço.',
              exp: 'O OpenStreetMap é um mapa livre, feito por voluntários do mundo todo.'
            }
          ]
        },
        {
          id: 'hc2l2',
          titulo: 'Imagens',
          exs: [
            {
              t: 'texto',
              titulo: 'Mostrando imagens',
              blocos: [
                {
                  p: 'A tag `img` mostra uma imagem. O atributo `src` diz onde está o arquivo, e o `alt` descreve a imagem em texto. Como não tem conteúdo dentro, `img` não tem fechamento.'
                },
                {
                  web: '<img src="imagens/praia.jpg" alt="Praia de areia clara com guarda-sol vermelho e coqueiro" width="300">'
                },
                {
                  p: 'Nos sites, as imagens costumam ficar numa pasta própria. Aqui ela se chama `imagens`, então o caminho é `imagens/praia.jpg`: o nome da pasta, uma barra e o nome do arquivo. O `width` diz a largura em pixels.'
                },
                {
                  p: 'O `alt` é lido pelos leitores de tela para quem não enxerga, e aparece no lugar da imagem quando ela não carrega. Descreva o que importa na imagem, como você contaria para alguém pelo telefone.'
                },
                {
                  p: 'Se a imagem for só decoração, use `alt=""`, vazio. Assim o leitor de tela pula a imagem em vez de ler o nome do arquivo.'
                },
                {
                  p: 'Para pôr uma legenda que todo mundo vê, envolva a imagem num `figure` e escreva a legenda num `figcaption`:'
                },
                {
                  code: `<figure>
  <img src="imagens/horta.jpg" alt="Canteiros de alface e cenoura" width="300">
  <figcaption>A horta da escola em junho</figcaption>
</figure>`
                },
                {
                  dica: 'Imagens muito grandes deixam o site lento, principalmente no celular com plano de dados. Prefira arquivos leves, como JPG ou WebP, no tamanho em que vão aparecer.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Para que serve o atributo `alt`?',
              ops: [
                'Descrever a imagem para quem não pode vê-la',
                'Dar uma legenda que aparece embaixo da imagem',
                'Escolher o tamanho da imagem'
              ],
              c: 0,
              exp: 'Ele também aparece quando a imagem não carrega, por exemplo com internet ruim.'
            },
            {
              t: 'escolha',
              p: 'Qual linha está correta?',
              mono: true,
              ops: [
                '<img src="gato.jpg" alt="Gato cinza dormindo">',
                '<img alt="gato.jpg">Gato</img>',
                '<image href="gato.jpg">'
              ],
              c: 0,
              exp: '`img` usa `src` e `alt`, e não tem tag de fechamento.'
            },
            {
              t: 'escolha',
              p: 'Qual é o melhor `alt` para a foto de uma voluntária entregando cestas básicas na associação de bairro?',
              ops: [
                'Voluntária entregando cestas básicas na associação do bairro',
                'foto1.jpg',
                'imagem'
              ],
              c: 0,
              exp: 'O `alt` conta o que a imagem mostra e por que ela está ali.'
            },
            {
              t: 'web',
              p: 'Coloque a imagem imagens/mapa.png com width="300" e um alt que descreva: Mapa do bairro com a biblioteca marcada',
              html: '',
              regras: [
                { sel: 'img', msg: 'Falta a tag `<img>`.' },
                {
                  sel: 'img',
                  attr: 'src',
                  valor: 'imagens/mapa.png',
                  msg: 'O `src` precisa ser imagens/mapa.png'
                },
                {
                  sel: 'img',
                  attr: 'alt',
                  contem: 'mapa',
                  msg: 'Falta um `alt` que descreva a imagem (fale do mapa).'
                }
              ],
              solHtml: '<img src="imagens/mapa.png" alt="Mapa do bairro com a biblioteca marcada" width="300">',
              dica: 'O arquivo está na pasta imagens. Se o caminho estiver errado, a imagem não aparece, e o navegador mostra o `alt` no lugar dela.',
              exp: 'O `alt` é o que um leitor de tela leria para quem não enxerga o mapa.'
            },
            {
              t: 'web',
              p: 'Mostre a foto imagens/feira.jpg dentro de um figure, com alt, width="300" e a legenda Feira de domingo num figcaption',
              html: '',
              regras: [
                {
                  sel: 'figure img',
                  attr: 'src',
                  valor: 'imagens/feira.jpg',
                  msg: 'Falta a imagem `imagens/feira.jpg` dentro de um `<figure>`.'
                },
                {
                  sel: 'figure img',
                  attr: 'alt',
                  msg: 'A imagem precisa de um `alt` que descreva a feira.'
                },
                {
                  sel: 'figure img',
                  attr: 'width',
                  valor: '300',
                  msg: 'Ponha `width="300"` na imagem, para ela caber na tela.'
                },
                {
                  sel: 'figure figcaption',
                  texto: 'Feira de domingo',
                  msg: 'Falta o `<figcaption>` com "Feira de domingo" dentro do `figure`.'
                }
              ],
              solHtml: `<figure>
  <img src="imagens/feira.jpg" alt="Barracas coloridas com frutas numa feira de rua" width="300">
  <figcaption>Feira de domingo</figcaption>
</figure>`,
              dica: 'O `figure` envolve as duas coisas: a `<img>` e o `<figcaption>`.',
              exp: 'A legenda aparece para todo mundo; o `alt` é para quem não vê a imagem.'
            }
          ]
        }
      ]
    },
    {
      id: 'hcu4',
      titulo: 'Listas e tabelas',
      conceito: '<ul> · <table>',
      desc: 'Organizar itens e dados.',
      licoes: [
        {
          id: 'hc2l3',
          titulo: 'Listas',
          exs: [
            {
              t: 'texto',
              titulo: 'Listas com e sem ordem',
              blocos: [
                {
                  p: '`ul` cria uma lista sem ordem, com marcadores. `ol` cria uma lista numerada. Cada item vai numa tag `li`, dentro da lista.'
                },
                {
                  web: `<h2>Lista de compras</h2>
<ul>
  <li>Arroz</li>
  <li>Feijão</li>
  <li>Café</li>
</ul>
<h2>Como passar café</h2>
<ol>
  <li>Ferver a água</li>
  <li>Passar no filtro</li>
</ol>`
                },
                {
                  p: 'Use `ol` quando a ordem importa, como num passo a passo, e `ul` quando não importa, como numa lista de compras. Os menus dos sites também costumam ser listas `ul`.'
                },
                {
                  dica: 'Uma lista pode ter outra dentro: basta colocar um `ul` ou `ol` novo dentro de um `li`.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Para uma receita passo a passo, qual lista usar?',
              mono: true,
              ops: ['<ol>', '<ul>', '<li>'],
              c: 0,
              exp: 'Num passo a passo a ordem importa, então a lista é numerada.'
            },
            {
              t: 'escolha',
              p: 'Onde vai cada item da lista?',
              ops: ['Dentro de um `li`', 'Dentro de um `p`', 'Direto no `ul`, sem tag'],
              c: 0,
              exp: '`ul` e `ol` só aceitam `li` como filhos diretos.'
            },
            {
              t: 'ordene',
              p: 'Monte a lista numerada',
              lines: [
                '<ol>',
                '  <li>Primeiro: ler a receita</li>',
                '  <li>Depois: separar os ingredientes</li>',
                '  <li>Por fim: misturar tudo</li>',
                '</ol>'
              ],
              exp: 'Os itens ficam entre a abertura e o fechamento da lista.'
            },
            {
              t: 'web',
              p: 'Crie uma lista sem ordem com três frutas brasileiras',
              html: '',
              regras: [
                { sel: 'ul', msg: 'Falta a lista `<ul>`.' },
                {
                  sel: 'ul > li',
                  min: 3,
                  msg: 'A lista precisa de pelo menos três itens `<li>` dentro do `<ul>`.'
                }
              ],
              solHtml: `<ul>
  <li>Caju</li>
  <li>Açaí</li>
  <li>Cupuaçu</li>
</ul>`,
              dica: 'Um `<ul>` com três `<li>` dentro.',
              exp: 'Troque `ul` por `ol` e veja os marcadores virarem números.'
            },
            {
              t: 'web',
              p: 'Monte o passo a passo da inscrição numa lista numerada com três itens: Preencher a ficha, Levar um documento e Escolher o horário',
              html: '',
              regras: [
                { sel: 'ol', msg: 'Falta a lista numerada `<ol>`.' },
                { sel: 'ol > li', min: 3, msg: 'A lista precisa de três itens `<li>`.' },
                { sel: 'ol li', texto: 'documento', msg: 'Falta o item "Levar um documento".' }
              ],
              solHtml: `<ol>
  <li>Preencher a ficha</li>
  <li>Levar um documento</li>
  <li>Escolher o horário</li>
</ol>`,
              dica: 'Igual a uma `<ul>`, só que com `<ol>`.',
              exp: 'Num passo a passo, os números ajudam a pessoa a não se perder.'
            },
            {
              t: 'web',
              p: 'Monte uma lista de compras por seção: uma ul com Hortifrúti e Mercearia, e dentro de cada item uma nova ul com dois produtos',
              html: '',
              regras: [
                {
                  sel: 'ul > li > ul',
                  min: 2,
                  msg: 'Cada seção precisa de uma `<ul>` dentro do seu `<li>`.'
                },
                {
                  sel: 'ul ul li',
                  min: 4,
                  msg: 'São dois produtos em cada seção: quatro `<li>` nas listas de dentro.'
                },
                { sel: 'li', texto: 'Mercearia', msg: 'Falta a seção Mercearia.' }
              ],
              solHtml: `<ul>
  <li>Hortifrúti
    <ul>
      <li>Tomate</li>
      <li>Banana</li>
    </ul>
  </li>
  <li>Mercearia
    <ul>
      <li>Arroz</li>
      <li>Café</li>
    </ul>
  </li>
</ul>`,
              dica: 'A lista de dentro vai antes do `</li>` da seção, não depois dele.',
              exp: 'Menus com submenus são feitos exatamente assim.'
            }
          ]
        },
        {
          id: 'hc2l4',
          titulo: 'Tabelas',
          exs: [
            {
              t: 'texto',
              titulo: 'Dados em linhas e colunas',
              blocos: [
                {
                  p: 'Tabelas servem para dados que se comparam em linhas e colunas, como horários, preços ou resultados. `table` envolve tudo, `tr` é uma linha, `th` é uma célula de cabeçalho e `td` é uma célula comum.'
                },
                {
                  web: `<table>
  <tr>
    <th>Linha</th>
    <th>Saída</th>
  </tr>
  <tr>
    <td>101 Centro</td>
    <td>6h10</td>
  </tr>
  <tr>
    <td>205 Vila Nova</td>
    <td>6h40</td>
  </tr>
</table>`
                },
                {
                  p: 'Os `th` dizem o que cada coluna significa. O navegador mostra em negrito, e os leitores de tela usam os cabeçalhos para explicar cada célula.'
                },
                {
                  p: 'O `caption` dá um título à tabela. Ele vem logo depois da abertura do `table` e ajuda quem usa leitor de tela a saber do que a tabela trata antes de ouvir os dados.'
                },
                {
                  code: `<table>
  <caption>Ônibus da manhã</caption>
  <tr>
    <th>Linha</th>
    <th>Saída</th>
  </tr>
</table>`
                },
                {
                  dica: 'Não use tabela para montar o layout da página, como se fazia antigamente. Para isso existe o CSS, que aparece nos próximos níveis.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual tag cria uma linha da tabela?',
              mono: true,
              ops: ['<tr>', '<td>', '<th>'],
              c: 0,
              exp: '`tr` vem de table row, linha da tabela.'
            },
            {
              t: 'escolha',
              p: 'Quando usar uma tabela?',
              ops: [
                'Para dados em linhas e colunas, como horários',
                'Para dividir a página em colunas',
                'Para centralizar o texto'
              ],
              c: 0,
              exp: 'Tabela é para dados. Layout é trabalho do CSS.'
            },
            {
              t: 'web',
              p: 'Monte uma tabela com os cabeçalhos Produto e Preço e uma linha com Pão e R$ 1,00',
              html: '',
              regras: [
                { sel: 'table', msg: 'Falta a `<table>`.' },
                {
                  sel: 'th',
                  min: 2,
                  msg: 'Faltam os dois cabeçalhos `<th>`: Produto e Preço.'
                },
                { sel: 'th', texto: 'Produto', msg: 'Um `<th>` precisa ter o texto Produto.' },
                { sel: 'td', texto: 'Pão', msg: 'Falta uma célula `<td>` com Pão.' },
                {
                  sel: 'td',
                  texto: '1,00',
                  msg: 'Falta uma célula `<td>` com o preço R$ 1,00.'
                }
              ],
              solHtml: `<table>
  <tr>
    <th>Produto</th>
    <th>Preço</th>
  </tr>
  <tr>
    <td>Pão</td>
    <td>R$ 1,00</td>
  </tr>
</table>`,
              dica: 'Uma `<tr>` com dois `<th>` e outra `<tr>` com dois `<td>`, tudo dentro da `<table>`.',
              exp: 'Sem CSS a tabela fica sem bordas. No Nível 5 você aprende a dar acabamento.'
            },
            {
              t: 'web',
              p: 'Monte a tabela do campeonato: título (caption) Campeonato da Vila, cabeçalhos Time e Pontos, e três times',
              html: '',
              regras: [
                {
                  sel: 'table caption',
                  texto: 'Campeonato da Vila',
                  msg: 'Falta o `<caption>` com "Campeonato da Vila" dentro da tabela.'
                },
                { sel: 'th', min: 2, msg: 'Faltam os cabeçalhos `<th>` Time e Pontos.' },
                {
                  sel: 'tr',
                  min: 4,
                  msg: 'São quatro linhas `<tr>`: a do cabeçalho e uma para cada time.'
                },
                {
                  sel: 'td',
                  min: 6,
                  msg: 'Cada time precisa de duas células `<td>`: o nome e os pontos.'
                }
              ],
              solHtml: `<table>
  <caption>Campeonato da Vila</caption>
  <tr>
    <th>Time</th>
    <th>Pontos</th>
  </tr>
  <tr>
    <td>Unidos da Rua 3</td>
    <td>9</td>
  </tr>
  <tr>
    <td>Juventude</td>
    <td>7</td>
  </tr>
  <tr>
    <td>Estrela</td>
    <td>4</td>
  </tr>
</table>`,
              dica: 'O `<caption>` vem logo depois de `<table>`, antes da primeira linha.',
              exp: 'Uma tabela com título diz logo do que se trata.'
            }
          ]
        }
      ]
    }
  ]
});
