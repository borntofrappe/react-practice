import React from 'react'
import Currency from './Currency'
import {Root, Description, Line, Board, Change, Coin} from './StyledComponents'


export default ({change, sum, coins, addCoin}) => <Root>
  <Description>
    Find the change for <strong>{sum}</strong>
  </Description>

  <Line />
  <Board>
    <Change>
      {change}
      {sum - change > 0 && <span>▲</span>}
    </Change>

    {/* for each coin, add a button to consider the different values */}
    {
      coins.map(({key, value}) => <Coin
        aria-label={`Add ${key.split('-').join(' ')}`}
        onClick={() => addCoin(value)}
        key={key}
        area={key}>
        <Currency cut={key} />
      </Coin>)
    }
  </Board>
</Root>