makeSquares();
chooseColour();
randomColours();
colourSquares();
removeColour();

//Initialize variables for changeSquares() and calculateSquareSize() function 
var numberOfSquares = 0;
var sideLength = 0;
var input = 0;

var colourSelection = 'black';

/**Creates a 16 x 16 grid  by default*/
var squareDiv;
function makeSquares() {
    for (let i = 0; i < 256; i++) {
        squareDiv = document.createElement("div");
        squareDiv.classList.add('squares');
        squareDiv.setAttribute('style', 'float: left; border: 0.01px solid black; background-color: #e7e7de; height: 25px; width: 25px');
        grid.appendChild(squareDiv);
    }
}

const newGridButton = document.querySelector('#newGridButton');
newGridButton.addEventListener('click', changeSquares);

/**Creates a new grid sheet (a x a) based on user input. Users inputs how many squares they want per side.
 * input: must be a positive integer less than 100
**/
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
            squareDiv.setAttribute('style', `float: left; border: 0.01px solid black; background-color: #e7e7de; height: ${sideLength}px; width: ${sideLength}px`);
            grid.appendChild(squareDiv);
        }
    }
    colourSquares();
    colourSelection = "black"; //set hover colour to black by default
    removeColour();
}

//Calculates the side length and width of each square for an (a x a) grid
function calculateSquareSize() {
    input = prompt("How many squares would you like on each side of the grid? \nMust be less than 100\n\nNote: colour will default to black");
    sideLength = (410 - 10) / input; //length and width of each new sized square
    numberOfSquares = input ** 2; // number of squares that can fit in the grid

    console.log(`The number of squares are ${numberOfSquares}`);
    console.log(`The length of each side is ${sideLength}`);
}

const gridSquares = document.getElementsByClassName('squares');
//Removes the old square cells for when a new grid size is being implemented
function removeSquares() {
    for (let i = gridSquares.length - 1; i >= 0; i--) {
        gridSquares[i].remove();
    }
}

var colourButtonClick = 0; //Number 0 refers to black colour
//Add a mouseover event that leaves a trail of black squares
const blackButton = document.querySelector('#blackButton');
blackButton.addEventListener('click', function () {
    colourSelection = 'black';
    colourButtonClick = 0; //variable declaration to allow colour to change from random to black
    console.log(colourSelection);
});

const whiteButton = document.querySelector('#whiteButton');
whiteButton.addEventListener('click', function () {
    colourSelection = '#e7e7de';
    console.log(colourSelection);
    //variable declaration to allow colour to change from random to white. Number 1 refers to white.
    colourButtonClick = 1;
});

/**Input event listener for HTML colour picker */
const colourPicker = document.getElementById("colourPicker");
colourPicker.value = '#00587a'; //sets default colour to #00587a
colourPicker.addEventListener('input', chooseColour);

/**Added support for the above input listener by allowing button click events */
const colourPickerButton = document.querySelector('#colourPickerButton');
colourPickerButton.addEventListener('click', chooseColour);

function chooseColour() {
    colourSelection = document.getElementById("colourPicker").value;
    //variable declaration to let colour change to any colour. Number 2 refers to anything from the colour picker.
    colourButtonClick = 2;
}




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
    const removeButton = document.querySelector('#remove-btn');
    for (let i = squares.length - 1; i >= 0; i--) {
        removeButton.addEventListener('click', function () {
            squares[i].style.backgroundColor = '#e7e7de';
        });
    }
}

/** Any hover event will output a random colour on each square. Function randomColours is invoked on click of button 'Random' */
const randomButton = document.querySelector('#randomButton');
randomButton.addEventListener('click', randomColours);

function randomColours() {
    colourButtonClick = null; //Set to null as false is white, true is black
    const squares = document.querySelectorAll('.squares');

    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("mouseover", function () {
            //Conditional statement checks if 'Black' or 'White' buttons have been clicked
            if (colourButtonClick == 0) return colourSelection = 'black';
            if (colourButtonClick == 1) return colourSelection = '#e7e7de';
            if (colourButtonClick == 2) return colourSelection = `${colourPicker.value}`;



            const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min - 1));
            const r = randomBetween(0, 255);
            const g = randomBetween(0, 255);
            const b = randomBetween(0, 255);
            squares[i].style.backgroundColor = `rgb(${r},${g},${b})`;

        });
    }
};


