let humanScore = 0;
let computerScore = 0;
let gameActive = true;

// Get computer's random choice using Math.random and Math.floor for accurate results
function getComputerChoice() {
    const randomInt = Math.floor(Math.random() * 3);
    if (randomInt === 0) 
        return "rock";
    else if (randomInt === 1) 
        return "paper";
    else return "scissors";
}

const humanScoreDisplay = document.getElementById("humanScore");
const computerScoreDisplay = document.getElementById("computerScore");
const resultDisplay = document.getElementById("result");

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

const playAgainBtn = document.getElementById("playAgainBtn");



function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    resultDisplay.innerHTML = "";
    let resultRound = "";

    if (!gameActive) {
        return;
    }
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                displayMessage = "Human: ✊ vs Computer: ✊ . Draw!";
                resultRound = "Draw!";
            }
            else if (computerChoice === "paper") {
                computerScore += 1;
                displayMessage = "Human: ✊ vs Computer: ✋ . You Lose!";
                resultRound = "Lose";
            }
            else {
                humanScore += 1;
                displayMessage = "Human: ✊ vs Computer: ✌️ . You Win!";
                resultRound = "Win";
            }
        break;

        case "paper":
            if (computerChoice === "rock") {
                humanScore += 1;
                displayMessage = "Human: ✋ vs Computer: ✊ . You Win!";
                resultRound = "Win";
            }
            else if (computerChoice === "paper") {
                displayMessage = "Human: ✋ vs Computer: ✋ . Draw!";
                resultRound = "Draw!";
            }
            else {
                computerScore += 1;
                displayMessage = "Human: ✋ vs Computer: ✌️ . You Lose!";
                resultRound = "Lose";
            }
            break;

        case "scissors":
            if (computerChoice === "rock") {
                computerScore += 1;
                displayMessage = "Human: ✌️ vs Computer: ✊ . You Lose!";
                resultRound = "Lose";
            }
            else if (computerChoice === "paper") {
                humanScore += 1;
                displayMessage = "Human: ✌️ vs Computer: ✋ . You Win!";
                resultRound = "Win";
            }
            else {
                displayMessage = "Human: ✌️ vs Computer: ✌️ . Draw!";
                resultRound = "Draw!";
            }
            break;
    }
    // Update score on screen
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    // Show result with color
    resultDisplay.innerHTML = `<p class="${resultRound}">${displayMessage}</p>`;

    getWinner();
}

function getWinner() {
    if (humanScore === 5) {
        resultDisplay.innerHTML = "<h3>🏆 You won the game!</h3>";
        endGame();
    } else if (computerScore === 5) {
        resultDisplay.innerHTML = "<h3>💻 Computer won the game!</h3>";
        endGame();
    }
}

function endGame() {
    gameActive = false;
    disableButtons();
    playAgainBtn.style.display = "inline-block";
}   


function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    gameActive = true;

    humanScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
    

    resultDisplay.innerHTML = "<p>First to 5 wins! Good luck!</p>";

    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    playAgainBtn.style.display = "none";
}

rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));

playAgainBtn.addEventListener("click", resetGame);

