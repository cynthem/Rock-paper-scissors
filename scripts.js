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
// DOM captures of hidden results elements
const winnerImage = document.getElementById('end-result');
const declaredWinner = document.getElementById('rules-title');
const resetButton = document.getElementById('reset-btn');

let playerScore = 0;
let computerScore = 0;

playerScored.textContent = playerScore;
computerScored.textContent = computerScore;

resultTextTop.textContent = 'Welcome player...';
resultTextBottom.textContent = 'CHOOSE YOUR WEAPON:';

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
    } else if (
        (playerSelection === 'Feather' && computerSelection === 'Egg') || 
        (playerSelection === 'Beak' && computerSelection === 'Feather') ||
        (playerSelection === 'Egg' && computerSelection === 'Beak') 
    ) {
        playerLost(playerSelection);
    }
}

function bothTied(playerSelection) {
    playerScored.textContent = playerScore;
    computerScored.textContent = computerScore;
    resultTextBottom.textContent = 'No winners this time!';
    if (playerSelection === 'Feather') {
        playerImage.setAttribute('src', './resources/playerFeather.jpg');
        computerImage.setAttribute('src', './resources/computerFeather.jpg');
        resultTextTop.textContent = 'You both played feather.';
    } else if (playerSelection === 'Beak') {
        playerImage.setAttribute('src', './resources/playerBeak.jpg');
        computerImage.setAttribute('src', './resources/computerBeak.jpg');
        resultTextTop.textContent = 'You both played beak.';
    } else if (playerSelection === 'Egg') {
        playerImage.setAttribute('src', './resources/playerEgg.jpg');
        computerImage.setAttribute('src', './resources/computerEgg.jpg');
        resultTextTop.textContent = 'You both played egg.';
    }
}

function playerWon(playerSelection) {
    playerScore++;
    playerScored.textContent = playerScore;
    computerScored.textContent = computerScore;
    resultTextBottom.textContent = 'You win this round!';
    if (playerSelection === 'Feather') {
        playerImage.setAttribute('src', './resources/playerFeather.jpg');
        computerImage.setAttribute('src', './resources/computerBeak.jpg');
        resultTextTop.textContent = 'Feather tickles beak.';
    } else if (playerSelection === 'Beak') {
        playerImage.setAttribute('src', './resources/playerBeak.jpg');
        computerImage.setAttribute('src', './resources/computerEgg.jpg');
        resultTextTop.textContent = 'Beak pecks egg.';
    } else if (playerSelection === 'Egg') {
        playerImage.setAttribute('src', './resources/playerEgg.jpg');
        computerImage.setAttribute('src', './resources/computerFeather.jpg');
        resultTextTop.textContent = 'Egg flattens feather.';
    };
    if (playerScore === 5) declareWinner();
}

function playerLost(playerSelection) {
    computerScore++;
    playerScored.textContent = playerScore;
    computerScored.textContent = computerScore;
    resultTextBottom.textContent = 'You lose this round.';
    if (playerSelection === 'Feather') {
        playerImage.setAttribute('src', './resources/playerFeather.jpg');
        computerImage.setAttribute('src', './resources/computerEgg.jpg');
        resultTextTop.textContent = 'Egg flattens feather.';
    } else if (playerSelection === 'Beak') {
        playerImage.setAttribute('src', './resources/playerBeak.jpg');
        computerImage.setAttribute('src', './resources/computerFeather.jpg');
        resultTextTop.textContent = 'Feather tickles beak.';
    } else if (playerSelection === 'Egg') {
        playerImage.setAttribute('src', './resources/playerEgg.jpg');
        computerImage.setAttribute('src', './resources/computerBeak.jpg');
        resultTextTop.textContent = 'Beak pecks egg.';
    };
    if (computerScore === 5) declareWinner();
}

function declareWinner() {
    // Remove event listeners
    featherSelection.removeEventListener('click', featherPlayed);
    eggSelection.removeEventListener('click', eggPlayed);
    beakSelection.removeEventListener('click', beakPlayed);
    // Hide results text and show reset button
    resultTextTop.classList.replace('show', 'hide');
    resultTextBottom.classList.replace('show', 'hide');
    resetButton.classList.replace('hide', 'show');
    resetButton.addEventListener('click', restartGame);
    // Hide gameplay images and show central image
    playerImage.classList.replace('show', 'hide');
    computerImage.classList.replace('show', 'hide');
    winnerImage.classList.replace('hide', 'show');
    // Change heading and show winner's image
    if (playerScore > computerScore) {
        declaredWinner.innerHTML = declaredWinner.innerHTML.replace('First to score 5 points wins!', 'Cockadoodledoo! You win!');
        winnerImage.setAttribute('src', './resources/playerChicken.png');
    } else {
        declaredWinner.innerHTML = declaredWinner.innerHTML.replace('First to score 5 points wins!', 'You lose. Better luck next time... buckAW!');
        winnerImage.setAttribute('src', './resources/computerChicken.png');
    }
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    playerScored.textContent = playerScore;
    computerScored.textContent = computerScore;

    resetButton.classList.replace('show', 'hide');

    resultTextTop.classList.replace('hide', 'show');
    resultTextBottom.classList.replace('hide', 'show');
    resultTextTop.textContent = '';
    resultTextBottom.textContent = '';

    declaredWinner.innerHTML = declaredWinner.innerHTML.replace('Cockadoodledoo! You win!', 'First to score 5 points wins!');
    declaredWinner.innerHTML = declaredWinner.innerHTML.replace('You lose. Better luck next time... buckAW!', 'First to score 5 points wins!');

    resultTextTop.textContent = 'Welcome player...';
    resultTextBottom.textContent = 'CHOOSE YOUR WEAPON:';

    playerImage.classList.replace('hide', 'show');
    playerImage.setAttribute('src', './resources/playerYellow.jpg');
    computerImage.classList.replace('hide', 'show');
    computerImage.setAttribute('src', './resources/computerRed.jpg');
    winnerImage.classList.replace('show', 'hide');

    gamePlay();
}

gamePlay();

