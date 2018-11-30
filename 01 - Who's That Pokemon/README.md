# Who's That Pokemon?

Link to the working right [here](https://codepen.io/borntofrappe/full/GwYLRw).

Inspired by [this pen](https://codepen.io/tiffachoo/pen/KGJEba) highlighted in the latest spark on codepen, the first project in the 30+ efforts with React tries to replicate the feature showcased every episode of the Pokemon anime. The quiz is deceptively simple: you are presented with the shadow of a pokemon, you then input your answer and are displayed the correct match.

It is a good way to practice with basic styling and rather simple animation.

## React Spring

The project makes use of animation achieved through different means:

- changing properties through CSS classes;

- changing property directly inline;

- changing properties through `react-spring`.

This last one is a library that allows to achieve simple animation rather smoothly. Simply put:

- after installing the library, import the Spring component.

  ```js
  import { Spring } from "react-spring";
  ```

- wrap whichever component needs animating in the component.

  ```js
  <Spring>
    <h1>Hello World</h1>
  </Spring>
  ```

- detail the CSS properties affected in the animation, in an object passed in `from` and `to` attributes. Much alike with CSS keyframe animation.

  ```js
  <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
    <h1>Hello World</h1>
  </Spring>
  ```

- instead of rendering the component (or actually the element in this instance), use a render function passing the style in the element. `style` is an object, detailing property-valye pairs. It is possible to pass the object as a whole or the altered properties only (through destructuring).

  ```js
  <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
    {({ opacity }) => <h1 style={{ opacity }}>Hello World</h1>}
  </Spring>
  ```
