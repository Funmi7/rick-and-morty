import React from "react";
import styled from "styled-components";

export const Title = ({ text }) => {
  return (
    <h2>
      <TitleStyled>{text}</TitleStyled>
    </h2>
  );
};
const TitleStyled = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
`;
