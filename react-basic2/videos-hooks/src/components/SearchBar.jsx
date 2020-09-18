import React, { useState } from "react";

const SearchBar = ({ onSearchSubmit }) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();

    onSearchSubmit(term);
  };

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };


  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
