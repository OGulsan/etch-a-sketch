const grid = document.querySelector(".grid");
let size = 16;
makeGrid(size)

// Changes grid size based on user input
const userSize = document.getElementById('size');
userSize.addEventListener('change', handleInput)
function handleInput(event) {
  //need to validate input
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





function clearGrid() {

}

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
  event.target.style.backgroundColor = "black"

}

function removeAllChildNodes(parent) {
  while(parent.firstChild)
    parent.removeChild(parent.firstChild)
}











