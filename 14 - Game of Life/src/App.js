import React, { useState, useRef, useEffect} from 'react';
import { createGrid, getPatterns, getPattern } from './utils'

function App() {
  // retrieve a first grid
  const { columns, rows, cells: initialCells } = createGrid();
  const size = 20;
  const width = columns * size;
  const height = rows * size;
  // retrieve the possible patterns
  const patterns = getPatterns();


  // in the state keep track of the 1d array describing the cells
  // the columns and rows are not meant to change
  const [cells, setCells] = useState(initialCells);

  // stateful variable to keep track of the generation's number
  const [gen, setGen] = useState(0);

  // stateful variables to toggle between playing and pausing the animation
  const [isAnimating, setIsAnimating] = useState(false);
  const toggleAnimation = () => setIsAnimating(!isAnimating);
  const [requestID, setRequestID] = useState(null);
  const [timeoutID, setTimeoutID] = useState(null);


  // function updating the cells by moving 1 generation onward
  function updateCells() {
    setGen(gen => gen + 1);
    // update the boolean isAlive according to the existing neighbors and the previous state
    setCells(previousCells => previousCells.map(({ column, row, isAlive}, index, array) => {
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
        return ({
          column,
          row,
          isAlive: false,
        });
      }
      if (!isAlive && aliveNeighbors === 3) {
        return ({
          column,
          row,
          isAlive: true,
        });
      }
      return ({
        column,
        row,
        isAlive,
      })
    }));
  }

  // reset the grid with a new random set of cells
  function resetCells() {
    setGen(0);
    setCells(createGrid().cells)
  }

  // set the grid to match a specific pattern
  function setPattern(key) {
    setGen(0);
    setCells(getPattern(key).cells);
  }

  // animate the cells through request animation frame
  function animateCells() {
    const timeout = setTimeout(() => {
      updateCells();
      const id = requestAnimationFrame(animateCells);
      setRequestID(id);
      clearTimeout(timeoutID);
    }, 250);
    setTimeoutID(timeout);
  }

  // function toggling the animation by either calling the animating function or clearing the existing animation frame
  function handleAnimation() {
    if(!isAnimating) {
      animateCells();
    } else {
      clearTimeout(timeoutID);
      cancelAnimationFrame(requestID);
    }
    toggleAnimation();
  }

  // useRef is used to retrieve the canvas element
  const canvasRef = useRef();

  // function following a click on the canvas
  function handleClick({ clientX: x, clientY: y }) {
    // find the column and row considering the distance of the element from the left and top side
    const { left, top } = canvasRef.current.getBoundingClientRect();
    const column = Math.floor((x - left) / size);
    const row = Math.floor((y - top) / size);

    // toggle the isAlive boolean of the cell being clicked
    setCells(previousCells => previousCells.map(cell => {
      if(cell.column === column && cell.row === row) {
        return ({
          column,
          row,
          isAlive: !cell.isAlive,
        })
      }
      return cell;
    }));
  }

  // to update the canvas, useEffect allows to fire side effects when one of the variables in the dependencies array changes
  useEffect(() => {
    // draw one square for each "alive" cell
    const { current: canvas } = canvasRef;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, width, height);
    cells.forEach(({ column, row, isAlive }) => {
      if(isAlive) {
        const x = column * size;
        const y = row * size;
        context.fillStyle = 'hsl(0, 0%, 80%)';
        context.fillRect(x, y, size, size);
        context.fill();
      }
    });
  }, [canvasRef, cells, height, width]);


  return (
    <>
      <canvas
        onClick={handleClick}
        ref={canvasRef}
        width={width}
        height={height}>
      </canvas>

      <h1>Generation: {gen}</h1>
      {/* nest the buttons to animate the canvas in a details element
      opened by default */}
      <details open>
        <summary>Controls</summary>
        <button onClick={updateCells}>step</button>
        <button onClick={resetCells}>reset</button>
        <button onClick={handleAnimation}>
          {isAnimating ? 'pause' : 'animate'}
        </button>
      </details>

      {/* add one button for each hard-coded pattern in a second details element */}
      <details>
        <summary>Neat patterns</summary>
        {patterns.map(pattern => (
        <button key={pattern} onClick={() => setPattern(pattern)}>{pattern}</button>
        ))}
      </details>
    </>
  );
}

export default App;
