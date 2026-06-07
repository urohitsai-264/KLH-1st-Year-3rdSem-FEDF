import { useState } from 'react';

export default function DeliveryForm({ onSubmit }) {
  const [delivery, setDelivery] = useState({
    address: '',
    city: '',
    phone: '',
    pincode: '',
  });

  const handleChange = (e) => {
    setDelivery({
      ...delivery,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!delivery.address || !delivery.city || !delivery.phone) {
      alert('Please fill all fields');
      return;
    }

    onSubmit(delivery);
  };

  return (
    <div className="form-section">
      <h3>Delivery Address</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="address"
          placeholder="Street Address"
          value={delivery.address}
          onChange={handleChange}
          className="form-input"
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={delivery.city}
          onChange={handleChange}
          className="form-input"
          required
        />

        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={delivery.pincode}
          onChange={handleChange}
          className="form-input"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={delivery.phone}
          onChange={handleChange}
          className="form-input"
          required
        />

        <button 
          type="submit" 
          className="btn-submit"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
