import React from "react";
import { UncontrolledLogin } from "./components/UncontrolledLogin";

export class App extends React.Component {
  render() {
    return (
      <UncontrolledLogin
        onLogin={() => {
          alert("Vuoi inviare i tuoi dati?");
        }}
      />
    );
  }
}
