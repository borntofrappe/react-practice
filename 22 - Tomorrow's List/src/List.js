import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0.5rem 0;
`;
const Item = styled.li`
  display: flex;
  padding: 0.5rem 0;
  align-items: flex-end;

  & > * + * {
    margin-left: 0.5rem;
  }
`;
const Value = styled.p`
  flex-grow: 1;
  font-size: 0.9rem;
`;

const Button = styled.button`
  background: hsl(200, 95%, 5%);
  color: hsl(0, 0%, 98%);
  padding: 0.5rem;
  border: none;

  &:focus {
    outline-color: hsl(0, 90%, 40%);
    background: hsl(0, 90%, 40%);
  }
`;

export default ({list, removeValueById}) => <List>
  {list && list.map(({value, id}) => <Item key={id}>
    <Value>
      {value}
    </Value>
    <Button onClick={() => removeValueById(id)}>
        Remove
      </Button>
  </Item>)}
</List>