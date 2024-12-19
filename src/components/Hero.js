import React from 'react';
import CardPage from './CardPage';
import { Link } from 'react-router';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Explore the Final Frontier</h1>
        <p>Experience the wonders of space travel with our cutting-edge technology and expert guides.</p>
        <Link to="/destination" className="cta-button">Check-out Destinations</Link>
      </div>
    </section>
  );
};

export default Hero;