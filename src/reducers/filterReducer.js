import { GET_FILTER_IS_CLOSED, GET_FILTER_IS_TOP } from "../actions/types";

const initialState = {
  isClosed: false,
  isTop: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FILTER_IS_CLOSED:
      return { ...state, isClosed: action.payload };
    case GET_FILTER_IS_TOP:
      return { ...state, isTop: action.payload };
    default:
      return state;
  }
}
