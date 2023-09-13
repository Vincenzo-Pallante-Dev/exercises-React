import React, { createRef } from "react";

export class UncontrolledLogin extends React.Component {
  _formRef = createRef();

  handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    console.log({
      username,
      password,
    });
  };

  handleClear = () => {
    this._formRef.current.elements.username.value = "";
    this._formRef.current.elements.password.value = "";
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} ref={this._formRef}>
        <input name="username" placeholder="Username"></input>
        <input name="password" type="password" placeholder="Password"></input>
        <button type="submit" onClick={this.props.onLogin}>
          Login
        </button>
        <button onClick={this.handleClear}>Clear</button>
      </form>
    );
  }
}
