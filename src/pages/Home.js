import {Link} from 'react-router-dom';
import pic from '../assets/home.jpg';
import "../styles/home.css";

export default function Home() {
  return(
    <div className="home-page-conatiner">
      <header className=" hero-section">
        <div className="hero-text">
          <h1 className="hero-title">Welcome to Sweet & Sip</h1>
          <p className="hero-subtitle">Indulge in our handmade desserts and perfectly brewed drinks.
              Treat yourself to something sweet today!
          </p>
          <div className="hero-actions">
            <Link to="/sweets" className="cta-button"> Order Sweets</Link>
            <span className="divider"></span>
            <Link to="/drinks" className="cta-button-outline"> Order Drinks</Link>
          </div>
        </div>
        <div className="hero-image-container">
          <img src={pic} alt="Sweet and Sip Signature" className="hero-img" />
        </div>
      </header>
      <section className="features-section">
        <div className="feature-card">
          <h2>Fresh Ingredients</h2>
          <p>Baked fresh daily with premium chocolate and real fruit.</p>
        </div>
        <div className="feature-card">
          <h2>Artisan Drinks</h2>
          <p>From rich matcha to cold frappes, crafted by our experts baristas.</p>
        </div>

        <div className="feature-card">
          <h2>Fast Delivery</h2>
          <p>Craving a midnight snacks? We deliver straight to your door.</p>

        </div>
      </section>

    </div>
  );
}