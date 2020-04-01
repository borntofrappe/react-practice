# Tomorrow's List

The idea is to practice with hooks, useState and useReduce, to build a rather straightforward todo app. In a future update, I might consider embellishing the project further, but the time being I'm more focused on creating something functional.

## SVG Background

The only flair introduced in the project is in the form of the following SVG element.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 157.5 95" width="157.5" height="95">
  <g fill="none" stroke="currentColor" stroke-width="0.5">
    <path d="M 0 45 h 47 l 55 -44.75 55 44.75 v 50" />
    <path d="M 28 45 a 5 5 0 0 1 0 -10 1.5 1.5 0 0 1 0 3 2 2 0 0 0 0 4 h 4 a 11 11 0 0 1 11 -11 v -5.5 l 2 2.5 a 8 8 0 0 1 8 0 l 2 -2.5 v 7.8" />
  </g>
</svg>
```

It describes the outline of a cat, sitting on the outline of a house. I've managed to create the illustration while `create-react-app` was setting up the website and I'd like to include it in the body's background, to reinforce the point of the application: a list for tomorrow'ss priorities. As I see it, I will use the application at the end of the day, to set the priorities of the day which follows.
