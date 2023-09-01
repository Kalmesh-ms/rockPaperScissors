let computerPoints = 0;
let playerPoints = 0;




const container =  document.querySelector('div');

const eachPlayText = document.createElement('div');
eachPlayText.classList.add('play')

const computerScore = document.createElement('div');
computerScore.classList.add('cscore');

const playerScore = document.createElement('div');
playerScore.classList.add('pscore');

const buttons = document.querySelectorAll('button');

function listen(e){
    ps = e.target.className;
        
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

            function lossLogic(cs , ps){
                if (( cs === "rock" && ps === "scissors") || (cs === "scissors" && ps === "paper") || (cs === "paper" && ps === "rock")){
                return true
                }
                else {return false}
            }
        
            playRound = function (ps , cs){
            
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
    eachPlayText.textContent = playRound(ps,cs);
    playerScore.textContent =`You : ${playerPoints}`;
    computerScore.textContent = `Computer : ${computerPoints}`;
}

buttons.forEach((button)=>
button.addEventListener('click' , listen))

container.appendChild(eachPlayText);
container.appendChild(playerScore);
container.appendChild(computerScore);