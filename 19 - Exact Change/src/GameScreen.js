import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Currency from './Currency'
import { randomSum, roundNum } from './utils.js'

const Description = styled.h1`
  font-weight: initial;
  font-size: 1.5rem;
  line-height: 1.5;
`

const Board = styled.main`
  @supports (display: grid) {
    display: grid;
    grid-template-areas:
      "two-euros one-euro fifty-cents"
      "twenty-cents change ten-cents"
      "five-cents two-cents one-cent";
    grid-auto-columns: 6rem;
    grid-auto-rows: 6rem;
    align-items: center;
    justify-items: center;
    grid-gap: 1rem;
    justify-content: center;
  }
`

const Change = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  grid-area: change;
  display: flex;
  justify-content: center;
  align-items: center;

  &::selection {
    background: hsl(30, 95%, 60%);
  }
  span {
    margin: 0 0.5rem;
    font-size: 0.8em;
    font-weight: bold;
    color: hsl(10, 95%, 55%);
  }
`;

const Coin = styled.button`
  color: inherit;
  border: none;
  background: none;
  display: inline-block;
  width: 6rem;
  height: 6rem;
  padding: 0.75rem;
  grid-area: "${({area}) => area}";
  transform: scale(0.75);
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
    transform: scale(1);
  }
  &:hover {
    color: hsl(30, 95%, 50%);
  }
`

const Line = styled.hr`
  background: currentColor;
  height: 0.2rem;
  width: 100%;
`

export default () => {
  const [change, setChange] = useState(0);
  const [sum, setSum] = useState(0)
  const timeout = useRef();

  useEffect(() => {
    setSum(randomSum());
  }, []);

  useEffect(() => {
    const delta = change - sum;
    if(delta >= 0) {
      timeout.current = setTimeout(() => {
        setSum(randomSum());
        setChange(0);
        clearTimeout(timeout.current);
      }, 2000);
    }
  }, [change, sum]);

  useEffect(() => {
    clearTimeout(timeout.current);
  }, [timeout]);


  function addCoin(value) {
    if(change < sum) {
      setChange(roundNum(change + value));
    }
  }

  const coins = [
    {
      key: 'two-euros',
      value: 2,
    },
    {
      key: 'one-euro',
      value: 1,
    },
    {
      key: 'fifty-cents',
      value: 0.5,
    },
    {
      key: 'twenty-cents',
      value: 0.2,
    },
    {
      key: 'ten-cents',
      value: 0.1,
    },
    {
      key: 'five-cents',
      value: 0.05,
    },
    {
      key: 'two-cents',
      value: 0.02,
    },
    {
      key: 'one-cent',
      value: 0.01,
    },
  ]

return <>
  <Description>
    Find the change for <strong>{sum}</strong>
  </Description>

  <Line />

  <Board>
    <Change>
      {change}
      {sum - change > 0 && <span>▲</span>}
    </Change>

    {
      coins.map(({key, value}) => <Coin aria-label={`Add ${key.split('-').join(' ')}`} onClick={() => addCoin(value)} key={key} area={key}>
        <Currency cut={key} />
      </Coin>)
    }
  </Board>
</>
}