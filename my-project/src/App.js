import React from "react";
import { Welcome } from "./components/Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name={"Francesco"} />
      </div>
    );
  }
}
