import React, { Component } from "react";
import withFetch from "./withFetch";
class TodoListClass extends Component {
  render() {
    const { data, isLoading } = this.props;
    console.log(data, isLoading);

    return (
      <div>
        <h1>Todo List</h1>
        <div>
          {data.map((todo) => {
            return <div key={todo.id}>{todo.title}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default withFetch(TodoListClass, "https://jsonplaceholder.typicode.com/todos" );
