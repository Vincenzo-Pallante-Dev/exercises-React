import React from "react";

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <p>Your age is {this.props.age}</p>
      </div>
    );
  }
}
