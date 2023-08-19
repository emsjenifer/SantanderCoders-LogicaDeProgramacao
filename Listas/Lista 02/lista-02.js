// ### Dicionários (Objetos):

// 1- Crie um objeto que represente um estudante com propriedades como nome, idade, curso e notas. Acesse e exiba essas propriedades.
const estudante = {
  nome: "Emily",
  idade: 28,
  curso: "Sistemas de Informação",
  notas: [80, 78, 95, 67],
};

const informaDadosEstudante = () => {
  console.log(
    `A estudante ${estudante.nome} tem ${estudante.idade}, cursa ${estudante.curso} e tiras as seguintes notas no 1º semestre de 2023:`
  );
  console.log(`Desenvolvimento Web: ${estudante.notas[0]}`);
  console.log(`Engenharia de Software: ${estudante.notas[1]}`);
  console.log(`Análise de Sistemas: ${estudante.notas[2]}`);
  console.log(`Cálculo: ${estudante.notas[3]}`);
};

informaDadosEstudante();

// 2- Crie um dicionário que mapeie nomes de países a suas respectivas capitais. Crie uma função que receba o nome de um país e retorne a capital correspondente.
const paises = {
  Angola: "Luanda",
  Brasil: "Brasília",
  Canadá: "Ottawa",
  Dinamarca: "Roseau",
  Etiópia: "Adis Abeba",
};

let nomePais = prompt("Digite o nome do país: ");
const encontraCapital = (nomePais, paises) =>
  paises.hasOwnProperty(nomePais)
    ? `A capital de ${nomePais} é ${paises[nomePais]}`
    : `Capital não encontrada`;

console.log(encontraCapital(nomePais, paises));

// 3- Crie um dicionário com nomes de frutas e seus preços. Escreva uma função que calcule o preço total de uma cesta de frutas.
const inventarioHortifrut = {
  banana: 12.99,
  maçã: 5.98,
  morango: 6.99,
  pêra: 15.87,
  uva: 8.59,
};

const checkoutHortifrut = () => {
  let decisao = "s";
  let total = 0;
  while (decisao === "s") {
    item = prompt("Digite o item que deseja adicionar no carrinho:");
    peso = prompt("Digite a quantidade em quilos que deseja do produto:");
    total += inventarioHortifrut[item] * peso;

    decisao = prompt("Deseja continuar comprando? (s/n)");
  }

  return `A sua compra ficou em um total de R$ ${total.toFixed(2)}`;
};

console.log(checkoutHortifrut());

// 4- Crie um objeto que represente um livro com propriedades como título, autor, ano de publicação, etc. Crie uma função que imprima as informações do livro em um formato legível.
const codigoLimpo = {
  Título: "Código Limpo: Habilidades Práticas do Agile Software",
  Autor: "Robert C. Martin",
  Genero: "Programação",
  Páginas: 464,
  Editora: "Alta Books",
};

const mostraLivro = () => {
  for (let propriedades in codigoLimpo) {
    console.log(`${propriedades}: ${codigoLimpo[propriedades]}`);
  }
};

mostraLivro();

//### Map:

// 5- Dado um array de números, crie um novo array onde cada número seja elevado ao quadrado.
const numeros = [2, 8, 4, 3, 7];
const numerosAoQuadrado = (numeros) => numeros.map((numero) => numero ** 2);

console.log(numerosAoQuadrado(numeros));

// 6- Dado um array de palavras, crie um novo array com a primeira letra de cada palavra em maiúscula.
const palavras = ["pop", "push", "reduce", "reverse", "slice", "sort"];
const retornaPrimeiraLetra = (palavras) =>
  palavras.map((palavra) => palavra[0].toUpperCase());

console.log(retornaPrimeiraLetra(palavras));

