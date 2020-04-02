import React, { useState } from 'react';
import List from './List';

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  function updateValue(e) {
    setValue(e.target.value)
  }

  function updateList(e) {
    e.preventDefault();
    if(value) {
      setList([...list, {
        value,
        id: Math.random(),
      }]);
      setValue('');
    }
  }

  function clearList() {
    setList([]);
  }

  function removeValueById(id) {
    const index = list.findIndex(item => item.id === id);
    if(index !== -1) {
      setList([...list.slice(0, index), ...list.slice(index + 1)]);
    }
  }

  return (
    <div>
      <h1>Tomorrow</h1>
      <form onSubmit={updateList}>
        <label>
          New task
          <input
            value={value}
            onChange={updateValue}
            name="task"
            id="task"
            type="text"
            placeholder="Clean room" />
        </label>

        <button>Add</button>
      </form>

      {list.length > 0 && <>
        <List
          list={list}
          removeValueById={removeValueById} />

        <button onClick={clearList}>Clear</button>
      </>}
    </div>
  );
}

export default App;
