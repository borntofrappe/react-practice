import React from 'react';
import CardHeader from './CardHeader';
import CardSelected from './CardSelected';
import CardOptions from './CardOptions';
import { CardContainer } from './style/components';

// card displaying the rider's information
function Card({prediction, selected, index, total, selectOption, removeOption}) {
  const {name: question, options } = prediction;

  return (
    <CardContainer className="Card">
      <CardHeader
        question={question}
        index={index}
        total={total} />

      <CardSelected
        index={index}
        selected={selected}
        removeOption={removeOption}/>

      <CardOptions
        index={index}
        options={options}
        selectOption={selectOption}/>
    </CardContainer>
  );
}

export default Card;