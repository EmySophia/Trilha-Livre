/* Trilha Livre · Matemática do ensino médio · Prática livre: problemas avulsos, fora da trilha.
   dif: 'facil', 'medio' ou 'dificil'. Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). */

desafios('mat-medio', [
  {
    id: 'mm-p-lucro',
    t: 'numero',
    dif: 'medio',
    titulo: 'Preço do lucro máximo',
    temas: ['função quadrática'],
    p: 'Uma lanchonete vende {V} lanches por dia a R$ {P}. Cada R$ 1 de aumento no preço faz perder {K} vendas. Qual preço dá a maior receita?',
    r: '{= (P + V / K) / 2 }',
    prefixo: 'R$',
    casas: 2,
    dica: 'Com x reais de aumento, a receita é $$(P + x)(V − Kx)$$. O máximo é no vértice.',
    exp: 'Aumentar demais o preço espanta clientes; baixar demais não paga a conta. O vértice equilibra os dois.',
    vars: { V: [100, 120, 200], P: [10, 15, 20], K: [4, 5, 8] }
  },
  {
    id: 'mm-p-meia-vida',
    t: 'numero',
    dif: 'medio',
    titulo: 'Carbono-14',
    temas: ['exponencial'],
    p: 'O carbono-14 tem meia-vida de cerca de 5.700 anos. Um fóssil tem $$1/{= 2 ** K }$$ do carbono-14 que tinha quando vivo. Quantos anos ele tem, aproximadamente?',
    r: '{= 5700 * K }',
    unidade: 'anos',
    dica: 'Cada meia-vida corta a quantidade pela metade: quantas metades dão $$1/{= 2 ** K }$$?',
    exp: 'É assim que se datam fósseis e objetos arqueológicos de até uns 50 mil anos.',
    vars: { K: { de: 2, ate: 6 } }
  },
  {
    id: 'mm-p-dobrar',
    t: 'numero',
    dif: 'dificil',
    titulo: 'Em quanto tempo dobra?',
    temas: ['logaritmo'],
    p: 'Um investimento rende {I}% ao mês. Em quantos meses ele dobra? Responda com 1 casa',
    r: '{= Math.log(2) / Math.log(1 + I / 100) }',
    unidade: 'meses',
    casas: 1,
    tol: 0.06,
    dica: '$$(1 + i)^t = 2$$, então $$t = log 2/log(1 + i)$$. Use a calculadora.',
    exp: 'Um atalho conhecido: 72 dividido pela taxa dá uma boa estimativa.',
    vars: { I: [1, 2, 3, 4, 5, 6, 8] }
  },
  {
    id: 'mm-p-sombra',
    t: 'numero',
    dif: 'facil',
    titulo: 'A altura da árvore',
    temas: ['semelhança'],
    p: 'Uma vara de 2 m faz uma sombra de {= br(S) } m. No mesmo momento, uma árvore faz uma sombra de {= br(S * K) } m. Qual é a altura da árvore?',
    r: '{= 2 * K }',
    unidade: 'm',
    dica: 'A razão entre altura e sombra é a mesma nos dois.',
    exp: 'Tales de Mileto teria medido a altura de uma pirâmide do Egito com essa ideia.',
    vars: { S: [0.5, 1, 1.5, 2.5], K: { de: 3, ate: 12 } }
  },
  {
    id: 'mm-p-escada',
    t: 'numero',
    dif: 'medio',
    titulo: 'Degraus em PA',
    temas: ['PA'],
    p: 'Uma escada de {N} degraus tem o primeiro com {A} cm de comprimento, e cada degrau seguinte tem {R} cm a menos. Quantos centímetros de madeira são precisos para todos os degraus?',
    r: '{= (2 * A - (N - 1) * R) * N / 2 }',
    unidade: 'cm',
    dica: 'É a soma de uma PA de razão −{R}.',
    exp: 'Último degrau: {= A - (N - 1) * R } cm.',
    vars: { N: { de: 8, ate: 15 }, A: [100, 120, 150], R: [2, 3, 4] }
  },
  {
    id: 'mm-p-loteria',
    t: 'numero',
    dif: 'dificil',
    titulo: 'Aposta com mais números',
    temas: ['combinações'],
    p: 'Na Mega-Sena, uma aposta com {K} números vale quantas apostas simples de 6 números?',
    r: '{= [1, 7, 28, 84, 210, 462][K - 6] }',
    dica: 'Quantos grupos de 6 dá para formar com {K} números? $$C({K}, 6)$$.',
    exp: 'Por isso a aposta com mais números custa tanto: é o preço de várias apostas simples juntas.',
    vars: { K: { de: 7, ate: 11 } }
  },
  {
    id: 'mm-p-gps',
    t: 'numero',
    dif: 'facil',
    titulo: 'Distância no mapa',
    temas: ['geometria analítica'],
    p: 'Num mapa quadriculado em km, a escola fica em ({X1}, {Y1}) e a casa em ({X2}, {Y2}). Qual é a distância em linha reta, com 2 casas?',
    r: '{= Math.hypot(X2 - X1, Y2 - Y1) }',
    unidade: 'km',
    casas: 2,
    dica: 'Pitágoras com as diferenças das coordenadas.',
    exp: 'Na rua, o caminho é maior: só em linha reta vale a fórmula.',
    vars: {
      X1: { de: 0, ate: 5 },
      Y1: { de: 0, ate: 5 },
      X2: { de: 6, ate: 12 },
      Y2: { de: 4, ate: 12 }
    }
  },
  {
    id: 'mm-p-cramer',
    t: 'numero',
    dif: 'dificil',
    titulo: 'Ingressos',
    temas: ['sistemas'],
    p: 'Um show vendeu {= I + M } ingressos, entre inteiras de R$ {P} e meias de R$ {= P / 2 }, e arrecadou R$ {= br(I * P + M * P / 2) }. Quantas meias-entradas foram vendidas?',
    r: '{M}',
    dica: '$$i + m = {= I + M }$$ e $${P}i + {= P / 2 }m = {= I * P + M * P / 2 }$$.',
    exp: 'Um sistema de duas equações resolve problemas de “dois tipos de coisa”.',
    vars: {
      I: { de: 50, ate: 300, passo: 10 },
      M: { de: 50, ate: 300, passo: 10 },
      P: [40, 60, 80, 100]
    }
  }
]);
