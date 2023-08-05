// Operadores:

// 1- Escreva um programa que calcule a área de um retângulo com base no comprimento e largura fornecidos pelo usuário.
alert('Exercício 01')
let altura = prompt('Digite a altura do retângulo: ')
let largura = prompt('Digite a largura do retângulo:')

let area = altura * largura

alert(`Valor da área do retângulo: ${area}m²`)
console.log(`Valor da área do retângulo: ${area}m²`)

// 2- Crie um programa que determine se um número é par ou ímpar utilizando o operador de módulo (%).
alert('Exercício 02')
let numero = prompt('Digite um número: ')

if (numero % 2 === 0) {
  alert('O número é par')
  console.log('O número é par')
} else {
  alert('O número é ímpar')
  console.log('O número é ímpar')
}

// 3- Escreva uma função que verifique se uma string fornecida pelo usuário contém a palavra "JavaScript".
alert('Exercício 03')

let palavra = prompt('Digite uma palavra: ')
let palavraProcurada = 'Javascript'

if (frase === palavraProcurada) {
  console.log("A frase contém a palavra 'JavaScript'.")
} else {
  console.log("A frase não contém a palavra 'JavaScript'.")
}

// 4- Implemente um programa que compare duas strings e determine se elas são iguais, ignorando maiúsculas e minúsculas.
alert('Exercício 04')

let primeiraPalavra = prompt('Escreva a primeira palavra: ')
let segundaPalavra = prompt('Escreva a segunda palavra: ')

if (primeiraPalavra.toLowerCase() === segundaPalavra.toLowerCase()) {
  alert('As palavras são iguais.')
  console.log('As palavras são iguais.')
} else {
  console.log('As palavras não iguais.')
  alert('As palavras não iguais.')
}

// 5- Crie uma função que concatene duas listas (arrays) e retorne a lista resultante.
alert('Exercício 05')

const primeiraLista = ['abacaxi', 4, true]
const segundaLista = ['março', 26, false, 1995, 'rosa']
const listaCombinada = primeiraLista + ',' + segundaLista

alert(listaCombinada)
console.log(listaCombinada)

// Funções Nativas:

// 6- Escreva um programa que calcule a média dos valores em um array utilizando a função reduce() e length.
alert('Exercício 06')

// 7- Crie uma função que retorne a data e hora atuais no formato legível: "Dia/Mês/Ano Hora:Minuto:Segundo".
alert('Exercício 07')

// 8- Implemente um programa que encontre o maior valor em um array usando a função Math.max().
alert('Exercício 08')

// 9- Escreva uma função que gere um número inteiro aleatório entre dois valores dados como argumentos.
alert('Exercício 09')

// 10- Crie um programa que verifique se um número dado pelo usuário é um número primo usando uma função.
alert('Exercício 10')

// Coerção e Tipos de Dados:

// 11- Declare uma variável com valor "5" (string) e outra variável com valor 2 (número). Multiplique as duas variáveis e explique o resultado.
alert('Exercício 11')

// 12- Converta a string "123" em um número inteiro e armazene-o em uma variável.
alert('Exercício 12')

// 13- Escreva um programa que adicione um número e uma string.
alert('Exercício 13')

// 14- Explique o resultado e discuta a coerção que ocorre.
alert('Exercício 14')

// 15- Declare uma variável com o valor null e outra variável com o valor undefined. Verifique se são iguais em valor e tipo.
alert('Exercício 15')

// 16- Crie um programa que determine se uma variável é do tipo função usando o operador typeof.
alert('Exercício 16')

// Operadores Matemáticos e Lógicos:

// 18- Escreva um programa que calcule o resultado da expressão: (10 + 5) * 3 / 20.
alert('Exercício 18')

// 19- Crie uma função que verifique se um número é positivo e ímpar ao mesmo tempo.
alert('Exercício 19')

// 20- Implemente um programa que determine se um ano fornecido pelo usuário é bissexto ou não, considerando as regras: (a) Anos divisíveis por 4 são bissextos; (b) Anos divisíveis por 100 não são bissextos, a menos que também sejam divisíveis por 400.
alert('Exercício 20')

// 21- Escreva uma função que determine se uma pessoa tem permissão para entrar em um clube: idade mínima de 18 anos e não estar na lista de membros banidos (use operadores lógicos).
alert('Exercício 21')

// 22- Crie um programa que simule um sistema de login. Peça ao usuário um nome de usuário e uma senha, e verifique se correspondem aos valores esperados.
alert('Exercício 22')
