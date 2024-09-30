import React from "react";
import "../styles/OrderConfirmationPage.css";

export default function OrderConfirmationPage() {
  return (
    <div className="order-confirmation-container">
      <main className="order-confirmation-content">
        <h2>Order Confirmation</h2>
        <p className="confirmation-message">Your order has been confirmed!</p>
        <p className="thank-you-message">Thank you for booking your tickets with us.</p>
      </main>
    </div>
  );
}
