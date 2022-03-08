import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationStyled>
        <div>
          <NavLink
            to="/"
            className="navigation__nav-links"
            activeClassName="navigation__nav-links-active"
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/characters"
            className="navigation__nav-links"
            activeClassName="navigation__nav-links-active"
          >
            Characters
          </NavLink>
          <NavLink to="/locations" className="navigation__nav-links">
            Locations
          </NavLink>
          <NavLink to="/episodes" className="navigation__nav-links">
            Episodes
          </NavLink>
        </div>
      </NavigationStyled>
    </NavigationContainer>
  );
};

export default Navigation;

const NavigationContainer = styled.div`
  box-shadow: rgb(0 0 0 / 5%) 0px 4px 13px;
  width: 100%;
  margin-bottom: 50px;
`;

const NavigationStyled = styled.nav`
  height: 80px;
  color: #000000;
  width: 100%;
  display: flex;
  justify-content: space-between;
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  align-items: center;


  .navigation__nav-links {
    text-decoration-line: none;
    color: black;
    font-size: 18px;
    margin-right: 25px;
    padding-bottom: 3px;
    font-weight: 400;

    &:hover {
      border-bottom: 2px solid #57bd38;
    }
  }
  .navigation__nav-links-active {
    color: #57bd38;
  }
`;
