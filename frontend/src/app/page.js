import React from "react";
import Image from "next/image";
import MovieList from "../components/MovieList"; 
import Header from "../components/Header";
import Footer from "../components/Footer";
import TrailerEmbed from "../components/TrailerEmbed";


export default function Home() {

   const trailerUrl = "https://www.youtube.com/embed/JfVOs4VSpmA"; // Example: Spider-Man: No Way Home Trailer

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Welcome to the Cinema E-Booking System</h1>


        {/* MovieList component to render the movie list */}
        <MovieList />

        {/* TrailerEmbed component to render the trailer */}
        <h2 className="text-2xl font-bold mt-8">Watch the Latest Trailer</h2>
        <TrailerEmbed trailerUrl={trailerUrl} /> {/* Embed the trailer */}

        {/* Footer component to render the footer */}
        <Footer/>
      </main>
    </div>
  );
}
