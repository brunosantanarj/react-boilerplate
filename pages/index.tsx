import 'isomorphic-fetch';
import * as React from 'react';

import withRedux from 'next-redux-wrapper';
import initStore from '../store/store';
import GlobalLayout from '../layout/GlobalLayout';

import App from '../src/App';

const Index = () => (
  <GlobalLayout>
    <App number={2} />
  </GlobalLayout>
);

export default withRedux(initStore)(Index);
