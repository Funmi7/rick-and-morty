import React from "react";
import styled from "styled-components";

const Burger = ({ toggleMenu, open }) => {
  return (
    <StyledBurger onClick={toggleMenu} openStyled={open}>
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;

export const StyledBurger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  margin-left: 20px;

  &:focus {
    outline: none;
  }

  div {
    width: 21px;
    height: 2px;
    background: black;
    border-radius: 8px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ openStyled }) =>
        openStyled ? "rotate(34deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      transform: ${({ openStyled }) =>
        openStyled ? "rotate(-34deg)" : "rotate(0)"};
    }
  }
`;