import React from "react";
import { Hello } from "./components/Hello";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello name={<strong>Vincenzo</strong>} />
      </div>
    );
  }
}
