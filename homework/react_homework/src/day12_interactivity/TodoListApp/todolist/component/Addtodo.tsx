import React, { Component } from "react";
import { TodoType } from "./TodoList";

interface StateType1 {
  input: string;
}

interface Addprops {
  todos: TodoType[];
  handleAdd: (todo: TodoType) => void;
}

export default class Addtodo extends Component<Addprops, StateType1> {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }
  handleAddBtn = () => {
    const { todos, handleAdd } = this.props;
    const input = this.state.input;
    const id = todos[todos.length - 1].id + 1;
    const newTodo = { id, name: input, isCompleted: false };
    handleAdd(newTodo);
    this.setState({ input: "" });
  };

  handleOnChange = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { input } = this.state;
    return (
      <div>
        <input type="text" value={input} onChange={this.handleOnChange} />
        <button onClick={this.handleAddBtn}>Add</button>
      </div>
    );
  }
}
