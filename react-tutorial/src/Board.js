import React from 'react';
import Square from './Square.js';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(''),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const { squares, xIsNext } = this.state;
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const square = xIsNext ? 'x' : 'o';
    this.setState({
      squares: [...squares.slice(0, i), square, ...squares.slice(i + 1)],
      xIsNext: !xIsNext,
    });
  }

  render() {
    const { squares, xIsNext } = this.state;
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${xIsNext ? 'x' : 'o'}`;
    }
    return (
      <div className="board">
        <h2>{status}</h2>
        <div className="grid">
          {squares.map((square, i) => (
            <Square
              key={i}
              value={square}
              onClick={() => this.handleClick(i)}
            />
          ))}
        </div>

        <button
          disabled={squares.every(d => !d)}
          onClick={() => {
            this.setState({ squares: Array(9).fill('') });
          }}
        >
          Clear
        </button>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
