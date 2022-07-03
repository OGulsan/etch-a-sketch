// Establishes basic variables and initializes grid to default size of 16x16
const grid = document.querySelector(".grid");
let size = 16;
let color = "black"
makeGrid(size)
// ***********************************************




// Changes grid size based on user input
const userSize = document.getElementById('size');
userSize.addEventListener('change', handleInput)

function handleInput(event) {
  size = event.target.value;
  if(validateInput(size))
    makeGrid(size);
}

function validateInput(size) {
  if(size < 2 || size > 100){
    alert("Invalid size try again")
    return false;
  }
  return true;
}
// ***********************************************




// Grab clear button and implement functionality to it
const clear = document.getElementById('clear');
clear.addEventListener('click', () => { //on the click event an arrow function calls the make grid function and clears the grid
  makeGrid(size)
})
// ***********************************************



// Make grid function and it's helper functions
function makeGrid(size) {

  removeAllChildNodes(grid) // clears grid so when user changes grid size, the new specified grid doesnt get appended to
  grid.style.setProperty('--grid-rows', size); // Changes grids size to the specified input
  grid.style.setProperty('--grid-cols', size);
  
  for (let i = 0; i < size*size; i++) { // fills grid with appropriate amount of squares
    let square = document.createElement("div");
    square.addEventListener('mouseover', handleHover)
    grid.appendChild(square);
    
    
  };

};


function handleHover(event) {
  event.target.style.backgroundColor = color

}

function removeAllChildNodes(parent) {
  while(parent.firstChild)
    parent.removeChild(parent.firstChild)
}
// ***********************************************




// Adds functionality to buttons
const red = document.getElementById('red')
red.addEventListener('click', handleClick)

const black = document.getElementById('black')
black.addEventListener('click', handleClick)

const blue = document.getElementById('blue')
blue.addEventListener('click', handleClick)

function handleClick(event) {
  color = event.target.id
}
// ***********************************************












