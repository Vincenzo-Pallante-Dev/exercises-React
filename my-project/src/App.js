import React from "react";
import { ClickCounter } from "./components/ClickCounter";

export class App extends React.Component {
  render() {
    return (
      <ClickCounter
        onCounterChange={(count) => {
          console.log("The currunt value is: ", count);
        }}
      />
    );
  }
}
