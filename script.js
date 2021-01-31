

//Create a 16 x 16 grid
for (var i = 0; i < 256; i++) {
    squareDiv = document.createElement("div");
    squareDiv.classList.add('squares');
    squareDiv.setAttribute('style', 'float: left; border: 1px solid black; background-color: #DCDCDC; height: 24px; width: 24px')
    grid.appendChild(squareDiv);
}

// squareDiv.addEventListener('mouseover', createTrail);
// function createTrail(e) {
//     squareDiv.setAttribute('style', 'background-color: black; color: black;');
//     squareDiv.style.color = "black";
// }

//Add a mouseover event that leaves a trail of black squares
document.querySelectorAll('.squares').forEach(function (e) {
    e.addEventListener('mouseover', function () {
        e.style.backgroundColor = 'black';
        // e.setAttribute('style', 'float: left; border: 1px solid black; background-color: black; height: 24px; width: 24px');
        console.log(e);
    });
})






