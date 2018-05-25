import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { vote } from '../store/actions';

const Poll = ({ poll, vote }) => {
  const answers =
    poll.options &&
    poll.options.map(option => (
      <button
        onClick={() => vote(poll._id, { answer: option.option })}
        key={option._id}>
        {option.option} : {option.votes}
      </button>
    ));

  console.log('Poll Component: ', poll);
  console.log('Poll component: ', poll.options);
  return (
    <div>
      <h3>{poll.question}</h3>
      <Fragment>{answers}</Fragment>
    </div>
  );
};

export default connect(
  store => ({
    poll: store.currentPoll,
  }),
  { vote },
)(Poll);
