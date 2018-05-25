import { ADD_ERROR, REMOVE_ERROR } from '../actionTypes';

export default (state = { message: null }, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return action.error.message;
    case REMOVE_ERROR:
      return null;
    default:
      return state;
  }
};
