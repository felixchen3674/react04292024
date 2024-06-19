import { TOGGLE_THEME, ToggleAction } from "../actions/themeAction";
export type ThemeType = "black" | "light";
const themeState: ThemeType = "black";

export default function themeReducer(state = themeState, action: ToggleAction) {
  switch (action.type) {
    case TOGGLE_THEME:
      return state === "black" ? "light" : "black";
    default:
      return state;
  }
}
