import React from "react";

export class Age extends React.Component {
  render() {
    return (
      <>
        <div>
          {this.props.age > 18 && (
            <p>La tua età {this.props.age} è maggiore di 18</p>
          )}
        </div>
        <div>
          {this.props.age < 18 && (
            <p>La tua età {this.props.age} è minore di 18</p>
          )}
        </div>
      </>
    );
  }
}
