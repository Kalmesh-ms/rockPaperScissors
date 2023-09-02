let playerScore = 0;
let computerScore = 0;

let yourSelectionDiv = document.querySelector('a.playerSelection')
let yourScoreDiv = document.querySelector('a.playerScore');

let computerSelectionDiv = document.querySelector('a.computerSelection')
let computerScoreDiv = document.querySelector('a.computerScore')

let resultDiv = document.querySelector('a.result')

let container = document.querySelector('div.container')

let playerDiv = document.querySelector('div.playerDiv')
let computerDiv = document.querySelector('div.computerDiv')

let textResultDiv = document.querySelector('div.text');
let gameResultDiv = document.querySelector('.gameResult');

let reloadDiv = document.querySelector('a.reload');
let pDiv = document.querySelectorAll('p');

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
    
    result = playRound(computerSelection, playerSelection);
    if ( playerScore < 5 && computerScore < 5 ){
    console.log(`You : ${playerSelection}`);
    console.log(`Computer : ${computerSelection}`);
    console.log(result);

    //Display of textContent
    yourSelectionDiv.textContent =`${playerSelection}`;
    yourScoreDiv.textContent = `${playerScore}`;

    computerSelectionDiv.textContent =`${computerSelection}`;
    computerScoreDiv.textContent = `${computerScore}`;

    resultDiv.textContent =`${result}`;
    }
    else if ( playerScore > 5 || computerScore > 5){
        return;
    }
    else if ( playerScore === 5){
        container.removeChild(playerDiv);
        container.removeChild(computerDiv);
        container.removeChild(textResultDiv);

        gameResultDiv.textContent =`Damn! You crushed the Game.. ;)`;
        reloadDiv.textContent = `Start a new Match?`
    }
    else if ( computerScore === 5){
        container.removeChild(playerDiv);
        container.removeChild(computerDiv);
        container.removeChild(textResultDiv);

        gameResultDiv.textContent =`Shit! Computer Wins!`;
        reloadDiv.textContent = `Start a new Match?`
    }


}

const buttons = document.querySelectorAll('.playerDiv button')
buttons.forEach((button)=> button.addEventListener('click', playerChoice))


