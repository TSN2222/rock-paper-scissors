let humanScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    let computerChoice = undefined;

    if (random == 1) {
        computerChoice = 'rock';
    } 
    else if (random == 2) {
        computerChoice = 'paper';
    }
    else {
        computerChoice = 'scissors';
    }

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt('Enter Weapon Of Choice:');
    humanChoice = humanChoice.toLowerCase();

    while ((humanChoice != 'rock') && (humanChoice != 'paper') && (humanChoice != 'scissors')) {
        console.log(`${humanChoice} is not rock, paper, or scissors. Please enter a valid weapon!`);
        humanChoice = prompt('Enter A VALID Weapon Of Choice:');
        humanChoice = humanChoice.toLowerCase();
    }

    return humanChoice;
}