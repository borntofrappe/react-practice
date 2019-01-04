import React from 'react';
import styled from 'styled-components';

// visual displaying the current progress vis-a-vis the toal duration of the podcast
const ProgressBar = styled.div`
  width: 60%;
  height: 10px;
  border-radius: 4px;
  background: ${props => `linear-gradient(to right, var(--color-primary), var(--color-primary) ${props.progress}%, var(--color-text) ${props.progress}%)`};
  margin-bottom: 2rem;
  transition: background 1s linear;
`;

const PodcastProgress = ({ episodes, currentEpisode, currentTime }) => {
  return (
    <>
      {
        episodes[currentEpisode] ?
          <ProgressBar progress={Math.round(currentTime / episodes[currentEpisode].duration * 100)} />
          :
          <ProgressBar progress={0} />
      }
    </>
  );
}

export default PodcastProgress;

