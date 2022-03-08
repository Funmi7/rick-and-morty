import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';


const charactersAPI = 'https://rickandmortyapi.com/api/character/?page=2'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    const getCharacters = () => {
      axios
      .get(charactersAPI)
      .then(response => {
        setCharacters(response.data.results)
        console.log(response.data)
      })
      .catch(error => {
        console.log('Error', error)
      })
    }
    getCharacters();
  }, []);

  const onSearch = e => {
    setSearchTerm(e.target.value)

    let characterToFilter = [];

    characterToFilter = characters.filter(character => {
      return character.name.includes(e.target.value)
    })

    setFilteredCharacters(characterToFilter)
  }

  let charactersToShow = characters;

  if(searchTerm) {
    charactersToShow = filteredCharacters;
  }
  else {
    charactersToShow = characters;
  }

  return (
    <>
    <SearchForm onSearch={onSearch} searchTerm={searchTerm}/>
    <section className="character-list grid-view">
      {
        charactersToShow.map(newCharacter => {
          return (
            <CharacterCard character={newCharacter}/>
          )
        })
      }
    </section>
    </>
  );
}
