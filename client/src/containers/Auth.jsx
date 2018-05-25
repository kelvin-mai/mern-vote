import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authUser, logout } from '../store/actions/auth';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    const { username, password } = this.state;
    e.preventDefault();
    console.log('Auth Component: ', username, password);
    this.props.authUser('login', { username, password });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.username}
            name="username"
            onChange={this.handleChange}
          />
          <input
            type="password"
            value={this.state.password}
            name="password"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <p>Logged in as: {this.props.auth && this.props.auth.user.username}</p>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}

export default connect(
  store => ({
    auth: store.auth,
    errors: store.errors,
  }),
  { authUser, logout },
)(Auth);
