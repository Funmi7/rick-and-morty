import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const MobileMenu = ({ open }) => {
  return (
    <MobileMenuStyled openStyled={open}>
      <div>
        <div className="mobile-navigation__link-wrap">
          <NavLink
            to="/"
            className="navigation__nav-links"
            activeClassName="navigation__nav-links-active"
            exact
          >
            Home
          </NavLink>
        </div>
        <div className="mobile-navigation__link-wrap">
          <NavLink
            to="/characters"
            className="navigation__nav-links"
            activeClassName="navigation__nav-links-active"
          >
            Characters
          </NavLink>
        </div>
        <div className="mobile-navigation__link-wrap">
          <NavLink
            to="/locations"
            className="navigation__nav-links"
            activeClassName="navigation__nav-links-active"
          >
            Locations
          </NavLink>
        </div>
        <div className="mobile-navigation__link-wrap">
          <NavLink
            to="/episodes"
            className="navigation__nav-links"
            activeClassName="navigation__nav-links-active"
          >
            Episodes
          </NavLink>
        </div>
      </div>
    </MobileMenuStyled>
  );
};

export default MobileMenu;

export const MobileMenuStyled = styled.div`
  display: none;
  flex-direction: column;
  background: #ffffff;
  transform: ${({ openStyled }) =>
    openStyled ? "translateX(0)" : "translateX(-100%)"};
  min-height: 200vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  width: 270px;
  z-index: 100;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media (max-width: 499px) {
    display: flex;
  }
  .layout__menu-nav-links {
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
    color: #000000;
    text-decoration-line: none;
    margin-right: 24px;
    cursor: pointer;
    position: relative;
  }
  .layout__menu-nav-links-active {
    color: #f3a712;
    text-decoration-line: none;
  }
  p {
    font-weight: bold;
    margin-top: 15px;
    font-size: 14px;
  }
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
  .mobile-navigation__link-wrap{
    padding-bottom: 20px;
  }
`;
