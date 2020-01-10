import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  35% {
    transform: rotate(-10deg);
  }
`
const translate = keyframes`
  35% {
    transform: translate(-5px, -10px);
  }
`

const Illustration = styled.svg`
  width: 175px;
  height: auto;
  display: block;

  &.animation .translate {
    animation: ${translate} 2s cubic-bezier(0.95, 0, 0.08, 1) infinite;
  }
  &.animation .rotate {
    animation: ${rotate} 2s cubic-bezier(0.95, 0, 0.08, 1) infinite;
  }
`

export default ({animation}) => <Illustration className={animation ? 'animation' : ''} viewBox="0 10 100 100" width="100" height="100">
<g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
  <g transform="translate(17.5 100)">
    <g class="rotate">
      <g id="coin">
        <rect width="65" height="12" y="-14" rx="1" />
        <path d="M 10 -2 v -12" />
        <path d="M 20 -2 v -12" />
        <path d="M 50 -2 v -12" />
      </g>
      <g transform="translate(70 -14) scale(-1 1)">
        <g class="translate">
          <g class="rotate">
            <use href="#coin" />
            <g transform="translate(70 -14) scale(-1 1)">
              <g class="rotate">
                <g class="translate">
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