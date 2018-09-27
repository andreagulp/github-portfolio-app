import {
  GET_FILTER_IS_CLOSED,
  GET_FILTER_IS_TOP,
  GET_FILTER_LABELS,
  GET_FILTER_SQUAD
} from "./types";

export const getFilterIsClosed = isClosed => {
  return {
    type: GET_FILTER_IS_CLOSED,
    payload: isClosed
  };
};
export const getFilterIsTop = isTop => {
  return {
    type: GET_FILTER_IS_TOP,
    payload: isTop
  };
};
export const getFilterLabels = labels => {
  return {
    type: GET_FILTER_LABELS,
    payload: labels
  };
};
export const getFilterSquad = squad => {
  return {
    type: GET_FILTER_SQUAD,
    payload: squad
  };
};
