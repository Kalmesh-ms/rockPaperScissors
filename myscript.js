let computerPoints = 0;
let playerPoints = 0;

let randomNumber = Math.floor(Math.random()*10);

function getComputerChoice(randomNumber){
    
    if (randomNumber > 6){
        return "rock"
    }
    else if (randomNumber < 3 ){
        return "scissors"
    }
    else {
        return "paper"
    }
}

cs = getComputerChoice(randomNumber);


playerSelection = prompt("Please input your selection").toLowerCase();
ps = playerSelection;


function lossLogic(cs , ps){
    if (( cs === "rock" && ps === "scissors") || (cs === "scissors" && ps === "paper") || (cs === "paper" && ps === "rock")){
    return true
    }
    else {return false}
}

function playRound (ps , cs){

    if ( lossLogic(cs, ps )){
        computerPoints++
        return `You lose! ${cs} beats ${ps}`
    }

    else if (ps === cs ){
        return `Its a draw`
    }
    else {
        playerPoints++
        return `You win ! ${ps} beats ${cs}`
    }
}

console.log(playRound(ps,cs));
console.log(`You : ${playerPoints}`);
console.log(`Computer : ${computerPoints}`);