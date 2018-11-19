export default function (state = [{ isMobile: true }], action) {
  const { type, payload } = action;
  switch (type) {
  case 'IS_MOBILE_FULFILLED':
    return {
      ...state,
      isMobile: payload
    };
  default:
    return state;
  }
}
