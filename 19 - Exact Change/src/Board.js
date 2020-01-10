import React from 'react'
import styled from 'styled-components'
import Currency from './Currency'
import {Description,  Line} from './StyledComponents'

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

export default ({change, sum, coins, addCoin}) => <>
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