import React from 'react';
import '../styles/SelectMoviePage.css';

const SelectMoviePage = () => {
  const movies = [
    { id: 1, title: "Spider-Man: No Way Home", releaseDate: "2021-12-17" },
    { id: 2, title: "Avatar: The Way of Water", releaseDate: "2022-12-16" },
  ];

  const handleGoBack = () => {
    window.history.back(); // Navigate to the previous page
  };

  return (
    <div className="select-movie-container">
      <h2 className="select-movie-title">Select a Movie</h2>
      <ul className="movie-list">
        {movies.map(movie => (
          <li key={movie.id} className="movie-item">
            <strong>{movie.title}</strong> - Release Date: {movie.releaseDate} <br />
            <button className="select-button">Select</button>
          </li>
        ))}
      </ul>
      <button className="go-back-button" onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default SelectMoviePage;