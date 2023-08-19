// Crie uma função que calcule a soma de dois números.
const soma = (numero1, numero2) => numero1 + numero2;

console.log(soma(23, 12));

// Escreva uma função que calcule o produto de três números.
const produtoDe3Numeros = (numero1, numero2, numero3) =>
  numero1 * numero2 * numero3;

console.log(produtoDe3Numeros(4, 8, 2));

// Crie uma função que verifique se um número é par ou ímpar.
const verificaParOuImpar = (numero) =>
  numero % 2 === 0
    ? `${numero} é um número par`
    : `${numero} é um número ímpar`;

console.log(verificaParOuImpar(13));
console.log(verificaParOuImpar(4));

// Escreva uma função que inverta uma string (por exemplo, "hello" se torna "olleh").
const revertePalavra = (palavra) => palavra.split("").reverse().join("");

console.log(revertePalavra("emily"));

// Crie uma função que retorne o maior valor de um array de números.
const numeros = [12, 35, 2, 89, 13, 75, 61, 61, 12, 2];

const maiorNumero = (numeros) => Math.max(...numeros);

console.log(maiorNumero(numeros));

// Escreva uma função que calcule a média de um array de números.
const mediaDosNumeros = (numeros) =>
  numeros.reduce((acumulador, nuemro) => acumulador + nuemro) / 2;

console.log(mediaDosNumeros(numeros));

// Crie uma função que verifique se uma palavra é um palíndromo (lê-se igual de trás para frente).
const verificaPalindromo = (palavra) =>
  palavra === palavra.split("").reverse().join("")
    ? `"${palavra}" é um palíndromo.`
    : `"${palavra}" não é um palíndromo.`;

console.log(verificaPalindromo("ana"));
console.log(verificaPalindromo("carro"));

// Escreva uma função que conte quantas vezes uma determinada letra aparece em uma string.
const contaLetra = (palava, letraProcurada) =>
  palava.split("").filter((letra) => letra === letraProcurada).length;

console.log(contaLetra("carambola", "a"));

// Crie uma função que calcule o fatorial de um número.
const fatorial = (numero) =>
  numero === 0 || numero === 1 ? 1 : numero * fatorial(numero - 1);

console.log(fatorial(4));
console.log(fatorial(8));
console.log(fatorial(7));

// Escreva uma função que converta graus Celsius para Fahrenheit.
const converteTemperatura = (temperatura) => `${(temperatura * 9) / 5 + 32}º`;

console.log(converteTemperatura(32));

// Crie uma função que encontre o valor mínimo e máximo em um array de números.
const maiorEMenorNumero = (numeros) =>
  `Maior: ${Math.max(...numeros)} | Menor: ${Math.min(...numeros)}`;

console.log(maiorEMenorNumero(numeros));

// Escreva uma função que calcule a sequência de Fibonacci até um determinado número de termos.

// Crie uma função que verifique se um número é primo.
const procuraNumeroPrimo = (numero, divisor = 2) => {
  return numero <= 1
    ? "Este não é um número primo!"
    : divisor === numero
    ? "Este é um número primo!"
    : numero % divisor === 0
    ? "Este não é um número primo!"
    : procuraNumeroPrimo(numero, divisor + 1);
};

console.log(procuraNumeroPrimo(1));
console.log(procuraNumeroPrimo(2));
console.log(procuraNumeroPrimo(11));
console.log(procuraNumeroPrimo(4));

// Escreva uma função que remova os elementos duplicados de um array.
const removeNumerosDuplicados = (numeros) =>
  numeros.filter((elemento, indice) => numeros.indexOf(elemento) === indice);

console.log(removeNumerosDuplicados(numeros));

// Crie uma função que ordene um array de números em ordem crescente.

// Escreva uma função que retorne o número de dias entre duas datas.

// Crie uma função que calcule o raio de um círculo com base em sua área.

// Escreva uma função que encontre o segundo maior valor em um array de números.

// Crie uma função que converta um valor em dólares para outra moeda com base em uma taxa de câmbio.

// Escreva uma função que verifique se duas strings são anagramas (contêm as mesmas letras, mas em ordens diferentes).
