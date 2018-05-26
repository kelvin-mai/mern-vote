import React from 'react';

import Poll from '../containers/Poll';
import ErrorMessage from '../containers/ErrorMessage';

const PollPage = ({ match, getPoll, poll }) => {
  const host = window.location.href;
  getPoll(match.params.id);

  return (
    <div>
      <ErrorMessage />
      <Poll />
      <button onClick={() => console.log(host)}>Share</button>
    </div>
  );
};

export default PollPage;
