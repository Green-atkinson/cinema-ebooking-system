import React, { useState } from 'react';
import '../styles/ManageMoviesPage.css';

const ManageMoviesPage = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: "Spider-Man: No Way Home", releaseDate: "2021-12-17" },
    { id: 2, title: "Avatar: The Way of Water", releaseDate: "2022-12-16" },
  ]);

  const handleAddMovie = () => {
    // Logic for adding a movie
  };

  const handleEditMovie = (id) => {
    // Logic for editing a movie
  };

  const handleDeleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  return (
    <div className="manage-movies-container">
      <h2>Manage Movies</h2>
      <button onClick={handleAddMovie} className="add-button">Add New Movie</button>
      <ul className="movie-list">
        {movies.map(movie => (
          <li key={movie.id} className="movie-item">
            <strong>{movie.title}</strong> - Release Date: {movie.releaseDate} <br />
            <button onClick={() => handleEditMovie(movie.id)} className="edit-button">Edit</button>
            <button onClick={() => handleDeleteMovie(movie.id)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageMoviesPage;