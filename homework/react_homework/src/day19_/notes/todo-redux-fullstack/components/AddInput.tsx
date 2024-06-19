import React, { Component, createRef, useRef } from "react";
import { connect } from "react-redux";
import { AddData } from "../redux/reducer/todoReducer";

class AddInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
  }
  handleAdd = (e) => {
    e.preventDefault();
    let input = this.inputRef.current?.value || "";
    if (input === "") {
      alert("please enter input");
      return;
    }

    const newItem = {
      task: input,
      completed: false,
      date: new Date().toLocaleDateString("en-CA"),
      description: "No Detail",
    };
    this.props.addItem(newItem);
    if (this.inputRef.current) this.inputRef.current.value = "";
  };
  render() {
    return (
      <div>
        <div className="AddInput">
          <input type="text" ref={this.inputRef} />
          <button onClick={this.handleAdd}>Add</button>
        </div>
      </div>
    );
  }
}

const mapStatesToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (newTodo) => dispatch(AddData(newTodo)),
  };
};

export default connect(mapStatesToProps, mapDispatchToProps)(AddInput);