// 7- Crie um array de objetos representando produtos com propriedades como nome, preço e quantidade. Use o método map() para calcular o valor total de cada produto (preço * quantidade).
const produtosNerd = [
  {
    nome: "Camiseta Star Wars",
    preco: 39.99,
    quantidade: 10,
  },
  {
    nome: "Funko Pop Homem de Ferro",
    preco: 15.99,
    quantidade: 5,
  },
  {
    nome: "Caneca Harry Potter",
    preco: 12.49,
    quantidade: 15,
  },
];

const calculaValorTotal = (produtosNerd) =>
  produtosNerd.map(
    (produto) =>
      `O valor total do produto ${produto.nome} é R$ ${(
        produto.preco * produto.quantidade
      ).toFixed(2)}`
  );

console.log(calculaValorTotal(produtosNerd));

// 8- Converta um array de temperaturas em graus Celsius para Fahrenheit usando a fórmula (C * 9/5) + 32.
const temperaturas = [15, 22, 17, 32, 27];
const converteTemperatura = (temperaturas) =>
  temperaturas.map(
    (temperatura) =>
      `${temperatura} graus Celsius equivale a ${
        (temperatura * 9) / 5 + 32
      } graus na escala Fahrenheit`
  );

console.log(converteTemperatura(temperaturas));

//### Reduce:

// 9- Dado um array de números, use o método reduce() para calcular a soma de todos os elementos.
const conjuntoNumeros = [12, 15, 5, 22, 1];
const somaNumeros = (conjuntoNumeros) =>
  conjuntoNumeros.reduce((acumulador, valor) => acumulador + valor, 0);

console.log(somaNumeros(conjuntoNumeros));

// 10- Crie um array de strings e use o método reduce() para concatenar todas as strings em uma única string.
const conjuntoPalavras = ["ol", "df", "aq", "ws"];
const concatenaPalavras = (conjuntoPalavras) =>
  conjuntoPalavras.reduce((acumulador, palavra) => acumulador + palavra);

console.log(concatenaPalavras(conjuntoPalavras));

// 11- Dado um array de objetos representando despesas com propriedades como valor e categoria, use o método reduce() para calcular o total de despesas de uma categoria específica.
const despesasEmpresa = [
  {
    categoria: "Salários",
    valor: [4056, 10256, 8450, 6450],
  },
  {
    categoria: "Desenvolvimento de Software",
    valor: [22000, 57800, 65400, 15600],
  },
  {
    categoria: "Marketing",
    valor: [250, 540, 1200, 780],
  },
  {
    categoria: "Servidores",
    valor: [1230, 4581, 4650, 15602],
  },
];

const somaDespesas = (despesasEmpresa) =>
  despesasEmpresa.map(
    (despesa) =>
      `O total de despesas da categoria ${
        despesa.categoria
      } é de R$ ${despesa.valor.reduce(
        (despesaAccumulator, valor) => despesaAccumulator + valor,
        0
      )}`
  );

console.log(somaDespesas(despesasEmpresa));

// 12- Dado um array de números, use o método reduce() para encontrar o maior número no array.
const algunsNumeros = [98, 56, 75, 35, 65, 45, 78];
const encontraMaiorNumero = (algunsNumeros) =>
  algunsNumeros.reduce(
    (maior, numero) => (numero > maior ? numero : maior),
    algunsNumeros[0]
  );

console.log(encontraMaiorNumero(algunsNumeros));

// ### Laços de Repetiçoes
// 13- Imprima os números de 1 a 10 utilizando um loop for.
const numerosDe1a10 = () => {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
};

numerosDe1a10();

