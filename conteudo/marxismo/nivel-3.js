/* Trilha Livre · Introdução ao marxismo · Nível 3: Economia: o essencial
   Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). O formato das lições está explicado em CONTRIBUINDO.md. */

nivel({
  curso: 'marxismo',
  n: 3,
  titulo: 'Economia: o essencial',
  desc: 'Os conceitos centrais de O Capital em versão curta. O curso O Capital aprofunda cada um.',
  videos: [
    {
      titulo: 'Curso O Capital, de Marx',
      canal: 'TV Boitempo',
      obs: 'quatro aulas, com Eleutério Prado, Leda Paulani, Marcelo Carcanholo e Jorge Grespan',
      url: 'https://blogdaboitempo.com.br/2017/08/23/boitempo-libera-curso-completo-sobre-o-capital-de-marx-no-youtube/'
    },
    {
      titulo: 'Como cheguei ao marxismo, com a mais-valia explicada',
      canal: 'Jones Manoel',
      obs: 'tem um trecho que explica a mais-valia de um jeito simples',
      url: 'https://www.youtube.com/watch?v=NS7az_aZPec'
    },
    {
      tipo: 'texto',
      titulo: 'Salário, preço e lucro',
      canal: 'Arquivo Marxista na Internet',
      url: 'https://www.marxists.org/portugues/marx/1865/salario/index.htm',
      obs: 'uma palestra de Marx para trabalhadores; ótima introdução'
    },
    {
      tipo: 'texto',
      titulo: 'Trabalho assalariado e capital',
      canal: 'Arquivo Marxista na Internet',
      url: 'https://www.marxists.org/portugues/marx/1849/04/05.htm'
    }
  ],
  unidades: [
    {
      id: 'mxu3',
      titulo: 'Trabalho e exploração',
      conceito: 'mais-valia',
      desc: 'Valor, mais-valia, acumulação e crises.',
      licoes: [
        {
          id: 'mx3l1',
          titulo: 'Mercadoria e valor',
          exs: [
            {
              t: 'texto',
              titulo: 'O que dá valor às coisas',
              blocos: [
                {
                  p: 'No capitalismo, quase tudo o que consumimos é mercadoria: algo produzido para ser vendido. Toda mercadoria tem dois lados. O valor de uso é a utilidade dela: um sapato serve para calçar. O valor de troca é a proporção em que ela se troca por outras: um sapato vale tantos quilos de arroz, ou tantos reais.'
                },
                {
                  p: 'Mas o que torna coisas tão diferentes comparáveis? Marx, seguindo economistas como Adam Smith e David Ricardo, responde: todas são produto de trabalho humano. O valor de uma mercadoria é medido pelo tempo de trabalho socialmente necessário para produzi-la, ou seja, o tempo médio, com as técnicas e a habilidade comuns daquela época.'
                },
                {
                  p: 'Por isso, um sapateiro lento não faz sapatos mais valiosos. E quando surge uma máquina que faz sapatos na metade do tempo, o valor de cada sapato cai.'
                },
                {
                  dica: 'Valor, em Marx, não é o mesmo que preço. Os preços sobem e descem com a oferta e a procura e com outros fatores, mas, para ele, giram em torno do valor ao longo do tempo.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'O que é o valor de uso de uma mercadoria?',
              ops: [
                'A utilidade dela, aquilo para que ela serve',
                'O preço dela na loja',
                'O tempo que levou para ser feita'
              ],
              c: 0,
              exp: 'O tempo de trabalho tem a ver com o valor, não com o valor de uso.'
            },
            {
              t: 'escolha',
              p: 'Para Marx, o que mede o valor de uma mercadoria?',
              ops: [
                'O tempo de trabalho socialmente necessário para produzi-la',
                'O tempo que cada trabalhador levou, mesmo que seja lento',
                'A vontade do comprador'
              ],
              c: 0,
              exp: '"Socialmente necessário" quer dizer o tempo médio, com as técnicas comuns da época.'
            },
            {
              t: 'escolha',
              p: 'Uma máquina nova faz camisetas na metade do tempo. O que acontece com o valor de cada camiseta?',
              ops: ['Cai', 'Sobe', 'Fica igual'],
              c: 0,
              exp: 'Menos trabalho necessário por camiseta, menos valor em cada uma.'
            }
          ]
        },
        {
          id: 'mx3l2',
          titulo: 'Mais-valia',
          exs: [
            {
              t: 'texto',
              titulo: 'De onde vem o lucro',
              blocos: [
                {
                  p: 'Se as mercadorias se trocam pelo seu valor, de onde vem o lucro? Marx encontra a resposta numa mercadoria especial: a força de trabalho, a capacidade de trabalhar que o trabalhador vende ao patrão.'
                },
                {
                  p: 'O valor da força de trabalho é o valor do que o trabalhador precisa para viver e se reproduzir: comida, moradia, transporte, criar os filhos. Esse é, em média, o salário. Mas, uma vez contratado, o trabalhador produz mais valor do que esse.'
                },
                {
                  p: 'Imagine uma jornada de 8 horas. Em 4 horas, o trabalhador já produziu um valor igual ao do seu salário. As outras 4 horas são trabalho excedente, e o valor criado nelas fica com o capitalista. Esse valor a mais é a mais-valia.'
                },
                {
                  p: 'Por isso, para Marx, há exploração mesmo quando o salário é pago direitinho e o contrato é cumprido. Exploração, aqui, não é xingamento: é o nome técnico para a apropriação do trabalho excedente.'
                },
                {
                  dica: 'No exemplo, a taxa de mais-valia é de 100%: 4 horas de trabalho excedente para 4 horas de trabalho necessário. No curso O Capital você faz essas contas com calma.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Qual é a mercadoria especial que, para Marx, cria mais valor do que vale?',
              ops: ['A força de trabalho', 'O dinheiro', 'As máquinas'],
              c: 0,
              exp: 'As máquinas transferem o próprio valor ao produto, mas só o trabalho vivo cria valor novo.'
            },
            {
              t: 'escolha',
              p: 'Numa jornada de 10 horas, o trabalhador produz o valor do salário em 5. O que são as outras 5?',
              ops: [
                'Trabalho excedente, que gera mais-valia',
                'Horas extras pagas',
                'Tempo de descanso'
              ],
              c: 0,
              exp: 'É o trabalho que o capitalista recebe sem pagar um equivalente.'
            },
            {
              t: 'escolha',
              p: 'Para Marx, existe exploração quando o salário é pago corretamente?',
              ops: [
                'Sim: a exploração está na própria relação, no trabalho excedente',
                'Não: só existe quando o patrão descumpre a lei',
                'Só quando o salário é menor que o mínimo'
              ],
              c: 0,
              exp: 'Esse é um dos pontos mais debatidos de toda a teoria, como você verá no nível de críticas.'
            }
          ]
        },
        {
          id: 'mx3l3',
          titulo: 'Acumulação e crises',
          exs: [
            {
              t: 'texto',
              titulo: 'Crescer ou morrer',
              blocos: [
                {
                  p: 'O capitalista não usa a mais-valia só para consumir. A concorrência obriga cada empresa a reinvestir, comprar máquinas melhores e produzir mais barato, ou será engolida pelas outras. Marx chama esse movimento de acumulação de capital.'
                },
                {
                  p: 'Com mais máquinas, cada empresa precisa de menos trabalhadores para produzir o mesmo. Forma-se o que Marx chamou de exército industrial de reserva: uma massa de desempregados e subempregados que pressiona os salários para baixo.'
                },
                {
                  p: 'A acumulação também traz crises. As empresas produzem mais do que o mercado consegue comprar, já que os salários são contidos. E, para Marx, como só o trabalho cria valor e cada vez mais se investe em máquinas, há uma tendência de a taxa de lucro cair, com forças que trabalham em sentido contrário.'
                },
                {
                  p: 'Nas crises, fábricas fecham, gente perde o emprego e capital é destruído. Depois, a acumulação recomeça, com capital mais concentrado em menos mãos.'
                },
                {
                  dica: 'A tendência de queda da taxa de lucro é uma das partes mais discutidas de Marx, até entre marxistas. O curso O Capital mostra os argumentos dos dois lados.'
                }
              ]
            },
            {
              t: 'escolha',
              p: 'Por que o capitalista é obrigado a reinvestir?',
              ops: [
                'Por causa da concorrência: quem não melhora a produção perde para os outros',
                'Por causa de uma lei que obriga',
                'Porque não tem onde gastar o dinheiro'
              ],
              c: 0,
              exp: 'Para Marx, é uma pressão do sistema, não uma escolha pessoal.'
            },
            {
              t: 'escolha',
              p: 'O que é o exército industrial de reserva?',
              ops: [
                'A massa de desempregados e subempregados que pressiona os salários para baixo',
                'Um exército criado pelos industriais',
                'Os estoques guardados para as crises'
              ],
              c: 0,
              exp: 'É formado, em boa parte, pela própria troca de trabalhadores por máquinas.'
            },
            {
              t: 'ordene',
              plain: true,
              p: 'Coloque em ordem o ciclo descrito por Marx',
              lines: [
                'A concorrência força o reinvestimento',
                'As empresas compram mais máquinas',
                'Cresce o desemprego e os salários são contidos',
                'A produção supera o que o mercado consegue comprar',
                'Vem a crise, e o capital se concentra'
              ],
              exp: 'É um resumo bem simplificado. O curso O Capital mostra cada passo.'
            }
          ]
        }
      ]
    }
  ]
});
