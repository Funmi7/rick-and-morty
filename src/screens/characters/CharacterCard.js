import React, { useState } from "react";
import styled from "styled-components";
import CharacterModal from "../modal/components/CharacterModal";

const CharacterCard = ({ characterData }) => {
  const { image, name, gender, species, status } = characterData;
  const [modalOpen, setModalOpen] = useState(false);
  const [characterDetails, setCharacterDetails] = useState({});

  const handleButtonClick = () => {
    setModalOpen(true);
    setCharacterDetails(characterData);
  };

  return (
    <>
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
        <button onClick={handleButtonClick}>See more details</button>
      </CharacterCardWrapper>
      <CharacterModal
        modalOpen={modalOpen}
        closeModal={() => setModalOpen(false)}
        characterDetails={characterDetails}
      />
    </>
  );
};

const CharacterCardWrapper = styled.section`
  border: 1px solid #d3d3d2;
  border-radius: 8px;
  width: 220px;
  min-height: 420px;
  position: relative;
  margin: 0px 5px 20px 5px;

  .characters__card__image-wrapper {
    height: 220px;
    width: 100%;
  }

  img {
    max-width: 100%;
    border-radius: 8px 8px 0px 0px;
  }
  .characters__card__text-wrapper {
    padding: 20px;
    position: relative;
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
    padding-bottom: 6px;
  }
  button {
    bottom: 20px;
    left: 20px;
    position: absolute;
    bottom: 20px;
    height: 30px;
    width: 85%;
    border-radius: 5px;
    border: 1px solid #57bd38;
    cursor: pointer;
    &:hover {
      background: #57bd38;
      color: #ffffff;
    }
  }

  @media (max-width: 463px) {
    width: 64%;
    min-height: 480px;
    .characters__card__image-wrapper {
      height: auto;
    }
  }
  @media (max-width: 385px) {
    width: 78%;
  }
`;

export default CharacterCard;
