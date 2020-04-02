import React, { useState } from 'react';
import List from './List';
import styled from 'styled-components'
import { Container, Form, Label, Input, Button } from './StyledComponents';

const AddButton = styled(Button)`
  background: hsl(200, 95%, 5%);
  color: hsl(0, 0%, 98%);
  font-size: 0.9rem;
  text-transform: uppercase;

  &:focus {
    outline-color: hsl(150, 90%, 30%);
    background: hsl(150, 90%, 30%);
  }
`

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

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
  function removeValueById(id) {
    const index = list.findIndex(item => item.id === id);
    if(index !== -1) {
      setList([...list.slice(0, index), ...list.slice(index + 1)]);
    }
  }

  return (
    <Container>
      <Form onSubmit={updateList}>
        <Label for="task">
          New task
        </Label>
        <Input
          required
          value={value}
          onChange={updateValue}
          name="task"
          id="task"
          type="text"
          placeholder="Something neat" />
        <AddButton>
          Add
        </AddButton>
      </Form>

      {list.length > 0 && <>
        <List
          list={list}
          removeValueById={removeValueById} />
      </>}
    </Container>
  );
}

export default App;
