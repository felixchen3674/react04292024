import {
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  SET_ITEM,
  addItem,
  deleteItem,
  editItem,
  setItem,
  todoAction,
} from "../actions/todoAction";

import axios from "axios";

export interface todoType {
  _id: string;
  task: string;
  completed: boolean;
  date: string;
  description: string;
}
const todoState: todoType[] = [];

export default function todoReducer(state = todoState, action: todoAction) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case EDIT_ITEM:
      return state.map((item) => {
        if (item._id === action.payload) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    case DELETE_ITEM:
      const newState = state.filter((item) => item._id !== action.payload);
      return newState;
    case SET_ITEM:
      return action.payload;
    default:
      return state;
  }
}

export const fetchData = () => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3000/todos");
    const res = await response.json();
    dispatch(setItem(res));
  } catch (err) {
    console.log(err);
  }

  // axios
  //   .get("http://localhost:3000/todos")
  //   .then((response) => {
  //     const data = response.data;
  //     console.log(data, "data");
  //     dispatch(setItem(data));
  //   })
  //   .catch((err) => console.log(err));
};

export const AddData = (newItem: todoType) => async (dispatch) => {
  try {
    console.log(newItem);
    const response = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });
    const res = await response.json();
    console.log(res);
    dispatch(addItem(res.todo));
  } catch (err) {
    console.log(err);
  }
};

export const EditData =
  (id: string, completed: boolean) => async (dispatch) => {
    try {
      console.log(id, "id");
      const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: !completed }),
      });
      const res = await response.json();
      dispatch(editItem(res._id));
    } catch (err) {
      console.log(err);
    }
  };

export const DeleteData = (id: string) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    console.log(res);
    dispatch(deleteItem(res.todo._id));
  } catch (err) {
    console.log(err);
  }
};
