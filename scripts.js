let playerScore = 0;
let computerScore = 0;

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

// DOM captures of user selections
const featherSelection = document.getElementById('feather');
const eggSelection = document.getElementById('egg');
const beakSelection = document.getElementById('beak');

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
    } else if (
        (playerSelection === 'Feather' && computerSelection === 'Egg') || 
        (playerSelection === 'Beak' && computerSelection === 'Feather') ||
        (playerSelection === 'Egg' && computerSelection === 'Beak') 
    ) {
        playerLost(playerSelection);
    }
}

// DOM captures of results
const playerScored = document.getElementById('player');
const computerScored = document.getElementById('computer');
const playerImage = document.getElementById('player-result');
const computerImage = document.getElementById('computer-result');
const resultTextTop = document.getElementById('result-text-1');
const resultTextBottom = document.getElementById('result-text-2');

function bothTied(playerSelection) {
    playerScored.textContent = playerScore;
    computerScored.textContent = computerScore;
    resultTextTop.textContent = 'No winners this time!';
    if (playerSelection === 'Feather') {
        playerImage.setAttribute('src', './resources/playerFeather.jpg');
        computerImage.setAttribute('src', './resources/computerFeather.jpg');
        resultTextBottom.textContent = 'You both played feather.';
    } else if (playerSelection === 'Beak') {
        playerImage.setAttribute('src', './resources/playerBeak.jpg');
        computerImage.setAttribute('src', './resources/computerBeak.jpg');
        resultTextBottom.textContent = 'You both played beak.';
    } else if (playerSelection === 'Egg') {
        playerImage.setAttribute('src', './resources/egg.jpg');
        computerImage.setAttribute('src', './resources/egg.jpg');
        resultTextBottom.textContent = 'You both played egg.';
    }
}

function playerWon(playerSelection) {
    playerScore++;
    playerScored.textContent = playerScore;
    computerScored.textContent = computerScore;
    resultTextTop.textContent = 'You win this round!';
    if (playerSelection === 'Feather') {
        playerImage.setAttribute('src', './resources/playerFeather.jpg');
        computerImage.setAttribute('src', './resources/computerBeak.jpg');
        resultTextBottom.textContent = 'Feather tickles beak.';
    } else if (playerSelection === 'Beak') {
        playerImage.setAttribute('src', './resources/playerBeak.jpg');
        computerImage.setAttribute('src', './resources/egg.jpg');
        resultTextBottom.textContent = 'Beak pecks egg.';
    } else if (playerSelection === 'Egg') {
        playerImage.setAttribute('src', './resources/egg.jpg');
        computerImage.setAttribute('src', './resources/computerFeather.jpg');
        resultTextBottom.textContent = 'Egg flattens feather.';
    }
}

function playerLost(playerSelection) {
    computerScore++;
    playerScored.textContent = playerScore;
    computerScored.textContent = computerScore;
    resultTextTop.textContent = 'You lose this round... bok BOK!';
    if (playerSelection === 'Feather') {
        playerImage.setAttribute('src', './resources/playerFeather.jpg');
        computerImage.setAttribute('src', './resources/egg.jpg');
        resultTextBottom.textContent = 'Egg flattens feather.';
    } else if (playerSelection === 'Beak') {
        playerImage.setAttribute('src', './resources/playerBeak.jpg');
        computerImage.setAttribute('src', './resources/computerFeather.jpg');
        resultTextBottom.textContent = 'Feather tickles beak.';
    } else if (playerSelection === 'Egg') {
        playerImage.setAttribute('src', './resources/egg.jpg');
        computerImage.setAttribute('src', './resources/computerBeak.jpg');
        resultTextBottom.textContent = 'Beak pecks egg.';
    }
}

function declareWinner() {
    playerImage.remove();
    computerImage.remove();
    const imageDiv = document.getElementById('images');
    const newImage = document.createElement('img');
    imageDiv.appendChild(newImage);
    const declaredWinner = document.getElementById('rules-title');
    if (playerScore > computerScore) {
        declaredWinner.innerHTML = declaredWinner.innerHTML.replace('You win! You are the superior chicken!');
        newImage.setAttribute('src', './resources/playerChicken.png');
    } else {
        declaredWinner.innerHTML = declaredWinner.innerHTML.replace('You lose. Better luck next time... buckAW!');
        newImage.setAttribute('src', './resources/computerChicken.png');
    }
}

gamePlay();

