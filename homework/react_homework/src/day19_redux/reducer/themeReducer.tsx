import { THEME_TOGGLE } from "../constant";

export type ThemeState = "light" | "dark";

const initialState: ThemeState = "light";

export const themeReducer = (
  state: ThemeState = initialState,
  action: { type: string }
): ThemeState => {
  switch (action.type) {
    case THEME_TOGGLE:
      return state === "light" ? "dark" : "light";
    default:
      return state;
  }
};

export const toggleTheme = () => {
  return { type: THEME_TOGGLE };
};
