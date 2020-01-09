import React from 'react'

export default ({cut}) => {
  switch(cut) {
    case 'two':
      return <svg viewBox="-50 -50 100 100" width="100" height="100">
      <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <circle r="47" />
        <circle r="42" strokeDasharray="26.3" transform="rotate(180)" />
        <circle r="37" />
        <path d="M -12 -8 a 12 12 0 0 1 24 0 q 0 12 -22 26 h 22" />
      </g>
    </svg>;
    case 'one':
      return <svg viewBox="-50 -50 100 100" width="100" height="100">
      <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <circle r="47" />
        <circle r="42" strokeDasharray="26.3" transform="rotate(180)" />
        <circle r="37" />
        <path d="M -12 18 h 24 m -12 0 v -36 q 0 8 -10 10" />
      </g>
    </svg>;
    case 'fifty':
      return <svg viewBox="-50 -50 100 100" width="100" height="100">
      <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <circle r="47" />
        <circle r="42" strokeDasharray="26.3" transform="rotate(180)" />
        <circle r="37" />
        <path transform="scale(0.75)" d="M 11 -18 h -22 v 14 h 10 a 11 11 0 0 1 0 22 h -10 m -10 0 h 0" />
      </g>
    </svg>;
    case 'twenty':
      return <svg viewBox="-50 -50 100 100" width="100" height="100">
      <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <circle r="47" />
        <circle r="42" strokeDasharray="26.3" transform="rotate(180)" />
        <circle r="37" />
        <path transform="scale(0.75)" d="M -12 -8 a 12 12 0 0 1 24 0 q 0 12 -22 26 h 22 m -32 0 h 0" />
      </g>
    </svg>;
    case 'ten':
      return <svg viewBox="-50 -50 100 100" width="100" height="100">
      <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <circle r="47" />
        <circle r="42" strokeDasharray="26.3" transform="rotate(180)" />
        <circle r="37" />
        <path transform="scale(0.75)" d="M -20 18 h 0 m 8 0 h 24 m -12 0 v -36 q 0 8 -10 10" />
      </g>
    </svg>;
    case 'five':
      return <svg viewBox="-50 -50 100 100" width="100" height="100">
      <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <circle r="47" />
        <circle r="42" strokeDasharray="26.3" transform="rotate(180)" />
        <circle r="37" />
        <path transform="translate(-8 0) scale(0.5)" d="M 11 0 v -8 a 11 11 0 0 0 -22 0 v 16 a 11 11 0 0 0 11 11 m -18 0 h 0 m 18 0 a 11 11 0 0 0 11 -11 v -8" />
        <path transform="translate(8 0) scale(0.5)" d="M 11 -18 h -22 v 14 h 10 a 11 11 0 0 1 0 22 h -10" />
      </g>
    </svg>;
    case 'cents':
      return <svg viewBox="-50 -50 100 100" width="100" height="100">
      <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <circle r="47" />
        <circle r="42" strokeDasharray="26.3" transform="rotate(180)" />
        <circle r="37" />
        <path transform="translate(-8 0) scale(0.5)" d="M 11 0 v -8 a 11 11 0 0 0 -22 0 v 16 a 11 11 0 0 0 11 11 m -18 0 h 0 m 18 0 a 11 11 0 0 0 11 -11 v -8" />
        <path transform="translate(8 0) scale(0.5)" d="M -12 -8 a 12 12 0 0 1 24 0 q 0 12 -22 26 h 22" />
      </g>
    </svg>;
    case 'cent':
      return <svg viewBox="-50 -50 100 100" width="100" height="100">
      <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <circle r="47" />
        <circle r="42" strokeDasharray="26.3" transform="rotate(180)" />
        <circle r="37" />
        <path transform="translate(-8 0) scale(0.5)" d="M 11 0 v -8 a 11 11 0 0 0 -22 0 v 16 a 11 11 0 0 0 11 11 m -18 0 h 0 m 18 0 a 11 11 0 0 0 11 -11 v -8" />
        <path transform="translate(8 0) scale(0.5)" d="M -12 18 h 24 m -12 0 v -36 q 0 8 -10 10" />
      </g>
    </svg>;
    default:
      return '';
  }
}