import { combineReducers } from 'redux';

import error from './error';
import polls from './polls';

export default combineReducers({
  error,
  polls,
});
