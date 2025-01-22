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