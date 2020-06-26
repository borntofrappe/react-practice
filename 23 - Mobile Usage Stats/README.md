# [Mobile Usage Stats](https://codepen.io/borntofrappe/full/qBbXbJM)

The idea is highlight key statistics for an hypothetical, almost random cellphone plan.

## SVG

The most prominent vector graphic describes the gigabytes left in the plan. However, and in the `<nav>` at the top of the interface, data is mapped starting from the syntax of the icons created in the **res** folder.

## D3

The project uses the `arc` function from D3 library to draw the arcs at the center of the application.

You can achieve a similar result using a `path` element together with the `stroke-dasharray` and `stroke-dashoffset` properties, but you need to weigh your options:

- d3: you need an additional library, but have a more reliable solution. You need to do less to ensure cross-browser compatibility

- stroke-dash: you don't need a library, but you do need to know the length of the stroke. The `pathLength` attribute helps, but it's not supported across the board, which means you need JavaScript and a reference to the DOM element to retrieve the measure with the `getTotalLength` method.
