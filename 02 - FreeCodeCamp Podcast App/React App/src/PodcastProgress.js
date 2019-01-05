import React from 'react';
import styled from 'styled-components';

// visual displaying the current progress vis-a-vis the toal duration of the podcast
const ProgressBar = styled.div`
  width: 60%;
  height: 10px;
  border-radius: 4px;
  background: var(--color-text);
  margin-bottom: 2rem;
  overflow: hidden;
`;
const Progress = styled.div`
  width: 100%;
  height: 100%;
  transform: ${props => `translate(${-100 + props.progress}%, 0)`};
  background: var(--color-primary);
  transition: transform 1s linear;
`;
// stateless component simply returning an div nesting another, overlayed div showing the progress with a colored bar
// use the transform property to change highlight the progress rather smoothly
const PodcastProgress = ({ currentTime, totalTime }) => {
  return (
    <ProgressBar>
      <Progress progress={Math.round(currentTime / totalTime * 100)} />
    </ProgressBar>
  );
}

export default PodcastProgress;

