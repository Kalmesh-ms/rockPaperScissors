let randomNumber = Math.floor(Math.random()*10);

function getComputerChoice(randomNumber){
    
    if (randomNumber > 6){
        return "rock"
    }
    else if (randomNumber < 3 ){
        return "paper"
    }
    else {
        return "scissors"
    }
}

cs = getComputerChoice(randomNumber);

