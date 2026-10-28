/* Trilha Livre · Sites com HTML e CSS · Nível 4: CSS: cores e textos
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'html-css',
  n: 4,
  titulo: 'CSS: cores e textos',
  desc: 'Dar aparência à página: cores, fontes e tamanhos.',
  videos: [
    {
      titulo: 'HTML5 e CSS3, módulo 2',
      canal: 'Curso em Vídeo',
      obs: 'cores, tipografia e primeiros estilos',
      url: 'https://www.youtube.com/playlist?list=PLHz_AreHm4dlUpEXkY1AyVLQGcpSgVF8s'
    }
  ],
  unidades: [
    {
      id: 'hcu7',
      titulo: 'Primeiros estilos',
      conceito: 'seletor { }',
      desc: 'Regras, seletores, cores e fontes.',
      licoes: [
        {
          id: 'hc4l1',
          titulo: 'O que é CSS',
          pre: ['hc1l2'],
          exs: [
            {
              t: 'texto',
              titulo: 'A roupa da página',
              blocos: [
                {
                  p: 'Se o HTML é o esqueleto da página, o CSS é a roupa. Ele diz como cada coisa aparece: cor, tamanho, espaçamento, posição.'
                },
                {
                  p: 'Uma regra de CSS tem um seletor, que diz quem vai receber o estilo, e, entre chaves, declarações no formato `propriedade: valor;`.'
                },
                {
                  web: `<h1>Festa junina da escola</h1>
<p>Sábado, às 18h, na quadra.</p>`,
                  css: `h1 {
  color: darkorange;
  text-align: center;
}

p {
  color: #444444;
  font-size: 20px;
}`
                },
                {
                  p: 'O CSS pode ficar num arquivo separado, ligado com `<link rel="stylesheet" href="estilo.css">` dentro do `head`, ou dentro de uma tag `style`. Nos exercícios, ele fica na aba CSS.'
                },
                {
                  dica: 'Esqueceu um ponto e vírgula ou fechou mal uma chave? A regra para de funcionar, sem nenhuma mensagem de erro. Confira sempre a pontuação.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Nesta regra, qual é o seletor?',
              code: 'h1 { color: red; }',
              lang: 'css',
              mono: true,
              ops: ['h1', 'color', 'red'],
              c: 0,
              exp: '`h1` é quem recebe o estilo; `color` é a propriedade e `red` é o valor.'
            },
            {
              t: 'escolha',
              p: 'O que o CSS faz?',
              ops: [
                'Define a aparência da página',
                'Cria os títulos e parágrafos',
                'Faz contas, como o JavaScript'
              ],
              c: 0,
              exp: 'O conteúdo e a estrutura ficam no HTML; a aparência fica no CSS.'
            },
            {
              t: 'complete',
              p: 'Complete para deixar o parágrafo verde',
              lang: 'css',
              code: `p {
  color___ green___
}`,
              bank: [':', ';', '=', ','],
              c: [':', ';'],
              exp: 'Dois-pontos entre a propriedade e o valor, ponto e vírgula no final.'
            },
            {
              t: 'web',
              p: 'Deixe o título com a cor darkblue',
              html: '<h1>Clube de leitura</h1>',
              css: '',
              regras: [
                {
                  sel: 'h1',
                  css: 'color',
                  valor: 'darkblue',
                  msg: 'O título ainda não está darkblue. Escreva uma regra para `h1` com `color: darkblue;`.'
                }
              ],
              solHtml: '<h1>Clube de leitura</h1>',
              solCss: `h1 {
  color: darkblue;
}`,
              dica: 'Toque na aba CSS e escreva a regra lá.',
              exp: 'Sua primeira regra de CSS.'
            },
            {
              t: 'web',
              p: 'Centralize o título com text-align center e deixe o parágrafo com a cor #555555',
              html: `<h1>Campanha do agasalho</h1>
<p>Doe roupas de frio até o fim do mês.</p>`,
              css: '',
              regras: [
                {
                  sel: 'h1',
                  css: 'text-align',
                  valor: 'center',
                  msg: 'O título ainda não está centralizado: `text-align: center;`.'
                },
                {
                  sel: 'p',
                  css: 'color',
                  valor: '#555555',
                  msg: 'O parágrafo ainda não tem `color: #555555;`.'
                }
              ],
              solHtml: `<h1>Campanha do agasalho</h1>
<p>Doe roupas de frio até o fim do mês.</p>`,
              solCss: `h1 {
  text-align: center;
}

p {
  color: #555555;
}`,
              dica: 'Duas regras: uma para `h1` e outra para `p`.',
              exp: 'Cinza escuro em vez de preto puro cansa menos os olhos.'
            }
          ]
        },
        {
          id: 'hc4l2',
          titulo: 'Seletores',
          exs: [
            {
              t: 'texto',
              titulo: 'Escolhendo quem recebe o estilo',
              blocos: [
                {
                  p: 'O seletor de tag (`p`) pega todos os parágrafos. Para pegar só alguns, use classes: no HTML, `class="aviso"`; no CSS, `.aviso`, com ponto. Vários elementos podem ter a mesma classe.'
                },
                {
                  web: `<p>Reunião às 19h.</p>
<p class="aviso">Traga um documento com foto.</p>
<p>Entrada gratuita.</p>`,
                  css: `.aviso {
  background-color: lightyellow;
  font-weight: bold;
}`
                },
                {
                  p: 'O `id` é único na página, e no CSS usa `#`, como em `#topo`. Dá para combinar seletores: `nav a` pega só os links que estão dentro do `nav`.'
                },
                {
                  tabela: {
                    cab: ['Seletor', 'Pega'],
                    linhas: [
                      ['p', 'Todos os parágrafos'],
                      ['.aviso', 'Quem tem class="aviso"'],
                      ['#topo', 'O elemento com id="topo"'],
                      ['nav a', 'Links dentro do nav'],
                      ['h1, h2', 'Os h1 e os h2']
                    ]
                  }
                },
                {
                  dica: 'Prefira classes para dar estilo. O `id` é melhor para links internos e para o JavaScript encontrar um elemento.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual seletor pega os elementos com `class="preco"`?',
              mono: true,
              ops: ['.preco', '#preco', 'preco'],
              c: 0,
              exp: 'Ponto para classe, cerquilha para id, nada para tag.'
            },
            {
              t: 'escolha',
              p: 'O que o seletor `nav a` pega?',
              ops: [
                'Os links que estão dentro do nav',
                'O nav e todos os links da página',
                'Só o primeiro link'
              ],
              c: 0,
              exp: 'O espaço entre os dois quer dizer "dentro de".'
            },
            {
              t: 'complete',
              p: 'Complete o seletor do id topo',
              lang: 'css',
              code: `___topo {
  background-color: black;
}`,
              bank: ['#', '.', '*', '@'],
              c: ['#'],
              exp: '`#topo` pega o elemento com `id="topo"`.'
            },
            {
              t: 'web',
              p: 'Dê a classe destaque ao segundo parágrafo e faça essa classe ter background-color yellow',
              html: `<p>Inscrições abertas.</p>
<p>Vagas limitadas!</p>`,
              css: '',
              regras: [
                { sel: 'p.destaque', msg: 'Nenhum parágrafo tem `class="destaque"` ainda.' },
                {
                  sel: 'p.destaque',
                  texto: 'Vagas',
                  msg: 'A classe precisa estar no parágrafo "Vagas limitadas!".'
                },
                {
                  sel: '.destaque',
                  css: 'background-color',
                  valor: 'yellow',
                  msg: 'A classe `.destaque` ainda não tem `background-color: yellow;`.'
                }
              ],
              solHtml: `<p>Inscrições abertas.</p>
<p class="destaque">Vagas limitadas!</p>`,
              solCss: `.destaque {
  background-color: yellow;
}`,
              dica: 'No HTML, acrescente `class="destaque"` na tag de abertura. No CSS, a regra começa com `.destaque`.',
              exp: 'Agora qualquer elemento que receber essa classe ganha o mesmo destaque.'
            },
            {
              t: 'web',
              p: 'Deixe só os links do menu brancos, com uma regra nav a, e dê ao nav o fundo #263238. O link do rodapé não deve mudar',
              html: `<nav>
  <a href="#">Início</a>
  <a href="#">Agenda</a>
</nav>
<p>Conteúdo da página.</p>
<footer>
  <a href="#">Fale conosco</a>
</footer>`,
              css: '',
              regras: [
                {
                  sel: 'nav a',
                  css: 'color',
                  valor: 'white',
                  msg: 'Os links do `nav` ainda não estão brancos.'
                },
                {
                  sel: 'nav',
                  css: 'background-color',
                  valor: '#263238',
                  msg: 'O `nav` ainda não tem `background-color: #263238;`.'
                },
                {
                  sel: 'footer a',
                  css: 'color',
                  diferente: 'white',
                  msg: 'O link do rodapé também ficou branco. Use o seletor `nav a`, que pega só os links de dentro do menu.'
                }
              ],
              solHtml: `<nav>
  <a href="#">Início</a>
  <a href="#">Agenda</a>
</nav>
<p>Conteúdo da página.</p>
<footer>
  <a href="#">Fale conosco</a>
</footer>`,
              solCss: `nav {
  background-color: #263238;
}

nav a {
  color: white;
}`,
              dica: 'Uma regra para `nav` (o fundo) e outra para `nav a` (os links).',
              exp: 'Seletores combinados deixam você mirar exatamente o que quer.'
            }
          ]
        },
        {
          id: 'hc4l3',
          titulo: 'Cores e fontes',
          exs: [
            {
              t: 'texto',
              titulo: 'Cor, fonte e tamanho',
              blocos: [
                {
                  p: 'Cores podem ser escritas por nome (`tomato`), em hexadecimal (`#ff6347`) ou em RGB (`rgb(255, 99, 71)`). As três formas são a mesma cor. `color` muda a cor do texto e `background-color` a do fundo.'
                },
                {
                  web: `<h1>Sabores do Norte</h1>
<p>Tacacá, maniçoba e açaí de verdade.</p>`,
                  css: `body {
  background-color: #fff8e7;
  font-family: Georgia, serif;
}

h1 {
  color: #2e7d32;
  font-size: 36px;
}

p {
  font-size: 18px;
  line-height: 1.6;
}`
                },
                {
                  p: '`font-family` escolhe a fonte. Liste mais de uma, separadas por vírgula, terminando numa genérica (`serif`, `sans-serif` ou `monospace`): se a primeira não existir no aparelho, o navegador tenta a próxima.'
                },
                {
                  p: '`font-size` muda o tamanho, `font-weight: bold` deixa em negrito, `text-align: center` centraliza e `line-height` dá espaço entre as linhas.'
                },
                {
                  dica: 'Texto claro em fundo claro é difícil de ler, ainda mais com o sol batendo na tela do celular. Garanta um contraste forte entre texto e fundo.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual propriedade muda a cor do fundo?',
              mono: true,
              ops: ['background-color', 'color', 'font-color'],
              c: 0,
              exp: '`color` sozinho muda a cor do texto.'
            },
            {
              t: 'escolha',
              p: 'Por que terminar o `font-family` com `sans-serif`?',
              ops: [
                'Para o navegador usar uma fonte parecida se as outras não existirem',
                'Para deixar a fonte maior',
                'Porque só se pode usar uma fonte'
              ],
              c: 0,
              exp: 'Cada aparelho tem fontes diferentes instaladas. A genérica garante um resultado parecido.'
            },
            {
              t: 'escolha',
              p: 'Qual destas cores é igual a `#ffffff`?',
              mono: true,
              ops: ['white', 'black', '#000000'],
              c: 0,
              exp: '`ff` é o máximo de vermelho, de verde e de azul: tudo junto dá branco.'
            },
            {
              t: 'web',
              p: 'Estilize o cartaz: fundo do body #fff3e0, título com a cor #bf360c e parágrafo com font-size 20px',
              html: `<h1>Feira de trocas</h1>
<p>Traga um livro e leve outro.</p>`,
              css: '',
              regras: [
                {
                  sel: 'body',
                  css: 'background-color',
                  valor: '#fff3e0',
                  msg: 'O fundo do `body` ainda não é #fff3e0.'
                },
                {
                  sel: 'h1',
                  css: 'color',
                  valor: '#bf360c',
                  msg: 'O `h1` ainda não tem a cor #bf360c.'
                },
                {
                  sel: 'p',
                  css: 'font-size',
                  valor: '20px',
                  msg: 'O parágrafo ainda não tem `font-size: 20px;`.'
                }
              ],
              solHtml: `<h1>Feira de trocas</h1>
<p>Traga um livro e leve outro.</p>`,
              solCss: `body {
  background-color: #fff3e0;
}

h1 {
  color: #bf360c;
}

p {
  font-size: 20px;
}`,
              dica: 'Três regras: uma para `body`, uma para `h1` e uma para `p`.',
              exp: 'Com três regras, a página já ganhou cara de cartaz.'
            },
            {
              t: 'web',
              p: 'Use a fonte Georgia, serif, no body, e dê aos parágrafos line-height de 1.6',
              html: `<h1>Cordel</h1>
<p>A poesia popular do Nordeste, vendida em folhetos pendurados em cordões nas feiras.</p>`,
              css: '',
              regras: [
                {
                  sel: 'body',
                  css: 'font-family',
                  contem: 'georgia',
                  msg: 'O `body` ainda não tem `font-family: Georgia, serif;`.'
                },
                {
                  regra: 'p',
                  prop: 'line-height',
                  msg: 'Falta `line-height: 1.6;` numa regra para `p`.'
                }
              ],
              solHtml: `<h1>Cordel</h1>
<p>A poesia popular do Nordeste, vendida em folhetos pendurados em cordões nas feiras.</p>`,
              solCss: `body {
  font-family: Georgia, serif;
}

p {
  line-height: 1.6;
}`,
              dica: 'O `line-height` vai sem unidade: só `1.6`.',
              exp: 'Linhas um pouco mais espaçadas facilitam muito a leitura de textos longos.'
            }
          ]
        },
        {
          id: 'hc4l4',
          titulo: 'Cascata e herança',
          exs: [
            {
              t: 'texto',
              titulo: 'Quando duas regras brigam',
              blocos: [
                {
                  p: 'CSS quer dizer Cascading Style Sheets, folhas de estilo em cascata. Quando duas regras dão valores diferentes para a mesma coisa, o navegador escolhe uma seguindo regras de desempate.'
                },
                {
                  passos: [
                    'O seletor mais específico vence: id ganha de classe, que ganha de tag',
                    'Se a especificidade empatar, vence a regra que vem por último',
                    'Alguns estilos, como cor e fonte, são herdados: o que você põe no `body` vale para tudo o que está dentro dele'
                  ]
                },
                {
                  web: '<p class="aviso">De que cor eu fico?</p>',
                  css: `p { color: blue; }
.aviso { color: green; }
p { color: red; }`
                },
                {
                  p: 'No exemplo, o parágrafo fica verde: `.aviso` é uma classe, mais específica do que a tag `p`, então ganha das duas regras de `p`, até da última.'
                },
                {
                  dica: 'Existe o `!important`, que passa na frente de tudo. Evite: ele resolve na hora e vira dor de cabeça depois.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual cor o parágrafo vai ter?',
              lang: 'css',
              code: `p { color: blue; }
p { color: orange; }`,
              ops: ['orange', 'blue', 'Uma mistura das duas'],
              c: 0,
              exp: 'Mesmo seletor: vence a regra que vem por último.'
            },
            {
              t: 'escolha',
              p: 'E agora, qual cor?',
              lang: 'css',
              code: `/* HTML: <p id="nota" class="info">Texto</p> */
