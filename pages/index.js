import 'isomorphic-fetch';
import React, { Component } from 'react';
// import Head from 'next/head'
import App from '../src/App';
import withRedux from 'next-redux-wrapper';
import initStore from '../container/store';


class Index extends Component {
    constructor() {
        super();
    }
    render() {
        return (<div>
            <App />
            dfg
            <span>scss styled-jsx</span>
            <style>
                {`
                    div {
                        color: red;

                        span {
                            color: blue;
                        }
                    }
                `}
            </style>
        </div>);
    }
}

export default withRedux(initStore)(Index);