import React, { useState, useRef, useEffect } from 'react';

function AnalogWatch() {
    // initialize two stateful variables to describe the hours and minutes
    const now = new Date();
    const [hours, setHours] = useState(now.getHours());
    const [minutes, setMinutes] = useState(now.getMinutes());


    const hoursHands = useRef();
    const minutesHands = useRef();

    // with the useEffect hook update the rotation of the hands
    useEffect(() => {
        hoursHands.current.setAttribute('transform', `rotate(${hours * 30})`);
        minutesHands.current.setAttribute('transform', `rotate(${minutes * 6})`);
    }, [hours, minutes]);

    // update the stateful variables at an interval
    useEffect(() => {
        let interval = setInterval(() => {
            const date = new Date();
            setHours(date.getHours());
            setMinutes(date.getMinutes());
        }, 1000);

        // since the interval is never updated it is enough to include a cleanup function in a useEffect hook
        // more research is however warranted
        // https://overreacted.io/making-setinterval-declarative-with-react-hooks/
        return () => clearInterval(interval);
    });


    return(
        <svg style={{display: 'block', width: '100%', height: 'auto'}} viewBox="0 0 100 100">
            <defs>
                <rect id="square" x="-2.5" y="-2.5" width="5" height="5"></rect>
            </defs>
            <g transform="translate(50 50)">
                <g fill="currentColor" stroke="none">
                    <g id="dial-main">
                        <use transform="rotate(0) translate(0 -40)" href="#square"></use>
                        <use transform="rotate(90) translate(0 -40)" href="#square"></use>
                    </g>
                    <use href="#dial-main" transform="scale(-1 -1)"></use>

                    <g id="dial-support" opacity="0.5">
                        <use transform="rotate(30) translate(0 -40) rotate(-30)" href="#square"></use>
                        <use transform="rotate(60) translate(0 -40) rotate(-60)" href="#square"></use>
                        <use transform="rotate(120) translate(0 -40) rotate(-120)" href="#square"></use>
                        <use transform="rotate(150) translate(0 -40) rotate(-150)" href="#square"></use>
                    </g>
                    <use href="#dial-support" transform="scale(-1 1)"></use>
                </g>

                <g fill="none" stroke="currentColor" strokeLinecap="square" strokeWidth="4">
                    <g transform="rotate(0)" ref={hoursHands}>
                        <path opacity="0.5" d="M 0 0 v -15" strokeWidth="4"></path>
                    </g>
                    <g transform="rotate(0)" ref={minutesHands}>
                        <path d="M 0 0 v -30" strokeWidth="2.5"></path>
                    </g>
                </g>
            </g>
        </svg>
    );

}

export default AnalogWatch;