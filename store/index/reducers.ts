import types from './types';

const reducers = (state = {}, action) => {
  switch (action.type) {
  case types.ADD: return true;
  case types.UPDATE: {
    return {...action.payload };
  }
  default: return state;
  }
};

export default reducers;
