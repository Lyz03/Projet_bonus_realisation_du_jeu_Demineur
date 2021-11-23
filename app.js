const grid = document.querySelector('.grid');
let gridWidth = 10;
let squares = []
let bombsNb = 20

// create the game board
function gameBoard() {
    // add bombs randomly

    // set the squares
    for (let i = 0; i < gridWidth*gridWidth; i++) {
        const square = document.createElement('div');
        square.id = 'square' +i;
        console.log(square.id);
        grid.appendChild(square);
        squares.push(square);
    }
}

gameBoard();