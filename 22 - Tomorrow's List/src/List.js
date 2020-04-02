import React from 'react';
import { List, Item, Value, Button } from './StyledComponents';

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