import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPolls, getCurrentPoll } from '../store/actions';

class Polls extends Component {
  componentDidMount() {
    console.log(this.props.polls);
    this.props.getPolls();
    console.log(this.props.polls);
  }

  render() {
    const polls = this.props.polls.map(poll => (
      <div onClick={() => this.props.getCurrentPoll(poll._id)} key={poll._id}>
        {poll.question}
      </div>
    ));
    console.log('Polls Component: ', this.props.polls);
    return <div>{polls}</div>;
  }
}

export default connect(
  store => ({
    polls: store.polls,
  }),
  { getPolls, getCurrentPoll },
)(Polls);
