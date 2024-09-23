import React from "react";

export default function SelectSeatsPage() {
  const seats = [
    { seatNumber: "A1", isAvailable: true },
    { seatNumber: "A2", isAvailable: false },
    { seatNumber: "A3", isAvailable: true },
  ];

  return (
    <div className="min-h-screen p-8">
      <h2 className="text-2xl font-bold mb-4">Select Your Seats</h2>
      <div className="flex flex-wrap gap-4">
        {seats.map((seat, index) => (
          <button
            key={index}
            disabled={!seat.isAvailable}
            className={`p-2 ${seat.isAvailable ? 'bg-green-500' : 'bg-gray-500'} text-white`}
          >
            {seat.seatNumber}
          </button>
        ))}
      </div>
    </div>
  );
}
