const redux = require("redux");
const createStore = redux.createStore;
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
const combineReducer = redux.combineReducers;
const reduxlogger = require("redux-logger");
const applyMiddleware = redux.applyMiddleware;
const logger = reduxlogger.createLogger();

// {
//   type: BUY_CAKE,
//   info: "First Redux Action"
// }
//action is a object with type property

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux Action",
  };
}
function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "First Redux Action",
  };
}
//action creator is a function return a action

//reducer is a function (preState,action)=>newState

const initialState = {
  numberOfCakes: 10,
  numberOfIceCream: 20,
};
//preState is a object;

const initialCakeState = {
  numberOfCakes: 10,
};
const initialIceCreamState = {
  numberOfIceCream: 20,
};
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return initialCakeState;
  }
};
const iceReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      };
    default:
      return initialIceCreamState;
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      };
    default:
      return initialState;
  }
};

const rootReducer = combineReducer({
  cake: cakeReducer,
  iceCream: iceReducer,
});
// combine reducer will make both state nested in a object and each key represent one state

const store = createStore(rootReducer, applyMiddleware(logger));
const unsubscribe = store.subscribe(() => {});

// const store = createStore(reducer);
console.log("initialState", store.getState());
// const unsubscribe = store.subscribe(() =>
//   console.log("updateState", store.getState())
// );
//subscribe is used to test and minitor the state changing. It will run everytime when state changing.

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
//buyCake() is a function return a object that represent an action

unsubscribe();
store.dispatch(buyCake());
// recall the function again will unsubsribe it to prevent memory leak
