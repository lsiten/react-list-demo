import { actionTypes as bookInfoActionTypes } from './listReducer';
import api from '../api';

export const getList = bookId => async (dispatch, getState) => {
  try {
    const response = await api.bookGet({ book_id: bookId });
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
