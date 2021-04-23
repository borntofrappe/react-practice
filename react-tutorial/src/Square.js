import React from 'react';

export default function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value ? 
      <svg viewBox="0 0 100 100" width="1em" height="1em">
        <use href={`#${props.value}`} />
      </svg>
      : ''}
    </button>
  );
}
