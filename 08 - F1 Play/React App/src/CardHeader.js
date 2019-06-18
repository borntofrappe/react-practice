import React from 'react';
import { Header, Index, Question } from './style/components';

// container displaying the question
function CardHeader({question, index, total}) {
  // render the question prefaced by the index of the current prediction
  return (
    <Header>
      <Index>{index + 1} of {total}</Index>
      <Question>{question}</Question>
    </Header>
  );
}

export default CardHeader;