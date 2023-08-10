function getComputerChoice () {
    const choice = ["rock","paper","scissor"]
    return choice[Math.floor(Math.random() * choice.length)]
}
function playRound(playerSelection, computerSelection){
    //var playerSelection = prompt("enter your hand").toLowerCase();
    var computerSelection = getComputerChoice();
    console.log("player choose " + playerSelection);
    //document.querySelector("#outputtext").replaceWith("player choose " + playerSelection)
    console.log("computer choose " + computerSelection);
    switch(playerSelection) {
        case "rock":
            if (computerSelection === "scissor") {
                document.getElementById("outputtext").innerHTML = playerSelection + " vs "+ computerSelection + " : You Win";
                return "you win";
            }else {
                document.getElementById("outputtext").innerHTML = playerSelection + " vs "+ computerSelection + " : You Lose";
                return "you lose";
            }
        case "paper":
            if (computerSelection === "rock") {
                document.getElementById("outputtext").innerHTML = playerSelection + " vs "+ computerSelection + " : You Win";
                return "you win";
            }else {
                document.getElementById("outputtext").innerHTML = playerSelection + " vs "+ computerSelection + " : You Lose";
                return "you lose";
            }
        case "scissor":
            if (computerSelection === "paper") {
                document.getElementById("outputtext").innerHTML = playerSelection + " vs "+ computerSelection + " : You Win";
                return "you win";
            }else {
                document.getElementById("outputtext").innerHTML = playerSelection + " vs "+ computerSelection + " : You Lose";
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
            document.getElementById("outputtext").replaceChild("yes")
        }else{
            console.log("you lose");
        }
        
    }
    console.log("You won " + tally + " times");
}