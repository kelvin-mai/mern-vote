import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const DEFAULT_STATE = {
  polls: [],
  currentPoll: {
    _id: 'aoeu',
    options: [],
    question: 'aaoeu',
  },
};

export const store = createStore(
  rootReducer,
  DEFAULT_STATE,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
