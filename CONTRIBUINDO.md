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

Cursos de matemática e de ciências levam `linguagem: 'mat'`: funcionam como os de texto, com um ícone de contas na trilha, e usam a resposta numérica e as fórmulas (veja abaixo). O curso Matemática básica é o exemplo.

Cursos de idiomas levam `linguagem: 'en'` e uma configuração `fala` no catálogo, com as vozes do áudio. O Inglês do zero é o exemplo, e a seção [Cursos de idiomas](#cursos-de-idiomas) explica os blocos e exercícios com áudio.

Se um curso precisar de um tipo de exercício novo, abra uma issue antes para combinarmos como fazer.

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

Na saída, aparece a pergunta do `input` seguida do que foi digitado, como num terminal. O programa pode criar e ler arquivos com `open()` e `pathlib`: cada execução começa numa pasta vazia, que some no fim. Exemplos de Python nas leituras rodam no validador; os que usam `input()` precisam de `semTeste: true`.

NumPy e Matplotlib também funcionam: na primeira vez que um código importa uma delas, o app baixa a biblioteca e guarda para as próximas. Os gráficos de `plt.show()` aparecem como imagem embaixo da saída. Num exercício que pede um gráfico, use `grafico: true`: além da saída certa, a correção exige que o código desenhe pelo menos um gráfico.

### Resposta numérica (`numero`)

Para matemática e ciências. A pessoa faz a conta e digita o resultado. O app aceita vírgula ou ponto nos decimais, ponto nos milhares (1.250,50), sinal de menos e frações como 3/4. No celular, uma barra com −, / e vírgula aparece junto do teclado numérico.

```js
{ t: 'numero', p: 'Quanto é 15% de 80?',
  r: 12,                 // a resposta: um número, um texto como '3/4', ou uma expressão {= ...} com vars
  prefixo: 'R$',         // opcional: aparece antes da caixa (R$)
  unidade: 'cm',         // opcional: aparece depois da caixa (cm, m², %, °C...)
  casas: 2,              // opcional: a resposta é arredondada com 2 casas, e vale qualquer valor que arredonde igual
  tol: 0.01,             // opcional: margem de erro (sem casas nem tol, a resposta precisa ser exata)
  fracao: true,          // opcional: exige uma fração irredutível, como 3/4 (r também precisa ser irredutível)
  dica: 'Fica escondida atrás de "Ver uma dica".',
  exp: 'Explicação mostrada depois da resposta.' }
```

Quando a pessoa erra, o app mostra a resposta certa no formato brasileiro (1.250,5). O validador confere se a resposta certa é um número e se ela mesma seria aceita.

### Fórmulas

Em qualquer texto (perguntas, opções, leituras, tabelas e linhas de `ordene` com `plain: true`), o que estiver entre `$$` e `$$` vira uma fórmula: `$$3/4$$` é uma fração empilhada, `$$x^2$$` e `$$2^(n+1)$$` são potências, `$$v_0$$` e `$$H_2O$$` têm índice, `$$sqrt(16)$$` é a raiz, `*` vira ·, `<=` vira ≤, `>=` vira ≥ e `!=` vira ≠. Os parênteses em volta do numerador, do denominador e do expoente somem: `$$(a+b)/2$$`. Para dividir sem empilhar, use ÷. Os `$$` andam sempre em pares, e `R$` sozinho continua sendo dinheiro.

### Gráficos e figuras (`plano`)

O app desenha gráficos no plano cartesiano e figuras de geometria, sem imagens. O mesmo `plano` serve como bloco de uma leitura (`{ plano: { ... } }`) e como campo de qualquer exercício, e aí o desenho aparece embaixo da pergunta:

```js
{ t: 'numero', p: 'Pelo gráfico, qual é o y do vértice?', r: '{K}',
  plano: {
    x: [-6, 6], y: [-10, 10],                        // o pedaço do plano que aparece
    f: ['(x - ({H}))^2 + ({K})'],                    // funções de x: ^ é potência; vale sqrt, abs, log10, sin, PI...
    pontos: [['{H}', '{K}']],                        // [x, y] ou [x, y, 'rótulo']
    alt: 'Parábola com a boca para cima'             // o que um leitor de tela fala
  },
  vars: { H: { de: -3, ate: 3 }, K: { de: -6, ate: 6 } } }
```

- `f` aceita textos ou objetos `{ e: 'x^2', nome: 'f', em: 2, cor: 0 }`: `nome` escreve o nome perto do fim da curva (ou no x de `em`), e `cor` (0, 1 ou 2) deixa duas curvas da mesma cor, como as duas metades de uma figura. Sem `cor`, cada curva ganha uma cor. `-x^2` é o oposto de x², como na matemática.
- `circulos: [{ centro: [2, 0], raio: 2 }]` desenha circunferências.
- `segmentos: [{ de: [0, 0], ate: [3, 4], rotulo: 'd = 5', tracejado: true }]` liga dois pontos.
- `poligonos: [{ pts: [[0, 0], [4, 0], [4, 3]], lados: ['4', '3', '5'], vertices: ['α'], reto: 1 }]` desenha um polígono. Os rótulos dos lados ficam do lado de fora (o lado 0 vai do ponto 0 ao ponto 1, e assim por diante), e `reto` marca o ângulo reto no vértice dessa posição.
- `eixos: false` tira os eixos e a grade, e usa a mesma escala na horizontal e na vertical: é o jeito de fazer figuras de geometria sem distorcer.

Os valores sorteados em `vars` funcionam dentro do `plano`, como no exemplo. Escolha `x` e `y` para que o que importa caia sobre a grade: o app escolhe o espaço entre as marcas (0,5, 1, 2, 5, 10...) pelo tamanho do pedaço e, quando as marcas vão de 2 em 2 ou de 5 em 5, põe linhas finas de 1 em 1 se couber. Num gráfico normal, a escala de x e a de y podem ser diferentes; para um círculo ficar redondo, use faixas na proporção de 4 para 3, como `x: [-4, 4], y: [-3, 3]`. O validador avisa sobre funções com erro de escrita ou que não aparecem no pedaço escolhido.

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

## Exercícios que mudam (`vars`)

Um exercício com `vars` ganha valores sorteados cada vez que aparece. Assim, a pessoa pratica de novo sem decorar a resposta, e no teste da unidade os números são outros:

```js
{ t: 'codigo', p: 'Mostre a tabuada do {N}',
  start: 'n = {N}\n',
  sol: 'n = {N}\nfor i in range(1, 11):\n    print(f"{n} x {i} = {n * i}")',
  vars: { N: { de: 2, ate: 9 } } }
```

| Forma | Sorteia |
|---|---|
| `{ de: 2, ate: 9 }` | um inteiro de 2 a 9 |
| `{ de: 0.5, ate: 3, passo: 0.5 }` | de 0.5 a 3, de meio em meio |
| `['Ana', 'Bia', 'Caio']` | um item da lista (pode ser um texto com código, como `'[3, 8, 5]'`) |

Nos textos do exercício (`p`, `start`, `sol`, `ops`, `bank`, `c`, `lines`, `entrada`, `dica`, `exp` e outros), `{N}` vira o valor sorteado e `{= expressão}` é calculada em JavaScript com as variáveis, como `{= A + B }`. Nas expressões dá para usar `fix(x, casas)`, que fixa as casas decimais, `br(x)` ou `br(x, casas)`, que escreve o número do jeito brasileiro (1.250,5), `pyf(x)`, que mostra um número como o Python mostra um float (3 vira 3.0), `mdc(a, b)`, `mmc(a, b)`, `fr(n, d)`, que dá a fração irredutível como texto ("3/4"), `sn(n)`, que põe o sinal na frente ("+ 5", "- 5"), `cf(a, 'x')` e `tm(a, 'x')`, que escrevem um termo sem o coeficiente 1 ("x", "-x", "+ 3x"), `pr(n)`, que põe um número negativo entre parênteses ("(-5)"), e tudo do `Math`. Para recusar alguns sorteios, escreva a condição em `se`, em JavaScript: `se: 'A !== B'`.

Use nomes de variáveis em MAIÚSCULAS. Assim eles não se confundem com as chaves das f-strings do Python nem dos textos do JavaScript: `{N}` é trocado, e `{n}` fica como está. Num exercício `codigo` com `vars`, não escreva `saida`: a saída esperada é a da `sol`, rodada na hora com os mesmos valores. Numa `escolha`, a resposta certa também pode depender dos valores, como `ops: ['{= A * B }', '{= A + B }', '{= A * B + 1 }']`. Se um sorteio deixar duas opções iguais, o app sorteia de novo. O validador confere 12 sorteios de cada exercício.

## Cursos de idiomas

Nos cursos de idiomas, as frases em inglês têm áudio. As gravações são feitas antes, com uma voz aberta (o [Kokoro](https://github.com/thewh1teagle/kokoro-onnx), licença Apache 2.0), e ficam em `audio/<curso>/`. O nome de cada arquivo sai do próprio texto, então a mesma frase em lições diferentes usa o mesmo arquivo. Sem o arquivo, o app usa a voz do navegador, que funciona, mas é pior.

### No catálogo

```js
{ id: 'ingles', area: 'idiomas', sigla: 'EN', linguagem: 'en', titulo: 'Inglês do zero', desc: '...',
  fala: {
    sotaques: { us: 'Americano', uk: 'Britânico' },                                // aparece na trilha para a pessoa escolher
    vozes: { us: ['af_heart', 'am_michael'], uk: ['bf_emma', 'bm_george'] },        // feminina e masculina de cada sotaque
    lang: { us: 'en-US', uk: 'en-GB' },                                            // voz do navegador, se faltar o arquivo
    kokoro: { us: 'en-us', uk: 'en-gb' }                                            // língua para a gravação
  } }
```

### Blocos de leitura com áudio

```js
{ fala: 'How are you?', trad: 'Tudo bem?', nota: 'Uma explicação curta, opcional.' },
{ dialogo: [['Lia', 'Hey! How are you?', 'Oi! Tudo bem?'], ['Sam', 'Good, you?', 'Tudo, e você?']], titulo: 'No corredor' },
{ vocab: [['Hi!', 'Oi!', 'o mais comum'], ['Hey!', 'E aí!']] },                 // lista com botão de ouvir em cada linha
{ pares: [['ship', 'sheep', 'navio × ovelha']] },                               // pares de palavras para comparar o som
{ pares: [['water', 'water', 'o t']], sotaques: ['us', 'uk'] }                  // cada lado num sotaque fixo
```

No diálogo, a primeira pessoa que fala usa a voz feminina e a segunda, a masculina. Para trocar, use `vozes: ['m', 'f']`. Num bloco `fala`, `voz: 'm'` escolhe a voz masculina, e `sotaque: 'uk'` fixa o sotaque.

Em qualquer texto (parágrafos, dicas, tabelas, perguntas, opções e explicações), `((How are you?))` vira um trecho em inglês com botão de ouvir, e `**palavra**` fica em negrito. Não coloque `((...))` dentro de parênteses: escreva `como em ((I can swim.)) (sei nadar)`.

### Americano e britânico

`[[apartment|flat]]` mostra a primeira forma no sotaque americano e a segunda no britânico, no texto e no áudio. Use para palavras e grafias que mudam: `[[color|colour]]`, `[[mom|mum]]`, `[[soccer|football]]`. Nas respostas, as duas formas são aceitas, misturadas ou não.

### Exercícios

```js
{ t: 'escreva', p: 'Traduza: "Estou com fome."', r: ["I'm hungry."] },           // a pessoa digita a resposta
{ t: 'escreva', p: 'Escreva o que você ouviu', ouvir: 'See you later!' },         // ditado: sem r, a resposta é o que se ouve
{ t: 'escreva', p: 'Traduza para o português: "I\'m tired."', r: ['Estou cansado.', 'Estou cansada.'], lingua: 'pt' },
{ t: 'monte', p: 'Monte: "De onde você é?"', r: 'Where are you from?', extra: ['is', 'do'] },   // banco de palavras
{ t: 'escolha', p: 'O que você ouviu?', ouvir: 'ship', ops: ['ship', 'sheep', 'shop'], c: 0 }    // qualquer exercício pode ter ouvir
```

- **Na correção de escreva**, maiúsculas, pontuação e acentos não contam, contrações valem como a forma completa (I'm = I am, don't = do not) e um pequeno erro de digitação é aceito com um aviso. Erros que são de gramática, como trocar works por work, não passam por erro de digitação. Use `exato: true` para não aceitar nem o errinho.
- **Respostas alternativas:** `(a|b|c)` aceita qualquer uma das opções, e `(a|)` deixa um trecho opcional: `"(Hi|Hey|Hello)! How are you( doing|)?"`. A primeira forma é a que aparece como resposta certa.
- **No monte**, as palavras da primeira resposta viram fichas, junto com as de `extra`. Confira se as fichas não formam outra frase certa que não está em `r`.
- **Com ouvir**, a frase toca sozinha quando o exercício aparece, e há um botão para ouvir devagar. `voz` e `sotaque` funcionam como nos blocos.

### Áudio

Depois de escrever ou mudar frases, grave o que falta:

```
pip install kokoro-onnx soundfile lameenc
npm run audio
```

Na primeira vez, o modelo da voz (uns 350 MB) é baixado para `ferramentas/.kokoro/`, que não vai para o Git. Depois, só as frases novas são gravadas. `node ferramentas/audio.js` mostra quantas faltam, e `node ferramentas/audio.js --limpar` apaga os arquivos que nenhuma lição usa mais. Se não der para gravar, mande o pull request assim mesmo e avise: quem revisar grava.

**Se a voz pronunciar algo errado**, veja como ela vai falar com `python3 ferramentas/gravar_audio.py --fonemas "My brother lives in London."`, acrescente uma correção na lista `CORRECOES` do `ferramentas/gravar_audio.py` e grave de novo com `python3 ferramentas/gravar_audio.py --refazer "lives in"`. Os casos mais comuns são palavras escritas igual e faladas diferente, como lives (mora × vidas), read (lê × leu) e used to.

## Teste da unidade

Toda unidade com pelo menos 2 lições e 6 exercícios ganha, no fim da trilha, um teste com até 10 perguntas das lições dela, de preferência as que mudam de valores. O teste libera quando a pessoa termina as lições da unidade. Cada pergunta vale uma vez: com 70% de acertos de primeira, a unidade fica dominada. Os erros entram na revisão, como nas lições. Não é preciso escrever nada para ganhar o teste, basta a unidade ter exercícios suficientes.

## Desafios da prática livre

Ficam no `pratica.js` do curso, dentro de `desafios('<id-do-curso>', [ ... ])`. Mesmo formato de um exercício das lições, mais estes campos. Sem `t`, o desafio é de código; com `t: 'web'` ou `t: 'numero'`, é de página ou de resposta numérica. Desafios com `vars` mostram, na lista, os mesmos valores que vão aparecer quando a pessoa abrir:

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
