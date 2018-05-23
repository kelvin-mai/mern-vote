import React, { Component } from 'react';
import decode from 'jwt-decode';
import { Provider } from 'react-redux';

import { store } from '../store';
import { setToken, setCurrentUser, addError } from '../store/actions';

if (localStorage.jwtToken) {
  setToken(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
  } catch (err) {
    store.dispatch(setCurrentUser({}));
    store.dispatch(addError(err));
  }
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>App works</div>
      </Provider>
    );
  }
}
