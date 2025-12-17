import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ title, description, posterURL, rating }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${title}`);
  };

  return (
    <div className="movie-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
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