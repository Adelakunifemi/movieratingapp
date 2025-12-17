import React, { useState } from 'react';
import MovieList from './components/MovieList.jsx';
import Filter from './components/Filter';
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief who steals corporate secrets through dream-sharing technology.",
      posterURL: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400",
      rating: "8.8"
    },
    {
      title: "The Dark Knight",
      description: "Batman faces the Joker, a criminal mastermind wreaking havoc on Gotham.",
      posterURL: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400",
      rating: "9.0"
    },
    {
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole in space.",
      posterURL: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400",
      rating: "8.6"
    }
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const filteredMovies = movies.filter(movie => {
    const matchesTitle = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
    const matchesRating = ratingFilter === '' || parseFloat(movie.rating) >= parseFloat(ratingFilter);
    return matchesTitle && matchesRating;
  });

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <h1>My Movie App</h1>
      
      <div className="add-movie-container">
        <h2>Add New Movie</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const newMovie = {
            title: formData.get('title'),
            description: formData.get('description'),
            posterURL: formData.get('posterURL'),
            rating: formData.get('rating')
          };
          addMovie(newMovie);
          e.target.reset();
        }}>
          <input type="text" name="title" placeholder="Movie Title" required />
          <input type="text" name="description" placeholder="Description" required />
          <input type="url" name="posterURL" placeholder="Poster URL" required />
          <input type="number" name="rating" placeholder="Rating (0-10)" min="0" max="10" step="0.1" required />
          <button type="submit">Add Movie</button>
        </form>
      </div>

      <Filter
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;