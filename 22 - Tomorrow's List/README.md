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

It describes the outline of a cat, comfortably sitting on the outline of a house. I've managed to create the illustration while `create-react-app` was setting up the website and I'd like to include it in the body's background.

## Style

At first I decided to test out a popular framework in [material-ui](https://material-ui.com/). I'm sure it's more out of inexperience than anything, but I found the design process rather cumbersome and incredibly inefficient, so I switched back to CSS and `styled-components`. In the **res** folder you find a basic idea behind the design of the application using HTML and CSS.

## useState

### input && value

For the input element, create a stateful variable in `value`

```js
const [value, setValue] = useState("");
```

In the input element, directly use the string in the `value` attribute

```jsx
<input value={value} />
```

Following the `onChange` event, update the string with the given `setValue` function.

```jsx
<input onChange={e => setValue(e.target.value)} />
```

### form && list

With the given value, the form and the `submit` method are responsible to add the values to the list. To this end, create a separate variable.

```js
const [list, setList] = useState([]);
```

An array to keep track of multiple items. Use the array later in the DOM, to include one `<li>` element for each item.

```jsx
<ul>
{
  list.map(item => <li>{item}</li>);
}
</ul>
```

I haven't specified a `key` attribute, but that essential bit will come in a moment.

With a conditional, I decided to show the list only if the list has items.

```jsx
{
  list.length > 0 && <ul>{/* map items here */}</ul>;
}
```

When it comes to adding items to the list, and following the `submit` event on the form, I created a separate function to keep things cleaner.

```jsx
<form onSubmit={handleSubmit}></form>
```

After preventing the default behavior of the form, consider if the value offers something different than an empty string.

```js
function handleSubmit(e) {
  e.preventDefault();
  if (value) {
  }
}
```

If it's truthy, add the item to the list. I've chosen here a couple of things:

- add at the beginning of the list

```js
setList([value, ...list]);
```

- reset the value to an empty string

```js
setValue("");
```

Most importantly however, instead of adding just the value, I've also decided to add an id in the form of the return value of `Math.random()`. Perhaps using the current number of milliseconds in a date object might have worked better, but this ensures each item has a unique identifier.

```js
setList([
  {
    value,
    id: Math.random()
  },
  ...list
]);
```

In the JSX which follows use the identifier in the ever useful key attribute.

```jsx
<ul>
{
  list.map(({id, value}) => <li key={id}>{value}</li>);
}
</ul>
```

### button & removeValueById

The previous methods take care of tracking the input's value and adding the string to the list.

However, since the list item is set to include a button, to remove the matching string from the list, an additional method is required.

```jsx
<ul>
{
  list.map(({id, value}) => <li key={id}>
    <p>{value}</p>
    <button onClick={}>Remove</button>
  </li>);
}
</ul>
```

In this instance I make use of the identifier provided in `id`, and call a function to identify and remove the matching string from the list.

```jsx
<button onClick={() => removeValueById(id)}>Remove</button>
```

If an item with the id is found, slice the array to leave out the specific object.

```js
function removeValueById(id) {
  const index = list.findIndex(item => item.id === id);
  if (index !== -1) {
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  }
}
```

## useReducer

I've saved the two components in the **res** folder, but the exercise of the current project requires the code to be updated with `useReducer` instead of the `useState` hook.

Following [this insightful workout](https://youtu.be/sf4spiPynBE), `useReducer` allows for a more expressive approach. Instead of updating the state directly, you dispatch an action with a given type and then accommodate the change to the state in the reducer function.

This bit of code, while not functional, actually helps a lot.

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

- in the hook pass the reducer function (the one which will handle the different updates) and the initial state

- the hook returns an array from which you can destructure the state, to use it throughout the application, and a method to dispatch actions.

Think of it this way:

- `reducer` handles the different updates

```js
function reducer(state, action) {
  switch (action.type) {
    case "DO_SOMETHING":
      console.log(action.value);
      return "";
    default:
      return null;
  }
}
```

- the `dispatch` function then specifies the necessary arguments

```js
dispatch({
  type: "DO_SOMETHING",
  value: "Hello world"
});
```

I'll refer you back to [the workout](https://youtu.be/sf4spiPynBE) for a more clear explanation.

Updating the project one step at a time.

### initialState

Nothing too extravagant here, but an object describing the value and list.

```js
const initialState = {
  value: "",
  list: []
};
```

### reducer

The function takes as argument the state and the action which updates the state.

```js
function reducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}
```

Picking up from the previous useState methods, I need to account for three actions:

1. update value

   ```js
   function reducer(state, action) {
     switch (action.type) {
       case "UPDATE_VALUE":
         return { ...state, value: action.value };
       default:
         return state;
     }
   }
   ```

   It doesn't take much to update the previous approach. You just need to remember to pass the appropriate type and value property in the `dispatch` function. More on that in a bit.

1. add to list

   ```js
   function reducer(state, action) {
     switch (action.type) {
       case "ADD_ITEM_TO_LIST":
         const item = {
           id: Math.random(),
           value: state.value
         };
         return { ...state, value: "", list: [item, ...state.list] };
       default:
         return state;
     }
   }
   ```

   I'm noticing how much ES6 can make life easier. Not only destructuring arrays, but objects as well, comes in very handy.

1. remove from list

   ```js
   function reducer(state, action) {
     switch (action.type) {
       case "REMOVE_ITEM_FROM_LIST":
         const { list } = state;
         const index = list.findIndex(item => item.id === action.id);
         return { ...state, list: [...list.slice(0, index), ...list.slice(index + 1)] };
       default:
         return state;
     }
   }
   ```

### useReducer

The previous snippet is actually and now functional

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

Use the variables in the JSX like you would for any variable.

```jsx
<input value={state.value}>
```

Update the state dispatching the appropriate actions.

```jsx
<input
  onChance={(e) => dispatch({
    type: 'UPDATE_VALUE',
    value: e.target.value
  })}>
```

It's probably exaggerated for the simple application, but makes everything quite more clear. I can see the appeal as projects grow in complexity.
