
const controls = document.querySelector(".player-controls");
const playerButtons = controls.querySelectorAll("button");
const scoreDisplay = document.querySelector(".score");
const humanScoreDisplay = scoreDisplay.querySelector(".human");
const computerScoreDisplay = scoreDisplay.querySelector(".computer");
let humanScore = 0;
let computerScore = 0;
computerScoreDisplay.textContent = computerScore;
humanScoreDisplay.textContent = humanScore;

playerButtons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.className, getComputerChoice());
        computerScoreDisplay.textContent = computerScore;
        humanScoreDisplay.textContent = humanScore;})
    })
    
function playRound(humanChoice, computerChoice){
        if(humanChoice == computerChoice){
            console.log("Tie neither player wins")
        } else if(humanChoice == "rock"){
            if(computerChoice == "paper"){
                console.log("You lose paper beats rock");
                computerScore++;
            }else{
                console.log("You win rock beats scissors");
                humanScore++;
            }
        } else if(humanChoice == "paper"){
            if(computerChoice == "scissors"){
                console.log("You lose scissors beats paper");
                computerScore++
            } else {
                console.log("You win paper beats rock")
                humanScore++
            }
    } else if(humanChoice == "scissors"){
        if(computerChoice == "Rock"){
            console.log("You lose rock beats scissors")
            computerScore++
        } else {
            console.log("You win scissors beats paper")
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