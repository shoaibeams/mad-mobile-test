import React, { useState } from 'react';
import './SearchBar.scss';

const SearchBar = ({ filterUsers }) => {
  const [searchPhrase, setSearchPhrase] = useState('');

  const handleSearch = event => {
    setSearchPhrase(event.target.value);
    // console.log('search', event.target.value);
    filterUsers(event.target.value);
  };

  return (
    <div className="searchbar-input">
      <input
        type="text"
        placeholder="Search users here..."
        onChange={event => {
          handleSearch(event);
        }}
      ></input>
    </div>
  );
};

export default SearchBar;
