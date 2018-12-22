import React from 'react';
import styled from 'styled-components';

const Icon = styled.svg`
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const SVGIcons = ({ icon }) => {
  switch (icon) {
    case 'play':
      return (
        <Icon id="play" viewBox="0 0 100 100">
          <path d="M 30 20 L 80 50 L 30 80" stroke="none" fill="currentColor" />
        </Icon>
      );

    case 'pause':
      return (
        <Icon id="pause" viewBox="0 0 100 100">
          <g transform="translate(25, 25)" stroke="none" fill="currentColor">
            <rect x="0" y="0" width="20" height="55" />
            <rect x="30" y="0" width="20" height="55" />
          </g>
        </Icon>
      );

    case 'volume':
      return (
        <Icon id="volume" viewBox="0 0 100 100">
          <path
            d="M 10 40 L 25 38 L 40 20 H 50 V 80 H 40 L 25 62 L 10 60"
            stroke="none"
            fill="currentColor"
          />
          <g transform="translate(60, 50)">
            <path
              d="M 0 -15 Q 20 0 0 15"
              fill="none"
              strokeWidth="8"
              stroke="currentColor"
            />

            <path
              d="M 0 -35 Q 55 0 0 35"
              fill="none"
              strokeWidth="10"
              stroke="currentColor"
            />
          </g>
        </Icon>
      );

    case 'mute':
      return (
        <Icon id="mute" viewBox="0 0 100 100">
          <path
            d="M 10 40 L 25 38 L 40 20 H 50 V 80 H 40 L 25 62 L 10 60"
            stroke="none"
            fill="currentColor"
          />
          <g transform="translate(65, 50)">
            <path
              d="M 0 -25 L 20 25"
              fill="none"
              strokeWidth="6"
              stroke="currentColor"
            />

            <path
              d="M 0 25 L 20 -25"
              fill="none"
              strokeWidth="6"
              stroke="currentColor"
            />
          </g>
        </Icon>
      );

    case 'stop':
      return (
        <Icon id="stop" viewBox="0 0 100 100">
          <path d="M 25 25 H 75 V 75 H 25" stroke="none" fill="currentColor" />
        </Icon>
      );

    case 'more':
      return (
        <Icon id="more" viewBox="0 0 100 100">
          <rect x="40" y="10" width="20" height="80" fill="currentColor" />
          <rect x="10" y="40" width="80" height="20" fill="currentColor" />
        </Icon>
      );
    default:
      return ''
  }

}

export default SVGIcons;
