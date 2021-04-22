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

The `src` folder is where the app is being developed.

## React.Component

A React component class which:

- takes in parameters, `props`

- returns a React element, detailing the HTML structure to display

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

The file is all that is necessary to initialize the application.

```basg
yarn start
```
