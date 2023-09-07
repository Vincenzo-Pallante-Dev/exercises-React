import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
  state = {
    count: this.props.init,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + this.props.increment,
        };
      });
    }, this.props.time);
  }

  render() {
    return <CounterDisplay count={this.state.count} />;
  }
}

Counter.defaultProps = {
  init: 2,
  increment: 2,
  time: 2000,
};
