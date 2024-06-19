export const TOGGLE_THEME = "TOGGLE_THEME";

export interface ToggleAction {
  type: typeof TOGGLE_THEME;
}

export const toggle = (): ToggleAction => {
  return { type: TOGGLE_THEME };
};
