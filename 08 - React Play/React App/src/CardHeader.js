import React from 'react';
import { Header, Index, Question } from './style/components';

// render the question after a paragraph displaying the index of the card
// ! 0-based indexing
function CardHeader({question, index, total}) {
  return (
    <Header>
      <Index>{index + 1} of {total}</Index>
      <Question>{question}</Question>
    </Header>
  );
}

export default CardHeader;