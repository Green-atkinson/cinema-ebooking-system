import React from "react";

// Placeholder movie and ticket data for order summary (can be replaced with actual data from API)
const order = {
  tickets: [
    {
      movie: {
        title: "Spider-Man: No Way Home",
        description: "Peter Parker's life is turned upside down when his identity as Spider-Man is revealed.",
        releaseDate: "2021-12-17",
      },
      seat: "A1",
      price: 12,
    },
    {
      movie: {
        title: "Avatar: The Way of Water",
        description: "Jake Sully and Ney'tiri must navigate the dangerous waters of Pandora with their family.",
        releaseDate: "2022-12-16",
      },
      seat: "A2",
      price: 15,
    },
  ],
  totalPrice: 27,
};

export default function OrderSummaryPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h2 className="text-2xl font-bold">Order Summary</h2>
        <ul className="list-disc">
          {order.tickets.map((ticket, index) => (
            <li key={index} className="mb-4">
              <strong>{ticket.movie.title}</strong> - Seat: {ticket.seat}, Price: ${ticket.price} <br />
              <em>{ticket.movie.description}</em> <br />
              <strong>Release Date:</strong> {ticket.movie.releaseDate}
            </li>
          ))}
        </ul>
        <p className="text-xl font-semibold">
          <strong>Total Price:</strong> ${order.totalPrice}
        </p>
        <button className="p-2 bg-blue-500 text-white mt-4">Confirm & Continue Checkout</button>
      </main>
    </div>
  );
}
