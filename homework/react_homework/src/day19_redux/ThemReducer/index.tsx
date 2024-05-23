import { TOGGLE_THEME } from "../constant";

export type ThemeState = "light" | "dark";

export const toggleTheme = () => {
  console.log("toggleTheme action dispatched");
  type: TOGGLE_THEME;
};

const initialState: ThemeState = "light";

export const themReducer = (
  state: ThemeState = initialState,
  action: { type: string }
): ThemeState => {
  switch (action.type) {
    case TOGGLE_THEME:
      return state === "light" ? "dark" : "light";
    default:
      return state;
  }
};
