import React from "react";

export default function OrderConfirmationPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h2>Order Confirmation</h2>
        <p>Your order has been confirmed!</p>
        <p>Thank you for booking your tickets with us.</p>
      </main>
    </div>
  );
}
