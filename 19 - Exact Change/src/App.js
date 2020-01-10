import React, { useState } from 'react'
import LandingPage from './LandingPage.js'
import Game from './Game.js'
import styled from 'styled-components'

const Root = styled.div`
  color: hsl(0, 0%, 15%);
  background: hsl(0, 0%, 100%);
  color: hsl(0, 0%, 20%);
  padding: 2.5rem;
  border-radius: 0px;
  border: 0.25rem solid currentColor;
  box-shadow: 0px 0px 10px -4px hsl(0, 0%, 0%);
  max-width: 450px;
  width: 90vw;
`

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const play = () => setIsPlaying(true);

  return (
    <Root>
      {
        isPlaying
        ?
        <Game />
        :
        <LandingPage play={play} />
      }
    </Root>
  );
}

export default App;
