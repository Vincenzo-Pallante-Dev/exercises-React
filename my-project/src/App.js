import React from "react";
import { Counter } from "./components/Counter";

export class App extends React.Component {
  render() {
    return <Counter init={2} increment={2} time={2000} />;
  }
}
