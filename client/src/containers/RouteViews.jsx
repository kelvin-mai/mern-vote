import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import { getCurrentPoll } from '../store/actions';
import TestPage from '../pages/TestPage';
import AuthPage from '../pages/AuthPage';
import PollPage from '../pages/PollPage';
import CreatePollPage from '../pages/CreatePollPage';

const RouteViews = ({ getCurrentPoll, auth }) => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/test" />} />
    <Route
      exact
      path="/login"
      render={() => (
        <AuthPage authType="login" isAuthenticated={auth.isAuthenticated} />
      )}
    />
    <Route
      exact
      path="/register"
      render={() => (
        <AuthPage authType="register" isAuthenticated={auth.isAuthenticated} />
      )}
    />
    {/* <Route exact path="/poll" render={() => <PollPage />} /> */}
    <Route
      exact
      path="/poll/new"
      render={() => <CreatePollPage isAuthenticated={auth.isAuthenticated} />}
    />
    <Route
      exact
      path="/poll/:id"
      render={props => (
        <PollPage getPoll={id => getCurrentPoll(id)} {...props} />
      )}
    />
    <Route exact path="/test" render={() => <TestPage />} />
  </Switch>
);

export default withRouter(
  connect(
    store => ({
      auth: store.auth,
    }),
    { getCurrentPoll },
  )(RouteViews),
);
