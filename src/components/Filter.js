import React from 'react';

const Filter = ({ titleFilter, setTitleFilter, ratingFilter, setRatingFilter }) => {
  return (
    <div className="filter-container">
      <div className="filter-group">
        <label>Filter by Title:</label>
        <input
          type="text"
          placeholder="Search movie title..."
          value={titleFilter}
          onChange={(e) => setTitleFilter(e.target.value)}
        />
      </div>
      
      <div className="filter-group">
        <label>Filter by Rating:</label>
        <input
          type="number"
          placeholder="Min rating (0-10)"
          min="0"
          max="10"
          step="0.1"
          value={ratingFilter}
          onChange={(e) => setRatingFilter(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Filter;