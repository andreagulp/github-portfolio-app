import { SEARCH_PROJECT } from "./types";

export const searchFlavor = keyword => {
  return {
    type: SEARCH_PROJECT,
    payload: keyword
  };
};
