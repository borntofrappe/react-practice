# [Game of Life](https://codepen.io/borntofrappe/full/xxbKgMQ)

## Goal

Create the basic structure behind the game of life with the canvas API.

## Notes

Previously, I developed the skeleton of the game of life with vanilla JavaScript. While describing the behavior of the cells however, I thought React would be the best fit to update the application based on its previous state.

In the **res** folder you find this first effort.

## Update

The project makes use of a single component in `App.js`, but the structure of the code can be definitely improved. Consider breaking out the controls and the patterns into their own individual components.

On top of this JSX note, the way hooks are used is tentative, and it shows. More research is needed in `useEffect` and the best approach to set/remove a timeout that doesn't include a lifecycle method.
