import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Button from './Button'

const Title = styled.h1`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-size: 2.5rem;
  text-transform: capitalize;

  &::selection {
    background: hsl(30, 95%, 60%);
  }
`

export default ({showGameScreen}) => <>
  <Logo />
  <Title>Exact change</Title>

  <Button label="Go to game screen" handleClick={showGameScreen} />
</>