import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        {/* In questo caso la props age esite */}
        {this.props.age ? <Age /> : <p>Non esiste nessuna props.age</p>}
        {/* In questo caso la props age "non esiste" */}
        {!this.props.age ? <Age /> : <p>Non esiste nessuna props.age</p>}
      </div>
    );
  }
}
