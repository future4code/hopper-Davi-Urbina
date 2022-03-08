//Exercícios de interpretação
//1 Leia o código abaixo:
//const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }
//a) Explique o que o código faz. Qual o teste que ele realiza? 
//Nesse teste é verificada a divisão do número inserido pelo usuário por 2, se o número for par não haverá resto na divisão, saira a mensagem "Passou no teste", se for impar haverá resto na divisão e saira a mensagem "Não passou no teste".

//b)Para que tipos de números ele imprime no console "Passou no teste"? 
//Números pares
//c) Para que tipos de números a mensagem é "Não passou no teste"? 
//Números ímpares

//2) O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a) Para que serve o código acima?
// Para retornar o preço de acordo com a fruta escolhida
//b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
// O preço da fruta Maçã é, R$2,25
//c)Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
//Ele imprimiria o preço do "default"

//3)
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//     console.log("Esse número passou no teste")
//       let mensagem = "Essa mensagem é secreta!!!"
//   }
  
//   console.log(mensagem)

//a)  O que a primeira linha está fazendo?

//Criando uma variável chamada "numero" que pede ao usuário para digitar o primeiro número e que passa a string para um número.
//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// se for o número 10, imprimirá "Esse número passou no teste", se for -10 irá acontecer um erro, por que não foi definido um else
//c) faltou o else

// if(numero > 0) {
//   console.log("Esse número passou no teste")}
//   else{
//  console.log("Essa mensagem é secreta!!!")
// }



//Exercícios de escrita de código
//1 - Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

//a) Faça um prompt para receber a idade do usuário e guarde em uma variável.

// let idade = prompt("Qual sua idade?")

// //b) Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso.

// let idadeNumero = Number(idade)

// //c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."

// if (idadeNumero >= 18 ) {
//     console.log("Você pode dirigir")
//   } else {
//     console.log("Você não pode dirigir")
//   }

  //2) Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

//   let turno = prompt("Qual turno você estuda?")

//   if (turno === "matutino") {
//     console.log("Bom dia!")
//   } else if (turno === "vespertino"){
//     console.log("Boa tarde!")
//   } else if (turno === "noturno"){
//       console.log("Boa noite!")
//   }

  //3) Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// switch (turno){
//     case 'matutino':
//         console.log('Bom dia!')
//         break
//     case 'vespertino':
//         console.log('Boa tarde!')
//         break
//     case 'noturno':
//         console.log('Boa noite!')
//         break
// }


//4)

// let generoFilme = confirm('O gênero do Filme é fantasia?')
// let precoFilme = confirm('O ingresso custa menos que 15 reais?')

// function vamosVerFilme (param1, param2){

// if (param1 && param2){
//     console.log('Bom filme!:)')
// } else {console.log('Escolha outro estilo :(')}

// }

// vamosVerFilme(generoFilme, precoFilme)
  