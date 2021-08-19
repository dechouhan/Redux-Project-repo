import { combineReducers } from "redux";
import Comments from "./commentReducer";
import Members from "./memberReducer";
import Posts from "./postReducer";
import Tasks from "./taskReducer";
import Users from "./userReducer";

const rootReducer = combineReducers({
  Users,
  Members,
  Posts,
  Comments,
  Tasks,
});

export default rootReducer;
