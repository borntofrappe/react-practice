import React from 'react';

// render the question after a paragraph displaying the index of the card
// ! 0-based indexing
function CardHeader({question, index, total}) {
  return (
    <header>
      <p>{index + 1} of {total}</p>
      <h1>{question}</h1>
    </header>
  );
}

export default CardHeader;