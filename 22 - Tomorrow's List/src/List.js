import React from 'react';

export default ({list, removeValueById}) => <ul>
  {list && list.map(({value, id}) => <li key={id}>
    <p>{value}</p>
    <button onClick={() => removeValueById(id)}>Remove</button>
  </li>)}
</ul>