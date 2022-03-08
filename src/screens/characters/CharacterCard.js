import React from "react";
import styled from "styled-components";

const CharacterCard = ({ gender, image, name, species, status }) => {
  return (
    <CharacterCardWrapper>
      <div className="characters__card__image-wrapper">
        <img src={image} alt={`${name} pic`} />
      </div>
      <div className="characters__card__text-wrapper">
        <h4>{name}</h4>
        <p>{gender}</p>
        <p>{species}</p>
        <p>{status}</p>
      </div>
    </CharacterCardWrapper>
  );
};

const CharacterCardWrapper = styled.section`
  /* flex-basis: 27%; */
  border: 1px solid #d3d3d2;
  border-radius: 8px;
  background: #f4f4f4;
  margin-bottom: 20px;
  width: 220px;

  .characters__card__image-wrapper {
    height: 220px;
  }

  img {
    max-width: 100%;
    border-radius: 8px 8px 0px 0px;
  }
  .characters__card__text-wrapper {
    padding: 10px;
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  h4 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
    font-weight: 300;
    padding-bottom: 4px;
  }
  button {
    background: #57bd38;
  }
`;

export default CharacterCard;
