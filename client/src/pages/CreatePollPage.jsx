import React from 'react';

import CreatePoll from '../containers/CreatePoll';
import ErrorMessage from '../containers/ErrorMessage';

const CreatePollPage = () => (
  <div>
    <ErrorMessage />
    <CreatePoll />
  </div>
);

export default CreatePollPage;
