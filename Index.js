function jogar() {

    PlayerChoice = prompt("Qual será sua escolha 1-Pedra,2-Papel e 3-Tesoura");
    console.log (PlayerChoice) 
    CompuiterChoice = Math.floor(Math.random()*3+ + 1); 
    console.log (CompuiterChoice);

    //Draw 
    if (CompuiterChoice == PlayerChoice) {
        alert("Parece que você empatou")
    }

    
    //Rock
    if (PlayerChoice == 1){
        //Player chose Rock and wins 
        if (CompuiterChoice == 3){ 
            alert("Parábens você venceu!!! o computador escolheu:Tesoura");
        }
        //Player chose Rock and lost
        if (CompuiterChoice == 2){
            alert("Poxa parece que você perdeu, o computador escolheu:Papel");
        }
    }
    //Paper
    if (PlayerChoice == 2){ 
        //Player chose paper and wins
        if (CompuiterChoice == 1){ 
            alert("Parábens você venceu!!! o computador escolheu:Pedra");
        }
        //Player chose paper and lost 
        if (CompuiterChoice == 3){
            alert("Poxa parece que você perdeu, o computador escolheu:Tesoura");
        }
    }
    //Scissors
    if (PlayerChoice == 3){ 
        //Player chose Scissors and wins
        if (CompuiterChoice == 2){ 
            alert("Parábens você venceu!!! o computador escolheu:Papel");
        }
        //Player chose Scissors and lost
        if (CompuiterChoice == 1){
            alert("Poxa parece que você perdeu, o computador escolheu:Pedra");
        }    
    }
    //Cheating
    if (PlayerChoice > 3 ){
        alert("Desculpe "+ PlayerChoice + " Não é uma opção")
    } 
}
