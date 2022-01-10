import { ReactNode } from 'react';

import { Container } from './styles';

interface CheckoutProps {
  children: ReactNode;
}

function Checkout({ children }: CheckoutProps) {
  return (
    <Container>
      <h1>Checkout</h1>
      {children}
    </Container>
  );
};

export default Checkout;
