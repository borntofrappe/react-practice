import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 2;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  & > * + * {
    margin-top: 1rem;
  }
`
const Heading = styled.h1`
  font-size: 2.5rem;
  text-transform: capitalize;

  &::selection {
    background: hsl(30, 95%, 60%);
  }
`

const Illustration = styled.svg`
  width: 175px;
  height: auto;
  display: block;
`

const Button = styled.button`
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

export default ({play}) => <Section>
  <Illustration viewBox="0 0 135 100" width="135" height="100">
  <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
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

    <g strokeWidth="5">
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

  <Button aria-label="Play" onClick={() => play()}>
    <svg viewBox="-50 -50 100 100" width="30" height="30">
      <path fill="currentColor" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" d="M -15 -30 l 40 30 -40 30 z"/>
    </svg>
  </Button>
</Section>