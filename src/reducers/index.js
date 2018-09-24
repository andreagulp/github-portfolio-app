import { combineReducers } from "redux";
import issuesReducer from "./issuesReducer";
import projectIdReducer from "./projectIdReducer";

export default combineReducers({
  issues: issuesReducer,
  projectId: projectIdReducer
});
