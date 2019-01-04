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

// stateless component simply returning an empty div with a linear-gradient based on the current progress in the episode
const PodcastProgress = ({ currentTime, totalTime }) => {
  return (
    <ProgressBar progress={Math.round(currentTime / totalTime * 100)} />
  );
}

export default PodcastProgress;

