# Trilha Livre

**Site:** https://emysophia.github.io/Trilha-Livre/ · **Código:** https://github.com/EmySophia/Trilha-Livre

Plataforma gratuita e de código aberto para aprender **programação, matemática, idiomas e política** em português, no estilo dos apps de idiomas: lições curtas, exercícios interativos, sequência de dias e XP. Funciona no navegador, no celular e no computador, sem instalar nada e sem criar conta.

A pessoa escolhe a área e o curso num catálogo. Os cursos prontos são **Lógica de programação com JavaScript** (54 lições), **Sites com HTML e CSS** (42 lições), **Introdução ao marxismo** (25 lições) e **O Capital, de Marx** (24 lições). Os outros (Python, Git e GitHub, Matemática básica, Matemática financeira, Inglês e Espanhol) já aparecem no catálogo como "em construção" e ficam disponíveis assim que ganham lições.

## O que tem

- **Catálogo de cursos por área**, com o progresso de cada curso guardado separado.
- No curso de lógica, **7 níveis, 16 unidades e 54 lições**, do primeiro algoritmo a projetos completos:
  1. Pensamento computacional (algoritmos, decomposição, teste de mesa, fluxogramas e uma ponte com o Portugol)
  2. Fundamentos (variáveis, operadores, decisões, laços)
  3. Dados (textos, conversão de tipos, listas, objetos, matrizes)
  4. Funções de verdade (escopo, arrow functions, map/filter/reduce, recursão)
  5. Algoritmos clássicos (busca, ordenação, pilhas, filas, eficiência)
  6. Depuração (mensagens de erro, investigação, testes, try/catch)
  7. Projetos (troco, parcelas com juros, validação de CPF, jogo da velha, tabela do campeonato e outros)
- Na área de política, **Introdução ao marxismo**, com **7 níveis e 25 lições**: Marx e Engels, o Manifesto, socialismo e comunismo, materialismo histórico, dialética e ideologia, o essencial da economia, Rosa Luxemburgo, Lenin e Gramsci, as experiências do século XX (com as conquistas e os crimes), o marxismo no Brasil, as principais críticas e as respostas marxistas, e um guia de estudo com roteiro de leitura.
- E **O Capital, de Marx**, com **7 níveis e 24 lições**: o Livro I seção por seção (mercadoria, dinheiro, fetichismo, mais-valia, jornada de trabalho, máquinas, salário, acumulação e acumulação primitiva), um panorama dos Livros II e III (circulação, lucro, juros, renda da terra e crises), os debates sobre o livro e um guia de leitura.
- **Leituras** no começo de cada lição, com exemplos que abrem direto no terminal.
- No curso de HTML e CSS, **8 níveis e 42 lições**:
  1. Primeira página (tags, títulos, esqueleto do documento)
  2. Links, imagens e listas (com imagens de verdade nos exercícios, legendas e tabelas)
  3. Formulários e semântica (campos, rótulos, tags com significado e acessibilidade)
  4. CSS: cores e textos (seletores, cascata, unidades como rem e vh, hover e foco, fundos, degradês e sombras)
  5. CSS: caixas e layout (bloco e linha, modelo de caixa, flexbox, grid, posicionamento e páginas responsivas)
  6. Site de verdade (editor de código, pastas e caminhos, várias páginas com um CSS só, prévia no Google e no WhatsApp, Google Fonts, vídeos e mapas)
  7. Achando e consertando erros (os erros mais comuns de HTML e CSS e o Inspecionar do navegador)
  8. Projetos (cartão de visita, página completa e um site de três páginas, que o app entrega num .zip; publicação de graça no GitHub Pages e em outros serviços, ou com domínio próprio)
- **Exercícios** de múltipla escolha, completar código, montar o programa e escrever código de verdade, corrigido na hora, e de **montar e consertar páginas com HTML e CSS vendo o resultado ao vivo**, conferidas automaticamente. Quando a saída do código está errada, o app mostra linha por linha onde ela difere da esperada e dá uma dica.
- **Terminal JavaScript integrado**, que guarda as variáveis entre um comando e outro.
- **Teclado de código no celular**: uma barra com `( ) { } [ ] " ; = =>` e outros símbolos, que aparece em telas de toque.
- **Teste de nivelamento**: quem já sabe o assunto responde até duas perguntas por nível e pula os níveis que domina.
- **Liberdade com rede de segurança**: dá para começar por qualquer nível. Se você abrir uma lição sem ter feito a base dela, ou errar muito, o app sugere a lição certa para reforçar e depois traz você de volta.
- **Revisão espaçada**: cada lição concluída volta depois de 1, 3, 7, 14, 30 e 60 dias. Exercícios errados voltam até você acertar de primeira.
- **Prática livre** com desafios avulsos em três níveis de dificuldade: 17 de lógica e 16 de HTML e CSS.
- **Aulas em vídeo e leituras por nível**: os níveis indicam aulas gratuitas em português (Curso em Vídeo, TV Boitempo, Jones Manoel e outros) e textos livres, como os do Arquivo Marxista na Internet.
- **Projetos guardados**: os projetos do curso de HTML e CSS ficam salvos no app e podem ser baixados prontos para publicar, como um `index.html` ou, no caso do site de várias páginas, um .zip com as páginas, o CSS e as imagens.
- **Conquistas e meta diária** de XP.
- **Funciona sem internet e pode ser instalado** como app no celular e no computador, depois de aberto uma vez no site publicado.
- **Backup do progresso** por código ou arquivo, para trocar de aparelho.
- **Acessibilidade**: leitores de tela, navegação completa por teclado, tamanho do texto ajustável, sons e animações com opção de desligar (e respeito à configuração de "reduzir movimento" do aparelho).

