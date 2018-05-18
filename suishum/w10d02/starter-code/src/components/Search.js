import React from 'react';

const Search = ({ newSearch, handleChange, handleSubmit }) => {
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Search for a gif here.."
          value={newSearch}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
