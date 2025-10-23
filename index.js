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
        userFeedback('tie', computerChoice, choice);
    } else if(winner === 1){
        userFeedback('Computer', computerChoice, choice);
        computerScore++;
    } else {
        userFeedback('You', choice, computerChoice);
        userScore++;
    }
    updateScore(userScore, computerScore);
}

function userFeedback(winner, winnerChoice, loserChoice){
    // alert(winner + " Won. " + winnerChoice + " beats " + loserChoice + ".");
    const feedbackSection = document.querySelector("#feedback");
    feedbackSection.innerHTML = "";

    const feedbackText = document.createElement("p");

    console.log(winner);
    
    if(winner === "tie"){
        feedbackText.textContent = "It's a tie.";
    } else {
        feedbackSection.textContent = winner + " Won! " + winnerChoice + " beats " + loserChoice + ".";
    }

    feedbackSection.classList.add("feedback");
    feedbackSection.appendChild(feedbackText);

    setTimeout(() => {
        feedbackSection.classList.remove("feedback");
        feedbackSection.innerHTML = "";
    }, 1500);
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

function updateScore(userScore, computerScore){

    const userScoreElement = document.getElementById("user-score");
    const computerScoreElement = document.getElementById("computer-score");

    userScoreElement.textContent = userScore;
    computerScoreElement.textContent = computerScore;
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

    updateScore(userScore, computerScore);
});