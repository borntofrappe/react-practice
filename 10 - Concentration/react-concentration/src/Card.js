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
    border: 0.75rem solid hsl(205, 75%, 50%);
    background: hsl(0, 0%, 100%);
    pointer-events: none;
    background: url('data:image/svg+xml;utf8,<svg opacity="0.1" xmlns="http://www.w3.org/2000/svg" width="480" height="440" viewBox="0 0 240 220" stroke="hsl(205, 75%, 50%)" stroke-width="15" stroke-linejoin="round" stroke-linecap="round" fill="none"><g transform="translate(120 110) rotate(-30)"><ellipse id="a" cx="0" cy="0" rx="40" ry="100"/><use transform="rotate(60)" href="%23a"/><use transform="rotate(120)" href="%23a"/><circle stroke="none" fill="hsl(205, 75%, 50%)" cx="0" cy="0" r="20" /></g></svg>'),
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
    border: 0.75rem solid hsl(205, 75%, 50%);
    background: hsl(0, 0%, 100%);
    pointer-events: none;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200"><defs><path id="a" d="M0-50L50 0 0 50-50 0z" stroke="none"/><g id="b"><use href="%23a" fill="hsl(205, 75%, 50%)"/><use href="%23a" transform="scale(.8)" fill="hsl(205, 90%, 60%)"/><use href="%23a" transform="scale(.6)" fill="hsl(210, 80%, 50%)"/><use href="%23a" transform="scale(.4)" fill="hsl(190, 80%, 65%)"/><use href="%23a" transform="scale(.2)" fill="hsl(180, 95%, 85%)"/></g></defs><use href="%23b"/><use href="%23b" x="100"/><use href="%23b" x="100" y="100"/><use href="%23b" y="100"/><use href="%23b" x="50" y="50"/></svg>'),
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

function Card({ card, flipCard }) {
    const { value, id, isFlipped, isPaired } = card;
    let className = 'card';
    if(isFlipped && !isPaired) {
        className += ' flip';
    }
    if(isPaired) {
        className += ' paired';
    }

    return(
    <Article className={className}>
        <Front className="face front">
            <Value style={{ color: value.includes('♥') || value.includes('♦') ? 'hsl(0, 70%, 50%)' : 'hsl(0, 50%, 10%)'}}>
                {value}
            </Value>
        </Front>
        <Back className="face back"></Back>
        <Button onClick={() => flipCard(id)} disabled={isPaired} aria-label="Flip card"></Button>
    </Article>
    );
}

export default Card;