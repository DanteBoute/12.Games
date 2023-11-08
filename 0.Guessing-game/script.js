

// TO DO: Generate a random number between 0 and 26.
const randomNumber = Math.floor(Math.random() * 27);
console.log(randomNumber);


//TO DO: Create consts for every element I'll need below.
const guessInput = document.getElementById('guess');
const playButton = document.getElementById('playButton');
const resultDiv = document.getElementById('result');

//TO DO: Check if the numbers are equal.
function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    if (userGuess === randomNumber) {
        alert(`Awesome! Your number ${userGuess} was correct. 
        You can be named many things, hungry not being one of them.`)
    }
    else {
        alert(`Bummer... You guessed ${userGuess} and the secret number was ${randomNumber}.`)
    }
    // Browser automatically reloads after clicking away the alert box.
    setTimeout(function() {
        window.location.reload();
    }, 0);
}
playButton.addEventListener('click', checkGuess);