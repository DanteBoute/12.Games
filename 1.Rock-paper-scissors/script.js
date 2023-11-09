const RPS = ['Melee', 'Ranged', 'Magic']
console.log(RPS);

for (let i = 0; i < RPS.length; i++){
    console.log(RPS[i]);
}

const choices = document.querySelectorAll('.choice');
const resultDiv = document.getElementsByClassName('outcome')[0];

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
        (playerChoice === 'Melee' && computerChoice === 'Ranged') ||
        (playerChoice === 'Ranged' && computerChoice === 'Magic') ||
        (playerChoice === 'Magic' && computerChoice === 'Melee')
    ) {
        return "You win!";
    } else {
        return 'You die! Back to Lumbridge!';
    }
}

function displayResultPopup(result) {
    const modal = document.getElementById('myModal');
    const resultPopup = document.getElementById('resultPopup');
    resultPopup.innerHTML = result;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

function playAgain() {
    closeModal();
    resultDiv.innerHTML = '';
}

choices.forEach(choice => {
    choice.addEventListener('click', function() {
        const playerChoice = this.textContent;
        const computerChoice = randomRPS();
        const result = compareChoices(playerChoice, computerChoice);

        displayResultPopup(`You're choice: ${playerChoice} <br> Computer's choice: ${computerChoice} <br>
        ${result}`);
    });
})