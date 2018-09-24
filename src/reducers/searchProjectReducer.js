import { SEARCH_PROJECT } from "../actions/types";

const initialState = "";

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_PROJECT:
      return action.payload;
    default:
      return state;
  }
}
