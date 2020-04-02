import styled from 'styled-components';

export const Container = styled.div`
  margin: 2.5rem auto;
  max-width: 25em;
  width: 90vw;
`;

export const Form = styled.form`
  display: flex;
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  bottom: 100%;
  font-size: 0.9rem;
  margin: 0.25rem 0;
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 0.5rem;
  background: none;
  font-size: 0.9rem;
  font-family: inherit;
  border: 2px solid currentColor;
  outline: none;

  &:placeholder {
    font-family: inherit;
  }
  &:focus {
    border-color: hsl(150, 90%, 30%);
  }

  &:focus + button {
    background: hsl(150, 90%, 30%);
  }
`;

export const Button = styled.button`
  background: hsl(200, 95%, 5%);
  color: hsl(0, 0%, 98%);
  padding: 0.5rem;
  border: none;

  &:focus {
    outline-color: hsl(0, 90%, 40%);
    background: hsl(0, 90%, 40%);
  }
`;


export const List = styled.ul`
  list-style: none;
  padding: 0.5rem 0;
`;
export const Item = styled.li`
  display: flex;
  padding: 0.5rem 0;
  align-items: flex-end;

  & > * + * {
    margin-left: 0.5rem;
  }
`;
export const Value = styled.p`
  flex-grow: 1;
  font-size: 0.9rem;
`;