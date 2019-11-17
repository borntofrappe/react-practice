import React from 'react';
import styled from 'styled-components';
import { getData, links } from './utils.js';
import Visualization from './Visualization.js';

const Root = styled.div`
  background: hsl(0, 0%, 100%);
  padding: 1rem;
  max-width: 800px;
  margin: 0 auto;

  & > * + * {
    margin-top: 1rem;
  }
`;
const Heading = styled.h1`
  font-family: 'Montserrat', sans-serif;
`;
const Link = styled.a`
  color: hotpink;
  text-decoration: none;
  font-weight: bold;
`;

function App() {
  const { stream, twitter } = links;

  // pass the array describing the data to the Visualization component
  const data = getData(20);
  return (
    <Root>
      <Heading>Generative Data Viz <span role="img">⚛️</span></Heading>
      <p>Inspired by <Link href={stream}>this insightful stream</Link> from <Link href={twitter.jason}>Jason Lengstorf</Link> and <Link href={twitter.shirley}>Shirley Wu</Link>.</p>
      <Visualization data={data} />
    </Root>
  );
}

export default App;
