import React from 'react';
import styled from 'styled-components';
	// import the function creating the deck and the components describing the application
import { stackDeck } from './utils.js';
import { useState } from 'react';
import Card from './Card'

/* display the cards in a grid */
const Deck = styled.main`
  margin: 1rem auto;
  width: 90vw;
  max-width: 700px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 140px);
  grid-auto-rows: max-content;
  grid-gap: 1rem;
  justify-content: center;
`;

function App() {
  const cards = 16;
  const [deck, setDeck] = useState(stackDeck(cards));

  return (
    <Deck>
      {deck.map(card => <Card key={card.id} card={card}/>)}
    </Deck>
  );
}

export default App;
