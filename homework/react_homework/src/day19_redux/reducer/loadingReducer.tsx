import { LOADING_START, LOADING_STOP } from "../constant";

export default function loadingReducer(isLoading = false, action) {
  switch (action.type) {
    case LOADING_START:
      return true;
    case LOADING_STOP:
      return false;
    default:
      return isLoading;
  }
}

export function startLoading() {
  return { type: LOADING_START };
}

export function stopLoading() {
  return { type: LOADING_STOP };
}
