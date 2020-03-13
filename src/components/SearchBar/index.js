import React, { useState } from 'react';
import './SearchBar.scss';

const SearchBar = ({ filterUsers }) => {
  const handleSearch = event => {
    filterUsers(event.target.value);
  };

  return (
    <div className="searchbar-input">
      <input
        type="text"
        placeholder="Search users by their first name"
        onChange={event => {
          handleSearch(event);
        }}
      ></input>
    </div>
  );
};

export default SearchBar;
