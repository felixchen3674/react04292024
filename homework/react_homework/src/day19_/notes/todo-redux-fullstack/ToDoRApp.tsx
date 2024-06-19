import React, { Component } from "react";
import { fetchData } from "./redux/reducer/todoReducer";
import { connect } from "react-redux";
import AddInput from "./components/AddInput";
import TodoList from "./components/TodoList";

const mapStatesToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { fetch: () => dispatch(fetchData()) };
};

class ToDoRApp extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(): void {
    this.props.fetch();
  }
  render() {
    return (
      <div>
        <AddInput />
        <TodoList />
      </div>
    );
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(ToDoRApp);
