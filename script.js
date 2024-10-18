function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createGrid(rows, cols) {
    const gridContainer = document.getElementById("grid-container");
    gridContainer.innerHTML = '';

    const squareWidth = 100 / cols;
    const squareHeight = 100 / rows;

    for (let i = 0; i < rows * cols; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");

        gridSquare.style.flex = `1 0 calc(${squareWidth})% - 2px)`;
        gridSquare.style.height = `calc(${squareWidth})vh - 2px)`;

        gridSquare.addEventListener("mouseover", () => {
            gridSquare.style.backgroundColor = getRandomColor();
        })
    
        gridContainer.appendChild(gridSquare);
    }
}


// GET user input for a new grid based on their sizing choice
document.getElementById('grid-form').addEventListener("submit", function(event) => {
    event.preventDefault();
    while (rows < 100 || cols < 100) {
        const rows = document.getElementById("rows").value;
        const cols = document.getElementById("cols").value;

        createGrid(rows, cols);
    }
})

// INITIALIZE page with a 16 x 16 grid
createGrid(16, 16);



