import { combineReducers } from "redux";
import issuesReducer from "./issuesReducer";
import projectIdReducer from "./projectIdReducer";
import searchProjectReducer from "./searchProjectReducer";
import sortReducer from "./sortReducer";
import filterReducer from "./filterReducer";

export default combineReducers({
  issues: issuesReducer,
  projectId: projectIdReducer,
  keyword: searchProjectReducer,
  sortValue: sortReducer,
  filters: filterReducer
});
