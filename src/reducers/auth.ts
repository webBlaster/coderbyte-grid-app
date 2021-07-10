import {
  LOGIN_USER_SUCCESSFUL,
  LOGIN_USER_FAILED,
  LOGOUT_USER
} from "../constants";

const initialState = {
  isAuthenticated: false,
};

interface action {
    type:string
}

const AuthReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESSFUL:
      return Object.assign({}, state, {
        isAuthenticated: true
      });
    case LOGIN_USER_FAILED:
      return Object.assign({}, state, {
        isAuthenticated: false
      });
    case LOGOUT_USER:
      return Object.assign({}, state, {
        isAuthenticated: false
      });
    default:
      return state;
  }
};

export default AuthReducer;