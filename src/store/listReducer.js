const initialState = {
  list: '',
  id: 0
};
export const actionTypes = {
  getlist: 'list.getlist',
};
export default function bookInfoReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.getlist:
      return initialState;
    default:
      return { ...state };
  }
}
