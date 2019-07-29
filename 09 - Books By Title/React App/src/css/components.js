import styled, { keyframes } from 'styled-components';

// export the styles for the different components

// App.js
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 1rem;
  padding: 1rem;
  background: #171718;
  box-shadow: 0 1px 5px -2px hsla(0, 0%, 0%, 0.25);
`;

// Headers.js
export const Logo = styled.header`
  padding: 2rem;
`;

// Search.js
// animate the pseudo element using the accent color with a pulsating animation
const loading = keyframes`
  to {
    transform: translate(-50%, -50%) scale(3);
    opacity: 0;
  }
`;
export const Loader = styled.h3`
  padding: 1rem;
  margin: 1.75rem 0;
  position: relative;

  &:before {
    animation: ${loading} 1.2s ease-in-out infinite;
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #FF184A;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0.5;
  }
`;

// SearchForm.js
// ! nest selectors where there is a connection (
// for instance, the position of the label inherently depends on the form, so the connected property value pairs are nested in the form's styling block
export const Form = styled.form`
  margin: 3.5rem 0;
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 2px solid currentColor;
  z-index: 5;

  & label {
    z-index: -5;
    position: absolute;
    bottom: 100%;
    left: 0;
    transition: opacity 0.2s ease-out;
    transition-delay: 0.15s;
  }
  &:focus-within label {
    opacity: 0.7;
    transition-delay: 0;
  }

  & button svg {
    transition: transform 0.25s ease-out;
    transform: rotate(45deg);
  }
  &:focus-within button svg {
    transform: rotate(0);
    transition-delay: 0.15s;
  }
`;

export const Label = styled.label`
  font-size: 0.75rem;
  text-transform: uppercase;
`;

export const Input = styled.input`
  flex-grow: 1;
  font-family: inherit;
  font-size: 1.2rem;
  color: inherit;
  background: none;
  border: none;
  padding: 0.5rem 0;
`;
export const Button = styled.button`
  margin-left: 0.5rem;
  background: none;
  border: none;
  width: 45px;
  height: 45px;
  color: inherit;
  padding: 5px;
`;
export const Icon = styled.svg`
  width: 100%;
  height: 100%;
  display: block;
`;

// SearchResults.js
export const Section = styled.section`
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  margin: 1rem 0;
`;

// animate the anchor links to introduce themselves
const addBook = keyframes`
  from {
    opacity: 0;
    visibility: hidden;
  }
  to {
    opacity: 1;
    visibility: visible;
  }
`;

// on hover&focus scale the svg elements describing the books as if picking the book out of a bookshelf
// on hover&focus show the nested svg element
export const Link = styled.a`
  color: inherit;
  text-decoration: none;
  outline: none;
  padding: 0 0.25rem;
  animation: ${addBook} 0.5s ease-out both;
  position: relative;

  & svg {
    transition-property: transform, opacity;
    transition-duration: 0.15s;
    transition-timing-function: ease-in-out;
    transform-origin: 50% 100%;
    opacity: 0.8;
  }

  &:hover svg,
  &:focus svg {
    transform: scale(1.1);
    opacity: 1;
  }

  & div {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 5px);
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
  }

  &:hover div,
  &:focus div {
    transition-property: opacity, visibility;
    transition-duration: 0.15s;
    transition-timing-function: ease-in-out;
    transition-delay: 0.1s;
    opacity: 1;
    visibility: visible;
  }
`;

export const Details = styled.div`
  white-space: nowrap;
  background: #fff;
  color: #000;
  padding: 0.5rem 1rem;
  padding-top: 1rem;
  clip-path: polygon(
    0% 0.5rem,
    42% 0.5rem,
    50% 0%,
    58% 0.5rem,
    100% 0.5rem,
    100% 100%,
    0% 100%
  );
  filter: drop-shadow(0 1px 4px hsla(0, 0%, 0%, 0.1));

  & h1 {
    font-size: 1rem;
  }
  & h2, & p {
    font-size: 0.9rem;
  }
`;