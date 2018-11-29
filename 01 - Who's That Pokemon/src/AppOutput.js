import React from 'react';
import styled from 'styled-components';

const Output = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10vh 0 0;
`;
const Header = styled.h1`
  font-size: 10rem;
`;
const SubHeader = styled.h2`
  font-size: 4rem;
  text-align: center;
  text-transform: capitalize;
  letter-spacing: 0.1rem;
  transition: all 0.2s ease-out;

  &.answer {
    opacity: 0;
  }
`;
const Answer = styled.h2`
  font-size: 4rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  opacity: 0;
  transition: all 0.4s ease-out;
  transition-delay: 0.4s;
  &.answer {
    opacity: 1;
    transform: rotate(360deg);
  }
`;
const ImageContainer = styled.div`
  width: 250px;
  height: 250px;
  position: relative;

  &:before {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 120%;
    height: 120%;
    background: radial-gradient(
      circle at 50% 50%,
      var(--blue),
      transparent 70%
    );
    border-radius: 50%;
    transition: all 0.25s ease-out;
    transition-delay: 0.1s;
  }
  &.answer:before {
    transform: translate(-50%, -50%) scale(1);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  filter: brightness(0);
  transition: all 0.25s ease-out;
  &.answer {
    filter: brightness(1);
  }
`;
const AppOutput = ({ pokemon }) => {
  return (
    <div className="AppOutput">
      <Output>
        <ImageContainer>
          {
            pokemon.sprite &&
            <Image src={pokemon.sprite} />
          }
        </ImageContainer>
        <Header>?</Header>

      </Output>
      <SubHeader>Pokemon</SubHeader>
      <Answer>{pokemon.name}</Answer>
    </div>
  );
}

export default AppOutput;
