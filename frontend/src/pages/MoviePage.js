import React from 'react';

const MoviePage = () => {
  // Sample movie data, in a real scenario, this would be fetched from an API
  const movie = {
    title: "Inception",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    releaseDate: "2010-07-16",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0", // Embed a YouTube trailer link
  };

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <p><strong>Release Date:</strong> {movie.releaseDate}</p>
      
      {/* Embedded YouTube Trailer */}
      <div>
        <iframe
          width="560"
          height="315"
          src={movie.trailerUrl}
          title="Movie Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <br />
      
      {/* Button to book the movie */}
      <button onClick={() => alert("Redirect to booking page")}>
        Book Tickets
      </button>
    </div>
  );
};

export default MoviePage;
