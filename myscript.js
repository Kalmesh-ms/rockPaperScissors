let playerScore = 0;
let computerScore = 0;
let yourScoreDiv = document.querySelector('a.playerScore');
let computerScoreDiv = document.querySelector('a.computerScore')
let resultDiv = document.querySelector('p.result')


function lossLogic(cs , ps){
    if (( cs === "rock" && ps === "scissors") || (cs === "scissors" && ps === "paper") || (cs === "paper" && ps === "rock")){
    return true
    }
    else {return false}
}

function playRound (cs , ps){

    if ( lossLogic(cs, ps )){
        computerScore++
        return `You lose! ${cs} beats ${ps}`
    }

    else if (ps === cs ){
        return `Its a draw`
    }
    else {
        playerScore++
        return `You win ! ${ps} beats ${cs}`
    }
}

//ComputerChoice

let playerSelection;
function playerChoice(event){
    playerSelection = event.target.className;
        randomNumber = Math.floor(Math.random()*3);
        function computerChoice(randomNumber){
            if(randomNumber === 0){
                return 'rock';
            }
            else if (randomNumber === 1){
                return 'paper';
            }
            else if(randomNumber === 2){
                return 'scissors';
            }
}
    computerSelection = computerChoice(randomNumber);
    
    result = playRound(computerSelection, playerSelection)
    console.log(`You : ${playerSelection}`);
    console.log(`Computer : ${computerSelection}`);
    console.log(result);

    //Display of Scores
    yourScoreDiv.textContent = `${playerScore}`;
    computerScoreDiv.textContent = `${computerScore}`;
    resultDiv.textContent =`${result}`;

}
const buttons = document.querySelectorAll('.playerDiv button')
buttons.forEach((button)=> button.addEventListener('click', playerChoice))


