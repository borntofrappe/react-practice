import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const List = styled.ol`
    max-width: 420px;
    width: 90vw;
    margin: 2.5rem auto;
    list-style: none;
    color: hsl(60, 100%, 50%);
    counter-reset: custom-counter;
    & > * + * {
        margin-top: 50vh;
    }

`;

const Item = styled.li`
    min-height: 100vh;
    counter-increment: custom-counter;
    position: relative;
    padding: 1rem 0;

    & > * + * {
        margin-top: 1rem;
    }

    &:before {
        content: "Episode " counter(custom-counter, upper-roman);
        font-size: 2rem;
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
    font-size: 2rem;
    font-weight: 400;
`

const Crawl = styled.p`
    line-height: 2.5;
    letter-spacing: 0.05rem;
    font-size: 1.2rem;
`;

export default () => {
    const [crawls, setCrawls] = useState([]);
    useEffect(() => {
        fetch('https://swapi.co/api/films')
            .then(response => response.json())
            .then(json => {
                const results = json.results
                    .map(({episode_id: id, title, opening_crawl : crawl}) => ({
                        id,
                        title,
                        crawl
                    }))
                    .sort(({id: idA}, { id: idB}) => idA > idB ? 1 : -1);
                setCrawls(results);
            });
    }, []);

    return <List>{crawls.map(({id, title, crawl}) => <Item key={id}>
        <Title>{title}</Title>
        <Crawl>{crawl}</Crawl>
    </Item>)}</List>
}