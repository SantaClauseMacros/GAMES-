document.addEventListener('keydown', function(event) {
    if (event.key === 'g') { // Press 'g' to show the game area
        document.getElementById('hidden-game-area').style.display = 'block';
    }
});

function startGame(game) {
    const output = document.getElementById('game-output');
    output.innerHTML = ''; // Clear previous game output
    switch (game) {
        case 'guessing':
            numberGuessingGame(output);
            break;
        case 'rockPaperScissors':
            rockPaperScissorsGame(output);
            break;
        case 'ticTacToe':
            ticTacToeGame(output);
            break;
        case 'colorGuessing':
            colorGuessingGame(output);
            break;
        case 'higherLower':
            higherLowerGame(output);
            break;
        case 'emojiGuessing':
            emojiGuessingGame(output);
            break;
        case 'memoryCard':
            memoryCardGame(output);
            break;
        case 'wordScramble':
            wordScrambleGame(output);
            break;
        case 'diceRoll':
            diceRollGame(output);
            break;
        case 'simonSays':
            simonSaysGame(output);
            break;
        default:
            output.innerHTML = '<p>Game not found!</p>';
    }
}

// 1. Number Guessing Game
function numberGuessingGame(output) {
    output.innerHTML = `
        <h3>Number Guessing Game</h3>
        <p>Guess a number between 1 and 100!</p>
        <input type="number" id="guess" min="1" max="100">
        <button onclick="checkGuess()">Guess</button>
        <p id="result"></p>
    `;
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    window.currentNumber = randomNumber; // Store the number in a global variable

    function checkGuess() {
        const userGuess = parseInt(document.getElementById('guess').value);
        const result = document.getElementById('result');
        if (userGuess === currentNumber) {
            result.innerText = 'Congratulations! You guessed the right number!';
        } else if (userGuess < currentNumber) {
            result.innerText = 'Too low! Try again.';
        } else {
            result.innerText = 'Too high! Try again.';
        }
    }
}

