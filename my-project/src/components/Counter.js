import React from "react";

export class Counter extends React.Component {
  state = {
    count: this.props.init,
  };

  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + this.props.increment,
        };
      });
    }, this.props.time);
  }

  render() {
    return <h1>Count: {this.state.count}</h1>;
  }
}
