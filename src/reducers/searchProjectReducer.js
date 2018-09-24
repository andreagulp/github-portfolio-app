import { GET_SEARCH_KEYWORD } from "../actions/types";

const initialState = "";

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH_KEYWORD:
      return action.payload;
    default:
      return state;
  }
}
