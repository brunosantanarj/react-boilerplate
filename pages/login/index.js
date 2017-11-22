import 'isomorphic-fetch';
import React, { Component } from 'react';
import initStore from '../../container/store';
import withRedux from 'next-redux-wrapper';

const Login = () => (
    <div>login</div>
);

export default withRedux(initStore)(Login);