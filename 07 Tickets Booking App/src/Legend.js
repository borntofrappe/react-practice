import React from 'react';
import Icon from './Icon';
import styled from 'styled-components';

// display the legend items side by side, prefaced by a matching icon
const LegendContainer = styled.div`
display: flex;
margin: 1.25rem 0;
justify-content: center;
`;
const LegendItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.35rem;

  svg {
    margin-right: 0.2rem;
    border-radius: 50%;
    width: 16px;
    height: 16px;
  }
`;
const LegendItemName = styled.span`
  text-transform: capitalize;
  color: hsl(0, 0%, 75%);
  letter-spacing: 0.05rem;
  font-weight: 700;
  font-size: 0.6rem;
`;

const Legend = () => {
  const items = ['available', 'reserved', 'selected'];
  return(
    <LegendContainer>
      {
        items.map(item => <LegendItem key={item}>
            <Icon href={item} size="16" />
            <LegendItemName>{item}</LegendItemName>
          </LegendItem>
        )
      }
    </LegendContainer>
  );
}

export default Legend;