// 14- Imprima os números pares de 1 a 20 utilizando um loop for.
const numerosParesDe1a20 = () => {
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

numerosParesDe1a20();

// 15- Calcule a soma dos números de 1 a 50 utilizando um loop for.
const somaNumeroDe1a50 = () => {
  let soma = 0;

  for (let i = 1; i <= 50; i++) {
    soma += i;
  }

  return soma;
};

console.log(somaNumeroDe1a50());

// 16- Imprima a tabuada do 7 utilizando um loop for.
const tabuadaDo7 = () => {
  for (let i = 1; i <= 7; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
  }
};

tabuadaDo7();

// 17- Escreva um programa que solicite ao usuário um número e imprima a sequência de números de 1 até o número inserido, utilizando um loop for.
const sequencia = () => {
  let numeroEscolhido = prompt("Digite um número:");

  for (let i = 1; i <= numeroEscolhido; i++) {
    console.log(i);
  }
};

sequencia();

// 18- Escreva um programa que solicite ao usuário um número e verifique se ele é primo.
let numeroProcurado = Number(prompt("Digite um número: "));

const procuraNumeroPrimo = (numeroProcurado) => {
  let verificador = 0;
  for (count = 1; count <= Math.sqrt(numeroProcurado); count++) {
    if (numeroProcurado % count === 0) {
      verificador++;
    }
  }

  return verificador !== 1 || numeroProcurado === 1
    ? "Este não é um número primo!"
    : "Este é um número primo!";
};

console.log(procuraNumeroPrimo(numeroProcurado));

// 19- Crie um programa que gere a sequência de Fibonacci até o décimo termo. (Dica: o próximo termo é a soma dos dois termos anteriores)
let fibonacci = [1, 1];

const mostraFibonacci = (fibonacci) => {
  for (let i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  return fibonacci;
};

console.log(mostraFibonacci(fibonacci));

// 20- Crie um programa que solicite ao usuário um número e calcule o fatorial desse número.
let numeroSolicitado = prompt("Digite um número:");

const fatorial = (numeroSolicitado) => {
  let fatorial = 1;
  for (let i = 2; i <= numeroSolicitado; i++) {
    fatorial *= i;
  }
  return fatorial;
};
resultado =
  numeroSolicitado === 0 || numeroSolicitado === 1
    ? 1
    : fatorial(numeroSolicitado);

console.log(resultado);

// 21- Escreva um programa que imprima a seguinte série: 1, 3, 6, 10, 15, 21, ..., onde cada número é a soma dos números naturais consecutivos.
const geraSerie = () => {
  let soma = 0;
  let serie = [];

  for (let i = 1; i <= 6; i++) {
    soma += i;
    serie.push(soma);
  }
  serie.push("...");

  return serie.join(", ");
};
console.log(geraSerie());

// 22- Crie um programa que encontre e imprima todos os números perfeitos de 1 a 1000. Um número perfeito é aquele cuja soma de seus divisores (excluindo ele mesmo) é igual ao próprio número.
const encontraNumeroPerfeito = (numero) => {
  const divisores = [1];

  for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
      divisores.push(i);
    }
  }
  const somaDivisores = divisores.reduce(
    (total, divisor) => total + divisor,
    0
  );
  return somaDivisores === numero;
};

for (let i = 1; i <= 1000; i++) {
  if (encontraNumeroPerfeito(i)) {
    console.log(i);
  }
}

// 23- Crie um jogo em que o computador escolhe um número aleatório entre 1 e 100, e o jogador deve adivinhar qual é esse número. O jogo deve fornecer dicas informando se o número a ser adivinhado é maior ou menor do que o palpite do jogador, e o jogo deve continuar até que o jogador acerte o número.
const jogoNumeroAleatorio = () => {
  const numeroAleatorio = Math.floor(Math.random() * 100 + 1);
  let tentativas = 0;
  let palpite;

  do {
    palpite = parseInt(prompt("Digite seu palpite (entre 1 e 100):"));
    tentativas++;

    if (palpite < numeroAleatorio) {
      console.log("O número é maior. Tente novamente.");
    } else if (palpite > numeroAleatorio) {
      console.log("O número é menor. Tente novamente.");
    } else {
      console.log(
        `Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`
      );
    }
  } while (palpite !== numeroAleatorio);
};

jogoNumeroAleatorio();

