import {
  GET_FILTER_IS_CLOSED,
  GET_FILTER_IS_TOP,
  GET_FILTER_LABELS,
  GET_FILTER_SQUAD
} from "../actions/types";

const initialState = {
  isClosed: false,
  isTop: false,
  labels: [],
  squads: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FILTER_IS_CLOSED:
      return { ...state, isClosed: action.payload };
    case GET_FILTER_IS_TOP:
      return { ...state, isTop: action.payload };
    case GET_FILTER_LABELS:
      return { ...state, labels: action.payload };
    case GET_FILTER_SQUAD:
      return { ...state, squads: action.payload };
    default:
      return state;
  }
}
