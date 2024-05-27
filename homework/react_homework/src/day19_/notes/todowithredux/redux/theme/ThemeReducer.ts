import { CHANGE_THEME } from "./ThemeActionType";

export type ThemeType = "light" | "black";
type ThemeActionType = "CHANGE_THEME";

const InitialState: ThemeType = "light";

interface ThemeAction {
  type: ThemeActionType;
  payload: ThemeType;
}

export default function ThemeReducer(
  state = InitialState,
  action: ThemeAction
) {
  switch (action.type) {
    case CHANGE_THEME:
      return action.payload;
    default:
      return state;
  }
}
