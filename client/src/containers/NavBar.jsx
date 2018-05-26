import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../store/actions';

const Navbar = ({ auth, logout }) => (
  <nav>
    <p>Logged in as: {auth.isAuthenticated && auth.user.username}</p>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      {!auth.isAuthenticated && (
        <Fragment>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </Fragment>
      )}
      {auth.isAuthenticated && (
        <li>
          <Link to="/poll/new">New Poll</Link>
        </li>
      )}
      <li>
        <a onClick={logout}>Logout</a>
      </li>
    </ul>
  </nav>
);

export default connect(
  store => ({
    auth: store.auth,
  }),
  { logout },
)(Navbar);
