alert("Boas-vindas ao jogo do número secreto")
let numeroSecreto = 5;
let chute;
let tentativas =1;

//enquanto = while
while(chute != numeroSecreto){
        chute = prompt("Escolha um número entre 1 e 10");

    if(chute == numeroSecreto){
        
        break
    } 
    else{
        if(numeroSecreto> chute){
            alert(`O número secreto é maior que ${chute}`);

        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
    } tentativa++;

    if(tentativa>1){
        alert(`Isso ai!! Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else{
        alert(`Isso aí!! Você acertou o número secreto ${numeroSecreto} com ${tentativa} tentativa`);
    }
} 

let palavraTentativa = tentativa > 1 ? "tentativas": "tentativa" ;