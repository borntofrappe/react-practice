import React from 'react';
import styled from 'styled-components';
	// import the function creating the deck and the components describing the application
import { stackDeck } from './utils.js';
import { useState } from 'react';

import Card from './Card';
import Victory from './Victory';

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
  const [victory, setVictory] = useState(false);

  function flipCard(id) {
    setDeck(previous => {
      const selection = previous.find(card => card.id === id);
      const index = previous.findIndex(card => card.id === id);
      selection.isFlipped = !selection.isFlipped;

      const current = [...previous.slice(0, index), selection, ...previous.slice(index + 1)];
      const flipped = current.filter(card => !card.isFlipped && !card.isPaired);

      if(flipped.length > 2) {
        current.forEach(card => {
          if(card.id !== id) {
            card.isFlipped = true;
          }
        })
      } else if(flipped.length === 2) {
        const [cardA, cardB] = flipped;
        if(cardA.value === cardB.value) {
          const indexA = current.findIndex(card => card.id === cardA.id);
          const indexB = current.findIndex(card => card.id === cardB.id);
          current[indexA].isPaired = true;
          current[indexB].isPaired = true;
        }
      }

      const allPaired = deck.every(card => card.isPaired);
      if(allPaired) {
        setVictory(true);
      }

      return current;
    });
  }

  function reset() {
    setDeck(stackDeck(cards));
    setVictory(false);
  }

  return (
    <>
      <Deck>
        {deck.map(card => <Card key={card.id} card={card} flipCard={flipCard} />)}
      </Deck>
      {
        victory && <Victory reset={reset}/>
      }
    </>
  );
}

export default App;
