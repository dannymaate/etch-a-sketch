makeSquares();
colourSquares();
removeColour();

/**Creates a 16 x 16 grid  by default*/
var squareDiv;
function makeSquares() {
    for (let i = 0; i < 256; i++) {
        squareDiv = document.createElement("div");
        squareDiv.classList.add('squares');
        squareDiv.setAttribute('style', 'float: left; border: 0.01px solid black; background-color: white; height: 25px; width: 25px');
        grid.appendChild(squareDiv);
    }
}

var numberOfSquares = 0;
var sideLength = 0;
var input = 0;

const newGridButton = document.querySelector('.newGridButton');
newGridButton.addEventListener('click', changeSquares);

/**Creates a new grid (a x a) based on user input */
function changeSquares() {
    calculateSquareSize();
    if (input > 100) {
        return alert('You must enter an integer less than 100');
    }

    if (input <= 0) {
        return alert('You must enter a positive integer');
    }
    else {
        removeSquares();
        for (let i = 0; i < numberOfSquares; i++) {
            squareDiv = document.createElement("div");
            squareDiv.classList.add('squares');
            squareDiv.setAttribute('style', `float: left; border: 0.01px solid black; background-color: white; height: ${sideLength}px; width: ${sideLength}px`);
            grid.appendChild(squareDiv);
        }
    }
    colourSquares();
    removeColour();
}

//Calculates the side length and width of each square for an (a x a) grid
function calculateSquareSize() {
    input = prompt("How many squares would you like in an (a x a) grid?");
    sideLength = (410 - 10) / input; //length of grid subtract border width
    numberOfSquares = input ** 2;

    console.log(`The number of squares are ${numberOfSquares}`);
    console.log(`The length of each side is ${sideLength}`);
}

const gridSquares = document.getElementsByClassName('squares');
//Removes the old squares from the grid
function removeSquares() {
    for (let i = gridSquares.length - 1; i >= 0; i--) {
        gridSquares[i].remove();
    }
}

//Add a mouseover event that leaves a trail of black squares
var colourSelection = 'black';

const blackButton = document.querySelector('.blackButton');
blackButton.addEventListener('click', function () {
    colourSelection = 'black';
});

const whiteButton = document.querySelector('.whiteButton');
whiteButton.addEventListener('click', function () {
    colourSelection = 'white';
});

/** Colours the grid cells as the user hovers over elements in the squares classlist*/
function colourSquares() {
    const squares = document.querySelectorAll('.squares');
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("mouseover", function () {
            squares[i].style.backgroundColor = colourSelection;

        });
    }
}

//Add a button to erase grid colours
function removeColour() {
    const squares = document.querySelectorAll('.squares');
    const removeButton = document.querySelector('.remove-btn');
    for (let i = squares.length - 1; i >= 0; i--) {
        removeButton.addEventListener('click', function () {
            squares[i].style.backgroundColor = "white";
        });
    }
}