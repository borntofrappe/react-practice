# React Abstraction(s)

## Goal

Practice with the framework to create a reusable component through different layers of abstraction.

## Notes

The project was inspired by [this talk](https://www.youtube.com/watch?v=SAIdyBFHfVU) from [Kent C. Dodds](https://kentcdodds.com). It is meant to actually incorporate multiple projects, each with its own scope.

## [`React.createElement()`](https://codepen.io/borntofrappe/full/RwwQYPe)

Babel is a compiler which allows to use `JSX` in a JavaScript file. JSX is ultimately compiled down to a series of `React.createElement()` function calls. If you visit [Babel's own REPL](https://babeljs.io/repl), you can see an example by pasting the following on the input panel:

```jsx
const name = "Pas";
const element = (
    <div className="container">
        <h1>Hello {name}</h1>
    </div>
);
```

Which gets compiled to

```js
"use strict";

var name = "Pas";
var element = React.createElement(
    "div",
    {
        className: "container"
    },
    React.createElement("h1", null, "Hello ", name)
);
```

I've become rather familiar with JSX's own syntax, but thought it neat to dispose of the convenience, for once, and try to experiment with react's create method.
