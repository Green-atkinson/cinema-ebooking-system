import React from 'react';

const CheckoutPage = () => {
  return (
    <div>
      <h2>Checkout</h2>
      <form>
        <label>Card Number:</label>
        <input type="text" name="cardNumber" required />
        <br />
        <label>Expiration Date:</label>
        <input type="text" name="expDate" required />
        <br />
        <label>CVV:</label>
        <input type="text" name="cvv" required />
        <br />
        <button type="submit">Confirm Payment</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
