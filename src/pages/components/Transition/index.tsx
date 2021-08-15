import React from 'react';
import 'animate.css';
import { TransitionGroup } from 'react-transition-group';
class Transition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <TransitionGroup
          transitionEnter={true}
          transitionLeave={true}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionName="animate__animated"
        >
          {this.props.children}
        </TransitionGroup>
      </div>
    );
  }
}
export default Transition;
