import React from 'react'
import styled from 'styled-components'

const PlayButton = styled.button`
  color: inherit;
  padding: 0.25rem;
  border-radius: 50%;
  background: none;
  border: 0.4rem solid currentColor;
  width: 3.5rem;
  height: 3.5rem;
  display: block;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.5), color 0.3s ease-in-out;

  svg {
    width: 100%;
    height: auto;
    display: block;
  }

  &:focus {
    outline: none;
  }
  &:focus,
  &:hover {
    color: hsl(30, 95%, 50%);
    transform: scale(1.2);
  }
`

export default ({label, handleClick}) => <PlayButton aria-label={label} onClick={() => handleClick()}>
  <svg viewBox="-50 -50 100 100" width="30" height="30">
    <path fill="currentColor" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" d="M -15 -30 l 40 30 -40 30 z"/>
  </svg>
</PlayButton>