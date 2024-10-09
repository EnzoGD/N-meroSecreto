alert("Boas-vindas ao jogo do número secreto")
let numeroSecreto = 5;
let chute;
let tentativa =1;

//enquanto = while
while(chute != numeroSecreto){
        chute = prompt("Escolha um número entre 1 e 10");

    if(chute == numeroSecreto){
        alert(`Isso aí!!! Você descobriu o número secreto ${numeroSecreto} com ${tentativa} tentativas.`);
    } 
    else{
        if(numeroSecreto> chute){
            alert(`O número secreto é maior que ${chute}`);

        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
    } tentativa++;
} 