import React from 'react';
import Icon from './Icon';
import styled from 'styled-components';

// header component, displaying a heading and two buttons
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  position: relative;

  &:before {
    position: absolute;
    content: "";
    bottom: calc(100% + 1rem);
    left: 50%;
    transform: translateX(-50%);
    width: 1rem;
    height: 0.3rem;
    border-radius: 15px;
    background: hsl(0, 0%, 90%);
  }
`;
const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  flex-grow: 1;
  font-weight: 900;
`;
const HeaderButton = styled.button`
  color: inherit;
  background: none;
  border: 1px solid hsl(0, 0%, 92%);
  border-radius: 50%;
  margin: 0 0.25rem;
  width: 28px;
  height: 28px;
  padding: 0.35rem;

  svg {
    width: 100%;
    height: 100%;
  }
`;

// render the two buttons making use of the Icon component
const Header = () => {
  const buttons = ['plus', 'minus'];
  return(
    <HeaderContainer>
      <HeaderTitle>Choose Seats</HeaderTitle>
      {
        buttons.map(button => <HeaderButton key={button}>
          <Icon href={button} size="28" />
        </HeaderButton>)
      }
    </HeaderContainer>
  );
}

export default Header;