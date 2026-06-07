import { useState } from 'react';

export default function ItemDetail({
  item,
  onAddCart,
  onCheckout,
  onBack,
}) {
  const [duration, setDuration] =
    useState(1);

  const totalCost =
    item.pricePerDay * duration +
    item.deposit;

  const handleRent = () => {
    onAddCart({
      ...item,
      duration,
      rentalFee:
        item.pricePerDay * duration,
      totalCost,
    });

    onCheckout();
  };

  return (
    <div className="detail-container">
      <button
        className="back-btn"
        onClick={onBack}
      >
        ← Back
      </button>

      <div className="detail-content">
        <img
          src={item.image}
          alt={item.name}
          className="detail-product-image"
        />

        <div className="detail-info">
          <h1>{item.name}</h1>

          <p>{item.category}</p>

          <p>
            Price Per Day:
            ₹{item.pricePerDay}
          </p>

          <p>
            Deposit:
            ₹{item.deposit}
          </p>

          <input
            type="number"
            min="1"
            value={duration}
            onChange={(e) =>
              setDuration(
                Number(e.target.value)
              )
            }
            className="duration-input"
          />

          <h3>
            Total:
            ₹{totalCost}
          </h3>

          <button
            className="btn-checkout"
            onClick={handleRent}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}