import AuthReducer from "./auth";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: AuthReducer,
});

export default rootReducer;
