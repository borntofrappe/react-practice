const canvas = document.querySelector('canvas');
const { width, height } = canvas;
const context = canvas.getContext('2d');

const columns = 20;
const rows = 20;

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

let cells = grid.reduce((acc, curr) => [...acc, ...curr], []);

function draw(c) {
  context.clearRect(0, 0, width, height);

  c.forEach(({ column, row, isAlive }) => {
    const w = width / columns;
    const h = height / rows;
    const x = column * w;
    const y = row * h;

    context.fillStyle = isAlive ? 'hsl(0, 0%, 80%)' : 'hsl(0, 0%, 20%)';
    context.fillRect(x, y, w, h);
    context.fill();
  });
}

draw(cells);

function checkAliveState(column, row, isAlive, array) {
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

  const aliveNeighbors = neighbors.filter(cell => cell && cell.isAlive).length;
  if (isAlive && (aliveNeighbors <= 1 || aliveNeighbors >= 4)) {
    return false;
  }
  if (!isAlive && aliveNeighbors === 3) {
    return true;
  }
  return isAlive;
}

let animationFrameID;

function animate() {
  const timeout = setTimeout(() => {
    const c = cells.map(({ column, row, isAlive }) => ({
      column,
      row,
      isAlive,
    }));

    c.forEach(cell => {
      cell.isAlive = checkAliveState(
        cell.column,
        cell.row,
        cell.isAlive,
        cells
      );
    });

    draw(c);
    cells = [...c];

    const isOver = cells.every(cell => !cell.isAlive);
    if (isOver) {
      cancelAnimationFrame(animationFrameID);
    } else {
      animationFrameID = requestAnimationFrame(animate);
    }
    clearTimeout(timeout);
  }, 150);
}

function handleClick({ offsetX, offsetY }) {
  const x = Math.floor(offsetX / (width / columns));
  const y = Math.floor(offsetY / (height / rows));
  const cell = cells.find(({ column, row }) => column === x && row === y);
  cell.isAlive = !cell.isAlive;
  draw(cells);
}
canvas.addEventListener('click', handleClick);
