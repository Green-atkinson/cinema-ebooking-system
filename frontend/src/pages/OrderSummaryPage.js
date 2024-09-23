import React from "react";

export default function OrderSummaryPage() {
  // Example ticket data
  const order = {
    tickets: [
      { movie: "Inception", seat: "A1", price: 12 },
      { movie: "Inception", seat: "A2", price: 12 },
    ],
    totalPrice: 24,
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h2>Order Summary</h2>
        <ul>
          {order.tickets.map((ticket, index) => (
            <li key={index}>
              <strong>{ticket.movie}</strong> - Seat: {ticket.seat}, Price: ${ticket.price}
            </li>
          ))}
        </ul>
        <p><strong>Total Price:</strong> ${order.totalPrice}</p>
        <button className="p-2 bg-blue-500 text-white mt-4">Confirm & Continue Checkout</button>
      </main>
    </div>
  );
}
