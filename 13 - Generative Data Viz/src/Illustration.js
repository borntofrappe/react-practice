import React from 'react';

// include the values passed through the props argument to change the appearance of the illustration
export default ({scaleBucket, scaleHalo, scaleWings, numberStars, colorJam, mustache}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <g transform="translate(100 10)">
            <g fill="hsl(0, 0%, 100%)" stroke="hsl(160, 80%, 60%)" strokeWidth="2">
                {/* add as many stars as described by the input integer, including two copies around the center of the graphic */}
                {
                    Array(numberStars).fill().map((d, i) => (
                        <g>
                            <path transform={`translate(${i * 30} ${i * 12})`} d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" />
                            { i > 0 && <path transform={`translate(${i * 30 * -1} ${i * 12})`} d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" />}
                        </g>
                    ))
                }
            </g>
        </g>

        <g transform="translate(100 65)">
            <g transform={`scale(${scaleHalo})`}>
                <ellipse fill="hsl(50, 95%, 60%)" cx="0" cy="-4" rx="50" ry="15" />
                <ellipse transform="scale(0.7 0.6)" fill="hsl(0, 0%, 100%)" cx="0" cy="-4" rx="50" ry="15" />
            </g>
        </g>

        <g transform="translate(100 150)">
            <g transform={`scale(${scaleBucket})`}>
                <path d="M -50 -55 l 10 95 a 100 100 0 0 0 80 0 l 10 -95 a 120 120 0 0 0 -100 0 110 110 0 0 0 100 0"
                    fill="hsl(0, 0%, 100%)" stroke="hsl(0, 0%, 25%)" strokeWidth="3" strokeLinejoin="round" />

                <path d="M -47 -55 a 108 108 0 0 0 94 0 q -9.9 -5 -18.8 0 t -18.8 0 t -18.8 0 t -18.8 0 t -18.8 0"
                    fill={colorJam} />

                <g transform="translate(0 -20)" fill="hsl(0, 0%, 25%)">
                    <circle cx="15" r="5" />
                    <circle cx="-15" r="5" />
                </g>

                {/* include the path element describing the mustache only when the corresponding boolean evaluates to true */}
                { mustache &&
                    <path d="M 0 0 c 14 -9 14 10 18 9 q -14 5 -20 -9 c -14 -9 -14 10 -18 9 q 14 5 20 -9"
                    fill="hsl(0, 0%, 25%)" stroke="hsl(0, 0%, 25%)" strokeWidth="2" strokeLinejoin="round"
                    strokeLinecap="round" />
                }

                <path d="M -48 -20 a 48 48 0 0 0 96 0" fill="none" stroke="hsl(0, 0%, 25%)" strokeWidth="3"
                    strokeLinecap="round" />
            </g>
        </g>

        <g transform="translate(100 145)">
            <g fill="hsl(0, 0%, 100%)" stroke="hsl(200, 80%, 55%)" strokeWidth="3" strokeLinejoin="round"
                strokeLinecap="round">
                <g transform="translate(52 0) rotate(10)">
                    <g transform={`scale(${scaleWings})`}>
                        <path d="M 0 0 v -20 q 0 -25 35 -25 q 0 20 -20 20 h 10 q 0 15 -15 15 h 5 q 0 10 -15 10" />
                    </g>
                </g>

                <g transform="scale(-1 1)">
                    <g transform="translate(52 0) rotate(10)">
                        <g transform={`scale(${scaleWings})`}>
                            <path d="M 0 0 v -20 q 0 -25 35 -25 q 0 20 -20 20 h 10 q 0 15 -15 15 h 5 q 0 10 -15 10" />
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
);