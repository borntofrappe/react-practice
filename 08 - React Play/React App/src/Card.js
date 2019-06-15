import React from 'react';
import CardHeader from './CardHeader';
import CardSelected from './CardSelected';
import CardOptions from './CardOptions';
import { CardContainer } from './style/components';

// card displaying the rider's information
// retrieve the prediction as well as its index vis a vis the total number of predictions
function Card({prediction, index, total}) {
  // destructure the question and the options array
  const {name: question, options } = prediction;
  // render the components passing the necessary props
  return (
    <CardContainer className="Card">
      <CardHeader
        question={question}
        index={index}
        total={total} />

      <CardSelected selected=""/>

      <CardOptions
        options={options}/>
    </CardContainer>
  );
}

export default Card;