import { CHANGE_THEME } from "./ThemeActionType";
import { ThemeType } from "./ThemeReducer";

export const themeAction = (status: ThemeType) => {
  return {
    type: CHANGE_THEME,
    payload: status,
  };
};
