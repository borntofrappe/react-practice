import React, { useReducer } from 'react';
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
`;

function App() {
  const initialState = {
    value: '',
    list: [],
  }

  function reducer(state, action) {
    switch(action.type) {
      case 'UPDATE_VALUE':
        return {...state, value: action.value };
      case 'ADD_ITEM_TO_LIST':
        const item = {
          id: Math.random(),
          value: state.value
        };
        return {...state, value: '', list: [item, ...state.list]}
      case 'REMOVE_ITEM_FROM_LIST':
        const { list } = state;
        const index = list.findIndex(item => item.id === action.id);
        return {...state, list: [...list.slice(0, index), ...list.slice(index + 1)]};
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container>
      <Form onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: 'ADD_ITEM_TO_LIST'
        });
      }}>
        <Label for="task">
          New task
        </Label>
        <Input
          required
          value={state.value}
          onChange={(e) => dispatch({
            type: 'UPDATE_VALUE',
            value: e.target.value
          })}
          name="task"
          id="task"
          type="text"
          placeholder="Something neat" />
        <AddButton>
          Add
        </AddButton>
      </Form>

      {state.list.length > 0 && <>
        <List
          list={state.list}
          dispatch={dispatch} />
      </>}
    </Container>
  );
}

export default App;
