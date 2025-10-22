let userScore = 0;
let computerScore = 0;

function getComputerChoice(){
    number = Math.floor(Math.random() * 3) + 1;
    if(number === 1){
        return "rock";
    }
    if(number === 2){
        return "paper";
    }
    return "scissors";
}

function playGame(choice) {
    let computerChoice = getComputerChoice();
    winner = decideWinner(choice, computerChoice);
    if(winner === 0){
        alert("Its a tie!");
    } else if(winner === 1){
        alert("Computer Wins. " + computerChoice + " beats " + choice + ".");
        computerScore++;
    } else {
        alert("You win! " + choice + " beats " + computerChoice + ".");
        userScore++;
    }
    console.log("Computer: "+ computerScore + ". User: " + userScore);
}

function decideWinner(userChoice, computerChoice){
    if(userChoice === computerChoice){
        return 0;
    }
    if(userChoice === "rock" && computerChoice === "paper"){
        return 1;
    }
    if(userChoice === "rock" && computerChoice === "scissors"){
        return 2;
    }
    if(userChoice === "scissors" && computerChoice === "rock"){
        return 1;
    }
    if(userChoice === "scissors" && computerChoice === "paper"){
        return 2;
    }
    if(userChoice === "paper" && computerChoice === "scissors"){
        return 1;
    }
    return 2;

}

document.getElementById("rock").addEventListener("click", function() {
    playGame("rock");
});

document.getElementById("paper").addEventListener("click", function(){
    playGame("paper");
});

document.getElementById("scissors").addEventListener("click", function(){
    playGame("scissors");
});

document.getElementById("reset-score").addEventListener("click", function(){
    userScore = 0;
    computerScore = 0;
});