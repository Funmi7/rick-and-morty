import { urls } from "./urls";
import { axiosGetConfig } from "./axiosConfig";

export const getCharacters = (pageNumber) => {
  return axiosGetConfig(`${urls.characters}?page=${pageNumber}`, null);
};
