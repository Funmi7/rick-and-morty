import React from "react";

export default function SearchForm(props) {

const  {onSearch, searchTerm} = props;

  return (
    <section className="search-form">
      <label htmlFor='nameInput'>Enter a Name to search: </label>
        <input onChange={onSearch} value={searchTerm} input id='searchInput' type='text'/>
    </section>
  );
}
