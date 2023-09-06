import React from "react";

export class Age extends React.Component {
  render() {
    return <>{this.props.age && <p>La tua è {this.props.age}</p>}</>;
  }
}
