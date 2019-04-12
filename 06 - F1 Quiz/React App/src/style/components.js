import styled from 'styled-components';

/* Main
container for the application's content
*/
export const Main = styled.main`
  max-width: 600px;
  width: 90vw;
  background: #1A1A1A;
  border-radius: 10px;
  box-shadow: 0 2px 15px #1A1A1A66;
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 1rem 1.15rem;
`;


/* Figure
position relative for the SVG making up the question mark
*/
export const Figure = styled.figure`
  position: relative;
  margin: -1rem -1.15rem;
`;

/* Image
stretching the container's width
*/
export const Image = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
  filter: saturate(180%) brightness(0.8);
`;
/* Icon
wrapper to absolute position the SVG icon in the center of the first relative container
svg included through a separate component fabricating the icon based on the input props
*/
export const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  color: #fff;
  background: #1A1A1A55;
  border-radius: 20px;
`;

/* Button
bold red button
*/
export const Button = styled.button`
  margin: 2.75rem 0.25rem 0.75rem;
  align-self: center;
  color: #fff;
  background: #D31411;
  padding: 1rem 4.25rem;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: bold;
  font-family: inherit;
  transition: transform 0.2s cubic-bezier(0.34,.86,0.58,1.27);

  &:hover {
    transform: scale(1.15);
  }
`;


/* Question
paragraph describing the question
*/
export const Question = styled.p`
  line-height: 1.5;
  font-weight: 600;
`;


/* Answers
container describing the button making up the alternative answers
*/
export const Answers = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  width: 100%;
`;

/* Answer
button making up the actual answer
add a pseudo element which darkens the portion not covered by the percentage
*/
export const Answer = styled.button`
  text-align: left;
  color: inherit;
  background: ${props => props.isCorrect ? '#5BC20F' : 'rgba(255, 255, 255, 0.2)'};
  padding: 0.75rem 2.5rem 0.75rem 0.9rem;
  margin: 0.2rem 0;
  border: none;
  border-left: ${props => props.choice ? '4px solid #D31411' : 'none'};
  border-radius: ${props => props.choice ? '0px' : '2px'};
  font-family: inherit;
  font-weight: ${props => props.isCorrect ? '700' : '500'};
  text-transform: capitalize;
  font-size: 1rem;
  letter-spacing: 0.07rem;
  transition: all 0.1s ease-out;
  position: relative;
  z-index: 10;

  &:hover {
    transform: ${props => !props.showResult && 'scale(1.02)'};
    background: ${props => !props.showResult && '#D31411'};
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: transform 1.2s ease-in-out;
    transition-delay: 0.3s;
    transform: scaleX(${props => (100 - props.percentage) / 100});
    transform-origin: 100% 50%;
    background: rgba(0, 0, 0, 0.2);
    z-index: -5;
  }
`;

/* Percentage
span nested in the button element to show the percentage of fans who selected the option
*/
export const Percentage = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(0%, -50%);
  background: #fff;
  color: #1A1A1A;
  border-radius: 30px;
  padding: 0.4rem 0.5rem;
  font-size: 0.7rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin: 0 6px;
    color: #5BC20F;
  }
`;

/* Results
container describing whether the answer is correct and motivating the answer
*/
export const Results = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;

/* Result
heading specifying the correct/wrong nature of the guess
*/
export const Result = styled.h2`
  color: ${props => props.isCorrect ? '#5BC20F' : '#D31411'};
  letter-spacing: 0.05rem;
  font-size: 1.8rem;
  flex-grow: 1;
  display: flex;
  align-items: center;

  &:after {
    content: '!';
  }
`;

/* Details
paragraph detailing the correct answer
*/
export const Details = styled.p`
  margin-top: 10px;
  max-width: 350px;
  line-height: 1.2;
`;

/* Score
heading detailing the achieved score
*/
export const Score = styled.h2`
  font-size: 3.25rem;
  letter-spacing: 0.09rem;
  text-align: center;
  margin: 2rem 0 1rem;


  strong {
    color: #D31411;
  }
`;

/* ShareLink
anchor element for the tweet
*/
export const ShareLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  margin: 2rem 0 1rem;
  text-decoration: none;
  color: inherit;

  svg {
    margin-left: 6px;
  }
`;