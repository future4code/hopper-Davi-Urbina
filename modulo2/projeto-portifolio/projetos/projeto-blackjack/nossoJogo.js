/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    const boasVindas = alert('Boas Vindas ao jogo de Blackjack');
    const inicioRodada = confirm('Quer iniciar uma nova rodada?');
    let cartaUsuario1 = comprarCarta();
    let cartaUsuario2 = comprarCarta();
    let cartaComputador1 = comprarCarta();
    let cartaComputador2 = comprarCarta();
    let cartasUsuario = [cartaUsuario1, cartaUsuario2];
    let cartasComputador = [cartaComputador1, cartaComputador2]
   
   function escreverResultado(usuario, computador){
         console.log('Usuário - cartas: ', usuario[0].texto, usuario[1].texto, '-', usuario[0].valor + usuario[1].valor)
         console.log('Computador - cartas', computador[0].texto, computador[1].texto, '-', computador[0].valor + computador[1].valor)

         if (usuario[0].valor + usuario[1].valor > computador[0].valor + computador[1].valor){
            console.log('O usuário ganhou!')
         } 
         else if(usuario[0].valor + usuario[1].valor < computador[0].valor + computador[1].valor){ 
            console.log('O computador ganhou!')} 
         else {
            console.log('Empate')
         }
      }

   

      if (inicioRodada){
          escreverResultado(cartasUsuario,cartasComputador)
      }
      else {
         console.log('O jogo acabou')
      }



   