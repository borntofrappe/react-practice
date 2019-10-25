import React, { useState, useRef, useEffect } from 'react';
import { zeroPadded } from './utils.js';


function DigitalWatch() {
    // initialize two stateful variables to describe the hours and minutes
    const now = new Date();
    const [hours, setHours] = useState(now.getHours());
    const [minutes, setMinutes] = useState(now.getMinutes());

    // initialize four variables for the use elements detailing the four digits
    const h0 = useRef();
    const h1 = useRef();
    const m0 = useRef();
    const m1 = useRef();

    // with the useEffect hook update the reference of the use elements when the stateful variables are updated
    useEffect(() => {
        h0.current.setAttribute('href', `#${zeroPadded(hours)[0]}`);
        h1.current.setAttribute('href', `#${zeroPadded(hours)[1]}`);
        m0.current.setAttribute('href', `#${zeroPadded(minutes)[0]}`);
        m1.current.setAttribute('href', `#${zeroPadded(minutes)[1]}`);
    }, [hours, minutes]);

    // update the stateful variables at an interval
    setInterval(() => {
        const date = new Date();
        setHours(date.getHours());
        setMinutes(date.getMinutes());
    }, 1000);


    return(
        <svg style={{display: 'block', width: '100%', height: 'auto'}} viewBox="0 0 100 100">
            <defs>
                <path id="0" d="M -6 -15 h 12 v 30 h -12 z"></path>
                <path id="1" d="M 6 -15 v 30"></path>
                <path id="2" d="M -6 -15 h 12 v 15 h -12 v 15 h 12"></path>
                <path id="3" d="M -6 -15 h 12 v 30 h -12 m 0 -15 h 12"></path>
                <path id="4" d="M -6 -15 v 15 h 12 v 15 m 0 -30 v 15"></path>
                <g id="5"><use href="#2" transform="scale(-1 1)"></use></g>
                <path id="6" d="M 6 -15 h -12 v 30 h 12 v -15 h -12"></path>
                <path id="7" d="M -6 -15 h 12 v 30"></path>
                <path id="8" d="M -6 -15 h 12 v 30 h -12 z m 0 15 h 12"></path>
                <path id="9" d="M 6 15 v -30 h -12 v 15 h 12"></path>
                <rect id="square" x="-2.5" y="-2.5" width="5" height="5"></rect>
            </defs>
            <g transform="translate(0 50)">
                <g fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="square" strokeLinejoin="square">
                    <g transform="translate(14 0)">
                        <use href="#0" ref={h0}></use>
                    </g>
                    <g transform="translate(35 0)">
                        <use href="#0" ref={h1}></use>
                    </g>

                    <g transform="translate(65 0)">
                        <use href="#0" ref={m0}></use>
                    </g>
                    <g transform="translate(86 0)">
                        <use href="#0" ref={m1}></use>
                    </g>
                </g>
                <g style={{ animation: 'blink 1s step-end infinite' }} transform="translate(50 0)">
                    <use href="#square" y="-10"></use>
                    <use href="#square" y="10"></use>
                </g>
            </g>
            <g transform="translate(25 100) scale(0.45)">
                <g opacity="0.35" fill="currentColor" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 0 0 q -25 -5 -25 -25 q -10 0 -10 12 q 0 -20 5 -20 q -15 0 -15 10 a 22.5 22.5 0 0 1 45 0 q 10 0 15 -20 q 0 -8 -5 -8 q 15 0 15 8 l 5 5 l -5 5 q 0 33 -25 33"></path>
                </g>
            </g>
        </svg>

    );

}

export default DigitalWatch;