import React, { Fragment } from 'react';
import decode from 'jwt-decode';
import { Provider } from 'react-redux';

import { store } from '../store';
import { setToken, setCurrentUser, addError } from '../store/actions';

import Auth from './Auth';
import Poll from './Poll';

if (localStorage.jwtToken) {
  setToken(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
  } catch (err) {
    store.dispatch(setCurrentUser({}));
    store.dispatch(addError(err));
  }
}

const UITest = () => (
  <Provider store={store}>
    <Fragment>
      <h3>Testing Auth Component: </h3>
      <Auth />
      <hr />
      <br />
      <h3>Testing Poll Component: </h3>
      <Poll />
      <hr />
      <br />
    </Fragment>
  </Provider>
);

export default UITest;
