import React from 'react';
import styled from 'styled-components';
import Illustration from './Illustration.js';
// import the d3 functions from the installed library
import { scaleLinear, scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { extent } from 'd3-array';

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
    // build the scales around the input data
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

    // use a color scale to give each topic a distinct color
    const scaleTopics = scaleOrdinal()
        .domain(data.map(({topic}) => topic))
        .range(schemeCategory10);


    // pass to the illustration component the values affecting the scale/number/presence of the elements
    return ((
        <Data>
            {data.map(({title, views, shares, twitter, level, topic, isTeaching}) => (
                <Datum>
                    <Illustration
                        scaleBucket={scaleViews(views)}
                        scaleHalo={scaleShares(shares)}
                        scaleWings={scaleTwitter(twitter)}
                        numberStars={level + 1}
                        colorJam={scaleTopics(topic)}
                        mustache={isTeaching}/>
                    <Title>{title}</Title>
                </Datum>
            ))}
        </Data>
    ));
}