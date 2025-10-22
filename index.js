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

