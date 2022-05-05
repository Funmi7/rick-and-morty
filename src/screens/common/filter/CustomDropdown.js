import React, { useState } from "react";
import styled from "styled-components";
import { dropdownCaret } from "../../../assets/Icons";

const CustomDropdown = ({ filterParamItems, setFilterParam, filterParam }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <CustomeDropdownWrap>
      <div
        onClick={() => setOpenDropdown(!openDropdown)}
        className="custom-dropdown__single-item"
      >
        <p>{filterParam}</p>
        <div>{dropdownCaret}</div>
      </div>
      {openDropdown && (
        <div className="custom-dropdown__dropdown-list">
          {filterParamItems.map((item) => (
            <p onClick={() => setFilterParam(item)}>{item}</p>
          ))}
        </div>
      )}
    </CustomeDropdownWrap>
  );
};

const CustomeDropdownWrap = styled.div`
  position: relative;
  width: 100%;

  .custom-dropdown__single-item {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-size: 16px;
      margin-right: 15px;
    }
  }
  .custom-dropdown__dropdown-list {
    position: absolute;
    top: 40px;
    background: rgb(255, 255, 255);
    border: 1px solid rgba(219, 220, 224, 0.5);
    box-shadow: rgb(64 25 109 / 7%) 15px 30px 40px;
    border-radius: 5px;
    width: 120px;
    min-height: 100px;
    z-index: 100;
    background: white;
    padding: 11px 10px 0px 16px;
    left: -7px;

    p {
      color: black;
      width: 100%;
      text-align: left;
      padding-bottom: 12px;
      font-size: 15px;
      font-weight: 300;
      cursor: pointer;

      &:hover {
        color: #57bd38;
      }
    }
  }
`;

export default CustomDropdown;
