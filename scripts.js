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
const rulesTitle = document.getElementById('rules-title');
const winTitle = document.getElementById('win-title');
const loseTitle = document.getElementById('lose-title');
const winnerImage = document.getElementById('end-result');
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

    // Replace center images with winner's image
    playerImage.classList.add('fade-out');
    setTimeout(() => playerImage.classList.replace('show', 'hide'), 2001);
    computerImage.classList.add('fade-out');
    setTimeout(() => computerImage.classList.replace('show', 'hide'), 2001);
    setTimeout(() => winnerImage.classList.replace('hide', 'show'), 2001);
    winnerImage.classList.add('fade-in');

    // Hide results text and show reset button
    resultTextTop.classList.add('fade-out');
    setTimeout(() => resultTextTop.classList.replace('show', 'hide'), 2001);
    resultTextBottom.classList.add('fade-out');
    setTimeout(() => resultTextBottom.classList.replace('show', 'hide'), 2001);
    setTimeout(() => resetButton.classList.replace('hide', 'show'), 2001);
    resetButton.classList.add('fade-in');

    // Determine which image and text to show based on the winner
    if (playerScore > computerScore) {
        winnerImage.setAttribute('src', './resources/playerChicken.png');
        rulesTitle.classList.add('fade-out');
        setTimeout(() => rulesTitle.classList.replace('show', 'hide'), 2001);
        setTimeout(() => winTitle.classList.replace('hide', 'show'), 2001);
        winTitle.classList.add('fade-in');
        resetButton.addEventListener('click', restartWinGame);
    } else {
        winnerImage.setAttribute('src', './resources/computerChicken.png');
        rulesTitle.classList.add('fade-out');
        setTimeout(() => rulesTitle.classList.replace('show', 'hide'), 2001);
        setTimeout(() => loseTitle.classList.replace('hide', 'show'), 2001);
        loseTitle.classList.add('fade-in');
        resetButton.addEventListener('click', restartLoseGame);
    }
}

function restartWinGame() {
    playerScore = 0;
    computerScore = 0;
    playerScored.textContent = playerScore;
    computerScored.textContent = computerScore;

    // Replace header text with original
    winTitle.classList.replace('fade-in', 'fade-out');
    setTimeout(() => winTitle.classList.replace('show', 'hide'), 2001);
    setTimeout(() => winTitle.classList.remove('fade-out'), 2002);
    setTimeout(() => rulesTitle.classList.replace('hide', 'show'), 2001);
    rulesTitle.classList.replace('fade-out', 'fade-in-fast');
    setTimeout(() => rulesTitle.classList.remove('fade-in-fast'), 3002);

    // Replace winner's image with center images
    winnerImage.classList.replace('fade-in', 'fade-out');
    setTimeout(() => winnerImage.classList.replace('show', 'hide'), 2001);
    setTimeout(() => winnerImage.classList.remove('fade-out'), 2002);
    playerImage.setAttribute('src', './resources/playerYellow.jpg');
    setTimeout(() => playerImage.classList.replace('hide', 'show'), 2001);
    playerImage.classList.replace('fade-out', 'fade-in-fast');
    setTimeout(() => playerImage.classList.remove('fade-in-fast'), 3002);
    computerImage.setAttribute('src', './resources/computerRed.jpg');
    setTimeout(() => computerImage.classList.replace('hide', 'show'), 2001);
    computerImage.classList.replace('fade-out', 'fade-in-fast');
    setTimeout(() => computerImage.classList.remove('fade-in-fast'), 3002);

    // Replace reset button with original text
    resetButton.classList.replace('fade-in', 'fade-out');
    setTimeout(() => resetButton.classList.replace('show', 'hide'), 2001);
    setTimeout(() => resetButton.classList.remove('fade-out'), 2002);
    resultTextTop.textContent = 'Welcome player...';
    setTimeout(() => resultTextTop.classList.replace('hide', 'show'), 2001);
    resultTextTop.classList.replace('fade-out', 'fade-in-fast');
    setTimeout(() => resultTextTop.classList.remove('fade-in-fast'), 3002);
    resultTextBottom.textContent = 'CHOOSE YOUR WEAPON:';
    setTimeout(() => resultTextBottom.classList.replace('hide', 'show'), 2001);
    resultTextBottom.classList.replace('fade-out', 'fade-in-fast');
    setTimeout(() => resultTextBottom.classList.remove('fade-in-fast'), 3002);
    
    gamePlay();
}

function restartLoseGame() {
    playerScore = 0;
    computerScore = 0;
    playerScored.textContent = playerScore;
    computerScored.textContent = computerScore;

    resetButton.classList.replace('show', 'hide');

    resultTextTop.classList.replace('hide', 'show');
    resultTextBottom.classList.replace('hide', 'show');
    resultTextTop.textContent = '';
    resultTextBottom.textContent = '';

    resultTextTop.textContent = 'Welcome player...';
    resultTextBottom.textContent = 'CHOOSE YOUR WEAPON:';

    // Replace header text with original
    loseTitle.classList.replace('fade-in', 'fade-out');
    setTimeout(() => loseTitle.classList.replace('show', 'hide'), 2001);
    setTimeout(() => loseTitle.classList.remove('fade-out'), 2002);
    setTimeout(() => rulesTitle.classList.replace('hide', 'show'), 2001);
    rulesTitle.classList.replace('fade-out', 'fade-in-fast');
    setTimeout(() => rulesTitle.classList.remove('fade-in-fast'), 3002);

    // Replace winner's image with center images
    winnerImage.classList.replace('fade-in', 'fade-out');
    setTimeout(() => winnerImage.classList.replace('show', 'hide'), 2001);
    setTimeout(() => winnerImage.classList.remove('fade-out'), 2002);
    playerImage.setAttribute('src', './resources/playerYellow.jpg');
    setTimeout(() => playerImage.classList.replace('hide', 'show'), 2001);
    playerImage.classList.replace('fade-out', 'fade-in-fast');
    setTimeout(() => playerImage.classList.remove('fade-in-fast'), 3002);
    computerImage.setAttribute('src', './resources/computerRed.jpg');
    setTimeout(() => computerImage.classList.replace('hide', 'show'), 2001);
    computerImage.classList.replace('fade-out', 'fade-in-fast');
    setTimeout(() => computerImage.classList.remove('fade-in-fast'), 3002);

    // Replace reset button with original text
    resetButton.classList.replace('fade-in', 'fade-out');
    setTimeout(() => resetButton.classList.replace('show', 'hide'), 2001);
    setTimeout(() => resetButton.classList.remove('fade-out'), 2002);
    resultTextTop.textContent = 'Welcome player...';
    setTimeout(() => resultTextTop.classList.replace('hide', 'show'), 2001);
    resultTextTop.classList.replace('fade-out', 'fade-in-fast');
    setTimeout(() => resultTextTop.classList.remove('fade-in-fast'), 3002);
    resultTextBottom.textContent = 'CHOOSE YOUR WEAPON:';
    setTimeout(() => resultTextBottom.classList.replace('hide', 'show'), 2001);
    resultTextBottom.classList.replace('fade-out', 'fade-in-fast');
    setTimeout(() => resultTextBottom.classList.remove('fade-in-fast'), 3002);
    
    gamePlay();
}

gamePlay();