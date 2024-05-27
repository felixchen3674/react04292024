// const redux = require("redux");
// const createStore = redux.createStore;
// const applyMiddleware = redux.applyMiddleware;

// const thunkMiddleware = require("redux-thunk").default;
// const axios = require("axios");

// const initialState = {
//   loading: false,
//   data: [],
//   error: "",
// };

// const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
// const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";

// const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

// const FetchUserRequest = () => {
//   return {
//     type: FETCH_USER_REQUEST,
//   };
// };
// const FetchUserSuccess = (users) => {
//   return {
//     type: FETCH_USER_SUCCESS,
//     payload: users,
//   };
// };
// const FetchUserFailure = (error) => {
//   return {
//     type: FETCH_USER_FAILURE,
//     payload: error,
//   };
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_USER_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case FETCH_USER_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         error: "",
//         data: action.payload,
//       };
//     case FETCH_USER_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         data: [],
//         error: action.payload,
//       };
//   }
// };

// const fetchUser = () => {
//   return function (dispatch) {
//     dispatch(FetchUserRequest());
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         const users = response.data.map((user) => user.id);
//         dispatch(FetchUserSuccess(users));
//       })
//       .catch((error) => {
//         dispatch(FetchUserFailure(error.message));
//       });
//   };
// };
// const store = createStore(reducer, applyMiddleware(thunkMiddleware));
// store.subscribe(console.log(store.getState()));
// store.dispatch(fetchUser());
const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

const FetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const FetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

const FetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

const fetchUser = () => {
  return function (dispatch) {
    dispatch(FetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(FetchUserSuccess(users));
      })
      .catch((error) => {
        dispatch(FetchUserFailure(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => console.log(store.getState()));

store.dispatch(fetchUser());
//using redux-think will let dispatch to accept a function instead of accepting object, it will acutually take object in the fetchuser function
