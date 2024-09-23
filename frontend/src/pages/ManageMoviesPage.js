import React, { useState } from 'react';

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
    <div className="min-h-screen p-8">
      <h2 className="text-2xl font-bold mb-4">Manage Movies</h2>
      <button onClick={handleAddMovie} className="p-2 bg-green-500 text-white mb-4">Add New Movie</button>
      <ul>
        {movies.map(movie => (
          <li key={movie.id} className="mb-4">
            <strong>{movie.title}</strong> - Release Date: {movie.releaseDate} <br />
            <button onClick={() => handleEditMovie(movie.id)} className="p-2 bg-yellow-500 text-white mr-2">Edit</button>
            <button onClick={() => handleDeleteMovie(movie.id)} className="p-2 bg-red-500 text-white">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageMoviesPage;
