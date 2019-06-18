import React from 'react';
import { Selection, Action, Options, Option, Number, Rider, Name, Team } from './style/components';

// container displaying the list of options
function CardOptions({index, options, selectOption}) {
  // render a heading and one element for each option
  return (
    <Selection>
      <Action>Select Driver</Action>
      <Options>
        {
          options &&
          options.map(option => (
            <Option
              onClick={() => selectOption(index, option)}
              key={option.number}>
                <Number color={option.color}>
                  { option.number }
                </Number>
                <Rider>
                  <Name>
                    {option.name.first} <strong>{option.name.last}</strong>
                  </Name>
                  <Team>
                    {option.team}
                  </Team>
                </Rider>
            </Option>
            ))
        }
      </Options>
    </Selection>
  );
}

export default CardOptions;