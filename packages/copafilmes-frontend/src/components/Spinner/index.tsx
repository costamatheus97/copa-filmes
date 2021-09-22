import React from 'react';

import { Container, SpinnerElement } from './styles';

const Spinner: React.FC = () => {
  return (
    <Container>
      <SpinnerElement>
        <div />
        <div />
        <div />
        <div />
      </SpinnerElement>
    </Container>
  );
};

export default Spinner;
