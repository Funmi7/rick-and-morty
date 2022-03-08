import React from "react";
import styled from 'styled-components';

const CharacterCardStyle = styled.div`
  margin:0 auto;
  width: 250px;
  max-width: 100%;
  align-items: center;
  margin-top: 30px;
  margin-left: 3px;
  margin-right: 3px;
  background-color: black;
  .main-img {
  width: 100%;
    height: 250px; 
    img {
      width: 100%;
      height: 100%;
    }
}
  .textContent {
    margin-left: 20px;

    h3, p {
      color: white;
    }
  }
`;

export default function CharacterCard(props) {
  return (
<CharacterCardStyle>
    <div className="main-img">
      <img src={props.character.image} alt="" />
    </div>
    <div className="textContent">
      <h3>{props.character.name}</h3>
      <p>Specie: {props.character.species}</p>
      <p>Gender: {props.character.gender}</p>
    </div>
</CharacterCardStyle>
  )
  
}
