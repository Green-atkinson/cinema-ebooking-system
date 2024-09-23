import React from "react";

export default function TrailerEmbed({ trailerUrl }) {
  return (
    <div className="my-4">
      <iframe
        width="560"
        height="315"
        src={trailerUrl}
        title="Movie Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
