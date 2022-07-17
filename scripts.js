let playerScore = 0;
let computerScore = 0;

// DOM captures of user selections
const featherSelection = document.getElementById('feather');
const eggSelection = document.getElementById('egg');
const beakSelection = document.getElementById('beak');

// Functions are created within event listeners to reference for later event listener removal
function gamePlay() {
    featherSelection.addEventListener('click', featherPlayed = () => playRound('Feather', getComputerChoice));
    eggSelection.addEventListener('click', eggPlayed = () => playRound('Egg', getComputerChoice));
    beakSelection.addEventListener('click', beakPlayed = () => playRound('Beak', getComputerChoice));
}

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0:
            return 'Feather';
        case 1:
            return 'Egg';
        case 2:
            return 'Beak';
    }
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        console.log("Tie")
        return "It's a tie!";
    } else if (
        (playerSelection === 'Feather' && computerSelection === 'Beak') || 
        (playerSelection === 'Beak' && computerSelection === 'Egg') ||
        (playerSelection === 'Egg' && computerSelection === 'Feather') 
    ) {
        console.log("Win")
        return "Cockadoodledoo! You win!";
    } else if (
        (playerSelection === 'Feather' && computerSelection === 'Egg') || 
        (playerSelection === 'Beak' && computerSelection === 'Feather') ||
        (playerSelection === 'Egg' && computerSelection === 'Beak') 
    ) {
        console.log("Lose")
        return "You lose... bok BOK!";
    }
}

gamePlay();

