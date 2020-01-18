import React from 'react'

export default({on = true, hue = 0}) => <svg viewBox="-22.5 -37.5 45 52">
<g stroke="hsl(0, 0%, 70%)" fill="none">
  <circle strokeWidth="1" cy="-15" r="15" />
  <path strokeWidth="0.5" d="M -2 0 v -12 a 3 3 0 0 0 -6 0 3 3 0 0 0 3 3 h 9 a 3 3 0 0 0 3 -3 3 3 0 0 0 -6 0 v 12" />
</g>
{
  on &&
  <g stroke={`hsl(${hue}, 80%, 75%)`}>
  <g fill="none" strokeWidth="1.5" strokeLinecap="round">
    <g transform="translate(0 -15)">
      <path transform="translate(0 -18.75)" d="M 0 0 v -3" />
      <path transform=" rotate(45) translate(0 -18.75)" d="M 0 0 v -3" />
      <path transform=" rotate(-45) translate(0 -18.75)" d="M 0 0 v -3" />
      <path transform=" rotate(90) translate(0 -18.75)" d="M 0 0 v -3" />
      <path transform=" rotate(-90) translate(0 -18.75)" d="M 0 0 v -3" />
      <path transform=" rotate(135) translate(0 -18.75)" d="M 0 0 v -3" />
      <path transform=" rotate(-135) translate(0 -18.75)" d="M 0 0 v -3" />
    </g>
  </g>
  <g>
    <circle fill={`hsl(${hue}, 90%, 65%)`} strokeWidth="1" cy="-15" r="15" />
    <path stroke={`hsl(${hue}, 80%, 90%)`} fill="none" strokeWidth="0.5" d="M -2 0 v -12 a 3 3 0 0 0 -6 0 3 3 0 0 0 3 3 h 9 a 3 3 0 0 0 3 -3 3 3 0 0 0 -6 0 v 12" />
  </g>
  </g>
}
<g fill="hsl(0, 0%, 70%)" stroke="hsl(0, 0%, 60%)" strokeWidth="1">
  <circle cy="9" r="5" />
  <rect x="-7" width="14" height="5" rx="2.5" />
  <rect x="-7" width="14" y="5" height="5" rx="2.5" />
</g>
</svg>