# React Tutorial

Recreate the demo from the [tutorial on reactjs.org](https://reactjs.org/tutorial/tutorial.html) to get aquainted with the React framework.

## Setup

```bash
npx create-react-app react-tutorial
cd react-tutorial/src
# del *
rm -f *
cd ..
```

The `src` folder is where the app is being developed:

## React component class

## ReactDOM

```js
import ReactDOM from 'react-dom';
import Game from './Game';
import './index.css';

ReactDOM.render(<Game />, document.getElementById('root'));
```

## props

## state

## Function component

## React.Component

A React component class which takes in parameters, `props`, and returns a React element, detailing the HTML structure to display.

In the example, `index.js` is used to set up one of these components to first render arbitrary markup.

Define:

```jsx
import React from 'react';

class App extends React.Component {
  render() {
    return <h1>React Tutorial</h1>;
  }
}
```

Render in the `#root` element:

```jsx
import ReactDOM from 'react-dom';

ReactDOM.render(<App />, document.getElementById('root'));
```

The code is all that is necessary to initialize the application on `http://localhost:3000/`.

```bash
yarn start
```

## props

`Square.js` is renders a single button.

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

## import export

`Board.js` renders a multitude of buttons through the `<Square />` component.

```js
import React from 'react';
// import component
import Square from './Square.js';

class Board extends React.Component {
  render() {
    return (
      <div className="board">
        <Square value="o" />
        <Square value="x" />
        {/* continues */}
      </div>
    );
  }
}
```

It is necessary to have `Square.js` actually export the component.

```diff
class Square extends React.Component {
+ export default class Square extends React.Component {
```

The same applies to the `<Board />` component, which is imported and included in `index.js`.

```jsx
import Board from './Board';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React Tutorial</h1>
        <Board />
      </div>
    );
  }
}
```

It is necessary to return one single element, hence the wrapping `<div>`.

`index.css` is finally included to provide some basic style. Most importantly, CSS is used to display the buttons in a 3x3 grid.

The file is imported in `index.js` and details property-value pairs applied to the project as a whole.

```jsx
import './index.css';
```

## state

The idea is to update the value of the button on click.

```jsx
<button className="square" onClick={function () { /* update value */ }}>
  {this.props.value}
</button>

// arrow syntax
<button className="square" onClick={() => { /* update value */ }}>
  {this.props.value}
</button>
```

`state`

```jsx
constructor(props) {
  super(props);
  this.state = {
    value: ''
  }
}
```

```diff
-{this.props.value}
+{this.state.value}
```

```jsx
<button className="square" onClick={() => {this.setState({ value : 'X'})}}>
```

The state is updated and React updates the connected element.

Through the React DevTools it is possible to highlight the state by selecting individual `<Square />` components.

## Lifting state

Store the state of the game in `<Board />` to include the values in the different `<Square />` components. The idea is to then update the state 'backwards', lifting the state from square to board.

```jsx
export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(''),
    };
  }
}
```

To render one component the homepage for reactjs.org provides a better approach than calling a `renderSquare` function nine times. The example describing a todo list creates one `<li>` element for each item in the `items` array as follows.

```jsx
<ul>
  {this.props.items.map((item) => (
    <li key={item.id}>{item.text}</li>
  ))}
</ul>
```

Adapted for the squares.

```jsx
<div className="board">
  {this.state.squares.map((square) => (
    <Square value={square} />
  ))}
</div>
```

The console prompts a unique `key` prop, which will be explained at a later stage.

```jsx
{
  this.state.squares.map((square, i) => <Square value={square} key={i} />);
}
```

Most importantly for the demo, the value passed through `props` is picked up from the component.

```jsx
<button className="square">{this.props.value}</button>
```

To update the value then, the idea is to initialize the components with a value and an updating function.

```jsx
{
  this.state.squares.map((square, i) => (
    <Square value={square} onClick={() => this.handleClick(i)} />
  ));
}
```

The function updates the state from the board component.

```jsx
handleClick(i) {
  this.setState = {

  }
}
```

The function is then called in the individual square through `props`

```jsx
<button className="square" onClick={() => this.props.onClick()}>
```

In Board, update the state. _Immutability_: Instead of modifying the state directly, react prefers creating a copy and updating the state altogether.

```jsx
const { squares } = this.state;
this.setState({
  squares: [...squares.slice(0, i), 'X', ...squares.slice(i + 1)],
});
```

## Function components

Update `<Square />` to be a function component. Simpler syntax for components that don't need their own state. Functions which return React elements.

```jsx
export default function Square(props) {
  return {
    <button className="square"></button>
  }
}
```

Use `props` instead of `this.props`

```jsx
<button className="square" onClick={() => props.onClick()}>
  {props.value}
</button>
```

It is possible to simplify the component further.

```diff
-onClick={() => props.onClick()}
+onClick={props.onClick}
```

```
export default function Square(props) {
  return {
    <button className="square"></button>
  }
}
```

## Completing the game

- alternate between `X` and `O`

- calculate winner

- clear board

https://reactjs.org/tutorial/tutorial.html#adding-time-travel
