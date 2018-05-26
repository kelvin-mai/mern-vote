import React from 'react';
import { Redirect } from 'react-router-dom';

import CreatePoll from '../containers/CreatePoll';
import ErrorMessage from '../containers/ErrorMessage';

const CreatePollPage = ({ isAuthenticated }) => {
  if (!isAuthenticated) return <Redirect to="/login" />;

  return (
    <div>
      <ErrorMessage />
      <CreatePoll />
    </div>
  );
};

export default CreatePollPage;
