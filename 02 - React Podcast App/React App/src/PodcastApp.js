import React, { Component } from 'react';
import styled from 'styled-components';

const Podcast = styled.div`
  max-width: 500px;
  margin: 1rem auto;
`;
class PodcastApp extends Component {
  render() {
    return (
      <Podcast className="PodcastApp">
        <h1>Hello PodcastApp</h1>
      </Podcast>
    );
  }
}

export default PodcastApp;
