import {
  FetchUserFailure,
  FetchUserRequest,
  FetchUserSuccess,
} from "./userAction";

export const reducer = (state = initialState, action) => {
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

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(FetchUserRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(FetchUserSuccess(users));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(FetchUserFailure(errorMessage));
      });
  };
};
