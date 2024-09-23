import React from 'react';

const SelectMoviePage = () => {
  const movies = [
    { id: 1, title: "Spider-Man: No Way Home", releaseDate: "2021-12-17" },
    { id: 2, title: "Avatar: The Way of Water", releaseDate: "2022-12-16" },
  ];

  return (
    <div className="min-h-screen p-8">
      <h2 className="text-2xl font-bold mb-4">Select a Movie</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id} className="mb-4">
            <strong>{movie.title}</strong> - Release Date: {movie.releaseDate} <br />
            <button className="p-2 bg-blue-500 text-white mt-2">Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectMoviePage;
