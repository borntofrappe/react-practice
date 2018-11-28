# React Practice Container

<!-- Link to the work-in-progress pen right [here](). -->

## Preface

With this first project, which does not count toward the 30+ tally of React based projects, I set out to create a container for future efforts. Meaning a hub, a landing page which will collect every new React project I will create.

Blatantly inspired by codevember's own website.

## Development

This project itself uses React, to build a landing page for the larger effort. Concerning the design, it is a blatant copy of the codevember website. This might change in the future, but for the time being I am quite intrigued by the simple design and dark theme.

### -webkit-background-clip

The heading in the top left corner, as visible in the referenced homepage for [codevember](http://codevember.xyz/) provides a neat animation in the form of an ever changing color. This effect can be achieved with the `background-clip` property, accessed through a `-webkit` prefix. When set to `text`, and alongside the `-webkit-text-fill-color` property, it allows the text to "inherit" the color of the background, By animating the position of this background, it is then possible to achieve the desired effect.

As follows:

```css
/* root variables */
:root {
  --font: "Montserrat", sans-serif;
  --color-text: #fff;
  --color-bg: #333;
  --gradient-s: #4daec8;
  --gradient-m: #61dafb;
  --gradient-e: #adebfc;
}
h1 {
  font-family: var(--font);
  /* color will be applied if the -webkit-text-fill-color were to malfunction */
  color: var(--color-text);
  /* detail the pattern of the background */
  background: linear-gradient(
    120deg,
    var(--gradient-s) 0,
    var(--gradient-s) 35%,
    var(--gradient-m) 35%,
    var(--gradient-m) 70%,
    var(--gradient-e) 70%,
    var(--gradient-e) 90%,
    var(--gradient-s) 90%
  );
  /* increase the horizontal scale of the background, as to show the larger shape moving behind the heading */
  background-size: 300% 100%;
  /* set the webkit properties */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* animate the background-position property */
  animation: translateGradient infinite alternate ease-in-out 4s;
}
/* animation translating the background horizontally */
@keyframes translateGradient {
  100% {
    background-position-x: -300%;
  }
}
```

### Gradient Border

The gradient border displayed around each number, on hover, is achieved through pseudo elements. Specifically by adding a `:before` pseudo element with the background of the desired gradient and overlapping an `:after` pseudo element with the same color of the background. And positioning both below the text of the of the element they represent.

By later animating the pseudo elements, either by increasing the surface covered by `:before` or decreasing the one covered by `:after`, it is possible to introduce the border with a smooth animation.

### React Router

The application at hand provides a simple FAQ structure in the **about** section. This section is shown on a different route of the application, as to practice with a simple use case for `react-router`.

Routing is set up as follows:

1. wrap the application in a `Router`.

   ```jsx
   <Router />
   ```

1. detail different routes in `Route` elements. Remember two things in this regard: a Router requires a single child element (this time around it is as easy as to include a React fragment); a route specifies the path in an attribute with the same name and a component to be rendered.

   ```jsx
   <Router>
     <>
       <Route exact path="/" component={Home} />
       <Route path="/about" component={About} />
     </>
   </Router>
   ```

   `exact` meaning the application will show the component when the URL matches exclusively the path. Without such a flag, `/about` would render both elements.

1. to jump between URL, use `Link` elements and specify the route in a `to` attribute.

   ```jsx
   <Link to="/about">about</Link>
   ```

_Small codepen issue_: for some reason, the same code which functions through `create-react-app` doesn't work on codepen. The `exact` flag seems to break everything up. A fix is provided by the React Router component `Redirect`, which immediately forward the user toward a selected path.

```js
<Redirect to="/home">
```

This way it is possible to show the single route and swap between values on command.
