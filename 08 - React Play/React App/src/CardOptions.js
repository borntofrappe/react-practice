import React from 'react';

// following a heading render the options mapping through the values and including a button for each option
function CardOptions({options}) {
  return (
    <div>
      <h2>Select Driver</h2>
      <div>
        {
          options &&
          options.map(({ number, name, team, color}) => (
            <button
              key={number}>
              {name} {team}
            </button>
            ))
        }
      </div>
    </div>
  );
}

export default CardOptions;