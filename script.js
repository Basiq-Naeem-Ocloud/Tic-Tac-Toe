const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const restart = document.getElementById('restart');
let currentPlayer = 'X';
let gameActive = true;
let board = ['', '', '', '', '', '', '', '', '']; //initializing board array
const turnMessage = document.getElementById('player-turn'); //keeping track of players turn
turnMessage.textContent = `${currentPlayer}'s turn` ;

function cellClicked(cellIndex)
{
    if (board[cellIndex] === '' && gameActive) {
        board[cellIndex] = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].innerHTML= currentPlayer
        // cell.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        turnMessage.textContent = `${currentPlayer}'s turn` ;
        checkWinner();

    }
}


function checkWinner() {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            turnMessage.textContent = ' ' ;
            message.textContent = `${board[a]} wins! 🎉`;
            return;
        }
    }

    if (!board.includes('')) {
        gameActive = false;
        turnMessage.textContent = ' ';
        message.textContent = "It's a tie!";
    }
}

function restartGame() {
    cells.forEach(cell => {
        cell.textContent = '';
    });
    // Reset game state variables
    currentPlayer = 'X';
    gameActive = true;
    board = ['', '', '', '', '', '', '', '', ''];


    message.textContent = '';
    turnMessage.textContent = `${currentPlayer}'s turn` ;
}

restart.addEventListener('click', restartGame);
