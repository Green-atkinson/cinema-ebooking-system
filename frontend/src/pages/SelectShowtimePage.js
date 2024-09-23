import React from 'react';

const SelectShowtimePage = () => {
  const showtimes = [
    { time: "12:00 PM", isAvailable: true },
    { time: "3:00 PM", isAvailable: true },
    { time: "6:00 PM", isAvailable: false },
  ];

  return (
    <div className="min-h-screen p-8">
      <h2 className="text-2xl font-bold mb-4">Select Showtime</h2>
      <div className="flex flex-wrap gap-4">
        {showtimes.map((showtime, index) => (
          <button
            key={index}
            disabled={!showtime.isAvailable}
            className={`p-2 ${showtime.isAvailable ? 'bg-blue-500' : 'bg-gray-500'} text-white`}
          >
            {showtime.time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectShowtimePage;
