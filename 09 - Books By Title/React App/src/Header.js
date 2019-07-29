import React from 'react';
import { Logo } from './css/components';

// component rendering the SVG logo in the header of the application
function Header() {
  return (
    <Logo>
      <svg viewBox="0 0 240 106" width="240" height="106">
          <g fill="currentColor">
              <g transform="translate(0 21)">
                  <path
                      mask="url(#mask-b)"
                      d="M 0 0 h 40 a 12 12 0 0 1 12 12 v 18 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 5 5 v 18 a 12 12 0 0 1 -12 12 h -40">
                  </path>
              </g>
              <g transform="translate(64 0)">
                  <use href="#letter-o"></use>
              </g>
              <g transform="translate(69 0)">
                  <g transform="translate(50 0) scale(-1 1)">
                      <g transform="translate(-50 0)">
                          <use href="#letter-o"></use>
                      </g>
                  </g>
              </g>
              <g transform="translate(181 21)">
                  <path
                      d="M 0 0 v 70 h 15 v -30 l 24 30 h 20 l -28 -35 l 28 -35 h -20 l -24 30 v -30 z">
                  </path>
              </g>
          </g>
      </svg>
    </Logo>
  );
}

export default Header;
