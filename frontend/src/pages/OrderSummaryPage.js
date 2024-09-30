import React from "react";
import "../styles/OrderSummaryPage.css";

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
  const handleGoBack = () => {
    window.history.back(); // This will take the user back to the previous page
  };

  return (
    <div className="order-summary-container">
      <main className="order-summary-content">
        <h2>Order Summary</h2>
        <ul>
          {order.tickets.map((ticket, index) => (
            <li key={index} className="ticket-item">
              <strong>{ticket.movie.title}</strong> - Seat: {ticket.seat}, Price: ${ticket.price} <br />
              <em>{ticket.movie.description}</em> <br />
              <strong>Release Date:</strong> {ticket.movie.releaseDate}
            </li>
          ))}
        </ul>
        <p className="total-price">
          <strong>Total Price:</strong> ${order.totalPrice}
        </p>
        <div className="button-group">
          <button className="confirm-button">Confirm & Continue Checkout</button>
          <button onClick={handleGoBack} className="go-back-button">Go Back</button>
        </div>
      </main>
    </div>
  );
}