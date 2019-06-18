import React from 'react';
import { Selected, Option, Number, Rider, Name, Team } from './style/components';

// container displaying the selected option
function CardSelected({selected, index, removeOption}) {
  // render the same UI used in the list of options, detailing only the removeOption function instead of the selectOption alternative
  return (
    <Selected className="Selected">
      {
        selected &&
        <Option onClick={() => removeOption(index)}>
          <Number color={selected.color}>
            { selected.number }
          </Number>
          <Rider>
            <Name>
              {selected.name.first} <strong>{selected.name.last}</strong>
            </Name>
            <Team>
              {selected.team}
            </Team>
          </Rider>
        </Option>
      }
    </Selected>
  );
}

export default CardSelected;