function getComputerChoice () {
    const choice = ["rock","paper","scissor"]
    return choice[Math.floor(Math.random() * choice.length)]
}
function playRound(playerSelection, computerSelection){
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