/* Writing the first function to return one of the options randomly */
function getComputerChoice () {
    /* Generating a random number between 0 and 2 */
    const randomNumber = Math.floor (Math.random() * 3);

    /* Return corresponding choice based on the random number */
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } if (randomNumber === 2) {
        return "scissors";
    }
    }

    /* Testing function for functionality */
    /* console.log (getComputerChoice()) */

/* Writing second function for get player choice. Additional edit to include case insensitivity */ 
function getPlayerChoice () {
    let userChoice = prompt ("Choose your option of Rock, Paper or Scissors!");
    userChoice = userChoice.toLowerCase();

    if (userChoice === "rock") {
        return "rock";
    } else if (userChoice === "paper") {
        return "paper";
    } if (userChoice === "scissors") {
        return "scissors";
    }
}
    /* Testing getPlayerChoice function */
    /* console.log (getPlayerChoice()) */

/* console.log (computerScore) */

/* Creating function to play a single round */
function checkWinner (playerChoice , computerChoice) {
    if (playerChoice == computerChoice) {
        return "Tie";
    } else if (
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper")
    )  {
        return "Player";
    } else {
        return "Computer";
    }
}

function playRound (playerChoice , computerChoice) {
    const result = checkWinner (playerChoice , computerChoice);

    if (result == "Tie") {
        return "It\'s a tie!"
    } else if (result == "Player") {
        return `Player wins! ${playerChoice} beats ${computerChoice}`
    } else if (result == "Computer") {
        return `Computer wins! ${computerChoice} beats ${playerChoice}`
    }

}

function game() {
/* Declaring variables for players scores */
let playerScore = 0;
let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        console.log (playRound (playerChoice , computerChoice));
        console.log ("-------------------");
        if (checkWinner (playerChoice , computerChoice) == "Player") {
            playerScore++;
        } else if (checkWinner (playerChoice , computerChoice) == "Computer") {
            computerScore++;
    }
}
    console.log("Game Over!")
    if (playerScore > computerScore) {
       console.log("Player is the winner!");
    } else if (computerScore > playerScore) {
        console.log ("Computer wins!");
    } else { (playerScore == computerScore)
        console.log ("The game is a tie! Play again?");
    }
    }

game()