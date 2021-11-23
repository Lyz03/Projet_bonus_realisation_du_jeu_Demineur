const grid = document.querySelector('.grid');
let gridWidth = 10;
let squares = [];
let bombsNb = 10;

// create the game board
function gameBoard() {
    // creat bomb
    const bombArray = Array(bombsNb).fill('bomb');
    const emptyArray = Array(gridWidth*gridWidth-bombsNb).fill('empty');
    const gameArray = bombArray.concat(emptyArray);

    // shuffle the array (add bomb randomly)
    for (let i = gameArray.length - 1; i >= 1; i--) {
        let random = Math.floor(Math.random()*(i + 1));
        let save = gameArray[i];
        gameArray[i] = gameArray[random];
        gameArray[random] = save;
    }

    // set the squares
    for (let i = 0; i < gridWidth*gridWidth; i++) {
        const square = document.createElement('div');
        square.id = 'square' +i;
        square.className = gameArray[i];
        grid.appendChild(square);
        squares.push(square);
    }

    // add numbers
    for (let i = 0; i < squares.length; i++) {
        const leftEdge = (i % gridWidth === 0);
        const rightEdge = (i % gridWidth === gridWidth -1);
        let total = 0;

        if (squares[i].className === 'empty') {
            // left
            if (i > 0 && !leftEdge && squares[i - 1].className === 'bomb') {total++; }
            // top
            if (i > 9 && squares[i - gridWidth].className === 'bomb') {total++; }
            // top right
            if (i > 9 && !rightEdge && squares[i + 1 - gridWidth].className === 'bomb') {total++; }
            squares[i].value = total;
            console.log(i + ' ' + squares[i].value);
        }
    }
}
gameBoard();