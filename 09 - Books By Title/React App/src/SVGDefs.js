import React from 'react';

// svg elements defined for the project
function SVGDefs() {
  const style = {opacity: 0, width: 0, height: 0, position: 'absolute', top: '100%', left: '100%',};
  return (
    <svg hidden style={style}>
        <defs>
            <mask id="mask-b">
                <rect
                    x="0"
                    y="0"
                    width="52"
                    height="150"
                    fill="#fff">
                </rect>
                <path
                    d="M 14 14 h 20 a 3 3 0 0 1 3 3 v 6 a 3 3 0 0 1 -3 3 h -20 z"
                    fill="#000">
                </path>
                <path
                    d="M 14 44 h 20 a 3 3 0 0 1 3 3 v 6 a 3 3 0 0 1 -3 3 h -20 z"
                    fill="#000">
                </path>
            </mask>
            <mask id="mask-o">
                <rect
                    x="0"
                    y="0"
                    width="50"
                    height="150"
                    fill="#fff">
                </rect>
                <g
                    transform="translate(25 40) scale(0.5 0.6)">
                    <g transform="translate(-25 -40)">
                        <path
                            fill="#000"
                            d="M 0 0 a 100 100 0 0 1 50 15 v 70 a 100 100 0 0 0 -50 -15 v -70">
                        </path>
                    </g>
                </g>
            </mask>
            <symbol id="letter-o">
                <path
                    transform="translate(0 21)"
                    mask="url(#mask-o)"
                    d="M 0 0 a 100 100 0 0 1 50 15 v 70 a 100 100 0 0 0 -50 -15 v -70">
                </path>
                <path
                    d="M 50 31 a 100 100 0 0 0 -45 -20 v 5 a 100 100 0 0 1 45 15">
                </path>
                <path
                    d="M 50 26 a 100 100 0 0 0 -22 -26 v 10 a 100 100 0 0 1 22 16">
                </path>
            </symbol>
            <linearGradient id="gradient-book" gradientUnits="userSpaceOnUse" y1="0" y2="0" x1="0" x2="25">
                <stop stopColor="#FF184A" offset="0"></stop>
                <stop stopColor="#311839" offset="1"></stop>
            </linearGradient>
            <symbol id="book-1">
                <g>
                    <rect
                        fill="#FF184A"
                        x="5"
                        y="0"
                        width="15"
                        height="125"
                        rx="2">
                    </rect>
                    <rect
                        fill="#932243"
                        x="5"
                        y="5"
                        width="15"
                        height="10">
                    </rect>
                    <rect
                        fill="#932243"
                        x="5"
                        y="110"
                        width="15"
                        height="10">
                    </rect>
                    <rect
                        fill="url(#gradient-book)"
                        x="5"
                        y="0"
                        width="15"
                        height="125"
                        rx="2"
                        opacity="0.6">
                    </rect>
                </g>
            </symbol>
            <symbol id="book-2">
                <g>
                    <rect
                        fill="#FF184A"
                        x="0"
                        y="0"
                        width="25"
                        height="125"
                        rx="3.5">
                    </rect>
                    <rect
                        fill="#932243"
                        x="0"
                        y="10"
                        width="25"
                        height="2">
                    </rect>
                    <rect
                        fill="#932243"
                        x="0"
                        y="17"
                        width="25"
                        height="20">
                    </rect>
                    <rect
                        fill="#932243"
                        x="0"
                        y="42"
                        width="25"
                        height="2">
                    </rect>
                    <rect
                        fill="url(#gradient-book)"
                        x="0"
                        y="0"
                        width="25"
                        height="125"
                        rx="3.5"
                        opacity="0.6">
                    </rect>
                </g>
            </symbol>
            <symbol id="book-3">
                <g>
                    <rect
                        fill="#FF184A"
                        x="0.5"
                        y="25"
                        width="24"
                        height="100"
                        rx="5">
                    </rect>
                    <rect
                        fill="#932243"
                        x="5.5"
                        y="50"
                        width="2"
                        height="35">
                    </rect>
                    <rect
                        fill="#932243"
                        x="11.5"
                        y="45"
                        width="2"
                        height="45">
                    </rect>
                    <rect
                        fill="#932243"
                        x="17.5"
                        y="50"
                        width="2"
                        height="35">
                    </rect>
                    <rect
                        fill="url(#gradient-book)"
                        x="0.5"
                        y="25"
                        width="24"
                        height="100"
                        rx="5"
                        opacity="0.6">
                    </rect>
                </g>
            </symbol>
            <symbol id="book-4">
                <g>
                    <rect
                        fill="#FF184A"
                        x="6"
                        y="0"
                        width="13"
                        height="125"
                        rx="2">
                    </rect>
                    <rect
                        fill="#932243"
                        x="11.5"
                        y="12.5"
                        width="2"
                        height="100"
                        rx="2">
                    </rect>
                    <rect
                        fill="url(#gradient-book)"
                        x="6"
                        y="0"
                        width="13"
                        height="125"
                        rx="2"
                        opacity="0.6">
                    </rect>
                </g>
            </symbol>
        </defs>
    </svg>
  );
}

export default SVGDefs;