// 2. Rock Paper Scissors
function rockPaperScissorsGame(output) {
    output.innerHTML = `
        <h3>Rock Paper Scissors</h3>
        <p>Choose: Rock, Paper, or Scissors!</p>
        <button onclick="playRPS('rock')">Rock</button>
        <button onclick="playRPS('paper')">Paper</button>
        <button onclick="playRPS('scissors')">Scissors</button>
        <p id="rps-result"></p>
    `;

    function playRPS(userChoice) {
        const choices = ['rock', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const result = document.getElementById('rps-result');
        
        if (userChoice === computerChoice) {
            result.innerText = `It's a tie! You both chose ${computerChoice}.`;
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            result.innerText = `You win! ${userChoice} beats ${computerChoice}.`;
        } else {
            result.innerText = `You lose! ${computerChoice} beats ${userChoice}.`;
        }
    }
}

// 3. Tic Tac Toe
function ticTacToeGame(output) {
    output.innerHTML = `
        <h3>Tic Tac Toe</h3>
        <div id="tic-tac-toe-board"></div>
        <p id="ttt-result"></p>
    `;
    const board = document.getElementById('tic-tac-toe-board');
    const result = document.getElementById('ttt-result');
    let currentPlayer = 'X';
    let boardState = ['', '', '', '', '', '', '', '', ''];
    
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.className = 'tic-tac-toe-cell';
        cell.addEventListener('click', () => handleCellClick(i));
        board.appendChild(cell);
    }
    
    function handleCellClick(index) {
        if (boardState[index] === '' && !result.innerText) {
            boardState[index] = currentPlayer;
            updateBoard();
            if (checkWinner()) {
                result.innerText = `${currentPlayer} wins!`;
            } else if (boardState.every(cell => cell !== '')) {
                result.innerText = 'It\'s a draw!';
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    }

    function updateBoard() {
        const cells = board.children;
        for (let i = 0; i < 9; i++) {
            cells[i].innerText = boardState[i];
        }
    }

    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        return winningCombinations.some(combination => {
            return combination.every(index => boardState[index] === currentPlayer);
        });
    }
}

// 4. Color Guessing Game
function colorGuessingGame(output) {
    const randomColor = getRandomColor();
    output.innerHTML = `
        <h3>Color Guessing Game</h3>
        <p>Guess the color: <span style="color: ${randomColor};">${randomColor}</span></p>
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

// 5. Higher or Lower
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

// 6. Emoji Guessing Game
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
        if (meanings[randomEmoji] === userGuess) {
            result.innerText = 'Correct! Well done!';
        } else {
            result.innerText = `Wrong! It means ${meanings[randomEmoji]}.`;
        }
    }
}

// 7. Memory Card Game
function memoryCardGame(output) {
    const cards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'];
    let selectedCards = [];
    let matchedCards = 0;
    output.innerHTML = `
        <h3>Memory Card Game</h3>
        <div id="memory-board"></div>
        <p id="memory-result"></p>
    `;
    const board = document.getElementById('memory-board');
    shuffle(cards);

    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'memory-card';
        cardElement.setAttribute('data-card', card);
        cardElement.addEventListener('click', () => handleCardClick(cardElement));
        board.appendChild(cardElement);
    });

    function handleCardClick(cardElement) {
        if (selectedCards.length < 2 && !cardElement.classList.contains('matched')) {
            cardElement.innerText = cardElement.getAttribute('data-card');
            selectedCards.push(cardElement);
            if (selectedCards.length === 2) {
                checkMatch();
            }
        }
    }

    function checkMatch() {
        const [card1, card2] = selectedCards;
        if (card1.getAttribute('data-card') === card2.getAttribute('data-card')) {
            card1.classList.add('matched');
            card2.classList.add('matched');
            matchedCards += 2;
            if (matchedCards === cards.length) {
                document.getElementById('memory-result').innerText = 'You matched all cards!';
            }
        } else {
            setTimeout(() => {
                card1.innerText = '';
                card2.innerText = '';
            }, 1000);
        }
        selectedCards = [];
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}

// 8. Word Scramble
function wordScrambleGame(output) {
    const words = ['javascript', 'programming', 'html', 'css', 'python'];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const scrambledWord = randomWord.split('').sort(() => Math.random() - 0.5).join('');
    output.innerHTML = `
        <h3>Word Scramble</h3>
        <p>Unscramble the word: <strong>${scrambledWord}</strong></p>
        <input type="text" id="word-guess" placeholder="Your guess">
        <button onclick="checkWordGuess()">Guess</button>
        <p id="word-result"></p>
    `;

    function checkWordGuess() {
        const userGuess = document.getElementById('word-guess').value.toLowerCase();
        const result = document.getElementById('word-result');
        if (userGuess === randomWord) {
            result.innerText = 'You unscrambled it right!';
        } else {
            result.innerText = `Wrong! The correct word was ${randomWord}.`;
        }
    }
}

// 9. Dice Roll Simulator
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

// 10. Simple Simon Says
function simonSaysGame(output) {
    const colors = ['red', 'green', 'blue', 'yellow'];
    let sequence = [];
    let userSequence = [];
    output.innerHTML = `
        <h3>Simon Says</h3>
        <button onclick="startSimon()">Start Game</button>
        <div id="simon-buttons"></div>
        <p id="simon-result"></p>
    `;

    function startSimon() {
        sequence.push(colors[Math.floor(Math.random() * colors.length)]);
        displaySequence();
    }

    function displaySequence() {
        const buttons = document.getElementById('simon-buttons');
        buttons.innerHTML = '';
        sequence.forEach((color, index) => {
            setTimeout(() => {
                const button = document.createElement('div');
                button.className = 'simon-button';
                button.style.backgroundColor = color;
                buttons.appendChild(button);
            }, index * 1000);
        });
    }
}
