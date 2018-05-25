import React, { Component } from 'react';
import { connect } from 'react-redux';

import Poll from '../components/Poll';

import { getPolls } from '../store/actions';

class Polls extends Component {
  componentDidMount() {
    console.log(this.props.polls);
    this.props.getPolls();
    console.log(this.props.polls);
  }

  render() {
    const polls = this.props.polls.map(poll => (
      <Poll poll={poll} key={poll._id} />
    ));
    console.log('Polls Component: ', this.props.polls);
    return <div>{polls}</div>;
  }
}

export default connect(
  store => ({
    polls: store.polls,
  }),
  { getPolls },
)(Polls);
