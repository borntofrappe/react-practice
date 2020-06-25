# Mobile Usage Stats

The idea is to map data in the form of statistics regarding an hypothetical data plan. The interface receives data in the form of a data structure similar to the following.

```js
const phone = {
  signal, // an integer in the [0, 4] range describing the strength of the signal
  wifi, // boolean detailing the presence of wifi connection
  battery, // integer in the 0-100 range describing the battery left
  gigabytes, // integer in the 0-100 range describing the mobile data left
};
```
