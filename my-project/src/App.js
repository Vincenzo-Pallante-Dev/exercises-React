import React from "react";
import { Welcome } from "./components/Welcome";
import { Hello } from "./components/Hello";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello name={"Vincenzo"} />
        <Welcome />
      </div>
    );
  }
}
