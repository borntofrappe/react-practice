// styled components
import styled from 'styled-components';

// display the cards in a row
// ! cap the width of the container and allow for horizontal scroll
export const Carousel = styled.div`
  display: flex;
  width: 850px;
  overflow-x: auto;
  margin: 0 auto;
  // considerable padding to have the first card displayed mid screen
  padding-left: 250px;
  // remove a possible scrollbar for the y axis
  overflow-y: hidden;
  perspective: 500px;
  // style the scrollbar for the x axis
  &::-webkit-scrollbar {
    height: 0.2rem;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px hsla(0, 0%, 0%, 0.3);
  }
  &::-webkit-scrollbar-thumb {
    background: hsl(0, 0%, 90%);
    border-radius: 5px;
  }
`;

// style the card akin to a screen of a mobile device
// display the content in a flex column
export const CardContainer = styled.div`
  background: #383842;
  max-width: 300px;
  border-radius: 20px;
  margin: 1rem 1.25rem;
  // avoid shrinking, allowing for horizontal scroll
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  // transition for the change in opacity and rotation
  transition-property: transform, opacity;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  opacity: 1;

  // reduce the opacity of the rotated cards
  &.rotate {
    opacity: 0.2;
  }

  // rotate the cards according to their position vis-a-vis the center of the carousel
  // push the cards backwards through the z axis
  &.rotate-left {
    transform: translateZ(-70px) rotateY(-10deg);
  }
  &.rotate-right {
    transform: translateZ(-70px) rotateY(10deg);
  }
  // for the last card include a pseudo element card to allocate additional space at the end of the carousel
  // otherwise the element won't ever be focused upon when scrolling
  &:last-of-type {
    position: relative;
    &:after {
      position: absolute;
      content: '';
      left: 100%;
      top: 0;
      width: 250px;
      height: 100%;
      transform: translateX(1.25rem);
    }
  }
`;

export const Header = styled.div`
  padding: 1rem;
  color: #ffffff;
  background: #d90c08;
  border-radius: inherit;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

export const Index = styled.div`
  font-size: 0.75rem;
  text-transform: uppercase;
`;

export const Question = styled.h1`
  font-weight: bold;
  font-size: 1.25rem;
  margin: 0.5rem 0 0;
`;

/* style the selected area to have a fixed height
! when the div is blank include a string to explain the purpose of the selected area
*/
export const Selected = styled.div`
  margin: 1.25rem 0.75rem 1.75rem;
  height: 50px;
  text-align: center;
  color: #eee;
  border-radius: 5px;

  &:empty {
    opacity: 0.3;
    border: 2px dashed currentColor;
    background: initial;
    &:before {
      content: "Make your prediction";
      text-transform: uppercase;
      font-weight: bold;
      line-height: 50px;
    }
  }

  // style the nested button to spread and cover the entirety of the width/height of the container
  button {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    position: relative;

    // include with a pseudo element a white x on a red background, in the top right corner of the button
    &:after {
      content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g><circle fill="%23d90c08" cx="50" cy="50" r="50"></circle><g transform="translate(50 50) rotate(45)" stroke="%23ffffff" stroke-width="12" stroke-linecap="round" fill="none"><path d="M -23 0 h 46"></path><path d="M 0 -23 v 46"></path></g></g></svg>');
      position: absolute;
      right: 0%;
      top: 0%;
      transform: translate(50%, -50%);
      width: 15px;
      height: 15px;
      border-radius: 50%;
    }
  }
`;

/* include a faux border with through an svg background
have the container expand to cover the available space
*/
export const Selection = styled.div`
  flex-grow: 1;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="none" stroke="%23d90c08" stroke-width="2" stroke-linecap="round"><path d="M 0 1 h 90"></path><path d="M 90 1 a 9 9 0 0 1 9 9"></path><path d="M 99 10 v 85"></path></g></svg>'),
  url('data:image/svg+xml;utf8,<svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="none" stroke="%23d90c08" stroke-width="2" stroke-linecap="round"><path d="M 99 15 v 85"></path></g></svg>');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position-y: 0.7rem;
  margin-right: 1rem;
  padding-bottom: 1.5rem;
`;


export const Action = styled.h2`
  padding: 0.25rem 0.75rem;
  margin-right: 1rem;
  background: #383842;
  display: inline-block;
  text-transform: capitalize;
  font-size: 0.9rem;
  color: #ffffff;
  font-weight: bold;
  word-spacing: 0.2rem;
  letter-spacing: 0.015rem;
`;

/* display the options in a flex column
! cap the height of the containers allowing for vertical scroll
*/
export const Options = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.25rem 0 0;
  overflow-y: scroll;
  height: 400px;
  // hide the scrollbar from sight
  &::-webkit-scrollbar {
    width: 0;
  }
`;


export const Option = styled.button`
  cursor: pointer;
  margin: 0.25rem 1.5rem;
  margin-left: 0;
  background: #ffffff;
  padding: 0.3rem 0.5rem;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border: none;
  box-shadow: 0 1px 4px hsla(0, 0%, 0%, 0.2);
  display: flex;
  align-items: center;
`;

/* fix the width of the span to have one-digit and two-digits numbers occupy the same space
with pseudo elements include a skewed gray background and a slanted bar of an accent color */
export const Number = styled.span`
  width: 2.25rem;
  margin: 0 1.25rem 0 0.25rem;
  position: relative;
  font-size: 0.7rem;
  z-index: 5;

  &:before,
  &:after {
    position: absolute;
    content: "";
    top: 50%;
    z-index: -5;
  }

  &:before {
    background: #eaeaea;
    border-radius: 5px;
    left: 50%;
    width: 2.5rem;
    height: 2rem;
    transform: translate(calc(-50% + 0.15rem), -50%) skewX(-20deg);
  }
  &:after {
    background: ${props => props.color};
    right: 0%;
    width: 0.3rem;
    height: 1.5rem;
    transform: translate(0, -50%) skewX(-20deg);
  }
`;

// display the rider's information aligned toward the left
export const Rider = styled.div`
  line-height: 1.3;
  text-align: initial;
`;
export const Name = styled.h3`
  font-size: 1rem;
  font-weight: initial;
`;
export const Team = styled.p`
  font-size: 0.7rem;
  text-transform: uppercase;
`;
