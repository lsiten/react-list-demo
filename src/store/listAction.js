import { actionTypes as listActionTypes } from './listReducer';

export const deleteRow = (list) => async (dispatch, getState) => {
  dispatch({ type: listActionTypes.setList, payload: list })
};