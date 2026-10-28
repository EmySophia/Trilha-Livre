/* Trilha Livre · Sites com HTML e CSS · Nível 7: Achando e consertando erros
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'html-css',
  n: 7,
  titulo: 'Achando e consertando erros',
  desc: 'Os erros mais comuns de HTML e CSS e como investigar com o Inspecionar.',
  videos: [
    {
      tipo: 'texto',
      titulo: 'O que são as ferramentas de desenvolvimento do navegador',
      canal: 'MDN',
      url: 'https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools'
    },
    {
      tipo: 'texto',
      titulo: 'Acessar e alterar CSS',
      canal: 'Chrome DevTools',
      url: 'https://developer.chrome.com/docs/devtools/css?hl=pt-br'
    }
  ],
  unidades: [
    {
      id: 'hcu13',
      titulo: 'Depuração',
      conceito: 'F12',
      desc: 'Achar, entender e consertar.',
      licoes: [
        {
          id: 'hcd1',
          titulo: 'Erros comuns de HTML',
          pre: ['hc1l3', 'hc1l4'],
          exs: [
            {
              t: 'texto',
              titulo: 'Quando o HTML quebra',
              blocos: [
                {
                  p: 'O navegador nunca diz que o seu HTML está errado. Ele tenta adivinhar o que você quis escrever e mostra alguma coisa, mesmo que estranha. Por isso, quando a página sai esquisita, o erro costuma estar um pouco antes do lugar onde o problema aparece.'
                },
                {
                  p: 'Esquecer de fechar uma tag faz o resto da página ficar dentro dela. Um `<strong>` sem fechamento deixa tudo em negrito; um `<h1>` sem fechamento transforma o resto em título.'
                },
                {
                  web: `<p>Inscrições <strong>abertas até sexta.</p>
<p>Vagas limitadas.</p>`
                },
                {
                  p: 'No exemplo, faltou o `</strong>`, e o negrito vazou até o parágrafo de baixo.'
                },
                {
                  p: 'Esquecer uma aspa, como em `<a href="contato.html>`, faz o atributo engolir o código seguinte até a próxima aspa, e um pedaço da página some.'
                },
                {
                  p: 'O validador do W3C, em validator.w3.org, lê o seu HTML e aponta cada erro com o número da linha. É gratuito: dá para colar o código ou informar o endereço do site.'
                },
                {
                  dica: 'Indentar o código, com o que está dentro um pouco mais para a direita, faz uma tag sem fechamento saltar aos olhos.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Todo o texto depois de uma palavra ficou em negrito. Qual é o erro mais provável?',
              ops: [
                'Um `<strong>` sem o `</strong>`',
                'Falta o `<!DOCTYPE html>`',
                'A fonte do navegador está errada'
              ],
              c: 0,
              exp: 'O negrito começa onde a tag abre e só termina onde ela fecha.'
            },
            {
              t: 'escolha',
              p: 'O que acontece com `<a href="contato.html>Contato</a>`?',
              ops: [
                'Falta uma aspa, e o atributo engole o código seguinte',
                'Nada, o navegador entende',
                'O link abre numa aba nova'
              ],
              c: 0,
              exp: 'Toda aspa que abre precisa fechar.'
            },
            {
              t: 'web',
              conserte: true,
              p: 'O parágrafo ficou gigante, como se fosse título. Conserte o h1',
              html: `<h1>Mutirão de limpeza
<p>Sábado, às 8h, na praça.</p>`,
              regras: [
                {
                  sel: 'h1 p',
                  nao: true,
                  msg: 'O parágrafo ainda está dentro do título: falta fechar o `h1`.'
                },
                { sel: 'h1', texto: 'Mutirão', msg: 'Mantenha o título "Mutirão de limpeza".' },
                { sel: 'p', texto: 'Sábado', msg: 'Mantenha o parágrafo.' }
              ],
              solHtml: `<h1>Mutirão de limpeza</h1>
<p>Sábado, às 8h, na praça.</p>`,
              dica: 'Onde o título deveria terminar?',
              exp: 'Uma tag fechada no lugar certo, e cada coisa voltou ao seu tamanho.'
            },
            {
              t: 'web',
              conserte: true,
              p: 'O link e o segundo parágrafo sumiram. Ache a aspa que falta e conserte',
              html: `<p>Veja o <a href="https://www.gov.br>Portal do governo</a>.</p>
<p>Serviços públicos num lugar só.</p>`,
              regras: [
                {
                  sel: 'a',
                  attr: 'href',
                  valor: 'https://www.gov.br',
                  msg: 'O link ainda está quebrado. Confira as aspas do `href`.'
                },
                {
                  sel: 'a',
                  texto: 'Portal do governo',
                  msg: 'O texto do link precisa ser "Portal do governo".'
                },
                { sel: 'p', texto: 'Serviços', msg: 'O segundo parágrafo ainda não aparece.' }
              ],
              solHtml: `<p>Veja o <a href="https://www.gov.br">Portal do governo</a>.</p>
<p>Serviços públicos num lugar só.</p>`,
              dica: 'Conte as aspas do `href`: tem uma abrindo, mas cadê a que fecha?',
              exp: 'Um único caractere fazia metade da página sumir.'
            },
            {
              t: 'web',
              conserte: true,
              p: 'O negrito está vazando para o segundo parágrafo. Feche o strong no lugar certo',
              html: `<p>Inscrições <strong>abertas até sexta.</p>
<p>Vagas limitadas.</p>`,
              regras: [
                {
                  sel: 'strong p, p + p strong',
                  nao: true,
                  msg: 'O negrito ainda vaza para o segundo parágrafo: feche o `strong`.'
                },
                {
                  sel: 'p strong',
                  texto: 'abertas',
                  msg: 'Mantenha "abertas até sexta" em negrito.'
                }
              ],
              solHtml: `<p>Inscrições <strong>abertas até sexta</strong>.</p>
<p>Vagas limitadas.</p>`,
              dica: 'O `</strong>` vem antes do `</p>`: primeiro fecha o que abriu por último.',
              exp: 'Tags fecham na ordem inversa em que abriram, como caixas dentro de caixas.'
            }
          ]
        },
        {
          id: 'hcd2',
          titulo: 'Erros comuns de CSS',
          pre: ['hc4l2', 'hc4l4'],
          exs: [
            {
              t: 'texto',
              titulo: 'Quando o CSS não funciona',
              blocos: [
                {
                  p: 'O CSS também não reclama: uma regra com erro é simplesmente ignorada. Quase todo "meu CSS não funciona" cai num destes casos.'
                },
                {
                  p: 'Seletor errado: esquecer o ponto da classe (`titulo` em vez de `.titulo`), escrever a classe diferente no HTML e no CSS (`Titulo` e `titulo` são nomes diferentes) ou pôr o ponto dentro do HTML (`class=".titulo"`).'
                },
                {
                  p: 'Pontuação: sem o ponto e vírgula, a declaração de baixo se junta com a de cima, e as duas param de funcionar. Veja:'
                },
                {
                  web: '<p class="aviso">Atenção: reunião hoje.</p>',
                  css: `.aviso {
  color: white
  background-color: darkred;
  padding: 12px;
}`
                },
                {
                  p: 'Valor ou nome errado: `padding: 20` sem unidade não vale nada, `colr: red` não existe, e `color: verde` também não, porque os nomes das cores são em inglês.'
                },
                {
                  p: 'Outra regra ganhando: uma regra mais específica, ou que vem depois, passa por cima. É a cascata, que você viu no nível de CSS.'
                },
                {
                  dica: 'Quando nada parece funcionar, ponha por um momento `border: 2px solid red;` na regra. Se a borda não aparecer, o problema é o seletor, não a propriedade.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'No exemplo da leitura, por que o aviso ficou sem cor e sem fundo?',
              ops: [
                'Falta o ponto e vírgula depois de `white`',
                'A cor darkred não existe',
                'O padding está errado'
              ],
              c: 0,
              exp: 'O navegador leu `white background-color: darkred` como um valor só, que não existe.'
            },
            {
              t: 'escolha',
              p: 'O HTML tem `class="destaque"` e o CSS tem `destaque { color: red; }`. O que falta?',
              ops: [
                'O ponto antes de destaque, no CSS',
                'Uma cerquilha antes de destaque',
                'Nada, deveria funcionar'
              ],
              c: 0,
              exp: 'Sem o ponto, o CSS procura uma tag chamada destaque, que não existe.'
            },
            {
              t: 'web',
              conserte: true,
              p: 'O título deveria estar verde. Conserte o seletor',
              html: '<h1 class="titulo">Festa da colheita</h1>',
              css: `titulo {
  color: darkgreen;
}
`,
              regras: [
                {
                  sel: 'h1',
                  css: 'color',
                  valor: 'darkgreen',
                  msg: 'O título ainda não está verde. Confira o seletor da regra.'
                }
              ],
              solHtml: '<h1 class="titulo">Festa da colheita</h1>',
              solCss: `.titulo {
  color: darkgreen;
}`,
              dica: 'Classe no CSS começa com quê?',
              exp: 'Um ponto. É o erro de CSS mais comum que existe.'
            },
            {
              t: 'web',
              conserte: true,
              p: 'O aviso deveria ter letra branca e fundo darkred. Conserte a pontuação',
              html: '<p class="aviso">Atenção: reunião hoje às 19h.</p>',
              css: `.aviso {
  color: white
  background-color: darkred;
  padding: 12px;
}
`,
              regras: [
                {
                  sel: '.aviso',
                  css: 'color',
                  valor: 'white',
                  msg: 'A letra ainda não está branca.'
                },
                {
                  sel: '.aviso',
                  css: 'background-color',
                  valor: 'darkred',
                  msg: 'O fundo ainda não está darkred.'
                }
              ],
              solHtml: '<p class="aviso">Atenção: reunião hoje às 19h.</p>',
              solCss: `.aviso {
  color: white;
  background-color: darkred;
  padding: 12px;
}`,
              dica: 'Toda declaração termina com ponto e vírgula. Qual não termina?',
              exp: 'Um ponto e vírgula, e duas propriedades voltaram a funcionar.'
            },
            {
              t: 'web',
              conserte: true,
              p: 'A caixa deveria ter padding de 20px e largura de 300px. Ache os dois erros',
              html: '<div class="caixa">Doações de alimentos aqui.</div>',
              css: `.caixa {
  padding: 20;
  border: 2px solid #1565c0;
  widht: 300px;
}
`,
              regras: [
                {
                  sel: '.caixa',
                  css: 'padding-top',
                  valor: '20px',
                  msg: 'O padding ainda não vale: falta a unidade, `20px`.'
                },
                {
                  sel: '.caixa',
                  css: 'width',
                  valor: '300px',
                  msg: 'A largura ainda não vale. Confira como `width` está escrito.'
                }
              ],
              solHtml: '<div class="caixa">Doações de alimentos aqui.</div>',
              solCss: `.caixa {
  padding: 20px;
  border: 2px solid #1565c0;
  width: 300px;
}`,
              dica: 'Um número sem unidade e uma palavra com letras trocadas.',
              exp: 'Nenhum dos dois erros dava aviso. Por isso vale reler devagar.'
            }
          ]
        },
        {
          id: 'hcd3',
          titulo: 'Investigando com o Inspecionar',
          pre: ['hcd1'],
          exs: [
            {
              t: 'texto',
              titulo: 'As ferramentas de desenvolvedor',
              blocos: [
                {
                  p: 'Todo navegador de computador tem ferramentas de desenvolvedor. Elas mostram a página do jeito que o navegador entendeu, e é ali que os erros aparecem.'
                },
                {
                  passos: [
                    'Abra o seu site no Chrome, no Edge ou no Firefox',
                    'Clique com o botão direito no elemento com problema e escolha Inspecionar, ou aperte F12',
                    'Na aba Elementos, veja onde aquele elemento está de verdade: uma tag sem fechamento aparece engolindo as outras',
                    'Ao lado, no painel Estilos, veja as regras que valem para ele',
                    'Na aba Console, veja os avisos, como arquivos que não foram encontrados'
                  ]
                },
                {
                  p: 'No painel Estilos, uma declaração riscada perdeu para outra regra mais forte. Se, além de riscada, ela tem um sinal de alerta, há um erro de escrita, como um nome ou valor que não existe.'
                },
                {
                  p: 'Dá para mudar o CSS ali mesmo e ver o resultado na hora. Só que essas mudanças somem quando a página recarrega: quando achar o conserto, faça no seu arquivo e salve.'
                },
                {
                  p: 'No Console, um erro 404 quer dizer "não encontrei": o caminho de uma imagem ou do CSS está errado. E o botão de celular, no canto da ferramenta (ou Ctrl+Shift+M no Chrome), mostra o site numa tela do tamanho de um celular.'
                },
                {
                  dica: 'No celular, essas ferramentas só funcionam ligadas a um computador. Se você só tem o celular, vale usar o computador de uma escola, de uma biblioteca ou de um telecentro para investigar.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'No painel Estilos, uma declaração aparece riscada. O que isso quer dizer?',
              ops: [
                'Ela não está valendo: perdeu para outra regra ou tem erro',
                'Ela foi apagada do arquivo',
                'Ela está valendo em dobro'
              ],
              c: 0,
              exp: 'É o jeito mais rápido de descobrir por que um estilo não aparece.'
            },
            {
              t: 'escolha',
              p: 'O Console mostra um erro 404 para imagens/Logo.png. O que verificar?',
              ops: [
                'Se o caminho e o nome do arquivo estão certos, com maiúsculas e minúsculas',
                'Se a internet está rápida',
                'Se o CSS tem ponto e vírgula'
              ],
              c: 0,
              exp: 'Se o arquivo se chama logo.png, com L minúsculo, o servidor não encontra Logo.png.'
            },
            {
              t: 'escolha',
              p: 'Você consertou o CSS direto no Inspecionar e ficou ótimo. E agora?',
              ops: [
                'Repetir o conserto no arquivo e salvar, porque o Inspecionar não guarda',
                'Nada, já ficou salvo no site',
                'Fechar o navegador para gravar'
              ],
              c: 0,
              exp: 'O Inspecionar é um rascunho: ótimo para testar, mas não muda o arquivo.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem a investigação de um erro',
              lines: [
                'Abrir o site no navegador do computador',
                'Clicar com o botão direito no elemento e escolher Inspecionar',
                'Ver as declarações riscadas no painel Estilos',
                'Testar o conserto ali mesmo',
                'Fazer o conserto no arquivo e salvar'
              ],
              exp: 'Investigar, testar e só então mudar o arquivo: é o caminho de quem trabalha com isso todo dia.'
            }
          ]
        }
      ]
    }
  ]
});
