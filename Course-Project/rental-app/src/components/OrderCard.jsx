const STATUS = [
  'Order Placed',
  'Processing',
  'Delivered',
];

export default function OrderCard({
  order,
}) {
  return (
    <div className="order-card">
      <h3>{order.item}</h3>

      <p>
        Status:
        <strong>
          {' '}
          {order.status}
        </strong>
      </p>

      <p>
        Order ID:
        {order.id}
      </p>

      <p>
        Duration:
        {order.duration} days
      </p>

      <p>
        Total:
        ₹{order.totalCost}
      </p>

      <p>
        Delivery:
        {order.deliveryAddress},
        {order.city}
      </p>

      <p>
        Expected:
        {order.expectedDelivery}
      </p>

      <div className="timeline">
        {STATUS.map(
          (status, index) => (
            <span
              key={index}
              className={
                STATUS.indexOf(
                  order.status
                ) >= index
                  ? 'active'
                  : ''
              }
            >
              {status}
            </span>
          )
        )}
      </div>
    </div>
  );
}