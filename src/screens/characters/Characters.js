import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getCharacters } from "../../api/fetchingAPI";
import CharacterCard from "./CharacterCard";
import { Title } from "../common/Title";
import Pagination from "../common/pagination/Pagination";

const CharactersPage = () => {
  const [charactersData, setCharactersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersCount, setCharactersCount] = useState(0);

  const indexOfLastTransaction = currentPage * 10;
  const indexOfFirstTransaction = indexOfLastTransaction - 10 + 1;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setPageNumber(pageNumber);
  };

  useEffect(() => {
    const getCharactersData = async () => {
      setLoading(true);
      try {
        const { data } = await getCharacters(pageNumber);
        setLoading(false);
        console.log(data);
        setCharactersData(data.results);
        setCharactersCount(data.info.count);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getCharactersData();
  }, [pageNumber]);

  return (
    <>
      <CharactersContainer>
        <Title text="Characters" />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="characters__main__list-wrapper">
            {charactersData &&
              charactersData.map((characterData, index) => (
                <CharacterCard key={index} {...{ characterData }} />
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
  padding: 0px 20px 60px 0px;
  .characters__main__list-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export default CharactersPage;

// created: "2017-11-04T18:50:21.651Z"
// episode: (51) ['https://rickandmortyapi.com/api/episode/1', 'https://rickandmortyapi.com/api/episode/2', 'https://rickandmortyapi.com/api/episode/3', 'https://rickandmortyapi.com/api/episode/4', 'https://rickandmortyapi.com/api/episode/5', 'https://rickandmortyapi.com/api/episode/6', 'https://rickandmortyapi.com/api/episode/7', 'https://rickandmortyapi.com/api/episode/8', 'https://rickandmortyapi.com/api/episode/9', 'https://rickandmortyapi.com/api/episode/10', 'https://rickandmortyapi.com/api/episode/11', 'https://rickandmortyapi.com/api/episode/12', 'https://rickandmortyapi.com/api/episode/13', 'https://rickandmortyapi.com/api/episode/14', 'https://rickandmortyapi.com/api/episode/15', 'https://rickandmortyapi.com/api/episode/16', 'https://rickandmortyapi.com/api/episode/17', 'https://rickandmortyapi.com/api/episode/18', 'https://rickandmortyapi.com/api/episode/19', 'https://rickandmortyapi.com/api/episode/20', 'https://rickandmortyapi.com/api/episode/21', 'https://rickandmortyapi.com/api/episode/22', 'https://rickandmortyapi.com/api/episode/23', 'https://rickandmortyapi.com/api/episode/24', 'https://rickandmortyapi.com/api/episode/25', 'https://rickandmortyapi.com/api/episode/26', 'https://rickandmortyapi.com/api/episode/27', 'https://rickandmortyapi.com/api/episode/28', 'https://rickandmortyapi.com/api/episode/29', 'https://rickandmortyapi.com/api/episode/30', 'https://rickandmortyapi.com/api/episode/31', 'https://rickandmortyapi.com/api/episode/32', 'https://rickandmortyapi.com/api/episode/33', 'https://rickandmortyapi.com/api/episode/34', 'https://rickandmortyapi.com/api/episode/35', 'https://rickandmortyapi.com/api/episode/36', 'https://rickandmortyapi.com/api/episode/37', 'https://rickandmortyapi.com/api/episode/38', 'https://rickandmortyapi.com/api/episode/39', 'https://rickandmortyapi.com/api/episode/40', 'https://rickandmortyapi.com/api/episode/41', 'https://rickandmortyapi.com/api/episode/42', 'https://rickandmortyapi.com/api/episode/43', 'https://rickandmortyapi.com/api/episode/44', 'https://rickandmortyapi.com/api/episode/45', 'https://rickandmortyapi.com/api/episode/46', 'https://rickandmortyapi.com/api/episode/47', 'https://rickandmortyapi.com/api/episode/48', 'https://rickandmortyapi.com/api/episode/49', 'https://rickandmortyapi.com/api/episode/50', 'https://rickandmortyapi.com/api/episode/51']
// gender: "Male"
// id: 2
// image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
// location: {name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3'}
// name: "Morty Smith"
// origin: {name: 'unknown', url: ''}
// species: "Human"
// status: "Alive"
// type: ""
// url: "https://rickandmortyapi.com/api/character/2"
