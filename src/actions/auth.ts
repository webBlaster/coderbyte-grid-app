import {
  LOGIN_USER_FAILED,
  LOGIN_USER_SUCCESSFUL,
  USERNAME,
  PASSWORD,
  LOGOUT_USER,
} from "../constants";

// login user
export const login = (
  name: string,
  password: string,
  dispatch: any,
  history: any
) => {
  if (name === USERNAME && password === PASSWORD) {
    dispatch({ type: LOGIN_USER_SUCCESSFUL });
    history.push("/dashboard");
    return;
  }
  dispatch({ type: LOGIN_USER_FAILED });
};

// logout user
export const logout = (dispatch: any) => {
  dispatch({ type: LOGOUT_USER });
};
