import {
  GET_FILTER_IS_CLOSED,
  GET_FILTER_IS_TOP,
  GET_FILTER_LABELS
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
