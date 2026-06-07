import DeliveryForm from '../components/DeliveryForm';

export default function Checkout({
  user,
  cart,
  onProceedToPayment,
  onBack,
}) {
  const handleSubmit = (delivery) => {
    if (!user) {
      alert('Please login first');
      return;
    }

    onProceedToPayment(delivery);
  };

  return (
    <div className="checkout-container">
      <button className="back-btn" onClick={onBack}>
        ← Back
      </button>

      <h2>Checkout</h2>

      <div className="summary-box">
        <h3>Order Summary</h3>

        <p><strong>{cart.name}</strong></p>

        <p>Duration: {cart.duration} days</p>

        <p>Rental Fee: ₹{cart.rentalFee}</p>

        <p>Deposit: ₹{cart.deposit}</p>

        <h3>Total: ₹{cart.totalCost}</h3>
      </div>

      <DeliveryForm onSubmit={handleSubmit} />
    </div>
  );
}