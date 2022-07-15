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
    const computerSelection = getComputerChoice();
    if (convertedSelection === computerSelection) {
        return "It's a tie! Try again.";
    } else if (
        (convertedSelection === 'Feather' && computerSelection === 'Beak') || 
        (convertedSelection === 'Beak' && computerSelection === 'Egg') ||
        (convertedSelection === 'Egg' && computerSelection === 'Feather') 
    ) {
        return "You win! bok BOK!";
    } else if (
        (convertedSelection === 'Feather' && computerSelection === 'Egg') || 
        (convertedSelection === 'Beak' && computerSelection === 'Feather') ||
        (convertedSelection === 'Egg' && computerSelection === 'Beak') 
    ) {
        return "You lose... better luck next time. buckAH!";
    }
}