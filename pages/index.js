import 'isomorphic-fetch';
import React, { Component } from 'react';
// import Head from 'next/head'
import App from '../src/App';
import withRedux from 'next-redux-wrapper';
import initStore from '../container/store';
import style from './styles/index-style.scss';


class Index extends Component {
    constructor() {
        super();
    }
    render() {
        return (<div>
            <App />
            dfg
            <span>scss styled-jsx</span>
            <style>{style}</style>
        </div>);
    }
}

export default withRedux(initStore)(Index);