import { GET_SORT_FIELD, GET_SORT_DIRECTION } from "../actions/types";

const initialState = {
  field: "title",
  direction: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SORT_FIELD:
      return { ...state, field: action.payload };
    case GET_SORT_DIRECTION:
      return { ...state, direction: action.payload };
    default:
      return state;
  }
}
