import React from 'react';

// component rendering the svg block with the symbol elements used as icons
const SVGIcons = () =>
<svg display="none" viewBox="0 0 100 100">
  <symbol id="available" viewBox="0 0 100 100" >
      <g
          fill="currentColor">
          <circle
              cx="50"
              cy="50"
              r="50">
          </circle>
          <circle
              cx="50"
              cy="50"
              r="4"
              fill="#fff">
          </circle>
      </g>
  </symbol>
  <symbol id="reserved" viewBox="0 0 100 100">
      <g
          fill="currentColor">
          <circle
              cx="50"
              cy="50"
              r="50">
          </circle>
          <g
              fill="#000"
              opacity="0.2">
              <circle
                  cx="50"
                  cy="42"
                  r="15">
              </circle>
              <circle
                  cx="50"
                  cy="110"
                  r="40">
              </circle>
          </g>
      </g>
  </symbol>
  <symbol id="selected" viewBox="0 0 100 100">
      <g
          fill="currentColor">
          <circle
              cx="50"
              cy="50"
              r="50">
          </circle>
          <text
              x="50"
              y="65"
              fontSize="2.7rem"
              textAnchor="middle"
              fill="#fff">
              1
          </text>
      </g>
  </symbol>

  <symbol id="plus" viewBox="0 0 100 100">
      <g
          stroke="currentColor"
          strokeWidth="10"
          fill="none">
          <path
              d="M 20 50 h 60">
          </path>
          <path
              d="M 50 20 v 60">
          </path>
      </g>
  </symbol>

  <symbol id="minus" viewBox="0 0 100 100">
      <g
          stroke="currentColor"
          strokeWidth="10"
          fill="none">
          <path
              d="M 20 50 h 60">
          </path>
      </g>
  </symbol>

  <symbol id="close" viewBox="0 0 100 100">
        <g
          stroke="currentColor"
          strokeWidth="10"
          fill="none"
          transform="translate(50 50) rotate(45)">
          <g transform="translate(-50 -50)">
              <path
                  d="M 10 50 h 80">
              </path>
              <path
                  d="M 50 10 v 80">
              </path>
          </g>
      </g>
  </symbol>
</svg>;

export default SVGIcons;