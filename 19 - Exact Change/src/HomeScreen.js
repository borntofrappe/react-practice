import React from 'react'
import { Root, Title } from './StyledComponents'
import Logo from './Logo'
import Button from './Button'

// following a click event use the function passed to props to move toward the game
export default ({play}) => <Root>
  <Logo />
  <Title>Exact change</Title>

  <Button label="Go to game screen" handleClick={play} />
</Root>