import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  getEpisdoes,
  getEpisodesByEpisode,
  getEpisodesByName,
} from "../../api/fetchingAPI";
import CustomFilter from "../common/filter/CustomFilter";
import Pagination from "../common/pagination/Pagination";
import { Title } from "../common/Title";
import { LocationsContainer } from "../locations/Locations";
import EpisodeCard from "./EpisodeCard";

const filterParamItems = ["Name", "Episode"];

const Episodes = () => {
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [episodesData, setEpisodesData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [episodesCount, setEpisodesCount] = useState(0);

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
      const { data } = await getEpisodesByName(searchValue);
      setLoading(true);
      try {
        setLoading(false);
        setEpisodesData(data.results);
        setEpisodesCount(data.info.count);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else if (filterParam === "Episode") {
      const { data } = await getEpisodesByEpisode(searchValue);
      setLoading(true);
      try {
        setLoading(false);
        setEpisodesData(data.results);
        setEpisodesCount(data.info.count);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const getEpisodesData = async () => {
      setLoading(true);
      try {
        const { data } = await getEpisdoes(pageNumber);
        setLoading(false);
        setEpisodesData(data.results);
        setEpisodesCount(data.info.count);
      } catch (error) {
        setLoading(false);
      }
    };
    if (searchValue === "") {
      getEpisodesData();
    }
  }, [pageNumber, searchValue]);

  return (
    <LocationsContainer>
      <div className="locations__heading-wrapper">
        <Title text="Episodes" />
        <CustomFilter
          filterParamItems={filterParamItems}
          setFilterParam={setFilterParam}
          filterParam={filterParam}
          handleSearchButtonClick={handleSearchButtonClick}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
      </div>
      <div className="locations__card-wrap">
        {episodesData.map((episodeData, index) => (
          <EpisodeCard key={index} {...{ episodeData }} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        charactersCount={episodesCount}
        paginate={paginate}
        indexOfFirstTransaction={indexOfFirstTransaction}
        indexOfLastTransaction={indexOfLastTransaction}
      />
    </LocationsContainer>
  );
};

export default Episodes;
