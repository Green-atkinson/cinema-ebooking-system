import React from 'react';
import '../styles/SelectShowtimePage.css';

const SelectShowtimePage = () => {
  const showtimes = [
    { time: "12:00 PM", isAvailable: true },
    { time: "3:00 PM", isAvailable: true },
    { time: "6:00 PM", isAvailable: false },
  ];

  const handleGoBack = () => {
    window.history.back(); // Navigate to the previous page
  };

  return (
    <div className="select-showtime-container">
      <h2 className="select-showtime-title">Select Showtime</h2>
      <div className="showtime-grid">
        {showtimes.map((showtime, index) => (
          <button
            key={index}
            disabled={!showtime.isAvailable}
            className={`showtime-button ${showtime.isAvailable ? 'available' : 'unavailable'}`}
          >
            {showtime.time}
          </button>
        ))}
      </div>
      <button className="go-back-button" onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default SelectShowtimePage;