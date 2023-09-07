import React from "react";
import { Age } from "./Age";
import { Hello } from "./Hello";

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        {this.props.name === "John" && <Hello name={this.props.name} />}
        {this.props.age > 18 && this.props.age < 65 && (
          <Age age={this.props.age} />
        )}
      </div>
    );
  }
}
