# [React Tutorial](https://codepen.io/borntofrappe/pen/jOyXoqR)

Get acquainted with the React framework by following the [tutorial on reactjs.org](https://reactjs.org/tutorial/tutorial.html).

## Setup

```bash
npx create-react-app react-tutorial
cd react-tutorial/src
# del *
rm -f *
cd ..
```

The `src` folder is where the app is being developed:

## React Component Class

Initialized with class syntax, a React component takes in parameters, `props`, and returns a React element, detailing the HTML structure to display.

In the example, `index.js` is used to set up one of these components to first render arbitrary markup.

Define:

```jsx
import React from 'react';

export default class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <h1>Tic Tac Toe</h1>
      </div>
    );
  }
}
```

Use:

```jsx
import Game from './Game';

<Game />;
```

## ReactDOM

In the project the `<Game />` component is included in the `#root` element of the markup in the `public` folder. `react-dom` provides the necessary interface in the `render` method.

```jsx
import ReactDOM from 'react-dom';
import Game from './Game';

ReactDOM.render(<Game />, document.getElementById('root'));
```

## Import Export

When working with multiple files it is necessary to export the components and later import them.

```js
// Game.js
export default class Game extends React.Component {

// index.js
import Game from './Game';
```

The stylesheet is also imported, directly referring to the stylesheet.

```js
import './index.css';
```

## Props

`Square.js` is rendered a single button.

```jsx
class Square extends React.Component {
  render() {
    return <button className="square">{this.props.value}</button>;
  }
}
```

The content of the button is set through `props`, received when using the component.

```jsx
<Square value="Clickity click" />
```

## State

The idea is to update the value of the button on click. This is achieved by having the class component maintain state.

```jsx
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
}
```

The value is included through `this.state` in place of `this.props`.

```jsx
class Square extends React.Component {
  render() {
    return <button className="square">{this.state.value}</button>;
  }
}
```

The value is updated through the `this.setState` function. The function specifically receives an object describing the state to update.

```jsx
class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() =>
          this.setState({
            value: 'x',
          })
        }
      >
        {this.state.value}
      </button>
    );
  }
}
```

The state is updated and React updates the connected element.

Through the React DevTools it is possible to highlight the state by selecting individual `<Square />` component.

## State Management

To manage the game it is useful to lift the state up. This allows to consider the moves of every `<Square />` to decipher if one of the players has won.

```jsx
export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(''),
    };
  }
}
```

The square component then receives the value through `props`.

```jsx
export default class Grid extends React.Component {
  const {squares} = this.state;
  render() {
    return (
      <div className="grid">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
    )
  }
}
```

The example describing a todo list [on reactjs.org](https://reactjs.org/) highlights one way to render multiple elements byb looping through an array.

```jsx
<ul>
  {this.props.items.map((item) => (
    <li key={item.id}>{item.text}</li>
  ))}
</ul>
```

Adapted for the squares.

```jsx
<div className="grid">
  {squares.map((square) => (
    <Square value={square} />
  ))}
</div>
```

The console prompts a unique `key` prop, which allows React to manage changes to the DOM.

```jsx
<div className="grid">
  {squares.map((square, i) => (
    <Square key={i} value={square} />
  ))}
</div>
```

As the state is mainted by the parent component, it is necessary to update `handleClick`, so that the function updates a specific item in the array.

```jsx
handleClick(i) {
  const { squares } = this.state;
  this.setState({
    squares: [...squares.slice(0, i), 'x', ...squares.slice(i + 1)],
  });
}
```

The function receives an integer to refer to the desired index.

```jsx
{
  squares.map((square, i) => (
    <Square key={i} value={square} onClick={() => this.handleClick(i)} />
  ));
}
```

`<Square />` can then refer to the function, again through props.

```jsx
<button className="square" onClick={() => this.props.onClick()}>
```

## Function Components

Functions provide an alternative syntax to classes. They are especially useful when the component just needs to render a React element.

```jsx
export default function Square(props) {
  return {
    <button className="square"></button>
  }
}
```

## Completing the Game

To complete the game it is first necessary to toggle between values, between `x`s and `o`s. The value is then included in the `squares` array.

To check for a victory, a utility function is created to return the winning side.

```js
function calculateWinner(squares) {
  //
}
```

`lines` describes the index of all the possible winning combinations.

## SVG

This is beyond the scope of the demo, but instead of adding `x`s and `o`s, the idea is to add an SVG elements.

In the root component, an `<svg>` element defines the two possible shapes with `<symbol>` elements and a unique `id`.

```jsx
<svg style={{ display: 'none' }} viewBox="0 0 100 100">
  <symbol id="x">
    <path ... />
  </symbol>
  <symbol id="o">
    <circle ... />
  </symbol>
</svg>
```

In the square component, the syntax is included with a `<use />` element.

```jsx
<svg viewBox="0 0 100 100">
  <use href="#x" />
</svg>
```

## Time Travel

The state is further lifted up and modified so that `history` replaces `squares`. The idea is to have an array of arrays, each describing the state of the game at a specific point in time.
