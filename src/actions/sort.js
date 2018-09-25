import { GET_SORT_FIELD, GET_SORT_DIRECTION } from "./types";

export const getSortField = field => {
  return {
    type: GET_SORT_FIELD,
    payload: field
  };
};

export const getSortDirection = direction => {
  return {
    type: GET_SORT_DIRECTION,
    payload: direction
  };
};
