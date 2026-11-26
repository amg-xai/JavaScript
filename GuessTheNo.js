
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber = Math.floor(Math.random() * 100) + 1;

function guessNumber() {
    rl.question("Guess a number between 1 and 100: ", (input) => {
        let guess = Number(input);

        if (guess < secretNumber) {
            console.log("Too low! Try again.");
            guessNumber();
        } else if (guess > secretNumber) {
            console.log("Too high! Try again.");
            guessNumber();
        } else {
            console.log("Congratulations! You guessed correctly!");
            rl.close();
        }
    });
}

guessNumber();
