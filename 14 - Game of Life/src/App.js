import React, { useState, useRef, useEffect} from 'react';
import { getCells } from './utils'

function App() {
  // structure of the canvas
  const width = 400;
  const height = 400;
  const columns = 20;
  const rows = 20;

  const [cells, setCells] = useState(getCells({columns, rows}));

  function resetCells() {
    setCells(getCells({width, height, columns, rows}))
  }

  function updateCells() {
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


  const ref = useRef();
  useEffect(() => {
    console.log(cells);
    const { current: canvas } = ref;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, width, height);
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
  }, [ref, cells]);

  return (
    <>
      <canvas ref={ref} width={width} height={height}></canvas>
      <button onClick={updateCells}>Step</button>
      <button onClick={resetCells}>Reset</button>
    </>
  );
}

export default App;
