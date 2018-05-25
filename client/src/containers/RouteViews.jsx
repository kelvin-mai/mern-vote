import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import UITest from './UITest';
import AuthPage from '../pages/AuthPage';
import PollPage from '../pages/PollPage';

const RouteViews = props => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/test" />} {...props} />
      <Route
        exact
        path="/login"
        render={() => (
          <AuthPage
            authType="login"
            isAuthenticated={props.auth.isAuthenticated}
          />
        )}
        {...props}
      />
      <Route
        exact
        path="/register"
        render={() => (
          <AuthPage
            authType="register"
            isAuthenticated={props.auth.isAuthenticated}
          />
        )}
        {...props}
      />
      <Route exact path="/poll" render={() => <PollPage />} {...props} />
      <Route exact path="/test" render={() => <UITest />} {...props} />
    </Switch>
  );
};

export default withRouter(connect(store => ({ auth: store.auth }))(RouteViews));
