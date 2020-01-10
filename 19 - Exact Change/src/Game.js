import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Cut from './Cut'
import { randomSum } from './utils.js'

const Board = styled.div`
  text-align: center;
  & > * + * {
    margin-top: 1.5rem;
  }
`

const Task = styled.h1`
  font-weight: initial;
  font-size: 1.5rem;
`

const Main = styled.main`
  @supports (display: grid) {
    display: grid;
    grid-template-areas: "two one fifty" "twenty change ten" "five cents cent";
    align-items: center;
    justify-items: center;
    grid-gap: 1rem;
    justify-content: center;
  }
`

const Coin = styled.button`
  color: inherit;
  border: none;
  background: none;
  display: inline-block;
  width: 6rem;
  height: 6rem;
  padding: 1rem;
  grid-area: ${({area}) => area};
  transform: scale(0.8);
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

  &:after {
    margin: 0 0.5rem;
    content: "${({state}) => state}";
    font-size: 0.8em;
    font-weight: bold;
    color: ${({state}) => state === '✓' ? 'hsl(130, 90%, 45%)' : 'hsl(0, 95%, 60%)'};
  }
`;

// ▲✓✗

export default () => {
  const [change, setChange] = useState(0);
  const [sum, setSum] = useState(0)
  const [state, setState] = useState('▲');
  const timeout = useRef();

  useEffect(() => {
    setSum(randomSum());
  }, []);

  useEffect(() => {
    const delta = change - sum;
    if(delta > 0) {
      setState('✗');
    } else if(delta < 0) {
      setState('▲');
    } else {
      setState('✓');
    }

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
      setChange(change + value);
    }
  }

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

return <Board>
  <Task>
    Find the <em>exact change</em> for <strong>{sum}</strong>
  </Task>
  <Main>

    <Change state={state}>
      {change}
    </Change>
    {
      coins.map(({key, value}) => <Coin onClick={() => addCoin(value)} key={key} area={key}>
        <Cut cut={key} />
      </Coin>)
    }

  </Main>
</Board>
}