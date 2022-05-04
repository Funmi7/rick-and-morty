import React from "react";
import styled from "styled-components";

const LocationCard = ({ locationData }) => {
  const { name, type, dimension} = locationData;

  return (
    <LocationCardStyled>
      <h4>{name}</h4>
      <p>{type}</p>
      <p>{dimension}</p>
    </LocationCardStyled>
  );
};

export const LocationCardStyled = styled.article`
  width: 200px;
  height: 200px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 0px 5px 20px 20px;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  h4 {
    font-size: 18px;
    margin-bottom: 20px;
    text-align: center;
  }
  p {
    font-size: 14px;
    font-weight: 300;
    padding-bottom: 6px;
    text-align: center;
    margin-bottom: 5px;
  }
`;

export default LocationCard;
