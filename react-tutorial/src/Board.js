import React from 'react';
import Square from './Square.js';

export default function Board({ squares, handleClick }) {
  return (
    <div className="grid">
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => handleClick(i)} />
      ))}
    </div>
  );
}
