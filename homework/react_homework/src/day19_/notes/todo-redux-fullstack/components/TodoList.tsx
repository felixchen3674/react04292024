import { Component } from "react";
import CheckBox1 from "./CheckBox1";
import { DeleteData, EditData } from "../redux/reducer/todoReducer";
import { connect } from "react-redux";

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  handleOnChange = (id: string, completed: boolean) => {
    this.props.editItem(id, completed);
  };
  handleDelete = (id: string) => {
    this.props.deleteItem(id);
  };
  render() {
    const { todos } = this.props;
    return (
      <div>
        {todos &&
          todos.map((item) => {
            const { _id: id, task, completed } = item;
            return (
              <div key={id}>
                <h4>Todo Task: {task}</h4>
                <h4>Status : {completed ? "completed" : "imCompleted"}</h4>
                <CheckBox1
                  key={id}
                  checked={completed}
                  onChange={() => this.handleOnChange(id, completed)}
                />
                <button onClick={() => this.handleDelete(id)}>Delete</button>
              </div>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editItem: (id, completed) => dispatch(EditData(id, completed)),
    deleteItem: (id) => dispatch(DeleteData(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
