import { useState } from 'react';

import laptopImg from '../assets/products/laptop.png';
import cameraImg from '../assets/products/camera.png';
import chairImg from '../assets/products/chair.png';
import sofaImg from '../assets/products/sofa.png';
import projectorImg from '../assets/products/projector.png';
import monitorImg from '../assets/products/monitor.png';
import coolerImg from '../assets/products/cooler.png';
import keyboardImg from '../assets/products/keyboard.png';
import toolkitImg from '../assets/products/toolkit.png';

const ITEMS = [
  {
    id: 1,
    name: 'Laptop',
    category: 'Electronics',
    pricePerDay: 500,
    deposit: 1000,
    image: laptopImg,
  },
  {
    id: 2,
    name: 'Camera',
    category: 'Electronics',
    pricePerDay: 600,
    deposit: 1000,
    image: cameraImg,
  },
  {
    id: 3,
    name: 'Office Chair',
    category: 'Furniture',
    pricePerDay: 200,
    deposit: 500,
    image: chairImg,
  },
  {
    id: 4,
    name: 'Sofa',
    category: 'Furniture',
    pricePerDay: 300,
    deposit: 1500,
    image: sofaImg,
  },
  {
    id: 5,
    name: 'Projector',
    category: 'Electronics',
    pricePerDay: 700,
    deposit: 2000,
    image: projectorImg,
  },
  {
    id: 6,
    name: 'Monitor',
    category: 'Electronics',
    pricePerDay: 250,
    deposit: 800,
    image: monitorImg,
  },
  {
    id: 7,
    name: 'Air Cooler',
    category: 'Appliances',
    pricePerDay: 350,
    deposit: 1000,
    image: coolerImg,
  },
  {
    id: 8,
    name: 'Mechanical Keyboard',
    category: 'Electronics',
    pricePerDay: 150,
    deposit: 400,
    image: keyboardImg,
  },
  {
    id: 9,
    name: 'Tool Kit',
    category: 'Tools',
    pricePerDay: 180,
    deposit: 500,
    image: toolkitImg,
  },
];

export default function ItemList({ onSelect }) {
  const [search, setSearch] = useState('');

  const filteredItems = ITEMS.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className="section-title">
        Available Rentals
      </h2>

      <input
        type="text"
        placeholder="Search rentals..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="items-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="item-card"
              onClick={() => onSelect('item', item)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="item-image"
              />

              <h3 className="item-name">
                {item.name}
              </h3>

              <p className="item-category">
                {item.category}
              </p>

              <p className="item-price">
                ₹{item.pricePerDay}/day
              </p>

              <p className="item-deposit">
                Refundable Deposit:
                ₹{item.deposit}
              </p>

              <button className="btn-primary">
                View Details
              </button>
            </div>
          ))
        ) : (
          <p className="empty-message">
            No rentals found.
          </p>
        )}
      </div>
    </div>
  );
}