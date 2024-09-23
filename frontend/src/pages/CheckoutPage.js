import React from "react";

export default function CheckoutPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h2>Checkout</h2>
        <form>
          <label>Card Number:</label>
          <input type="text" name="cardNumber" required className="border p-2" />
          <br />
          <label>Expiration Date:</label>
          <input type="text" name="expDate" required className="border p-2" />
          <br />
          <label>CVV:</label>
          <input type="text" name="cvv" required className="border p-2" />
          <br />
          <button type="submit" className="p-2 bg-blue-500 text-white">Confirm Payment</button>
        </form>
      </main>
    </div>
  );
}
