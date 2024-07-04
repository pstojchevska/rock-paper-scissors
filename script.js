function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    let choice;
    if (computerChoice === 0) {
        choice = "Rock";
    } else if (computerChoice === 1) {
        choice = "Paper";
    } else if (computerChoice === 2) {
        choice = "Scissors";
    }
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
    const computerChoice = getComputerChoice().toLowerCase();
    humanChoice = humanChoice.toLowerCase();

    let message = '';
    if (humanChoice === computerChoice) {
        message = `It's a tie! Both chose ${humanChoice}`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
     ) {
        humanScore++;
        message = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`;
    } else {
        computerScore++;
        message = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`;
    }

    document.getElementById('message').textContent = message;
    document.getElementById('human-score').textContent = humanScore;
    document.getElementById('computer-score').textContent = computerScore;

    if (humanScore === 5 || computerScore === 5) {
        const winnerMessage = humanScore === 5 ? "Congratulations! You won the game." : "Sorry, you lost the game.";
        document.getElementById('winner').textContent = winnerMessage;
        disableButtons();
    }
}

function disableButtons() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));