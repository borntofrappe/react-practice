import React from 'react';
import styled from 'styled-components';

const Article = styled.article`
    position: relative;
    padding: 2rem;
    border-radius: 20px;
    width: 140px;
    height: 165px;
    transition: transform 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transform: perspective(800px) rotateY(0deg);
    transform-style: preserve-3d;

    &.flip {
        transform: perspective(800px) rotateY(180deg);
    }
`;

const Front = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    backface-visibility: hidden;
    border: 0.75rem solid hsl(340, 70%, 50%);
    background: hsl(0, 0%, 100%);
    pointer-events: none;
    background: url('data:image/svg+xml;utf8,<svg opacity="0.1" xmlns="http://www.w3.org/2000/svg" width="480" height="440" viewBox="0 0 240 220" stroke="hsl(340, 70%, 50%)" stroke-width="20" stroke-linejoin="round" stroke-linecap="round" fill="none"><g transform="translate(120 110) rotate(-35)"><path id="a" d="M50-22.5h-60 25a45 45 0 010 90h-75a45 45 0 010-90"/><use transform="scale(-1)" href="%23a"/></g></svg>'),
            hsl(0, 0%, 100%);
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 50% 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Back = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    backface-visibility: hidden;
    border: 0.75rem solid hsl(340, 70%, 50%);
    background: hsl(0, 0%, 100%);
    pointer-events: none;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200"><defs><path id="a" d="M0-50L50 0 0 50-50 0z" stroke="none"/><g id="b"><use href="%23a" fill="hsl(340, 70%, 50%)"/><use href="%23a" transform="scale(.8)" fill="hsl(345, 90%, 65%)"/><use href="%23a" transform="scale(.6)" fill="hsl(0, 90%, 60%)"/><use href="%23a" transform="scale(.4)" fill="hsl(30, 80%, 70%)"/><use href="%23a" transform="scale(.2)" fill="hsl(50, 95%, 80%)"/></g></defs><use href="%23b"/><use href="%23b" x="100"/><use href="%23b" x="100" y="100"/><use href="%23b" y="100"/><use href="%23b" x="50" y="50"/></svg>'),
            hsl(0, 0%, 100%);
    background-size: 25%;
    transform: rotateY(180deg);
`;

const Value = styled.h1`
    font-size: 2.5rem;
    font-weight: 900;
`;

const Button = styled.button`
    background: none;
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
`;

function Card({ card }) {

    const { value, isFlipped, isPaired } = card;
    let className = 'card';
    if(isFlipped) {
        className += ' flip';
    }
    return(
    <Article className={className}>
        <Front className="face front">
            <Value style={{ color: value.includes('♥') || value.includes('♦') ? 'hsl(0, 70%, 50%)' : 'hsl(0, 50%, 10%)'}}>
                {value}
            </Value>
        </Front>
        <Back className="face back"></Back>
        <Button aria-label="Flip card"></Button>
    </Article>
    );
}

export default Card;