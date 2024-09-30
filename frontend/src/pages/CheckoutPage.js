import React from "react";
import "../styles/CheckoutPage.css";

export default function CheckoutPage() {
  return (
    <div className="checkout-container">
      <main>
        <h2>Checkout</h2>
        <form>
          <label>Card Number:</label>
          <input type="text" name="cardNumber" required className="input-field" />
          <br />
          <label>Expiration Date:</label>
          <input type="text" name="expDate" required className="input-field" />
          <br />
          <label>CVV:</label>
          <input type="text" name="cvv" required className="input-field" />
          <br />
          <button type="submit" className="submit-button">Confirm Payment</button>
        </form>
      </main>
    </div>
  );
}