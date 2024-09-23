import React from "react";

export default function MovieDetail({ movie }) {
  return (
    <div className="border p-4 mb-4 w-full sm:w-1/2">
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p><strong>Release Date:</strong> {movie.releaseDate}</p>
      <button className="p-2 bg-blue-500 text-white mt-4">Book Movie</button>
    </div>
  );
}
