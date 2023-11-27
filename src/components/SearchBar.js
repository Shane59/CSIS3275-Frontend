import React, { useState } from "react";
import '../css/SearchBar.css';

const SearchBar = ({onSearch}) => {
  const [searchValue, setSearchValue] = useState();
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    onSearch(e.target.value);
  }
  return (
    <div>
      <input
        className="search-bar-input"
        type="text"
        placeholder="search with the name of tour"
        onChange={handleChange}/>
    </div>
  )
}

export default SearchBar;