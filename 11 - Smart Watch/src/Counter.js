import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const CounterButton = styled.button`
    margin: 0 auto;
    width: 64px;
    height: 58px;
    background: none;
    border: none;
    border: 2px solid hsl(0, 0%, 0%);
    border-bottom: none;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;

    svg {
        display: block;
        height: 80%;
        width: auto;
    }
    &:before {
        position: absolute;
        content: "";
        top: 100%;
        left: -2px;
        width: 100%;
        height: 8px;
        border: 2px solid hsl(0, 0%, 0%);
        border-top: none;
        z-index: -5;
    }
    &:after {
        position: absolute;
        content: "";
        top: 100%;
        left: 0%;
        width: 100%;
        height: 8px;
        background: hsl(0, 0%, 0%);
        opacity: 0.3;
        z-index: -5;
    }

    &:active {
        transform: translateY(8px);

        &:before {
            transform: translateY(-8px);
        }
        &:after {
            transform: scaleY(0);
        }
    }
`;

function Counter() {
    // initialize a variable to keep track of the counter
    const [count, setCount] = useState(0);

    // initialize four variables for the use elements describing the counter's digits
    const c3 = useRef();
    const c2 = useRef();
    const c1 = useRef();
    const c0 = useRef();

    // as count is updated update the reference of the four use elements to show the counter
    useEffect(() => {
        const counter = count.toString().padStart(4, '0');
        c3.current.setAttribute('href', `#${counter[0]}`);
        c2.current.setAttribute('href', `#${counter[1]}`);
        c1.current.setAttribute('href', `#${counter[2]}`);
        c0.current.setAttribute('href', `#${counter[3]}`);
    }, [count])

    return(
        <>
            <svg style={{display: 'block', width: '100%', height: 'auto'}} viewBox="0 0 100 60">
                <defs>
                    <path id="0" d="M -6 -15 h 12 v 30 h -12 z"></path>
                    <path id="1" d="M -2 -15 h 5 v 30 m -5 0 h 8"></path>
                    <path id="2" d="M -6 -15 h 12 v 15 h -12 v 15 h 12"></path>
                    <path id="3" d="M -6 -15 h 12 v 30 h -12 m 0 -15 h 12"></path>
                    <path id="4" d="M -6 -15 v 15 h 12 m -3 -15 v 30"></path>
                    <g id="5"><use href="#2" transform="scale(-1 1)"></use></g>
                    <path id="6" d="M 6 -15 h -12 v 30 h 12 v -15 h -12"></path>
                    <path id="7" d="M -6 -15 h 12 v 30"></path>
                    <path id="8" d="M -6 -15 h 12 v 30 h -12 z m 0 15 h 12"></path>
                    <path id="9" d="M 6 15 v -30 h -12 v 15 h 12"></path>
                    <path id="add" d="M -40 0 h 80 m -40 -40 v 80"></path>
                </defs>
                <g transform="translate(0 30)">
                    <g fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="square">
                        <g strokeWidth="3" opacity="0.5">
                            <path d="M 27 -14 h 46 l 5 5 v 18 l -5 5 h -46 l -5 -5 v -18 z"></path>
                        </g>
                        <g strokeWidth="5">
                            {/* show the digits only as the counter reaches the prescribed threshold */}
                            <g style={count > 999 ? {opacity: 1} : {opacity: 0}} transform="translate(32 0) scale(0.5)">
                                <use ref={c3} href="#1"></use>
                            </g>
                            <g style={count > 99 ? {opacity: 1} : {opacity: 0}} transform="translate(44 0) scale(0.5)">
                                <use ref={c2} href="#1"></use>
                            </g>
                            <g style={count > 9 ? {opacity: 1} : {opacity: 0}} transform="translate(56 0) scale(0.5)">
                                <use ref={c1} href="#1"></use>
                            </g>
                            <g transform="translate(68 0) scale(0.5)">
                                <use ref={c0} href="#0"></use>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
            <CounterButton onClick={() => setCount(prev => prev < 9999 ? prev + 1 : prev)}>
                <svg viewBox="0 0 100 100" width="35" height="35">
                    <g transform="translate(50 50)">
                        <g fill="none" stroke="currentColor" strokeWidth="20">
                            <use href="#add"></use>
                        </g>
                    </g>
                </svg>
            </CounterButton>
        </>
    );

}

export default Counter;