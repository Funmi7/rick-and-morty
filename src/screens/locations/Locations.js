import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  getLocations,
  getLocationsByDimension,
  getLocationsByName,
  getLocationsByType,
} from "../../api/fetchingAPI";
import CustomFilter from "../common/filter/CustomFilter";
import Pagination from "../common/pagination/Pagination";
import { Title } from "../common/Title";
import LocationCard from "./LocationCard";

const filterParamItems = ["Name", "Type", "Dimension"];

const Locations = () => {
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [locationsData, setLocationsData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [locationsCount, setLocationsCount] = useState(0);

  const [filterParam, setFilterParam] = useState(filterParamItems[0]);
  const [searchValue, setSearchValue] = useState("");

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setPageNumber(pageNumber);
  };

  const indexOfLastTransaction = currentPage * 10;
  const indexOfFirstTransaction = indexOfLastTransaction - 10 + 1;

  const handleSearchButtonClick = async () => {
    if (filterParam === "Name") {
      const { data } = await getLocationsByName(searchValue);
      setLoading(true);
      try {
        setLoading(false);
        setLocationsData(data.results);
        setLocationsCount(data.info.count);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else if (filterParam === "Type") {
      const { data } = await getLocationsByType(searchValue);
      setLoading(true);
      try {
        setLoading(false);
        setLocationsData(data.results);
        setLocationsCount(data.info.count);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else if (filterParam === "Dimension") {
      const { data } = await getLocationsByDimension(searchValue);
      setLoading(true);
      try {
        setLoading(false);
        setLocationsData(data.results);
        setLocationsCount(data.info.count);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const getLocationsData = async () => {
      setLoading(true);
      try {
        const { data } = await getLocations(pageNumber);
        setLoading(false);
        setLocationsData(data.results);
        setLocationsCount(data.info.count);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    if (searchValue === "") {
      getLocationsData();
    }
  }, [pageNumber, searchValue]);

  return (
    <LocationsContainer>
      <div className="locations__heading-wrapper">
        <Title text="Locations" />
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
        <p>Loading...</p>
      ) : (
        <div className="locations__card-wrap">
          {locationsData.map((locationData, index) => (
            <LocationCard key={index} {...{ locationData }} />
          ))}
        </div>
      )}
      <Pagination
        currentPage={currentPage}
        charactersCount={locationsCount}
        paginate={paginate}
        indexOfFirstTransaction={indexOfFirstTransaction}
        indexOfLastTransaction={indexOfLastTransaction}
      />
    </LocationsContainer>
  );
};

export default Locations;

export const LocationsContainer = styled.section`
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  padding: 50px 20px 60px 20px;

  .locations__card-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 463px) {
      justify-content: center;
    }
  }
  .locations__heading-wrapper {
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
