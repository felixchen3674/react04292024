export default function countReducer(
  state = {
    value: 0,
  },
  action: any
) {
  switch (action.type) {
    case "add":
      return {
        value: state.value + 1,
      };
    case "minus":
      return {
        value: state.value - 1,
      };
    default:
      return state;
  }
}
