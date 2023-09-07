import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  render() {
    return (
      <div>{this.props.age > 18 ? <Age /> : <p>non hai piu di 18 anni</p>}</div>
    );
  }
}
