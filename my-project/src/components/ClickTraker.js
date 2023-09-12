import React from "react";

export class ClickTraker extends React.Component {
  state = {
    lastButton: "",
  };

  handleCheckButton = (event) => {
    this.setState((state) => {
      return {
        lastButton: (state.lastButton = event.target.name),
      };
    });
  };
  render() {
    return (
      <div>
        <h1>Press Last Button: {this.state.lastButton}</h1>
        <button onClick={this.handleCheckButton} name="First Button">
          First Button
        </button>
        <button onClick={this.handleCheckButton} name="Second Button">
          Second Button
        </button>
        <button onClick={this.handleCheckButton} name="Third Button">
          Third Button
        </button>
      </div>
    );
  }
}
