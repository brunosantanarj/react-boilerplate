import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

declare global {
  interface Window { devToolsExtension: any; }
}

const enhancers = compose(typeof window !== 'undefined' && process.env.NODE_ENV !== 'production' ? window.devToolsExtension && window.devToolsExtension() : f => f);

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default () => createStoreWithMiddleware(rootReducer, enhancers);
