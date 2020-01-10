import React from 'react'

export default () => <svg viewBox="0 0 135 100" width="135" height="100" style={{ width: '175px', height: 'auto', display: 'block'}}>
<g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
  <g transform="translate(7 86)">
    <g id="coin">
      <rect width="65" height="12" rx="1" />
      <path id="line" d="M 10 0 v 12" />
      <use href="#line" x="10" />
      <use href="#line" x="40" />
    </g>
    <use href="#coin" transform="translate(70 -14) scale(-1 1)" />
    <use href="#coin" x="-5" y="-28" />
  </g>

  <g strokeWidth="5">
    <g transform="translate(70 30) rotate(10)">
      <circle r="27.5" />
      <path d="M 0 -14 a 14 14 0 1 0 14 14" />
      <path d="M -12.5 12.5 l 14 -14" />
    </g>
    <g transform="translate(107.5 72.5) rotate(25)">
      <circle r="25" />
      <path d="M 0 -10 a 10 10 0 1 0 10 10" />
    </g>
  </g>
</g>
</svg>