import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPolls, getCurrentPoll, getUserPolls } from '../store/actions';

class Polls extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }
  componentDidMount() {
    console.log(this.props.polls);
    this.props.getPolls();
    console.log(this.props.polls);
  }

  handleSelect(id) {
    this.props.getCurrentPoll(id);
    this.props.history.push('/poll');
  }

  render() {
    const polls = this.props.polls.map(poll => (
      <div onClick={() => this.handleSelect(poll._id)} key={poll._id}>
        {poll.question}
      </div>
    ));
    console.log('Polls Component: ', this.props.polls);
    return (
      <div>
        <button onClick={this.props.getPolls}>All polls</button>
        <button onClick={this.props.getUserPolls}>My polls</button>
        {polls}
      </div>
    );
  }
}

export default connect(
  store => ({
    polls: store.polls,
  }),
  { getPolls, getCurrentPoll, getUserPolls },
)(Polls);
