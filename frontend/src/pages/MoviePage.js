import React from "react";
import Image from "next/image";

export default function MoviePage() {
  const movie = {
    title: "Spider-Man: No Way Home",
    description: "Peter Parker's life is turned upside down when his identity as Spider-Man is revealed.",
    releaseDate: "2021-12-17",
    trailerUrl: "https://www.youtube.com/embed/JfVOs4VSpmA", // Spider-Man: No Way Home Trailer
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h1 className="text-4xl font-bold">{movie.title}</h1>
        <p className="text-lg">{movie.description}</p>
        <p className="text-md font-semibold">
          <strong>Release Date:</strong> {movie.releaseDate}
        </p>

        {/* Embedded Trailer */}
        <iframe
          width="560"
          height="315"
          src={movie.trailerUrl}
          title="Movie Trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <br/>

        {/* Book Tickets Button */}
        <button className="p-2 bg-blue-500 text-white mt-4 hover:bg-blue-700">
          Book Tickets
        </button>
      </main>
    </div>
  );
}
