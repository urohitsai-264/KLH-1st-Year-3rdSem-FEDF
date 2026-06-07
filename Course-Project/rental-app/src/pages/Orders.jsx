import { useState, useEffect } from 'react';
import OrderCard from '../components/OrderCard';

export default function Orders({
  user,
  onBack,
}) {
  const [orders, setOrders] =
    useState([]);

  useEffect(() => {
    const allOrders = JSON.parse(
      localStorage.getItem('orders') ||
        '[]'
    );

    const userOrders =
      allOrders.filter(
        (order) =>
          order.userId ===
          user.email
      );

    setOrders(userOrders);
  }, [user]);

  return (
    <div className="orders-container">
      <button
        className="back-btn"
        onClick={onBack}
      >
        ← Back
      </button>

      <h2 className="orders-title">
        My Orders
      </h2>

      {orders.length === 0 ? (
        <p>No Orders Yet</p>
      ) : (
        orders.map((order) => (
          <OrderCard
            key={order.id}
            order={order}
          />
        ))
      )}
    </div>
  );
}