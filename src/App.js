import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    color: red;
    font-size: 60px;
`;

class App extends PureComponent {
    render = () => (
        <React.Fragment>
            <Title>React boileplate</Title>
            <div>React 16</div>,
            <p>Working...</p>
        </React.Fragment>
    )
}

export default App;