# Mobile Usage Stats

The idea is to map data in the form of statistics regarding an hypothetical data plan. The interface receives data in the form of a data structure similar to the following.

```js
const data = {
  signal, // an integer in the [0, 4] range describing the strength of the signal
  wifi, // boolean detailing the presence of wifi connection
  battery, // integer in the 0-100 range describing the battery left
  gigabytes, // integer in the 0-100 range describing the mobile data left
};
```

## SVG

The most prominent vector graphic describes the gigabytes left in the plan. However, and in the `<nav>` at the top of the interface, data is mapped starting from the syntax of the following icons:

- signal
- wifi, wifi-unavailable
- battery

See the **res** folder for the actual syntax.
