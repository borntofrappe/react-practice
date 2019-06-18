import React from 'react';
import { Selected, Option, Number, Rider, Name, Team } from './style/components';

// render a div with the selected option
// using the same UI specified for the CardOptions component
// ! in the Selected component specify an additional graphic through a pseudo element, signalling how clicking on the button removes the option
function CardSelected({selected, index, removeOption}) {
  const { number, name, team, color } = selected;
  return (
    <Selected className="Selected">
      {
        selected &&
        <Option onClick={() => removeOption(index)}>
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
      }
    </Selected>
  );
}

export default CardSelected;