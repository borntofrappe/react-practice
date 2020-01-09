import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 2;
  font-family: "Comfortaa", cursive;
`
const Heading = styled.h1`
  font-size: 2.5rem;
  text-transform: capitalize;
`

const Illustration = styled.svg`
  width: 175px;
  height: auto;
  display: block;
`

export default () => <Header>
  <Illustration viewBox="0 0 135 100" width="135" height="100">
  <g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
    <g transform="translate(7 86)">
      <g id="coin">
        <rect width="65" height="12" rx="1" />
        <path id="line" d="M 10 0 v 12" />
        <use href="#line" x="10" />
        <use href="#line" x="40" />
      </g>
      <use href="#coin" transform="translate(70 -14) scale(-1 1)" />
      <use href="#coin" x="-5" y="-28" />
    </g>

    <g stroke-width="5">
      <g transform="translate(70 30) rotate(10)">
        <circle r="27.5" />
        <path d="M 0 -14 a 14 14 0 1 0 14 14" />
        <path d="M -12.5 12.5 l 14 -14" />
      </g>
      <g transform="translate(107.5 72.5) rotate(25)">
        <circle r="25" />
        <path d="M 0 -10 a 10 10 0 1 0 10 10" />
      </g>
    </g>
  </g>
  </Illustration>
  <Heading>Exact change</Heading>

</Header>