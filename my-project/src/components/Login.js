import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <input
          name="username"
          placeholder="Username"
          onChange={this.handleInput}
          value={this.state.username}
        ></input>
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={this.handleInput}
          value={this.state.password}
        ></input>
        <button
          type="submit"
          disabled={
            this.state.username === "" && this.state.password === ""
              ? true
              : false
          }
          onClick={this.props.onLogin}
        >
          Login
        </button>
      </div>
    );
  }
}
