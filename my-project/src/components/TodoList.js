import React from "react";

export class TodoLIst extends React.Component {
  state = {
    todos: ["Go to the movie", "Water the plants", "Sleep"],
    list: "",
  };

  handleInput = (event) => {
    const list = event.target.name;
    const value = event.target.value;

    this.setState({
      [list]: value,
    });
  };

  handleAddTodo = () => {
    const todos = this.state.todos;
    const list = this.state.list;

    todos.push(list);

    this.setState({
      todos: todos,
      list: "",
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List:</h1>
        <input
          name="list"
          value={this.state.list}
          placeholder="List"
          onChange={this.handleInput}
        ></input>
        <button onClick={this.handleAddTodo}>Aggiungi compito</button>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={todo + index}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}
