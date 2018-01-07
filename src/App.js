import React, { Component } from 'react';
import styled from 'styled-components';

class App extends Component {
    render() {
        
        const Title = styled.h1`
            color: red;
            font-size: 60px;
        `;

        return (
            <React.Fragment>
                <Title>React boileplate</Title>
                <div>React 16</div>,
                <p>Working...</p>
            </React.Fragment>
        );
    }
}

export default App;