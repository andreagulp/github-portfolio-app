import { GET_PROJECT_ID } from "../actions/types";

const initialState = "";

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECT_ID:
      return action.payload;
    default:
      return state;
  }
}
