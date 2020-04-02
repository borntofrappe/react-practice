import React, { useState } from 'react';
import List from './List';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AddBox from '@material-ui/icons/AddBox';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import DeleteForever from '@material-ui/icons/DeleteForever'

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([{
    value: 'grocery',
    id: 2,
  }]);

  function updateValue(e) {
    setValue(e.target.value)
  }

  function updateList(e) {
    e.preventDefault();
    if(value) {
      setList([{
        value,
        id: Math.random(),
      }, ...list]);
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
    <Container style={{margin: "2rem auto", maxWidth: "30em"}}>
      <Box component="form" onSubmit={updateList} style={{ display: 'flex', marginBottom: "1.5rem" }}>
        <TextField
          style={{flexGrow: '1'}}
          value={value}
          onChange={updateValue}
          required
          name="task"
          id="task"
          type="text"
          label="New task"
          variant="outlined" />

        <Button variant="contained" color="primary" disableElevation style={{ marginLeft: "0.4rem "}}>
          Add
          <AddBox
            style={{ fontSize: "1.75em", marginLeft: "0.5rem", lineHeight: "1.75em"}} />
        </Button>
      </Box>

      {list.length > 0 && <>
        <List
          list={list}
          removeValueById={removeValueById} />

        <Button style={{marginTop: "1.5rem"}} variant="contained" disableElevation color="secondary" onClick={clearList}>
          Clear List
          <DeleteForever />
        </Button>
      </>}
    </Container>
  );
}

export default App;
