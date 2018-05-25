import React from 'react';
import { connect } from 'react-redux';

const ErrorMessage = ({ error }) => {
  console.log('ErrorMessage Component: ', error);
  return <div>{error}</div>;
};

export default connect(store => ({ error: store.error }))(ErrorMessage);
