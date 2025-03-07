import React, { Component } from "react";

export default class Hero extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      desc: "",
      todos: [],
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      id: Date.now(),
      title: this.state.title,
      desc: this.state.desc,
    };
    this.setState({
      title: "",
      desc: "",
      todos: [...this.state.todos, newTodo],
    });
  };
  handleDelete = (id) => {
    let todos = this.state.todos.filter((item) => item.id !== id);
    this.setState({ todos });
  };
  render() {
    return (
      <div>
        <form className="mx-auto container flex items-center justify-center" onSubmit={this.handleSubmit} action="">
          <input required
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
            type="text"
          />
          <input required
            value={this.state.desc}
            onChange={(e) => this.setState({ desc: e.target.value })}
            type="text"
          />
          <button type="submit">Submit</button>
        </form>
        <div>
          {this.state.todos?.map((todo) => (
            <div key={todo.id}>
              <h3>{todo.title}</h3>
              <p>{todo.desc}</p>
              <button onClick={() => this.handleDelete(todo.id)}>delete</button>
              <hr />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
