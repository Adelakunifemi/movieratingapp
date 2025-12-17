import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function MovieDescription({ movies }) {
  const { title } = useParams();
  const navigate = useNavigate();
  
  const movie = movies.find(m => m.title === title);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate('/')} style={{ marginBottom: '20px', padding: '10px 20px', cursor: 'pointer' }}>
        Back to Home
      </button>
      <h1>{movie.title}</h1>
      <p><strong>Rating:</strong> {movie.rating}/10</p>
      <p><strong>Description:</strong> {movie.description}</p>
      
      <div style={{ marginTop: '20px' }}>
        <h2>Trailer</h2>
        <iframe
          width="560"
          height="315"
          src={movie.trailerLink}
          title={movie.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default MovieDescription;