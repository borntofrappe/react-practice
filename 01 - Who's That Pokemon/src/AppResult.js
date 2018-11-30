import React from 'react';
// import spring for animation and styled components for style
import styled from 'styled-components';
import { Spring } from 'react-spring';

// center the button horizontally
const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
`;

// button replicating the input button style
const GameButton = styled.button`
  opacity: 0.9;
  background: none;
  border: 1px solid #fff;
  padding: 0.75rem 1.25rem;
  color: inherit;
  font-family: inherit;
  font-size: 1.1rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  transition: all 0.2s ease-out;

  &:hover {
    font-weight: 500;
    background: #fff;
    color: var(--red);
    border: none;
    box-shadow: 0 1px 2px #ffffff55;
  }
`;

// render a single (animated) button passing the method destructured from props
const AppResult = ({ handleClick }) => {
  return (
    <ResultContainer>
      <Spring
        delay={1500}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {
          ({ opacity }) => <GameButton onClick={handleClick} style={{ opacity }}>One more round <span role="img" aria-label="Smiling devil emoji">😈</span></GameButton>
        }
      </Spring>
    </ResultContainer>
  );
}

export default AppResult;
