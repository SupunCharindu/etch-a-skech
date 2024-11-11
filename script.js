const container = document.querySelector('.container');
const resetButton = document.querySelector('#resetButton');
const blackButton = document.getElementById('blackButton');
const randomButton = document.getElementById('randomButton');

document.addEventListener("DOMContentLoaded", () => {

createGrid(16);

function createGrid(size) {
    container.innerHTML = '';

    for (let i = 0; i < size ** 2; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        const containerWidth = container.offsetWidth;
        const cellSize = Math.floor((containerWidth / size));

		square.style.width = cellSize + "px";
		square.style.height = cellSize + "px";
        container.appendChild(square);



        square.addEventListener('mouseover', () => {
            // Randomize color and darken
            
            square.style.backgroundColor = `gray`;
        });
    }
 }

 function resetGrid() {
    const size = prompt("Enter grid size (max 100):");
    if (size <= 100) {
        createGrid(size);
    } else {
        alert("Please enter a number less than or equal to 100.");
    }
}

resetButton.addEventListener('click', resetGrid);

 // Random Button Functionality
 randomButton.addEventListener('click', () => {
    container.querySelectorAll('.square').forEach(square => {
      square.removeEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';  // Remove default behavior
      });
      square.addEventListener('mouseover', () => {
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        square.style.backgroundColor = randomColor;
      });
    });
  });

   // Black Button Functionality
   blackButton.addEventListener('click', () => {
    container.querySelectorAll('.square').forEach(square => {
      square.removeEventListener('mouseover', () => {
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        square.style.backgroundColor = randomColor;  // Remove random behavior
      });
      square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
      });
    });
  });



});




