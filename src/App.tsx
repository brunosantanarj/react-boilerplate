import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    color: red;
    font-size: 60px;
`;

export interface Props {
  number: number;
}

const App = ({ number, ...props }: Props) => {
  return (
    <React.Fragment>
      <Title>{number}</Title>
    </React.Fragment>
  );
};

export default App;
