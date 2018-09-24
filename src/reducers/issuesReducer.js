import { FETCH_ISSUES } from "../actions/types";

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ISSUES:
      return [].concat.apply([], action.payload);
    default:
      return state;
  }
}
