// Show games when clicking the menu
document.getElementById('show-games').onclick = function() {
    document.getElementById('games').style.display = 'block';
    document.getElementById('about').style.display = 'none';
};

// Function to open the specified game
function openGame(game) {
    const output = document.getElementById('game-output');
    output.innerHTML = ''; // Clear previous game content

    switch(game) {
        case 'ticTacToeGame':
            ticTacToeGame(output);
            break;
        case 'colorGuessingGame':
            colorGuessingGame(output);
            break;
        case 'higherLowerGame':
            higherLowerGame(output);
            break;
        case 'emojiGuessingGame':
            emojiGuessingGame(output);
            break;
        case 'memoryCardGame':
            memoryCardGame(output);
            break;
        case 'wordScrambleGame':
            wordScrambleGame(output);
            break;
        case 'diceRollGame':
            diceRollGame(output);
            break;
        case 'simonSaysGame':
            simonSaysGame(output);
            break;
        default:
            output.innerHTML = '<p>Game not found!</p>';
    }
}

// 1. Tic Tac Toe
function ticTacToeGame(output) {
    const board = ['', '', '', '', '', '', '', '', ''];
    output.innerHTML = `
        <h3>Tic Tac Toe</h3>
        <div id="tic-tac-toe" class="tic-tac-toe-board"></div>
        <p id="tic-tac-toe-result"></p>
    `;
    const boardElement = document.getElementById('tic-tac-toe');
    const player = 'X';
    let gameActive = true;

    function renderBoard() {
        boardElement.innerHTML = '';
        board.forEach((cell, index) => {
            const cellElement = document.createElement('div');
            cellElement.className = 'tic-tac-toe-cell';
            cellElement.innerText = cell;
            cellElement.onclick = () => handleCellClick(index);
            boardElement.appendChild(cellElement);
        });
    }

    function handleCellClick(index) {
        if (board[index] === '' && gameActive) {
            board[index] = player;
            if (checkWinner(player)) {
                document.getElementById('tic-tac-toe-result').innerText = `${player} wins!`;
                gameActive = false;
            } else if (board.every(cell => cell !== '')) {
                document.getElementById('tic-tac-toe-result').innerText = 'It\'s a draw!';
                gameActive = false;
            }
            renderBoard();
        }
    }

    function checkWinner(player) {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        return winningCombinations.some(combination => {
            return combination.every(index => board[index] === player);
        });
    }

    renderBoard();
}

