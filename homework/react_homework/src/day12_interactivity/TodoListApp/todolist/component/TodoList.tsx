import React, { Component } from "react";
import { todosData } from "./TodosData";
import Addtodo from "./Addtodo";
import CheckBox from "./CheckBox";

export type TodoType = {
  id: number;
  name: string;
  isCompleted: boolean;
};
interface StateType {
  todos: TodoType[];
}
export default class TodoList extends Component<{}, StateType> {
  constructor(props) {
    super(props);
    this.state = {
      todos: todosData,
    };
  }
  handleDelete = (id: number) => {
    const { todos } = this.state;
    const newTodo = todos.filter((item) => item.id !== id);
    this.setState({ todos: newTodo });
  };

  handleEdit = (id: number) => {
    const { todos } = this.state;
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        const newTodo = { ...item };
        newTodo.isCompleted = !item.isCompleted;
        return newTodo;
      } else {
        return item;
      }
    });
    this.setState({ todos: newTodos });
  };
  handleAdd = (newTodo) => {
    this.setState((pre) => ({ todos: [...pre.todos, newTodo] }));
  };
  render() {
    const { todos } = this.state;
    return (
      <div>
        <Addtodo todos={todos} handleAdd={this.handleAdd} />
        <ul>
          {todos &&
            todos.map((item) => {
              const { id } = item;
              return (
                <div key={id}>
                  <li>
                    {item.name} status:
                    {item.isCompleted ? "completed" : "imCompleted"}
                  </li>
                  <CheckBox todo={item} onChange={() => this.handleEdit(id)} />
                  <button onClick={() => this.handleDelete(id)}>delete</button>
                </div>
              );
            })}
        </ul>
      </div>
    );
  }
}
