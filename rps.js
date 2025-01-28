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
    console.log (getComputerChoice())

/* Writing second function for get player choice. Additional edit to include case insensitivity */ 
function getPlayerChoice () {
    let userChoice = prompt ("Choose your option of Rock, Paper or Scissors!");
    userChoice = userChoice.toLowerCase();

    if (userChoice === "rock") {
        return "Rock";
    } else if (userChoice === "paper") {
        return "Paper";
    } if (userChoice === "scissors") {
        return "Scissors";
    }
}
    /* Testing getPlayerChoice function */
    console.log (getPlayerChoice())

/* Declaring variables for players scores */
let playerScore = 0;
let computerScore = 0;

console.log (computerScore)

/* Creating function to play a single round */
function playRound (playerChoice , computerChoice) {
    let result;
    playerChoice = getPlayerChoice
    computerChoice = getComputerChoice

    if (playerChoice === computerChoice) {
        result = "It\'s a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        result = "You win!";
    } else {
        computerScore++;
        result = "Computer wins!";
    }
}
