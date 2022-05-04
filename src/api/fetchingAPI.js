import { urls } from "./urls";
import { axiosGetConfig } from "./axiosConfig";

export const getCharacters = (pageNumber) => {
  return axiosGetConfig(`${urls.characters}?page=${pageNumber}`, null);
};

export const getCharactersByName = (name) => {
  return axiosGetConfig(`${urls.characters}?name=${name}`, null);
};

export const getCharactersByStatus = (status) => {
  return axiosGetConfig(`${urls.characters}?status=${status}`, null);
};

export const getCharactersBySpecies = (species) => {
  return axiosGetConfig(`${urls.characters}?species=${species}`, null);
};

export const getCharactersByGender = (gender) => {
  return axiosGetConfig(`${urls.characters}?gender=${gender}`, null);
};

export const getLocations = (pageNumber) => {
  return axiosGetConfig(`${urls.locations}?page=${pageNumber}`, null);
};

export const getLocationsByName = (name) => {
  return axiosGetConfig(`${urls.locations}?name=${name}`, null);
};

export const getLocationsByType = (type) => {
  return axiosGetConfig(`${urls.locations}?type=${type}`, null);
};

export const getLocationsByDimension = (dimension) => {
  return axiosGetConfig(`${urls.locations}?dimension=${dimension}`, null);
};
