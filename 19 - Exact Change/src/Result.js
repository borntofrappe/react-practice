import React from 'react'
import Illustration from './Illustration.js'
import Button from './Button'
import { Description, Line } from './StyledComponents'

export default ({sum, change, playAgain}) => <>
  <Description>
    <strong>{sum === change ? 'Congratulations' : 'Pity...'}</strong>
    <br/>
    {sum === change ? `Exactly ${change}` : 'You changed too much'}
  </Description>

  <Line />

  <Illustration animation={sum === change} />
  <Button label="Play again" handleClick={() => playAgain()}/>
</>