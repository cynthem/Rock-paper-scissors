let playerScore = 0;
let computerScore = 0;

// DOM captures of user selections
const featherSelection = document.getElementById('feather');
const eggSelection = document.getElementById('egg');
const beakSelection = document.getElementById('beak');
// DOM captures of results
const playerScored = document.getElementById('player');
const computerScored = document.getElementById('computer');
const playerImage = document.getElementById('player-result');
const computerImage = document.getElementById('computer-result');
const resultTextTop = document.getElementById('result-text-1');
const resultTextBottom = document.getElementById('result-text-2');
const resultTextBottomSpan = document.getElementById('result-text-3');

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

function gamePlay() {
    featherSelection.addEventListener('click', featherPlayed = () => playRound('Feather', getComputerChoice));
    eggSelection.addEventListener('click', eggPlayed = () => playRound('Egg', getComputerChoice));
    beakSelection.addEventListener('click', beakPlayed = () => playRound('Beak', getComputerChoice));
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        bothTied(playerSelection);
    } else if (
        (playerSelection === 'Feather' && computerSelection === 'Beak') || 
        (playerSelection === 'Beak' && computerSelection === 'Egg') ||
        (playerSelection === 'Egg' && computerSelection === 'Feather') 
    ) {
        playerWon(playerSelection);
        computerLost(computerSelection);
    } else if (
        (playerSelection === 'Feather' && computerSelection === 'Egg') || 
        (playerSelection === 'Beak' && computerSelection === 'Feather') ||
        (playerSelection === 'Egg' && computerSelection === 'Beak') 
    ) {
        playerLost(playerSelection);
        computerWon(computerSelection);
    }
}

function bothTied(playerChoice) {
    playerScored.textContent = playerScore;
    computerScored.textContent = computerScore;
    resultTextTop.textContent = 'No winners this time!';
    if (playerChoice === 'Feather') {
        playerImage.setAttribute('src', './resources/playerFeather.jpg');
        computerImage.setAttribute('src', './resources/computerFeather.jpg');
        resultTextBottom.textContent = 'You both played feather.';
    } else if (playerChoice === 'Beak') {
        playerImage.setAttribute('src', './resources/playerBeak.jpg');
        computerImage.setAttribute('src', './resources/computerBeak.jpg');
        resultTextBottom.textContent = 'You both played beak.';
    } else if (playerChoice === 'Egg') {
        playerImage.setAttribute('src', './resources/egg.jpg');
        computerImage.setAttribute('src', './resources/egg.jpg');
        resultTextBottom.textContent = 'You both played egg.';
    }
}

function playerWon(playerChoice) {
    playerScore++;
    playerScored.textContent = playerScore;
    resultTextTop.textContent = 'You win this round!';
    if (playerChoice === 'Feather') {
        playerImage.setAttribute('src', './resources/playerFeather.jpg');
        resultTextBottom.textContent = 'Feather tickles beak.';
    } else if (playerChoice === 'Beak') {
        playerImage.setAttribute('src', './resources/playerBeak.jpg');
        resultTextBottom.textContent = 'Beak pecks egg.';
    } else if (playerChoice === 'Egg') {
        playerImage.setAttribute('src', './resources/egg.jpg');
        resultTextBottom.textContent = 'Egg flattens feather.';
    }
}

function computerLost(computerChoice) {
    computerScored.textContent = computerScore;
    if (computerChoice === 'Feather') {
        playerImage.setAttribute('src', './resources/computerFeather.jpg');
    } else if (computerChoice === 'Beak') {
        playerImage.setAttribute('src', './resources/computerBeak.jpg');
    } else if (computerChoice === 'Egg') {
        playerImage.setAttribute('src', './resources/egg.jpg');
    }
}

function playerLost(playerChoice) {
    playerScored.textContent = playerScore;
    resultTextTop.textContent = 'You lose this round... bok BOK!';
    if (playerChoice === 'Feather') {
        playerImage.setAttribute('src', './resources/playerFeather.jpg');
        resultTextBottom.textContent = 'Egg flattens feather.';
    } else if (playerChoice === 'Beak') {
        playerImage.setAttribute('src', './resources/playerBeak.jpg');
        resultTextBottom.textContent = 'Feather tickles beak.';
    } else if (playerChoice === 'Egg') {
        playerImage.setAttribute('src', './resources/egg.jpg');
        resultTextBottom.textContent = 'Beak pecks egg.';
    }
}

function computerWon(computerChoice) {
    computerScore++;
    computerScored.textContent = computerScore;
    if (computerChoice === 'Feather') {
        playerImage.setAttribute('src', './resources/computerFeather.jpg');
    } else if (computerChoice === 'Beak') {
        playerImage.setAttribute('src', './resources/computerBeak.jpg');
    } else if (computerChoice === 'Egg') {
        playerImage.setAttribute('src', './resources/egg.jpg');
    }
}

gamePlay();

