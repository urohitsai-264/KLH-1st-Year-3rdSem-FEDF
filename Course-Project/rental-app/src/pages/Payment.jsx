import { useState } from 'react';

export default function Payment({
  user,
  cart,
  deliveryData,
  onPaymentSuccess,
  onBack,
}) {
  const [method, setMethod] = useState('Card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [upiId, setUpiId] = useState('');

  const handlePayment = () => {
    if (method === 'Card' && (!cardNumber || !expiry || !cvv)) {
      alert('Enter card details');
      return;
    }

    if (method === 'UPI' && !upiId) {
      alert('Enter UPI ID');
      return;
    }

    const order = {
      id: Date.now(),
      userId: user.email,
      item: cart.name,
      duration: cart.duration,
      totalCost: cart.totalCost,
      deliveryAddress: deliveryData.address,
      city: deliveryData.city,
      paymentMethod: method,
      status: 'Order Placed',
      date: new Date().toLocaleDateString(),
      expectedDelivery: new Date(
        Date.now() + 3 * 24 * 60 * 60 * 1000
      ).toLocaleDateString(),
    };

    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    alert('Payment Successful');
    onPaymentSuccess();
  };

  return (
    <div className="payment-container">
      <button className="back-btn" onClick={onBack}>
        ← Back
      </button>

      <div className="payment-card">
        <h2>Payment Details</h2>
        <p>Amount: ₹{cart.totalCost}</p>

        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="payment-select"
        >
          <option value="Card">Card</option>
          <option value="UPI">UPI</option>
          <option value="COD">Cash On Delivery</option>
        </select>

        {method === 'Card' && (
          <>
            <input
              type="text"
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="payment-input"
            />

            <input
              type="text"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              className="payment-input"
            />

            <input
              type="password"
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="payment-input"
            />
          </>
        )}

        {method === 'UPI' && (
          <input
            type="text"
            placeholder="Enter UPI ID"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            className="payment-input"
          />
        )}

        <button className="payment-btn" onClick={handlePayment}>
          Pay Now
        </button>
      </div>
    </div>
  );
}