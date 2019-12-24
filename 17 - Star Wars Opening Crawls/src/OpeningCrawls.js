import React from 'react';
import styled from 'styled-components';

const Crawls = styled.ol`
    max-width: 380px;
    width: 90vw;
    margin: 2rem auto 1rem;
    list-style: none;
    color: hsl(60, 100%, 50%);
    counter-reset: custom-counter;
    & > * + * {
        margin-top: 1rem;
    }
`;

const Crawl = styled.li`
    min-height: 100vh;
    counter-increment: custom-counter;
    position: relative;
    padding: 1.5rem 0;

    & > * + * {
        margin-top: 1rem;
    }

    &:before {
        content: "Episode " counter(custom-counter, upper-roman);
        font-size: 1.5rem;
        text-align: center;
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translate(-50%, 0%);
    }
`;

const Title = styled.h1`
    text-transform: uppercase;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 400;
`

const Text = styled.p`
    line-height: 1.75;
    letter-spacing: 0.05rem;
    font-size: 1.2rem;
`;

const OpeningCrawls = ({crawls}) => (<Crawls>
    {crawls.map(({id, title, crawl: text}) => <Crawl key={id}>
            <Title>{title}</Title>
            <Text>{text}</Text>
        </Crawl>)}
    </Crawls>)


export default OpeningCrawls;