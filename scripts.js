let playerScore = 0;
let computerScore = 0;

// DOM captures of user selections
const featherSelection = document.getElementById('feather');
const eggSelection = document.getElementById('egg');
const beakSelection = document.getElementById('beak');
// DOM captures of results
const playerScored = document.getElementById('.player');
const computerScored = document.getElementById('.computer');
const playerImage = document.getElementById('.player-result');
const computerImage = document.getElementById('.computer-result');
const resultTextTop = document.getElementById('.result-text-1');
const resultTextBottom = document.getElementById('.result-text-2');

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

// Functions are created within event listeners to reference for later event listener removal
function gamePlay() {
    featherSelection.addEventListener('click', featherPlayed = () => playRound('Feather', getComputerChoice));
    eggSelection.addEventListener('click', eggPlayed = () => playRound('Egg', getComputerChoice));
    beakSelection.addEventListener('click', beakPlayed = () => playRound('Beak', getComputerChoice));
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        playerTied(playerSelection);
    } else if (
        (playerSelection === 'Feather' && computerSelection === 'Beak') || 
        (playerSelection === 'Beak' && computerSelection === 'Egg') ||
        (playerSelection === 'Egg' && computerSelection === 'Feather') 
    ) {
        return "Cockadoodledoo! You win!";
    } else if (
        (playerSelection === 'Feather' && computerSelection === 'Egg') || 
        (playerSelection === 'Beak' && computerSelection === 'Feather') ||
        (playerSelection === 'Egg' && computerSelection === 'Beak') 
    ) {
        return "You lose... bok BOK!";
    }
}

function playerTied(play) {
    resultTextTop.textContent = 'Better luck next time!';
    if (play === 'Feather') {
        playerImage.setAttribute('src', './resources/playerFeather.jpg');
        computerImage.setAttribute('src', './resources/computerFeather.jpg');
        resultTextBottom.textContent = 'You both played feather.';
    } else if (play === 'Beak') {
        playerImage.setAttribute('src', './resources/playerBeak.jpg');
        computerImage.setAttribute('src', './resources/computerBeak.jpg');
        resultTextBottom.textContent = 'You both played beak.';
    } else if (play === 'Egg') {
        playerImage.setAttribute('src', './resources/egg.jpg');
        computerImage.setAttribute('src', './resources/egg.jpg');
        resultTextBottom.textContent = 'You both played egg.';
    }
}

gamePlay();

