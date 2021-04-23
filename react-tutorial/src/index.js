import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div class="app">
        <h1>React Tutorial</h1>
        <Board />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));