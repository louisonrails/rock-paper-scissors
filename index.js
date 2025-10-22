console.log("Rock.");

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

function getUserChoice(choice) {
    let computerChoice = getComputerChoice();
    console.log("User: " + choice + "; Computer: " + computerChoice);
}

document.getElementById("rock").addEventListener("click", function() {
    getUserChoice("rock");
});

document.getElementById("paper").addEventListener("click", function(){
    getUserChoice("paper");
});

document.getElementById("scissors").addEventListener("click", function(){
    getUserChoice("scissors");
});