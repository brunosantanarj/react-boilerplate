import 'isomorphic-fetch';
import React, { Component } from 'react';
import Link from 'next/link';
import App from '../src/App';
import withRedux from 'next-redux-wrapper';
import initStore from '../container/store';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <App />
                <Link href="/login" prefetch><a>Login</a></Link>
            </React.Fragment>
        );
    }
}

export default withRedux(initStore)(Index);