import React from "react";

export class Age extends React.Component {
  render() {
    return (
      <>
        {this.props.age > 18 && this.props.age < 65 && (
          <p>La tua eta è {this.props.age}</p>
        )}
      </>
    );
  }
}
