import React, { Fragment } from 'react';

const Poll = ({ poll }) => {
  const answers = poll.options.map(option => (
    <button key={option._id}>{option.option}</button>
  ));

  console.log('Poll component: ', poll.options);
  return (
    <div>
      <h3>{poll.question}</h3>
      <Fragment>{answers}</Fragment>
    </div>
  );
};

export default Poll;
