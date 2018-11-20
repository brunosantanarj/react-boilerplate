import types from './types';

const add = () => ({
  type: types.ADD
});

const remove = () => ({
  type: types.REMOVE
});

const update = (value) => ({
  type: types.UPDATE,
  payload: value
});

export default {
  add,
  remove,
  update
};
