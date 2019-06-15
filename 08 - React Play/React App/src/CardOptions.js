import React from 'react';
import { Selection, Action, Options, Option, Number, Rider, Name, Team } from './style/components';


// following a heading render the options mapping through the values and including a button for each option
function CardOptions({options}) {
  return (
    <Selection>
      <Action>Select Driver</Action>
      <Options>
        {
          options &&
          options.map(({ number, name, team, color}) => (
            <Option
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