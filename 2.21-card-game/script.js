const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

const deck = [];

for (const suit of suits) {
  for (const rank of ranks) {
    let value = parseInt(rank) || (rank === 'Ace' ? 1 : 10); // Assign values to cards
    deck.push({ rank, suit, value });
  }
}

function getRandomCard() {
    const randomIndex = Math.floor(Math.random() * deck.length);
    return deck[randomIndex];
}
const drawButton = document.getElementById('drawCardBtn');
const stopButton = document.getElementById('stopBtn');
const startOverButton = document.getElementById('startOverBtn');
const playerDrawnCardsList = document.getElementById('playerDrawnCardsList');
const dealerDrawnCardsList = document.getElementById('dealerDrawnCardsList');
const playerTotalValueSpan = document.getElementById('playerTotalValue');
const dealerTotalValueSpan = document.getElementById('dealerTotalValue');
const playerOutcome = document.getElementById('playerOutcome');
const dealerOutcome = document.getElementById('dealerOutcome');

let playerTotalValue = 0;
let dealerTotalValue = 0;

// const randomCardAttributes = randomCard.rank + ' of ' + randomCard.suit;
// console.log(randomCardAttributes);

drawButton.addEventListener('click', function() {
    // Player's turn
    const playerCard = getRandomCard();
    const playerCardAttributes = playerCard.rank + ' of ' + playerCard.suit;
    const playerListofDrawnCards = document.createElement('li');
    playerListofDrawnCards.textContent = playerCardAttributes;
    playerTotalValue += playerCard.value;
    playerTotalValueSpan.textContent = 'Player Total Value: '+ playerTotalValue;
    playerDrawnCardsList.appendChild(playerListofDrawnCards);

    // Check if player is burnt
    if (playerTotalValue > 21) {
        playerOutcome.textContent = "Player is burnt! Please try again.";
        endGame();
    } else {
        // Computer's turn
        const dealerCard = getRandomCard();
        const dealerCardAttributes = dealerCard.rank + ' of ' + dealerCard.suit;
        const dealerListofDrawnCards = document.createElement('li');
        dealerListofDrawnCards.textContent = dealerCardAttributes;
        dealerTotalValue += dealerCard.value;
        dealerTotalValueSpan.textContent = 'Dealer Total Value: '+ dealerTotalValue;
        dealerDrawnCardsList.appendChild(dealerListofDrawnCards);

        // Check if dealer is burnt or should stop drawing
        if (dealerTotalValue > 21 || dealerTotalValue >= 17) {
            dealerOutcome.textContent = "Dealer is done drawing.";
            endGame();
        }
    }
});

stopButton.addEventListener('click', function() {
    // Player stops drawing, now it's the computer's turn
    while (dealerTotalValue < 17) {
        const dealerCard = getRandomCard();
        const dealerCardAttributes = dealerCard.rank + ' of ' + dealerCard.suit;
        const dealerListofDrawnCards = document.createElement('li');
        dealerListofDrawnCards.textContent = dealerCardAttributes;
        dealerTotalValue += dealerCard.value;
        dealerTotalValueSpan.textContent = 'Dealer Total Value: '+ dealerTotalValue;
        dealerDrawnCardsList.appendChild(dealerListofDrawnCards);

        // Check if dealer is burnt or should stop drawing
        if (dealerTotalValue > 21 || dealerTotalValue >= 17) {
            dealerOutcome.textContent = "Dealer is done drawing.";
            endGame();
        }
    }
});

function endGame() {
    drawButton.style.display = 'none';
    stopButton.style.display = 'none';
    startOverButton.style.display = 'inline-block';
}

startOverButton.addEventListener('click', function() {
    playerTotalValue = 0;
    dealerTotalValue = 0;
    playerTotalValueSpan.textContent = 'Player Total Value: '+ playerTotalValue;
    dealerTotalValueSpan.textContent = 'Dealer Total Value: '+ dealerTotalValue;
    playerOutcome.textContent = '';
    dealerOutcome.textContent = '';
    playerDrawnCardsList.innerHTML = '';
    dealerDrawnCardsList.innerHTML = '';
    drawButton.style.display = 'inline-block';
    stopButton.style.display = 'inline-block';
    startOverButton.style.display = 'none';
});