import React from 'react';
import { Selection, Action, Options, Option, Number, Rider, Name, Team } from './style/components';


// following a heading render the options mapping through the values and including a button for each option
// ! when a button gets clicked, call a function to retrieve the option and display it in the CardSelected component
function CardOptions({index, options, selectOption}) {
  return (
    <Selection>
      <Action>Select Driver</Action>
      <Options>
        {
          options &&
          options.map(({ number, name, team, color}) => (
            <Option
              onClick={() => selectOption(index, {number, name, team, color})}
              key={number}>
                <Number color={color}>
                  { number }
                </Number>
                <Rider>
                  <Name>
                    {name.first} <strong>{name.last}</strong>
                  </Name>
                  <Team>
                    {team}
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