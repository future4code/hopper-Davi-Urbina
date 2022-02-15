// Exercicio 1
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2 === true

// let resultado = bool1 && bool2
// console.log("a. ", resultado)

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) 

// resultado = !resultado && (bool1 || bool2) !resultado = true
// console.log("c. ", resultado)

// console.log("d. ", typeof resultado)

// a = false === true && false 
// b = false === true && false && true 
// c = true === true && (true || false)
// d = booleano

// Exercicio 2

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

// Resposta - no console saira a contatenação das duas
// strings que precisam ser transformadas em Number
// para que a soma numérica ocorra; 

// Exercicio 3

// let primeiroNumero = Number(prompt("Digite um número!"))
// let segundoNumero = Number(prompt("Digite outro número!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)


/* Exercicio escrita de código:
1 - a)*/

// let idadeDoUsuario = Number(prompt("Qual sua idade?"))

// // b) 

// let idadeMelhorAmigo = Number(prompt("Qual a idade de seu melhorm amigo?"))

// // c) 

// console.log("Sua idade é maior do que a do seu melhor amigo?", idadeDoUsuario > idadeMelhorAmigo)

// // d)

// let diferencaDeIdade = idadeDoUsuario - idadeMelhorAmigo
// console.log(diferencaDeIdade)

// /* Exercicio 2 escrita de código:*/

// // a)

// let numeroPar = Number(prompt("Insira um número par"))

// // b)

// console.log(numeroPar % 2)

// c) Nenhum número par dividido por 2 terá um "resto"

// d) Terá "resto"

/* Exercicio 3*/

// let idadeEmAnos = Number(prompt("Qual sua idade em anos?"))

// // // a)

// console.log( idadeEmAnos * 12, "meses")

// // b)

// console.log(idadeEmAnos * 365 + 8, "dias")

// // c)

// console.log(idadeEmAnos * 365 * 24, "horas")

/* Exercicio 4*/

let umNumero = Number(prompt("Digite um número par"))
let outroNumero = Number(prompt("Digite outro número múltiplo do primeiro"))

console.log ("O primeiro numero é maior que segundo?", umNumero > outroNumero)
console.log ("O primeiro numero é igual ao segundo?", umNumero === outroNumero)

let divisao1 = umNumero % outroNumero
let resultado = divisao1 === 0

console.log ("O primeiro numero é divisível pelo segundo?", resultado)

let divisao2 = outroNumero % umNumero
let resultado2 = divisao2 !== 0
console.log ("O segundo numero é divisível pelo primeiro?", resultado2)

/*Desafio