#nota { color: purple; }
.info { color: gray; }`,
              ops: ['purple', 'gray', 'A cor padrão, preta'],
              c: 0,
              exp: 'O id é mais específico que a classe, não importa a ordem.'
            },
            {
              t: 'escolha',
              p: 'Se o `body` tem `color: navy`, de que cor ficam os parágrafos sem regra própria?',
              ops: [
                'navy, porque a cor é herdada',
                'Preto, a cor padrão',
                'Depende do tamanho da fonte'
              ],
              c: 0,
              exp: 'Por isso é comum definir a fonte e a cor principal no `body`.'
            },
            {
              t: 'web',
              p: 'O título deveria ficar green, mas está vermelho. Descubra qual regra está ganhando e conserte',
              html: '<h1 id="capa" class="titulo">Sarau na praça</h1>',
              css: `.titulo {
  color: green;
}

#capa {
  color: red;
}`,
              regras: [
                {
                  sel: 'h1',
                  css: 'color',
                  valor: 'green',
                  msg: 'O título continua vermelho: a regra do id ainda está ganhando da classe.'
                }
              ],
              solHtml: '<h1 id="capa" class="titulo">Sarau na praça</h1>',
              solCss: `.titulo {
  color: green;
}`,
              dica: 'A regra `#capa` é mais específica que `.titulo`. Apague a cor dela ou troque o valor.',
              exp: 'Entender a especificidade resolve a maioria dos "meu CSS não funciona".',
              conserte: true
            },
            {
              t: 'web',
              p: 'Defina no body a cor #37474f e a fonte sans-serif. Repare que os parágrafos herdam as duas',
              html: `<h1>Mutirão</h1>
<p>Limpeza da praça no sábado.</p>
<p>Traga luvas e uma garrafa de água.</p>`,
              css: '',
              regras: [
                {
                  sel: 'body',
                  css: 'color',
                  valor: '#37474f',
                  msg: 'O `body` ainda não tem `color: #37474f;`.'
                },
                {
                  sel: 'body',
                  css: 'font-family',
                  contem: 'sans-serif',
                  msg: 'O `body` ainda não tem `font-family: sans-serif;`.'
                }
              ],
              solHtml: `<h1>Mutirão</h1>
<p>Limpeza da praça no sábado.</p>
<p>Traga luvas e uma garrafa de água.</p>`,
              solCss: `body {
  color: #37474f;
  font-family: sans-serif;
}`,
              dica: 'Uma regra só, para o `body`. Os outros elementos herdam.',
              exp: 'Por isso a cor e a fonte principais costumam ficar no `body`.'
            }
          ]
        }
      ]
    },
    {
      id: 'hcu10',
      titulo: 'Mais estilo',
      conceito: ':hover',
      desc: 'Medidas, estados, fundos e sombras.',
      licoes: [
        {
          id: 'hc4l5',
          titulo: 'Unidades de medida',
          pre: ['hc4l3'],
          exs: [
            {
              t: 'texto',
              titulo: 'px, %, rem e vh',
              blocos: [
                {
                  p: 'Até aqui você usou `px`, pixels, para os tamanhos. O CSS tem outras unidades, e escolher bem deixa a página mais fácil de ler e de adaptar a cada tela.'
                },
                {
                  tabela: {
                    cab: ['Unidade', 'Quer dizer'],
                    linhas: [
                      ['px', 'Pixels: um tamanho fixo'],
                      ['%', 'Uma porcentagem do elemento pai'],
                      ['rem', 'Vezes o tamanho da letra da página, que costuma ser 16px'],
                      ['em', 'Vezes o tamanho da letra do próprio elemento'],
                      ['vw', '1% da largura da tela'],
                      ['vh', '1% da altura da tela']
                    ]
                  }
                },
                {
                  web: `<div class="caixa">
  <h1>Feira do livro</h1>
  <p>De 10 a 15 de maio, na praça.</p>
</div>`,
                  css: `.caixa {
  width: 80%;
  padding: 1rem;
  background-color: #e3f2fd;
}

h1 {
  font-size: 2rem;
}`
                },
                {
                  p: 'Use `rem` nas fontes: quem aumenta o tamanho da letra nas configurações do celular vê o site crescer junto. Com `px`, o texto fica preso no tamanho que você escolheu.'
                },
                {
                  dica: '`2rem` é o dobro do texto normal: 32px na maioria dos aparelhos. `1.5rem` dá 24px.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Por que usar `rem` no tamanho das fontes?',
              ops: [
                'Porque acompanha o tamanho de letra que a pessoa escolheu no aparelho',
                'Porque `rem` é sempre maior que `px`',
                'Porque o navegador não aceita `px` em fontes'
              ],
              c: 0,
              exp: 'Muita gente aumenta a letra do celular para enxergar melhor. Com `rem`, o seu site respeita essa escolha.'
            },
            {
              t: 'escolha',
              p: 'Uma caixa com `width: 50%` dentro de um pai de 600px de largura fica com:',
              mono: true,
              ops: ['300px', '50px', '600px'],
              c: 0,
              exp: 'A porcentagem é sempre em relação ao tamanho do pai.'
            },
            {
              t: 'complete',
              p: 'Complete para a capa ter, no mínimo, a altura inteira da tela',
              lang: 'css',
              code: `.capa {
  min-height: 100___;
}`,
              bank: ['vh', 'vw', '%', 'rem'],
              c: ['vh'],
              exp: '`vh` vem de viewport height, a altura da parte visível da tela.'
            },
            {
              t: 'web',
              p: 'Deixe o título com font-size de 2.5rem e o parágrafo com 1.25rem',
              html: `<h1>Sarau de poesia</h1>
<p>Toda sexta, às 19h, na biblioteca.</p>`,
              css: '',
              regras: [
                {
                  regra: 'h1',
                  prop: 'font-size',
                  contem: '2.5rem',
                  msg: 'O `h1` ainda não tem `font-size: 2.5rem;`.'
                },
                {
                  regra: 'p',
                  prop: 'font-size',
                  contem: '1.25rem',
                  msg: 'O parágrafo ainda não tem `font-size: 1.25rem;`.'
                }
              ],
              solHtml: `<h1>Sarau de poesia</h1>
<p>Toda sexta, às 19h, na biblioteca.</p>`,
              solCss: `h1 {
  font-size: 2.5rem;
}

p {
  font-size: 1.25rem;
}`,
              dica: 'O número vem colado na unidade, sem espaço: `2.5rem`.',
              exp: 'O parágrafo ficou com 20px e o título com 40px, na maioria dos aparelhos.'
            },
            {
              t: 'web',
              p: 'Faça a caixa .aviso ocupar 90% da largura e a .capa ter min-height de 50vh',
              html: `<div class="capa">
  <h1>Festival de música</h1>
</div>
<div class="aviso">Entrada gratuita.</div>`,
              css: `.capa {
  background-color: #ffe0b2;
}

.aviso {
  background-color: #c8e6c9;
}
`,
              regras: [
                {
                  regra: '.aviso',
                  prop: 'width',
                  contem: '90%',
                  msg: 'A `.aviso` ainda não tem `width: 90%;`.'
                },
                {
                  regra: '.capa',
                  prop: 'min-height',
                  contem: '50vh',
                  msg: 'A `.capa` ainda não tem `min-height: 50vh;`.'
                }
              ],
              solHtml: `<div class="capa">
  <h1>Festival de música</h1>
</div>
<div class="aviso">Entrada gratuita.</div>`,
              solCss: `.capa {
  background-color: #ffe0b2;
  min-height: 50vh;
}

.aviso {
  background-color: #c8e6c9;
  width: 90%;
}`,
              dica: 'Acrescente uma linha em cada uma das regras que já existem.',
              exp: 'A capa agora ocupa metade da altura da tela, em qualquer aparelho.'
            }
          ]
        },
        {
          id: 'hc4l6',
          titulo: 'Estados: hover e foco',
          pre: ['hc4l2'],
          exs: [
            {
              t: 'texto',
              titulo: 'Quando o mouse passa ou o teclado chega',
              blocos: [
                {
                  p: 'Uma pseudo-classe escolhe um elemento num certo estado. As mais usadas são `:hover`, quando o mouse está em cima, e `:focus-visible`, quando o elemento foi alcançado pelo teclado, com a tecla Tab.'
                },
                {
                  web: '<button class="botao">Quero participar</button>',
                  css: `.botao {
  padding: 12px 20px;
  background-color: #2e7d32;
  color: white;
  border: none;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.botao:hover {
  background-color: #1b5e20;
}

.botao:focus-visible {
  outline: 3px solid #ffb300;
}`
                },
                {
                  p: '`transition` faz a mudança acontecer aos poucos, em vez de num pulo. Ela recebe a propriedade que vai mudar e o tempo: `transition: background-color 0.3s;`.'
                },
                {
                  p: 'No celular não existe mouse, então o hover quase não aparece. Por isso, nada importante pode depender só dele. Já o foco é essencial: quem navega pelo teclado precisa ver onde está.'
                },
                {
                  dica: 'Nunca use `outline: none` sem pôr outro destaque de foco no lugar. Para quem usa o teclado, é como apagar a setinha do mouse.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Quando a regra `:hover` vale?',
              ops: [
                'Quando o mouse está em cima do elemento',
                'Quando a página termina de carregar',
                'Quando o elemento é clicado duas vezes'
              ],
              c: 0,
              exp: 'Passou o mouse, vale; tirou, volta ao normal.'
            },
            {
              t: 'escolha',
              p: 'Por que o destaque de foco é importante?',
              ops: [
                'Mostra onde está quem navega pelo teclado',
                'Deixa a página mais rápida',
                'Serve só de enfeite'
              ],
              c: 0,
              exp: 'Sem ele, quem usa Tab para andar pela página fica perdido.'
            },
            {
              t: 'complete',
              p: 'Complete para o link mudar de cor com o mouse em cima',
              lang: 'css',
              code: `a___ {
  color: darkred;
}`,
              bank: [':hover', '.hover', ':focus', '#hover'],
              c: [':hover'],
              exp: 'Os dois-pontos indicam uma pseudo-classe, um estado do elemento.'
            },
            {
              t: 'web',
              p: 'Faça o botão .doar escurecer com o mouse em cima: regra .doar:hover com background-color #b71c1c, e transition de background-color 0.3s no .doar',
              html: '<button class="doar">Doe agora</button>',
              css: `.doar {
  background-color: #e53935;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
}
`,
              regras: [
                {
                  regra: '.doar:hover',
                  prop: 'background-color',
                  msg: 'Falta a regra `.doar:hover` com `background-color: #b71c1c;`.'
                },
                {
                  regra: '.doar',
                  prop: 'transition',
                  msg: 'Falta `transition: background-color 0.3s;` na regra `.doar`.'
                }
              ],
              solHtml: '<button class="doar">Doe agora</button>',
              solCss: `.doar {
  background-color: #e53935;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.doar:hover {
  background-color: #b71c1c;
}`,
              dica: 'O `transition` entra na regra que já existe. O `:hover` é uma regra nova, logo abaixo.',
              exp: 'Num computador, passe o mouse no botão da prévia e veja a cor mudar devagar.'
            },
            {
              t: 'web',
              p: 'Dê aos links um destaque de foco: regra a:focus-visible com outline 3px solid #ffb300',
              html: `<nav>
  <a href="#">Início</a>
  <a href="#">Agenda</a>
  <a href="#">Contato</a>
</nav>`,
              css: '',
              regras: [
                {
                  regra: 'a:focus-visible',
                  prop: 'outline',
                  msg: 'Falta a regra `a:focus-visible` com `outline: 3px solid #ffb300;`.'
                }
              ],
              solHtml: `<nav>
  <a href="#">Início</a>
  <a href="#">Agenda</a>
  <a href="#">Contato</a>
</nav>`,
              solCss: `a:focus-visible {
  outline: 3px solid #ffb300;
}`,
              dica: 'Num computador, clique na prévia e aperte Tab para ver o destaque andar de link em link.',
              exp: 'Um contorno forte e de cor diferente é o jeito mais claro de mostrar o foco.'
            }
          ]
        },
        {
          id: 'hc4l7',
          titulo: 'Fundos, degradês e sombras',
          pre: ['hc4l3'],
          exs: [
            {
              t: 'texto',
              titulo: 'Imagens de fundo, degradês e sombras',
              blocos: [
                {
                  p: 'Além da cor, o fundo pode ter uma imagem. `background-image: url(...)` recebe o caminho do arquivo, e `background-size: cover` faz a imagem cobrir a caixa toda, cortando o que sobrar.'
                },
                {
                  web: `<div class="capa">
  <h1>Horta comunitária</h1>
</div>`,
                  css: `.capa {
  background-image: url(imagens/horta.jpg);
  background-size: cover;
  background-position: center;
  min-height: 180px;
  padding: 1rem;
}

.capa h1 {
  color: white;
  text-shadow: 0 2px 6px black;
}`
                },
                {
                  p: 'Um degradê é uma imagem criada pelo próprio CSS: `linear-gradient(to right, #1e88e5, #8e24aa)` vai de uma cor a outra. Ele também vai no `background-image`.'
                },
                {
                  p: 'Dá para juntar os dois. Um degradê escuro e meio transparente por cima da foto deixa qualquer texto branco legível. As camadas vão separadas por vírgula, e a primeira fica por cima:'
                },
                {
                  code: `.capa {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(imagens/horta.jpg);
}`,
                  lang: 'css'
                },
                {
                  p: '`box-shadow` põe sombra na caixa. Os valores são: quanto ela vai para o lado, quanto desce, o quanto se espalha e a cor. Sombras leves, como `0 2px 8px rgba(0, 0, 0, 0.2)`, dão a sensação de um cartão sobre a mesa.'
                },
                {
                  dica: 'Texto sobre foto precisa de contraste. A camada escura por cima da foto e a sombra no texto (`text-shadow`) ajudam muito a leitura.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que `background-size: cover` faz?',
              ops: [
                'Faz a imagem cobrir a caixa toda, cortando as sobras',
                'Repete a imagem várias vezes',
                'Mostra a imagem no tamanho original'
              ],
              c: 0,
              exp: 'A imagem cresce ou diminui até não sobrar nenhum espaço vazio na caixa.'
            },
            {
              t: 'escolha',
              p: 'Em `box-shadow: 0 4px 10px gray`, o que é o `4px`?',
              ops: ['O quanto a sombra desce', 'A espessura da borda', 'O tamanho da letra'],
              c: 0,
              exp: 'Primeiro o deslocamento para o lado, depois para baixo, depois o espalhamento.'
            },
            {
              t: 'web',
              p: 'Ponha a foto imagens/biblioteca.jpg no fundo da .capa, com background-size cover',
              html: `<div class="capa">
  <h1>Biblioteca da Vila</h1>
</div>`,
              css: `.capa {
  min-height: 200px;
  padding: 1rem;
}

.capa h1 {
  color: white;
  text-shadow: 0 2px 6px black;
}
`,
              regras: [
                {
                  sel: '.capa',
                  css: 'background-image',
                  contem: 'imagens/biblioteca.jpg',
                  msg: 'A `.capa` ainda não tem `background-image: url(imagens/biblioteca.jpg);`.'
                },
                {
                  sel: '.capa',
                  css: 'background-size',
                  valor: 'cover',
                  msg: 'Falta `background-size: cover;`.'
                }
              ],
              solHtml: `<div class="capa">
  <h1>Biblioteca da Vila</h1>
</div>`,
              solCss: `.capa {
  min-height: 200px;
  padding: 1rem;
  background-image: url(imagens/biblioteca.jpg);
  background-size: cover;
}

.capa h1 {
  color: white;
  text-shadow: 0 2px 6px black;
}`,
              dica: 'O caminho vai dentro de `url( )`, sem espaço entre `url` e o parêntese.',
              exp: 'Capas com foto e título por cima são a abertura de muitos sites.'
            },
            {
              t: 'web',
              p: 'Dê à .faixa um degradê de #1e88e5 para #8e24aa (linear-gradient) e ao .cartao uma sombra com box-shadow',
              html: `<div class="faixa">Inscrições abertas</div>
<div class="cartao">
  <h2>Oficina de violão</h2>
  <p>Sábados, às 10h.</p>
</div>`,
              css: `.faixa {
  color: white;
  padding: 1rem;
}

.cartao {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 12px;
}
`,
              regras: [
                {
                  sel: '.faixa',
                  css: 'background-image',
                  contem: 'linear-gradient',
                  msg: 'A `.faixa` ainda não tem `background-image: linear-gradient(to right, #1e88e5, #8e24aa);`.'
                },
                {
                  sel: '.cartao',
                  css: 'box-shadow',
                  diferente: 'none',
                  msg: 'O `.cartao` ainda não tem sombra: use `box-shadow`, por exemplo `0 2px 8px rgba(0, 0, 0, 0.2)`.'
                }
              ],
              solHtml: `<div class="faixa">Inscrições abertas</div>
<div class="cartao">
  <h2>Oficina de violão</h2>
  <p>Sábados, às 10h.</p>
</div>`,
              solCss: `.faixa {
  color: white;
  padding: 1rem;
  background-image: linear-gradient(to right, #1e88e5, #8e24aa);
}

.cartao {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}`,
              dica: 'O degradê vai no `background-image` da `.faixa`; a sombra, no `.cartao`.',
              exp: 'Use esses efeitos com calma: um pouco de sombra e de cor já dá outro ar à página.'
            }
          ]
        }
      ]
    }
  ]
});
