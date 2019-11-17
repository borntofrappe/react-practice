import React from 'react';
import styled from 'styled-components';
import { scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';
import Illustration from './Illustration.js';

const Data = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > * + * {
      margin-top: 0.75rem;
  }
`;

const Datum = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    max-width: 180px;
`;

const Title = styled.h2`
    font-size: 1rem;
    font-weight: 500;
`;

export default ({data}) => {
    const range = [0.4, 1];
    const scaleViews = scaleLinear()
        .domain(extent(data, ({ views }) => views))
        .range(range);

    const scaleShares = scaleLinear()
        .domain(extent(data, ({ shares }) => shares))
        .range(range);

    const scaleTwitter = scaleLinear()
        .domain(extent(data, ({ twitter }) => twitter))
        .range(range);


    return ((
        <Data>
            {data.map(({title, views, shares, twitter, level, topic, isTeaching}) => (
                <Datum>
                    <Illustration
                        scaleBucket={scaleViews(views)}
                        scaleHalo={scaleShares(shares)}
                        scaleWings={scaleTwitter(twitter)}
                        numberStars={level + 1}
                        colorJam={topic.color}
                        mustache={isTeaching}/>
                    <Title>{title}</Title>
                </Datum>
            ))}
        </Data>
    ));
}