const memoryGrid = document.getElementById('memoryGrid');
let firstCard, secondCard;
let hasFlippedCard = false;
let lockBoard = false;

const colors = ['red', 'red', 'blue', 'blue', 'green', 'green', 'yellow', 'yellow', 'orange', 'orange', 'purple', 'purple', 'pink', 'pink', 'brown', 'brown'];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createMemoryCard(color) {
    const card = document.createElement('div');
    card.classList.add('memory-card');
    card.style.backgroundColor = color;
    card.addEventListener('click', flipCard);
    memoryGrid.appendChild(card);
}

function createMemoryBoard() {
    shuffle(colors);
    colors.forEach(color => createMemoryCard(color));
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard.style.backgroundColor === secondCard.style.backgroundColor;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');

        resetBoard();
    }, 1000);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

createMemoryBoard();