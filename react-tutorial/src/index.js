import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <svg style={{display: 'none'}} viewBox="0 0 100 100">
          <symbol id="x">
            <path fill="none" stroke="hsl(183, 100%, 42%)" strokeWidth="16" strokeLinecap="round" d="M 25 25 l 50 50 m -50 0 l 50 -50" />
          </symbol>
          <symbol id="o">
            <circle fill="none" stroke="hsl(12, 96%, 64%)" strokeWidth="16" r="25" cx="50" cy="50" />
          </symbol>
        </svg>

        <h1>Tic Tac Toe</h1>
        <p>Following the tutorial on <a href="https://reactjs.org/tutorial/tutorial">reactjs.org</a></p>
        <Board />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));