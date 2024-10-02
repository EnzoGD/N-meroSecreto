alert("Boas-vindas ao jogo do número secreto")
let numeroSecreto = 5;
let chute;

while(chute != numeroSecreto){
    chute = prompt("Escolha um número entre 1 e 10");

if(chute == numeroSecreto){
    console.log(`Isso aí!!! Você descobriu o número secreto ${numeroSecreto}`)
} 
else{
    if(numeroSecreto> chute){
        alert(`O número secreto é maior que ${chute}`)

    } else {
        alert(`O número secreto é menor que ${chute}`)
    }
}
}