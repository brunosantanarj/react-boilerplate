import 'isomorphic-fetch';
import React from 'react';

import withRedux from 'next-redux-wrapper';
import initStore from '../container/store';
import GlobalLayout from '../layout/GlobalLayout';

const Index = () => (
	<GlobalLayout>
		dfsaasdf
	</GlobalLayout>
);

export default withRedux(initStore)(Index);
