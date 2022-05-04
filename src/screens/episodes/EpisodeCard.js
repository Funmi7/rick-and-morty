import React from "react";
import { LocationCardStyled } from "../locations/LocationCard";

const EpisodeCard = ({ episodeData }) => {
  const { name, air_date, episode } = episodeData;

  return (
    <LocationCardStyled>
      <h4>{name}</h4>
      <p>{air_date}</p>
      <p>{episode}</p>
    </LocationCardStyled>
  );
};

export default EpisodeCard;
