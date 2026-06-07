import { useState, useEffect } from 'react';

export default function Admin({ onBack }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem('orders') || '[]'
    );

    setOrders(data);
  }, []);

  const updateStatus = (id, status) => {
    const updated = orders.map((order) =>
      order.id === id
        ? { ...order, status }
        : order
    );

    setOrders(updated);

    localStorage.setItem(
      'orders',
      JSON.stringify(updated)
    );
  };

  const revenue = orders.reduce(
    (total, order) =>
      total + order.totalCost,
    0
  );

  return (
    <div className="orders-container">
      <button
        className="back-btn"
        onClick={onBack}
      >
        ← Back
      </button>

      <h2 className="orders-title">
        Admin Dashboard
      </h2>

      <div className="admin-stats">
        <div className="stat-card">
          <h3>{orders.length}</h3>
          <p>Orders</p>
        </div>

        <div className="stat-card">
          <h3>₹{revenue}</h3>
          <p>Revenue</p>
        </div>
      </div>

      {orders.map((order) => (
        <div
          key={order.id}
          className="order-card"
        >
          <h3>{order.item}</h3>

          <p>{order.userId}</p>

          <p>
            ₹{order.totalCost}
          </p>

          <p>
            Status:
            {order.status}
          </p>

          <select
            value={order.status}
            onChange={(e) =>
              updateStatus(
                order.id,
                e.target.value
              )
            }
            className="form-input"
          >
            <option>
              Order Placed
            </option>

            <option>
              Processing
            </option>

            <option>
              Delivered
            </option>
          </select>
        </div>
      ))}
    </div>
  );
}