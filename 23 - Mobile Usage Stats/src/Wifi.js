import React from 'react';

export default ({ hasWifi }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-50 -90 100 100"
    width="1em"
    height="1em"
  >
    <defs>
      <path id="wifi" d="M 0 0 l -50 -50 a 60 60 0 0 1 100 0 z" />
      <path id="bar" d="M -30 -5 l 70 -70" />
      <mask id="mask-wifi">
        <use href="#wifi" fill="hsl(0, 0%, 100%)" />
        <use href="#wifi" fill="hsl(0, 0%, 0%)" transform="scale(0.85)" />
        <use href="#wifi" fill="hsl(0, 0%, 100%)" transform="scale(0.7)" />
        <use href="#wifi" fill="hsl(0, 0%, 0%)" transform="scale(0.55)" />
        <use href="#wifi" fill="hsl(0, 0%, 100%)" transform="scale(0.4)" />

        {hasWifi && (
          <use
            href="#bar"
            fill="none"
            stroke="hsl(0, 0%, 0%)"
            strokeWidth="20"
            strokeLinecap="square"
          />
        )}
      </mask>
    </defs>
    <g fill="currentColor" stroke="none" mask="url(#mask-wifi)">
      <use href="#wifi" />
    </g>

    {hasWifi && (
      <use
        href="#bar"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="square"
      />
    )}
  </svg>
);
