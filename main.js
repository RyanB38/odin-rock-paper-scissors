const victoryMessage = document.querySelector(".victory-message > p")
const controls = document.querySelector(".player-controls");
const playerButtons = controls.querySelectorAll("button");
const scoreDisplay = document.querySelector(".score");
const humanScoreDisplay = document.createElement('h1')
const computerScoreDisplay = document.createElement("h1")
const dash = document.createElement("h1");
dash.textContent = "-";
scoreDisplay.appendChild(humanScoreDisplay);
scoreDisplay.appendChild(dash);
scoreDisplay.appendChild(computerScoreDisplay);
let humanScore = 0;
let computerScore = 0;
computerScoreDisplay.textContent = computerScore;
humanScoreDisplay.textContent = humanScore;
playerButtons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.className, getComputerChoice());
        computerScoreDisplay.textContent = computerScore;
        humanScoreDisplay.textContent = humanScore;
        if(humanScore > 4){
            humanScore = computerScore = 0;
            alert("Game over you win");
        } else if (computerScore > 4){
            humanScore = computerScore = 0;
            alert("Game over you lose");
        }
        })
    })
    
function playRound(humanChoice, computerChoice){
        if(humanChoice == computerChoice){
            console.log("Tie neither player wins")
        } else if(humanChoice == "rock"){
            if(computerChoice == "paper"){
                victoryMessage.textContent = "You lose paper beats rock";
                computerScore++;
            }else{
                victoryMessage.textContent = "You win rock beats scissors";
                humanScore++;
            }
        } else if(humanChoice == "paper"){
            if(computerChoice == "scissors"){
                victoryMessage.textContent = "You lose scissors beats paper";
                computerScore++
            } else {
                victoryMessage.textContent = "You win paper beats rock"
                humanScore++
            }
    } else if(humanChoice == "scissors"){
        if(computerChoice == "Rock"){
            victoryMessage.textContent = "You lose rock beats scissors"
            computerScore++
        } else {
            victoryMessage.textContent = "You win scissors beats paper"
            humanScore++
        }
    }
}

function getComputerChoice(){
    const randomNumber = Math.random() * 10;
    if (randomNumber <= 3) {
        return "Rock";
    }
    else if (randomNumber <= 6){
        return "Paper";
    }
    else if (randomNumber <= 10){
        return "Scissors";
    }
}