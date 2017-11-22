import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return [
            <div key={1}>React 16</div>,
            <p key={2}>Working...</p>
        ];
    }
}

export default App;