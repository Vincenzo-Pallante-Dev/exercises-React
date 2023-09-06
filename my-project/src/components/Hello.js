import React from "react";

export class Hello extends React.Component {
  render() {
    return (
      <div>
        <p>Hello, </p>
        <p>Hello, {this.props.name1}</p>
      </div>
    );
  }
}

//Puoi impostare un valore predefinito per la prop `name`?
//Risposta:
//si, posso impostare un valore predefinito per la prop "name"
Hello.defaultProps = {
  name1: "Vincenzo",
};

//Cosa succede se nessuna prop `name` viene passata al componente
//`Welcome`? Risposta: Se non passo nessuna prop "name" al componente, in
//questo caso mi stampa solo Hello
//<p>Hello, </p>
