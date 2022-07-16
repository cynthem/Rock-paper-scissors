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
    const lowerCase = playerSelection.toLowerCase();
    const convertedSelection = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    computerSelection = getComputerChoice();
    if (convertedSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (convertedSelection === 'Feather' && computerSelection === 'Beak') || 
        (convertedSelection === 'Beak' && computerSelection === 'Egg') ||
        (convertedSelection === 'Egg' && computerSelection === 'Feather') 
    ) {
        return "Cockadoodledoo! You win!";
    } else if (
        (convertedSelection === 'Feather' && computerSelection === 'Egg') || 
        (convertedSelection === 'Beak' && computerSelection === 'Feather') ||
        (convertedSelection === 'Egg' && computerSelection === 'Beak') 
    ) {
        return "You lose... bok BOK!";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let answer = prompt("Enter a choice: ");
        let result = playRound(answer);
        console.log(result);
        if (result === "It's a tie!") {
            playerScore++;
            computerScore++;
            console.log(`Your score: ${playerScore}`);
            console.log(`Computer score: ${computerScore}`);
        } else if (result === "Cockadoodledoo! You win!") {
            playerScore++;
            console.log(`Your score: ${playerScore}`);
            console.log(`Computer score: ${computerScore}`);
        } else if (result === "You lose... bok BOK!") {
            computerScore++;
            console.log(`Your score: ${playerScore}`);
            console.log(`Computer score: ${computerScore}`);
        }
    }
    if (playerScore === computerScore) {
        console.log("It's a tie! No one wins.");
    } else if (playerScore > computerScore) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}

game();


