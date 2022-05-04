import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  getCharacters,
  getCharactersByGender,
  getCharactersByName,
  getCharactersBySpecies,
  getCharactersByStatus,
} from "../../api/fetchingAPI";
import CharacterCard from "./CharacterCard";
import { Title } from "../common/Title";
import Pagination from "../common/pagination/Pagination";
import CustomFilter from "../common/filter/CustomFilter";

const filterParamItems = ["Name", "Status", "Species", "Gender"];

const CharactersPage = () => {
  const [charactersData, setCharactersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersCount, setCharactersCount] = useState(0);
  const [filterParam, setFilterParam] = useState(filterParamItems[0]);
  const [searchValue, setSearchValue] = useState("");

  const indexOfLastTransaction = currentPage * 10;
  const indexOfFirstTransaction = indexOfLastTransaction - 10 + 1;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setPageNumber(pageNumber);
  };

  const handleSearchButtonClick = async () => {
    if (filterParam === "Name") {
      const { data } = await getCharactersByName(searchValue);
      setLoading(true);
      try {
        setLoading(false);
        setCharactersData(data.results);
        setCharactersCount(data.info.count);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else if (filterParam === "Status") {
      const { data } = await getCharactersByStatus(searchValue);
      setLoading(true);
      try {
        setLoading(false);
        setCharactersData(data.results);
        setCharactersCount(data.info.count);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else if (filterParam === "Species") {
      const { data } = await getCharactersBySpecies(searchValue);
      setLoading(true);
      try {
        setLoading(false);
        setCharactersData(data.results);
        setCharactersCount(data.info.count);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else if (filterParam === "Gender") {
      const { data } = await getCharactersByGender(searchValue);
      setLoading(true);
      try {
        setLoading(false);
        setCharactersData(data.results);
        setCharactersCount(data.info.count);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const getCharactersData = async () => {
      setLoading(true);
      try {
        const { data } = await getCharacters(pageNumber);
        setLoading(false);
        setCharactersData(data.results);
        setCharactersCount(data.info.count);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    if (searchValue === "") {
      getCharactersData();
    }
  }, [pageNumber, searchValue]);

  return (
    <>
      <CharactersContainer>
        <div className="characters__heading-wrapper">
          <Title text="Characters" />
          <CustomFilter
            filterParamItems={filterParamItems}
            setFilterParam={setFilterParam}
            filterParam={filterParam}
            handleSearchButtonClick={handleSearchButtonClick}
            setSearchValue={setSearchValue}
            searchValue={searchValue}
          />
        </div>
        {loading ? (
          <Skeleton count={20} />
        ) : (
          <div className="characters__main__list-wrapper">
            {charactersData &&
              charactersData.map((characterData, index) => (
                <CharacterCard
                  key={index}
                  {...{ characterData }}
                />
              ))}
          </div>
        )}
        <Pagination
          currentPage={currentPage}
          charactersCount={charactersCount}
          paginate={paginate}
          indexOfFirstTransaction={indexOfFirstTransaction}
          indexOfLastTransaction={indexOfLastTransaction}
        />
      </CharactersContainer>
    </>
  );
};

const CharactersContainer = styled.div`
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  padding: 50px 20px 60px 20px;
  .characters__main__list-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 463px) {
      justify-content: center;
    }
  }
  .characters__heading-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    @media (max-width: 720px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export default CharactersPage;
