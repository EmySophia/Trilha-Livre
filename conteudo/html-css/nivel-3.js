/* Trilha Livre · Sites com HTML e CSS · Nível 3: Formulários e semântica
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'html-css',
  n: 3,
  titulo: 'Formulários e semântica',
  desc: 'Receber dados das pessoas e dar sentido à estrutura.',
  videos: [
    {
      titulo: 'HTML5 e CSS3, módulo 4',
      canal: 'Curso em Vídeo',
      obs: 'aulas de formulários',
      url: 'https://www.youtube.com/playlist?list=PLHz_AreHm4dkcVCk2Bn_fdVQ81Fkrh6WT'
    },
    {
      titulo: 'HTML5 e CSS3, módulo 1',
      canal: 'Curso em Vídeo',
      obs: 'aulas de semântica',
      url: 'https://www.youtube.com/playlist?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n'
    }
  ],
  unidades: [
    {
      id: 'hcu5',
      titulo: 'Formulários',
      conceito: '<form>',
      desc: 'Campos, rótulos e botões.',
      licoes: [
        {
          id: 'hc3l1',
          titulo: 'Formulários',
          pre: ['hc1l3'],
          exs: [
            {
              t: 'texto',
              titulo: 'Pedindo informações',
              blocos: [
                {
                  p: 'Formulários são o jeito de as pessoas mandarem informações para um site: um cadastro, uma busca, uma inscrição. `form` envolve o formulário, `input` cria um campo, `label` dá nome ao campo e `button` cria o botão de enviar.'
                },
                {
                  web: `<form>
  <label for="nome">Nome</label>
  <input id="nome" type="text">

  <label for="email">E-mail</label>
  <input id="email" type="email">

  <button>Enviar</button>
</form>`
                },
                {
                  p: 'O `for` do `label` precisa ser igual ao `id` do campo. Assim, tocar no nome também ativa o campo, e o leitor de tela anuncia o que deve ser digitado.'
                },
                {
                  p: 'O `type` muda o campo: `email` mostra o teclado com @ no celular, `number` aceita números, `password` esconde o que é digitado e `date` mostra um calendário.'
                },
                {
                  dica: 'Nunca deixe um campo sem `label`. Um texto cinza dentro do campo (o `placeholder`) não substitui o `label`, porque some quando a pessoa começa a digitar.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que liga um `label` ao seu campo?',
              ops: [
                'O `for` do label igual ao `id` do campo',
                'Colocar o label logo antes do campo',
                'O mesmo texto nos dois'
              ],
              c: 0,
              exp: 'Com a ligação certa, tocar no nome do campo também coloca o cursor nele.'
            },
            {
              t: 'escolha',
              p: 'Qual `type` mostra o teclado com @ no celular?',
              mono: true,
              ops: ['email', 'text', 'arroba'],
              c: 0,
              exp: 'O navegador também confere se o que foi digitado parece um e-mail.'
            },
            {
              t: 'complete',
              p: 'Complete o campo de senha',
              code: `<label for="senha">Senha</label>
<input id="senha" type="___">`,
              bank: ['password', 'senha', 'hidden', 'text'],
              c: ['password'],
              exp: '`password` troca o que é digitado por pontinhos.'
            },
            {
              t: 'web',
              p: 'Crie um formulário com um campo de e-mail que tenha o label E-mail e um botão Cadastrar',
              html: '',
              regras: [
                { sel: 'form', msg: 'Falta o `<form>`.' },
                {
                  sel: 'input[type="email"]',
                  dentro: 'form',
                  msg: 'Falta um `<input type="email">` dentro do formulário.'
                },
                {
                  sel: 'label',
                  texto: 'E-mail',
                  msg: 'Falta um `<label>` com o texto E-mail.'
                },
                {
                  rotulado: 'input[type="email"]',
                  msg: 'O `label` precisa estar ligado ao campo: o `for` do label igual ao `id` do campo.'
                },
                {
                  sel: 'button',
                  texto: 'Cadastrar',
                  msg: 'Falta o botão `<button>` com Cadastrar.'
                }
              ],
              solHtml: `<form>
  <label for="email">E-mail</label>
  <input id="email" type="email">
  <button>Cadastrar</button>
</form>`,
              dica: 'Dentro do `<form>`: um `<label for="email">`, um `<input id="email" type="email">` e um `<button>`.',
              exp: 'Aqui o botão não envia nada: mandar os dados para um servidor é assunto do curso de back-end.'
            },
            {
              t: 'web',
              p: 'Monte a ficha: campos Nome (type text) e Telefone (type tel), cada um com label ligado, e um botão Inscrever',
              html: `<form>
  
</form>`,
              regras: [
                {
                  sel: 'form input[type="text"]',
                  msg: 'Falta o campo de nome: `<input type="text">`.'
                },
                {
                  sel: 'form input[type="tel"]',
                  msg: 'Falta o campo de telefone: `<input type="tel">`.'
                },
                {
                  rotulado: 'form input',
                  todos: true,
                  msg: 'Os dois campos precisam de um `<label>` ligado (`for` igual ao `id`).'
                },
                { sel: 'form button', texto: 'Inscrever', msg: 'Falta o botão Inscrever.' }
              ],
              solHtml: `<form>
  <label for="nome">Nome</label>
  <input id="nome" type="text">
  <label for="telefone">Telefone</label>
  <input id="telefone" type="tel">
  <button>Inscrever</button>
</form>`,
              dica: 'Para cada campo, um par: `<label for="x">` e `<input id="x">`, com o mesmo nome.',
              exp: 'No celular, o campo `tel` abre o teclado de números.'
            }
          ]
        },
        {
          id: 'hc3l2',
          titulo: 'Mais tipos de campo',
          exs: [
            {
              t: 'texto',
              titulo: 'Escolhas, textos longos e obrigatórios',
              blocos: [
                {
                  p: 'Nem tudo é campo de texto. `select` cria uma lista para escolher, `textarea` aceita textos longos, e `input type="checkbox"` e `type="radio"` criam caixinhas de marcar.'
                },
                {
                  web: `<form>
  <label for="estado">Estado</label>
  <select id="estado">
    <option>Bahia</option>
    <option>Pará</option>
    <option>São Paulo</option>
  </select>

  <label for="msg">Mensagem</label>
  <textarea id="msg"></textarea>

  <label><input type="checkbox"> Quero receber novidades</label>
</form>`
                },
                {
                  p: 'O radio serve para escolher uma opção entre várias: todos os do mesmo grupo têm o mesmo `name`. O checkbox serve para marcar quantas quiser.'
                },
                {
                  p: 'O atributo `required` torna o campo obrigatório: o navegador não deixa enviar o formulário com ele vazio.'
                },
                { code: '<input id="telefone" type="tel" required>' },
                {
                  dica: 'Um `label` pode envolver o campo, como no checkbox do exemplo. Assim nem precisa de `for` e `id`.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Para escolher um só turno de aula (manhã, tarde ou noite), qual campo usar?',
              ops: ['Botões radio com o mesmo `name`', 'Vários checkbox', 'Um `textarea`'],
              c: 0,
              exp: 'Com o mesmo `name`, marcar um radio desmarca os outros.'
            },
            {
              t: 'escolha',
              p: 'O que o atributo `required` faz?',
              ops: [
                'Não deixa enviar o formulário com o campo vazio',
                'Deixa o campo vermelho',
                'Esconde o campo'
              ],
              c: 0,
              exp: 'O próprio navegador mostra o aviso, sem precisar de JavaScript.'
            },
            {
              t: 'web',
              p: 'Crie um campo de seleção com o label Turno e as opções Manhã, Tarde e Noite',
              html: '',
              regras: [
                { sel: 'select', msg: 'Falta o `<select>`.' },
                { sel: 'select option', min: 3, msg: 'O select precisa de três `<option>`.' },
                { sel: 'option', texto: 'Noite', msg: 'Falta a opção Noite.' },
                {
                  rotulado: 'select',
                  msg: 'O select precisa de um `<label>` ligado a ele (`for` igual ao `id`).'
                }
              ],
              solHtml: `<label for="turno">Turno</label>
<select id="turno">
  <option>Manhã</option>
  <option>Tarde</option>
  <option>Noite</option>
</select>`,
              dica: 'Um `<label for="turno">`, e depois um `<select id="turno">` com três `<option>` dentro.',
              exp: 'Listas de escolha evitam erros de digitação, como "Noiti" ou "noite ".'
            },
            {
              t: 'web',
              p: 'Crie três opções de turno com radio: Manhã, Tarde e Noite, todas com name="turno" e cada uma dentro do seu label',
              html: `<form>
  <p>Qual turno você prefere?</p>
  
</form>`,
              regras: [
                {
                  sel: 'input[type="radio"][name="turno"]',
                  min: 3,
                  msg: 'São três `<input type="radio" name="turno">`.'
                },
                {
                  rotulado: 'input[type="radio"]',
                  todos: true,
                  msg: 'Cada radio precisa estar dentro de um `<label>`.'
                },
                { sel: 'label', texto: 'Noite', msg: 'Falta a opção Noite.' }
              ],
              solHtml: `<form>
  <p>Qual turno você prefere?</p>
  <label><input type="radio" name="turno"> Manhã</label>
  <label><input type="radio" name="turno"> Tarde</label>
  <label><input type="radio" name="turno"> Noite</label>
</form>`,
              dica: 'Cada opção: `<label><input type="radio" name="turno"> Manhã</label>`.',
              exp: 'Marque uma opção e depois outra: como têm o mesmo `name`, só uma fica marcada.'
            },
            {
              t: 'web',
              p: 'Acrescente um campo Mensagem para textos longos (textarea), com label ligado, e deixe-o obrigatório',
              html: `<form>
  <label for="nome">Nome</label>
  <input id="nome" type="text" required>
  
  <button>Enviar</button>
</form>`,
              regras: [
                { sel: 'form textarea', msg: 'Falta o `<textarea>` dentro do formulário.' },
                {
                  rotulado: 'textarea',
                  msg: 'O `textarea` precisa de um `<label>` ligado a ele.'
                },
                {
                  sel: 'textarea[required]',
                  msg: 'Falta o atributo `required` no `textarea`.'
                }
              ],
              solHtml: `<form>
  <label for="nome">Nome</label>
  <input id="nome" type="text" required>
  <label for="mensagem">Mensagem</label>
  <textarea id="mensagem" required></textarea>
  <button>Enviar</button>
</form>`,
              dica: 'O `textarea` tem fechamento: `<textarea id="mensagem" required></textarea>`.',
              exp: 'Agora o formulário não deixa ninguém mandar uma mensagem em branco.'
            }
          ]
        }
      ]
    },
    {
      id: 'hcu6',
      titulo: 'Semântica e acessibilidade',
      conceito: '<main>',
      desc: 'Tags com significado e páginas para todo mundo.',
      licoes: [
        {
          id: 'hc3l3',
          titulo: 'HTML semântico',
          exs: [
            {
              t: 'texto',
              titulo: 'Tags que dizem o que cada parte é',
              blocos: [
                {
                  p: 'Dá para montar uma página inteira só com `div`, uma caixa genérica, sem significado. Mas o HTML tem tags que dizem o papel de cada parte, e isso ajuda leitores de tela, buscadores e quem for mexer no código depois.'
                },
                {
                  tabela: {
                    cab: ['Tag', 'Para quê'],
                    linhas: [
                      ['header', 'Topo da página ou de uma seção'],
                      ['nav', 'Menu de navegação'],
                      ['main', 'Conteúdo principal, um por página'],
                      ['section', 'Uma seção com tema próprio'],
                      ['article', 'Conteúdo que faz sentido sozinho, como uma notícia'],
                      ['footer', 'Rodapé']
                    ]
                  }
                },
                {
                  web: `<header>
  <h1>Coletivo Horta Viva</h1>
  <nav>
    <a href="#sobre">Sobre</a>
    <a href="#agenda">Agenda</a>
  </nav>
</header>
<main>
  <section id="sobre">
    <h2>Sobre</h2>
    <p>Plantamos hortas em escolas públicas.</p>
  </section>
</main>
<footer>
  <p>Feito por voluntários.</p>
</footer>`
                },
                {
                  dica: 'Quem usa leitor de tela pode pular direto para o `main` ou para o `nav`. Sem essas tags, precisaria ouvir a página inteira para achar o conteúdo.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual tag usar para o menu de navegação?',
              mono: true,
              ops: ['<nav>', '<menu-site>', '<div class="links">'],
              c: 0,
              exp: 'Uma `div` até funciona, mas não diz nada sobre o seu papel.'
            },
            {
              t: 'escolha',
              p: 'Quantos `main` uma página deve ter?',
              ops: ['Um', 'Um por seção', 'Nenhum, é opcional e raro'],
              c: 0,
              exp: 'O `main` marca o conteúdo principal, e só existe um conteúdo principal.'
            },
            {
              t: 'ordene',
              p: 'Monte a estrutura da página',
              lines: [
                '<header>',
                '  <h1>Rádio Comunitária</h1>',
                '</header>',
                '<main>',
                '  <p>Programação de hoje</p>',
                '</main>',
                '<footer>',
                '  <p>Feita pela comunidade</p>',
                '</footer>'
              ],
              exp: 'Topo, conteúdo e rodapé, nessa ordem.'
            },
            {
              t: 'web',
              p: 'Monte uma página com header (com um h1), main (com um parágrafo) e footer',
              html: '',
              regras: [
                { sel: 'header h1', msg: 'Falta um `<header>` com um `<h1>` dentro.' },
                { sel: 'main p', msg: 'Falta um `<main>` com um parágrafo dentro.' },
                { sel: 'footer', msg: 'Falta o `<footer>`.' }
              ],
              solHtml: `<header>
  <h1>Biblioteca do bairro</h1>
</header>
<main>
  <p>Empréstimo gratuito de livros.</p>
</main>
<footer>
  <p>Aberta de terça a sábado.</p>
</footer>`,
              dica: 'Três blocos, um depois do outro: `<header>`, `<main>` e `<footer>`.',
              exp: 'Visualmente nada muda, mas a página agora explica a própria estrutura.'
            },
            {
              t: 'web',
              p: 'Monte uma página de notícias: dentro do main, dois article, cada um com um h2 e um parágrafo',
              html: `<header>
  <h1>Jornal do Bairro</h1>
</header>
<main>
  
</main>`,
              regras: [
                { sel: 'main article', min: 2, msg: 'O `<main>` precisa de dois `<article>`.' },
                {
                  sel: 'article h2',
                  min: 2,
                  msg: 'Cada `<article>` precisa de um título `<h2>`.'
                },
                { sel: 'article p', min: 2, msg: 'Cada `<article>` precisa de um parágrafo.' }
              ],
              solHtml: `<header>
  <h1>Jornal do Bairro</h1>
</header>
<main>
  <article>
    <h2>Praça ganha brinquedos novos</h2>
    <p>A reforma terminou no sábado.</p>
  </article>
  <article>
    <h2>Feira muda de rua</h2>
    <p>A partir de março, ela fica na Rua das Flores.</p>
  </article>
</main>`,
              dica: 'Cada notícia é um `<article>` com `<h2>` e `<p>` dentro.',
              exp: 'Cada notícia faz sentido sozinha. Por isso é um `article`.'
            }
          ]
        },
        {
          id: 'hc3l4',
          titulo: 'Acessibilidade',
          exs: [
            {
              t: 'texto',
              titulo: 'Uma página para todo mundo',
              blocos: [
                {
                  p: 'Acessibilidade é fazer sites que todas as pessoas consigam usar: quem não enxerga e usa leitor de tela, quem não usa mouse, quem enxerga pouco, quem tem dificuldade de leitura. No Brasil, a Lei Brasileira de Inclusão (Lei 13.146/2015) obriga sites de empresas e de órgãos públicos a serem acessíveis.'
                },
                {
                  passos: [
                    'Toda imagem com significado tem `alt`',
                    'Todo campo de formulário tem `label`',
                    'Os títulos seguem a ordem: `h1`, depois `h2`, depois `h3`',
                    'A página diz o seu idioma: `<html lang="pt-BR">`',
                    'Os links dizem para onde levam',
                    'O texto tem contraste forte com o fundo'
                  ]
                },
                {
                  p: 'Quase tudo isso você já aprendeu nas lições anteriores. Acessibilidade não é um enfeite no final: é fazer o HTML do jeito certo desde o começo.'
                },
                {
                  dica: 'Teste navegar pelo seu site só com o teclado, usando Tab para andar e Enter para ativar. Se você se perder, muita gente também vai se perder.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual destes deixa a página menos acessível?',
              ops: [
                'Um campo de formulário sem label',
                'Uma imagem com alt descritivo',
                'Títulos em ordem: h1, h2, h3'
              ],
              c: 0,
              exp: 'Sem label, quem usa leitor de tela não sabe o que digitar.'
            },
            {
              t: 'escolha',
              p: 'Como o leitor de tela sabe em que língua ler a página?',
              mono: true,
              ops: ['<html lang="pt-BR">', '<meta idioma="br">', '<title>pt-BR</title>'],
              c: 0,
              exp: 'Sem o `lang`, um leitor configurado em inglês pode ler o português com pronúncia de inglês.'
            },
            {
              t: 'escolha',
              p: 'Uma imagem só decorativa, como uma linha ondulada, deve ter:',
              mono: true,
              ops: ['alt=""', 'alt="imagem"', 'nenhum atributo alt'],
              c: 0,
              exp: 'Com `alt` vazio, o leitor de tela pula a imagem. Sem `alt` nenhum, ele pode ler o nome do arquivo.'
            },
            {
              t: 'web',
              p: 'Este código tem dois problemas de acessibilidade. Conserte: a imagem precisa de alt e o campo precisa de label',
              html: `<img src="imagens/logo.png" width="80">
<form>
  <input id="cidade" type="text" placeholder="Sua cidade">
  <button>Buscar</button>
</form>`,
              regras: [
                { sel: 'img', attr: 'alt', msg: 'A imagem ainda está sem `alt`.' },
                {
                  rotulado: '#cidade',
                  msg: 'O campo ainda está sem um `<label>` ligado a ele.'
                }
              ],
              solHtml: `<img src="imagens/logo.png" width="80" alt="Logo do projeto">
<form>
  <label for="cidade">Cidade</label>
  <input id="cidade" type="text" placeholder="Sua cidade">
  <button>Buscar</button>
</form>`,
              dica: 'Acrescente `alt="..."` na imagem e um `<label for="cidade">` antes do campo.',
              exp: 'Duas linhas a mais, e a página passou a funcionar para muito mais gente.',
              conserte: true
            },
            {
              t: 'web',
              conserte: true,
              p: 'Os títulos desta página pulam do h1 direto para o h4. Troque os h4 por h2, mantendo os textos',
              html: `<h1>Posto de saúde da Vila</h1>
<h4>Vacinas</h4>
<p>Campanha da gripe até o dia 30.</p>
<h4>Consultas</h4>
<p>Agende pelo telefone.</p>`,
              regras: [
                { sel: 'h4', nao: true, msg: 'Ainda tem `<h4>` na página.' },
                { sel: 'h2', min: 2, msg: 'Os dois subtítulos precisam ser `<h2>`.' },
                {
                  sel: 'h2',
                  texto: 'Consultas',
                  msg: 'Mantenha o texto "Consultas" no subtítulo.'
                }
              ],
              solHtml: `<h1>Posto de saúde da Vila</h1>
<h2>Vacinas</h2>
<p>Campanha da gripe até o dia 30.</p>
<h2>Consultas</h2>
<p>Agende pelo telefone.</p>`,
              dica: 'Troque nos dois lugares: na abertura e no fechamento de cada título.',
              exp: 'Leitores de tela usam os títulos como índice. Pular níveis faz parecer que falta um pedaço da página.'
            }
          ]
        }
      ]
    }
  ]
});
