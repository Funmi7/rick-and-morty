import React, { useState } from "react";
import styled from "styled-components";
import CustomeDropdown from "./CustomDropdown";

const CustomFilter = ({
  filterParamItems,
  setFilterParam,
  filterParam,
  handleSearchButtonClick,
  setSearchValue,
  searchValue,
}) => {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <CustomFilterStyled>
      {!openFilter ? (
        <button onClick={() => setOpenFilter(true)}>
          <span>+</span>Add Filter
        </button>
      ) : (
        <div className="filter-input">
          <button>
            <CustomeDropdown
              filterParamItems={filterParamItems}
              setFilterParam={setFilterParam}
              filterParam={filterParam}
            />
          </button>
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="custom-filter__filter-input-search"
            onClick={handleSearchButtonClick}
          >
            Search
          </button>
        </div>
      )}
    </CustomFilterStyled>
  );
};

export default CustomFilter;

const CustomFilterStyled = styled.div`
  button {
    background: #e9e9e9;
    width: 170px;
    height: 40px;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: #57bd38;
      color: white;
    }
    span {
      font-size: 20px;
      margin-right: 5px;
    }
  }
  .filter-input {
    width: 550px;
    height: 40px;
    display: flex;
    border: 1px solid #e9e9e9;
    border-radius: 8px;
    max-width: 100%;
    button {
      width: 150px;
      height: 100%;
      border-radius: 0px;

      &:hover {
        background: #e9e9e9;
        color: black;
      }
    }
    input {
      width: calc(100% - 200px);
      height: 95%;
      border: none;
      outline: none;
      padding-left: 15px;
    }
    .custom-filter__filter-input-search {
      width: 60px;
    }
    @media (max-width: 548px) {
      width: 100%;
    }
    @media (max-width: 375px) {
      button {
        width: 100px;
      }
      input {
        width: calc(100% - 100px);
      }
    }
  }
`;
