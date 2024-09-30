import React from "react";
import '../styles/SelectSeatsPage.css';

export default function SelectSeatsPage() {
  const seats = [
    { seatNumber: "A1", isAvailable: true },
    { seatNumber: "A2", isAvailable: false },
    { seatNumber: "A3", isAvailable: true },
  ];

  const handleGoBack = () => {
    window.history.back(); // Navigate to the previous page
  };

  return (
    <div className="select-seats-container">
      <h2 className="select-seats-title">Select Your Seats</h2>
      <div className="seats-grid">
        {seats.map((seat, index) => (
          <button
            key={index}
            disabled={!seat.isAvailable}
            className={`seat-button ${seat.isAvailable ? 'available' : 'unavailable'}`}
          >
            {seat.seatNumber}
          </button>
        ))}
      </div>
      <button className="go-back-button" onClick={handleGoBack}>Go Back</button>
    </div>
  );
}