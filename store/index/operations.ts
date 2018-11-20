import actions from './actions';

const add = () => actions.add;

const update = (value) => (dispatch) => {
  dispatch(actions.update(value));
};

export default {
  add,
  update
};
