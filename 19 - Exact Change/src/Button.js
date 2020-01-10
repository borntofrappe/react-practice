import React from 'react'
import { Button } from './StyledComponents'

export default ({label, handleClick}) => <Button aria-label={label} onClick={() => handleClick()}>
  <svg viewBox="-50 -50 100 100" width="30" height="30">
    <path fill="currentColor" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" d="M -15 -30 l 40 30 -40 30 z"/>
  </svg>
</Button>