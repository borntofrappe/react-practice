import React from 'react'

export default ({country}) => {
    switch(country) {
        case 'AUS' :
            return (<svg viewBox="0 0 100 60" width="100" height="60" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="60" fill="#001B69" />
            <g transform="scale(0.5)">
                <svg viewBox="0 0 100 60" width="100" height="60" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="60" fill="#001B69" />
                    <g stroke-linecap="square"  fill="none">
                        <path stroke-width="12" stroke="#ffffff" d="M 0 0 l 100 60 m 0 -60 l -100 60" />
                        <path stroke-width="4" stroke="#c9072a" d="M 0 1.5 l 50 30" />
                        <path stroke-width="4" stroke="#c9072a" d="M 50 28.5 l 50 30" />
                        <path stroke-width="4" stroke="#c9072a" d="M 0 61.5 l 50 -30" />
                        <path stroke-width="4" stroke="#c9072a" d="M 50 28.5 l 50 -30" />
                        <path stroke-width="15" stroke="#ffffff" d="M 50 0 v 60 m -50 -30 h 100" />
                        <path stroke-width="9" stroke="#c9072a" d="M 50 0 v 60 m -50 -30 h 100" />
                    </g>
                </svg>
            </g>
            <g transform="translate(25 45)">
                <g id="star">
                    <g fill="#ffffff" stroke="none">
                        <path id="star--triangle" d="M -4.5 8.5 l 4.5 -17 4.5 17 -4.5 -4.5 z"  />
                        <use href="#star--triangle" transform="rotate(55)" />
                        <use href="#star--triangle" transform="rotate(-55)" />
                    </g>
                </g>
            </g>
            <g transform="translate(75 49)">
                <use transform="scale(0.5)" href="#star" />
            </g>
            <g transform="translate(75 10)">
                <use transform="scale(0.5)" href="#star" />
            </g>
            <g transform="translate(60 25)">
                <use transform="scale(0.5)" href="#star" />
            </g>
            <g transform="translate(87 22)">
                <use transform="scale(0.5)" href="#star" />
            </g>
            <g transform="translate(78 30)">
                <path fill="#ffffff" stroke="none" d="M -2 2.5 l 2 -5 2 5 -4.5 -3 5 0 z"  />
            </g>
        </svg>)
        case 'BRA' :
            return (<svg viewBox="0 0 100 60" width="100" height="60" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <circle id="brazil--circle" cx="50" cy="30" r="15" />
                <clipPath id="brazil--clip">
                    <use href="#brazil--circle"/>
                </clipPath>
                <path id="brazil--path" d="M 0 25 q 60 0 100 25" />
            </defs>
            <rect width="100" height="60" fill="#009C37" />
            <path d="M 50 5 l -38 25 38 25 38 -25 z" fill="#FEE000" />
            <use href="#brazil--circle" fill="#002277"/>
            <g clip-path="url(#brazil--clip)">
            <use href="#brazil--path" fill="none" stroke="#fff" stroke-width="4" />
            <text fill="#009C37" font-weight="bold" dominant-baseline="middle">
                <textPath startOffset="38%" href="#brazil--path" font-size="2">
                    ORDEM E PROGRESSO
                </textPath>
            </text>
            </g>
        </svg>)
        case 'HAW' :
            return (<svg viewBox="0 0 100 60" width="100" height="60" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="hawaii--gradient" y1="0" y2="0.375" x1="0" x2="0" spreadMethod="repeat">
                    <stop stop-color="#ffffff" offset="0.33" />
                    <stop stop-color="#c9072a" offset="0.33" />
                    <stop stop-color="#c9072a" offset="0.67" />
                    <stop stop-color="#001B69" offset="0.67" />
                </linearGradient>
            </defs>
            <rect width="100" height="60" fill="url(#hawaii--gradient)" />
            <g transform="scale(0.5)">
                <svg viewBox="0 0 100 60" width="100" height="60" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="60" fill="#001B69" />
                    <g stroke-linecap="square"  fill="none">
                        <path stroke-width="12" stroke="#ffffff" d="M 0 0 l 100 60 m 0 -60 l -100 60" />
                        <path stroke-width="4" stroke="#c9072a" d="M 0 1.5 l 50 30" />
                        <path stroke-width="4" stroke="#c9072a" d="M 50 28.5 l 50 30" />
                        <path stroke-width="4" stroke="#c9072a" d="M 0 61.5 l 50 -30" />
                        <path stroke-width="4" stroke="#c9072a" d="M 50 28.5 l 50 -30" />
                        <path stroke-width="15" stroke="#ffffff" d="M 50 0 v 60 m -50 -30 h 100" />
                        <path stroke-width="9" stroke="#c9072a" d="M 50 0 v 60 m -50 -30 h 100" />
                    </g>
                </svg>
            </g>
        </svg>)
        case 'PER' :
            return (<svg viewBox="0 0 100 60" width="100" height="60" xmlns="http://www.w3.org/2000/svg">
            <rect width="33.33" height="60" fill="#DA071E" />
            <rect x="33.34" width="33.34" height="60" fill="#ffffff" />
            <rect x="66.67" width="33.33" height="60" fill="#DA071E" />
        </svg>)
        case 'RSA' :
            return (<svg viewBox="0 0 100 60" width="100" height="60" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="30" fill="#E1392D" />
            <rect width="100" y="30" height="30" fill="#000C8A" />
            <path d="M 0 0 l 50 30 l -50 30" fill="#000000" stroke="none" />
            <g fill="none" stroke-linecap="square" stroke-width="14">
                <path d="M 0 0 l 45 30 h 55 h -55 l -45 30" stroke="#ffffff" stroke-width="22" />
                <path d="M -8 0 l 45 30 h 55 h -55 l -45 30" stroke="#FFB916" />
                <path d="M 0 0 l 45 30 h 55 h -55 l -45 30" stroke="#007847" />
            </g>
        </svg>)
        case 'UK' :
            return (<svg viewBox="0 0 100 60" width="100" height="60" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="60" fill="#001B69" />
            <g stroke-linecap="square"  fill="none">
                <path stroke-width="12" stroke="#ffffff" d="M 0 0 l 100 60 m 0 -60 l -100 60" />
                <path stroke-width="4" stroke="#c9072a" d="M 0 1.5 l 50 30" />
                <path stroke-width="4" stroke="#c9072a" d="M 50 28.5 l 50 30" />
                <path stroke-width="4" stroke="#c9072a" d="M 0 61.5 l 50 -30" />
                <path stroke-width="4" stroke="#c9072a" d="M 50 28.5 l 50 -30" />
                <path stroke-width="15" stroke="#ffffff" d="M 50 0 v 60 m -50 -30 h 100" />
                <path stroke-width="9" stroke="#c9072a" d="M 50 0 v 60 m -50 -30 h 100" />
            </g>
        </svg>)
        case 'USA' :
            return (<svg viewBox="0 0 100 60" width="100" height="60" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="usa--pattern" width="0.2" height="0.33" viewBox="0 0 20 20">
                    <g transform="translate(5 5)">
                        <path fill="#ffffff" stroke="none" d="M -2 2.5 l 2 -5 2 5 -4.5 -3 5 0 z"  />
                    </g>
                    <g transform="translate(15 15)">
                        <path fill="#ffffff" stroke="none" d="M -2 2.5 l 2 -5 2 5 -4.5 -3 5 0 z"  />
                    </g>
                </pattern>
                <linearGradient id="usa--gradient" y1="0" y2="0.143" x1="0" x2="0" spreadMethod="repeat">
                    <stop stop-color="#c9072a" offset="0.5" />
                    <stop stop-color="#ffffff" offset="0.5" />
                </linearGradient>
            </defs>
                <rect width="100" height="60" fill="url(#usa--gradient)" />
                <g transform="scale(0.5)">
                    <rect width="100" height="60" fill="#001B69" />
                    <rect width="100" height="60" fill="url(#usa--pattern)" />
                </g>
            </svg>)
        default: return ''
    }
}