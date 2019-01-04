import React from 'react';
import styled from 'styled-components';


// heading dusplaying the title of the current episode
const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
`;
const PodcastControls = ({ episodes, currentEpisode }) => {
  return (
    <>
      {
        episodes[currentEpisode] ?
          <Title>
            {episodes[currentEpisode].title}
          </Title >
          :
          <Title>
            Fetching latest episode
        </Title>
      }
    </>
  );
}

export default PodcastControls;

