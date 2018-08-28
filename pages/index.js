import 'isomorphic-fetch';
import React from 'react';

import withRedux from 'next-redux-wrapper';
import initStore from '../container/store';
import GlobalLayout from '../layout/GlobalLayout';

const Index = () => (
	<GlobalLayout>
		Página inicial /pages/index.js
	</GlobalLayout>
);

export default withRedux(initStore)(Index);
