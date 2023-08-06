// Operadores:

// 1- Escreva um programa que calcule a área de um retângulo com base no comprimento e largura fornecidos pelo usuário.
let altura = prompt('Digite a altura do retângulo: ')
let largura = prompt('Digite a largura do retângulo:')

const calculaArea = (altura, largura) =>
  `Valor da área do retângulo: ${altura * largura}m²`

console.log(calculaArea(altura, largura))

// 2- Crie um programa que determine se um número é par ou ímpar utilizando o operador de módulo (%).
let numero = prompt('Digite um número: ')

const verificaNumero = numero =>
  numero % 2 === 0 ? 'O número é par' : 'O número é ímpar'

console.log(verificaNumero(numero))

// 3- Escreva uma função que verifique se uma string fornecida pelo usuário contém a palavra "JavaScript".

let palavra = prompt('Digite uma palavra: ').toLowerCase()
let palavraProcurada = 'Javascript'.toLowerCase()

const comparaPalavras = palavra =>
  palavra === palavraProcurada
    ? "Contém a palavra 'JavaScript'."
    : "Não contém a palavra 'JavaScript'."

console.log(comparaPalavras(palavra))

// 4- Implemente um programa que compare duas strings e determine se elas são iguais, ignorando maiúsculas e minúsculas.
let primeiraPalavra = prompt('Escreva a primeira palavra: ')
let segundaPalavra = prompt('Escreva a segunda palavra: ')

const verificaPalavraIgual = (primeiraPalavra, segundaPalavra) =>
  primeiraPalavra.toLowerCase() === segundaPalavra.toLowerCase()
    ? 'As palavras são iguais.'
    : 'As palavras não iguais.'

console.log(verificaPalavraIgual(primeiraPalavra, segundaPalavra))

// 5- Crie uma função que concatene duas listas (arrays) e retorne a lista resultante.
const primeiraLista = ['abacaxi', 4, true]
const segundaLista = ['março', 26, false, 1995, 'rosa']

const combinaLista = (primeiraLista, segundaLista) =>
  primeiraLista + ',' + segundaLista

console.log(combinaLista(primeiraLista, segundaLista))

// Funções Nativas:

// 6- Escreva um programa que calcule a média dos valores em um array utilizando a função reduce() e length.
const listaDeValores = [6, 3, 1, 4, 5, 17]
const divisor = listaDeValores.length

const calculaMedia =
  listaDeValores.reduce(
    (acumulador, resultadoDaSoma) => acumulador + resultadoDaSoma,
    0
  ) / divisor

console.log(calculaMedia)

// 7- Crie uma função que retorne a data e hora atuais no formato legível: "Dia/Mês/Ano Hora:Minuto:Segundo".
const dataAtualFormatada = () => {
  const dataAtual = new Date()
  const dia = dataAtual.getDate().toString().padStart(2, '0')
  const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0')
  const ano = dataAtual.getFullYear()
  const hora = dataAtual.getHours().toString().padStart(2, '0')
  const minutos = dataAtual.getMinutes().toString().padStart(2, '0')
  const segundos = dataAtual.getSeconds().toString().padStart(2, '0')

  return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`
}

console.log(dataAtualFormatada())

// 8- Implemente um programa que encontre o maior valor em um array usando a função Math.max().

let listaDeNumeros = [56, 12, 48, 96, 23, 15]

const encontraMaiorNumero = listaDeNumeros =>
  listaDeNumeros.reduce(
    (acumulador, valor) => Math.max(acumulador, valor),
    -Infinity
  )

console.log(encontraMaiorNumero(listaDeNumeros))

// 9- Escreva uma função que gere um número inteiro aleatório entre dois valores dados como argumentos.

let valorMinimo = Number(prompt('Digite o valor mínimo: '))
let valorMaximo = Number(prompt('Digite o valor máximo: '))

const geraInteiroAleatorio = (valorMinimo, valorMaximo) =>
  Math.floor(Math.random() * (valorMaximo - valorMinimo)) + valorMinimo

console.log(geraInteiroAleatorio(valorMinimo, valorMaximo))

// 10- Crie um programa que verifique se um número dado pelo usuário é um número primo usando uma função.
let numeroProcurado = prompt('Digite um número: ')

const procuraNumeroPrimo = numeroProcurado => {
  let verificador = 0
  for (count = 1; count <= numeroProcurado; count++) {
    if (numeroProcurado % count === 0) {
      verificador++
    }
  }

  return verificador === 2 || Number(numeroProcurado) === 1
    ? 'Este é um número primo!'
    : 'Este não é um número primo!'
}

console.log(procuraNumeroPrimo(numeroProcurado))

// Coerção e Tipos de Dados:

// 11- Declare uma variável com valor "5" (string) e outra variável com valor 2 (número). Multiplique as duas variáveis e explique o resultado.

// 12- Converta a string "123" em um número inteiro e armazene-o em uma variável.

// 13- Escreva um programa que adicione um número e uma string.

// 14- Explique o resultado e discuta a coerção que ocorre.

// 15- Declare uma variável com o valor null e outra variável com o valor undefined. Verifique se são iguais em valor e tipo.

// 16- Crie um programa que determine se uma variável é do tipo função usando o operador typeof.

// Operadores Matemáticos e Lógicos:

// 18- Escreva um programa que calcule o resultado da expressão: (10 + 5) * 3 / 20.

// 19- Crie uma função que verifique se um número é positivo e ímpar ao mesmo tempo.

// 20- Implemente um programa que determine se um ano fornecido pelo usuário é bissexto ou não, considerando as regras: (a) Anos divisíveis por 4 são bissextos; (b) Anos divisíveis por 100 não são bissextos, a menos que também sejam divisíveis por 400.

// 21- Escreva uma função que determine se uma pessoa tem permissão para entrar em um clube: idade mínima de 18 anos e não estar na lista de membros banidos (use operadores lógicos).

// 22- Crie um programa que simule um sistema de login. Peça ao usuário um nome de usuário e uma senha, e verifique se correspondem aos valores esperados.
