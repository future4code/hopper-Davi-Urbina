//1
//a)O que vai ser impresso no console?
//console.log(filme.elenco[0]) = Matheus Nachtergaele
//console.log(filme.elenco[filme.elenco.length - 1]) = Virginia Cavendish
//console.log(filme.transmissoesHoje[2]) = canal: "Globo"
//                                         horário: "14h"

//2
//a)O que vai ser impresso no console?
//console.log(cachorro) = {nome: 'Juca', idade: 3, raca: 'SRD'}
//console.log(gato) = {nome: 'Juba', idade: 3, raca: 'SRD'}
//console.log(tartaruga) = {nome: 'Jubo', idade: 3, raca: 'SRD'}

//b)O que faz a sintaxe dos três pontos antes do nome de um objeto?
// Usa as mesmas informações do objeto chamado

//3
//a)
//console.log(minhaFuncao(pessoa, "backender")) = false
//console.log(minhaFuncao(pessoa, "altura")) = undefined
//b) não houve um objeto criado para "altura"

//1: 1. Resolva os passos a seguir: 
    
 //   a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:

 

    

    const pessoa = {
        nome: "Davi",
        apelidos: ['Chileno', 'Chile', 'Davis']
    }

    function frase(obj){
        
        console.log(`Eu sou ${obj.nome}, mas pode me chamar de: ${obj.apelidos}`)

}
 frase(pessoa)

 //b)Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

 const pessoa2 = {...pessoa,
    apelidos: ['chiquinho', 'zezinho', 'escarpa']
}

frase(pessoa2)

//2
//a)Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

const obj1 = {
    nome: "Tchelo",
    idade: 32,
    profissao: "curandeiro"

}
 const obj2 = {
    nome: "Saracura",
    idade: 103,
    profissao: "atleta"
}

//b)Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

//1 - O valor de nome, O numero de caracteres do valor nome, O valor de idade, O valor de profissão, O numero de caracteres do valor profissão

function tudoJunto(argumento) {
    console.log(`${argumento.nome}, ${argumento.nome.length},${argumento.profissao}, ${argumento.profissao.length}`)
}

tudoJunto(obj1)
tudoJunto(obj2)

//3
//a)Crie uma variável de escopo global que guarde um array vazio chamada carrinho

const carrinho = []

//b)Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)

const fruta1 = {nome: "banana", disponibilidade: true }
const fruta2 = {nome: "açai", disponibilidade: true }
const fruta3 = {nome: "uva", disponibilidade: true }
const todasFrutas = [fruta1, fruta2, fruta3]

//c)Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados. 

function sacolao(param){
    carrinho.push(param)
}

sacolao(todasFrutas)
console.log(carrinho)


//d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 



