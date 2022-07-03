const grid = document.querySelector(".grid");
let squares = [];

function makeGrid(size) {
  grid.style.setProperty('--grid-rows', size);
  grid.style.setProperty('--grid-cols', size);
  for (let i = 0; i < size*size; i++) {
    let square = document.createElement("div");
    grid.appendChild(square);
    squares.push(square);
    
  };
};

makeGrid(10);










