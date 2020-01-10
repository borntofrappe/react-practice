import React from 'react'
import Illustration from './Illustration.js'
import Button from './Button'
import { Root, Description, Line } from './StyledComponents'
import { roundNum } from './utils'

// show different messages according to the received values for sum and change
export default ({sum, change, playAgain}) => <Root>
  <Description>
    <strong>{sum === change ? 'Congratulations' : 'Shoot...'}</strong>
    <br/>
    {sum === change ? `Exactly ${change}` : `${roundNum(change - sum)} too much`}
  </Description>

  <Line />
  {/* animation triggered only if the change matches the sum */}
  <Illustration animation={sum === change} />
  <Button label="Play again" handleClick={() => playAgain()}/>
</Root>