
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    let computerChoice = null;

    if (random == 1) {
        computerChoice = 'rock';
    } else if (random == 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    return computerChoice
}