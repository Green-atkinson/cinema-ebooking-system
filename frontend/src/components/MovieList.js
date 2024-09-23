import React from "react";
import MovieDetail from "./MovieDetail"; // Importing the movie detail component

// Placeholder movie data; this will eventually come from an API or database
const movies = [
  { id: 1, title: "Spider-Man: No Way Home", description: "Peter Parker's life is turned upside down when his identity as Spider-Man is revealed.", releaseDate: "2021-12-17", isRunning: true },
  { id: 2, title: "Avatar: The Way of Water", description: "Jake Sully and Ney'tiri must navigate the dangerous waters of Pandora with their family.", releaseDate: "2022-12-16", isRunning: false },
];

export default function MovieList() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Currently Running Movies</h2>
      {movies
        .filter((movie) => movie.isRunning)
        .map((movie) => (
          <MovieDetail key={movie.id} movie={movie} />
        ))}
      
      <h2 className="text-2xl font-bold mt-8 mb-4">Coming Soon Movies</h2>
      {movies
        .filter((movie) => !movie.isRunning)
        .map((movie) => (
          <MovieDetail key={movie.id} movie={movie} />
        ))}
    </div>
  );
}
