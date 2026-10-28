# Como contribuir com o Trilha Livre

Obrigado por ajudar. Você não precisa saber programar o app para contribuir: quase todo o conteúdo fica em arquivos simples dentro da pasta `conteudo`.

## Antes de começar

1. Faça um fork do repositório e crie uma branch para a sua mudança.
2. Edite os arquivos.
3. Rode `npm install` (só na primeira vez) e depois `npm run validar`. O `npm install` baixa o jsdom, que o validador usa para conferir os exercícios de página, e o Pyodide, que roda as soluções em Python.
4. Abra o `index.html` no navegador e faça a lição que você mudou.
5. Abra um pull request explicando o que mudou e por quê.

## Onde fica cada coisa

- `conteudo/catalogo.js` lista as **áreas** e os **cursos**.
- Cada curso tem uma pasta própria, como `conteudo/logica-js/`, com um arquivo por **nível** (`nivel-1.js`, `nivel-2.js`...) e, se tiver, um `pratica.js` com desafios avulsos.
- Dentro de cada nível há uma lista de **unidades**, e cada unidade tem uma lista de **lições**.
- `conteudo/biblioteca.js` tem os **livros** e os **acervos** da aba Livros. Veja a seção [Biblioteca](#biblioteca).

Para acrescentar um nível a um curso, crie o próximo `nivel-N.js` na pasta dele e adicione a tag `<script src="conteudo/<curso>/nivel-N.js"></script>` no `index.html`, logo depois do nível anterior. Adicione também o arquivo na lista `ARQUIVOS` do `sw.js`, para ele funcionar sem internet. O mesmo vale para qualquer arquivo novo de código ou imagem.

## Como criar um curso novo

1. Se o curso ainda não está no catálogo, adicione-o em `conteudo/catalogo.js`, com `id`, `area`, `sigla` (até 3 caracteres), `titulo` e `desc`.
2. Crie a pasta `conteudo/<id-do-curso>/` e o arquivo `nivel-1.js`, começando assim:

```js
nivel({
  curso: 'mat-basica',        // o mesmo id do catálogo
  n: 1,
  titulo: 'Frações',
  desc: 'Partes de um inteiro.',
  videos: [                   // opcional: aulas gratuitas de outros sites sobre o assunto do nível
    { titulo: 'Frações do zero', canal: 'Nome do canal', obs: 'aulas 1 a 5', url: 'https://...' },
    { tipo: 'texto', titulo: 'Um bom artigo', canal: 'Site', url: 'https://...' }
  ],
  unidades: [ /* ... */ ]
});
```

Os `videos` aparecem na trilha, embaixo do título do nível, numa caixa que abre ao tocar. Indique só material gratuito, em português sempre que possível, e diga em `obs` quais aulas assistir. Use `tipo: 'texto'` para leituras.

3. Adicione as tags `<script>` no `index.html` (depois do `catalogo.js`) e os arquivos no `sw.js`.
4. Rode `npm run validar`. Assim que o curso tem um nível, ele deixa de aparecer como "em construção".

Cursos que não são de programação, como os de política, levam `linguagem: 'texto'` no catálogo. Neles, o terminal some, os quadros de texto quebram a linha, o exercício `complete` aparece como "Complete a frase" e o `ordene` como "Coloque em ordem". Os cursos Introdução ao marxismo, O Capital e Leitura guiada de O Capital são bons exemplos.

Os tipos de exercício atuais (escolha, completar, montar, escrever código e montar página) já servem para matemática e idiomas: exercícios de código podem virar contas ou frases para traduzir em escolha e completar. Se um curso precisar de um tipo novo, como áudio para idiomas, abra uma issue antes para combinarmos como fazer.

## Formato de uma lição

```js
{
  id: 'n3l10',               // único em todo o projeto
  titulo: 'Nome curto da lição',
  pre: ['n3l3', 'u4l1'],     // opcional: lições que esta usa como base
  exs: [
    { t: 'texto', ... },     // toda lição começa com uma leitura
    { t: 'escolha', ... },
    { t: 'codigo', ... }
  ]
}
```

O campo `pre` lista até 3 lições do mesmo curso, que vêm antes, e cujo conteúdo esta lição usa. Ninguém fica bloqueado por causa dele: quando a pessoa abre a lição sem ter feito a base, o app avisa e oferece um atalho, e quando ela erra muito, sugere voltar à base e depois traz de volta. Liste só o essencial, normalmente lições de níveis anteriores.

Os ids seguem o padrão `n<nível>l<número>` para lições e `n<nível>u<número>` para unidades. **Nunca mude o id de uma lição que já existe**: o progresso das pessoas é salvo por id.

## Tipos de item

### Leitura (`texto`)

```js
{ t: 'texto', titulo: 'Título da leitura', blocos: [
  { p: 'Um parágrafo. Use `crases` para código no meio do texto.' },
  { code: 'console.log("exemplo");' },              // ganha um botão "Testar no terminal"
  { code: 'escreva("oi")', semTeste: true },        // pseudocódigo ou fórmula: sem o botão
  { passos: ['Primeiro passo', 'Segundo passo'] },  // lista numerada
  { code: 'site/\n└── index.html', lang: 'texto' },  // texto puro: árvores de pastas, por exemplo
  { tabela: { cab: ['Coluna A', 'Coluna B'], linhas: [['a', 'b']] } },
  { tabela: { codigo: [0, 1], cab: ['Atalho', 'É o mesmo que'], linhas: [['x++', 'x = x + 1']] } },
  { fluxo: [                                        // fluxograma simples
    { k: 'ini', s: 'Início' },
    { k: 'acao', s: 'Ler a nota' },
    { k: 'dec', s: 'nota >= 6?', sim: 'Aprovado', nao: 'Reprovado' },
    { k: 'fim', s: 'Fim' }
  ]},
  { dica: 'Uma dica ou erro comum.' },
  // nas leituras guiadas de livros:
  { leia: { titulo: 'Capítulo 4, seção 1', url: 'https://...', obs: 'Curta.' } },  // cartão que abre o texto em outra aba
  { trecho: { onde: 'Seção 1: o vampiro', explica: 'O que o trecho quer dizer, com as suas palavras.' } },
  { perguntas: ['Uma pergunta para pensar sozinho ou discutir em grupo.'] }
]}
```

Os blocos `leia`, `trecho` e `perguntas` foram feitos para acompanhar a leitura de um livro, como no curso Leitura guiada de O Capital. O `leia` aceita também `rotulo`, que troca o texto pequeno de cima ("Para ler agora"). O `perguntas` aceita `titulo` ("Para pensar e conversar", por padrão). No `trecho`, explique com as suas palavras: não copie parágrafos de traduções protegidas por direito autoral.

Nas tabelas, a primeira coluna aparece como código (fonte de largura fixa, sem quebrar a linha) e as outras como texto. Quando outras colunas também forem código, liste as posições em `codigo`, começando do 0.

### Múltipla escolha (`escolha`)

```js
{ t: 'escolha', p: 'O que aparece no console?', code: 'console.log(2 + 3);', mono: true,
  ops: ['5', '2 + 3', '23'], c: 0, exp: 'Explicação mostrada depois da resposta.' }
```

`c` é a posição da resposta certa em `ops` (começa do 0). As opções são embaralhadas na tela. Use `mono: true` quando as opções forem código ou saída do console.

### Completar o código (`complete`)

```js
{ t: 'complete', p: 'Complete para mostrar 20', code: 'console.log(10 ___ 2);',
  bank: ['*', '+', 'x'], c: ['*'], exp: '...' }
```

Cada `___` é uma lacuna. `c` tem uma resposta por lacuna, na ordem, e todas precisam estar em `bank`.

### Montar o programa (`ordene`)

```js
{ t: 'ordene', p: 'Monte o programa', lines: ['let x = 1;', 'x++;', 'console.log(x);'], exp: '...' }
```

Escreva as linhas **na ordem certa**: o app embaralha. Cuidado para não existir outra ordem que também funcione. Use `plain: true` quando as linhas forem texto comum, e não código.

### Escrever código (`codigo`)

```js
{ t: 'codigo', p: 'Mostre a soma de 2 e 3',
  start: '// código que já aparece no editor\n',
  saida: '5',                         // o que o console deve mostrar (várias linhas com \n)
  dica: 'Uma pista.',
  sol: 'console.log(2 + 3);',         // aparece depois de duas tentativas erradas
  exp: 'Explicação mostrada quando o aluno acerta.' }
```

A correção compara a saída do console com `saida`. Listas e objetos aparecem no formato JSON, como `[1,2,3]`. O validador roda a `sol` e confere se ela produz exatamente a `saida`. Ele também avisa se o código de `start` já passasse sem o aluno fazer nada.

**Em Python** (cursos com `linguagem: 'py'`), o mesmo formato vale, com `print` no lugar do `console.log`. O código roda no Pyodide, o Python de verdade compilado para o navegador, que o app baixa na primeira vez que alguém roda Python. Listas e dicionários aparecem como o Python mostra, como `[1, 2, 3]`. Para programas com `input()`, liste o que será digitado em `entrada`:

```js
{ t: 'codigo', p: 'Peça o nome e cumprimente',
  start: '# seu código\n',
  entrada: ['Maria'],                 // um texto para cada input(), na ordem
  saida: 'Qual é o seu nome? Maria\nOlá, Maria!',
  sol: 'nome = input("Qual é o seu nome? ")\nprint(f"Olá, {nome}!")' }
```

Na saída, aparece a pergunta do `input` seguida do que foi digitado, como num terminal. O programa pode criar e ler arquivos com `open()`: eles ficam numa memória temporária durante a execução. Exemplos de Python nas leituras rodam no validador; os que usam `input()` ou bibliotecas de fora, como NumPy, precisam de `semTeste: true`.

### Digitar um comando (`comando`)

Para cursos de terminal, como o de Git (`linguagem: 'shell'`). A pessoa digita o comando num terminal simulado:

```js
{ t: 'comando', p: 'Faça o commit com uma mensagem entre aspas',
  pasta: '~/meu-site',                       // aparece antes do $
  antes: ['$ git add .'],                    // linhas que já estão no terminal (com "$ " são comandos)
  sol: 'git commit -m "Primeira versão"',    // o comando certo, mostrado quando a pessoa erra
  aceita: ['/^git commit -m "[^"]+"$/'],     // outras formas certas; entre barras, uma expressão regular
  saida: '[main a1b2c3d] {msg}',             // o que o terminal responde quando acerta; {msg} vira a mensagem digitada
  dica: 'git commit -m "sua mensagem"',      // fica escondida atrás de "Ver uma dica"
  exp: 'Explicação.' }
```

Espaços repetidos não importam, e aspas simples, aspas curvas e o travessão que o celular coloca no lugar de `--` são aceitos.

### Montar uma página (`web`)

Usado no curso de HTML e CSS. O aluno escreve HTML (e, se o exercício tiver, CSS numa segunda aba), vê o resultado ao vivo e o app confere a página com regras.

```js
{ t: 'web', p: 'Deixe o título com a cor darkblue',
  html: '<h1>Clube de leitura</h1>',   // código inicial do HTML
  css: '',                              // tem a chave css? então aparece a aba CSS
  regras: [
    { sel: 'h1', css: 'color', valor: 'darkblue', msg: 'O título ainda não está darkblue.' }
  ],
  solHtml: '<h1>Clube de leitura</h1>',
  solCss: 'h1 { color: darkblue; }',
  dica: 'Uma pista.', exp: 'Explicação mostrada quando o aluno acerta.' }
```

Cada regra descreve uma coisa que a página precisa ter, e o `msg` é o que o aluno lê quando ela falta:

| Regra | Confere |
|---|---|
| `{ sel: 'h1' }` | existe um elemento com esse seletor |
| `{ sel: 'h1', texto: 'Olá' }` | algum deles contém esse texto (sem diferenciar maiúsculas) |
| `{ sel: 'li', conta: 3 }` ou `min: 3` | exatamente 3, ou pelo menos 3 |
| `{ sel: 'img', attr: 'alt' }` | algum tem o atributo preenchido (com `valor` exato ou `contem` um trecho) |
| `{ sel: 'h1', css: 'color', valor: 'red' }` | o estilo calculado bate (qualquer forma de escrever a cor vale) |
| `{ sel: '.capa', css: 'background-image', contem: 'horta.jpg' }` | o estilo calculado contém esse trecho |
| `{ sel: '.cartao', css: 'box-shadow', diferente: 'none' }` | o estilo calculado não é esse valor |
| `{ regra: 'a:hover', prop: 'color' }` | o CSS tem uma regra com esse seletor (ou terminando nele) e essa propriedade; com `contem`, o valor escrito contém o trecho |
| `{ regra: '.grade', prop: 'grid-template-columns', media: '700px' }` | a regra está dentro de um `@media` que menciona esse trecho |
| `{ sel: 'input', dentro: 'form' }` | algum está dentro de outro elemento |
| `{ sel: 'font', nao: true }` | não existe nenhum |
| `{ rotulado: 'input', todos: true }` | os campos têm `label` ligado (sem `todos`, basta um) |
| `{ sel: '.grade', colunas: 2 }` ou `colunasMin: 2` | a grade tem 2 colunas, ou pelo menos 2 |
| `{ titulo: 'Receitas' }` | o `<title>` contém esse texto |

Para conferir espaçamentos e bordas, use as propriedades de um lado só, como `padding-top`, `margin-bottom`, `border-top-width`, `border-top-style` e `border-top-color`. Para `gap` e `border-radius`, a propriedade inteira funciona. Escreva mensagens que digam o que fazer, não só o que está errado.

Use `css` (o estilo calculado) quando qualquer jeito certo de escrever deve valer. Use `regra` quando o que importa é o jeito de escrever, como estados (`:hover`, `:focus-visible`), unidades (`rem`, `vh`), variáveis (`var(--cor)`) ou regras dentro de `@media`, que o estilo calculado não mostra.

**Consertar.** Com `conserte: true`, o exercício aparece como "Conserte a página": o código inicial vem com erros, e as regras descrevem a página já consertada. O validador confere que o código inicial falha em pelo menos uma regra.

**Imagens.** Os exercícios usam as imagens da pasta `imagens/`, sempre com o caminho `imagens/nome.jpg`. O validador confere se cada imagem citada existe. Só acrescente imagens feitas por você ou com licença livre compatível, e mantenha os arquivos leves (de preferência abaixo de 60 KB).

Nas leituras, o bloco `{ web: '<h1>Oi</h1>', css: 'h1 { color: red; }' }` mostra o código e a página pronta lado a lado. Blocos de código de outra linguagem levam `lang`: `{ code: 'p { color: red; }', lang: 'css' }`. Em exercícios, o campo `lang` também colore o código.

**Projetos.** Um item `web` com `projeto: { id: 'cartao', titulo: 'Cartão de visita' }` guarda o código do aluno quando ele acerta numa lição. Os projetos guardados aparecem na aba Perfil, em "Meus projetos", e em qualquer leitura que tenha o bloco `{ projetos: true }`. Nos dois lugares, o aluno pode baixar um `index.html` completo, com o CSS dentro de uma tag `style`, ou copiar o código. O `id` precisa ser único no curso: um projeto feito de novo substitui a versão anterior.

Para um site com várias páginas, cada etapa usa o mesmo `id` e diz qual arquivo ela monta: `projeto: { id: 'biblioteca', titulo: 'Site da biblioteca', arquivo: 'atividades.html', herdaCss: true }`. Com `herdaCss`, a aba CSS já começa com o CSS que a pessoa escreveu na etapa anterior, porque o site tem um `estilo.css` só. O app junta as páginas, o `estilo.css` e as imagens usadas num arquivo .zip para baixar.

## Desafios da prática livre

Ficam no `pratica.js` do curso, dentro de `desafios('<id-do-curso>', [ ... ])`. Mesmo formato de um item `codigo` (ou de um item `web`, com `t: 'web'`), mais estes campos:

```js
{ id: 'p-nome-curto', dif: 'facil', titulo: 'Nome do desafio', temas: ['laços', 'textos'], p: '...', start: '...', saida: '...', dica: '...', sol: '...', exp: '...' }
```

`dif` pode ser `'facil'`, `'medio'` ou `'dificil'`.

## Biblioteca

A aba Livros mostra livros que dá para ler **de graça e de forma legal**. O app não guarda os textos: cada livro aponta para o site de origem. Os livros ficam em `conteudo/biblioteca.js`:

```js
livros([
  { id: 'manifesto', titulo: 'Manifesto do Partido Comunista', autor: 'Karl Marx e Friedrich Engels', ano: 1848,
    estante: 'classicos',          // uma das estantes de estantes([...])
    comece: true,                  // opcional: mostra a etiqueta "Bom para começar"
    cursos: ['marxismo'],          // opcional: cursos do app que estudam o livro
    obs: 'em inglês',              // opcional: aparece ao lado do autor (idioma, licença...)
    desc: 'Uma ou duas frases sobre o livro.',
    links: [{ rotulo: 'Ler', url: 'https://...' }] }
]);
```

Para autores com muitos textos, use `colecao: true` e aponte para a página do autor no acervo. Os acervos (sites e aplicativos com muitos livros) ficam em `acervos([...])`, com `id`, `nome`, `desc` e, se houver, `url`.

Só entram:

- obras em **domínio público** (no Brasil, em geral, 70 anos depois da morte do autor, contados a partir de 1º de janeiro do ano seguinte) ou que o próprio site publica para leitura gratuita, com permissão do autor ou da editora, como o Arquivo Marxista na Internet, o Projeto Gutenberg e os livros com licença aberta;
- links que você abriu e conferiu.

Nunca adicione links para PDFs piratas, nem para cópias de livros que a editora vende, mesmo que estejam "por aí" na internet. O id de um livro também não deve mudar depois de publicado: a estante de cada pessoa é guardada por id.

## Como escrever bem

- Escreva como quem explica para um amigo: frases curtas, voz ativa, palavras do dia a dia.
- Explique o porquê, não só o como.
- Use exemplos com cara de Brasil: nomes, cidades, dinheiro em reais, situações do cotidiano.
- Uma lição boa tem uma leitura curta e de 3 a 6 exercícios, indo do mais fácil ao mais difícil.
- Toda resposta errada deve ensinar algo: capriche no `exp`.
- Não use dados pessoais reais em exemplos (CPFs, telefones, endereços).
- Ao falar de dinheiro, juros e rendimentos, deixe claro que os números são exemplos.

## Licença das contribuições

Ao enviar uma contribuição, você concorda que ela seja publicada sob as mesmas licenças do projeto: código sob a GNU AGPL-3.0 ou posterior e conteúdo das lições sob a CC BY-NC-SA 4.0. Só envie material que você mesmo escreveu ou que tenha uma licença compatível, e nunca copie trechos de livros, apostilas ou cursos pagos.
