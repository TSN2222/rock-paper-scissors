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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log(`${humanChoice} ties with ${computerChoice}! No points will be awarded!`);
        }
        else if (humanChoice == 'rock' && computerChoice == 'scissors') {
            console.log(`${humanChoice} beats ${computerChoice}! One point will be awarded to you!`);
            humanScore++;
        }
        else if (humanChoice == 'paper' && computerChoice == 'rock') {
            console.log(`${humanChoice} beats ${computerChoice}! One point will be awarded to you!`);
            humanScore++;
        }
        else if (humanChoice == 'scissors' && computerChoice == 'paper') {
            console.log(`${humanChoice} beats ${computerChoice}! One point will be awarded to you!`);
            humanScore++;
        }
        else if (humanChoice == 'rock' && computerChoice == 'paper') {
            console.log(`${humanChoice} loses to ${computerChoice}! One point will be awarded to the computer!`);
            computerScore++;
        }
        else if (humanChoice == 'paper' && computerChoice == 'scissors') {
            console.log(`${humanChoice} loses to ${computerChoice}! One point will be awarded to the computer!`);
            computerScore++;
        }
        else if (humanChoice == 'scissors' && computerChoice == 'rock') {
            console.log(`${humanChoice} loses to ${computerChoice}! One point will be awarded to the computer!`);
            computerScore++;
        }
        round++;
        console.log(`Round: ${round}`);
    }

    while (round != 5) {
        playRound(getHumanChoice(), getComputerChoice())
    }

    if(humanScore > computerScore) {
        console.log(`You win! It was ${humanScore} to ${computerScore}`);
    }
    else if (humanScore < computerScore) {
        console.log(`You lose! It was ${humanScore} to ${computerScore}`); 
    }
    else {
        console.log(`You tied! It was ${humanScore} to ${computerScore}`); 
    }
}

playGame();