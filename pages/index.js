import 'isomorphic-fetch';
import React, { Component } from 'react';
import Link from 'next/link';
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
        return (
            <div>
                <App key={Math.random()} />
                <style>{style}</style>
                <Link href="/login" prefetch><a>Login</a></Link>
            </div>
        );
    }
}

export default withRedux(initStore)(Index);