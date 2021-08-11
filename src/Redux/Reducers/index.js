import { combineReducers } from "redux";
import Members from "./memberReducer";
import Users from "./userReducer";

const rootReducer = combineReducers({
  Users,
  Members,
});

export default rootReducer;
