// Show games when clicking the menu
document.getElementById('show-games').onclick = function() {
    document.getElementById('games').style.display = 'block';
    document.getElementById('about').style.display = 'none';
};

// Unlock games with a button click
document.getElementById('unlock-button').onclick = function() {
    const gamesSection = document.getElementById('games');
    const showGamesButton = document.getElementById('show-games');
    
    // Check if games are already unlocked
    if (gamesSection.style.display === 'none') {
        gamesSection.style.display = 'block';
        showGamesButton.style.display = 'inline'; // Show the menu item
        document.getElementById('about').style.display = 'none';
        alert("Games unlocked! Have fun!");
    } else {
        alert("Games are already unlocked!");
    }
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
        case 'tetrisGame':
            tetrisGame(output);
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
    let currentPlayer = 'X';
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
            board[index] = currentPlayer;
            if (checkWinner(currentPlayer)) {
                document.getElementById('tic-tac-toe-result').innerText = `${currentPlayer} wins!`;
                gameActive = false;
            } else if (board.every(cell => cell !== '')) {
                document.getElementById('tic-tac-toe-result').innerText = 'It\'s a draw!';
                gameActive = false;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch player
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
        currentNumber = nextNumber; // Update current number
    }
}

// 4. Emoji Guessing Game
function emojiGuessingGame(output) {
    const emojis = ['😊', '😂', '😢', '😡', '😍', '😎', '🤔', '🤯'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    output.innerHTML = `
        <h3>Emoji Guessing Game</h3>
        <p>Guess the emoji: <span style="font-size: 50px;">${randomEmoji}</span></p>
        <input type="text" id="emoji-guess" placeholder="Enter your guess">
        <button onclick="checkEmojiGuess()">Guess</button>
        <p id="emoji-result"></p>
    `;

    function checkEmojiGuess() {
        const userGuess = document.getElementById('emoji-guess').value;
        const result = document.getElementById('emoji-result');
        if (userGuess === randomEmoji) {
            result.innerText = 'You guessed it right!';
        } else {
            result.innerText = `Wrong! The correct emoji was ${randomEmoji}.`;
        }
    }
}

// 5. Memory Card Game
function memoryCardGame(output) {
    const cards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'];
    let firstCard = null;
    let secondCard = null;
    let matchesFound = 0;
    output.innerHTML = `<h3>Memory Card Game</h3><div class="memory-cards"></div><p id="memory-result"></p>`;
    
    const memoryCardsElement = output.querySelector('.memory-cards');
    shuffle(cards);
    
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'memory-card';
        cardElement.innerText = '?';
        cardElement.onclick = () => handleCardClick(cardElement, card);
        memoryCardsElement.appendChild(cardElement);
    });

    function handleCardClick(cardElement, card) {
        if (cardElement.classList.contains('flipped') || secondCard) return;
        
        cardElement.innerText = card;
        cardElement.classList.add('flipped');

        if (!firstCard) {
            firstCard = { element: cardElement, value: card };
        } else {
            secondCard = { element: cardElement, value: card };
            checkForMatch();
        }
    }

    function checkForMatch() {
        if (firstCard.value === secondCard.value) {
            matchesFound++;
            document.getElementById('memory-result').innerText = `Matched! Total Matches: ${matchesFound}`;
            resetCards();
        } else {
            setTimeout(() => {
                firstCard.element.innerText = '?';
                secondCard.element.innerText = '?';
                resetCards();
            }, 1000);
        }
    }

    function resetCards() {
        firstCard = null;
        secondCard = null;
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}

// 6. Word Scramble
function wordScrambleGame(output) {
    const words = ['science', 'biology', 'chemistry', 'physics', 'astronomy'];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const scrambledWord = randomWord.split('').sort(() => Math.random() - 0.5).join('');
    output.innerHTML = `
        <h3>Word Scramble</h3>
        <p>Unscramble the word: ${scrambledWord}</p>
        <input type="text" id="word-guess" placeholder="Enter your guess">
        <button onclick="checkWordGuess('${randomWord}')">Guess</button>
        <p id="word-result"></p>
    `;

    function checkWordGuess(correctWord) {
        const userGuess = document.getElementById('word-guess').value.toLowerCase();
        const result = document.getElementById('word-result');
        if (userGuess === correctWord) {
            result.innerText = 'Correct! You guessed it right!';
        } else {
            result.innerText = `Wrong! The correct word was ${correctWord}.`;
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
        const roll = Math.floor(Math.random() * 6) + 1;
        document.getElementById('dice-result').innerText = `You rolled a ${roll}!`;
    }
}

// 8. Simon Says
function simonSaysGame(output) {
    const colors = ['Red', 'Green', 'Blue', 'Yellow'];
    let sequence = [];
    let userSequence = [];
    output.innerHTML = `
        <h3>Simon Says</h3>
        <p>Repeat the sequence!</p>
        <button onclick="nextRound()">Start</button>
        <p id="simon-result"></p>
    `;

    function nextRound() {
        userSequence = [];
        const nextColor = colors[Math.floor(Math.random() * colors.length)];
        sequence.push(nextColor);
        document.getElementById('simon-result').innerText = `Sequence: ${sequence.join(', ')}`;
        setTimeout(() => {
            alert(`Your turn! Enter the sequence.`);
        }, 1000);
    }
}

// 9. Tetris
function tetrisGame(output) {
    output.innerHTML = `
        <h3>Tetris</h3>
        <canvas id="tetrisCanvas" width="240" height="400" style="border: 1px solid #000;"></canvas>
        <button onclick="startTetris()">Start Game</button>
        <p id="tetris-result"></p>
    `;
    
    let canvas = document.getElementById('tetrisCanvas');
    let context = canvas.getContext('2d');
    let board = Array.from({ length: 20 }, () => Array(10).fill(0));
    let currentPiece;
    
    function startTetris() {
        currentPiece = createPiece();
        drawBoard();
        // Game loop can be added here for actual gameplay
    }

    function createPiece() {
        const pieces = 'IJLOSTZ';
        const type = pieces[Math.floor(Math.random() * pieces.length)];
        return { shape: type, position: { x: 4, y: 0 } };
    }

    function drawBoard() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        board.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value) {
                    context.fillStyle = 'black'; // Example block color
                    context.fillRect(x * 20, y * 20, 20, 20);
                }
            });
        });
        // Draw current piece here (not implemented)
    }
}
