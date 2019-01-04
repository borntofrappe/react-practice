import React from 'react';
import styled from 'styled-components';

// heading dusplaying the title of the current episode
const Title = styled.h2`
  font-size: 1.35rem;
  font-weight: 500;
  max-width: 300px;
`;

// display the title passed through props
const PodcastControls = ({ title }) => {
  return (
    <Title>
      {title}
    </Title>
  );
}

export default PodcastControls;

