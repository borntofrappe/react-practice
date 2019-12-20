import React from 'react';
import styled, { keyframes } from 'styled-components';

const translate = keyframes`
    to {
        transform: translateX(-100px);
    }

`

const Illustration = styled.svg`
    width: 100%;
    height: auto;
    display: block;
    background: hsl(0, 0%, 100%);
    box-shadow: 0 0 5px -2px hsla(0, 0%, 0%, 0.5);
`;

const Cars = styled.g`
    animation: ${translate} ${({slowdown}) => slowdown ? '10' : '5'}s linear infinite;

    @media (prefers-reduced-motion: reduce) {
         {
            animation: none;
        }
    }
`;

export default ({date, value, average, showValue}) => {
    const change = Math.round((value - average) / average * 100);

    const [day, month, year] = date.split('-');
    const dateString = new Date(year, month - 1, day).toDateString();

    return (<Illustration viewBox="0 0 100 70">
        <defs>
            <g id="car">
                <g fill="hsl(0, 0%, 20%)" stroke="hsl(0, 0%, 20%)" strokeWidth="1">
                    <path d="M -2 0.5 h 14 a 2.5 2.5 0 0 0 0 -4 a 7 7 0 0 0 -12 0 q -3 0 -3 3 a 1 1 0 0 0 1 1" />
                    <g stroke="none">
                        <circle r="2" />
                        <circle cx="10" r="2" />
                    </g>
                </g>
            </g>
        </defs>
        <g transform="translate(20 15)">
            <circle fill="hsl(40, 100%, 75%)" r="10" />
            <g fill="hsl(210, 75%, 95%)">
                <path transform="scale(0.8)" d="M 0 0 h 8 a 2.5 2.5 0 0 0 0 -5 a 3.5 3.5 0 0 0 -7 0 h -1 a 2.5 2.5 0 0 0 0 5" />
                <path transform="scale(0.6)" d="M -20 10 h 8 a 2.5 2.5 0 0 0 0 -5 a 3.5 3.5 0 0 0 -7 0 h -1 a 2.5 2.5 0 0 0 0 5" />
                <path d="M 5 12 h 8 a 2.5 2.5 0 0 0 0 -5 a 3.5 3.5 0 0 0 -7 0 h -1 a 2.5 2.5 0 0 0 0 5" />
            </g>
        </g>

        <g transform="translate(0 70)">
            <path d="M 0 0 q 16 -20 16 -45 q 2 25 16 45 h -9 a 7 7 0 0 0 -14 0" fill="hsl(210, 75%, 80%)" stroke="hsl(210, 75%, 80%)" strokeWidth="1" />
            <path d="M 6 -15 h 20 m -5 -12 h -9.5 m 2.5 -12 h 4.5" fill="none" stroke="hsl(210, 75%, 80%)" strokeWidth="2" />
        </g>

        <g transform="translate(95 10)" fill="hsl(0, 0%, 10%)" fontSize="6" textAnchor="end" fontWeight="700">
            <text fontWeight="300">{dateString}</text>
            <text y="6">{showValue ? value : average}km</text>
            {showValue &&
                <text fill={change > 0 ? 'hsl(0, 100%, 30%)' : 'hsl(220, 100%, 30%)'} fontSize="5" y="12">{change > 0 ? `+${change}%` : `${change}%`}</text>
            }
        </g>
        <g transform="translate(40 68)">
            <Cars slowdown={showValue && change > 0}>
                <g id="cars">
                    {showValue && change > 0 && <use href="#car" x="-35" /> }
                    <use href="#car" x="-15" />
                    <use href="#car" x="5" />
                    {showValue && change > 0 && <use href="#car" x="25" /> }
                    {change > 0 && <use href="#car" x="45" /> }
                </g>
                <use href="#cars" x="100" />
            </Cars>
        </g>
    </Illustration>)
}