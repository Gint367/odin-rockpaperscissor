function getComputerChoice () {
    const choice = ["rock","paper","scissor"]
    return choice[Math.floor(Math.random() * choice.length)]
}
function playRound(playerSelection, computerSelection){
    var playerSelection = prompt("enter your hand").toLowerCase();
    var computerSelection = getComputerChoice();
    console.log("player choose " + playerSelection);
    console.log("computer choose " + computerSelection);
    switch(playerSelection) {
        case "rock":
            if (computerSelection === "scissor") {
                return "you win";
            }else {
                return "you lose";
            }
        case "paper":
            if (computerSelection === "rock") {
                    return "you win";
            }else {
                    return "you lose";
            }
        case "scissor":
            if (computerSelection === "paper") {
                    return "you win";
            }else {
                    return "you lose";
            }   
            
    }
}
function game(){
    var tally = 0;
    for (let i = 0; i < 5; i++) {
        console.log("Round " + i);
        if (playRound() === "you win") {
            tally++;
            console.log("you win");    
        }else{
            console.log("you lose");
        }
        
    }
    console.log("You won " + tally + " times");
}