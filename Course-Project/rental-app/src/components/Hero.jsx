import heroImage from '../assets/hero.jpg';

export default function Hero({ onShopClick }) {
  return (
    <section className="hero">
      <div className="hero-content">

        <div className="hero-left">
          <h1 className="hero-title">
            Rent Anything You Need
          </h1>

          <p className="hero-subtitle">
            Electronics, Furniture,
            Tools & More
          </p>

          <button
            className="hero-btn"
            onClick={onShopClick}
          >
            Browse Rentals
          </button>
        </div>

        <div className="hero-right">
          <img
            src={heroImage}
            alt="RentEase"
            className="hero-image"
          />
        </div>

      </div>
    </section>
  );
}