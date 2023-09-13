import React from "react";
import { Login } from "./components/Login";

export class App extends React.Component {
  render() {
    return (
      <Login
        onLogin={() => {
          alert("Ciao Francesco!!");
        }}
      />
    );
  }
}
