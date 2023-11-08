const RPS = ['Rock', 'Paper', 'Scissors']
console.log(RPS);

for (let i = 0; i < RPS.length; i++){
    console.log(RPS[i]);
}

const rockChoice = document.getElementsByClassName('rockChoice');
const paperChoice = document.getElementsByClassName('paperChoice');
const scissorsChoice = document.getElementsByClassName('scissorsChoice');

const playButton = document.getElementsByClassName('playButton');

function randomRPS (){
    let randomIndex = Math.floor(Math.random() * RPS.length);
    let randomItem = RPS[randomIndex];
    console.log(randomItem);
}
randomRPS()