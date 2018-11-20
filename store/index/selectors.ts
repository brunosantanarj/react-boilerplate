const getIndexReducer = (state) => state.indexReducer;

const getName = (state) => getIndexReducer(state).name;

export default {
  getName
};
