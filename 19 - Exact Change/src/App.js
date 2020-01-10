import React, { useState } from 'react'
import HomeScreen from './HomeScreen.js'
import GameScreen from './GameScreen.js'
import styled from 'styled-components'

const Root = styled.div`
  background: hsl(0, 0%, 100%);
  color: hsl(0, 0%, 20%);
  padding: 2.5rem;
  border: 0.25rem solid currentColor;
  box-shadow: 0px 0px 10px -4px hsl(0, 0%, 0%);
  max-width: 450px;
  width: 90vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 2;
  & > * + * {
    margin-top: 1rem;
  }
`

function App() {
  const [gameScreen, setGameScreen] = useState(false);

  return (
    <Root>
      {
        gameScreen
        ?
        <GameScreen />
        :
        <HomeScreen showGameScreen={() => setGameScreen(true)} />
      }
    </Root>
  );
}

export default App;
