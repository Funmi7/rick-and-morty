import React from "react";
import styled from "styled-components";
import { nextIcon, previousIcon } from "../../../assets/Icons";
import { DOTS, usePagination } from "./usePagination";

const Pagination = ({
  siblingCount = 1,
  charactersCount,
  paginate,
  currentPage,
  indexOfFirstTransaction,
  indexOfLastTransaction,
  pageSize = 20,
}) => {
  const paginationRange = usePagination({
    currentPage,
    charactersCount,
    siblingCount,
    pageSize,
  });
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }
  let lastPage = paginationRange[paginationRange.length - 1];

  const onNext = () => {
    paginate(currentPage + 1);
  };

  const onPrevious = () => {
    paginate(currentPage - 1);
  };

  return (
    <PaginationContainer
      firstDisable={currentPage === 1}
      lastDisable={currentPage === lastPage}
    >
      <div className="dashboard__pagination__left-side">
        <p className="dashboard__pagination__show-text">Showing: </p>
        <p className="dashboard__pagination__total-count">
          {indexOfFirstTransaction} -{" "}
          {indexOfLastTransaction >= charactersCount
            ? charactersCount
            : indexOfLastTransaction}{" "}
          of {charactersCount}
        </p>
      </div>
      <div className="dashboard__pagination__right-side">
        <>
          {paginationRange.map((pageNumber) => {
            if (pageNumber === DOTS) {
              return <p key={pageNumber}>&#8230;</p>;
            }
            return (
              <p
                key={pageNumber}
                className={
                  pageNumber === currentPage
                    ? "dashboard__pagination__count-active"
                    : "dashboard__pagination__count-inactive"
                }
                onClick={() => paginate(pageNumber)}
              >
                {pageNumber}
              </p>
            );
          })}
        </>
        <span className="dashboard__pagination__previous" onClick={onPrevious}>
          {previousIcon}
        </span>
        <span className="dashboard__pagination__next" onClick={onNext}>
          {nextIcon}
        </span>
      </div>
    </PaginationContainer>
  );
};

export const PaginationContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 37px;
  justify-content: space-between;
  .dashboard__pagination__left-side {
    display: flex;
    align-items: center;
  }

  .dashboard__pagination__show-text {
    font-weight: bold;
    font-size: 11px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: #091540;
  }
  .dashboard__pagination__total-count {
    display: flex;
    align-items: center;
    margin-left: 23.93px;
    font-weight: bold;
    font-size: 11px;
    line-height: 24px;
    text-transform: uppercase;
    color: #8b90a0;
  }
  .dashboard__pagination__right-side {
    display: flex;
    align-items: center;

    .dashboard__pagination__previous {
      margin-left: 23.59px;
      margin-right: 17.23px;
      cursor: ${({ firstDisable }) =>
        firstDisable ? "not-allowed" : "pointer"};
      opacity: ${({ firstDisable }) => (firstDisable ? "0.1" : "1")};
    }
    .dashboard__pagination__next {
      cursor: ${({ lastDisable }) => (lastDisable ? "not-allowed" : "pointer")};
      opacity: ${({ lastDisable }) => (lastDisable ? "0.1" : "1")};
    }
    p {
      font-weight: bold;
      font-size: 11px;
      line-height: 18px;
      display: flex;
      margin-right: 10px;
    }
    .dashboard__pagination__count-inactive {
      color: #57bd38;
      cursor: pointer;
    }
    .dashboard__pagination__count-active {
      color: #8b90a0;
    }
  }
  @media (max-width: 383px) {
    flex-direction: column;
    align-items: flex-start;

    .dashboard__pagination__right-side {
      margin-top: 10px;
    }
  }
`;

export default Pagination;
