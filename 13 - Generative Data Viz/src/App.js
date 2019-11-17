import React from 'react';
import { scaleLinear } from 'd3-scale';
import styled from 'styled-components';
import { links } from './utils.js';

const Root = styled.div`
  background: hsl(0, 0%, 100%);
  padding: 1rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 2;
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

  return (
    <Root>
      <Heading>Generative Data Viz</Heading>
      <p>Inspired by <Link href={stream}>this insightful stream</Link>
        from <Link href={twitter.jason}>Jason Lengstorf</Link>
        and <Link href={twitter.shirley}>Shirley Wu</Link>.
      </p>
    </Root>
  );
}

export default App;
