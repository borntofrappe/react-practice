import React, { useState } from 'react'
import LandingPage from './LandingPage.js'
import Game from './Game.js'
import styled from 'styled-components'

const Root = styled.div`
  background: hsl(0, 0%, 100%);
  color: hsl(0, 0%, 20%);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 0 10px -6px hsl(0, 0%, 50%);
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