// 24- Crie um programa que gere a sequência de números de Fibonacci usando um loop while até que o próximo termo seja maior que 1000.
const calcularFibonacci = () => {
  let primeiroTermo = 1;
  let segundoTermo = 0;
  let proximoTermo = primeiroTermo + segundoTermo;

  while (proximoTermo <= 1000) {
    console.log(proximoTermo);
    primeiroTermo = segundoTermo;
    segundoTermo = proximoTermo;
    proximoTermo = primeiroTermo + segundoTermo;
  }
};

calcularFibonacci();

// 25- Escreva um programa que calcule a média de uma lista de números. O usuário deve fornecer quantos números deseja inserir, e em seguida, inserir os números.
const calculaMediaDeNumeros = () => {
  let quantidade = prompt("Digite a quantidade de números:");
  let lista = [];
  for (let i = 0; i < quantidade; i++) {
    let numeros = Number(prompt(`Digite o ${i + 1}º número:`));
    lista.push(numeros);
  }

  const total = lista.reduce((acumulador, numero) => acumulador + numero, 0);
  return total / quantidade;
};

console.log(calculaMediaDeNumeros());

//26- Escreva um programa que peça ao usuário para adivinhar um número secreto entre 1 e 100. O programa deve fornecer dicas como "maior" ou "menor" até que o jogador adivinhe corretamente.
//exercício repetido

// 27- Crie um programa que gere a sequência de números primos até um número fornecido pelo usuário.
const geraNumerosPrimos = () => {
  let numero = Number(prompt("Digite um número maior que 1: "));
  let i = 2;

  while (i <= numero) {
    let verificador = 0;
    for (let count = 1; count <= Math.sqrt(i); count++) {
      if (i % count === 0) {
        verificador++;
      }
    }

    if (verificador === 1) {
      console.log(i);
    }
    i++;
  }
};

geraNumerosPrimos();

// 28- Escreva um código JavaScript que utilize um laço de repetição while para imprimir os números pares de 0 a 10.
const paresDe0a10 = () => {
  let i = 0;

  while (i <= 10) {
    if (i % 2 === 0) {
      console.log(i);
    }
    i++;
  }
};

paresDe0a10();

// 29- Escreva um código JavaScript que solicite ao usuário um número e utilize um laço de repetição do-while para verificar se o número inserido é uma potência de 2.
const verificaQuadrado = () => {
  let numero = Number(prompt("Digite um número:"));

  do {
    if ((numero & (numero - 1)) === 0) {
      console.log(`${numero} é uma potência de 2.`);
      break;
    } else {
      console.log(`${numero} não é uma potência de 2.`);
      numero = Number(prompt("Digite um número:"));
    }
  } while (true);
};

verificaQuadrado();

// 30- Escreva um código JavaScript que utilize um laço de repetição while para calcular a soma dos números de 1 a 100 e exiba o resultado.
const somaNumeroDe1a100 = () => {
  let soma = 0;
  let i = 1;

  while (i <= 100) {
    soma += i;
    i++;
  }

  return soma;
};

console.log(somaNumeroDe1a100());

// ### Condicionais

// 31- Verificação de vogal ou consoante

// Peça ao usuário para digitar uma letra.
// Use uma estrutura condicional para verificar se a letra é uma vogal ou uma consoante.
// Exiba uma mensagem indicando se a letra é uma vogal ou consoante.

const vogal = ["a", "e", "i", "o", "u"];
const consoante = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const verificaLetra = (vogal, consoante) => {
  let letraProcurada = prompt("Digite uma letra:").toLowerCase();
  if (vogal.map((item) => item === letraProcurada).includes(true)) {
    console.log(`A letra '${letraProcurada}' é uma vogal.`);
  } else if (consoante.map((item) => item === letraProcurada).includes(true)) {
    console.log(`A letra '${letraProcurada}' é uma consoante.`);
  } else {
    console.log(`'${letraProcurada}' não é uma letra.`);
  }
};

