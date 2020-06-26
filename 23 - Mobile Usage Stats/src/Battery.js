import React from 'react';

export default ({ battery }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-3 -50 100 100"
    width="1em"
    height="1em"
  >
    <rect
      width="75"
      height="52"
      x="1"
      y="-26"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      rx="10"
    />
    <path fill="currentColor" d="M 84 -10 a 10 10 0 0 1 0 20" />
    <g transform="translate(7 0)">
      <g transform={`scale(${battery / 100} 1)`}>
        <rect
          width="63"
          height="32"
          y="-16"
          fill="currentColor"
          stroke="none"
        />
      </g>
    </g>
  </svg>
);
