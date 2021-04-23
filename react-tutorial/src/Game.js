import React from 'react';
import Board from './Board';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xIsNext: true,
      history: [
        {
          squares: Array(9).fill(''),
        },
      ],
      stepNumber: 0,
    };
  }

  handleClick(i) {
    const { xIsNext, history, stepNumber } = this.state;
    console.log(history);
    console.log(stepNumber);
    const { squares } = history[stepNumber];
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const square = xIsNext ? 'x' : 'o';
    this.setState({
      xIsNext: !xIsNext,
      history: [
        ...history.slice(0, stepNumber + 1),
        {
          squares: [...squares.slice(0, i), square, ...squares.slice(i + 1)],
        },
      ],
      stepNumber: stepNumber + 1,
    });
  }

  jumpTo(move) {
    this.setState({
      xIsNext: move % 2 === 0,
      stepNumber: move,
    });
  }

  render() {
    const { xIsNext, history, stepNumber } = this.state;
    const { squares } = history[stepNumber];
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${xIsNext ? 'x' : 'o'}`;
    }

    return (
      <div className="app">
        <svg style={{ display: 'none' }} viewBox="0 0 100 100">
          <symbol id="x">
            <path
              fill="none"
              stroke="hsl(183, 100%, 42%)"
              strokeWidth="16"
              strokeLinecap="round"
              d="M 25 25 l 50 50 m -50 0 l 50 -50"
            />
          </symbol>
          <symbol id="o">
            <circle
              fill="none"
              stroke="hsl(12, 96%, 64%)"
              strokeWidth="16"
              r="25"
              cx="50"
              cy="50"
            />
          </symbol>
        </svg>

        <h1>Tic Tac Toe</h1>
        <p>
          Following the tutorial on{' '}
          <a href="https://reactjs.org/tutorial/tutorial">reactjs.org</a>
        </p>
        <div className="board">
          <h2>{status}</h2>
          <Board
            squares={squares}
            xIsNext={xIsNext}
            handleClick={i => this.handleClick(i)}
          />
          <div className="controls">
            {history.slice(0).map(({ squares }, i) => (
              <button
                onClick={() => this.jumpTo(i)}
                key={squares.join('')}
              >{`Go to ${i === 0 ? 'game start' : `step ${i}`}`}</button>
            ))}
          </div>
        </div>
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
