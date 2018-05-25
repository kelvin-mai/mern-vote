import React from 'react';
import { Redirect } from 'react-router-dom';

import Poll from '../containers/Poll';
import ErrorMessage from '../containers/ErrorMessage';

const PollPage = () => (
  <div>
    <ErrorMessage />
    <Poll />
  </div>
);

export default PollPage;
