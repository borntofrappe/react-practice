# [Line Charts](https://codepen.io/borntofrappe/full/dyoKaOR)

Practice with React, hooks, specifically `useEffect` and the fetch API to display information retrieved from a public API.

## Update

I made the egregious mistake of tallying up the number of cases, thinking the API was actually returning the number of _new_ cases in a day.

```js
const total = data.reduce((acc, curr) => acc + curr.cases, 0);
```

Since the number describes the _cumulative_ value already, all that is required is picking the last value in the array.

```js
const total = data[data.length - 1].cases;
```
