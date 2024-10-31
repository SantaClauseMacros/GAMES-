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
        <p>Guess the color: <span style="color: ${randomColor
