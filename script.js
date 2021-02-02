
makeSquares();
var squareDiv;
//Creates a 16 x 16 grid  by default
function makeSquares() {
    for (var i = 0; i < 256; i++) {
        squareDiv = document.createElement("div");
        squareDiv.classList.add('squares');
        squareDiv.setAttribute('style', 'float: left; border: 0.01px solid black; background-color: #DCDCDC; height: 25px; width: 25px')
        grid.appendChild(squareDiv);
    }
}

var size = 256;
const newGridButton = document.querySelector('.newGridButton');
newGridButton.addEventListener('click', changeSquares);
function changeSquares() {
    input = prompt("How many squares would you like in an (a x a) grid?");
    sideLength = (410 - 10) / input;
    numberOfSquares = input ** 2;
    console.log(numberOfSquares);
    console.log(sideLength);
    removeSquares();
    for (var i = 0; i < numberOfSquares; i++) {
        squareDiv = document.createElement("div");
        squareDiv.classList.add('squares');
        squareDiv.setAttribute('style', `float: left; border: 0.01px solid black; background-color: #DCDCDC; height: ${sideLength}px; width: ${sideLength}px`)
        grid.appendChild(squareDiv);
    }
    squares.forEach(function (e) {
        e.addEventListener('mouseover', function () {
            e.style.backgroundColor = 'black';

        });
    });

}

var sideLength = 0;
//Calculates the side length and width of each square for an (a x a) grid
function calculateSquareSize() {
    input = prompt("How many squares would you like in an (a x a) grid?");
    sideLength = (410 - (0.5 * input - 0.5)) / input;
    numberOfSquares = input * input;
}


const singleSquares = document.querySelector('.squares');
const squares = document.querySelectorAll('.squares');
const gridSquares = document.getElementsByClassName('squares');
//Removes the old squares from the grid
function removeSquares() {
    for (var i = gridSquares.length - 1; i >= 0; i--) {
        gridSquares[i].remove();
    }

}



//Add a mouseover event that leaves a trail of black squares

squares.forEach(function (e) {
    e.addEventListener('mouseover', function () {
        e.style.backgroundColor = 'black';
    });
});





function colourSquares() {
    squareDiv.style.backgroundColor = 'black';

    // console.log(e);

    // squares.forEach(function (e) {
    //     e.addEventListener('mouseover', function () {
    //         e.style.backgroundColor = 'black';

    //     });
    // });
}



// squares.forEach(function (e) {
//     e.addEventListener('mouseover', function () {
//         e.style.backgroundColor = 'black';
//         // e.setAttribute('style', 'float: left; border: 1px solid black; background-color: black; height: 24px; width: 24px');

//     });
// })



//Add a button to erase grid colours
const removeButton = document.querySelector('.remove-btn');
removeButton.addEventListener('click', removeColour);
function removeColour() {
    squares.forEach(function (e) {
        e.style.backgroundColor = '#DCDCDC';
    });
}





