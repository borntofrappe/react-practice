# res

## Heading background animation

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

## Calendar view

The demo recreates the central portion of the landing page, where the projects are slotted in the frame of a calendar. `grid` properties are useful to create the rows and columns. Pseudo elements are useful to create the appearance of a border with a gradient which is introduced on hover.
