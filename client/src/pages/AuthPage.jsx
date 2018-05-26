import React from 'react';
import { Redirect } from 'react-router-dom';

import Auth from '../containers/Auth';
import ErrorMessage from '../containers/ErrorMessage';

const AuthPage = ({ authType, isAuthenticated }) => {
  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <div>
      <ErrorMessage />
      <Auth authType={authType} />
    </div>
  );
};

export default AuthPage;
