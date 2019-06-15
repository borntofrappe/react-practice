import React from 'react';
import CardHeader from './CardHeader';
import CardSelection from './CardSelection';
import CardOptions from './CardOptions';

// card displaying the rider's information
// retrieve the prediction as well as its index vis a vis the total number of predictions
function Card({prediction, index, total}) {
  // destructure the question and the options array
  const {name: question, options } = prediction;
  // render the components passing the necessary props
  return (
    <div className="Card">
      <CardHeader
        question={question}
        index={index}
        total={total} />

      <CardSelection selection=""/>

      <CardOptions
        options={options}/>
    </div>
  );
}

export default Card;