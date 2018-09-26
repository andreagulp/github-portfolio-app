import { GET_FILTER_IS_CLOSED, GET_FILTER_IS_TOP } from "./types";

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
