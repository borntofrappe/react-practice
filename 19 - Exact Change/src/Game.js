import React, { useState } from 'react'
import GameScreen from './GameScreen.js'
import ResultScreen from './ResultScreen.js';
import { randomSum, roundNum } from './utils.js'


export default () => {
  /* logic describing the game
  create a variable sum representing the goal
  another variable change to keep track of the collected coins
  */
 const [sum, setSum] = useState(randomSum());
 const [change, setChange] = useState(0);

 // update the change variable according to the input value
  function addCoin(value) {
    if(change < sum) {
      setChange(roundNum(change + value));
    }
  }

  // array describing the coins
  // the key is used for the SVG and grid-area properties
  // the value is considered following a click event
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

  // to play again, reset the sum and change
  function playAgain() {
    setSum(randomSum());
    setChange(0);
  }

  return (
    <>
      { change < sum
        ?
        <GameScreen change={change} sum={sum} coins={coins} addCoin={addCoin} />
        :
        <ResultScreen change={change} sum={sum} playAgain={playAgain} />
      }
    </>
  );
}