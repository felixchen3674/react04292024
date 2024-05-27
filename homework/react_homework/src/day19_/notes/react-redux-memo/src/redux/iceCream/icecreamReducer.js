import { BUY_ICECREAM } from "./iceCreamType";

const initialState = {
  numberOfIcecream: 20,
};

const icecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numberOfIcecream: state.numberOfIcecream - 1 };
    default:
      return state;
  }
};

export default icecreamReducer;
