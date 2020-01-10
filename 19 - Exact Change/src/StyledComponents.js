import styled, { keyframes} from 'styled-components'

// animations
export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

const rotate = keyframes`
  35% {
    transform: rotate(-10deg);
  }
`
const translate = keyframes`
  35% {
    transform: translate(-10px, -15px);
  }
`


// styles
export const Root = styled.div`
  background: hsl(0, 0%, 100%);
  color: hsl(0, 0%, 20%);
  padding: 2.5rem;
  border: 0.25rem solid currentColor;
  box-shadow: 0px 0px 10px -4px hsl(0, 0%, 0%);
  max-width: 450px;
  width: 90vw;
  animation: ${fadeIn} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 2;
  & > * + * {
    margin-top: 1rem;
  }
`

export const Title = styled.h1`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-size: 2.5rem;
  text-transform: capitalize;

  &::selection {
    background: hsl(30, 95%, 60%);
  }
`

export const Description = styled.h1`
  font-weight: initial;
  font-size: 1.5rem;
  line-height: 1.5;
  &::selection {
    background: hsl(30, 95%, 60%);
  }
`

export const Line = styled.hr`
background: currentColor;
height: 0.2rem;
width: 100%;
`

export const Button = styled.button`
  color: inherit;
  padding: 0.25rem;
  border-radius: 50%;
  background: none;
  border: 0.4rem solid currentColor;
  width: 3.5rem;
  height: 3.5rem;
  display: block;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.5), color 0.3s ease-in-out;

  svg {
    width: 100%;
    height: auto;
    display: block;
  }

  &:focus {
    outline: none;
  }
  &:focus,
  &:hover {
    color: hsl(30, 95%, 50%);
    transform: scale(1.2);
  }
`


export const Board = styled.main`
  @supports (display: grid) {
    display: grid;
    grid-template-areas:
      "two-euros one-euro fifty-cents"
      "twenty-cents change ten-cents"
      "five-cents two-cents one-cent";
    grid-auto-columns: 6rem;
    grid-auto-rows: 6rem;
    align-items: center;
    justify-items: center;
    grid-gap: 1rem;
    justify-content: center;
  }
`

export const Change = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  grid-area: change;
  display: flex;
  justify-content: center;
  align-items: center;

  &::selection {
    background: hsl(30, 95%, 60%);
  }
  span {
    margin: 0 0.5rem;
    font-size: 0.8em;
    font-weight: bold;
    color: hsl(10, 95%, 55%);
  }
`;

export const Coin = styled.button`
  color: inherit;
  border: none;
  background: none;
  display: inline-block;
  width: 6rem;
  height: 6rem;
  padding: 0.75rem;
  grid-area: "${({area}) => area}";
  transform: scale(0.75);
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.5), color 0.3s ease-in-out;

  svg {
    width: 100%;
    height: auto;
    display: block;
  }

  &:focus {
    outline: none;
  }
  &:focus,
  &:hover {
    transform: scale(1);
  }
  &:hover {
    color: hsl(30, 95%, 50%);
  }
`

export const Illustration = styled.svg`
  width: 150px;
  height: auto;
  display: block;

  &.animation .translate {
    animation: ${translate} 2s cubic-bezier(0.95, 0, 0.08, 1) infinite;
  }
  &.animation .rotate {
    animation: ${rotate} 2s cubic-bezier(0.95, 0, 0.08, 1) infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &.animation .translate,
    &.animation .rotate {
      animation: none;
    }
  }
`