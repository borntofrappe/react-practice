import React from 'react';

export default ({ signal, maxSignal }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-50 -90 100 100"
      width="1em"
      height="1em"
    >
      <defs>
        <rect id="signal" x="-7.5" width="15" y="-75" height="75" />
      </defs>
      <g fill="currentColor" stroke="none">
        {Array(maxSignal)
          .fill()
          .map((v, i, { length }) => (
            <g key={i}>
              <g transform={`translate(${-40 + (80 / length) * i} 0)`}>
                <use
                  opacity={`${i < signal ? 1 : 0.25}`}
                  href="#signal"
                  transform={`scale(1 ${1 - 0.25 * (length - i - 1)})`}
                />
              </g>
            </g>
          ))}
      </g>
    </svg>
  );
};
