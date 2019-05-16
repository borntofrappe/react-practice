import React from 'react';
import styled from 'styled-components';

// display the sum and the call to action in the bold button using the accent color as background
const CheckoutContainer = styled.button`
  margin-top: 1.75rem;
  width: 100%;
  background: var(--accent, #fd6d8e);
  box-shadow: 0 2px 5px -4px currentColor;
  padding: 0.75rem 1rem;
  border-radius: 15px;
  font-family: inherit;
  color: var(--background, #ffffff);
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CheckoutTotal = styled.strong`
  font-size: 1.2rem;
  letter-spacing: 0.05rem;
`;
const CheckoutAction = styled.span`
  font-size: 0.9rem;
`;

const Checkout = ({total = 0}) => {
  return(
    <CheckoutContainer>
      <CheckoutTotal>{total}$</CheckoutTotal>
      <CheckoutAction>Checkout</CheckoutAction>
    </CheckoutContainer>
  );
}

export default Checkout;