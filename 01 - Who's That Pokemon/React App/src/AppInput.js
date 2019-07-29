import React from 'react';
// import spring for animation and styled components for style
import styled from 'styled-components';
import { Spring } from 'react-spring';

// form describing the input element and the button one atop the other
const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 1rem;
  background: none;
  border: none;
  border-bottom: 2px solid #ffffff44;
  color: #ffffff;
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 2.5rem;

  &::placeholder {
    color: inherit;
    opacity: 0.8;
  }
`;
// ghost button replicated for the new-round button
const InputButton = styled.button`
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

// render the input component destructuring the values passed through props
// simply render the (animated) input and button element
const AppInput = ({ input, handleChange, handleSubmit }) => {
  return (
    <InputContainer onSubmit={handleSubmit}>
      <Spring
        delay={450}
        from={{ opacity: 0, transform: 'translateY(-4rem)' }}
        to={{ opacity: 1, transform: 'translateY(0)' }}
      >
        {
          ({ opacity, transform }) => <Input style={{ opacity, transform }} value={input} onChange={handleChange} placeholder="Who's that Pokemon?" />
        }
      </Spring>

      <Spring
        delay={520}
        from={{ opacity: 0, transform: 'translateY(-2rem)' }}
        to={{ opacity: 1, transform: 'translateY(0)' }}
      >
        {
          ({ opacity, transform }) => <InputButton style={{ opacity, transform }}>Guess <span role="img" aria-label="Finger crossed emoji">🤞</span></InputButton>
        }
      </Spring>
    </InputContainer>
  );
}

export default AppInput;
