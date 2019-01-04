import React from 'react';
import styled from 'styled-components';
import SVGIcons from './SVGIcons.js';

// wrapping container for the buttons
const Controls = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 1.5rem 2rem;
  grid-template-columns: 1fr 1fr 1fr;
`;

// buttons starting from a common set of property value pairs
// buttons positioned with the first button centered in the first row and the rest laid below it
const Button = styled.button`
  width: 48px;
  height: 48px;
  background: none;
  padding: 0.5rem;
  border-radius: 50%;
  color: var(--color-text);
  border: 1.2px solid var(--color-text-t);
  transition: all 0.2s ease-out;

  &: hover {
  background: var(--color-text-ttt);
}
`;
const ToggleButton = styled(Button)`
  grid-column: 1/-1;
  width: 56px;
  height: 56px;
`;
// speed button with an x after the speed option
const SpeedButton = styled(Button)`
  font-family: inherit;
  &:after {
  content: 'x';
  }
`;

const PodcastControls = ({ episodes, currentEpisode, toggleButton, volumeButton, speedButton, stopButton, isPlaying, isMute, speedRate, speedOption }) => {
  return (
    <Controls>
      <ToggleButton className="toggle" onClick={toggleButton}>
        {
          isPlaying ?
            <SVGIcons icon="pause" />

            :

            <SVGIcons icon="play" />
        }
        {
          episodes[currentEpisode] &&
          <audio src={episodes[currentEpisode].audio} />
        }
      </ToggleButton>

      <Button onClick={volumeButton}>
        {
          isMute ?
            <SVGIcons icon="mute" />

            :

            <SVGIcons icon="volume" />
        }
      </Button>

      <SpeedButton onClick={speedButton}>
        {
          speedRate[speedOption]
        }
      </SpeedButton>

      <Button onClick={stopButton}>
        <SVGIcons icon="stop" />
      </Button>
    </Controls>
  );
}

export default PodcastControls;
