import { addError, removeError } from './errors';
import { SET_CURRENT_USER } from '../actionTypes';
import API from '../../services/api';

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    user,
  };
};

export const setToken = token => {
  API.setToken(token);
};

export const logout = () => {
  return dispatch => {
    localStorage.clear();
    API.setToken(null);
    dispatch(setCurrentUser({}));
  };
};

export const authUser = (type, userData) => {
  return async dispatch => {
    try {
      const { token, ...user } = await API.call(
        'post',
        `auth/${type}`,
        userData,
      );
      localStorage.setItem('jwtToken', token);
      dispatch(setCurrentUser(user));
      dispatch(removeError());
    } catch (err) {
      dispatch(addError(err.message));
    }
  };
};
