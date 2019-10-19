import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Overlay = styled(animated.div)`
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    display: flex;
    z-index: 5;
    background: hsla(0, 0%, 10%, 0.5);
    backdrop-filter: blur(1px);
    justify-content: center;
    align-items: center;
`;
const Section = styled(animated.section)`
    text-align: center;
    padding: 3rem 3.5rem;
    background: url('data:image/svg+xml;utf8,<svg opacity="0.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="250" height="250"><defs><circle id="a" cx="0" cy="0" r="5" fill="hsl(0, 0%, 0%)" stroke="none"/><path id="b" fill="none" stroke="hsl(0, 0%, 0%)" stroke-width="6" stroke-linejoin="round" stroke-linecap="round" d="M0 0a4 4 0 00-4-4 4 4 0 010-8 4 4 0 000-8 4 4 0 010-8 4 4 0 004-4"/></defs><g><g><g><g transform="translate(50 100) scale(1 1) translate(-47.5 -2.5) rotate(45) translate(-50 -100) translate(50 50)"><path fill="hsl(0, 0%, 0%)" stroke="hsl(0, 0%, 0%)" stroke-width="10" stroke-linejoin="round" stroke-linecap="round" d="M0 45l-27.5-55h55z"/><use href="%23a" transform="translate(-40 -25)"/><use href="%23a" transform="translate(-15 -45)"/><use href="%23a" transform="translate(0 -25)"/><use href="%23a" transform="translate(40 -30)"/><use href="%23b" transform="translate(-15 -18) rotate(-25)"/><use href="%23b" transform="translate(15 -18) rotate(30)"/></g></g></g></g></svg>'),
        url('data:image/svg+xml;utf8,<svg opacity="0.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="250" height="250"><defs><circle id="a" cx="0" cy="0" r="5" fill="hsl(0, 0%, 0%)" stroke="none"/><path id="b" fill="none" stroke="hsl(0, 0%, 0%)" stroke-width="6" stroke-linejoin="round" stroke-linecap="round" d="M0 0a4 4 0 00-4-4 4 4 0 010-8 4 4 0 000-8 4 4 0 010-8 4 4 0 004-4"/></defs><g><g><g><g transform="translate(50 100) scale(-1 1) translate(-47.5 -2.5) rotate(45) translate(-50 -100) translate(50 50)"><path fill="hsl(0, 0%, 0%)" stroke="hsl(0, 0%, 0%)" stroke-width="10" stroke-linejoin="round" stroke-linecap="round" d="M0 45l-27.5-55h55z"/><use href="%23a" transform="translate(-40 -25)"/><use href="%23a" transform="translate(-15 -45)"/><use href="%23a" transform="translate(0 -25)"/><use href="%23a" transform="translate(40 -30)"/><use href="%23b" transform="translate(-15 -18) rotate(-25)"/><use href="%23b" transform="translate(15 -18) rotate(30)"/></g></g></g></g></svg>'),
        hsl(0, 0%, 100%);
    background-size: 30%;
    background-position: 0% 100%, 100% 100%;
    background-repeat: no-repeat;
    border: 0.75rem solid hsl(205, 75%, 50%);
    border-radius: 15px;
    box-shadow: 0 2px 10px -5px hsla(0, 0%, 0%, 0.2);
`;

const Heading = styled.h1`
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 1.25rem;
`;

const Button = styled.button`
    font-weight: 800;
    padding: 1.25rem 1.5rem;
    border: none;
    color: inherit;
    font-family: inherit;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="hsl(205, 75%, 50%)"><g transform="translate(25 25)"><path d="M 0 -4 a 7 7 0 0 1 14 0 q 0 12 -14 18 q -14 -7 -14 -18 a 7 7 0 0 1 14 0" /></g></svg>'),
        url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="hsl(205, 75%, 50%)"><g transform="translate(25 25)"><path d="M 0 -15 l 11 15 -11 15 -11 -15 z" /></g></svg>'),
        url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="hsl(340, 5%, 20%)"><g transform="translate(25 25)"><path d="M 0 5 a 12 12 0 0 1 -12 12 h 24 a 12 12 0 0 1 -12 -12 a 7 7 0 0 1 -14 0 q 0 -10 14 -16 q 14 6 14 16 a 7 7 0 0 1 -14 0"/></g></svg>'),
        url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="hsl(340, 5%, 20%)"><g transform="translate(25 25)"><path d="M 0 5 a 12 12 0 0 1 -12 12 h 24 a 12 12 0 0 1 -12 -12 a 7 7 0 0 1 -14 0 7 7 0 0 1 14 0 7 7 0 0 1 0 -14 7 7 0 0 1 0 14 7 7 0 0 1 14 0 7 7 0 0 1 -14 0"/></g></svg>');
    background-size: 2rem;
    background-position: 0% 0%, 100% 0%, 0% 100%, 100% 100%;
    background-repeat: no-repeat;
`;

function Victory({ reset }) {
    const fadeIn = useSpring({opacity: 1, from: {opacity: 0}});
    console.log(useSpring, fadeIn)
    const popIn = useSpring({transform: 'scale(1)', from: {transform: 'scale(0)'}});

    return(
        <Overlay style={fadeIn}>
            <Section style={popIn}>
                <Heading>Congratulations</Heading>
                <Button onClick={() => reset()}>Play again</Button>
            </Section>
        </Overlay>
    );
}

export default Victory;