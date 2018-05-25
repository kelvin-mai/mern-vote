import API from '../../services/api';
import { SET_POLLS } from '../actionTypes';
import { addError, removeError } from './error';

export const setPolls = polls => {
  return {
    type: SET_POLLS,
    polls,
  };
};

export const getPolls = () => {
  return async dispatch => {
    try {
      const polls = await API.call('get', `polls`);
      dispatch(setPolls(polls));
      dispatch(removeError());
    } catch (err) {
      dispatch(addError(err.message));
    }
  };
};
