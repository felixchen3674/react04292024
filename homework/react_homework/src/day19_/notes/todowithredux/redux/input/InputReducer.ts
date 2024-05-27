import { INPUTACTIONTYPE } from "./InputActionTypes";

type InputType = string;

const initialState: InputType = "";

type InputActionType = "SET_INPUT";

interface InputAction {
  type: InputActionType;
  payload: InputType;
}

export default function InputReducer(
  state = initialState,
  action: InputAction
) {
  switch (action.type) {
    case INPUTACTIONTYPE.SET_INPUT:
      return action.payload;
    default:
      return state;
  }
}
