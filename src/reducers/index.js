import { combineReducers } from "redux";
import issuesReducer from "./issuesReducer";
import projectIdReducer from "./projectIdReducer";
import searchProjectReducer from "./searchProjectReducer";

export default combineReducers({
  issues: issuesReducer,
  projectId: projectIdReducer,
  keyword: searchProjectReducer
});
