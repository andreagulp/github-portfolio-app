import { GET_SEARCH_KEYWORD } from "./types";

export const getSearchKeyword = keyword => {
  return {
    type: GET_SEARCH_KEYWORD,
    payload: keyword
  };
};
