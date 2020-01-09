import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Cut from './Cut'

const Main = styled.main`
  display: grid;
  grid-template-areas: "two one fifty" "twenty change ten" "five cents cent";
  grid-auto-columns: 6rem;
  grid-auto-rows: 6rem;
  align-items: center;
  justify-items: center;
  grid-gap: 0.75rem;
`
const Coin = styled.button`
  color: inherit;
  border: none;
  background: none;
  width: 100%;
  height: 100%;
  padding: 1rem;
  grid-area: ${({area}) => area};
  transform: scale(0.9);
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
    transform: scale(1.2);
  }
  &:hover {
    color: hsl(30, 95%, 50%);
  }
`

const Change = styled.h1`
  font-size: 2.5rem;
  grid-area: change;

  &::selection {
    background: hsl(30, 95%, 60%);
  }
`;


export default () => {
  const [change, setChange] = useState(0)

  useEffect(() => {
    setChange(Math.floor(Math.random() * 500) / 100)
  }, [])

  const coins = [
    {
      key: 'two',
      value: 2,
    },
    {
      key: 'one',
      value: 1,
    },
    {
      key: 'fifty',
      value: 0.5,
    },
    {
      key: 'twenty',
      value: 0.2,
    },
    {
      key: 'ten',
      value: 0.1,
    },
    {
      key: 'five',
      value: 0.05,
    },
    {
      key: 'cents',
      value: 0.02,
    },
    {
      key: 'cent',
      value: 0.01,
    },
  ]

  return <Main>
  <Change>
    {change}
  </Change>
  {
    coins.map(({key, value}) => <Coin onClick={() => setChange(change - value)} key={key} area={key}>
      <Cut cut={key} />
    </Coin>)
  }

</Main>
}