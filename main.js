
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
const controls = document.querySelector(".player-controls");
const playerButtons = controls.querySelectorAll("button");
playerButtons.forEach((button) => {
    button.addEventListener("click", (button) =>{
        alert(button.className);      
    })
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


function playGame(){
    humanScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++){
        playRound(getHumanChoice().toLowerCase(), getComputerChoice().toLowerCase())
    }
    return `The final score was computer ${computerScore} - you ${humanScore}`
    
}
