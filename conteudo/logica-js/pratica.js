/* Trilha Livre · Lógica de programação com JavaScript · Prática livre: desafios avulsos, fora da trilha.
   dif: 'facil', 'medio' ou 'dificil'. Conteúdo sob licença CC BY-NC-SA 4.0 (veja conteudo/LICENCA.md). */

desafios('logica-js', [
  {
    id: 'p-maior3',
    dif: 'facil',
    titulo: 'Maior de três',
    temas: ['decisões'],
    p: 'Escreva maior(a, b, c), que devolve o maior dos três números, sem usar Math.max',
    start: `function maior(a, b, c) {
  
}
console.log(maior(3, 9, 5));
console.log(maior(-1, -7, -3));
console.log(maior(4, 4, 2));
`,
    saida: `9
-1
4`,
    dica: 'Comece supondo que a é o maior e compare com b e com c.',
    sol: `function maior(a, b, c) {
  let m = a;
  if (b > m) m = b;
  if (c > m) m = c;
  return m;
}
console.log(maior(3, 9, 5));
console.log(maior(-1, -7, -3));
console.log(maior(4, 4, 2));`,
    exp: 'Os testes com números negativos e repetidos são casos de borda.'
  },
  {
    id: 'p-inverter',
    dif: 'facil',
    titulo: 'Inverter texto',
    temas: ['textos', 'laços'],
    p: 'Escreva inverter(texto), que devolve o texto de trás para frente',
    start: `function inverter(texto) {
  
}
console.log(inverter("Brasil"));
console.log(inverter("ovo"));
`,
    saida: `lisarB
ovo`,
    dica: 'Percorra o texto do fim para o começo, juntando as letras. Ou use split, reverse e join.',
    sol: `function inverter(texto) {
  let r = "";
  for (let i = texto.length - 1; i >= 0; i--) r += texto[i];
  return r;
}
console.log(inverter("Brasil"));
console.log(inverter("ovo"));`,
    exp: '"ovo" invertido é ele mesmo: um palíndromo.'
  },
  {
    id: 'p-vogais',
    dif: 'facil',
    titulo: 'Contar vogais',
    temas: ['textos', 'laços'],
    p: 'Escreva contarVogais(texto), sem diferenciar maiúsculas de minúsculas',
    start: `function contarVogais(texto) {
  
}
console.log(contarVogais("Abacaxi"));
console.log(contarVogais("ritmo"));
`,
    saida: `4
2`,
    dica: 'Passe o texto para minúsculas e, para cada letra, verifique se "aeiou".includes(letra).',
    sol: `function contarVogais(texto) {
  let n = 0;
  for (const l of texto.toLowerCase()) {
    if ("aeiou".includes(l)) n++;
  }
  return n;
}
console.log(contarVogais("Abacaxi"));
console.log(contarVogais("ritmo"));`,
    exp: 'includes também funciona em textos: "aeiou".includes("e") é true.'
  },
  {
    id: 'p-tabuada',
    dif: 'facil',
    titulo: 'Tabuada de qualquer número',
    temas: ['laços', 'funções'],
    p: 'Escreva tabuada(n), que mostra "n x i = resultado" para i de 1 a 5',
    start: `function tabuada(n) {
  
}
tabuada(6);
`,
    saida: `6 x 1 = 6
6 x 2 = 12
6 x 3 = 18
6 x 4 = 24
6 x 5 = 30`,
    dica: 'Um for de 1 a 5 com console.log dentro da função.',
    sol: `function tabuada(n) {
  for (let i = 1; i <= 5; i++) {
    console.log(\`\${n} x \${i} = \${n * i}\`);
  }
}
tabuada(6);`,
    exp: 'Agora a tabuada serve para qualquer número.'
  },
  {
    id: 'p-fahrenheit',
    dif: 'facil',
    titulo: 'Celsius para Fahrenheit',
    temas: ['contas', 'funções'],
    p: 'Escreva paraF(c), que converte graus Celsius em Fahrenheit (F = C × 9 / 5 + 32)',
    start: `function paraF(c) {
  
}
console.log(paraF(0));
console.log(paraF(100));
console.log(paraF(37));
console.log(paraF(-40));
`,
    saida: `32
212
98.6
-40`,
    dica: 'return c * 9 / 5 + 32;',
    sol: `function paraF(c) {
  return c * 9 / 5 + 32;
}
console.log(paraF(0));
console.log(paraF(100));
console.log(paraF(37));
console.log(paraF(-40));`,
    exp: '-40 é o único ponto onde as duas escalas se encontram.'
  },
  {
    id: 'p-pinpan',
    dif: 'medio',
    titulo: 'Pin Pan',
    temas: ['laços', 'decisões'],
    p: 'De 1 a 15: múltiplos de 3 e 5 mostram "PinPan", só de 3 mostram "Pin", só de 5 mostram "Pan", os outros mostram o número',
    start: '',
    saida: `1
2
Pin
4
Pan
Pin
7
8
Pin
Pan
11
Pin
13
14
PinPan`,
    dica: 'Teste primeiro o caso dos dois (i % 15 === 0). Se testar o 3 primeiro, o 15 nunca chega no PinPan.',
    sol: `for (let i = 1; i <= 15; i++) {
  if (i % 15 === 0) console.log("PinPan");
  else if (i % 3 === 0) console.log("Pin");
  else if (i % 5 === 0) console.log("Pan");
  else console.log(i);
}`,
    exp: 'Aqui ele se chama Pin Pan. O original, em inglês, é o FizzBuzz, um dos desafios mais usados em entrevistas de emprego para programador.'
  },
  {
    id: 'p-primo',
    dif: 'medio',
    titulo: 'Número primo',
    temas: ['laços', 'funções'],
    p: 'Escreva ehPrimo(n): primos são maiores que 1 e só se dividem por 1 e por eles mesmos',
    start: `function ehPrimo(n) {
  
}
console.log(ehPrimo(7));
console.log(ehPrimo(1));
console.log(ehPrimo(21));
console.log(ehPrimo(97));
`,
    saida: `true
false
false
true`,
    dica: 'Se n < 2, não é primo. Depois teste os divisores de 2 até n - 1: se algum dividir sem resto, não é primo.',
    sol: `function ehPrimo(n) {
  if (n < 2) return false;
  for (let d = 2; d * d <= n; d++) {
    if (n % d === 0) return false;
  }
  return true;
}
console.log(ehPrimo(7));
console.log(ehPrimo(1));
console.log(ehPrimo(21));
console.log(ehPrimo(97));`,
    exp: 'Basta testar até a raiz quadrada de n (d * d <= n). Isso deixa o algoritmo bem mais rápido.'
  },
  {
    id: 'p-digitos',
    dif: 'medio',
    titulo: 'Soma dos dígitos',
    temas: ['contas', 'laços'],
    p: 'Escreva somaDigitos(n), que soma os algarismos de um número inteiro positivo',
    start: `function somaDigitos(n) {
  
}
console.log(somaDigitos(1234));
console.log(somaDigitos(9));
console.log(somaDigitos(1000));
`,
    saida: `10
9
1`,
    dica: 'n % 10 dá o último algarismo e Math.floor(n / 10) tira ele. Repita enquanto n > 0.',
    sol: `function somaDigitos(n) {
  let s = 0;
  while (n > 0) {
    s += n % 10;
    n = Math.floor(n / 10);
  }
  return s;
}
console.log(somaDigitos(1234));
console.log(somaDigitos(9));
console.log(somaDigitos(1000));`,
    exp: 'Também daria para transformar em texto e somar cada caractere. Os dois caminhos valem.'
  },
  {
    id: 'p-duplicados',
    dif: 'medio',
    titulo: 'Remover repetidos',
    temas: ['listas'],
    p: 'Escreva semRepetidos(lista), que devolve uma lista nova sem itens repetidos, mantendo a ordem',
    start: `function semRepetidos(lista) {
  
}
console.log(semRepetidos([1, 2, 2, 3, 1]));
console.log(semRepetidos(["a", "a", "a"]));
`,
    saida: `[1,2,3]
["a"]`,
    dica: 'Crie uma lista vazia e só faça push de um item se ele ainda não estiver nela. Ou use [...new Set(lista)].',
    sol: `function semRepetidos(lista) {
  const r = [];
  for (const x of lista) {
    if (!r.includes(x)) r.push(x);
  }
  return r;
}
console.log(semRepetidos([1, 2, 2, 3, 1]));
console.log(semRepetidos(["a", "a", "a"]));`,
    exp: 'Com Set fica numa linha só e é mais rápido em listas grandes.'
  },
  {
    id: 'p-palavras',
    dif: 'medio',
    titulo: 'Contar palavras',
    temas: ['textos'],
    p: 'Escreva contarPalavras(frase), que funciona mesmo com espaços sobrando',
    start: `function contarPalavras(frase) {
  
}
console.log(contarPalavras("o rato roeu a roupa"));
console.log(contarPalavras("  muito   espaço  aqui "));
console.log(contarPalavras(""));
`,
    saida: `5
3
0`,
    dica: 'split(" ") gera itens vazios quando há espaços seguidos. Filtre os vazios antes de contar.',
    sol: `function contarPalavras(frase) {
  return frase.split(" ").filter(p => p !== "").length;
}
console.log(contarPalavras("o rato roeu a roupa"));
console.log(contarPalavras("  muito   espaço  aqui "));
console.log(contarPalavras(""));`,
    exp: 'A frase vazia é o caso de borda que derruba muitas soluções.'
  },
  {
    id: 'p-jokenpo',
    dif: 'medio',
    titulo: 'Pedra, papel e tesoura',
    temas: ['decisões', 'objetos'],
    p: 'Escreva jogada(j1, j2), que devolve "jogador 1", "jogador 2" ou "empate"',
    start: `function jogada(j1, j2) {
  
}
console.log(jogada("pedra", "tesoura"));
console.log(jogada("pedra", "papel"));
console.log(jogada("tesoura", "tesoura"));
`,
    saida: `jogador 1
jogador 2
empate`,
    dica: 'Um objeto que diz quem ganha de quem ajuda: { pedra: "tesoura", papel: "pedra", tesoura: "papel" }.',
    sol: `function jogada(j1, j2) {
  const ganhaDe = { pedra: "tesoura", papel: "pedra", tesoura: "papel" };
  if (j1 === j2) return "empate";
  return ganhaDe[j1] === j2 ? "jogador 1" : "jogador 2";
}
console.log(jogada("pedra", "tesoura"));
console.log(jogada("pedra", "papel"));
console.log(jogada("tesoura", "tesoura"));`,
    exp: 'Guardar regras em dados, e não em uma pilha de ifs, deixa o código fácil de mudar.'
  },
  {
    id: 'p-segundo',
    dif: 'dificil',
    titulo: 'Segundo maior',
    temas: ['listas'],
    p: 'Escreva segundoMaior(lista): o segundo maior valor diferente do maior',
    start: `function segundoMaior(lista) {
  
}
console.log(segundoMaior([5, 9, 3, 9, 7]));
console.log(segundoMaior([1, 2]));
`,
    saida: `7
1`,
    dica: 'Guarde dois valores enquanto percorre: o maior e o segundo. Cuidado com o repetido 9.',
    sol: `function segundoMaior(lista) {
  let m1 = -Infinity, m2 = -Infinity;
  for (const x of lista) {
    if (x > m1) { m2 = m1; m1 = x; }
    else if (x < m1 && x > m2) m2 = x;
  }
  return m2;
}
console.log(segundoMaior([5, 9, 3, 9, 7]));
console.log(segundoMaior([1, 2]));`,
    exp: 'Uma passada só, sem ordenar: O(n).'
  },
  {
    id: 'p-anagrama',
    dif: 'dificil',
    titulo: 'Anagramas',
    temas: ['textos', 'algoritmos'],
    p: 'Escreva ehAnagrama(a, b): as duas palavras têm exatamente as mesmas letras? Ignore maiúsculas',
    start: `function ehAnagrama(a, b) {
  
}
console.log(ehAnagrama("amor", "Roma"));
console.log(ehAnagrama("pato", "topa"));
console.log(ehAnagrama("lua", "sol"));
`,
    saida: `true
true
false`,
    dica: 'Ordene as letras das duas palavras (em minúsculas) e compare os textos.',
    sol: `function ehAnagrama(a, b) {
  const norm = s => s.toLowerCase().split("").sort().join("");
  return norm(a) === norm(b);
}
console.log(ehAnagrama("amor", "Roma"));
console.log(ehAnagrama("pato", "topa"));
console.log(ehAnagrama("lua", "sol"));`,
    exp: 'Outra forma é contar a frequência das letras com um objeto.'
  },
  {
    id: 'p-romano',
    dif: 'dificil',
    titulo: 'Números romanos',
    temas: ['algoritmos', 'listas'],
    p: 'Escreva romano(n), que converte um número de 1 a 3999 para algarismos romanos',
    start: `function romano(n) {
  
}
console.log(romano(4));
console.log(romano(1987));
console.log(romano(2026));
`,
    saida: `IV
MCMLXXXVII
MMXXVI`,
    dica: 'Use uma tabela com os valores em ordem, incluindo os especiais: M 1000, CM 900, D 500, CD 400, C 100, XC 90, L 50, XL 40, X 10, IX 9, V 5, IV 4, I 1. É como o troco do caixa.',
    sol: `function romano(n) {
  const t = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
  let r = "";
  for (const [v, s] of t) {
    while (n >= v) { r += s; n -= v; }
  }
  return r;
}
console.log(romano(4));
console.log(romano(1987));
console.log(romano(2026));`,
    exp: 'O mesmo algoritmo guloso do troco: sempre o maior valor que cabe.'
  },
  {
    id: 'p-mdc',
    dif: 'dificil',
    titulo: 'MDC de Euclides',
    temas: ['algoritmos', 'recursão'],
    p: 'Escreva mdc(a, b), o máximo divisor comum, usando o algoritmo de Euclides',
    start: `function mdc(a, b) {
  
}
console.log(mdc(48, 18));
console.log(mdc(17, 5));
console.log(mdc(100, 75));
`,
    saida: `6
1
25`,
    dica: 'Euclides: mdc(a, b) é igual a mdc(b, a % b). Quando b chegar a 0, a resposta é a.',
    sol: `function mdc(a, b) {
  if (b === 0) return a;
  return mdc(b, a % b);
}
console.log(mdc(48, 18));
console.log(mdc(17, 5));
console.log(mdc(100, 75));`,
    exp: 'Esse algoritmo tem mais de 2.000 anos e ainda é usado, por exemplo, em criptografia.'
  },
  {
    id: 'p-nomes',
    dif: 'dificil',
    titulo: 'Nomes bem escritos',
    temas: ['textos', 'listas'],
    p: 'Escreva capitalizar(nome): cada palavra com a primeira letra maiúscula, mas "da", "de", "do", "das" e "dos" ficam minúsculas',
    start: `function capitalizar(nome) {
  
}
console.log(capitalizar("maria da silva"));
console.log(capitalizar("JOÃO DOS SANTOS"));
console.log(capitalizar("ana de jesus"));
`,
    saida: `Maria da Silva
João dos Santos
Ana de Jesus`,
    dica: 'Passe tudo para minúsculas, separe as palavras, trate cada uma com map e junte de novo.',
    sol: `function capitalizar(nome) {
  const pequenas = ["da", "de", "do", "das", "dos"];
  return nome.toLowerCase().split(" ").map(p => pequenas.includes(p) ? p : p[0].toUpperCase() + p.slice(1)).join(" ");
}
console.log(capitalizar("maria da silva"));
console.log(capitalizar("JOÃO DOS SANTOS"));
console.log(capitalizar("ana de jesus"));`,
    exp: 'Sistemas de cadastro fazem exatamente isso para padronizar nomes.'
  },
  {
    id: 'p-achatar',
    dif: 'dificil',
    titulo: 'Achatar matriz',
    temas: ['matrizes', 'recursão'],
    p: 'Escreva achatar(m), que transforma uma lista de listas em uma lista só, sem usar .flat()',
    start: `function achatar(m) {
  
}
console.log(achatar([[1, 2], [3], [4, 5, 6]]));
console.log(achatar([[], ["a"]]));
`,
    saida: `[1,2,3,4,5,6]
["a"]`,
    dica: 'Dois laços: para cada lista de dentro, faça push de cada item numa lista resultado.',
    sol: `function achatar(m) {
  const r = [];
  for (const linha of m) {
    for (const x of linha) r.push(x);
  }
  return r;
}
console.log(achatar([[1, 2], [3], [4, 5, 6]]));
console.log(achatar([[], ["a"]]));`,
    exp: 'Desafio extra: faça funcionar com listas dentro de listas dentro de listas, usando recursão.'
  }
]);
