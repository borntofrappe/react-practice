const canvas = document.querySelector('canvas');
const { width, height } = canvas;
const context = canvas.getContext('2d');

// structure of the canvas
const columns = 20;
const rows = 20;

// grid describing a 2d array of columns and rows
const grid = Array(columns)
  .fill()
  .map((d, column) =>
    Array(rows)
      .fill()
      .map((d, row) => ({
        column,
        row,
        isAlive: Math.random() > 0.5,
      }))
  );

// flatten the 2d array
let initialCells = grid.reduce((acc, curr) => [...acc, ...curr], []);

// rendering function
// accepting as input an array of objects describing the cells
function draw(cells) {
  context.clearRect(0, 0, width, height);

  // draw only the cells which are "alive" and at the coordinates specified by the column and row
  cells.forEach(({ column, row, isAlive }) => {
      if(isAlive) {
        const w = width / columns;
        const h = height / rows;
        const x = column * w;
        const y = row * h;
        context.fillStyle = 'hsl(0, 0%, 80%)';
        context.fillRect(x, y, w, h);
        context.fill();
    }
  });
}

// draw the initial cells
draw(initialCells);

// function updating describing whether the cell at the input column and row is meant to live or die
function checkAliveState(column, row, isAlive, array) {
    // find the 8 neighbors
  const neighbors = [
    array.find(cell => cell.column === column - 1 && cell.row === row - 1),
    array.find(cell => cell.column === column && cell.row === row - 1),
    array.find(cell => cell.column === column + 1 && cell.row === row - 1),
    array.find(cell => cell.column === column - 1 && cell.row === row),
    array.find(cell => cell.column === column + 1 && cell.row === row),
    array.find(cell => cell.column === column - 1 && cell.row === row + 1),
    array.find(cell => cell.column === column && cell.row === row + 1),
    array.find(cell => cell.column === column + 1 && cell.row === row + 1),
  ];

  // consider only the existing "alive" cells
  const aliveNeighbors = neighbors.filter(cell => cell && cell.isAlive).length;
  /*
  <1 -> die (by isolation)
  >4 -> die (by overcrowding)

  else don't change
  */
  if (isAlive && (aliveNeighbors <= 1 || aliveNeighbors >= 4)) {
    return false;
  }
  if (!isAlive && aliveNeighbors === 3) {
    return true;
  }
  return isAlive;
}


// variable describing the animation frame, to stop the animation when no "alive" cells are left
let animationFrameID;
function animate() {
// timeout to avoid calling requestAnimationFrame too often
  const timeout = setTimeout(() => {
    // create a copy of the previous cells
    const cells = initialCells.map(({ column, row, isAlive }) => ({
      column,
      row,
      isAlive,
    }));

    // update the copy on the basis of the previous state
    cells.forEach(cell => {
      cell.isAlive = checkAliveState(
        cell.column,
        cell.row,
        cell.isAlive,
        initialCells
      );
    });

    // draw the cells with the new state
    draw(cells);

    // update the previous state to match with the new one
    // this is where React would actually help a lot
    // ! since neither is updated in the same scope, it is actually unnecessary to create a deep copy
    initialCells = cells;

    // describe if all the cells are dead, in which case terminate the animation
    const isGameOver = cells.every(cell => !cell.isAlive);
    if (isGameOver) {
      cancelAnimationFrame(animationFrameID);
    } else {
        // else call the function to animate the new state
      animationFrameID = requestAnimationFrame(animate);
    }
    clearTimeout(timeout);
  }, 150);
}

// this is just an experiment to toggle the cells between dead and alive
// mainly to get the animation un-stuck
function handleClick({ offsetX, offsetY }) {
  const x = Math.floor(offsetX / (width / columns));
  const y = Math.floor(offsetY / (height / rows));
  const cell = initialCells.find(({ column, row }) => column === x && row === y);
  cell.isAlive = !cell.isAlive;
  draw(initialCells);
}
canvas.addEventListener('click', handleClick);

document.querySelector('button').addEventListener('click', () => animate(), { once: true });