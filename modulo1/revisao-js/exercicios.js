// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter((n) => n % 2 === 0);
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const pares = array.filter((n) => n % 2 === 0);
    const paresPotencia = pares.map((n) => n **2);
    return paresPotencia;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0;
    for(let num of array){;
       if(num > maior){;
          maior = num;
       }
    }
    return maior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = 0;
    let menorNumero = 0;
    if (num1 > num2) {
       maiorNumero = num1;
       menorNumero = num2;
    } 
    else {
       maiorNumero = num2;
       menorNumero = num1;
    }
    
    
    if (maiorNumero % menorNumero  === 0) {
       let = maiorDivisivelPorMenor = true;
    } else {
       maiorDivisivelPorMenor = false;
    }
    

    let diferenca = 0;
    if ( num1 - num2 > 0) {
       diferenca = num1 - num2;
    } else if( num2 - num1 > 0) {
       diferenca = num2 - num1;
    }

    let objeto = {maiorNumero:maiorNumero, maiorDivisivelPorMenor:maiorDivisivelPorMenor, diferenca: diferenca};
    return objeto;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const arrayNPares = []
    for (let i = 0; arrayNPares.length < n; i++){
          if(i % 2 === 0){
             arrayNPares.push(i)
          }
    }
       return arrayNPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC){
        return "Equilátero"
     } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
        return "Isósceles"
     } else {
        return "Escaleno"
     }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
        
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`)
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const newObject = {
        ...pessoa,
        nome: "ANÔNIMO",
      }
       return newObject;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    return pessoas.filter((pessoa) => pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60);
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter((pessoa) => pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade > 60);
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
            
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return consultas.sort((a, b) => a.nome.localeCompare(b.nome));
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    return consultas.sort((a, b) => {
        a = a.dataDaConsulta.split("/").reverse().join();
        b = b.dataDaConsulta.split("/").reverse().join();
        return a.localeCompare(b);
     });
}