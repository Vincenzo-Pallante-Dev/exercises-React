import React from "react";
import { Hello } from "./components/Hello";
import { Message } from "./components/Message";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Message />
      </div>
    );
  }
}
