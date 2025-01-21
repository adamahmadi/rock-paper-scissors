/* Writing the first function to return one of the options randomly */
function getComputerChoice () {
    return Math.random ();
    if (getComputerChoice <= 0.34) {
        return "Rock!";
    } else if (getComputerChoice <= 0.67 && getComputerChoice >= 0.35) {
        return "Paper!";
    } if (getComputerChoice >= 0.68) {
        return "Scissors!";
    }
    }

console.log (Math.random)