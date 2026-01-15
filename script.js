function getComputerChoice() {
    const randomInt = Math.floor(Math.random() * 3);
    if (randomInt === 0) 
        return "rock";
    else if (randomInt === 1) 
        return "paper";
    else return "scissors";
}

function getHumanChoice() {
    let choice = prompt("Make your choice: rock, paper, or scissors").toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock") return "Human: Rock vs Computer: Rock. Draw!";
            else if (computerChoice === "paper") return "Human: Rock vs Computer: Paper.You Lose!";
            else return "Human: Rock vs Computer: Scissors.You Win!";    
            break;

        case "paper":
            if (computerChoice === "rock") return "Human: Paper vs Computer: Rock.You Win!";
            else if (computerChoice === "paper") return "Human: Paper vs Computer: Paper.Draw!";
            else return "Human: Paper vs Computer: Scissors.You Lose!";    
            break;

        case "scissors":
            if (computerChoice === "rock") return "Human: Scissors vs Computer: Rock.You Lose!";
            else if (computerChoice === "paper") return "Human: Scissors vs Computer: Paper.You Win!";
            else return "Human: Scissors vs Computer: Scissors.Draw!";    
            break;
    }


}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;


    for (let i=0; i<5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);
        alert(result);

        if (result.toLowerCase().includes("win")) 
            humanScore=+1;
        else if (result.toLowerCase().includes("lose")) 
            computerScore+=1;
    }

    alert(getWinner(humanScore, computerScore));
}

function getWinner(humanScore, computerScore) {
    if (humanScore > computerScore) return "You beat the computer! Congratulations Human!"
    else return "The computer wins! Better luck next time!"
}



playGame();