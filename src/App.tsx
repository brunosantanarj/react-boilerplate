import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 60px;
    color: ${props => typeof props.number === 'number' ? 'blue' : 'red' }
`;

export interface Props {
  number: number;
  name: string;
}

const App = ({ number, ...props }: Props) => (
  <React.Fragment>
    <Title>{props.name}</Title>
    <Title number={number}>{number}</Title>
  </React.Fragment>
);

export default App;
