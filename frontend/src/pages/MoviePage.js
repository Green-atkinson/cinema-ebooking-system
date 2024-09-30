import React from "react";
import "../styles/MoviePage.css";

export default function MoviePage() {
  const movie = {
    title: "Spider-Man: No Way Home",
    description: "Peter Parker's life is turned upside down when his identity as Spider-Man is revealed.",
    releaseDate: "2021-12-17",
    trailerUrl: "https://www.youtube.com/embed/JfVOs4VSpmA", // Spider-Man: No Way Home Trailer
  };

  return (
    <div className="movie-page-container">
      <main className="movie-content">
        <h1>{movie.title}</h1>
        <p className="movie-description">{movie.description}</p>
        <p className="movie-release-date">
          <strong>Release Date:</strong> {movie.releaseDate}
        </p>

        {/* Embedded Trailer */}
        <iframe
          className="movie-trailer"
          src={movie.trailerUrl}
          title="Movie Trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>

        {/* Book Tickets Button */}
        <button className="book-button">
          Book Tickets
        </button>
      </main>
    </div>
  );
}