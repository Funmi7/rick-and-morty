import React from "react";
import GeneralModal from "../GeneralModal";
import styled from "styled-components";

const CharacterModal = ({ modalOpen, closeModal, characterDetails }) => {
  const { gender, image, location, name, species, status, episode } =
    characterDetails;

  return (
    <GeneralModal modalOpen={modalOpen} closeModal={closeModal}>
      <CharacterModalStyled>
        <figure>
          <img src={image} alt="character pic" />
        </figure>
        <article>
          <h3>{name}</h3>
          <h4>{gender}</h4>
          <p>{species}</p>
          <p>{location?.name}</p>
          <p>{status}</p>
          <p>Appeared on {episode?.length} episodes</p>
        </article>
      </CharacterModalStyled>
    </GeneralModal>
  );
};

export default CharacterModal;

const CharacterModalStyled = styled.div`
  width: 500px;
  min-height: 300px;
  display: flex;
  align-items: center;
  padding: 0px 30px;

  figure {
    width: 40%;
    height: 100%;
    margin: 0px;
    img {
      border-radius: 8px;
      max-width: 100%;
    }
  }
  article{
    margin-left: 40px;
  h3, h4{
    margin-bottom: 15px;
  }
  p{
    font-size: 16px;
    font-weight: 300;
    padding-bottom: 10px;
  }
  }
`;
