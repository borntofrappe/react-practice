# Tickets Booking App

## [Live demo](https://codepen.io/borntofrappe/full/byqqKY)

## Goal

Prompted by the considerable and positive feedback received in my [latest UI project](https://codepen.io/borntofrappe/full/dENMNV), re-create the application with the react framework to make the screen(s) interactive.

## Notes

The project has been a very helpful effort not only to practice with the React framework, but also:

- **styled components** and **custom properties**, to theme the phone screen(s) with few lines of code. Custom properties also include fallback values as to guarantee that the project uses an acceptable set of colors.

  ```css
  .selected {
    color: var(--accent, #fd6d8e);
  }
  ```

  The fallback values follows the variable _inside_ of the parentheses.

- **SVG components**, to add icons in a rather concise manner. Icons are first included in a block through `<symbol>` elements, and then injected where needed through a `<use>` element.