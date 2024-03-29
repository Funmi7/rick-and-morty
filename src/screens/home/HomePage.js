import React from "react";
import styled from "styled-components";
import homeBg from "../../assets/home-bg.jpg";
import {useHistory} from "react-router-dom"

const HomePage = () => {
  const history = useHistory();
  return (
    <HomePageStyled>
      <h3>Welcome to a Rick and Morty Fan page</h3>
      <p>Welcome to the ultimate fan site!</p>
      <button onClick={() => history.push("/characters")}>Check Characters now</button>
    </HomePageStyled>
  );
};

export default HomePage;

export const HomePageStyled = styled.section`
  width: 100%;
  height: calc(100vh - 80px);
  background-image: url(${homeBg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: inset 2000px 0 0 0 rgba(0, 0, 0, 0.5);
  border-color: rgba(0, 0, 0, 1);
  padding: 20px;
  h3 {
    color: #ffffff;
    font-size: 56px;
    font-weight: bold;
    margin-bottom: 50px;
  }
  p {
    color: #ffffff;
    font-size: 20px;
    margin-bottom: 50px;
  }

  button {
    height: 60px;
    width: 300px;
    border-radius: 8px;
    background: #ffffff;
    font-size: 16px;
    max-width: 100%;
    cursor: pointer;
    &:hover {
      background: #57bd38;
      color: #ffffff;
    }
  }
  @media (max-width: 330px) {
  }
`;