O progresso fica salvo no navegador de cada pessoa (`localStorage`). Não há servidor nem coleta de dados.

## Como rodar

Abra o `index.html` no navegador. Só isso.

O modo offline e a instalação só funcionam quando o site está publicado em HTTPS (como no GitHub Pages) ou rodando em `localhost`. Para testar no seu computador, rode `npx serve` (ou `python3 -m http.server`) dentro da pasta e abra o endereço que aparecer.

Para publicar de graça, use o **GitHub Pages**: no repositório, vá em *Settings → Pages* e escolha a branch principal. O site fica disponível em `https://SEU-USUARIO.github.io/trilha-livre/`.

## Estrutura

```
index.html              página principal; a ordem das tags <script> define a ordem dos níveis
css/estilo.css          visual (cores e fontes ficam nos tokens do :root, com tema claro e escuro)
js/nucleo.js            utilidades, progresso salvo e execução segura do código do aluno
js/efeitos.js           sons, confete, ajustes de exibição e avisos para leitores de tela
js/teclado.js           barra de símbolos para digitar código no celular
js/web.js               exercícios de página: monta, confere e colore HTML e CSS
js/terminal.js          terminal JavaScript integrado
js/pwa.js               instalação como app e registro do modo offline
js/app.js               telas, lições, revisão, nivelamento, prática, perfil e backup
sw.js                   service worker: guarda o app no aparelho para funcionar sem internet
manifest.webmanifest    nome, cores e ícones do app instalado
icones/                 ícones do app
imagens/                ilustrações livres usadas nos exercícios de HTML e CSS
conteudo/_registro.js   funções areas(), cursos(), nivel() e desafios(), que registram o conteúdo
conteudo/catalogo.js    áreas e cursos do catálogo
conteudo/logica-js/     curso de lógica: nivel-1.js ... nivel-7.js e pratica.js
conteudo/html-css/      curso de HTML e CSS: nivel-1.js ... nivel-8.js e pratica.js
conteudo/marxismo/      curso Introdução ao marxismo: nivel-1.js ... nivel-7.js
conteudo/o-capital/     curso O Capital, de Marx: nivel-1.js ... nivel-7.js
ferramentas/validar.js  confere todo o conteúdo e roda todas as soluções
```

O código do aluno roda num Web Worker separado. Se ele demorar mais de 2 segundos (um loop infinito, por exemplo), o worker é encerrado e o aluno recebe uma explicação em português.

## Como contribuir

Contribuições de conteúdo são as mais bem-vindas: lições novas, exercícios, correções de texto e trilhas inteiras. O guia está em [CONTRIBUINDO.md](CONTRIBUINDO.md).

Antes de abrir um pull request, rode:

```
npm run validar
```

Na primeira vez, rode `npm install`: ele baixa o jsdom, que o validador usa para montar e conferir as páginas do curso de HTML e CSS. O app em si não depende de nenhum pacote.

## Licenças

O propósito do Trilha Livre é ser gratuito e continuar gratuito. As licenças foram escolhidas para isso.

- **Código** (pastas `js`, `css`, `ferramentas` e o `index.html`): [GNU AGPL-3.0 ou posterior](LICENSE). Você pode usar, estudar, modificar e redistribuir. Quem distribuir uma versão modificada, ou colocá-la no ar num site, precisa publicar o código-fonte completo dela sob a mesma licença.
- **Conteúdo** das lições e ilustrações (pastas `conteudo` e `imagens`): [Creative Commons BY-NC-SA 4.0](conteudo/LICENCA.md). Você pode copiar, adaptar e compartilhar, desde que dê o crédito, não use para fins comerciais e publique as adaptações com a mesma licença.

Escolas públicas, ONGs, professores, coletivos e estudantes podem usar à vontade. Para outros usos, abra uma issue no repositório.
