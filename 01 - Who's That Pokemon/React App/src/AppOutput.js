import React from 'react';
// import spring for animation and styled components for style
import styled from 'styled-components';
import { Spring } from 'react-spring';

// container wrapping the heading and the image
const Output = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10vh 0 0;
`;

// container wrapping the image
// by default hidden (scale 0)
// specifying different values for correct and incorrect classes (added depending on the quiz own result)
const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle at 50% 50%,
    var(--blue),
    transparent 70%
  );
  transform: scale(0);
  transition: all 0.2s ease-out;

  &.correct {
    background: radial-gradient(
      circle at 50% 50%,
      transparent,
      transparent 60%,
      var(--green) 60%,
      var(--green) 65%,
      transparent 65%
    );
  }
  &.incorrect {
    background: radial-gradient(
      circle at 50% 50%,
      transparent,
      transparent 60%,
      var(--red-dd) 60%,
      var(--red-dd) 65%,
      transparent 65%
    );
  }
`;
// image stretching to fit the container
// by default black through the filter property
// property changed by adding the .answer class
const Image = styled.img`
  width: 100%;
  height: 100%;
  filter: brightness(0);
  transition: all 0.25s ease-out;
  &.answer {
    filter: brightness(1);
  }
`;

// heading with the question mark
// below a certain width, remove the element from the DOM
const Header = styled.h1`
  font-size: 12rem;

  @media (max-width: 600px) {
    display: none;
  }
`;
// heading with the pokemon label and the answer to the quiz
// below a certain width, reduced in size
const SubHeader = styled.h2`
  font-size: 5rem;
  text-align: center;
  text-transform: capitalize;
  letter-spacing: 0.1rem;
  transition: all 0.2s ease-out;

  @media (max-width: 600px) {
    font-size: 3.5rem;
  }
`;

// based on the passed props render element using the pokemon object
// render the image atop animated elements (through react-spring)

const AppOutput = ({ pokemon }) => {
  return (
    <div className="AppOutput">
      <Output>
        <ImageContainer>
          <Image src={pokemon.sprite} />
        </ImageContainer>

        {/* animate the question mark simply altering its opacity */}
        <Spring
          delay={100}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
        >
          {
            ({ opacity }) => <Header style={{ opacity }}>?</Header>
          }
        </Spring>
      </Output>

      {/* animate the label/answer changing also the vertical dimension */}
      <Spring
        delay={350}
        from={{ opacity: 0, transform: 'translateY(-4rem)' }}
        to={{ opacity: 1, transform: 'translateY(0)' }}
      >
        {
          ({ opacity, transform }) => <SubHeader style={{ opacity, transform }}>Pokemon</SubHeader>
        }
      </Spring>
    </div>
  );
}

export default AppOutput;