verificaLetra(vogal, consoante);

// 32- Calculadora simples

// Peça ao usuário para digitar dois números e uma operação matemática (+, -, *, /).
// Use uma estrutura condicional para realizar a operação selecionada nos números dados.
// Exiba o resultado da operação.

const calculadora = () => {
  let primeiroNumero = Number(prompt("Digite o primeiro número:"));
  let segundoNumero = Number(prompt("Digite o segundo número:"));
  let operador = prompt("Digite um operador (+, -, *, /):");

  switch (operador) {
    case "+":
      console.log(
        `${primeiroNumero} + ${segundoNumero} = ${
          primeiroNumero + segundoNumero
        }`
      );
      break;
    case "-":
      console.log(
        `${primeiroNumero} - ${segundoNumero} = ${
          primeiroNumero - segundoNumero
        }`
      );
      break;
    case "*":
      console.log(
        `${primeiroNumero} x ${segundoNumero} = ${
          primeiroNumero * segundoNumero
        }`
      );
      break;
    case "/":
      console.log(
        `${primeiroNumero} / ${segundoNumero} = ${
          primeiroNumero / segundoNumero
        }`
      );
      break;
    default:
      console.error("Operador inválido.");
  }
};

calculadora();

// 33- Verificação de número primo

// Peça ao usuário para digitar um número.
// Use uma estrutura condicional para verificar se o número é primo (divisível apenas por 1 e por ele mesmo).
// Exiba uma mensagem indicando se o número é primo ou não.

const verifcaNumeroPrimo = () => {
  let numeroProcurado = Number(prompt("Digite um número: "));
  let verificador = 0;

  for (count = 1; count <= Math.sqrt(numeroProcurado); count++) {
    if (numeroProcurado % count === 0) {
      verificador++;
    }
  }

  return verificador !== 1 || numeroProcurado === 1
    ? `${numeroProcurado} não é um número primo.`
    : `${numeroProcurado} é um número primo.`;
};

console.log(verifcaNumeroPrimo());

// 34- Conversão de temperatura

// Peça ao usuário para digitar uma temperatura em graus Celsius.
// Use uma estrutura condicional para converter a temperatura para Fahrenheit ou Kelvin, de acordo com a escolha do usuário.
// Exiba o resultado da conversão.

const mostraTemperatura = () => {
  let temperatura = prompt("Digite a temperatura em graus Celsius:");
  let escolhaDeGrau = prompt(
    "Deseja converter a temperatura para a escala Fahrenheit? (s/n)"
  ).toLowerCase();
  let retornoTemperatura = "";

  escolhaDeGrau === "n"
    ? (retornoTemperatura = `A temperatura é de ${temperatura}º graus Celsius.`)
    : (retornoTemperatura = `A temperatura é de ${
        (temperatura * 9) / 5 + 32
      }º na escala Fahrenheit.`);

  return retornoTemperatura;
};

console.log(mostraTemperatura());

// 35- Dia da semana por extenso

// Peça ao usuário para digitar um número de 1 a 7 representando um dia da semana.
// Use uma estrutura condicional switch para exibir o nome completo do dia da semana correspondente ao número digitado.

const retornaDiaDaSemana = () => {
  let numero = Number(prompt("Escolha um número de 1 a 7:"));

  switch (numero) {
    case 1:
      return `${numero} corresponde a Domingo.`;
    case 2:
      return `${numero} corresponde a Segunda-feira.`;
    case 3:
      return `${numero} corresponde a Terça-feira.`;
    case 4:
      return `${numero} corresponde a Quarta-feira.`;
    case 5:
      return `${numero} corresponde a Quinta-feira.`;
    case 6:
      return `${numero} corresponde a Sexta-feira.`;
    case 7:
      return `${numero} corresponde a Sábado.`;
    default:
      return "Número inválido. Por favor, escolha um número de 1 a 7.";
  }
};

