import { Component, ReactNode, useState } from "react";
// import Checkbox from "../ControlledComponents/Checkbox";
// import RadioGroup from "../ControlledComponents/RadioGroup";
// import Select from "../ControlledComponents/Select";
import { Checkbox } from "../ControlledComponents/Checkbox";
import { RadioGroup } from "../ControlledComponents/RadioGroup";
import { Select } from "../ControlledComponents/Select";

type TodoType = {
  title: string;
};

// export default function TodoListApp() {
//   const [todo, setTodo] = useState<TodoType[]>([]);
//   const [title, setTitle] = useState<string>("");

//   const [isEditedIndex, setIsEditedIndex] = useState<number | null>(null);
//   const [editedInput, setEditedInput] = useState<string>("");

//   function handleInput() {
//     if (title === "") {
//       return;
//     }
//     setTodo((t) => [...t, { title: title }]);
//     setTitle(() => "");
//   }
//   function handleDelete(index: number) {
//     setTodo((t) => t.filter((_, i) => i !== index));
//   }
//   function handleEdit(item: TodoType, index: number) {
//     setIsEditedIndex(index);
//     setEditedInput(item.title);
//   }
//   function handleSave(index: number) {
//     const newTodo: TodoType[] = [...todo];
//     newTodo[index].title = editedInput;
//     setTodo([...newTodo]);
//     setIsEditedIndex(null);
//   }
//   return (
//     <div>
//       <h1>To Do list</h1>
//       <input
//         value={title}
//         placeholder="Add Todo-list title"
//         onChange={(e) => setTitle((prev) => (prev = e.target.value))}
//       ></input>
//       <button onClick={handleInput}>Add</button>
//       <ul>
//         {todo &&
//           todo.map((item, index) => {
//             return (
//               <div key={index}>
//                 {isEditedIndex === index ? (
//                   <div>
//                     <input
//                       value={editedInput}
//                       onChange={(e) => setEditedInput(e.target.value)}
//                     ></input>
//                     <button onClick={() => handleSave(index)}>save</button>
//                   </div>
//                 ) : (
//                   <li>
//                     {item.title}
//                     <button onClick={() => handleDelete(index)}>Delete</button>
//                     <button onClick={() => handleEdit(item, index)}>
//                       Edit
//                     </button>
//                   </li>
//                 )}
//                 <Checkbox />
//                 <RadioGroup />
//                 <Select />
//               </div>
//             );
//           })}
//       </ul>
//     </div>
//   );
// }

interface StateType {
  todo: TodoType[];
  title: string;
  isEditedIndex: number | null;
  editedInput: string;
}
export class TodoListApp extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      todo: [],
      title: "",
      isEditedIndex: null,
      editedInput: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleInput() {
    const { todo, title } = this.state;
    if (title === "") {
      return;
    }
    this.setState((prevState: { todo: TodoType[] }) => ({
      todo: [...prevState.todo, { title: title }],
      title: "",
    }));
  }

  handleDelete(index: number) {
    this.setState((pre) => ({
      todo: pre.todo.filter((_: TodoType, i: number) => i !== index),
    }));
  }
  handleEdit(item: TodoType, index: number) {
    this.setState({
      isEditedIndex: index,
      editedInput: item.title,
    });
  }
  handleSave(index: number) {
    const { todo, editedInput } = this.state;
    const newTodo: TodoType[] = [...todo];
    newTodo[index].title = editedInput;
    this.setState({
      todo: newTodo,
      isEditedIndex: null,
    });
  }

  render(): ReactNode {
    const { todo, title, isEditedIndex, editedInput } = this.state;
    return (
      <div>
        <h1>To Do list</h1>
        <input
          value={title}
          placeholder="Add Todo-list title"
          onChange={(e) => this.setState({ title: e.target.value })}
        ></input>
        <button onClick={this.handleInput}>Add</button>
        <ul>
          {todo &&
            todo.map((item: TodoType, index: number) => {
              return (
                <div key={index}>
                  {isEditedIndex === index ? (
                    <div>
                      <input
                        value={editedInput}
                        onChange={(e) =>
                          this.setState({ editedInput: e.target.value })
                        }
                      ></input>
                      <button onClick={() => this.handleSave(index)}>
                        save
                      </button>
                    </div>
                  ) : (
                    <li>
                      {item.title}
                      <button onClick={() => this.handleDelete(index)}>
                        Delete
                      </button>
                      <button onClick={() => this.handleEdit(item, index)}>
                        Edit
                      </button>
                    </li>
                  )}
                  <Checkbox />
                  <RadioGroup />
                  <Select />
                </div>
              );
            })}
        </ul>
      </div>
    );
  }
}
