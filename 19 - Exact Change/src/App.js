import React, { useState } from 'react'
import HomeScreen from './HomeScreen.js'
import Game from './Game.js'

function App() {
  // boolean to show move between the home screen and the actual game
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      {
        isPlaying
        ?
        <Game />
        :
        <HomeScreen play={() => setIsPlaying(true)} />
      }
    </>
  );
}

export default App;
