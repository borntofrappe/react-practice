import React, { useState } from 'react'
import Board from './Board'
import Result from './Result'
import { randomSum, roundNum } from './utils.js'


export default () => {
  const [change, setChange] = useState(0);
  const [sum, setSum] = useState(randomSum());

  function addCoin(value) {
    if(change < sum) {
      setChange(roundNum(change + value));
    }
  }
  function playAgain() {
    setSum(randomSum());
    setChange(0);
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
  {
    change >= sum
    ?
    <Result
      sum={sum}
      change={change}
      playAgain={playAgain} />
    :

    <Board
      sum={sum}
      change={change}
      coins={coins}
      addCoin={addCoin} />
  }
</>
}