// 2. Color Guessing Game
function colorGuessingGame(output) {
    const randomColor = getRandomColor();
    output.innerHTML = `
        <h3>Color Guessing Game</h3>
        <p>Guess the color: <span style="color:${randomColor};">${randomColor}</span></p>
        <input type="text" id="color-guess" placeholder="Enter your guess">
        <button onclick="checkColorGuess()">Guess</button>
        <p id="color-result"></p>
    `;

    function checkColorGuess() {
        const userGuess = document.getElementById('color-guess').value.toLowerCase();
        const result = document.getElementById('color-result');
        if (userGuess === randomColor) {
            result.innerText = 'You guessed it right!';
        } else {
            result.innerText = `Wrong! The correct color was ${randomColor}.`;
        }
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}

// 3. Higher or Lower
function higherLowerGame(output) {
    let currentNumber = Math.floor(Math.random() * 100) + 1;
    output.innerHTML = `
        <h3>Higher or Lower</h3>
        <p>Current number: <span id="current-number">${currentNumber}</span></p>
        <button onclick="nextNumber('higher')">Higher</button>
        <button onclick="nextNumber('lower')">Lower</button>
        <p id="hl-result"></p>
    `;

    function nextNumber(guess) {
        const nextNumber = Math.floor(Math.random() * 100) + 1;
        const result = document.getElementById('hl-result');
        document.getElementById('current-number').innerText = nextNumber;
        if ((guess === 'higher' && nextNumber > currentNumber) || 
            (guess === 'lower' && nextNumber < currentNumber)) {
            result.innerText = 'You guessed right!';
        } else {
            result.innerText = 'Wrong guess! Try again.';
        }
        currentNumber = nextNumber; // Update the current number
    }
}

// 4. Emoji Guessing Game
function emojiGuessingGame(output) {
    const emojis = ['😊', '😢', '😂', '😎', '🤔'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    output.innerHTML = `
        <h3>Emoji Guessing Game</h3>
        <p>What does this emoji mean? <span>${randomEmoji}</span></p>
        <input type="text" id="emoji-guess" placeholder="Your guess">
        <button onclick="checkEmojiGuess()">Guess</button>
        <p id="emoji-result"></p>
    `;

    function checkEmojiGuess() {
        const userGuess = document.getElementById('emoji-guess').value.toLowerCase();
        const result = document.getElementById('emoji-result');
        const meanings = {
            '😊': 'Happy',
            '😢': 'Sad',
            '😂': 'Laughing',
            '😎': 'Cool',
            '🤔': 'Thinking'
        };
        if (meanings[randomEmoji].toLowerCase() === userGuess) {
            result.innerText = 'Correct! Well done!';
        } else {
            result.innerText = `Wrong! It means ${meanings[randomEmoji]}.`;
        }
    }
}

// 5. Memory Card Game
function memoryCardGame(output) {
    const cards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'];
    let selectedCards = [];
    let matchedCards = [];
    output.innerHTML = '<h3>Memory Card Game</h3><div id="memory-board" class="memory-board"></div>';
    const boardElement = document.getElementById('memory-board');

    shuffle(cards).forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'memory-card';
        cardElement.dataset.value = card;
        cardElement.innerText = '?';
        cardElement.onclick = () => flipCard(cardElement);
        boardElement.appendChild(cardElement);
    });

    function flipCard(cardElement) {
        if (selectedCards.length < 2 && !matchedCards.includes(cardElement)) {
            cardElement.innerText = cardElement.dataset.value;
            selectedCards.push(cardElement);
            if (selectedCards.length === 2) {
                setTimeout(checkForMatch, 1000);
            }
        }
    }

    function checkForMatch() {
        if (selectedCards[0].dataset.value === selectedCards[1].dataset.value) {
            matchedCards.push(selectedCards[0]);
            matchedCards.push(selectedCards[1]);
            selectedCards = [];
        } else {
            selectedCards.forEach(card => card.innerText = '?');
            selectedCards = [];
        }
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}

// 6. Word Scramble
function wordScrambleGame(output) {
    const words = ['javascript', 'html', 'css', 'nodejs', 'react'];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const scrambledWord = randomWord.split('').sort(() => Math.random() - 0.5).join('');
    output.innerHTML = `
        <h3>Word Scramble</h3>
        <p>Unscramble this word: <strong>${scrambledWord}</strong></p>
        <input type="text" id="word-guess" placeholder="Your guess">
        <button onclick="checkWordGuess()">Guess</button>
        <p id="word-result"></p>
    `;

    function checkWordGuess() {
        const userGuess = document.getElementById('word-guess').value.toLowerCase();
        const result = document.getElementById('word-result');
        if (userGuess === randomWord) {
            result.innerText = 'Correct! Well done!';
        } else {
            result.innerText = `Wrong! The correct word was ${randomWord}.`;
        }
    }
}

// 7. Dice Roll Simulator
function diceRollGame(output) {
    output.innerHTML = `
        <h3>Dice Roll Simulator</h3>
        <button onclick="rollDice()">Roll the Dice</button>
        <p id="dice-result"></p>
    `;

    function rollDice() {
        const diceValue = Math.floor(Math.random() * 6) + 1;
        document.getElementById('dice-result').innerText = `You rolled a ${diceValue}!`;
    }
}

// 8. Simon Says
function simonSaysGame(output) {
    const colors = ['Red', 'Green', 'Blue', 'Yellow'];
    let simonSequence = [];
    let userSequence = [];
    output.innerHTML = `
        <h3>Simon Says</h3>
        <p>Follow the pattern: <span id="simon-sequence"></span></p>
        <button onclick="startSimonSays()">Start</button>
        <input type="text" id="simon-guess" placeholder="Enter the sequence">
        <button onclick="checkSimonSequence()">Guess</button>
        <p id="simon-result"></p>
    `;

    function startSimonSays() {
        simonSequence.push(colors[Math.floor(Math.random() * colors.length)]);
        document.getElementById('simon-sequence').innerText = simonSequence.join(', ');
    }

    function checkSimonSequence() {
        userSequence = document.getElementById('simon-guess').value.split(',');
        const result = document.getElementById('simon-result');
        if (JSON.stringify(userSequence) === JSON.stringify(simonSequence)) {
            result.innerText = 'Correct! Keep going!';
            startSimonSays();
        } else {
            result.innerText = 'Wrong! Try again.';
        }
    }
}
