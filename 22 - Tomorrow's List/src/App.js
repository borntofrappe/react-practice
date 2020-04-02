import React, { useState } from 'react';
import List from './List';
import styled from 'styled-components';

const Container = styled.div`
  margin: 2.5rem auto;
  max-width: 25em;
  width: 90vw;
`;

const Form = styled.form`
  display: flex;
  position: relative;
`;

const Label = styled.label`
  position: absolute;
  bottom: 100%;
  font-size: 0.9rem;
  margin: 0.25rem 0;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 0.5rem;
  background: none;
  font-size: 0.9rem;
  font-family: inherit;
  border: 2px solid currentColor;
  outline: none;

  &:placeholder {
    font-family: inherit;
  }
  &:focus {
    border-color: hsl(150, 90%, 30%);
  }

  &:focus + button {
    background: hsl(150, 90%, 30%);
  }
`;

const Button = styled.button`
  background: hsl(200, 95%, 5%);
  color: hsl(0, 0%, 98%);
  padding: 0.5rem;
  border: none;
  font-size: 0.9rem;
  text-transform: uppercase;

  &:focus {
    outline-color: hsl(150, 90%, 30%);
  background: hsl(150, 90%, 30%);
  }
`;

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([{
    value: 'Drink some water',
    id: 0.456845145,
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
          placeholder="Morning exercises" />
        <Button>
          Add
        </Button>
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
