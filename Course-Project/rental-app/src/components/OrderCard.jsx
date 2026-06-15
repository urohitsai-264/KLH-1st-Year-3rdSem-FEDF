const STATUS = [
  'Order Placed',
  'Processing',
  'Delivered',
  'Return Requested',
  'Returned',
  'Refunded',
];

export default function OrderCard({ order }) {
  const requestReturn = () => {
    const orders = JSON.parse(
      localStorage.getItem('orders') || '[]'
    );

    const updated = orders.map((item) =>
      item.id === order.id
        ? {
            ...item,
            status: 'Return Requested',
          }
        : item
    );

    localStorage.setItem(
      'orders',
      JSON.stringify(updated)
    );

    window.location.reload();
  };

  return (
    <div className="order-card">
      <h3>{order.item}</h3>

      <p>
        Status:
        <strong> {order.status}</strong>
      </p>

      <p>Order ID: {order.id}</p>

      <p>Duration: {order.duration} days</p>

      <p>Total: ₹{order.totalCost}</p>

      <p>
        Delivery:
        {order.deliveryAddress},
        {order.city}
      </p>

      <p>
        Expected:
        {order.expectedDelivery}
      </p>

      {order.status === 'Delivered' && (
        <button
          className="btn-primary"
          onClick={requestReturn}
        >
          Request Return
        </button>
      )}

      {order.status === 'Returned' && (
        <p>
          Deposit Refund Initiated
        </p>
      )}

      {order.status === 'Refunded' && (
        <p>
          ✅ Deposit Refunded Successfully
        </p>
      )}

      <div className="timeline">
        {STATUS.map((status, index) => (
          <span
            key={index}
            className={
              STATUS.indexOf(order.status) >=
              index
                ? 'active'
                : ''
            }
          >
            {status}
          </span>
        ))}
      </div>
    </div>
  );
}