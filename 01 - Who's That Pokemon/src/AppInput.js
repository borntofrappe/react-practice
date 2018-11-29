import React from 'react';
import styled from 'styled-components';

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
const AppInput = ({ input, handleChange, handleSubmit }) => {
  return (
    <InputContainer onSubmit={handleSubmit}>
      <Input value={input} onChange={handleChange} placeholder="Your answer here" />
      <InputButton>Submit</InputButton>
    </InputContainer>
  );
}

export default AppInput;
