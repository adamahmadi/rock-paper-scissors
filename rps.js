/* Writing the first function to return one of the options randomly */
function getComputerChoice () {
    /* Generating a random number between 0 and 2 */
    const randomNumber = Math.floor (Math.random() * 3);

    /* Return corresponding choice based on the random number */
    if (randomNumber === 0) {
        return "Rock!";
    } else if (randomNumber === 1) {
        return "Paper!";
    } if (randomNumber === 2) {
        return "Scissors!";
    }
    }

    /* Testing function for functionality */
    console.log (getComputerChoice())

/* Writing second function for get player choice */
function getPlayerChoice () {
    let userChoice = prompt ("Choose your option of Rock, Paper or Scissors!");

    if (userChoice === "Rock") {
        return "Rock";
    } else if (userChoice === "Paper") {
        return "Paper";
    } if (userChoice === "Scissors") {
        return "Scissors";
    }
}
    /* Testing getPlayerChoice function */
    console.log (getPlayerChoice())

/* Declaring variables for players scores */
let playerScore = 0;
let computerScore = 0;

console.log (computerScore)