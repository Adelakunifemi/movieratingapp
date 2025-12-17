import React from 'react';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="movie-card">
      <img 
        src={posterURL} 
        alt={title}
        className="movie-poster"
      />
      <div className="movie-info">
        <div className="movie-header">
          <h3>{title}</h3>
          <span className="rating">⭐ {rating}</span>
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;