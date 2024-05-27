import { INPUTACTIONTYPE } from "./InputActionTypes";

const set = (name: string) => {
  return {
    type: INPUTACTIONTYPE.SET_INPUT,
    payload: name,
  };
};

const InputActions = {
  set,
};

export default InputActions;
