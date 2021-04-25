# [showcase](https://codepen.io/borntofrappe/pen/bGgzjaV)

The goal is to create a basic application to showcase the demos built in this repository. The design is blatantly inspired by [codevember's own website](http://codevember.xyz/).

_Please note:_ the concept for this project was first developed in [this demo](https://codepen.io/borntofrappe/full/NELLxG/).

_Please also note:_ I will update this project as I develop applications to actually showcase. Currently, the React-powered application renders an array of 31 items as a proof of concept.

## res

In the `res` folder I dedicate small projects to the design of important elements, like the animation in the background of the main heading.

### Heading background animation

The demo replicates the animation in the heading as seen on [codevember.xyz](http://codevember.xyz/). This is achieved by having a background with a solid color, or a gradient in the specific demo, and clip the visual in the shape of the text.

```css
 h1 {
    background: linear-gradient(
      120deg,
      hsl(193, 53%, 54%) 0,
      hsl(193, 53%, 54%) 35%,
      hsl(193, 95%, 68%) 35%,
      hsl(193, 95%, 68%) 70%,
      hsl(193, 93%, 83%) 70%,
      hsl(193, 93%, 83%) 90%,
      hsl(193, 53%, 54%) 90%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
```

The animation is allowed by stretching the background and moving its position horizontally.

```css
h1 {
  background-size: 200% 100%;
  background-position-x: 0%;
  animation: translateBackgroundPosition infinite alternate ease-in-out 5s;
}

@keyframes translateBackgroundPosition {
  to {
    background-position-x: 100%;
  }
}
```

To be exhaustive, media queries are included so that:

1. the background is included only when it is possible to clip it

2. the animation is performed when no particular preference is set

### Calendar view

The demo recreates the central portion of the landing page, where the projects are slotted in the frame of a calendar. `grid` properties are useful to create the rows and columns.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(7, ???);
  grid-auto-rows: ???;
}
```

`???` works as a placeholder for the size of the squares in the grid. The idea is to use a minimum and maximum value, `50px` and `120px` respectively, and rely on the viewport's width to grow the grid in between. This is achieved immediately with the `minmax()` function and a media query setting the maximum size.

```css
.grid {
  grid-template-columns: repeat(7, minmax(50px, 10vw));
  grid-auto-rows: minmax(50px, 10vw);
}

@media screen and (min-width: 1200px) {
  .grid {
    grid-template-columns: repeat(7, 120px);
    grid-auto-rows: 120px;
  }
}
```

If the `clamp` function is supported, it is instead used by providing the minimum, ideal and maximum values.

```css
@supports (grid-template-columns: repeat(7, clamp(50px, 10vw, 120px))) {
  .grid {
    grid-template-columns: repeat(7, clamp(50px, 10vw, 120px));
    grid-auto-rows: clamp(50px, 10vw, 120px);
  }
}
```

Pseudo elements are useful to create the appearance of a border with a gradient which is introduced on hover. The illusion is creatd by layering two rectangles, one of which has the same color as the background.

```css
.grid a::before,
.grid a::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -5;
}
.grid a::before {
  background: /* gradient */ ;
}
.grid a::after {
  background: /* background */ ;
}
```

On hover and on focus the `::after` pseudo element is scaled so show the gradient set up with th `::before` counterpart.

```css
.grid a:hover::after,
.grid a:focus::after {
  transform: scale(0.85);
}
```
