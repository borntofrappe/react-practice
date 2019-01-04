import React from 'react';
import styled from 'styled-components';
import SVGIcons from './SVGIcons.js';

// button from which to extend the design of more specific buttons
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


// wrapping container for more episodes
// absolute positioned to cover a section of the podcast app container
// with a .hidden class toggling its appearance
const MoreEpisodes = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-top: 2.5px solid var(--colot-text-tt);
  transition: all 0.3s ease-out;

  &.hidden {
    height: 0;
    opacity: 0;
    visibility: none;
  }
`;

// wrapping container for the episodes
// with vertical overflow to allow for the scroll
// with pseudo selectors for the scroll bar
const Episodes = styled.div`
  overflow-y: auto;
  height: 100%;
  background: var(--color-primary-l);


  &::-webkit-scrollbar {
    width: 0.2rem;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 0.5rem var(--color-primary-d);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 0.8rem;
  background-color: var(--color-text);
  outline: 0.08rem solid var(--color-text);
  }
`;

// wrapping container for each episode
/* displaying the content in a grid, as follows
| heading   | heading     | button|
| date      | duration    |       |

*/
const Episode = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  padding: 1.25rem 1rem;
  border-top: 2px solid var(--color-text-ttt);
  grid-gap: 0.5rem 1.5rem;

  &:nth-of-type(1) {
    border-top: none;
  }
`;

// properties for the separate heading / paragraph / button elements of each episode
const EpisodeTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  grid-row: 1/2;
  grid-column: 1/3;
`;

const EpisodeInfo = styled.p`
  font-size: 0.9rem;
`;
const EpisodeDate = styled(EpisodeInfo)`
  grid-row: 2/3;
  grid-column: 1/2;
`;

const EpisodeDuration = styled(EpisodeInfo)`
  grid-row: 2/3;
  grid-column: 2/3;
`;
const EpisodeButton = styled(Button)`
  width: 40px;
  height: 40px;
  grid-row: 1/span 2;
  grid-column: 3/4;
`;

// final button positioned below the Episodes container, to close the MoreEpisode container
const CloseButton = styled.button`
  padding: 0.75rem 0;
  background: var(--color-primary-d);
  border: none;
  color: var(--color-text);
  font-size: 1.1rem;
  font-family: inherit;
  transition: all 0.2s ease-out;

  &:hover {
    color: var(--color-text-t);
  }
`;

// based on the array of episodes add one container with the necessary information00
// the panel is shown on the basis of the boolean hidden
const PodcastMore = ({ isHidden, episodes, selectButton, closeButton }) => {
  return (
    <MoreEpisodes className={isHidden ? 'hidden' : ''}>

      <Episodes>
        {
          episodes &&
          episodes.map(episode => {
            const { title, date, duration, audio } = episode;

            return (
              <Episode key={title}>
                <EpisodeTitle>{title}</EpisodeTitle>
                <EpisodeDate>{date}</EpisodeDate>
                <EpisodeDuration>{Math.floor(duration / 60)} mins</EpisodeDuration>
                <EpisodeButton onClick={selectButton}>
                  <SVGIcons icon="play" />
                  <audio src={audio} />
                </EpisodeButton>
              </Episode>
            );
          })
        }
      </Episodes>

      {/* following the list of episodes show the button to close the panel */}
      <CloseButton onClick={closeButton}>
        Close
      </CloseButton>

    </MoreEpisodes>
  );
}

export default PodcastMore;
