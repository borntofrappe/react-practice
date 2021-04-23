import React from 'react';

export default function Square({value, onClick}) {
  return (
    <button className="square" onClick={onClick}>
      {value ? 
      <svg viewBox="0 0 100 100">
        <use href={`#${value}`} />
      </svg>
      : ''}
    </button>
  );
}
