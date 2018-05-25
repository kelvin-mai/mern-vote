import React from 'react';
import { connect } from 'react-redux';

const ErrorMessage = ({ error }) => {
  console.log(
    'ErrorMessage Component: ',
    error.message && error.message.message,
  );
  return <div>{error.message && error.message.message}</div>;
};

export default connect(store => ({ error: store.error }))(ErrorMessage);