console.log(retornaDiaDaSemana());

// 36- Verificação de ano bissexto

// Peça ao usuário para digitar um ano.
// Use uma estrutura condicional para verificar se o ano é bissexto (divisível por 4 e não por 100, exceto se for divisível por 400).
// Exiba uma mensagem indicando se o ano é bissexto ou não.

const verificaAnoBissexto = () => {
  let anoDigitado = prompt("Digite o ano: ");

  anoDigitado % 4 === 0 || (anoDigitado % 100 === 0 && anoDigitado % 400 === 0)
    ? `O ano de ${anoDigitado} é bissexto`
    : `O ano de ${anoDigitado}  não é bissexto`;
};

console.log(verificaAnoBissexto());

// 37- Contador de vogais e consoantes

// Peça ao usuário para digitar uma palavra ou frase.
// Use uma estrutura condicional para contar o número de vogais e consoantes na entrada.
// Exiba os resultados separadamente.

const contaLetra = (vogal, consoante) => {
  let frase = prompt("Digite uma frase:").toLowerCase();
  let letrasDaFrase = frase.match(/[a-zA-Z]/g);

  let quantidadeVogais = 0;
  let quantidadeConsoantes = 0;

  letrasDaFrase.forEach(function (letra) {
    if (vogal.includes(letra)) {
      quantidadeVogais++;
    }

    if (consoante.includes(letra)) {
      quantidadeConsoantes++;
    }
  });

  return `A frase possui ${quantidadeVogais} vogais e ${quantidadeConsoantes} consoantes.`;
};

console.log(contaLetra(vogal, consoante));

// 38- Verificação de número positivo, negativo ou zero

// Peça ao usuário para digitar um número.
// Use uma estrutura condicional para verificar se o número é positivo, negativo ou zero.
// Exiba uma mensagem indicando a natureza do número.
const verificaNumero = () => {
  let numero = prompt("Digite um número:");

  if (numero > 0) {
    console.log(`${numero} é um número positivo`);
  } else if (numero < 0) {
    console.log(`${numero} é um número negativo`);
  } else {
    console.log(
      `${numero} é um número neutro, não sendo nem positivo nem negativo`
    );
  }
};

verificaNumero();

// 39- Sistema de bilhete de cinema

// Peça ao usuário para digitar sua idade e se tem cartão de estudante (responda com "sim" ou "não").
// Use uma estrutura condicional para determinar o preço do bilhete de cinema de acordo com as regras: menores de 18 anos pagam $5, estudantes pagam $8 e os demais pagam $10.
// Exiba o preço do bilhete.

const verificaValorDoBilhete = () => {
  let idade = prompt("Qual a sua idade?");
  let carteiraDeEstudante = prompt(
    "Possui carteira de estudante? (sim/não)"
  ).toLowerCase();

  if (idade < 18) {
    console.log("O valor do bilhete é R$5,00");
  } else if (idade >= 18) {
    if (carteiraDeEstudante === "sim") {
      console.log("O valor do bilhete é R$8,00");
    } else {
      console.log("O valor do bilhete é R$10,00");
    }
  }
};

verificaValorDoBilhete();

// 40- Verificação de palíndromo

// Peça ao usuário para digitar uma palavra ou frase.
// Use uma estrutura condicional para verificar se a entrada é um palíndromo (lê-se igual de trás para frente e de frente para trás).
// Exiba uma mensagem indicando se a entrada é um palíndromo ou não.

const verificaPalindromo = () => {
  let palavras = prompt("Digite um palavra ou frase:")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "");
  let palavasInvertidas = palavras.split("").reverse().join("");

  if (palavras === palavasInvertidas) {
    return console.log(`"${palavras}" é um palíndromo.`);
  } else {
    return console.log(`"${palavras}" não é um palíndromo.`);
  }
};

verificaPalindromo();
