const RPS = ['Rock', 'Paper', 'Scissors']
console.log(RPS);

for (let i = 0; i < RPS.length; i++){
    console.log(RPS[i]);
}

const choices = document.querySelectorAll('.choice');
const resultDiv = document.getElementsByClassName('outcome')[0];
// const rockChoice = document.getElementsByClassName('rockChoice')[0];
// const paperChoice = document.getElementsByClassName('paperChoice')[0];
// const scissorsChoice = document.getElementsByClassName('scissorsChoice')[0];

function randomRPS (){
    let randomIndex = Math.floor(Math.random() * RPS.length);
    let randomItem = RPS[randomIndex];
    return randomItem;
}

function compareChoices(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a draw!";
    }
    else if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        return "You win!";
    } else {
        return 'Computer wins!';
    }
}

choices.forEach(choice => {
    choice.addEventListener('click', function() {
        const playerChoice = this.textContent;
        const computerChoice = randomRPS();

        resultDiv.innerHTML = `You're choice: ${playerChoice} <br> Computer's choice: ${computerChoice} <br>
        Result: ${compareChoices(playerChoice, computerChoice)}`;
    });
})
// Display the contents of the buttons
// rockChoice.addEventListener('click', function(determineResult) {
    
// })

// paperChoice.addEventListener('click', function() {
//     console.log(paperChoice.textContent);
//     if (randomItem === paperChoice) {
//         console.log('DRAW');
//     elseif (randomItem === '')
//     }
// })

// scissorsChoice.addEventListener('click', function() {
//     console.log(scissorsChoice.textContent);
// })

// function determineResult () {
//     if (randomItem === ){
//         console.log("")
//     }
// }