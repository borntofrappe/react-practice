import React from 'react'
import { Illustration } from './StyledComponents'

// animation is used to trigger a keyframes animation if the input prop is true
export default ({animation}) => <Illustration className={animation ? 'animation' : ''} viewBox="0 0 100 100" width="100" height="100">
<g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
  <g transform="translate(17.5 100)">
    <g className="rotate">
      <g id="coin">
        <rect width="65" height="12" y="-14" rx="1" />
        <path d="M 10 -2 v -12" />
        <path d="M 20 -2 v -12" />
        <path d="M 50 -2 v -12" />
      </g>
      <g transform="translate(70 -14) scale(-1 1)">
        <g className="translate">
          <g className="rotate">
            <use href="#coin" />
            <g transform="translate(70 -14) scale(-1 1)">
              <g className="rotate">
                <g className="translate">
                  <use href="#coin" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </g>
</g>
</Illustration>