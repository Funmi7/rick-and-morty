import { urls } from "./urls";
import { axiosGetConfig } from "./axiosConfig";

export const getCharacters = (pageNumber) => {
  return axiosGetConfig(`${urls.characters}?page=${pageNumber}`, null);
};

export const getCharactersByName = (name) => {
  return axiosGetConfig(`${urls.characters}?name=${name}`, null)
}


export const getCharactersByStatus = (status) => {
  return axiosGetConfig(`${urls.characters}?status=${status}`, null);
};

export const getCharactersBySpecies = (species) => {
  return axiosGetConfig(`${urls.characters}?species=${species}`, null);
};

export const getCharactersByGender = (gender) => {
  return axiosGetConfig(`${urls.characters}?gender=${gender}`, null);
};