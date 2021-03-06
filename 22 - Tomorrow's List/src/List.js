import React from 'react';
import { List, Item, Value, Button } from './StyledComponents';

export default ({list, dispatch}) => <List>
  {list && list.map(({value, id}) => <Item key={id}>
    <Value>
      {value}
    </Value>
    <Button onClick={() => dispatch({
      type: 'REMOVE_ITEM_FROM_LIST',
      id
    })}>
        Remove
      </Button>
  </Item>)}
</List>