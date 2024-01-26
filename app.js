alert('boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo+1)
console.log(numeroSecreto);
let chute;
let tentativas = 1;
// enquanto nao for o n. secreto
while (chute != numeroSecreto) {
    chute =  prompt(`Escola um número entre 1 e ${numeroMaximo}`);
// se o chute for igual a numero secreto
    if(chute == numeroSecreto ) {  
        break;
        } else {
            if (chute > numeroSecreto) {
                alert(`o número secreto é menor que o ${chute}`);
                } else {
                    alert(`o número secreto é maior que o ${chute}`);
                }
            }
            tentativas++;
}

let palavraTentativas = tentativas > 1? 'tentativas' : 'tentativa' 
alert(`isso aí! você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}.`);

// if(tentativas > 1) {
//    alert(`isso aí! você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
   // alert(`isso aí! você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }





   

   
        
           
       
       