import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPolls, getUserPolls } from '../store/actions';

class Polls extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }
  componentDidMount() {
    const { getPolls } = this.props;
    getPolls();
  }

  handleSelect(id) {
    const { history } = this.props;
    history.push(`/poll/${id}`);
  }

  render() {
    const { getPolls, getUserPolls, auth } = this.props;

    const polls = this.props.polls.map(poll => (
      <div onClick={() => this.handleSelect(poll._id)} key={poll._id}>
        {poll.question}
      </div>
    ));

    return (
      <div>
        <button onClick={getPolls}>All polls</button>
        {auth.isAuthenticated && (
          <button onClick={getUserPolls}>My polls</button>
        )}
        {polls}
      </div>
    );
  }
}

export default connect(
  store => ({
    auth: store.auth,
    polls: store.polls,
  }),
  { getPolls, getUserPolls },
)(Polls);
