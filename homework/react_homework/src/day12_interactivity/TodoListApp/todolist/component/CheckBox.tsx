import React, { Component } from "react";
import { TodoType } from "./TodoList";

interface checkboxprops {
  todo: TodoType;
  onChange: () => void;
}

export default class CheckBox extends Component<checkboxprops> {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      todo: { isCompleted },
      onChange,
    } = this.props;

    return (
      <label>
        isCompleted:
        <input type="checkbox" checked={isCompleted} onChange={onChange} />
      </label>
    );
  }
}
