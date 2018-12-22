import React, { Component } from 'react';
import CurrentEpisode from './CurrentEpisode.js';
import styled from 'styled-components';

const Podcast = styled.div`
  max-width: 400px;
  width: 90vw;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: #267b26;
  position: relative;
`;

const Vinyl = styled.div`
  margin: 1rem;
  width: calc(10rem + 2.5vw);
  height: calc(10rem + 2.5vw);
  border-radius: 50%;
  background: linear-gradient(
      to bottom right,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    ),
    url("https://d33wubrfki0l68.cloudfront.net/cce87b74a290f321f582cb56a12007343ff2d77e/bb9e6/img/glyph.png"),
    repeating-radial-gradient(#006400 0, #006400 3px, #007e00 4px);
  background-repeat: no-repeat;
  background-size: 100%, 50%, 100%;
  background-position: 0%, 50% 50%, 100%;
  box-shadow: 0 1px 5px rgba(0, 100, 0, 0.7);
`;

// in a wrapping container detail a div just for aesthetics
// below this empty div, add a component detailing the current episode
// below this component, a component detailing more episodes
class PodcastApp extends Component {
  // in the state detail the audio file
  constructor(props) {
    super(props);
    this.state = {
      audio: 'https://traffic.libsyn.com/freecodecamp/Abbey_and_Erica_interview_.mp3?dest-id=603849',
      buttons: [
        'play',
        'volume',
        'speed',
        'stop'
      ]
    };
  }
  render() {
    const { audio, buttons } = this.state;
    return (
      <Podcast className="PodcastApp">
        <Vinyl />
        <CurrentEpisode audio={audio} buttons={buttons} />
      </Podcast>
    );
  }
}

export default PodcastApp;
